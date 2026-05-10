/**
 * AI Companion management tab.
 *
 * Browse the 5 preset companions, see who's currently active, switch between
 * them. Phase 1 will add: 10-question setup interview to spawn a custom one,
 * personality sliders for the active companion, voice/avatar customisation.
 * Phase 4 (Soul tier) will add: edit personality.md / soul.md directly.
 *
 * Today this is the foundation — read from the companions table, list presets,
 * upsert a row when the user picks one, surface upgrade CTAs for paid tiers.
 */

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useAuth } from '../../lib/AuthContext';
import { useSettings, RWEN_VOICES, type RwenVoiceKey } from '../../lib/SettingsContext';
import { supabase } from '../../lib/supabase';
import { canUseAiFeature } from '../../lib/entitlements';
import { PRESET_LIST, type CompanionPreset } from '../../data/companions/presets';
import { ageGateMet } from '../../lib/active-companion';
import ProfilePicButton from '../../components/ProfilePicButton';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface CompanionRow {
  id: string;
  preset_id: string | null;
  name: string;
  voice_id: string | null;
  is_active: boolean;
}

export default function CompanionsScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const { entitlementContext, setActiveCompanionPresetId, setRwenVoice } = useSettings();

  const [companions, setCompanions] = useState<CompanionRow[]>([]);
  const [userDob, setUserDob] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Two-tier model: 'free' presets always available; everything else
  // requires Pro. The legacy 5-tier preset values (text_ai/voice/companion/
  // premium) collapse onto the same Pro gate for v1 — visual avatars get
  // their own entitlement when those tiers ship.
  const tierGateMet = (gate: CompanionPreset['tierGate']): boolean => {
    if (gate === 'free') return true;
    return canUseAiFeature('text', entitlementContext).allowed;
  };

  const loadCompanions = React.useCallback(async () => {
    if (!user) return;
    setLoading(true);
    // Pull companions and the user's DOB in parallel — DOB drives age-gating
    // for presets like Aria (18+).
    const [{ data, error }, profileResult] = await Promise.all([
      supabase
        .from('companions')
        .select('id, preset_id, name, voice_id, is_active')
        .eq('user_id', user.id),
      supabase
        .from('profiles')
        .select('date_of_birth')
        .eq('id', user.id)
        .maybeSingle(),
    ]);
    if (error) {
      console.error('companions list error:', error);
      setLoading(false);
      return;
    }
    setCompanions((data ?? []) as CompanionRow[]);
    setUserDob(profileResult.data?.date_of_birth ?? null);
    setLoading(false);
  }, [user]);

  useFocusEffect(React.useCallback(() => {
    loadCompanions();
  }, [loadCompanions]));

  const activeRow = companions.find(c => c.is_active);

  const handleActivate = async (preset: CompanionPreset) => {
    if (!user) return;
    // Age gate first — even paying users under 18 can't activate Aria. Server
    // trigger enforces this too as a defence-in-depth backstop.
    if (!ageGateMet(preset, userDob)) {
      Alert.alert(
        `${preset.name} is for ages ${preset.ageGate}+`,
        `${preset.name} won't appear in your companion list until you've confirmed you're old enough. If your date of birth is wrong, update it in Profile.`,
        [{ text: 'OK' }],
      );
      return;
    }
    if (!tierGateMet(preset.tierGate)) {
      Alert.alert(
        `${preset.name} is in a paid tier`,
        `Upgrade to unlock ${preset.name}. They're available on the ${preset.tierGate.replace('_', ' ')} plan and above.`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'See plans', onPress: () => router.push('/profile') },
        ],
      );
      return;
    }

    // Upsert this preset and flip is_active.
    const existing = companions.find(c => c.preset_id === preset.id);

    // Deactivate all others first.
    await supabase
      .from('companions')
      .update({ is_active: false })
      .eq('user_id', user.id);

    if (existing) {
      await supabase
        .from('companions')
        .update({ is_active: true })
        .eq('id', existing.id);
    } else {
      await supabase
        .from('companions')
        .insert({
          user_id: user.id,
          preset_id: preset.id,
          name: preset.name,
          relationship_type: preset.relationshipType,
          voice_id: preset.defaultVoiceId,
          avatar_id: preset.defaultAvatarId,
          system_prompt: '', // built dynamically on session start
          is_active: true,
          trust_score: 0,
        });
    }
    // Push to global state so the chat screen + centre tab button + voice
    // mode all immediately use the new persona without a remount.
    setActiveCompanionPresetId(preset.id);

    // Sync the user's spoken-voice setting to the companion's signature voice
    // so text-mode TTS speaks as Maya / Tendai / Aria etc., not as whatever
    // voice was last selected. We do a reverse lookup against RWEN_VOICES
    // because rwenVoice is keyed by slot ('male_warm', 'female_warm', …) not
    // by raw ElevenLabs voice id. Voice mode can't yet honour this on the
    // Creator plan — agent voice is server-side and overrides are gated.
    const matchedKey = (Object.keys(RWEN_VOICES) as RwenVoiceKey[]).find(
      (key) => RWEN_VOICES[key].id === preset.defaultVoiceId,
    );
    if (matchedKey) setRwenVoice(matchedKey);

    await loadCompanions();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.profileBtnFloat} pointerEvents="box-none">
        <ProfilePicButton variant="light" />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t('companions_tab.header_title')}</Text>
          <Text style={styles.headerSub}>{t('companions_tab.header_sub')}</Text>
        </View>

        {loading && (
          <View style={styles.loadingWrap}>
            <ActivityIndicator color={Colors.white} />
          </View>
        )}

        {!loading && (
          <>
            {activeRow && (
              <View style={styles.activeBanner}>
                <Text style={styles.activeLabel}>{t('companions_tab.active_label')}</Text>
                <Text style={styles.activeName}>{activeRow.name}</Text>
                <Text style={styles.activeSub}>{t('companions_tab.active_sub')}</Text>
              </View>
            )}

            <Text style={styles.sectionTitle}>{t('companions_tab.section_choose')}</Text>
            <View style={styles.presetList}>
              {/* Age-gate filter: presets with `ageGate` (e.g. Aria=18) are
                  hidden entirely for users below the threshold. The under-age
                  user simply sees a smaller list — no "locked" badge, no
                  message, no awareness the gated preset exists. */}
              {PRESET_LIST.filter((preset) => ageGateMet(preset, userDob)).map((preset) => {
                const isActive = activeRow?.preset_id === preset.id;
                const locked = !tierGateMet(preset.tierGate);
                return (
                  <Pressable
                    key={preset.id}
                    style={[
                      styles.presetCard,
                      isActive && styles.presetCardActive,
                      locked && styles.presetCardLocked,
                    ]}
                    onPress={() => handleActivate(preset)}
                  >
                    <Text style={styles.presetEmoji}>{preset.emoji}</Text>
                    <View style={{ flex: 1 }}>
                      <View style={styles.presetTitleRow}>
                        <Text style={styles.presetName}>{preset.name}</Text>
                        {isActive && <Text style={styles.presetActiveBadge}>{t('companions_tab.active_badge')}</Text>}
                        {locked && <Text style={styles.presetLockedBadge}>{t('companions_tab.locked_prefix')} {preset.tierGate}</Text>}
                      </View>
                      {/* Tagline + description come from i18n so they render
                          in the user's chosen language. The preset.tagline /
                          preset.description fields in data/companions/presets
                          are the English source-of-truth — i18n keys mirror
                          them under companion_presets.<id>.tagline. If a
                          translation key is missing, i18next falls back to
                          the English value automatically. */}
                      <Text style={styles.presetTagline}>
                        {t(`companion_presets.${preset.id}.tagline`, { defaultValue: preset.tagline })}
                      </Text>
                      <Text style={styles.presetDesc}>
                        {t(`companion_presets.${preset.id}.description`, { defaultValue: preset.description })}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.sectionTitle}>{t('companions_tab.section_customise')}</Text>
            <Pressable
              style={styles.upgradeCard}
              onPress={() =>
                Alert.alert(
                  t('companions_tab.soul_alert_title'),
                  t('companions_tab.soul_alert_body'),
                  [{ text: 'OK' }],
                )
              }
            >
              <Text style={styles.upgradeIcon}>✨</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.upgradeTitle}>{t('companions_tab.upgrade_title')}</Text>
                <Text style={styles.upgradeSub}>{t('companions_tab.upgrade_sub')}</Text>
              </View>
              <Text style={styles.upgradeChevron}>›</Text>
            </Pressable>

            <View style={{ height: Spacing.xl }} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  container: { flex: 1, backgroundColor: Colors.accent },
  profileBtnFloat: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.md,
    zIndex: 10,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  headerTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.white },
  headerSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', marginTop: 4 },

  loadingWrap: { padding: Spacing.xl, alignItems: 'center' },

  activeBanner: {
    margin: Spacing.lg,
    marginBottom: 0,
    padding: Spacing.md,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    borderLeftWidth: 4,
    borderLeftColor: Colors.success,
  },
  activeLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.success,
    letterSpacing: 1,
  },
  activeName: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[900], marginTop: 2 },
  activeSub: { fontSize: FontSize.xs, color: Colors.gray[600], marginTop: 4 },

  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.gray[800],
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  presetList: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  presetCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  presetCardActive: {
    borderColor: Colors.secondary,
  },
  presetCardLocked: {
    backgroundColor: Colors.gray[50],
    opacity: 0.85,
  },
  presetEmoji: { fontSize: 36 },
  presetTitleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flexWrap: 'wrap' },
  presetName: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  presetActiveBadge: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.success },
  presetLockedBadge: { fontSize: FontSize.xs, color: Colors.gray[500] },
  presetTagline: { fontSize: FontSize.sm, color: Colors.gray[700], marginTop: 2 },
  presetDesc: { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 4, lineHeight: 16 },

  upgradeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.lg,
    padding: Spacing.md,
    backgroundColor: '#FEF7E6',
    borderRadius: BorderRadius.lg,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.xp,
  },
  upgradeIcon: { fontSize: 32 },
  upgradeTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  upgradeSub: { fontSize: FontSize.xs, color: Colors.gray[600], marginTop: 2 },
  upgradeChevron: { fontSize: FontSize.lg, color: Colors.gray[400] },
});
