/**
 * Safari & Parks screen.
 *
 * Shows the active destination's parks first; falls back to the top-10
 * regional list if the destination doesn't have safari content authored.
 */

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useSettings } from '../../lib/SettingsContext';
import { useActiveTravelDestination } from '../../lib/travel-destination';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import { loadSafariParks } from '../../lib/travel-content-loader';
import type { SafariPark } from '../../data/travel/safari/types';

export default function SafariScreen() {
  const { activeCourseId } = useSettings();
  const { destination } = useActiveTravelDestination(activeCourseId);

  const [allParks, setAllParks] = useState<SafariPark[] | null | 'loading'>('loading');
  const [selectedId, setSelectedId] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    loadSafariParks(destination.countryCode).then(p => {
      if (cancelled) return;
      setAllParks(p);
      if (p && p.length > 0) setSelectedId(p[0].id);
    });
    return () => { cancelled = true; };
  }, [destination.countryCode]);

  const localParks = Array.isArray(allParks) ? allParks.filter(p => p.countryCode === destination.countryCode) : [];
  const showingLocal = localParks.length > 0;
  const parks = showingLocal ? localParks : (Array.isArray(allParks) ? allParks : []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Safari & Parks</Text>
        <View style={{ width: 60 }} />
      </View>

      {allParks === 'loading' && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.md }}>
          <ActivityIndicator color={Colors.white} />
          <Text style={styles.sub}>Downloading safari guide…</Text>
        </View>
      )}

      {allParks !== 'loading' && (
      <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl }}>
        <View style={styles.intro}>
          <Text style={styles.flag}>{showingLocal ? destination.flag : '🌍'}</Text>
          <Text style={styles.country}>
            {showingLocal ? `${destination.countryName} parks` : 'Top 10 in Africa'}
          </Text>
          <Text style={styles.sub}>
            {showingLocal
              ? `${parks.length} authored ${parks.length === 1 ? 'park' : 'parks'} for ${destination.countryName}`
              : 'A curated list. Pick where to spend your safari days.'}
          </Text>
        </View>

        {parks.map(p => (
          <ParkCard
            key={p.id}
            park={p}
            expanded={selectedId === p.id}
            onToggle={() => setSelectedId(selectedId === p.id ? '' : p.id)}
          />
        ))}
      </ScrollView>
      )}
    </SafeAreaView>
  );
}

function ParkCard({ park, expanded, onToggle }: { park: SafariPark; expanded: boolean; onToggle: () => void }) {
  return (
    <Pressable style={styles.card} onPress={onToggle}>
      <View style={styles.cardHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.parkName}>{park.name}</Text>
          <Text style={styles.parkCountry}>{park.countryName} · {park.sizeKm2.toLocaleString()} km²</Text>
        </View>
        <Text style={styles.chevron}>{expanded ? '▾' : '▸'}</Text>
      </View>

      <View style={styles.tagRow}>
        {park.signatureAnimals.slice(0, 3).map(a => (
          <View key={a} style={styles.tag}><Text style={styles.tagText}>{a}</Text></View>
        ))}
      </View>

      {expanded && (
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>BEST</Text>
          <Text style={styles.detailValue}>{park.bestMonths.join(' · ')}</Text>

          <Text style={styles.body}>{park.description}</Text>

          <Text style={styles.detailLabel}>NEAREST AIRPORT</Text>
          <Text style={styles.detailValue}>{park.nearestCity.name} ({park.nearestCity.iata})</Text>

          <Text style={styles.detailLabel}>ACCESS</Text>
          <Text style={styles.detailValueSmall}>{park.accessNotes}</Text>
        </View>
      )}
    </Pressable>
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
  sub: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center', maxWidth: 320 },

  card: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  parkName: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  parkCountry: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.xs, marginTop: 2 },
  chevron: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.lg },

  tagRow: { flexDirection: 'row', gap: 4, marginTop: Spacing.sm, flexWrap: 'wrap' },
  tag: { backgroundColor: 'rgba(255,255,255,0.08)', paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  tagText: { color: 'rgba(255,255,255,0.8)', fontSize: FontSize.xs },

  detail: { marginTop: Spacing.sm, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', gap: 4 },
  detailLabel: { color: Colors.xp, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1, marginTop: Spacing.xs },
  detailValue: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  detailValueSmall: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.xs, lineHeight: 16 },
  body: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm, lineHeight: 20, marginTop: Spacing.xs },
});
