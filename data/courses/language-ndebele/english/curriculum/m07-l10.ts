import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10',
  module: 7,
  lesson: 10,
  title: 'A travel story — full conversation',
  estimatedMinutes: 8,
  xpReward: 45,

  hook: {
    rwenLine: "Today, no new vocabulary. We string nine lessons into one journey — Bulawayo to Hwange, asking, getting lost, recovering. If you can hold this conversation, you can travel anywhere in Matabeleland.",
    culturalNote: "Storytelling — indaba — is how Ndebele speakers transmit knowledge. A traveller who returns home and tells their journey well is honoured. The structure is simple: where I went, who I met, what I learned. Try to tell yours that way at the end of this lesson.",
  },

  chunks: [
    {
      id: 'ngahamba',
      target: 'Ngahamba...',
      native: 'I went / I travelled...',
      literal: 'I-went (past)',
      emoji: '🛣️',
      phonetic: 'ngah-hahm-bah',
      audioRef: null,
    },
    {
      id: 'ngahlangana',
      target: 'Ngahlangana le...',
      native: 'I met...',
      literal: 'I-met with',
      emoji: '🤝',
      phonetic: 'ngah-shlahn-gah-nah leh',
      audioRef: null,
    },
    {
      id: 'ngabona',
      target: 'Ngabona...',
      native: 'I saw...',
      emoji: '👀',
      phonetic: 'ngah-boh-nah',
      audioRef: null,
    },
    {
      id: 'ngafunda',
      target: 'Ngafunda ukuthi...',
      native: 'I learned that...',
      emoji: '📖',
      phonetic: 'ngah-foon-dah oo-koo-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense — nga-',
    explanation: "Past actions in isiNdebele use the prefix nga- on the verb stem. Ngiya (I go) → Ngahamba (I went). Ngibona (I see) → Ngabona (I saw). Ngifunda (I learn) → Ngafunda (I learned). It's the storyteller's tense — every indaba uses it. Hold it lightly: travel-mode lessons aren't about mastering grammar, they're about following the story.",
    examples: [
      { target: 'Ngahamba eHwange.', native: 'I travelled to Hwange.' },
      { target: 'Ngabona indlovu.', native: 'I saw an elephant.' },
      { target: 'Ngahlangana lomngane.', native: 'I met a friend.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the past-tense verbs',
      pairs: [
        { left: 'Ngahamba', right: 'I went / I travelled' },
        { left: 'Ngabona', right: 'I saw' },
        { left: 'Ngahlangana le-', right: 'I met (with)' },
        { left: 'Ngafunda ukuthi', right: 'I learned that' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence',
      words: ['Ngahamba', 'eHwange', 'ngebhasi'],
      correct: ['Ngahamba', 'eHwange', 'ngebhasi'],
      translation: 'I travelled to Hwange by bus.',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'I saw an elephant.',
      correct: ['Ngabona indlovu', 'Ngabona indlovu.', 'ngabona indlovu'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "What's the traditional structure of a Ndebele indaba (story)?",
      options: [
        { text: "Where I went, who I met, what I learned.", correct: true },
        { text: "Weather, food, sleep.", correct: false },
        { text: "A list of expenses.", correct: false },
      ],
      explanation: "The three-beat structure — place, person, lesson — is how journeys are told and remembered across Matabeleland. Try ending each story with what you learned, even if it's small.",
    },
  ],

  rwenDialogue: {
    intro: "You're back in Bulawayo after a four-day trip. Your friend wants to hear everything.",
    lines: [
      { speaker: 'npc',  target: 'Awu, mfowethu, ubuyile! Uhambo lwakho lukanjani?', native: "Ah, brother, you're back! How was your journey?" },
      { speaker: 'rwen', rwenLine: "Open with where you went. Use Ngahamba." },
      { speaker: 'user', userChoices: [
        { target: 'Ngahamba eHwange ngebhasi.', native: 'I travelled to Hwange by bus.', correct: true, feedback: "Place + transport. The story has begun." },
        { target: 'Ngiya eHwange.', native: "I'm going to Hwange.", correct: false, feedback: "But you've already been — use the past tense, Ngahamba." },
      ]},
      { speaker: 'npc',  target: 'Wabona ini lapho?', native: 'What did you see there?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngabona izindlovu lamabhubesi.', native: 'I saw elephants and lions.', correct: true, feedback: "Plurals nailed. He'll be impressed." },
        { target: 'Ngahlangana lomgcwabi.', native: 'I met a gravedigger.', correct: false, feedback: "Strong vocab, but it doesn't answer his question. He asked what you SAW." },
      ]},
      { speaker: 'npc',  target: 'Wahlangana lobani?', native: 'Who did you meet?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngahlangana lomngane omtsha kweMatobo.', native: 'I met a new friend at Matobo.', correct: true, feedback: "Person + place. The middle of your indaba is solid." },
      ]},
      { speaker: 'npc',  target: 'Wafunda ini ohanjeni lwakho?', native: 'What did you learn from your trip?' },
      { speaker: 'rwen', rwenLine: "Last beat. Anything you learned — small is fine. End the story." },
      { speaker: 'user', userChoices: [
        { target: 'Ngafunda ukuthi izwe lethu likhulu kakhulu.', native: 'I learned that our country is very big.', correct: true, feedback: "A real Ndebele indaba ending — humble and rooted." },
        { target: 'Ngafunda isiNdebele.', native: 'I learned isiNdebele.', correct: true, feedback: "Honest and on-topic. He'll smile." },
      ]},
      { speaker: 'npc',  target: 'Wenze kuhle, mfowethu. Sigijima nawe ngohambo olulandelayo.', native: 'You did well, brother. We run with you on the next journey.' },
    ],
  },

  activeRecall: {
    instruction: 'Tell your travel story.',
    prompts: [
      { prompt: 'How do you say "I travelled to Hwange"?', correct: ['Ngahamba eHwange', 'Ngahamba eHwange.', 'ngahamba eHwange'] },
      { prompt: 'How do you say "I saw elephants"?', correct: ['Ngabona izindlovu', 'Ngabona izindlovu.', 'ngabona izindlovu'] },
      { prompt: 'How do you say "I learned that..." (start of a sentence)?', correct: ['Ngafunda ukuthi', 'Ngafunda ukuthi...', 'ngafunda ukuthi'] },
    ],
  },

  mission: {
    title: 'Tell your own travel indaba',
    task: "Pick any trip you've taken — the longest, the strangest, the most boring. In isiNdebele, give three sentences only: where I went (Ngahamba e-), who I met or what I saw (Ngahlangana / Ngabona), what I learned (Ngafunda ukuthi). Three sentences. Out loud. To no-one.",
    rwenSignoff: "You started this module asking 'Uya ngaphi?' You finish it telling the whole journey home. That is travel-mode complete.",
  },

  phase8: {
    scenario: "Tell Rwen the full story of an imagined or real journey through Matabeleland — how you travelled, what you saw, who you met, and what you learned. Use the indaba structure.",
    rwenRole: "Bulawayo elder hearing the returning traveller's report — patient, prompts gently for more detail",
    successCriteria: "User produced at least three past-tense verbs (Ngahamba / Ngabona / Ngahlangana / Ngafunda) and ended with a 'what I learned' line.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
