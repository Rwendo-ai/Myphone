import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l02-numeros-grandes",
  module: 6,
  lesson: 2,
  title: "Onze a Cem — 11 to 100",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "11-19 are special. From 20 on, it is regular: vinte (20), trinta (30), cem (100). And the connector is e — vinte e cinco (25).",
    culturalNote: "Brazilian phone numbers are usually given digit by digit, not as compound numbers. Prices are spoken with the e: trinta e cinco reais (35 reais).",
  },

  chunks: [
    { id: "onze_dezenove", target: "Onze, doze... dezenove", native: "11, 12... 19", literal: "11-19 (irregular)", emoji: "1️⃣9️⃣", phonetic: "OHN-zee, DOH-zee, deh-zeh-NO-vee", audioRef: null },
    { id: "vinte_etc", target: "Vinte, trinta, quarenta...", native: "20, 30, 40...", literal: "Tens", emoji: "2️⃣0️⃣", phonetic: "VEEN-chee, TREEN-tah", audioRef: null },
    { id: "e_connector", target: "Vinte e cinco", native: "Twenty-five (with e)", literal: "Twenty and five", emoji: "➕", phonetic: "VEEN-chee ee SEEN-koo", audioRef: null },
  ],

  pattern: {
    name: "Building numbers with e",
    explanation: "20-99: ten + e + unit. Vinte e um, trinta e cinco, sessenta e oito. Cem = 100 exact. Cento = used in 101+.",
    examples: [
      { target: "Vinte e cinco anos", native: "25 years" },
      { target: "Trinta e três reais", native: "33 reais" },
      { target: "Cem por cento", native: "100 percent" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Onze", right: "11" },
      { left: "Vinte", right: "20" },
      { left: "Cem", right: "100" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Twenty-five", correct: ["Vinte e cinco", "vinte e cinco"] },
    { type: "fill_blank", instruction: "Build 33", sentence: "Trinta ____ três.", options: ["e", "ou", "de"], correct: "e", context: "Connector is e." },
    { type: "multiple_choice", instruction: "Which is 50?", question: "Choose", options: [
      { text: "Cinquenta", correct: true },
      { text: "Cinco dez", correct: false },
      { text: "Cem", correct: false },
    ], explanation: "Cinquenta = 50." },
    { type: "build_sentence", instruction: "Build I have 25 years", words: ["anos.", "Tenho", "e", "cinco", "vinte"], correct: ["Tenho", "vinte", "e", "cinco", "anos."], translation: "I am 25 years old." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "One hundred", correct: ["Cem", "cem"] },
  ],

  rwenDialogue: {
    intro: "Brazilian asks your age and your phone digits.",
    lines: [
      { speaker: "npc", target: "Quantos anos você tem?", native: "How old are you?" },
      { speaker: "user", userChoices: [
        { target: "Tenho trinta e dois anos.", native: "I'm 32.", correct: true, feedback: "Trinta e dois — connector e in place." },
        { target: "Tenho 32", native: "(English-style number)", correct: false, feedback: "Spell it: trinta e dois." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with tenho + number + anos." },
      ]},
      { speaker: "npc", target: "Show!", native: "Cool!" },
      { speaker: "rwen", rwenLine: "11-100 with the e connector. The Brazilian number rhythm: caught.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Twenty-five (Portuguese)", correct: ["Vinte e cinco", "vinte e cinco"] },
      { prompt: "One hundred (Portuguese)", correct: ["Cem", "cem"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from 10 to 30 out loud in Portuguese. Stop on each number with the e connector for 21+.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Filling out a form with a Brazilian receptionist — age, address number, phone, year of birth. Speak the numbers, do not just write.",
    rwenRole: "Receptionist, ~35, paulistana, patient.",
    successCriteria: "User pronounces tens-and-units with e (trinta e cinco), uses cem for 100, gives multi-digit numbers as Brazilians do.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
