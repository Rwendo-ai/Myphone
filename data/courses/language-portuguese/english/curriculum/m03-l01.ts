import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l01-eu-sou",
  module: 3,
  lesson: 1,
  title: "Eu sou — I am (permanent)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 3: building YOU in Portuguese. Two verbs say 'I am' — ser and estar. Today, ser. For who you ARE — name, nationality, profession, identity.",
    culturalNote: "Brazilians introduce themselves quickly with sou + identity: Sou brasileira. Sou professor. Sou carioca. The verb ser carries the permanent things — the bones of who you are.",
  },

  chunks: [
    { id: "eu_sou_ser", target: "Eu sou", native: "I am (ser — permanent)", literal: "I am", emoji: "🪨", phonetic: "EH-oo SOH", audioRef: null },
    { id: "voce_e", target: "Você é", native: "You are", literal: "You are", emoji: "🫵", phonetic: "voh-SAY EH", audioRef: null },
    { id: "ele_ela_e", target: "Ele / Ela é", native: "He / She is", literal: "He/She is", emoji: "👥", phonetic: "EH-lee / EH-lah EH", audioRef: null },
  ],

  pattern: {
    name: "Ser — the permanent verb",
    explanation: "Ser describes things that do not change easily: identity, origin, profession, nationality, deep traits. Eu sou (I am), Você é (you are), Ele/Ela é (he/she is).",
    examples: [
      { target: "Eu sou inglês.", native: "I am English. (m.)" },
      { target: "Você é brasileira.", native: "You are Brazilian. (f.)" },
      { target: "Ela é professora.", native: "She is a teacher." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu sou", right: "I am" },
      { left: "Você é", right: "You are" },
      { left: "Ela é", right: "She is" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am English (man speaking)", correct: ["Eu sou inglês", "eu sou inglês", "Sou inglês", "sou ingles"] },
    { type: "fill_blank", instruction: "Complete with the right ser form", sentence: "Você ____ brasileira.", options: ["é", "sou", "são"], correct: "é", context: "Você é (you are)." },
    { type: "multiple_choice", instruction: "Which uses ser correctly?", question: "Choose", options: [
      { text: "Eu sou professor", correct: true },
      { text: "Eu é professor", correct: false },
      { text: "Você sou professor", correct: false },
    ], explanation: "Eu sou — I am. The conjugation must match the subject." },
    { type: "build_sentence", instruction: "Build She is Brazilian", words: ["brasileira.", "Ela", "é"], correct: ["Ela", "é", "brasileira."], translation: "She is Brazilian." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "He is English", correct: ["Ele é inglês", "ele é inglês", "Ele e ingles"] },
  ],

  rwenDialogue: {
    intro: "First Portuguese class in Salvador. Round of introductions.",
    lines: [
      { speaker: "npc", target: "Quem é você?", native: "Who are you?" },
      { speaker: "user", userChoices: [
        { target: "Eu sou Alex. Sou inglês/inglesa.", native: "I am Alex. I am English.", correct: true, feedback: "Two ser sentences, identity locked in." },
        { target: "Eu estou Alex", native: "I am-temporarily Alex", correct: false, feedback: "Identity is permanent — use sou, not estou." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Introduce yourself with sou + name." },
      ]},
      { speaker: "npc", target: "Muito prazer! Sou Beatriz, sou brasileira.", native: "Very nice! I am Beatriz, I am Brazilian." },
      { speaker: "rwen", rwenLine: "Ser = the permanent self. You said WHO you are. Brazilian first impressions: locked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am (permanent — ser, Portuguese)", correct: ["Eu sou", "eu sou", "Sou", "sou"] },
      { prompt: "She is (Portuguese)", correct: ["Ela é", "ela é", "Ela e", "ela e"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build three sentences about yourself. Eu sou [name]. Eu sou [nationality]. Eu sou [profession]. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First day at a Portuguese conversation meetup in Salvador. Round of introductions — say who you are using ser.",
    rwenRole: "Bea — meetup host, ~32, baiana, friendly.",
    successCriteria: "User uses Eu sou (NOT estou) for name, nationality, profession because ser is for permanent identity. Adds gendered adjective (inglês/inglesa) matching speaker's gender.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
