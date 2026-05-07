import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l06-mais-velho",
  module: 5,
  lesson: 6,
  title: "Mais velho / Mais novo — Older / younger",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians compare ages constantly: Meu irmão mais velho. Minha prima mais nova. Today, the comparative — older, younger, bigger, smaller.",
    culturalNote: "Birth order matters in Brazilian families — the irmão mais velho often takes responsibility, mais novo often gets babied. Calling someone mais velho is a marker of respect more than age.",
  },

  chunks: [
    { id: "mais_velho", target: "Mais velho / mais velha", native: "Older (m./f.)", literal: "More old", emoji: "👴", phonetic: "mais VEH-lyoo", audioRef: null },
    { id: "mais_novo", target: "Mais novo / mais nova", native: "Younger (m./f.)", literal: "More new", emoji: "🧒", phonetic: "mais NOH-voo", audioRef: null },
    { id: "do_que", target: "Mais ___ do que", native: "More ___ than", literal: "More ___ of-the than", emoji: "⚖️", phonetic: "mais ___ doo keh", audioRef: null },
  ],

  pattern: {
    name: "Comparatives",
    explanation: "Mais [adj] do que [thing]. Maior do que (bigger than), menor do que (smaller). Most adjectives just take mais. Some are irregular: bom → melhor (better), ruim → pior (worse).",
    examples: [
      { target: "Sou mais velho do que ele.", native: "I'm older than him." },
      { target: "Minha casa é maior do que a sua.", native: "My house is bigger than yours." },
      { target: "Aqui é melhor do que lá.", native: "Here is better than there." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Mais velho", right: "Older" },
      { left: "Mais novo", right: "Younger" },
      { left: "Maior do que", right: "Bigger than" },
    ]},
    { type: "fill_blank", instruction: "Comparing two siblings", sentence: "Sou mais velho ____ ele.", options: ["do que", "para", "com"], correct: "do que", context: "Older than = mais velho do que." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "She is younger than me", correct: ["Ela é mais nova do que eu", "Ela é mais nova que eu", "ela é mais nova do que eu"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "São Paulo é maior do que Rio.", correct: true },
      { text: "São Paulo é mais grande do que Rio.", correct: false },
      { text: "São Paulo é mais maior do que Rio.", correct: false },
    ], explanation: "Maior is irregular — already comparative. Don't add mais." },
    { type: "build_sentence", instruction: "Build My brother is older than me", words: ["mais", "do", "Meu", "que", "irmão", "eu.", "é", "velho"], correct: ["Meu", "irmão", "é", "mais", "velho", "do", "que", "eu."], translation: "My brother is older than me." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Here is better than there", correct: ["Aqui é melhor do que lá", "aqui é melhor do que lá", "Aqui e melhor do que la"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend's mother asks about your siblings.",
    lines: [
      { speaker: "npc", target: "Você tem irmãos mais velhos?", native: "Do you have older siblings?" },
      { speaker: "user", userChoices: [
        { target: "Tenho uma irmã mais nova e um irmão mais velho.", native: "I have a younger sister and an older brother.", correct: true, feedback: "Both comparatives, both gendered. Birth order in Portuguese: locked." },
        { target: "Mais grande", native: "(wrong)", correct: false, feedback: "It is mais velho/nova for age, NOT mais grande." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Use mais velho / mais novo." },
      ]},
      { speaker: "npc", target: "Que bom! Quantos anos eles têm?", native: "How nice! How old are they?" },
      { speaker: "rwen", rwenLine: "Comparing in Portuguese — mais ___ do que. The grammatical scaffolding for nuance.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My older brother (Portuguese)", correct: ["Meu irmão mais velho", "meu irmão mais velho"] },
      { prompt: "Bigger than (Portuguese)", correct: ["Maior do que", "maior do que", "Maior que", "maior que"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Compare three pairs out loud: my brother and me (older/younger), Brazil and your country (bigger), today and yesterday (better/worse).",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian family asks about your siblings, ages, and how your country compares. Use comparatives across age, size, weather.",
    rwenRole: "Curious tia, ~50, asks lots of follow-up questions.",
    successCriteria: "User uses mais velho/nova for age, maior/menor (NOT mais grande/pequeno), melhor/pior (NOT mais bom/ruim), and structures with do que.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
