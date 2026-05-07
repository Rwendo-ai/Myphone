import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-mulaakaat',
  module: 6,
  lesson: 9,
  title: 'Mulaakaat — Appointments & Scheduling',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "You have numbers, time, and days. Now stitch them together — make plans, confirm meetings, say when you'll arrive. The key word is 'ko' (on/at) — used both for days (somvaar ko = on Monday) and times (paanch baje ko = at 5 o'clock). One small word, a thousand uses.",
    culturalNote: "Indian scheduling has its own rhythm. WhatsApp is the calendar — invitations come as messages, last-minute changes are normal, and 'main aa raha hoon' (I'm coming) often means 'I've left in 30 minutes'. Confirming a specific day AND time in Hindi shows you take the appointment seriously, IST-stretchable or not.",
  },

  chunks: [
    {
      id: 'kab_milenge',
      target: 'कब मिलेंगे?',
      native: 'When shall we meet?',
      literal: 'Kab milenge — when meet-will?',
      emoji: '🤝',
      phonetic: 'KUB mi-LEN-gay',
      audioRef: null,
    },
    {
      id: 'main_aaunga',
      target: 'मैं आऊँगा / आऊँगी',
      native: "I will come (m / f)",
      literal: 'Main aaunga (male speaker), aaungi (female speaker)',
      emoji: '🚗',
      phonetic: 'MAIN aa-OON-gaa / aa-OON-gee',
      audioRef: null,
    },
    {
      id: 'intezaar',
      target: 'मैं इंतज़ार कर रहा / रही हूँ',
      native: "I am waiting (m / f)",
      literal: 'Intezaar karna = to wait',
      emoji: '⏳',
      phonetic: 'in-te-ZAAR KAR ra-HAA / ra-HEE HOON',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Ko" — the appointment connector',
    explanation: "'Ko' marks the time/day for an appointment. Somvaar ko (on Monday). Paanch baje ko (at 5 o'clock). Stack them: 'Somvaar ko paanch baje milenge' = We'll meet on Monday at 5. The verb 'milenge' (we'll meet) and 'aaunga/aaungi' (I'll come) follow naturally. Note the gendered verb — Hindi marks the speaker's gender on -unga / -ungi.",
    examples: [
      { target: 'Somvaar ko milenge.', native: "Let's meet on Monday." },
      { target: 'Main saadhe paanch baje ko aaunga.', native: 'I will come at 5:30.' },
      { target: 'Main intezaar kar raha hoon.', native: 'I am waiting (m).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the scheduling phrase to its meaning',
      pairs: [
        { left: 'Kab milenge?', right: 'When shall we meet?' },
        { left: 'Main aaunga', right: 'I will come (m)' },
        { left: 'Intezaar kar raha hoon', right: 'I am waiting (m)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'on Monday'",
      sentence: 'Somvaar _____ milenge.',
      options: ['ko', 'mein', 'par'],
      correct: 'ko',
      context: "Use the right connector for 'on [day]'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'When shall we meet?',
      correct: ['Kab milenge?', 'kab milenge?', 'Kab milenge', 'kab milenge'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're a male speaker. How do you say 'I will come on Friday at 6 o'clock'?",
      question: 'Pick the correct sentence:',
      options: [
        { text: 'Main shukravaar ko chhe baje aaunga.', correct: true },
        { text: 'Main shukravaar mein chhe baje aaunga.', correct: false },
        { text: 'Main shukravaar ko chhe baje aaungi.', correct: false },
      ],
      explanation: "'Ko' for the day (not 'mein'). 'Aaunga' for male speaker (aaungi for female).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am waiting' (male speaker)",
      words: ['Main', 'intezaar', 'kar', 'raha', 'hoon.'],
      correct: ['Main', 'intezaar', 'kar', 'raha', 'hoon.'],
      translation: 'I am waiting (m)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (full sentence)',
      prompt: "Let's meet on Friday",
      correct: ['Shukravaar ko milenge', 'shukravaar ko milenge', 'Shukravaar ko milenge.', 'shukravaar ko milenge.'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen invites you to her parents' house for dinner. Confirm a specific day and time.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tum kab aaoge? Mummy-Papa intezaar kar rahe hain.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main shukravaar ko saadhe saat baje aaunga.', native: "I will come on Friday at 7:30.", correct: true, feedback: "Day + time + ko + correct verb. The family can prepare." },
          { target: 'Main aaunga', native: "I will come (no day, no time)", correct: false, feedback: "Be specific — 'Main shukravaar ko saadhe saat baje aaunga.'" },
          { target: 'Pata nahin', native: "I don't know", correct: false, feedback: "Pick a day and time! 'Main [day] ko [time] baje aaunga.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bahut accha! Shukravaar saadhe saat baje. Mummy-Papa khush honge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'When shall we meet?', correct: ['Kab milenge?', 'kab milenge?', 'Kab milenge', 'kab milenge'] },
      { prompt: "Let's meet on Monday", correct: ['Somvaar ko milenge', 'somvaar ko milenge', 'Somvaar ko milenge.', 'somvaar ko milenge.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Plan one thing in Hindi today — even something solo. 'Main shukravaar ko paanch baje gym jaaunga' (I'll go to the gym on Friday at 5). Use a day + ko + a time + ko + a verb. Make it real.",
    rwenSignoff: "Plans in Hindi feel committed. Phir milenge.",
  },

  phase8: {
    scenario: "WhatsApp-coordinating a meet-up with your friend Arjun in Bangalore for a weekend trip to Mysore. He keeps sending 'kab?' and 'kitne baje?' until you commit to a specific day AND time in Hindi — and you also need to say where you'll wait if he's late.",
    rwenRole: "Arjun — your peer-age friend in Bangalore, runs late by default; he'll only show up if you give him a Hindi day + time, and he'll bail if you say something vague like 'kal' (tomorrow) without an hour.",
    successCriteria: "User stitches a day (somvaar/shukravaar/etc. ko) AND a clock time (saadhe / sawa / paune + number + baje ko) into one sentence using 'aaunga/aaungi' or 'milenge', and uses 'intezaar' construction at least once if Arjun runs late — no English days, no English times.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
