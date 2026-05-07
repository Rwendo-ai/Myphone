# Authoring a New Jurisdiction Pack — Self-Contained Recipe

> **Audience:** an LLM agent that has been handed only this file and the repo, with one task: produce a complete jurisdiction pack for a single country or regional bloc. No other context required.

> **Scope:** one jurisdiction per agent run. Jurisdictions are bounded — there are roughly 50-200 worth authoring globally. Most of the work is research; the code shape is small.

---

## 1. What a jurisdiction pack is

Rwendo runs on three orthogonal pack types:

- **Speaker pack** — drives all readable text in the app. One active per user.
- **Course pack** — curriculum/content the user is learning. One or more active.
- **Jurisdiction pack** *(this file is about creating one)* — country-bound regulatory + cultural + safety stuff: privacy/terms text, currency, age-of-consent, refund rights, crisis lines, voice consent rules. ONE active per user.

A user is the join: `speaker × courses[] × jurisdiction`.

The jurisdiction pack exists because launching a single binary globally requires per-region customisation that has nothing to do with language: minimum age varies (16 in AU, 13 in US, 16 in EU), refund rights vary (14-day cooling-off in EU/UK, none in AU), crisis hotline numbers vary, and Privacy/Terms text needs lawyer authoring per region. All of that consolidates here.

**Note (post-2026-05-05 streaming pivot):** jurisdiction packs are still **bundled in the binary** — they're tiny (~5KB per pack), change rarely, and a missing jurisdiction breaks the legal screens. Only **course content** (lesson bodies) moved to Supabase Storage in the streaming pivot. See PACK-AUTHORING-COURSE.md §1.5 for the new course-content storage model. Jurisdiction pack authoring is unaffected.

The jurisdiction is set at signup (declared by the user during onboarding) and stored on `profiles.jurisdiction_id`. The same user can travel without changing it — jurisdiction is "where I live", not "where I am right now".

## 2. Jurisdiction model — country vs bloc

Two kinds:

- **Country jurisdictions** — `AU`, `GB`, `US`, `ZW`, `JP`, `IN`, etc. ISO 3166-1 alpha-2 codes. Each `countryCodes` array contains one ISO code.
- **Bloc jurisdictions** — `EU` is one. Covers all 27 EU member states. The `countryCodes` array contains all the ISO codes the bloc covers.

Choose which to build. **Default to bloc when feasible** — the EU pack covers 27 countries with one set of GDPR-compliant text. Splitting France out from EU would only make sense if French law differed from EU law in a meaningful way for our app's content (rare).

The `getJurisdiction(countryOrId)` resolver in `data/jurisdictions/index.ts` matches country codes to packs — the EU pack catches all 27 ISO codes through its `countryCodes` array.

## 3. The single input the agent needs

Before starting, gather:

| Field | Example | Notes |
|---|---|---|
| `id` | `FR`, `EU`, `JP`, `IN` | ISO 3166-1 alpha-2, OR the bloc code (`EU` is non-ISO). Stable forever. |
| `name` | `France`, `European Union`, `Japan`, `India` | Display name. In English (jurisdictions are English-named regardless of speaker). |
| `countryCodes` | `['FR']`, `['AT', 'BE', ..., 'SK']`, `['JP']` | All ISO 3166-1 codes this pack covers. |
| `extends` | `'EU'`, `'AU'`, undefined | If unspecified fields fall back. Use `'AU'` as default fallback for any pack that hasn't been lawyer-authored yet. Use `'EU'` for individual EU member states if you split them out. |
| `currency` | `{ code: 'EUR', symbol: '€' }` | ISO 4217 + display symbol. |
| `minAge` | `16`, `13`, `15` | Minimum user age IN YEARS. See §4. |
| `coolingOffDays` | `14`, `0` | Statutory refund period. EU/UK = 14, most others = 0. |
| `voiceConsentRequired` | `false`, `true` | Whether the user must explicitly consent before mic use. Only `true` for US-IL (BIPA) and any state copycat law (TX-CUBI, etc.). |
| `dataResidency` | `'EU'`, `'AU'`, `'US'`, `'global'` | Where user data must physically reside. Influences Supabase region. |
| `languageOfRecord` | `'english'` (default) | Which speaker pack the legal text is authored in. Defaults to `english` for v1. |
| `isEu` / `isUk` | booleans | Cached flags for fast filtering. |
| `crisisResources` | array of phone/URL/context | See §5 — researched per region. |
| `consentDisclosures` | object with 3 strings | See §6 — speaker-language strings injected into onboarding consent text. |
| `privacyPolicyMd` / `termsOfServiceMd` | markdown strings | Lawyer-authored. v1 ships empty for non-AU regions and uses the AU template via `extends`. |

If you don't have the regulatory facts (minAge, coolingOffDays, voiceConsentRequired, dataResidency), stop and research before writing. These are legal facts, not authoring preferences.

## 4. Pre-authoring research checklist

Before writing, gather these facts. Sources are public; cite them in code comments.

### 4.1 Minimum age

Find the minimum age at which a user can give valid consent for data processing in this region. Sources:

- EU: GDPR Article 8 — 16, but member states can lower to 13. Most lower; bloc default is 16.
- UK: Data Protection Act 2018 — 13.
- US: COPPA — 13 (federal floor).
- AU: Privacy Act 1988 — generally treated as 13, with practical compliance benchmarks at 16 (Children's Online Privacy Code).
- Other countries: research per local data protection law.

For Rwendo specifically, set `minAge` to the regulatory floor for that jurisdiction. The app uses this in onboarding.

### 4.2 Cooling-off / refund rights

- EU: Consumer Rights Directive 2011/83/EU — 14 days for distance contracts.
- UK: Consumer Contracts Regulations 2013 — 14 days.
- AU: Australian Consumer Law — no statutory cooling-off for digital subscriptions; refunds at our discretion or via Apple/Google store policies.
- US: No federal statutory right; relies on platform refund policies.

Set `coolingOffDays` to the statutory minimum. We may extend voluntarily; that's a separate decision.

### 4.3 Voice / biometric consent

- US-IL: Biometric Information Privacy Act (BIPA) — explicit prior consent required before collecting voiceprints.
- US-TX, US-WA: similar but narrower.
- EU: GDPR Article 9 — biometric data is a special category, consent required.

For our use case (ElevenLabs speech-to-text — audio sent to provider, deleted within 24h, no voiceprint stored), the consent requirement is mild. But for safety, set `voiceConsentRequired: true` for any US jurisdiction to cover BIPA-style risk.

### 4.4 Data residency

- EU: data must reside within EU/EEA per GDPR + Schrems II. US transfers via Standard Contractual Clauses (SCCs).
- AU: APP 8 — overseas transfers must be governed by SCCs.
- US: no general residency requirement.
- China, Russia: strict data localisation laws (out of v1 scope).

For Rwendo, set `dataResidency: 'EU'` for EU/UK, `'AU'` for AU, `'US'` for US, `'global'` otherwise.

### 4.5 Crisis resources

Research the local equivalent of:

- General crisis / suicide hotline (e.g. AU=Lifeline 13 11 14; US=988; UK=Samaritans 116 123)
- Mental health support (e.g. AU=Beyond Blue; UK=Shout)
- Domestic violence (e.g. AU=1800RESPECT; UK=Refuge)
- Youth-specific (e.g. AU=Kids Helpline; US=Trevor Project; UK=Childline)
- Indigenous-specific (where relevant — e.g. AU=13YARN)

For each: name, phone (or text-line code), URL, context. The `context` field maps to AI Companion crisis trigger contexts so the right resource is offered for the right kind of distress.

Source: government health departments, established mental-health charities. Avoid private-sector hotlines unless they're well-known and free.

### 4.6 Vendor processor disclosures

For `consentDisclosures.aiPartnerProcessor` and `voiceProcessor`: a sentence each in the language of record (English by default), explaining that:
- Anthropic (Claude) is a US company. Data transfer covered by SCCs.
- ElevenLabs (TTS+STT) is a US company. Audio deleted within 24h.

These appear in the onboarding consent checkboxes for users in this jurisdiction.

## 5. Files to create

For jurisdiction ID `{JURIS_ID}` (e.g. `JP`, `IN`, `FR`):

```
data/jurisdictions/{JURIS_ID}/
  index.ts                  ← all metadata
  privacy-policy.md         ← (optional) lawyer-authored content
  terms-of-service.md       ← (optional) lawyer-authored content
```

The legal markdown files are optional in v1 — when they're missing, the code falls back to AU via `extends`. Once the lawyer authors per-region versions, they import via:

```ts
import privacyPolicyRaw from './privacy-policy.md';   // requires Metro markdown loader if not configured
```

Or simpler — paste the markdown directly as a template literal in `index.ts`'s `privacyPolicyMd` field.

### 5.1 `data/jurisdictions/{JURIS_ID}/index.ts` template

```ts
import { JurisdictionPack } from '../../../types/packs';
import {EXTENDS_PACK} from '../{EXTENDS_ID}';

/**
 * {JURIS_NAME} jurisdiction pack.
 *
 * v1 status: {STATUS_NOTE}
 *
 * Notable {JURIS_NAME}-specific differences vs {EXTENDS_ID}:
 *  - {DIFF_1}
 *  - {DIFF_2}
 *  ...
 */
const {JURIS_ID}: JurisdictionPack = {
  ...{EXTENDS_PACK},
  id: '{JURIS_ID}',
  name: '{JURIS_NAME}',
  countryCodes: ['{ISO_CODE_1}', '{ISO_CODE_2}', ...],
  extends: '{EXTENDS_ID}',
  currency: { code: '{CURRENCY_CODE}', symbol: '{CURRENCY_SYMBOL}' },
  minAge: {MIN_AGE},
  coolingOffDays: {COOLING_OFF_DAYS},
  voiceConsentRequired: {true|false},
  dataResidency: '{EU|AU|US|global}',
  isEu: {true|false},
  isUk: {true|false},
  privacyPolicyMd: '',           // populated when lawyer authors per-region text
  termsOfServiceMd: '',
  crisisResources: [
    { name: '{NAME_1}', phone: '{PHONE_1}', url: '{URL_1}', context: 'crisis_general' },
    { name: '{NAME_2}', phone: '{PHONE_2}', url: '{URL_2}', context: 'mental_health' },
    { name: '{NAME_3}', phone: '{PHONE_3}', url: '{URL_3}', context: 'youth' },
    { name: '{NAME_4}', phone: '{PHONE_4}', url: '{URL_4}', context: 'domestic_violence' },
    // optional 5th: indigenous-specific or other regional context
  ],
  consentDisclosures: {
    aiPartnerProcessor: '{Anthropic_disclosure_in_languageOfRecord}',
    voiceProcessor:     '{ElevenLabs_disclosure_in_languageOfRecord}',
    dataController:     '{Rwendo_legal_entity_in_languageOfRecord}',
  },
};

export default {JURIS_ID};
```

The `...EXTENDS_PACK` spread at the top is what makes the `extends` mechanism work: any field not explicitly overridden inherits from the parent jurisdiction. So a minimal Spain pack might be:

```ts
const ES: JurisdictionPack = {
  ...EU,
  id: 'ES',
  name: 'Spain',
  countryCodes: ['ES'],
  extends: 'EU',
  // everything else inherits from EU — currency, minAge, coolingOffDays, etc.
  // override only what differs (e.g. crisis numbers if Spain-specific)
  crisisResources: [
    { name: 'Teléfono de la Esperanza', phone: '717 003 717', url: '...', context: 'crisis_general' },
    // ...
  ],
};
```

This keeps individual EU member-state packs short.

## 6. Consent disclosures — the 3 strings

`consentDisclosures` carries 3 short strings shown in onboarding consent checkboxes for this jurisdiction. They're authored in `languageOfRecord` (default English). The runtime substitutes them into a fixed template:

- `aiPartnerProcessor`: explains Anthropic. Pattern: *"Anthropic, Inc. (Claude AI) — operates from {country}. Standard contractual clauses cover data transfer from {jurisdiction} residents under {applicable_law}."*
- `voiceProcessor`: explains ElevenLabs. Pattern: *"ElevenLabs (TTS + STT) — operates from {country}. Audio transcripts are deleted within 24 hours."*
- `dataController`: identifies the legal entity. Pattern: *"Rwendo (sole-developer entity, {country})"* or post-incorporation *"Rwendo Pty Ltd (Australia)"*.

Adjust the language of these strings to match the jurisdiction's legal terminology. EU jurisdictions should reference GDPR; UK should reference UK GDPR + DPA 2018; AU should reference Privacy Act 1988 + APP 8; US should reference state laws as applicable.

## 7. Privacy policy / terms text

For v1, leave `privacyPolicyMd` and `termsOfServiceMd` as empty strings. The legal screens fall back to a banner that says "Showing the AU Privacy Policy template — a {jurisdiction.name}-specific version is being prepared".

For shipping with proper region-authored text:

1. Get a draft from a privacy lawyer in the jurisdiction.
2. Paste the markdown into either `index.ts`'s `privacyPolicyMd` template literal OR a sibling `privacy-policy.md` file imported as raw text.
3. Update the legal screens to render markdown if not already.
4. Re-test all consent flows for the jurisdiction.

This is lawyer-bound work. The agent's job ends at scaffolding the structure — actual policy text needs human legal authoring.

## 8. Registry updates

After creating the files, edit `data/jurisdictions/index.ts`:

Existing pattern:
```ts
import { JurisdictionPack, JurisdictionPackId } from '../../types/packs';
import AU from './AU';
import GB from './GB';
import US from './US';
import EU from './EU';
import ZW from './ZW';

export const JURISDICTIONS: Record<JurisdictionPackId, JurisdictionPack> = {
  AU, GB, US, EU, ZW,
};
```

Add the new jurisdiction:
1. Import:
   ```ts
   import {JURIS_ID} from './{JURIS_ID}';
   ```
2. Register:
   ```ts
   {JURIS_ID},
   ```
3. Update `getJurisdiction(idOrCountry)` if the new jurisdiction has unique country code matching needs (most don't — adding to JURISDICTIONS is enough).

## 9. Database rows

Two inserts in Supabase SQL Editor:

```sql
-- 1. The jurisdiction record itself
INSERT INTO public.jurisdictions (
  id, name, country_codes, currency_code, currency_symbol,
  min_age, cooling_off_days, voice_consent_required, data_residency,
  is_eu, is_uk, language_of_record
)
VALUES (
  '{JURIS_ID}', '{JURIS_NAME}', ARRAY[{ISO_CODES}],
  '{CURRENCY_CODE}', '{CURRENCY_SYMBOL}',
  {MIN_AGE}, {COOLING_OFF_DAYS}, {VOICE_CONSENT_BOOL}, '{DATA_RESIDENCY}',
  {IS_EU_BOOL}, {IS_UK_BOOL}, '{LANG_OF_RECORD}'
)
ON CONFLICT (id) DO NOTHING;

-- 2. The pack catalogue entry (so user_packs can FK to it)
INSERT INTO public.available_packs (id, pack_kind, name, is_free, is_active, sort_order)
VALUES (
  'jurisdiction:{JURIS_ID}', 'jurisdiction', '{JURIS_NAME}', true, true, 0
)
ON CONFLICT (id) DO NOTHING;
```

Privacy/Terms markdown can be loaded later via UPDATE statements when the lawyer delivers text:
```sql
UPDATE public.jurisdictions
   SET privacy_policy_md = $$...long markdown text...$$,
       terms_of_service_md = $$...$$,
       updated_at = now()
 WHERE id = '{JURIS_ID}';
```

## 10. Onboarding integration

The onboarding flow has a "Where do you live?" jurisdiction step (file: `app/(auth)/onboarding.tsx`). Currently it shows 5 options: AU, GB, US, EU, ZW.

When you add a new jurisdiction, you have two choices:

**a) Add as a top-level option.** Edit `JURISDICTION_FLAGS` in `app/(auth)/onboarding.tsx` and the `JURISDICTION_IDS` array in `data/jurisdictions/index.ts`. The new option appears in the picker.

**b) Don't add as a top-level option (covered by a bloc).** The user picks "EU" and the EU pack covers their country code via `countryCodes`. Best for individual EU member states unless the per-state pack overrides meaningfully differ.

Most new packs use option (b) for EU members and option (a) for non-EU countries.

## 11. Ship it — from authored files to live for users

A drafted jurisdiction pack is just files + research notes. Going live means: code committed, DB rows in, onboarding picker updated, legal text either lawyer-authored or explicitly extending AU. This section is the canonical end-to-end recipe — the registry edit in §8, DB inserts in §9, and onboarding integration in §10 are pieces of it.

### 11.1 Where each artifact lives

| Stage | Artifact | Location |
|---|---|---|
| **Authored** | Pack metadata + crisis + consent strings | `data/jurisdictions/{JURIS_ID}/index.ts` (in git) |
| **Optional** | Lawyer-authored legal text | `data/jurisdictions/{JURIS_ID}/privacy-policy.md` (or inline as template literal in `index.ts`) |
| **Code-wired** | `JURISDICTIONS` registry | `data/jurisdictions/index.ts` |
| **Database** | Two rows | `jurisdictions` table (the data) + `available_packs` (catalogue stub for `user_packs` FK) |
| **Onboarding** | Picker option | `app/(auth)/onboarding.tsx` — only for top-level options; bloc-covered jurisdictions need no edit (resolution happens via `getJurisdiction(country_code)` walking `countryCodes` arrays) |
| **Bundled** | Compiled into app | `eas build` — jurisdictions are bundled (small + rarely change) |
| **Live** | Visible at signup + applied to existing users | After binary release + DB inserts |

### 11.2 The pipeline (in order)

1. **Research + author** the pack per §3-7. Cite regulatory sources in code comments (e.g. `// minAge per APPI 2017 / Personal Information Protection Commission guidance`).
2. **Wire the code registry** per §8. The pack is invisible until `JURISDICTIONS` references it.
3. **`npx tsc --noEmit` clean**, push to main.
4. **Run the two SQL inserts** from §9 in the Supabase SQL Editor — `jurisdictions` row holds the data, `available_packs` stub lets `user_packs.pack_id = 'jurisdiction:{JURIS_ID}'` satisfy FK.
5. **Decide top-level picker vs bloc-covered** per §10. EU member states usually go bloc-covered (the EU pack catches them via `countryCodes`); non-EU countries usually get a top-level option in onboarding.
6. **If lawyer-authored legal text is ready**, populate `privacyPolicyMd` + `termsOfServiceMd` either via `UPDATE jurisdictions ...` in Supabase OR as a code commit. v1 ships with empty markdown + a banner falling back to the AU template.
7. **Cut a release build** with `eas build`. Jurisdictions are bundled.
8. **Existing users in the new region**: anyone whose stored `profiles.jurisdiction_id` equals the new pack's ID gets the new pack on next session. Anyone whose stored ID is something different but whose actual country falls under the new pack's `countryCodes` will need to re-select their jurisdiction (via Profile → "Where I live") OR wait for a future "we noticed you're in {new country}, switch?" prompt.

### 11.3 Lawyer-authored vs developer-authored fields

| Field | Author | Notes |
|---|---|---|
| `id`, `name`, `countryCodes`, `currency`, `isEu`, `isUk` | Developer | Public facts. |
| `minAge`, `coolingOffDays`, `voiceConsentRequired`, `dataResidency` | Developer (sourced from public regulation) | Cite source in code comments. Lawyer should sign off on the values before public launch. |
| `crisisResources` | Developer (verified live) | Each phone/URL must be verified working at author time. Re-verify annually. |
| `consentDisclosures` (3 strings) | Developer (cross-checked by lawyer) | Short factual statements about Anthropic / ElevenLabs / our entity. Lawyer sign-off before launch. |
| `privacyPolicyMd`, `termsOfServiceMd` | **Lawyer (mandatory pre-launch)** | Until lawyer-authored, leave empty + the legal screen falls back to the AU template with a "showing AU template" banner. Acceptable as v1 stopgap; not acceptable for promoted-region launches. |

### 11.4 Crisis-resource verification — the highest-stakes content

Every entry in `crisisResources[]` MUST:

- Resolve to a live, free-to-call hotline at author time. Test by calling. (Yes — actually call.)
- Match the `context` it's labelled with. A suicide hotline is `crisis_general`, NOT `domestic_violence`. The runtime routes by context.
- Stay current. Phone numbers change. Mitigation: set a calendar reminder to re-verify annually, and add a `last_verified` field to the row in a follow-up migration.

If a crisis resource fails when a user is in distress, the AI Companion crisis-trigger flow lands them at a dead phone. That is a serious harm. **Verify before merging — no exceptions.**

### 11.5 No-OTA constraint (v1)

Jurisdictions are bundled. To add or update one in production requires a binary release. This is acceptable because:

- Jurisdiction packs are tiny (~5KB per pack — mostly strings + numbers + 4-6 crisis resources).
- They change rarely once authored. Crisis-line hot-fixes are infrequent (re-verification annually).
- A jurisdiction that fails to load breaks the legal screens — bundling avoids the "couldn't fetch privacy policy on a metered network" failure mode.

**Phase 2 trigger**: when crisis-resource hot-fixes become operationally common (e.g. a hotline number changes mid-cycle and we need to ship without a release), move `crisisResources` to a Supabase row that the app reads on session start with a bundled fallback.

### 11.6 User discovery + flow

- **At signup**, the jurisdiction picker (`app/(auth)/onboarding.tsx`) shows top-level options. The user's choice writes `profiles.jurisdiction_id`.
- **Existing users** can change their jurisdiction in Profile → "Where I live". Changing it re-loads the legal screens with the new pack's text + currency.
- **Geographic auto-detection** is not implemented. v1 uses self-declared jurisdiction only — see PRODUCT-DESIGN.md §11.5 on why (privacy + IP geolocation accuracy + travelling-user UX).
- **Currency on the pricing screen** comes from the active jurisdiction's `currency.code/symbol`. RevenueCat returns prices in the store-side currency; cross-check that the App Store / Play Store product has the right region pricing configured for this jurisdiction.

### 11.7 What can break in production

- **`extends` referencing an unregistered pack.** `extends: 'EU'` works only if the EU pack is in `JURISDICTIONS`. Validate per §12 (Validation gates) before merging.
- **Empty `privacyPolicyMd` shipping silently.** The legal screen falls back to AU but shows a banner. OK as a v1 stopgap; not OK for any promoted-region launch — get lawyer text in first.
- **Outdated crisis numbers.** Hotlines change without notice. Annual re-verification is the only real defence; consider scheduling a quarterly cadence for high-traffic jurisdictions.
- **Currency mismatch on the pricing page.** If RevenueCat returns prices in the wrong currency for the jurisdiction (e.g. user in Japan sees AUD), check (a) App Store / Play Store has Japan pricing configured AND (b) `available_packs.prices_by_jurisdiction` is populated with a JP entry.
- **`countryCodes` overlap with another pack.** If two registered packs claim the same ISO country code, `getJurisdiction(country_code)` returns whichever the registry iterates to first — non-deterministic. Don't overlap.
- **AI Companion crisis trigger fires + jurisdiction's `crisisResources` is empty.** The runtime hands off the trigger context but has no resources to surface. The user sees a generic message. Always populate at least 2 entries (one general, one mental_health) for any jurisdiction that ships.

## 12. Validation gates

Before declaring done:

1. **TypeScript**: `npx tsc --noEmit` exits 0.
2. **Registered**: `data/jurisdictions/index.ts` imports the pack and includes it in `JURISDICTIONS`.
3. **DB rows**: SELECT 1 FROM jurisdictions WHERE id = '{JURIS_ID}' AND SELECT 1 FROM available_packs WHERE id = 'jurisdiction:{JURIS_ID}' both return rows.
4. **Onboarding picker**: if added as a top-level option, the new jurisdiction appears in onboarding's "Where do you live?" step. If as bloc-covered, picking the bloc + a country in `countryCodes` resolves to the right pack via `getJurisdiction(country_code)`.
5. **Crisis resources**: every `crisisResources[]` entry has a real, free, accessible-now phone or URL. No placeholders like "TBD" or "TODO".
6. **Consent disclosures**: all 3 strings in `consentDisclosures` are authored, not empty.
7. **`extends` chain resolves**: if `extends: 'EU'`, the EU pack must exist (it does). If extending an unauthored pack, fall back to AU.
8. **Lawyer-authored legal text**: status documented. Either populated, or `privacyPolicyMd`/`termsOfServiceMd` are empty AND a TODO is in the file's docstring.

## 13. Common mistakes to avoid

- **Hardcoding `minAge: 18`.** Don't. Use the regulatory floor for the jurisdiction. 18 is rarely correct.
- **Inventing crisis resources.** Use only real, government-recognised or established-charity hotlines. Verify each phone number is current.
- **Skipping `extends`.** Without `extends`, all unauthored fields default to undefined and break the legal screens. Always extend something — `AU` if nothing else fits.
- **Splitting EU member states unnecessarily.** France, Germany, Italy etc. are covered by the EU pack via `countryCodes`. Only split out if French law differs from EU law for OUR app's content (rare; usually unnecessary).
- **Authoring privacy/terms text yourself.** That's lawyer work. Leave the markdown empty + flag for legal review.
- **Forgetting the `available_packs` row.** The jurisdictions table holds the pack content; the available_packs row is the catalogue stub that user_packs can FK to. Both required.

## 14. Boundary — what a jurisdiction pack does NOT contain

Don't put in a jurisdiction pack:

- **UI strings or speaker chrome**. Speaker pack territory.
- **Curriculum content**. Course pack territory — and post-streaming-pivot, lesson bodies live in Supabase Storage rather than git. See `PACK-AUTHORING-COURSE.md` §1.5.
- **AI persona / system prompts**. Speaker pack.
- **Course pricing per region in this file**. Pricing lives in `available_packs.prices_by_jurisdiction` jsonb, set per course pack — see Phase H. The jurisdiction pack carries the **currency code/symbol**, not the prices.
- **AI Companion crisis trigger phrases**. Trigger phrases (regex patterns to detect distress) live in the AI Companion course pack per speaker. The jurisdiction pack carries the phone numbers shown when a trigger fires. Composition happens at runtime.

## 15. Worked example: minimum Japan pack

Inputs:
- `id`: `JP`
- `name`: `Japan`
- `countryCodes`: `['JP']`
- `extends`: `'AU'` (default fallback until lawyer-authored)
- `currency`: `{ code: 'JPY', symbol: '¥' }`
- `minAge`: 13 (Japan's APPI doesn't set a strict floor; 13 is the practical convention)
- `coolingOffDays`: 0 (no statutory cooling-off for digital subscriptions)
- `voiceConsentRequired`: false
- `dataResidency`: `'global'` (Japan has no strict residency rule)
- `isEu`: false
- `isUk`: false
- `crisisResources`:
  - TELL Lifeline (English, in Japan): phone 03-5774-0992
  - Yorisoi Hotline (Japanese): 0120-279-338
  - Inochi-no-denwa (Japanese): 0120-783-556
  - ChildLine Japan (youth): 0120-99-7777

`data/jurisdictions/JP/index.ts`:
```ts
import { JurisdictionPack } from '../../../types/packs';
import AU from '../AU';

const JP: JurisdictionPack = {
  ...AU,
  id: 'JP',
  name: 'Japan',
  countryCodes: ['JP'],
  extends: 'AU',
  currency: { code: 'JPY', symbol: '¥' },
  minAge: 13,
  coolingOffDays: 0,
  voiceConsentRequired: false,
  dataResidency: 'global',
  isEu: false,
  isUk: false,
  privacyPolicyMd: '',  // lawyer to author per APPI requirements
  termsOfServiceMd: '',
  crisisResources: [
    { name: 'TELL Lifeline (EN)',         phone: '03-5774-0992',  url: 'https://telljp.com',                  context: 'crisis_general' },
    { name: 'Yorisoi Hotline',            phone: '0120-279-338',  url: 'https://www.since2011.net/yorisoi',  context: 'mental_health' },
    { name: 'Inochi no Denwa',            phone: '0120-783-556',  url: 'https://www.inochinodenwa.org',       context: 'mental_health' },
    { name: 'ChildLine Japan',            phone: '0120-99-7777',  url: 'https://childline.or.jp',             context: 'youth' },
  ],
  consentDisclosures: {
    aiPartnerProcessor: 'Anthropic, Inc. (Claude AI) — operates from the United States. Data transfers from Japan covered by Standard Contractual Clauses under APPI cross-border requirements.',
    voiceProcessor:     'ElevenLabs (TTS + STT) — operates from the United States. Audio transcripts are deleted within 24 hours.',
    dataController:     'Rwendo (sole-developer entity)',
  },
};

export default JP;
```

Then registry edit, two SQL inserts, optionally add to onboarding picker. Done — Japan is live.

## 16. The acceptance criterion

A jurisdiction pack is shippable when:
- `data/jurisdictions/{JURIS_ID}/index.ts` exists with full metadata
- `data/jurisdictions/index.ts` includes it in `JURISDICTIONS`
- DB has both the `jurisdictions` row AND the `available_packs` `jurisdiction:{JURIS_ID}` row
- All `crisisResources[]` entries verified live
- `consentDisclosures` strings authored
- `tsc --noEmit` exits 0
- Privacy / Terms markdown either populated by lawyer OR explicitly noted as pending

The agent declares "drafted" when scaffold + metadata + crisis resources + consent disclosures are complete. Lawyer text is a separate human gate.
