import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — Zita rako ndiani?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Kuti uzive mumwe munhu, unotanga nezita. MuChiNgezi unobvunza 'What's your name?' — uye unopindura ne 'My name is...'. Kana wapindurana, unowedzera 'Nice to meet you'.",
    culturalNote: "MuChiShona, kupa zita renyu kumunhu wausingazivi pasina chibvumirano kanozotaridza ushamwari. MuChiNgezi, kupa zita pakutanga kwehurukuro itsika yakajairika — kunyange pavanhu vasingazikani.",
  },

  chunks: [
    {
      id: 'whats_your_name',
      target: "What's your name?",
      native: 'Zita rako ndiani?',
      literal: 'What is your name?',
      emoji: '❓',
      phonetic: 'wuts-yor-NAYM',
      audioRef: null,
    },
    {
      id: 'my_name_is',
      target: 'My name is ...',
      native: 'Zita rangu ndi...',
      literal: 'My name is ...',
      emoji: '🪪',
      phonetic: 'may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'nice_to_meet_you',
      target: 'Nice to meet you',
      native: 'Ndafara kukuziva',
      literal: 'I-am-glad to know-you',
      emoji: '🤝',
      phonetic: 'nais-too-MEET-yoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessives my/your',
    explanation: "MuChiNgezi 'my' ndiyo 'rangu' uye 'your' ndiyo 'rako'. 'What's your name?' inotanga ne 'your' (rako). Mhinduro inotanga ne 'My' (rangu). 'Nice to meet you' inoshandiswa pekuwedzera tsika kana wapindura zita.",
    examples: [
      { target: "What's your name?",  native: 'Zita rako ndiani?' },
      { target: 'My name is Tendai',  native: 'Zita rangu ndiTendai' },
      { target: 'Nice to meet you',   native: 'Ndafara kukuziva' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko',
      pairs: [
        { left: "What's your name?", right: 'Zita rako ndiani?' },
        { left: 'My name is ...',    right: 'Zita rangu ndi...' },
        { left: 'Nice to meet you',  right: 'Ndafara kukuziva' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Zita rako ndiani?',
      correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (zita rako)',
      prompt: 'Zita rangu ndiTendai',
      correct: ['My name is Tendai', 'my name is Tendai', 'My name is tendai', 'my name is tendai'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa kupindurana zita',
      sentence: '____ name is Chipo.',
      options: ['My', 'Your', 'His'],
      correct: 'My',
      context: 'Uri kuzvitaridza kumunhu wausingazivi.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yetsika',
      words: ['Nice', 'to', 'meet', 'you'],
      correct: ['Nice', 'to', 'meet', 'you'],
      translation: 'Ndafara kukuziva',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo wezita',
      words: ["What's", 'your', 'name'],
      correct: ["What's", 'your', 'name'],
      translation: 'Zita rako ndiani?',
    },
  ],

  rwenDialogue: {
    intro: "Uri kunetworking event muHarare. Munhu mutsva auya kwauri — anotaura ChiNgezi.",
    lines: [
      { speaker: 'npc', target: "Hi! What's your name?", native: 'Hesi! Zita rako ndiani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My name is Tendai. Nice to meet you.", native: 'Zita rangu ndiTendai. Ndafara kukuziva.', correct: true,  feedback: "Wakwanisa — wapindura nezita uye wawedzera tsika." },
          { target: 'Tendai.',                                native: 'Tendai.',                                  correct: false, feedback: "Yepfupi — pakutanga, wedzera 'My name is' kuti uite tsika." },
          { target: "What's your name?",                      native: 'Zita rako ndiani?',                        correct: false, feedback: "Vakubvunza iwewe — tanga wapindura, wozobvunzazve." },
        ],
      },
      { speaker: 'npc', target: "Nice to meet you, Tendai. I'm Sarah.", native: 'Ndafara kukuziva, Tendai. Ndini Sarah.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapinda muhurukuro nemuChiNgezi — wakaratidza tsika dzakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "What's your name? (in English)", correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"] },
      { prompt: 'Nice to meet you (in English)',   correct: ['Nice to meet you', 'nice to meet you', 'Nice to meet you.', 'nice to meet you.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tsanangurira mumwe munhu zita rako muChiNgezi nhasi — kunyange zviri kumusoro pengwaro: 'My name is ...'.",
    rwenSignoff: "Ndafara kukuziva. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at a small networking event in Harare for young professionals. Someone you've never met walks up to introduce themselves in English.",
    rwenRole: "Michael, 32, a Kenyan-born consultant working in Zim for 6 months. Confident, friendly, asks follow-up questions.",
    successCriteria: "User exchanges names cleanly: gives 'My name is ...', uses 'Nice to meet you' at least once, and asks the other person's name back if they haven't already.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
