import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Nhetembo — Shona Proverbs',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "Proverbs are the soul of Shona language. They compress generations of wisdom into one sentence. Using a proverb correctly in conversation — even a learner — signals deep cultural respect. Today we learn three of the most important ones.",
    culturalNote: "In Shona culture, proverbs (nhetembo or tsumo) are not just sayings — they are tools for teaching, for resolving conflict, for expressing what direct speech cannot. An elder who uses a proverb at the right moment changes the entire conversation.",
  },

  chunks: [
    {
      id: 'chara_chimwe',
      target: 'Chara chimwe hachitswanyi inda',
      native: 'One finger cannot kill a louse — unity is needed',
      literal: 'Finger one it-cannot-kill louse',
      emoji: '🤝',
      phonetic: 'CHA-ra chi-mwe ha-chi-tswa-NYI in-da',
      audioRef: null,
    },
    {
      id: 'ukama_igasva',
      target: 'Ukama igasva hunozadziswa nekudya',
      native: 'Relationship is incomplete — completed by sharing food',
      literal: 'Relationship is-incomplete it-is-completed by-eating',
      emoji: '🍽️',
      phonetic: 'u-ka-ma i-ga-SVA hu-no-za-DZI-swa ne-ku-DYA',
      audioRef: null,
    },
    {
      id: 'kushanda_ndiko',
      target: 'Kushanda ndiwo mutsvairo unokudzwa',
      native: 'Hard work is the broom that is honoured',
      literal: 'Working is-the broom that-is-respected',
      emoji: '🧹',
      phonetic: 'ku-SHAN-da ndi-wo mu-tsva-I-ro u-no-ku-DZwa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Proverbs as compressed wisdom',
    explanation: "Each proverb compresses a life lesson into an image. Chara chimwe (unity), Ukama igasva (food seals bonds), Kushanda ndiwo mutsvairo (work earns respect). Use them when the moment calls — not as performance, but as wisdom offered.",
    examples: [
      { target: 'Chara chimwe hachitswanyi inda', native: 'Unity is strength (one finger cannot kill a louse)' },
      { target: 'Ukama igasva hunozadziswa nekudya', native: 'Food completes relationships' },
      { target: 'Kushanda ndiwo mutsvairo unokudzwa', native: 'Work earns respect' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the proverb to its lesson',
      pairs: [
        { left: 'Chara chimwe hachitswanyi inda', right: 'Unity is needed' },
        { left: 'Ukama igasva hunozadziswa nekudya', right: 'Food completes relationships' },
        { left: 'Kushanda ndiwo mutsvairo unokudzwa', right: 'Work earns respect' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Your team is struggling alone. Which proverb is most fitting?",
      question: 'Which proverb fits a team struggling alone?',
      options: [
        { text: 'Chara chimwe hachitswanyi inda', correct: true },
        { text: 'Ukama igasva hunozadziswa nekudya', correct: false },
        { text: 'Kushanda ndiwo mutsvairo', correct: false },
      ],
      explanation: "'Chara chimwe hachitswanyi inda' — one finger cannot kill a louse — perfectly captures the need for teamwork/unity.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'One finger cannot kill a louse (start)',
      correct: ['Chara chimwe hachitswanyi inda', 'chara chimwe hachitswanyi inda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the relationship proverb',
      sentence: 'Ukama igasva hunozadziswa _____.',
      options: ['nekudya', 'nemari', 'nekutaura'],
      correct: 'nekudya',
      context: 'Relationship is completed by sharing food.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Work is the broom that is respected'",
      words: ['Kushanda', 'ndiwo', 'mutsvairo', 'unokudzwa.'],
      correct: ['Kushanda', 'ndiwo', 'mutsvairo', 'unokudzwa.'],
      translation: 'Hard work is the broom that is honoured',
    },
    {
      type: 'translate',
      instruction: 'Type the relationship proverb in Shona',
      prompt: 'Relationship is incomplete, completed by sharing food',
      correct: ['Ukama igasva hunozadziswa nekudya', 'ukama igasva hunozadziswa nekudya'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's grandfather joins the conversation and offers wisdom through proverbs.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ukadzidza rurimi rwevanhu, ukadzidza moyo wavo.',
        native: 'If you learn the language of a people, you learn their heart.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvakanaka zvikuru, Sekuru. Ndinoziva izvozvo — ChiShona chadindira moyo wangu.', native: "Very good, Grandfather. I know that — Shona has touched my heart.", correct: true, feedback: "You received wisdom and reflected it back in Shona. Sekuru nods slowly with deep respect." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Respond with depth — 'Zvakanaka zvikuru, Sekuru. ChiShona chadindira moyo wangu.' — Shona has touched my heart." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Show you received the wisdom: 'Zvakanaka zvikuru, Sekuru. ChiShona chadindira moyo wangu.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "ChiShona chadindira moyo wako. It has touched your heart. Sekuru heard you. I heard you. Zimbabwe heard you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'One finger cannot kill a louse', correct: ['Chara chimwe hachitswanyi inda', 'chara chimwe hachitswanyi inda'] },
      { prompt: 'Relationship is completed by sharing food', correct: ['Ukama igasva hunozadziswa nekudya', 'ukama igasva hunozadziswa nekudya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Choose one of these three proverbs — the one that speaks most to you right now. Say it out loud. Think about where in your life it applies. Then share it with someone, in Shona.",
    rwenSignoff: "Proverbs live on the tongue and in the heart. Famba zvakanaka.",
  },
};

export default lesson;
