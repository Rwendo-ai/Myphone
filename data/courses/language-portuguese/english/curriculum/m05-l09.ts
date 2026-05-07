import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l09-festas-familia",
  module: 5,
  lesson: 9,
  title: "Festas — Family celebrations",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian families celebrate everything. Aniversário (birthday), casamento (wedding), Natal (Christmas). Today, the language of family celebration.",
    culturalNote: "Brazilian birthdays mean a cake, parabéns (the Portuguese Happy Birthday song), and the birthday person serving the cake to guests. Carnaval and Natal often pull entire extended families to one beach house.",
  },

  chunks: [
    { id: "aniversario", target: "Aniversário", native: "Birthday", literal: "Anniversary/Birthday", emoji: "🎂", phonetic: "ah-nee-ver-SAH-ree-oo", audioRef: null },
    { id: "parabens", target: "Parabéns!", native: "Congratulations / Happy Birthday!", literal: "Felicitations", emoji: "🎉", phonetic: "pah-rah-BAYNGS", audioRef: null },
    { id: "festa", target: "A festa", native: "The party", literal: "The party (f.)", emoji: "🎊", phonetic: "ah FES-tah", audioRef: null },
  ],

  pattern: {
    name: "Wishing happiness",
    explanation: "Parabéns covers Happy Birthday, Congratulations, Well done. Bom aniversário is also fine. For weddings: Felicidades! For Christmas: Feliz Natal! For New Year: Feliz Ano Novo!",
    examples: [
      { target: "Parabéns pelo seu aniversário!", native: "Happy birthday!" },
      { target: "Feliz Natal!", native: "Merry Christmas!" },
      { target: "Felicidades aos noivos!", native: "Congratulations to the bride and groom!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Aniversário", right: "Birthday" },
      { left: "Parabéns!", right: "Happy Birthday!" },
      { left: "Festa", right: "Party" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Happy birthday!", correct: ["Parabéns!", "parabéns!", "Parabens!", "parabens!"] },
    { type: "fill_blank", instruction: "Going to a party", sentence: "Vou ____ festa.", options: ["à", "ao", "na"], correct: "à", context: "À festa = a + a festa, contracted." },
    { type: "multiple_choice", instruction: "Wedding congratulations — best line?", question: "Choose", options: [
      { text: "Felicidades!", correct: true },
      { text: "Tchau!", correct: false },
      { text: "Sim!", correct: false },
    ], explanation: "Felicidades is the standard wedding congrats." },
    { type: "build_sentence", instruction: "Build Happy Christmas (Brazilian)", words: ["Natal!", "Feliz"], correct: ["Feliz", "Natal!"], translation: "Merry Christmas!" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm going to my friend's birthday", correct: ["Vou ao aniversário do meu amigo", "Vou no aniversário do meu amigo"] },
  ],

  rwenDialogue: {
    intro: "It is your Brazilian friend's mother's birthday. The whole family is gathered.",
    lines: [
      { speaker: "npc", target: "Hoje é o aniversário da minha mãe!", native: "Today is my mother's birthday!" },
      { speaker: "user", userChoices: [
        { target: "Que legal! Parabéns pra ela! Vou comer bolo!", native: "How nice! Congratulations to her! I'll eat cake!", correct: true, feedback: "Three Brazilian moves — celebrate, parabéns, embrace the cake." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Celebrate with parabéns." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Stay and celebrate — Parabéns!" },
      ]},
      { speaker: "npc", target: "Vai cantar parabéns junto?", native: "You'll sing happy birthday with us?" },
      { speaker: "rwen", rwenLine: "Brazilian celebrations are full-volume warmth. You leaned in.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Happy birthday! (Portuguese)", correct: ["Parabéns!", "parabéns!", "Parabens!", "parabens!"] },
      { prompt: "Merry Christmas (Portuguese)", correct: ["Feliz Natal", "feliz Natal"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Parabéns! Felicidades! Feliz Natal! Three Brazilian celebrations, three phrases.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend's mother's 60th birthday. Big family party. Greet everyone, congratulate the birthday woman, sing parabéns.",
    rwenRole: "Birthday matriarch — ~60, paulistana, surrounded by family.",
    successCriteria: "User says Parabéns to the birthday person, uses Feliz aniversário or Parabéns pra você in song, and greets relatives with appropriate warmth.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
