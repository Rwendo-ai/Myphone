import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-ca-va',
  module: 1,
  lesson: 2,
  title: 'Ça va? — How are you?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ça va? — three letters, a thousand uses. It's 'how are you?', 'is everything OK?', 'all good?', and 'yeah, fine' all at once. The most useful two words in French.",
    culturalNote: "In English 'How are you?' is often a hollow ritual — you say 'good thanks' regardless. 'Ça va?' between friends actually invites a real (short) answer. It's casual — never use it the first time you meet someone formal.",
  },

  chunks: [
    {
      id: 'ca_va_q',
      target: 'Ça va?',
      native: "How's it going?",
      literal: 'It goes?',
      emoji: '🤔',
      phonetic: 'sah VAH',
      audioRef: null,
    },
    {
      id: 'ca_va_bien',
      target: 'Ça va bien',
      native: 'Going well',
      literal: 'It goes well',
      emoji: '😊',
      phonetic: 'sah vah bee-EHN',
      audioRef: null,
    },
    {
      id: 'ca_va_et_toi',
      target: 'Ça va, et toi?',
      native: 'Good, and you?',
      literal: 'It-goes, and you?',
      emoji: '🔁',
      phonetic: 'sah VAH, ay TWAH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual reciprocity',
    explanation: 'In a casual exchange, you bounce the question back. "Et toi?" (and you?) is the second half of almost every greeting between friends.',
    examples: [
      { target: 'Ça va? — Ça va, et toi?', native: 'How are you? — Good, and you?' },
      { target: 'Tu vas bien? — Oui, et toi?', native: "You doing OK? — Yes, and you?" },
      { target: 'Comment ça va? — Bien, merci, et toi?', native: 'How are things? — Good, thanks, and you?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French phrase to its meaning',
      pairs: [
        { left: 'Ça va?', right: "How's it going?" },
        { left: 'Ça va bien', right: 'Going well' },
        { left: 'Et toi?', right: 'And you?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the friendly reply',
      sentence: 'Ça va bien, et _____?',
      options: ['toi', 'vous', 'moi'],
      correct: 'toi',
      context: 'Talking to a friend — informal.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "How's it going?",
      correct: ['Ça va?', 'Ça va', 'ça va?', 'ça va', 'Ca va?', 'ca va?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Reply to a friend — put the words in order',
      words: ['toi?', 'va,', 'Ça', 'et'],
      correct: ['Ça', 'va,', 'et', 'toi?'],
      translation: 'Good, and you?',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Going well',
      correct: ['Ça va bien', 'ça va bien', 'Ca va bien'],
    },
    {
      type: 'translate',
      instruction: 'A friend asks "Ça va?" — give a complete reply',
      prompt: 'Good, and you?',
      correct: ['Ça va, et toi?', 'Ça va et toi?', 'ça va, et toi?', 'Ca va, et toi?'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting your French friend Camille at a café. You haven't seen her in a few weeks. She walks up smiling.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salut! Ça va?',
        native: "Hi! How's it going?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ça va, et toi?', native: 'Good, and you?', correct: true, feedback: 'Perfect — warm and reciprocal, exactly the rhythm.' },
          { target: 'Ça va bien', native: 'Going well', correct: false, feedback: 'Friendly but you forgot to bounce the question back — it lands a bit flat.' },
          { target: 'Bonjour', native: 'Hello', correct: false, feedback: "She already greeted you and asked a question — answer it!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ça va bien aussi, merci!',
        native: 'Going well too, thanks!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two beats. Question, answer-and-return. That's the French handshake.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "How's it going? (casual French)",
        correct: ['Ça va?', 'Ça va', 'ça va?', 'ça va', 'Ca va?'],
      },
      {
        prompt: "Good, and you? (full reply)",
        correct: ['Ça va, et toi?', 'Ça va et toi?', 'ça va, et toi?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one person 'Ça va?' today — even silently in your head as you pass them. Listen to the rhythm in your own voice.",
    rwenSignoff: "À demain — and yes, I'll ask you Ça va?",
  },

  phase8: {
    scenario: "You arrive at a sunny terrasse café in Lyon to meet your French friend Camille. You haven't seen her in about two months — she's already at the table, sees you, and waves. The first 30 seconds is the classic French greeting volley.",
    rwenRole: "Camille — your French friend, ~30, warm and chatty; she expects the casual register and the back-and-forth, not a stiff formal exchange.",
    successCriteria: "User uses 'Salut' or casual greeting (NOT 'Bonjour madame' — Camille is a friend), uses 'Ça va?' (not the formal 'Comment allez-vous?'), and BOUNCES the question back with 'et toi?' rather than just answering and stopping.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
