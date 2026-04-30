import { View, Text, StyleSheet, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function PrivacyScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [clearing, setClearing] = useState(false);

  const handleClearConversations = () => {
    if (!user) return;
    Alert.alert(
      t('privacy_screen.clear.confirm_title'),
      t('privacy_screen.clear.confirm_body'),
      [
        { text: t('actions.cancel'), style: 'cancel' },
        {
          text: t('privacy_screen.clear.confirm_action'),
          style: 'destructive',
          onPress: async () => {
            setClearing(true);
            const { error } = await supabase
              .from('conversations')
              .delete()
              .eq('user_id', user.id);
            setClearing(false);
            if (error) {
              Alert.alert(t('privacy_screen.clear.error_title'), error.message);
              return;
            }
            Alert.alert(t('privacy_screen.clear.success_title'), t('privacy_screen.clear.success_body'));
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('privacy_screen.title')} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.introText}>
            {t('privacy_screen.intro')}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>{t('privacy_screen.sections.your_data')}</Text>
        <View style={styles.card}>
          <Pressable style={styles.row} onPress={handleClearConversations} disabled={clearing}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.clear.label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.clear.sub')}</Text>
            </View>
            {clearing ? <ActivityIndicator color={Colors.primary} /> : <Text style={styles.chevron}>›</Text>}
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.row} onPress={() => router.push('/profile/export')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.export_row.label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.export_row.sub')}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>{t('privacy_screen.sections.what_we_share')}</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.share.anthropic.label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.share.anthropic.sub')}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.share.elevenlabs.label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.share.elevenlabs.sub')}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.share.supabase.label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.share.supabase.sub')}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('privacy_screen.sections.your_rights')}</Text>
        <View style={styles.card}>
          <Pressable style={styles.row} onPress={() => router.push('/(legal)/privacy-policy')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.rights.policy_label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.rights.policy_sub')}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row} onPress={() => router.push('/(legal)/terms-of-service')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>{t('privacy_screen.rights.terms_label')}</Text>
              <Text style={styles.rowSub}>{t('privacy_screen.rights.terms_sub')}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.note}>
          {t('privacy_screen.note')}
        </Text>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
  intro: { backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md },
  introText: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  sectionTitle: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.gray[400], textTransform: 'uppercase', letterSpacing: 1, marginTop: Spacing.sm },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Spacing.md, gap: Spacing.sm },
  rowMain: { flex: 1, gap: 2 },
  rowLabel: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  rowSub: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 18 },
  chevron: { fontSize: FontSize.xl, color: Colors.gray[300] },
  divider: { height: 1, backgroundColor: Colors.gray[100], marginHorizontal: Spacing.md },
  note: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18, paddingHorizontal: Spacing.md, marginTop: Spacing.md },
});
