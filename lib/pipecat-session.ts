/**
 * Thin wrapper around the `pipecat-bot-start` Edge Function — pure
 * TypeScript, no React, no Daily SDK. Returns the room + token the
 * client needs to join the session.
 *
 * The Edge Function contract is defined in
 * `supabase/functions/pipecat-bot-start/index.ts`. This file is the
 * mirror image on the client side so call sites don't have to
 * remember the URL or header shape.
 *
 * Throws Error with a descriptive message on failure — no silent
 * nulls. Callers (currently `hooks/usePipecatSession.ts`) catch and
 * surface the message into hook state.
 */

// The Supabase URL is hard-coded in `lib/supabase.ts` (since we don't
// use Expo public env vars for it in this repo). Mirror it here rather
// than importing `supabase` to keep this file dependency-free.
const SUPABASE_URL = 'https://jkjznverqjaokmtvbpqv.supabase.co';

export type LipsyncTier = 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus';

export interface PipecatSessionStartRequest {
  tier:         LipsyncTier;
  companion_id: string;
  source:       'archetype' | 'custom';
}

export interface PipecatSessionStartResponse {
  /** Daily.co room URL — pass to `daily.join({ url, ... })`. */
  room_url:   string;
  /** Meeting token for the user (non-owner). */
  user_token: string;
  /** Session identifier minted by the Edge Function. Used for
   *  client-side correlation in logs / future transcript storage. */
  session_id: string;
}

/**
 * Calls `pipecat-bot-start`, which mints a Daily.co room and tells the
 * worker to spawn a bot for this session. The bot is joining the room
 * in parallel — by the time the user joins they should already see the
 * bot participant (or see it appear within a couple of seconds).
 *
 * @param req       The session config (tier + companion).
 * @param authToken The user's Supabase JWT — get it from
 *                  `supabase.auth.getSession()` or pass via the
 *                  AuthContext session in the React layer.
 */
export async function startPipecatSession(
  req: PipecatSessionStartRequest,
  authToken: string,
): Promise<PipecatSessionStartResponse> {
  if (!authToken) {
    throw new Error('startPipecatSession: missing auth token');
  }
  if (!req?.tier || !req?.companion_id || !req?.source) {
    throw new Error('startPipecatSession: missing tier / companion_id / source');
  }

  const url = `${SUPABASE_URL}/functions/v1/pipecat-bot-start`;

  let res: Response;
  try {
    res = await fetch(url, {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify(req),
    });
  } catch (e) {
    throw new Error(
      `Could not reach pipecat-bot-start: ${e instanceof Error ? e.message : String(e)}`,
    );
  }

  // Read the body once; we may need it for the error path.
  const text = await res.text();
  if (!res.ok) {
    // Edge Function returns `{ error: '...' }` on failure.
    let detail = text;
    try {
      const parsed = JSON.parse(text);
      if (parsed?.error) detail = parsed.error;
    } catch { /* leave as raw text */ }
    throw new Error(`pipecat-bot-start failed (${res.status}): ${detail}`);
  }

  let body: PipecatSessionStartResponse;
  try {
    body = JSON.parse(text);
  } catch {
    throw new Error('pipecat-bot-start returned non-JSON body');
  }
  if (!body?.room_url || !body?.user_token || !body?.session_id) {
    throw new Error('pipecat-bot-start response missing required fields');
  }
  return body;
}
