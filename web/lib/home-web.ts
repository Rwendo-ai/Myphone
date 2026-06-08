import { createSupabaseServer } from './supabase-server';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface HomeProfile {
  username: string | null;
  xp: number;
  active_language_pack_id: string | null;
  current_country_code: string | null;
  current_city: string | null;
}

export interface HomeMessage {
  role: 'user' | 'assistant' | string;
  content: string;
  created_at: string;
}

export interface DashboardData {
  profile: HomeProfile | null;
  credits: number;
  recentConversations: HomeMessage[];
  todayLessonsCompleted: number;
  totalXpToday: number;
  email: string | null;
}

// ─── Pack id → human label ──────────────────────────────────────────────────
// Small inline mapping so the home page can show a friendly course name
// without dragging the whole mobile course catalogue into the web bundle.
// Keep aligned with /data/courses on mobile (display names only).

const PACK_LABELS: Record<string, string> = {
  'language-shona':            'Shona',
  'language-english':          'English',
  'language-french':           'French',
  'language-chinese':          'Mandarin Chinese',
  'language-tagalog':          'Tagalog',
  'language-hindi':            'Hindi',
  'language-spanish':          'Spanish',
  'language-portuguese':       'Portuguese',
  'language-japanese':         'Japanese',
  'language-korean':           'Korean',
  'language-ndebele':          'Ndebele',
  'ai-companion':              'AI Companion',
  'know-yourself':             'Know Yourself',
  'hard-conversations-work':   'Hard Conversations at Work',
  'parenting-under-pressure':  'Parenting Under Pressure',
  'money-and-meaning':         'Money & Meaning',
  'grief-honestly':            'Grief, Honestly',
  'sleep-repaired':            'Sleep, Repaired',
  'lost-confidence':           'Lost Confidence',
  'caring-aging-parent':       'Caring for an Aging Parent',
};

export function packLabel(packId: string | null | undefined): string {
  if (!packId) return 'your course';
  return PACK_LABELS[packId] ?? packId.replace(/^language-/, '').replace(/-/g, ' ');
}

// ─── Single-round-trip dashboard fetch ──────────────────────────────────────

export async function getDashboardData(userId: string, email: string | null): Promise<DashboardData> {
  const supabase = await createSupabaseServer();

  // Start of "today" in UTC. xp_events are timestamptz; for the streak/today
  // counter we just clip to midnight UTC. Good-enough for v1 — per-timezone
  // streak math is a follow-up.
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);
  const todayIso = startOfToday.toISOString();

  const [profileRes, creditsRes, convRes, xpRes] = await Promise.all([
    supabase
      .from('profiles')
      .select('username, xp, active_language_pack_id, country_code')
      .eq('id', userId)
      .maybeSingle(),
    supabase
      .from('user_credits')
      .select('balance')
      .eq('user_id', userId)
      .maybeSingle(),
    supabase
      .from('conversations')
      .select('role, content, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(6),
    supabase
      .from('xp_events')
      .select('event_type, amount')
      .eq('user_id', userId)
      .gte('created_at', todayIso),
  ]);

  const p = profileRes.data;
  const profile: HomeProfile | null = p
    ? {
        username: p.username ?? null,
        xp: p.xp ?? 0,
        active_language_pack_id: p.active_language_pack_id ?? null,
        current_country_code: p.country_code ?? null,
        current_city: null,
      }
    : null;

  const xpEvents = xpRes.data ?? [];
  const todayLessonsCompleted = xpEvents.filter(
    (e: { event_type: string }) => e.event_type === 'lesson_complete',
  ).length;
  const totalXpToday = xpEvents.reduce(
    (sum: number, e: { amount: number | null }) => sum + (e.amount ?? 0),
    0,
  );

  // Reverse so we render oldest → newest in the preview.
  const recentConversations = (convRes.data ?? []).slice().reverse();

  return {
    profile,
    credits: creditsRes.data?.balance ?? 0,
    recentConversations,
    todayLessonsCompleted,
    totalXpToday,
    email,
  };
}
