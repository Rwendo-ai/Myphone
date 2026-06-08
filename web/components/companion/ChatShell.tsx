'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TokenBar from '@/components/TokenBar';
import ChatComposer from '@/components/ChatComposer';
import PickerSheet from '@/components/companion/PickerSheet';
import ProfileSheet from '@/components/companion/ProfileSheet';
import VoiceOrb from '@/components/companion/VoiceOrb';
import {
  resolveCompanion,
  getActiveCompanionPresetId,
  type ResolvedCompanion,
} from '@/lib/companion-web';

/**
 * Client wrapper that wires the companion picker / profile / voice modes into
 * the existing /chat layout. We keep ChatComposer + TokenBar untouched and
 * compose them with our new pieces here.
 */

interface Props {
  userId: string;
  initialBalance: number;
}

export default function ChatShell({ userId, initialBalance }: Props) {
  const [companion, setCompanion] = useState<ResolvedCompanion | null>(null);
  const [balance, setBalance] = useState(initialBalance);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [profilePresetId, setProfilePresetId] = useState<string | null>(null);
  const [voiceOpen, setVoiceOpen] = useState(false);

  // Initial resolve.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const presetId = await getActiveCompanionPresetId(userId);
      if (cancelled) return;
      const resolved = await resolveCompanion(userId, presetId);
      if (cancelled) return;
      setCompanion(resolved);
    })();
    return () => { cancelled = true; };
  }, [userId]);

  async function handleActiveChange(presetId: string) {
    const resolved = await resolveCompanion(userId, presetId);
    setCompanion(resolved);
  }

  async function handleSaved() {
    if (!companion) return;
    // Re-resolve in case the saved preset is the active one.
    const resolved = await resolveCompanion(userId, companion.preset.id);
    setCompanion(resolved);
  }

  const displayName = companion?.display_name ?? 'Rwen';
  const tagline     = companion?.preset.tagline ?? 'AI companion';
  const face        = companion?.archetype;

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-[#0D2140]">
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button
          onClick={() => setPickerOpen(true)}
          className="flex items-center gap-3 text-left hover:bg-white/5 px-2 py-1 rounded-xl transition"
          aria-label="Switch companion"
        >
          {face?.thumbnail_url || face?.image_url ? (
            <Image
              src={face.thumbnail_url ?? face.image_url!}
              alt={displayName}
              width={36}
              height={36}
              className="rounded-full object-cover"
              unoptimized
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-primary/40 flex items-center justify-center text-lg">
              {companion?.preset.emoji ?? '🦎'}
            </div>
          )}
          <div>
            <div className="font-bold text-lg flex items-center gap-1">
              {displayName}
              <span className="text-white/40 text-xs">▾</span>
            </div>
            <div className="text-xs text-white/60 line-clamp-1 max-w-[180px]">{tagline}</div>
          </div>
        </button>
        <div className="flex items-center gap-3">
          <TokenBar balance={balance} />
          <Link href="/profile" className="text-white/70 hover:text-white text-sm">Profile</Link>
        </div>
      </header>

      <div className="flex-1 max-w-3xl w-full mx-auto flex flex-col relative">
        <ChatComposer userId={userId} onBalanceChange={setBalance} />
        {/* Wave / voice button — fixed above the composer's right side. */}
        <button
          onClick={() => setVoiceOpen(true)}
          className="absolute bottom-[68px] right-4 w-11 h-11 rounded-full bg-secondary text-primary font-bold shadow-lg hover:scale-105 transition flex items-center justify-center"
          aria-label="Start voice call"
          title="Voice call"
        >
          〰
        </button>
      </div>

      {companion && (
        <PickerSheet
          open={pickerOpen}
          onClose={() => setPickerOpen(false)}
          userId={userId}
          activePresetId={companion.preset.id}
          onActiveChange={handleActiveChange}
          onEditProfile={(presetId) => {
            setPickerOpen(false);
            setProfilePresetId(presetId);
          }}
        />
      )}

      {profilePresetId && (
        <ProfileSheet
          open={!!profilePresetId}
          onClose={() => setProfilePresetId(null)}
          userId={userId}
          presetId={profilePresetId}
          onSaved={handleSaved}
        />
      )}

      {voiceOpen && companion && (
        <VoiceOrb
          userId={userId}
          companion={companion}
          initialBalance={balance}
          onClose={() => setVoiceOpen(false)}
        />
      )}
    </main>
  );
}
