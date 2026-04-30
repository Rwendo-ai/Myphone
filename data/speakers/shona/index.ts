import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

/**
 * Shona speaker pack.
 *
 * Voice options: ElevenLabs has no native Shona voice in their library.
 * v1 reuses the multilingual v2 capability of the same 4 voice IDs as
 * English — this gives mediocre but workable Shona pronunciation. v1.x
 * adds a custom Shona voice clone (~$1-2k recording session per
 * PRODUCT-DESIGN.md §3.9).
 */
const shona: SpeakerPack = {
  id: 'shona',
  isoCode: 'sn',
  nativeName: 'ChiShona',
  englishName: 'Shona',
  flag: '🇿🇼',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: 'Munyori werunyararo',  gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'Ane simba',            gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'Ane unyoro',           gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'Akajeka, mudzidzisi',  gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default shona;
