import { Language } from '../../types/language';

// Spanish (Latin American) language module.
const spanish: Language = {
  id: 'spanish',
  name: 'Spanish',
  nativeName: 'Español',
  flag: '🇪🇸',
  direction: 'ltr',
  ui: {
    greeting: '¡Hola! 🌅',
    learnPrompt: '¿Qué quieres aprender?',
    speakPrompt: '¿Qué idioma hablas?',
    startJourney: 'Comienza tu viaje',
    keepLearning: 'Sigue aprendiendo',
  },
};

export default spanish;
