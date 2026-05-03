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
import { useSettings } from '../../lib/SettingsContext';
import { supabase } from '../../lib/supabase';
import { canUseAiFeature, type SubscriptionTier } from '../../lib/entitlements';
import { PRESET_LIST, type CompanionPreset } from '../../data/companions/presets';
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
  const { user } = useAuth();
  const { entitlementContext, setActiveCompanionPresetId } = useSettings();

  const [companions, setCompanions] = useState<CompanionRow[]>([]);
  const [loading, setLoading] = useState(true);

  const tierGateMet = (gate: CompanionPreset['tierGate']): boolean => {
    if (gate === 'free') return true;
    return canUseAiFeature(
      gate === 'voice' ? 'voice' : gate === 'companion' || gate === 'premium' ? 'realtime' : 'text',
      entitlementContext,
    ).allowed;
  };

  const loadCompanions = React.useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('companions')
      .select('id, preset_id, name, voice_id, is_active')
      .eq('user_id', user.id);
    if (error) {
      console.error('companions list error:', error);
      setLoading(false);
      return;
    }
    setCompanions((data ?? []) as CompanionRow[]);
    setLoading(false);
  }, [user]);

  useFocusEffect(React.useCallback(() => {
    loadCompanions();
  }, [loadCompanions]));

  const activeRow = companions.find(c => c.is_active);

  const handleActivate = async (preset: CompanionPreset) => {
    if (!user) return;
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
    await loadCompanions();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.profileBtnFloat} pointerEvents="box-none">
        <ProfilePicButton variant="light" />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AI Companions</Text>
          <Text style={styles.headerSub}>
            Your AI companions. Switch personas, customise voices, evolve them as you go.
          </Text>
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
                <Text style={styles.activeLabel}>ACTIVE</Text>
                <Text style={styles.activeName}>{activeRow.name}</Text>
                <Text style={styles.activeSub}>
                  Quick chat is on the centre tab. Voice mode is on the companion screen header.
                </Text>
              </View>
            )}

            <Text style={styles.sectionTitle}>Choose your companion</Text>
            <View style={styles.presetList}>
              {PRESET_LIST.map((preset) => {
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
                        {isActive && <Text style={styles.presetActiveBadge}>✓ Active</Text>}
                        {locked && <Text style={styles.presetLockedBadge}>🔒 {preset.tierGate}</Text>}
                      </View>
                      <Text style={styles.presetTagline}>{preset.tagline}</Text>
                      <Text style={styles.presetDesc}>{preset.description}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.sectionTitle}>Customise (Soul tier)</Text>
            <Pressable
              style={styles.upgradeCard}
              onPress={() =>
                Alert.alert(
                  'Soul tier — coming soon',
                  'Edit your companion\'s personality.md and soul.md directly. Add memories. Upload custom avatars. Multiple companions at once. Custom voice cloning.\n\n$39.99/month — unlocks everything.',
                  [{ text: 'OK' }],
                )
              }
            >
              <Text style={styles.upgradeIcon}>✨</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.upgradeTitle}>Build a custom companion</Text>
                <Text style={styles.upgradeSub}>
                  Edit personality, voice, memory, avatar. From $39.99/mo.
                </Text>
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
