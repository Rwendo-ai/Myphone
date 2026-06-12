# Rwendo — End-to-End App Architecture Review
*Last updated: 2026-06-12*

---

## UPDATE INSTRUCTIONS
When findings here are fixed:
- [ ] Tick the item in the priority tables below (don't delete — keep the audit trail)
- [ ] Update JOBS.md if the fix changes the punch list
- [ ] Re-date this header

---

## Scope & verdict

Full code walk of the mobile app from cold launch → welcome → sign-up → OTP → onboarding → all five tabs → every sub-screen (lesson engine, flip/reinforcement cards, travel suite, companion chat/voice, build-companion wizard, profile hub, cart).

**Verdict: the app is fundamentally well-built.** The big architectural decisions are right and ahead of where most apps of this size are:

- **Three-pack model** (speaker × course × jurisdiction) is genuinely good — adding a language is a data drop, not a code change.
- **Lesson streaming with cache-first loading + manifest versioning** (`lib/lesson-loader.ts`) is the correct trade and well executed.
- **Entitlements as pure functions** (`lib/entitlements.ts`) returning `{ allowed, reason }` with server-side enforcement behind them is the right shape.
- **Two-channel conversation memory** (display history filtered by `chat_view_cleared_at` vs. full AI history) is a smart design few apps get right.
- **Single write path for chat turns** (`appendConversationTurn`) shared by text and voice modes.
- **The OAuth-callback exemption in NavigationGuard** (`app/_layout.tsx:81-93`) shows hard-won correctness with good comments.

The weaknesses are not structural — they're **consistency and hardening** issues: a few god-files, silent error swallowing, duplicated paywall/audio/empty-state logic, and no virtualization on long lists. All fixable incrementally. Nothing requires a rewrite.

---

## Flow map (cold launch → home)

```
app/index.tsx
  ├─ AuthContext loading → spinner
  ├─ no session → /welcome → sign-up (3 consents) → verify-code (6-digit OTP)
  └─ session → NavigationGuard (app/_layout.tsx:71-111)
       ├─ !onboarding_complete → /onboarding
       │    base: language → jurisdiction → gender → DOB (age-gated) → path
       │    learn: course → ability → reasons → time → challenge → connection
       │    companion: type → topics → pick preset (or build-companion)
       │    travel: destination → when → purpose
       │    all: voice → complete (writes ~25 profile fields, user_packs, companions)
       └─ onboarding_complete → /(tabs)
            ProfileLoader hydrates SettingsContext (speaker, courses, theme, voice, companion)
```

Auth methods: email+password (with username + password policy), Google native sign-in (`lib/oauth.ts`), Apple + crypto wallet stubs behind `OAUTH_READY` flags. Consents: combined legal (required), info-protection (required), marketing (optional) → `record_consents` RPC.

---

## Priority issues

### P0 — fix before next release

| # | Issue | Where | Detail |
|---|---|---|---|
| 1 | ⬜ **Consent RPC failure silently swallowed** | `app/(auth)/sign-up.tsx:98-112` | `record_consents` is wrapped in a bare `try {} catch {}`. If it fails (network, RLS), the user finishes sign-up with **no consent record** — a GDPR/audit problem. Minimum: log + retry on next launch; better: block progression with a retry prompt. |
| 2 | ⬜ **`setSaving(false)` missing on onboarding success** | `app/(auth)/onboarding.tsx:329-334` | `completeOnboarding` only resets `saving` in the error path. On success the buttons stay disabled; if `router.replace` is slow the UI looks frozen. |
| 3 | ⬜ **ProfileLoader fetch has no `.catch`** | `app/_layout.tsx:26-55` | If the profiles fetch rejects, hydration silently fails and the app runs on defaults with no log. Add a `.catch` with a warning (and consider a retry). |

### P1 — hardening (next few sessions)

| # | Issue | Where | Detail |
|---|---|---|---|
| 4 | ⬜ Silent download/load failures | `learn.tsx:182-188`, `travel/phrasebook.tsx:39-47`, `flipcards/[courseId]/[module].tsx:64-74` | Failed installs/loads show empty UI with no "failed — retry" state. Users can't tell "no content" from "download failed". Build one shared `useAsync`/error-state pattern and apply it. |
| 5 | ⬜ Lesson version mismatch has no downgrade | `lib/lesson-loader.ts:68-119` | If manifest `expectedVersion` > cached version and the device is offline, the load throws instead of gracefully serving the stale cached lesson. |
| 6 | ⬜ Chat list not virtualized | `app/(tabs)/companion.tsx:515-521` | `messages.map()` in JSX re-renders every bubble on each new message. At 200+ messages this will jank. Use `FlatList`/windowing, stable keys. |
| 7 | ⬜ STT/TTS language not validated | `app/companion/voice-turn.tsx` | Cross-language users (e.g. Tagalog speaker learning Shona) may have no STT for the target language; no detection or fallback. |
| 8 | ⬜ Hardcoded `p_voice: false` consent | `sign-up.tsx:103-106` | Fragile if voice consent (BIPA) becomes required — which it will before US launch. |
| 9 | ⬜ Future-DOB edge case | `onboarding.tsx:216-227` | Validation checks `age === null || age > 120` but not negative ages; a 2030 birth year passes validation as a minor. |

### P2 — code health (opportunistic)

| # | Issue | Where | Detail |
|---|---|---|---|
| 10 | ⬜ God components | `companion.tsx` (~890 lines), `build-companion.tsx` (~800), `SettingsContext.tsx` (~400) | companion.tsx carries 5 concerns (header/pose, token bar, message list, text composer, live-voice panel). Extract `MessageList`, `Composer`, `VoicePanel`. Wizard steps in build-companion can be one file per step. |
| 11 | ⬜ Duplicated paywall alerts | `lesson/[id].tsx:125-157` vs `learn.tsx:159-168` | Same wording copy-pasted. Extract a `showPaywall(reason)` helper. |
| 12 | ⬜ Duplicated audio managers | `phrasebook.tsx:28-90`, `flipcards/.../[module].tsx` | Both hand-roll manifest loading + player state. Extract a `useAudioManifest(courseId)` hook. |
| 13 | ⬜ No shared Loading/Error/Empty components | everywhere | Every screen rolls its own; state shapes differ (`'loading'` strings vs `null` vs booleans). |
| 14 | ⬜ Dead code | `app/companion/lipsync-test.tsx` | Orphaned route, no references. Delete or move under a dev flag. |
| 15 | ⬜ Prop drilling in phrasebook | `phrasebook.tsx:128-140` | Category component takes 8 props; audio manifest belongs in context or the hook from #12. |
| 16 | ⬜ Stale-closure smell in `completeOnboarding` | `onboarding.tsx:335` | Dependency array doesn't cover everything captured. Harmless today, fragile under refactor. |
| 17 | ⬜ Hardcoded $39.99 in onboarding tile | `onboarding.tsx:636-645` | Price should come from the products data, not a literal. |

---

## Per-segment notes

- **Welcome/sign-up/verify** — solid. OTP input sanitization, auto-submit, resend all correct. OAuth error recovery is retry-only (acceptable, document it).
- **Onboarding** — comprehensive and well-commented; path-dependent steps are clean. State is component-local with no draft persistence — a process-kill on step 7 restarts at step 1. Acceptable for a one-shot flow; revisit if analytics show drop-off.
- **Home** — clean composition over SettingsContext + useProgress. No error state on profile refresh (stale data shown silently).
- **Learn** — category tabs, course pills, storage install/uninstall, module gating all coherent. Manifest-driven unit synthesis (`lib/manifests.ts`) scales well.
- **Lesson engine** — 7-phase flow is the best-built screen in the app: cache-first load, entitlement gates, quit confirmation, XP save on mission, dictionary auto-add.
- **Companion (chat)** — feature-richest and most overloaded file (P0/P1 items above). The underlying libs (claude.ts, conversation-memory.ts, useConvAISession) are well-factored; the screen file is where it piles up.
- **Companions / build-companion** — preset + customization model (presets → companions rows → user_companion_customizations overrides) is sound. Wizard needs step extraction.
- **Travel** — destination-override pattern and on-demand content loading are good. Sub-screens repeat mounting/loading boilerplate (P1 #4, P2 #13).
- **Profile** — 12 sub-screens, all live, consistent enough. Erase-chat/delete-account confirmations correct.
- **Cart** — clean two-tab layout; entitlement reads correct.

---

## Shared-code recommendation (feeds the web build-out)

Platform-agnostic modules that web currently **duplicates by hand** (drift risk is the #1 web maintenance issue):

| Module | Shareable | Web today |
|---|---|---|
| `lib/entitlements.ts` | ✅ pure TS | duplicated copy |
| `lib/xp-events.ts` | ✅ | partial reimplementation |
| `lib/conversation-memory.ts` | ✅ | reimplemented |
| `lib/manifests.ts` + course manifests | ✅ static data | hardcoded `CATALOGUE` array |
| `data/companions/presets.ts` | ✅ | duplicated in TWO web files |
| `data/products.ts` | ✅ (tier logic) | separate products-web.ts |
| `lib/travel-content-loader.ts` | ✅ | separate travel-web.ts |
| `lib/voice.ts`, `lesson-loader.ts`, `purchases.ts`, `storage.ts` | ❌ platform APIs | web equivalents correct to keep separate |

**Recommendation:** don't jump to a full monorepo yet. Step 1 is a `shared/` directory (or `packages/core`) holding entitlements, products, companion presets, course manifests, and types, imported by both `app` and `web` via tsconfig paths. That kills the drift without a tooling migration. Full pnpm-workspace monorepo is a later, optional step.

See [WEB-PARITY-PLAN.md](./WEB-PARITY-PLAN.md) for the web-side consequences of this review.
