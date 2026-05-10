/**
 * Flip card carousel for a course's module.
 *
 * 50 cards per module. User taps a card → it flips. Tap audio button → plays
 * the target-language MP3 from Storage. Swipe / arrow buttons advance.
 *
 * Audio is fetched lazily via the same module-level cache the phrasebook uses
 * — first card open downloads the manifest, every subsequent play is just
 * a URL hit on the public Storage object.
 */

import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';

import { loadFlipCardsForModule } from '../../../lib/flipcard-loader';
import { supabase } from '../../../lib/supabase';
import type { FlipCard } from '../../../types/flipcards';
import { Colors } from '../../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../../constants/theme';

interface ManifestEntry { id: string; audioPath: string; }

let manifestCache = new Map<string, ManifestEntry[]>();

async function loadFlipCardManifest(courseId: string): Promise<ManifestEntry[]> {
  if (manifestCache.has(courseId)) return manifestCache.get(courseId)!;
  try {
    const { data } = await supabase.storage.from('audio').download(`flipcards/${courseId}/manifest.json`);
    if (!data) return [];
    const text = await new Response(data).text();
    const entries = (JSON.parse(text).entries ?? []) as ManifestEntry[];
    manifestCache.set(courseId, entries);
    return entries;
  } catch { return []; }
}

function publicAudioUrl(path: string): string {
  return supabase.storage.from('audio').getPublicUrl(path).data.publicUrl;
}

let activePlayer: AudioPlayer | null = null;
function playAudio(url: string) {
  try { activePlayer?.pause(); } catch {}
  try { activePlayer?.remove(); } catch {}
  const p = createAudioPlayer({ uri: url });
  activePlayer = p;
  p.play();
}

export default function FlipCardScreen() {
  const { courseId, module } = useLocalSearchParams<{ courseId: string; module: string }>();
  const moduleNum = Number(module);

  const [cards, setCards] = useState<FlipCard[] | 'loading'>('loading');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [manifest, setManifest] = useState<ManifestEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadFlipCardsForModule(courseId, moduleNum).then(c => { if (!cancelled) setCards(c); });
    loadFlipCardManifest(courseId).then(m => { if (!cancelled) setManifest(m); });
    return () => {
      cancelled = true;
      try { activePlayer?.pause(); } catch {}
      try { activePlayer?.remove(); } catch {}
      activePlayer = null;
    };
  }, [courseId, moduleNum]);

  if (cards === 'loading') {
    return (
      <SafeAreaView style={styles.safe}>
        <Header title={`Flip cards · M${moduleNum}`} />
        <View style={styles.center}>
          <ActivityIndicator color={Colors.white} />
          <Text style={styles.empty}>Downloading vocab pack…</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!cards || cards.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <Header title={`Flip cards · M${moduleNum}`} />
        <View style={styles.center}>
          <Text style={styles.empty}>No flip cards authored for this module yet.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const card = cards[index];
  const audioPath = (manifest ?? []).find(e => e.id === card.id)?.audioPath;
  const hasAudio = !!audioPath;

  const flip = () => setFlipped(f => !f);
  const next = () => { setIndex(i => Math.min(cards.length - 1, i + 1)); setFlipped(false); };
  const prev = () => { setIndex(i => Math.max(0, i - 1)); setFlipped(false); };

  const handlePlay = () => { if (audioPath) playAudio(publicAudioUrl(audioPath)); };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title={`Flip cards · M${moduleNum}`} progress={`${index + 1} / ${cards.length}`} />

      <View style={styles.cardWrap}>
        <Pressable style={styles.card} onPress={flip}>
          <Text style={styles.cardSide}>{flipped ? 'translation' : card.module === moduleNum ? 'word' : ''}</Text>
          <Text style={styles.cardText}>{flipped ? card.native : card.target}</Text>
          {!flipped && card.phonetic && <Text style={styles.cardPhonetic}>{card.phonetic}</Text>}
          {flipped && card.hint && <Text style={styles.cardHint}>{card.hint}</Text>}
          <Text style={styles.flipHint}>{flipped ? 'Tap to flip back' : 'Tap to flip'}</Text>
        </Pressable>

        <View style={styles.controlsRow}>
          <Pressable style={[styles.navBtn, index === 0 && styles.navBtnDisabled]} onPress={prev} disabled={index === 0}>
            <Text style={styles.navBtnText}>‹</Text>
          </Pressable>

          <Pressable
            style={[styles.audioBtn, !hasAudio && styles.audioBtnDisabled]}
            disabled={!hasAudio}
            onPress={handlePlay}
          >
            {manifest === null ? (
              <ActivityIndicator color={Colors.white} size="small" />
            ) : (
              <Text style={styles.audioBtnText}>{hasAudio ? '♪ Play' : '♪ Audio loading'}</Text>
            )}
          </Pressable>

          <Pressable style={[styles.navBtn, index === cards.length - 1 && styles.navBtnDisabled]} onPress={next} disabled={index === cards.length - 1}>
            <Text style={styles.navBtnText}>›</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Header({ title, progress }: { title: string; progress?: string }) {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.progress}>{progress ?? ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs, minWidth: 60 },
  title: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, flex: 1, textAlign: 'center' },
  progress: { color: 'rgba(255,255,255,0.65)', fontSize: FontSize.sm, minWidth: 60, textAlign: 'right' },

  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.lg },
  empty: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, textAlign: 'center' },

  cardWrap: { flex: 1, padding: Spacing.lg, gap: Spacing.lg, justifyContent: 'center' },
  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 320,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  cardSide: { color: 'rgba(255,255,255,0.4)', fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1.5, textTransform: 'uppercase' },
  cardText: { color: Colors.white, fontSize: 36, fontWeight: FontWeight.extrabold, textAlign: 'center', lineHeight: 44 },
  cardPhonetic: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.lg, fontStyle: 'italic', textAlign: 'center' },
  cardHint: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm, fontStyle: 'italic', textAlign: 'center' },
  flipHint: { color: 'rgba(255,255,255,0.35)', fontSize: FontSize.xs, marginTop: Spacing.md },

  controlsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.md },
  navBtn: { width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
  navBtnDisabled: { opacity: 0.3 },
  navBtnText: { color: Colors.white, fontSize: FontSize.xxl, fontWeight: FontWeight.bold },

  audioBtn: { flex: 1, height: 56, borderRadius: BorderRadius.full, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  audioBtnDisabled: { backgroundColor: 'rgba(255,255,255,0.08)' },
  audioBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
