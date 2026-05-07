import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l04-medo-raiva",
  module: 10,
  lesson: 4,
  title: "Medo, Raiva, Vergonha — Heavier feelings",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Heavier emotions: medo (fear), raiva (anger), vergonha (shame). Brazilians use the estar com + noun pattern: estou com medo, estou com raiva.",
    culturalNote: "Brazilians admit emotions readily — even tough ones. Tô com raiva today is normal small talk among friends. Stuffing it down is the unhealthy move; sharing is normal.",
  },

  chunks: [
    { id: "medo", target: "Estou com medo", native: "I'm afraid", literal: "I am with fear", emoji: "😨", phonetic: "es-TOH kohng MEH-doo", audioRef: null },
    { id: "raiva", target: "Estou com raiva", native: "I'm angry", literal: "I am with anger", emoji: "😠", phonetic: "es-TOH kohng HIGH-vah", audioRef: null },
    { id: "vergonha", target: "Estou com vergonha", native: "I'm embarrassed / ashamed", literal: "I am with shame", emoji: "😳", phonetic: "es-TOH kohng vehr-GOH-nyah", audioRef: null },
  ],

  pattern: {
    name: "Estar com + heavy emotion",
    explanation: "Brazilian shortcut for many states. Estar com medo, raiva, vergonha, ciúme (jealous), pena (pity). Same pattern as estar com fome / sede from Module 7.",
    examples: [
      { target: "Estou com medo do escuro.", native: "I'm afraid of the dark." },
      { target: "Tô com raiva dele.", native: "I'm angry at him." },
      { target: "Estou com vergonha.", native: "I'm embarrassed." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Medo", right: "Fear" },
      { left: "Raiva", right: "Anger" },
      { left: "Vergonha", right: "Shame" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm afraid", correct: ["Estou com medo", "Tô com medo", "estou com medo"] },
    { type: "fill_blank", instruction: "Pick the right structure", sentence: "Estou ____ raiva.", options: ["com", "de", "em"], correct: "com", context: "Estar COM + emotion." },
    { type: "multiple_choice", instruction: "I'm embarrassed — best Portuguese?", question: "Choose", options: [
      { text: "Estou com vergonha", correct: true },
      { text: "Sou vergonha", correct: false },
      { text: "Estou vergonha", correct: false },
    ], explanation: "Estar com + noun for emotional state." },
    { type: "build_sentence", instruction: "Build I'm angry at him", words: ["dele.", "Estou", "raiva", "com"], correct: ["Estou", "com", "raiva", "dele."], translation: "I'm angry at him." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm afraid of flying", correct: ["Estou com medo de voar", "Tô com medo de voar", "estou com medo de voar"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks why you've been quiet.",
    lines: [
      { speaker: "npc", target: "Você tá quieto/a hoje. Tá tudo bem?", native: "You're quiet today. All good?" },
      { speaker: "user", userChoices: [
        { target: "Tô com um pouco de raiva, mas vou ficar bem.", native: "I'm a bit angry, but I'll be OK.", correct: true, feedback: "Honest feeling + reassurance. Brazilian friendship works through openness." },
        { target: "Sim", native: "(closed)", correct: false, feedback: "Open up — Brazilian friendship runs through honesty." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Share an emotion." },
      ]},
      { speaker: "npc", target: "Quer falar sobre?", native: "Want to talk about it?" },
      { speaker: "rwen", rwenLine: "Estar com + heavy emotion. Brazilian friendship language: deepened.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I'm afraid (Portuguese)", correct: ["Estou com medo", "Tô com medo", "estou com medo"] },
      { prompt: "I'm angry (Portuguese)", correct: ["Estou com raiva", "Tô com raiva", "estou com raiva"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three estar com sentences for harder feelings: Estou com medo. Estou com raiva. Estou com vergonha.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Honest conversation with a Brazilian friend at a quiet bar. Share something you've been holding — fear, anger, embarrassment.",
    rwenRole: "Close Brazilian friend, ~30, supportive listener.",
    successCriteria: "User uses estar com + emotion noun, follows up with mas + reassurance, accepts conversation about it without deflecting.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
