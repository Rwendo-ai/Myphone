import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function WelcomeScreen() {
  const { t } = useTranslation('auth');
  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <View style={styles.rwenSection}>
        <RwenImage pose="waving" style={styles.rwen} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>{t('welcome.title')}</Text>
        <Text style={styles.subtitle}>{t('welcome.subtitle')}</Text>
        <Text style={styles.tagline}>{t('welcome.tagline')}</Text>

        <View style={styles.actions}>
          <Pressable style={styles.primaryButton} onPress={() => router.push('/sign-up')}>
            <Text style={styles.primaryButtonText}>{t('welcome.get_started')}</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => router.push('/sign-in')}>
            <Text style={styles.secondaryButtonText}>{t('welcome.have_account')}</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  rwenSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: Spacing.sm,
  },
  rwen: {
    width: 300,
    height: 300,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
    paddingBottom: Spacing.xxl,
  },
  title: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.extrabold,
    color: Colors.white,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  tagline: {
    fontSize: FontSize.md,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    paddingHorizontal: Spacing.md,
  },
  actions: {
    width: '100%',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  primaryButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
  },
  secondaryButton: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
  },
});
