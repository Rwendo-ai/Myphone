import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const hindi: SpeakerPack = {
  id: 'hindi',
  isoCode: 'hi',
  nativeName: 'हिन्दी',
  englishName: 'Hindi',
  flag: '🇮🇳',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'George',  description: 'गर्मजोश कहानीकार',                  gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'ऊर्जावान, आत्मविश्वासी',              gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'चंचल, उज्ज्वल, गर्मजोश',               gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'स्पष्ट, मनमोहक शिक्षिका',              gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default hindi;
