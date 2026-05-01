import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — Handinzwisise",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Pose paunenge usina kunzwisisa, taura izvozvo. MuChiNgezi: 'I don't understand'. Iri ishoko rinokumirira pose paunononotswa nemashoko.",
    culturalNote: "MuChiShona kuti tipinde negation tinoshandisa 'handi-' ('handinzwisise'). MuChiNgezi tinoshandisa 'don't' (=do + not) — 'I don't understand'. Usanyara kutaura izvi — vanhu vanotaura ChiNgezi vanofarira kunzwa kuti munhu anonzwisisa here, kuitira kuti vagadzirise mutauro wavo.",
  },

  chunks: [
    {
      id: 'i_dont_understand',
      target: "I don't understand",
      native: 'Handinzwisise',
      literal: 'I do-not understand',
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND',
      audioRef: null,
    },
    {
      id: 'repeat_please',
      target: 'Repeat, please',
      native: 'Dzokorora, ndapota',
      literal: 'Repeat, please',
      emoji: '🔁',
      phonetic: 'ree-PEET-PLEEZ',
      audioRef: null,
    },
    {
      id: 'what_did_you_say',
      target: 'What did you say?',
      native: 'Wati chii?',
      literal: 'What did you say?',
      emoji: '❓',
      phonetic: 'WHUT-did-yoo-SAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Negation with 'don't'",
    explanation: "MuChiNgezi tinoita negation neshoko 'don't' (do + not) pamberi pechiitwa: 'I don't understand', 'I don't know', 'I don't speak French'. Iro 'don't' rinoramba chiitwa chinotevera.",
    examples: [
      { target: "I don't understand.", native: 'Handinzwisise.' },
      { target: "I don't know.",        native: 'Handizivi.' },
      { target: "I don't speak fast.",  native: 'Handitauri nokukurumidza.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I don't understand", right: 'Handinzwisise' },
        { left: 'Repeat, please',     right: 'Dzokorora, ndapota' },
        { left: 'What did you say?',   right: 'Wati chii?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Handinzwisise',
      correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuratidza kuti hauna kunzwisisa',
      sentence: "I ____ understand.",
      options: ["don't", "am not", "do"],
      correct: "don't",
      context: "Negation muChiNgezi inoshandisa 'don't' pamberi pechiitwa.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kukumbira munhu adzokorore',
      words: ['Can', 'repeat', 'you', 'that'],
      correct: ['Can', 'you', 'repeat', 'that'],
      translation: 'Mungadzokore here?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Wati chii?',
      correct: ['What did you say?', 'what did you say?', 'What did you say', 'what did you say'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — bvunza kuti vadzokore zvishoma',
      prompt: 'Dzokorora zvinyoro nyoro, ndapota',
      correct: ['Repeat slowly, please', 'Repeat slowly, please.', 'Please repeat slowly', 'Please, repeat slowly', 'repeat slowly, please'],
    },
  ],

  rwenDialogue: {
    intro: "Wave paLondon Heathrow. Officer wepa-immigration anokutaurira nokukurumidza — hauna kunzwa kunyange chimwe.",
    lines: [
      { speaker: 'npc', target: "How long are you staying and what's your hotel address?", native: "Uchagarei ipapo nguva yakareba sei uye hotera yako iri kupi?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please.", native: "Ndine urombo, handinzwisise. Zvinyoro nyoro, ndapota.", correct: true,  feedback: 'Wakwanisa — wakumbira ruregerero, watsanangura, uye wakumbira mutauro mushoma.' },
          { target: "Yes.",                                         native: 'Hongu.',                                                 correct: false, feedback: "Mhinduro yenhema — hauna kunzwisisa. Taura izvozvo." },
          { target: "OK, goodbye.",                                  native: 'OK, sara zvakanaka.',                                   correct: false, feedback: "Hauna kuendepi — taura kuti hauna kunzwisisa." },
        ],
      },
      { speaker: 'npc', target: "Sure. How — long — are — you — staying?", native: 'OK. Uchagarei nguva yakareba sei?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Mashoko aya anokuponesa pamatambudziko ezvirevo — usatya kuashandisa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "I don't understand (in English)", correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"] },
      { prompt: 'Repeat, please (in English)',     correct: ['Repeat, please', 'Repeat please', 'repeat, please', 'Please repeat', 'Please, repeat'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Edza kutaura 'I don't understand' kakaviri nhasi — kunyange uri wega — kuti munhandare ipo. Bata zvinochengeta dzimwe nzeve dzako.",
    rwenSignoff: "Hapana munhu ane chinangwa chekuziva zvose pakarepo. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at the immigration desk at London Heathrow. The officer is professional but speaks fast British English. You're tired from the flight and missed half of the question. Politely tell them you don't understand and ask for clarification.",
    rwenRole: "Officer Davies, 45, immigration officer. Polite but no-nonsense, speaks fast clipped English. Will repeat slowly if asked.",
    successCriteria: "User uses 'I don't understand' or 'Sorry, I didn't catch that', asks 'Can you repeat?' or 'Slowly, please', stays calm. Doesn't pretend to understand and say 'Yes' to questions they didn't follow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
