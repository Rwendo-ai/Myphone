import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l03-uber",
  module: 9,
  lesson: 3,
  title: "Uber — Brazil's transit reality",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Uber is everywhere in Brazil — cheaper than taxi, used by everyone. Today: greeting the driver, confirming, paying, leaving.",
    culturalNote: "Brazilians chat with Uber drivers — about traffic, weather, futebol. A silent ride feels cold. Drivers expect at least Boa noite, tudo bem? on entry.",
  },

  chunks: [
    { id: "tudo_bem_motorista", target: "Boa tarde, tudo bem?", native: "Good afternoon, all good?", literal: "Driver greeting", emoji: "🚗", phonetic: "BOH-ah TAR-jee", audioRef: null },
    { id: "endereco", target: "Endereço", native: "Address", literal: "Address (m.)", emoji: "🏠", phonetic: "en-deh-REH-soo", audioRef: null },
    { id: "pode_parar", target: "Pode parar aqui", native: "You can stop here", literal: "Can stop here", emoji: "🛑", phonetic: "POH-jee pah-RAR", audioRef: null },
  ],

  pattern: {
    name: "Uber arc — four beats",
    explanation: "1. Boa noite/tarde, tudo bem? (greet) 2. Confirm endereço. 3. Optional small talk. 4. Pode parar aqui — you can stop here. End with obrigado/a, valeu.",
    examples: [
      { target: "Boa tarde, tudo bem?", native: "Good afternoon, all good?" },
      { target: "É no endereço X?", native: "It's at address X?" },
      { target: "Pode parar aqui na esquina.", native: "You can stop here at the corner." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Boa tarde", right: "Good afternoon" },
      { left: "Endereço", right: "Address" },
      { left: "Pode parar aqui", right: "You can stop here" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "You can stop here", correct: ["Pode parar aqui", "pode parar aqui"] },
    { type: "fill_blank", instruction: "Greeting Uber driver", sentence: "Boa noite, ____ bem?", options: ["tudo", "como", "está"], correct: "tudo", context: "Tudo bem? = all good?" },
    { type: "multiple_choice", instruction: "Most Brazilian way to enter an Uber?", question: "Choose", options: [
      { text: "Boa noite, tudo bem?", correct: true },
      { text: "Vai pra Copa", correct: false },
      { text: "Hello", correct: false },
    ], explanation: "Greet the driver — silent entry feels cold." },
    { type: "build_sentence", instruction: "Build You can stop at the corner", words: ["aqui", "esquina.", "Pode", "na", "parar"], correct: ["Pode", "parar", "aqui", "na", "esquina."], translation: "You can stop here at the corner." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Good evening, all good?", correct: ["Boa noite, tudo bem?", "boa noite, tudo bem?", "Boa noite tudo bem?"] },
  ],

  rwenDialogue: {
    intro: "You enter an Uber in São Paulo. Driver looks up.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Boa tarde, tudo bem?", native: "Good afternoon, all good?", correct: true, feedback: "Brazilian Uber greeting standard." },
        { target: "Endereço!", native: "(rude)", correct: false, feedback: "Greet first — Boa tarde, tudo bem?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Greet on entry, say tchau on exit." },
      ]},
      { speaker: "npc", target: "Tudo, e você? Vai pra Vila Madalena?", native: "All good, and you? Going to Vila Madalena?" },
      { speaker: "user", userChoices: [
        { target: "Sim, isso mesmo. Obrigado/a!", native: "Yes, that's right. Thanks!", correct: true, feedback: "Confirmed + thanked. Brazilian Uber etiquette." },
        { target: "Sim", native: "Yes (terse)", correct: false, feedback: "Add isso mesmo + obrigado/a." },
        { target: "Tchau", native: "Bye (too soon)", correct: false, feedback: "Confirm destination first." },
      ]},
      { speaker: "rwen", rwenLine: "Uber arc: greet, confirm, ride, exit warmly. Brazilian transit fluency: built.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Good afternoon, all good? (Portuguese)", correct: ["Boa tarde, tudo bem?", "boa tarde, tudo bem?", "Boa tarde tudo bem?"] },
      { prompt: "You can stop here (Portuguese)", correct: ["Pode parar aqui", "pode parar aqui"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run a full Brazilian Uber out loud: greet, confirm, end with Pode parar aqui, obrigado/a.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "São Paulo Uber from Pinheiros to Itaim Bibi. Greet, small-talk about traffic, ask Uber driver for a recommended restaurant, end with stop instruction.",
    rwenRole: "Uber driver — paulistano, ~50, talkative.",
    successCriteria: "User greets with Boa tarde + tudo bem?, engages on traffic with comparativos (mais lento que ontem), asks recommendation, says Pode parar aqui + obrigado/a.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
