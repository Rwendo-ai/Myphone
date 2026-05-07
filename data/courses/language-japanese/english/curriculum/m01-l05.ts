import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-sumimasen',
  module: 1,
  lesson: 5,
  title: 'Sumimasen — The Word That Does Everything',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sumimasen. If you only learn one word in Japanese, learn this one. It's 'excuse me'. It's 'sorry'. It's 'thank you' (sometimes). It's how you flag down a waiter, apologise for bumping someone, AND express gratitude for a small kindness. One word, three jobs. You'll use it forty times a day.",
    culturalNote: "Japan runs on small apologies and small acknowledgements. 'Sumimasen' (すみません) acknowledges that you've taken up someone's space, time, or attention — even slightly. Foreigners often underuse it; locals weave it into nearly every interaction. It's the social grease that keeps things smooth.",
  },

  chunks: [
    {
      id: 'sumimasen',
      target: 'すみません',
      native: 'Excuse me / sorry / thank you (for trouble)',
      literal: 'sumimasen — it does not end (i.e. my debt to you continues)',
      emoji: '🙏',
      phonetic: 'soo-mi-mah-SEN',
      audioRef: null,
    },
    {
      id: 'arigatou_gozaimasu',
      target: 'ありがとうございます',
      native: 'Thank you (polite)',
      literal: 'arigatou gozaimasu — it is rare/precious',
      emoji: '🌸',
      phonetic: 'ah-ri-ga-TOH go-zai-mas',
      audioRef: null,
    },
    {
      id: 'gomen_nasai',
      target: 'ごめんなさい',
      native: "I'm sorry (genuine apology, less formal)",
      literal: 'gomen nasai — please forgive me',
      emoji: '😔',
      phonetic: 'go-MEN-nah-sai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three apologies / thanks — when to use which',
    explanation: "'Sumimasen' is the all-rounder — light apology, polite attention-getter, even thanks for a favour. 'Arigatou gozaimasu' is pure thanks, no apology overtone. 'Gomen nasai' is a genuine 'sorry, I messed up' — softer than 'sumimasen' but more apologetic.",
    examples: [
      { target: 'すみません！(to a waiter)', native: 'Excuse me! (getting attention)' },
      { target: 'ありがとうございます (after a gift)', native: 'Thank you (pure gratitude)' },
      { target: 'ごめんなさい (after stepping on a foot)', native: "Sorry (genuine apology)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the moment that fits it best',
      pairs: [
        { left: 'すみません', right: 'Calling a waiter / light apology' },
        { left: 'ありがとうございます', right: 'Pure thanks (polite)' },
        { left: 'ごめんなさい', right: 'Genuine apology — you messed up' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You bump into someone on the Yamanote line. What do you say?",
      question: 'Choose the natural response',
      options: [
        { text: 'すみません (Sumimasen)', correct: true },
        { text: 'ありがとうございます (Arigatou gozaimasu)', correct: false },
        { text: 'こんにちは (Konnichiwa)', correct: false },
      ],
      explanation: "'Sumimasen' covers light bumps and minor disturbances. 'Gomen nasai' would be slightly too heavy for a brush on a packed train.",
    },
    {
      type: 'fill_blank',
      instruction: 'You need to flag down a waiter. What do you call out?',
      sentence: '_____！',
      options: ['すみません', 'ごめんなさい', 'こんにちは'],
      correct: 'すみません',
      context: "Restaurants in Japan: you have to flag staff over. 'Excuse me' is the call.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Excuse me / sorry / thanks for the trouble',
      correct: ['sumimasen', 'Sumimasen'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite "thank you"',
      words: ['ございます', 'ありがとう'],
      correct: ['ありがとう', 'ございます'],
      translation: 'Thank you (polite)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: "I'm sorry (genuine apology)",
      correct: ['gomen nasai', 'Gomen nasai', 'gomennasai'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small ramen counter in a Shibuya backstreet. Your bowl arrived but you forgot to ask for chopsticks. You need to flag the chef down — without being rude.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'すみません！', native: 'Excuse me!', correct: true, feedback: "Perfect — light, polite, attention-grabbing. The chef looks up immediately." },
          { target: 'ごめんなさい', native: "I'm sorry", correct: false, feedback: "That's for genuine apologies — you haven't done anything wrong. 'Sumimasen' is the right attention-grabber." },
          { target: 'おはようございます', native: 'Good morning', correct: false, feedback: "He needs a flag, not a greeting. 'Sumimasen!' calls him over." },
        ],
      },
      {
        speaker: 'npc',
        target: 'はい、何でしょう',
        native: 'Yes, what is it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'お箸をお願いします。すみません', native: 'Chopsticks please. Sorry for the trouble.', correct: true, feedback: "You closed with 'sumimasen' — apologising for the small disturbance. Very Japanese." },
          { target: 'ありがとうございます', native: 'Thank you', correct: false, feedback: "Save the thanks for AFTER he hands you the chopsticks. Right now you need to ask." },
          { target: 'ごめんなさい', native: "I'm sorry", correct: false, feedback: "Slightly too heavy for asking for chopsticks. 'Sumimasen' is calibrated for this exact moment." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sumimasen to flag him. Sumimasen to thank him for coming over. You'll use this word so much it'll start to feel like a heartbeat. That's correct — Japan runs on it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Excuse me / sorry / thanks for the trouble (the all-rounder word)', correct: ['sumimasen', 'Sumimasen'] },
      { prompt: 'Thank you (polite, pure gratitude)', correct: ['arigatou gozaimasu', 'Arigatou gozaimasu', 'arigatougozaimasu', 'arigatō gozaimasu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'sumimasen' three times today — even silently, even in fake situations. Pretend you're flagging a waiter. Pretend you bumped into someone. Lock the word into muscle memory.",
    rwenSignoff: "Sumimasen — for the time you spent here. Mata ashita.",
  },

  phase8: {
    scenario: "It's lunchtime at a tiny ten-seat ramen counter in Shibuya. You ordered tonkotsu and your bowl arrived without chopsticks — the chef is busy at the noodle station two metres away. You need to get his attention politely, ask for chopsticks, and thank him without monopolising his time. The shop is loud and other customers are eating; you have to land it cleanly.",
    rwenRole: "Chef-san — ramen master, ~50, fast-moving and brusque but fair; he respects customers who flag him efficiently and politely, and gets visibly annoyed by foreigners who shout or under-apologise.",
    successCriteria: "User flags the chef with 'sumimasen!' (NOT 'gomen nasai' which is too apologetic for an ask, and NOT silence + waving), follows up with the chopsticks request, and closes with 'arigatou gozaimasu' or another 'sumimasen' when he hands them over rather than just nodding silently.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
