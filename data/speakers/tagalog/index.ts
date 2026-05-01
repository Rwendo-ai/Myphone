import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const tagalog: SpeakerPack = {
  id: 'tagalog',
  isoCode: 'tl',
  nativeName: 'Tagalog',
  englishName: 'Tagalog',
  flag: '🇵🇭',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'Jose',    description: 'Mainit na tagapagsalaysay',     gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'Masigla, may tiwala sa sarili', gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'Mapaglaro, maliwanag, mainit',  gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'Malinaw, mabisang guro',         gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default tagalog;
