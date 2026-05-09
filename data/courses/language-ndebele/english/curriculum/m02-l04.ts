import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04',
  module: 2,
  lesson: 4,
  title: 'Igama lami ngu — My name is',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After the greeting volley, names. 'Igama lami ngu...' literally lays your name down: 'Name of-mine is...'. The little 'ngu' before your name is a copula — Ndebele's way of saying 'is'. Skip it and the sentence falls apart, so we'll drill it.",
    culturalNote: "Ndebele names are often shortened among friends but introduced in full when meeting properly. Don't be surprised if someone repeats your name back to you slowly — they're testing the pronunciation, not mocking. It's a sign of respect to do the same with theirs. If their name is hard for you, ask 'Ungubani igama lakho?' (what is your name?) again rather than guessing.",
  },

  chunks: [
    {
      id: 'igama_lami_ngu',
      target: 'Igama lami ngu...',
      native: 'My name is...',
      literal: 'Name of-mine is...',
      emoji: '🧑',
      phonetic: 'ee-GAH-mah LAH-mee ngoo',
      audioRef: null,
    },
    {
      id: 'ungubani',
      target: 'Ungubani igama lakho?',
      native: "What's your name? (singular casual)",
      literal: 'You-are-who name of-yours?',
      emoji: '❓',
      phonetic: 'oon-goo-BAH-nee ee-GAH-mah LAH-khoh',
      audioRef: null,
    },
    {
      id: 'kuhle',
      target: 'Kuhle ukukwazi',
      native: 'Nice to meet you',
      literal: 'Good (it is) to know you',
      emoji: '🤝',
      phonetic: 'KOO-hleh oo-koo-KWAH-zee',
      audioRef: null,
    },
    {
      id: 'mina',
      target: 'Mina nginguBowen',
      native: "Me, I'm Bowen",
      literal: 'Me I-am-Bowen — emphatic self-introduction',
      emoji: '👋',
      phonetic: 'MEE-nah ng-een-goo-BOW-en',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The "ngu" copula — saying who someone IS',
    explanation: "'Ngu' is glued onto a name to mean 'is/am'. 'Igama lami ngu-Bowen' = 'my name is Bowen'. Same trick works with 'mina ngingu-' (I am) — 'Mina nginguBowen' = 'me, I'm Bowen'. The 'ngu' attaches directly to the name with no space when written formally, though spaces are common in casual writing.",
    examples: [
      { target: 'Igama lami nguBowen.', native: 'My name is Bowen.' },
      { target: 'Mina nginguBowen.', native: "Me, I'm Bowen." },
      { target: 'Ungubani igama lakho?', native: "What's your name?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match phrase to meaning',
      pairs: [
        { left: 'Igama lami ngu...', right: 'My name is...' },
        { left: 'Ungubani igama lakho?', right: "What's your name?" },
        { left: 'Kuhle ukukwazi', right: 'Nice to meet you' },
        { left: 'Mina nginguBowen', right: "Me, I'm Bowen" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill in the missing copula',
      sentence: 'Igama lami ____ Tendai.',
      options: ['ngu', 'ngi', 'wena'],
      correct: 'ngu',
      context: "You're introducing yourself at a wedding.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "What is your name?"',
      words: ['lakho?', 'igama', 'Ungubani'],
      correct: ['Ungubani', 'igama', 'lakho?'],
      translation: 'What is your name?',
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele (use your own name)',
      prompt: 'My name is [your name]',
      correct: ['Igama lami ngu', 'igama lami ngu'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a community meeting in Pelandaba. The man next to you — mid-30s, friendly — leans over to introduce himself.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salibonani. Mina nginguSibanda. Wena, ungubani igama lakho?',
        native: "Hello. Me, I'm Sibanda. You — what is your name?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Igama lami nguBowen. Kuhle ukukwazi.', native: "My name is Bowen. Nice to meet you.", correct: true, feedback: "Full intro plus the 'nice to meet you' close. He extends his hand." },
          { target: 'Bowen.', native: 'Bowen.', correct: false, feedback: "He'll catch your name — but you've skipped the structure he just modelled. Try mirroring his sentence." },
          { target: 'Ngiyaphila.', native: "I'm fine.", correct: false, feedback: "Wrong reply for the question. 'Ngiyaphila' answers 'unjani', not 'ungubani'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bowen. Kuhle ukukwazi lawe.',
        native: 'Bowen. Nice to meet you too.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He repeated your name back — that's the Ndebele politeness move. Try doing the same with people you meet.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My name is...', correct: ['Igama lami ngu', 'igama lami ngu', 'Igama lami ngu...', 'igama lami ngu...'] },
      { prompt: "What's your name?", correct: ['Ungubani igama lakho', 'ungubani igama lakho', 'Ungubani igama lakho?', 'ungubani igama lakho?'] },
      { prompt: 'Nice to meet you', correct: ['Kuhle ukukwazi', 'kuhle ukukwazi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself in Ndebele to one person today — even if the rest of the conversation is in English. 'Igama lami ngu-[name]'. They'll usually mirror back, and now you've practiced both sides.",
    rwenSignoff: "Names trade respect. Lay yours down clearly. Sala kuhle.",
  },

  phase8: {
    scenario: "You're at a small kombi-stop in Bulawayo's Mahatshula suburb. While waiting, the woman next to you — mid-30s, friendly, Ndebele speaker — strikes up a conversation. She'll greet you and ask your name. Practice the full intro and ask hers back.",
    rwenRole: "Thandeka — 35, primary school teacher, easy-going, will repeat your name back slowly to check the pronunciation, expects you to do the same when she gives hers.",
    successCriteria: "User opens with 'Salibonani', uses 'Igama lami ngu-[name]' (with the 'ngu' copula audible), asks 'Ungubani igama lakho?' back, and acknowledges her name with 'Kuhle ukukwazi' or by repeating it.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
