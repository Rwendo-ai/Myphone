import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-konnichiwa',
  module: 1,
  lesson: 2,
  title: 'Konnichiwa — Hello / Good Afternoon',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Konnichiwa. The greeting everyone outside Japan thinks they know — and almost everyone uses wrong. It's not 'hello' all day long. It's specifically the daytime greeting. Get the timing right, and you sound native.",
    culturalNote: "'Konnichiwa' (こんにちは) covers roughly 11am to sunset. Using it at 7am or 9pm marks you as a foreigner. The good news: Japanese gives you separate words for each block of the day — and using the right one shows you're paying attention to the rhythm of the day.",
  },

  chunks: [
    {
      id: 'konnichiwa',
      target: 'こんにちは',
      native: 'Hello / Good afternoon',
      literal: 'konnichiwa — this day (is)',
      emoji: '🌤️',
      phonetic: 'kohn-nee-chee-WA',
      audioRef: null,
    },
    {
      id: 'genki_desu_ka',
      target: 'お元気ですか',
      native: 'How are you? (polite)',
      literal: 'o-genki desu ka — honourable-energy is question',
      emoji: '🙂',
      phonetic: 'oh-GEN-ki dess KA',
      audioRef: null,
    },
    {
      id: 'hai_genki_desu',
      target: 'はい、元気です',
      native: 'Yes, I am well',
      literal: 'hai, genki desu — yes, energy is',
      emoji: '✨',
      phonetic: 'HAI GEN-ki dess',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'です — the polite ending that frames everything',
    explanation: "'Desu' (です) sits at the end of a polite statement — 'X desu' means 'it is X'. Add 'ka' (か) and it becomes a question. This is the engine of polite Japanese conversation.",
    examples: [
      { target: '元気です (genki desu)', native: 'I am well' },
      { target: '元気ですか (genki desu ka?)', native: 'Are you well?' },
      { target: '日本人です (nihonjin desu)', native: 'I am Japanese' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'こんにちは', right: 'Hello / Good afternoon' },
        { left: 'お元気ですか', right: 'How are you? (polite)' },
        { left: '元気です', right: 'I am well' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question — make it polite',
      sentence: 'お元気です_____',
      options: ['か', 'ね', 'よ'],
      correct: 'か',
      context: "You're asking a colleague how they are. Add the question particle.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Hello / Good afternoon',
      correct: ['konnichiwa', 'Konnichiwa', "kon'nichiwa"],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite reply: "Yes, I am well"',
      words: ['です', 'はい、', '元気'],
      correct: ['はい、', '元気', 'です'],
      translation: 'Yes, I am well',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 1pm. You meet a neighbour outside the convenience store. What's the right opening?",
      question: 'Choose the correct daytime greeting',
      options: [
        { text: 'こんにちは (Konnichiwa)', correct: true },
        { text: 'おはようございます (Ohayou gozaimasu)', correct: false },
        { text: 'こんばんは (Konbanwa)', correct: false },
      ],
      explanation: "1pm is firmly in 'konnichiwa' territory. 'Ohayou gozaimasu' is for early morning; 'konbanwa' is evening.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'How are you? (polite)',
      correct: ['o genki desu ka', 'ogenki desu ka', 'O genki desu ka', 'Ogenki desu ka'],
    },
  ],

  rwenDialogue: {
    intro: "It's a Saturday afternoon on a Shibuya backstreet. You bump into a neighbour walking her dog. She smiles and stops.",
    lines: [
      {
        speaker: 'npc',
        target: 'こんにちは。お元気ですか',
        native: 'Hello. How are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'こんにちは。はい、元気です', native: 'Hello. Yes, I am well.', correct: true, feedback: 'Mirrored greeting, polite reply, complete. Textbook neighbourly exchange.' },
          { target: 'おはようございます', native: 'Good morning', correct: false, feedback: "It's afternoon — 'ohayou gozaimasu' would be jarring. Use 'konnichiwa'." },
          { target: 'はい', native: 'Yes', correct: false, feedback: "She greeted AND asked how you are — return both. 'Konnichiwa. Hai, genki desu.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'それはよかったです',
        native: "I'm glad to hear it",
      },
      {
        speaker: 'rwen',
        rwenLine: "You matched the time of day, the politeness level, AND answered her question. That's the full daytime exchange.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hello / Good afternoon (in Japanese)', correct: ['konnichiwa', 'Konnichiwa', "kon'nichiwa"] },
      { prompt: 'How are you? (polite)', correct: ['o genki desu ka', 'ogenki desu ka', 'O genki desu ka', 'Ogenki desu ka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'konnichiwa' once today — to anyone, even silently to a stranger walking past. Make sure it's between late morning and dusk.",
    rwenSignoff: "Konnichiwa today, mata ashita tomorrow.",
  },

  phase8: {
    scenario: "It's 2pm in a Shibuya backstreet. You step out of a coffee shop and pass your apartment building's neighbour walking her shiba inu. She smiles and stops to greet you. You've nodded at her before but never had a real exchange — this is the first one that matters.",
    rwenRole: "Sato-san — your neighbour, ~60, friendly but proper; she'll judge whether you've made the effort to learn the right time-of-day greeting.",
    successCriteria: "User opens with 'konnichiwa' (NOT 'ohayou gozaimasu' — it's afternoon — and NOT 'konbanwa' — it's still daylight), responds to 'o-genki desu ka' with 'hai, genki desu' rather than dropping to a one-word answer, and keeps the polite 'desu' form throughout because she's older.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
