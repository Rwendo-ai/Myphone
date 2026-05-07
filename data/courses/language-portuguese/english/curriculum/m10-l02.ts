import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l02-saudade",
  module: 10,
  lesson: 2,
  title: "Saudade — The untranslatable Brazilian feeling",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Saudade. The most Brazilian word. A bittersweet missing — of a person, place, time. Tenho saudade do Rio. Tenho saudade da minha mãe. No clean English word.",
    culturalNote: "Saudade is so deeply Brazilian that it has its own day (30 January). Bossa nova songs are full of it. Brazilians say tô morrendo de saudade — I'm dying of saudade — and mean it.",
  },

  chunks: [
    { id: "saudade", target: "Saudade", native: "Bittersweet missing", literal: "Saudade (no English word)", emoji: "💛", phonetic: "sow-DAH-jee", audioRef: null },
    { id: "tenho_saudade", target: "Tenho saudade de", native: "I miss (lit. I have saudade of)", literal: "I have saudade of", emoji: "💔", phonetic: "TEH-nyoo sow-DAH-jee jee", audioRef: null },
    { id: "que_saudade", target: "Que saudade!", native: "Oh, how I miss it!", literal: "What saudade!", emoji: "🥹", phonetic: "kee sow-DAH-jee", audioRef: null },
  ],

  pattern: {
    name: "Saudade construction",
    explanation: "Tenho saudade de + thing/person. The de contracts: Tenho saudade do Rio (de+o), da minha mãe (de+a). Estou com saudade is also fine. Que saudade! is a standalone exclamation.",
    examples: [
      { target: "Tenho saudade do Brasil.", native: "I miss Brazil." },
      { target: "Que saudade da minha avó!", native: "How I miss my grandmother!" },
      { target: "Estou com saudade de casa.", native: "I'm missing home." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Saudade", right: "Bittersweet missing" },
      { left: "Tenho saudade de", right: "I miss" },
      { left: "Que saudade!", right: "How I miss it!" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I miss Brazil", correct: ["Tenho saudade do Brasil", "Tô com saudade do Brasil", "Estou com saudade do Brasil"] },
    { type: "fill_blank", instruction: "Contract de + a mãe", sentence: "Tenho saudade ____ minha mãe.", options: ["da", "do", "de"], correct: "da", context: "de + a = da." },
    { type: "multiple_choice", instruction: "What does saudade mean?", question: "Choose", options: [
      { text: "Bittersweet missing of someone or something", correct: true },
      { text: "Anger", correct: false },
      { text: "Hunger", correct: false },
    ], explanation: "Saudade is the iconic Brazilian feeling — bittersweet longing." },
    { type: "build_sentence", instruction: "Build I miss the beach", words: ["da", "saudade", "praia.", "Tenho"], correct: ["Tenho", "saudade", "da", "praia."], translation: "I miss the beach." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I miss my friends", correct: ["Tenho saudade dos meus amigos", "Estou com saudade dos meus amigos", "Tô com saudade dos meus amigos"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks if you miss home.",
    lines: [
      { speaker: "npc", target: "Sente saudade do seu país?", native: "Do you miss your country?" },
      { speaker: "user", userChoices: [
        { target: "Tenho saudade da família, mas o Brasil já é meio lar.", native: "I miss my family, but Brazil is half-home now.", correct: true, feedback: "Saudade with mas — bittersweet, layered. Brazilian-fluent emotion." },
        { target: "Sou saudade", native: "(wrong)", correct: false, feedback: "Use tenho saudade de or estou com saudade de." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer about saudade." },
      ]},
      { speaker: "npc", target: "Que bonito. O Brasil te abraçou.", native: "How beautiful. Brazil hugged you." },
      { speaker: "rwen", rwenLine: "Saudade — you carry the most Brazilian feeling now. The word that does not translate.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I miss Brazil (Portuguese)", correct: ["Tenho saudade do Brasil", "Estou com saudade do Brasil", "Tô com saudade do Brasil"] },
      { prompt: "Saudade (just the word, in Portuguese)", correct: ["Saudade", "saudade"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three saudades: Tenho saudade de [person]. Tenho saudade do [place]. Tenho saudade dos [things]. Feel each.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Late-night call with a Brazilian friend who is far away. They ask what you miss. Open up using saudade across people, places, foods.",
    rwenRole: "Friend, ~30, also missing things back home.",
    successCriteria: "User uses Tenho saudade de + contracted article (do/da/dos/das), softens with Mas, expresses 2+ specific saudades from different categories (person, place, food).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
