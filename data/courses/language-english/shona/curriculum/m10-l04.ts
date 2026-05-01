import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Being Sick — Kurwara',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiShona, unoti 'Ndine bambo musoro' (ndine + body part) — exact same structure ne ChiNgezi 'I have a headache'. Iyi i bridge yakanaka chose! 'I have' inotanga zvirevo zvakawanda zvehutano: 'I have a fever' (ndine fivha), 'I have a cough' (ndine kwicha), 'I have stomach pain' (ndine kurwadza kwedumbu).",
    culturalNote: "Pa GP weChiNgezi (UK NHS, US doctor, SA private GP), nguva yawakawana ipfupi — minute mishanu kana gumi. Tanga ne chiri kukushaisha (kwete nyaya yose): 'I don't feel well. I have a headache that won't go away.' Kujeka kunoshanda kupfuura kupfava. 'Won't go away' (haisi kuda kupera) inotaura kuti chinhu chiri kuenderera — chinhu chinodikana ne chiremba.",
  },

  chunks: [
    {
      id: 'dont_feel_well',
      target: "I don't feel well",
      native: 'Handisi kunzwa zvakanaka',
      literal: 'I do-not feel well',
      emoji: '🤒',
      phonetic: 'ay-DOHNT-feel-WEL',
      audioRef: null,
    },
    {
      id: 'have_headache',
      target: 'I have a headache',
      native: 'Ndine bambo musoro',
      literal: 'I-have a headache',
      emoji: '🤕',
      phonetic: 'ay-HAV-uh-HED-ayk',
      audioRef: null,
    },
    {
      id: 'need_a_doctor',
      target: 'I need a doctor',
      native: 'Ndinoda chiremba',
      literal: 'I-need a doctor',
      emoji: '👨‍⚕️',
      phonetic: 'ay-NEED-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'I have a... (symptom structure)',
    explanation: "ChiNgezi inoshandisa 'I have a + symptom' kakawanda — yakafanana ne ChiShona 'Ndine + chinhu chinorwadza'. Examples: 'I have a headache', 'I have a sore throat', 'I have a cough', 'I have a fever'. Kana chichienderera, wedzera 'that won't go away': 'I have a headache that won't go away' (chiri pano mazuva matatu). Pasina 'a' kana 'an' panhau dzisingadhindwa: 'I have stomach pain', 'I have back pain'.",
    examples: [
      { target: "I don't feel well — I have a headache.",                  native: 'Handisi kunzwa zvakanaka — ndine bambo musoro.' },
      { target: "I have a sore throat and a cough.",                       native: 'Ndine huro yakarwadza ne kwicha.' },
      { target: "I think I need a doctor.",                                  native: 'Ndinofunga ndoda chiremba.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I don't feel well",   right: 'Handisi kunzwa zvakanaka' },
        { left: 'I have a headache',    right: 'Ndine bambo musoro' },
        { left: 'I need a doctor',      right: 'Ndinoda chiremba' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapinda kuGP, mhinduro yekutanga',
      prompt: 'Handisi kunzwa zvakanaka. Ndine bambo musoro kwemazuva matatu.',
      correct: ["I don't feel well. I have a headache for three days.", "I don't feel well. I've had a headache for three days.", "I don't feel well — I have a headache for three days.", "i don't feel well. i have a headache for three days."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoda kuona chiremba.',
      correct: ['I need to see a doctor.', 'I want to see a doctor.', 'I need a doctor.', 'i need to see a doctor.'],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'I have a headache that won't go away'",
      words: ['away.', 'go', "won't", 'I', 'a', 'have', 'headache', 'that'],
      correct: ['I', 'have', 'a', 'headache', 'that', "won't", 'go', 'away.'],
      translation: 'Ndine bambo musoro usingadi kupera',
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — pa GP, watanga kutsanangura zvauinazvo",
      sentence: "I _____ a sore throat and a cough.",
      options: ['have', 'am', 'do'],
      correct: 'have',
      context: "'I have + symptom' = chiri kukushaisha. 'I am' inonyatsoshanda nemanzwiro, kwete masymptom. ChiShona chinotaridza: 'Ndine ___' = 'I have ___'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chinotanga kutaura',
      question: "You walk into a UK GP appointment. The doctor says 'What can I do for you today?' What's the best opening?",
      options: [
        { text: "I don't feel well. I have a headache that won't go away — for five days now.", correct: true },
        { text: "Hello, doctor, how are you, your family is well?",                                   correct: false },
        { text: "Just give me medicine, please.",                                                       correct: false },
      ],
      explanation: "Pa GP, taura chinokushaisha pakarepo. 'I have a headache that won't go away — for five days' inoratidza chiremba mhindiro inoshanda. Hutsika hwekubvunza nezvemhuri unozodzoka pakupedza, kwete pakutanga.",
    },
  ],

  rwenDialogue: {
    intro: "Wapinda paUK GP appointment. Chiremba ari kunyora pa screen, akatarisa kwauri.",
    lines: [
      { speaker: 'npc', target: "Hi, please come in. What can I do for you today?", native: 'Mhoro, pinda. Ndingakuitire chii nhasi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, doctor. I don't feel well — I have a headache that won't go away. It's been five days.", native: 'Mhoro, chiremba. Handisi kunzwa zvakanaka — ndine bambo musoro usingadi kupera. Yava mazuva mashanu.', correct: true, feedback: "Wakwanisa — pacharo: 'don't feel well' (kutaridza chiitiko), 'headache that won't go away' (kuenderera), 'five days' (chizvarira). Chiremba akagamuchira mhinduro yose mu chirevo chimwe." },
          { target: "Headache.", native: 'Bambo musoro.', correct: false, feedback: "Pfupi zvakanyanya — wedzera kuti chinhu chacho chiri sei: 'I have a headache that won't go away — for five days.'" },
          { target: "Mhoro chiremba, makadii?", native: 'Mhoro chiremba, makadii?', correct: false, feedback: "ChiShona — uye nguva yapamuviri ndinopfupika. Tanga ne 'Hi, I don't feel well — I have a headache.'" },
        ],
      },
      { speaker: 'npc', target: "Five days — that's a while. Any nausea? Vision changes?", native: 'Mazuva mashanu — yakareba. Pane kuda kurutsa here? Kuona kwakashanduka here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a little nausea in the morning. My vision is fine.", native: 'Hongu, kuda kurutsa zvishoma mangwanani. Kuona kwangu kwakanaka.', correct: true, feedback: "Wakwanisa — wakapindura mubvunzo zvose zviri zviviri zvakajeka. ChiNgezi chechiremba — short, exact, useful." },
          { target: "Hongu.", native: 'Hongu.', correct: false, feedback: "ChiShona — uye chiremba akabvunza pamutsetse mishanu, ipindura yose miviri." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Pa chiremba, mhinduro pfupi nedzakajeka dzinoshanda. 'I have a headache that won't go away' = bridge yakaringana kubva ku 'Ndine bambo musoro'. Mazuva matatu eku revise — uchapinduka mu doctor's office mu Module 10 capstone.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'I have a headache (in English)',     correct: ['I have a headache', 'I have a headache.', 'i have a headache'] },
      { prompt: "I don't feel well (in English)",     correct: ["I don't feel well", "I do not feel well", "I don't feel well.", "i don't feel well"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Fungidzira waenda kuGP weChiNgezi. Nyora pa phone notes — chirevo chimwe muChiNgezi chinotsanangura chinokushaisha (chero chinhu — kana usingarwari, sarudza chimwe): 'Hi doctor, I don't feel well. I have a ___ that won't go away. It's been ___ days.' Verenga muromo katatu.",
    rwenSignoff: "Mangwana — body parts. Kuratidza panorwadza pasina kufamba neshoko.",
  },

  phase8: {
    scenario: "You're at a UK GP surgery. You've had a persistent headache for 5 days, plus mild morning nausea. The GP has 8 minutes. Open with what's wrong, answer follow-ups about duration and other symptoms, and ask one question at the end.",
    rwenRole: "Dr. Patel, 50, UK NHS GP. Efficient, kind, slightly time-pressured. Will ask: duration, pain location, other symptoms, medications you're taking.",
    successCriteria: "User opens with 'I don't feel well' or 'I have a ___'. Uses 'have a + symptom' structure at least twice. Mentions duration ('for five days', 'since Monday'). Stays in English. Asks one question (e.g., 'Should I be worried?', 'What can I take?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
