'use client';

import { useState, useTransition } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

// Inline editable profile-settings card. v1 keeps everything on one page
// (no /profile/settings sub-route) — the four fields the user is most
// likely to want to change: display name, app language, learning language,
// ability level. Saves on blur / change directly to profiles via the
// browser Supabase client (RLS enforces row ownership).
//
// Languages list mirrors data/languages on mobile but trimmed to the same
// 11 supported app languages. Ability levels match data/products.ts and
// the onboarding flow.

const APP_LANGUAGES: Array<{ code: string; label: string }> = [
  { code: 'english',    label: '🇬🇧 English' },
  { code: 'shona',      label: '🇿🇼 ChiShona' },
  { code: 'ndebele',    label: '🇿🇼 isiNdebele' },
  { code: 'french',     label: '🇫🇷 Français' },
  { code: 'chinese',    label: '🇨🇳 中文' },
  { code: 'tagalog',    label: '🇵🇭 Tagalog' },
  { code: 'hindi',      label: '🇮🇳 हिन्दी' },
  { code: 'spanish',    label: '🇪🇸 Español' },
  { code: 'portuguese', label: '🇧🇷 Português' },
  { code: 'japanese',   label: '🇯🇵 日本語' },
  { code: 'korean',     label: '🇰🇷 한국어' },
];

const LEARNING_LANGUAGES: Array<{ id: string; label: string }> = [
  { id: 'language-shona',      label: '🇿🇼 Shona' },
  { id: 'language-english',    label: '🇬🇧 English' },
  { id: 'language-french',     label: '🇫🇷 French' },
  { id: 'language-chinese',    label: '🇨🇳 Mandarin' },
  { id: 'language-tagalog',    label: '🇵🇭 Tagalog' },
  { id: 'language-hindi',      label: '🇮🇳 Hindi' },
  { id: 'language-spanish',    label: '🇪🇸 Spanish' },
  { id: 'language-portuguese', label: '🇧🇷 Portuguese' },
  { id: 'language-japanese',   label: '🇯🇵 Japanese' },
  { id: 'language-korean',     label: '🇰🇷 Korean' },
  { id: 'language-ndebele',    label: '🇿🇼 Ndebele' },
];

const ABILITY_LEVELS: Array<{ value: string; label: string }> = [
  { value: 'beginner',     label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced',     label: 'Advanced' },
];

export interface ProfileSettingsInitial {
  display_name: string | null;
  app_language: string | null;
  active_language_pack: string | null;
  ability_level: string | null;
}

export default function ProfileSettings({
  userId,
  initial,
}: {
  userId: string;
  initial: ProfileSettingsInitial;
}) {
  const [displayName, setDisplayName] = useState(initial.display_name ?? '');
  const [appLang,     setAppLang]     = useState(initial.app_language ?? 'english');
  const [learnLang,   setLearnLang]   = useState(initial.active_language_pack ?? 'language-shona');
  const [ability,     setAbility]     = useState(initial.ability_level ?? 'beginner');
  const [savedAt,     setSavedAt]     = useState<number | null>(null);
  const [pending, startTransition] = useTransition();

  function persist(patch: Record<string, string>) {
    startTransition(async () => {
      const supabase = createSupabaseBrowser();
      const { error } = await supabase.from('profiles').update(patch).eq('id', userId);
      if (!error) setSavedAt(Date.now());
    });
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      {/* Display name */}
      <Row label="Display name">
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          onBlur={() => persist({ display_name: displayName })}
          placeholder="Your name"
          className="bg-transparent text-right text-white placeholder:text-white/30 outline-none w-48"
        />
      </Row>

      {/* App language */}
      <Row label="App language">
        <Select
          value={appLang}
          onChange={(v) => { setAppLang(v); persist({ app_language: v }); }}
          options={APP_LANGUAGES.map((l) => ({ value: l.code, label: l.label }))}
        />
      </Row>

      {/* Learning language */}
      <Row label="Learning language">
        <Select
          value={learnLang}
          onChange={(v) => { setLearnLang(v); persist({ active_language_pack: v }); }}
          options={LEARNING_LANGUAGES.map((l) => ({ value: l.id, label: l.label }))}
        />
      </Row>

      {/* Ability level — segmented */}
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        <div className="text-white/80">Ability level</div>
        <div className="flex gap-1 bg-white/5 rounded-full p-1">
          {ABILITY_LEVELS.map((lvl) => (
            <button
              key={lvl.value}
              onClick={() => { setAbility(lvl.value); persist({ ability_level: lvl.value }); }}
              className={`px-3 py-1 text-xs font-medium rounded-full transition ${
                ability === lvl.value
                  ? 'bg-secondary text-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Saved indicator */}
      <div className="px-5 py-2 text-xs text-white/40 border-t border-white/5 flex justify-end h-7">
        {pending ? 'Saving…' : savedAt ? 'Saved ✓' : ''}
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-5 py-4 flex items-center justify-between gap-4 border-b border-white/5">
      <div className="text-white/80">{label}</div>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-primary text-white border border-white/10 rounded-md px-2 py-1 outline-none"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-primary">
          {o.label}
        </option>
      ))}
    </select>
  );
}
