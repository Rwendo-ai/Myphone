# Remote Ops Setup — build Rwendo from phone / iPad

**Goal:** you (or Claude Code on the web) push to git from any device → changes
ship automatically to **web and mobile** → you see them live. No laptop, no
local dev server required.

**Date:** 2026-06-14

---

## The loop (how it works once set up)

```
  phone / iPad
   │  (talk to Claude Code on the web)
   ▼
  git push  ───────────────►  origin/<branch>
                                   │
                 server cron (every 2 min) sees new commits
                                   │
                 deploy/autodeploy.sh runs on the Contabo server
                   ├─ web/ changed?      → npm build + pm2 reload   (live in ~1 min)
                   ├─ JS/asset changed?  → eas update (OTA)         (app updates on next open)
                   └─ native changed?    → logs "NEW BUILD REQUIRED" (your "next app")
```

- **Web changes**: live within a minute or two of the push.
- **Mobile JS/content changes**: shipped over-the-air; the installed app picks
  them up the next time it's opened (no App Store / TestFlight needed).
- **Native changes** (new native packages, permissions, `app.json`, plugins,
  app version bump): OTA can't carry these. The deploy logs that a new build is
  needed — that's the "substantial change → next app" case. Run a real build:
  `eas build --profile production --platform all`.

---

## Part 1 — Turn on the upgraded auto-deploy  *(do this on the server)*

The server already auto-deploys **web**. These steps add **mobile OTA** and let
it ship from whichever branch you're building on.

```bash
# SSH into the Contabo server, then:
cd /var/www/rwendo
git pull origin master          # get the upgraded deploy scripts

# Install (creates /etc/rwendo-deploy.env, sets up cron). Pick the branch to track:
RWENDO_DEPLOY_BRANCH=master bash deploy/install-autodeploy.sh
#   ^ while actively building from your phone you may prefer to track the
#     working branch so changes ship without a merge step, e.g.:
#   RWENDO_DEPLOY_BRANCH=claude/new-project-0fgrn8 bash deploy/install-autodeploy.sh

# Then add your Expo token so mobile OTA can publish:
nano /etc/rwendo-deploy.env      # set EXPO_TOKEN=...  (see Part 2)
```

Verify it's working:

```bash
tail -f /var/log/rwendo-deploy.log     # watch a deploy happen after a push
```

**Branch choice:** `master` is safest (changes ship only when merged). Tracking
the working branch is fastest (every push ships) but means whatever you push is
live — fine for a solo build sprint, switch back to `master` for stability.

---

## Part 2 — Secrets inventory  *(only you can do this — never paste secrets in chat)*

Claude Code on the web runs in an isolated container and **cannot hold your
secrets**. Place each one where it's consumed. Here's the full map.

### A. Expo / EAS  (mobile OTA + builds)
- **`EXPO_TOKEN`** → `/etc/rwendo-deploy.env` on the server.
  Create at https://expo.dev → Account settings → **Access tokens**.
  This alone unlocks automated mobile OTA. The Expo account that owns the
  project is `vibe1ai` (see `app.json` → `owner`).

### B. Server access  (so you can run Part 1, and so it can pull from git)
- **SSH** to the Contabo box (you already have this).
- **Git pull auth on the server**: the server must be able to `git pull`. If the
  repo is private, add a **read-only deploy key** (GitHub repo → Settings →
  Deploy keys) or a fine-grained PAT in the server's git remote URL.

### C. Supabase  (backend / auth / DB)
- **Mobile & web client**: `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`
  (mobile) and `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (web).
  - Mobile public vars are baked at **build time** → changing them needs a new
    `eas build`, not an OTA.
  - Web vars live in the server's web env (where `pm2` reads them).
- **Server-side service role key** (`SUPABASE_SERVICE_ROLE_KEY`) → web server env
  only. Never ship it to the mobile bundle.
- **Edge Function secrets** are set with `supabase secrets set ...` (these power
  the voice/ConvAI proxy functions seen in the git history).

### D. RevenueCat  (mobile subscriptions)
- **Public SDK API keys** (iOS + Android) → mobile env / `app.json` extra; baked
  at build time → new build to change.
- **Secret API key + webhook** → server side, if you reconcile entitlements to
  Supabase. Configure the RevenueCat webhook to point at your web app / an Edge
  Function.

### E. Web payments — Stripe  (web/package.json already includes `stripe`)
- **`STRIPE_SECRET_KEY`**, **`STRIPE_WEBHOOK_SECRET`** → web server env only.
- **`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`** → web server env (public).
- Point the **Stripe webhook** at `https://<your-web-domain>/api/...` (the
  webhook handler in `web/app`). Verify the signing secret matches.

### F. GitHub  (already connected for this session)
- For Claude Code on the web to push: the GitHub app connection is already in
  place for `rwendo-ai/myphone`. For your **new** apps you'll connect the new
  account in a fresh session, as planned.

---

## Part 3 — Working from phone / iPad

1. Open Claude Code on the web, this repo, and tell it what to change.
2. It commits + pushes to the tracked branch.
3. The server deploys (Part 1). Watch `/var/log/rwendo-deploy.log` if you want.
4. **Web**: refresh the site. **Mobile**: reopen the app to pull the OTA update.

No `git pull` on your side and no local dev server needed — the server is the
build machine.

---

## Part 4 — When you DO need a new build ("next app")

OTA cannot ship native changes. You need `eas build` when you change any of:
`app.json`, `eas.json`, `package.json`/lockfile (native deps), anything under
`ios/` or `android/`, native config plugins, or bump the app `version`.

The deploy log prints **"NEW BUILD REQUIRED"** and lists the offending files, so
you'll always know. Build with:

```bash
eas build --profile production --platform all     # store build
eas build --profile preview    --platform android # quick internal APK
```

---

## Quick "is it wired?" checklist

- [ ] `git pull` on server got the upgraded `deploy/` scripts
- [ ] `bash deploy/install-autodeploy.sh` run, cron installed
- [ ] `EXPO_TOKEN` set in `/etc/rwendo-deploy.env`
- [ ] Pushed a trivial web change → appeared live within ~2 min
- [ ] Pushed a trivial mobile JS change → OTA shows in `rwendo-deploy.log`
- [ ] Supabase / RevenueCat / Stripe secrets confirmed in their right homes
