import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Where I live — Kwandinogara',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Nhasi tinodzidza kutaura kwauri kugara nekwawakakurira. MuChiNgezi tinoshandisa 'I live in ...' nhasi, 'I grew up in ...' kare. Uye 'for ten years' kuratidza nguva — 'kwemakore gumi'.",
    culturalNote: "MuChiNgezi 'I live in Harare' inoshanda — usaisa 'at' (handisi 'I live at Harare'). 'In' inoshandiswa kunyika nemaguta makuru. 'Grew up' inoreva 'kukurira' — kunyange iwe wakanga uri mudiki, ikozvino zvapfuura. Iyi grammar inonzi past simple.",
  },

  chunks: [
    {
      id: 'i_live_in_harare',
      target: 'I live in Harare',
      native: 'Ndinogara muHarare',
      literal: 'I live in Harare',
      emoji: '🏘️',
      phonetic: 'ay-LIV-in-ha-RAH-ray',
      audioRef: null,
    },
    {
      id: 'i_grew_up_in',
      target: 'I grew up in ...',
      native: 'Ndakakurira ku...',
      literal: 'I grew up in ...',
      emoji: '🌱',
      phonetic: 'ay-GROO-up-in',
      audioRef: null,
    },
    {
      id: 'for_ten_years',
      target: 'For ten years',
      native: 'Kwemakore gumi',
      literal: 'For ten years',
      emoji: '📅',
      phonetic: 'for-TEN-yeerz',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"For" + duration',
    explanation: "Kuratidza nguva yauri kuita chimwe chinhu, shandisa 'for' + nhamba + nguva: 'for ten years' (makore gumi), 'for two months' (mwedzi miviri). Mutsara wakakwana: 'I've lived in Harare for ten years' = 'Ndava nemakore gumi ndichigara muHarare'. Pakutanga, shandisa nyore: 'I live in Harare. For ten years now.'",
    examples: [
      { target: 'I live in Harare',              native: 'Ndinogara muHarare' },
      { target: 'For ten years',                  native: 'Kwemakore gumi' },
      { target: 'I grew up in Mutare',            native: 'Ndakakurira kuMutare' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko enyaya yepamba',
      pairs: [
        { left: 'I live in Harare',    right: 'Ndinogara muHarare' },
        { left: 'I grew up in Mutare',  right: 'Ndakakurira kuMutare' },
        { left: 'For ten years',        right: 'Kwemakore gumi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinogara muHarare',
      correct: ['I live in Harare', 'i live in Harare', 'I live in harare'] ,
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Kwemakore gumi',
      correct: ['For ten years', 'for ten years', 'For 10 years', 'for 10 years'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza chivakashure chakanaka',
      sentence: "I live ____ Harare.",
      options: ['in', 'at', 'on'],
      correct: 'in',
      context: "MuChiNgezi tinoshandisa 'in' kwemaguta nenyika.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wenzvimbo',
      words: ['I', 'live', 'in', 'Harare'],
      correct: ['I', 'live', 'in', 'Harare'],
      translation: 'Ndinogara muHarare',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wenguva',
      words: ['For', 'ten', 'years'],
      correct: ['For', 'ten', 'years'],
      translation: 'Kwemakore gumi',
    },
  ],

  rwenDialogue: {
    intro: "Wasangana ne mushanyi anobva kuEurope pa Avondale Mall. Anoda kuziva nezveharare.",
    lines: [
      { speaker: 'npc', target: "So, are you from here? How long have you lived in Harare?", native: 'Saka, unobva pano? Wagara muHarare kwenguva yakareba?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I live in Harare, but I grew up in Mutare. For ten years now.", native: 'Ndinogara muHarare, asi ndakakurira kuMutare. Kwemakore gumi izvozvi.', correct: true,  feedback: "Wakwanisa — wakatambidza nyaya yose: ikozvino, kare, nenguva." },
          { target: "Harare ten years.",                                               native: 'Harare makore gumi.',                                                  correct: false, feedback: "Wakapa ruzivo asi pasina 'I live' kana 'for' — wedzera mashoko." },
          { target: "I live at Harare.",                                              native: 'Ndinogara paHarare.',                                                  correct: false, feedback: "Itoti 'in Harare' — kwete 'at'. Iyi 'in' inoshandiswa kumaguta makuru." },
        ],
      },
      { speaker: 'npc', target: "Mutare is beautiful. Do you go back often?", native: 'Mutare yakanaka. Unodzokerako kakawanda here?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakashandisa 'in' pa maguta uye 'for' panguva. Ndizvo zvakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndinogara muHarare (in English)',          correct: ['I live in Harare', 'i live in Harare', 'I live in harare'] },
      { prompt: 'Ndakakurira kuMutare (in English)',        correct: ['I grew up in Mutare', 'i grew up in Mutare', 'I grew up in mutare'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nyora mitsara mitatu nhasi: 'I live in ___', 'I grew up in ___', 'For ___ years'. Tarisa kuti washandisa 'in' kwete 'at'.",
    rwenSignoff: "Famba zvakanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "A curious tourist at the entrance to a local museum strikes up a chat in English. They want to know if you're a local and what life in Harare is like.",
    rwenRole: "Hannah, 32, a backpacker from Australia on day three of a Zim trip. Friendly, asks where you live, where you grew up, how long, what's changed.",
    successCriteria: "User says 'I live in [city]' (with 'in', not 'at'), mentions where they grew up using past tense ('I grew up in ...'), and uses 'for' + duration at least once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
