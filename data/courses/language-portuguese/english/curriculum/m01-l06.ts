import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l06-meu-nome",
  module: 1,
  lesson: 6,
  title: "Meu nome é — My name is",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to plant your flag. Meu nome é... — my name is. Two ways exist: the formal Meu nome é, and the casual Eu sou. Brazilians use both.",
    culturalNote: "Brazilians often use just first names — even with bosses. Hierarchy stays in tone, not titles. Calling someone seu Carlos (Mr Carlos) shows respect to elders or shopkeepers.",
  },

  chunks: [
    { id: "meu_nome", target: "Meu nome é", native: "My name is", literal: "My name is", emoji: "🏷️", phonetic: "MEH-oo NOH-mee EH", audioRef: null },
    { id: "eu_sou", target: "Eu sou", native: "I am", literal: "I am", emoji: "👤", phonetic: "EH-oo SOH", audioRef: null },
    { id: "qual_nome", target: "Qual é o seu nome?", native: "What is your name?", literal: "Which is the your name?", emoji: "❓", phonetic: "kwahl eh oo SEH-oo NOH-mee", audioRef: null },
  ],

  pattern: {
    name: "Two ways to name yourself",
    explanation: "Meu nome é Ana = My name is Ana (slightly more formal). Eu sou Ana = I am Ana (casual, friendly). Both are everywhere in Brazil. Pick by vibe.",
    examples: [
      { target: "Meu nome é Pedro.", native: "My name is Pedro." },
      { target: "Eu sou Pedro.", native: "I am Pedro." },
      { target: "Qual é o seu nome?", native: "What is your name?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Meu nome é", right: "My name is" },
      { left: "Eu sou", right: "I am" },
      { left: "Qual é o seu nome?", right: "What is your name?" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "My name is Maria", correct: ["Meu nome é Maria", "meu nome é Maria", "Meu nome e Maria"] },
    { type: "fill_blank", instruction: "Complete the introduction", sentence: "____ nome é Carlos.", options: ["Meu", "Seu", "Sua"], correct: "Meu", context: "Meu = my (masculine, agreeing with nome)." },
    { type: "multiple_choice", instruction: "Casual self-intro at a bar — best line?", question: "Choose", options: [
      { text: "Eu sou Lucas", correct: true },
      { text: "Tchau", correct: false },
      { text: "Adeus Lucas", correct: false },
    ], explanation: "Eu sou + name is the casual everyday way to introduce yourself." },
    { type: "build_sentence", instruction: "Ask someone their name", words: ["nome?", "Qual", "seu", "é", "o"], correct: ["Qual", "é", "o", "seu", "nome?"], translation: "What is your name?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What is your name?", correct: ["Qual é o seu nome?", "qual é o seu nome?", "Qual e o seu nome?"] },
  ],

  rwenDialogue: {
    intro: "First day of a Portuguese class in Salvador. The teacher walks up to you.",
    lines: [
      { speaker: "npc", target: "Oi! Qual é o seu nome?", native: "Hi! What is your name?" },
      { speaker: "user", userChoices: [
        { target: "Meu nome é Alex. E o seu?", native: "My name is Alex. And yours?", correct: true, feedback: "Replied with name AND bounced back. Pure Brazilian flow." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Qual é o seu nome? wants a name, not a yes." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "She is greeting — give your name." },
      ]},
      { speaker: "npc", target: "Sou a Beatriz. Muito prazer, Alex!", native: "I am Beatriz. Very nice to meet you, Alex!" },
      { speaker: "rwen", rwenLine: "First name swap, both directions, in Portuguese. You are now in the Brazilian conversational flow.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "My name is (Portuguese)", correct: ["Meu nome é", "meu nome é", "Meu nome e"] },
      { prompt: "What is your name? (Portuguese)", correct: ["Qual é o seu nome?", "qual é o seu nome?", "Qual e o seu nome?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three times: Meu nome é [your name]. Then ask the empty air: Qual é o seu nome? Muscle-memory the question.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First evening at a Portuguese conversation meetup in Salvador. A Brazilian woman approaches and asks Qual é o seu nome?.",
    rwenRole: "Bea — Brazilian language exchange host, ~32, Salvador-born, friendly.",
    successCriteria: "User responds with Meu nome é [name] OR Eu sou [name], bounces back with E o seu? or Qual é o seu nome?, and weaves in Prazer somewhere.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
