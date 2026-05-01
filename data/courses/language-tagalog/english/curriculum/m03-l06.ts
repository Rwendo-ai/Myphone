import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Mga wika — Languages',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mang Roy refills your coffee in Tagaytay. 'Marunong ka bang mag-Tagalog?' he asks gently. The honest answer — 'konting Tagalog lang' — is the most charming thing you can say in this country. Modesty plus effort wins every time.",
    culturalNote: "Filipinos are warm to anyone trying their language. The phrase 'konti lang' (just a little) is golden — it tells them you respect Tagalog enough to be humble about your level. Notice 'mag-': it turns a language name into a verb. 'Mag-Inggles' = to speak/use English. 'Mag-Tagalog' = to speak Tagalog.",
  },

  chunks: [
    {
      id: 'marunong-akong-mag-inggles',
      target: 'Marunong akong mag-Inggles',
      native: 'I speak English',
      literal: 'Knowing I [linker] do-English',
      emoji: '🇬🇧',
      phonetic: 'ma-ROO-nong a-KONG mag-EENG-gles',
      audioRef: null,
    },
    {
      id: 'konting-tagalog',
      target: 'Konting Tagalog lang',
      native: 'A little Tagalog only',
      literal: 'Little [linker] Tagalog only',
      emoji: '🇵🇭',
      phonetic: 'KON-ting ta-GA-log lang',
      audioRef: null,
    },
    {
      id: 'gusto-kong-matuto-pa',
      target: 'Gusto kong matuto pa',
      native: 'I want to learn more',
      literal: 'Like my [linker] learn still',
      emoji: '🌱',
      phonetic: 'goos-TO kong ma-TOO-to pa',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Marunong + mag-`',
    explanation: "'Marunong ako' = 'I know how to'. Pair it with 'mag-' + activity: 'mag-Inggles' (to speak English), 'magluto' (to cook), 'magmaneho' (to drive). The 'mag-' prefix turns the noun into a verb-action. 'Konti lang' (just a little) softens any answer into Filipino-style modesty.",
    examples: [
      { target: 'Marunong akong magluto', native: 'I know how to cook' },
      { target: 'Marunong ka bang mag-Tagalog?', native: 'Do you know how to speak Tagalog?' },
      { target: 'Konti lang', native: 'Just a little' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Marunong akong mag-Inggles', right: 'I speak English' },
        { left: 'Konting Tagalog lang', right: 'A little Tagalog only' },
        { left: 'Gusto kong matuto pa', right: 'I want to learn more' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the language verb',
      sentence: 'Marunong akong ___-Inggles.',
      options: ['mag', 'sa', 'ang'],
      correct: 'mag',
      context: "'Mag-' is the action prefix that turns a language name into 'speak [language]'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'A little Tagalog only',
      correct: ['Konting Tagalog lang', 'konting tagalog lang'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell Mang Roy you want to learn more — put the words in order',
      words: ['matuto', 'kong', 'pa', 'Gusto'],
      correct: ['Gusto', 'kong', 'matuto', 'pa'],
      translation: 'I want to learn more',
    },
    {
      type: 'multiple_choice',
      instruction: "Mang Roy asks 'Marunong ka bang mag-Tagalog?'. You're an A2 learner. What's the warmest reply?",
      question: 'Choose the most charming answer',
      options: [
        { text: 'Konting Tagalog lang, pero gusto kong matuto pa.', correct: true },
        { text: 'Hindi, hindi.', correct: false },
        { text: 'Marunong akong mag-Tagalog.', correct: false },
      ],
      explanation: "Modest plus motivated — 'konti lang' admits the level, 'gusto kong matuto pa' shows the heart.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I speak English',
      correct: ['Marunong akong mag-Inggles', 'marunong akong mag-inggles'],
    },
  ],

  rwenDialogue: {
    intro: "Back at the Tagaytay language exchange. Mang Roy is genuinely curious — he wants to know how much Tagalog you've picked up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Marunong ka bang mag-Tagalog?',
        native: 'Do you know how to speak Tagalog?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Konting Tagalog lang po, pero gusto kong matuto pa.', native: 'Just a little Tagalog, but I want to learn more.', correct: true, feedback: 'Perfect — humble, sincere, with a forward-looking promise. Filipinos eat this up.' },
          { target: 'Marunong akong mag-Tagalog!', native: 'I know how to speak Tagalog!', correct: false, feedback: 'A little too confident at A2 — Filipinos love modesty. Try the konti-lang version.' },
          { target: 'Hindi.', native: 'No.', correct: false, feedback: "Too cold — at least add 'pero gusto kong matuto'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti! Tutulungan kita.',
        native: "Good! I'll help you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "He just offered to teach you. That sentence — 'gusto kong matuto pa' — opens those doors every time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I speak English (in Tagalog)', correct: ['Marunong akong mag-Inggles', 'marunong akong mag-inggles'] },
      { prompt: 'I want to learn more (in Tagalog)', correct: ['Gusto kong matuto pa', 'gusto kong matuto pa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "List the languages you speak in Tagalog. Out loud. 'Marunong akong mag-___, mag-___, at konting ___ lang.' Even if it's just two — list them with pride and modesty.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — go well.",
  },

  phase8: {
    scenario: "Sunday afternoon, Tagaytay language exchange winding down. Mang Roy walks you to the door and asks, in Tagalog this time, what languages you actually speak — and how serious you are about learning Filipino properly.",
    rwenRole: "Mang Roy — your warm Tagaytay host, retired teacher; he respects modesty and effort, and will offer to keep practising with you if you sound sincere.",
    successCriteria: "User lists at least one language they speak using 'Marunong akong mag-___', acknowledges Tagalog level honestly with 'konting Tagalog lang', and ends with 'Gusto kong matuto pa'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
