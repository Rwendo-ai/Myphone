export interface Language {
  id: string;           // 'english' | 'shona' | 'french'
  name: string;         // English display name: 'English', 'Shona', 'French'
  nativeName: string;   // Name in the language itself: 'English', 'ChiShona', 'Français'
  flag: string;         // emoji flag
  direction: 'ltr' | 'rtl';

  // UI strings shown when this is the learner's spoken language (interface language)
  ui: {
    greeting: string;           // shown on Learn tab
    learnPrompt: string;        // "What do you want to learn?"
    speakPrompt: string;        // "What language do you speak?"
    startJourney: string;       // onboarding CTA
    keepLearning: string;       // Learn tab header subtitle
  };
}
