import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Takot, alala — Fear & Worry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "It's 11pm in Manila. Your friend is on a late jeepney home and isn't answering. Takot ka? Nag-aalala ka? Today you learn the words for the feelings that keep you up.",
    culturalNote: "In Filipino families — especially for OFWs (overseas Filipino workers) — 'huwag kang mag-alala' (don't worry) is one of the most spoken phrases on the planet. It's the goodbye, the reassurance, the love-letter. Learning to say it is learning a piece of Filipino life.",
  },

  chunks: [
    {
      id: 'takot_ako',
      target: 'Takot ako',
      native: "I'm scared",
      literal: 'Scared I',
      emoji: '😨',
      phonetic: 'TA-kot a-KO',
      audioRef: null,
    },
    {
      id: 'nag_aalala_ako',
      target: 'Nag-aalala ako',
      native: "I'm worried",
      literal: 'Worrying I',
      emoji: '😟',
      phonetic: 'nag-a-a-LA-la a-KO',
      audioRef: null,
    },
    {
      id: 'huwag_kang_mag_alala',
      target: 'Huwag kang mag-alala',
      native: "Don't worry",
      literal: "Don't you worry",
      emoji: '🤲',
      phonetic: 'hu-WAG kang mag-a-LA-la',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mag-alala — to worry',
    explanation: "**Mag-alala** is the verb 'to worry'. Its present-tense form is **nag-aalala** (worrying). The negative command is **huwag kang mag-alala** — literally 'don't you worry', the most-said phrase in Filipino homes.",
    examples: [
      { target: 'Nag-aalala ako sa iyo', native: "I'm worried about you" },
      { target: 'Huwag kang mag-alala', native: "Don't worry" },
      { target: 'Huwag kayong mag-alala', native: "Don't worry (to many people)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Takot ako', right: "I'm scared" },
        { left: 'Nag-aalala ako', right: "I'm worried" },
        { left: 'Huwag kang mag-alala', right: "Don't worry" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your inay calls — your sibling is late getting home. Tell her you\'re worried.',
      sentence: '_____ ako kay kuya.',
      options: ['Nag-aalala', 'Masaya', 'Galit'],
      correct: 'Nag-aalala',
      context: "Kay kuya = 'about older brother'. The verb stays present-tense: nag-aalala.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Don't worry",
      correct: ["Huwag kang mag-alala", "huwag kang mag-alala"],
    },
    {
      type: 'build_sentence',
      instruction: "Drag the words to say \"I'm worried about you\"",
      words: ['sa', 'ako', 'iyo', 'Nag-aalala'],
      correct: ['Nag-aalala', 'ako', 'sa', 'iyo'],
      translation: "I'm worried about you",
    },
    {
      type: 'multiple_choice',
      instruction: 'Your titá is anxious about a typhoon coming. You want to comfort her gently.',
      question: 'What do you say?',
      options: [
        { text: 'Huwag kang mag-alala, titá', correct: true },
        { text: 'Galit ako', correct: false },
        { text: 'Takot ako', correct: false },
      ],
      explanation: "Huwag kang mag-alala = 'don't worry'. The classic Filipino reassurance — exactly what she needs.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm scared",
      correct: ['Takot ako', 'takot ako'],
    },
  ],

  rwenDialogue: {
    intro: "It's 10:30pm. Your kapatid is on a late commute and finally messages back. You reply.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uwi na ako, ate. Pasensya na sa late reply.',
        native: "I'm coming home, ate. Sorry for the late reply.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti! Nag-aalala ako sa iyo.', native: "Good! I was worried about you.", correct: true, feedback: 'Warm relief — and you used the verb in real context.' },
          { target: 'Galit ako.', native: "I'm angry.", correct: false, feedback: 'Worry and anger feel similar — but the gentler word fits the moment.' },
          { target: 'Masaya ako.', native: "I'm happy.", correct: false, feedback: "Skips over what you actually felt for the last hour." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Huwag kang mag-alala — okay lang ako.',
        native: "Don't worry — I'm okay.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Heard that 'huwag kang mag-alala'? It's the sound of every Filipino home. You're inside it now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm worried (in Tagalog)", correct: ['Nag-aalala ako', 'nag-aalala ako'] },
      { prompt: "Don't worry (in Tagalog)", correct: ["Huwag kang mag-alala", "huwag kang mag-alala"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone today — in Tagalog or even just to yourself — one thing you're worried about. Nag-aalala ako sa ____. Naming worry shrinks it.",
    rwenSignoff: "Ingat. Huwag kang mag-alala — I'm here tomorrow.",
  },

  phase8: {
    scenario: "It's late at night. Your inay (mum) calls from your hometown — there's a typhoon warning, and she's worried about you in Manila. She wants to hear your voice and know you're safe.",
    rwenRole: "Inay — your mother, warm and protective, the kind who calls twice if you don't pick up the first time.",
    successCriteria: "User reassures her using 'huwag kang mag-alala' AND expresses one of their own feelings using takot/nag-aalala. Real exchange — not just one line. Ends warmly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
