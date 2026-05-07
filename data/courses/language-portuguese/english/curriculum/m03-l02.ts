import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l02-eu-estou",
  module: 3,
  lesson: 2,
  title: "Eu estou — I am (right now)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday we met ser (permanent). Today, estar — for what you ARE right now. Tired, happy, in São Paulo, hungry. States that change.",
    culturalNote: "Brazilians use estar for moods and conditions. Estou cansado (I am tired), Estou feliz (I am happy), Estou no Rio (I am in Rio). Mix it up with ser and you will sound foreign — get it right and you sound fluent.",
  },

  chunks: [
    { id: "eu_estou", target: "Eu estou", native: "I am (estar — temporary)", literal: "I am", emoji: "🌊", phonetic: "EH-oo es-TOH", audioRef: null },
    { id: "voce_esta", target: "Você está", native: "You are (right now)", literal: "You are", emoji: "🫵", phonetic: "voh-SAY es-TAH", audioRef: null },
    { id: "estou_cansado", target: "Estou cansado/a", native: "I am tired (m./f.)", literal: "I-am tired", emoji: "😴", phonetic: "es-TOH kan-SAH-doo", audioRef: null },
  ],

  pattern: {
    name: "Estar — the temporary verb",
    explanation: "Estar = states that change. How you feel, where you are, what is happening now. Eu estou, Você está, Ele/Ela está.",
    examples: [
      { target: "Estou cansado.", native: "I am tired. (m.)" },
      { target: "Você está bem?", native: "Are you OK?" },
      { target: "Ela está em São Paulo.", native: "She is in São Paulo." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu estou", right: "I am (right now)" },
      { left: "Você está", right: "You are (right now)" },
      { left: "Estou cansado", right: "I am tired" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am tired (woman speaking)", correct: ["Estou cansada", "estou cansada"] },
    { type: "fill_blank", instruction: "Pick the right verb (state, not identity)", sentence: "Eu ____ feliz hoje.", options: ["estou", "sou", "é"], correct: "estou", context: "Feeling now = estar = estou." },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Eu estou no Rio.", correct: true },
      { text: "Eu sou no Rio.", correct: false },
      { text: "Eu é no Rio.", correct: false },
    ], explanation: "Location now = estar. Estou no Rio." },
    { type: "build_sentence", instruction: "Build I am happy", words: ["feliz.", "Estou"], correct: ["Estou", "feliz."], translation: "I am happy." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Are you OK?", correct: ["Você está bem?", "você está bem?", "Voce esta bem?"] },
  ],

  rwenDialogue: {
    intro: "A friend texts you in São Paulo asking how you are.",
    lines: [
      { speaker: "npc", target: "E aí, como você está?", native: "Hey, how are you?" },
      { speaker: "user", userChoices: [
        { target: "Estou bem, mas cansado/a. E você?", native: "I am well, but tired. And you?", correct: true, feedback: "Estar (state) used right, gendered, bounced back." },
        { target: "Eu sou cansado", native: "I am-permanently tired", correct: false, feedback: "Tiredness is temporary — use estou, not sou." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Reply to the question — Estou bem." },
      ]},
      { speaker: "npc", target: "Estou ótima, valeu!", native: "I am great, thanks!" },
      { speaker: "rwen", rwenLine: "Ser AND estar in one day. The two pillars of being-in-Portuguese.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am (right now — estar, Portuguese)", correct: ["Estou", "estou", "Eu estou", "eu estou"] },
      { prompt: "I am tired (use form for YOUR gender)", correct: ["Estou cansado", "estou cansado", "Estou cansada", "estou cansada"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three estar sentences about right now: Estou em [place]. Estou [feeling]. Estou [activity]. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Video call with a Brazilian friend. They ask how you are and where you are right now. Use estar throughout — never ser.",
    rwenRole: "Camila — friend, ~30, paulistana, casual.",
    successCriteria: "User says Estou bem / cansado/a / feliz (NOT sou), Estou em + place (NOT sou em), and gets the speaker-gendered adjective endings right.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
