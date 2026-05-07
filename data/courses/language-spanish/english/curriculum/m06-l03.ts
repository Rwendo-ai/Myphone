import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-que-hora-es',
  module: 6,
  lesson: 3,
  title: '¿Qué hora es? — Telling Time',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish has one quirk English doesn't: 1 o'clock is singular ('Es la una') and everything else is plural ('Son las dos, son las tres'). Why? Because 'la una' is one HOUR and the rest are HOURS — plural. Once you hear it, you'll never forget.",
    culturalNote: "Latin America runs on a softer time culture than Anglophone countries — 'a las ocho' often means 'around eight, give or take'. But asking the time precisely — '¿Qué hora es?' — is still essential for buses, work, doctor appointments, and Zoom calls across timezones.",
  },

  chunks: [
    {
      id: 'que_hora_es',
      target: '¿Qué hora es?',
      native: 'What time is it?',
      literal: 'What hour is-it?',
      emoji: '🕐',
      phonetic: 'keh OH-rah ehs',
      audioRef: null,
    },
    {
      id: 'es_la_una_son_las',
      target: 'Es la una / Son las dos',
      native: "It's one o'clock / It's two o'clock",
      literal: 'Is the-one / Are the-two — singular for 1, plural from 2',
      emoji: '⏰',
      phonetic: 'ehs lah OO-nah / sohn lahs dohs',
      audioRef: null,
    },
    {
      id: 'y_media_y_cuarto',
      target: 'y media / y cuarto',
      native: 'half past / quarter past',
      literal: 'and half / and quarter',
      emoji: '🕝🕑',
      phonetic: 'ee MEH-dyah / ee KWAR-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser for time: Es la una (1) but Son las + plural (2+)',
    explanation: "Time uses the verb 'ser' (to be) — 'es' for one o'clock, 'son' for everything else. 'Es la una y media' (1:30). 'Son las tres y cuarto' (3:15). For half past, use 'y media'; for quarter past, 'y cuarto'; for quarter to, 'menos cuarto'.",
    examples: [
      { target: 'Es la una', native: "It's 1 o'clock" },
      { target: 'Son las tres y media', native: "It's 3:30" },
      { target: 'Son las cinco menos cuarto', native: "It's 4:45 (5 minus a quarter)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish time phrase to its meaning',
      pairs: [
        { left: '¿Qué hora es?', right: 'What time is it?' },
        { left: 'Es la una', right: "It's 1 o'clock" },
        { left: 'Son las dos', right: "It's 2 o'clock" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the singular/plural rule',
      sentence: '_____ las cinco y media.',
      options: ['Son', 'Es', 'Está'],
      correct: 'Son',
      context: "Five-thirty — uses plural because it's not 1 o'clock.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What time is it?',
      correct: ['¿Qué hora es?', 'Qué hora es?', '¿Qué hora es', 'qué hora es?', 'Que hora es?'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'It's 1:00'?",
      question: "It's 1 o'clock:",
      options: [
        { text: 'Es la una', correct: true },
        { text: 'Son la una', correct: false },
        { text: 'Son las una', correct: false },
      ],
      explanation: "One is the only singular hour — 'Es la una'. Everything else uses 'Son las...' because two hours, three hours, etc. are plural.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'It's 3:30'",
      words: ['Son', 'las', 'tres', 'y', 'media.'],
      correct: ['Son', 'las', 'tres', 'y', 'media.'],
      translation: "It's 3:30",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "It's 2 o'clock",
      correct: ['Son las dos', 'son las dos'],
    },
  ],

  rwenDialogue: {
    intro: "You're scheduling a Zoom call with a colleague in Madrid. You need to confirm the time across timezones.",
    lines: [
      {
        speaker: 'npc',
        target: 'La reunión es a las cuatro y media, ¿sí?',
        native: 'The meeting is at 4:30, right?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, a las cuatro y media. Hora de Madrid, ¿verdad?', native: 'Yes, at 4:30. Madrid time, right?', correct: true, feedback: "Confirmed the time AND the timezone. Zoom calls across borders need both — perfect." },
          { target: 'Son las cuatro', native: "It's 4 o'clock", correct: false, feedback: "You're confirming a future time, not stating now — say 'a las cuatro y media' (at 4:30)." },
          { target: 'Yes, 4:30', native: '(in English)', correct: false, feedback: "Stay in Spanish — 'Sí, a las cuatro y media'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A las cuatro y media — ser locks the time, the timezone is locked. Meeting set in Spanish.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "What time is it?", correct: ['¿Qué hora es?', 'Qué hora es?', '¿Qué hora es', 'qué hora es?', 'Que hora es?'] },
      { prompt: "It's 1 o'clock", correct: ['Es la una', 'es la una'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every hour today, say the time in Spanish — even silently. 'Es la una' at 1pm, 'Son las dos' at 2pm, 'Son las tres y media' at 3:30. The pattern lives in repetition.",
    rwenSignoff: "El tiempo es oro — time is gold. Hasta mañana.",
  },

  phase8: {
    scenario: "Late afternoon, scheduling a Zoom call between Mexico City (your contact) and Madrid (a third teammate). You need to ask '¿Qué hora es?' to confirm the current time, propose a meeting hour using 'a las + plural' (or 'a la una' if 1pm), and clarify which timezone — all in Spanish.",
    rwenRole: "Sofía — Mexico City product manager, mid-30s, organised and direct; she runs the call in Spanish, expects 'a las cuatro y media' rather than '4:30 PM', and will ask 'hora de Madrid o de México?' if you don't volunteer the timezone.",
    successCriteria: "User opens with '¿Qué hora es?' to anchor the current time, proposes the meeting using 'a las + número' (with 'a la una' if 1pm — singular, not plural), uses 'y media' or 'y cuarto' for half-past or quarter, and clarifies timezone in Spanish ('hora de México').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
