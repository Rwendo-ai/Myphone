import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Polite "How are you?" forms',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! MuChiNgezi pane kwaziso dzakapfava (casual) ne dzine tsika dzakakwirira (formal). Pamabasa, mubvunzo, kana paunenge uchitaura nemukuru — unoshandisa 'How do you do?' kwete 'How are you?'.",
    culturalNote: "MuChiShona, 'Makadii zvakanaka here?' inoita seye yetsika. MuChiNgezi, 'How do you do?' yashata kuva yekare-kare zvishoma — asi ichiri kushanda mumabasa, mainterview, kana paunosangana mukuru wamabasa kekutanga.",
  },

  chunks: [
    {
      id: 'how_do_you_do',
      target: 'How do you do?',
      native: 'Makadii zvakanaka here?',
      literal: 'How do you do?',
      emoji: '🎩',
      phonetic: 'how-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'pleased_to_meet_you',
      target: 'Pleased to meet you',
      native: 'Ndafara kukuziva',
      literal: 'I-am-pleased to meet-you',
      emoji: '🤝',
      phonetic: 'PLEEZD-too-MEET-yoo',
      audioRef: null,
    },
    {
      id: 'i_hope_youre_well',
      target: "I hope you're well",
      native: 'Ndinotarisira muri zvakanaka',
      literal: 'I hope you are well',
      emoji: '🌟',
      phonetic: 'aye-HOHP-yor-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs casual',
    explanation: "Pamashoko echishamwari (casual) tinoshandisa 'How are you?' / 'Hi' / 'Nice to meet you'. Pa formal — pamabasa, pamasangano, paitsanangurirana naasingakuzivi — tinoshandisa 'How do you do?' / 'Pleased to meet you' / 'I hope you're well'. Tarisa muvanze — formal yakanyatso magnitiwa.",
    examples: [
      { target: 'How do you do?',           native: 'Makadii zvakanaka here?' },
      { target: 'Pleased to meet you',      native: 'Ndafara kukuziva' },
      { target: "I hope you're well",       native: 'Ndinotarisira muri zvakanaka' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko emubvunzo formal',
      pairs: [
        { left: 'How do you do?',         right: 'Makadii zvakanaka here?' },
        { left: 'Pleased to meet you',    right: 'Ndafara kukuziva' },
        { left: "I hope you're well",     right: 'Ndinotarisira muri zvakanaka' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (formal)',
      prompt: 'Makadii zvakanaka here?',
      correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapindurana neuyo wausingazivi',
      prompt: 'Ndafara kukuziva',
      correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza yenheyo formal',
      sentence: 'I ____ you\'re well.',
      options: ['hope', 'know', 'see'],
      correct: 'hope',
      context: 'Iri pakutanga email kana letter yebasa.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yetsika — wapindurana namanager',
      words: ['Pleased', 'to', 'meet', 'you'],
      correct: ['Pleased', 'to', 'meet', 'you'],
      translation: 'Ndafara kukuziva',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (formal)',
      prompt: 'Ndinotarisira muri zvakanaka',
      correct: ["I hope you're well", "i hope you're well", "I hope you are well", "i hope you are well"],
    },
  ],

  rwenDialogue: {
    intro: "Wapinda muinterview yebasa. Manager auya kuzosangana newe kekutanga.",
    lines: [
      { speaker: 'npc', target: "Good morning. How do you do?", native: 'Mangwanani. Makadii zvakanaka here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How do you do? Pleased to meet you.", native: 'Makadii zvakanaka here? Ndafara kukuziva.', correct: true,  feedback: "Wakwanisa — wapindura ne mubvunzo wakaenzana, wawedzera mhinduro yetsika." },
          { target: "Hi! What's up?",                        native: 'Hesi! Zvirisei?',                            correct: false, feedback: "Yakanyanya kufambira — pa interview, shandisa formal." },
          { target: "How are you?",                          native: 'Makadii?',                                   correct: false, feedback: "Yakanaka asi haisi yakakwirira zvakaringana — pa interview tinotanga ne 'How do you do?' kana ne 'It's a pleasure to meet you'." },
        ],
      },
      { speaker: 'npc', target: "Pleased to meet you too. Please have a seat.", native: 'Ndafarawo kukuziva. Garai pasi.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watanga interview nemashoko etsika — manager achaona kuti unozviziva.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "How do you do? (in English, formal)", correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'] },
      { prompt: "Pleased to meet you (in English)",     correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Edza kupindurana zvine tsika dzakakwirira muChiNgezi — kunyange uchipindura email — shandisa 'I hope you're well'.",
    rwenSignoff: "Tichaonana mangwana — famba neushingi.",
  },

  phase8: {
    scenario: "You're being interviewed for a job at a multinational company in Harare. The hiring manager has just walked into the room and shaken your hand.",
    rwenRole: "Mr Adebayo, 50, the regional director. Professional, polite-formal, well-mannered. Has interviewed many candidates and notices register.",
    successCriteria: "User uses formal phrasing: opens with 'How do you do?' or similar, says 'Pleased to meet you' (not 'Nice to meet you'), and avoids casual phrases like 'Hi' or 'What's up'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
