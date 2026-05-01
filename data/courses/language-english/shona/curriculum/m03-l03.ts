import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — Unoita basa rei?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "MuChiNgezi, mubvunzo 'What do you do?' unoreva 'Unoita basa rei?' — kwete 'unoita zvii panguva ino?'. Mhinduro inotanga ne 'I'm a teacher' (basa) kana 'I work in IT' (sangano).",
    culturalNote: "MuChiShona, 'mudzidzisi' haana mukadzi/murume wakatarwa — shoko rimwe rinoshandiswa kune vose. MuChiNgezi zvakafanana ('teacher' = murume kana mukadzi) — asi unofanira kuwedzera 'a' pamberi: 'I'm a teacher', kwete 'I'm teacher'. Iyi 'a' inonzi article — chinhu chidiki asi chinokosha.",
  },

  chunks: [
    {
      id: 'what_do_you_do',
      target: 'What do you do?',
      native: 'Unoita basa rei?',
      literal: 'What do you do?',
      emoji: '💼',
      phonetic: 'wut-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'im_a_teacher',
      target: "I'm a teacher",
      native: 'Ndini mudzidzisi',
      literal: 'I-am a teacher',
      emoji: '👩‍🏫',
      phonetic: 'aym-uh-TEE-cher',
      audioRef: null,
    },
    {
      id: 'i_work_in_it',
      target: 'I work in IT',
      native: 'Ndinoshanda muIT',
      literal: 'I work in IT',
      emoji: '💻',
      phonetic: 'ay-WURK-in-AY-TEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Occupations — "I\'m a ..." / "I work in ..."',
    explanation: "Pane nzira mbiri dzekupindura: (1) 'I'm a [basa]' kana basa rine zita — teacher, doctor, nurse, engineer. Usakanganwa 'a'! (2) 'I work in [sangano]' kana uri musangano kana munharaunda — IT, banking, education, health.",
    examples: [
      { target: "I'm a teacher",        native: 'Ndini mudzidzisi' },
      { target: "I'm a nurse",          native: 'Ndini mukoti' },
      { target: 'I work in banking',     native: 'Ndinoshanda mubhanga' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mabasa nezvazvinoreva',
      pairs: [
        { left: 'Teacher',     right: 'Mudzidzisi' },
        { left: 'Nurse',       right: 'Mukoti' },
        { left: 'Doctor',      right: 'Chiremba' },
        { left: 'Engineer',    right: 'Injiniya' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndini mudzidzisi',
      correct: ["I'm a teacher", "I am a teacher", "i'm a teacher", "i am a teacher"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoshanda muIT',
      correct: ['I work in IT', 'i work in IT', 'I work in I.T.'],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa ne 'a' kana usina",
      sentence: "I'm ____ doctor.",
      options: ['a', 'the', '—'],
      correct: 'a',
      context: 'Uri kuzvitaridza basa rako kekutanga.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo',
      words: ['What', 'do', 'you', 'do'],
      correct: ['What', 'do', 'you', 'do'],
      translation: 'Unoita basa rei?',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yebasa',
      words: ['I', 'work', 'in', 'banking'],
      correct: ['I', 'work', 'in', 'banking'],
      translation: 'Ndinoshanda mubhanga',
    },
  ],

  rwenDialogue: {
    intro: "Wasangana neumwe mushandi mutsva pa hofisi muHarare. Unotaura ChiNgezi.",
    lines: [
      { speaker: 'npc', target: "Welcome to the team! What do you do?", native: 'Tikugamuchira muchikwata! Unoita basa rei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a teacher, but I work in IT now.", native: 'Ndini mudzidzisi, asi ndinoshanda muIT iye zvino.', correct: true,  feedback: "Wakwanisa — mutsara wakakwana, watotaridza historia yako." },
          { target: "Teacher.",                                native: 'Mudzidzisi.',                                       correct: false, feedback: "Yakapfupika — wedzera 'I'm a' kuti zviite mutsara wakaringana." },
          { target: "I am teacher.",                           native: 'Ndini mudzidzisi.',                                 correct: false, feedback: "Wakanganwa 'a'! MuChiNgezi unotofanira kuti 'I'm a teacher'." },
        ],
      },
      { speaker: 'npc', target: "Oh interesting — what subject did you teach?", native: 'Aaa, zvinofadza — wakadzidzisa chii?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakashandisa 'a' uye wakapindura zvakajeka. Iyo 'a' inotaura kuti 'imwe' yebasa — ndiyo tsika yeChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: "Unoita basa rei? (in English)",          correct: ['What do you do?', 'what do you do?', 'What do you do'] },
      { prompt: "Ndini mukoti (in English)",              correct: ["I'm a nurse", "I am a nurse", "i'm a nurse", "i am a nurse"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi taura mutsara wekuti basa rako, muChiNgezi — kunyange uri wega pamberi pegirazi: 'I'm a ___' kana 'I work in ___'.",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You've just been introduced to a new English-speaking colleague at the office coffee machine. They turn to you and ask 'So, what do you do?'.",
    rwenRole: "James, 40, a project manager visiting from the Johannesburg office for a week. Curious, asks one or two follow-up questions about your work.",
    successCriteria: "User answers with 'I'm a [job]' or 'I work in [field]' (with the article 'a' if needed), then handles one follow-up about their day-to-day work.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
