import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-ohayou',
  module: 1,
  lesson: 1,
  title: 'Ohayou Gozaimasu — Good Morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ohayou gozaimasu! In Japanese, your morning greeting changes shape based on who's in front of you. Same word, two registers. Today we wake the day — and we wake it politely.",
    culturalNote: "Japanese has politeness built into nearly every utterance. 'Ohayou' is what you say to a friend; 'Ohayou gozaimasu' is the polite, full version — used with elders, colleagues, anyone outside your inner circle. Defaulting to the polite form is almost never wrong.",
  },

  chunks: [
    {
      id: 'ohayou_gozaimasu',
      target: 'おはようございます',
      native: 'Good morning (polite)',
      literal: 'ohayou gozaimasu — early-honourable existing',
      emoji: '🌅',
      phonetic: 'oh-ha-YOH go-zai-mas',
      audioRef: null,
    },
    {
      id: 'ohayou',
      target: 'おはよう',
      native: 'Morning (casual, to a friend)',
      literal: 'ohayou — early-honourable',
      emoji: '☀️',
      phonetic: 'oh-ha-YOH',
      audioRef: null,
    },
    {
      id: 'hai_ohayou',
      target: 'はい、おはようございます',
      native: 'Yes, good morning (polite reply)',
      literal: 'hai, ohayou gozaimasu — yes, good morning',
      emoji: '🙇',
      phonetic: 'HAI oh-ha-YOH go-zai-mas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite vs casual — the gozaimasu suffix',
    explanation: "Adding 'gozaimasu' (ございます) onto a greeting flips it from casual to polite. This pattern repeats across Japanese — same root, different ending, different register. When in doubt, use the longer polite form.",
    examples: [
      { target: 'おはよう (ohayou)', native: 'Morning (to a close friend)' },
      { target: 'おはようございます (ohayou gozaimasu)', native: 'Good morning (polite — to anyone else)' },
      { target: 'ありがとう / ありがとうございます', native: 'Same pattern: thanks (casual) / thank you (polite)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese phrase to its meaning',
      pairs: [
        { left: 'おはようございます', right: 'Good morning (polite)' },
        { left: 'おはよう', right: 'Morning (casual)' },
        { left: 'はい', right: 'Yes' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the morning greeting to a colleague',
      sentence: 'おはよう_____',
      options: ['ございます', 'ね', 'です'],
      correct: 'ございます',
      context: "You walk into the office at 8am — a senior colleague nods at you. Use the polite form.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji (Romanised Japanese)',
      prompt: 'Good morning (polite form)',
      correct: ['ohayou gozaimasu', 'Ohayou gozaimasu', 'ohayougozaimasu', 'ohayō gozaimasu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Greet a colleague politely — put the words in order',
      words: ['ございます', 'はい、', 'おはよう'],
      correct: ['はい、', 'おはよう', 'ございます'],
      translation: 'Yes, good morning (polite reply)',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 7:30am and your boss says 'おはようございます' to you. What do you say?",
      question: 'Choose the correct response',
      options: [
        { text: 'おはようございます (Ohayou gozaimasu)', correct: true },
        { text: 'おはよう (Ohayou)', correct: false },
        { text: 'こんばんは (Konbanwa)', correct: false },
      ],
      explanation: 'Mirror the politeness back — your boss used the polite form, so you do too. Dropping to casual would feel disrespectful.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — casual form',
      prompt: 'Morning (to a close friend)',
      correct: ['ohayou', 'Ohayou', 'ohayō'],
    },
  ],

  rwenDialogue: {
    intro: "It's Monday, 8:15am at a Tokyo office in Marunouchi. You step out of the lift and your senior colleague is at her desk. Greet her properly.",
    lines: [
      {
        speaker: 'npc',
        target: 'おはようございます',
        native: 'Good morning (polite)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'おはようございます', native: 'Good morning (polite)', correct: true, feedback: 'Perfect — you matched her register exactly. The day starts right.' },
          { target: 'おはよう', native: 'Morning (casual)', correct: false, feedback: "Too casual for the office. Senior colleagues get 'ohayou gozaimasu'." },
          { target: 'こんにちは', native: 'Hello / good afternoon', correct: false, feedback: "It's still morning — 'konnichiwa' kicks in around late morning. Use 'ohayou gozaimasu'." },
        ],
      },
      {
        speaker: 'npc',
        target: '今日もよろしくお願いします',
        native: "Looking forward to working with you today",
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the room — office, senior, polite. That choice signals you understand keigo (敬語), the world of polite speech. She felt respected.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good morning (polite — to a colleague)', correct: ['ohayou gozaimasu', 'Ohayou gozaimasu', 'ohayougozaimasu', 'ohayō gozaimasu'] },
      { prompt: 'Morning (casual — to a friend)', correct: ['ohayou', 'Ohayou', 'ohayō'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'ohayou gozaimasu' out loud once tomorrow morning — even into the mirror. Feel the bow that wants to come with it.",
    rwenSignoff: "Mata ashita — see you tomorrow.",
  },

  phase8: {
    scenario: "It's 8:10am at your Marunouchi office in Tokyo. You step out of the lift and pass your section chief Tanaka-san at the printer. She's been with the company for 20 years; you've been there three weeks. Your opening greeting will set the tone for the entire morning, and dropping to casual would be remembered.",
    rwenRole: "Tanaka-san — section chief, ~50, traditional and observant; she notices register choices instantly and reads them as a signal of how seriously you take the workplace.",
    successCriteria: "User opens with 'ohayou gozaimasu' (NOT casual 'ohayou' — she's senior to you), holds the polite form throughout the brief exchange, and avoids switching to time-wrong greetings like 'konnichiwa' (it's still early morning). A small head-bow gesture in the description is a bonus signal of cultural fit.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
