/**
 * Custom Companions — CRUD + system-prompt composition.
 *
 * Companions built via the $39.99 build wizard live in the
 * public.custom_companions Supabase table. This module is the
 * client-side bridge: list/create/update/delete drafts, save the
 * AI-composed system prompt, and surface the user's owned (status='paid')
 * companions for the picker.
 *
 * The system prompt is composed on the client by calling Claude with a
 * structured composer prompt — the wizard's answers in, a working
 * companion system prompt out. Done once when the user finalises the
 * wizard. Costs ~1-2 tokens of LLM time per build but no token deduction
 * from the user (it's part of the $39.99).
 */

import { supabase } from './supabase';
import { sendMessage, type ChatMessage } from './claude';
import { english as defaultSpeaker } from '../data/speakers';

// ─── Types ────────────────────────────────────────────────────────────────

export type RelationshipType =
  | 'friend'
  | 'partner'        // gated: 18+ surface only
  | 'mentor'
  | 'coach'
  | 'study_buddy'
  | 'business_advisor'
  | 'creative_collaborator'
  | 'support'
  | 'custom';

export interface Personality {
  /** 0 = warm and gentle, 1 = direct and no-nonsense */
  warm_direct: number;
  /** 0 = playful, 1 = serious */
  playful_serious: number;
  /** 0 = listener, 1 = talker */
  listener_talker: number;
  /** 0 = optimistic, 1 = realistic */
  optimistic_realistic: number;
  /** 0 = casual, 1 = formal */
  casual_formal: number;
  /** Free-text "anything else important?" */
  freeform_note?: string;
}

/** The wizard's answers gather here before the row is created. */
export interface CustomCompanionDraft {
  id?: string;             // present once the draft row exists in DB
  name: string;
  tagline: string;
  emoji: string;
  avatar_color: string;    // hex
  relationship_type: RelationshipType;
  personality: Personality;
  topics: string[];
  voice_id: string | null;
  system_prompt: string | null;
  status: 'draft' | 'paid' | 'archived';
}

/** Curated stock voices for the wizard. ElevenLabs voice IDs, with a
 *  short human-readable label and personality blurb. Real voice previews
 *  ship in a follow-up turn — for now the user picks by description. */
export interface StockVoice {
  voice_id: string;
  label: string;
  description: string;
  gender: 'female' | 'male' | 'neutral';
}

export const STOCK_VOICES: StockVoice[] = [
  { voice_id: 'JBFqnCBsd6RMkjVDRZzb', label: 'George',  description: 'Warm, storyteller. Slight drawl.',     gender: 'male' },
  { voice_id: 'IKne3meq5aSn9XLyUdCD', label: 'Charlie', description: 'Energetic, confident, mid-20s feel.', gender: 'male' },
  { voice_id: 'TX3LPaxmHKxFdv7VOQHJ', label: 'Liam',    description: 'Articulate, young, professional.',   gender: 'male' },
  { voice_id: 'nPczCjzI2devNBz1zQrb', label: 'Brian',   description: 'Deep, calm, narrator-style.',         gender: 'male' },
  { voice_id: 'pqHfZKP75CvOlQylNhV4', label: 'Bill',    description: 'Older, friendly, grandfatherly.',     gender: 'male' },
  { voice_id: 'cjVigY5qzO86Huf0OWal', label: 'Eric',    description: 'Friendly, conversational.',           gender: 'male' },
  { voice_id: 'CwhRBWXzGAHq8TQ4Fs17', label: 'Roger',   description: 'Clear, confident, even-keeled.',      gender: 'male' },
  { voice_id: 'cgSgspJ2msm6clMCkdW9', label: 'Jessica', description: 'Warm, intimate, late-20s.',           gender: 'female' },
  { voice_id: 'Xb7hH8MSUJpSbSDYk0k2', label: 'Alice',   description: 'Clear, engaging, educator energy.',   gender: 'female' },
  { voice_id: 'EXAVITQu4vr4xnSDxMaL', label: 'Sarah',   description: 'Gentle, thoughtful, listening.',      gender: 'female' },
  { voice_id: 'oWAxZDx7w5VEj9dCyTzz', label: 'Grace',   description: 'Bright, professional, mid-30s.',      gender: 'female' },
  { voice_id: 'XB0fDUnXU5powFXDhCwa', label: 'Charlotte', description: 'Soft, attentive, late-20s.',        gender: 'female' },
];

/** Curated emoji + colour palette for the wizard's avatar picker. v2
 *  replaces this with a text-to-image generation flow. */
export interface AvatarOption {
  emoji: string;
  color: string;
}
export const AVATAR_OPTIONS: AvatarOption[] = [
  { emoji: '🌟', color: '#1A3C6E' },
  { emoji: '🌸', color: '#D26B89' },
  { emoji: '🌊', color: '#2E7D8F' },
  { emoji: '🔥', color: '#E07A4A' },
  { emoji: '🪴', color: '#3DA864' },
  { emoji: '🌙', color: '#5B5BBF' },
  { emoji: '☀️', color: '#F4B400' },
  { emoji: '🦋', color: '#7C5DC4' },
  { emoji: '🪶', color: '#8B6F50' },
  { emoji: '⛓️', color: '#4A4A4A' },
  { emoji: '🎵', color: '#B33968' },
  { emoji: '🪐', color: '#3E5BA9' },
  { emoji: '🌳', color: '#2D6A4F' },
  { emoji: '✨', color: '#9061C2' },
  { emoji: '🐺', color: '#5A5A6E' },
  { emoji: '🦊', color: '#D97742' },
];

export const RELATIONSHIP_TYPES: Array<{ id: RelationshipType; label: string; description: string; emoji: string; minAge?: number }> = [
  { id: 'friend',                 label: 'A friend',                emoji: '🤝', description: 'Warm, present, in your corner without an agenda.' },
  { id: 'partner',                label: 'A romantic partner',      emoji: '💝', description: 'Affectionate, attentive, allowed to flirt. Never explicit.', minAge: 18 },
  { id: 'mentor',                 label: 'A mentor',                emoji: '🌳', description: 'Older, wiser energy. Listens deeply, asks the right next question.' },
  { id: 'coach',                  label: 'A coach',                 emoji: '🏔️', description: 'Pushes you, remembers your goals, calls out the excuses warmly.' },
  { id: 'study_buddy',            label: 'A study buddy',           emoji: '📚', description: 'Geeks out on whatever you\'re learning. Patient, curious.' },
  { id: 'business_advisor',       label: 'A business advisor',      emoji: '💼', description: 'Sharp, strategic. Frames decisions in trade-offs and outcomes.' },
  { id: 'creative_collaborator',  label: 'A creative collaborator', emoji: '🎨', description: 'Brainstorm partner. Improv-yes-and energy. Pushes weird ideas.' },
  { id: 'support',                label: 'A support companion',     emoji: '💙', description: 'Empathetic, patient. Holds space, doesn\'t rush to fix.' },
  { id: 'custom',                 label: 'Something else',          emoji: '✨', description: 'Define your own dynamic in the free-text step.' },
];

/** Multi-select chips for the "what are they good at?" step. */
export const TOPIC_OPTIONS: Array<{ id: string; label: string }> = [
  { id: 'listening',           label: 'Listening' },
  { id: 'hard_conversations',  label: 'Hard conversations' },
  { id: 'language_learning',   label: 'Language learning' },
  { id: 'parenting',           label: 'Parenting' },
  { id: 'work_decisions',      label: 'Work decisions' },
  { id: 'dating_relationships',label: 'Dating + relationships' },
  { id: 'fitness',             label: 'Fitness + health' },
  { id: 'creative_thinking',   label: 'Creative thinking' },
  { id: 'business_strategy',   label: 'Business strategy' },
  { id: 'mental_health',       label: 'Mental health support' },
  { id: 'philosophy',          label: 'Philosophy + ideas' },
  { id: 'humour',              label: 'Humour + play' },
  { id: 'travel',              label: 'Travel' },
  { id: 'finance',             label: 'Personal finance' },
  { id: 'spirituality',        label: 'Spirituality (non-prescriptive)' },
];

// ─── CRUD ─────────────────────────────────────────────────────────────────

const TABLE = 'custom_companions';

/** Create a new draft row for the wizard. Returns the row's id. */
export async function createDraft(userId: string, seed: Partial<CustomCompanionDraft> = {}): Promise<string> {
  const draft: Partial<CustomCompanionDraft> = {
    name:               seed.name ?? '',
    tagline:            seed.tagline ?? '',
    emoji:              seed.emoji ?? '✨',
    avatar_color:       seed.avatar_color ?? '#1A3C6E',
    relationship_type:  seed.relationship_type ?? 'friend',
    personality:        seed.personality ?? defaultPersonality(),
    topics:             seed.topics ?? [],
    voice_id:           seed.voice_id ?? null,
    system_prompt:      null,
    status:             'draft',
  };
  const { data, error } = await supabase
    .from(TABLE)
    .insert({ ...draft, user_id: userId })
    .select('id')
    .single();
  if (error || !data) throw new Error(`createDraft failed: ${error?.message ?? 'no data'}`);
  return data.id;
}

export async function updateDraft(id: string, patch: Partial<CustomCompanionDraft>): Promise<void> {
  const { error } = await supabase.from(TABLE).update(patch).eq('id', id).eq('status', 'draft');
  if (error) throw new Error(`updateDraft failed: ${error.message}`);
}

export async function deleteDraft(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE).delete().eq('id', id).eq('status', 'draft');
  if (error) throw new Error(`deleteDraft failed: ${error.message}`);
}

export async function fetchDraft(id: string): Promise<CustomCompanionDraft | null> {
  const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).maybeSingle();
  if (error || !data) return null;
  return data as unknown as CustomCompanionDraft;
}

/** List the user's drafts (status='draft') + paid companions, newest first. */
export async function listOwn(userId: string): Promise<CustomCompanionDraft[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('user_id', userId)
    .in('status', ['draft', 'paid'])
    .order('updated_at', { ascending: false });
  if (error || !data) return [];
  return data as unknown as CustomCompanionDraft[];
}

export async function listOwnedPaid(userId: string): Promise<CustomCompanionDraft[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'paid')
    .order('paid_at', { ascending: false });
  if (error || !data) return [];
  return data as unknown as CustomCompanionDraft[];
}

// ─── System-prompt composer ───────────────────────────────────────────────

/** Compose a working system prompt for the custom companion from the
 *  wizard answers. Single Claude call. Returns the composed prompt string. */
export async function composeSystemPrompt(
  userId: string,
  draft: CustomCompanionDraft,
): Promise<string> {
  const sliderLabel = (v: number, low: string, high: string) =>
    v < 0.35 ? `more ${low}` : v > 0.65 ? `more ${high}` : `balanced ${low}/${high}`;

  const personalityLines = [
    `- Warmth: ${sliderLabel(draft.personality.warm_direct, 'warm', 'direct')}`,
    `- Tone: ${sliderLabel(draft.personality.playful_serious, 'playful', 'serious')}`,
    `- Conversational style: ${sliderLabel(draft.personality.listener_talker, 'listening', 'talking')}`,
    `- Outlook: ${sliderLabel(draft.personality.optimistic_realistic, 'optimistic', 'realistic')}`,
    `- Register: ${sliderLabel(draft.personality.casual_formal, 'casual', 'formal')}`,
  ].join('\n');

  const composerInstruction = `You are a system-prompt composer. Given the user's wizard answers below, write a single, polished system prompt that the AI will use to play this companion.

The prompt should:
- Open by naming the companion and the relationship (e.g. "You are <Name> — <user>'s <relationship>.").
- Capture the personality from the slider readings in 2-3 short paragraphs of plain English.
- Name what the companion is good at (the selected topics) — woven in, not listed.
- Include 2-4 concrete behavioural rules ("WHAT YOU DO" / "WHAT YOU DON'T DO").
- Include a short "CONVERSATION RULES" block (sentence length, question vs statement ratio, formatting limits).
- Use {{name}} and {{learnedLang}} template placeholders for the user's name and learning language where appropriate.
- Match the voice of existing companion presets in tone — direct, honest, never saccharine, no "as an AI" disclaimers.
- Be 250-450 words total.

WIZARD ANSWERS:
- Name: ${draft.name}
- Tagline: ${draft.tagline || '(none)'}
- Relationship: ${draft.relationship_type}
- Personality:
${personalityLines}
- Anything else: ${draft.personality.freeform_note?.trim() || '(none)'}
- Topics they're good at: ${draft.topics.length ? draft.topics.join(', ') : '(none specified)'}

Return ONLY the system prompt text, no preamble, no commentary.`;

  const reply = await sendMessage(
    userId,
    composerInstruction,
    [] as ChatMessage[],
    defaultSpeaker,
    'English',
    undefined,
    null,
  );
  return reply.trim();
}

// ─── Defaults ──────────────────────────────────────────────────────────────

export function defaultPersonality(): Personality {
  return {
    warm_direct:          0.4,
    playful_serious:      0.5,
    listener_talker:      0.5,
    optimistic_realistic: 0.5,
    casual_formal:        0.3,
    freeform_note:        '',
  };
}

export function emptyDraft(): CustomCompanionDraft {
  return {
    name:               '',
    tagline:            '',
    emoji:              AVATAR_OPTIONS[0].emoji,
    avatar_color:       AVATAR_OPTIONS[0].color,
    relationship_type:  'friend',
    personality:        defaultPersonality(),
    topics:             [],
    voice_id:           null,
    system_prompt:      null,
    status:             'draft',
  };
}
