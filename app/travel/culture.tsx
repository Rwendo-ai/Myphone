/**
 * Cultural Guide screen — accordion of country-specific cultural sections.
 */

import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useSettings } from '../../lib/SettingsContext';
import { useActiveTravelDestination } from '../../lib/travel-destination';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import { getCulturalGuideForCountry } from '../../data/travel/culture';

export default function CultureScreen() {
  const { activeCourseId } = useSettings();
  const { destination } = useActiveTravelDestination(activeCourseId);
  const guide = getCulturalGuideForCountry(destination.countryCode);

  const [openSection, setOpenSection] = useState<string>(guide?.sections[0]?.id ?? '');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Cultural Guide</Text>
        <View style={{ width: 60 }} />
      </View>

      {!guide ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🏛️</Text>
          <Text style={styles.emptyTitle}>Cultural guide coming soon for {destination.countryName}</Text>
          <Text style={styles.emptyBody}>
            Each guide is researched and native-reviewed. Zimbabwe is live;
            {' '}other destinations are queued.
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl }}>
          <View style={styles.intro}>
            <Text style={styles.flag}>{destination.flag}</Text>
            <Text style={styles.country}>{guide.countryName}</Text>
          </View>

          <View style={styles.introCard}>
            <Text style={styles.introBody}>{guide.intro}</Text>
          </View>

          {guide.sections.map(s => {
            const open = openSection === s.id;
            return (
              <Pressable
                key={s.id}
                style={styles.section}
                onPress={() => setOpenSection(open ? '' : s.id)}
              >
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionEmoji}>{s.emoji}</Text>
                  <Text style={styles.sectionTitle}>{s.title}</Text>
                  <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
                </View>
                {open && <Text style={styles.sectionBody}>{s.body}</Text>}
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
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

  introCard: { marginHorizontal: Spacing.md, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, marginBottom: Spacing.md },
  introBody: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm, lineHeight: 20 },

  section: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  sectionEmoji: { fontSize: 24 },
  sectionTitle: { flex: 1, color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  chevron: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.md },
  sectionBody: { color: 'rgba(255,255,255,0.8)', fontSize: FontSize.sm, lineHeight: 20, marginTop: Spacing.sm, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },

  empty: { padding: Spacing.xxl, alignItems: 'center', gap: Spacing.md },
  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, textAlign: 'center' },
  emptyBody: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 18 },
});
