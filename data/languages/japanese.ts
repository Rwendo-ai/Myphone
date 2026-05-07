import { Language } from '../../types/language';

// Japanese language module.
const japanese: Language = {
  id: 'japanese',
  name: 'Japanese',
  nativeName: '日本語',
  flag: '🇯🇵',
  direction: 'ltr',
  ui: {
    greeting: 'こんにちは！🌅',
    learnPrompt: '何を学びたいですか？',
    speakPrompt: '何語を話しますか？',
    startJourney: '旅を始めよう',
    keepLearning: '学び続けよう',
  },
};

export default japanese;
