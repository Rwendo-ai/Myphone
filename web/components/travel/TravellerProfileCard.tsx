'use client';

import { useState, useTransition } from 'react';
import type { TravellerProfile } from '@/lib/travel-web';
import { createTravellerProfile } from '@/lib/travel-web';
import { COUNTRIES, countryFlag, countryName } from './countries';

interface Props {
  initial: TravellerProfile | null;
  defaultName: string;
}

export default function TravellerProfileCard({ initial, defaultName }: Props) {
  const [editing, setEditing] = useState(initial === null);
  const [displayName, setDisplayName] = useState(initial?.display_name ?? defaultName);
  const [bio, setBio]                 = useState(initial?.bio ?? '');
  const [currentCountry, setCurrentCountry] = useState(initial?.current_country_code ?? '');
  const [currentCity, setCurrentCity]       = useState(initial?.current_city ?? '');
  // Comma-separated list of country codes, edited as a single text box for v1.
  const [targets, setTargets] = useState(
    (initial?.target_country_codes ?? []).join(', '),
  );
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function save() {
    setError(null);
    startTransition(async () => {
      const target_country_codes = targets
        .split(',')
        .map((c) => c.trim().toUpperCase())
        .filter(Boolean);
      const res = await createTravellerProfile({
        display_name: displayName,
        bio,
        current_country_code: currentCountry || undefined,
        current_city: currentCity || undefined,
        target_country_codes,
      });
      if (res.ok) {
        setEditing(false);
      } else {
        setError(humanError(res.error));
      }
    });
  }

  // ── Empty state: prompt user to create a profile ──────────────────────────
  if (!initial && !editing) {
    return (
      <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h2 className="text-lg font-bold">Join the traveller feed</h2>
        <p className="text-sm text-white/65 mt-1">
          Share where you are and where you&apos;re heading. Other travellers can see your posts.
        </p>
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="mt-3 px-4 py-2 bg-secondary text-primary font-semibold rounded-full"
        >
          Set up traveller profile
        </button>
      </section>
    );
  }

  // ── Editing state ─────────────────────────────────────────────────────────
  if (editing) {
    return (
      <section className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
        <h2 className="text-lg font-bold">
          {initial ? 'Edit traveller profile' : 'Create traveller profile'}
        </h2>

        <Field label="Display name">
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            maxLength={60}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30"
            placeholder="What other travellers will see"
          />
        </Field>

        <Field label="Bio (optional)">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={500}
            rows={2}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30 resize-none"
            placeholder="A line about you"
          />
        </Field>

        <div className="grid grid-cols-[1fr_2fr] gap-2">
          <Field label="Where are you?">
            <select
              value={currentCountry}
              onChange={(e) => setCurrentCountry(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-lg px-2 py-2 text-sm outline-none focus:border-white/30"
            >
              <option value="">—</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="City">
            <input
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30"
              placeholder="e.g. Harare"
            />
          </Field>
        </div>

        <Field label="Heading to (country codes, comma-separated)">
          <input
            value={targets}
            onChange={(e) => setTargets(e.target.value)}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30"
            placeholder="ZW, ZA, KE"
          />
        </Field>

        {error && <p className="text-error text-sm">{error}</p>}

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={save}
            disabled={isPending || !displayName.trim()}
            className="px-4 py-2 bg-secondary text-primary font-semibold rounded-full disabled:opacity-50"
          >
            {isPending ? 'Saving…' : initial ? 'Save' : 'Create profile'}
          </button>
          {initial && (
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setError(null);
              }}
              className="px-4 py-2 text-white/70 hover:text-white text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </section>
    );
  }

  // ── View state ────────────────────────────────────────────────────────────
  const flag = countryFlag(initial!.current_country_code);
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
            You on the feed
          </p>
          <h2 className="text-xl font-bold truncate">{initial!.display_name}</h2>
          <p className="text-sm text-white/70 mt-2">
            <span className="text-white/50">Now:</span>{' '}
            {initial!.current_city || initial!.current_country_code
              ? `${flag} ${[initial!.current_city, countryName(initial!.current_country_code)]
                  .filter(Boolean)
                  .join(', ')}`
              : '—'}
          </p>
          {initial!.target_country_codes.length > 0 && (
            <p className="text-sm text-white/70 mt-1">
              <span className="text-white/50">Heading to:</span>{' '}
              {initial!.target_country_codes
                .map((c) => `${countryFlag(c)} ${countryName(c)}`)
                .join(' · ')}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="text-sm text-secondary hover:underline shrink-0"
        >
          Edit
        </button>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-white/60 uppercase tracking-wider">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function humanError(code: string): string {
  switch (code) {
    case 'display-name-required':  return 'A display name is required.';
    case 'display-name-too-long':  return 'Display name is too long (60 max).';
    case 'not-signed-in':          return 'Please sign in again to save.';
    default:                       return code;
  }
}
