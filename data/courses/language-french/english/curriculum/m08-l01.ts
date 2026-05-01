import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-etre-avoir',
  module: 8,
  lesson: 1,
  title: 'Être & Avoir — The two pillars',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "If French were a house, être (to be) and avoir (to have) would be the two load-bearing walls. Almost every sentence you'll ever say touches one of them. Today, both — fully laid out, all six persons. Memorise these and half of French opens up.",
    culturalNote: "English speakers get a small surprise: French uses avoir (to have) where English uses to be — j'ai 30 ans (I have 30 years), j'ai faim (I have hunger), j'ai froid (I have cold). When in doubt about age, hunger, thirst, fear, or temperature, reach for avoir.",
  },

  chunks: [
    {
      id: 'je_suis',
      target: 'Je suis',
      native: 'I am',
      literal: 'I am',
      emoji: '🙋',
      phonetic: 'zhuh SWEE',
      audioRef: null,
    },
    {
      id: 'jai',
      target: "J'ai",
      native: 'I have',
      literal: 'I-have',
      emoji: '🤲',
      phonetic: 'zhay',
      audioRef: null,
    },
    {
      id: 'tu_es_tu_as',
      target: 'Tu es / Tu as',
      native: 'You are / You have (informal)',
      literal: 'You are / You have',
      emoji: '👉',
      phonetic: 'too EH / too AH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full conjugations of être and avoir',
    explanation: "Learn both grids together — they are the engine of French. ÊTRE: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. AVOIR: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. The vous form (sommes/êtes/avons/avez) is also the polite singular — same word for plural and respectful.",
    examples: [
      { target: 'Je suis fatigué. J\'ai sommeil.', native: "I'm tired. I'm sleepy. (lit. I-have sleep)" },
      { target: 'Nous sommes français. Nous avons un chien.', native: 'We are French. We have a dog.' },
      { target: 'Vous êtes prêt? Vous avez les billets?', native: 'Are you ready? Do you have the tickets?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je suis', right: 'I am' },
        { left: "J'ai", right: 'I have' },
        { left: 'Nous sommes', right: 'We are' },
        { left: 'Ils ont', right: 'They have' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb — careful, English uses "am" but French may not.',
      sentence: "J'_____ trente ans.",
      options: ['ai', 'suis', 'es'],
      correct: 'ai',
      context: "Age uses avoir in French — literally 'I have 30 years', not 'I am 30'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'We are tired (nous form)',
      correct: ['Nous sommes fatigués', 'Nous sommes fatigué', 'nous sommes fatigués', 'Nous sommes fatiguées'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words — say "You (polite) have a beautiful house"',
      words: ['une', 'avez', 'belle', 'Vous', 'maison'],
      correct: ['Vous', 'avez', 'une', 'belle', 'maison'],
      translation: 'You have a beautiful house.',
    },
    {
      type: 'multiple_choice',
      instruction: 'A friend asks if you\'re hungry. You want to say "Yes, I\'m hungry."',
      question: 'Pick the natural French',
      options: [
        { text: "Oui, j'ai faim", correct: true },
        { text: 'Oui, je suis faim', correct: false },
        { text: 'Oui, je suis affamé', correct: false },
      ],
      explanation: "Hunger, thirst, fear, age, cold — these all use avoir in French. 'J'ai faim' literally is 'I have hunger'. The être version isn't used here.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — they-feminine form',
      prompt: 'They (feminine) are happy',
      correct: ['Elles sont contentes', 'Elles sont heureuses', 'elles sont contentes', 'elles sont heureuses'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's apartment in Lyon. Their flatmate Théo walks in. Small talk begins.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salut! Tu es l\'ami de Camille, c\'est ça?',
        native: "Hi! You're Camille's friend, right?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, je suis Alex. J'ai un cadeau pour Camille.", native: "Yes, I'm Alex. I have a gift for Camille.", correct: true, feedback: 'Both verbs in one breath — je suis for identity, j\'ai for possession. Textbook.' },
          { target: "Oui, j'ai Alex. Je suis un cadeau.", native: 'Yes, I have Alex. I am a gift.', correct: false, feedback: "Swapped! Identity is être (je suis Alex), possession is avoir (j'ai un cadeau)." },
          { target: "Oui, je suis Alex. Je suis un cadeau pour Camille.", native: 'Yes, I am Alex. I am a gift for Camille.', correct: false, feedback: "First half perfect. But for the gift, you need 'j'ai un cadeau' — you HAVE the gift, you aren't the gift." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah super! Elle est dans la cuisine.',
        native: "Oh great! She's in the kitchen.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how naturally elle est slipped in there — Théo didn't even think about it. That's where you're heading.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I am French (masculine)',
        correct: ['Je suis français', 'je suis français', 'Je suis Français'],
      },
      {
        prompt: 'I have a question',
        correct: ["J'ai une question", "j'ai une question"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say five sentences out loud today — any five — using je suis or j'ai. Mix them. 'Je suis fatigué.' 'J'ai soif.' 'Je suis content.' Get your mouth used to switching between the two.",
    rwenSignoff: "I'll check in tomorrow. À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "You've just sat down at a co-working space in the Marais. Another remote worker, Théo, swivels his chair and starts a low-key chat — where you're from, what you do, how your day is going. He'll touch on hunger, age, mood, and possessions, so you'll need both être and avoir to keep up.",
    rwenRole: "Théo — late 20s, friendly French freelancer at the co-working space; chatty, asks easy questions, gently corrects if you mix up être and avoir but never makes a big deal of it.",
    successCriteria: "User uses 'je suis' for identity/state (e.g. je suis [name], je suis fatigué, je suis [profession]) AND 'j'ai' for possession or for hunger/age/feelings (j'ai un ordinateur, j'ai 30 ans, j'ai faim). Both verbs must appear at least once. No swapping être for the avoir-idioms.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
