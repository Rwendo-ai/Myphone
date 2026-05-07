import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l08-refrao-musica",
  module: 10,
  lesson: 8,
  title: "Refrões — Brazilian song lines",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian music carries the language. Three refrão phrases live in everyday speech: É só alegria! Coração na mão. Vai dar tudo certo.",
    culturalNote: "Brazilians quote songs in conversation constantly. Bossa nova, samba, MPB, sertanejo all leak into daily talk. Knowing a few line-fragments earns instant warmth.",
  },

  chunks: [
    { id: "so_alegria", target: "É só alegria!", native: "It's all joy! / All good vibes!", literal: "Is only joy", emoji: "🎉", phonetic: "eh soh ah-leh-GREE-ah", audioRef: null },
    { id: "coracao_na_mao", target: "Coração na mão", native: "Heart in (your) hand (vulnerable)", literal: "Heart in-the hand", emoji: "💗", phonetic: "ko-rah-SOWNG nah MOWNG", audioRef: null },
    { id: "vai_dar_certo", target: "Vai dar tudo certo", native: "Everything will work out", literal: "Will give all right", emoji: "🌈", phonetic: "vai dar TOO-doo SEHR-too", audioRef: null },
  ],

  pattern: {
    name: "Refrão phrases as everyday quotes",
    explanation: "Brazilians use song-quotes as full-conversation lines. Vai dar tudo certo lands like English No worries — but warmer. É só alegria is a vibe-check answer. Sprinkle them.",
    examples: [
      { target: "Como tá hoje? — É só alegria!", native: "How are you today? — All joy!" },
      { target: "Calma, vai dar tudo certo.", native: "Calm, everything will work out." },
      { target: "Falo de coração na mão.", native: "I speak with heart in hand (vulnerable)." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "É só alegria!", right: "All good vibes!" },
      { left: "Coração na mão", right: "Vulnerable" },
      { left: "Vai dar tudo certo", right: "It'll all work out" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "It will all work out", correct: ["Vai dar tudo certo", "vai dar tudo certo"] },
    { type: "fill_blank", instruction: "Brazilian reassurance", sentence: "Calma, vai ____ tudo certo.", options: ["dar", "fazer", "ser"], correct: "dar", context: "Vai dar certo." },
    { type: "multiple_choice", instruction: "Brazilian friend is anxious. Best calming line?", question: "Choose", options: [
      { text: "Calma, vai dar tudo certo.", correct: true },
      { text: "Tchau", correct: false },
      { text: "Não", correct: false },
    ], explanation: "Vai dar tudo certo — Brazilian reassurance refrain." },
    { type: "build_sentence", instruction: "Build It's only joy today!", words: ["alegria", "É", "hoje!", "só"], correct: ["É", "só", "alegria", "hoje!"], translation: "It's only joy today!" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Heart in hand (open, vulnerable)", correct: ["Coração na mão", "coração na mão", "Coracao na mao"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend is stressed about a job interview tomorrow.",
    lines: [
      { speaker: "npc", target: "Tô morrendo de medo da entrevista amanhã.", native: "I'm dying of fear about tomorrow's interview." },
      { speaker: "user", userChoices: [
        { target: "Calma, amiga/o. Vai dar tudo certo.", native: "Calm, friend. It'll all work out.", correct: true, feedback: "Brazilian reassurance refrain — landed warmly." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Reassure — Vai dar tudo certo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Reassure with vai dar tudo certo." },
      ]},
      { speaker: "npc", target: "Tomara! Obrigada por estar aí.", native: "Hopefully! Thanks for being there." },
      { speaker: "rwen", rwenLine: "Brazilian refrões — small phrases that carry whole feelings. Friendship in three words.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Everything will work out (Portuguese)", correct: ["Vai dar tudo certo", "vai dar tudo certo"] },
      { prompt: "All good vibes! (Portuguese)", correct: ["É só alegria!", "É só alegria", "é só alegria"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Drop one Brazilian refrão into your day out loud: Vai dar tudo certo. É só alegria! Carry one with you.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend going through a hard time. Reassure them across an evening using all three refrão phrases.",
    rwenRole: "Stressed Brazilian friend, ~30.",
    successCriteria: "User uses Vai dar tudo certo as comfort, É só alegria as encouragement, coração na mão when speaking honestly. Lines feel warm, not stiff.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
