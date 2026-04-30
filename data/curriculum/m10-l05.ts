import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Body Parts — Zvikamu Zvomuviri',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Body parts are essential for health, for description, for storytelling. From head (musoro) to heart (moyo) to legs (makumbo) — knowing your body in Shona lets you describe pain, describe people, and understand health conversations.",
    culturalNote: "In Shona traditional medicine, the body is understood holistically — physical and spiritual are connected. The word 'moyo' (heart) also means the emotional centre of a person. 'Ane moyo wakanaka' = he/she has a good heart (is a kind person).",
  },

  chunks: [
    {
      id: 'musoro_maziso',
      shona: 'Musoro / Maziso',
      english: 'Head / Eyes',
      literal: 'Mu-soro (head), Ma-ziso (eyes)',
      emoji: '👁️',
      phonetic: 'mu-SO-ro / ma-ZI-so',
      audioRef: null,
    },
    {
      id: 'moyo_nzeve',
      shona: 'Moyo / Nzeve',
      english: 'Heart / Ear',
      literal: 'Moyo (heart — also emotional centre), Nzeve (ear)',
      emoji: '❤️👂',
      phonetic: 'MO-yo / nze-VE',
      audioRef: null,
    },
    {
      id: 'maoko_makumbo',
      shona: 'Maoko / Makumbo',
      english: 'Hands / Legs',
      literal: 'Ma-oko (hands plural), Ma-kumbo (legs plural)',
      emoji: '🖐️🦵',
      phonetic: 'ma-O-ko / ma-KUM-bo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body parts and their noun classes',
    explanation: "Body parts in Shona use different noun classes. Musoro (head) is Mu/Mi class. Maziso, Maoko, Makumbo all use the Ma- plural — Ri/Ma class. Moyo (heart) is its own class. The variety is rich — the body speaks many noun classes.",
    examples: [
      { shona: 'Musoro → Misoro', english: 'Head → Heads' },
      { shona: 'Ruoko → Maoko', english: 'Hand → Hands' },
      { shona: 'Gumbo → Makumbo', english: 'Leg → Legs' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the body part to its meaning',
      pairs: [
        { left: 'Musoro', right: 'Head' },
        { left: 'Moyo', right: 'Heart' },
        { left: 'Maoko', right: 'Hands' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Describe a kind person using moyo',
      sentence: 'Ane _____ wakanaka.',
      options: ['moyo', 'musoro', 'maziso'],
      correct: 'moyo',
      context: 'He/she has a good heart (is a kind person).',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Head',
      correct: ['Musoro', 'musoro'],
    },
    {
      type: 'multiple_choice',
      instruction: "'Ane moyo wakanaka' means someone is a good person. Why heart?",
      question: 'Why moyo for a good person?',
      options: [
        { text: 'In Shona, the heart is the emotional/moral centre', correct: true },
        { text: 'It refers to physical heart health', correct: false },
        { text: 'It is just a figure of speech with no cultural meaning', correct: false },
      ],
      explanation: "Moyo is both physical heart and emotional/moral centre in Shona. 'Ane moyo wakanaka' literally means 'has a good heart' — is a kind, good person.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My eyes hurt'",
      words: ['Maziso', 'angu', 'anorwadza.'],
      correct: ['Maziso', 'angu', 'anorwadza.'],
      translation: 'My eyes hurt',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Heart',
      correct: ['Moyo', 'moyo'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen teaches you about the body through a traditional story.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "MuShona, moyo ndiwo musimboti wemunhu. Maziso aona — maoko aita — makumbo aenda. Asi moyo unzwisisa zvose.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndanzwisisa. Moyo ndiwo musimboti — heart is the foundation. Maziso, maoko, makumbo — zvose zvinotungamirwa nemoyo.', english: 'I understand. The heart is the foundation. Eyes, hands, legs — all guided by the heart.', correct: true, feedback: "You heard the philosophy and reflected it back in Shona. That's a deep lesson received." },
          { shona: 'Ndinoona moyo', english: 'I see the heart', correct: false, feedback: "Reflect the philosophy: 'Moyo ndiwo musimboti. Zvose zvinotungamirwa nemoyo.' The heart is the foundation of all." },
          { shona: 'Ndanzwisisa', english: 'I understand', correct: false, feedback: "Show you understood — say what you learned: 'Moyo ndiwo musimboti. Maziso, maoko, makumbo — zvose zvinotungamirwa nemoyo.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wazvifunza. You taught yourself. The body in Shona is complete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Head', correct: ['Musoro', 'musoro'] },
      { prompt: 'Heart', correct: ['Moyo', 'moyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Touch each part of your body today and name it in Shona: Musoro (head), Maziso (eyes), Nzeve (ears), Muromo (mouth), Maoko (hands), Makumbo (legs), Moyo (heart — place your hand there). Know your body in Shona.",
    rwenSignoff: "Your body speaks Shona now. Famba zvakanaka.",
  },
};

export default lesson;
