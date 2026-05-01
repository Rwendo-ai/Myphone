import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — Manheru',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Manheru! Kana zuva ranyura, kwaziso inochinjazve kuenda pa 'Good evening'. Iyi inonyanya kushandiswa kubva 5pm kusvika usiku — pakati pe Masikati ne kurara.",
    culturalNote: "MuChiShona, kana wadzoka kumba uchibva kubasa, vanhu vanobvunza 'Maswera sei?' kana 'Maswera here?' — kuda kuziva zvazvanga zvichiitika zuva rose. MuChiNgezi 'How was your day?' inonyatsoshanda — yakanyatsoreva 'Maswera sei zuva razvanga zvakaipa kana zvakanaka?'.",
  },

  chunks: [
    {
      id: 'good_evening',
      target: 'Good evening',
      native: 'Manheru',
      literal: undefined,
      emoji: '🌆',
      phonetic: 'good-EEV-ning',
      audioRef: null,
    },
    {
      id: 'how_was_your_day',
      target: 'How was your day?',
      native: 'Maswera sei?',
      literal: 'How was your day? (past)',
      emoji: '🤔',
      phonetic: 'how-wuz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'it_was_good',
      target: 'It was good',
      native: 'Zvanga zvakanaka',
      literal: 'It was good (past)',
      emoji: '✨',
      phonetic: 'it-wuz-GOOD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense in greetings',
    explanation: "Pa kwaziso yemanheru, vanhu vanobvunza nezvezuva razvapfuura — saka tinoshandisa 'was' (zvanga). 'How was your day?' = 'Zuva rako ranga rakaita sei?'. Mhinduro 'It was good' = 'Zvanga zvakanaka'. Yakasiyana ne 'How's your day?' (yenguva ino) yetadzidza nezuro.",
    examples: [
      { target: 'Good evening',     native: 'Manheru' },
      { target: 'How was your day?', native: 'Maswera sei?' },
      { target: 'It was good',      native: 'Zvanga zvakanaka' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko',
      pairs: [
        { left: 'Good evening',     right: 'Manheru' },
        { left: 'How was your day?', right: 'Maswera sei?' },
        { left: 'It was good',      right: 'Zvanga zvakanaka' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Manheru',
      correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pindura kumumwe akubvunza nezveruzuva',
      prompt: 'Zvanga zvakanaka',
      correct: ['It was good', 'it was good', 'It was good.', 'it was good.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mhinduro yenguva yakapfuura',
      sentence: 'How ____ your day?',
      options: ['was', 'is', 'are'],
      correct: 'was',
      context: 'Inguva 7pm — manheru. Tinotaura nezvezuva rapera.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro',
      words: ['It', 'was', 'a', 'good', 'day'],
      correct: ['It', 'was', 'a', 'good', 'day'],
      translation: 'Rakanga riri zuva rakanaka',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Maswera sei?',
      correct: ['How was your day?', 'how was your day?', 'How was your day', 'how was your day'],
    },
  ],

  rwenDialogue: {
    intro: 'Inguva 7pm. Wadzoka kumba — uchasangana nehama yako inotaura ChiNgezi pakudya.',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: 'Manheru! Maswera sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good evening. It was good, thanks.", native: 'Manheru. Zvanga zvakanaka, ndatenda.', correct: true,  feedback: "Wakwanisa — wapindura nenguva yakatarisirwa." },
          { target: 'Good morning.',                       native: 'Mangwanani.',                            correct: false, feedback: "Inguva yamanheru — 'Good evening' ndiyo yakanaka." },
          { target: "How's your day?",                     native: 'Maswera sei? (yenguva ino)',             correct: false, feedback: "Wapindurirwa — paunenge uchipa mhinduro, ungwarira nguva yakapfuura." },
        ],
      },
      { speaker: 'npc', target: "I'm glad. Let's eat.", native: 'Ndafara. Tisangane patafura.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaratidza tsika dzemumhuri kunyangwe muChiNgezi — kupindura kuvanhu vakuru zvakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Good evening (in English)', correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'] },
      { prompt: 'It was good (in English)',  correct: ['It was good', 'it was good', 'It was good.', 'it was good.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Manheru ano, kwazisa mumwe wemumhuri uchiti 'Good evening' — uye kana wabvunzwa 'How was your day?', edza kupindura muChiNgezi.",
    rwenSignoff: "Manheru akanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "It's 7pm and you've sat down for dinner with your aunt who married a Brit and the family now speaks English at table. Greet her and chat briefly about your day.",
    rwenRole: "Auntie Vimbai, 55, your aunt who lived in London for 20 years. Warm, curious, asks gentle questions in English.",
    successCriteria: "User opens with 'Good evening' (not 'Good morning' or 'Good afternoon'), uses past tense 'It was good' / 'How was your day?' (not present tense), and stays warm-but-respectful.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
