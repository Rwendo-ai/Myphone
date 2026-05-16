/**
 * CompanionPickerSheet — the bottom-sheet dropdown that opens from the
 * Companion tab header, lets the user switch between the personalities
 * they own, claim a free preset, or open the "build your own" wizard.
 *
 * Rwen is always at the top (universal default — every user owns Rwen
 * automatically via the trg_grant_rwen trigger).
 *
 * Rows fall into three states:
 *   - "Owned"    : user has a customization row. Tap row → swap active
 *                  preset. Tap edit icon → CompanionProfileSheet (edit mode).
 *   - "Claimable": user is on free tier and hasn't used their free pick
 *                  yet. Tap row → CompanionProfileSheet (claim mode).
 *   - "Locked"   : preset is paid-only and user is on free tier with the
 *                  pick already spent. Tap row → toast / paywall hint.
 *
 * No new packages required. Modal + scrollable list using existing
 * React Native primitives.
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import { router } from 'expo-router';

import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';
import { PRESET_LIST, type CompanionPreset } from '../data/companions/presets';
import {
  loadOwnedCompanions,
  loadArchetype,
  type CompanionCustomization,
  type CompanionArchetype,
} from '../lib/companion-customization';
import CompanionProfileSheet, { type ProfileMode } from './CompanionProfileSheet';

interface Props {
  visible: boolean;
  onClose: () => void;
  userId: string;
  /** Currently active preset — gets a tick. */
  activePresetId: string;
  /** Called when the user picks an owned preset to switch to. */
  onPickPreset: (presetId: string) => void;
}

/**
 * Tier display — flat model (Bowen's call 2026-05-16):
 *   - Rwen is the only truly FREE companion (auto-granted on signup)
 *   - Every other preset is PREMIUM, regardless of its underlying
 *     tierGate enum value
 *   - The user gets one Premium pick for free via claimFreePreset.
 *     Additional Premiums require a paywall purchase (TODO).
 */
function isFreeForEveryone(preset: CompanionPreset): boolean {
  return preset.id === 'rwen';
}

export default function CompanionPickerSheet({
  visible, onClose, userId, activePresetId, onPickPreset,
}: Props) {
  const [loading, setLoading]                 = useState(true);
  const [owned, setOwned]                     = useState<CompanionCustomization[]>([]);
  const [archetypeMap, setArchetypeMap]       = useState<Record<string, CompanionArchetype>>({});
  const [profileSheet, setProfileSheet]       = useState<{ presetId: string; mode: ProfileMode } | null>(null);

  // Load owned presets + the archetype faces they reference.
  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const list = await loadOwnedCompanions(userId);
      if (cancelled) return;
      setOwned(list);

      // Pre-fetch any archetype faces we'll need to render thumbnails.
      const faceIds = Array.from(new Set(list.map((r) => r.face_archetype_id).filter(Boolean) as string[]));
      const fetched = await Promise.all(faceIds.map((id) => loadArchetype(id)));
      if (cancelled) return;
      const map: Record<string, CompanionArchetype> = {};
      fetched.forEach((a) => { if (a) map[a.id] = a; });
      setArchetypeMap(map);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [visible, userId]);

  const ownedIds = useMemo(() => new Set(owned.map((r) => r.preset_id)), [owned]);
  const freeClaimsUsed = owned.filter((r) => !r.is_paid && r.preset_id !== 'rwen').length;
  const freePickAvailable = freeClaimsUsed < 1;

  // Reload owned list after profile sheet saves (claim or rename).
  const handleProfileSaved = () => {
    setProfileSheet(null);
    loadOwnedCompanions(userId).then(setOwned);
  };

  const handleRowPress = (preset: CompanionPreset) => {
    const isOwned = ownedIds.has(preset.id);
    if (isOwned) {
      onPickPreset(preset.id);
      onClose();
      return;
    }
    // Not owned → open profile sheet in claim mode. If the user has
    // already used their one free Premium pick, claimFreePreset will
    // return reason='limit' and ProfileSheet surfaces the paywall hint.
    setProfileSheet({ presetId: preset.id, mode: 'claim' });
  };

  const handleRowEdit = (preset: CompanionPreset) => {
    setProfileSheet({ presetId: preset.id, mode: 'edit' });
  };

  const handleBuildCustom = () => {
    onClose();
    router.push('/build-companion');
  };

  return (
    <>
      <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
        <Pressable style={styles.backdrop} onPress={onClose}>
          <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
            <View style={styles.handle} />
            <View style={styles.headerRow}>
              <Text style={styles.headerTitle}>Companions</Text>
              <Pressable onPress={onClose} hitSlop={10}>
                <Text style={styles.closeText}>×</Text>
              </Pressable>
            </View>

            {loading ? (
              <View style={styles.loadingWrap}>
                <ActivityIndicator color={Colors.secondary} />
              </View>
            ) : (
              <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
                {PRESET_LIST.map((preset) => {
                  const isActive = preset.id === activePresetId;
                  const isOwned  = ownedIds.has(preset.id);
                  const cust     = owned.find((r) => r.preset_id === preset.id) ?? null;
                  const face     = cust?.face_archetype_id ? archetypeMap[cust.face_archetype_id] : null;
                  const display  = cust?.custom_name?.trim() || preset.name;
                  const isFree   = isFreeForEveryone(preset);  // Rwen only

                  return (
                    <View key={preset.id} style={[styles.row, isActive && styles.rowActive]}>
                      <Pressable
                        style={styles.rowMain}
                        onPress={() => handleRowPress(preset)}
                      >
                        {face?.image_url ? (
                          <Image source={{ uri: face.image_url }} style={styles.avatar} />
                        ) : (
                          <View style={[styles.avatarFallback]}>
                            <Text style={styles.avatarEmoji}>{preset.emoji}</Text>
                          </View>
                        )}
                        <View style={styles.rowText}>
                          <View style={styles.rowTitleLine}>
                            <Text style={styles.rowTitle}>{display}</Text>
                            {isActive && <Text style={styles.activeBadge}>active</Text>}
                            {/* Flat tier badge — Rwen=FREE, everyone else=PREMIUM.
                                Matches the companions tab so the same companion
                                doesn't show two different tier labels. */}
                            {isFree ? (
                              <Text style={styles.tierBadgeFree}>FREE</Text>
                            ) : (
                              <Text style={styles.tierBadgePremium}>PREMIUM</Text>
                            )}
                          </View>
                          <Text style={styles.rowSub} numberOfLines={1}>
                            {isOwned ? preset.tagline :
                             isFree  ? 'Everyone gets Rwen' :
                                       freePickAvailable
                                         ? 'Tap to claim — your one Premium pick'
                                         : 'Premium — additional unlocks require purchase'}
                          </Text>
                        </View>
                      </Pressable>
                      {isOwned && preset.id !== 'rwen' && (
                        <Pressable
                          style={styles.editBtn}
                          onPress={() => handleRowEdit(preset)}
                          hitSlop={8}
                        >
                          <Text style={styles.editIcon}>✎</Text>
                        </Pressable>
                      )}
                    </View>
                  );
                })}

                <Pressable style={styles.buildCta} onPress={handleBuildCustom}>
                  <Text style={styles.buildIcon}>＋</Text>
                  <View style={styles.buildText}>
                    <Text style={styles.buildTitle}>Build your own</Text>
                    <Text style={styles.buildSub}>$39.99 — bespoke companion</Text>
                  </View>
                </Pressable>
              </ScrollView>
            )}
          </Pressable>
        </Pressable>
      </Modal>

      {profileSheet && (
        <CompanionProfileSheet
          visible={!!profileSheet}
          onClose={() => setProfileSheet(null)}
          onSaved={handleProfileSaved}
          userId={userId}
          presetId={profileSheet.presetId}
          mode={profileSheet.mode}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    maxHeight: '85%',
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.lg,
  },
  handle: {
    alignSelf: 'center',
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.gray[300],
    marginBottom: Spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  headerTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.gray[900],
  },
  closeText: {
    fontSize: 28,
    color: Colors.gray[500],
    lineHeight: 28,
  },
  loadingWrap: { paddingVertical: Spacing.xl, alignItems: 'center' },
  list:        { maxHeight: '90%' },
  listContent: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.lg, gap: Spacing.sm },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  rowActive: {
    backgroundColor: Colors.secondary + '14',
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  rowMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.gray[200],
  },
  avatarFallback: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary + '22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 24 },
  rowText: { flex: 1 },
  rowTitleLine: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  rowTitle:    { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  activeBadge: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.secondary,
    backgroundColor: Colors.secondary + '22',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  // Flat tier badges — matched 1:1 with app/(tabs)/companions.tsx so
  // the same preset never shows two different tier labels.
  tierBadgeFree: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.success,
    backgroundColor: Colors.success + '18',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    letterSpacing: 0.5,
  },
  tierBadgePremium: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.xp,
    backgroundColor: Colors.xp + '18',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    letterSpacing: 0.5,
  },
  rowSub:      { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
  editBtn: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: Colors.gray[100],
  },
  editIcon: { fontSize: 14, color: Colors.gray[600] },

  buildCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.accent + '33',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginTop: Spacing.sm,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.accent,
  },
  buildIcon: {
    fontSize: 28,
    color: Colors.secondary,
    fontWeight: FontWeight.bold,
    lineHeight: 28,
  },
  buildText: { flex: 1 },
  buildTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  buildSub:   { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
});
