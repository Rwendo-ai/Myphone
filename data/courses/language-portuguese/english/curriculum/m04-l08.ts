import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l08-conjugacao-ar",
  module: 4,
  lesson: 8,
  title: "-AR verbs — The biggest verb family",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Most Portuguese verbs end in -ar. Falar (speak), morar (live), trabalhar (work), gostar (like), tomar (drink). They all conjugate the same. Learn one, learn fifty.",
    culturalNote: "Brazilian Portuguese has simplified the você-form: you, he, she ALL use the same verb form. Eu falo, você fala, ele fala, ela fala. One ending for three subjects.",
  },

  chunks: [
    { id: "ar_eu", target: "Eu fal-O", native: "I speak (-o ending)", literal: "I speak", emoji: "🗣️", phonetic: "FAH-loo", audioRef: null },
    { id: "ar_voce", target: "Você fal-A", native: "You speak (-a ending)", literal: "You speak", emoji: "🫵", phonetic: "FAH-lah", audioRef: null },
    { id: "ar_nos", target: "Nós fal-AMOS", native: "We speak (-amos ending)", literal: "We speak", emoji: "👥", phonetic: "fah-LAH-moos", audioRef: null },
  ],

  pattern: {
    name: "Regular -ar conjugation",
    explanation: "Drop -ar, add: eu -o, você/ele/ela -a, nós -amos, eles/elas -am. Falo, fala, falamos, falam. Same pattern for tomar (tomo, toma, tomamos, tomam), morar, trabalhar.",
    examples: [
      { target: "Eu trabalho.", native: "I work." },
      { target: "Nós moramos.", native: "We live." },
      { target: "Eles tomam.", native: "They drink." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu falo", right: "I speak" },
      { left: "Você fala", right: "You speak" },
      { left: "Nós falamos", right: "We speak" },
    ]},
    { type: "fill_blank", instruction: "Conjugate trabalhar for nós", sentence: "Nós ____ aqui.", options: ["trabalhamos", "trabalho", "trabalha"], correct: "trabalhamos", context: "Nós + -amos = trabalhamos." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I work in Rio", correct: ["Trabalho no Rio", "trabalho no Rio", "Eu trabalho no Rio"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Você fala português.", correct: true },
      { text: "Você falo português.", correct: false },
      { text: "Você falamos português.", correct: false },
    ], explanation: "Você + -a = fala." },
    { type: "build_sentence", instruction: "Build We live in Brazil", words: ["Brasil.", "no", "Nós", "moramos"], correct: ["Nós", "moramos", "no", "Brasil."], translation: "We live in Brazil." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "They speak Portuguese", correct: ["Eles falam português", "eles falam português", "Elas falam português"] },
  ],

  rwenDialogue: {
    intro: "Group conversation at a Brazilian dinner. You introduce your couple.",
    lines: [
      { speaker: "npc", target: "Vocês moram aqui?", native: "Do you (pl.) live here?" },
      { speaker: "user", userChoices: [
        { target: "Nós moramos no Rio. Trabalhamos com tecnologia.", native: "We live in Rio. We work in tech.", correct: true, feedback: "Nós + -amos twice. Conjugation chain works." },
        { target: "Nós moro no Rio", native: "(wrong ending)", correct: false, feedback: "Nós + -amos = moramos." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with nós + -amos verbs." },
      ]},
      { speaker: "npc", target: "Que legal!", native: "How nice!" },
      { speaker: "rwen", rwenLine: "One -ar pattern unlocks dozens of verbs. The chain is set.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I work (Portuguese)", correct: ["Eu trabalho", "Trabalho", "trabalho", "eu trabalho"] },
      { prompt: "We live in Rio (Portuguese)", correct: ["Nós moramos no Rio", "moramos no Rio", "nós moramos no Rio"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Conjugate three -ar verbs across all forms: falar, morar, trabalhar. Eu, você, nós, eles. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "At a Brazilian family dinner where you introduce yourself, your partner, and where you both live and work. Use -ar verbs across eu / nós / vocês forms.",
    rwenRole: "Family dinner host — Brazilian matriarch, ~55.",
    successCriteria: "User conjugates -ar verbs correctly: eu falo, nós moramos, eles trabalham. No mismatched endings.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
