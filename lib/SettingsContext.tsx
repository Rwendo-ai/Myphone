import { createContext, useContext, useState, ReactNode } from 'react';
import { LanguagePack } from '../types/pack';
import { Language } from '../types/language';
import { PACKS, DEFAULT_PACK_ID, resolvePackLanguages } from '../data/packs';
import { Theme, THEMES, DEFAULT_THEME } from '../constants/themes';

export const RWEN_VOICES = {
  male_warm:    { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'George',  description: 'Warm storyteller' },
  male_energy:  { id: 'IKne3meq5aSn9XLyUdCD', name: 'Charlie', description: 'Energetic, confident' },
  female_warm:  { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica', description: 'Playful, bright, warm' },
  female_clear: { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Alice',   description: 'Clear, engaging educator' },
};

export type RwenVoiceKey = keyof typeof RWEN_VOICES;

interface Settings {
  activePack: LanguagePack;
  spokenLanguage: Language;
  learnedLanguage: Language;
  setActivePack: (pack: LanguagePack) => void;
  rwenVoice: RwenVoiceKey;
  setRwenVoice: (v: RwenVoiceKey) => void;
  theme: Theme;
  setThemeId: (id: string) => void;
  avatarUrl: string | null;
  setAvatarUrl: (url: string | null) => void;
}

const defaultPack      = PACKS.find((p) => p.id === DEFAULT_PACK_ID) ?? PACKS[0];
const defaultLanguages = resolvePackLanguages(defaultPack);

const SettingsContext = createContext<Settings>({
  activePack: defaultPack,
  spokenLanguage: defaultLanguages.spoken,
  learnedLanguage: defaultLanguages.learned,
  setActivePack: () => {},
  rwenVoice: 'male_warm' as RwenVoiceKey,
  setRwenVoice: () => {},
  theme: DEFAULT_THEME,
  setThemeId: () => {},
  avatarUrl: null,
  setAvatarUrl: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [activePack, setActivePack] = useState<LanguagePack>(defaultPack);
  const [rwenVoice,  setRwenVoice]  = useState<RwenVoiceKey>('male_warm');
  const [themeId,    setThemeId]    = useState<string>('ocean_blue');
  const [avatarUrl,  setAvatarUrl]  = useState<string | null>(null);

  const { spoken, learned } = resolvePackLanguages(activePack);
  const theme = THEMES[themeId] ?? DEFAULT_THEME;

  return (
    <SettingsContext.Provider value={{
      activePack,
      spokenLanguage: spoken,
      learnedLanguage: learned,
      setActivePack,
      rwenVoice,
      setRwenVoice,
      theme,
      setThemeId,
      avatarUrl,
      setAvatarUrl,
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
