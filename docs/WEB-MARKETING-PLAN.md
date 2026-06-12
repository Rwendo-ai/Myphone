# Rwendo Web — Marketing & Activation Plan
*Last updated: 2026-06-12*

Goal as stated: **people joining the web version quickly — easy to use, engaging, log in and start going.** This plan treats marketing and product activation as one funnel, because for a free web product they are.

---

## UPDATE INSTRUCTIONS
- [ ] Tick items as they ship; keep the funnel numbers section updated weekly once analytics land
- [ ] Update JOBS.md when priorities shift

---

## 1. North-star metric

**Activation = a new visitor gets a reply from Rwen (or finishes a lesson phase) within 5 minutes of landing.**

Everything below is judged against that. Sign-ups that never reach a Rwen reply are churn with extra steps.

## 2. The funnel today (what's already built)

```
Landing → /sign-up (Google or email) → /verify (6-digit) → /onboarding (7 quick steps) → /chat (Rwen greets)
```

- ✅ Landing CTAs point at sign-up; Google OAuth is one click
- ✅ Onboarding finishes INTO a live chat, not a dashboard (2026-06-12)
- ✅ First lesson is playable on web (7-phase engine), free modules 1-2
- ✅ Dictionary fills itself from lesson one — visible progress from day one

### Friction audit (fix in this order)

| # | Friction | Fix | Status |
|---|---|---|---|
| 1 | Email path costs ~60s (OTP) vs Google's ~5s | Keep Google the visually dominant option (done); consider magic-link later | ✅ adequate |
| 2 | Onboarding is 7 steps before first value | It's compliance-lean already (jurisdiction/DOB are legally required). Don't add steps. Consider deferring companion pick to after first chat. | 🔶 watch |
| 3 | No taste of the product before sign-up | **Landing demo chat** — 3 free anonymous messages with Rwen, rate-limited by IP, then "keep talking → sign up". Single biggest conversion lever available. | ⬜ build next |
| 4 | No social proof on landing | Testimonials strip + live counter ("X lessons finished this week") once numbers exist | ⬜ |
| 5 | Zero measurement | PostHog (already planned for mobile) — without it every change is a guess | ⬜ **prerequisite** |

## 3. Channels (ranked by expected cost-effectiveness)

1. **SEO / content (compounding, free).** Make public, indexable pages from content that already exists: course catalogue pages ("Learn Shona online"), methodology, companion philosophy, travel guides (phrasebooks/culture per destination — unique long-tail content almost nobody else has for Shona/Ndebele). "Learn Shona" is a winnable SERP; Duolingo doesn't offer it.
2. **Diaspora communities (high intent, free).** Zimbabwean/Filipino/etc. diaspora groups (Facebook, Reddit r/Zimbabwe, WhatsApp networks): heritage learners are the exact "family/heritage" onboarding segment. Lead with the free tier + Rwen's personality, not features.
3. **Short-form video (Rwen as the asset).** The chameleon is the brand. TikTok/Shorts/Reels: Rwen reacting to common Shona mistakes, "how to greet your mbuya properly", voice-conversation clips. Character accounts outperform product accounts.
4. **Product Hunt / HN "Show" launch.** One-shot spike + backlinks. Do it AFTER demo chat + analytics, so the spike converts and is measured.
5. **Referral loop (later).** "Give a friend 500 tokens, get 500" — wire after Stripe tokens prove out.
6. **App-store cross-promotion.** Web footer already links the Play Store; mirror it in-app ("continue on your computer") — keyboard lessons are genuinely better on web.

## 4. Launch checklist (order matters)

1. ⬜ **PostHog on web** — funnel events: `landing_view`, `signup_start`, `signup_complete`, `onboarding_complete`, `first_rwen_reply`, `first_lesson_complete`, `purchase`
2. ⬜ **OG/social cards + sitemap + per-page meta** — currently minimal; required for every channel above
3. ⬜ **Landing demo chat** (3 anonymous messages, IP rate-limited)
4. ⬜ **Public course/SEO pages** (catalogue + methodology + 2-3 travel guides)
5. ⬜ Soft launch to diaspora communities; watch funnel for a week
6. ⬜ Product Hunt launch
7. ⬜ Short-form video cadence (2-3/week, repurposed across platforms)

## 5. 30-day cadence once live

- **Week 1:** analytics + OG/meta + demo chat. Baseline the funnel.
- **Week 2:** SEO pages live; first community posts; fix the worst funnel step.
- **Week 3:** Product Hunt; double down on whichever community converted.
- **Week 4:** first retention pass (email day-2 "Rwen misses you" for opted-in users — marketing consent is already collected at sign-up; needs Resend + unsubscribe link per GDPR/Spam Act).

## 6. Positioning (one line per audience)

- **Heritage learners:** "Speak to your family in their language — Rwen makes it feel like talking, not studying."
- **Travellers:** "Land in Harare knowing what to say — lessons, phrasebook, and a friend who answers."
- **Companion-first users:** "A warm AI friend who actually remembers you — free to start, on any device."
