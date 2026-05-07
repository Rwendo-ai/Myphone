import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-time-baje',
  module: 6,
  lesson: 3,
  title: 'Kitne Baje? — What Time Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time in India is a slippery thing. 'Indian Standard Time' is famously joked about as 'Indian Stretchable Time' — meetings start late, weddings really late. But the language of time is precise: 'baje' is your magic word. Number + baje = it's [number] o'clock.",
    culturalNote: "When coordinating across India and abroad, IST (UTC+5:30) is its own specific time zone — and yes, the half-hour offset trips up everyone. Indians love to specify 'sharp' (sharp samay par) in WhatsApp invites because everyone assumes everything is delayed by default.",
  },

  chunks: [
    {
      id: 'kitne_baje_hain',
      target: 'कितने बजे हैं?',
      native: 'What time is it?',
      literal: 'Kitne baje hain — how-many o-clock are?',
      emoji: '🕐',
      phonetic: 'KIT-nay BAA-jay HAIN',
      audioRef: null,
    },
    {
      id: 'baje',
      target: 'दो बजे / पाँच बजे',
      native: "Two o'clock / Five o'clock",
      literal: 'Number + baje = [number] o-clock',
      emoji: '⏰',
      phonetic: 'DOH BAA-jay / PAANCH BAA-jay',
      audioRef: null,
    },
    {
      id: 'aadha_paune',
      target: 'साढ़े / पौने / सवा',
      native: 'Half past / Quarter to / Quarter past',
      literal: 'Saadhe (half past), Paune (quarter to), Sawa (quarter past)',
      emoji: '⌛',
      phonetic: 'SAA-dhe / POW-nay / SA-vaa',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Modifier] + [number] + baje = the time',
    explanation: "'Baje' is the o'clock word. 'Do baje' = 2 o'clock. For half/quarter, the modifier comes BEFORE the number: 'saadhe do' = half past two (literally 'half-past two'), 'sawa teen' = quarter past three, 'paune chaar' = quarter to four. Watch out: 'derh' = 1:30, 'dhaai' = 2:30 — these two are special words for 1.5 and 2.5.",
    examples: [
      { target: 'Saadhe paanch baje.', native: "It's 5:30 (half past five)." },
      { target: 'Sawa do baje.', native: "It's 2:15 (quarter past two)." },
      { target: 'Paune das baje.', native: "It's 9:45 (quarter to ten)." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the time phrase to its meaning',
      pairs: [
        { left: 'Kitne baje hain?', right: 'What time is it?' },
        { left: 'Saadhe paanch baje', right: '5:30' },
        { left: 'Paune das baje', right: '9:45' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask what time it is',
      sentence: 'Kitne _____ hain?',
      options: ['baje', 'kitne', 'samay'],
      correct: 'baje',
      context: 'You need the current time before your IST video call.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'What time is it?',
      correct: ['Kitne baje hain?', 'kitne baje hain?', 'Kitne baje hain', 'kitne baje hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague messages: 'Call at sawa teen baje IST'. When?",
      question: "Sawa teen baje =",
      options: [
        { text: '3:15', correct: true },
        { text: '2:45', correct: false },
        { text: '3:30', correct: false },
      ],
      explanation: "'Sawa' = quarter past. So sawa teen = quarter past three = 3:15.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'It's half past five'",
      words: ['Saadhe', 'paanch', 'baje.'],
      correct: ['Saadhe', 'paanch', 'baje.'],
      translation: "It's half past five (5:30)",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "It's two o'clock",
      correct: ['Do baje', 'do baje'],
    },
  ],

  rwenDialogue: {
    intro: "You're scheduling a call across time zones. Your Indian colleague needs to know your availability in IST.",
    lines: [
      {
        speaker: 'npc',
        target: 'कितने बजे call करेंगे?',
        native: 'What time will we call?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Saadhe paanch baje IST.', native: '5:30 IST.', correct: true, feedback: "Half past five in clean Hindi. The colleague adds it to the calendar." },
          { target: 'Five thirty.', native: 'Five thirty (in English)', correct: false, feedback: "Try Hindi — 'Saadhe paanch baje' means 5:30." },
          { target: 'Paanch baje', native: '5 o\'clock (sharp, not 5:30)', correct: false, feedback: "Add 'saadhe' for the half — 'saadhe paanch baje' = 5:30." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Saadhe paanch baje. You scheduled an IST call in Hindi. The diaspora respects this.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What time is it?', correct: ['Kitne baje hain?', 'kitne baje hain?', 'Kitne baje hain', 'kitne baje hain'] },
      { prompt: "It's 5:30 (half past five)", correct: ['Saadhe paanch baje', 'saadhe paanch baje'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every hour today, say the time in Hindi to yourself: 'Saadhe das baje', 'gyarah baje'. Set one IST-aware reminder using a Hindi time phrase like 'sawa teen baje'.",
    rwenSignoff: "Time is just numbers + baje. You can already tell time. Phir milenge.",
  },

  phase8: {
    scenario: "Coordinating a video call between Bangalore (IST) and your home time zone over WhatsApp. Your Bangalore-based colleague keeps proposing times in Hindi using saadhe/sawa/paune — you need to confirm a slot and repeat the time back in Hindi without translating to English digits.",
    rwenRole: "Priya — your Bangalore colleague in her early 30s, fluent in English but coaching you in Hindi this week; she'll only accept a Hindi confirmation, and she tests whether you can distinguish 'sawa do' (2:15) from 'paune do' (1:45).",
    successCriteria: "User asks 'kitne baje?' to clarify, repeats at least one specific time back using saadhe/sawa/paune + number + baje (e.g. 'saadhe chaar baje IST'), and never confuses sawa (quarter past) with paune (quarter to) in the final confirmed slot.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
