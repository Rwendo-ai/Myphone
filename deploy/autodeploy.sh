#!/usr/bin/env bash
# Rwendo auto-deploy poller.
#
# Runs on a schedule (cron). When the tracked branch on origin has moved
# ahead of the local checkout, it pulls, rebuilds the Next.js app, and
# reloads the PM2 process. When already up to date it exits immediately,
# so it's cheap to run every couple of minutes.
#
# Config via env (all optional):
#   RWENDO_APP_DIR        repo path on the server   (default /var/www/rwendo)
#   RWENDO_DEPLOY_BRANCH  branch to track           (default master)
#   RWENDO_PM2_NAME       PM2 process name          (default rwendo-web)
set -euo pipefail

APP_DIR="${RWENDO_APP_DIR:-/var/www/rwendo}"
BRANCH="${RWENDO_DEPLOY_BRANCH:-master}"
PM2_NAME="${RWENDO_PM2_NAME:-rwendo-web}"

cd "$APP_DIR"

git fetch origin "$BRANCH" --quiet

local_rev="$(git rev-parse HEAD)"
remote_rev="$(git rev-parse "origin/$BRANCH")"

if [ "$local_rev" = "$remote_rev" ]; then
  exit 0   # already up to date — nothing to do
fi

echo "[$(date -u +%FT%TZ)] deploying $BRANCH: ${local_rev:0:7} -> ${remote_rev:0:7}"

git checkout "$BRANCH" --quiet
git pull origin "$BRANCH" --quiet

cd "$APP_DIR/web"
npm install --no-audit --no-fund
npm run build
pm2 reload "$PM2_NAME" --update-env

echo "[$(date -u +%FT%TZ)] deploy complete"
