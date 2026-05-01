import { SpeakerPack, SpeakerPackId } from '../../types/packs';
import english from './english';
import shona from './shona';
import french from './french';
import chinese from './chinese';
import tagalog from './tagalog';

export const SPEAKERS: Record<SpeakerPackId, SpeakerPack> = {
  english,
  shona,
  french,
  chinese,
  tagalog,
};

export const SPEAKER_IDS = Object.keys(SPEAKERS) as SpeakerPackId[];

/**
 * Resolve a speaker pack by ID, falling back to English if the ID is unknown.
 */
export function getSpeaker(id: SpeakerPackId | string | null | undefined): SpeakerPack {
  if (!id) return english;
  return SPEAKERS[id] ?? english;
}

export { english, shona, french, chinese, tagalog };
