/**
 * Connections onboarding — one-shot setup for the Meet Travellers feed.
 *
 * Three things:
 *   1. Profile basics — name, age, gender, bio.
 *   2. Match preferences — similar age (with ±window) and similar gender,
 *      both default OFF (so user sees everyone unless they tick to filter).
 *   3. Public toggle — whether others see your profile alongside your posts.
 *
 * Reused for "edit prefs" later — the gear icon on the connections screen
 * routes here too. Existing values pre-fill on edit.
 */

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Switch, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import {
  getMyProfile,
  getMyMatchPrefs,
  upsertProfile,
  upsertMatchPrefs,
  type TravellerProfile,
  type MatchPrefs,
} from '../../lib/travel-connections';

type Gender = NonNullable<TravellerProfile['gender']>;

export default function ConnectionsOnboarding() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [displayName, setDisplayName] = useState('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [bio, setBio] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const [similarAge, setSimilarAge] = useState(false);
  const [similarAgeWindow, setSimilarAgeWindow] = useState(5);
  const [similarGender, setSimilarGender] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        // Pull existing traveller profile + base profile in parallel. The
        // base profile (signup time) is the source-of-truth for name/DOB —
        // if Google OAuth was used, name comes from auth metadata, DOB may
        // be missing (we'd never trust traveller_profiles to be the
        // authoritative birth date).
        const [travellerProfile, prefs, baseProfileResult] = await Promise.all([
          getMyProfile(user.id),
          getMyMatchPrefs(user.id),
          supabase.from('profiles').select('display_name, date_of_birth').eq('id', user.id).maybeSingle(),
        ]);

        if (travellerProfile) {
          // Existing traveller profile — pre-fill from there.
          setDisplayName(travellerProfile.display_name);
          setAge(travellerProfile.age ? String(travellerProfile.age) : '');
          setGender(travellerProfile.gender);
          setBio(travellerProfile.bio ?? '');
          setIsPublic(travellerProfile.is_public);
        } else {
          // First-time setup — pull what we can from base signup profile +
          // auth metadata (Google OAuth `name`, Apple Sign-In first-time
          // `name`, email-handle as a last resort).
          const baseName =
            baseProfileResult.data?.display_name?.trim() ||
            (user.user_metadata as { name?: string; full_name?: string } | undefined)?.name ||
            (user.user_metadata as { name?: string; full_name?: string } | undefined)?.full_name ||
            user.email?.split('@')[0] ||
            '';
          setDisplayName(baseName);

          // Compute age from DOB if available — the traveller-profile age
          // field is just a display copy; the authoritative DOB lives on
          // profiles. Avoids forcing the user to re-enter.
          const dob = baseProfileResult.data?.date_of_birth;
          if (dob) {
            const d = new Date(dob);
            if (!Number.isNaN(d.getTime())) {
              const now = new Date();
              let years = now.getFullYear() - d.getFullYear();
              const monthDiff = now.getMonth() - d.getMonth();
              if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < d.getDate())) years--;
              setAge(String(years));
            }
          }
        }

        if (prefs) {
          setSimilarAge(prefs.similar_age);
          setSimilarAgeWindow(prefs.similar_age_window);
          setSimilarGender(prefs.similar_gender);
        }
      } catch (e) {
        console.warn('[connections-onboarding] load failed', e);
      } finally {
        setLoading(false);
      }
    })();
  }, [user]);

  const save = async () => {
    if (!user) return;
    if (!displayName.trim()) { Alert.alert('Pick a display name', 'Other travellers see this.'); return; }
    setSaving(true);
    try {
      await upsertProfile({
        user_id: user.id,
        display_name: displayName.trim(),
        age: age ? Number(age) : null,
        gender,
        bio: bio.trim() || null,
        is_public: isPublic,
      } as Partial<TravellerProfile> & { user_id: string; display_name: string });
      await upsertMatchPrefs({
        user_id: user.id,
        similar_age: similarAge,
        similar_age_window: similarAgeWindow,
        similar_gender: similarGender,
      });
      router.back();
    } catch (e) {
      Alert.alert('Could not save', e instanceof Error ? e.message : 'Try again later.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.safe, { alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator color={Colors.white} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Cancel</Text></Pressable>
        <Text style={styles.title}>Your traveller profile</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.lg, paddingBottom: Spacing.xxl, gap: Spacing.lg }}>
        <Section title="Public profile">
          <Field label="Display name" value={displayName} onChangeText={setDisplayName} placeholder="What other travellers see" />
          <Field label="Age" value={age} onChangeText={setAge} placeholder="e.g. 32" keyboardType="numeric" maxLength={3} />

          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderRow}>
            {(['female', 'male', 'nonbinary', 'prefer_not_to_say'] as Gender[]).map(g => (
              <Pressable
                key={g}
                style={[styles.genderChip, gender === g && styles.genderChipActive]}
                onPress={() => setGender(g)}
              >
                <Text style={[styles.genderChipText, gender === g && styles.genderChipTextActive]}>
                  {genderLabel(g)}
                </Text>
              </Pressable>
            ))}
          </View>

          <Field label="Bio (optional)" value={bio} onChangeText={setBio} placeholder="Couple sentences — interests, why you're going..." multiline maxLength={500} />

          <Toggle
            label="Show my profile to other travellers"
            description="When off, your posts still appear but with no name/photo attached."
            value={isPublic}
            onValueChange={setIsPublic}
          />
        </Section>

        <Section title="Match preferences" sub="Filter the feed to people you'd most likely connect with. Both default off — leave them unticked to see everyone.">
          <Toggle
            label="Only show travellers near my age"
            description={`Within ±${similarAgeWindow} years of me. Tap +/− to adjust.`}
            value={similarAge}
            onValueChange={setSimilarAge}
          />
          {similarAge && (
            <View style={styles.windowRow}>
              <Text style={styles.windowLabel}>± {similarAgeWindow} years</Text>
              <View style={styles.stepper}>
                <Pressable style={styles.stepBtn} onPress={() => setSimilarAgeWindow(w => Math.max(1, w - 1))}>
                  <Text style={styles.stepBtnText}>−</Text>
                </Pressable>
                <Pressable style={styles.stepBtn} onPress={() => setSimilarAgeWindow(w => Math.min(30, w + 1))}>
                  <Text style={styles.stepBtnText}>+</Text>
                </Pressable>
              </View>
            </View>
          )}
          <Toggle
            label="Only show travellers of the same gender"
            description="When off, all genders show. Useful for women-only travel circles, etc."
            value={similarGender}
            onValueChange={setSimilarGender}
          />
        </Section>

        <Pressable style={[styles.saveBtn, saving && styles.saveBtnDisabled]} onPress={save} disabled={saving}>
          <Text style={styles.saveBtnText}>{saving ? 'Saving…' : 'Save profile'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {sub && <Text style={styles.sectionSub}>{sub}</Text>}
      <View style={{ gap: Spacing.md, marginTop: Spacing.sm }}>{children}</View>
    </View>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChangeText: (s: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric';
  maxLength?: number;
  multiline?: boolean;
}) {
  return (
    <View style={{ gap: 4 }}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.input, props.multiline && styles.inputMultiline]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(255,255,255,0.3)"
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        multiline={props.multiline}
      />
    </View>
  );
}

function Toggle(props: { label: string; description?: string; value: boolean; onValueChange: (v: boolean) => void }) {
  return (
    <View style={styles.toggleRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.toggleLabel}>{props.label}</Text>
        {props.description && <Text style={styles.toggleDesc}>{props.description}</Text>}
      </View>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{ false: 'rgba(255,255,255,0.1)', true: Colors.xp }}
      />
    </View>
  );
}

function genderLabel(g: Gender): string {
  switch (g) {
    case 'female': return 'Female';
    case 'male': return 'Male';
    case 'nonbinary': return 'Non-binary';
    case 'prefer_not_to_say': return 'Prefer not to say';
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  section: { backgroundColor: 'rgba(255,255,255,0.06)', padding: Spacing.lg, borderRadius: BorderRadius.lg },
  sectionTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  sectionSub: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.xs, lineHeight: 16, marginTop: 4 },

  label: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 0.5 },
  input: { color: Colors.white, fontSize: FontSize.md, padding: Spacing.sm, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: BorderRadius.md },
  inputMultiline: { minHeight: 80, textAlignVertical: 'top' },

  genderRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xs },
  genderChip: { paddingHorizontal: Spacing.sm, paddingVertical: 6, borderRadius: BorderRadius.full, backgroundColor: 'rgba(255,255,255,0.08)' },
  genderChipActive: { backgroundColor: Colors.xp },
  genderChipText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.xs, fontWeight: FontWeight.semibold },
  genderChipTextActive: { color: Colors.white },

  toggleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, paddingVertical: Spacing.xs },
  toggleLabel: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  toggleDesc: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.xs, marginTop: 2, lineHeight: 16 },

  windowRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xs, paddingHorizontal: Spacing.sm, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md },
  windowLabel: { flex: 1, color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  stepper: { flexDirection: 'row', gap: 4 },
  stepBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center', borderRadius: BorderRadius.sm, backgroundColor: 'rgba(255,255,255,0.1)' },
  stepBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  saveBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  saveBtnDisabled: { opacity: 0.5 },
  saveBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
