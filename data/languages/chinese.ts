import { Language } from '../../types/language';

// Mandarin Chinese language module.
const chinese: Language = {
  id: 'chinese',
  name: 'Mandarin',
  nativeName: '中文',
  flag: '🇨🇳',
  direction: 'ltr',
  ui: {
    greeting: '你好！🌅',
    learnPrompt: '你想学什么语言？',
    speakPrompt: '你说什么语言？',
    startJourney: '开始你的学习之旅',
    keepLearning: '继续学习',
  },
};

export default chinese;
