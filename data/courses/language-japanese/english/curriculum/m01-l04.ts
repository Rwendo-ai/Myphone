import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-hajimemashite',
  module: 1,
  lesson: 4,
  title: 'Hajimemashite — Pleased to Meet You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "First meetings in Japan have a script. Not a suggestion — an actual script that everyone knows. Hajimemashite. Yoroshiku onegaishimasu. Two phrases, used together, almost every time. Learn them and you'll never freeze on a first introduction again.",
    culturalNote: "'Hajimemashite' (はじめまして) literally means 'for the first time' and is reserved EXCLUSIVELY for the first time you meet someone. Saying it the second time would be strange — almost like forgetting them. It pairs ritualistically with 'yoroshiku onegaishimasu' which roughly means 'please treat me well' and frames the new relationship.",
  },

  chunks: [
    {
      id: 'hajimemashite',
      target: 'はじめまして',
      native: 'Pleased to meet you (first time only)',
      literal: 'hajimemashite — for the first time',
      emoji: '🤝',
      phonetic: 'ha-ji-meh-MASH-teh',
      audioRef: null,
    },
    {
      id: 'yoroshiku',
      target: 'よろしくお願いします',
      native: 'Pleased to make your acquaintance / please treat me kindly',
      literal: 'yoroshiku onegaishimasu — well, I humbly request',
      emoji: '🙇',
      phonetic: 'yo-ro-SHI-koo oh-neh-gai-shi-mas',
      audioRef: null,
    },
    {
      id: 'kochira_koso',
      target: 'こちらこそ',
      native: 'Likewise / the same to you',
      literal: 'kochira koso — this side, exactly',
      emoji: '↔️',
      phonetic: 'ko-chi-ra KOH-so',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The first-meeting script',
    explanation: "Japanese gives you a fixed three-line script for almost every introduction. You say 'hajimemashite', then your name, then 'yoroshiku onegaishimasu'. The other person echoes 'kochira koso yoroshiku onegaishimasu' — 'likewise'. It's a verbal handshake.",
    examples: [
      { target: 'はじめまして', native: '1. Pleased to meet you (first-time)' },
      { target: '田中です (Tanaka desu)', native: '2. I am Tanaka (your name + desu)' },
      { target: 'よろしくお願いします', native: '3. Please treat me kindly' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'はじめまして', right: 'Pleased to meet you (first time)' },
        { left: 'よろしくお願いします', right: 'Please treat me kindly' },
        { left: 'こちらこそ', right: 'Likewise / same to you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the introduction script',
      sentence: 'はじめまして。田中です。_____お願いします',
      options: ['よろしく', 'こんにちは', 'ありがとう'],
      correct: 'よろしく',
      context: "You're introducing yourself for the first time at a business meeting.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Pleased to meet you (first time only)',
      correct: ['hajimemashite', 'Hajimemashite'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You met your colleague Suzuki-san for the first time last week. You see her again this morning. Do you say "hajimemashite"?',
      question: 'Is "hajimemashite" appropriate here?',
      options: [
        { text: 'No — it\'s only for the FIRST meeting; use "ohayou gozaimasu" instead', correct: true },
        { text: 'Yes — say it every time you see her', correct: false },
        { text: 'Yes, but only in the morning', correct: false },
      ],
      explanation: "'Hajimemashite' is strictly for first meetings. After that, switch to time-of-day greetings — 'ohayou gozaimasu', 'konnichiwa', 'konbanwa'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite "please treat me kindly"',
      words: ['お願いします', 'よろしく'],
      correct: ['よろしく', 'お願いします'],
      translation: 'Please treat me kindly / pleased to make your acquaintance',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Likewise / the same to you',
      correct: ['kochira koso', 'Kochira koso', 'kochirakoso'],
    },
  ],

  rwenDialogue: {
    intro: "You're at your first day in a new Tokyo office. Your section chief is introducing you to a senior colleague you've never met. They turn to face you, slight bow ready.",
    lines: [
      {
        speaker: 'npc',
        target: 'はじめまして。鈴木です。よろしくお願いします',
        native: "Pleased to meet you. I'm Suzuki. Please treat me kindly.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'はじめまして。よろしくお願いします', native: 'Pleased to meet you. Please treat me kindly.', correct: true, feedback: "Perfect — you ran the script back to him. Both of you bowed. The introduction is complete." },
          { target: 'こんにちは', native: 'Hello / good afternoon', correct: false, feedback: "It's a first meeting — 'hajimemashite' is the script-opener, not a generic greeting." },
          { target: 'おはようございます', native: 'Good morning', correct: false, feedback: "Skip the time-of-day greeting on first meetings. The opener is 'hajimemashite'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'こちらこそ、よろしくお願いします',
        native: 'Likewise, please treat me kindly',
      },
      {
        speaker: 'rwen',
        rwenLine: "Both of you said 'yoroshiku onegaishimasu'. Both of you bowed. The relationship is officially open. From tomorrow, you switch to 'ohayou gozaimasu' — never 'hajimemashite' again with him.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Pleased to meet you (first time only)', correct: ['hajimemashite', 'Hajimemashite'] },
      { prompt: 'Please treat me kindly (the second half of the intro script)', correct: ['yoroshiku onegaishimasu', 'Yoroshiku onegaishimasu', 'yoroshikuonegaishimasu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you meet someone new this week — anyone — say 'hajimemashite' in your head before you say their language's hello. Practice the script silently, ready for when you'll need it.",
    rwenSignoff: "Yoroshiku onegaishimasu. Mata ashita.",
  },

  phase8: {
    scenario: "It's your first day at a new Tokyo office in Otemachi. Your section chief is walking you between desks, introducing you to senior colleagues you've never met. You stop in front of Suzuki-san, the senior engineer who'll be on your team. He stands, slight bow ready, and runs the introduction script. You need to run it back, bow appropriately, and exchange names — all under the watchful eye of the section chief who's evaluating your fit.",
    rwenRole: "Suzuki-san — senior engineer, ~45, formal and watchful; he'll judge whether you understand that first-meetings have a script in Japan or whether you'll improvise (and fumble).",
    successCriteria: "User opens with 'hajimemashite' (NOT 'konnichiwa' or 'ohayou' — it's a first meeting, the time-of-day greeting is wrong here), gives their own name in '[Name] desu' form, closes with 'yoroshiku onegaishimasu', and matches Suzuki-san's bow rather than going for a handshake.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
