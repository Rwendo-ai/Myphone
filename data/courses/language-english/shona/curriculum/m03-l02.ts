import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — Une makore mangani?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "MuChiShona unobvunza 'Une makore mangani?' — pachena. MuChiNgezi, kunyange iri mubvunzo wakajairika, vamwe vanhu havafariri kubvunzwa makore avo. Asi paforomu, kuvharadhi, kana kumusangano wechiremba — unofanira kuziva kupindura.",
    culturalNote: "MuChiNgezi, 'I'm 25' inoshanda chete — usawedzera 'years old' nguva dzose. Vanhu vakuru kazhinji vanopindura ne 'I'm in my forties' (ndiri pakati pemakore makumi mana) kuti vasanyatsotaura nhamba chaiyo. Itsika yakanaka — kwete kuhwanda.",
  },

  chunks: [
    {
      id: 'how_old_are_you',
      target: 'How old are you?',
      native: 'Une makore mangani?',
      literal: 'How old are you?',
      emoji: '🎂',
      phonetic: 'how-OHLD-ar-yoo',
      audioRef: null,
    },
    {
      id: 'im_x_years_old',
      target: "I'm X years old",
      native: 'Ndine makore X',
      literal: 'I-am X years old',
      emoji: '🔢',
      phonetic: 'aym-EKS-yeerz-ohld',
      audioRef: null,
    },
    {
      id: 'twenty_five',
      target: 'Twenty-five',
      native: 'Makumi maviri nemashanu',
      literal: 'Twenty-five',
      emoji: '2️⃣5️⃣',
      phonetic: 'TWEN-tee-fyv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers in age',
    explanation: "Mhinduro yemakore inotanga ne 'I'm' wozotevedzera nhamba. 'Years old' inokwanisa kushandiswa kana kuregererwa — vose vari vaviri vakanaka. Nhamba muChiNgezi: twenty (20), twenty-one (21), twenty-five (25), thirty (30), forty (40).",
    examples: [
      { target: "I'm 25",              native: 'Ndine makore makumi maviri nemashanu' },
      { target: "I'm 30 years old",     native: 'Ndine makore makumi matatu' },
      { target: "I'm twenty-one",       native: 'Ndine makore makumi maviri neimwe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko enhamba',
      pairs: [
        { left: 'Twenty',         right: '20' },
        { left: 'Twenty-five',    right: '25' },
        { left: 'Thirty',          right: '30' },
        { left: 'Forty',           right: '40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Une makore mangani?',
      correct: ['How old are you?', 'how old are you?', 'How old are you'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (shandisa nhamba muChiNgezi)',
      prompt: 'Ndine makore makumi maviri nemashanu',
      correct: ["I'm 25", "I am 25", "I'm twenty-five", "I am twenty-five", "I'm 25 years old", "I am 25 years old"],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mhinduro',
      sentence: "I'm thirty years ____.",
      options: ['old', 'olds', 'older'],
      correct: 'old',
      context: 'Uri kupindura mubvunzo wemakore.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yemakore',
      words: ["I'm", '25', 'years', 'old'],
      correct: ["I'm", '25', 'years', 'old'],
      translation: 'Ndine makore makumi maviri nemashanu',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo',
      words: ['How', 'old', 'are', 'you'],
      correct: ['How', 'old', 'are', 'you'],
      translation: 'Une makore mangani?',
    },
  ],

  rwenDialogue: {
    intro: "Uri kuzadza foromu yebhanga muHarare. Munhu anokushandira anokubvunza muChiNgezi.",
    lines: [
      { speaker: 'npc', target: "And how old are you?", native: 'Saka une makore mangani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm 28 years old.",     native: 'Ndine makore makumi maviri nemasere.', correct: true,  feedback: "Wakwanisa — mhinduro yakakwana, nemutsara wakajeka." },
          { target: "28.",                     native: '28.',                                  correct: false, feedback: "Pa foromu kazhinji unotaura wakanyatsoita mutsara — wedzera 'I'm'." },
          { target: "I have 28 years.",        native: 'Ndine makore 28.',                     correct: false, feedback: "MuChiShona unoti 'ndine makore' — asi muChiNgezi unoshandisa 'I am', kwete 'I have'." },
        ],
      },
      { speaker: 'npc', target: "Thank you. That's all we need.", native: 'Ndatenda. Ndizvo zvese zvatinoda.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Iwe wakaramba kushandisa 'I have' — ndiwo musiyano mukuru pakati peChiShona neChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: "Une makore mangani? (in English)",            correct: ['How old are you?', 'how old are you?', 'How old are you'] },
      { prompt: "Ndine makore makumi matatu (in English)",     correct: ["I'm 30", "I am 30", "I'm thirty", "I am thirty", "I'm 30 years old", "I am 30 years old", "I'm thirty years old"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nyora foromu imwe nhasi (kunyange yenhema) wakaisa makore ako muChiNgezi: 'I'm ___ years old.' Itazve nemumwe — bvunzanai makore muChiNgezi.",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at the front desk of an English-language clinic filling in a patient form. The receptionist asks the form questions out loud and types your answers in English.",
    rwenRole: "Mrs. Banda, 50, a no-nonsense but kind receptionist. Asks short, direct questions and confirms each answer.",
    successCriteria: "User answers the age question with a full 'I'm X years old' sentence (or 'I'm X'), uses the verb 'am' (not 'have'), and pronounces the number clearly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
