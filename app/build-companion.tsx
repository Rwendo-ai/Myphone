/**
 * Build a Custom Companion — $39.99 one-time wizard.
 *
 * Single-file state machine with 8 steps. Saves draft to Supabase on
 * step transitions (cheap upsert). On the final step, composes the
 * AI system prompt and adds the $39.99 build product to the cart for
 * checkout via RevenueCat. The webhook marks the most recent draft as
 * paid when the purchase event arrives.
 *
 * v1 scope: persona + stock voice + stock avatar (emoji + colour).
 * v2 adds: ElevenLabs Voice Design (generated voice), text-to-image
 * avatar generation, live chat preview in-wizard, agent-style tool use.
 */

import { useEffect, useMemo, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable, TextInput,
  ActivityIndicator, Alert, KeyboardAvoidingView, Platform, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useAuth } from '../lib/AuthContext';
import { useCart } from '../lib/CartContext';
import {
  emptyDraft, defaultPersonality,
  createDraft, updateDraft, composeSystemPrompt,
  RELATIONSHIP_TYPES, TOPIC_OPTIONS, AVATAR_OPTIONS, STOCK_VOICES,
  type CustomCompanionDraft, type RelationshipType, type Personality,
} from '../lib/custom-companions';
import { pickAndUploadCompanionPhoto } from '../lib/companion-photo';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

type Step =
  | 'welcome'
  | 'relationship'
  | 'name'
  | 'personality'
  | 'topics'
  | 'avatar'
  | 'voice'
  | 'preview'
  | 'confirm';

const ORDER: Step[] = [
  'welcome', 'relationship', 'name', 'personality', 'topics', 'avatar', 'voice', 'preview', 'confirm',
];

export default function BuildCompanionScreen() {
  const { user } = useAuth();
  const cart = useCart();

  const [step, setStep]           = useState<Step>('welcome');
  const [draft, setDraft]         = useState<CustomCompanionDraft>(emptyDraft());
  const [draftId, setDraftId]     = useState<string | null>(null);
  const [busy, setBusy]           = useState(false);

  const stepIndex = ORDER.indexOf(step);
  const totalSteps = ORDER.length - 1; // Welcome doesn't count toward the bar.
  const showProgress = step !== 'welcome';

  // Save the draft on step transitions (don't await — best effort).
  const persist = async (patch: Partial<CustomCompanionDraft>) => {
    if (!user) return;
    const next = { ...draft, ...patch };
    setDraft(next);
    try {
      if (!draftId) {
        const id = await createDraft(user.id, next);
        setDraftId(id);
      } else {
        await updateDraft(draftId, patch);
      }
    } catch (e) {
      console.warn('[build-companion] persist failed', e);
    }
  };

  const goTo = (next: Step) => setStep(next);
  const goNext = () => {
    const idx = ORDER.indexOf(step);
    if (idx < ORDER.length - 1) setStep(ORDER[idx + 1]);
  };
  const goBack = () => {
    const idx = ORDER.indexOf(step);
    if (idx > 0) setStep(ORDER[idx - 1]);
    else router.back();
  };

  // ─── Finalise ──────────────────────────────────────────────────────────
  const finalise = async () => {
    if (!user || busy) return;
    setBusy(true);
    try {
      // Make sure we have an id and the latest patch is saved.
      let id = draftId;
      if (!id) id = await createDraft(user.id, draft);
      setDraftId(id);

      // Compose the system prompt — single Claude call.
      const prompt = await composeSystemPrompt(user.id, draft);
      await updateDraft(id, { system_prompt: prompt });
      setDraft((prev) => ({ ...prev, system_prompt: prompt }));

      // Add the $39.99 build product to cart and open the cart.
      cart.add('companion_build_v1');
      Alert.alert(
        'Ready to checkout',
        `${draft.name || 'Your companion'} has been added to your cart for $39.99. Once you complete checkout, they’ll appear in your companion list.`,
        [
          { text: 'Open Cart', onPress: () => router.replace('/cart') },
          { text: 'Stay here',  style: 'cancel' },
        ],
      );
    } catch (e: any) {
      Alert.alert('Build failed', e?.message ?? 'Something went wrong composing your companion. Try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={goBack} hitSlop={8} style={styles.headerBtn}>
          <Text style={styles.headerBtnText}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Build a Companion</Text>
        <View style={styles.headerBtn} />
      </View>

      {showProgress && (
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(stepIndex / totalSteps) * 100}%` }]} />
        </View>
      )}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {step === 'welcome'      && <WelcomeStep onNext={goNext} />}
          {step === 'relationship' && <RelationshipStep value={draft.relationship_type} onChange={(v) => persist({ relationship_type: v })} onNext={goNext} />}
          {step === 'name'         && <NameStep name={draft.name} tagline={draft.tagline} relationship={draft.relationship_type} onChange={(name, tagline) => persist({ name, tagline })} onNext={goNext} />}
          {step === 'personality'  && <PersonalityStep value={draft.personality} onChange={(v) => persist({ personality: v })} onNext={goNext} />}
          {step === 'topics'       && <TopicsStep value={draft.topics} onChange={(v) => persist({ topics: v })} onNext={goNext} />}
          {step === 'avatar'       && (
            <AvatarStep
              draftId={draftId}
              userId={user?.id ?? null}
              emoji={draft.emoji}
              color={draft.avatar_color}
              photoUrl={draft.avatar_image_url ?? null}
              onChangeEmoji={(emoji, avatar_color) => persist({ emoji, avatar_color, avatar_image_url: null })}
              onPhotoUploaded={(url) => persist({ avatar_image_url: url })}
              onPhotoCleared={() => persist({ avatar_image_url: null })}
              onNext={goNext}
            />
          )}
          {step === 'voice'        && <VoiceStep value={draft.voice_id} onChange={(voice_id) => persist({ voice_id })} onNext={goNext} />}
          {step === 'preview'      && <PreviewStep draft={draft} onNext={goNext} />}
          {step === 'confirm'      && <ConfirmStep draft={draft} busy={busy} onConfirm={finalise} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ─── Steps ──────────────────────────────────────────────────────────────

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.block}>
      <Text style={styles.welcomeEmoji}>✨</Text>
      <Text style={styles.welcomeTitle}>Build your own companion</Text>
      <Text style={styles.welcomeBody}>
        About 10 minutes. You'll choose who they are to you, how they speak, what they're good at, how they sound,
        and how they look. Auto-saved as you go — pay $39.99 at the end to unlock them forever.
      </Text>
      <Text style={styles.welcomeNote}>
        Tokens are required for AI usage (text, voice, lipsync) — the $39.99 is for the build itself, not the usage.
      </Text>
      <PrimaryBtn label="Begin" onPress={onNext} />
    </View>
  );
}

function RelationshipStep({
  value, onChange, onNext,
}: { value: RelationshipType; onChange: (v: RelationshipType) => void; onNext: () => void }) {
  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>Who are they to you?</Text>
      <Text style={styles.stepSub}>This sets the foundational dynamic.</Text>
      {RELATIONSHIP_TYPES.map((r) => (
        <Pressable
          key={r.id}
          style={[styles.card, value === r.id && styles.cardSelected]}
          onPress={() => onChange(r.id)}
        >
          <Text style={styles.cardEmoji}>{r.emoji}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>
              {r.label}{r.minAge ? ` · ${r.minAge}+` : ''}
            </Text>
            <Text style={styles.cardDesc}>{r.description}</Text>
          </View>
        </Pressable>
      ))}
      <PrimaryBtn label="Continue" onPress={onNext} />
    </View>
  );
}

function NameStep({
  name, tagline, relationship, onChange, onNext,
}: {
  name: string;
  tagline: string;
  relationship: RelationshipType;
  onChange: (name: string, tagline: string) => void;
  onNext: () => void;
}) {
  const [localName,    setLocalName]    = useState(name);
  const [localTagline, setLocalTagline] = useState(tagline);

  useEffect(() => { setLocalName(name); setLocalTagline(tagline); }, [name, tagline]);

  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>Their name</Text>
      <Text style={styles.stepSub}>Pick anything — a real name, a single word, whatever fits.</Text>
      <TextInput
        style={styles.input}
        value={localName}
        onChangeText={setLocalName}
        placeholder="e.g. Iris"
        placeholderTextColor={Colors.gray[400]}
        maxLength={40}
        autoCorrect={false}
        autoCapitalize="words"
      />
      <Text style={styles.stepSub2}>Tagline — one short phrase that captures them.</Text>
      <TextInput
        style={[styles.input, styles.inputTagline]}
        value={localTagline}
        onChangeText={setLocalTagline}
        placeholder="e.g. A patient ear with a wicked sense of timing"
        placeholderTextColor={Colors.gray[400]}
        maxLength={80}
        multiline
      />
      <PrimaryBtn
        label="Continue"
        disabled={!localName.trim()}
        onPress={() => { onChange(localName.trim(), localTagline.trim()); onNext(); }}
      />
    </View>
  );
}

function PersonalityStep({
  value, onChange, onNext,
}: { value: Personality; onChange: (v: Personality) => void; onNext: () => void }) {
  const [p, setP] = useState<Personality>(value ?? defaultPersonality());
  const [note, setNote] = useState(value?.freeform_note ?? '');

  const update = (key: keyof Personality, v: number) => {
    setP((prev) => ({ ...prev, [key]: v }));
  };

  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>What are they like?</Text>
      <Text style={styles.stepSub}>Tap the dot closest to who they are.</Text>

      <Slider5 label="Warmth" leftLabel="Warm" rightLabel="Direct"
        value={p.warm_direct} onChange={(v) => update('warm_direct', v)} />
      <Slider5 label="Tone" leftLabel="Playful" rightLabel="Serious"
        value={p.playful_serious} onChange={(v) => update('playful_serious', v)} />
      <Slider5 label="Conversation style" leftLabel="Listener" rightLabel="Talker"
        value={p.listener_talker} onChange={(v) => update('listener_talker', v)} />
      <Slider5 label="Outlook" leftLabel="Optimistic" rightLabel="Realistic"
        value={p.optimistic_realistic} onChange={(v) => update('optimistic_realistic', v)} />
      <Slider5 label="Register" leftLabel="Casual" rightLabel="Formal"
        value={p.casual_formal} onChange={(v) => update('casual_formal', v)} />

      <Text style={[styles.stepSub2, { marginTop: Spacing.lg }]}>
        Anything else important about how they talk to you?
      </Text>
      <TextInput
        style={[styles.input, { minHeight: 80 }]}
        value={note}
        onChangeText={setNote}
        placeholder="e.g. Drops the occasional Spanish phrase. Never uses bullet points. Loves the band Wilco."
        placeholderTextColor={Colors.gray[400]}
        maxLength={300}
        multiline
      />

      <PrimaryBtn
        label="Continue"
        onPress={() => { onChange({ ...p, freeform_note: note.trim() }); onNext(); }}
      />
    </View>
  );
}

function Slider5({
  label, leftLabel, rightLabel, value, onChange,
}: { label: string; leftLabel: string; rightLabel: string; value: number; onChange: (v: number) => void }) {
  // Five discrete positions: 0.0, 0.25, 0.5, 0.75, 1.0
  const stops = [0, 0.25, 0.5, 0.75, 1];
  return (
    <View style={styles.sliderRow}>
      <Text style={styles.sliderLabel}>{label}</Text>
      <View style={styles.sliderBar}>
        <Text style={styles.sliderEnd}>{leftLabel}</Text>
        <View style={styles.sliderDots}>
          {stops.map((s) => (
            <Pressable key={s} onPress={() => onChange(s)} hitSlop={8}>
              <View style={[styles.sliderDot, Math.abs(value - s) < 0.05 && styles.sliderDotActive]} />
            </Pressable>
          ))}
        </View>
        <Text style={styles.sliderEnd}>{rightLabel}</Text>
      </View>
    </View>
  );
}

function TopicsStep({
  value, onChange, onNext,
}: { value: string[]; onChange: (v: string[]) => void; onNext: () => void }) {
  const toggle = (id: string) => {
    if (value.includes(id)) onChange(value.filter((x) => x !== id));
    else onChange([...value, id]);
  };
  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>What are they good at?</Text>
      <Text style={styles.stepSub}>Pick a few. These shape how they talk and what they’ll bring up unprompted.</Text>
      <View style={styles.chips}>
        {TOPIC_OPTIONS.map((t) => {
          const selected = value.includes(t.id);
          return (
            <Pressable
              key={t.id}
              onPress={() => toggle(t.id)}
              style={[styles.chip, selected && styles.chipSelected]}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{t.label}</Text>
            </Pressable>
          );
        })}
      </View>
      <PrimaryBtn label="Continue" disabled={value.length === 0} onPress={onNext} />
    </View>
  );
}

function AvatarStep({
  draftId, userId, emoji, color, photoUrl,
  onChangeEmoji, onPhotoUploaded, onPhotoCleared, onNext,
}: {
  draftId: string | null;
  userId: string | null;
  emoji: string;
  color: string;
  photoUrl: string | null;
  onChangeEmoji: (emoji: string, color: string) => void;
  onPhotoUploaded: (url: string) => void;
  onPhotoCleared: () => void;
  onNext: () => void;
}) {
  const [uploading, setUploading] = useState(false);

  const pickPhoto = async () => {
    if (!userId || !draftId || uploading) {
      // The draft row is created on the first persist() call (back on
      // welcome step). If somehow we got here without one, ask the user
      // to skip and try again.
      Alert.alert('One moment', 'Your draft is still being created. Try again in a second.');
      return;
    }
    setUploading(true);
    try {
      const result = await pickAndUploadCompanionPhoto(userId, draftId);
      if (result) onPhotoUploaded(result.url);
    } catch (e: any) {
      Alert.alert('Upload failed', e?.message ?? 'Couldn\'t upload that photo. Try another.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>How do they look?</Text>
      <Text style={styles.stepSub}>
        Pick an emoji + colour, OR upload a photo. The photo is used for Custom Lipsync (5 tokens/min when chatting in video).
      </Text>

      {/* Photo upload card */}
      {photoUrl ? (
        <View style={styles.photoCard}>
          <Image source={{ uri: photoUrl }} style={styles.photoPreview} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>Your photo</Text>
            <Text style={styles.cardDesc}>This will drive Custom Lipsync.</Text>
            <View style={{ flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.sm }}>
              <Pressable onPress={pickPhoto} hitSlop={6}><Text style={styles.photoActionLink}>Change</Text></Pressable>
              <Pressable onPress={onPhotoCleared} hitSlop={6}><Text style={styles.photoActionLinkRemove}>Remove</Text></Pressable>
            </View>
          </View>
        </View>
      ) : (
        <Pressable
          onPress={pickPhoto}
          style={({ pressed }) => [styles.photoCta, pressed && { opacity: 0.85 }, uploading && { opacity: 0.6 }]}
          disabled={uploading}
        >
          {uploading ? <ActivityIndicator color={Colors.primary} /> : <Text style={styles.photoCtaEmoji}>📷</Text>}
          <View style={{ flex: 1 }}>
            <Text style={styles.photoCtaTitle}>{uploading ? 'Uploading…' : 'Upload a photo'}</Text>
            <Text style={styles.photoCtaSub}>For Custom Lipsync video chat. Or skip and pick an emoji below.</Text>
          </View>
        </Pressable>
      )}

      {/* Emoji + colour grid (always available) */}
      <Text style={[styles.stepSub2, { marginTop: Spacing.lg }]}>{photoUrl ? 'Or pick an emoji+colour avatar instead:' : 'Emoji + colour'}</Text>
      <View style={styles.avatarGrid}>
        {AVATAR_OPTIONS.map((opt) => {
          const selected = !photoUrl && opt.emoji === emoji && opt.color === color;
          return (
            <Pressable
              key={opt.emoji + opt.color}
              onPress={() => onChangeEmoji(opt.emoji, opt.color)}
              style={[styles.avatarTile, { backgroundColor: opt.color }, selected && styles.avatarTileSelected]}
            >
              <Text style={styles.avatarTileEmoji}>{opt.emoji}</Text>
            </Pressable>
          );
        })}
      </View>
      <PrimaryBtn label="Continue" onPress={onNext} />
    </View>
  );
}

function VoiceStep({
  value, onChange, onNext,
}: { value: string | null; onChange: (v: string) => void; onNext: () => void }) {
  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>How do they sound?</Text>
      <Text style={styles.stepSub}>Pick a voice. (Generated voices from a text description coming next.)</Text>
      {STOCK_VOICES.map((v) => {
        const selected = v.voice_id === value;
        return (
          <Pressable
            key={v.voice_id}
            onPress={() => onChange(v.voice_id)}
            style={[styles.card, selected && styles.cardSelected]}
          >
            <Text style={styles.cardEmoji}>{v.gender === 'female' ? '👩' : v.gender === 'male' ? '👨' : '🎙️'}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardLabel}>{v.label}</Text>
              <Text style={styles.cardDesc}>{v.description}</Text>
            </View>
          </Pressable>
        );
      })}
      <PrimaryBtn label="Continue" disabled={!value} onPress={onNext} />
    </View>
  );
}

function PreviewStep({ draft, onNext }: { draft: CustomCompanionDraft; onNext: () => void }) {
  const voice = STOCK_VOICES.find((v) => v.voice_id === draft.voice_id);
  const relationship = RELATIONSHIP_TYPES.find((r) => r.id === draft.relationship_type);
  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>Meet {draft.name || 'your companion'}</Text>
      <Text style={styles.stepSub}>Review everything before you confirm.</Text>

      <View style={styles.previewCard}>
        <View style={[styles.previewAvatar, { backgroundColor: draft.avatar_color }]}>
          <Text style={styles.previewAvatarEmoji}>{draft.emoji}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.previewName}>{draft.name || '—'}</Text>
          {draft.tagline ? <Text style={styles.previewTagline}>{draft.tagline}</Text> : null}
        </View>
      </View>

      <PreviewRow label="Relationship" value={relationship?.label ?? draft.relationship_type} />
      <PreviewRow label="Voice"        value={voice?.label ?? 'Not selected'} />
      <PreviewRow label="Good at"      value={draft.topics.length ? draft.topics.join(', ') : '—'} />
      {draft.personality.freeform_note ? <PreviewRow label="Notes" value={draft.personality.freeform_note} /> : null}

      <PrimaryBtn label="Continue to checkout" onPress={onNext} />
    </View>
  );
}

function ConfirmStep({ draft, busy, onConfirm }: { draft: CustomCompanionDraft; busy: boolean; onConfirm: () => void }) {
  return (
    <View style={styles.block}>
      <Text style={styles.stepTitle}>One-off purchase</Text>
      <Text style={styles.stepSub}>
        $39.99 unlocks {draft.name || 'this companion'} permanently. Tokens cover ongoing usage (1 token per text,
        more for voice + lipsync) once they’re unlocked.
      </Text>

      <View style={styles.priceCard}>
        <Text style={styles.priceLabel}>Total</Text>
        <Text style={styles.priceValue}>A$39.99</Text>
      </View>

      <PrimaryBtn
        label={busy ? 'Composing your companion…' : 'Confirm & checkout'}
        onPress={onConfirm}
        disabled={busy}
      />
      {busy && <ActivityIndicator style={{ marginTop: Spacing.md }} color={Colors.primary} />}
    </View>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.previewRow}>
      <Text style={styles.previewRowLabel}>{label}</Text>
      <Text style={styles.previewRowValue}>{value}</Text>
    </View>
  );
}

function PrimaryBtn({ label, onPress, disabled }: { label: string; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.primaryBtn,
        disabled && styles.primaryBtnDisabled,
        pressed && !disabled && styles.primaryBtnPressed,
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={styles.primaryBtnText}>{label}</Text>
    </Pressable>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.primary,
  },
  headerBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  headerBtnText: { color: Colors.white, fontSize: FontSize.xxl },
  headerTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, flex: 1, textAlign: 'center' },
  progressBar: { height: 4, backgroundColor: Colors.gray[200] },
  progressFill: { height: 4, backgroundColor: Colors.primary },
  scroll: { padding: Spacing.lg, paddingBottom: Spacing.xxl * 2 },

  block: { gap: Spacing.md },

  welcomeEmoji: { fontSize: 56, alignSelf: 'center', marginTop: Spacing.xl },
  welcomeTitle: { color: Colors.gray[800], fontSize: FontSize.xxl, fontWeight: FontWeight.bold, textAlign: 'center', marginTop: Spacing.md },
  welcomeBody: { color: Colors.gray[600], fontSize: FontSize.md, textAlign: 'center', marginTop: Spacing.sm },
  welcomeNote: { color: Colors.gray[500], fontSize: FontSize.sm, textAlign: 'center', marginTop: Spacing.md, fontStyle: 'italic' },

  stepTitle: { color: Colors.gray[800], fontSize: FontSize.xl, fontWeight: FontWeight.bold },
  stepSub: { color: Colors.gray[600], fontSize: FontSize.sm, marginBottom: Spacing.sm },
  stepSub2: { color: Colors.gray[700], fontSize: FontSize.sm, marginTop: Spacing.md, marginBottom: Spacing.xs, fontWeight: FontWeight.bold },

  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.gray[200],
  },
  cardSelected: { borderColor: Colors.primary, backgroundColor: '#F2F6FC' },
  cardEmoji: { fontSize: 28 },
  cardLabel: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  cardDesc: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: 2 },

  input: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    color: Colors.gray[800],
    fontSize: FontSize.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  inputTagline: { minHeight: 70, textAlignVertical: 'top' },

  sliderRow: { marginBottom: Spacing.lg },
  sliderLabel: { color: Colors.gray[700], fontSize: FontSize.sm, fontWeight: FontWeight.bold, marginBottom: Spacing.xs },
  sliderBar: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  sliderEnd: { color: Colors.gray[500], fontSize: FontSize.xs, width: 70 },
  sliderDots: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sliderDot: { width: 16, height: 16, borderRadius: 8, backgroundColor: Colors.gray[300] },
  sliderDotActive: { width: 24, height: 24, borderRadius: 12, backgroundColor: Colors.primary },

  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chip: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  chipSelected: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { color: Colors.gray[700], fontSize: FontSize.sm },
  chipTextSelected: { color: Colors.white, fontWeight: FontWeight.bold },

  photoCta: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.md,
    backgroundColor: '#F2F6FC', borderRadius: BorderRadius.md,
    padding: Spacing.md, borderWidth: 2, borderStyle: 'dashed', borderColor: Colors.primary,
  },
  photoCtaEmoji: { fontSize: 28 },
  photoCtaTitle: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  photoCtaSub: { color: Colors.gray[600], fontSize: FontSize.xs, marginTop: 2 },

  photoCard: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.md,
    backgroundColor: Colors.white, borderRadius: BorderRadius.md,
    padding: Spacing.md, borderWidth: 2, borderColor: '#3DA864',
  },
  photoPreview: { width: 72, height: 72, borderRadius: 36, backgroundColor: Colors.gray[200] },
  photoActionLink: { color: Colors.primary, fontSize: FontSize.sm, fontWeight: FontWeight.bold },
  photoActionLinkRemove: { color: '#C0392B', fontSize: FontSize.sm, fontWeight: FontWeight.bold },

  avatarGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  avatarTile: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: 'transparent' },
  avatarTileSelected: { borderColor: Colors.gray[800] },
  avatarTileEmoji: { fontSize: 32 },

  previewCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  previewAvatar: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  previewAvatarEmoji: { fontSize: 32 },
  previewName: { color: Colors.gray[800], fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  previewTagline: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: 2 },

  previewRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.gray[200] },
  previewRowLabel: { color: Colors.gray[500], fontSize: FontSize.sm, fontWeight: FontWeight.bold, width: 110 },
  previewRowValue: { color: Colors.gray[800], fontSize: FontSize.sm, flex: 1, textAlign: 'right' },

  priceCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  priceValue: { color: Colors.white, fontSize: FontSize.xxl, fontWeight: FontWeight.bold },

  primaryBtn: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  primaryBtnDisabled: { opacity: 0.4 },
  primaryBtnPressed: { opacity: 0.85 },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
