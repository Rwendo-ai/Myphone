/**
 * Cross-mode conversation memory.
 *
 * Both text chat (lib/claude.ts) and voice mode (app/companion/voice-conv.tsx)
 * persist every turn into `public.conversations` and read recent turns when
 * starting a new session. This module centralises:
 *
 *   - Loading recent dialogue → formatted recap injected into the system
 *     prompt at session start (so the agent remembers the last exchange).
 *   - Loading top-k facts from `public.companion_facts` → bullet list passed
 *     as `memoryFacts` to buildCompanionPrompt.
 *   - Saving turn rows from voice mode (text mode already does this inline
 *     in lib/claude.ts:sendMessage).
 *
 * The text-format recap is kept short on purpose — voice sessions pay per
 * minute AND per LLM token, so the prompt should be concise.
 */

import { supabase } from './supabase';

const RECAP_TURN_LIMIT   = 10;   // last N (user|rwen) rows to recap
const FACT_LIMIT         = 8;    // top-k facts passed as memoryFacts

export type ConvoRole = 'user' | 'rwen';

interface ConvoRow {
  role: ConvoRole;
  content: string;
  created_at: string;
}

/**
 * Returns a short text recap of the user's most recent dialogue, formatted
 * as "[user]: ...\n[rwen]: ..." pairs. Empty string if the user has no prior
 * conversations. Caller should pass this through buildCompanionPrompt's
 * `weeklySummary` slot — it lands inside the {{recentContext}} token.
 */
export async function loadRecentConversationRecap(
  userId: string,
  limit: number = RECAP_TURN_LIMIT,
): Promise<string> {
  const { data, error } = await supabase
    .from('conversations')
    .select('role, content, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error || !data || data.length === 0) return '';

  // Reverse so the recap reads oldest → newest.
  const rows = (data as ConvoRow[]).slice().reverse();
  const lines = rows.map((r) => {
    const speaker = r.role === 'rwen' ? 'You' : 'They';
    // Trim and collapse whitespace — voice transcripts can have line breaks.
    const text = r.content.trim().replace(/\s+/g, ' ');
    return `${speaker}: ${text}`;
  });
  return `Last time you spoke (most recent at the bottom):\n${lines.join('\n')}`;
}

/**
 * Load top-k companion facts for `userId` as bullet strings. We start with
 * recency-ordered selection — embedding-based semantic recall (using the
 * `embedding` column on companion_facts) lands in a follow-up pass.
 */
export async function loadCompanionFacts(
  userId: string,
  limit: number = FACT_LIMIT,
): Promise<string[]> {
  const { data, error } = await supabase
    .from('companion_facts')
    .select('content, fact_type, last_reinforced_at')
    .eq('user_id', userId)
    .order('last_reinforced_at', { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data.map((row) => {
    // Lightly tag by type so the prompt can lean into emotional vs factual
    // recall ("they're stressed about work" reads differently than "they
    // live in Sydney"). Plain content for 'fact' which is the catch-all.
    const tag =
      row.fact_type === 'emotion'    ? '(emotion) ' :
      row.fact_type === 'plan'       ? '(plan) ' :
      row.fact_type === 'preference' ? '(prefers) ' :
      row.fact_type === 'person'     ? '(person) ' : '';
    return `${tag}${row.content}`;
  });
}

/**
 * Append a single conversation turn. Voice mode calls this twice per turn
 * (once on user_transcript, once on agent_response). Text chat already does
 * the equivalent inline in lib/claude.ts:sendMessage.
 *
 * `sessionId` groups turns from the same voice/chat session; passing it lets
 * future analytics distinguish "10 messages over a week" from "10 messages
 * in one sitting". Optional — the column is nullable.
 */
export async function appendConversationTurn(
  userId: string,
  role: ConvoRole,
  content: string,
  options: { sessionId?: string; packContext?: string } = {},
): Promise<void> {
  const trimmed = content.trim();
  if (!trimmed) return;
  const { error } = await supabase.from('conversations').insert({
    user_id: userId,
    role,
    content: trimmed,
    pack_context: options.packContext ?? null,
    session_id: options.sessionId ?? null,
  });
  if (error) {
    // Surface the full payload — text-mode saves work, so when the voice
    // path silently disappears we want to see exactly which row was rejected
    // and which RLS / type-cast / FK rule fired.
    console.warn('[memory] save turn failed:', {
      role,
      userId,
      sessionId: options.sessionId,
      packContext: options.packContext,
      error: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    });
  }
}
