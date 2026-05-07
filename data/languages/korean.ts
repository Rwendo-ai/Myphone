import { Language } from '../../types/language';

// Korean language module.
const korean: Language = {
  id: 'korean',
  name: 'Korean',
  nativeName: '한국어',
  flag: '🇰🇷',
  direction: 'ltr',
  ui: {
    greeting: '안녕하세요! 🌅',
    learnPrompt: '무엇을 배우고 싶으세요?',
    speakPrompt: '어떤 언어를 사용하세요?',
    startJourney: '여정을 시작하세요',
    keepLearning: '계속 배우세요',
  },
};

export default korean;
