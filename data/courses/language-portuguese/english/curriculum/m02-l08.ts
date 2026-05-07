import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l08-com-licenca-passar",
  module: 2,
  lesson: 8,
  title: "Aqui & Ali — Here and there",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians point a lot. Aqui (here), ali (right there), lá (over there). These tiny words make directions and shopping easy.",
    culturalNote: "Brazilians use lip-pointing too — a quick chin lift to indicate ali. It is not rude; it is fluid. Pair the gesture with the word and you blend in.",
  },

  chunks: [
    { id: "aqui", target: "Aqui", native: "Here", literal: "Here", emoji: "📍", phonetic: "ah-KEE", audioRef: null },
    { id: "ali", target: "Ali", native: "There (right there, visible)", literal: "There", emoji: "👉", phonetic: "ah-LEE", audioRef: null },
    { id: "la", target: "Lá", native: "Over there (far)", literal: "There-far", emoji: "🌐", phonetic: "LAH", audioRef: null },
  ],

  pattern: {
    name: "Three distance markers",
    explanation: "Aqui = where I am. Ali = right there, you can see it. Lá = over there, far. Pick the one that fits the distance.",
    examples: [
      { target: "Está aqui.", native: "It is here." },
      { target: "Está ali.", native: "It is right there." },
      { target: "Está lá.", native: "It is over there." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Aqui", right: "Here" },
      { left: "Ali", right: "Right there" },
      { left: "Lá", right: "Over there (far)" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "It is here", correct: ["Está aqui", "está aqui", "Esta aqui", "esta aqui"] },
    { type: "fill_blank", instruction: "Point to a far building", sentence: "O hotel é ____.", options: ["lá", "aqui", "ali"], correct: "lá", context: "Far = lá." },
    { type: "multiple_choice", instruction: "Vendor says: Está ali. What does it mean?", question: "Choose", options: [
      { text: "It's right there", correct: true },
      { text: "It's far", correct: false },
      { text: "It's mine", correct: false },
    ], explanation: "Ali = visible, right there." },
    { type: "build_sentence", instruction: "Build It is over there", words: ["lá.", "Está"], correct: ["Está", "lá."], translation: "It is over there." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Here", correct: ["Aqui", "aqui"] },
  ],

  rwenDialogue: {
    intro: "You ask the porteiro where the elevator is.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Onde fica o elevador?", native: "Where is the elevator?", correct: true, feedback: "Polite ask." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask onde fica first." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Open with the question." },
      ]},
      { speaker: "npc", target: "Está ali, no canto.", native: "It's right there, in the corner." },
      { speaker: "rwen", rwenLine: "Ali = visible. He pointed and named the distance. Brazilian directions in two words.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Here (Portuguese)", correct: ["Aqui", "aqui"] },
      { prompt: "Over there (far)", correct: ["Lá", "lá", "La", "la"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around your room. Out loud: este aqui, esse ali, aquele lá. Map distance to word.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First day in your São Paulo Airbnb. Ask the host where things are: keys, kitchen, the laundry. Use the right distance markers.",
    rwenRole: "Anfitriã — Airbnb host, ~40, paulistana, helpful.",
    successCriteria: "User asks Onde fica?, parses aqui / ali / lá in replies, and uses Está aqui / ali correctly when describing a location back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
