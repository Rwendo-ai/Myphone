import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l05-onibus",
  module: 9,
  lesson: 5,
  title: "Ônibus — Bus survival",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian buses are cheap, frequent, and chaotic. Onde fica o ponto? Posso descer aqui? Brazilians swing onto moving buses — you do not have to.",
    culturalNote: "Buses run on the Bilhete Único card in São Paulo, RioCard in Rio. You enter at the front, pay, push through the catraca (turnstile). Press the campainha (bell) to signal stop.",
  },

  chunks: [
    { id: "onibus", target: "Ônibus", native: "Bus", literal: "Bus (m. invariable)", emoji: "🚌", phonetic: "OH-nee-boos", audioRef: null },
    { id: "ponto", target: "Ponto de ônibus", native: "Bus stop", literal: "Point of bus", emoji: "🚏", phonetic: "POHN-too jee OH-nee-boos", audioRef: null },
    { id: "campainha", target: "A campainha", native: "The (stop) bell", literal: "Bell (f.)", emoji: "🔔", phonetic: "ah kahm-pah-EE-nyah", audioRef: null },
  ],

  pattern: {
    name: "Bus arc — three beats",
    explanation: "1. Find ponto: Onde fica o ponto? 2. Board: Esse ônibus vai pra X? 3. Stop signal: Aperta a campainha. Exit at door.",
    examples: [
      { target: "Onde fica o ponto?", native: "Where's the bus stop?" },
      { target: "Esse vai pra Pinheiros?", native: "Does this go to Pinheiros?" },
      { target: "Pode parar no próximo?", native: "Can you stop at the next one?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Ônibus", right: "Bus" },
      { left: "Ponto de ônibus", right: "Bus stop" },
      { left: "Campainha", right: "Bell" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is the bus stop?", correct: ["Onde fica o ponto de ônibus?", "onde fica o ponto de ônibus?", "Onde fica o ponto?"] },
    { type: "fill_blank", instruction: "Asking destination", sentence: "Esse ônibus ____ pra Pinheiros?", options: ["vai", "é", "está"], correct: "vai", context: "Vai pra = goes to." },
    { type: "multiple_choice", instruction: "How to signal a bus stop?", question: "Choose", options: [
      { text: "Aperta a campainha", correct: true },
      { text: "Sou parada", correct: false },
      { text: "Estou ônibus", correct: false },
    ], explanation: "Press the bell — aperta a campainha." },
    { type: "build_sentence", instruction: "Build Does this bus go to Copacabana?", words: ["pra", "Esse", "vai", "ônibus", "Copacabana?"], correct: ["Esse", "ônibus", "vai", "pra", "Copacabana?"], translation: "Does this bus go to Copacabana?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Can you stop at the next?", correct: ["Pode parar no próximo?", "pode parar no próximo?", "Pode parar no proximo?"] },
  ],

  rwenDialogue: {
    intro: "You wait at a Rio bus stop. A bus pulls up.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Esse ônibus vai pra Copacabana?", native: "Does this bus go to Copacabana?", correct: true, feedback: "Confirm before boarding — saves a bad ride." },
        { target: "Copacabana", native: "(unclear)", correct: false, feedback: "Frame: Esse ônibus vai pra Copacabana?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Confirm with the driver." },
      ]},
      { speaker: "npc", target: "Vai sim, sobe!", native: "Yes it does, get on!" },
      { speaker: "rwen", rwenLine: "Ônibus, ponto, campainha — Brazilian bus survival in three words.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Bus stop (Portuguese)", correct: ["Ponto de ônibus", "ponto de ônibus", "Ponto", "ponto"] },
      { prompt: "Does this bus go to X? (Portuguese, fill X)", correct: ["Esse ônibus vai pra", "esse ônibus vai pra", "Esse ônibus vai para", "Este ônibus vai para"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Onde fica o ponto? Esse ônibus vai pra X? Pode parar no próximo? Three bus survival lines.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Rio bus from Centro to Copacabana. Confirm route, ask cost, signal your stop.",
    rwenRole: "Bus driver — carioca, ~55, helpful.",
    successCriteria: "User confirms route with Esse vai pra X?, asks about payment, signals stop with Pode parar no próximo?",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
