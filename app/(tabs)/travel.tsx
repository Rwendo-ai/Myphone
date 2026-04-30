import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const COMING_SOON_FEATURES = [
  { emoji: '🗺️', title: 'Phrasebook', desc: 'Survival phrases by situation — airport, hotel, market, emergency' },
  { emoji: '🏛️', title: 'Cultural Guide', desc: 'Tsika, customs, and what to expect in Zimbabwe' },
  { emoji: '💱', title: 'Money & Market', desc: 'Prices, bargaining, ZiG currency, market navigation' },
  { emoji: '🛫', title: 'Airport to City', desc: 'Kombi routes, taxi tips, getting around Harare & Bulawayo' },
  { emoji: '👥', title: 'Meet Travellers', desc: 'Connect with others learning Shona and visiting Zimbabwe' },
  { emoji: '🦁', title: 'Safari & Parks', desc: 'Hwange, Victoria Falls, Great Zimbabwe — your guide' },
];

export default function TravelScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero */}
        <LinearGradient colors={['#1A3C6E', '#0D2140']} style={styles.hero}>
          <View style={styles.heroContent}>
            <View style={styles.heroText}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>COMING SOON</Text>
              </View>
              <Text style={styles.heroTitle}>Zimbabwe{'\n'}Travel Mode</Text>
              <Text style={styles.heroSub}>
                Your Shona skills + cultural knowledge + on-the-ground travel guide. Rwendo in the real world.
              </Text>
            </View>
            <RwenImage pose="arms_spread" size={130} />
          </View>

          {/* Teaser stats */}
          <View style={styles.teaserRow}>
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>6</Text>
              <Text style={styles.teaserLabel}>Features</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>🇿🇼</Text>
              <Text style={styles.teaserLabel}>Zimbabwe</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>∞</Text>
              <Text style={styles.teaserLabel}>Connections</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>What's coming</Text>

          {COMING_SOON_FEATURES.map((feature, i) => (
            <View key={i} style={styles.featureCard}>
              <View style={styles.featureEmoji}>
                <Text style={styles.featureEmojiText}>{feature.emoji}</Text>
              </View>
              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDesc}>{feature.desc}</Text>
              </View>
              <View style={styles.lockBadge}>
                <Text style={styles.lockText}>Soon</Text>
              </View>
            </View>
          ))}

          {/* Notify me card */}
          <View style={styles.notifyCard}>
            <RwenImage pose="waving" size={80} />
            <Text style={styles.notifyTitle}>Rwen is packing his bags</Text>
            <Text style={styles.notifyText}>
              Travel Mode is in development. Keep learning your Shona — by the time you land in Harare, Rwen will be ready to guide you.
            </Text>
            <Pressable
              style={styles.notifyBtn}
              onPress={() =>
                Linking.openURL(
                  'mailto:hello@rwendo.app?subject=Notify me about Travel Mode&body=Hi Rwen, please let me know when Travel Mode launches!'
                ).catch(() =>
                  Alert.alert(
                    "We'll let you know",
                    'Email hello@rwendo.app and we\'ll add you to the early-access list.'
                  )
                )
              }
            >
              <Text style={styles.notifyBtnText}>Notify me when it's ready</Text>
            </Pressable>
          </View>

          {/* Victoria Falls teaser */}
          <View style={styles.spotlightCard}>
            <Text style={styles.spotlightLabel}>DESTINATION SPOTLIGHT</Text>
            <Text style={styles.spotlightTitle}>🌊 Victoria Falls</Text>
            <Text style={styles.spotlightShona}>"Mosi-oa-Tunya"</Text>
            <Text style={styles.spotlightMeaning}>The Smoke That Thunders</Text>
            <Text style={styles.spotlightDesc}>
              One of the Seven Natural Wonders of the World, on the Zambezi River between Zimbabwe and Zambia. In Shona culture, it is a sacred place — the home of the water spirits, midzimu yemvura.
            </Text>
          </View>

          <View style={{ height: Spacing.xxl }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  hero: { padding: Spacing.lg, paddingBottom: Spacing.xl },
  heroContent: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: Spacing.lg },
  heroText: { flex: 1, gap: Spacing.sm },
  badge: { alignSelf: 'flex-start', backgroundColor: Colors.streak, paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  badgeText: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.white, letterSpacing: 1 },
  heroTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, lineHeight: 36 },
  heroSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 20 },
  teaserRow: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  teaserItem: { flex: 1, alignItems: 'center', gap: 2 },
  teaserValue: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  teaserLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' },
  teaserDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.1)' },

  content: { backgroundColor: Colors.accent, padding: Spacing.lg, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800] },

  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  featureEmoji: { width: 48, height: 48, borderRadius: BorderRadius.md, backgroundColor: Colors.accent, alignItems: 'center', justifyContent: 'center' },
  featureEmojiText: { fontSize: 24 },
  featureInfo: { flex: 1, gap: 2 },
  featureTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  featureDesc: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 16 },
  lockBadge: { backgroundColor: Colors.gray[100], paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  lockText: { fontSize: FontSize.xs, color: Colors.gray[500], fontWeight: FontWeight.medium },

  notifyCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.md,
  },
  notifyTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white, textAlign: 'center' },
  notifyText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 20 },
  notifyBtn: { backgroundColor: Colors.secondary, paddingVertical: Spacing.sm, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full },
  notifyBtnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },

  spotlightCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.xs,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  spotlightLabel: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.secondary, letterSpacing: 1, textTransform: 'uppercase' },
  spotlightTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.gray[800] },
  spotlightShona: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.primary },
  spotlightMeaning: { fontSize: FontSize.sm, color: Colors.gray[400], fontStyle: 'italic', marginBottom: Spacing.xs },
  spotlightDesc: { fontSize: FontSize.md, color: Colors.gray[700], lineHeight: 22 },
});
