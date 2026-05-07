import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l05-churrasco",
  module: 5,
  lesson: 5,
  title: "Churrasco — The Sunday ritual",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sunday in Brazil = churrasco. Family gathers around the grill, beer flows, conversation runs from morning until dusk. Today, the language of the ritual.",
    culturalNote: "The churrasco is sacred. Picanha (top sirloin), linguiça (sausage), pão de alho (garlic bread). Someone always asks Mais carne? — More meat? Saying não, obrigado/a too soon is suspicious.",
  },

  chunks: [
    { id: "churrasco", target: "Churrasco", native: "Brazilian barbecue", literal: "Churrasco", emoji: "🥩", phonetic: "shoo-HAS-koo", audioRef: null },
    { id: "carne", target: "Carne", native: "Meat", literal: "Meat (f.)", emoji: "🥩", phonetic: "KAR-nee", audioRef: null },
    { id: "cerveja", target: "Cerveja", native: "Beer", literal: "Beer (f.)", emoji: "🍺", phonetic: "ser-VEH-zhah", audioRef: null },
  ],

  pattern: {
    name: "Churrasco language",
    explanation: "Carne (meat, f.), cerveja (beer, f.), arroz (rice, m.), feijão (beans, m.). Stack them: Vou pegar carne e arroz. Quer uma cerveja?",
    examples: [
      { target: "Quer carne?", native: "Want some meat?" },
      { target: "Vou pegar uma cerveja.", native: "I'm going to grab a beer." },
      { target: "O churrasco está pronto!", native: "The churrasco is ready!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Churrasco", right: "Brazilian barbecue" },
      { left: "Carne", right: "Meat" },
      { left: "Cerveja", right: "Beer" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "A beer, please", correct: ["Uma cerveja, por favor", "uma cerveja, por favor"] },
    { type: "fill_blank", instruction: "Carne is feminine", sentence: "Quero ____ carne.", options: ["uma", "um", "o"], correct: "uma", context: "Carne (f.) — uma." },
    { type: "multiple_choice", instruction: "Brazilian friend offers more meat. Best polite reply if you DO want?", question: "Choose", options: [
      { text: "Pode trazer, sim! Obrigado/a.", correct: true },
      { text: "Não", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Accepting meat happily AND thanking — Brazilian." },
    { type: "build_sentence", instruction: "Build I want a beer", words: ["cerveja.", "Quero", "uma"], correct: ["Quero", "uma", "cerveja."], translation: "I want a beer." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The churrasco is ready", correct: ["O churrasco está pronto", "o churrasco está pronto", "O churrasco esta pronto"] },
  ],

  rwenDialogue: {
    intro: "Sunday churrasco. Your friend's father is at the grill.",
    lines: [
      { speaker: "npc", target: "Tá com fome? Tem picanha pronta!", native: "Hungry? There's picanha ready!" },
      { speaker: "user", userChoices: [
        { target: "Estou com fome, sim! Pode mandar a carne.", native: "I'm hungry, yes! Send the meat over.", correct: true, feedback: "Estou com fome (Brazilian: I have hunger), pode mandar — perfect churrasco rhythm." },
        { target: "Não obrigado", native: "(too soon)", correct: false, feedback: "Refusing carne too early is suspicious — say sim and dig in." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Accept the carne with warmth." },
      ]},
      { speaker: "npc", target: "Boa! E uma cerveja?", native: "Good! And a beer?" },
      { speaker: "rwen", rwenLine: "Churrasco protocol: respected. Brazilians take their carne and cerveja seriously.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "A beer (Portuguese)", correct: ["Uma cerveja", "uma cerveja"] },
      { prompt: "I'm hungry (Brazilian)", correct: ["Estou com fome", "estou com fome", "Tô com fome", "tô com fome"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you are at a Brazilian Sunday churrasco. Out loud: Quero carne. Uma cerveja, por favor. Mais arroz?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Sunday churrasco at your Brazilian friend's parents'. The father grills, the mother offers food, the cousins hand you beers. Survive the protocol.",
    rwenRole: "Família — Brazilian Sunday family at the grill.",
    successCriteria: "User accepts carne the first time (saying não early is rude), uses por favor / obrigado/a / valeu, and asks for cerveja or água politely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
