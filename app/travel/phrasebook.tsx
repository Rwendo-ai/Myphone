/**
 * Travel Phrasebook — destination-keyed phrase list, grouped by situation.
 *
 * Free tier (DEV_UNLOCK_ALL or course-owned): all categories visible.
 * Locked tier: shows the first 4 phrases of each non-`free` category with
 * a "unlock with course" CTA on the rest.
 */

import { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useSettings } from '../../lib/SettingsContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import { getDestinationForCourse } from '../../data/travel/destinations';
import { getPhrasebookForCountry } from '../../data/travel/phrasebook';
import type { PhrasebookCategory, TravelPhrase } from '../../data/travel/phrasebook/types';
import { DEV_UNLOCK_ALL } from '../../constants/dev';
import {
  loadAudioManifest,
  getAudioPathForPhrase,
  playPhraseAudio,
  stopPhraseAudio,
} from '../../lib/phrasebook-audio';

const FREE_PREVIEW_LIMIT = 4;

export default function PhrasebookScreen() {
  const { activeCourseId, entitlementContext } = useSettings();
  const destination = getDestinationForCourse(activeCourseId);
  const phrasebook = getPhrasebookForCountry(destination.countryCode);

  const owned = useMemo(() => {
    if (DEV_UNLOCK_ALL) return true;
    if (!activeCourseId) return false;
    return entitlementContext.starterCourseId === activeCourseId
      || entitlementContext.ownedCourseIds.includes(activeCourseId);
  }, [activeCourseId, entitlementContext]);

  const [openCategory, setOpenCategory] = useState<string>(phrasebook?.[0]?.id ?? '');

  // Audio manifest for this country. Built once by scripts/generate-phrasebook-audio.ts
  // and stored at audio/phrasebook/<code>/manifest.json. We fetch it lazily on
  // screen open. While it's loading, play buttons stay disabled.
  const [manifest, setManifest] = useState<Awaited<ReturnType<typeof loadAudioManifest>>>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadAudioManifest(destination.countryCode).then(m => { if (!cancelled) setManifest(m); });
    return () => { cancelled = true; stopPhraseAudio(); };
  }, [destination.countryCode]);

  const handlePlay = async (phrase: TravelPhrase) => {
    const audioPath = phrase.audioPath ?? getAudioPathForPhrase(manifest, phrase.id);
    if (!audioPath) return;
    setPlayingId(phrase.id);
    try {
      await playPhraseAudio(audioPath);
    } finally {
      // Reset the playing indicator after a short delay — expo-audio doesn't
      // emit a clean "ended" callback on the simple player, and 4s is roughly
      // the longest phrase length we have.
      setTimeout(() => setPlayingId(prev => (prev === phrase.id ? null : prev)), 4000);
    }
  };

  if (!phrasebook) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <Header />
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🗺️</Text>
          <Text style={styles.emptyTitle}>Phrasebook coming soon for {destination.countryName}</Text>
          <Text style={styles.emptyBody}>
            We author phrasebooks one country at a time. Zimbabwe is live;
            others are in the queue. Let us know which country you need next.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl }}>
        <View style={styles.intro}>
          <Text style={styles.flag}>{destination.flag}</Text>
          <Text style={styles.country}>{destination.countryName} phrasebook</Text>
          <Text style={styles.sub}>50 phrases for the first 48 hours on the ground</Text>
        </View>

        {phrasebook.map(cat => (
          <Category
            key={cat.id}
            category={cat}
            open={openCategory === cat.id}
            onToggle={() => setOpenCategory(openCategory === cat.id ? '' : cat.id)}
            owned={owned}
            onPlay={handlePlay}
            playingId={playingId}
            audioReady={!!manifest}
            manifest={manifest}
          />
        ))}

        {!owned && (
          <View style={styles.unlockBanner}>
            <Text style={styles.unlockTitle}>Unlock the full phrasebook</Text>
            <Text style={styles.unlockBody}>
              Buy the {destination.countryName} language course and get the complete phrasebook
              + 100 lessons + cultural guide.
            </Text>
            <Pressable style={styles.unlockBtn} onPress={() => router.push('/profile/plans')}>
              <Text style={styles.unlockBtnText}>See plans</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
      <Text style={styles.title}>Phrasebook</Text>
      <View style={{ width: 60 }} />
    </View>
  );
}

function Category({ category, open, onToggle, owned, onPlay, playingId, audioReady, manifest }: {
  category: PhrasebookCategory;
  open: boolean;
  onToggle: () => void;
  owned: boolean;
  onPlay: (p: TravelPhrase) => void;
  playingId: string | null;
  audioReady: boolean;
  manifest: Awaited<ReturnType<typeof loadAudioManifest>>;
}) {
  const visiblePhrases = (category.free || owned)
    ? category.phrases
    : category.phrases.slice(0, FREE_PREVIEW_LIMIT);
  const hiddenCount = category.phrases.length - visiblePhrases.length;

  return (
    <View style={styles.category}>
      <Pressable style={styles.categoryHeader} onPress={onToggle}>
        <Text style={styles.categoryEmoji}>{category.emoji}</Text>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        {!category.free && !owned && <Text style={styles.lockBadge}>🔒</Text>}
        <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
      </Pressable>

      {open && (
        <View style={styles.phraseList}>
          {visiblePhrases.map(p => (
            <PhraseRow
              key={p.id}
              phrase={p}
              onPlay={onPlay}
              isPlaying={playingId === p.id}
              hasAudio={!!p.audioPath || (audioReady && !!getAudioPathForPhrase(manifest, p.id))}
            />
          ))}
          {hiddenCount > 0 && (
            <Text style={styles.hiddenCount}>+ {hiddenCount} more · unlock with course</Text>
          )}
        </View>
      )}
    </View>
  );
}

function PhraseRow({ phrase, onPlay, isPlaying, hasAudio }: {
  phrase: TravelPhrase;
  onPlay: (p: TravelPhrase) => void;
  isPlaying: boolean;
  hasAudio: boolean;
}) {
  return (
    <View style={styles.phraseRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.target}>{phrase.target}</Text>
        {phrase.phonetic && <Text style={styles.phonetic}>{phrase.phonetic}</Text>}
        <Text style={styles.native}>{phrase.native}</Text>
      </View>
      <Pressable
        style={[styles.playBtn, !hasAudio && styles.playBtnDisabled, isPlaying && styles.playBtnActive]}
        disabled={!hasAudio}
        onPress={() => onPlay(phrase)}
      >
        <Text style={[styles.playBtnText, !hasAudio && styles.playBtnTextDisabled]}>
          {isPlaying ? '◼' : '♪'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  intro: { alignItems: 'center', padding: Spacing.lg, gap: 4 },
  flag: { fontSize: 40 },
  country: { color: Colors.white, fontSize: FontSize.xl, fontWeight: FontWeight.bold },
  sub: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm },

  category: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, overflow: 'hidden' },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', padding: Spacing.md, gap: Spacing.sm },
  categoryEmoji: { fontSize: 24 },
  categoryTitle: { flex: 1, color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  lockBadge: { fontSize: 14 },
  chevron: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.md },

  phraseList: { paddingHorizontal: Spacing.md, paddingBottom: Spacing.md, gap: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)' },
  phraseRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xs },
  target: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  phonetic: { color: 'rgba(255,255,255,0.4)', fontSize: FontSize.xs, fontStyle: 'italic', marginTop: 2 },
  native: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, marginTop: 2 },

  playBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  playBtnDisabled: { backgroundColor: 'rgba(255,255,255,0.08)' },
  playBtnActive: { backgroundColor: Colors.secondary },
  playBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  playBtnTextDisabled: { color: 'rgba(255,255,255,0.3)' },

  hiddenCount: { color: Colors.xp, fontSize: FontSize.sm, fontWeight: FontWeight.semibold, paddingTop: Spacing.xs, fontStyle: 'italic' },

  unlockBanner: { margin: Spacing.lg, padding: Spacing.lg, backgroundColor: Colors.xp, borderRadius: BorderRadius.lg, alignItems: 'center', gap: Spacing.sm },
  unlockTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  unlockBody: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 18 },
  unlockBtn: { backgroundColor: Colors.white, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full, marginTop: Spacing.xs },
  unlockBtnText: { color: Colors.xp, fontWeight: FontWeight.bold, fontSize: FontSize.sm },

  empty: { padding: Spacing.xxl, alignItems: 'center', gap: Spacing.md },
  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, textAlign: 'center' },
  emptyBody: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 18 },
});
