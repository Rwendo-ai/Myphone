'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PRESET_LIST,
  getOwnedCompanions,
  loadArchetype,
  setActiveCompanion,
  claimFreePreset,
  type CompanionCustomization,
  type CompanionArchetype,
  type CompanionPreset,
} from '@/lib/companion-web';

/**
 * Bottom-sheet picker for switching the active companion.
 *
 * Three row states (mirrored from mobile CompanionPickerSheet):
 *  - "Owned"     : has a customization row. Tap → setActive + close.
 *  - "Claimable" : free pick available. Tap → claim + setActive.
 *  - "Locked"    : premium, no free pick left. Tap → /cart with preset.
 *
 * Rwen is always free + owned (granted by trg_grant_rwen on signup).
 */

interface Props {
  open: boolean;
  onClose: () => void;
  userId: string;
  activePresetId: string;
  onActiveChange: (presetId: string) => void;
  onEditProfile: (presetId: string) => void;
}

function isFreeForEveryone(p: CompanionPreset) {
  return p.id === 'rwen';
}

export default function PickerSheet({
  open, onClose, userId, activePresetId, onActiveChange, onEditProfile,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [owned, setOwned] = useState<CompanionCustomization[]>([]);
  const [faces, setFaces] = useState<Record<string, CompanionArchetype>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      const list = await getOwnedCompanions(userId);
      if (cancelled) return;
      setOwned(list);
      const faceIds = Array.from(
        new Set(list.map((r) => r.face_archetype_id).filter((x): x is string => !!x)),
      );
      const fetched = await Promise.all(faceIds.map((id) => loadArchetype(id)));
      if (cancelled) return;
      const map: Record<string, CompanionArchetype> = {};
      fetched.forEach((a) => { if (a) map[a.id] = a; });
      setFaces(map);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [open, userId]);

  const ownedIds = useMemo(() => new Set(owned.map((r) => r.preset_id)), [owned]);
  const freeUsed = owned.filter((r) => !r.is_paid && r.preset_id !== 'rwen').length;
  const freePickAvailable = freeUsed < 1;

  async function handleRowPress(preset: CompanionPreset) {
    setError(null);
    if (ownedIds.has(preset.id)) {
      setBusy(preset.id);
      try {
        await setActiveCompanion(userId, preset.id);
        onActiveChange(preset.id);
        onClose();
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to switch');
      } finally {
        setBusy(null);
      }
      return;
    }

    // Not owned.
    if (freePickAvailable) {
      setBusy(preset.id);
      try {
        const res = await claimFreePreset(userId, preset.id);
        if (!res.ok) {
          if (res.reason === 'limit') {
            setError('Free pick already used. Buy this companion in the shop to unlock.');
            return;
          }
          setError('Could not claim — try again.');
          return;
        }
        await setActiveCompanion(userId, preset.id);
        onActiveChange(preset.id);
        // Refresh owned list so the row flips.
        const list = await getOwnedCompanions(userId);
        setOwned(list);
        onClose();
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to claim');
      } finally {
        setBusy(null);
      }
    }
    // else: link to /cart is rendered inline (see render below).
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/55" onClick={onClose}>
      <div
        className="w-full max-w-md bg-[#0D2140] text-white rounded-t-3xl pt-3 pb-6 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-center w-11 h-1.5 rounded-full bg-white/20 mb-3" />
        <div className="flex items-center justify-between px-5 pb-3">
          <h2 className="text-lg font-bold">Companions</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >×</button>
        </div>

        {loading ? (
          <div className="py-10 text-center text-white/60">Loading…</div>
        ) : (
          <div className="overflow-y-auto px-5 pb-5 space-y-2">
            {error && (
              <div className="text-error text-sm bg-error/10 border border-error/30 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            {PRESET_LIST.map((preset) => {
              const isActive = preset.id === activePresetId;
              const isOwned  = ownedIds.has(preset.id);
              const cust     = owned.find((r) => r.preset_id === preset.id) ?? null;
              const face     = cust?.face_archetype_id ? faces[cust.face_archetype_id] : null;
              const display  = cust?.custom_name?.trim() || preset.name;
              const isFree   = isFreeForEveryone(preset);
              const showLockedCta = !isOwned && !freePickAvailable;

              return (
                <div
                  key={preset.id}
                  className={`flex items-center gap-3 px-3 py-3 rounded-2xl border ${
                    isActive
                      ? 'bg-secondary/10 border-secondary'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <button
                    className="flex items-center gap-3 flex-1 text-left disabled:opacity-50"
                    onClick={() => handleRowPress(preset)}
                    disabled={busy === preset.id || showLockedCta}
                  >
                    {face?.thumbnail_url || face?.image_url ? (
                      <Image
                        src={face.thumbnail_url ?? face.image_url!}
                        alt={display}
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-primary/40 flex items-center justify-center text-xl">
                        {preset.emoji}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold truncate">{display}</span>
                        {isActive && (
                          <span className="text-[10px] font-bold text-secondary bg-secondary/15 px-1.5 py-0.5 rounded">
                            active
                          </span>
                        )}
                        {isFree ? (
                          <span className="text-[10px] font-bold text-success bg-success/15 px-1.5 py-0.5 rounded">
                            FREE
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-secondary bg-secondary/15 px-1.5 py-0.5 rounded">
                            PREMIUM
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-white/60 truncate mt-0.5">
                        {isOwned
                          ? preset.tagline
                          : isFree
                            ? 'Everyone gets Rwen'
                            : freePickAvailable
                              ? 'Tap to claim — your one Premium pick'
                              : '$4.99 — unlock in the shop'}
                      </div>
                    </div>
                  </button>
                  {showLockedCta && (
                    <Link
                      href={`/cart?companion=${preset.id}`}
                      onClick={onClose}
                      className="px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold"
                    >
                      $4.99
                    </Link>
                  )}
                  {isOwned && preset.id !== 'rwen' && (
                    <button
                      onClick={() => onEditProfile(preset.id)}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                      aria-label="Edit"
                    >
                      ✎
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
