import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

/**
 * isiNdebele speaker pack.
 *
 * Voice options: ElevenLabs has no native isiNdebele voice in their library.
 * v1 reuses the multilingual v2 capability of the same 4 voice IDs as
 * English / Shona — this gives mediocre but workable Ndebele pronunciation
 * (Ndebele is closely related to Zulu, so multilingual voices handle it
 * marginally better than Shona). v1.x adds a custom Ndebele voice clone
 * (~$1-2k recording session per PRODUCT-DESIGN.md §3.9).
 */
const ndebele: SpeakerPack = {
  id: 'ndebele',
  isoCode: 'nd',
  nativeName: 'isiNdebele',
  englishName: 'Ndebele',
  flag: '🇿🇼',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: 'Umbhali othula',           gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'Olamandla',                gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'Omnene',                   gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'Ocacileyo, umfundisi',     gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default ndebele;
