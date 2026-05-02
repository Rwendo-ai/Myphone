import { supabase } from './supabase';
import { SpeakerPack } from '../types/packs';
import { english as defaultSpeaker } from '../data/speakers';

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const CLAUDE_KEY = process.env.EXPO_PUBLIC_CLAUDE_KEY ?? '';

/**
 * Phase M migration flag.
 * Once supabase/functions/rwen-chat is deployed and verified, set this to
 * `true` (or remove the legacy direct-Anthropic path entirely below) to
 * route all chat calls through the Edge Function. Until then, the client
 * uses the legacy direct call with EXPO_PUBLIC_CLAUDE_KEY.
 *
 * Removing the env var = mandatory before TestFlight / Play distribution.
 */
const USE_EDGE_FUNCTION = process.env.EXPO_PUBLIC_USE_EDGE_FUNCTIONS === '1';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// ─── Full user profile from Supabase ─────────────────────────────────────────

export interface UserProfile {
  display_name: string;
  gender: string | null;
  app_language: string;
  primary_path: string | null;
  active_language_pack: string;
  ability_level: string | null;
  learning_reasons: string[] | null;
  time_commitment: string | null;
  challenges: string[] | null;
  personal_connection: string | null;
  companion_type: string | null;
  companion_topics: string[] | null;
  rwen_personality: { serious_playful?: number; listener_talker?: number } | null;
  xp: number;
  streak_days: number;
  completed_lessons: number;
  subscription_tier: string;
}

// Cache profile per user — refresh every 10 minutes
const profileCache: Record<string, { profile: UserProfile; fetchedAt: number }> = {};

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  const cached = profileCache[userId];
  if (cached && Date.now() - cached.fetchedAt < 10 * 60 * 1000) {
    return cached.profile;
  }
  try {
    const { data, error } = await supabase.rpc('get_ai_prompt_data', { p_user_id: userId });
    if (error || !data) return null;
    profileCache[userId] = { profile: data as UserProfile, fetchedAt: Date.now() };
    return data as UserProfile;
  } catch {
    return null;
  }
}

export function clearProfileCache(userId: string) {
  delete profileCache[userId];
}

// ─── System prompt builder ────────────────────────────────────────────────────

function humanReadableReasons(reasons: string[]): string {
  const map: Record<string, string> = {
    family:   'connect with family or a partner',
    travel:   'travel to Zimbabwe',
    culture:  'explore the culture and heritage',
    work:     'use it professionally',
    study:    'study it academically',
    fun:      'enjoy the challenge',
    heritage: 'reconnect with a language from their upbringing',
  };
  return reasons.map(r => map[r] ?? r).join(', ');
}

function humanReadableChallenges(challenges: string[]): string {
  const map: Record<string, string> = {
    pronunciation: 'making the sounds correctly',
    grammar:       'understanding grammar rules',
    vocabulary:    'remembering new words',
    confidence:    'speaking without fear of mistakes',
    consistency:   'building a regular practice habit',
  };
  return challenges.map(c => map[c] ?? c).join(' and ');
}

function abilityDescription(level: string | null): string {
  switch (level) {
    case 'beginner':       return 'a complete beginner (no prior knowledge)';
    case 'basics':         return 'someone who knows a few basic words';
    case 'conversational': return 'someone who can manage simple exchanges';
    case 'intermediate':   return 'an intermediate learner who makes some mistakes';
    default:               return 'a learner';
  }
}

function timeDescription(time: string | null): string {
  switch (time) {
    case '5min':  return '5 minutes';
    case '10min': return '10 minutes';
    case '20min': return '20 minutes';
    case '30min': return '30+ minutes';
    default:      return 'a short time';
  }
}

function learnedLanguageName(packId: string): string {
  if (packId === 'shona-english') return 'Shona';
  if (packId === 'english-shona') return 'English';
  return packId;
}

function spokenLanguageName(packId: string): string {
  if (packId === 'shona-english') return 'English';
  if (packId === 'english-shona') return 'Shona';
  return 'their native language';
}

export function buildSystemPrompt(
  profile: UserProfile,
  lessonContext?: string,
  speaker: SpeakerPack = defaultSpeaker,
): string {
  const name         = profile.display_name || 'friend';
  const learnedLang  = learnedLanguageName(profile.active_language_pack);
  const spokenLang   = spokenLanguageName(profile.active_language_pack);
  const path         = profile.primary_path ?? 'learn';
  const ability      = abilityDescription(profile.ability_level);
  const reasons      = profile.learning_reasons?.length ? humanReadableReasons(profile.learning_reasons) : null;
  const challenges   = profile.challenges?.length ? humanReadableChallenges(profile.challenges) : null;
  const timePerDay   = timeDescription(profile.time_commitment);
  const connection   = profile.personal_connection;
  const personality  = profile.rwen_personality;
  const compType     = profile.companion_type;
  const playfulness  = personality?.serious_playful ?? 0.6; // 0=serious, 1=playful
  const talkativeness = personality?.listener_talker ?? 0.5; // 0=listener, 1=talker

  // ── Personality calibration ──────────────────────────────────────────────
  const toneDesc = playfulness > 0.7
    ? 'very playful, uses light humour, keeps things fun'
    : playfulness < 0.3
    ? 'warm but more measured and thoughtful, less jokey'
    : 'warm and friendly with occasional gentle humour';

  const listenerDesc = talkativeness > 0.7
    ? 'you lead conversations, ask questions, and share observations freely'
    : talkativeness < 0.3
    ? 'you listen deeply, reflect back, and speak only when you have something meaningful to add'
    : 'you balance listening with talking — you ask as much as you share';

  // ── Path-specific context ─────────────────────────────────────────────────
  let pathContext = '';

  if (path === 'learn') {
    pathContext = `
LEARNING CONTEXT:
- ${name} is ${ability} in ${learnedLang}
- They have ${timePerDay} per day to learn
- They speak ${spokenLang} natively
${reasons ? `- They are learning because they want to: ${reasons}` : ''}
${challenges ? `- Their biggest challenge is: ${challenges} — acknowledge this, never shame it, always encourage` : ''}
${connection ? `- Personal motivation: "${connection}" — reference this when it fits naturally. It is the most powerful motivator you have.` : ''}

TEACHING APPROACH:
- Match vocabulary complexity to their ability level (${ability})
- Weave 1-2 ${learnedLang} words into each response naturally
- When they get something right, celebrate it specifically ("That's a hard sound — you nailed it")
- When they struggle, normalise it and redirect warmly
- Occasionally reference their personal motivation to keep them going
${connection ? `- Examples: "Your grandmother would love hearing this phrase." or "This one will really impress when you arrive in Harare."` : ''}`;
  }

  if (path === 'companion') {
    const compDesc = compType === 'friend'   ? 'a close, trusted friend'
                   : compType === 'support'  ? 'an empathetic, patient emotional support'
                   : compType === 'study'    ? 'an enthusiastic accountability partner'
                   : compType === 'work'     ? 'a thoughtful professional sounding board'
                   : 'a warm, genuine companion';

    pathContext = `
COMPANION ROLE:
- You are ${name}'s ${compDesc}
- You are NOT their language teacher in this mode — you are their companion first
- Language learning can happen naturally through conversation, but it is not the primary goal
${profile.companion_topics?.length ? `- ${name} enjoys talking about: ${profile.companion_topics.join(', ')}` : ''}
- Ask about ${name}'s day, feelings, and experiences — you are genuinely interested
- Remember details they share and reference them in future conversations
- If ${name} seems sad or troubled, acknowledge it first before anything else`;
  }

  // ── Core prompt ───────────────────────────────────────────────────────────
  // Per PRODUCT-DESIGN.md §3, the persona + guardrails are speaker-pack content
  // (in the speaker's own language). The dynamic user-context block below is
  // still English-template — Phase J (AI Companion content) translates the
  // template to each speaker's language using speaker.aiSystemPrompt.contextTemplate.
  return `${speaker.aiSystemPrompt.persona}

WHO YOU ARE TALKING TO:
- Name: ${name}${profile.gender ? ` (${profile.gender})` : ''}
- Streak: ${profile.streak_days} day${profile.streak_days !== 1 ? 's' : ''} — ${profile.streak_days > 7 ? 'impressive dedication' : profile.streak_days > 0 ? 'building momentum' : 'just getting started'}
- Total XP: ${profile.xp}
- Lessons completed: ${profile.completed_lessons}
- Subscription: ${profile.subscription_tier}
${pathContext}
YOUR PERSONALITY — calibrated for ${name}:
- Tone: ${toneDesc}
- Conversational style: ${listenerDesc}

${speaker.aiSystemPrompt.guardrails}
${learnedLang !== 'English' ? `\n- Include 1-2 ${learnedLang} words or phrases naturally per response` : ''}
${lessonContext ? `
LESSON MODE — ${name} is asking about: ${lessonContext}
Give a focused, clear explanation in 2-3 sentences. Be specific to what they asked.
Then encourage them to keep going. Do not pad with unnecessary information.` : ''}`;
}

// ─── Send message ─────────────────────────────────────────────────────────────

export async function sendMessage(
  userId: string,
  userMessage: string,
  history: ChatMessage[],
  speaker: SpeakerPack = defaultSpeaker,
  lessonContext?: string,
): Promise<string> {
  // Save user message
  await supabase.from('conversations').insert({
    user_id: userId,
    role: 'user',
    content: userMessage,
    pack_context: lessonContext ?? null,
  });

  // Fetch full profile (cached)
  const profile = await fetchUserProfile(userId);

  // Build personalised system prompt — persona + guardrails come from the speaker pack
  const systemPrompt = profile
    ? buildSystemPrompt(profile, lessonContext, speaker)
    : `${speaker.aiSystemPrompt.persona}\n\n${speaker.aiSystemPrompt.guardrails}`;

  // ── Edge Function path (Phase M) ────────────────────────────────────────
  if (USE_EDGE_FUNCTION) {
    const { data, error } = await supabase.functions.invoke('rwen-chat', {
      body: {
        userMessage,
        history,
        systemPrompt,
        lessonContext,
      },
    });
    if (error) throw new Error(`rwen-chat: ${error.message}`);
    return (data as { reply: string }).reply;
  }

  // ── Legacy direct-Anthropic path (pre-Phase M) ──────────────────────────
  // Trim the conversation history to the last 20 turns. Anything older lives
  // in the system prompt's memory section (built from companion_summaries
  // weekly compressions) — keeps per-message input cost bounded.
  const messages: ChatMessage[] = [
    ...history.slice(-20),
    { role: 'user', content: userMessage },
  ];

  // Prompt caching: mark the system prompt as cacheable so subsequent
  // messages within the 5-minute TTL pay $0.10/M for the cached prefix
  // (vs $1/M without caching). For a heavy chatter that's the difference
  // between $20+/mo and $5/mo per user. The system prompt is identical
  // across messages until memory or weekly summary updates, so it caches
  // very effectively. See https://docs.anthropic.com/en/docs/prompt-caching
  const response = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 350,
      system: [
        {
          type: 'text',
          text: systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`Claude API error: ${response.status}`);
  }

  const data   = await response.json();
  const reply  = data.content[0]?.text ?? "Ndine urombo — I'm having a moment. Try again?";

  // Save Rwen's reply
  await supabase.from('conversations').insert({
    user_id: userId,
    role: 'rwen',
    content: reply,
    pack_context: lessonContext ?? null,
  });

  return reply;
}

export async function loadConversationHistory(userId: string): Promise<ChatMessage[]> {
  const { data } = await supabase
    .from('conversations')
    .select('role, content')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(40);

  if (!data) return [];
  return data.map(row => ({
    role: row.role === 'rwen' ? 'assistant' : 'user',
    content: row.content,
  }));
}
