import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Le corps humain — The human body',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you learned 'avoir mal à'. Today we fill in every body part it works with. Eight nouns, each with a built-in gender — la tête (the head), le bras (the arm). Learn each one with its article, like a one-piece word.",
    culturalNote: "French nouns ARE their gender — 'le bras' isn't 'arm + masculine', it's the single unit 'le-bras'. The trick that works for most learners: never learn 'tête', always learn 'la tête'. The article is part of the word in your memory.",
  },

  chunks: [
    {
      id: 'la_tete_le_coeur',
      target: 'La tête, le cœur',
      native: 'The head, the heart',
      literal: 'The(f) head, the(m) heart',
      emoji: '🧠',
      phonetic: 'lah TET, luh KUHR',
      audioRef: null,
    },
    {
      id: 'le_ventre_le_dos',
      target: 'Le ventre, le dos',
      native: 'The stomach, the back',
      literal: 'The(m) stomach, the(m) back',
      emoji: '🫃',
      phonetic: 'luh VAHN-truh, luh DOH',
      audioRef: null,
    },
    {
      id: 'la_jambe_la_main',
      target: 'La jambe, le bras, la main, le pied',
      native: 'The leg, the arm, the hand, the foot',
      literal: 'The(f) leg, the(m) arm, the(f) hand, the(m) foot',
      emoji: '🦵',
      phonetic: 'lah ZHAHMB, luh BRAH, lah MAHN, luh PYAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body parts come with gender',
    explanation: "Body parts in French are gendered nouns. Some are feminine (la tête, la main, la jambe), some masculine (le cœur, le ventre, le dos, le bras, le pied). The article is part of the word — pair them up. When you plug into 'avoir mal à': à + le → au, à + la stays à la, à + les → aux.",
    examples: [
      { target: "J'ai mal à la main", native: 'My hand hurts (la main = feminine)' },
      { target: "J'ai mal au dos", native: 'My back hurts (au = à + le dos)' },
      { target: "J'ai mal aux jambes", native: 'My legs hurt (aux = à + les, plural)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the body part to its English meaning',
      pairs: [
        { left: 'La tête', right: 'The head' },
        { left: 'Le cœur', right: 'The heart' },
        { left: 'Le dos', right: 'The back' },
        { left: 'La main', right: 'The hand' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Pick the right article — back is masculine.",
      sentence: "_____ dos me fait mal.",
      options: ['Le', 'La', 'Les'],
      correct: 'Le',
      context: "'Dos' is masculine — le dos. So: Le dos me fait mal (my back hurts me).",
    },
    {
      type: 'translate',
      instruction: "Type in French with the article — 'the leg'",
      prompt: "The leg",
      correct: ['La jambe', 'la jambe'],
    },
    {
      type: 'build_sentence',
      instruction: 'Your stomach hurts after lunch. Put the words in order.',
      words: ['au', 'mal', 'ventre', "J'ai"],
      correct: ["J'ai", 'mal', 'au', 'ventre'],
      translation: 'I have a stomach ache (au = à + le ventre)',
    },
    {
      type: 'multiple_choice',
      instruction: "Your hand is throbbing. How do you say 'my hand hurts'?",
      question: 'Pick the right contraction',
      options: [
        { text: "J'ai mal à la main.", correct: true },
        { text: "J'ai mal au main.", correct: false },
        { text: "J'ai mal le main.", correct: false },
      ],
      explanation: "'Main' is feminine (la main), so 'à la main' — no contraction. 'Au' would only work for masculine; 'le' alone misses the 'à'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — combining body part + the pain idiom',
      prompt: "My back hurts",
      correct: ["J'ai mal au dos", "j'ai mal au dos"],
    },
  ],

  rwenDialogue: {
    intro: "You went hiking yesterday. This morning everything hurts. Your French friend Léa asks how you feel.",
    lines: [
      {
        speaker: 'npc',
        target: "Alors, comment ça va après la randonnée?",
        native: 'So, how are you feeling after the hike?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai mal aux jambes, au dos, et aux pieds!", native: 'My legs, back, and feet hurt!', correct: true, feedback: 'Three body parts, three correct contractions (aux, au, aux). Excellent.' },
          { target: "J'ai mal au tête.", native: "I have headache. (wrong contraction)", correct: false, feedback: "'Tête' is feminine — la tête. So 'à la tête', not 'au tête'. Au is only for masculine words." },
          { target: "Je suis pied.", native: "I am foot. (nonsense)", correct: false, feedback: "Body parts pair with 'avoir mal à', not 'être'. You're not the body part — you have pain at it." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah, c'est normal! Tu prends un café, ça va aller.",
        native: "Ah, that's normal! Have a coffee, you'll be fine.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three body parts, three correct articles, in one breath. The body in French is now yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type each one with its article.',
    prompts: [
      {
        prompt: "The head (with article, in French)",
        correct: ['La tête', 'la tête'],
      },
      {
        prompt: "My back hurts (in French)",
        correct: ["J'ai mal au dos", "j'ai mal au dos"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now — point to five body parts on yourself and say each one in French with its article. La tête. Le bras. La main. Le pied. Le dos. Out loud.",
    rwenSignoff: "Ton corps parle français maintenant. À demain.",
  },

  phase8: {
    scenario: "You took a yoga class in Lyon yesterday. Today every part of your body hurts. Your French friend Marc calls to ask about your weekend, and you need to describe — body part by body part — what's sore.",
    rwenRole: "Marc — your French friend, late 30s, sporty and amused; he uses 'tu' throughout, will gently fix wrong articles ('au tête → à la tête'), and laugh sympathetically at your list. Asks 'et où encore?' (where else?).",
    successCriteria: "User names at least 4 different body parts using 'J'ai mal à' with the CORRECT contraction (à la for feminine, au for masculine, aux for plural). Bonus: uses 'le cœur, la main, le pied, le dos' with proper articles. The test is article accuracy across multiple parts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
