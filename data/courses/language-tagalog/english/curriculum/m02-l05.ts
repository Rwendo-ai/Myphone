import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-tulong',
  module: 2,
  lesson: 5,
  title: 'Pakitulong — Help',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You took a wrong turn out of Divisoria and now every street looks identical. Your phone is dead. You need help — and you need to ask in a way that earns kindness, not pity.",
    culturalNote: "Filipinos go out of their way for someone who asks politely. The 'paki-' prefix is your magic wand — 'tulong' means 'help', but 'pakitulong' is a soft, warm 'please help'. Bare imperatives ('tulungan mo ako!') feel demanding unless you actually need to shout.",
  },

  chunks: [
    {
      id: 'pakitulong',
      target: 'Pakitulong po',
      native: 'Help (please)',
      literal: 'Please-help + respect',
      emoji: 'HAND',
      phonetic: 'pa-ki-TOO-long POH',
      audioRef: null,
    },
    {
      id: 'tulungan_mo_ako',
      target: 'Tulungan mo ako',
      native: 'Help me',
      literal: 'Help-you me',
      emoji: 'REACH',
      phonetic: 'too-LOO-ngan mo a-KO',
      audioRef: null,
    },
    {
      id: 'naliligaw_ako',
      target: 'Naliligaw ako',
      native: "I'm lost",
      literal: 'Getting-lost I',
      emoji: 'MAP',
      phonetic: 'na-li-li-GAW a-KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'paki-' polite request prefix",
    explanation: "Stick 'paki-' on the front of almost any verb stem and you've got a polite request. Tulong (help) -> pakitulong (please help). Kuha (get) -> pakikuha (please get). Ulit (repeat) -> pakiulit (please repeat). It's the Tagalog 'could you please' in one prefix.",
    examples: [
      { target: 'Pakitulong po', native: 'Please help (formal)' },
      { target: 'Pakikuha po ng tubig', native: 'Please get some water' },
      { target: 'Pakidala mo ito', native: 'Please bring this' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Pakitulong po', right: 'Help (please, formal)' },
        { left: 'Tulungan mo ako', right: 'Help me' },
        { left: 'Naliligaw ako', right: "I'm lost" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You stop a stranger to ask for help finding your hotel.",
      sentence: '_____ po, naliligaw ako.',
      options: ['Pakitulong', 'Pasensya', 'Hindi'],
      correct: 'Pakitulong',
      context: "'Pakitulong' opens with a soft 'please help' — the polite ask before the problem.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm lost",
      correct: ['Naliligaw ako', 'naliligaw ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask politely for help',
      words: ['po', 'Pakitulong'],
      correct: ['Pakitulong', 'po'],
      translation: 'Please help (formal)',
    },
    {
      type: 'multiple_choice',
      instruction: "You're stranded outside Divisoria, totally turned around. What's the safest opener to a stranger?",
      question: "Which sounds polite, not panicked?",
      options: [
        { text: 'Paumanhin po, naliligaw ako. Pakitulong po.', correct: true },
        { text: 'Tulungan mo ako!', correct: false },
        { text: 'Hindi ko maintindihan', correct: false },
      ],
      explanation: "Lead with 'paumanhin po' to interrupt politely, state the problem, then ask. 'Tulungan mo ako!' is fine in actual emergencies but sounds aggressive when you just need directions.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Help me',
      correct: ['Tulungan mo ako', 'tulungan mo ako'],
    },
  ],

  rwenDialogue: {
    intro: "It's 6pm. You wandered out of Divisoria and the streets all look the same. You spot a security guard outside a bank. Approach him.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, naliligaw ako. Pakitulong po', native: "Excuse me sir, I'm lost. Please help", correct: true, feedback: "Textbook — apology, problem, request. He'll walk you to the right jeepney." },
          { target: 'Tulungan mo ako', native: 'Help me', correct: false, feedback: "Too commanding — sounds like an emergency, not a question. He'll be wary." },
          { target: 'Naliligaw ako', native: "I'm lost", correct: false, feedback: "Half a sentence — you stated the problem but never asked for help." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Saan ka pupunta, anak?',
        native: 'Where are you going, dear?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'anak'? He's adopted you for the next two minutes. That's what 'pakitulong' buys.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Help (please, formal)',
        correct: ['Pakitulong po', 'pakitulong po'],
      },
      {
        prompt: "I'm lost",
        correct: ['Naliligaw ako', 'naliligaw ako'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise these three. Picture yourself genuinely lost in Manila and run the script in your head: 'Paumanhin po, naliligaw ako. Pakitulong po.' If you can do it without flinching, you're ready.",
    rwenSignoff: "Sabay-sabay tayo — we walk together. Bukas ulit.",
  },

  phase8: {
    scenario: "It's 6pm. You took a wrong turn coming out of Divisoria market and the streets near Recto all look identical. Your phone is dead. You spot a security guard standing outside a Metrobank branch on the corner.",
    rwenRole: "Kuya Boyet — the bank security guard, late 30s, in uniform, used to giving directions to confused foreigners; helpful but only if you approach him properly.",
    successCriteria: "User opens with 'paumanhin po', states the problem ('naliligaw ako'), THEN asks for help ('pakitulong po' or similar). All three pieces in order. Skipping the opener or barking 'tulungan mo ako' makes Kuya Boyet stiffer.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
