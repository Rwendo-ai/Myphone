import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'Yuǎn ma? — Far? Near?',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In Beijing, 'just around the corner' can mean a 20-minute walk. In Shanghai, 'far' can mean two metro stops. You need to ask. The single most useful phrase: 'Yuǎn ma?' — Is it far?",
    culturalNote: "Adding 'ma' (吗) to a statement turns it into a yes/no question. 'Yuǎn' = far. 'Yuǎn ma?' = (Is it) far? You'll use this pattern with everything: 'Hǎo ma?' (Are you OK?), 'Guì ma?' (Is it expensive?). One particle, infinite questions.",
  },

  chunks: [
    {
      id: 'yuan_ma',
      target: 'Yuǎn ma?',
      native: 'Is it far?',
      literal: '(远吗?) lit: far-(question)?',
      emoji: '📏',
      phonetic: 'yu-AN MA (yuǎn dips, ma is light)',
      audioRef: null,
    },
    {
      id: 'wu_fenzhong_zou_lu',
      target: 'Wǔ fēnzhōng zǒu lù',
      native: 'A five-minute walk',
      literal: '(五分钟走路) lit: 5-minutes-walk-road',
      emoji: '🚶',
      phonetic: 'WOO fun-jong dzoh LOO',
      audioRef: null,
    },
    {
      id: 'hen_jin',
      target: 'Hěn jìn',
      native: 'Very close',
      literal: '(很近) lit: very-near',
      emoji: '📍',
      phonetic: 'hun JEEN (hěn dips, jìn falls)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Adjective] + ma? — Yes/no questions',
    explanation: "Take any adjective — yuǎn (far), jìn (near), guì (expensive), lèi (tired) — and add 'ma' (吗). It becomes a yes/no question. To answer 'yes' you repeat the adjective: 'Yuǎn' (yes, far). To answer 'no' you negate it: 'Bù yuǎn' (not far).",
    examples: [
      { target: 'Jìn ma?', native: 'Is it close?' },
      { target: 'Bù yuǎn', native: 'Not far' },
      { target: 'Hěn jìn', native: 'Very close' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Yuǎn ma?', right: 'Is it far?' },
        { left: 'Wǔ fēnzhōng zǒu lù', right: 'A 5-minute walk' },
        { left: 'Hěn jìn', right: 'Very close' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Is it far?',
      correct: ['Yuǎn ma?', 'Yuan ma?', 'yuan ma', 'yuǎn ma', '远吗?', '远吗'],
    },
    {
      type: 'fill_blank',
      instruction: "Reply 'not far' — fill the negation",
      sentence: '_____ yuǎn',
      options: ['Bù', 'Hěn', 'Ma'],
      correct: 'Bù',
      context: "'Bù' (不) negates verbs and adjectives. 'Bù yuǎn' = not far. 'Bù guì' = not expensive. Fast and useful.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'a five-minute walk'",
      words: ['lù', 'Wǔ', 'fēnzhōng', 'zǒu'],
      correct: ['Wǔ', 'fēnzhōng', 'zǒu', 'lù'],
      translation: 'A five-minute walk',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Very close',
      correct: ['Hěn jìn', 'Hen jin', 'hen jin', 'hěn jìn', '很近'],
    },
    {
      type: 'multiple_choice',
      instruction: "You ask 'Yuǎn ma?' Local replies 'Wǔ fēnzhōng zǒu lù'. Should you walk?",
      question: "What did they actually tell you?",
      options: [
        { text: "It's a 5-minute walk — yes, walk", correct: true },
        { text: "It's 5 km — too far to walk", correct: false },
        { text: "It costs 5 yuan — take a taxi", correct: false },
      ],
      explanation: "'Fēnzhōng' (分钟) = minutes. 'Zǒu lù' (走路) = walk (literally walk-road). So 'Wǔ fēnzhōng zǒu lù' = '5 minutes by walking'. Easy walk.",
    },
  ],

  rwenDialogue: {
    intro: "You're in Xi'an near the city wall, looking for the famous Muslim Quarter food street. You stop a man fixing his bicycle. You can already see he's the kind of person who gives directions like he's been waiting for someone to ask.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Huí mín jiē yuǎn ma?', native: 'Is the Muslim Quarter far?', correct: true, feedback: 'Place + yuǎn ma. Clean and locally phrased.' },
          { target: 'Wǒ qù Huí mín jiē', native: "I go Muslim Quarter", correct: false, feedback: "That's a statement, not a question. Add 'yuǎn ma?' to ask if it's far." },
          { target: 'Huí mín jiē hǎo ma?', native: 'Is the Muslim Quarter good?', correct: false, feedback: "Right pattern, wrong adjective — you wanted to ask if it's FAR (yuǎn), not GOOD (hǎo)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bù yuǎn, hěn jìn',
        native: 'Not far, very close',
      },
      {
        speaker: 'npc',
        target: 'Wǔ fēnzhōng zǒu lù',
        native: 'A 5-minute walk',
      },
      {
        speaker: 'rwen',
        rwenLine: "You asked the right question and you understood the answer. That's the whole game. Tonight you'll be eating yángròu pàomó — lamb and bread soup. Earned.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Is it far?',
        correct: ['Yuǎn ma?', 'Yuan ma?', 'yuan ma', 'yuǎn ma', '远吗?', '远吗'],
      },
      {
        prompt: 'Very close',
        correct: ['Hěn jìn', 'Hen jin', 'hen jin', 'hěn jìn', '很近'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a place near where you are right now — a shop, a friend's house, the nearest train station. Out loud, ask: '[place] yuǎn ma?' Then answer yourself honestly in Mandarin: 'hěn jìn' or 'bù jìn'. Build the muscle.",
    rwenSignoff: "Distance is a feeling — the words help you ask. Zàijiàn.",
  },

  phase8: {
    scenario: "You've just stepped off the metro at Xi'an Bell Tower station and you want to know how far it is to the Drum Tower. You ask a teenager scrolling her phone in the station hall.",
    rwenRole: "Wáng Měi (王美) — local university student, 20, helpful but distracted. Will answer in short, real-life Mandarin (no slowing down for tourists).",
    successCriteria: "User asks '[place] yuǎn ma?' (NOT 'Wǒ qù...' which is a statement). Understands when Rwen replies with either 'hěn jìn' or 'X fēnzhōng zǒu lù' and reacts appropriately (decides to walk vs taxi).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
