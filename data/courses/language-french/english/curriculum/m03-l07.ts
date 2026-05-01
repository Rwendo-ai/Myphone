import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Où j\'habite — Where I live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Where you live, and for how long. Two short facts that feel routine in English but trip up English speakers in French — because French marks duration with a tiny word that means something English doesn't quite have.",
    culturalNote: "The big rule today: 'depuis' = since/for, used with the PRESENT tense for ongoing situations. English says 'I HAVE LIVED here for 5 years' (perfect tense). French says 'J'HABITE ici DEPUIS 5 ans' (PRESENT tense + depuis). The action is still going, so French keeps it present. Also: 'avant' = before, and 'j'habitais' = I used to live (imparfait, used for past habits).",
  },

  chunks: [
    {
      id: 'jhabite_a_sydney',
      target: "J'habite à Sydney",
      native: 'I live in Sydney',
      literal: 'I-live in Sydney',
      emoji: '🏠',
      phonetic: 'zha-BEET ah seed-NEE',
      audioRef: null,
    },
    {
      id: 'depuis_5_ans',
      target: 'Depuis 5 ans',
      native: 'For 5 years',
      literal: 'Since 5 years',
      emoji: '📅',
      phonetic: 'duh-PWEE SAHN-k AHN',
      audioRef: null,
    },
    {
      id: 'avant_jhabitais',
      target: "Avant, j'habitais à Londres",
      native: 'Before, I lived in London',
      literal: 'Before, I-lived(-imparfait) in London',
      emoji: '⏪',
      phonetic: 'ah-VAHN zha-bee-TEH ah LOHN-druh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Depuis + present (still ongoing) and imparfait for past habit',
    explanation: "'Depuis' + present tense = a situation that started in the past and IS STILL TRUE. 'J'habite à Paris depuis 2020' = I've been living in Paris since 2020 (and still do). For places you USED to live, French uses the imparfait: 'j'habitais' (I used to live). The -ais ending = imparfait of -er verbs.",
    examples: [
      { target: "J'habite ici depuis 3 ans", native: "I've lived here for 3 years (still living here)" },
      { target: 'Depuis combien de temps?', native: 'For how long?' },
      { target: "Avant, j'habitais à New York", native: 'Before, I lived in New York (used to)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "J'habite à Sydney", right: 'I live in Sydney' },
        { left: 'Depuis 5 ans', right: 'For 5 years' },
        { left: "Avant, j'habitais à Londres", right: 'Before, I lived in London' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: you've been in Lyon for 2 years and still are.",
      sentence: "J'habite à Lyon _____ deux ans.",
      options: ['depuis', 'pour', 'pendant'],
      correct: 'depuis',
      context: "'Depuis' = for/since (still ongoing). 'Pour' = for (a planned future duration). 'Pendant' = during (a finished period). Most learners reach for 'pour' here — wrong.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you live in Sydney',
      prompt: 'I live in Sydney',
      correct: ["J'habite à Sydney", "j'habite à Sydney"],
    },
    {
      type: 'build_sentence',
      instruction: "You've lived in Paris for 5 years and still do. Build the sentence.",
      words: ['à', 'cinq', 'Paris', 'ans', 'depuis', "J'habite"],
      correct: ["J'habite", 'à', 'Paris', 'depuis', 'cinq', 'ans'],
      translation: "I've lived in Paris for 5 years",
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I've been living here for 3 years' in French?",
      question: 'Pick the correct tense',
      options: [
        { text: "J'habite ici depuis 3 ans", correct: true },
        { text: "J'ai habité ici depuis 3 ans", correct: false },
        { text: "Je vais habiter ici depuis 3 ans", correct: false },
      ],
      explanation: "Depuis + PRESENT in French (because the living is still happening). English uses the perfect ('have lived'), French stays present. This is the single biggest depuis trap.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you used to live in London',
      prompt: 'Before, I lived in London',
      correct: ["Avant, j'habitais à Londres", "Avant j'habitais à Londres", "avant, j'habitais à londres"],
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's housewarming in Marseille. Another guest, Marc, has just learned you're not local and is digging in.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et vous habitez où? Depuis combien de temps?',
        native: 'And where do you live? For how long?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'habite à Sydney depuis 5 ans. Avant, j'habitais à Londres.", native: "I've lived in Sydney for 5 years. Before, I lived in London.", correct: true, feedback: 'Present + depuis for the now, imparfait for the past — textbook fluency.' },
          { target: "J'ai habité à Sydney depuis 5 ans", native: "I have lived in Sydney for 5 years (passé composé — wrong)", correct: false, feedback: 'Depuis + present in French. The living is still happening. Drop the "j\'ai" — just "j\'habite".' },
          { target: "J'habite à Sydney pour 5 ans", native: "I live in Sydney for 5 years (wrong preposition)", correct: false, feedback: '"Pour" = for a future planned duration ("pour 5 ans" = for the next 5 years). Past-into-present uses "depuis".' },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah, Londres! J'y suis allé une fois. C'était comment, la vie là-bas?",
        native: "Ah, London! I went once. What was life like there?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch his last word — 'là-bas' (over there)? Once you used the imparfait, he matched it. Tense-matching is the rhythm of real conversation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I've lived in Paris for 3 years (in French — still living there)",
        correct: ["J'habite à Paris depuis 3 ans", "j'habite à paris depuis 3 ans", "J'habite à Paris depuis trois ans"],
      },
      {
        prompt: 'Before, I lived in London (in French)',
        correct: ["Avant, j'habitais à Londres", "Avant j'habitais à Londres", "avant, j'habitais à londres"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say where you live and for how long, in French, today. 'J'habite à ___ depuis ___ ans.' Resist the urge to say 'pour' or 'j'ai habité'. Present + depuis.",
    rwenSignoff: "Le présent dure tant qu'on l'habite. À demain.",
  },

  phase8: {
    scenario: "Casual dinner at a friend's place in Marseille. Another guest, Marc, has just heard your accent and wants the geography of your life: where now, where before, how long.",
    rwenRole: "Marc — a Marseille local, ~35, professional, friendly, vous at first then maybe slipping toward tu. He asks 'Vous habitez où?', 'Depuis combien de temps?', 'Et avant, vous étiez où?'. He'll react to each city you name.",
    successCriteria: "User says 'J'habite à [city]' (PRESENT tense), then 'depuis [duration]' (NOT 'pour' or 'pendant'), then describes a previous home using 'Avant, j'habitais à [city]' (IMPARFAIT). User does NOT use passé composé ('j'ai habité') with depuis. User does NOT use 'pour' for the still-true duration.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
