# Language Section + Travel Hub — Design Doc

> Living design doc. We're stepping through this one section at a time. Items
> marked **TBD** need a decision before we ship. Items marked **DECIDED** are
> locked unless we explicitly revisit them.

**Started:** 2026-05-05
**Owner:** Bowen
**Status:** Architecture pass; no implementation yet beyond what's already in
the repo (Travel tab scaffold + 5 language courses).

---

## 0. What this doc covers

The "language section" in this doc is the broader **language + travel
experience** of the app:

1. **Language Courses** (already shipped) — 100-lesson curricula per directional pair, lessons stream from Storage.
2. **Travel Tab** (scaffold exists, content empty) — phrasebook, cultural guide, money & market, airport-to-city, meet travellers, safari & parks. Currently a "coming soon" landing page at [app/(tabs)/travel.tsx](../app/(tabs)/travel.tsx).
3. **Travel Packs** (course type exists, no content authored) — purchasable per-destination bundles. Type defined in [types/packs.ts](../types/packs.ts) as `'travel'`; spec in [docs/PACK-AUTHORING-COURSE.md §7](./PACK-AUTHORING-COURSE.md).

This doc does NOT cover:
- The Build Yourself self-development courses (separate spec at [CHRISTIAN-FOUNDATION-SPEC.md](./curriculum/CHRISTIAN-FOUNDATION-SPEC.md))
- The AI Companion (separate plan at [AI-COMPANION-PLAN.md](./AI-COMPANION-PLAN.md))

---

## 1. Core principle — load on demand

**DECIDED:** content is loaded on demand, not bundled into the binary, wherever
the content is large or changes more often than EAS rebuilds. This extends the
streaming pivot already done for lesson bodies.

| Content type | Storage | Load timing |
|---|---|---|
| Lesson bodies (chunks, dialogue, etc.) | Supabase Storage | First open per device → cache |
| Phrasebook entries (per language / per region) | **Storage** (TBD) | First entry of a category opened |
| Cultural Guide articles (per country) | **Storage** (TBD) | When user opens a country page |
| Money & Market live data (FX rates, prices) | Backend cache (TBD: Supabase Edge or VPS) | Per-session, refreshed on a schedule |
| Airport-to-City content (per airport) | **Storage** (TBD) | When user picks an airport |
| Meet Travellers profiles | Supabase Postgres + Realtime | Live on view |
| Safari & Parks content (per park) | **Storage** (TBD) | When user opens a park page |
| **Bundled in binary:** course manifests, speaker packs, jurisdiction packs, UI chrome, app shell |

The binary stays small (≤ 30 MB target post-streaming-pivot). The cloud holds
the world.

---

## 2. Feature placement — Bundled: course IS the travel pack (DECIDED)

**Decision (2026-05-05, revised):** each **language course is also the travel
pack for that destination**. One purchase, one SKU, one country bundle. The
course delivers both the language curriculum AND the rich destination toolkit
(phrasebook / cultural guide / airport-to-city / safari & parks / cost-of-living).

A small set of features stays free as the funnel — the "thin" travel utilities
that drive affiliate clicks but aren't a substitute for a real destination
guide.

**Why bundled, not free-travel + paid-course:**

- **Honest pricing.** Lonely Planet costs ~$25-30 for a printed guidebook
  with no audio, no learning. $14.99 for course + complete travel toolkit
  + audio undercuts that and offers more.
- **Clear product identity.** "The travel app for people who care about
  the language and the culture" — different from Duolingo (no travel),
  Lonely Planet (no learning), Google Translate (no depth).
- **Higher per-user revenue.** Smaller free funnel, bigger purchase value.
  For a niche audience (people interested in less-common languages and real
  cultural depth), this works.
- **Less code surface.** One tier instead of two; no constant gating logic;
  fewer moderation issues.
- **Drives course development.** Travelling to a country we don't have a
  course for? That's our roadmap. Demand creates the next pack.

**Trade-off accepted:** travellers who refuse to learn the language but want
deep destination content won't find Rwendo a fit. They use the free leftovers
(FX, weather, meet travellers, translation) or move to a different app. We're
not optimising for that user.

### Tier table

| Tier | Price | What's included |
|---|---|---|
| **Free** | $0 | Money & Market (FX + cost-of-living) / Weather + public holidays / Meet Travellers (read + post profile) / Live tap-to-translate (rate-limited) / Country picker. **Plus:** in-app ads + affiliate links (Skyscanner / Booking / Airalo / SafetyWing / GetYourGuide). The free tier is a funnel, not a product. |
| **Language Course = Country Bundle** | $14.99 per language (one-time) | The complete destination toolkit for the target language's primary country: 100-lesson curriculum + Phase 8 AI conversation practice + Phrasebook (500+ phrases, audio) + Cultural Guide + Airport-to-City + Safari & Parks + region-specific Cost-of-Living. Native-reviewed content. |
| **AI Companion / Premium** (Phase H) | subscription, TBD | All of the above + voice mode (full-duplex Conv AI) + multiple companion personas + depth-level progression + memory schema + crisis triggers. |

### Feature placement detail

| Feature | Tier | Why |
|---|---|---|
| **100-lesson curriculum** | Course purchase | The structured learning. |
| **Phase 8 AI conversation** | Course purchase + AI tier | Compute cost on top of course content. |
| **Phrasebook (500+ phrases, audio, by situation)** | Course purchase | Part of the destination bundle. |
| **Cultural Guide** (etiquette / scams / dress / tipping / holidays) | Course purchase | Part of the destination bundle. |
| **Airport-to-City** (taxi vs train, scams, fares) | Course purchase | Part of the destination bundle. |
| **Safari & Parks** (where relevant — Zimbabwe, Kenya, etc.) | Course purchase | Part of the destination bundle. Affiliate-monetised on top (Booking lodges, GetYourGuide tours). |
| **Cost-of-Living detail per city** (curated) | Course purchase | Beyond the free FX/averages. |
| Money & Market — live FX + global cost-of-living averages | Free | Commodity data; can't gate. |
| Weather + public holidays | Free | Commodity APIs. |
| Meet Travellers (read + own profile) | Free | Network effect; gating kills it. **Tier-gated extras:** advanced filters, women-only mode, video call (TBD §8). |
| Live tap-to-translate | Free with rate limit | Cheap (DeepL free tier or LibreTranslate self-hosted). |
| Voice mode (Conv AI full-duplex) | AI Companion subscription | Compute cost. |
| AI Companion personas + depth levels | AI Companion subscription | The recurring-revenue product. |

### What "the country bundled with the course" means concretely

Each language course is mapped to a primary destination country. The bundle
content for that country is authored alongside the course curriculum.

| Language course | Primary country | Travel content scope |
|---|---|---|
| Learn Shona | Zimbabwe | Harare / Bulawayo / Vic Falls; safari (Hwange, Mana Pools); kombi system; bond notes / USD; tsika; mbira music |
| Learn English (for Shona speaker) | UK / global English-speaking | London airports; UK transport; tipping (low); English NHS basics |
| Learn English (for French speaker) | UK / Canada / Australia | Same scope, Francophone-tourist framing |
| Learn English (for Chinese speaker) | UK / US / Singapore | English-speaking destinations Mandarin speakers commonly travel to |
| Learn English (for Tagalog speaker) | Middle East / US / UK | OFW destinations |
| Learn French | France + Francophonie | Paris / Marseille / Lyon; trains; Quebec; Brussels; Senegal |
| Learn Mandarin | Mainland China + diaspora | Beijing / Shanghai / Guangzhou; Great Wall; HK basics |
| Learn Tagalog | Philippines | Manila / Cebu / Boracay; jeepney; halo-halo; balikbayan culture |

Each course-bundle is a coherent product. Authoring effort is non-trivial but
this aligns with what we're already doing for the language curriculum — the
travel content is additive per-pack, not a separate authoring run.

---

## 3. Data freshness — three tiers (DECIDED)

Per Bowen's framing:

- **Static** (ships in app, updates on app release): authored prose — phrasebook entries, cultural guide articles, safari park descriptions, base airport-to-city routes.
- **Semi-live** (cached server-side, refresh daily/hourly): exchange rates, typical market prices, weather, airport transfer fares, public holidays.
- **Live** (fetched on demand, no cache): flight search, hotel availability, traveller presence in a city, ads.

**Architecture:** the Expo app talks to **our backend** (Supabase + Edge Functions, with optional Node API on the Contabo VPS for heavier or paid workflows). The backend talks to third-party APIs. This:

- Keeps API keys out of the client
- Lets us swap providers without shipping app updates
- Gives us a single cache layer
- Makes rate-limit accounting honest

---

## 4. APIs & vendors (DECISIONS NEEDED — all TBD)

Pre-curation done; pick which to integrate first.

| Domain | Top pick | Free tier | Backup |
|---|---|---|---|
| **FX rates** | exchangerate.host or Frankfurter | Yes, no key | Open Exchange Rates |
| **Translation (text)** | DeepL free 500k chars/mo OR LibreTranslate self-hosted on Contabo (free forever) | Yes | Google Cloud Translate (paid) |
| **TTS for phrasebook audio** | Pre-record common phrases (cheap, offline) + ElevenLabs for fallback / new languages | n/a | Google Cloud TTS |
| **Weather** | Open-Meteo | Free, no key | OpenWeatherMap |
| **Public holidays** | Calendarific (1k/mo) OR Nager.Date (free) | Yes | — |
| **Maps / places** | MapTiler / Mapbox free tier | Yes | Google Maps (paid past free tier) |
| **POIs** | OpenTripMap / Foursquare Places free tier | Yes | Google Places (paid) |
| **Flight search** | Skyscanner Affiliate (deep-link out, earn commission) | Yes | Kiwi.com Tequila / Duffel |
| **Hotel search** | Booking.com Affiliate Partner Program | Yes | Hotels.com / Agoda |
| **Tours & activities** | GetYourGuide partner OR Viator affiliate | Yes | — |
| **eSIMs** | Airalo Partners (affiliate) | Yes | — |
| **Travel insurance** | SafetyWing affiliate | Yes | World Nomads |
| **Airport flight info** | AeroDataBox on RapidAPI free tier | Yes (low) | AviationStack |
| **Visa requirements** | Curate ourselves; link to embassy sites | n/a | Sherpa (paid) |

**TBD:** which of these are wired into the backend in **Phase 2** of the build order (§7 below).

---

## 5. Backend architecture (TBD)

Two paths and they're not exclusive:

- **Supabase Edge Functions** for everything that's a thin proxy + cache. FX rates, translation, weather, public holidays — short-lived requests, low CPU, easy to write in TS.
- **Node API on the Contabo VPS** for heavier workflows that need more memory, longer timeouts, or self-hosted services (LibreTranslate, image processing, scrapers if we ever go that route, eventual ML).

Recommendation: start with Supabase Edge for everything; move to VPS only for the workloads that strain Edge limits. This keeps deploy story simple in v1.

**TBD:** confirm Supabase Edge as primary; decide whether to spin up the Contabo VPS now or defer to Phase 2.

---

## 6. Monetisation model (DECIDED in principle, TBD on rates)

Three revenue streams, all running in parallel:

1. **Per-pack purchases (RevenueCat IAP)** — language courses (current), travel packs (planned), specific destination bundles.
2. **Affiliates** — flights / hotels / tours / eSIMs / insurance. Commission per booking. Zero ongoing cost; integrate widgets / deep-links per Phase 2.
3. **Advertising** — direct-sold timeslots (Nairobi safari operator buys Kenya banner for August) + AdMob fallback when no direct-sold slot is filled. Native placements (sponsored phrasebook entry, featured lodge) command higher rates.

**Architecture:** every screen has an `<AdSlot id="kenya-safari-header" />` component that asks the backend: "what should fill slot X for user in country Y today?" Backend returns either a direct-sold creative or routes to AdMob. **No app updates needed to change ads.**

**TBD:**
- Direct ad rates (per-impression / per-day / per-week)
- Ad slot inventory (how many slots per screen)
- AdMob account setup
- Ad network rev-share if any (Phase 4 problem)

---

## 7. Build order (DECIDED — Bowen's Phase 1-4)

**Phase 1 — Static value ships:**
- Phrasebook (top 10 launch countries, 100 phrases each, audio pre-recorded)
- Cultural Guide (10 countries, written prose + scams + tipping)
- Safari & Parks (10 parks for the launch countries with a Safari relevance)
- Airport-to-City (10 airports curated)
- Money & Market — live FX (always-on, free) + curated cost-of-living for top 20 cities
- "Report a price" button to crowdsource updates

**Phase 2 — Wire affiliates:**
- Skyscanner (flights — deep link out)
- Booking.com (hotels)
- GetYourGuide (activities)
- Airalo (eSIMs)
- SafetyWing (insurance)

Zero ongoing cost, all upside, gives the app a "do things" layer.

**Phase 3 — Meet Travellers (Supabase):**
- Opt-in city-level location sharing (no GPS)
- Profile (interests / languages / dates)
- Filterable list of who's in your city now
- In-app messaging
- Trust & safety from day one (photo verification, report/block, no exact location, women-only filter, community guidelines)

**Phase 4 — Ad platform:**
- Direct-sold timeslots (admin panel + campaigns + geo-targeting + creative upload + click tracking)
- AdMob fallback
- Native placements (sponsored phrasebook entries, featured lodges, sponsored airport transfers)

Only worth building once meaningful DAU exists.

---

## 8. Open questions — step-by-step queue

We work through these in order. Once a question moves to DECIDED, we update §1-7 and move to the next.

1. ~~Phrasebook home (§2) — A / B / C / D?~~ **DECIDED 2026-05-05:** travel pack is free, phrasebook is in the free tier; courses are paid for the learning value, not lookup.
2. **Backend choice** (§5) — Supabase Edge only, or Edge + Contabo VPS now?
3. **Top 10 launch countries** (§7 Phase 1) — which countries get full content first?
4. **Per-pack pricing** — language courses (current AU$14.99) + travel packs (TBD)
5. **API integrations to prototype first** — pick 2 from §4 to wire end-to-end as proof of concept
6. **"Report a price" UX** — how does crowdsourcing work without spam? Verification floor?
7. **Meet Travellers safety floor** — what's the minimum viable safety set for v1 launch?
8. **Ad slot inventory** — per-screen count + dimensions + targeting attributes

---

*End of v0.1. Each section gets fleshed out as we work through the open
questions queue in §8.*
