import { View, Text, StyleSheet, Pressable, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { useAuth } from '../../lib/AuthContext';
import { useSettings, RWEN_VOICES, RwenVoiceKey } from '../../lib/SettingsContext';
import { supabase } from '../../lib/supabase';
import { JURISDICTION_IDS, getJurisdiction } from '../../data/jurisdictions';
import { COURSES } from '../../data/courses';
import { JurisdictionPackId } from '../../types/packs';
import { setAppLanguage as setI18nLanguage, type SupportedLanguage } from '../../lib/i18n';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

type AppPath = 'learn' | 'companion' | 'travel';
type Step = 'language'|'jurisdiction'|'gender'|'age'|'age_blocked'|'path'|'learn_target'|'learn_ability'|'learn_reasons'|'learn_time'|'learn_challenge'|'learn_connection'|'companion_type'|'companion_topics'|'travel_destination'|'travel_when'|'travel_purpose'|'voice'|'complete';

const LEARN_STEPS: Step[]     = ['language','jurisdiction','gender','age','path','learn_target','learn_ability','learn_reasons','learn_time','learn_challenge','learn_connection','voice','complete'];
const COMPANION_STEPS: Step[] = ['language','jurisdiction','gender','age','path','companion_type','companion_topics','voice','complete'];
const TRAVEL_STEPS: Step[]    = ['language','jurisdiction','gender','age','path','travel_destination','travel_when','travel_purpose','voice','complete'];
const BASE_STEPS: Step[]      = ['language','jurisdiction','gender','age','path'];

const JURISDICTION_FLAGS: Record<JurisdictionPackId, string> = {
  AU: '🇦🇺',
  GB: '🇬🇧',
  US: '🇺🇸',
  EU: '🇪🇺',
  ZW: '🇿🇼',
  PH: '🇵🇭',
  FR: '🇫🇷',
};

// Speaker pack options the user can pick at signup. This drives both the
// app's UI translation language AND the AI persona language. Five packs
// shipped at v1; adding a sixth = drop a `data/speakers/<id>/` folder and
// add the id + flag here.
const LANGUAGE_IDS = ['english', 'shona', 'ndebele', 'french', 'chinese', 'tagalog', 'hindi', 'spanish', 'portuguese', 'japanese', 'korean'] as const;
const LANGUAGE_FLAGS: Record<string, string> = {
  english:    '🇬🇧',
  shona:      '🇿🇼',
  ndebele:    '🇿🇼',
  french:     '🇫🇷',
  chinese:    '🇨🇳',
  tagalog:    '🇵🇭',
  hindi:      '🇮🇳',
  spanish:    '🇪🇸',
  portuguese: '🇧🇷',
  japanese:   '🇯🇵',
  korean:     '🇰🇷',
};
// Map speaker-pack id → ISO 639-1 i18n key so we can flip the rest of
// onboarding into the chosen language as soon as the user picks it.
const LANGUAGE_TO_ISO: Record<string, string> = {
  english:    'en',
  shona:      'sn',
  ndebele:    'nd',
  french:     'fr',
  chinese:    'zh',
  tagalog:    'tl',
  hindi:      'hi',
  spanish:    'es',
  portuguese: 'pt',
  japanese:   'ja',
  korean:     'ko',
};

const GENDER_IDS = ['male', 'female', 'nonbinary', 'prefer_not_to_say'] as const;
const GENDER_EMOJIS: Record<string, string> = { male: '👨', female: '👩', nonbinary: '🧑', prefer_not_to_say: '🤐' };

const APP_PATH_IDS: AppPath[] = ['learn', 'companion', 'travel'];
const APP_PATH_EMOJIS: Record<AppPath, string> = { learn: '📚', companion: '🦎', travel: '✈️' };
// Travel is opened (per user 2026-05-04). The destination/purpose questions
// run, but the actual Travel tab still shows a coming-soon placeholder
// until v1.x ships destination guides. Picking Travel just primes their
// profile.primary_path so when content lands, the right cards surface.
const APP_PATH_AVAILABLE: Record<AppPath, boolean> = { learn: true, companion: true, travel: true };

const ABILITY_IDS = ['beginner', 'basics', 'conversational', 'intermediate'] as const;
const LEARN_REASON_IDS = ['family', 'travel', 'culture', 'work', 'study', 'fun', 'heritage'] as const;
const TIME_OPTION_IDS = ['5min', '10min', '20min', '30min'] as const;
const CHALLENGE_IDS = ['pronunciation', 'grammar', 'vocabulary', 'confidence', 'consistency'] as const;
const COMPANION_TYPE_IDS = ['friend', 'support', 'study', 'work'] as const;
const COMPANION_TYPE_EMOJIS: Record<string, string> = { friend: '🤝', support: '💙', study: '📖', work: '💼' };
const COMPANION_TOPIC_IDS = ['daily_life', 'goals', 'humour', 'culture', 'thoughts', 'language', 'everything'] as const;
const TRAVEL_DEST_IDS = ['harare', 'victoria', 'bulawayo', 'great_zim', 'hwange', 'multiple'] as const;
const TRAVEL_DEST_EMOJIS: Record<string, string> = { harare: '🏙️', victoria: '🌊', bulawayo: '🏛️', great_zim: '🗿', hwange: '🦁', multiple: '🗺️' };
const TRAVEL_WHEN_IDS = ['1month', '3months', '6months', 'planning'] as const;
const TRAVEL_PURPOSE_IDS = ['tourism', 'family', 'business', 'safari', 'volunteer', 'study'] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressHeader({ current, total, title, sub }: { current: number; total: number; title: string; sub?: string }) {
  const { t } = useTranslation('auth');
  return (
    <View style={styles.stepHeader}>
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: `${(current / total) * 100}%` }]} />
      </View>
      <Text style={styles.stepCount}>{t('onboarding.step_count', { current, total })}</Text>
      <Text style={styles.title}>{title}</Text>
      {sub && <Text style={styles.sub}>{sub}</Text>}
    </View>
  );
}

function Card({ emoji, label, desc, selected, onPress, disabled }: {
  emoji?: string; label: string; desc?: string;
  selected?: boolean; onPress: () => void; disabled?: boolean;
}) {
  return (
    <Pressable style={[styles.card, selected && styles.cardSelected, disabled && styles.cardDisabled]} onPress={onPress} disabled={disabled}>
      {emoji && <Text style={styles.cardEmoji}>{emoji}</Text>}
      <View style={styles.cardInfo}>
        <Text style={[styles.cardLabel, selected && styles.cardLabelSel, disabled && { opacity: 0.4 }]}>{label}</Text>
        {desc && <Text style={[styles.cardDesc, disabled && { opacity: 0.4 }]}>{desc}</Text>}
      </View>
      {selected && <Text style={styles.cardCheck}>✓</Text>}
    </Pressable>
  );
}

function Chip({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
  return (
    <Pressable style={[styles.chip, selected && styles.chipSel]} onPress={onPress}>
      <Text style={[styles.chipText, selected && styles.chipTextSel]}>{label}</Text>
    </Pressable>
  );
}

function Nav({ onBack, onNext, nextLabel, disabled }: {
  onBack?: () => void; onNext: () => void; nextLabel?: string; disabled?: boolean;
}) {
  const { t } = useTranslation('auth');
  return (
    <View style={styles.nav}>
      {onBack && <Pressable style={styles.navBack} onPress={onBack}><Text style={styles.navBackText}>{t('back')}</Text></Pressable>}
      <Pressable style={[styles.navNext, disabled && styles.navNextDisabled, !onBack && { flex: 1 }]} onPress={onNext} disabled={disabled}>
        <Text style={styles.navNextText}>{nextLabel ?? t('continue')}</Text>
      </Pressable>
    </View>
  );
}

/** Back-only Nav for steps where forward progression happens via card tap
 *  (language, jurisdiction, path) — they have no Continue button to render. */
function BackOnly({ onBack }: { onBack: () => void }) {
  const { t } = useTranslation('auth');
  return (
    <View style={styles.nav}>
      <Pressable style={styles.navBack} onPress={onBack}><Text style={styles.navBackText}>{t('back')}</Text></Pressable>
    </View>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function OnboardingScreen() {
  const { t } = useTranslation('auth');
  const { user, setOnboardingComplete } = useAuth();
  const { setActivePack, setRwenVoice, setJurisdictionId, setSpeakerPack, setOwnedCourseIds, setStarterCourseId, setActiveCourseId } = useSettings();

  const [step, setStep]     = useState<Step>('language');
  const [saving, setSaving] = useState(false);

  const [appLanguage,     setAppLanguage]     = useState('');
  const [jurisdictionId,  setJurisdictionIdState] = useState<JurisdictionPackId>('AU');
  const [gender,          setGender]          = useState('');
  const [birthDay,        setBirthDay]        = useState('');
  const [birthMonth,      setBirthMonth]      = useState('');
  const [birthYear,       setBirthYear]       = useState('');
  // DOB input refs — auto-advance focus DD → MM → YYYY as the user types
  // so they don't have to tap each field. Standard mobile UX for split DOB.
  const dayRef   = useRef<TextInput>(null);
  const monthRef = useRef<TextInput>(null);
  const yearRef  = useRef<TextInput>(null);
  const [ageError,        setAgeError]        = useState('');
  const [path,            setPath]            = useState<AppPath | null>(null);
  // Course id the user picked to learn — set on the new learn_target step.
  // Empty until they pick. completeOnboarding writes this into
  // active_course_ids and starter_course_id.
  const [targetCourseId,  setTargetCourseId]  = useState<string>('');
  const [ability,         setAbility]         = useState('');
  const [reasons,         setReasons]         = useState<string[]>([]);
  const [timeCommit,      setTimeCommit]      = useState('');
  const [challenge,       setChallenge]       = useState('');
  const [connection,      setConnection]      = useState('');
  const [companionType,   setCompanionType]   = useState('');
  const [compTopics,      setCompTopics]      = useState<string[]>([]);
  const [travelDest,      setTravelDest]      = useState('');
  const [travelWhen,      setTravelWhen]      = useState('');
  const [travelPurposes,  setTravelPurposes]  = useState<string[]>([]);
  const [voiceKey,        setVoiceKey]        = useState<RwenVoiceKey>('male_warm');

  const getSteps = (): Step[] => !path ? BASE_STEPS : path === 'learn' ? LEARN_STEPS : path === 'companion' ? COMPANION_STEPS : TRAVEL_STEPS;
  const steps     = getSteps();
  const stepIndex = steps.indexOf(step) + 1;
  const total     = steps.length;

  const goNext = (override?: Step) => {
    const next = override ?? steps[steps.indexOf(step) + 1];
    if (next) setStep(next);
  };
  const goBack = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  };

  const getAge = () => {
    const y = parseInt(birthYear), m = parseInt(birthMonth), d = parseInt(birthDay);
    if (!y || !m || !d || y < 1900) return null;
    const dob = new Date(y, m - 1, d);
    let age = new Date().getFullYear() - dob.getFullYear();
    const md = new Date().getMonth() - dob.getMonth();
    if (md < 0 || (md === 0 && new Date().getDate() < dob.getDate())) age--;
    return age;
  };

  const handleAgeNext = () => {
    const age = getAge();
    if (age === null || age > 120) { setAgeError(t('onboarding.date.error_invalid')); return; }
    setAgeError('');
    // Age threshold comes from the active jurisdiction (AU=16, EU=16,
    // GB=13, US=13, ZW=13). Stage 2 will add parental consent for the
    // 13-15 / 16-17 grey zone — see PRODUCT-DESIGN.md §11.5.
    const minAge = getJurisdiction(jurisdictionId).minAge;
    if (age < minAge) { setStep('age_blocked'); return; }
    goNext();
  };

  const completeOnboarding = useCallback(async () => {
    if (!user) return;
    setSaving(true);
    try {
      // Resolve which course pack the user actually wants to learn. If they
      // came through the learn path they picked one explicitly on the
      // learn_target step. If they skipped or chose companion/travel/skip,
      // fall back to the legacy auto-pick (en→shona, sn→english) so they
      // still get a sensible default they can change in Profile later.
      const fallbackRuntimeCourseId = appLanguage === 'shona' ? 'language-english' : 'language-shona';
      const runtimeCourseId = targetCourseId || fallbackRuntimeCourseId;
      const packId = appLanguage === 'shona' ? 'english-shona' : 'shona-english';
      setActivePack({ id: packId, spokenLanguageId: appLanguage, learnedLanguageId: appLanguage === 'shona' ? 'english' : 'shona', isPremium: false });
      setSpeakerPack(appLanguage);
      setOwnedCourseIds([runtimeCourseId]);
      setStarterCourseId(runtimeCourseId);
      // CRITICAL: also set the active course. Without this, activeCourseId
      // stays at the SettingsContext default ('language-shona') and the Learn
      // tab falls back to ownedInCategory[0] — which "works" by accident
      // when the user picked the default but breaks for any other choice.
      setActiveCourseId(runtimeCourseId);
      setJurisdictionId(jurisdictionId);
      setRwenVoice(voiceKey);

      const age = getAge() ?? 0;
      const ageRange = age < 18 ? '13-17' : age < 25 ? '18-24' : age < 35 ? '25-34' : age < 45 ? '35-44' : '45+';

      // Prefixed form for the available_packs catalogue (FK uses 'course:' prefix).
      const courseId = `course:${runtimeCourseId}`;
      const minAge = getJurisdiction(jurisdictionId).minAge;

      await supabase.from('profiles').update({
        app_language: appLanguage, gender,
        // v3 fields (write alongside legacy)
        speaker_pack_id: appLanguage,
        active_course_ids: [courseId],
        jurisdiction_id: jurisdictionId,
        date_of_birth: `${birthYear}-${birthMonth.padStart(2,'0')}-${birthDay.padStart(2,'0')}`,
        age_range: ageRange, is_minor: age < minAge,
        primary_path: path, active_language_pack_id: packId,
        country_code: jurisdictionId === 'EU' ? null : jurisdictionId,
        is_eu_customer: jurisdictionId === 'EU',
        is_uk_customer: jurisdictionId === 'GB',
        ability_level: ability || null,
        learning_reasons: reasons.length ? reasons : null,
        time_commitment: timeCommit || null,
        learning_challenges: challenge ? [challenge] : null,
        personal_connection: connection || null,
        companion_type: companionType || null,
        companion_topics: compTopics.length ? compTopics : null,
        rwen_voice_key: voiceKey,
        onboarding_complete: true,
        updated_at: new Date().toISOString(),
      }).eq('id', user.id);

      await supabase.from('user_packs').upsert(
        { user_id: user.id, pack_id: packId, acquisition_type: 'free', is_active: true },
        { onConflict: 'user_id,pack_id' }
      );

      setOnboardingComplete(true);
      router.replace(path === 'companion' ? '/(tabs)/companion' : '/(tabs)');
    } catch (e) {
      console.error('Onboarding save error:', e);
      setSaving(false);
    }
  }, [user, appLanguage, jurisdictionId, gender, birthYear, birthMonth, birthDay, path, targetCourseId, ability, reasons, timeCommit, challenge, connection, companionType, compTopics, voiceKey]);

  // The language being learned, derived from the speaker selection.
  // English speaker → learning Shona. Shona speaker → learning English.
  // (When more language courses are added, this will be derived from the
  // explicitly chosen target course rather than this binary fallback.)
  const learnedLangKey = appLanguage === 'shona' ? 'english' : 'shona';
  const learnedLangName = t(`onboarding.languages.${learnedLangKey}.name`);

  const rwenPose =
    step === 'voice' || step === 'complete' ? 'victory' :
    step === 'path'                         ? 'arms_spread' :
    step === 'age'                          ? 'thinking' :
    step.startsWith('companion')            ? 'waving' :
    step.startsWith('travel')              ? 'whatshappening' : 'idle';

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <View style={styles.rwenArea}>
        <RwenImage pose={rwenPose} size={110} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">

        {step === 'language' && (
          <View style={styles.block}>
            <ProgressHeader current={1} total={total} title={t('onboarding.step_language.title')} sub={t('onboarding.step_language.sub')} />
            {LANGUAGE_IDS.map(id => <Card key={id} emoji={LANGUAGE_FLAGS[id]} label={t(`onboarding.languages.${id}.name`)} desc={t(`onboarding.languages.${id}.nativeName`)}
              selected={appLanguage === id}
              onPress={() => {
                // Save the speaker-pack id locally (writes to profiles in
                // completeOnboarding) AND immediately flip the i18n locale
                // so every subsequent onboarding step renders in the user's
                // chosen language.
                setAppLanguage(id);
                const iso = LANGUAGE_TO_ISO[id] as SupportedLanguage | undefined;
                if (iso) setI18nLanguage(iso);
                goNext();
              }} />)}
          </View>
        )}

        {step === 'jurisdiction' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_jurisdiction.title')} sub={t('onboarding.step_jurisdiction.sub')} />
            {JURISDICTION_IDS.map(id => <Card key={id} emoji={JURISDICTION_FLAGS[id]} label={t(`onboarding.jurisdictions.${id}`)}
              selected={jurisdictionId === id} onPress={() => { setJurisdictionIdState(id); goNext(); }} />)}
            <BackOnly onBack={goBack} />
          </View>
        )}

        {step === 'gender' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_gender.title')} sub={t('onboarding.step_gender.sub')} />
            {GENDER_IDS.map(id => <Card key={id} emoji={GENDER_EMOJIS[id]} label={t(`onboarding.genders.${id}`)} selected={gender === id} onPress={() => setGender(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!gender} />
          </View>
        )}

        {step === 'age' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_age.title')} sub={t('onboarding.step_age.sub', { minAge: getJurisdiction(jurisdictionId).minAge })} />
            <View style={styles.dateRow}>
              {/* Day */}
              <View style={styles.dateField}>
                <Text style={styles.dateLabel}>{t('onboarding.date.day')}</Text>
                <TextInput
                  ref={dayRef}
                  style={styles.dateInput}
                  placeholder={t('onboarding.date.day_placeholder')}
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  value={birthDay}
                  // Strip non-digits + auto-jump to month once 2 chars are typed
                  // (matches iOS DOB-keyboard behaviour). The single-digit case
                  // (e.g. day 7) still works — user types '7' then taps month.
                  onChangeText={(v) => {
                    const digits = v.replace(/[^0-9]/g, '').slice(0, 2);
                    setBirthDay(digits);
                    if (digits.length === 2) monthRef.current?.focus();
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                  returnKeyType="next"
                  onSubmitEditing={() => monthRef.current?.focus()}
                />
              </View>
              {/* Month */}
              <View style={styles.dateField}>
                <Text style={styles.dateLabel}>{t('onboarding.date.month')}</Text>
                <TextInput
                  ref={monthRef}
                  style={styles.dateInput}
                  placeholder={t('onboarding.date.month_placeholder')}
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  value={birthMonth}
                  onChangeText={(v) => {
                    const digits = v.replace(/[^0-9]/g, '').slice(0, 2);
                    setBirthMonth(digits);
                    if (digits.length === 2) yearRef.current?.focus();
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                  returnKeyType="next"
                  onSubmitEditing={() => yearRef.current?.focus()}
                />
              </View>
              {/* Year */}
              <View style={[styles.dateField, { flex: 2 }]}>
                <Text style={styles.dateLabel}>{t('onboarding.date.year')}</Text>
                <TextInput
                  ref={yearRef}
                  style={styles.dateInput}
                  placeholder={t('onboarding.date.year_placeholder')}
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  value={birthYear}
                  onChangeText={(v) => {
                    const digits = v.replace(/[^0-9]/g, '').slice(0, 4);
                    setBirthYear(digits);
                  }}
                  keyboardType="number-pad"
                  maxLength={4}
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    if (birthDay && birthMonth && birthYear.length === 4) handleAgeNext();
                  }}
                />
              </View>
            </View>
            {ageError ? <Text style={styles.error}>{ageError}</Text> : null}
            <Text style={styles.ageNote}>{t('onboarding.date.note')}</Text>
            <Nav onBack={goBack} onNext={handleAgeNext} disabled={!birthDay || !birthMonth || !birthYear} />
          </View>
        )}

        {step === 'age_blocked' && (
          <View style={styles.block}>
            <View style={styles.blockedCard}>
              <RwenImage pose="sad" size={100} />
              <Text style={styles.blockedTitle}>{t('onboarding.blocked.title')}</Text>
              <Text style={styles.blockedText}>
                {t('onboarding.blocked.body')}
              </Text>
              <View style={styles.blockedBox}>
                <Text style={styles.blockedBoxTitle}>{t('onboarding.blocked.family_plan_title')}</Text>
                <Text style={styles.blockedBoxText}>
                  {t('onboarding.blocked.family_plan_body')}
                </Text>
              </View>
              <Pressable style={styles.blockedBack} onPress={() => { setBirthDay(''); setBirthMonth(''); setBirthYear(''); setStep('age'); }}>
                <Text style={styles.blockedBackText}>{t('onboarding.blocked.reenter_dob')}</Text>
              </Pressable>
              <Pressable style={styles.blockedSignOut} onPress={() => { supabase.auth.signOut(); router.replace('/welcome'); }}>
                <Text style={styles.blockedSignOutText}>{t('onboarding.blocked.exit')}</Text>
              </Pressable>
            </View>
          </View>
        )}

        {step === 'path' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_path.title')} />
            {APP_PATH_IDS.map(id => (
              <Card key={id} emoji={APP_PATH_EMOJIS[id]} label={t(`onboarding.paths.${id}.title`)} desc={t(`onboarding.paths.${id}.desc`)}
                selected={path === id} disabled={!APP_PATH_AVAILABLE[id]}
                onPress={() => { if (!APP_PATH_AVAILABLE[id]) return; setPath(id); goNext(id === 'learn' ? 'learn_target' : id === 'companion' ? 'companion_type' : 'travel_destination'); }} />
            ))}

            {/* Skip — bypasses path-specific questions + voice step. The
                profile saves with primary_path null and default voice;
                user lands directly on home. They can pick a path or change
                voice from Profile any time. */}
            <Pressable style={styles.skipBtn} onPress={completeOnboarding} disabled={saving}>
              <Text style={styles.skipText}>{t('onboarding.paths.skip')}</Text>
            </Pressable>
            <BackOnly onBack={goBack} />
          </View>
        )}

        {/* What do you want to learn? — only shows for path === 'learn'. The
            course list is filtered by speaker pack. Skip is intentionally NOT
            here — the only Skip in onboarding lives on the path step (per
            user spec 2026-05-04). */}
        {step === 'learn_target' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total}
              title={t('onboarding.step_learn_target.title')}
              sub={t('onboarding.step_learn_target.sub')} />
            {Object.values(COURSES)
              .filter(c =>
                c.meta.type === 'language' &&
                (c.meta.availableForSpeakers ?? []).includes(appLanguage)
              )
              .map(c => (
                <Card
                  key={c.meta.id}
                  emoji={c.meta.emoji}
                  label={c.meta.displayName}
                  desc={c.meta.isComingSoon
                    ? t('onboarding.step_learn_target.coming_soon')
                    : t('onboarding.step_learn_target.available')}
                  selected={targetCourseId === c.meta.id}
                  onPress={() => { setTargetCourseId(c.meta.id); goNext(); }}
                />
              ))}
            {/* Back returns to path selection so the user can pick AI
                Friend or Travel instead. No Skip here — the only Skip
                in onboarding lives on the path step. */}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!targetCourseId} />
          </View>
        )}

        {step === 'learn_ability' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_learn_ability.title', { lang: learnedLangName })} />
            {ABILITY_IDS.map(id => <Card key={id} label={t(`onboarding.abilities.${id}.label`)} desc={t(`onboarding.abilities.${id}.desc`)} selected={ability === id} onPress={() => setAbility(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!ability} />
          </View>
        )}

        {step === 'learn_reasons' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_learn_reasons.title', { lang: learnedLangName })} sub={t('onboarding.step_learn_reasons.sub')} />
            <View style={styles.chips}>
              {LEARN_REASON_IDS.map(id => <Chip key={id} label={t(`onboarding.learn_reasons.${id}`)} selected={reasons.includes(id)}
                onPress={() => setReasons(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={reasons.length === 0} />
          </View>
        )}

        {step === 'learn_time' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_learn_time.title')} />
            {TIME_OPTION_IDS.map(id => <Card key={id} label={t(`onboarding.time_options.${id}.label`)} desc={t(`onboarding.time_options.${id}.desc`)} selected={timeCommit === id} onPress={() => setTimeCommit(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!timeCommit} />
          </View>
        )}

        {step === 'learn_challenge' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_learn_challenge.title')} sub={t('onboarding.step_learn_challenge.sub')} />
            {CHALLENGE_IDS.map(id => <Card key={id} label={t(`onboarding.challenges.${id}.label`)} desc={t(`onboarding.challenges.${id}.desc`)} selected={challenge === id} onPress={() => setChallenge(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!challenge} />
          </View>
        )}

        {step === 'learn_connection' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_learn_connection.title', { lang: learnedLangName })} sub={t('onboarding.step_learn_connection.sub')} />
            <TextInput style={styles.textarea}
              placeholder={t('onboarding.connection_placeholder')}
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={connection} onChangeText={setConnection} multiline numberOfLines={4} />
            <Nav onBack={goBack} onNext={() => goNext()} nextLabel={connection ? t('continue') : t('skip')} />
          </View>
        )}

        {step === 'companion_type' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_companion_type.title')} />
            {COMPANION_TYPE_IDS.map(id => <Card key={id} emoji={COMPANION_TYPE_EMOJIS[id]} label={t(`onboarding.companion_types.${id}.label`)} desc={t(`onboarding.companion_types.${id}.desc`)} selected={companionType === id} onPress={() => setCompanionType(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!companionType} />
          </View>
        )}

        {step === 'companion_topics' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_companion_topics.title')} sub={t('onboarding.step_companion_topics.sub')} />
            <View style={styles.chips}>
              {COMPANION_TOPIC_IDS.map(id => <Chip key={id} label={t(`onboarding.companion_topics.${id}`)} selected={compTopics.includes(id)}
                onPress={() => setCompTopics(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={compTopics.length === 0} />
          </View>
        )}

        {step === 'travel_destination' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_travel_destination.title')} />
            <View style={styles.chips}>
              {TRAVEL_DEST_IDS.map(id => <Chip key={id} label={`${TRAVEL_DEST_EMOJIS[id]} ${t(`onboarding.travel_dests.${id}`)}`} selected={travelDest === id} onPress={() => setTravelDest(id)} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!travelDest} />
          </View>
        )}

        {step === 'travel_when' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_travel_when.title')} />
            {TRAVEL_WHEN_IDS.map(id => <Card key={id} label={t(`onboarding.travel_when.${id}`)} selected={travelWhen === id} onPress={() => setTravelWhen(id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!travelWhen} />
          </View>
        )}

        {step === 'travel_purpose' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_travel_purpose.title')} sub={t('onboarding.step_travel_purpose.sub')} />
            <View style={styles.chips}>
              {TRAVEL_PURPOSE_IDS.map(id => <Chip key={id} label={t(`onboarding.travel_purposes.${id}`)} selected={travelPurposes.includes(id)}
                onPress={() => setTravelPurposes(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={travelPurposes.length === 0} />
          </View>
        )}

        {step === 'voice' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title={t('onboarding.step_voice.title')} sub={t('onboarding.step_voice.sub')} />
            {(Object.keys(RWEN_VOICES) as RwenVoiceKey[]).map((k) => (
              <Card key={k} emoji={k.startsWith('female') ? '👩' : '👨'}
                label={t(`profile.voices.${k}.name`, { ns: 'common' })}
                desc={t(`profile.voices.${k}.description`, { ns: 'common' })}
                selected={voiceKey === k} onPress={() => setVoiceKey(k)} />
            ))}
            <Nav onBack={goBack} onNext={() => goNext()} />
          </View>
        )}

        {step === 'complete' && (
          <View style={styles.block}>
            <View style={styles.completeCard}>
              <Text style={styles.completeEmoji}>🎉</Text>
              <Text style={styles.completeTitle}>{t('onboarding.complete.title')}</Text>
              <Text style={styles.completeText}>
                {path === 'companion'
                  ? t('onboarding.complete.text_companion')
                  : path === 'learn'
                  ? t('onboarding.complete.text_learn')
                  : t('onboarding.complete.text_travel')}
              </Text>
              <Pressable style={[styles.launchBtn, saving && { opacity: 0.6 }]} onPress={completeOnboarding} disabled={saving}>
                {saving
                  ? <ActivityIndicator color={Colors.white} />
                  : <Text style={styles.launchText}>{path === 'companion' ? t('onboarding.complete.launch_companion') : t('onboarding.complete.launch_default')}</Text>
                }
              </Pressable>
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  rwenArea: { alignItems: 'center', paddingTop: Spacing.xxl, paddingBottom: Spacing.sm },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xxl, gap: Spacing.lg },
  block: { gap: Spacing.md },
  skipBtn: { alignItems: 'center', paddingVertical: Spacing.md, marginTop: Spacing.sm },
  skipText: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm, fontWeight: FontWeight.medium, textDecorationLine: 'underline' },

  stepHeader: { gap: Spacing.sm, marginBottom: Spacing.xs },
  progressBg: { height: 4, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: BorderRadius.full },
  progressFill: { height: 4, backgroundColor: Colors.secondary, borderRadius: BorderRadius.full },
  stepCount: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.4)', textAlign: 'right' },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, lineHeight: 34 },
  sub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.5)', marginTop: -Spacing.xs },

  card: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.md,
    backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg,
    padding: Spacing.md, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.12)',
  },
  cardSelected: { borderColor: Colors.secondary, backgroundColor: 'rgba(74,144,217,0.2)' },
  cardDisabled: { opacity: 0.35 },
  cardEmoji: { fontSize: 30 },
  cardInfo: { flex: 1 },
  cardLabel: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.white },
  cardLabelSel: { color: '#93C5FD' },
  cardDesc: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.5)', marginTop: 2, lineHeight: 18 },
  cardCheck: { color: Colors.secondary, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chip: { paddingVertical: Spacing.sm, paddingHorizontal: Spacing.md, borderRadius: BorderRadius.full, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.06)' },
  chipSel: { borderColor: Colors.secondary, backgroundColor: 'rgba(74,144,217,0.2)' },
  chipText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', fontWeight: FontWeight.medium },
  chipTextSel: { color: '#93C5FD', fontWeight: FontWeight.bold },

  dateRow: { flexDirection: 'row', gap: Spacing.sm },
  dateField: { flex: 1, gap: 4 },
  dateLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)', fontWeight: FontWeight.bold, textTransform: 'uppercase' },
  dateInput: { backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', borderRadius: BorderRadius.md, padding: Spacing.md, fontSize: FontSize.lg, color: Colors.white, textAlign: 'center' },
  error: { color: '#FCA5A5', fontSize: FontSize.sm, lineHeight: 20 },
  ageNote: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.35)', lineHeight: 18 },

  textarea: { backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', borderRadius: BorderRadius.lg, padding: Spacing.md, fontSize: FontSize.md, color: Colors.white, minHeight: 100, textAlignVertical: 'top', lineHeight: 22 },

  nav: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.sm },
  navBack: { paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg, borderRadius: BorderRadius.lg, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  navBackText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md, fontWeight: FontWeight.medium },
  navNext: { flex: 1, backgroundColor: Colors.secondary, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  navNextDisabled: { opacity: 0.35 },
  navNextText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },

  completeCard: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.xl, padding: Spacing.xl, alignItems: 'center', gap: Spacing.lg },
  completeEmoji: { fontSize: 56 },
  completeTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, textAlign: 'center' },
  completeText: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 24 },
  launchBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, paddingHorizontal: Spacing.xxl, borderRadius: BorderRadius.full, width: '100%', alignItems: 'center' },
  launchText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  blockedCard: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.xl, padding: Spacing.xl, alignItems: 'center', gap: Spacing.lg, borderWidth: 1, borderColor: 'rgba(239,68,68,0.3)' },
  blockedTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, textAlign: 'center' },
  blockedText: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 24 },
  blockedBox: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg, padding: Spacing.lg, gap: Spacing.sm, width: '100%' },
  blockedBoxTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.xp },
  blockedBoxText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 22 },
  blockedBack: { paddingVertical: Spacing.sm },
  blockedBackText: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.sm },
  blockedSignOut: { backgroundColor: 'rgba(239,68,68,0.2)', paddingVertical: Spacing.sm, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full, borderWidth: 1, borderColor: 'rgba(239,68,68,0.4)' },
  blockedSignOutText: { color: '#FCA5A5', fontSize: FontSize.sm, fontWeight: FontWeight.medium },
});
