'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { AuthCard } from '@/components/auth/AuthCard';

// /onboarding — web counterpart to the mobile wizard at
// app/(auth)/onboarding.tsx. Trimmed to the steps that matter for web
// v1 per the agent brief: language, ability, reasons, companion,
// display-name + age. The mobile app's path-fork (Learn/Companion/
// Travel), DOB-jurisdiction handling, voice picker, and topics step
// are intentionally OUT-OF-SCOPE here — the mobile flow remains the
// canonical onboarding. Web users get a quick 5-step path that's
// enough to write a usable profile + claim one free companion.

type Step = 'language' | 'ability' | 'reasons' | 'companion' | 'identity' | 'done';

// 11 languages, matching the mobile pack list. `code` is the ISO 639-1
// stored in profiles.app_language. `id` is the speaker-pack id used by
// the mobile app — we still write it to active_language_pack_id so
// pack-aware features (lesson skeletons, voice keys) work.
const LANGUAGES: ReadonlyArray<{ id: string; code: string; name: string; flag: string }> = [
  { id: 'shona',      code: 'sn', name: 'Shona',       flag: '🇿🇼' },
  { id: 'ndebele',    code: 'nd', name: 'isiNdebele',  flag: '🇿🇼' },
  { id: 'english',    code: 'en', name: 'English',     flag: '🇬🇧' },
  { id: 'spanish',    code: 'es', name: 'Spanish',     flag: '🇪🇸' },
  { id: 'french',     code: 'fr', name: 'French',      flag: '🇫🇷' },
  { id: 'chinese',    code: 'zh', name: 'Mandarin',    flag: '🇨🇳' },
  { id: 'japanese',   code: 'ja', name: 'Japanese',    flag: '🇯🇵' },
  { id: 'tagalog',    code: 'tl', name: 'Tagalog',     flag: '🇵🇭' },
  { id: 'hindi',      code: 'hi', name: 'Hindi',       flag: '🇮🇳' },
  { id: 'portuguese', code: 'pt', name: 'Portuguese',  flag: '🇧🇷' },
  { id: 'korean',     code: 'ko', name: 'Korean',      flag: '🇰🇷' },
];

const ABILITY_LEVELS: ReadonlyArray<{ id: string; label: string; desc: string }> = [
  { id: 'beginner',     label: 'Beginner',     desc: 'Starting from zero' },
  { id: 'intermediate', label: 'Intermediate', desc: 'Hold a basic conversation' },
  { id: 'advanced',     label: 'Advanced',     desc: 'Comfortable, polishing fluency' },
];

const REASONS: ReadonlyArray<{ id: string; label: string }> = [
  { id: 'family',   label: 'Family' },
  { id: 'travel',   label: 'Travel' },
  { id: 'culture',  label: 'Culture' },
  { id: 'work',     label: 'Work' },
  { id: 'study',    label: 'Study' },
  { id: 'fun',      label: 'Fun' },
  { id: 'heritage', label: 'Heritage' },
];

// Free preset list — Rwen is always free and always claimed. The user
// picks ONE additional free companion from this list. Aria + Zeke have
// minimum-age gates, enforced against the user-entered age.
// preset_id values match the mobile PRESET_LIST ids so a user who
// re-signs in on mobile sees the same companion.
type Preset = {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  minAge?: number;
};

const FREE_PRESETS: ReadonlyArray<Preset> = [
  { id: 'maya',   name: 'Maya',   tagline: 'Warm, encouraging mentor',     emoji: '🌸' },
  { id: 'kai',    name: 'Kai',    tagline: 'Calm, grounded big-brother',   emoji: '🌊' },
  { id: 'sam',    name: 'Sam',    tagline: 'Playful, curious sidekick',    emoji: '🎈' },
  { id: 'lumi',   name: 'Lumi',   tagline: 'Gentle, dreamy companion',     emoji: '🌙' },
  { id: 'tendai', name: 'Tendai', tagline: 'Shona-speaking storyteller',   emoji: '🌳' },
  { id: 'aria',   name: 'Aria',   tagline: 'Honest, adult conversation',   emoji: '🌹', minAge: 18 },
  { id: 'zeke',   name: 'Zeke',   tagline: 'Edgy teen-and-up energy',      emoji: '⚡', minAge: 13 },
];

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>('language');
  const [language, setLanguage] = useState<typeof LANGUAGES[number] | null>(null);
  const [ability, setAbility] = useState<string>('');
  const [reasons, setReasons] = useState<string[]>([]);
  const [companionId, setCompanionId] = useState<string>('');
  const [displayName, setDisplayName] = useState('');
  const [ageStr, setAgeStr] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Guard: if the user opens /onboarding without being signed in, bounce
  // them to /sign-in. The middleware should also catch this but we want
  // a friendly fallback if it doesn't.
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.assign('/sign-in');
        return;
      }
      // Pre-fill displayName from user_metadata if signup-via-email set it.
      const metaName = (data.user.user_metadata?.display_name as string | undefined) ?? '';
      if (metaName) setDisplayName(metaName);
      setAuthChecked(true);
    });
  }, []);

  const age = useMemo(() => {
    const n = parseInt(ageStr, 10);
    return Number.isFinite(n) && n > 0 && n < 130 ? n : null;
  }, [ageStr]);

  const eligiblePresets = useMemo(() => {
    return FREE_PRESETS.filter((p) => {
      if (!p.minAge) return true;
      if (age === null) return true; // Show all until they enter an age.
      return age >= p.minAge;
    });
  }, [age]);

  // Step order — used for progress bar + back nav.
  const steps: Step[] = ['language', 'ability', 'reasons', 'companion', 'identity', 'done'];
  const idx = steps.indexOf(step);
  const total = steps.length - 1; // 'done' isn't counted in progress.

  function toggleReason(id: string) {
    setReasons((r) => (r.includes(id) ? r.filter((x) => x !== id) : [...r, id]));
  }

  const finish = useCallback(async () => {
    setError(null);
    if (!language || !ability || reasons.length === 0 || !companionId || !displayName.trim() || age === null) {
      setError('Please complete every step.');
      return;
    }
    setSaving(true);
    const supabase = createSupabaseBrowser();
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr || !userData.user) {
      setError('Your session expired. Please sign in again.');
      setSaving(false);
      return;
    }
    const userId = userData.user.id;

    // Profile write. Brief said app_language='en' — that's the *UI*
    // language. The language the user is LEARNING goes into
    // active_language_pack_id (matches mobile semantics). Mobile's
    // pack-id convention is '<spoken>-<learned>'; for web v1 the user
    // is assumed to be an English speaker learning the picked language.
    const packId = language.id === 'english' ? 'shona-english' : `english-${language.id}`;
    const ageRange = age < 18 ? '13-17' : age < 25 ? '18-24' : age < 35 ? '25-34' : age < 45 ? '35-44' : '45+';

    const { error: profileErr } = await supabase
      .from('profiles')
      .update({
        // profiles.username is NOT NULL — use it as the display name.
        username: displayName.trim(),
        app_language: 'en',
        active_language_pack_id: packId,
        speaker_pack_id: language.id,
        ability_level: ability,
        learning_reasons: reasons,
        age_range: ageRange,
        is_minor: age < 18,
        onboarding_complete: true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (profileErr) {
      setError(`Could not save profile: ${profileErr.message}`);
      setSaving(false);
      return;
    }

    // Claim the user's one free companion. is_paid=false marks this as
    // the free claim — further companion picks must be purchased
    // (mirrors the mobile claimFreePreset behaviour). Upsert by
    // (user_id, preset_id) so re-running onboarding is idempotent.
    const { error: companionErr } = await supabase
      .from('user_companion_customizations')
      .upsert(
        {
          user_id: userId,
          preset_id: companionId,
          is_paid: false,
          owned_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,preset_id' },
      );
    if (companionErr) {
      // Don't block onboarding — log + continue. User can re-pick from
      // the companions tab later. Matches mobile "best-effort" behaviour.
      console.warn('[onboarding] free companion claim failed:', companionErr.message);
    }

    window.location.assign('/home');
  }, [language, ability, reasons, companionId, displayName, age]);

  function next() {
    setError(null);
    if (step === 'language' && !language) return setError('Pick a language.');
    if (step === 'ability' && !ability) return setError('Pick an ability level.');
    if (step === 'reasons' && reasons.length === 0) return setError('Pick at least one reason.');
    if (step === 'companion' && !companionId) return setError('Pick your free companion.');
    if (step === 'identity') {
      if (!displayName.trim()) return setError('Pick a display name.');
      if (age === null) return setError('Please enter your age.');
      void finish();
      return;
    }
    const i = steps.indexOf(step);
    if (i < steps.length - 1) setStep(steps[i + 1]);
  }
  function back() {
    setError(null);
    const i = steps.indexOf(step);
    if (i > 0) setStep(steps[i - 1]);
  }

  if (!authChecked) {
    return (
      <AuthCard title="Loading…">
        <p className="text-white/60 text-center">Just a moment.</p>
      </AuthCard>
    );
  }

  return (
    <AuthCard wide>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-1.5 bg-secondary transition-all"
            style={{ width: `${Math.min(100, ((idx + 1) / total) * 100)}%` }}
          />
        </div>
        <p className="text-xs text-white/40 text-right mt-2">
          Step {Math.min(idx + 1, total)} of {total}
        </p>
      </div>

      {step === 'language' && (
        <Section
          title="What do you want to learn?"
          subtitle="Pick the language you'd like to speak more of."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {LANGUAGES.map((l) => (
              <SelectCard
                key={l.id}
                selected={language?.id === l.id}
                onClick={() => setLanguage(l)}
                emoji={l.flag}
                label={l.name}
              />
            ))}
          </div>
        </Section>
      )}

      {step === 'ability' && (
        <Section title="How comfortable are you with it?" subtitle="No wrong answer — pick what feels closest.">
          <div className="space-y-2">
            {ABILITY_LEVELS.map((a) => (
              <SelectCard
                key={a.id}
                selected={ability === a.id}
                onClick={() => setAbility(a.id)}
                label={a.label}
                desc={a.desc}
              />
            ))}
          </div>
        </Section>
      )}

      {step === 'reasons' && (
        <Section title="Why are you learning?" subtitle="Pick everything that fits. We'll tailor the conversations.">
          <div className="flex flex-wrap gap-2">
            {REASONS.map((r) => {
              const selected = reasons.includes(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => toggleReason(r.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    selected
                      ? 'bg-secondary/20 border-secondary text-secondary'
                      : 'bg-white/5 border-white/15 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </Section>
      )}

      {step === 'companion' && (
        <Section
          title="Pick your free companion"
          subtitle="Rwen always rides with you for free — pick one more friend on the house."
        >
          <div className="space-y-2">
            {eligiblePresets.map((p) => (
              <SelectCard
                key={p.id}
                selected={companionId === p.id}
                onClick={() => setCompanionId(p.id)}
                emoji={p.emoji}
                label={`${p.name}${p.minAge ? ` (${p.minAge}+)` : ''}`}
                desc={p.tagline}
              />
            ))}
            {age !== null && eligiblePresets.length < FREE_PRESETS.length && (
              <p className="text-white/40 text-xs mt-2">
                Some companions are hidden because of age. You can change your age in Profile later.
              </p>
            )}
          </div>
        </Section>
      )}

      {step === 'identity' && (
        <Section title="One last thing" subtitle="So your companion knows what to call you.">
          <div className="space-y-3">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-white/50">Display name</span>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="What should we call you?"
                className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-white/50">Age</span>
              <input
                type="number"
                inputMode="numeric"
                value={ageStr}
                onChange={(e) => setAgeStr(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
                placeholder="e.g. 28"
                min={1}
                max={129}
                className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
              />
              <span className="text-xs text-white/40 mt-1 block">
                Used only to age-gate companions and content. Stored as a range, not a DOB.
              </span>
            </label>
          </div>
        </Section>
      )}

      {error && <p className="text-error text-sm text-center mt-4" role="alert">{error}</p>}

      {/* Nav buttons */}
      <div className="flex gap-2 mt-8">
        {idx > 0 && (
          <button
            type="button"
            onClick={back}
            disabled={saving}
            className="px-5 py-3 rounded-full border border-white/15 text-white/70 hover:bg-white/5 transition disabled:opacity-50"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={next}
          disabled={saving}
          className="flex-1 py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-50"
        >
          {saving ? 'Saving…' : step === 'identity' ? 'Finish' : 'Continue'}
        </button>
      </div>
    </AuthCard>
  );
}

// ── Subcomponents (file-local; no need to extract) ──────────────────

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-white/60 text-sm mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function SelectCard({
  selected,
  onClick,
  emoji,
  label,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  emoji?: string;
  label: string;
  desc?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ${
        selected
          ? 'bg-secondary/15 border-secondary'
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
    >
      {emoji && <span className="text-2xl">{emoji}</span>}
      <div className="flex-1">
        <div className={`font-semibold ${selected ? 'text-secondary' : 'text-white'}`}>{label}</div>
        {desc && <div className="text-xs text-white/55 mt-0.5">{desc}</div>}
      </div>
      {selected && <span className="text-secondary text-lg font-bold">✓</span>}
    </button>
  );
}
