import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const chinese: SpeakerPack = {
  id: 'chinese',
  isoCode: 'zh',
  nativeName: '中文',
  englishName: 'Chinese',
  flag: '🇨🇳',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: '温暖的讲述者',         gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: '充满活力,自信沉稳',   gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: '俏皮明亮,亲切温和',   gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: '清晰悦耳的引导者',     gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default chinese;
