# Rwendo Web

Next.js 15 web version of Rwendo. Same Supabase backend as the mobile app, Stripe for payments. Designed to deploy to a Contabo VPS behind Nginx + Let's Encrypt.

## What's wired

- **Auth** — Google OAuth via Supabase Auth. Same accounts as the mobile app.
- **Chat** — text-only v1. Server proxy at `/api/chat` calls the shared `rwen-chat` Supabase Edge Function, so token billing, fact extraction, and conversation history all share the mobile app's pipeline.
- **Tokens** — read from `user_credits.balance`; the TokenBar pill shows the same number the mobile app shows.
- **Stripe Checkout** — `/cart` lists the 3 token packs (1k / 5.5k / 12k). On success the `/api/stripe-webhook` route calls Supabase's `grant_tokens` RPC. Cross-platform parity: a web purchase shows up immediately when the mobile app refetches.
- **XP** — purchase XP is granted in the Stripe webhook to match the mobile RC webhook's behavior.
- **Profile** — token balance, total XP, recent XP events.

## Not wired in v1

- Voice chat (ElevenLabs Conv AI in the browser is doable; defer to v1.1)
- Course / lesson UI
- Travel feed
- Companion picker / customisation
- Custom companion builder

## Local development

```bash
cd web
npm install
cp .env.example .env.local
# Fill in keys (see below)
npm run dev
# Opens at http://localhost:3000
```

### Required env vars

| Var | Where it comes from |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Project Settings → API (anon/publishable) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Project Settings → API (service_role, SECRET) |
| `STRIPE_SECRET_KEY` | https://dashboard.stripe.com/apikeys (sk_test_… for dev) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard (pk_test_…) |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Developers → Webhooks → your endpoint → Signing secret |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` dev; `https://rwendo.app` prod |

## Supabase setup

The mobile-side migrations already created everything we need:
- `user_credits.balance` + `grant_tokens` RPC
- `profiles.xp` + `admin_bump_xp` RPC
- `xp_events` table
- `rwen-chat` Edge Function (text billing built in)

In Supabase Auth → URL Configuration, add to the Redirect URLs allow-list:
- `http://localhost:3000/auth/callback`
- `https://rwendo.app/auth/callback`

Same Google OAuth client as the mobile app — no new Google Cloud setup.

## Stripe setup

1. Create a Stripe account at https://stripe.com — free, takes 5 minutes.
2. Stripe → Developers → API keys → copy publishable + secret keys into `.env.local`.
3. Stripe → Developers → Webhooks → Add endpoint:
   - URL: `https://rwendo.app/api/stripe-webhook` (or use Stripe CLI for local: `stripe listen --forward-to localhost:3000/api/stripe-webhook`)
   - Events to send: `checkout.session.completed`
   - Copy the signing secret (whsec_…) into `STRIPE_WEBHOOK_SECRET`.
4. Test cards in dev mode: `4242 4242 4242 4242`, any future date, any CVC.

Stripe handles all currencies — we hardcode AUD for now.

## Deploy to Contabo VPS

### One-time server setup

SSH into your Contabo box, run:

```bash
# Node 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx git

# Process manager
sudo npm install -g pm2

# Pull the repo
cd /var/www
sudo git clone <your-repo-url> rwendo
sudo chown -R $USER:$USER /var/www/rwendo
cd /var/www/rwendo/web
npm install
cp .env.example .env.local
# Fill in production env vars

# Build
npm run build

# Start under PM2
pm2 start npm --name rwendo-web -- start
pm2 startup    # follow the printed command
pm2 save
```

### Nginx reverse proxy

`/etc/nginx/sites-available/rwendo.app`:

```nginx
server {
    listen 80;
    server_name rwendo.app www.rwendo.app;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Stripe webhook needs raw body — pass it through unmodified.
    location /api/stripe-webhook {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_request_buffering off;
    }
}
```

Enable it + Let's Encrypt SSL:

```bash
sudo ln -s /etc/nginx/sites-available/rwendo.app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d rwendo.app -d www.rwendo.app
```

### DNS at Hostinger

Point `rwendo.app` + `www.rwendo.app` A records at your Contabo server's IPv4. TTL 300. Wait for propagation (5-30 min) before running certbot.

### Deploy updates

```bash
cd /var/www/rwendo
git pull
cd web
npm install
npm run build
pm2 reload rwendo-web
```

## Cross-platform payment unification

The system is unified at the **database layer**, not the payment provider layer (Apple/Google **require** their IAP for in-app purchases — Stripe forbidden inside mobile apps).

```
   Mobile (iOS / Android)             Web
        │                              │
   RevenueCat IAP                  Stripe Checkout
        │                              │
        ▼                              ▼
   revenuecat-webhook  ──▶  user_credits  ◀── stripe-webhook
   (Edge Function)             (one row              (Next.js
                                per user)            route handler)
                                    │
                                    └──▶ both webhooks call grant_tokens RPC
```

Buy 1,000 tokens on the web → mobile app sees balance bump on next refetch. Buy 1,000 on the App Store → web's `/profile` shows the new balance on next page load. Identity is unified by `auth.users.id`.

## Run cost (rough)

- **Contabo VPS** — €5-10/mo (you already pay)
- **Stripe** — 2.9% + A$0.30 per AUD transaction. On a $10 pack you net ~A$9.41.
- **Supabase** — Free tier covers early users; paid Pro at $25/mo kicks in around 50k MAU or 8GB DB.
- **Anthropic + ElevenLabs** — already covered by mobile budget.
