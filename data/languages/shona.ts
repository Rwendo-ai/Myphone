import { Language } from '../../types/language';

const shona: Language = {
  id: 'shona',
  name: 'Shona',
  nativeName: 'ChiShona',
  flag: '🇿🇼',
  direction: 'ltr',
  ui: {
    greeting: 'Mhoro! 🌅',
    learnPrompt: 'Chii chaunoda kudzidza?',       // What do you want to learn?
    speakPrompt: 'Unotaura rurimi rupi?',          // What language do you speak?
    startJourney: 'Tanga rwendo rwako',            // Start your journey
    keepLearning: 'Ramba uchidzdisira',            // Keep learning
  },
};

export default shona;
