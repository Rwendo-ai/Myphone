import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-chichi-otousan',
  module: 5,
  lesson: 2,
  title: 'Chichi vs Otousan — Talking About Father',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Same uchi/soto split as mother — but for father. Your own father is 父 (chichi) when you mention him to outsiders. Someone else's father, or yours when you address him directly, is お父さん (otousan). The pattern is becoming familiar: bare humble form for in-group, お-...-さん for out-group respect.",
    culturalNote: "In a Japanese workplace, when you mention your father in conversation — even casually — you use chichi. Saying 'otousan wa...' about your own dad sounds childish or boastful, like you're elevating him in front of colleagues. The humble form is a gift you offer the listener: it puts THEM above your family.",
  },

  chunks: [
    {
      id: 'chichi',
      target: '父 (ちち)',
      native: 'My (own) father — humble, used to outsiders',
      literal: 'chichi — father (in-group, no honorifics)',
      emoji: '👨',
      phonetic: 'CHI-chi',
      audioRef: null,
    },
    {
      id: 'otousan',
      target: 'お父さん (おとうさん)',
      native: "Father (respectful) — someone else's father, or addressing your own",
      literal: 'o-tou-san — honorific + father + respectful suffix',
      emoji: '👨‍🦳',
      phonetic: 'oh-TOH-san',
      audioRef: null,
    },
    {
      id: 'chichi_wa_kaishain',
      target: '父は会社員です',
      native: 'My father is a company employee',
      literal: 'chichi wa kaishain desu — father (topic) company-employee is',
      emoji: '💼',
      phonetic: 'CHI-chi wa KAI-sha-in des',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chichi/Otousan mirrors Haha/Okaasan',
    explanation: "Same in-group/out-group rule as mother. Your own father → chichi (humble) to outsiders. Someone else's father, or addressing your own directly → otousan (respectful). Both 母/父 (haha/chichi) and お母さん/お父さん (okaasan/otousan) follow the identical o-...-san honorific frame.",
    examples: [
      { target: '父は医者です', native: 'My father is a doctor (humble — to an outsider)' },
      { target: 'お父さんはお元気ですか', native: "How is your father? (respectful — about someone else's)" },
      { target: 'お父さん、ただいま', native: "Dad, I'm home (addressing your own father directly)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese to its meaning',
      pairs: [
        { left: '父 (chichi)', right: 'My own father (humble)' },
        { left: 'お父さん (otousan)', right: "Someone else's father (respectful)" },
        { left: '会社員', right: 'Company employee' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Talking to a Japanese client about your own father — which form?",
      sentence: '_____ は会社員です。',
      options: ['父', 'お父さん', 'パパ'],
      correct: '父',
      context: "Your own father, mentioned to a client — humble chichi.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — referring to your friend\'s father',
      prompt: "Your friend's father (respectful)",
      correct: ['otousan', 'Otousan', 'otōsan', 'お父さん'],
    },
    {
      type: 'multiple_choice',
      instruction: "A friend asks 'お父さんは何をしていますか？' (What does your father do?). Best reply about your own dad:",
      question: 'Talking about your own father:',
      options: [
        { text: '父は会社員です (Chichi wa kaishain desu — humble, correct register)', correct: true },
        { text: 'お父さんは会社員です (Otousan wa... — sounds like you\'re bragging about your own)', correct: false },
        { text: 'パパは会社員です (Papa wa... — childish in adult context)', correct: false },
      ],
      explanation: 'When the listener uses otousan to ASK about your father, you mirror back with the humble chichi. That\'s how the asymmetry works: they elevate yours, you stay humble.',
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'My father is a doctor' (to a colleague)",
      words: ['父', 'です。', 'は', '医者'],
      correct: ['父', 'は', '医者', 'です。'],
      translation: 'My father is a doctor',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your own father, to a colleague',
      prompt: 'My father (humble form)',
      correct: ['chichi', 'Chichi'],
    },
  ],

  rwenDialogue: {
    intro: "Wednesday at a Tokyo izakaya — a coworker has bought you a beer and is asking about your background. The conversation drifts to your family.",
    lines: [
      {
        speaker: 'npc',
        target: 'お父さんはどんなお仕事ですか？',
        native: "What kind of work does your father do? (using respectful otousan about your father)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '父はエンジニアです。', native: 'My father is an engineer. (humble chichi — correct mirror)', correct: true, feedback: 'Exactly the asymmetry: he elevates yours with otousan, you stay humble with chichi. That\'s textbook keigo from a foreigner.' },
          { target: 'お父さんはエンジニアです。', native: 'Otousan is an engineer. (sounds like you\'re showing off)', correct: false, feedback: 'Otousan back at the asker about your OWN father feels boastful. Switch to humble chichi when you reply.' },
          { target: 'パパはエンジニアです。', native: 'Papa is an engineer. (childish)', correct: false, feedback: 'Papa is what kids say. In adult workplace conversation, your father is chichi.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You held the humble register about your own family even after he opened with the polite form. That switch is exactly what native speakers do — and it told him you understand uchi/soto, not just the words.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My own father (humble — to an outsider)', correct: ['chichi', 'Chichi', '父'] },
      { prompt: "Someone else's father (respectful)", correct: ['otousan', 'Otousan', 'otōsan', 'お父さん'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise the asymmetric exchange aloud: imagine someone asking 'otousan wa ogenki desu ka?' and you replying 'hai, chichi wa genki desu'. Same person, two different words. That's the move.",
    rwenSignoff: "Otousan up, chichi down — the keigo seesaw. Mata ashita.",
  },

  phase8: {
    scenario: "Friday evening, a small drinks gathering after work in Shimbashi. A senior colleague — Takahashi-san, who you respect a lot — is genuinely curious about your family back home. He uses respectful otousan and okaasan throughout. You need to keep the humble register about your own parents the whole time, even though it feels rude when you're getting warmth from him.",
    rwenRole: "Takahashi-san — senior project lead, ~55, generous and slightly tipsy; he's testing the polite-conversation gears, listening for whether you'll match the right register.",
    successCriteria: "User uses 'chichi' (or '父') consistently when talking about their own father, and 'haha' for their own mother — does NOT slip into 'otousan' or 'okaasan' when describing their own parents to Takahashi-san, even after he uses the respectful forms in his questions.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
