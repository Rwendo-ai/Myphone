import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l06-falo-portugues",
  module: 3,
  lesson: 6,
  title: "Falo português — I speak Portuguese",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today you announce what you can do. Falo português. Falo inglês. Falo um pouco de espanhol. The verb falar — to speak.",
    culturalNote: "Brazilians often speak some English in tourist zones, less elsewhere. Spanish is mutually-mostly-understandable but mocked when spoken instead of Portuguese (portunhol). Saying Falo um pouco de português earns warmth always.",
  },

  chunks: [
    { id: "eu_falo", target: "Eu falo", native: "I speak", literal: "I speak", emoji: "🗣️", phonetic: "EH-oo FAH-loo", audioRef: null },
    { id: "voce_fala", target: "Você fala", native: "You speak", literal: "You speak", emoji: "🫵", phonetic: "voh-SAY FAH-lah", audioRef: null },
    { id: "ele_fala", target: "Ele / Ela fala", native: "He / She speaks", literal: "He/She speaks", emoji: "👥", phonetic: "EH-lee FAH-lah", audioRef: null },
  ],

  pattern: {
    name: "Falar — to speak (regular -ar verb)",
    explanation: "Falar is regular: eu falo, você fala, ele/ela fala, nós falamos, eles/elas falam. The pattern repeats for every -ar verb (trabalhar, morar, gostar...).",
    examples: [
      { target: "Eu falo inglês.", native: "I speak English." },
      { target: "Você fala português?", native: "Do you speak Portuguese?" },
      { target: "Eles falam espanhol.", native: "They speak Spanish." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu falo", right: "I speak" },
      { left: "Você fala", right: "You speak" },
      { left: "Ela fala", right: "She speaks" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I speak Portuguese a little", correct: ["Eu falo um pouco de português", "Falo um pouco de português", "falo um pouco de português"] },
    { type: "fill_blank", instruction: "Conjugate falar for você", sentence: "Você ____ inglês?", options: ["fala", "falo", "falam"], correct: "fala", context: "Você fala (you speak)." },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Eu falo português.", correct: true },
      { text: "Eu falas português.", correct: false },
      { text: "Eu fala português.", correct: false },
    ], explanation: "Eu + -o ending: eu falo." },
    { type: "build_sentence", instruction: "Build She speaks Spanish", words: ["espanhol.", "Ela", "fala"], correct: ["Ela", "fala", "espanhol."], translation: "She speaks Spanish." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Do you speak Portuguese?", correct: ["Você fala português?", "você fala português?", "Voce fala portugues?"] },
  ],

  rwenDialogue: {
    intro: "At a Brazilian dinner. Someone asks about your languages.",
    lines: [
      { speaker: "npc", target: "Você fala outras línguas?", native: "Do you speak other languages?" },
      { speaker: "user", userChoices: [
        { target: "Falo inglês e um pouco de português. E você?", native: "I speak English and a little Portuguese. And you?", correct: true, feedback: "Two falo, humble, bounced back. Brazilian." },
        { target: "Eu sou inglês", native: "I am English (different question)", correct: false, feedback: "She asked what you SPEAK, not are — use falo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with falo + language." },
      ]},
      { speaker: "npc", target: "Falo português, espanhol, e estou aprendendo francês.", native: "I speak Portuguese, Spanish, and I'm learning French." },
      { speaker: "rwen", rwenLine: "Falar conjugates with the speaker. Eu falo. Você fala. Ela fala. Pattern locked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I speak Portuguese (Portuguese)", correct: ["Eu falo português", "Falo português", "eu falo português", "falo português"] },
      { prompt: "Do you speak English? (Portuguese)", correct: ["Você fala inglês?", "você fala inglês?", "Voce fala ingles?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Eu falo [your languages]. Estou aprendendo português. Three sentences.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "At a São Paulo dinner party with mixed Brazilians and expats. They ask about your languages and learning journey.",
    rwenRole: "Dinner host — paulistana, ~40, multilingual.",
    successCriteria: "User conjugates falo for self and fala for asking, uses Estou aprendendo português, and avoids confusing falar with ser.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
