import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-marunong',
  module: 2,
  lesson: 3,
  title: 'Marunong ka bang mag-Inggles? — Do you speak English?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're stuck. The Tagalog-only sari-sari store auntie is staring at you. Before you give up, ask — politely — if she speaks English. Half the country does, but you have to ask the right way to find out.",
    culturalNote: "Filipinos often hedge with 'konti lang' (just a little) even when they're fluent — it's modesty, not the truth. If someone says 'konti lang', try them. They probably know more than they let on.",
  },

  chunks: [
    {
      id: 'marunong_ka_ba',
      target: 'Marunong ka bang mag-Inggles?',
      native: 'Do you speak English?',
      literal: 'Knowing you ?-marker speak-English?',
      emoji: 'SPEAK',
      phonetic: 'ma-ROO-nong ka bang mag-ing-GLES',
      audioRef: null,
    },
    {
      id: 'konti_lang',
      target: 'Konti lang',
      native: 'Just a little',
      literal: 'Little only',
      emoji: 'PINCH',
      phonetic: 'kon-TEE lang',
      audioRef: null,
    },
    {
      id: 'hindi_gaanong',
      target: 'Hindi gaanong',
      native: 'Not really / Not so much',
      literal: 'Not so-much',
      emoji: 'SHRUG',
      phonetic: 'hin-DEE ga-A-nong',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Marunong' + ability",
    explanation: "'Marunong' literally means 'knowing how'. To ask if someone can do something, use 'Marunong ka ba + (mag-)verb?'. The 'mag-' prefix turns Tagalog nouns into verbs ('mag-Inggles' = 'to do English'). 'Ba' is the question marker — like a spoken question mark.",
    examples: [
      { target: 'Marunong ka bang mag-luto?', native: 'Do you know how to cook?' },
      { target: 'Marunong ka bang mag-Tagalog?', native: 'Do you know how to speak Tagalog?' },
      { target: 'Marunong ako ng konti', native: 'I know a little' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Marunong ka bang mag-Inggles?', right: 'Do you speak English?' },
        { left: 'Konti lang', right: 'Just a little' },
        { left: 'Hindi gaanong', right: 'Not really' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You ask if she speaks English. She wants to say 'just a little'.",
      sentence: '_____ lang.',
      options: ['Konti', 'Hindi', 'Marunong'],
      correct: 'Konti',
      context: "'Konti lang' is the classic Filipino modest reply — they probably know more than that.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Do you speak English?',
      correct: ['Marunong ka bang mag-Inggles?', 'marunong ka bang mag-inggles?', 'Marunong ka bang mag-Inggles', 'marunong ka bang mag-inggles'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask if someone knows how to speak Tagalog',
      words: ['mag-Tagalog?', 'ka', 'bang', 'Marunong'],
      correct: ['Marunong', 'ka', 'bang', 'mag-Tagalog?'],
      translation: 'Do you (know how to) speak Tagalog?',
    },
    {
      type: 'multiple_choice',
      instruction: "The barista replies 'Hindi gaanong' when you ask about English. What does she mean?",
      question: 'Best translation of her reply?',
      options: [
        { text: 'Not really / not so much', correct: true },
        { text: 'Yes, fluently', correct: false },
        { text: "I don't speak any", correct: false },
      ],
      explanation: "'Hindi gaanong' is a soft 'not really' — try a few simple words and see how she responds. She's not closing the door, just lowering expectations.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Just a little',
      correct: ['Konti lang', 'konti lang'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a tiny sari-sari store on a side street in Quezon City. The aling behind the counter looks puzzled at your English question. Try in Tagalog.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, marunong ka bang mag-Inggles?', native: "Excuse me ma'am, do you speak English?", correct: true, feedback: "Spotless — 'po', the question marker 'ba', and the right verb form." },
          { target: 'Inggles?', native: 'English?', correct: false, feedback: "She'll probably understand, but it's not a question — it's a grunt." },
          { target: 'Hindi ko maintindihan', native: "I don't understand", correct: false, feedback: 'Right tool, wrong moment — you haven\'t even asked yet.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, konti lang, anak',
        native: 'Oh, just a little, dear',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Konti lang' is the door opening. Speak slowly, simple words, watch her face — most Filipinos who say this understand far more than they say.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Do you speak English?',
        correct: ['Marunong ka bang mag-Inggles?', 'marunong ka bang mag-inggles?', 'Marunong ka bang mag-Inggles', 'marunong ka bang mag-inggles'],
      },
      {
        prompt: 'Just a little',
        correct: ['Konti lang', 'konti lang'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine yourself walking up to one Tagalog-only stranger today. Whisper 'Marunong ka bang mag-Inggles?' under your breath. The shape of the question matters — drill it now so it's there when you need it.",
    rwenSignoff: "Galing — well done. Bukas ulit.",
  },

  phase8: {
    scenario: "You walk into a tiny sari-sari store on a Quezon City side street to buy load for your phone. The aling behind the chicken-wire counter doesn't seem to follow your English. You need to figure out fast: does she speak any?",
    rwenRole: "Aling Marites — the sari-sari store owner, mid-50s, knows some English but always says 'konti lang' from habit; opens up the moment a foreigner makes any effort in Tagalog.",
    successCriteria: "User asks 'Marunong ka ba(ng) mag-Inggles?' (ideally with 'po' since she's older), then ADAPTS based on her 'konti lang' reply — i.e. they don't switch back to fast English, they slow down and use simple words.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
