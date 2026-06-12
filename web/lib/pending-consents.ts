'use client';

import type { SupabaseClient } from '@supabase/supabase-js';

// Consent persistence across the sign-up → verify-email gap.
//
// The mobile app calls record_consents immediately after auth.signUp —
// but with email confirmation ON there's no session yet, so the RPC can
// fail and the failure is swallowed (flagged P0 in
// docs/APP-ARCHITECTURE-REVIEW.md). Web does it properly: stash the
// choices in localStorage at sign-up time, then flush them to the RPC
// the moment a session exists (verify page, with onboarding as a retry
// point). Storage is only cleared after the RPC succeeds, so a network
// blip can't lose a consent record.

const KEY = 'rwendo.pending_consents';

export type ConsentChoices = {
  legal: boolean;           // bundles terms + privacy + age + AI disclosure
  infoProtection: boolean;
  marketing: boolean;
};

export function savePendingConsents(choices: ConsentChoices) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...choices, savedAt: new Date().toISOString() }));
  } catch {
    // Storage unavailable (private mode quota etc.) — flushing will no-op.
  }
}

/** Record any stashed consents against the signed-in user. Safe to call
 *  repeatedly — no-ops when nothing is pending, keeps the stash on failure. */
export async function flushPendingConsents(supabase: SupabaseClient): Promise<void> {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return;
  }
  if (!raw) return;

  let choices: ConsentChoices;
  try {
    choices = JSON.parse(raw);
  } catch {
    localStorage.removeItem(KEY);
    return;
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return; // not signed in yet — keep the stash for later

  // The legal box maps to all four atomic consents (terms / privacy /
  // age / ai_disclosure) — same contract the mobile app uses.
  const { error } = await supabase.rpc('record_consents', {
    p_user_id: user.id,
    p_terms: choices.legal,
    p_privacy: choices.legal,
    p_age: choices.legal,
    p_ai_disclosure: choices.legal,
    p_voice: false,
    p_info_protection: choices.infoProtection,
    p_marketing: choices.marketing,
  });

  if (error) {
    console.warn('[consents] record_consents failed, will retry on next flush:', error.message);
    return; // keep the stash — onboarding calls flush again
  }
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
