import { Language } from '../../types/language';

// Tagalog / Filipino language module.
const tagalog: Language = {
  id: 'tagalog',
  name: 'Tagalog',
  nativeName: 'Tagalog',
  flag: '🇵🇭',
  direction: 'ltr',
  ui: {
    greeting: 'Magandang araw! 🌅',
    learnPrompt: 'Anong gusto mong matutunan?',
    speakPrompt: 'Anong wika ang sinasalita mo?',
    startJourney: 'Simulan ang paglalakbay',
    keepLearning: 'Magpatuloy sa pag-aaral',
  },
};

export default tagalog;
