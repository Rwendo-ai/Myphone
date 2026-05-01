import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — Ndapota',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Module 2 inotanga ne'survival phrases' — mashoko anokubatsira kana wakurasika kana usinganzwisise. Kutanga: 'Please', 'Excuse me', uye 'Sorry'.",
    culturalNote: "MuChiShona, 'Ndapota' inorema — inenge ichikumbira chaizvo. MuChiNgezi, 'Please' inoshandiswa kazhinji uye yakareruka — kunyange uchikumbira hafu yetii. Usatya kuishandisa — kuisiya kunoita uite serudzi rwemupopoti.",
  },

  chunks: [
    {
      id: 'please',
      target: 'Please',
      native: 'Ndapota',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'PLEEZ',
      audioRef: null,
    },
    {
      id: 'excuse_me',
      target: 'Excuse me',
      native: 'Pamusoroi',
      literal: 'Excuse-me / Pardon-me',
      emoji: '✋',
      phonetic: 'eks-KYOOZ-mee',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry',
      native: 'Ndine urombo',
      literal: 'I-have sorrow',
      emoji: '😔',
      phonetic: 'SOH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness markers',
    explanation: "MuChiNgezi, mashoko matatu ane basa rakasiyana: 'Please' inopinza chikumbiro (request), 'Excuse me' inotanga kutaura kana kupfuura nepamunhu, uye 'Sorry' inokumbira ruregerero kana wakanganisa. Hazviumbi mutsetse mumwe — sarudza zvinoenderana nezvauri kuita.",
    examples: [
      { target: 'A coffee, please.',           native: 'Coffee, ndapota.' },
      { target: 'Excuse me, where is the door?', native: 'Pamusoroi, suo riri kupi?' },
      { target: "Sorry, I'm late.",             native: 'Ndine urombo, ndanonoka.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Please',     right: 'Ndapota' },
        { left: 'Excuse me',  right: 'Pamusoroi' },
        { left: 'Sorry',      right: 'Ndine urombo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kukumbira coffee paHarare cafe',
      prompt: 'Coffee, ndapota.',
      correct: ['A coffee, please.', 'A coffee please.', 'Coffee, please.', 'Coffee please.', 'a coffee, please.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuda kupfuura nepamunhu akamira munzira',
      sentence: '____, can I pass?',
      options: ['Please', 'Excuse me', 'Sorry'],
      correct: 'Excuse me',
      context: "MuChiNgezi, 'Excuse me' inoshandiswa kuti uvhure nzira kwete 'Sorry'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kukumbira ruregerero pakunonoka',
      words: ['Sorry', 'I', 'am', 'late'],
      correct: ['Sorry', 'I', 'am', 'late'],
      translation: 'Ndine urombo, ndanonoka',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Pamusoroi',
      correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Wapinda muoffice yemubatanidzwa wenyu, asi vari pafoni. Unoti chii kuti vakuone?",
      options: [
        { text: 'Excuse me.', correct: true },
        { text: 'Sorry.',     correct: false },
        { text: 'Please.',    correct: false },
      ],
      explanation: "'Excuse me' ndiyo inoshandiswa kana uchida kupinza kupinda kana kuratidzwa. 'Sorry' inoshandiswa kana wakanganisa.",
    },
  ],

  rwenDialogue: {
    intro: 'Wapinda muHarare cafe. Iwe une nzara, uye barista anotaura ChiNgezi chete. Order coffee yako.',
    lines: [
      { speaker: 'npc', target: 'Hi, what can I get you?', native: 'Hesi, ndingakupei chii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A coffee, please.',          native: 'Coffee, ndapota.',           correct: true,  feedback: "Wakwanisa — 'please' yakaisa hutsika muchikumbiro chako." },
          { target: 'Coffee.',                     native: 'Coffee.',                    correct: false, feedback: "Hazvina hutsika — wedzera 'please' kuti zvinzwike senge chikumbiro kwete kuraira." },
          { target: 'Sorry, a coffee.',            native: 'Ndine urombo, coffee.',     correct: false, feedback: "Hauna chawakanganisa — 'Sorry' haina basa pano. Shandisa 'please'." },
        ],
      },
      { speaker: 'npc', target: 'Coming right up.', native: 'Inouya pakarepo.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Please' yakareruka kupfuura 'ndapota' yedu — asi ipo ipo inoshanda.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Please (in English)',    correct: ['Please', 'please', 'Please.', 'please.'] },
      { prompt: 'Excuse me (in English)', correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Shandisa 'please' kamwe nhasi muChiNgezi — kunyange uchikumbira mvura kushamwari yako. Cherechedza kuti zvinoreruka here pamuromo.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza kutenda.",
  },

  phase8: {
    scenario: "You walk into a busy cafe in central Harare. The barista is English-speaking and slightly rushed. Order a coffee politely, using 'please' and 'excuse me' or 'sorry' if needed.",
    rwenRole: "Mike, 24, the barista. Friendly but efficient — a queue is forming behind you. Speaks fast, casual English.",
    successCriteria: "User uses 'please' when ordering, uses 'excuse me' to get attention OR 'sorry' if they need to apologise (e.g. for changing their order). Doesn't bark a one-word order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
