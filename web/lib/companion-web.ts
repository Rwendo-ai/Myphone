/**
 * Companion customization helpers — web port of lib/companion-customization.ts.
 *
 * Mirrors the mobile API so the chat picker / profile sheet can read and write
 * `user_companion_customizations` + `companions` + `companion_archetypes`
 * without dragging the RN-specific files in.
 *
 * Functions:
 *   - getOwnedCompanions(userId)    → list of owned presets w/ customization
 *   - getActiveCompanion(userId)    → resolved active (preset + archetype + name)
 *   - setActiveCompanion(userId, p) → flips is_active on `companions`
 *   - claimFreePreset(userId, p)    → one free pick beyond Rwen
 *   - upsertCustomization(...)      → patch face/voice/name
 *   - loadActiveArchetypes()        → all active archetypes (face picker)
 *   - loadArchetype(id)             → single archetype
 *
 * Uses the browser supabase client — every call goes through RLS, so callers
 * MUST be signed in. The picker UI / profile sheet are all client components.
 */

import { createSupabaseBrowser } from './supabase-browser';

// ─── Preset data (inlined; sourced from data/companions/presets.ts) ─────────
// We duplicate a thin shell of the preset list here so the web bundle doesn't
// need to import the full mobile-side module (which pulls in React Native
// peer deps via the broader lib chain). Keep this list in sync.

export type RelationshipType = 'friend' | 'mentor' | 'tutor' | 'coach' | 'partner' | 'travel';

export interface CompanionPreset {
  id: string;
  name: string;
  tagline: string;
  relationshipType: RelationshipType;
  defaultVoiceId: string;
  emoji: string;
  description: string;
  tierGate: 'free' | 'text_ai' | 'voice' | 'companion' | 'premium';
  ageGate?: number;
}

export const COMPANION_PRESETS: Record<string, CompanionPreset> = {
  rwen: {
    id: 'rwen', name: 'Rwen', tagline: 'A chameleon companion with a Shona soul',
    relationshipType: 'friend', defaultVoiceId: 'JBFqnCBsd6RMkjVDRZzb', emoji: '🦎',
    description: 'Warm, witty, culturally proud. Drops Shona idioms naturally.',
    tierGate: 'free',
  },
  maya: {
    id: 'maya', name: 'Maya', tagline: 'A gentle friend who listens deeply',
    relationshipType: 'friend', defaultVoiceId: 'cgSgspJ2msm6clMCkdW9', emoji: '🌷',
    description: 'Listens first, asks the right next question, never rushes.',
    tierGate: 'text_ai',
  },
  tendai: {
    id: 'tendai', name: 'Tendai', tagline: 'A friend who notices when you nail it',
    relationshipType: 'tutor', defaultVoiceId: 'IKne3meq5aSn9XLyUdCD', emoji: '📚',
    description: 'A friend who happens to know your target language inside out.',
    tierGate: 'text_ai',
  },
  sam: {
    id: 'sam', name: 'Sam', tagline: "A friend who pushes — and remembers what you said",
    relationshipType: 'coach', defaultVoiceId: 'Xb7hH8MSUJpSbSDYk0k2', emoji: '🏔️',
    description: 'Accountability, real-world relationship advice, work decisions.',
    tierGate: 'voice',
  },
  lumi: {
    id: 'lumi', name: 'Lumi', tagline: 'A reflective companion for the questions you avoid',
    relationshipType: 'mentor', defaultVoiceId: 'cgSgspJ2msm6clMCkdW9', emoji: '🌙',
    description: "For evenings, slow conversations, end-of-week reflection.",
    tierGate: 'voice',
  },
  kai: {
    id: 'kai', name: 'Kai', tagline: 'A travel buddy who knows when to push you outside',
    relationshipType: 'travel', defaultVoiceId: 'IKne3meq5aSn9XLyUdCD', emoji: '🌍',
    description: "Plans trips, preps you culturally, decodes the unwritten rules.",
    tierGate: 'text_ai',
  },
  aria: {
    id: 'aria', name: 'Aria', tagline: 'A romantic partner who is also wise about other people',
    relationshipType: 'partner', defaultVoiceId: 'cgSgspJ2msm6clMCkdW9', emoji: '💝',
    description: "An affectionate companion who is yours — and a wise voice on relationships.",
    tierGate: 'voice', ageGate: 18,
  },
  zeke: {
    id: 'zeke', name: 'Zeke', tagline: 'Your crypto-curious friend — research, not recommendations',
    relationshipType: 'friend', defaultVoiceId: 'TX3LPaxmHKxFdv7VOQHJ', emoji: '⛓️',
    description: 'Loves talking crypto — chains, projects, indicators, trading mechanics.',
    tierGate: 'text_ai', ageGate: 13,
  },
};

export const PRESET_LIST: CompanionPreset[] = [
  COMPANION_PRESETS.rwen,
  COMPANION_PRESETS.maya,
  COMPANION_PRESETS.tendai,
  COMPANION_PRESETS.sam,
  COMPANION_PRESETS.lumi,
  COMPANION_PRESETS.kai,
  COMPANION_PRESETS.aria,
  COMPANION_PRESETS.zeke,
];

export function getPreset(id: string | null | undefined): CompanionPreset {
  if (id && COMPANION_PRESETS[id]) return COMPANION_PRESETS[id];
  return COMPANION_PRESETS.rwen;
}

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

export interface CompanionArchetype {
  id: string;
  preset_id: string | null;
  name: string;
  thumbnail_url: string | null;
  image_url: string | null;
  idling_video_url: string | null;
  voice_id: string | null;
  is_active: boolean;
  display_order: number;
}

export interface ResolvedCompanion {
  preset: CompanionPreset;
  display_name: string;
  archetype: CompanionArchetype | null;
  voice_id: string;
}

// ─── Reads ──────────────────────────────────────────────────────────────────

const TABLE = 'user_companion_customizations';

export async function getOwnedCompanions(userId: string): Promise<CompanionCustomization[]> {
  const supabase = createSupabaseBrowser();
  const { data, error } = await supabase
    .from(TABLE)
    .select('user_id, preset_id, custom_name, face_archetype_id, voice_id, owned_at, is_paid')
    .eq('user_id', userId)
    .order('owned_at', { ascending: true });
  if (error) {
    console.error('getOwnedCompanions:', error);
    return [];
  }
  return (data ?? []) as CompanionCustomization[];
}

export async function loadCustomization(
  userId: string,
  presetId: string,
): Promise<CompanionCustomization | null> {
  const supabase = createSupabaseBrowser();
  const { data, error } = await supabase
    .from(TABLE)
    .select('user_id, preset_id, custom_name, face_archetype_id, voice_id, owned_at, is_paid')
    .eq('user_id', userId)
    .eq('preset_id', presetId)
    .maybeSingle();
  if (error) {
    console.error('loadCustomization:', error);
    return null;
  }
  return (data ?? null) as CompanionCustomization | null;
}

export async function loadArchetype(archetypeId: string): Promise<CompanionArchetype | null> {
  const supabase = createSupabaseBrowser();
  const { data, error } = await supabase
    .from('companion_archetypes')
    .select('id, preset_id, name, thumbnail_url, image_url, idling_video_url, voice_id, is_active, display_order')
    .eq('id', archetypeId)
    .maybeSingle();
  if (error) {
    console.error('loadArchetype:', error);
    return null;
  }
  return (data ?? null) as CompanionArchetype | null;
}

export async function loadActiveArchetypes(presetId?: string): Promise<CompanionArchetype[]> {
  const supabase = createSupabaseBrowser();
  let q = supabase
    .from('companion_archetypes')
    .select('id, preset_id, name, thumbnail_url, image_url, idling_video_url, voice_id, is_active, display_order')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (presetId) q = q.eq('preset_id', presetId);
  const { data, error } = await q;
  if (error) {
    console.error('loadActiveArchetypes:', error);
    return [];
  }
  return (data ?? []) as CompanionArchetype[];
}

/**
 * Read the active companion preset id from the legacy `companions` table.
 * Falls back to 'rwen' when the user has none flagged active.
 */
export async function getActiveCompanionPresetId(userId: string): Promise<string> {
  const supabase = createSupabaseBrowser();
  const { data } = await supabase
    .from('companions')
    .select('preset_id')
    .eq('user_id', userId)
    .eq('is_active', true)
    .maybeSingle();
  return (data?.preset_id as string | undefined) ?? 'rwen';
}

/**
 * Compose the fully resolved active companion for the chat screen.
 */
export async function getActiveCompanion(userId: string): Promise<ResolvedCompanion> {
  const presetId = await getActiveCompanionPresetId(userId);
  return resolveCompanion(userId, presetId);
}

export async function resolveCompanion(
  userId: string,
  presetId: string,
): Promise<ResolvedCompanion> {
  const preset = getPreset(presetId);
  const customization = await loadCustomization(userId, preset.id);

  let archetype: CompanionArchetype | null = null;
  if (customization?.face_archetype_id) {
    archetype = await loadArchetype(customization.face_archetype_id);
    if (archetype && !archetype.is_active) archetype = null;
  }
  const display_name = customization?.custom_name?.trim() || preset.name;
  const voice_id = customization?.voice_id || preset.defaultVoiceId;
  return { preset, display_name, archetype, voice_id };
}

// ─── Writes ─────────────────────────────────────────────────────────────────

/**
 * Flip is_active on the `companions` table so the new preset becomes active.
 * Partial unique index on companions(user_id) WHERE is_active = true means at
 * most one row can be active per user; we deactivate the rest in a single update
 * then activate (or insert) the target row.
 */
export async function setActiveCompanion(userId: string, presetId: string): Promise<void> {
  const supabase = createSupabaseBrowser();

  // Deactivate everything else first.
  const { error: deactErr } = await supabase
    .from('companions')
    .update({ is_active: false })
    .eq('user_id', userId)
    .neq('preset_id', presetId);
  if (deactErr) console.warn('setActiveCompanion deactivate:', deactErr.message);

  // Upsert the target row as active.
  const { error: upErr } = await supabase
    .from('companions')
    .upsert(
      { user_id: userId, preset_id: presetId, is_active: true },
      { onConflict: 'user_id,preset_id' },
    );
  if (upErr) throw new Error(`setActiveCompanion: ${upErr.message}`);
}

export async function upsertCustomization(
  userId: string,
  presetId: string,
  patch: Partial<Pick<CompanionCustomization, 'custom_name' | 'face_archetype_id' | 'voice_id'>>,
): Promise<void> {
  const supabase = createSupabaseBrowser();
  const { error } = await supabase
    .from(TABLE)
    .upsert(
      { user_id: userId, preset_id: presetId, ...patch },
      { onConflict: 'user_id,preset_id' },
    );
  if (error) throw new Error(`upsertCustomization: ${error.message}`);
}

/**
 * Free-tier "claim" — one non-Rwen preset on free tier. Mirrors the mobile
 * logic in lib/companion-customization.ts.
 */
export async function claimFreePreset(
  userId: string,
  presetId: string,
): Promise<{ ok: true } | { ok: false; reason: 'limit' | 'unknown_preset' | 'db' }> {
  if (!COMPANION_PRESETS[presetId]) return { ok: false, reason: 'unknown_preset' };

  const supabase = createSupabaseBrowser();
  const { data: existing, error: countErr } = await supabase
    .from(TABLE)
    .select('preset_id, is_paid')
    .eq('user_id', userId);
  if (countErr) {
    console.error('claimFreePreset count:', countErr);
    return { ok: false, reason: 'db' };
  }
  if ((existing ?? []).some((r) => r.preset_id === presetId)) return { ok: true };

  const freeUsed = (existing ?? []).filter(
    (r) => !r.is_paid && r.preset_id !== 'rwen',
  ).length;
  if (freeUsed >= 1) return { ok: false, reason: 'limit' };

  const { error: insertErr } = await supabase.from(TABLE).insert({
    user_id: userId,
    preset_id: presetId,
    is_paid: false,
  });
  if (insertErr) {
    console.error('claimFreePreset insert:', insertErr);
    return { ok: false, reason: 'db' };
  }
  return { ok: true };
}

// ─── Voice catalogue (subset of lib/voices.ts — adult, multilingual) ────────

export interface VoiceOption {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'neutral';
  vibe: string;
}

export const VOICE_LIBRARY: VoiceOption[] = [
  { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'George — warm storyteller',     gender: 'male',   vibe: 'warm storyteller' },
  { id: 'IKne3meq5aSn9XLyUdCD', name: 'Charlie — energetic, confident', gender: 'male',   vibe: 'energetic confident' },
  { id: 'TX3LPaxmHKxFdv7VOQHJ', name: 'Liam — articulate, young',      gender: 'male',   vibe: 'articulate young' },
  { id: 'nPczCjzI2devNBz1zQrb', name: 'Brian — deep narrator',         gender: 'male',   vibe: 'deep narrator' },
  { id: 'cjVigY5qzO86Huf0OWal', name: 'Eric — friendly conversational', gender: 'male',   vibe: 'friendly conversational' },
  { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica — playful, bright',     gender: 'female', vibe: 'playful bright' },
  { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Alice — clear, engaging',       gender: 'female', vibe: 'clear engaging' },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah — gentle, thoughtful',    gender: 'female', vibe: 'gentle thoughtful' },
  { id: 'XB0fDUnXU5powFXDhCwa', name: 'Charlotte — soft attentive',    gender: 'female', vibe: 'soft attentive' },
  { id: 'FGY2WhTYpPnrIDTdsKH5', name: 'Laura — sunny articulate',      gender: 'female', vibe: 'sunny articulate' },
  { id: 'XrExE9yKIg1WjnnlVkGX', name: 'Matilda — friendly, warm',      gender: 'female', vibe: 'friendly warm' },
  { id: 'SAz9YHcvj6GT2YYXdXww', name: 'River — calm, neutral',         gender: 'neutral', vibe: 'calm neutral' },
];

export function getVoice(id: string | null | undefined): VoiceOption {
  if (id) {
    const hit = VOICE_LIBRARY.find((v) => v.id === id);
    if (hit) return hit;
  }
  return VOICE_LIBRARY[0];
}
