#!/usr/bin/env bash
# One-time installer for Rwendo auto-deploy. Run this ONCE on the server
# (as root). It:
#   1. Copies the poller to /usr/local/bin/rwendo-autodeploy.sh
#   2. Creates /etc/rwendo-deploy.env (secrets + config) if it doesn't exist
#   3. Installs a cron entry that sources that env and runs every 2 minutes
#   4. Runs one deploy immediately
# Re-running is safe — it replaces the old cron line rather than stacking, and
# never overwrites an existing env file.
#
# Choose the tracked branch by setting RWENDO_DEPLOY_BRANCH before running
# (default master). Example, to ship straight from the working branch:
#   RWENDO_DEPLOY_BRANCH=claude/new-project-0fgrn8 bash deploy/install-autodeploy.sh
set -euo pipefail

APP_DIR="${RWENDO_APP_DIR:-/var/www/rwendo}"
BRANCH="${RWENDO_DEPLOY_BRANCH:-master}"
BIN=/usr/local/bin/rwendo-autodeploy.sh
ENV_FILE=/etc/rwendo-deploy.env
LOG=/var/log/rwendo-deploy.log

install -m 755 "$APP_DIR/deploy/autodeploy.sh" "$BIN"

# Secrets + config live here, readable only by root. Cron sources it so the
# poller sees EXPO_TOKEN etc. Created once with a template; never overwritten.
if [ ! -f "$ENV_FILE" ]; then
  cat > "$ENV_FILE" <<EOF
# Rwendo deploy config — sourced by cron before each deploy. Keep this file 600.
RWENDO_APP_DIR=$APP_DIR
RWENDO_DEPLOY_BRANCH=$BRANCH
RWENDO_PM2_NAME=rwendo-web
RWENDO_EAS_CHANNEL=production

# Expo access token for OTA publishing. Create at https://expo.dev -> Account ->
# Access Tokens. Leave blank to skip mobile OTA (web still deploys).
EXPO_TOKEN=
EOF
  chmod 600 "$ENV_FILE"
  echo "Created $ENV_FILE — add EXPO_TOKEN to enable mobile OTA."
else
  echo "Kept existing $ENV_FILE (not overwritten)."
fi

# Cron line — sources the env file, then runs the poller.
CRON="*/2 * * * * . $ENV_FILE 2>/dev/null; $BIN >> $LOG 2>&1"
# Drop any previous rwendo-autodeploy line, keep everything else.
( crontab -l 2>/dev/null | grep -v 'rwendo-autodeploy.sh' ; echo "$CRON" ) | crontab -

echo "Installed."
echo "  poller : $BIN"
echo "  env    : $ENV_FILE"
echo "  branch : $BRANCH"
echo "  cadence: every 2 minutes"
echo "  log    : $LOG"
echo
echo "Running first deploy now..."
set -a; . "$ENV_FILE" 2>/dev/null || true; set +a
"$BIN" || true
