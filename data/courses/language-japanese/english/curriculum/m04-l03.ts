import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-ni-de',
  module: 4,
  lesson: 3,
  title: 'に and で — Two Kinds of "At"',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English uses 'at' for everything: 'at the café', 'at 7pm', 'at school'. Japanese splits that one word into two particles. に (ni) marks a destination or a fixed point — where something IS or where it's going TO. で (de) marks the place where an ACTION happens. Same English word, two different jobs.",
    culturalNote: "The に/で split feels arbitrary in English but is rigid in Japanese — and getting it wrong is one of the most audible mistakes a learner makes. The rule is action-based: if there's a verb of doing happening at that place, use で. If the place is just a static location or a destination, use に.",
  },

  chunks: [
    {
      id: 'ni_particle',
      target: 'に (ni)',
      native: 'To / at (destination, fixed point in time, existence)',
      literal: 'Where something goes TO, or where something IS',
      emoji: '📍',
      phonetic: 'ni',
      audioRef: null,
    },
    {
      id: 'de_particle',
      target: 'で (de)',
      native: 'At / in (location of action)',
      literal: 'Where an action takes place',
      emoji: '⚙️',
      phonetic: 'de',
      audioRef: null,
    },
    {
      id: 'cafe_de_kohi',
      target: 'カフェでコーヒーを飲みます。',
      native: 'I drink coffee at a café.',
      literal: 'kafe (café) + de (location-of-action) + kōhī o nomimasu (drink coffee)',
      emoji: '☕',
      phonetic: 'ka-fe de kō-hī o no-mi-ma-su',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'に = destination / location-of-being, で = location-of-action',
    explanation: 'Verbs of motion and existence (行く, 来る, いる, ある) take に for the place. Action verbs (食べる, 飲む, 勉強する, 働く) take で for the place where the action happens. Same noun, different particle, different meaning.',
    examples: [
      { target: 'カフェに行きます。', native: 'I go TO the café. (destination → に)' },
      { target: 'カフェでコーヒーを飲みます。', native: 'I drink coffee AT the café. (action there → で)' },
      { target: '東京に住んでいます。', native: 'I live IN Tokyo. (existence → に)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each particle to its job',
      pairs: [
        { left: 'に (ni)', right: 'Destination / location of being' },
        { left: 'で (de)', right: 'Location where an action happens' },
        { left: 'カフェでコーヒー', right: 'Coffee at the café (action)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose に or で',
      sentence: '図書館___勉強します。',
      options: ['で', 'に', 'を'],
      correct: 'で',
      context: 'I study at the library. ("Studying" is the action — で.)',
    },
    {
      type: 'fill_blank',
      instruction: 'Choose に or で',
      sentence: '東京___行きます。',
      options: ['に', 'で', 'を'],
      correct: 'に',
      context: 'I am going to Tokyo. (Destination — に.)',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural sentence',
      question: 'I eat lunch at school:',
      options: [
        { text: '学校で昼ごはんを食べます。', correct: true },
        { text: '学校に昼ごはんを食べます。', correct: false },
        { text: '学校を昼ごはんで食べます。', correct: false },
      ],
      explanation: '"Eat" is an action — the place of the action takes で. 学校で. に here would suggest "to" the school.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I drink coffee at a café"',
      words: ['カフェ', '飲みます。', 'を', 'コーヒー', 'で'],
      correct: ['カフェ', 'で', 'コーヒー', 'を', '飲みます。'],
      translation: 'I drink coffee at a café.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese',
      prompt: 'I go to the café.',
      correct: ['カフェに行きます。', 'カフェに行きます', 'かふぇにいきます。'],
    },
  ],

  rwenDialogue: {
    intro: "You're chatting with a Japanese friend at a café in Daikanyama. She tests your particles by walking through your day with you.",
    lines: [
      {
        speaker: 'npc',
        target: '今日はどこ___何をしましたか。',
        native: 'What did you do, and where? (note the missing particle)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'カフェでコーヒーを飲みました。', native: 'I drank coffee at a café. (action → で)', correct: true, feedback: '完璧です。Drinking is an action, so the location takes で.' },
          { target: 'カフェにコーヒーを飲みました。', native: 'I drank coffee at a café (wrong particle)', correct: false, feedback: 'カフェに would mean "to the café" — destination. The action of drinking takes で. カフェで.' },
          { target: '東京に行きました。', native: 'I went to Tokyo. (destination → に — correct usage of に)', correct: false, feedback: 'Good に usage, but the question was about what you did somewhere. Try: カフェでコーヒーを飲みました。' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'そう、その違いです。に for destinations, で for actions. 同じ「at」でも、別のparticle。',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The destination/location-of-being particle (pronounced ni)', correct: ['に'] },
      { prompt: 'I drink coffee at a café. (full sentence in Japanese)', correct: ['カフェでコーヒーを飲みます。', 'カフェでコーヒーを飲みます', 'かふぇでこーひーをのみます。'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Pair every place you go today with the right particle. "Going to work" — 会社に. "Working at work" — 会社で. Force the split. The split lives inside Japanese; English just won\'t tell you.',
    rwenSignoff: 'Two particles, one English word. Now you see what English was hiding. がんばって。',
  },

  phase8: {
    scenario: "You're meeting a friend at a small coffee shop in Nakameguro. As you settle in she peppers you with three quick questions in Japanese: where did you come from this morning, what did you do there, and where are you going after this — and she expects に or で in the right slot every time.",
    rwenRole: 'Yuki-chan — a warm 28-year-old friend who corrects with a giggle if you say カフェに飲みます or 東京で行きます, and switches to slow Japanese for you.',
    successCriteria: 'User uses で for action-locations (e.g., 家で朝ごはんを食べました — ate breakfast at home, or カフェで本を読みます — read a book at the café) AND に for destinations or existence (e.g., 渋谷に行きます — going to Shibuya, or 東京に住んでいます — live in Tokyo) — at least one correct で sentence and one correct に sentence, no swaps.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
