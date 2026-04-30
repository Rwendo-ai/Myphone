import { Language } from '../../types/language';
import english from './english';
import shona from './shona';

export const LANGUAGES: Record<string, Language> = {
  english,
  shona,
};

export function getLanguage(id: string): Language {
  return LANGUAGES[id] ?? english;
}

export { english, shona };
