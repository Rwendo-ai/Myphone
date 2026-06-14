#!/usr/bin/env bash
# Rwendo auto-deploy poller — ships BOTH halves of the app from one git push.
#
#   • Web   : rebuilds the Next.js app and reloads PM2.
#   • Mobile: publishes an EAS Update (OTA) so installed apps pick up JS/asset
#             changes without a store release. Native changes are detected and
#             flagged instead — those need a full `eas build` ("next app").
#
# Runs on a schedule (cron). When the tracked branch on origin has moved ahead
# of the local checkout it pulls and deploys; when already up to date it exits
# immediately, so it's cheap to run every couple of minutes.
#
# Config via env (all optional) — typically set in /etc/rwendo-deploy.env:
#   RWENDO_APP_DIR        repo path on the server     (default /var/www/rwendo)
#   RWENDO_DEPLOY_BRANCH  branch to track             (default master)
#   RWENDO_PM2_NAME       PM2 process name            (default rwendo-web)
#   RWENDO_EAS_CHANNEL    EAS Update channel for OTA  (default production)
#   RWENDO_ALWAYS_WEB     set to 1 to always rebuild web, even with no web/ diff
#   EXPO_TOKEN            Expo access token. If unset, OTA publishing is skipped.
set -euo pipefail

APP_DIR="${RWENDO_APP_DIR:-/var/www/rwendo}"
BRANCH="${RWENDO_DEPLOY_BRANCH:-master}"
PM2_NAME="${RWENDO_PM2_NAME:-rwendo-web}"
EAS_CHANNEL="${RWENDO_EAS_CHANNEL:-production}"
LOCK="/tmp/rwendo-autodeploy.lock"

log() { echo "[$(date -u +%FT%TZ)] $*"; }

# Prevent overlapping runs: a build can take longer than the 2-minute cadence.
exec 9>"$LOCK"
if ! flock -n 9; then
  log "another deploy is in progress; skipping this tick"
  exit 0
fi

cd "$APP_DIR"
git fetch origin "$BRANCH" --quiet

local_rev="$(git rev-parse HEAD)"
remote_rev="$(git rev-parse "origin/$BRANCH")"

if [ "$local_rev" = "$remote_rev" ]; then
  exit 0   # already up to date — nothing to do
fi

log "deploying $BRANCH: ${local_rev:0:7} -> ${remote_rev:0:7}"

# Capture what changed before we move HEAD.
changed="$(git diff --name-only "$local_rev" "$remote_rev")"

git checkout "$BRANCH" --quiet
git pull origin "$BRANCH" --quiet

# ---------------------------------------------------------------- Web ----
if [ -n "${RWENDO_ALWAYS_WEB:-}" ] || echo "$changed" | grep -q '^web/'; then
  log "web: building Next.js"
  ( cd "$APP_DIR/web"
    npm install --no-audit --no-fund
    npm run build
    pm2 reload "$PM2_NAME" --update-env )
  log "web: deployed"
else
  log "web: no web/ changes — skipped"
fi

# ------------------------------------------------------------- Mobile ----
# Native-affecting files cannot ship over the air — they need a new EAS build.
native_changed="$(echo "$changed" | grep -E \
  '^(app\.json|app\.config\.|eas\.json|package\.json|package-lock\.json|ios/|android/|metro\.config|babel\.config)' \
  || true)"

# JS / asset files an OTA update CAN ship (exclude the web app).
js_changed="$(echo "$changed" | grep -vE '^web/' \
  | grep -E '\.(ts|tsx|js|jsx)$|^assets/|^app/|^components/|^data/|^constants/|^hooks/|^lib/' \
  || true)"

if [ -n "$native_changed" ]; then
  log "MOBILE: native files changed — OTA cannot ship these."
  log "MOBILE: a new build is required:  eas build --profile production --platform all"
  echo "$native_changed" | sed 's/^/        /'
fi

if [ -z "${EXPO_TOKEN:-}" ]; then
  log "mobile: EXPO_TOKEN not set — skipping OTA publish"
elif [ -z "$js_changed" ]; then
  log "mobile: no JS/asset changes — skipping OTA publish"
else
  msg="$(git log -1 --pretty=%s)"
  log "mobile: publishing OTA to channel '$EAS_CHANNEL' — \"$msg\""
  if npx --yes eas-cli@latest update --channel "$EAS_CHANNEL" \
       --message "$msg" --non-interactive; then
    log "mobile: OTA published"
  else
    log "mobile: OTA FAILED (web deploy is unaffected — fix EAS auth/channel)"
  fi
fi

log "deploy complete"
