/**
 * CompanionProfileSheet — the profile + customization sheet for a single preset.
 *
 * Two modes:
 *   - mode='edit'  : user already owns this preset. Saves changes via upsertCustomization.
 *   - mode='claim' : user is about to claim a free preset. Calls claimFreePreset, then upsertCustomization.
 *
 * Surfaces:
 *   - Name input          (custom_name override)
 *   - Face picker         (companion_archetypes — active only)
 *   - Voice picker        (VOICE_LIBRARY) — with play-preview button
 *   - "See <preset>'s soul" — collapsible read-only personality / description
 *
 * No new package install required. Uses existing Modal + lib/voice.ts:speakText
 * for the voice preview.
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';
import { speakText, stopSpeaking } from '../lib/voice';
import { RWEN_VOICES, type RwenVoiceKey } from '../lib/SettingsContext';
import { VOICE_LIBRARY, type VoiceOption } from '../lib/voices';
import {
  loadCustomization,
  loadActiveArchetypes,
  upsertCustomization,
  claimFreePreset,
  type CompanionArchetype,
  type CompanionCustomization,
} from '../lib/companion-customization';
import { getPreset, type CompanionPreset } from '../data/companions/presets';

export type ProfileMode = 'edit' | 'claim';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSaved?: (presetId: string) => void;  // called after successful save/claim
  userId: string;
  presetId: string;
  mode: ProfileMode;
}

export default function CompanionProfileSheet({
  visible, onClose, onSaved, userId, presetId, mode,
}: Props) {
  const preset: CompanionPreset | undefined = getPreset(presetId);

  // Local edit state.
  const [archetypes, setArchetypes] = useState<CompanionArchetype[]>([]);
  const [customName, setCustomName] = useState<string>('');
  const [faceId, setFaceId] = useState<string | null>(null);
  const [voiceId, setVoiceId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [showSoul, setShowSoul] = useState<boolean>(false);

  // Reset & load whenever the sheet opens.
  useEffect(() => {
    if (!visible || !preset) return;
    let cancelled = false;
    setLoading(true);
    setShowSoul(false);
    (async () => {
      const [archs, existing] = await Promise.all([
        loadActiveArchetypes(),
        mode === 'edit' ? loadCustomization(userId, preset.id) : Promise.resolve<CompanionCustomization | null>(null),
      ]);
      if (cancelled) return;
      setArchetypes(archs);
      setCustomName(existing?.custom_name ?? '');
      setFaceId(existing?.face_archetype_id ?? null);
      setVoiceId(existing?.voice_id ?? preset.defaultVoiceId);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
      stopSpeaking();
    };
  }, [visible, userId, presetId, mode, preset]);

  const selectedVoice: VoiceOption | undefined = useMemo(
    () => VOICE_LIBRARY.find((v) => v.id === voiceId) ?? VOICE_LIBRARY[0],
    [voiceId],
  );

  const selectedFace: CompanionArchetype | null = useMemo(
    () => archetypes.find((a) => a.id === faceId) ?? null,
    [archetypes, faceId],
  );

  if (!preset) return null;

  // ── Voice preview ──────────────────────────────────────────────────────
  // We can't call ElevenLabs with arbitrary voice IDs through speakText
  // directly (it expects a RwenVoiceKey slot). Workaround: map the chosen
  // voice id back onto one of the 4 RWEN_VOICES slots if it matches one,
  // otherwise temporarily fall back to 'male_warm' for the preview. This
  // is a known limitation — a follow-up should let speakText accept a raw
  // voiceId for previews.
  const previewVoice = () => {
    const slot = (Object.keys(RWEN_VOICES) as RwenVoiceKey[]).find(
      (key) => RWEN_VOICES[key].id === voiceId,
    );
    const sample = `Hi, I'm ${customName.trim() || preset.name}. It's nice to meet you.`;
    void speakText(sample, slot ?? 'male_warm');
  };

  // ── Save ───────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    try {
      if (mode === 'claim') {
        const claim = await claimFreePreset(userId, preset.id);
        if (!claim.ok) {
          const msg =
            claim.reason === 'limit'
              ? "You've already claimed your one Premium companion. Each additional Premium companion requires a separate purchase — paywall coming soon. (You can still rename, change face, or change voice on the one you already own.)"
              : claim.reason === 'unknown_preset'
                ? "That companion isn't available."
                : 'Something went wrong claiming this companion. Try again in a moment.';
          Alert.alert(`Couldn't claim ${preset.name}`, msg);
          setSaving(false);
          return;
        }
      }
      await upsertCustomization(userId, preset.id, {
        custom_name:       customName.trim() || null,
        face_archetype_id: faceId,
        voice_id:          voiceId,
      });
      onSaved?.(preset.id);
      onClose();
    } catch (e: any) {
      Alert.alert('Save failed', e?.message ?? 'Unknown error');
    } finally {
      setSaving(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {mode === 'claim' ? `Claim ${preset.name}` : `Customize ${preset.name}`}
            </Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <Text style={styles.headerClose}>✕</Text>
            </Pressable>
          </View>

          {loading ? (
            <View style={styles.loadingWrap}>
              <ActivityIndicator color={Colors.primary} />
            </View>
          ) : (
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.body}
              keyboardShouldPersistTaps="handled"
            >
              {/* ── Identity preview ─────────────────────────────────── */}
              <View style={styles.previewCard}>
                <Text style={styles.previewFace}>
                  {selectedFace ? '🧑' : preset.emoji}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.previewName}>{customName.trim() || preset.name}</Text>
                  <Text style={styles.previewSub}>
                    {selectedFace ? `${selectedFace.name}'s face` : 'No face yet — uses emoji'}
                  </Text>
                  <Text style={styles.previewVoice}>{selectedVoice?.name}</Text>
                </View>
              </View>

              {/* ── Name override ────────────────────────────────────── */}
              <Text style={styles.sectionTitle}>Name</Text>
              <TextInput
                value={customName}
                onChangeText={setCustomName}
                placeholder={preset.name}
                placeholderTextColor={Colors.gray[400]}
                style={styles.input}
                maxLength={32}
              />
              <Text style={styles.hint}>
                Leave blank to keep "{preset.name}". The personality stays the same regardless of name.
              </Text>

              {/* ── Face picker ───────────────────────────────────────── */}
              <Text style={styles.sectionTitle}>Face</Text>
              {archetypes.length === 0 ? (
                <Text style={styles.hint}>No faces ready yet — using {preset.emoji} for now.</Text>
              ) : (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.faceRow}
                >
                  {/* "None" option = emoji fallback */}
                  <Pressable
                    style={[styles.faceTile, !faceId && styles.faceTileSelected]}
                    onPress={() => setFaceId(null)}
                  >
                    <Text style={styles.faceEmoji}>{preset.emoji}</Text>
                    <Text style={styles.faceName}>Emoji</Text>
                  </Pressable>
                  {archetypes.map((a) => (
                    <Pressable
                      key={a.id}
                      style={[styles.faceTile, faceId === a.id && styles.faceTileSelected]}
                      onPress={() => setFaceId(a.id)}
                    >
                      <Text style={styles.faceEmoji}>🧑</Text>
                      <Text style={styles.faceName} numberOfLines={1}>{a.name}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              )}

              {/* ── Voice picker ──────────────────────────────────────── */}
              <View style={styles.voiceHeaderRow}>
                <Text style={styles.sectionTitle}>Voice</Text>
                <Pressable onPress={previewVoice} hitSlop={8} style={styles.previewBtn}>
                  <Text style={styles.previewBtnText}>▶ Preview</Text>
                </Pressable>
              </View>
              <View style={styles.voiceList}>
                {VOICE_LIBRARY.map((v) => (
                  <Pressable
                    key={v.id}
                    style={[styles.voiceRow, voiceId === v.id && styles.voiceRowSelected]}
                    onPress={() => setVoiceId(v.id)}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={styles.voiceName}>{v.name}</Text>
                      <Text style={styles.voiceMeta}>
                        {v.gender} · {v.ageBand} · {v.vibe}
                      </Text>
                    </View>
                    {voiceId === v.id && <Text style={styles.voiceCheck}>✓</Text>}
                  </Pressable>
                ))}
              </View>

              {/* ── Soul / description ────────────────────────────────── */}
              <Pressable
                onPress={() => setShowSoul((s) => !s)}
                style={styles.soulToggle}
              >
                <Text style={styles.soulToggleText}>
                  {showSoul ? `Hide ${preset.name}'s soul` : `See ${preset.name}'s soul`}
                </Text>
                <Text style={styles.soulChevron}>{showSoul ? '▾' : '▸'}</Text>
              </Pressable>
              {showSoul && (
                <View style={styles.soulCard}>
                  <Text style={styles.soulTagline}>{preset.tagline}</Text>
                  <Text style={styles.soulDesc}>{preset.description}</Text>
                  <Text style={styles.soulNote}>
                    The personality stays the same — only the name, face, and voice change.
                  </Text>
                </View>
              )}

              <View style={{ height: Spacing.xl }} />
            </ScrollView>
          )}

          {/* ── Footer CTA ──────────────────────────────────────────── */}
          {!loading && (
            <View style={styles.footer}>
              <Pressable
                style={[styles.cta, saving && styles.ctaDisabled]}
                onPress={handleSave}
                disabled={saving}
              >
                {saving ? (
                  <ActivityIndicator color={Colors.white} />
                ) : (
                  <Text style={styles.ctaText}>
                    {mode === 'claim' ? `Claim & customize` : 'Save changes'}
                  </Text>
                )}
              </Pressable>
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    height: '88%',
    paddingHorizontal: 0,
  },
  handle: {
    width: 44, height: 4, borderRadius: 2,
    backgroundColor: Colors.gray[300],
    alignSelf: 'center', marginTop: Spacing.sm,
  },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm,
  },
  headerTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  headerClose: { fontSize: FontSize.lg, color: Colors.gray[500], paddingHorizontal: Spacing.sm },

  loadingWrap: { padding: Spacing.xl, alignItems: 'center' },
  body: { padding: Spacing.lg, paddingTop: 0 },

  previewCard: {
    flexDirection: 'row', gap: Spacing.md, alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  previewFace: { fontSize: 36 },
  previewName: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  previewSub:  { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
  previewVoice: { fontSize: FontSize.xs, color: Colors.gray[600], marginTop: 2, fontStyle: 'italic' },

  sectionTitle: {
    fontSize: FontSize.sm, fontWeight: FontWeight.bold,
    color: Colors.gray[800],
    marginTop: Spacing.md, marginBottom: Spacing.sm,
    textTransform: 'uppercase', letterSpacing: 0.5,
  },
  input: {
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    fontSize: FontSize.md, color: Colors.gray[900],
  },
  hint: { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 4 },

  faceRow: { gap: Spacing.sm, paddingVertical: Spacing.xs },
  faceTile: {
    width: 80,
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    borderWidth: 2, borderColor: 'transparent',
  },
  faceTileSelected: { borderColor: Colors.secondary, backgroundColor: Colors.white },
  faceEmoji: { fontSize: 32 },
  faceName: { fontSize: FontSize.xs, color: Colors.gray[700], marginTop: 4, textAlign: 'center' },

  voiceHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  previewBtn: {
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    marginTop: Spacing.md,
  },
  previewBtnText: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.gray[800] },

  voiceList: { gap: 4 },
  voiceRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    borderWidth: 1, borderColor: 'transparent',
  },
  voiceRowSelected: { borderColor: Colors.secondary, backgroundColor: Colors.white },
  voiceName: { fontSize: FontSize.sm, color: Colors.gray[900], fontWeight: FontWeight.medium },
  voiceMeta: { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
  voiceCheck: { fontSize: FontSize.md, color: Colors.secondary, fontWeight: FontWeight.bold },

  soulToggle: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: Spacing.lg, paddingVertical: Spacing.sm,
  },
  soulToggleText: { fontSize: FontSize.sm, color: Colors.secondary, fontWeight: FontWeight.bold },
  soulChevron: { fontSize: FontSize.sm, color: Colors.gray[500] },
  soulCard: {
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  soulTagline: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  soulDesc: { fontSize: FontSize.xs, color: Colors.gray[700], lineHeight: 18 },
  soulNote: { fontSize: FontSize.xs, color: Colors.gray[500], fontStyle: 'italic' },

  footer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1, borderTopColor: Colors.gray[100],
    backgroundColor: Colors.white,
  },
  cta: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  ctaDisabled: { backgroundColor: Colors.gray[300] },
  ctaText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
