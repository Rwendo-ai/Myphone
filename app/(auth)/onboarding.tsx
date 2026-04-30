import { View, Text, StyleSheet, Pressable, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState, useCallback } from 'react';
import RwenImage from '../../components/rwen/RwenImage';
import { useAuth } from '../../lib/AuthContext';
import { useSettings, RWEN_VOICES, RwenVoiceKey } from '../../lib/SettingsContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

type AppPath = 'learn' | 'companion' | 'travel';
type Step = 'language'|'gender'|'age'|'age_blocked'|'path'|'learn_ability'|'learn_reasons'|'learn_time'|'learn_challenge'|'learn_connection'|'companion_type'|'companion_topics'|'travel_destination'|'travel_when'|'travel_purpose'|'voice'|'complete';

const LEARN_STEPS: Step[]     = ['language','gender','age','path','learn_ability','learn_reasons','learn_time','learn_challenge','learn_connection','voice','complete'];
const COMPANION_STEPS: Step[] = ['language','gender','age','path','companion_type','companion_topics','voice','complete'];
const TRAVEL_STEPS: Step[]    = ['language','gender','age','path','travel_destination','travel_when','travel_purpose','voice','complete'];
const BASE_STEPS: Step[]      = ['language','gender','age','path'];

const LANGUAGES = [
  { id: 'english', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { id: 'shona',   name: 'Shona',   nativeName: 'ChiShona', flag: '🇿🇼' },
];
const GENDERS = [
  { id: 'male',             label: 'Male',             emoji: '👨' },
  { id: 'female',           label: 'Female',           emoji: '👩' },
  { id: 'nonbinary',        label: 'Non-binary',       emoji: '🧑' },
  { id: 'prefer_not_to_say',label: 'Prefer not to say',emoji: '🤐' },
];
const APP_PATHS = [
  { id: 'learn'     as AppPath, emoji: '📚', title: 'Learn a Language',   desc: 'Structured lessons, XP, streaks — reach A2 fluency with Rwen as your guide.', available: true },
  { id: 'companion' as AppPath, emoji: '🦎', title: 'Create an AI Friend', desc: 'Rwen becomes your personal companion — talk, laugh, and grow together.', available: true },
  { id: 'travel'    as AppPath, emoji: '✈️', title: 'Travel Mode',         desc: 'Phrasebook, cultural guide, and Zimbabwe navigation.', available: false },
];
const ABILITIES = [
  { id: 'beginner',       label: 'Complete beginner',  desc: 'I know zero words' },
  { id: 'basics',         label: 'I know a few words', desc: 'Hello, goodbye, maybe a bit more' },
  { id: 'conversational', label: 'Some knowledge',     desc: 'I can have simple exchanges' },
  { id: 'intermediate',   label: 'Intermediate',       desc: 'I can hold a conversation but make mistakes' },
];
const LEARN_REASONS = [
  { id: 'family',   label: 'Connect with family or partner' },
  { id: 'travel',   label: 'Visiting Zimbabwe / travelling' },
  { id: 'culture',  label: 'Cultural interest or heritage' },
  { id: 'work',     label: 'Work or business' },
  { id: 'study',    label: 'Academic study' },
  { id: 'fun',      label: 'Fun and personal challenge' },
  { id: 'heritage', label: 'Grew up with it but want to improve' },
];
const TIME_OPTIONS = [
  { id: '5min',  label: '5 minutes a day',   desc: 'Quick learner' },
  { id: '10min', label: '10 minutes a day',  desc: 'Steady pace' },
  { id: '20min', label: '20 minutes a day',  desc: 'Serious student' },
  { id: '30min', label: '30+ minutes a day', desc: 'Fully committed' },
];
const CHALLENGES = [
  { id: 'pronunciation', label: 'Pronunciation', desc: "Can't make the sounds" },
  { id: 'grammar',       label: 'Grammar',       desc: 'The rules confuse me' },
  { id: 'vocabulary',    label: 'Vocabulary',    desc: 'I forget words quickly' },
  { id: 'confidence',    label: 'Confidence',    desc: "I'm scared to speak" },
  { id: 'consistency',   label: 'Consistency',   desc: 'I always give up' },
];
const COMPANION_TYPES = [
  { id: 'friend',  label: 'A friend',          desc: 'Someone to talk to and share my day', emoji: '🤝' },
  { id: 'support', label: 'Emotional support', desc: 'A patient listener for hard days',    emoji: '💙' },
  { id: 'study',   label: 'Study buddy',       desc: 'Keep me accountable and learning',    emoji: '📖' },
  { id: 'work',    label: 'Work support',      desc: 'Think through professional challenges',emoji: '💼' },
];
const COMPANION_TOPICS = [
  { id: 'daily_life', label: 'Daily life & what happened today' },
  { id: 'goals',      label: 'Goals and ambitions' },
  { id: 'humour',     label: 'Things that made me laugh' },
  { id: 'culture',    label: 'Music, movies, culture' },
  { id: 'thoughts',   label: 'Thoughts and opinions' },
  { id: 'language',   label: 'Language practice' },
  { id: 'everything', label: 'Everything — no preference' },
];
const TRAVEL_DESTS = [
  { id: 'harare',    label: 'Harare',              emoji: '🏙️' },
  { id: 'victoria',  label: 'Victoria Falls',      emoji: '🌊' },
  { id: 'bulawayo',  label: 'Bulawayo',            emoji: '🏛️' },
  { id: 'great_zim', label: 'Great Zimbabwe',      emoji: '🗿' },
  { id: 'hwange',    label: 'Hwange National Park',emoji: '🦁' },
  { id: 'multiple',  label: 'Multiple places',     emoji: '🗺️' },
];
const TRAVEL_WHEN = [
  { id: '1month',   label: 'Within 1 month' },
  { id: '3months',  label: '1–3 months' },
  { id: '6months',  label: '3–6 months' },
  { id: 'planning', label: '6+ months / still planning' },
];
const TRAVEL_PURPOSES = [
  { id: 'tourism',  label: 'Tourism & sightseeing' },
  { id: 'family',   label: 'Family visit' },
  { id: 'business', label: 'Business' },
  { id: 'safari',   label: 'Safari & wildlife' },
  { id: 'volunteer',label: 'Volunteering' },
  { id: 'study',    label: 'Study or research' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressHeader({ current, total, title, sub }: { current: number; total: number; title: string; sub?: string }) {
  return (
    <View style={styles.stepHeader}>
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: `${(current / total) * 100}%` }]} />
      </View>
      <Text style={styles.stepCount}>{current} of {total}</Text>
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

function Nav({ onBack, onNext, nextLabel = 'Continue →', disabled }: {
  onBack?: () => void; onNext: () => void; nextLabel?: string; disabled?: boolean;
}) {
  return (
    <View style={styles.nav}>
      {onBack && <Pressable style={styles.navBack} onPress={onBack}><Text style={styles.navBackText}>← Back</Text></Pressable>}
      <Pressable style={[styles.navNext, disabled && styles.navNextDisabled, !onBack && { flex: 1 }]} onPress={onNext} disabled={disabled}>
        <Text style={styles.navNextText}>{nextLabel}</Text>
      </Pressable>
    </View>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function OnboardingScreen() {
  const { user, setOnboardingComplete } = useAuth();
  const { setActivePack, setRwenVoice } = useSettings();

  const [step, setStep]     = useState<Step>('language');
  const [saving, setSaving] = useState(false);

  const [appLanguage,     setAppLanguage]     = useState('');
  const [gender,          setGender]          = useState('');
  const [birthDay,        setBirthDay]        = useState('');
  const [birthMonth,      setBirthMonth]      = useState('');
  const [birthYear,       setBirthYear]       = useState('');
  const [ageError,        setAgeError]        = useState('');
  const [path,            setPath]            = useState<AppPath | null>(null);
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
    if (age === null || age > 120) { setAgeError('Please enter a valid date of birth.'); return; }
    setAgeError('');
    // Stage 1: 18+ required. Stage 2 will add parental consent for 13-17 (AU: 16+).
    if (age < 18) { setStep('age_blocked'); return; }
    goNext();
  };

  const completeOnboarding = useCallback(async () => {
    if (!user) return;
    setSaving(true);
    try {
      const packId = appLanguage === 'shona' ? 'english-shona' : 'shona-english';
      setActivePack({ id: packId, spokenLanguageId: appLanguage, learnedLanguageId: appLanguage === 'shona' ? 'english' : 'shona', isPremium: false });
      setRwenVoice(voiceKey);

      const age = getAge() ?? 0;
      const ageRange = age < 18 ? '13-17' : age < 25 ? '18-24' : age < 35 ? '25-34' : age < 45 ? '35-44' : '45+';

      await supabase.from('profiles').update({
        app_language: appLanguage, gender,
        date_of_birth: `${birthYear}-${birthMonth.padStart(2,'0')}-${birthDay.padStart(2,'0')}`,
        age_range: ageRange, is_minor: age < 18,
        primary_path: path, active_language_pack_id: packId,
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
  }, [user, appLanguage, gender, birthYear, birthMonth, birthDay, path, ability, reasons, timeCommit, challenge, connection, companionType, compTopics, voiceKey]);

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
            <ProgressHeader current={1} total={total} title="What language do you speak?" sub="This sets your app language" />
            {LANGUAGES.map(l => <Card key={l.id} emoji={l.flag} label={l.name} desc={l.nativeName}
              selected={appLanguage === l.id} onPress={() => { setAppLanguage(l.id); goNext(); }} />)}
          </View>
        )}

        {step === 'gender' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="How do you identify?" sub="Personalises Rwen's responses" />
            {GENDERS.map(g => <Card key={g.id} emoji={g.emoji} label={g.label} selected={gender === g.id} onPress={() => setGender(g.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!gender} />
          </View>
        )}

        {step === 'age' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="When were you born?" sub="You must be 13 or older to use Rwendo" />
            <View style={styles.dateRow}>
              {[{v:birthDay,s:setBirthDay,p:'DD',l:'Day',m:2},{v:birthMonth,s:setBirthMonth,p:'MM',l:'Month',m:2},{v:birthYear,s:setBirthYear,p:'YYYY',l:'Year',m:4,flex:2}].map((f, i) => (
                <View key={i} style={[styles.dateField, f.flex ? { flex: f.flex } : {}]}>
                  <Text style={styles.dateLabel}>{f.l}</Text>
                  <TextInput style={styles.dateInput} placeholder={f.p} placeholderTextColor="rgba(255,255,255,0.3)"
                    value={f.v} onChangeText={f.s} keyboardType="numeric" maxLength={f.m} />
                </View>
              ))}
            </View>
            {ageError ? <Text style={styles.error}>{ageError}</Text> : null}
            <Text style={styles.ageNote}>Users under 13 cannot access Rwendo. Users 13–17 have some features restricted.</Text>
            <Nav onBack={goBack} onNext={handleAgeNext} disabled={!birthDay || !birthMonth || !birthYear} />
          </View>
        )}

        {step === 'age_blocked' && (
          <View style={styles.block}>
            <View style={styles.blockedCard}>
              <RwenImage pose="sad" size={100} />
              <Text style={styles.blockedTitle}>You need to be 18+</Text>
              <Text style={styles.blockedText}>
                Rwendo currently requires users to be 18 or older to access all features — including the AI companion.
              </Text>
              <View style={styles.blockedBox}>
                <Text style={styles.blockedBoxTitle}>📋 Family Plan — Coming Soon</Text>
                <Text style={styles.blockedBoxText}>
                  We're building a Family Plan that allows users aged 13–17 (or 16+ in Australia) to access Rwendo with parental consent.{'\n\n'}
                  Here's how it will work:{'\n'}
                  • Parent downloads Rwendo{'\n'}
                  • Parent completes identity verification{'\n'}
                  • Parent adds your email and generates a code{'\n'}
                  • You enter the code to access your account{'\n'}
                  • Parent can review your activity at any time
                </Text>
              </View>
              <Pressable style={styles.blockedBack} onPress={() => { setBirthDay(''); setBirthMonth(''); setBirthYear(''); setStep('age'); }}>
                <Text style={styles.blockedBackText}>← Re-enter date of birth</Text>
              </Pressable>
              <Pressable style={styles.blockedSignOut} onPress={() => { supabase.auth.signOut(); router.replace('/welcome'); }}>
                <Text style={styles.blockedSignOutText}>Exit Rwendo</Text>
              </Pressable>
            </View>
          </View>
        )}

        {step === 'path' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="What brings you to Rwendo?" />
            {APP_PATHS.map(p => <Card key={p.id} emoji={p.emoji} label={p.title} desc={p.desc}
              selected={path === p.id} disabled={!p.available}
              onPress={() => { if (!p.available) return; setPath(p.id); goNext(p.id === 'learn' ? 'learn_ability' : p.id === 'companion' ? 'companion_type' : 'travel_destination'); }} />)}
          </View>
        )}

        {step === 'learn_ability' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="How much Shona do you know?" />
            {ABILITIES.map(a => <Card key={a.id} label={a.label} desc={a.desc} selected={ability === a.id} onPress={() => setAbility(a.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!ability} />
          </View>
        )}

        {step === 'learn_reasons' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="Why do you want to learn Shona?" sub="Select all that apply" />
            <View style={styles.chips}>
              {LEARN_REASONS.map(r => <Chip key={r.id} label={r.label} selected={reasons.includes(r.id)}
                onPress={() => setReasons(p => p.includes(r.id) ? p.filter(x => x !== r.id) : [...p, r.id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={reasons.length === 0} />
          </View>
        )}

        {step === 'learn_time' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="How much time can you give each day?" />
            {TIME_OPTIONS.map(t => <Card key={t.id} label={t.label} desc={t.desc} selected={timeCommit === t.id} onPress={() => setTimeCommit(t.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!timeCommit} />
          </View>
        )}

        {step === 'learn_challenge' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="What worries you most?" sub="Rwen will focus here" />
            {CHALLENGES.map(c => <Card key={c.id} label={c.label} desc={c.desc} selected={challenge === c.id} onPress={() => setChallenge(c.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!challenge} />
          </View>
        )}

        {step === 'learn_connection' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="Is there someone specific you want to speak Shona with?" sub="Optional — makes Rwen's support much more personal" />
            <TextInput style={styles.textarea}
              placeholder={'e.g. "My grandmother in Harare"\n"My partner\'s family"\n\nLeave blank to skip.'}
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={connection} onChangeText={setConnection} multiline numberOfLines={4} />
            <Nav onBack={goBack} onNext={() => goNext()} nextLabel={connection ? 'Continue →' : 'Skip →'} />
          </View>
        )}

        {step === 'companion_type' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="What kind of companion do you need?" />
            {COMPANION_TYPES.map(c => <Card key={c.id} emoji={c.emoji} label={c.label} desc={c.desc} selected={companionType === c.id} onPress={() => setCompanionType(c.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!companionType} />
          </View>
        )}

        {step === 'companion_topics' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="What do you want to talk about?" sub="Select all that apply" />
            <View style={styles.chips}>
              {COMPANION_TOPICS.map(t => <Chip key={t.id} label={t.label} selected={compTopics.includes(t.id)}
                onPress={() => setCompTopics(p => p.includes(t.id) ? p.filter(x => x !== t.id) : [...p, t.id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={compTopics.length === 0} />
          </View>
        )}

        {step === 'travel_destination' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="Where in Zimbabwe are you heading?" />
            <View style={styles.chips}>
              {TRAVEL_DESTS.map(d => <Chip key={d.id} label={`${d.emoji} ${d.label}`} selected={travelDest === d.id} onPress={() => setTravelDest(d.id)} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!travelDest} />
          </View>
        )}

        {step === 'travel_when' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="When are you travelling?" />
            {TRAVEL_WHEN.map(w => <Card key={w.id} label={w.label} selected={travelWhen === w.id} onPress={() => setTravelWhen(w.id)} />)}
            <Nav onBack={goBack} onNext={() => goNext()} disabled={!travelWhen} />
          </View>
        )}

        {step === 'travel_purpose' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="Purpose of your trip?" sub="Select all that apply" />
            <View style={styles.chips}>
              {TRAVEL_PURPOSES.map(p => <Chip key={p.id} label={p.label} selected={travelPurposes.includes(p.id)}
                onPress={() => setTravelPurposes(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} />)}
            </View>
            <Nav onBack={goBack} onNext={() => goNext()} disabled={travelPurposes.length === 0} />
          </View>
        )}

        {step === 'voice' && (
          <View style={styles.block}>
            <ProgressHeader current={stepIndex} total={total} title="Choose Rwen's voice" sub="Change anytime in Profile" />
            {(Object.entries(RWEN_VOICES) as [RwenVoiceKey, typeof RWEN_VOICES[RwenVoiceKey]][]).map(([k, v]) => (
              <Card key={k} emoji={k.startsWith('female') ? '👩' : '👨'} label={v.name} desc={v.description}
                selected={voiceKey === k} onPress={() => setVoiceKey(k)} />
            ))}
            <Nav onBack={goBack} onNext={() => goNext()} />
          </View>
        )}

        {step === 'complete' && (
          <View style={styles.block}>
            <View style={styles.completeCard}>
              <Text style={styles.completeEmoji}>🎉</Text>
              <Text style={styles.completeTitle}>You're all set!</Text>
              <Text style={styles.completeText}>
                {path === 'companion'
                  ? "Rwen is ready to meet you. Your journey together starts now."
                  : path === 'learn'
                  ? "Your Shona journey begins. Rwen will be with you every step."
                  : "Your Zimbabwe adventure starts here. Rwen is ready."}
              </Text>
              <Pressable style={[styles.launchBtn, saving && { opacity: 0.6 }]} onPress={completeOnboarding} disabled={saving}>
                {saving
                  ? <ActivityIndicator color={Colors.white} />
                  : <Text style={styles.launchText}>{path === 'companion' ? "Meet Rwen →" : "Start Learning →"}</Text>
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
