import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l08-com-licenca",
  module: 1,
  lesson: 8,
  title: "Com licença — Excuse me",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians soften interactions with three small words: Com licença (excuse me), Por favor (please), Desculpa (sorry). These are the lubricant of Brazilian street life.",
    culturalNote: "On São Paulo's Metrô at rush hour, com licença gets you through a packed carriage. Bumping someone without saying desculpa is the small rude.",
  },

  chunks: [
    { id: "com_licenca", target: "Com licença", native: "Excuse me", literal: "With permission", emoji: "🙏", phonetic: "kohng lee-SEN-sah", audioRef: null },
    { id: "por_favor", target: "Por favor", native: "Please", literal: "By favor", emoji: "🤝", phonetic: "pohr fah-VOHR", audioRef: null },
    { id: "desculpa", target: "Desculpa", native: "Sorry", literal: "Forgive (informal)", emoji: "😔", phonetic: "des-COOL-pah", audioRef: null },
  ],

  pattern: {
    name: "The three softeners",
    explanation: "Com licença = passing through, getting attention. Por favor = adding to a request. Desculpa = bumped or made a mistake. Different jobs, all warmth.",
    examples: [
      { target: "Com licença, posso passar?", native: "Excuse me, may I pass?" },
      { target: "Um café, por favor.", native: "A coffee, please." },
      { target: "Desculpa, foi sem querer.", native: "Sorry, it was unintentional." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Com licença", right: "Excuse me (passing/getting attention)" },
      { left: "Por favor", right: "Please" },
      { left: "Desculpa", right: "Sorry" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Please", correct: ["Por favor", "por favor"] },
    { type: "fill_blank", instruction: "On a packed Metrô — you need to push through", sentence: "____, posso passar?", options: ["Com licença", "Tchau", "Sim"], correct: "Com licença", context: "Com licença is the polite way to ask to pass." },
    { type: "multiple_choice", instruction: "You step on someone's foot at a churrasco. Best word?", question: "Choose", options: [
      { text: "Desculpa", correct: true },
      { text: "Bom dia", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "For mistakes and bumps, desculpa." },
    { type: "build_sentence", instruction: "Order politely", words: ["favor.", "café,", "Um", "por"], correct: ["Um", "café,", "por", "favor."], translation: "A coffee, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Excuse me", correct: ["Com licença", "com licença", "Com licenca", "com licenca"] },
  ],

  rwenDialogue: {
    intro: "Rush hour on the Metrô in São Paulo. You need to get off at the next stop but a wall of people stands between you and the door.",
    lines: [
      { speaker: "rwen", rwenLine: "The doors are about to open. The crowd is solid. What do you say?" },
      { speaker: "user", userChoices: [
        { target: "Com licença, com licença!", native: "Excuse me, excuse me!", correct: true, feedback: "Brazilian Metrô survival skill: unlocked. The crowd parts." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tchau will not move the crowd — try com licença." },
        { target: "Por favor", native: "Please", correct: false, feedback: "Por favor is for requests — passing through is com licença." },
      ]},
      { speaker: "npc", target: "Pode passar!", native: "You can pass!" },
      { speaker: "rwen", rwenLine: "Three small words — com licença, por favor, desculpa — these will save you a hundred times in Brazil.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Excuse me (in Portuguese)", correct: ["Com licença", "com licença", "Com licenca", "com licenca"] },
      { prompt: "Please (in Portuguese)", correct: ["Por favor", "por favor"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use one of the three softeners today: com licença, por favor, or desculpa. Out loud, even alone. Build the reflex.",
    rwenSignoff: "Tchau, até logo!",
  },

  phase8: {
    scenario: "You are on a packed Metrô line in São Paulo at 8am. Your stop is next. You need to push through, accidentally bump someone, then ask a stranger if this is your stop.",
    rwenRole: "A São Paulo Metrô commuter — middle-aged paulistana, neutral but appreciates politeness in the daily chaos.",
    successCriteria: "User uses Com licença to pass through, Desculpa when bumping, and Por favor when asking the stop question — three different softeners for three different micro-moments.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
