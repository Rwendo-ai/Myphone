import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const korean: SpeakerPack = {
  id: 'korean',
  isoCode: 'ko',
  nativeName: '한국어',
  englishName: 'Korean',
  flag: '🇰🇷',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: '따뜻한 이야기꾼',                gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: '활기차고 자신감 있는 목소리',    gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: '발랄하고 밝은 분위기',           gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: '또렷하고 차분한 선생님 같은 목소리', gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default korean;
