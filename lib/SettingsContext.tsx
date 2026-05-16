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
import { getLanguage } from '../data/languages';
import { JURISDICTIONS, getJurisdiction, AU as defaultJurisdiction } from '../data/jurisdictions';
import { SubscriptionTier, EntitlementContext, tierFromEntitlements } from './entitlements';
import { useEntitlements } from '../hooks/useEntitlements';
import { useAuth } from './AuthContext';
import { Theme, THEMES, DEFAULT_THEME } from '../constants/themes';

/**
 * Voice options for the AI companion.
 *
 * v3 note: voice options are now curated per speaker pack
 * (see data/speakers/<id>/index.ts → `voices`). RWEN_VOICES below is the
 * legacy English-speaker default; runtime should prefer
 * `useSettings().speaker.voices` so a Shona speaker sees Shona-curated voices.
 * Kept here for one release while callers migrate.
 *
 * @deprecated New callers should import from `lib/voices.ts` (VOICE_LIBRARY).
 * This 4-slot object is preserved for the legacy `rwenVoice` setter pattern
 * (slot keys like `'male_warm'`) used by `lib/voice.ts:speakText`. The
 * companion customization layer (lib/companion-customization.ts) bypasses
 * this and stores raw ElevenLabs voice IDs from VOICE_LIBRARY directly.
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
  /**
   * Thumbnail of the active companion's customised face (~10 KB), or null
   * if the companion has no archetype face attached. The tab-bar center
   * button reads this synchronously to avoid Supabase round-trips on
   * every tab navigation. Written by the chat tab whenever it resolves
   * the active companion.
   */
  activeCompanionThumbUrl: string | null;
  setActiveCompanionThumbUrl: (url: string | null) => void;

  // ── voice mode engine ────────────────────────────────────────────────────
  /**
   * `conv_ai` = full-duplex ElevenAgents over WebSocket (default).
   * `turn_based` = listen → transcribe → reply → speak loop. Fallback when the
   * WebSocket path fails or for users who prefer the explicit push-to-talk.
   */
  voiceEngine: 'conv_ai' | 'turn_based';
  setVoiceEngine: (e: 'conv_ai' | 'turn_based') => void;
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
  entitlementContext: { tier: 'free', starterCourseId: 'language-shona' },

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
  activeCompanionThumbUrl: null,
  setActiveCompanionThumbUrl: () => {},

  voiceEngine: 'conv_ai',
  setVoiceEngine: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  // v3 state
  const [speakerId,        setSpeakerId]        = useState<SpeakerPackId>('english');
  const [activeCourseId,   setActiveCourseId]   = useState<CoursePackId | null>('language-shona');
  const [jurisdictionId,   setJurisdictionId]   = useState<JurisdictionPackId>('AU');

  // entitlements — `tier` is DERIVED from RevenueCat (live, reactive).
  // Higher tiers include lower tiers; tierFromEntitlements picks the
  // highest active one. setTier is a no-op stub kept for legacy callers
  // — purchases route through the RC SDK.
  const { entitlements: rcEntitlements } = useEntitlements();
  const { user } = useAuth();
  const activeEntitlementIds = useMemo(
    () => rcEntitlements.filter((e) => e.isActive).map((e) => e.identifier),
    [rcEntitlements],
  );
  const tier: SubscriptionTier = useMemo(
    () => tierFromEntitlements(activeEntitlementIds),
    [activeEntitlementIds],
  );
  const setTier = () => { /* no-op — derive from RC */ };
  const [starterCourseId,  setStarterCourseId]  = useState<CoursePackId | null>('language-shona');

  // ownedCourseIds is derived: any paid tier = every course "owned"; Free =
  // only the starter. Kept on the Settings interface for backwards compat
  // with callers that still call `ownedCourseIds.includes(id)`.
  const ownedCourseIds: CoursePackId[] = useMemo(() => {
    if (tier !== 'free') return Object.keys(COURSES) as CoursePackId[];
    return starterCourseId ? [starterCourseId] : [];
  }, [tier, starterCourseId]);
  const setOwnedCourseIds = () => { /* no-op — derived from tier + starter */ };

  // v2 legacy state — ProfileLoader writes both old + new fields during migration
  const [activePack, setActivePack] = useState<LanguagePack>(defaultLegacyPack);

  // orthogonal
  const [rwenVoice,  setRwenVoice]  = useState<RwenVoiceKey>('male_warm');
  const [themeId,    setThemeId]    = useState<string>('ocean_blue');
  const [avatarUrl,  setAvatarUrl]  = useState<string | null>(null);

  // active companion (chat persona)
  const [activeCompanionPresetId, setActiveCompanionPresetId] = useState<string | null>(null);
  const [activeCompanionThumbUrl, setActiveCompanionThumbUrl] = useState<string | null>(null);

  // voice mode engine — Conv AI is the new default; turn-based is a fallback.
  const [voiceEngine, setVoiceEngine] = useState<'conv_ai' | 'turn_based'>('conv_ai');

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
  // Live RC entitlements + the user's id (for owner-list bypass) flow into
  // every entitlement check.
  const entitlementContext: EntitlementContext = useMemo(
    () => ({
      tier,
      starterCourseId,
      userId: user?.id ?? null,
      entitlements: activeEntitlementIds,
    }),
    [tier, starterCourseId, user?.id, activeEntitlementIds],
  );

  // ── derive v2 legacy fields from v3 ───────────────────────────────────────
  // spoken = the speaker pack's language (Profile → App Language).
  // learned = the active course's target language (Learn tab → active course pill).
  // Both flow from v3 state directly so the Learn tab header reflects the
  // user's actual selection regardless of legacy activePack state.
  const { spoken, learned } = useMemo(() => {
    const spokenLang = getLanguage(speakerId);
    const activeCourse = activeCourseId ? COURSES[activeCourseId] : null;
    const targetLangId = activeCourse?.meta.targetLanguageId;
    const learnedLang = targetLangId ? getLanguage(targetLangId) : spokenLang;
    return { spoken: spokenLang, learned: learnedLang };
  }, [speakerId, activeCourseId]);

  const theme = THEMES[themeId] ?? DEFAULT_THEME;

  // ── setters that keep both worlds in sync ────────────────────────────────
  const setSpeakerPack = (id: SpeakerPackId) => {
    setSpeakerId(id);
    // If the active course is no longer available to this speaker (e.g.
    // English speaker with active=language-shona switches to French; French
    // speakers can't see language-shona), promote them to the first language
    // course that IS available. Without this the Learn tab would show no
    // active course pill.
    if (activeCourseId) {
      const current = COURSES[activeCourseId];
      if (current && !current.meta.availableForSpeakers.includes(id)) {
        const firstAvailable = Object.values(COURSES).find(
          (c) => c.meta.type === 'language' && c.meta.availableForSpeakers.includes(id),
        );
        if (firstAvailable) setActiveCourseId(firstAvailable.meta.id);
      }
    }
    // also update legacy pack so anything still reading activePack sees
    // a sensible value (only english↔shona is mapped; other speakers fall
    // back to shona-english which is harmless since v3 derives directly).
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
      activeCompanionThumbUrl,
      setActiveCompanionThumbUrl,
      // voice engine
      voiceEngine,
      setVoiceEngine,
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
