import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Heureux & Triste — Happy & Sad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "How you feel is who you are today. In French, naming your emotion costs almost nothing — but it changes the whole conversation. A friend asks 'Ça va?' and instead of the reflex 'oui', you say 'Je suis content.' Suddenly you're really there.",
    culturalNote: "French adjectives agree with the speaker. A man says 'content', a woman says 'contente' — same word, one extra 'e' you barely hear out loud but absolutely write. 'Triste' doesn't change at all — it ends in -e already, so it's the same for everyone.",
  },

  chunks: [
    {
      id: 'je_suis_content',
      target: 'Je suis content(e)',
      native: "I'm happy",
      literal: 'I am happy',
      emoji: '😊',
      phonetic: 'zhuh swee kohn-TAHN(T)',
      audioRef: null,
    },
    {
      id: 'je_suis_triste',
      target: 'Je suis triste',
      native: "I'm sad",
      literal: 'I am sad',
      emoji: '😢',
      phonetic: 'zhuh swee TREEST',
      audioRef: null,
    },
    {
      id: 'ca_ma_rendu_heureux',
      target: "Ça m'a rendu(e) heureux/heureuse",
      native: 'It made me happy',
      literal: 'That me-has rendered happy',
      emoji: '🌟',
      phonetic: 'sah mah rahn-DOO uh-RUH(Z)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective agreement',
    explanation: 'Most French adjectives change ending to match the speaker. Masculine = base form. Feminine = add -e (or change spelling slightly). Adjectives ending in -e already (triste) stay the same. The sound barely shifts but the spelling matters.',
    examples: [
      { target: 'Je suis content', native: "I'm happy (man speaking)" },
      { target: 'Je suis contente', native: "I'm happy (woman speaking)" },
      { target: 'Je suis triste', native: "I'm sad (anyone — no change)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je suis content(e)', right: "I'm happy" },
        { left: 'Je suis triste', right: "I'm sad" },
        { left: "Ça m'a rendu(e) heureux/heureuse", right: 'It made me happy' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman is naming her feeling. Pick the right form.',
      sentence: 'Je suis _____ aujourd\'hui.',
      options: ['contente', 'content', 'contentes'],
      correct: 'contente',
      context: "Feminine speaker → 'contente' with the extra -e. The masculine 'content' would be wrong for a woman.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — your friend asks how you are, and today you really are',
      prompt: "I'm happy",
      correct: ['Je suis content', 'Je suis contente', 'je suis content', 'je suis contente'],
    },
    {
      type: 'build_sentence',
      instruction: 'A friend just told you good news. React — put the words in order.',
      words: ['rendu', "m'", 'Ça', 'a', 'heureux'],
      correct: ['Ça', "m'", 'a', 'rendu', 'heureux'],
      translation: 'It made me happy (masculine speaker)',
    },
    {
      type: 'multiple_choice',
      instruction: "A friend cancels dinner. You're disappointed. What's the simplest, true thing to say?",
      question: 'Choose the natural reply',
      options: [
        { text: 'Je suis triste', correct: true },
        { text: 'Je suis content', correct: false },
        { text: 'Je suis tristes', correct: false },
      ],
      explanation: "'Triste' doesn't change form — masculine, feminine, anyone. And no plural here, you're talking about yourself.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say it as the speaker you are',
      prompt: "It made me happy",
      correct: [
        "Ça m'a rendu heureux",
        "Ça m'a rendue heureuse",
        "ça m'a rendu heureux",
        "ça m'a rendue heureuse",
      ],
    },
  ],

  rwenDialogue: {
    intro: "You're walking with your friend Léa in a park in Lyon. She turns to you and asks, gently, how you really are.",
    lines: [
      {
        speaker: 'npc',
        target: 'Alors, vraiment — ça va aujourd\'hui?',
        native: 'So, really — are you okay today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je suis content(e). Ta question m\'a rendu(e) heureux/heureuse.', native: "I'm happy. Your question made me happy.", correct: true, feedback: "That's it — naming the feeling AND noticing what caused it. Very French." },
          { target: 'Je suis content.', native: "I'm happy. (any speaker)", correct: false, feedback: "Almost — but if you're a woman speaking, you'd write 'contente'. Match the form to yourself." },
          { target: 'Oui ça va', native: "Yeah I'm fine", correct: false, feedback: "Safe but flat. She asked 'really' — she wants the real answer." },
        ],
      },
      {
        speaker: 'npc',
        target: "Tu sais — c'est important de dire quand on est content. On oublie.",
        native: "You know — it's important to say when you're happy. We forget.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautiful. Naming a good feeling out loud makes it more real. You just did that in French.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — match the form to yourself.',
    prompts: [
      {
        prompt: "I'm happy (in French)",
        correct: ['Je suis content', 'Je suis contente', 'je suis content', 'je suis contente'],
      },
      {
        prompt: "I'm sad (in French)",
        correct: ['Je suis triste', 'je suis triste'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Once today, name your real feeling out loud in French. Even just to yourself in the kitchen — 'Je suis content' or 'Je suis triste'. Notice if it shifts anything.",
    rwenSignoff: "On commence le module dix ensemble. À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "It's Sunday afternoon. You're sitting on a bench in the Jardin du Luxembourg with your friend Léa. The sun is out, kids are sailing toy boats on the pond. Léa turns to you and asks, gently — 'Alors, vraiment, ça va?' She wants the real answer, not the reflex one.",
    rwenRole: "Léa — your French friend, late 20s, warm and observant; she'll wait through silences, ask 'pourquoi?' if you say happy or sad, and use 'tu' throughout. She listens more than she talks.",
    successCriteria: "User answers with a real emotion using 'Je suis content(e)' or 'Je suis triste' (NOT just 'ça va') — using the correct gendered form for themselves — and adds at least one reason or 'Ça m'a rendu(e) heureux/heureuse' linking the feeling to a cause. Stays in tu register throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
