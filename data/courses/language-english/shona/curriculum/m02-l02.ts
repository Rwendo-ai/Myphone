import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — Ndatenda',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinodzidza kutenda muChiNgezi. 'Thank you' inenge 'ndatenda' — asi mhinduro yayo ('You're welcome') haina chirevo chimwe chete muChiShona.",
    culturalNote: "MuChiShona kazhinji unotenda nokunyemwerera kana 'maita basa' chete. MuChiNgezi vanhu vanotaura 'Thank you' kakawanda — pakukumbira coffee, pakuvhura suo, kunyange paku-pass mbiya yemumvuri. Pindura ne 'You're welcome' kana 'No problem'.",
  },

  chunks: [
    {
      id: 'thank_you',
      target: 'Thank you',
      native: 'Ndatenda',
      literal: 'I-thank you',
      emoji: '🙏',
      phonetic: 'THANK-yoo',
      audioRef: null,
    },
    {
      id: 'youre_welcome',
      target: "You're welcome",
      native: 'Hapana mhosva',
      literal: 'You-are welcome',
      emoji: '🤗',
      phonetic: 'yor-WEL-kuhm',
      audioRef: null,
    },
    {
      id: 'thanks_a_lot',
      target: 'Thanks a lot',
      native: 'Ndatenda chaizvo',
      literal: 'Thanks a lot',
      emoji: '🌟',
      phonetic: 'THANKS-uh-LOT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Acknowledgement chain',
    explanation: "MuChiNgezi, kutenda kunenge kune mutsetse: mumwe anotenda ('Thank you'), mumwe anopindura ('You're welcome'). Ukasapindura, zvinoita seusina kunzwa. Kana rubatsiro rwacho rwakakura, taura 'Thanks a lot' kana 'Thank you so much'.",
    examples: [
      { target: 'Thank you.',                 native: 'Ndatenda.' },
      { target: "You're welcome.",            native: 'Hapana mhosva.' },
      { target: 'Thanks a lot for your help.', native: 'Ndatenda chaizvo nerubatsiro rwenyu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Thank you',      right: 'Ndatenda' },
        { left: "You're welcome", right: 'Hapana mhosva' },
        { left: 'Thanks a lot',   right: 'Ndatenda chaizvo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndatenda chaizvo',
      correct: ['Thanks a lot', 'thanks a lot', 'Thanks a lot.', 'thanks a lot.', 'Thank you so much'],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — wakatambira mashoko 'Thank you'. Pindura.",
      sentence: '____ welcome.',
      options: ["You're", 'I am', 'We are'],
      correct: "You're",
      context: "Mhinduro yakajairika kuna 'Thank you' ndi 'You're welcome'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kutenda nerubatsiro rukuru',
      words: ['Thank', 'you', 'so', 'much'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Ndatenda chaizvo',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Hapana mhosva',
      correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutenda mubatanidzwa wakubatsira',
      prompt: 'Ndatenda nerubatsiro',
      correct: ['Thank you for your help', 'Thank you for your help.', 'Thanks for your help', 'Thanks for your help.', 'thank you for your help'],
    },
  ],

  rwenDialogue: {
    intro: "Mubatanidzwa wako akubatsira nedhokumendi muChiNgezi. Tenda zvakanaka.",
    lines: [
      { speaker: 'npc', target: "There you go — that should fix it.", native: 'Heuno — chinofanira kunge chagadzirwa.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thank you so much for your help.', native: 'Ndatenda chaizvo nerubatsiro rwenyu.', correct: true,  feedback: 'Wakwanisa — wakatenda zvizere uye warondedzera chinangwa.' },
          { target: 'OK.',                                native: 'OK.',                                  correct: false, feedback: "Hazvina kuringana — vakubatsira, wedzera 'thank you'." },
          { target: 'Sorry.',                             native: 'Ndine urombo.',                        correct: false, feedback: "Hauna chawakanganisa — shandisa 'thank you' kwete 'sorry'." },
        ],
      },
      { speaker: 'npc', target: "You're welcome — anytime.", native: 'Hapana mhosva — chero nguva.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapindura nemutsetse uzere wekutenda — 'thank you' yakapinda 'you're welcome'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Thank you (in English)',     correct: ['Thank you', 'thank you', 'Thank you.', 'thank you.', 'Thanks', 'thanks'] },
      { prompt: "You're welcome (in English)", correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tenda mumwe muChiNgezi nhasi — kunyange chiitiko chidiki ('Thank you' kunemupei wechikafu). Cherechedza kana akapindura ne 'You're welcome' kana 'No problem'.",
    rwenSignoff: "Ndatenda iwewe nokushandira nesu nhasi. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "A colleague at your office has just spent 10 minutes helping you fix a typo-filled English document before you email it to a client. Thank them properly.",
    rwenRole: "Sarah, 32, your colleague who's helpful but busy. Direct, kind, slightly British — she'll downplay the help.",
    successCriteria: "User uses 'thank you' (preferably 'thank you so much' or 'thanks a lot' since the help was substantial), names what they're thanking for ('for your help' / 'for fixing this'), and responds gracefully to her 'You're welcome' / 'No problem'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
