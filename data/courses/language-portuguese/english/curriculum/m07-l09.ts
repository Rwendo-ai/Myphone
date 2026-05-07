import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l09-tem-fome",
  module: 7,
  lesson: 9,
  title: "Estou com fome — Hunger and thirst",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Brazil, you HAVE hunger and thirst. Estou com fome (I'm hungry, lit. I am with hunger). Estou com sede (thirsty). Não estou com fome (not hungry).",
    culturalNote: "The estar com construction is for many states: estar com calor (hot), com frio (cold), com sono (sleepy), com pressa (in a rush). Brazilians use it constantly — easier than ser/estar adjective forms.",
  },

  chunks: [
    { id: "estou_com_fome", target: "Estou com fome", native: "I'm hungry", literal: "I am with hunger", emoji: "😋", phonetic: "es-TOH kohng FOH-mee", audioRef: null },
    { id: "estou_com_sede", target: "Estou com sede", native: "I'm thirsty", literal: "I am with thirst", emoji: "💧", phonetic: "es-TOH kohng SEH-jee", audioRef: null },
    { id: "estou_cheio", target: "Estou cheio / cheia", native: "I'm full (m./f.)", literal: "I am full", emoji: "🤰", phonetic: "es-TOH SHAY-oo", audioRef: null },
  ],

  pattern: {
    name: "Estar com [state]",
    explanation: "Many Portuguese states use estar + com + noun. Com fome (hunger), com sede (thirst), com calor (heat), com frio (cold), com sono (sleep), com medo (fear).",
    examples: [
      { target: "Estou com fome.", native: "I'm hungry." },
      { target: "Estou com calor.", native: "I'm hot." },
      { target: "Não estou com sono.", native: "I'm not sleepy." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Estou com fome", right: "I'm hungry" },
      { left: "Estou com sede", right: "I'm thirsty" },
      { left: "Estou cheio", right: "I'm full" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am thirsty", correct: ["Estou com sede", "estou com sede"] },
    { type: "fill_blank", instruction: "Brazilian way to say I'm hot", sentence: "Estou ____ calor.", options: ["com", "de", "em"], correct: "com", context: "Brazilian: estar COM + state." },
    { type: "multiple_choice", instruction: "Which is right Portuguese?", question: "Choose", options: [
      { text: "Estou com sono.", correct: true },
      { text: "Sou sono.", correct: false },
      { text: "Tenho sono.", correct: false },
    ], explanation: "Estar com + noun is the Brazilian go-to for states." },
    { type: "build_sentence", instruction: "Build I'm full, but it was great", words: ["mas", "estava", "cheio,", "Tô", "ótimo!"], correct: ["Tô", "cheio,", "mas", "estava", "ótimo!"], translation: "I'm full, but it was great!" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm not hungry", correct: ["Não estou com fome", "não estou com fome", "Nao estou com fome"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks if you want a snack.",
    lines: [
      { speaker: "npc", target: "Quer um lanche?", native: "Want a snack?" },
      { speaker: "user", userChoices: [
        { target: "Estou com fome, sim! Pode trazer.", native: "I'm hungry, yes! Bring it.", correct: true, feedback: "Estar com fome — Brazilian-perfect." },
        { target: "Sou fome", native: "(English-style)", correct: false, feedback: "Brazilians are WITH hunger — estou com fome." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer — Estou com fome / Não estou com fome." },
      ]},
      { speaker: "npc", target: "Vou pegar pão de queijo!", native: "I'll grab pão de queijo!" },
      { speaker: "rwen", rwenLine: "Estar com — the Brazilian shortcut for states. Use it for hunger, heat, sleep, fear.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am hungry (Portuguese)", correct: ["Estou com fome", "estou com fome", "Tô com fome", "tô com fome"] },
      { prompt: "I am full (use form for YOUR gender)", correct: ["Estou cheio", "estou cheio", "Estou cheia", "estou cheia"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three estar com states: Estou com fome. Estou com sede. Estou com calor. Build the reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "After a beach day in Salvador, you're with friends going from kiosk to restaurant. Express hunger, thirst, fullness, sleepiness across the evening.",
    rwenRole: "Brazilian friends across an evening.",
    successCriteria: "User uses estar com + fome / sede / sono / calor (NOT ser fome). Switches to cheio/cheia after eating.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
