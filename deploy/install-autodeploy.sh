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
echo "Running first deploy now..."
RWENDO_DEPLOY_BRANCH="$BRANCH" "$BIN" || true
