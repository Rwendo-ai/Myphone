import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l04-metro",
  module: 9,
  lesson: 4,
  title: "Metrô de São Paulo — The Subway",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "São Paulo's Metrô is the heartbeat of Brazil's biggest city. Linha azul, linha vermelha, linha verde — colour-coded lines. Rush hour: brace yourself.",
    culturalNote: "São Paulo Metrô is clean and fast — the standard for Brazil. At rush hour (7-9am, 5-7pm), trains pack to the doors. Get used to com licença in stereo.",
  },

  chunks: [
    { id: "metro_linha", target: "Linha + cor", native: "Line + colour", literal: "Linha azul / vermelha", emoji: "🚇", phonetic: "LEE-nyah ah-ZOOL", audioRef: null },
    { id: "estacao", target: "Estação", native: "Station", literal: "Station (f.)", emoji: "🚉", phonetic: "es-tah-SOWNG", audioRef: null },
    { id: "trocar", target: "Trocar de linha", native: "Change lines", literal: "Change of-line", emoji: "🔁", phonetic: "tro-KAR jee LEE-nyah", audioRef: null },
  ],

  pattern: {
    name: "Metro vocabulary chain",
    explanation: "Pego a linha azul, troco em Sé pra linha vermelha, desço em República. Pegar (take), trocar (change), descer (get off). Estações named after places: Sé, Paulista, Trianon.",
    examples: [
      { target: "Pego a linha verde.", native: "I take the green line." },
      { target: "Troco em Sé.", native: "I change at Sé." },
      { target: "Desço em Vila Madalena.", native: "I get off at Vila Madalena." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Linha azul", right: "Blue line" },
      { left: "Estação", right: "Station" },
      { left: "Trocar de linha", right: "Change lines" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I take the blue line", correct: ["Pego a linha azul", "Eu pego a linha azul", "pego a linha azul"] },
    { type: "fill_blank", instruction: "Get off at...", sentence: "____ em Sé.", options: ["Desço", "Pego", "Vou"], correct: "Desço", context: "Descer em + station = get off at." },
    { type: "multiple_choice", instruction: "Friend asks the route. Best Brazilian Metro reply?", question: "Choose", options: [
      { text: "Pega a azul, troca em Sé pra vermelha.", correct: true },
      { text: "Sou Sé.", correct: false },
      { text: "Vai pra Sé.", correct: false },
    ], explanation: "Pegar + trocar — the Brazilian Metro verbs." },
    { type: "build_sentence", instruction: "Build I get off at Trianon", words: ["em", "Trianon.", "Desço"], correct: ["Desço", "em", "Trianon."], translation: "I get off at Trianon." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Change at Sé to the red line", correct: ["Troca em Sé pra linha vermelha", "Troca em Sé para a linha vermelha", "Troca em Sé pra vermelha"] },
  ],

  rwenDialogue: {
    intro: "Lost in Paulista station, you ask a stranger.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Com licença, qual linha vai pra Vila Madalena?", native: "Excuse me, which line goes to Vila Madalena?", correct: true, feedback: "Polite + specific. Metrô survival opened." },
        { target: "Vila Madalena!", native: "(too curt)", correct: false, feedback: "Open with com licença." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask which line." },
      ]},
      { speaker: "npc", target: "Pega a verde, desce em Vila Madalena.", native: "Take the green, get off at Vila Madalena." },
      { speaker: "user", userChoices: [
        { target: "Verde, descer em Vila Madalena. Obrigado/a!", native: "Green, get off at Vila Madalena. Thanks!", correct: true, feedback: "Confirmed + thanked. Brazilian directions: absorbed." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Confirm by repeating back." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Repeat back, then thank them." },
      ]},
      { speaker: "rwen", rwenLine: "Pego, troco, desço — three Metrô verbs. São Paulo subway: parsed.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I take the green line (Portuguese)", correct: ["Pego a linha verde", "Eu pego a linha verde", "pego a linha verde"] },
      { prompt: "Change at Sé (Portuguese)", correct: ["Troca em Sé", "troca em Sé", "Troco em Sé"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine three SP Metrô trips. Build sentences: Pego a [colour]. Troco em [station]. Desço em [station].",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First time on São Paulo Metrô. Ask three different paulistanos for help finding Vila Madalena from Paulista station.",
    rwenRole: "Three paulistano commuters across the journey.",
    successCriteria: "User uses pegar/trocar/descer with line colours and station names, opens with com licença, thanks each helper.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
