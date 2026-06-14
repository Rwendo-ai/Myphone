#!/usr/bin/env bash
# One-time installer for Rwendo auto-deploy. Run this ONCE on the server
# (as root). It:
#   1. Copies the poller to /usr/local/bin/rwendo-autodeploy.sh
#   2. Installs a cron entry that runs it every 2 minutes
#   3. Runs one deploy immediately
# Re-running is safe — it replaces the old cron line rather than stacking.
#
# Choose which branch the server tracks by setting RWENDO_DEPLOY_BRANCH
# before running (default master). Example:
#   RWENDO_DEPLOY_BRANCH=master bash deploy/install-autodeploy.sh
set -euo pipefail

APP_DIR="${RWENDO_APP_DIR:-/var/www/rwendo}"
BRANCH="${RWENDO_DEPLOY_BRANCH:-master}"
PM2_NAME="${RWENDO_PM2_NAME:-rwendo-web}"
BIN=/usr/local/bin/rwendo-autodeploy.sh
LOG=/var/log/rwendo-deploy.log

install -m 755 "$APP_DIR/deploy/autodeploy.sh" "$BIN"

# Cron line — branch baked in so the choice persists across reboots.
CRON="*/2 * * * * RWENDO_DEPLOY_BRANCH=$BRANCH $BIN >> $LOG 2>&1"
# Drop any previous rwendo-autodeploy line, keep everything else.
( crontab -l 2>/dev/null | grep -v 'rwendo-autodeploy.sh' ; echo "$CRON" ) | crontab -

echo "Installed."
echo "  poller : $BIN"
echo "  branch : $BRANCH"
echo "  cadence: every 2 minutes"
echo "  log    : $LOG"
echo

# Forced initial deploy. The poller is diff-based (no-op when local == remote),
# so we can't lean on it for the first run — the live PM2 process may be on
# stale code even when git is already current. Build + reload unconditionally.
echo "Running initial build + reload (forced)..."
cd "$APP_DIR"
git fetch origin "$BRANCH" --quiet || true
git checkout "$BRANCH" --quiet || true
git pull origin "$BRANCH" --quiet || true
cd "$APP_DIR/web"
npm install --no-audit --no-fund
npm run build
if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
  pm2 reload "$PM2_NAME" --update-env
else
  pm2 start npm --name "$PM2_NAME" -- start
  pm2 save
fi
echo "Initial deploy complete — $BRANCH is live."
