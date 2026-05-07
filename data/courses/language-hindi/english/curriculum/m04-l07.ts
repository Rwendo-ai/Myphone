import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-sov-word-order',
  module: 4,
  lesson: 7,
  title: 'SOV — Subject, Object, Verb (Hindi Word Order)',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English is SVO — Subject, Verb, Object. 'I eat rice'. Hindi is SOV — Subject, Object, Verb. 'मैं चावल खाता हूँ' (main chāval khātā hūṁ) — literally 'I rice eat am'. The verb lands LAST. Every Hindi sentence you'll ever hear ends in the verb. Get used to that landing.",
    culturalNote: "Most of the world's languages are SOV — Hindi, Japanese, Korean, Turkish, Tamil. English's SVO is the unusual one. Once you internalise SOV, half of Asia opens up grammatically. Hindi is your gateway.",
  },

  chunks: [
    {
      id: 'main_chaval_khata',
      target: 'मैं चावल खाता हूँ',
      native: 'I eat rice (masc speaker)',
      literal: 'main chāval khātā hūṁ — I + rice + eat + am',
      emoji: '🍚',
      phonetic: 'main CHAA-val KHAA-taa hoon',
      audioRef: null,
    },
    {
      id: 'vah_kitab_padhti',
      target: 'वह किताब पढ़ती है',
      native: 'She reads a book',
      literal: 'vah kitāb paṛhtī hai — she + book + reads + is',
      emoji: '📖',
      phonetic: 'vah ki-TAAB PARH-tee hai',
      audioRef: null,
    },
    {
      id: 'ham_pani_pite',
      target: 'हम पानी पीते हैं',
      native: 'We drink water',
      literal: 'ham pānī pīte hain — we + water + drink + are',
      emoji: '💧',
      phonetic: 'hum PAA-nee PEE-tay hain',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Subject + Object + Verb (verb LAST)',
    explanation: "In Hindi, the verb always comes at the end. The auxiliary (hai/hain/hūṁ) anchors the very last position. Object goes between subject and verb. 'I rice eat-am' feels weird in English; in Hindi it feels natural. Train your ear to wait for the verb at the end.",
    examples: [
      { target: 'main chāval khātā hūṁ', native: 'I rice eat-am → I eat rice' },
      { target: 'vah kitāb paṛhtī hai', native: 'She book reads-is → She reads a book' },
      { target: 'ham pānī pīte hain', native: 'We water drink-are → We drink water' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi sentence to its English meaning',
      pairs: [
        { left: 'main chāval khātā hūṁ', right: 'I eat rice' },
        { left: 'vah kitāb paṛhtī hai', right: 'She reads a book' },
        { left: 'ham pānī pīte hain', right: 'We drink water' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Where does the verb go in Hindi?',
      sentence: 'मैं चावल _____ हूँ (I eat rice)',
      options: ['khātā', 'jātā', 'piītā'],
      correct: 'khātā',
      context: 'The verb (with auxiliary) always lands at the end.',
    },
    {
      type: 'multiple_choice',
      instruction: "Hindi word order is:",
      question: 'Pick the correct order:',
      options: [
        { text: 'Subject + Object + Verb (SOV)', correct: true },
        { text: 'Subject + Verb + Object (SVO, like English)', correct: false },
        { text: 'Verb + Subject + Object (VSO)', correct: false },
      ],
      explanation: "Hindi is strictly SOV — verb always last. Speakers may shuffle subject/object for emphasis, but the verb stays at the end.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (SOV order)',
      prompt: 'I eat rice',
      correct: ['main chāval khātā hūṁ', 'main chaval khata hoon', 'Main chaval khata hoon', 'Main chāval khātā hūṁ'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "She reads a book" in SOV order',
      words: ['है', 'पढ़ती', 'किताब', 'वह'],
      correct: ['वह', 'किताब', 'पढ़ती', 'है'],
      translation: 'She reads a book',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'We drink water',
      correct: ['ham pānī pīte hain', 'ham pani pite hain', 'Ham pani pite hain', 'Ham pānī pīte hain'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a roadside dhaba near Agra. The waiter asks what each person at your table is eating.",
    lines: [
      {
        speaker: 'npc',
        target: 'आप क्या खा रहे हैं? और वह क्या पी रही है?',
        native: 'What are you eating? And what is she drinking?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main chāval khātā hūṁ. Vah pānī pītī hai.', native: 'I eat rice. She drinks water.', correct: true, feedback: "Two SOV sentences, verbs landing last on both. Hindi shape locked in." },
          { target: 'Main khātā chāval. Vah pītī pānī.', native: 'I eat rice. She drinks water. (verb in middle, English-style)', correct: false, feedback: "Verb has to be last. SOV: 'main chāval khātā hūṁ' — I rice eat-am." },
          { target: 'Khātā main chāval', native: 'Eat I rice (verb first)', correct: false, feedback: "Verb at the end, subject at the start: 'main chāval khātā hūṁ'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Verb at the end — that's the Hindi heartbeat. Now you can hear sentences finish.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I eat rice (SOV)', correct: ['main chāval khātā hūṁ', 'main chaval khata hoon', 'Main chaval khata hoon', 'Main chāval khātā hūṁ'] },
      { prompt: 'We drink water (SOV)', correct: ['ham pānī pīte hain', 'ham pani pite hain', 'Ham pani pite hain', 'Ham pānī pīte hain'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three things you'll do today — eat, drink, read. Frame each in Hindi SOV: 'main ___ ___ hūṁ'. Subject first, object next, verb LAST. Notice how the sentence feels heavier toward the end.",
    rwenSignoff: "Verb at the end is the Hindi shape. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Saturday brunch at your friend Anjali's apartment in Mumbai, and she's testing whether you can describe an action in Hindi without slipping into English word order. She'll point at people doing things — someone eating dal, someone reading the newspaper, someone drinking chai — and ask you to narrate each in Hindi with the verb at the end.",
    rwenRole: "Anjali — a 32-year-old language-exchange partner who hears every English-style mistake and gently teases 'verb last, yaar!' when you say 'main khātā chāval' instead of 'main chāval khātā hūṁ'.",
    successCriteria: "User produces three SOV sentences with verb-final word order — e.g. 'main dāl khātā hūṁ', 'vah akhbār paṛhtā hai', 'ham chāy pīte hain' — no English-style 'I eat rice' = 'main khātā chāval' slips.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
