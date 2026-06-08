#!/usr/bin/env bash
#
# One-shot deploy script for the Rwendo web app on a fresh Contabo VPS
# (Ubuntu 22.04 or 24.04). Idempotent — safe to re-run; will skip steps
# already done.
#
# USAGE on the VPS, as root or via sudo:
#   curl -fsSL https://raw.githubusercontent.com/Rwendo-ai/Myphone/master/web/deploy-contabo.sh | sudo bash
#   (or scp this file up and run: sudo bash deploy-contabo.sh)
#
# What it does:
#   1. Installs Node 20, Nginx, certbot, PM2, git (if missing)
#   2. Clones the repo into /var/www/rwendo
#   3. Installs web/ deps and builds
#   4. Writes a placeholder .env.local (you fill it in BEFORE first start)
#   5. Configures Nginx for rwendo.app + www.rwendo.app with the
#      Stripe-webhook raw-body passthrough
#   6. Starts the app under PM2 + makes PM2 survive reboots
#
# After this script you STILL need to:
#   - Edit /var/www/rwendo/web/.env.local with real Supabase + Stripe keys
#   - Restart: cd /var/www/rwendo/web && pm2 restart rwendo-web
#   - Point rwendo.app A-record at this server's IP at Hostinger DNS
#   - After DNS propagates: sudo certbot --nginx -d rwendo.app -d www.rwendo.app

set -euo pipefail

DOMAIN="rwendo.app"
REPO_URL="https://github.com/Rwendo-ai/Myphone.git"
REPO_BRANCH="master"
APP_DIR="/var/www/rwendo"
WEB_DIR="${APP_DIR}/web"
NODE_MAJOR="20"

require_root() {
  if [[ $EUID -ne 0 ]]; then
    echo "Run as root: sudo bash $0"
    exit 1
  fi
}

log() { echo -e "\n\033[1;34m▶ $1\033[0m"; }

require_root

# ─── 1. Apt deps ────────────────────────────────────────────────────────
log "Updating apt + installing prerequisites"
apt-get update -y
apt-get install -y curl git nginx ufw

if ! command -v node >/dev/null 2>&1 || ! node --version | grep -q "v${NODE_MAJOR}"; then
  log "Installing Node.js ${NODE_MAJOR}.x"
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
  apt-get install -y nodejs
fi

if ! command -v pm2 >/dev/null 2>&1; then
  log "Installing PM2"
  npm install -g pm2
fi

if ! command -v certbot >/dev/null 2>&1; then
  log "Installing certbot + Nginx plugin"
  apt-get install -y certbot python3-certbot-nginx
fi

# ─── 2. Clone or update repo ────────────────────────────────────────────
if [[ -d "${APP_DIR}/.git" ]]; then
  log "Repo exists — pulling latest"
  cd "${APP_DIR}"
  git fetch origin
  git reset --hard "origin/${REPO_BRANCH}"
else
  log "Cloning repo"
  mkdir -p "$(dirname ${APP_DIR})"
  git clone --branch "${REPO_BRANCH}" "${REPO_URL}" "${APP_DIR}"
fi

# ─── 3. Build the web app ───────────────────────────────────────────────
log "Installing web dependencies"
cd "${WEB_DIR}"
npm install --no-audit --no-fund

log "Building"
npm run build

# ─── 4. Placeholder env (idempotent — won't overwrite existing) ─────────
if [[ ! -f "${WEB_DIR}/.env.local" ]]; then
  log "Creating .env.local placeholder (FILL THIS IN before first start)"
  cp "${WEB_DIR}/.env.example" "${WEB_DIR}/.env.local"
  echo "⚠️  Edit ${WEB_DIR}/.env.local with real keys, then: pm2 restart rwendo-web"
fi

# ─── 5. Nginx config ────────────────────────────────────────────────────
log "Writing Nginx config for ${DOMAIN}"
cat > "/etc/nginx/sites-available/${DOMAIN}" <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Stripe webhook — raw body required for signature verification.
    location /api/stripe-webhook {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_request_buffering off;
        client_max_body_size 1m;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINX

ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
# Drop the default catch-all so our server_name match isn't bypassed.
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl reload nginx

# ─── 6. Firewall (UFW) ──────────────────────────────────────────────────
log "Configuring firewall"
ufw allow OpenSSH || true
ufw allow 'Nginx Full' || true
yes | ufw enable || true

# ─── 7. PM2 process ─────────────────────────────────────────────────────
log "Starting (or restarting) the app under PM2"
cd "${WEB_DIR}"
if pm2 list | grep -q rwendo-web; then
  pm2 restart rwendo-web --update-env
else
  pm2 start npm --name rwendo-web -- start
  pm2 startup systemd -u root --hp /root | tail -1 | bash || true
  pm2 save
fi

# ─── Done ──────────────────────────────────────────────────────────────
cat <<EOF

✅ Server-side setup complete.

NEXT STEPS (your hands):

1. Fill in real keys:
     nano ${WEB_DIR}/.env.local
   Required:
     NEXT_PUBLIC_SUPABASE_URL=https://jkjznverqjaokmtvbpqv.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=<from Supabase Dashboard>
     SUPABASE_SERVICE_ROLE_KEY=<from Supabase Dashboard, SECRET>
     STRIPE_SECRET_KEY=<sk_test_… or sk_live_…>
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<pk_…>
     STRIPE_WEBHOOK_SECRET=<whsec_…>
     NEXT_PUBLIC_APP_URL=https://${DOMAIN}
   Then:
     pm2 restart rwendo-web

2. Point DNS at Hostinger:
     A     @     <THIS SERVER IP>     TTL 300
     A     www   <THIS SERVER IP>     TTL 300
   (find this server's IP: \$ curl -4 ifconfig.co)

3. After DNS propagates (5–30 min), provision HTTPS:
     sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}

4. Visit: https://${DOMAIN}

To update later (after pushing new commits to GitHub):
     cd ${APP_DIR} && git pull && cd web && npm install && npm run build && pm2 reload rwendo-web

EOF
