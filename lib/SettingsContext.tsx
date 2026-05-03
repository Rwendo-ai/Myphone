import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { LanguagePack } from '../types/pack';
import { Language } from '../types/language';
import {
  SpeakerPack, SpeakerPackId,
  CoursePack, CoursePackId,
  JurisdictionPack, JurisdictionPackId,
} from '../types/packs';
import { PACKS, DEFAULT_PACK_ID, resolvePackLanguages } from '../data/packs';
import { SPEAKERS, getSpeaker, english as defaultSpeaker } from '../data/speakers';
import { COURSES, getCourse } from '../data/courses';
import { JURISDICTIONS, getJurisdiction, AU as defaultJurisdiction } from '../data/jurisdictions';
import { SubscriptionTier, EntitlementContext } from './entitlements';
import { Theme, THEMES, DEFAULT_THEME } from '../constants/themes';

/**
 * Voice options for the AI companion.
 *
 * v3 note: voice options are now curated per speaker pack
 * (see data/speakers/<id>/index.ts → `voices`). RWEN_VOICES below is the
 * legacy English-speaker default; runtime should prefer
 * `useSettings().speaker.voices` so a Shona speaker sees Shona-curated voices.
 * Kept here for one release while callers migrate.
 */
export const RWEN_VOICES = {
  male_warm:    { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'George',  description: 'Warm storyteller' },
  male_energy:  { id: 'IKne3meq5aSn9XLyUdCD', name: 'Charlie', description: 'Energetic, confident' },
  female_warm:  { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica', description: 'Playful, bright, warm' },
  female_clear: { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Alice',   description: 'Clear, engaging educator' },
};

export type RwenVoiceKey = keyof typeof RWEN_VOICES;

interface Settings {
  // ── v3 three-pack composition (preferred) ─────────────────────────────────
  speaker: SpeakerPack;
  courses: CoursePack[];           // all the courses the user has access to
  jurisdiction: JurisdictionPack;
  activeCourseId: CoursePackId | null;
  setSpeakerPack: (id: SpeakerPackId) => void;
  setActiveCourseId: (id: CoursePackId | null) => void;
  setJurisdictionId: (id: JurisdictionPackId) => void;

  // ── entitlements (Phase E) ────────────────────────────────────────────────
  tier: SubscriptionTier;
  setTier: (t: SubscriptionTier) => void;
  ownedCourseIds: CoursePackId[];
  setOwnedCourseIds: (ids: CoursePackId[]) => void;
  starterCourseId: CoursePackId | null;
  setStarterCourseId: (id: CoursePackId | null) => void;
  /** Cached EntitlementContext for entitlements.canAccess* helpers */
  entitlementContext: EntitlementContext;

  // ── v2 legacy surface (kept for one release; derived from v3 fields) ─────
  activePack: LanguagePack;
  spokenLanguage: Language;
  learnedLanguage: Language;
  setActivePack: (pack: LanguagePack) => void;

  // ── orthogonal user preferences ───────────────────────────────────────────
  rwenVoice: RwenVoiceKey;
  setRwenVoice: (v: RwenVoiceKey) => void;
  theme: Theme;
  setThemeId: (id: string) => void;
  avatarUrl: string | null;
  setAvatarUrl: (url: string | null) => void;

  // ── active companion (chat persona) ──────────────────────────────────────
  /** Preset ID of the currently active companion. null = use Rwen-as-default. */
  activeCompanionPresetId: string | null;
  /** Set the active preset locally. Use after the DB has been updated to reflect
   *  a switch — e.g. from the Companions management tab. */
  setActiveCompanionPresetId: (id: string | null) => void;
}

const defaultLegacyPack = PACKS.find((p) => p.id === DEFAULT_PACK_ID) ?? PACKS[0];
const defaultLegacyLanguages = resolvePackLanguages(defaultLegacyPack);

// Derived helper — given a legacy pair-pack ID, return the v3 course ID.
function legacyPackToCourseId(packId: string): CoursePackId | null {
  if (packId === 'shona-english')  return 'language-shona';
  if (packId === 'english-shona')  return 'language-english';
  return null;
}

// Derived helper — given a legacy pair-pack ID, return the v3 speaker ID.
function legacyPackToSpeakerId(packId: string): SpeakerPackId {
  if (packId === 'shona-english')  return 'english'; // English speaker learning Shona
  if (packId === 'english-shona')  return 'shona';   // Shona speaker learning English
  return 'english';
}

const SettingsContext = createContext<Settings>({
  speaker: defaultSpeaker,
  courses: [COURSES['language-shona']],
  jurisdiction: defaultJurisdiction,
  activeCourseId: 'language-shona',
  setSpeakerPack: () => {},
  setActiveCourseId: () => {},
  setJurisdictionId: () => {},

  tier: 'free',
  setTier: () => {},
  ownedCourseIds: [],
  setOwnedCourseIds: () => {},
  starterCourseId: 'language-shona',
  setStarterCourseId: () => {},
  entitlementContext: { tier: 'free', ownedCourseIds: [], starterCourseId: 'language-shona' },

  activePack: defaultLegacyPack,
  spokenLanguage: defaultLegacyLanguages.spoken,
  learnedLanguage: defaultLegacyLanguages.learned,
  setActivePack: () => {},

  rwenVoice: 'male_warm' as RwenVoiceKey,
  setRwenVoice: () => {},
  theme: DEFAULT_THEME,
  setThemeId: () => {},
  avatarUrl: null,
  setAvatarUrl: () => {},

  activeCompanionPresetId: null,
  setActiveCompanionPresetId: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  // v3 state
  const [speakerId,        setSpeakerId]        = useState<SpeakerPackId>('english');
  const [activeCourseId,   setActiveCourseId]   = useState<CoursePackId | null>('language-shona');
  const [jurisdictionId,   setJurisdictionId]   = useState<JurisdictionPackId>('AU');

  // entitlements
  const [tier,             setTier]             = useState<SubscriptionTier>('free');
  const [ownedCourseIds,   setOwnedCourseIds]   = useState<CoursePackId[]>(['language-shona']);
  const [starterCourseId,  setStarterCourseId]  = useState<CoursePackId | null>('language-shona');

  // v2 legacy state — ProfileLoader writes both old + new fields during migration
  const [activePack, setActivePack] = useState<LanguagePack>(defaultLegacyPack);

  // orthogonal
  const [rwenVoice,  setRwenVoice]  = useState<RwenVoiceKey>('male_warm');
  const [themeId,    setThemeId]    = useState<string>('ocean_blue');
  const [avatarUrl,  setAvatarUrl]  = useState<string | null>(null);

  // active companion (chat persona)
  const [activeCompanionPresetId, setActiveCompanionPresetId] = useState<string | null>(null);

  // ── derive v3 packs from IDs ──────────────────────────────────────────────
  const speaker      = SPEAKERS[speakerId] ?? defaultSpeaker;
  const jurisdiction = JURISDICTIONS[jurisdictionId] ?? defaultJurisdiction;
  // For v1, the user implicitly has access to the courses available_for_speakers includes their speaker.
  // Phase E + RevenueCat will key this off real entitlements (user_packs + subscription tier).
  const courses = useMemo(
    () => Object.values(COURSES).filter(c => c.meta.availableForSpeakers.includes(speakerId)),
    [speakerId],
  );

  // ── entitlement context for canAccess* helpers ────────────────────────────
  const entitlementContext: EntitlementContext = useMemo(
    () => ({ tier, ownedCourseIds, starterCourseId }),
    [tier, ownedCourseIds, starterCourseId],
  );

  // ── derive v2 legacy fields from v3 ───────────────────────────────────────
  const { spoken, learned } = useMemo(() => {
    // Prefer the legacy activePack if explicitly set; otherwise derive from speaker + course
    const legacy = resolvePackLanguages(activePack);
    return legacy;
  }, [activePack]);

  const theme = THEMES[themeId] ?? DEFAULT_THEME;

  // ── setters that keep both worlds in sync ────────────────────────────────
  const setSpeakerPack = (id: SpeakerPackId) => {
    setSpeakerId(id);
    // also update legacy pack to keep derived fields consistent
    const legacyId = id === 'shona' ? 'english-shona' : 'shona-english';
    const lp = PACKS.find(p => p.id === legacyId);
    if (lp) setActivePack(lp);
  };

  const setActivePackProxied = (pack: LanguagePack) => {
    setActivePack(pack);
    // also update v3 fields from the legacy ID
    const courseId = legacyPackToCourseId(pack.id);
    const speakerForLegacy = legacyPackToSpeakerId(pack.id);
    if (courseId) setActiveCourseId(courseId);
    setSpeakerId(speakerForLegacy);
  };

  return (
    <SettingsContext.Provider value={{
      // v3
      speaker,
      courses,
      jurisdiction,
      activeCourseId,
      setSpeakerPack,
      setActiveCourseId,
      setJurisdictionId,
      // entitlements
      tier,
      setTier,
      ownedCourseIds,
      setOwnedCourseIds,
      starterCourseId,
      setStarterCourseId,
      entitlementContext,
      // v2 legacy
      activePack,
      spokenLanguage: spoken,
      learnedLanguage: learned,
      setActivePack: setActivePackProxied,
      // orthogonal
      rwenVoice,
      setRwenVoice,
      theme,
      setThemeId,
      avatarUrl,
      setAvatarUrl,
      // active companion
      activeCompanionPresetId,
      setActiveCompanionPresetId,
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
