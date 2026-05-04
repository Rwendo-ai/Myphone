/**
 * Helpers for reading and switching the user's active companion.
 *
 * The active companion is the one that drives:
 *   - The system prompt of every chat message (lib/claude.ts)
 *   - The voice mode session config (lib/conversational-ai.ts)
 *   - The avatar shown on the centre tab button
 *
 * A user has 0 or 1 active companion at any time. The DB enforces this via
 * a partial unique index on companions(user_id) WHERE is_active = true.
 */

import { supabase } from './supabase';
import { COMPANION_PRESETS, type CompanionPreset } from '../data/companions/presets';

/**
 * Fetch the active companion's preset ID for a user.
 * Returns null if user has no active companion (use Rwen-as-default).
 */
export async function fetchActiveCompanionPresetId(userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('companions')
    .select('preset_id')
    .eq('user_id', userId)
    .eq('is_active', true)
    .maybeSingle();
  if (error) {
    console.error('fetchActiveCompanion error:', error);
    return null;
  }
  return data?.preset_id ?? null;
}

/**
 * Resolve a preset ID to a full CompanionPreset object.
 * Falls back to Rwen if the ID is unknown (e.g. preset removed in a release).
 */
export function resolvePreset(presetId: string | null): CompanionPreset {
  if (presetId && COMPANION_PRESETS[presetId]) {
    return COMPANION_PRESETS[presetId];
  }
  return COMPANION_PRESETS.rwen;
}

/**
 * Compute the user's age in whole years from a stored ISO date-of-birth.
 * Returns null if the DOB is missing or unparseable — caller should treat
 * "no DOB" as "under 18" for safety so age-gated content stays hidden until
 * the user provides one.
 */
export function ageFromDob(dob: string | null | undefined): number | null {
  if (!dob) return null;
  const d = new Date(dob);
  if (Number.isNaN(d.getTime())) return null;
  const now = new Date();
  let years = now.getFullYear() - d.getFullYear();
  const monthDiff = now.getMonth() - d.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < d.getDate())) years--;
  return years;
}

/**
 * Whether a preset should be visible / activatable for this user, given their
 * stored DOB. Tier gating (free vs paid) is checked separately via the
 * existing `tierGateMet` helper in the Companions tab.
 *
 * Conservative behaviour:
 *   - No DOB on file → treat as under-18, hide age-gated presets
 *   - DOB present + user younger than the gate → hide
 *   - No `ageGate` on the preset → always allowed
 */
export function ageGateMet(preset: CompanionPreset, dob: string | null | undefined): boolean {
  if (preset.ageGate == null) return true;
  const age = ageFromDob(dob);
  if (age == null) return false;
  return age >= preset.ageGate;
}
