import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — Mungandibatsire here?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Kana wakurasika kana usingazivi zvekuita, unoda kukumbira rubatsiro. MuChiNgezi shoko 'can' rinokuvhurira nzira yekukumbira.",
    culturalNote: "MuChiShona tinokumbira rubatsiro nehutsika hwakanyatsoderera ('Mungandibatsire here?' inotaridza kuremekedza). MuChiNgezi shoko 'Can you...?' rinoita basa irori — kunyange kubvunza mukuru, hazvinetsi. Ipfupi uye yakareruka.",
  },

  chunks: [
    {
      id: 'can_you_help_me',
      target: 'Can you help me?',
      native: 'Mungandibatsire here?',
      literal: 'Can you help me?',
      emoji: '🆘',
      phonetic: 'KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_need_help',
      target: 'I need help',
      native: 'Ndinoda rubatsiro',
      literal: 'I-need help',
      emoji: '🙋',
      phonetic: 'AY-need-HELP',
      audioRef: null,
    },
    {
      id: 'im_lost',
      target: "I'm lost",
      native: 'Ndarasika',
      literal: 'I-am lost',
      emoji: '🧭',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modal verb "can"',
    explanation: "Shoko 'can' rinoshandiswa kubvunza kana mumwe achigona kukubatsira. Mutsara: 'Can + you + (do something)?'. Iro 'can' rinoita mubvunzo unzwike senge chikumbiro chinotsika — kwete kuraira.",
    examples: [
      { target: 'Can you help me?',           native: 'Mungandibatsire here?' },
      { target: 'Can you speak slowly?',      native: 'Mungataure zvinyoro nyoro here?' },
      { target: 'Can you show me the way?',   native: 'Mungandiratidze nzira here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Can you help me?', right: 'Mungandibatsire here?' },
        { left: 'I need help',      right: 'Ndinoda rubatsiro' },
        { left: "I'm lost",         right: 'Ndarasika' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakurasika muguta usingazivi',
      prompt: 'Ndarasika. Mungandibatsire here?',
      correct: [
        "I'm lost. Can you help me?",
        "I'm lost, can you help me?",
        "I am lost. Can you help me?",
        "i'm lost. can you help me?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kukumbira rubatsiro pa-information desk',
      sentence: '____ you help me, please?',
      options: ['Can', 'Are', 'Do'],
      correct: 'Can',
      context: "'Can you...?' ndiyo nzira yakajairika yekukumbira rubatsiro.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kutaura kuti unoda rubatsiro',
      words: ['I', 'need', 'some', 'help'],
      correct: ['I', 'need', 'some', 'help'],
      translation: 'Ndinoda rubatsiro',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndarasika',
      correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — kumbira mukurusa wepa-information',
      prompt: 'Ndapota, mungandibatsire here?',
      correct: ['Please, can you help me?', 'Please can you help me?', 'Please, can you help me', 'please, can you help me?'],
    },
  ],

  rwenDialogue: {
    intro: "Wave kuCape Town airport. Wakurasika — hauzivi pekutora ndege yako. Enda pa-information desk.",
    lines: [
      { speaker: 'npc', target: "Hi, how can I help?", native: 'Hesi, ndingakubatsira sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me?", native: 'Pamusoroi, ndarasika. Mungandibatsire here?', correct: true,  feedback: 'Wakwanisa — wapinda nemutsindo, watsanangura, uye wakumbira rubatsiro.' },
          { target: 'Help.',                                  native: 'Batsiro.',                                    correct: false, feedback: 'Yepfupi zvakanyanya — taura mutsara wakakwana.' },
          { target: 'Thank you.',                             native: 'Ndatenda.',                                   correct: false, feedback: "Hauna chawatenda — kumbira rubatsiro tanga." },
        ],
      },
      { speaker: 'npc', target: "Of course — where are you trying to go?", native: 'Hongu — uri kuda kuenda kupi?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Excuse me' + 'I'm lost' + 'Can you help me?' — mutsetse waunoshandisa pose pose paunenge wakurasika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Can you help me? (in English)', correct: ['Can you help me?', 'Can you help me', 'can you help me?', 'can you help me'] },
      { prompt: "I'm lost (in English)",          correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mufungidzire situation paunoda rubatsiro muChiNgezi (kunyange muhope). Edza kutaura mhinduro idzi pamuromo: 'Excuse me, can you help me? I'm lost.' Kakaviri.",
    rwenSignoff: "Mashoko aya anokumirira — usatya kuashandisa.",
  },

  phase8: {
    scenario: "You've just landed at Cape Town International Airport. You can't find the exit to ground transport, your phone is dead, and signs aren't making sense. Approach the information desk and ask for help.",
    rwenRole: "Lwazi, 26, the airport information officer. Patient, helpful, polite. Speaks clear South African English.",
    successCriteria: "User opens with 'Excuse me' or 'Hi', states a problem ('I'm lost' / 'I need help'), uses 'Can you help me?' or equivalent. Responds to follow-up questions about where they're trying to go.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
