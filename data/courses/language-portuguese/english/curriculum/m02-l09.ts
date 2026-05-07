import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l09-socorro",
  module: 2,
  lesson: 9,
  title: "Socorro — Help / Emergencies",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hopefully you never need this. But if you do — Socorro! (Help!), Polícia (police), Ambulância (ambulance), Estou perdido/a (I am lost). Memorise them once.",
    culturalNote: "Brazilian emergency number is 190 (police) and 192 (ambulance). Tourist police exist in Rio (Delegacia do Turista). Brazilians help strangers fast — call out and someone will come.",
  },

  chunks: [
    { id: "socorro", target: "Socorro!", native: "Help!", literal: "Help!", emoji: "🚨", phonetic: "soh-KOH-hoo", audioRef: null },
    { id: "perdido", target: "Estou perdido / perdida", native: "I am lost (m./f.)", literal: "I-am lost", emoji: "🗺️", phonetic: "es-TOH per-JEE-doo", audioRef: null },
    { id: "policia", target: "Polícia", native: "Police", literal: "Police", emoji: "👮", phonetic: "po-LEE-see-ah", audioRef: null },
  ],

  pattern: {
    name: "Gendered self-description",
    explanation: "Adjectives ending in -o (m.) or -a (f.) agree with you. Perdido (man lost), perdida (woman lost). Same with cansado/a (tired), preocupado/a (worried).",
    examples: [
      { target: "Estou perdido. (m.)", native: "I am lost." },
      { target: "Estou perdida. (f.)", native: "I am lost." },
      { target: "Socorro!", native: "Help!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Socorro!", right: "Help!" },
      { left: "Estou perdido/a", right: "I am lost" },
      { left: "Polícia", right: "Police" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Help!", correct: ["Socorro!", "socorro!", "Socorro", "socorro"] },
    { type: "fill_blank", instruction: "Woman says I am lost", sentence: "Estou ____.", options: ["perdida", "perdido", "perto"], correct: "perdida", context: "Woman speaking — perdida." },
    { type: "multiple_choice", instruction: "Wallet stolen on the beach. Best first call?", question: "Choose", options: [
      { text: "Polícia! Socorro!", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Loud, clear: Polícia! Socorro! gets help fast." },
    { type: "build_sentence", instruction: "Build I am lost (man)", words: ["perdido.", "Estou"], correct: ["Estou", "perdido."], translation: "I am lost." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am lost (woman speaking)", correct: ["Estou perdida", "estou perdida"] },
  ],

  rwenDialogue: {
    intro: "Late at night in Lapa, Rio. You cannot find your way back to your hotel.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Com licença, estou perdido/a. Você pode ajudar?", native: "Excuse me, I am lost. Can you help?", correct: true, feedback: "Polite, gendered, asked for help — perfect." },
        { target: "Socorro!", native: "Help! (urgent)", correct: false, feedback: "Save Socorro! for real emergencies. For lost, ask politely." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open with com licença, estou perdido/a." },
      ]},
      { speaker: "npc", target: "Claro! Pra onde você vai?", native: "Of course! Where are you going?" },
      { speaker: "rwen", rwenLine: "Brazilians help strangers fast. You called for help politely and you got it.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Help! (Portuguese)", correct: ["Socorro!", "socorro!", "Socorro", "socorro"] },
      { prompt: "I am lost (use form for YOUR gender)", correct: ["Estou perdido", "estou perdido", "Estou perdida", "estou perdida"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise these three: Socorro, Polícia, Estou perdido/a. Hopefully unused — but ready if needed.",
    rwenSignoff: "Tchau, fica bem!",
  },

  phase8: {
    scenario: "Late at night in Lapa, Rio, your phone is dead and you cannot find your hotel. Stop a passerby politely and explain.",
    rwenRole: "Passer-by — carioca local, ~50, sympathetic, will help.",
    successCriteria: "User uses Com licença, then Estou perdido/a (gendered to user), asks for help politely, and does not panic-shout Socorro since this is not life-threatening.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
