import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08',
  module: 2,
  lesson: 8,
  title: 'Uxolo — Excuse me / Sorry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Uxolo' carries a lot of weight. It's 'excuse me', 'sorry', 'pardon me', and 'forgive me' — all in one word. You use it to flag a stranger before asking, to apologise after a bump, and to say 'come again?' when you didn't catch what someone said. One word, three jobs.",
    culturalNote: "In Ndebele, 'uxolo' is also the right word for serious apology — losing someone, missing a funeral, hurting someone's feelings. The intensity is calibrated by tone and follow-up, not by switching to a different word. Pair it with 'mama' or 'baba' when speaking to elders ('Uxolo, mama') and the apology lands with appropriate weight. For stronger apology you can say 'uxolo kakhulu' (very sorry).",
  },

  chunks: [
    {
      id: 'uxolo',
      target: 'Uxolo',
      native: 'Excuse me / Sorry / Pardon',
      literal: 'Peace — used as the all-purpose excuse/apology',
      emoji: '🙏',
      phonetic: 'oo-KHOH-loh',
      audioRef: null,
    },
    {
      id: 'uxolo_baba',
      target: 'Uxolo, baba',
      native: 'Excuse me, sir (older man)',
      literal: 'Uxolo + baba — adds age-respect',
      emoji: '🙇',
      phonetic: 'oo-KHOH-loh BAH-bah',
      audioRef: null,
    },
    {
      id: 'uxolo_kakhulu',
      target: 'Uxolo kakhulu',
      native: "I'm very sorry",
      literal: 'Uxolo + kakhulu (a lot) — strong apology',
      emoji: '😔',
      phonetic: 'oo-KHOH-loh kah-KHOO-loo',
      audioRef: null,
    },
    {
      id: 'akulanga',
      target: 'Akula nkinga',
      native: "It's no problem / no worries",
      literal: "There-is no problem — standard reply to 'uxolo'",
      emoji: '👍',
      phonetic: 'ah-KOO-lah n-KEEN-gah',
      audioRef: null,
    },
    {
      id: 'uxolo_buyela',
      target: 'Uxolo, buyela?',
      native: "Sorry, can you repeat?",
      literal: 'Uxolo + buyela (return/repeat)',
      emoji: '🔁',
      phonetic: 'oo-KHOH-loh boo-YEH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Uxolo as the universal soft-opener',
    explanation: "'Uxolo' opens almost any awkward moment. To stop a stranger to ask directions: 'Uxolo, baba...'. To apologise for a bump: 'Uxolo!'. To ask for a repeat: 'Uxolo, buyela?'. It's calibrated by what comes after, not by switching the word. The standard reply when someone says it to you is 'Akula nkinga' — no problem.",
    examples: [
      { target: 'Uxolo, baba — uphuma ngaphi?', native: 'Excuse me sir — where are you from?' },
      { target: 'Uxolo kakhulu.', native: "I'm very sorry." },
      { target: 'Uxolo, buyela? Angizwanga.', native: "Sorry, repeat? I didn't hear." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match phrase to use',
      pairs: [
        { left: 'Uxolo', right: 'Excuse me / Sorry (general)' },
        { left: 'Uxolo kakhulu', right: 'I am very sorry' },
        { left: 'Uxolo, buyela?', right: 'Sorry, can you repeat?' },
        { left: 'Akula nkinga', right: 'No problem (replying)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You bump into someone\'s grandfather in a crowded shop. What\'s the strongest fit?',
      question: 'Pick the phrase that lands',
      options: [
        { text: 'Uxolo kakhulu, baba.', correct: true },
        { text: 'Uxolo.', correct: false },
        { text: 'Hatshi.', correct: false },
      ],
      explanation: "Bumping an elder calls for the upgraded apology — 'kakhulu' adds weight, 'baba' adds age-respect. Bare 'uxolo' would feel light. 'Hatshi' is 'no' and makes no sense here.",
    },
    {
      type: 'fill_blank',
      instruction: 'Add the right opener for stopping a stranger',
      sentence: '____, baba — uphuma ngaphi?',
      options: ['Uxolo', 'Yebo', 'Hatshi'],
      correct: 'Uxolo',
      context: "You're approaching an older man on the street to ask directions.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: "Sorry, can you repeat?",
      correct: ['Uxolo, buyela', 'Uxolo, buyela?', 'uxolo, buyela', 'uxolo buyela', 'Uxolo buyela?'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a busy minibus rank. You need to ask which kombi goes to Mzilikazi. There's an older man checking his phone near the kerb.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Uxolo, baba — ikhombi yeMzilikazi ingaphi?', native: 'Excuse me sir — where is the kombi to Mzilikazi?', correct: true, feedback: "Polite opener with age-respect. He looks up immediately and points." },
          { target: 'Mzilikazi?', native: 'Mzilikazi?', correct: false, feedback: "Word-only questions feel curt. 'Uxolo' opens the moment — without it, you've just barked a place name at a stranger." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "He didn't ask anything. 'Hatshi' is 'no' and would confuse him." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Lapha — ikhombi yokuqala.',
        native: 'Right here — the first kombi.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Uxolo, buyela?', native: "Sorry, can you repeat?", correct: true, feedback: "Honest and polite. He'll happily repeat — and probably slower this time." },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: "If you didn't catch what he said, faking 'yes' will get you on the wrong kombi. Better to ask him to repeat." },
          { target: 'Ngiyabonga.', native: 'Thank you.', correct: false, feedback: "Premature. You haven't actually understood the answer yet." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Uxolo' did three jobs: opened the question, softened the interruption, and asked for a repeat. One word, lots of mileage.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Excuse me / Sorry', correct: ['Uxolo', 'uxolo'] },
      { prompt: "I'm very sorry", correct: ['Uxolo kakhulu', 'uxolo kakhulu'] },
      { prompt: "No problem (reply)", correct: ['Akula nkinga', 'akula nkinga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'uxolo' once today before asking a stranger anything — even if the rest of the question is in English. Notice whether the person responds differently to being approached softly versus directly.",
    rwenSignoff: "Uxolo opens doors strangers don't even know they have. Sala kuhle.",
  },

  phase8: {
    scenario: "You're walking through Bulawayo's CBD looking for a specific bookshop. You stop two strangers to ask, then accidentally bump a third person on a busy pavement and need to apologise quickly. Practice 'uxolo' in all three roles: opener, repeat-request, apology.",
    rwenRole: "Three-character scenario: an older woman who'll point but speak fast (use 'uxolo, buyela?'), a younger man who'll be helpful, and an elderly man you bump into who needs a proper 'uxolo kakhulu, baba'.",
    successCriteria: "User opens BOTH stranger-questions with 'Uxolo' (not just diving into the question), uses 'Uxolo, buyela?' when the directions come too fast, and apologises with 'Uxolo kakhulu, baba' (NOT bare 'uxolo') after the bump with the elder.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
