# Self-Hosting Strategy — Open-Source Alternatives

**Date:** 2026-05-15
**Question:** Can we drop ElevenLabs, Simli, Tavus, and Claude in favour of open-source models we run on our own Contabo server?
**Short answer:** Yes for STT, yes for the lower-tier lipsync, partly for TTS, **no for Claude (and don't try)**.

---

## Bottom line, in one screen

| Layer | Today (SaaS) | Self-host? | Recommended open replacement | Verdict |
|---|---|---|---|---|
| STT (speech → text) | bundled in EL Conv AI | ✅ Yes — easiest win | **Parakeet TDT v3** (English) / **faster-whisper-large-v3-turbo** (multi-ling) | **Do this first.** Cheap, fast, matches Whisper quality. |
| TTS (text → voice) | ElevenLabs | 🟡 Hybrid | **Chatterbox Turbo** (MIT, 75ms latency, beats EL in blind tests) | Use for free / lower tier. Keep EL on the *hero* companion voice for 6–12 months. Open is ~85% as warm. |
| Lipsync (avatar video) | Simli + Tavus | 🟡 Hybrid | **LiveTalking + MuseTalk v1.5** | Use for free / lower tier. Keep Simli for paid premium. **Drop Tavus** — not worth 4× Simli. |
| LLM (the brain) | Claude Sonnet/Opus | ❌ No | (Llama 4 Maverick / Llama 3.3 70B Euryale if you must) | **Keep Claude.** No open model has Anthropic-grade emotional warmth. The companion voice is what you sell. |
| Real-time transport | (none — direct WS) | ✅ Yes | **LiveKit self-host** (Apache-2.0) | Already in the plan. Self-host the SFU on a CPU box. |

---

## 1. TTS — ElevenLabs replacement

The honest 2026 landscape: open TTS has caught up to ElevenLabs *on quality* for narration and short utterances, but not on the warm, breathy, in-character emotional delivery that ElevenLabs v2/v3 ships. Several open models now blind-test ahead of ElevenLabs (Chatterbox 63.8% preference; Fish S2 81.88% win rate on EmergentTTS-Eval) — but those benchmarks measure read-aloud clarity, not the companion use case.

| Model | Licence | VRAM | Streaming | Clone (≤30s) | Verdict |
|---|---|---|---|---|---|
| **Higgs Audio v2** (Boson AI, Jul 2025) | Apache-2.0 | ~12 GB | Experimental | Yes, 3–10s ref | Best emotional quality of open models; vLLM-served. **Top pick for premium voice.** |
| **Chatterbox / Chatterbox Turbo** (Resemble) | MIT | 4–8 GB | Yes (~75ms latency, Turbo) | Yes, 5–10s ref | Beats EL in blind tests 63.8%. Emotion-exaggeration dial. **Top streaming pick.** |
| **XTTS-v2** (Coqui, abandoned upstream) | CPML (non-commercial) | 4 GB | Yes, 200ms TTFB | Yes, 6s ref | Mature streaming server, but **licence blocks commercial use** for Rwendo. Skip. |
| **F5-TTS** | CC-BY-NC-4.0 | 8 GB | Chunked only | Yes | Excellent quality; non-autoregressive design fundamentally limits streaming. Non-commercial. Skip for prod. |
| **GPT-SoVITS v2Pro** | MIT | 6 GB | Yes | Yes | Fast, Chinese-strongest, English okay. |
| **Fish Audio S2 Pro** | Non-commercial weights | 10 GB | Yes | Yes, 80+ langs | Highest blind-test winner but licence kills it. Skip. |
| **Kokoro-82M** | Apache-2.0 | <2 GB (CPU OK) | Yes, 210× RT on GPU | **No true cloning** | Speed king, runs on CPU VPS. Use for non-cloned narration only. |
| **OpenVoice v2** (MyShell) | MIT | 4–8 GB | Yes | Yes, multilingual | Solid commercial-safe fallback. |
| **Qwen3-TTS** (0.6B/1.7B) | Apache-2.0 | 4–10 GB | Yes | Yes, 10 langs | Strong on Asian languages. |

**Recommended:** Chatterbox Turbo as the production default. Higgs Audio v2 as the "premium voice" tier when latency budget allows. Both via Docker.

**Hosting:** `openedai-speech` is the only mature OpenAI-compatible TTS server, but caps at 2–3 concurrent streams per GPU. For 10 concurrent calls you need either two GPUs or a thin FastAPI in front of Chatterbox with a request queue. The `coqui-ai/xtts-streaming-server` repo is explicitly a demo — do not use it.

**Leave-SaaS counter-recommendation:** If your top users pay because the voice feels human, keep ElevenLabs for the *primary* companion voice for 6–12 months and self-host TTS only for low-stakes paths (notifications, system messages, free-tier users).

---

## 2. Lipsync — Simli + Tavus replacement

This is the hardest layer. **There is no open project today that delivers the Simli loop — single still photo, audio in, sub-300ms-to-first-frame, sustained 25fps, identity preservation, commercial licence — on one Contabo GPU.** The pieces exist; the integrated product does not.

| Model | Licence | GPU floor | FPS | Single photo? | Streaming server? | Verdict |
|---|---|---|---|---|---|---|
| **MuseTalk v1.5** (Tencent, Mar 2025) | MIT | RTX 3080Ti+ | 42 on 3080Ti, 72 on 4090 | Yes | Via LiveTalking; ~3s first-frame on A100 | **Best realistic pick.** 256×256. |
| **Wav2Lip-256/384** | Community 256 builds vary | RTX 3060+ | 60 on 3060, 120 on 3080Ti | Yes | Via LiveTalking | Lowest latency, lowest quality. **Scrappy MVP only.** |
| **LivePortrait / FasterLivePortrait** | MIT/Apache | RTX 3090 | 30+ fps w/ TensorRT | Yes | Partial | Excellent head motion but **driven by video, not audio.** Pair with audio-to-motion model. |
| **LatentSync 1.6** (ByteDance, Jun 2025) | Apache-2.0 | RTX 4090 / A100 | Offline; realtime on H100 | Yes | No | 512×512, sharpest open output, but diffusion-based — too heavy for interactive. |
| **Sonic** (Tencent, CVPR 2025) | **Non-commercial** | A100 | Not realtime | Yes | No | Blocked by licence. Skip. |
| **Hallo3** (Fudan, CVPR 2025) | MIT (research) | A100 80GB | Offline | Yes | No | Gorgeous, far too heavy. |
| **EchoMimic v2 / v3** (Ant Group) | Apache-2.0 | RTX 4090 / A100 | Near-realtime on v3 (1.3B) | Yes | No | v3 (Aug 2025) — 10× smaller than peers. Worth POC. |
| **Ultralight-Digital-Human** | Apache-2.0 | CPU possible! | Realtime on CPU | Limited | Via LiveTalking | Cartoon quality, not photorealistic. Useful fallback. |
| SadTalker / AniPortrait / DreamTalk / GeneFace++ / Diff2Lip / JoyHallo / V-Express | varied | varied | varied | mostly yes | mostly no | Older/research-only, superseded. |

**The integration glue to start with: [`lipku/LiveTalking`](https://github.com/lipku/LiveTalking)** (4,300+ stars). This is the open-source "Simli the server." It wraps Wav2Lip / MuseTalk / ERNeRF / Ultralight behind a single WebRTC/RTMP server. **Start here — do not try to build avatar streaming from scratch.**

**Recommended:** LiveTalking running MuseTalk v1.5 for the realistic tier, Wav2Lip-256 for the budget tier. **Dedicated GPU, no exceptions.**

**Honesty:** First-frame latency from your audio chunk hitting MuseTalk to a video frame leaving the box is **800ms–3s today**, vs. Simli's ~200–400ms. Users notice. Pre-buffer or use a "thinking" idle animation while the first frame compiles. Head/eye micro-motion on MuseTalk is good but not Tavus-good.

**Leave-SaaS counter-recommendation:** Keep Simli on the *premium* tier, self-host MuseTalk for the *free / lower* tier. Drop Tavus entirely — its premium edge isn't worth 4× Simli's price for companion use.

---

## 3. STT — Speech-to-Text (the slam dunk)

| Model | Licence | RAM/VRAM | Streaming | Vs Whisper Large | Verdict |
|---|---|---|---|---|---|
| **NVIDIA Parakeet TDT v3** | CC-BY-4.0 | 4–8 GB | Yes | **10× faster than Whisper Large Turbo**, better English WER | **Top pick for English-only.** |
| **faster-whisper-large-v3-turbo** | MIT | 6 GB | Yes | Matches Whisper, 4× faster | **Top pick for multilingual.** |
| **distil-whisper** | MIT | 2 GB | Yes | 14.93% WER, 6× faster, 49% smaller | For resource-constrained. |
| **Moonshine** (Useful Sensors) | MIT | 27MB–500MB | Yes | Beats Whisper Large v3 with 6× fewer params | Best for mobile/edge. |
| **whisper.cpp** | MIT | CPU-friendly | Yes (v1.6+) | Same as model | Use when no GPU. |

**Recommended:** Parakeet TDT for English-first, faster-whisper-large-v3-turbo for multilingual. Both run on CPU (slow) or ~2 GB VRAM. **Do this first** — easiest win.

---

## 4. LLM — Don't replace Claude

**Claude Sonnet/Opus is still the best LLM for the companion role in May 2026, and no open model closes that gap.** Open models have closed the *reasoning* and *coding* gaps — but the warm, contextually-aware, emotionally-steady-but-not-sycophantic prose that Anthropic's RLHF produces is still its own thing.

| Model | Licence | Min serving GPU | Companion quality | Verdict |
|---|---|---|---|---|
| **Claude Sonnet 4.7** | API only | n/a | Best in class | **Keep on the API.** |
| **Llama 4 Maverick (17B active / 128 expert)** | Llama Community | 1× H100 80GB | Strong general; flatter affect than Claude | Best open companion baseline. Fits one H200. |
| **Llama 4 Scout (17B / 16E)** | Llama Community | 1× H100 80GB | Same family, leaner | Use if you need 10M context for long-memory. |
| **Llama 3.3 70B + Euryale v2.3 fine-tune** | Llama Community | 2× A100 / 1× H100 quantized | Best community-tuned companion model | **Roleplay community's favorite.** Genuinely warm. |
| **Qwen 3 235B-A22B** | Apache-2.0 | 2× H200 (22B active) | Excellent reasoning, slightly stiff | Top open generalist; less warmth than Llama 3.3 fine-tunes. |
| **DeepSeek V3.2** | MIT-ish | 8× H200 (671B MoE) | Top reasoning, dry persona | Too big for one Contabo box. Skip. |

**Recommended:** Keep Claude. If/when you self-host: **Llama 3.3 70B Euryale v2.3** or **Llama 4 Maverick** behind **vLLM** (production default) or **SGLang** (29% faster than vLLM when prompts share prefix — exactly the companion case where the system prompt is the same every turn). **Ollama is dev-only; do not run it in production.**

---

## 5. Contabo hardware reality

Live pricing pulled May 2026. Contabo's GPU lineup is **L40S, RTX 5000 PRO, H200** — no A4000/A5000 instances at GA.

| SKU | VRAM | RAM | vCPU | Storage | EUR/mo |
|---|---|---|---|---|---|
| L40S dedicated | 48 GB | 234 GB | 32 | 1.75 TB | €690 |
| L40S cloud | 48 GB | 234 GB | 32 | 900 GB | €788 |
| RTX 5000 PRO dedicated | 48 GB | 234 GB | 32 | 1.75 TB | €930 |
| H200 dedicated | 141 GB | 234 GB | 32 | 1.9 TB | €1,838 |
| 8× H200 cloud | 1128 GB | 7.68 TB | 192 | 1.9 TB | €16,000 |

Plus dedicated CPU servers: AMD Ryzen 12-core €86/mo, Turin 32-core €224/mo, Turin 64-core €599/mo. **No CPU box runs the avatar layer.** STT and Kokoro TTS can live on CPU.

**Sizing for 10 concurrent voice + lipsync calls:**

- **STT:** Fits on CPU or 2 GB VRAM. Co-tenant with TTS.
- **TTS (Chatterbox Turbo):** ~4 GB VRAM. 10 concurrent = needs batching, wants L40S shared with LLM.
- **Lipsync (MuseTalk):** Wants its own GPU. **One L40S handles ~3–4 concurrent MuseTalk streams at 25fps.** For 10 concurrent: two L40S boxes or one H200.
- **LLM (if self-host):** Needs H200 (141 GB) or 2× L40S with tensor parallelism.

**Minimum viable self-host stack for 10 concurrent: 2× L40S dedicated (€1,380) + 1× H200 dedicated (€1,838) = €3,218/mo (~$3,500).**

**Current SaaS bill at ~30,000 min/mo (10 concurrent × 50% util):** Simli $12,000 + ElevenLabs $3,000 + Claude ~$1,500 = **~$16,500/mo**.

**Even leaving Claude on API, self-hosting saves ~$13,000/mo at this scale.** Crossover with SaaS at ~4–5 concurrent users. Below that, stay on SaaS.

**CPU-only VPS will NOT work for:** any lipsync model, any LLM 7B+, Higgs Audio, Chatterbox at low latency, F5-TTS.
**CPU-only WORKS for:** Kokoro TTS, Moonshine STT, whisper.cpp STT.

---

## 6. Recommended end-to-end architecture

```
[RN client] <--WebRTC--> [LiveKit SFU, self-host]
                              |
                              v
                    [LiveKit Agents Worker]
                              |
        +---------------------+---------------------+
        v                     v                     v
    [STT subagent]    [LLM call (Claude API     [TTS subagent
    Parakeet TDT       or vLLM/SGLang             Chatterbox Turbo
    on shared GPU]     serving Llama 4)]          on shared GPU]
                                                      |
                                                      v
                                          [LiveTalking avatar worker
                                           MuseTalk v1.5 on its own GPU
                                           publishes video track back
                                           to LiveKit room]
```

**Where each piece lives:**
- **LiveKit SFU + Agents worker:** Cheap CPU dedicated (Turin 32-core, €224).
- **STT + TTS + LLM:** Share one L40S/H200 if budget tight, but **TTS and LLM compete for VRAM** — partition explicitly. SGLang > vLLM here because your system prompt is the same every turn (prefix cache reuse).
- **Avatar (LiveTalking + MuseTalk):** **Its own GPU, no exceptions.** CUDA contention with the LLM destroys frame timing. L40S minimum.

**Biggest pitfalls (in order of pain):**
1. **First-frame avatar latency.** MuseTalk's ~3s on A100 is your worst UX moment. Mitigate with idle-loop "breathing" footage that plays during compile, then crossfade.
2. **TTS concurrent stream cap.** openedai-speech caps at 2–3 streams per GPU. Scale horizontally or build a batched server.
3. **VRAM fragmentation on shared GPU.** vLLM's PagedAttention helps; don't co-host with diffusion models.
4. **Cold start.** First user after idle pays 30–90s of model load. Keep models warm.
5. **Audio/video sync.** LiveTalking publishes video as a separate participant — clock drift between TTS audio and avatar video is a real bug. Test mercilessly.
6. **LiveTalking is Chinese-community-led**, docs are translated, and the commercial LiveKit tier is paid. Budget time for forking.

---

## Recommended stacks (pick one)

### Production stack (€3,200/mo Contabo, 10–50 concurrent)

- **LiveKit self-host** (Apache-2.0) on Turin 32-core dedicated
- **STT:** Parakeet TDT v3 (English) + faster-whisper-turbo (other langs)
- **TTS:** Chatterbox Turbo via openedai-speech or custom FastAPI on L40S #1
- **LLM:** **Keep Claude Sonnet** on the API for the companion role
- **Avatar:** LiveTalking + MuseTalk v1.5 on L40S #2
- **Premium tier:** Keep Simli for paying users wanting best-in-class faces

### Scrappy MVP stack (€700/mo Contabo, 2–5 concurrent)

- LiveKit self-host on a €30 VPS
- Moonshine STT (CPU, free)
- Kokoro-82M TTS for non-cloned voices (CPU); openedai-speech with Chatterbox on the GPU for cloned voices
- Claude Haiku on API
- LiveTalking + Wav2Lip-256 on a single L40S (€690)
- Avatar quality is "good enough" not "premium" — set user expectations

---

## What we're explicitly NOT doing

- **F5-TTS, Fish Audio S2, Sonic, Hallo3:** non-commercial licences or insufficient streaming. Watch.
- **XTTS v2:** good engineering, dead upstream, CPML licence hostile to commercial.
- **Replacing Claude in 2026:** the companion-voice product is what you sell. Don't compromise it for ops savings.
- **Ollama in production:** dev tool only.
- **Tavus:** premium quality gap over Simli isn't worth the price for our use case. Drop it.

---

## Sources

**TTS:** [Higgs Audio v2 blog](https://www.boson.ai/blog/higgs-audio-v2) · [Chatterbox by Resemble](https://www.resemble.ai/chatterbox/) · [openedai-speech](https://github.com/matatonic/openedai-speech) · [BentoML TTS landscape 2026](https://bentoml.com/blog/exploring-the-world-of-open-source-text-to-speech-models)

**Lipsync:** [MuseTalk](https://github.com/TMElyralab/MuseTalk) · [LiveTalking](https://github.com/lipku/LiveTalking) · [LatentSync](https://github.com/bytedance/LatentSync) · [EchoMimic v2](https://github.com/antgroup/echomimic_v2) · [LiveKit avatar docs](https://docs.livekit.io/agents/models/avatar/)

**STT:** [Northflank STT benchmark 2026](https://northflank.com/blog/best-open-source-speech-to-text-stt-model-in-2026-benchmarks) · [faster-whisper](https://github.com/SYSTRAN/faster-whisper/releases)

**LLM:** [Llama 4 (Meta)](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) · [Qwen3](https://qwenlm.github.io/blog/qwen3/) · [Llama 3.3 70B Euryale v2.3](https://privatellm.app/blog/llama-3-3-70b-euryale-v2-3-local-ai-role-play) · [vLLM vs SGLang vs Ollama](https://dev.to/zkaria_gamal_3cddbbff21c8/concurrent-llm-serving-benchmarking-vllm-vs-sglang-vs-ollama-1cpn)

**Hosting:** [Contabo GPU pricing](https://contabo.com/en/gpu-cloud/) · [Contabo full pricing](https://contabo.com/en/pricing/)
