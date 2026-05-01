import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Your English Story — A2 Complete',
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "Iyi i lesson yekupedzisira. 100 lessons. 10 modules. Kubva pa 'Hello' kusvika pa proverbs, kubva pa 'My name is...' kusvika pa job interview. Nhasi haudzidzi — unotaura. Nyaya yako yose ye English-learning journey, muChiNgezi. Ratidza kuti wave ani.",
    culturalNote: "Kupedza curriculum kunoreva kuti hauchina kungodzidza mashoko chete — wakapinda muhupenyu. Wakaziva kukwazisa, kupinda kuchiremba, kuita order paLondon, kuva mwoyo pakati peEnglish-speakers, uye iye zvino — kutaura nyaya yako yose. Iyi i Rwendo journey: kubva pa Mhoro kusvika pa 'Where I'm from we say...'. Wakwanisa — wakavhura mukova, wakawana ChiNgezi pasina kurasa ChiShona.",
  },

  chunks: [
    {
      id: 'i_started_learning',
      target: 'I started learning English',
      native: 'Ndakatanga kudzidza ChiNgezi',
      literal: 'I-started learning English',
      emoji: '🌱',
      phonetic: 'ay-STAR-ted-LER-ning-IN-glish',
      audioRef: null,
    },
    {
      id: 'now_i_can',
      target: 'Now I can...',
      native: 'Iye zvino ndinokwanisa...',
      literal: 'now I can',
      emoji: '🚀',
      phonetic: 'now-AY-kan',
      audioRef: null,
    },
    {
      id: 'journey_continues',
      target: 'The journey continues',
      native: 'Rwendo ruchiripo',
      literal: 'the journey continues',
      emoji: '🌅',
      phonetic: 'thuh-JER-nee-kun-TIN-yooz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Your full story — past, present, future',
    explanation: "Nyaya yose ine zvikamu zvitatu. (1) PAST — kwawakatangira: 'I started learning English when ___' / 'A few months ago I couldn't ___'. (2) PRESENT — pawave iye zvino: 'Now I can ___' / 'Today I can ___'. (3) FUTURE — pauri kuenda: 'I hope to ___' / 'One day I'll ___' / 'The journey continues'. Sanganisa zvose zviri zvitatu mu nyaya imwe — iyi i A2 storytelling chaiyo. Hauna kupera — wave kutanga kuita basa pamoyo wako we ChiNgezi.",
    examples: [
      { target: "I started learning English a few months ago. I couldn't even introduce myself.", native: 'Ndakatanga kudzidza ChiNgezi mwedzi mishoma yapfuura. Ndakanga ndisingakwanisi kunyange kuzvi-introduce.' },
      { target: 'Now I can order in restaurants, talk to my doctor, and tell stories.',          native: 'Iye zvino ndinokwanisa kuita order pa restaurants, kutaura nachiremba, ne kutaura nyaya.' },
      { target: "I hope to keep growing — the journey continues.",                                native: 'Ndinotarisira kuramba ndichikura — rwendo ruchiripo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zvenyaya yako',
      pairs: [
        { left: 'I started learning English',  right: 'Past — kwawakatangira' },
        { left: 'Now I can',                    right: 'Present — pawave iye zvino' },
        { left: 'The journey continues',        right: 'Future — pauri kuenda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — past',
      prompt: 'Ndakatanga kudzidza ChiNgezi mwedzi mishoma yapfuura.',
      correct: ['I started learning English a few months ago.', 'I started learning English a few months ago', 'i started learning english a few months ago.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — present + future',
      prompt: 'Iye zvino ndinokwanisa kutaura. Rwendo ruchiripo.',
      correct: ['Now I can speak. The journey continues.', 'Now I can talk. The journey continues.', 'Now I can speak — the journey continues.', 'now i can speak. the journey continues.'],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'Now I can order in restaurants and talk to my doctor'",
      words: ['talk', 'restaurants', 'in', 'order', 'doctor.', 'and', 'Now', 'my', 'I', 'to', 'can'],
      correct: ['Now', 'I', 'can', 'order', 'in', 'restaurants', 'and', 'talk', 'to', 'my', 'doctor.'],
      translation: 'Iye zvino ndinokwanisa kuita order pa restaurants ne kutaura nachiremba',
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa nyaya yako yekupedzisira",
      sentence: 'I started with "Hello." Now I can tell my whole story. The journey _____.',
      options: ['continues', 'ended', 'stops'],
      correct: 'continues',
      context: "'The journey continues' = 'rwendo ruchiripo'. Wakapfuura A2 — asi pasina kupedza. Pano ndipo paunotanga kushandisa.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Final reflection',
      question: "100 lessons completed. Which sentence best captures your A2 moment?",
      options: [
        { text: "I started with 'Hello.' Now I can tell my whole story — in English. The journey continues.", correct: true },
        { text: "I'm not finished yet.",                                                                          correct: false },
        { text: "I learned some words.",                                                                            correct: false },
      ],
      explanation: "Nyaya yose mu mitsetse mitatu — past ('started with Hello'), present ('can tell my whole story'), future ('journey continues'). Iyi ndiyo A2 moment yako. Hauchina kuva mwana pa ChiNgezi — wave murwi.",
    },
  ],

  rwenDialogue: {
    intro: "Final lesson. Final dialogue. Rwen ane mubvunzo mumwe — wakakosha pakati pose. Pindura ne moyo wose — muChiNgezi.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "We've walked 100 lessons together. From 'Mhoro' to proverbs, from 'I'm fine, thanks' to 'Where do you see yourself in 5 years'. Now — tell me your story. Who are you in English today?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I started learning English a few months ago. I couldn't introduce myself. Now I can order in restaurants, see a doctor, share Shona proverbs at a multicultural dinner, and tell my story. I hope to keep going. The journey continues.", native: 'Ndakatanga kudzidza ChiNgezi mwedzi mishoma yapfuura. Ndakanga ndisingakwanisi kuzvi-introduce. Iye zvino ndinokwanisa kuita order, kuona chiremba, kupa tsumo dzeChiShona pa multicultural dinner, ne kutaura nyaya yangu. Ndinotarisira kuenderera. Rwendo ruchiripo.', correct: true, feedback: "Mitsetse mishanu yakwana — past, present, future, hutsika, ne hupenyu hwekuenderera. Wakaratidza kuti hauna kungodzidza ChiNgezi — wakapinda muChiNgezi. Rwen haasati achina chimwe chekudzidzisa. Asi anachimwe chekupemberera." },
          { target: "I learned a lot.", native: 'Ndadzidza zvakawanda.', correct: false, feedback: "Pfupi zvakanyanya — wakapeta makore makuru. Vaka nyaya yose: 'I started with Hello. Now I can tell my whole story. The journey continues.'" },
          { target: "Ndinotaura ChiNgezi.", native: 'Ndinotaura ChiNgezi.', correct: false, feedback: "ChiShona — uye iyi ndiyo final lesson, vavarira ChiNgezi: 'I started learning English. Now I can speak. The journey continues.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The journey continues. You spoke your story — in English. 100 lessons. 10 modules. From Mhoro to proverbs, from greetings to job interviews. You haven't lost Shona — you've added a tongue. Tichaonana — we'll see each other again.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Final recall. Everything began here.',
    prompts: [
      { prompt: 'Now I can (in English)',           correct: ['Now I can', 'now i can'] },
      { prompt: 'The journey continues (in English)', correct: ['The journey continues', 'the journey continues', 'The journey continues.', 'the journey continues.'] },
    ],
  },

  mission: {
    title: 'Basa rakanyanya kukosha — A2 Mission',
    task: "Taura ChiNgezi nemumwe munhu chaiye nhasi. Kwete practice — chaiye. Wana munhu anotaura ChiNgezi — pa kombi, pakambani, pa online language exchange, pa video call ne shamwari yepatari. Shandisa ChiNgezi yako. Mutauro unorarama chete kana uchifamba pakati pevanhu. Rwendo ruchiripo.",
    rwenSignoff: "Wakwanisa. Rwendo ruchiripo. Tichaonana, murwi we ChiNgezi. Famba zvakanaka — nguva dzose.",
  },

  phase8: {
    scenario: "Capstone conversation. You're at a casual gathering — coffee with someone you've just met who asks 'How long have you been speaking English?' You have 4 minutes to tell your full English-learning story: where you started, what you can do now, where you hope to go. Use everything from Modules 1-9.",
    rwenRole: "Sam, 30, an English speaker you've just met. Curious, kind, will ask follow-up questions: 'What was hardest?', 'Where do you use it most?', 'What's next?'",
    successCriteria: "User uses past tense ('I started', 'I couldn't'), present capability ('Now I can ___'), and future hope ('I hope to ___' or 'One day I'll ___'). Mentions at least 2 specific abilities (e.g., 'order in restaurants', 'see a doctor', 'tell stories', 'share proverbs'). Speaks 5+ sentences. Stays in English throughout. Closes with 'The journey continues' or equivalent.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
