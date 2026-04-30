import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useSettings } from '../../lib/SettingsContext';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { PACKS, resolvePackLanguages } from '../../data/packs';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface ComingSoonPack {
  id: string;
  spokenFlag: string;
  learnedFlag: string;
}

const COMING_SOON: ComingSoonPack[] = [
  { id: 'english-spanish',    spokenFlag: '🇬🇧', learnedFlag: '🇪🇸' },
  { id: 'english-french',     spokenFlag: '🇬🇧', learnedFlag: '🇫🇷' },
  { id: 'english-portuguese', spokenFlag: '🇬🇧', learnedFlag: '🇵🇹' },
  { id: 'english-swahili',    spokenFlag: '🇬🇧', learnedFlag: '🇰🇪' },
  { id: 'english-zulu',       spokenFlag: '🇬🇧', learnedFlag: '🇿🇦' },
  { id: 'english-mandarin',   spokenFlag: '🇬🇧', learnedFlag: '🇨🇳' },
];

export default function LanguagePackScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const { activePack, setActivePack } = useSettings();

  const handleSelect = async (packId: string) => {
    const pack = PACKS.find((p) => p.id === packId);
    if (!pack) return;
    setActivePack(pack);
    if (user) {
      await supabase
        .from('profiles')
        .update({ active_language_pack_id: packId, updated_at: new Date().toISOString() })
        .eq('id', user.id);
    }
    router.back();
  };

  const handleComingSoon = (name: string) => {
    Alert.alert(
      t('language_pack_screen.coming_soon_alert_title', { name }),
      t('language_pack_screen.coming_soon_alert_body', { name })
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('language_pack_screen.title')} subtitle={t('language_pack_screen.subtitle')} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>{t('language_pack_screen.available_now')}</Text>
        {PACKS.map((pack) => {
          const { spoken, learned } = resolvePackLanguages(pack);
          const isActive = activePack.id === pack.id;
          return (
            <Pressable
              key={pack.id}
              style={[styles.card, isActive && styles.cardActive]}
              onPress={() => handleSelect(pack.id)}
            >
              <View style={styles.flagRow}>
                <Text style={styles.flag}>{spoken.flag}</Text>
                <Text style={styles.arrow}>→</Text>
                <Text style={styles.flag}>{learned.flag}</Text>
              </View>
              <View style={styles.cardMain}>
                <Text style={styles.cardTitle}>
                  {spoken.name} → {learned.name}
                </Text>
                <Text style={styles.cardSub}>
                  {pack.id === 'shona-english'
                    ? t('language_pack_screen.available_curriculum_sub')
                    : t('language_pack_screen.dev_curriculum_sub')}
                </Text>
              </View>
              {isActive ? <Text style={styles.check}>✓</Text> : null}
            </Pressable>
          );
        })}

        <Text style={styles.sectionTitle}>{t('language_pack_screen.coming_soon_section')}</Text>
        {COMING_SOON.map((pack) => {
          const learnedName = t(`language_pack_screen.coming_soon_packs.${pack.id}`);
          return (
            <Pressable
              key={pack.id}
              style={[styles.card, styles.cardLocked]}
              onPress={() => handleComingSoon(learnedName)}
            >
              <View style={styles.flagRow}>
                <Text style={[styles.flag, styles.flagLocked]}>{pack.spokenFlag}</Text>
                <Text style={[styles.arrow, styles.arrowLocked]}>→</Text>
                <Text style={[styles.flag, styles.flagLocked]}>{pack.learnedFlag}</Text>
              </View>
              <View style={styles.cardMain}>
                <Text style={[styles.cardTitle, styles.lockedText]}>
                  English → {learnedName}
                </Text>
                <Text style={[styles.cardSub, styles.lockedText]}>{t('language_pack_screen.coming_soon_label')}</Text>
              </View>
              <Text style={styles.lock}>🔒</Text>
            </Pressable>
          );
        })}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.sm },
  sectionTitle: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.gray[400],
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardActive: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  cardLocked: { opacity: 0.7 },
  flagRow: { flexDirection: 'row', alignItems: 'center', gap: 4, width: 78 },
  flag: { fontSize: 22 },
  flagLocked: { opacity: 0.6 },
  arrow: { fontSize: FontSize.md, color: Colors.secondary, fontWeight: FontWeight.bold },
  arrowLocked: { color: Colors.gray[300] },
  cardMain: { flex: 1, gap: 2 },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  cardSub: { fontSize: FontSize.xs, color: Colors.gray[500] },
  lockedText: { color: Colors.gray[400] },
  check: { fontSize: FontSize.xl, color: Colors.primary, fontWeight: FontWeight.bold },
  lock: { fontSize: FontSize.lg },
});
