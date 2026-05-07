import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l03-padrinhos",
  module: 5,
  lesson: 3,
  title: "Padrinho / Madrinha — Godparents",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian families have a layer most cultures lack: padrinhos. Godparents — chosen at baptism, treated like parents for life. Often closer than blood relatives.",
    culturalNote: "Padrinhos are a serious role. They give birthday gifts forever, attend graduations, sometimes pay for weddings. Saying minha madrinha to a Brazilian carries the same weight as minha tia — sometimes more.",
  },

  chunks: [
    { id: "padrinho", target: "Padrinho", native: "Godfather", literal: "Padrinho", emoji: "👨‍🦳", phonetic: "pah-DREE-nyoo", audioRef: null },
    { id: "madrinha", target: "Madrinha", native: "Godmother", literal: "Madrinha", emoji: "👵", phonetic: "mah-DREE-nyah", audioRef: null },
    { id: "afilhado", target: "Afilhado / Afilhada", native: "Godchild (m./f.)", literal: "Godson / Goddaughter", emoji: "🧒", phonetic: "ah-fee-LYAH-doo", audioRef: null },
  ],

  pattern: {
    name: "Chosen family",
    explanation: "Padrinho/madrinha are chosen at baptism. The relationship is formal AND warm. Brazilians speak of padrinhos with affection — they are a kind of bonus parent. The reverse: afilhado/afilhada (godchild).",
    examples: [
      { target: "Meu padrinho mora no Rio.", native: "My godfather lives in Rio." },
      { target: "Sou afilhada da Beatriz.", native: "I am Beatriz's goddaughter." },
      { target: "Vou ver minha madrinha.", native: "I'm going to see my godmother." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Padrinho", right: "Godfather" },
      { left: "Madrinha", right: "Godmother" },
      { left: "Afilhado", right: "Godchild (m.)" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "My godmother", correct: ["Minha madrinha", "minha madrinha"] },
    { type: "fill_blank", instruction: "I am João's godson", sentence: "Sou ____ do João.", options: ["afilhado", "afilhada", "padrinho"], correct: "afilhado", context: "Speaker man — afilhado." },
    { type: "multiple_choice", instruction: "What does padrinho mean?", question: "Choose", options: [
      { text: "Godfather (chosen at baptism)", correct: true },
      { text: "Father in law", correct: false },
      { text: "Stepfather", correct: false },
    ], explanation: "Padrinho = godfather, chosen at baptism." },
    { type: "build_sentence", instruction: "Build My godmother is Brazilian", words: ["é", "Minha", "brasileira.", "madrinha"], correct: ["Minha", "madrinha", "é", "brasileira."], translation: "My godmother is Brazilian." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am her goddaughter", correct: ["Sou afilhada dela", "sou afilhada dela", "Eu sou afilhada dela"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend explains who is who at a family lunch.",
    lines: [
      { speaker: "npc", target: "Aquela é minha madrinha. Ela mora no Recife.", native: "That's my godmother. She lives in Recife." },
      { speaker: "user", userChoices: [
        { target: "Que legal! Você vê ela com frequência?", native: "How nice! Do you see her often?", correct: true, feedback: "Curious follow-up, Brazilian-style." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask a follow-up about the madrinha." },
        { target: "Não", native: "No", correct: false, feedback: "Engage with a follow-up question." },
      ]},
      { speaker: "npc", target: "Sempre que dá! Ela é como uma segunda mãe.", native: "Whenever I can! She's like a second mother." },
      { speaker: "rwen", rwenLine: "Padrinhos are not in every culture — Brazil holds them tight. You just learned a Brazilian heart-word.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My godfather (Portuguese)", correct: ["Meu padrinho", "meu padrinho"] },
      { prompt: "My godmother (Portuguese)", correct: ["Minha madrinha", "minha madrinha"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine your Brazilian friend introducing their padrinho. Out loud: Esse é o padrinho do João. Minha madrinha mora em Recife.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "At a Brazilian baptism (batizado) of a friend's baby. You meet the new padrinho and madrinha. Greet them, ask the role.",
    rwenRole: "Padrinho — ~40, paulistano, proud of his new role.",
    successCriteria: "User uses padrinho/madrinha correctly, asks Há quanto tempo conhece a família?, and treats the role with warmth (não bare).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
