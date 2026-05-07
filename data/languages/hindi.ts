import { Language } from '../../types/language';

// Hindi (India) language module.
const hindi: Language = {
  id: 'hindi',
  name: 'Hindi',
  nativeName: 'हिन्दी',
  flag: '🇮🇳',
  direction: 'ltr',
  ui: {
    greeting: 'नमस्ते! 🌅',
    learnPrompt: 'आप क्या सीखना चाहते हैं?',
    speakPrompt: 'आप कौन सी भाषा बोलते हैं?',
    startJourney: 'अपनी यात्रा शुरू करें',
    keepLearning: 'सीखते रहें',
  },
};

export default hindi;
