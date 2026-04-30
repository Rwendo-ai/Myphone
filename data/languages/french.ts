import { Language } from '../../types/language';

// French language module — curriculum not yet authored
const french: Language = {
  id: 'french',
  name: 'French',
  nativeName: 'Français',
  flag: '🇫🇷',
  direction: 'ltr',
  ui: {
    greeting: 'Bonjour! 🌅',
    learnPrompt: 'Que voulez-vous apprendre?',
    speakPrompt: 'Quelle langue parlez-vous?',
    startJourney: 'Commencez votre voyage',
    keepLearning: 'Continuez à apprendre',
  },
};

export default french;
