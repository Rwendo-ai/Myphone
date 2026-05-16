/**
 * Atlas enqueue — thin wrapper around the `enqueue-atlas` Edge Function.
 *
 * Called from the custom-companion wizard at step 5 (final portrait
 * commit). Returns immediately — generation runs server-side, the chat
 * screen renders via AmbientFace until atlas_status flips to 'ready'.
 *
 * See docs/stack/lipsync-atlas.md Section 11 for the full flow.
 */

import { supabase } from './supabase';

export interface AtlasEnqueueRequest {
  companion_kind: 'custom' | 'archetype';
  companion_id:   string;
  portrait_url:   string;
  generator?:     string;
}

export interface AtlasEnqueueResponse {
  job_id: string;
  status: 'pending';
}

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';

/**
 * Fire-and-forget call to the Edge Function. Throws on auth / validation
 * errors; doesn't throw on "atlas not generated yet" because that's the
 * expected state for a freshly enqueued job.
 *
 * The companion row will flip to atlas_status='pending'. AtlasCompositor
 * picks up 'ready' via the realtime subscription in useCompanionRenderer.
 */
export async function enqueueAtlas(req: AtlasEnqueueRequest): Promise<AtlasEnqueueResponse> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('enqueueAtlas: not signed in');
  if (!SUPABASE_URL) throw new Error('enqueueAtlas: EXPO_PUBLIC_SUPABASE_URL not set');

  const res = await fetch(`${SUPABASE_URL}/functions/v1/enqueue-atlas`, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${session.access_token}`,
    },
    body: JSON.stringify(req),
  });

  const text = await res.text();
  if (!res.ok) {
    let msg = text;
    try { msg = (JSON.parse(text) as { error?: string }).error ?? text; } catch {}
    throw new Error(`enqueueAtlas: ${res.status} ${msg}`);
  }

  return JSON.parse(text) as AtlasEnqueueResponse;
}
