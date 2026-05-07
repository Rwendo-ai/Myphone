import { Language } from '../../types/language';
import english from './english';
import shona from './shona';
import french from './french';
import chinese from './chinese';
import tagalog from './tagalog';
import hindi from './hindi';
import spanish from './spanish';
import portuguese from './portuguese';
import japanese from './japanese';
import korean from './korean';

export const LANGUAGES: Record<string, Language> = {
  english,
  shona,
  french,
  chinese,
  tagalog,
  hindi,
  spanish,
  portuguese,
  japanese,
  korean,
};

export function getLanguage(id: string): Language {
  return LANGUAGES[id] ?? english;
}

export { english, shona, french, chinese, tagalog, hindi, spanish, portuguese, japanese, korean };
