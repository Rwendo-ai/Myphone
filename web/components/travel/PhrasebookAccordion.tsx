'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { audioUrl, type AudioManifest, type PhrasebookCategory } from '@/lib/travel-content';

const FREE_PREVIEW_LIMIT = 4;

// Category accordion with per-phrase audio (HTML5 Audio against the
// public bucket). Free preview mirrors mobile: locked categories show
// the first 4 phrases; owning the course (or any paid tier) unlocks.
export default function PhrasebookAccordion({
  categories,
  manifest,
  owned,
}: {
  categories: PhrasebookCategory[];
  manifest: AudioManifest | null;
  owned: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(categories[0]?.id ?? null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const playerRef = useRef<HTMLAudioElement | null>(null);

  function audioPathFor(phrase: { id: string; audioPath?: string }): string | null {
    if (phrase.audioPath) return phrase.audioPath;
    return manifest?.entries.find((e) => e.id === phrase.id)?.audioPath ?? null;
  }

  function play(phraseId: string, path: string) {
    playerRef.current?.pause();
    if (playingId === phraseId) {
      setPlayingId(null);
      return;
    }
    const audio = new Audio(audioUrl(path));
    playerRef.current = audio;
    setPlayingId(phraseId);
    audio.onended = () => setPlayingId(null);
    audio.play().catch(() => setPlayingId(null));
  }

  return (
    <div className="space-y-2">
      {categories.map((cat) => {
        const open = openId === cat.id;
        const unlocked = owned || cat.free;
        const visible = unlocked ? cat.phrases : cat.phrases.slice(0, FREE_PREVIEW_LIMIT);
        const hiddenCount = cat.phrases.length - visible.length;
        return (
          <div key={cat.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenId(open ? null : cat.id)}
              className="w-full flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition text-left"
            >
              <span className="text-xl">{cat.emoji}</span>
              <span className="font-semibold flex-1">{cat.title}</span>
              {!unlocked && !open && <span className="text-white/40 text-sm">🔒</span>}
              <span className={`text-white/40 transition-transform ${open ? 'rotate-90' : ''}`}>▸</span>
            </button>
            {open && (
              <div>
                {visible.map((p) => {
                  const path = audioPathFor(p);
                  return (
                    <div key={p.id} className="px-5 py-3 border-t border-white/5 flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-secondary font-semibold">{p.target}</p>
                        {p.phonetic && <p className="text-white/40 text-xs">/{p.phonetic}/</p>}
                        <p className="text-white/70 text-sm">{p.native}</p>
                      </div>
                      {path && (
                        <button
                          onClick={() => play(p.id, path)}
                          aria-label={playingId === p.id ? 'Stop audio' : 'Play audio'}
                          className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition ${
                            playingId === p.id
                              ? 'bg-secondary text-primary border-secondary'
                              : 'border-white/20 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {playingId === p.id ? '◼' : '♪'}
                        </button>
                      )}
                    </div>
                  );
                })}
                {hiddenCount > 0 && (
                  <div className="px-5 py-4 border-t border-white/5 bg-white/[0.03] text-center">
                    <p className="text-white/60 text-sm mb-2">
                      {hiddenCount} more phrases in this category
                    </p>
                    <Link
                      href="/cart"
                      className="inline-block px-5 py-2 bg-secondary text-primary text-sm font-semibold rounded-full hover:opacity-90 transition"
                    >
                      Unlock with the course
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
