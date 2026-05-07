import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l03-onde-fica",
  module: 2,
  lesson: 3,
  title: "Onde fica? — Where is it?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lost in São Paulo? You need one phrase: Onde fica...? — Where is...? Pair it with any place name.",
    culturalNote: "Brazilians point with their lips and chin as much as their hands. They will explain with great warmth and detail — sometimes more detail than you needed. Smile and say obrigado/a.",
  },

  chunks: [
    { id: "onde_fica", target: "Onde fica?", native: "Where is it?", literal: "Where stays?", emoji: "📍", phonetic: "OHN-jee FEE-kah", audioRef: null },
    { id: "perto", target: "Perto", native: "Near / nearby", literal: "Near", emoji: "📏", phonetic: "PEHR-too", audioRef: null },
    { id: "longe", target: "Longe", native: "Far", literal: "Far", emoji: "🌐", phonetic: "LOHN-zhee", audioRef: null },
  ],

  pattern: {
    name: "Onde fica + place",
    explanation: "Stack onde fica with any place: Onde fica o banheiro? (where is the bathroom?), Onde fica a estação? (where is the station?). Reply: É perto / é longe.",
    examples: [
      { target: "Onde fica o banheiro?", native: "Where is the bathroom?" },
      { target: "Onde fica a estação?", native: "Where is the station?" },
      { target: "É perto.", native: "It is near." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Onde fica?", right: "Where is it?" },
      { left: "Perto", right: "Near" },
      { left: "Longe", right: "Far" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is it?", correct: ["Onde fica?", "onde fica?", "Onde fica", "onde fica"] },
    { type: "fill_blank", instruction: "Tell someone the bus stop is close", sentence: "É ____.", options: ["perto", "longe", "caro"], correct: "perto", context: "Near = perto." },
    { type: "multiple_choice", instruction: "You are looking for the Metrô. Best opener?", question: "Choose", options: [
      { text: "Com licença, onde fica o Metrô?", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Com licença + Onde fica + place = full Brazilian asker." },
    { type: "build_sentence", instruction: "Ask where the bathroom is", words: ["banheiro?", "Onde", "fica", "o"], correct: ["Onde", "fica", "o", "banheiro?"], translation: "Where is the bathroom?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "It is near", correct: ["É perto", "é perto", "E perto", "e perto"] },
  ],

  rwenDialogue: {
    intro: "You are walking on Avenida Paulista trying to find Estação Consolação.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Com licença, onde fica a estação Consolação?", native: "Excuse me, where is Consolação station?", correct: true, feedback: "Soft opener + clear question. Brazilians love this." },
        { target: "Estação?", native: "Station?", correct: false, feedback: "Frame it: Com licença, onde fica?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open with com licença, then onde fica?" },
      ]},
      { speaker: "npc", target: "É perto, dois quarteirões pra frente.", native: "It is near, two blocks ahead." },
      { speaker: "rwen", rwenLine: "You opened politely and asked clearly. Brazilians will help you with detail and warmth.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Where is it? (Portuguese)", correct: ["Onde fica?", "onde fica?", "Onde fica", "onde fica"] },
      { prompt: "It is far (Portuguese)", correct: ["É longe", "é longe", "E longe", "e longe"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, ask three locations: Onde fica o banheiro? Onde fica a estação? Onde fica o restaurante? Build the muscle memory.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Lost on Avenida Paulista, São Paulo. You need to find the Metrô station before rush hour ends. Ask a stranger.",
    rwenRole: "A paulistano commuter, ~40, in a hurry but helpful if you ask politely.",
    successCriteria: "User opens with Com licença, asks Onde fica a estação?, understands perto / longe in the reply, and closes with obrigado/a.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
