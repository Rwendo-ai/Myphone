import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l09-tempo-clima",
  module: 9,
  lesson: 9,
  title: "Tempo & Clima — Weather talk",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian weather small talk: Faz calor (it's hot), Tá chovendo (it's raining), Que sol! (what sun!). Easy openers everywhere.",
    culturalNote: "Brazilian heat is real — 35-40°C summers in Rio. Brazilians complain about calor and frio constantly. Saudades do verão / saudades do friozinho — affectionate seasonal nostalgia.",
  },

  chunks: [
    { id: "faz_calor_frio", target: "Faz calor / frio", native: "It's hot / cold", literal: "Makes heat/cold", emoji: "🌡️", phonetic: "fahs kah-LOR / FREE-oo", audioRef: null },
    { id: "ta_chovendo", target: "Tá chovendo", native: "It's raining", literal: "Is raining", emoji: "🌧️", phonetic: "tah sho-VEN-doo", audioRef: null },
    { id: "que_sol", target: "Que sol!", native: "What sun!", literal: "What sun!", emoji: "☀️", phonetic: "kee SOHL", audioRef: null },
  ],

  pattern: {
    name: "Weather expressions",
    explanation: "Faz + temperature noun (calor, frio, sol). Tá + verb-ing (chovendo, ventando). Que + noun! exclamation. All everyday Brazilian.",
    examples: [
      { target: "Faz muito calor hoje.", native: "It's very hot today." },
      { target: "Tá chovendo lá fora.", native: "It's raining out there." },
      { target: "Que sol forte!", native: "What strong sun!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Faz calor", right: "It's hot" },
      { left: "Tá chovendo", right: "It's raining" },
      { left: "Que sol!", right: "What sun!" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "It's very hot today", correct: ["Faz muito calor hoje", "faz muito calor hoje"] },
    { type: "fill_blank", instruction: "Raining now", sentence: "Tá ____ lá fora.", options: ["chovendo", "fazendo", "sol"], correct: "chovendo", context: "Raining = chovendo." },
    { type: "multiple_choice", instruction: "Brazilian small-talk weather opener?", question: "Choose", options: [
      { text: "Que calor hoje, né?", correct: true },
      { text: "Sou frio.", correct: false },
      { text: "Estou sol.", correct: false },
    ], explanation: "Que + weather + né? = perfect Brazilian opener." },
    { type: "build_sentence", instruction: "Build It's cold today", words: ["frio", "Faz", "hoje."], correct: ["Faz", "frio", "hoje."], translation: "It's cold today." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What strong sun!", correct: ["Que sol forte!", "que sol forte!", "Que sol forte"] },
  ],

  rwenDialogue: {
    intro: "Stranger in an elevator. Awkward silence forming.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Que calor hoje, né?", native: "Hot today, isn't it?", correct: true, feedback: "Brazilian icebreaker — small-talk weather opener." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Break the silence with weather small talk." },
        { target: "Sim", native: "Yes (without prompt)", correct: false, feedback: "Open with Que calor!" },
      ]},
      { speaker: "npc", target: "Demais! E olha que ainda nem é meio-dia!", native: "Too much! And it's not even noon yet!" },
      { speaker: "rwen", rwenLine: "Brazilian elevator small talk — weather is the universal opener.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "It's hot today (Portuguese)", correct: ["Faz calor hoje", "faz calor hoje"] },
      { prompt: "It's raining (Portuguese)", correct: ["Tá chovendo", "tá chovendo", "Está chovendo", "está chovendo"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Open three small-talks today with Brazilian weather: Que calor! Que frio! Tá chovendo, né? Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Stuck in a São Paulo elevator with two neighbours. Open weather small talk, sustain it across two floor stops.",
    rwenRole: "Two neighbours, ~45 and ~70.",
    successCriteria: "User uses Faz calor / Tá chovendo / Que sol!, agrees with né?, asks about how summer/winter compares between Brazil and home.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
