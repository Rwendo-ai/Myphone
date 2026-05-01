import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: 'Hungry & Thirsty — Nzara nenyota',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Module 7 inotaura nezvechikafu — kudya, kuhamba, kugamuchira vaeni. Tinotanga nezvinhu zviviri zvinochinja zuva: nzara nenyota.",
    culturalNote: "MuChiShona, kana wati 'ndine nzara' kumusha, kudya kunouya pakarepo — kugovera chikafu itsika. MuChiNgezi, basa rakasiyana — unotaura nzara yako asi haunyatsotarisira mumwe kuti akupe chikafu pakarepo. Hutsika hunoda kuti utsanangure zvine ruremekedzo: 'I'm a bit hungry' kana 'I could eat' — kwete kungoti 'Hungry!' chete.",
  },

  chunks: [
    {
      id: 'im_hungry',
      target: "I'm hungry",
      native: 'Ndine nzara',
      literal: 'I-am hungry',
      emoji: '🍴',
      phonetic: 'aym-HUN-gree',
      audioRef: null,
    },
    {
      id: 'im_thirsty',
      target: "I'm thirsty",
      native: 'Ndine nyota',
      literal: 'I-am thirsty',
      emoji: '💧',
      phonetic: 'aym-THUR-stee',
      audioRef: null,
    },
    {
      id: 'i_want_water',
      target: 'I want water',
      native: 'Ndinoda mvura',
      literal: 'I want water',
      emoji: '🥤',
      phonetic: 'ay-WONT-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stative "I am" with feelings',
    explanation: "MuChiNgezi, nzara nenyota hazvisi zvinhu zvaunazvo — uri izvozvo. Saka unoshandisa 'I am' (ndiri), kwete 'I have' (ndine) sezvinoita ChiShona. 'I am hungry' kwete 'I have hunger'. Itsika yemutauro — usiyane neChiShona pano.",
    examples: [
      { target: "I'm hungry",  native: 'Ndine nzara' },
      { target: "I'm thirsty", native: 'Ndine nyota' },
      { target: "I'm tired",   native: 'Ndaneta' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I'm hungry",   right: 'Ndine nzara' },
        { left: "I'm thirsty",  right: 'Ndine nyota' },
        { left: 'I want water', right: 'Ndinoda mvura' },
      ],
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — uri kutaura kushamwari yako pa-lunch break",
      prompt: 'Ndine nzara',
      correct: ["I'm hungry", "I am hungry", "i'm hungry", "I'm hungry."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — kumbira mvura ne-please',
      prompt: 'Ndinoda mvura, ndapota.',
      correct: [
        'I want water, please.',
        'I want water please.',
        "I'd like water, please.",
        'I would like water, please.',
        'i want water, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — wakaita basa rakareba, hauna kunwa zuva rese',
      sentence: "I'm ____. Could I have some water?",
      options: ['hungry', 'thirsty', 'tired'],
      correct: 'thirsty',
      context: "Nyota = thirsty. Nzara = hungry. Kuneta = tired.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kuti une nzara',
      words: ['hungry', 'I', 'am'],
      correct: ['I', 'am', 'hungry'],
      translation: 'Ndine nzara',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Wapinda mu-meeting yebasa, asi haunyatsoda kuratidza kuti une nzara chaiyo. Unoti chii?",
      options: [
        { text: "I could eat — anyone else hungry?", correct: true },
        { text: "I'm so hungry, give me food!",       correct: false },
        { text: "Hungry.",                            correct: false },
      ],
      explanation: "MuChiNgezi yebasa, taura nzara nehutsika — 'I could eat' inoreruka, inogadzira tariro yekuti vamwe vapindire. 'Give me food' inenge yakapfuura.",
    },
  ],

  rwenDialogue: {
    intro: 'Uri pa-lunch break paofficer yako muHarare. Mubatanidzwa wako anotaura ChiNgezi anokubvunza kana uchida kudya. Pindura.',
    lines: [
      { speaker: 'npc', target: "Hey, fancy grabbing some lunch?", native: 'Hesi, tinoenda kudya here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes please, I'm hungry.",  native: 'Hongu ndapota, ndine nzara.', correct: true,  feedback: 'Wakwanisa — pindura yakajeka uine hutsika.' },
          { target: "Hungry yes.",                 native: 'Nzara hongu.',                   correct: false, feedback: "Hapana 'I am' — muChiNgezi unoti 'I'm hungry', kwete kungopfuudza shoko." },
          { target: "I have hunger.",              native: 'Ndine nzara (literal).',         correct: false, feedback: "Hazvinzwiki muChiNgezi — chinyorwa cheChiShona ichi. Shandisa 'I'm hungry'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'I'm' kwete 'I have' — itsika yemutauro yakasiyana neChiShona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "I'm hungry (in English)",  correct: ["I'm hungry", "I am hungry", "i'm hungry", "I'm hungry."] },
      { prompt: 'I want water (in English)', correct: ['I want water', 'I want water.', "I'd like water", 'i want water'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, kana waziva kuti une nzara kana nyota, taura muChiNgezi pamuromo wako — kunyange wakangoti '''I'm hungry''' uri wega muimba. Cherechedza kuti 'I am' inoreruka here pamuromo.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza chikafu chakawanda.",
  },

  phase8: {
    scenario: "It's 1pm at your Harare office. The lunch meeting has run over and your English-speaking manager hasn't noticed people are flagging. Politely raise that you'd like to break for food.",
    rwenRole: "Sarah, 42, your English-speaking team lead. Friendly but focused. She'll respond well if you raise it lightly, awkwardly if you bark a complaint.",
    successCriteria: "User uses 'I'm hungry' or a softened form ('I could eat', 'shall we break for lunch?'), keeps it polite, doesn't translate 'I have hunger' literally.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
