import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const french: SpeakerPack = {
  id: 'french',
  isoCode: 'fr',
  nativeName: 'Français',
  englishName: 'French',
  flag: '🇫🇷',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: 'Conteur chaleureux',           gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'Énergique, sûr de lui',        gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'Espiègle, lumineuse, chaleureuse', gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'Pédagogue claire et captivante', gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default french;
