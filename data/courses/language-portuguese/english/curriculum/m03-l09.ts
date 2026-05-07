import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l09-meu-minha",
  module: 3,
  lesson: 9,
  title: "Meu / Minha — My (gendered)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Even the word my has a gender in Portuguese. Meu carro (my car, m.), minha casa (my house, f.). My matches the thing owned, not the owner.",
    culturalNote: "Brazilians casually say meu amigo / minha amiga (my friend, m./f.). When in doubt about a noun's gender, listen for the article (o or a) — that tells you which my to use.",
  },

  chunks: [
    { id: "meu", target: "Meu (m.)", native: "My (with masculine noun)", literal: "My (m.)", emoji: "👨", phonetic: "MEH-oo", audioRef: null },
    { id: "minha", target: "Minha (f.)", native: "My (with feminine noun)", literal: "My (f.)", emoji: "👩", phonetic: "MEE-nyah", audioRef: null },
    { id: "seu_sua", target: "Seu / Sua", native: "Your (m./f.)", literal: "Your", emoji: "🫵", phonetic: "SEH-oo / SOO-ah", audioRef: null },
  ],

  pattern: {
    name: "Possessives match the thing, not the owner",
    explanation: "Meu/seu = with masculine nouns. Minha/sua = with feminine. Meu carro (my car), minha casa (my house). Even if a man speaks, casa stays feminine — minha casa.",
    examples: [
      { target: "Meu nome é...", native: "My name is..." },
      { target: "Minha mãe é brasileira.", native: "My mother is Brazilian." },
      { target: "Seu cachorro é bonito.", native: "Your dog is cute." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Meu", right: "My (m. noun)" },
      { left: "Minha", right: "My (f. noun)" },
      { left: "Seu / Sua", right: "Your" },
    ]},
    { type: "fill_blank", instruction: "Casa is feminine", sentence: "____ casa é grande.", options: ["Minha", "Meu", "Meus"], correct: "Minha", context: "Casa (f.) — minha casa." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My name", correct: ["Meu nome", "meu nome"] },
    { type: "multiple_choice", instruction: "Pick the right pairing", question: "Choose", options: [
      { text: "Minha mãe", correct: true },
      { text: "Meu mãe", correct: false },
      { text: "Sua mãe meu", correct: false },
    ], explanation: "Mãe is feminine — minha mãe." },
    { type: "build_sentence", instruction: "Build my house is big", words: ["grande.", "Minha", "é", "casa"], correct: ["Minha", "casa", "é", "grande."], translation: "My house is big." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My car (carro is m.)", correct: ["Meu carro", "meu carro"] },
  ],

  rwenDialogue: {
    intro: "Brazilian colleague is curious about your family.",
    lines: [
      { speaker: "npc", target: "Sua família mora aqui?", native: "Does your family live here?" },
      { speaker: "user", userChoices: [
        { target: "Não, minha mãe e meu pai moram em Londres.", native: "No, my mother and my father live in London.", correct: true, feedback: "Minha mãe (f.), meu pai (m.). Possessives matched." },
        { target: "Meu mãe", native: "(wrong gender)", correct: false, feedback: "Mãe is feminine — minha mãe." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer about your family — minha mãe / meu pai." },
      ]},
      { speaker: "npc", target: "Que legal!", native: "How nice!" },
      { speaker: "rwen", rwenLine: "Possessives agree with what you OWN, not who you ARE. Minha casa, meu carro. Locked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My name (Portuguese)", correct: ["Meu nome", "meu nome"] },
      { prompt: "My mother (Portuguese)", correct: ["Minha mãe", "minha mãe", "Minha mae", "minha mae"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at three things in your room. Out loud: meu [thing] or minha [thing]? Match the gender.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian neighbour is friendly and asks about your family and home. Give answers using meu/minha correctly.",
    rwenRole: "Dona Cláudia — neighbour, ~50, paulistana.",
    successCriteria: "User pairs meu with masculine nouns (pai, irmão, carro) and minha with feminine (mãe, irmã, casa) — never the reverse.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
