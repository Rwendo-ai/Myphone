import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — Hongu uye Aiwa',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Mashoko maviri akareruka asi anokosha: 'Yes' uye 'No'. Wedzera 'Maybe' kana usingaonesi.",
    culturalNote: "MuChiShona, 'Hongu' inoreva 'yes' asi inogona kunzwika senge 'I'm listening' chete. MuChiNgezi 'Yes' inopinda — inopindira chimwe chiitiko ('Yes, I want it'). Kana usina kunyatsoona, taura 'Maybe' kwete 'Yes' chete kuti uitire vamwe — kunorambisa kunzwisisana.",
  },

  chunks: [
    {
      id: 'yes',
      target: 'Yes',
      native: 'Hongu',
      literal: undefined,
      emoji: '✅',
      phonetic: 'YES',
      audioRef: null,
    },
    {
      id: 'no',
      target: 'No',
      native: 'Aiwa',
      literal: undefined,
      emoji: '❌',
      phonetic: 'NOH',
      audioRef: null,
    },
    {
      id: 'maybe',
      target: 'Maybe',
      native: 'Pamwe',
      literal: 'Maybe / Perhaps',
      emoji: '🤔',
      phonetic: 'MAY-bee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Affirmation / negation',
    explanation: "Mibvunzo yakawanda muChiNgezi inopindurwa ne 'Yes', 'No', kana 'Maybe'. Kana usina chokwadi, 'Maybe' yakanaka kupfuura 'Yes' yenhema. Ungawedzera mutsara wakakwana: 'Yes, I do' kana 'No, I don't'.",
    examples: [
      { target: 'Yes, I do.',    native: 'Hongu, ndinodaro.' },
      { target: "No, I don't.", native: 'Aiwa, handidaro.' },
      { target: "Maybe later.",   native: 'Pamwe gare gare.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Yes',    right: 'Hongu' },
        { left: 'No',     right: 'Aiwa' },
        { left: 'Maybe',  right: 'Pamwe' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pindura mubvunzo, asi haunyatsozivi',
      prompt: 'Pamwe',
      correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa mhinduro: 'Do you speak English?' / '____, I do.'",
      sentence: '____, I do.',
      options: ['Yes', 'No', 'Maybe'],
      correct: 'Yes',
      context: "Mhinduro yakareba inotanga ne 'Yes' kana 'No' yotevera ne 'I do' kana 'I don't'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kuramba zvine hutsika',
      words: ['No', 'thank', 'you'],
      correct: ['No', 'thank', 'you'],
      translation: 'Aiwa, ndatenda',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Hongu, ndinodaro',
      correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pindura nehutsika',
      prompt: 'Aiwa, ndatenda',
      correct: ['No, thank you', 'No, thank you.', 'no, thank you', 'No thanks', 'No, thanks'],
    },
  ],

  rwenDialogue: {
    intro: "Mubatanidzwa wechiNgezi ari kukubatsira kuzadzisa fomu yebasa. Anenge achikubvunza 'yes/no'.",
    lines: [
      { speaker: 'npc', target: "Are you over 18?", native: 'Une makore anopfuura 18 here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I am.',     native: 'Hongu, ndakapfuura.', correct: true,  feedback: 'Wakwanisa — mhinduro yakakwana, kwete "yes" chete.' },
          { target: 'Maybe.',          native: 'Pamwe.',              correct: false, feedback: "'Maybe' haina basa pano — unoziva makore ako." },
          { target: "I don't know.",  native: 'Handizivi.',          correct: false, feedback: 'Wakaratidza zvisina kunaka — taura mhinduro yakanaka.' },
        ],
      },
      { speaker: 'npc', target: "Great. Do you have a passport?", native: 'Zvakanaka. Une passport here?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Mhinduro 'Yes, I am' / 'No, I'm not' dzakareba kupfuura 'Yes/No' chete — dzinoratidza kuti uri kunzwisisa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Yes, I do (in English)', correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'] },
      { prompt: 'Maybe (in English)',     correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Cherechedza kana uchinzwa 'Yes' kana 'No' nhasi muChiNgezi — paTV, paphone, kana muhurukuro. Verenga kana uchikwanisa kupinduravo.",
    rwenSignoff: "Mashoko maviri kuvharira humwe huzhinji. Tichaonana.",
  },

  phase8: {
    scenario: "A bilingual helper at the Department of Home Affairs is helping you fill out an English-language passport renewal form. They'll ask you a series of yes/no questions about your details. Answer accurately.",
    rwenRole: "Mr. Banda, 50, friendly civil servant. Methodical, asks each form question clearly in English. Will follow up if your answer is unclear.",
    successCriteria: "User answers with full forms ('Yes, I am' / 'No, I'm not' / 'Yes, I do') instead of bare 'yes/no'. Uses 'Maybe' or 'I'm not sure' when genuinely unsure rather than guessing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
