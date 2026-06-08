'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  getPreset,
  loadCustomization,
  loadActiveArchetypes,
  upsertCustomization,
  VOICE_LIBRARY,
  type CompanionArchetype,
} from '@/lib/companion-web';

/**
 * Customization sheet for an owned companion preset.
 *
 * Lets the user pick:
 *   - face archetype (carousel of thumbnails)
 *   - voice (dropdown)
 *   - display name override
 *
 * Saves via upsertCustomization. Assumes the user already owns the preset —
 * use PickerSheet's claim flow for new claims. Closes after a successful save.
 */

interface Props {
  open: boolean;
  onClose: () => void;
  userId: string;
  presetId: string;
  onSaved: () => void;
}

export default function ProfileSheet({ open, onClose, userId, presetId, onSaved }: Props) {
  const preset = getPreset(presetId);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [archetypes, setArchetypes] = useState<CompanionArchetype[]>([]);
  const [customName, setCustomName] = useState('');
  const [faceId, setFaceId] = useState<string | null>(null);
  const [voiceId, setVoiceId] = useState<string>(preset.defaultVoiceId);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      const [archs, existing] = await Promise.all([
        loadActiveArchetypes(preset.id),
        loadCustomization(userId, preset.id),
      ]);
      if (cancelled) return;
      setArchetypes(archs);
      setCustomName(existing?.custom_name ?? '');
      setFaceId(existing?.face_archetype_id ?? null);
      setVoiceId(existing?.voice_id ?? preset.defaultVoiceId);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [open, userId, presetId, preset.id, preset.defaultVoiceId]);

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      await upsertCustomization(userId, preset.id, {
        custom_name: customName.trim() || null,
        face_archetype_id: faceId,
        voice_id: voiceId,
      });
      onSaved();
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60" onClick={onClose}>
      <div
        className="w-full max-w-md bg-[#0D2140] text-white rounded-t-3xl pt-3 pb-6 max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-center w-11 h-1.5 rounded-full bg-white/20 mb-3" />
        <div className="flex items-center justify-between px-5 pb-3">
          <div>
            <h2 className="text-lg font-bold">Customize {preset.name}</h2>
            <p className="text-xs text-white/60">{preset.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >×</button>
        </div>

        {loading ? (
          <div className="py-10 text-center text-white/60">Loading…</div>
        ) : (
          <div className="overflow-y-auto px-5 pb-5 space-y-5">
            {/* Display name */}
            <section>
              <label className="block text-sm font-semibold mb-1">Display name</label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder={preset.name}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-white/30"
                maxLength={32}
              />
              <p className="text-xs text-white/40 mt-1">
                Leave blank to use the default name “{preset.name}”.
              </p>
            </section>

            {/* Face picker */}
            <section>
              <label className="block text-sm font-semibold mb-2">Face</label>
              {archetypes.length === 0 ? (
                <p className="text-xs text-white/50">
                  No face options for {preset.name} yet — using the default avatar.
                </p>
              ) : (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  <button
                    onClick={() => setFaceId(null)}
                    className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl border-2 ${
                      faceId === null ? 'border-secondary bg-secondary/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {preset.emoji}
                  </button>
                  {archetypes.map((a) => {
                    const src = a.thumbnail_url ?? a.image_url;
                    return (
                      <button
                        key={a.id}
                        onClick={() => setFaceId(a.id)}
                        className={`shrink-0 rounded-full overflow-hidden border-2 ${
                          faceId === a.id ? 'border-secondary' : 'border-white/10'
                        }`}
                        aria-label={a.name}
                      >
                        {src ? (
                          <Image src={src} alt={a.name} width={64} height={64}
                            className="object-cover w-16 h-16" unoptimized />
                        ) : (
                          <div className="w-16 h-16 bg-white/10 flex items-center justify-center text-xs">
                            {a.name}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Voice picker */}
            <section>
              <label className="block text-sm font-semibold mb-1">Voice</label>
              <select
                value={voiceId}
                onChange={(e) => setVoiceId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-white/30"
              >
                {VOICE_LIBRARY.map((v) => (
                  <option key={v.id} value={v.id} className="bg-[#0D2140]">
                    {v.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-white/40 mt-1">
                Default for {preset.name}: {VOICE_LIBRARY.find((v) => v.id === preset.defaultVoiceId)?.name ?? '—'}
              </p>
            </section>

            <details className="bg-white/5 rounded-xl p-3">
              <summary className="cursor-pointer text-sm font-semibold">
                See {preset.name}’s soul
              </summary>
              <p className="text-xs text-white/70 mt-2">{preset.description}</p>
            </details>

            {error && (
              <div className="text-error text-sm bg-error/10 border border-error/30 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-3 rounded-full bg-secondary text-primary font-semibold disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
