// Pipecat Bot Start — mints a Daily.co room + tokens and tells the
// self-hosted Pipecat worker to spawn a bot for the session.
//
// Flow:
//   1. RN client POSTs here with { tier, companion_id, source }
//   2. We authenticate the user, mint:
//        - a fresh Daily room (one per session)
//        - a user token (so the RN client can join)
//        - a bot token (so the worker can join with owner permissions)
//   3. We call the worker at $PIPECAT_BOT_URL/start with the session config
//   4. We return { room_url, user_token } to the RN client
//   5. RN client connects to room_url with user_token via
//      @pipecat-ai/react-native-daily-transport
//
// Auth: requires a Supabase user JWT.
//
// Deploy:
//   supabase functions deploy pipecat-bot-start
//
// Required secrets:
//   DAILY_API_KEY     — Daily.co REST API key
//   DAILY_DOMAIN      — your daily subdomain (e.g. 'rwendo')
//   PIPECAT_BOT_URL   — public URL of the worker (tunnel or production)
//   BOT_SHARED_SECRET — auth between Edge Function and worker

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

import { createClient } from 'npm:@supabase/supabase-js@2';

type Tier = 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus';

interface RequestBody {
  tier:         Tier;
  companion_id: string;
  source:       'archetype' | 'custom';
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST')   return json({ error: 'method not allowed' }, 405);

  // ─── Auth ────────────────────────────────────────────────────────────
  const auth = req.headers.get('authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'unauthorized' }, 401);

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } },
  );
  const { data: userData, error: userErr } = await supabase.auth.getUser();
  if (userErr || !userData.user) return json({ error: 'unauthorized' }, 401);
  const userId = userData.user.id;

  // ─── Validate request ────────────────────────────────────────────────
  let body: RequestBody;
  try { body = await req.json(); } catch { return json({ error: 'invalid json' }, 400); }
  if (!body?.tier || !body?.companion_id || !body?.source) {
    return json({ error: 'missing tier / companion_id / source' }, 400);
  }

  // ─── Mint Daily room + tokens ────────────────────────────────────────
  const DAILY_API_KEY   = Deno.env.get('DAILY_API_KEY');
  const DAILY_DOMAIN    = Deno.env.get('DAILY_DOMAIN');
  const PIPECAT_BOT_URL = Deno.env.get('PIPECAT_BOT_URL');
  const BOT_SECRET      = Deno.env.get('BOT_SHARED_SECRET') ?? '';
  if (!DAILY_API_KEY || !DAILY_DOMAIN) return json({ error: 'daily not configured' }, 500);
  if (!PIPECAT_BOT_URL) return json({ error: 'worker not configured' }, 500);

  const sessionId = crypto.randomUUID();
  const roomName  = `companion-${userId.substring(0, 8)}-${sessionId.substring(0, 8)}`;

  // 1. Create the room. Expire after 1 hour so abandoned rooms clean up.
  const roomRes = await fetch('https://api.daily.co/v1/rooms', {
    method:  'POST',
    headers: {
      'Authorization': `Bearer ${DAILY_API_KEY}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify({
      name: roomName,
      properties: {
        exp:              Math.floor(Date.now() / 1000) + 60 * 60, // 1h
        eject_at_room_exp: true,
        max_participants: 4,
        enable_chat:      false,
        enable_screenshare: false,
      },
    }),
  });
  if (!roomRes.ok) {
    const t = await roomRes.text();
    console.error('daily room create failed:', roomRes.status, t);
    return json({ error: 'could not create room' }, 500);
  }
  const room = await roomRes.json();
  const roomUrl: string = room.url;

  // 2. Mint two meeting tokens — user + bot. Bot is an owner so it
  //    can publish camera/audio without being granted by the user.
  async function mintToken(opts: { isOwner: boolean; userName: string }) {
    const r = await fetch('https://api.daily.co/v1/meeting-tokens', {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${DAILY_API_KEY}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        properties: {
          room_name:  roomName,
          exp:        Math.floor(Date.now() / 1000) + 60 * 60,
          is_owner:   opts.isOwner,
          user_name:  opts.userName,
        },
      }),
    });
    if (!r.ok) throw new Error(`token mint failed: ${r.status} ${await r.text()}`);
    const j = await r.json();
    return j.token as string;
  }

  let userToken: string;
  let botToken:  string;
  try {
    [userToken, botToken] = await Promise.all([
      mintToken({ isOwner: false, userName: `user-${userId.substring(0, 8)}` }),
      mintToken({ isOwner: true,  userName: 'rwendo-bot' }),
    ]);
  } catch (e) {
    console.error(e);
    return json({ error: 'could not mint tokens' }, 500);
  }

  // 3. Tell the worker to spawn a bot for this session.
  const startRes = await fetch(`${PIPECAT_BOT_URL.replace(/\/$/, '')}/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${BOT_SECRET}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify({
      tier:         body.tier,
      companion_id: body.companion_id,
      source:       body.source,
      user_id:      userId,
      room_url:     roomUrl,
      room_token:   botToken,
    }),
  });
  if (!startRes.ok) {
    const t = await startRes.text();
    console.error('worker /start failed:', startRes.status, t);
    return json({ error: 'worker unavailable' }, 502);
  }

  // 4. Hand the user back what they need to join the room.
  return json({
    room_url:   roomUrl,
    user_token: userToken,
    session_id: sessionId,
  });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}
