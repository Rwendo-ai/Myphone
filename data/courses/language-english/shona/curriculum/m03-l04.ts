import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Married? Children? — Wakaroora? Une vana?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "MuChiShona, kubvunza vatsva kana vakaroora kana vane vana itsika yakajairika — kuratidza kuda. MuChiNgezi, mibvunzo iyi inotaurwa zvishoma — asi pavanhu vakuru, kuhama, kana kushamwari, inoshanda. Tiri kudzidza kupindura nemazvo.",
    culturalNote: "MuChiNgezi 'married' inoreva murume kana mukadzi — handizvitaridzi. 'I have two children' inoshanda kuvarume kana vakadzi vose. Asi uchenjere — vamwe vanoonderera mubvunzo 'Are you married?' sechinhu chisina kunatsa. KuZimbabwe, panemudhara mukuru, mubvunzo unenge wakanaka.",
  },

  chunks: [
    {
      id: 'are_you_married',
      target: 'Are you married?',
      native: 'Wakaroora here?',
      literal: 'Are you married?',
      emoji: '💍',
      phonetic: 'ar-yoo-MA-reed',
      audioRef: null,
    },
    {
      id: 'i_have_two_children',
      target: 'I have two children',
      native: 'Ndine vana vaviri',
      literal: 'I have two children',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay-HAV-too-CHIL-dren',
      audioRef: null,
    },
    {
      id: 'im_single',
      target: "I'm single",
      native: 'Handisati ndaroora',
      literal: 'I-am single',
      emoji: '🧍',
      phonetic: 'aym-SING-gul',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family status questions',
    explanation: "Mibvunzo yemhuri inoshandisa 'Are you ...?' kana 'Do you have ...?'. Mhinduro: 'Yes, I am' / 'No, I'm not' kana 'Yes, I do' / 'No, I don't'. 'Single' inoreva 'usina kuroora kana kuroorwa' — handisi shoko rinoshora.",
    examples: [
      { target: 'Are you married?',         native: 'Wakaroora here?' },
      { target: 'Do you have children?',     native: 'Une vana here?' },
      { target: "I'm single",                 native: 'Handisati ndaroora' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mibvunzo nemhinduro',
      pairs: [
        { left: 'Are you married?',     right: 'Wakaroora here?' },
        { left: 'I have two children',  right: 'Ndine vana vaviri' },
        { left: "I'm single",            right: 'Handisati ndaroora' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine vana vaviri',
      correct: ['I have two children', 'i have two children', 'I have 2 children'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Handisati ndaroora',
      correct: ["I'm single", "I am single", "i'm single", "i am single"],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mubvunzo',
      sentence: "____ you married?",
      options: ['Are', 'Is', 'Do'],
      correct: 'Are',
      context: 'Uri kubvunza mumwe munhu mhuri yake.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yemhuri',
      words: ['I', 'have', 'two', 'children'],
      correct: ['I', 'have', 'two', 'children'],
      translation: 'Ndine vana vaviri',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo',
      words: ['Are', 'you', 'married'],
      correct: ['Are', 'you', 'married'],
      translation: 'Wakaroora here?',
    },
  ],

  rwenDialogue: {
    intro: "Wasangana ne mudhara akawanda anogara padyo newe — anotaura ChiNgezi. Mahurukuro ehukama.",
    lines: [
      { speaker: 'npc', target: "So, are you married? Any children?", native: 'Saka, wakaroora? Une vana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm married, and I have two children.", native: 'Ndakaroora, uye ndine vana vaviri.', correct: true,  feedback: "Wakwanisa — wakapindura mibvunzo miviri muna mutsara mumwe." },
          { target: "Yes, two.",                              native: 'Hongu, vaviri.',                     correct: false, feedback: "Pfupi pfupi — wedzera mutsara wakakwana kuti uratidze tsika." },
          { target: "I have married.",                        native: 'Ndakaroora.',                        correct: false, feedback: "MuChiNgezi unoshandisa 'I'm married' kwete 'I have married' — chinhu chinosiyana." },
        ],
      },
      { speaker: 'npc', target: "How lovely. How old are they?", native: 'Zvakanaka. Vane makore mangani?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapindura zvakajeka — uye usingatadze 'I'm married' kunge 'I have married'. Itsika dzakanaka dzeChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Wakaroora here? (in English)',     correct: ['Are you married?', 'are you married?', 'Are you married'] },
      { prompt: 'Ndine vana vaviri (in English)',   correct: ['I have two children', 'i have two children', 'I have 2 children'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga zvepamhuri yako — uye nyora mitsara miviri muChiNgezi: zvauri ('I'm single' / 'I'm married') uye vana vaunavo kana usina ('I have ___ children' / 'I don't have children yet').",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're standing at the gate chatting with an elderly English-speaking neighbour who has just moved in. They're warm, curious, and start asking polite family questions.",
    rwenRole: "Mrs. Davies, 70, a retired teacher originally from Bulawayo. Polite, asks gently about family, follows up with one detail.",
    successCriteria: "User answers truthfully (or with a chosen safe answer) about marital status using 'I'm married/single' (not 'I have married'), and gives at least one detail about children or family.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
