/**
 * Companion customization — the third layer that links a PRESET (personality)
 * to an ARCHETYPE (face/voice asset) and a chosen display name.
 *
 * See supabase/migrations/2026_05_16_user_companion_customizations.sql.
 *
 * Model recap:
 *   PRESET (data/companions/presets.ts) — the personality / system prompt
 *   ARCHETYPE (companion_archetypes table) — the face + idle video + voice
 *   CUSTOMIZATION (user_companion_customizations table) — per-user link:
 *       "Maya (personality) with Mateo (face), named Tom, voice = Brian"
 *
 * Free-tier entitlement: every user automatically owns Rwen (granted by
 * trg_grant_rwen on auth.users insert). Free tier may additionally claim
 * ONE other preset for free — claimFreePreset enforces that limit. Anything
 * beyond that requires a paid tier (handled in the picker via tier gating
 * against entitlements.canAccess* helpers).
 *
 * No new packages required — uses the existing supabase client.
 */

import { supabase } from './supabase';
import { COMPANION_PRESETS, type CompanionPreset } from '../data/companions/presets';

const TABLE = 'user_companion_customizations';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface CompanionCustomization {
  user_id: string;
  preset_id: string;
  custom_name: string | null;
  face_archetype_id: string | null;
  voice_id: string | null;
  owned_at: string;
  is_paid: boolean;
}

/** Minimal companion-archetype shape — mirrors the columns we read. */
export interface CompanionArchetype {
  id: string;
  name: string;
  /** Small (256×256, ~10 KB) thumbnail. Used by every face-picker UI.
   *  Falls back to image_url if null. */
  thumbnail_url: string | null;
  /** Full-res (1024×1024, ~500 KB) portrait. Only loaded by AmbientFace
   *  when this archetype is the active companion's face. */
  image_url: string | null;
  /** 10s idle MP4 (~5 MB). Same usage rule as image_url — only loaded
   *  when AmbientFace renders this archetype as the active backdrop. */
  idling_video_url: string | null;
  voice_id: string | null;
  simli_face_id: string | null;
  tavus_replica_id: string | null;
  is_active: boolean;
  display_order: number;
}

/**
 * The composed "what the chat screen actually displays" object. Combines the
 * preset (personality / system prompt / tier gate) with the user's per-user
 * face + voice + name overrides.
 */
export interface ResolvedCompanion {
  preset:       CompanionPreset;
  display_name: string;
  archetype:    CompanionArchetype | null;
  voice_id:     string;
}

// ─── Read ───────────────────────────────────────────────────────────────────

/**
 * List every customization row for this user — one row per owned preset.
 * Empty array if the trigger backfill hasn't run for this user yet (in which
 * case the caller should fall back to Rwen-only).
 */
export async function loadOwnedCompanions(
  userId: string,
): Promise<CompanionCustomization[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('user_id, preset_id, custom_name, face_archetype_id, voice_id, owned_at, is_paid')
    .eq('user_id', userId)
    .order('owned_at', { ascending: true });
  if (error) {
    console.error('loadOwnedCompanions error:', error);
    return [];
  }
  return (data ?? []) as CompanionCustomization[];
}

/**
 * Load the customization for a single (user, preset). Returns null when the
 * user does not yet own the preset.
 */
export async function loadCustomization(
  userId: string,
  presetId: string,
): Promise<CompanionCustomization | null> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('user_id, preset_id, custom_name, face_archetype_id, voice_id, owned_at, is_paid')
    .eq('user_id', userId)
    .eq('preset_id', presetId)
    .maybeSingle();
  if (error) {
    console.error('loadCustomization error:', error);
    return null;
  }
  return (data ?? null) as CompanionCustomization | null;
}

/** Load a single archetype row (returns null if not found). */
export async function loadArchetype(
  archetypeId: string,
): Promise<CompanionArchetype | null> {
  const { data, error } = await supabase
    .from('companion_archetypes')
    .select('id, name, thumbnail_url, image_url, idling_video_url, voice_id, simli_face_id, tavus_replica_id, is_active, display_order')
    .eq('id', archetypeId)
    .maybeSingle();
  if (error) {
    console.error('loadArchetype error:', error);
    return null;
  }
  return (data ?? null) as CompanionArchetype | null;
}

/** Load all archetype rows that are active (assets ready) — for the face picker. */
export async function loadActiveArchetypes(): Promise<CompanionArchetype[]> {
  const { data, error } = await supabase
    .from('companion_archetypes')
    .select('id, name, thumbnail_url, image_url, idling_video_url, voice_id, simli_face_id, tavus_replica_id, is_active, display_order')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (error) {
    console.error('loadActiveArchetypes error:', error);
    return [];
  }
  return (data ?? []) as CompanionArchetype[];
}

// ─── Write ──────────────────────────────────────────────────────────────────

/**
 * Patch the customization fields for a (user, preset) row. Caller must
 * already own the preset — this won't create a new row. (For claims use
 * claimFreePreset or a paid-tier flow that inserts directly.)
 */
export async function upsertCustomization(
  userId: string,
  presetId: string,
  patch: Partial<Pick<CompanionCustomization, 'custom_name' | 'face_archetype_id' | 'voice_id'>>,
): Promise<void> {
  // Upsert so this works whether the row exists or not — but ONLY for rows
  // the user is allowed to write under RLS (self_insert/self_update both
  // gate on auth.uid() = user_id).
  const { error } = await supabase
    .from(TABLE)
    .upsert(
      {
        user_id: userId,
        preset_id: presetId,
        ...patch,
      },
      { onConflict: 'user_id,preset_id' },
    );
  if (error) {
    throw new Error(`upsertCustomization failed: ${error.message}`);
  }
}

/**
 * Free-tier "claim" — user picks one non-Rwen preset for free. Returns
 * { ok: false, reason: 'limit' } if the user already has more than one
 * free claim on file (Rwen + 1 other). Paid tiers don't go through here;
 * they call upsertCustomization directly.
 *
 * Note: tier checking is intentionally NOT done here — the caller (UI)
 * should already have validated the preset is on the free tier. This
 * function only enforces the "one free pick beyond Rwen" rule.
 */
export async function claimFreePreset(
  userId: string,
  presetId: string,
): Promise<{ ok: true } | { ok: false; reason: 'limit' | 'unknown_preset' | 'db' }> {
  if (!COMPANION_PRESETS[presetId]) {
    return { ok: false, reason: 'unknown_preset' };
  }

  // Count the user's existing free claims (is_paid = false) excluding Rwen.
  const { data: existing, error: countErr } = await supabase
    .from(TABLE)
    .select('preset_id, is_paid')
    .eq('user_id', userId);
  if (countErr) {
    console.error('claimFreePreset count error:', countErr);
    return { ok: false, reason: 'db' };
  }

  // If they already own this preset, no-op success.
  if ((existing ?? []).some((r) => r.preset_id === presetId)) {
    return { ok: true };
  }

  const freeClaimsExcludingRwen = (existing ?? []).filter(
    (r) => !r.is_paid && r.preset_id !== 'rwen',
  ).length;
  if (freeClaimsExcludingRwen >= 1) {
    return { ok: false, reason: 'limit' };
  }

  const { error: insertErr } = await supabase.from(TABLE).insert({
    user_id: userId,
    preset_id: presetId,
    is_paid: false,
  });
  if (insertErr) {
    console.error('claimFreePreset insert error:', insertErr);
    return { ok: false, reason: 'db' };
  }
  return { ok: true };
}

// ─── Resolve ────────────────────────────────────────────────────────────────

/**
 * Compose the actual displayed companion for a (user, preset). Combines:
 *   - the code-owned PRESET (personality + tier gate + system prompt)
 *   - the user's CUSTOMIZATION row (custom_name, face_archetype_id, voice_id)
 *   - the linked ARCHETYPE row (face/idle video assets), if any
 *
 * Used by the chat screen header + voice mode session config to show the
 * right name + face + voice while still running on the preset's system
 * prompt under the hood.
 *
 * Falls back gracefully:
 *   - unknown preset_id → Rwen
 *   - no customization row → preset defaults (no archetype face)
 *   - archetype id pointing at an inactive row → archetype = null (use emoji)
 */
export async function resolveCompanion(
  userId: string,
  presetId: string,
): Promise<ResolvedCompanion> {
  const preset = COMPANION_PRESETS[presetId] ?? COMPANION_PRESETS.rwen;

  const customization = await loadCustomization(userId, preset.id);

  let archetype: CompanionArchetype | null = null;
  if (customization?.face_archetype_id) {
    archetype = await loadArchetype(customization.face_archetype_id);
    // Inactive archetype means assets aren't ready yet — fall back to emoji.
    if (archetype && !archetype.is_active) archetype = null;
  }

  const display_name = customization?.custom_name?.trim() || preset.name;
  const voice_id = customization?.voice_id || preset.defaultVoiceId;

  return { preset, display_name, archetype, voice_id };
}
