import { LessonData } from '../../../../../types/lesson';

/**
 * m03-l10 — Module 3 capstone.
 *
 * Integration lesson: pulls together verb "to be" (l01), age (l02),
 * job (l03), family (l04), hobbies (l05), languages (l06), where you
 * live (l07), personality (l08), and asking back (l09) into one full
 * two-way introduction.
 */
const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nhasi tinosanganisa zvose zvatadzidza muModule 3. Hurukuro yakakwana yekutanga — zita, basa, mhuri, zvinokufadza, mitauro, kwauri kugara, uye kudzosera mibvunzo. Iyi ndiyo nguva yekushandisa zvose zvauri kudzidza pamwe.",
    culturalNote: "MuChiNgezi, hurukuro yekutanga inotenderera kuita 2-3 minutes — kwete pfupi pfupi, kwete refu zvikuru. Tarisa kuti unopindurana — kwete iwe chete uchitaura. Iyi ndiyo tsika ye English-language professional ne social meetings.",
  },

  chunks: [
    {
      id: 'pleasure_to_meet_you',
      target: 'Pleasure to meet you',
      native: 'Ndafara kukuziva',
      literal: 'Pleasure to meet you',
      emoji: '🤝',
      phonetic: 'PLEH-zhur-too-MEET-yoo',
      audioRef: null,
    },
    {
      id: 'and_yourself',
      target: 'And yourself?',
      native: 'Newewo?',
      literal: 'And yourself?',
      emoji: '↩️',
      phonetic: 'and-yor-SELF',
      audioRef: null,
    },
    {
      id: 'lets_keep_in_touch',
      target: "Let's keep in touch",
      native: 'Ngatirambei tichitaurirana',
      literal: "Let us keep in touch",
      emoji: '📱',
      phonetic: 'lets-keep-in-TUTCH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two-way introduction (review + glue)',
    explanation: "Mhuza yakanaka: (1) tanga ne greeting + zita — 'Hi, I'm ___.' (2) wedzera basa kana nzvimbo — 'I'm a ___ from ___.' (3) dzosera — 'And yourself?' (4) ratidza kufara — 'Pleasure to meet you'. (5) pakupedzisa, kana pane shamwari ichitevera — 'Let's keep in touch'.",
    examples: [
      { target: "Hi, I'm Tendai. I'm a teacher from Harare.",  native: 'Mhoro, ndini Tendai. Ndini mudzidzisi anobva kuHarare.' },
      { target: 'And yourself?',                                  native: 'Newewo?' },
      { target: "Pleasure to meet you. Let's keep in touch.",    native: 'Ndafara kukuziva. Ngatirambei tichitaurirana.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mhuza yehurukuro',
      pairs: [
        { left: "I'm a teacher",         right: 'Ndini mudzidzisi' },
        { left: 'And yourself?',         right: 'Newewo?' },
        { left: 'Pleasure to meet you',  right: 'Ndafara kukuziva' },
        { left: "Let's keep in touch",    right: 'Ngatirambei tichitaurirana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndafara kukuziva',
      correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Newewo?',
      correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa kudzosera',
      sentence: "I'm a teacher. And ____?",
      options: ['yourself', 'you', 'your'],
      correct: 'yourself',
      context: "Pakudzosera mubvunzo wakaderera, 'And yourself?' inoshanda zvakanaka.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yekuzvitaridza',
      words: ["I'm", 'Tendai', 'from', 'Harare'],
      correct: ["I'm", 'Tendai', 'from', 'Harare'],
      translation: 'Ndini Tendai anobva kuHarare',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yekupedzisa',
      words: ["Let's", 'keep', 'in', 'touch'],
      correct: ["Let's", 'keep', 'in', 'touch'],
      translation: 'Ngatirambei tichitaurirana',
    },
  ],

  rwenDialogue: {
    intro: "Uri pa professional networking event muHarare. Munhu mutsva auya kwauri — anotaura ChiNgezi. Iyi ndiyo full first-meeting introduction.",
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we've met. I'm Sarah, I work in healthcare.", native: 'Mhoro! Handifunge tati sangane. Ndini Sarah, ndinoshanda muhealthcare.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah, I'm Tendai. I'm a teacher from Harare. Pleasure to meet you — and yourself, where are you from?", native: 'Mhoro Sarah, ndini Tendai. Ndini mudzidzisi anobva kuHarare. Ndafara kukuziva — newewo, unobva kupi?', correct: true,  feedback: "Wakwanisa — wakapindura zita, basa, nzvimbo, wakaratidza tsika, uye wakadzosera mubvunzo." },
          { target: "Tendai. Teacher.",                                                                                          native: 'Tendai. Mudzidzisi.',                                                                                       correct: false, feedback: "Pfupi pfupi — pa networking event, vanoda mutsara wakakwana." },
          { target: "Hi, I'm Tendai. Pleasure.",                                                                                  native: 'Mhoro, ndini Tendai. Pleasure.',                                                                            correct: false, feedback: "Wakatanga zvakanaka asi 'Pleasure' chete inopfupisa zvikuru — wedzera 'to meet you'." },
        ],
      },
      { speaker: 'npc', target: "Oh, I'm originally from Bulawayo. So — what brings you here tonight?", native: 'Aaa, ndinobva kuBulawayo chaiko. Saka — chii chinokuunzira pano manheru?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakasanganisa zvose — zita, basa, nzvimbo, tsika, mubvunzo wekudzosera. Module 3 yapera nesimba!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndafara kukuziva (in English)',                  correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'] },
      { prompt: 'Newewo? (in English)',                            correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Edza nhasi: sangana ne mumwe ushande hurukuro yakakwana muChiNgezi — zita, basa, nzvimbo, kufara kukuziva, uye mubvunzo wekudzosera. Kunyange uri wega pamberi pegirazi, edza zvinopera 60 seconds.",
    rwenSignoff: "Wakwanisa Module 3 yose. Watanga kunge unotaura ChiNgezi chaiko. Tichaonana muModule 4.",
  },

  phase8: {
    scenario: "It's the integration capstone. You're at a Friday-evening networking mixer at a Harare hotel. You walk up to someone you've never met and the goal is to have a full first-meeting introduction in English — name, work, origin, a bit of personality, and a question back.",
    rwenRole: "Daniel, 38, a regional sales lead visiting from Cape Town for the week. Confident, asks two follow-ups, and tries to find common ground.",
    successCriteria: "User opens with name + role/origin in one fluent sentence, exchanges 'Pleasure to meet you' or equivalent, asks at least one open question back ('And yourself?' / 'Where are you from?'), and sustains the exchange for at least 4 turns without dropping the verb 'am' or the article 'a'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
