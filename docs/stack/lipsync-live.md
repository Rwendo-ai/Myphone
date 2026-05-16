# Live Lip-Sync Engine (Premium Tier)

**Status:** Planning / Pre-build
**Decision date:** 2026-05-16
**Owner:** Rwendo core
**Tier:** Premium subscription (access entitlement, ~$12/mo) + pay-as-you-go AI credits for usage
**Companion to:** `lipsync-atlas.md` (free tier), `elevenlabs.md`, `elevenlabs-conversational.md`

---

## 1. What this is, in one paragraph

The live lip-sync engine is Rwendo's **premium-tier** experience: real-time, photo-realistic, full-head-motion lip-sync delivered as a WebRTC audio+video stream during conversation with a 2D companion. Unlike the free-tier atlas engine (mouth-region sprite swap on a still portrait), the live engine generates fresh video frames per audio chunk through a diffusion-based talking-head model, producing natural head sway, expression changes, and co-articulated mouth motion.

Architecture: **Pipecat** orchestrates the loop (STT → LLM → TTS → lip-sync engine → WebRTC). **Daily.co** is the WebRTC transport. **ElevenLabs Scribe** is STT (no Deepgram). **ElevenLabs TTS** is voice. The **lip-sync engine** is the swappable piece: **Simli (paid passthrough) in v1, self-hosted MuseTalk in v2.** Hallo3 stays as an optional quality-upgrade path.

---

## 2. Pricing model — read this before anything else

The live tier is **two revenue lines**, not one:

| Line | What it pays for | How it's billed |
|---|---|---|
| **Premium subscription** (~$12/mo) | The *right* to use live mode. Entitlement only. | RevenueCat, monthly recurring |
| **AI credits** (pay-as-you-go) | The *cost* of every minute spent in live mode (GPU + APIs + WebRTC) | Pre-purchased credits, consumed at session time |

**The sub does not cover usage. Credits do.**

This means:
- A user paying $12/mo for premium with no credits gets zero live minutes. They have access but no fuel.
- A heavy user paying for many credits funds their own compute, with our markup as margin.
- The sub is access fee + churn anchor. Credits are the gross-profit engine.

Every cost number in this doc should be read as **what a user pays in credits per minute**, not **what we lose if they use it more**. Don't model "loss per heavy user" — model "credit price per minute" and check whether users will tolerate it.

---

## 3. Decision summary

### What we are building
- A **Pipecat-based voice+video pipeline** running on our infrastructure
- **Daily.co WebRTC rooms** as the audio+video transport between client and pipeline
- A **lip-sync FrameProcessor** abstraction that can call either Simli (v1) or self-hosted MuseTalk (v2) — designed as a one-day swap, not a rewrite
- **GPU worker infrastructure** for the self-hosted phase
- **Credit metering**: every minute of live mode debits user's AI credit balance at a published rate
- Client-side integration so the live tier replaces (not augments) the atlas renderer for premium users mid-session

### What we are not building (here)
- The atlas engine (separate doc, free tier)
- A custom lip-sync model from scratch (parked as future R&D)
- A standalone STT pipeline (use ElevenLabs Scribe via Pipecat)
- 3D character live lip-sync (Rwen + non-human archetypes stay on client-side morph targets — no GPU needed)

### Engine choice: MuseTalk for self-hosted v1

| Engine | Quality vs Sync-2 | GPU req | Our cost / minute | User credit price / min (2.5× markup) |
|---|---|---|---|---|
| **MuseTalk** | ~70% | A10 (~$0.50–0.75/hr) | ~$0.0057 | **~$0.014/min** ✅ |
| **Hallo3** | ~85% | A100 (~$1.50–2.50/hr) | ~$0.013 | ~$0.033/min |
| **Simli (paid passthrough)** | ~75% | n/a | ~$0.07 | **~$0.18/min** (interim) |

The decision is **MuseTalk for self-hosted v1** because:
1. **Lowest per-minute credit cost to users** (~$0.014/min) — best adoption, lowest friction
2. **Same revenue per minute** at any markup tier; lower base means more profitable spread without scaring users
3. Mature, MIT-licensed, fits on A10 (3× cheaper than A100)

Hallo3 isn't disqualified by margin — it's deferred because **users would burn credits ~2.4× faster for ~15% quality gain**. That trade only makes sense for a future "Studio" tier where users opt in to faster credit burn for higher quality.

### Why Simli is fine for v1 (the interim)
At $0.18/min user-facing price, a 30-min session costs the user ~$5.40 in credits. Steep, but **we don't lose money** — users pay for their own Simli minutes. The reason to move off Simli is **competitive credit pricing**, not our margin. Once self-hosted MuseTalk lands, we drop credit price ~12× (from $0.18/min to $0.014/min) and live mode becomes affordable for daily use. That's the unlock.

---

## 4. Architecture

### 4.1 High-level data flow

```
┌─────────────────────────────────────────────────────────────┐
│  Rwendo client (React Native + Expo)                        │
│  - Daily.co RN SDK                                          │
│  - Receives audio + video via WebRTC                        │
│  - Renders 720p video in companion view                     │
│  - Shows live credit-burn meter ("≈ 14 credits/min")        │
└──────────────────┬──────────────────────────────────────────┘
                   │  WebRTC (audio in, audio+video out)
                   │
┌──────────────────▼──────────────────────────────────────────┐
│  Daily.co room (one per active session)                     │
└──────────────────┬──────────────────────────────────────────┘
                   │  WebRTC
                   │
┌──────────────────▼──────────────────────────────────────────┐
│  Pipecat worker (one process per active session)            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ DailyTransport (input/output)                        │   │
│  │ → ElevenLabs Scribe (STT)                            │   │
│  │ → Context Aggregator (Supabase memory)               │   │
│  │ → Anthropic Claude Haiku 4.5 (LLM)                   │   │
│  │ → ElevenLabs TTS (with character timestamps)         │   │
│  │ → LipsyncProcessor (Simli OR self-hosted MuseTalk)   │   │
│  │ → DailyTransport (sends audio + video back)          │   │
│  │ → Credit Meter (debits balance every 5s)             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                   ▲
                   │
┌──────────────────┴──────────────────────────────────────────┐
│  Supabase                                                   │
│  - Companion data (portrait, persona, conversation memory)  │
│  - Credit balance + ledger                                  │
│  - Entitlement check via RevenueCat sync                    │
│  - Conversation summary writeback                           │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 The LipsyncProcessor abstraction

A Pipecat custom `FrameProcessor` that takes audio frames + reference portrait, produces video frames at 30fps. Single interface, two implementations:

```python
class LipsyncProcessor(FrameProcessor):
    def __init__(self, backend: LipsyncBackend, portrait_url: str): ...
    async def process_frame(self, frame: Frame, direction) -> None: ...
    # emits VideoFrame downstream at 30fps, passes audio through

class SimliBackend(LipsyncBackend):  # v1: paid API
    async def lipsync(self, audio_chunk, portrait) -> video_chunk: ...

class MuseTalkBackend(LipsyncBackend):  # v2: self-hosted
    async def lipsync(self, audio_chunk, portrait) -> video_chunk: ...
```

The rest of the pipeline is unchanged when we swap backends. **One-day migration when the time comes.**

### 4.3 Session lifecycle
1. **Premium user taps "Start live conversation"**
   - Client calls `supabase/functions/start-live-session`
   - Edge function checks: (a) RevenueCat entitlement `live_lipsync` active, (b) credit balance ≥ minimum threshold (e.g. 10 credits)
   - On fail: show paywall or credit top-up sheet, do not spawn worker
   - On pass: spawn Pipecat worker (or pull from warm pool — see Section 6.4), create Daily.co room, return room URL + token + current credit burn rate to client
2. **Client joins room via Daily.co RN SDK**
3. **Conversation runs**
   - Worker debits user's credit balance every 5s (1/12 of a minute granularity for fair billing)
   - If balance hits zero mid-session → session ends gracefully with 10s warning + fallback to atlas
4. **Session ends** — conversation summary written, worker shutdown, Daily room destroyed, final credit ledger entry committed

### 4.4 Fallback to atlas
If the premium worker fails to spin up within 10s, GPU capacity is exhausted, or the user's credits run out mid-session, the client **silently falls back to the atlas engine** and notifies the user gently ("Live mode unavailable — switched to standard. Top up credits / try again in a few minutes."). This is the single most important resilience pattern in this system.

---

## 5. Credit cost model

### 5.1 Per-minute cost breakdown (our side)

| Cost line | Simli v1 (per min) | MuseTalk v2 (per min) |
|---|---|---|
| Lip-sync engine | $0.0700 | $0.0057 |
| ElevenLabs Scribe (STT) | $0.0050 | $0.0050 |
| ElevenLabs TTS | $0.0050 | $0.0050 |
| Anthropic Claude Haiku | $0.0020 | $0.0020 |
| Daily.co WebRTC | $0.0010 | $0.0010 |
| Pipecat worker (VM share) | $0.0007 | $0.0007 |
| **Our cost per minute** | **~$0.085** | **~$0.014** |

### 5.2 User-facing credit price (with 2.5× markup)

| Tier | Credit price / min | Gross margin |
|---|---|---|
| Simli v1 (interim) | ~$0.21 | 60% |
| **MuseTalk v2 (target)** | **~$0.035** | **60%** |
| Hallo3 (future Studio tier) | ~$0.08 | 60% |

**A 30-min daily user on MuseTalk burns ~$31.50/month in credits.**
**A 30-min daily user on Simli burns ~$189/month in credits.**

So the user-facing economics flip when MuseTalk goes live: live mode goes from "occasional luxury" to "daily-affordable." That's the product transition.

### 5.3 Credit packaging (rough)

| Pack | Credits | Price | Equivalent MuseTalk minutes | Equivalent Simli minutes |
|---|---|---|---|---|
| Starter | 1,000 | $9.99 | ~285 min | ~48 min |
| Plus | 3,000 | $24.99 | ~857 min | ~143 min |
| Heavy | 10,000 | $69.99 | ~2,857 min | ~476 min |

(Credits also used for AI tutoring features, voice cloning, etc — not just live mode. Cross-feature credit economy is documented separately.)

### 5.4 Premium subscription pricing
**Recommendation: $11.99/mo or $12.99/mo for entitlement to live mode** + companion customisation slots + premium voice variants. This is the access fee. Credits cover usage on top.

We can revisit subscription pricing without touching credit economics — they're independent levers.

---

## 6. Phased build plan

### Phase 1 — Pipecat worker + Simli integration (3–4 weeks)
**Goal:** premium tier shipping with Simli backend. Real users, real product, real credit metering.

- [ ] Provision Pipecat dev environment (Python 3.11+, Pipecat SDK)
- [ ] Wire `DailyTransport` for audio+video transport
- [ ] Wire `ElevenLabsSTTService` (Scribe) for STT — confirm timestamped output
- [ ] Wire `AnthropicLLMService` with Claude Haiku 4.5
- [ ] Wire `ElevenLabsTTSService` with character timestamps enabled
- [ ] Build `SimliLipsyncProcessor` — calls Simli WebRTC API, receives video frames
- [ ] Build entitlement + credit-balance gate (Supabase Edge Function)
- [ ] Build **credit meter** that debits balance every 5s of session time
- [ ] Build Pipecat worker spawner (Docker container, one per session)
- [ ] Build session telemetry (start, end, duration, credit-debit, errors)
- [ ] Build fallback-to-atlas logic on worker failure OR credit exhaustion
- [ ] Build client UI: live-credit-burn meter, low-balance warning, mid-session top-up prompt

**Deliverables:**
- `worker/` (Pipecat Python service, Dockerised)
- `supabase/functions/start-live-session/index.ts`
- `supabase/functions/end-live-session/index.ts`
- `supabase/functions/debit-credits/index.ts`
- `lib/live/use-live-session.ts` (RN client hook)
- `components/CompanionLiveView.tsx` (drop-in replacement for atlas view when premium)
- `components/CreditMeter.tsx` (in-session burn indicator)

### Phase 2 — Premium UX polish & launch (2 weeks)
**Goal:** premium tier publicly available.

- [ ] RevenueCat products configured: subscription (`live_lipsync_premium`) + credit IAPs
- [ ] Paywall + credit-purchase flows
- [ ] Pricing page copy that clearly separates "access" from "usage"
- [ ] In-conversation indicator: "Live mode • ~14 credits/min remaining"
- [ ] Mid-session low-balance warning at 10% threshold
- [ ] App Store / Play Store screenshots showing live mode
- [ ] Onboarding tooltip: atlas vs live + how credits work

### Phase 3 — Self-hosted MuseTalk worker (8–10 weeks)
**Goal:** drop Simli, run MuseTalk on our own GPUs. **This is the unlock that makes live mode affordable for daily use.**

- [ ] Build MuseTalk inference server (FastAPI + Triton or custom)
- [ ] Container with MuseTalk weights + dependencies
- [ ] Streaming protocol: WebSocket or gRPC, audio chunks in → video chunks out
- [ ] Latency tuning: target <200ms first-frame, <100ms steady-state per chunk
- [ ] GPU autoscaling on RunPod/Lambda (manual capacity first, autoscale later)
- [ ] Build `MuseTalkLipsyncProcessor` (the FrameProcessor swap-in)
- [ ] A/B test: 10% of premium sessions routed to MuseTalk, 90% to Simli for 2 weeks
- [ ] Quality monitor: user complaints, session abandonment, qualitative feedback
- [ ] Ramp to 100% MuseTalk once quality bar met
- [ ] **Drop credit price for live mode from ~$0.21/min to ~$0.035/min** (announce as the win)
- [ ] Cut Simli contract once stable

**Deliverables:**
- `worker/lipsync-server/` (Python, MuseTalk inference)
- Updated `worker/main.py` with `MuseTalkLipsyncProcessor` wired in
- GPU infrastructure runbook
- A/B test report
- Public announcement / blog: "Live mode is now 12× cheaper"

### Phase 4 — Quality polish (4–6 weeks)
**Goal:** close the gap from ~70% to ~80% of Sync-2 quality.

- [ ] Add GFPGAN or CodeFormer face-restoration post-processing
- [ ] Lip-closure refinement (small model that re-renders B/M/P frames when MuseTalk misses closure)
- [ ] Temporal smoothing across frames
- [ ] Side-profile detection — if portrait isn't front-on, fall back to atlas
- [ ] Latency optimisation pass: target <100ms end-to-end audio-to-pixel
- [ ] Distil MuseTalk to a smaller, faster variant (research task)

### Phase 5 — Shona-specific fine-tune (after Shona core voice live)
**Goal:** lip-sync correct for Shona phonemes (no English-trained model does this).

- [ ] Record / licence Shona-speaking face dataset (~50 speakers × ~10 min each)
- [ ] Fine-tune MuseTalk on the Shona dataset
- [ ] Validate with native speakers
- [ ] **This is the moat.** Sync, HeyGen, Tavus can't do this in any reasonable timeframe.

### Phase 6 — Hallo3 evaluation (optional, 4–6 weeks)
**Goal:** decide if a "Studio" tier (heavier credit burn, flagship quality) ships.

- [ ] Stand up Hallo3 inference on A100
- [ ] Quality A/B against MuseTalk-polished
- [ ] Credit-price model for Studio tier (~$0.08/min)
- [ ] Ship as opt-in toggle inside premium ("Use Studio quality — burns credits faster")
- [ ] Or don't, based on data

**Total Phase 1+2: ~5–6 weeks → premium tier live with Simli backend.**
**Total Phase 3+4: ~12–16 weeks → self-hosted MuseTalk replaces Simli, credit price drops 12×.**

---

## 7. Engine choice in depth: why MuseTalk, why not Hallo3 (yet)

### Why MuseTalk for v1
- **Cheapest credit burn to users** (~$0.014/min our cost → ~$0.035/min user price at 2.5× markup)
- **Mature**: Tencent ARC, deployed in production by multiple teams, 6+ months ahead of Hallo3 in deployment hardening
- **MIT licence**: cleanly commercial-usable
- **Real-time on A10**: 30fps with one stream, ~2 streams per A10 with batching. A10 is ~3× cheaper than A100.
- **Known integration patterns**: Pipecat reference implementations exist for similar streaming inference

### Why Hallo3 stays parked
- **Newer**: less production hardening
- **A100 required**: 3× the infra cost (passes through to ~2.4× the user credit price)
- **Quality gain is real (~70% → 85% of Sync-2)** but the *perceived* gain in a typical companion conversation is smaller than the benchmark suggests
- **Right home is a Studio tier**: users who want flagship quality opt in to burn credits faster. Doesn't belong as the default.

### Alternatives we'd consider
- **EchoMimic V2** (Ant Group, Apache-2.0): similar quality to MuseTalk with stronger gesture support
- **JoyVASA**: lighter, faster, lower quality — possible "Eco" tier if users want even cheaper credits
- **LivePortrait**: companion model for expression/head-pose layer on top of MuseTalk
- **Custom fine-tune of any base model**: real moat once we have Shona dataset (Phase 5)

---

## 8. Pipecat configuration sketch

```python
# worker/main.py (abridged)
from pipecat.pipeline.pipeline import Pipeline
from pipecat.transports.services.daily import DailyTransport, DailyParams
from pipecat.services.elevenlabs import ElevenLabsSTTService, ElevenLabsTTSService
from pipecat.services.anthropic import AnthropicLLMService
from rwendo.lipsync.simli_processor import SimliLipsyncProcessor
from rwendo.lipsync.musetalk_processor import MuseTalkLipsyncProcessor  # Phase 3
from rwendo.billing.credit_meter import CreditMeter

async def run_session(room_url: str, token: str, companion: Companion, user_id: str):
    transport = DailyTransport(
        room_url=room_url,
        token=token,
        bot_name="Rwen",
        params=DailyParams(
            audio_in_enabled=True,
            audio_out_enabled=True,
            camera_out_enabled=True,
            camera_out_width=720,
            camera_out_height=720,
            transcription_enabled=False,
        ),
    )

    stt = ElevenLabsSTTService(api_key=ELEVENLABS_KEY, model="scribe_v1")
    llm = AnthropicLLMService(api_key=ANTHROPIC_KEY, model="claude-haiku-4-5-20251001")
    tts = ElevenLabsTTSService(
        api_key=ELEVENLABS_KEY,
        voice_id=companion.voice_id,
        with_timestamps=True,
    )

    backend = os.getenv("LIPSYNC_BACKEND", "simli")
    if backend == "simli":
        lipsync = SimliLipsyncProcessor(
            api_key=SIMLI_KEY,
            face_id=companion.simli_face_id,
        )
    else:
        lipsync = MuseTalkLipsyncProcessor(
            server_url=MUSETALK_SERVER_URL,
            portrait_url=companion.portrait_url,
        )

    credit_meter = CreditMeter(
        user_id=user_id,
        backend=backend,
        debit_interval_s=5,
        on_balance_exhausted=lambda: transport.end_session("credit_exhausted"),
    )

    pipeline = Pipeline([
        transport.input(),
        stt,
        context_aggregator.user(),
        llm,
        tts,
        lipsync,
        transport.output(),
        credit_meter,
        context_aggregator.assistant(),
    ])

    runner = PipelineRunner()
    await runner.run(PipelineTask(pipeline))
```

The `LIPSYNC_BACKEND` env var is what makes the v1→v2 swap a config change rather than a code change. `CreditMeter` is unconditional — both backends meter the same way, only the per-minute rate differs.

---

## 9. GPU infrastructure (self-hosted phase)

### 9.1 Worker model
- One MuseTalk inference server per GPU instance
- Each instance handles up to 2 concurrent streams (A10 24GB)
- Sessions assigned to instances via round-robin + load tracking

### 9.2 Hosting options

| Provider | A10 cost | Pros | Cons |
|---|---|---|---|
| **RunPod** | $0.40–0.75/hr | Cheap, fast, GPU-focused, good API | Less reliable than AWS |
| **Lambda Labs** | $0.50–0.75/hr | Good price, decent reliability | Capacity sometimes scarce |
| **CoreWeave** | $0.80–1.20/hr | Enterprise reliability | More expensive, longer contracts |
| **Own colo (A10s)** | ~$0.15/hr amortised | Cheapest at scale | Up-front capex, ops burden |

**Recommendation v1: RunPod**, move to **own colo** when monthly compute crosses ~$3,000.

### 9.3 Autoscaling
- Cold-start a worker: ~20s (container pull + model load)
- Solution: **warm pool of 2–4 idle workers**, replenished after each session
- Scale up: spawn new workers when warm pool < 2
- Scale down: kill warm workers if pool > 4 for 10 min

### 9.4 Multi-region
- Start single-region (Sydney AU)
- Add Singapore + US West when international expansion happens
- Daily.co handles WebRTC routing automatically

---

## 10. Integration with the atlas tier (free-tier coexistence)

### 10.1 Single client codebase, two renderers
The companion view has two render paths:

```tsx
function CompanionView({ companion }) {
  const entitlement = useEntitlement();           // RevenueCat
  const creditBalance = useCreditBalance();       // Supabase
  const liveAvailable = useLiveAvailability();    // GPU capacity check

  const canLive =
    entitlement.has("live_lipsync") &&
    creditBalance >= MIN_LIVE_THRESHOLD &&
    liveAvailable;

  if (canLive) {
    return <CompanionLiveView companion={companion} />;  // WebRTC stream
  }
  return <CompanionAtlasView companion={companion} />;   // local atlas render
}
```

### 10.2 Shared portrait, different processing
Both tiers use the **same base portrait** stored in the companion record. The atlas tier generates an atlas bundle from it (one-time). The live tier streams it directly to the MuseTalk worker per-session. **No duplication of source assets.**

### 10.3 Mid-session degradation
If the live worker dies mid-session OR credits exhaust, the client transparently disconnects from Daily and falls back to local atlas rendering. User experience: video freezes for ~500ms then resumes in atlas mode. Show a small "Switched to standard mode" toast (with reason: capacity or balance).

### 10.4 Voice and persona unchanged
ElevenLabs voice, companion persona, conversation memory all live in Supabase and are loaded regardless of tier. The only difference is the rendering pipeline.

---

## 11. Open decisions & risks

### Decisions still to make
1. **Final subscription price**: $9.99 vs $11.99 vs $14.99 for entitlement. Recommendation: $11.99 — strong anchor, low friction.
2. **Credit markup multiplier**: 2.0× vs 2.5× vs 3.0× over our cost. Recommendation: 2.5× (60% margin, room to discount).
3. **Minimum credit balance to start a session**: 10 credits, 50 credits, etc. Recommendation: 10 (≈ 5 min of MuseTalk, 30 sec of Simli — enough to start a meaningful interaction).
4. **LLM path**: direct Claude Haiku vs ElevenLabs Agents endpoint inside Pipecat. Recommendation: direct Claude (more control, easier to integrate with Supabase conversation memory).
5. **First region**: Sydney-only at launch vs Sydney+Singapore. Recommendation: Sydney-only for premium beta, add Singapore when international premium users >100.
6. **Cross-feature credit economy**: credits also used for AI tutoring, voice cloning, premium voice variants. Whose budget owns the credit-price-per-feature decisions? Likely product, but document.

### Known risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Users find Simli credit price ($0.21/min) too steep, premium adoption stalls | High | Medium | Position v1 explicitly as "early access," promise lower price when MuseTalk lands. Generous initial credit grant to premium subscribers. |
| MuseTalk quality not acceptable to users | Medium | High | A/B test in Phase 3 with 10% rollout. Fallback to Simli always available. |
| GPU capacity unavailable at peak | Medium | High | Warm pool + provider redundancy (RunPod + Lambda as failover) |
| Credit meter drifts or fails to debit | Low | High | Idempotent debit ledger, server-side audit, reconciliation job |
| Daily.co cost grows faster than expected | Low | Low | Per-minute pricing is predictable, monitor monthly |
| Latency too high (audio-to-pixel >300ms) | Medium | High | Latency budget tracked from day 1, optimise as standalone task in Phase 4 |
| User uploads of non-consented faces (deepfake liability) | High | High | Curated portrait library only for v1 of premium tier. Defer user-upload to Phase 5 with consent + moderation flow. |
| MuseTalk licence issue surfaces | Low | High | Confirm MIT, internal legal sign-off before Phase 3 launch |

### Anti-patterns to avoid
- **Don't model unit economics as "sub vs cost."** It's "credit revenue vs cost." The sub is access; credits are the gross-profit engine.
- Don't share a single Pipecat worker across users (one worker per session, hard rule)
- Don't ship Phase 3 (self-hosted) without robust monitoring on latency, frame drops, GPU utilisation, credit-debit accuracy
- Don't run premium without atlas fallback as a hard requirement
- Don't hide credit cost from users — show the burn rate live in-session

---

## 12. Tiered offering summary (full picture)

| Tier | Engine | Our cost / min | User credit price / min | Sub price | Notes |
|---|---|---|---|---|---|
| **Atlas (free)** | Viseme atlas (`lipsync-atlas.md`) | ~$0 | ~$0 | $0 | Free, default for all users |
| **Live — Phase 1** | Pipecat + Simli | $0.085 | ~$0.21 | $11.99/mo | Interim, "early access" framing |
| **Live — Phase 3+** | Pipecat + self-hosted MuseTalk | $0.014 | **~$0.035** | $11.99/mo | The real product. 12× cheaper credits than Simli. |
| **Studio (optional toggle)** | Pipecat + Hallo3 | $0.033 | ~$0.08 | included in premium sub | Premium users opt in for higher quality |

---

## 13. Stack pieces that come back for the premium tier

Pieces parked when we adopted the atlas-only architecture for the free tier:

- **Pipecat** — re-introduced for premium tier orchestration
- **Daily.co** — re-introduced as WebRTC transport (NOT needed for free tier)
- **GPU worker infrastructure** — new for premium tier
- **Simli (paid)** — temporary, Phase 1 only

Pieces that DO NOT come back:

- **Deepgram** — never needed. ElevenLabs Scribe handles STT in both tiers.

The free tier remains the simpler architecture (ElevenLabs Agents + atlas rendering, client-side only). The premium tier adds the live pipeline as a parallel system, gated by entitlement + credit balance.

---

## 14. References & inspiration
- **MuseTalk paper** (Tencent ARC 2024) — our chosen engine
- **Hallo3 paper** (Fudan 2024–2025) — future Studio quality option
- **Pipecat docs** — https://docs.pipecat.ai
- **Daily.co docs** — https://docs.daily.co
- **Simli API docs** — https://docs.simli.com
- **ElevenLabs Scribe docs** — https://elevenlabs.io/docs/api-reference/speech-to-text
- **Pipecat + Daily reference bot** — https://github.com/pipecat-ai/pipecat/tree/main/examples
- `lipsync-atlas.md` — the free tier (companion to this doc)

---

## 15. What this doc is *not*

- Not the implementation. Code lives in `worker/` and `lib/live/`.
- Not the free-tier (atlas) spec. See `lipsync-atlas.md`.
- Not the 3D character animation spec. See future `companion-animation.md`.
- Not the credit economy spec across all features (tutoring, voice cloning, etc.) — only the live-mode debit semantics.
- Not a binding deadline — phases depend on GPU vendor capacity, ML engineering capacity, and credit-economy product decisions.

When this doc and any future code conflict, the code wins. Update this doc when meaningful architectural changes land — not on every iteration.
