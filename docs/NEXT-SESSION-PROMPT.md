# Paste-ready prompt for the next Rwendo session

Copy everything between the `---START---` and `---END---` markers into a
fresh Claude Code session in the Rwendo repo. Don't quote it, don't
paraphrase it — paste the literal text.

---START---

You're picking up Rwendo development. Working directory is the Rwendo
repo on Windows. Read `docs/PROJECT-PROMPT.md` first (sections 4, 5, 7,
10, 11, 14 in particular) — that's the full briefing. Then read
`docs/JOBS.md` for the live punch list.

**Your job today, in order. Don't ask which to do — do them all.**

## 1. Build Yourself authoring (highest priority)

Author **Knowing Yourself Modules 3 through 10** — every remaining
lesson body. That's 80 full `LessonData` lessons across 8 modules. The
manifest already has all the titles. The reinforcement card decks
already exist for every module. You're filling in the lesson bodies.

For each module:
1. The 10 lesson titles are already in
   `data/courses/know-yourself/manifest.ts`.
2. Anchor traditions + skill outcomes per unit are in
   `docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md` §2.
3. Reference shape: pull any m01 or m02 lesson from storage with
   `npx tsx scripts/inspect-know-yourself-m01.ts` (or read the m02
   files we already wrote in `scripts/know-yourself-batch/lessons/`).
4. Author each lesson as JSON at
   `scripts/know-yourself-batch/lessons/m<NN>-l<NN>-<slug>.json`.
   The slug part of the filename must match the id in the manifest
   (e.g. `m03-l01-im-fine-incomplete.json`).
5. Full LessonData schema each time: hook + 3 chunks + pattern +
   6 exercises (mixing 3+ of 5 types) + rwenDialogue + activeRecall +
   mission + phase8. The last lesson of each module (l10) gets 50 XP;
   the rest 25.
6. Editorial: follow `docs/curriculum/CHRISTIAN-FOUNDATION-SPEC.md`.
   Neutral surface, dignity-based self-kindness frame, no Buddhist
   saturation, no other-religion framing. Sources named honestly.
7. After every TWO modules: run
   `npx tsx scripts/upload-know-yourself-batch.ts`,
   delete the local lesson JSONs (`rm -f scripts/know-yourself-batch/lessons/*.json`),
   commit, push OTA to all 3 branches:
   ```
   eas update --branch testflight --message "feat: Knowing Yourself Module X-Y lessons"
   eas update --branch preview     --message "feat: Knowing Yourself Module X-Y lessons"
   eas update --branch development --message "feat: Knowing Yourself Module X-Y lessons"
   ```
   Update `docs/JOBS.md` checklist.

**Author quality matters but don't over-write. Aim for ~2-3KB per
lesson JSON. The full course is 80 lessons × ~2.5KB = ~200KB. You
have plenty of context budget — don't artificially constrain yourself.
Just author.**

## 2. Payment gateway / RevenueCat — finish what's finishable client-side

The dashboard work is gated on the user. But these client-side pieces
can land now:

- **Create + deploy the RevenueCat webhook Edge Function** at
  `supabase/functions/revenuecat-webhook/index.ts` (does not exist yet —
  write it from scratch). It needs to:
  - Verify signature
  - On INITIAL_PURCHASE / RENEWAL of `tier_*`: upsert
    `user_entitlements (user_id, tier, expires_at, lifetime_buyer)`
  - On lifetime SKU: set lifetime_buyer = true
  - On token-pack purchase: increment `user_credits.balance`; if
    `lifetime_buyer = true`, grant 15% more credits
  - Fire `award_xp` with the matching event type
  - Idempotency via the RevenueCat event id
  Deploy with `supabase functions deploy revenuecat-webhook`.

- **Create the `user_entitlements` + `user_credits` tables**. Use the
  Supabase MCP to apply a migration. Schema:
  ```sql
  create table public.user_entitlements (
    user_id uuid references auth.users(id) on delete cascade,
    entitlement text not null,
    expires_at timestamptz,
    source text not null,                    -- 'revenuecat' | 'admin' | 'owner_list'
    lifetime_buyer boolean default false,
    updated_at timestamptz default now(),
    primary key (user_id, entitlement)
  );

  create table public.user_credits (
    user_id uuid primary key references auth.users(id) on delete cascade,
    balance integer not null default 0,
    updated_at timestamptz default now()
  );
  -- RLS: users can read their own row only; service role full access.
  ```

- **Wire `useEntitlements()` to fall back to the DB mirror** when the
  RC SDK is in test-key skip-mode (currently happens during dev). The
  hook should prefer live RC entitlements when available, fall back to
  reading `user_entitlements` for the signed-in user when not. This
  way the webhook → DB → app flow works even before production RC keys
  exist (good for testing).

- **Translate-cards Edge Function**. Spec'd in
  `docs/REINFORCEMENT-CARDS-TRANSLATION.md`. Build the skeleton + ship
  even if you don't have an Anthropic API key configured server-side
  yet — at minimum the function should accept the input shape and
  return the English source unchanged when no API key is available
  (so non-English speakers don't error out).

- **Free-tier quota tracking**. Add server-side counters in a new
  `user_quota` table — track `daily_rwen_messages` (resets at midnight
  UTC) and `lesson_ai_messages_used` (keyed by lesson_id, resets when
  a new lesson starts). Wire the AI proxy endpoint to read + increment
  these before allowing an AI call from free-tier users. Quota constants
  are already in `lib/entitlements.ts` (`FREE_DAILY_RWEN_MESSAGES = 10`,
  `FREE_AI_MESSAGES_PER_LESSON = 3`).

## 3. Update the APK

After 1 and 2 are done, build a fresh Android preview APK so the user
can install everything baked in:

```
eas build --platform android --profile preview --non-interactive --no-wait
```

Then poll for completion (or use a background watcher) and paste the
APK URL in the chat when done.

Also push iOS TestFlight build 4 with auto-submit:
```
eas build --platform ios --profile testflight --auto-submit --non-interactive --no-wait
```

## Style + working rules

- Don't ask for permission before doing things in this list. Do the work,
  report what you did.
- Don't write status updates between every micro-step. One status update
  at the end of each major phase (Module 3-4 done, Module 5-6 done, etc.)
- Don't apologise. Don't explain constraints. Just author.
- Commit often. Push OTA to all 3 branches after every commit that
  affects runtime code or storage content.
- Update `docs/JOBS.md` after each module commits — move items from ⏳
  to ✅.
- If you hit a real blocker (a 5xx from Supabase, a missing env var, a
  type error you can't resolve), report it concisely and continue with
  the next thing.

## What the user is testing on

- iPhone 12 mini: TestFlight Rwendo build 3 (Apple ID
  benocooney@gmail.com, Supabase auth bowencooney@gmail.com /
  60f2f862-a58e-4afc-ae1d-d2bcd39ae5b4 — already in OWNER_USER_IDS)
- Android: latest preview APK (link in last conversation, refresh by
  rebuilding)
- Girlfriend's iPhone: TestFlight Rwendo build 3, signed in as
  charmiephotos1@gmail.com (also in OWNER_USER_IDS)

## Done when

- Knowing Yourself has 100 authored lesson bodies in storage
- All 10 Knowing Yourself units render full lesson → mission → phase8
  → reinforcement cards end-to-end
- `user_entitlements` + `user_credits` + `user_quota` tables exist
- `revenuecat-webhook` and `translate-cards` Edge Functions deployed
- `useEntitlements()` reads DB mirror as fallback
- Fresh Android APK link delivered to user
- iOS TestFlight build 4 submitted to Apple

Go.

---END---

