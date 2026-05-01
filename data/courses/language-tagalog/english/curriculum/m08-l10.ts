import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'Isang Araw — A Day in Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 finale. We don't introduce new chunks — we walk you through a whole day in Tagalog. Morning, work, evening, plans for tomorrow. Three tenses, one you. Let's see what you've built.",
    culturalNote: "A standard Filipino day-conversation flows: greet, ask kumusta, share what you did (past), what you're doing (present), what you'll do (future). All three tenses appear in even a 30-second chat.",
  },

  chunks: [
    {
      id: 'review_morning',
      target: 'Gumigising ako, naliligo, nag-aalmusal',
      native: 'I wake up, shower, have breakfast',
      literal: 'Waking I, bathing, having-breakfast',
      emoji: '🌅',
      phonetic: 'gu-mi-GI-sing a-KO, na-li-LI-go, nag-a-al-MU-sal',
      audioRef: null,
    },
    {
      id: 'review_day',
      target: 'Pumupunta ako sa trabaho, may meeting ako',
      native: 'I go to work, I have a meeting',
      literal: 'Going I to work, have meeting I',
      emoji: '💼',
      phonetic: 'pu-mu-PUN-ta a-KO sa tra-BA-ho, my MI-ting a-KO',
      audioRef: null,
    },
    {
      id: 'review_evening_plan',
      target: 'Umuwi ako, nagluto, magkita tayo bukas',
      native: "I went home, cooked, see you tomorrow",
      literal: 'Went-home I, cooked, see-each-other we tomorrow',
      emoji: '🌙',
      phonetic: 'u-MU-wi a-KO, nag-LU-to, mag-KI-ta TA-yo BU-kas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb fluency — three tenses, one day',
    explanation: "Past, present, future — all three live in syllables. Doubled with um/nag = now (gumigising, nagluluto). No doubling = past (gumising, nagluto). Doubled without -um- = future (gigising, magluluto). One day, all three.",
    examples: [
      { target: 'Kumain ako kanina', native: 'I ate earlier (past)' },
      { target: 'Kumakain ako ngayon', native: 'I am eating now (present)' },
      { target: 'Kakain ako mamaya', native: "I'll eat later (future)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each tense form to its meaning (root: kain — eat)',
      pairs: [
        { left: 'Kumain ako', right: 'I ate' },
        { left: 'Kumakain ako', right: 'I am eating' },
        { left: 'Kakain ako', right: "I'll eat" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A friend asks what you did yesterday.',
      sentence: 'Kahapon, _____ ako sa palengke.',
      options: ['pumunta', 'pumupunta', 'pupunta'],
      correct: 'pumunta',
      context: 'Past = no doubling. Pumupunta = is going. Pupunta = will go.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (present habit)',
      prompt: 'I cook dinner (every night, habit)',
      correct: ['Nagluluto ako ng hapunan', 'nagluluto ako ng hapunan'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to plan tomorrow: "Tomorrow, I will cook dinner"',
      words: ['hapunan', 'ako', 'Magluluto', 'ng', 'Bukas,'],
      correct: ['Bukas,', 'Magluluto', 'ako', 'ng', 'hapunan'],
      translation: "Tomorrow, I'll cook dinner",
    },
    {
      type: 'multiple_choice',
      instruction: "Your tita asks what you did this morning.",
      question: 'Which form is correct?',
      options: [
        { text: 'Naligo ako kanina', correct: true },
        { text: 'Naliligo ako kanina', correct: false },
        { text: 'Maliligo ako kanina', correct: false },
      ],
      explanation: 'Past = no doubling. Naligo = bathed. Naliligo = bathing. Maliligo = will bathe.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Let's see each other tomorrow",
      correct: ['Magkita tayo bukas', 'magkita tayo bukas'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday afternoon. Your tita corners you for the longest catch-up of the week — past, present, future, all of it.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, anong ginawa mo kahapon?',
        native: 'Child, what did you do yesterday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pumunta ako sa palengke, kumain ng adobo, naligo', native: 'I went to the market, ate adobo, bathed', correct: true, feedback: 'Three past verbs, no doubling — clean and Filipino.' },
          { target: 'Pumupunta ako sa palengke', native: "I'm going to the market", correct: false, feedback: 'She asked about kahapon (yesterday) — switch to past.' },
          { target: 'Pupunta ako bukas', native: "I'll go tomorrow", correct: false, feedback: "Future — not what she's asking about." },
        ],
      },
      {
        speaker: 'npc',
        target: 'At ngayon? Anong ginagawa mo?',
        native: 'And now? What are you doing?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nag-aaral ako ng Tagalog', native: "I'm studying Tagalog", correct: true, feedback: 'Doubled syllable, present — perfect.' },
          { target: 'Nag-aral ako ng Tagalog', native: 'I studied Tagalog', correct: false, feedback: "Past — but she's asking about right now." },
          { target: 'Mag-aaral ako ng Tagalog', native: "I'll study Tagalog", correct: false, feedback: 'Future — but she\'s asking about now.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Anak, ang galing mo na! Magkita tayo bukas, ha?',
        native: 'Child, you\'re so good now! See you tomorrow, okay?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Past. Present. Future. Whole module, one conversation. You walked through a Filipino day in Tagalog. Galing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I ate adobo (past)', correct: ['Kumain ako ng adobo', 'kumain ako ng adobo'] },
      { prompt: 'I am studying Tagalog (present)', correct: ['Nag-aaral ako ng Tagalog', 'nag-aaral ako ng Tagalog', 'nag-aaral ako ng tagalog'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk through your whole day in Tagalog — out loud or in your head. Yesterday (past), today (present), tomorrow (future). One sentence each. That's a real conversation.",
    rwenSignoff: 'Galing mo. Magkita tayo bukas — until tomorrow, journey-maker.',
  },

  phase8: {
    scenario: "Sunday afternoon at your tita's house — the long catch-up. She wants to hear about yesterday, what you're up to right now, and your plans for tomorrow. You'll narrate your whole day arc using all three tenses (past, present, future) without slipping.",
    rwenRole: "Tita Marivic — back from lesson 1, cozily settled with halo-halo and ready for a 4-minute catch-up; she gently nudges you back to the right tense if you slip.",
    successCriteria: "User uses at least one verb in each of the three tenses correctly: past (no doubling), present (doubled syllable with um/nag), and future (doubled without -um- / mag- + doubling). Time markers (kahapon, ngayon, bukas) appear and tenses don't get crossed.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
