import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const japanese: SpeakerPack = {
  id: 'japanese',
  isoCode: 'ja',
  nativeName: '日本語',
  englishName: 'Japanese',
  flag: '🇯🇵',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: '温かい語り手',                  gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: '元気で自信のある声',            gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: '明るく、親しみやすい声',        gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'はっきりとした、教え上手な声',  gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default japanese;
