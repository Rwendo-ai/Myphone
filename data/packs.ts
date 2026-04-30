import { LanguagePack } from '../types/pack';
import { Language } from '../types/language';
import { getLanguage } from './languages/index';

export type { LanguagePack };

export const PACKS: LanguagePack[] = [
  {
    id: 'shona-english',
    spokenLanguageId: 'english',
    learnedLanguageId: 'shona',
    isPremium: false,
  },
  {
    id: 'english-shona',
    spokenLanguageId: 'shona',
    learnedLanguageId: 'english',
    isPremium: false,
  },
];

export const DEFAULT_PACK_ID = 'shona-english';

export function getPackById(id: string): LanguagePack | undefined {
  return PACKS.find((p) => p.id === id);
}

export function resolvePackLanguages(pack: LanguagePack): {
  spoken: Language;
  learned: Language;
} {
  return {
    spoken: getLanguage(pack.spokenLanguageId),
    learned: getLanguage(pack.learnedLanguageId),
  };
}

export function getPacksForSpeaker(spokenLanguageId: string): LanguagePack[] {
  return PACKS.filter((p) => p.spokenLanguageId === spokenLanguageId);
}

export function getAvailableSpokenLanguages(): Language[] {
  const ids = [...new Set(PACKS.map(p => p.spokenLanguageId))];
  return ids.map(getLanguage);
}
