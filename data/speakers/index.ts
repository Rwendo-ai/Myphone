import { SpeakerPack, SpeakerPackId } from '../../types/packs';
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
import ndebele from './ndebele';

export const SPEAKERS: Record<SpeakerPackId, SpeakerPack> = {
  english,
  shona,
  ndebele,
  french,
  chinese,
  tagalog,
  hindi,
  spanish,
  portuguese,
  japanese,
  korean,
};

export const SPEAKER_IDS = Object.keys(SPEAKERS) as SpeakerPackId[];

/**
 * Resolve a speaker pack by ID, falling back to English if the ID is unknown.
 */
export function getSpeaker(id: SpeakerPackId | string | null | undefined): SpeakerPack {
  if (!id) return english;
  return SPEAKERS[id] ?? english;
}

export {
  english, shona, ndebele, french, chinese, tagalog,
  hindi, spanish, portuguese, japanese, korean,
};
