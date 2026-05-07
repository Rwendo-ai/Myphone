import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-konbanwa',
  module: 1,
  lesson: 3,
  title: 'Konbanwa — Good Evening',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The sun drops behind the buildings, the izakaya lanterns flicker on, and the greeting changes again. Konbanwa. From dusk onwards, this is your word. Use 'konnichiwa' after dark and you'll get a polite but slightly puzzled smile.",
    culturalNote: "Japanese splits the day into three greeting zones — morning, day, evening — with no overlap. 'Konbanwa' (こんばんは) takes over from sunset onwards. Trains and shops change their announcements; television presenters change their opener. The whole country shifts greeting at dusk.",
  },

  chunks: [
    {
      id: 'konbanwa',
      target: 'こんばんは',
      native: 'Good evening',
      literal: 'konbanwa — this evening (is)',
      emoji: '🌆',
      phonetic: 'kohn-bahn-WA',
      audioRef: null,
    },
    {
      id: 'irasshaimase',
      target: 'いらっしゃいませ',
      native: 'Welcome (said by shop/restaurant staff)',
      literal: 'irasshaimase — please come in (honorific)',
      emoji: '🏮',
      phonetic: 'ee-rah-SHY-mah-seh',
      audioRef: null,
    },
    {
      id: 'shitsurei_shimasu',
      target: '失礼します',
      native: 'Excuse me / pardon the intrusion',
      literal: 'shitsurei shimasu — rudeness do',
      emoji: '🚪',
      phonetic: 'shi-tsu-RAY shi-mass',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'は as a greeting marker — wa, not ha',
    explanation: "In 'konnichiwa' and 'konbanwa', the は character is read 'wa' (not 'ha') because it's the topic-marking particle, fossilised into the greeting. Same rule applies elsewhere — 'は' as a particle is always 'wa'.",
    examples: [
      { target: 'こんにち + は (konnichi + wa)', native: 'This day (is) — daytime greeting' },
      { target: 'こんばん + は (konban + wa)', native: 'This evening (is) — evening greeting' },
      { target: '私は (watashi wa)', native: 'As for me — same は, same "wa" reading' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese to the situation',
      pairs: [
        { left: 'こんばんは', right: 'Good evening' },
        { left: 'いらっしゃいませ', right: 'Welcome (shop staff)' },
        { left: '失礼します', right: 'Excuse me / pardon the intrusion' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 7:30pm. You walk into a tiny izakaya in Osaka. The staff shouts something at you. What is it?",
      question: 'Identify what they just said',
      options: [
        { text: 'いらっしゃいませ (Welcome)', correct: true },
        { text: 'こんばんは (Good evening)', correct: false },
        { text: '失礼します (Excuse me)', correct: false },
      ],
      explanation: "Every restaurant and shop greets entering customers with 'irasshaimase'. You don't reply — just nod or bow slightly.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the evening greeting',
      sentence: 'こん_____は',
      options: ['ばん', 'にち', 'がん'],
      correct: 'ばん',
      context: "You're greeting a friend at 8pm.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Good evening',
      correct: ['konbanwa', 'Konbanwa', 'konbanwa.', 'kombanwa'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the phrase you say when entering someone\'s home',
      words: ['します', '失礼'],
      correct: ['失礼', 'します'],
      translation: 'Excuse me / pardon the intrusion',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Welcome (what shop staff say)',
      correct: ['irasshaimase', 'Irasshaimase'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8pm in Dotonbori, Osaka. You duck under the noren curtain of a takoyaki stand, the smell of batter and bonito hitting you. The owner looks up from the iron griddle.",
    lines: [
      {
        speaker: 'npc',
        target: 'いらっしゃいませ！こんばんは',
        native: 'Welcome! Good evening',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'こんばんは', native: 'Good evening', correct: true, feedback: "Right register, right time. He smiles and points to the menu." },
          { target: 'こんにちは', native: 'Hello / good afternoon', correct: false, feedback: "It's 8pm — 'konnichiwa' is the daytime greeting. Use 'konbanwa' after dark." },
          { target: 'おはようございます', native: 'Good morning', correct: false, feedback: "Way off the time-of-day mark. After sunset, it's 'konbanwa'." },
        ],
      },
      {
        speaker: 'npc',
        target: '何にしましょうか',
        native: 'What would you like?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the lanterns and the dusk. The whole stand opened up to you because you matched the moment. That's how Japanese greetings work — they're a small key that fits a specific lock.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good evening (in Japanese)', correct: ['konbanwa', 'Konbanwa', 'kombanwa'] },
      { prompt: 'Welcome (what shop staff shout)', correct: ['irasshaimase', 'Irasshaimase'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'konbanwa' to one person after sunset tonight. Even just under your breath at the convenience store counter.",
    rwenSignoff: "The lanterns are on. Konbanwa. Mata ashita.",
  },

  phase8: {
    scenario: "It's 7:45pm in Osaka's Dotonbori district, neon reflecting off the canal. You step under the noren curtain of a takoyaki stand and the owner is mid-flip with the metal pick. He greets you the moment you cross the threshold. You'll need to greet back AND order — this is your first solo izakaya-style transaction.",
    rwenRole: "Owner-san — takoyaki stand proprietor, ~55, friendly Osaka type who appreciates anyone who reads the time-of-day right and isn't shy about ordering.",
    successCriteria: "User responds to 'irasshaimase' WITHOUT trying to greet back with the same word (it's a one-way welcome from staff to customer), uses 'konbanwa' (NOT 'konnichiwa' — it's well past sunset), and keeps the polite register because they're a paying customer being served.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
