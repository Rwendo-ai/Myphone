# Rwendo Web — Parity Plan & Design Notes
*Last updated: 2026-06-12*

The brief: **the website must have every feature the app has, and be better** — web is not a companion brochure, it's a first-class client. These are the notes taken during the end-to-end app review ([APP-ARCHITECTURE-REVIEW.md](./APP-ARCHITECTURE-REVIEW.md)), turned into a build plan.

---

## UPDATE INSTRUCTIONS
- [ ] Tick parity rows as they ship; re-date the header
- [ ] When a new feature lands in the mobile app, add a row here in the same PR
- [ ] Update JOBS.md if priorities change

---

## 1. Layout decision — side menu (DONE 2026-06-12)

The bottom tab bar is gone. Web now uses a **side menu**:

- **Desktop (≥768px):** persistent left sidebar, 240px, brand at top, primary nav (Home / Learn / Rwen / Travel / Profile) with Rwen visually elevated (gold-ringed avatar), divider, secondary nav (Cart).
- **Mobile (<768px):** slim top bar (hamburger + wordmark) opening the same menu as a left slide-in drawer. A fixed sidebar can't fit phone widths, so the drawer keeps the side-menu pattern there.
- Files: `web/components/nav/SideNav.tsx` (new), `web/app/(app)/layout.tsx` (content offset `md:pl-60`, mobile `pt-14`). `TabBar.tsx` deleted.
- Pages need no individual changes; the chat shell's full-height calc was adjusted for the mobile top bar (`ChatShell.tsx:65`).

As sections grow, the sidebar should gain **expandable sub-items** (e.g. Travel → Phrasebook / Culture / Money / Safari / Flights / Hotels / Connections) — this is the layout's whole advantage over a 5-slot bottom bar, and the reason web can be *better* than the app for wide screens.

---

## 2. Parity matrix — app feature → web status

### Landing & auth

| App feature | Web status | Notes |
|---|---|---|
| Landing page | ✅ Live | Hero + features + companions strip. Better-than-app opportunity: live demo chat widget on the landing page. |
| Google OAuth | ✅ Live | Same Supabase accounts as mobile. |
| Email + password sign-up/in | ✅ **Wired 2026-06-12** | Components existed but `/sign-in` was Google-only; now uses AuthCard + ProviderButton + EmailPasswordForm. |
| Username + password policy at sign-up | ✅ **Shipped 2026-06-12** | Dedicated `/sign-up` page: username + live password-rule checklist (8+/upper/lower/digit/special), matching the app. |
| 3 consent checkboxes + `record_consents` RPC | ✅ **Shipped 2026-06-12** | Better than app: consents stash in localStorage and flush via `record_consents` once a session exists (`web/lib/pending-consents.ts`), with `/onboarding` as a retry point — fixes the silent-failure P0 the app still has. Google sign-ups also require the two required boxes. |
| 6-digit OTP verify screen | ✅ **Shipped 2026-06-12** | `/verify` — six digit boxes, paste/autofill distribution, auto-submit, 60s resend cooldown; emailed confirmation link still works as fallback. |
| Change password | ✅ **Shipped 2026-06-12** | `/profile/change-password` — re-authenticates with current password before `updateUser` (app parity + session-theft guard). |
| Apple / crypto wallet | ⬜ Stub both platforms | Web `auth-providers.ts` already has `signInWithApple` + crypto sentinel; flip when the app's `OAUTH_READY` flips. |
| Onboarding wizard | 🔶 Mostly | ✅ 2026-06-12: jurisdiction step (AU/GB/US/EU/FR/ZW/PH with per-region minAge), real DOB input (auto-advance DD/MM/YYYY), age-blocked screen, and compliance fields written (`jurisdiction_id`, `date_of_birth`, `country_code`, `is_eu_customer`, `is_uk_customer`). Identity now runs BEFORE companion pick so Aria (18+) is truly hidden from minors. Still mobile-only: gender, path fork (learn/companion/travel), voice pick. |

### Home

| App feature | Web status | Notes |
|---|---|---|
| Greeting + XP/streak/continue card | ✅ Live | |
| Daily XP goal progress bar | ⬜ Gap | Needs `preferences` read + goal editor (see Profile). |
| Rwen's tip (per-speaker, rotates) | ⬜ Gap | Pure data — port from speaker packs. |
| Quick-access grid | 🔶 Partial | Teaser cards exist; align targets with sidebar items. |

### Learn

| App feature | Web status | Notes |
|---|---|---|
| Course catalogue + categories | ✅ Live | But hardcoded `CATALOGUE` in `courses-web.ts:64-87` — see §4 drift. |
| Module list + progression locks | ✅ Live | |
| **7-phase lesson engine** | ✅ **Shipped 2026-06-12** | Full hook→chunks→pattern→practice→dialogue→recall→mission engine with all 5 exercise types (`web/components/lesson/`). Streams the same Storage JSONs as mobile, server-side loaded; loader prefix-matches canonical long ids. Better than app: 1-9 keys answer options, Enter advances/checks, Backspace edits build-sentence. Completion writes `lesson_progress` + `award_xp` (deduped) + dictionary auto-add. Unauthored courses fall back to the practice-with-Rwen card. |
| Flip cards (+ audio) | ⬜ Gap | Same Storage data; audio manifests already public URLs. |
| Reinforcement cards | ⬜ Gap | Same Storage data, 8 card variants. |
| Course install/offline | ➖ Skip | Device caching is a native concern; web streams. (Optional later: IndexedDB cache.) |
| Dictionary | 🔶 Write path live | Web lessons now auto-add chunks to `user_dictionary` (2026-06-12). The browse/search UI is still to build — easy win, great on desktop. |

### Chat / Companion

| App feature | Web status | Notes |
|---|---|---|
| Text chat via `rwen-chat` Edge Function | ✅ Live | Shared pipeline — billing/memory identical to app. ✔ |
| Token bar + top-up | ✅ Live | |
| Companion picker + customization | ✅ Live | Preset list duplicated in two web files (§4). |
| Voice (push-to-talk + live full-duplex) | ⬜ Deferred v1.1 | Browser path exists: ElevenLabs Conv AI supports WebSocket + Web Audio (getUserMedia). The app's per-session override pattern (prompt/voice/language at session start) ports directly. |
| Rwen pose changes / companion media backdrop | 🔶 Partial | Web shows archetype images; no pose states. |
| Lesson-context chat ("ask Rwen about this lesson") | ✅ Live | `?lessonContext=` param. |
| Clear chat view (keep AI memory) | ⬜ Gap | App's `chat_view_cleared_at` pattern; trivial to port. |
| Build-your-own companion wizard | 🔶 Partial | Cart sells `companion_build_v1`, but the 9-step wizard isn't on web. Port it — long-form wizards are *better* on desktop. |

### Travel

| App feature | Web status | Notes |
|---|---|---|
| Social feed + posts + comments + follows | ✅ Live | Web actually ahead of app polish here. |
| Destination picker + override | ⬜ Gap | `useActiveTravelDestination` logic is pure TS — port. |
| Phrasebook (+ audio, free preview gating) | ⬜ Gap | Streams from Storage already. |
| Cultural guide | ⬜ Gap | Same. |
| Money & market (live FX) | ⬜ Gap | Same + one FX API call. |
| Safari & parks | ⬜ Gap | Same. |
| Flights / hotels affiliates | ⬜ Gap | Plain links on web — easier than the app's WebViews. |
| Connections 18+ age gate | ⬜ Unblocked | DOB now collected at onboarding (2026-06-12) — gate can read `date_of_birth`/`is_minor` when Connections lands on web. |
| My Travel | ⬜ Gap (thin in app too) | Build once, share design. |

### Profile

| App feature | Web status | Notes |
|---|---|---|
| Stats + inline edits (name, languages, ability) | ✅ Live | |
| 6 colour themes | ⬜ Gap | Tailwind CSS-variable theming; persist `theme_id` to profiles like app. |
| Voice picker + preview | ⬜ v1.1 with voice | |
| Daily XP goal editor | ⬜ Gap | |
| Achievements | ⬜ Gap | |
| Privacy settings / export data / change password / erase chat | ⬜ Gap | Export + erase are **GDPR-relevant** — port soon. Same RPCs as app. |
| Plans / subscription tiers | ⬜ Gap | Web has one-time purchases only. Stripe subscriptions for the 5-tier ladder; webhook already has the idempotency patterns to extend. |
| Legal pages | ✅ Live | Markdown-rendered. Keep in sync with jurisdiction packs eventually. |
| Help / About / Methodology / Companion philosophy | ⬜ Gap | Static content — render the same markdown. |

### Cart

| App feature | Web status | Notes |
|---|---|---|
| Token packs | ✅ Live (Stripe) | Cross-platform balance unification already works. ✔ |
| Companion unlocks + build SKU | ✅ Live | |
| Course subscriptions | ⬜ Gap | Pairs with Plans work above. |

---

## 3. Build order (recommended)

1. ✅ **Lesson engine on web** — shipped 2026-06-12.
2. ✅ **Sign-up compliance pack** — consents + jurisdiction + DOB age gate all shipped 2026-06-12.
3. **Travel content suite** — phrasebook/culture/money/safari + destination picker; data already in Storage, mostly rendering work. Sidebar gets its first sub-menu. *(medium)*
4. **Profile completeness** — themes, daily goal, export/erase, achievements, static pages. *(medium)*
5. **Dictionary + flip/reinforcement cards** — quick wins off existing data. *(small)*
6. **Stripe subscriptions (Plans)** — 5-tier ladder. *(medium)*
7. **Voice in browser** — Conv AI WebSocket + Web Audio. *(big, v1.1 as planned)*
8. **Build-companion wizard on web.** *(medium)*

---

## 4. Drift problem (do alongside #1)

Web hand-copies app data and logic; it WILL rot:

- `web/lib/courses-web.ts:64-87` — hardcoded course catalogue vs app's `data/courses/`
- `web/lib/companion-web.ts:42-91` **and** `web/lib/products-web.ts:90-98` — two copies of companion presets
- `web/lib/home-web.ts:33-54` — copied pack labels
- `web/lib/entitlements` logic re-derived instead of shared

Fix: a `shared/` directory (entitlements, products, presets, manifests, types) imported by both clients via tsconfig paths — detailed in [APP-ARCHITECTURE-REVIEW.md](./APP-ARCHITECTURE-REVIEW.md) §Shared-code.

---

## 5. Web design conventions (for anyone building the above)

- **Palette:** primary `#1A3C6E`, base `#0D2140`, secondary/gold `#F4B860`, success `#22C55E`, warning `#F59E0B`, error `#EF4444`. Page bg: `bg-gradient-to-b from-primary to-[#0D2140]`.
- **Surfaces:** frosted cards `bg-white/5 border border-white/10 rounded-2xl p-4..8`; hover `bg-white/10 border-white/20`.
- **Buttons:** pill `bg-secondary text-primary font-semibold rounded-full hover:opacity-90`; ghost `bg-white/10 border border-white/15`.
- **Inputs:** `bg-white/10 border-white/15 rounded-xl focus:border-secondary placeholder:text-white/40`.
- **Badges:** `text-[10px] uppercase tracking-wider bg-secondary/20 text-secondary rounded`.
- **Nav active state:** `bg-white/10 text-secondary` (sidebar); hero item gets the gold ring.
- **Breakpoints:** mobile-first; `md:` is the sidebar/desktop threshold.
- Server Components fetch, `'use client'` only for interactivity; Supabase via `supabase-server` / `supabase-browser` / `supabase-admin` (webhooks only).

---

## 6. Where web should be BETTER than the app (not just equal)

1. **Sidebar sub-navigation** — expose Travel and Profile sub-sections directly; the app buries them behind taps.
2. **Lesson engine ergonomics** — keyboard-first exercises (type to answer, Enter to submit, 1-4 keys for multiple choice), side-by-side dialogue view on wide screens.
3. **Dictionary & progress as desktop dashboards** — sortable tables, search, charts; phones can't do this well.
4. **Landing page demo** — let visitors talk to Rwen (rate-limited, no account) before sign-up. Biggest conversion lever available.
5. **Long-form wizards** (build-companion, onboarding) — multi-column layouts with live preview panes.
6. **Instant content updates** — no app-store release cycle; ship lesson UI improvements continuously.
7. **SEO surface** — methodology, companion philosophy, course catalogue, and travel guides as public indexable pages feeding sign-ups.
