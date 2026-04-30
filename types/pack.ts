export interface PackTheme {
  primary: string;
  secondary: string;
  accent: string;
  xp: string;
}

export interface LanguagePack {
  id: string;                  // 'shona-english'
  spokenLanguageId: string;    // language the learner already speaks: 'english'
  learnedLanguageId: string;   // language being learned: 'shona'
  isPremium: boolean;
  comingSoon?: boolean;
  theme?: PackTheme;           // optional override — defaults to app theme
}
