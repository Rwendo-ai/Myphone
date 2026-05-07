/**
 * Travel Mode — the in-app travel hub.
 *
 * Keyed off the user's active language course (a Shona learner sees Zimbabwe;
 * a Japanese learner sees Japan). Six features:
 *   - Money & Market — live FX + cost-of-living
 *   - Flights — Skyscanner affiliate widget
 *   - Hotels — Booking.com affiliate widget
 *   - Phrasebook — pulls from the active course's vocab (free + paid tiers)
 *   - Cultural Guide — etiquette, scams, customs (per-country authored)
 *   - Safari & Parks — top-10 list (per-region authored)
 *
 * Plus Connections — the Meet Travellers section.
 *
 * Falls back to a destination picker if the user has no active course.
 */

import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import ProfilePicButton from '../../components/ProfilePicButton';
import { useSettings } from '../../lib/SettingsContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import { getDestinationForCourse } from '../../data/travel/destinations';

interface TravelFeature {
  key: string;
  emoji: string;
  title: string;
  desc: string;
  route: string;
  available: boolean;
}

export default function TravelScreen() {
  const { activeCourseId } = useSettings();
  const destination = getDestinationForCourse(activeCourseId);

  const features: TravelFeature[] = [
    {
      key: 'money',
      emoji: '💱',
      title: 'Money & Market',
      desc: `Live FX, ${destination.currencySymbol} prices, bargaining basics`,
      route: '/travel/money',
      available: true,
    },
    {
      key: 'flights',
      emoji: '🛫',
      title: 'Flights',
      desc: `Search flights to ${destination.primaryCity.name}`,
      route: '/travel/flights',
      available: true,
    },
    {
      key: 'hotels',
      emoji: '🏨',
      title: 'Hotels',
      desc: `Stays in ${destination.countryName}`,
      route: '/travel/hotels',
      available: true,
    },
    {
      key: 'phrasebook',
      emoji: '🗺️',
      title: 'Phrasebook',
      desc: 'Travel essentials from your course vocab',
      route: '/travel/phrasebook',
      available: true,
    },
    {
      key: 'culture',
      emoji: '🏛️',
      title: 'Cultural Guide',
      desc: 'Etiquette, customs, what to expect',
      route: '/travel/culture',
      available: destination.hasCulture,
    },
    {
      key: 'safari',
      emoji: '🦁',
      title: 'Safari & Parks',
      desc: destination.hasSafari ? 'Top parks and wildlife' : 'Not relevant for this destination',
      route: '/travel/safari',
      available: destination.hasSafari,
    },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.profileBtnFloat} pointerEvents="box-none">
        <ProfilePicButton variant="light" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#1A3C6E', '#0D2140']} style={styles.hero}>
          <View style={styles.heroBadgeRow}>
            <View style={styles.modeBadge}><Text style={styles.modeBadgeText}>TRAVEL MODE</Text></View>
          </View>
          <Text style={styles.heroFlag}>{destination.flag}</Text>
          <Text style={styles.heroCountry}>{destination.countryName}</Text>
          <Text style={styles.heroTagline}>{destination.tagline}</Text>
          <View style={styles.heroMetaRow}>
            <Text style={styles.heroMetaItem}>✈️ {destination.primaryCity.iata}</Text>
            <Text style={styles.heroMetaDivider}>·</Text>
            <Text style={styles.heroMetaItem}>{destination.currencySymbol} {destination.currencyCode}</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Travel tools</Text>
          <View style={styles.featureGrid}>
            {features.map(f => (
              <Pressable
                key={f.key}
                style={[styles.featureCard, !f.available && styles.featureCardDimmed]}
                disabled={!f.available}
                onPress={() => router.push(f.route as any)}
              >
                <Text style={styles.featureEmoji}>{f.emoji}</Text>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc} numberOfLines={2}>{f.desc}</Text>
                {!f.available && <Text style={styles.featureSoon}>Coming soon</Text>}
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.connectionsCard} onPress={() => router.push('/travel/connections')}>
            <View style={styles.connectionsLeft}>
              <Text style={styles.connectionsEmoji}>👥</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.connectionsTitle}>Connections</Text>
                <Text style={styles.connectionsDesc}>
                  Meet other travellers heading to {destination.countryName}. Share a feed, plan together.
                </Text>
              </View>
            </View>
            <Text style={styles.connectionsChevron}>›</Text>
          </Pressable>

          <Pressable style={styles.myTravelCard} onPress={() => router.push('/travel/my-travel')}>
            <Text style={styles.myTravelTitle}>My travel</Text>
            <Text style={styles.myTravelDesc}>Trip plans, saved phrases, journal entries</Text>
          </Pressable>

          <View style={{ height: Spacing.xxl }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  profileBtnFloat: { position: 'absolute', top: Spacing.sm, right: Spacing.md, zIndex: 10 },

  hero: { padding: Spacing.lg, paddingTop: Spacing.xl, paddingBottom: Spacing.xl },
  heroBadgeRow: { marginBottom: Spacing.md },
  modeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  modeBadgeText: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1.2 },
  heroFlag: { fontSize: 48 },
  heroCountry: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, marginTop: Spacing.xs },
  heroTagline: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 4, fontStyle: 'italic' },
  heroMetaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginTop: Spacing.md },
  heroMetaItem: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.85)', fontWeight: FontWeight.semibold },
  heroMetaDivider: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.4)' },

  content: { backgroundColor: Colors.accent, padding: Spacing.lg, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800] },

  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  featureCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    minHeight: 120,
    gap: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  featureCardDimmed: { opacity: 0.5 },
  featureEmoji: { fontSize: 28 },
  featureTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800], marginTop: 4 },
  featureDesc: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 16 },
  featureSoon: { fontSize: FontSize.xs, color: Colors.xp, fontWeight: FontWeight.semibold, marginTop: 4 },

  connectionsCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  connectionsLeft: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  connectionsEmoji: { fontSize: 32 },
  connectionsTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.white },
  connectionsDesc: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.7)', lineHeight: 16, marginTop: 2 },
  connectionsChevron: { fontSize: 24, color: 'rgba(255,255,255,0.6)' },

  myTravelCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  myTravelTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  myTravelDesc: { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
});
