import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-umar',
  module: 3,
  lesson: 2,
  title: 'Meri Umar — My Age',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Age in India isn't a private number — it's social information. It tells the person opposite you whether to call you bhai (brother), uncle, beta (child), or sir. Today we make sure you can say it cleanly.",
    culturalNote: "In India, asking someone's age — आपकी उम्र क्या है? (aapki umar kya hai) — is normal across most contexts and not considered rude the way it can be in Western cultures. Once your age is known, the right familial term (didi/bhaiya/aunty/uncle) follows automatically. Don't dodge the question.",
  },

  chunks: [
    {
      id: 'meri_umar',
      target: 'मेरी उम्र... साल है — Meri umar... saal hai',
      native: 'I am ... years old',
      literal: 'My age ... years is',
      emoji: '🎂',
      phonetic: 'MAY-ree u-MAR ... saal hai',
      audioRef: null,
    },
    {
      id: 'aapki_umar',
      target: 'आपकी उम्र क्या है? — Aapki umar kya hai?',
      native: 'How old are you? (formal)',
      literal: 'Your age what is?',
      emoji: '🔢',
      phonetic: 'AAP-kee u-MAR kya hai',
      audioRef: null,
    },
    {
      id: 'main_paida_hua',
      target: 'मैं... में पैदा हुआ/हुई — Main... mein paida hua/hui',
      native: 'I was born in... (m / f)',
      literal: 'I ... in born became',
      emoji: '👶',
      phonetic: 'mayn ... mayn pai-DAA hu-AA / hu-EE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gender on the verb — hua (m) vs hui (f)',
    explanation: "Hindi verbs in the past agree with the speaker's gender. A man says मैं पैदा हुआ (main paida hua — I was born). A woman says मैं पैदा हुई (main paida hui). Same meaning, different ending. This pattern (hua/hui, gaya/gayi, kiya/ki) runs through the whole language.",
    examples: [
      { target: 'मैं 1990 में पैदा हुआ — Main 1990 mein paida hua', native: 'I was born in 1990 (man speaking)' },
      { target: 'मैं 1990 में पैदा हुई — Main 1990 mein paida hui', native: 'I was born in 1990 (woman speaking)' },
      { target: 'मेरी उम्र तीस साल है — Meri umar tees saal hai', native: 'I am thirty years old' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Aapki umar kya hai?', right: 'How old are you?' },
        { left: 'Meri umar... saal hai', right: 'I am ... years old' },
        { left: 'Main paida hua/hui', right: 'I was born' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says she was born in 1995',
      sentence: 'Main 1995 mein paida _____.',
      options: ['hui', 'hua', 'hain'],
      correct: 'hui',
      context: 'Female speaker — past-tense verbs end in -i for women in Hindi.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'How old are you? (formal)',
      correct: ['Aapki umar kya hai?', 'aapki umar kya hai?', 'Aapki umar kya hai', 'aapki umar kya hai', 'आपकी उम्र क्या है?'],
    },
    {
      type: 'multiple_choice',
      instruction: "A man tells you 'Meri umar pachees saal hai'. How old is he?",
      question: 'What age is being given?',
      options: [
        { text: '25 years old', correct: true },
        { text: '20 years old', correct: false },
        { text: '50 years old', correct: false },
      ],
      explanation: "पच्चीस (pachees) = 25. बीस (bees) = 20. पचास (pachaas) = 50. The number sits between umar and saal hai.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am thirty years old"',
      words: ['hai', 'umar', 'tees', 'Meri', 'saal'],
      correct: ['Meri', 'umar', 'tees', 'saal', 'hai'],
      translation: 'I am thirty years old',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine) — male speaker',
      prompt: 'I was born in 1990',
      correct: ['Main 1990 mein paida hua', 'main 1990 mein paida hua', 'मैं 1990 में पैदा हुआ'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks your age — natural and expected in Indian conversation. Answer with the right gendered ending.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आपकी उम्र क्या है? आप कब पैदा हुए? (Aapki umar kya hai? Aap kab paida hue?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मेरी उम्र... साल है। मैं... में पैदा हुआ/हुई। (Meri umar... saal hai. Main... mein paida hua/hui.)', native: 'I am ... years old. I was born in ...', correct: true, feedback: "You answered the age and the year, with the right gendered verb. That's two grammar points in one breath." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know your own age. Use मेरी उम्र... साल है (meri umar... saal hai)." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "That's gratitude, not your age. Try meri umar... saal hai." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'बहुत अच्छा। उम्र बता देना अच्छी बात है। (Bahut accha. Umar bata dena acchi baat hai.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Knowing how to share your age sets the right tone for everything that follows. The verb agreed with you — that's Hindi rewarding the work.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you? (formal)', correct: ['Aapki umar kya hai?', 'aapki umar kya hai?', 'Aapki umar kya hai', 'aapki umar kya hai'] },
      { prompt: 'I am ... years old (start of phrase, no number yet)', correct: ['Meri umar', 'meri umar', 'मेरी उम्र'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say in Hindi: 'मेरी उम्र ___ साल है। मैं ___ में पैदा हुआ/हुई।' (Meri umar ___ saal hai. Main ___ mein paida hua/hui.) Pick hua or hui based on your gender. Notice how the verb knows you.",
    rwenSignoff: "Your age is part of your story. फिर मिलेंगे (phir milenge).",
  },

  phase8: {
    scenario: "An Indian wedding (shaadi) at a banquet hall in Jaipur. Between the haldi and the sangeet, an aunty in a green silk saree pulls you aside near the chai counter and asks how old you are — so she knows whether to call you beta or bhaiya/didi.",
    rwenRole: "Sharma Aunty — bride's father's elder sister, ~60, formal but warm, calibrating which familial term to use for you for the rest of the wedding.",
    successCriteria: "User answers 'Meri umar X saal hai' (verb at end), follows with 'Main YEAR mein paida hua/hui' using the correct gendered ending, and recognises the question is relational (placing you in the family hierarchy), not nosy.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
