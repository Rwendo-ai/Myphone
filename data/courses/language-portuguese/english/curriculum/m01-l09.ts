import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l09-obrigado",
  module: 1,
  lesson: 9,
  title: "Obrigado / Obrigada — Thank you",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here is your first surprise: thank you in Portuguese is gendered. A man says obrigado. A woman says obrigada. The word agrees with YOU, not the person you thank.",
    culturalNote: "This trips every English speaker once. Brazilians notice quietly when you get it right. Reply: De nada (you are welcome) — literally of nothing.",
  },

  chunks: [
    { id: "obrigado", target: "Obrigado", native: "Thank you (man speaking)", literal: "Obliged (m.)", emoji: "🙏", phonetic: "oh-bree-GAH-doo", audioRef: null },
    { id: "obrigada", target: "Obrigada", native: "Thank you (woman speaking)", literal: "Obliged (f.)", emoji: "🙏", phonetic: "oh-bree-GAH-dah", audioRef: null },
    { id: "de_nada", target: "De nada", native: "You're welcome", literal: "Of nothing", emoji: "✨", phonetic: "jee NAH-dah", audioRef: null },
  ],

  pattern: {
    name: "Speaker-gendered thanks",
    explanation: "The -o ending is masculine, -a is feminine. The thank-you word agrees with the speaker. A woman thanking a man still says obrigada. Always you, never them.",
    examples: [
      { target: "Obrigado (man speaking)", native: "Thank you" },
      { target: "Obrigada (woman speaking)", native: "Thank you" },
      { target: "De nada", native: "You're welcome" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Obrigado", right: "Thanks (man speaking)" },
      { left: "Obrigada", right: "Thanks (woman speaking)" },
      { left: "De nada", right: "You're welcome" },
    ]},
    { type: "fill_blank", instruction: "A woman thanks a barista — pick the right form", sentence: "____! O café está ótimo.", options: ["Obrigada", "Obrigado", "Tchau"], correct: "Obrigada", context: "The speaker is a woman — she uses obrigada." },
    { type: "translate", instruction: "Type in Portuguese (assume YOU are male)", prompt: "Thank you", correct: ["Obrigado", "obrigado"] },
    { type: "multiple_choice", instruction: "Someone says obrigado/a to you. Reply?", question: "Choose", options: [
      { text: "De nada", correct: true },
      { text: "Adeus", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "De nada is the universal you-are-welcome." },
    { type: "build_sentence", instruction: "Build a polite thank you (woman speaking)", words: ["pelo", "Obrigada", "café."], correct: ["Obrigada", "pelo", "café."], translation: "Thank you for the coffee. (woman speaking)" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "You're welcome", correct: ["De nada", "de nada"] },
  ],

  rwenDialogue: {
    intro: "You buy a fresh pão de queijo at a padaria. The owner hands it to you with a smile.",
    lines: [
      { speaker: "npc", target: "Aqui está. Está quentinho!", native: "Here it is. It is nice and warm!" },
      { speaker: "user", userChoices: [
        { target: "Obrigado/a!", native: "Thank you!", correct: true, feedback: "Speaker-agreement: nailed." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Use obrigado (m.) or obrigada (f.) to thank him." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Thank him first — obrigado/a — then say tchau." },
      ]},
      { speaker: "npc", target: "De nada! Volta sempre!", native: "You're welcome! Come back any time!" },
      { speaker: "rwen", rwenLine: "Brazilian gendered-thanks: unlocked. The -o or -a goes with YOU, the speaker.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Thank you (use the form for YOUR gender)", correct: ["Obrigado", "obrigado", "Obrigada", "obrigada"] },
      { prompt: "You're welcome (Portuguese)", correct: ["De nada", "de nada"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice the gendered thanks. Out loud, say obrigado or obrigada (whichever fits you). Three times. Lock it in.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "You are at a small cafe in Salvador. The barista hands you a coffee, you thank her, and she replies. Then a woman ahead of you in line drops her change — you pick it up and hand it back.",
    rwenRole: "Cafe interaction — first the barista (woman, ~40), then a customer (woman, ~50) thanking you back.",
    successCriteria: "User uses obrigado or obrigada matching the user's own gender consistently (not the gender of the person being thanked), and replies De nada when the customer thanks them back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
