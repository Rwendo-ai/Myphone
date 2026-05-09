import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03',
  module: 6,
  lesson: 3,
  title: 'Isifuba Lesisu — Chest, Heart, Stomach',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now we go inside. 'Isifuba' is the chest, 'inhliziyo' is the heart, 'isisu' is the stomach. Two of these three carry meanings far beyond their physical organ — like 'heart' in English. Learn the body, gain the metaphor.",
    culturalNote: "In isiNdebele, 'inhliziyo' (heart) is the seat of emotion AND of moral character. To say 'unenhliziyo enhle' (you have a good heart) is high praise — bigger than 'you're nice'. 'Isisu' (stomach) is the seat of patience: 'isisu eside' literally means 'a long stomach' — i.e., a patient person.",
  },

  chunks: [
    {
      id: 'isifuba',
      target: 'isifuba',
      native: 'chest',
      literal: 'isi- (class 7) + fuba',
      emoji: '🫁',
      phonetic: 'ee-see-FOO-bah',
      audioRef: null,
    },
    {
      id: 'inhliziyo',
      target: 'inhliziyo',
      native: 'heart',
      literal: 'in- (class 9) + hliziyo — also means "feelings, character"',
      emoji: '❤️',
      phonetic: 'in-hlee-ZEE-yoh',
      audioRef: null,
    },
    {
      id: 'isisu',
      target: 'isisu',
      native: 'stomach / belly',
      literal: 'isi- (class 7) + su — also figurative for "patience"',
      emoji: '🫃',
      phonetic: 'ee-SEE-soo',
      audioRef: null,
    },
    {
      id: 'umzimba',
      target: 'umzimba',
      native: 'body (whole)',
      literal: 'um- (class 3) + zimba',
      emoji: '🧍',
      phonetic: 'oom-ZEEM-bah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body words that double as feelings',
    explanation: "'Inhliziyo' and 'isisu' aren't just organs — they carry emotional and moral weight. 'Inhliziyo yami ibuhlungu' literally means 'my heart hurts' but figuratively 'I'm grieving'. 'Akalasisu' (he has no stomach) means he has no patience. Learn the literal use first; the metaphor comes naturally.",
    examples: [
      { target: 'Isifuba sami sibuhlungu.', native: 'My chest hurts.' },
      { target: 'Inhliziyo yami iyathokoza.', native: 'My heart is happy / I am glad.' },
      { target: 'Isisu sami sibuhlungu.', native: 'My stomach hurts.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the body word to its meaning',
      pairs: [
        { left: 'isifuba', right: 'chest' },
        { left: 'inhliziyo', right: 'heart' },
        { left: 'isisu', right: 'stomach' },
        { left: 'umzimba', right: 'body (whole)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the isiNdebele',
      prompt: 'My chest hurts',
      correct: ['Isifuba sami sibuhlungu', 'isifuba sami sibuhlungu'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the best translation',
      question: '"Inhliziyo yami iyathokoza" — what does it mean?',
      options: [
        { text: 'My heart is happy / I am glad.', correct: true },
        { text: 'My head is spinning.', correct: false },
        { text: 'My stomach is full.', correct: false },
      ],
      explanation: "'Inhliziyo' = heart, but it also stands in for emotion. 'Iyathokoza' = is rejoicing. So literally 'my heart rejoices' — emotionally 'I'm glad'.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My stomach hurts"',
      sentence: '____ sami sibuhlungu.',
      options: ['Isisu', 'Inhliziyo', 'Isifuba'],
      correct: 'Isisu',
      context: 'Stomach pain is "isisu sibuhlungu" — class 7 noun, "sami" agrees.',
    },
  ],

  rwenDialogue: {
    intro: "You've eaten too much sadza at a family lunch. Your friend's mother sees you wincing.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yini? Awuphathekile kahle?',
        native: "What's wrong? You don't look well?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Isisu sami sibuhlungu.', native: 'My stomach hurts.', correct: true, feedback: "Clean — class 7 noun, agreement on 'sami sibuhlungu'. She'll bring you tea." },
          { target: 'Inhliziyo yami ibuhlungu.', native: 'My heart hurts (= I am grieving).', correct: false, feedback: "That's the figurative one — she'll think someone died, not that you ate too much. Use 'isisu' for stomach pain." },
          { target: 'Ngiyaphila.', native: "I'm fine.", correct: false, feedback: "Polite, but the prompt asked you to name what hurts. Try 'isisu sami sibuhlungu'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hayi shame — ngizokwenzela itiye lengwevu.',
        native: "Oh shame — let me make you ginger tea.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Inhliziyo for emotion, isisu for digestion, isifuba for the chest. Three layers, three doors.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'chest', correct: ['isifuba', 'Isifuba'] },
      { prompt: 'heart', correct: ['inhliziyo', 'Inhliziyo'] },
      { prompt: 'stomach', correct: ['isisu', 'Isisu'] },
      { prompt: 'body (whole)', correct: ['umzimba', 'Umzimba'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Listen to one Ndebele or Zulu gospel song on YouTube today. Listen for 'inhliziyo' — it shows up constantly. Try to hear it three times.",
    rwenSignoff: "The body is also the soul. Sala kuhle.",
  },

  phase8: {
    scenario: "You feel slightly off after dinner at a friend's family home in Bulawayo. The hostess — your friend's mother — asks if you're okay. You need to describe what hurts without overdramatising.",
    rwenRole: "The friend's mother, late 50s, attentive host who wants to make sure you're not getting sick on her watch.",
    successCriteria: "User correctly identifies which body part hurts using 'isifuba', 'isisu', or 'inhliziyo' with the matching possessive and the verb 'sibuhlungu' (or correct agreement form), and avoids the figurative 'inhliziyo' usage when they mean physical chest pain.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
