import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — Munotaura ChiNgezi here?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Usati watanga hurukuro nemumwe waunenge usingazivi, zvakanaka kubvunza kuti vanotaura ChiNgezi here. Mubvunzo uyu unotanga ne 'Do'.",
    culturalNote: "MuChiShona tinobvunza nemashoko anoperera ne 'here?' ('Munotaura ChiNgezi here?'). MuChiNgezi pakubvunza pamusoro pemashandisiro echinhu, mubvunzo unotanga ne 'Do' — 'Do you speak English?'. Hazvina hutsika kubvunza chete 'You speak English?' — chinokwirira asi chinoshanda muhurukuro yepfupi.",
  },

  chunks: [
    {
      id: 'do_you_speak_english',
      target: 'Do you speak English?',
      native: 'Munotaura ChiNgezi here?',
      literal: 'Do you speak English?',
      emoji: '🗣️',
      phonetic: 'doo-yoo-SPEEK-ING-glish',
      audioRef: null,
    },
    {
      id: 'a_little',
      target: 'A little',
      native: 'Zvishoma',
      literal: 'A little',
      emoji: '🤏',
      phonetic: 'uh-LIT-uhl',
      audioRef: null,
    },
    {
      id: 'slowly_please',
      target: 'Slowly, please',
      native: 'Zvinyoro nyoro, ndapota',
      literal: 'Slowly, please',
      emoji: '🐢',
      phonetic: 'SLOH-lee-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question word "do"',
    explanation: "Mubvunzo wechiitwa (verb) muChiNgezi unotanga ne 'Do' (kana 'Does' kune iye/iyo). 'Do + you + speak + ...?'. Pasina 'Do', mutsara unenge usina kuoma — unenge usina mibvunzo.",
    examples: [
      { target: 'Do you speak English?', native: 'Munotaura ChiNgezi here?' },
      { target: 'Do you understand?',     native: 'Munonzwisisa here?' },
      { target: 'Do you have time?',      native: 'Mune nguva here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Do you speak English?', right: 'Munotaura ChiNgezi here?' },
        { left: 'A little',               right: 'Zvishoma' },
        { left: 'Slowly, please',         right: 'Zvinyoro nyoro, ndapota' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Munotaura ChiNgezi here?',
      correct: ['Do you speak English?', 'do you speak English?', 'Do you speak English', 'do you speak english?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mubvunzo',
      sentence: '____ you speak English?',
      options: ['Do', 'Are', 'Is'],
      correct: 'Do',
      context: "Mibvunzo yezviitwa (verbs) inotanga ne 'Do' muChiNgezi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — kumbira munhu kutaura zvinyoro',
      words: ['please', 'slowly', 'Speak'],
      correct: ['Speak', 'slowly', 'please'],
      translation: 'Taura zvinyoro nyoro, ndapota',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — vakubvunza, asi unotaura zvishoma chete',
      prompt: 'Zvishoma',
      correct: ['A little', 'a little', 'A little.', 'A little bit', 'a little bit'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Zvinyoro nyoro, ndapota',
      correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'],
    },
  ],

  rwenDialogue: {
    intro: "Wave paVictoria Falls. Mutochi anokutarisa — pamwe ari kuda kubvunza chinhu. Bvunza kana achitaura ChiNgezi.",
    lines: [
      { speaker: 'npc', target: "Hello! Excuse me...", native: 'Mhoro! Pamusoroi...' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi! Do you speak English?',  native: 'Hesi! Munotaura ChiNgezi here?',     correct: true,  feedback: 'Wakwanisa — wakwaziso uye wakabvunza nzira yekutaurirana.' },
          { target: 'English?',                    native: 'ChiNgezi?',                           correct: false, feedback: 'Pfupi zvakanyanya — wedzera mutsara wakakwana.' },
          { target: 'I speak English.',            native: 'Ndinotaura ChiNgezi.',                correct: false, feedback: 'Wapindura usina kubvunzwa — bvunza kuwana mhinduro yavo.' },
        ],
      },
      { speaker: 'npc', target: "A little. Slowly, please?", native: 'Zvishoma. Zvinyoro nyoro, ndapota?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wabva wadzidzisawo kuti nemumwe usingatauri ChiNgezi chizere — taura zvinyoro.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Do you speak English? (in English)', correct: ['Do you speak English?', 'Do you speak English', 'do you speak English?', 'do you speak english?'] },
      { prompt: 'Slowly, please (in English)',          correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Bvunza mumwe nhasi — kunyange muhope kana muchiparirano — 'Do you speak English?' Cherechedza inflection (intonation) uye mavara.",
    rwenSignoff: "Mubvunzo uyu unokuvhurira masuo akawanda. Tichaonana.",
  },

  phase8: {
    scenario: "You're standing near the bridge at Victoria Falls. A backpacker approaches you with a confused look — they want to ask something but you're not sure what language they speak. Open the conversation by checking if they speak English.",
    rwenRole: "Hannah, 22, a German backpacker on her gap year. Speaks decent English but slowly and with hesitations. Friendly, curious about Zimbabwe.",
    successCriteria: "User opens with 'Do you speak English?', responds to her 'A little', and adapts by saying 'Slowly, please' or repeating things simply. Doesn't switch to fast English when she struggles.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
