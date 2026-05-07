import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-dias-de-la-semana',
  module: 6,
  lesson: 4,
  title: 'Días de la semana — Days of the Week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish weekdays come from Roman gods and planets — lunes (Moon), martes (Mars), miércoles (Mercury), jueves (Jupiter), viernes (Venus). Sábado is the Sabbath; domingo is 'the Lord's day'. They're all masculine: 'el lunes' (on Monday) — and lowercase, never capitalised mid-sentence.",
    culturalNote: "In Mexico, Argentina, and Spain the work week runs lunes a viernes; sábado is for shopping, family lunches, fútbol; domingo is for the long sobremesa lunch. Saying 'el viernes' carries the same weight as English 'Friday' — locked in for plans, asados, dinner.",
  },

  chunks: [
    {
      id: 'lunes_martes_miercoles',
      target: 'lunes / martes / miércoles',
      native: 'Monday / Tuesday / Wednesday',
      literal: 'Moon-day, Mars-day, Mercury-day',
      emoji: '📅',
      phonetic: 'LOO-nehs / MAR-tehs / MYEHR-koh-lehs',
      audioRef: null,
    },
    {
      id: 'jueves_viernes',
      target: 'jueves / viernes',
      native: 'Thursday / Friday',
      literal: 'Jupiter-day, Venus-day',
      emoji: '📆',
      phonetic: 'HWEH-vehs / VYEHR-nehs',
      audioRef: null,
    },
    {
      id: 'sabado_domingo',
      target: 'sábado / domingo',
      native: 'Saturday / Sunday',
      literal: 'Sabbath, the-Lord-day',
      emoji: '🎉',
      phonetic: 'SAH-bah-doh / doh-MEEN-goh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "el + day = 'on [day]'; los + day = 'every [day]'",
    explanation: "Spanish drops 'on' — instead use 'el' for a specific day ('el lunes' = on Monday) or 'los' for habitual ('los lunes' = on Mondays / every Monday). Days are masculine and lowercase. Lunes-viernes don't change in plural; sábado/domingo become sábados/domingos.",
    examples: [
      { target: 'el lunes', native: 'on Monday' },
      { target: 'los viernes', native: 'on Fridays / every Friday' },
      { target: 'el domingo voy a comer con la familia', native: 'on Sunday I go to eat with the family' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each day to its English equivalent',
      pairs: [
        { left: 'lunes', right: 'Monday' },
        { left: 'viernes', right: 'Friday' },
        { left: 'domingo', right: 'Sunday' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'on Friday' — specific day, not habit",
      sentence: '_____ viernes voy al cine.',
      options: ['El', 'Los', 'En'],
      correct: 'El',
      context: "On Friday (specific) — use 'el', not 'los' (which would mean every Friday).",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Wednesday',
      correct: ['miércoles', 'Miércoles', 'miercoles'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I work every Monday'?",
      question: 'Choose the correct phrase:',
      options: [
        { text: 'Trabajo los lunes', correct: true },
        { text: 'Trabajo el lunes', correct: false },
        { text: 'Trabajo en lunes', correct: false },
      ],
      explanation: "'Los lunes' = every Monday (habitual). 'El lunes' = this/next Monday (specific). Spanish doesn't use 'on' — el/los carries that meaning.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'On Saturday I rest'",
      words: ['El', 'sábado', 'descanso.'],
      correct: ['El', 'sábado', 'descanso.'],
      translation: 'On Saturday I rest',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'on Friday',
      correct: ['el viernes', 'El viernes'],
    },
  ],

  rwenDialogue: {
    intro: "Your Argentine friend is inviting you to an asado. He wants to lock in a day.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Cuándo hacemos el asado? ¿El sábado o el domingo?',
        native: 'When do we do the asado? Saturday or Sunday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El sábado a las dos. ¿Te parece?', native: 'Saturday at 2. Sound good?', correct: true, feedback: "Specific day + specific time — Argentine asado planning at its cleanest." },
          { target: 'Los sábados', native: 'On Saturdays (every Saturday)', correct: false, feedback: "He's asking about THIS weekend — use 'el sábado' not 'los sábados'." },
          { target: 'Sábado', native: 'Saturday (no article)', correct: false, feedback: "Spanish needs 'el' for 'on Saturday' — 'el sábado a las dos'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "El sábado a las dos — locked in. Asado on Saturday, in Spanish, with the right article.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Friday', correct: ['viernes', 'Viernes'] },
      { prompt: 'Saturday', correct: ['sábado', 'Sábado', 'sabado'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "What day is today in Spanish? Say it out loud: 'Hoy es ___.' What day is tomorrow? 'Mañana es ___.' Then plan one thing for el viernes or el sábado in Spanish.",
    rwenSignoff: "Los días pasan rápido — the days go fast. Hasta mañana.",
  },

  phase8: {
    scenario: "WhatsApp-style scheduling with your Buenos Aires friend Martín to plan an asado. He wants a specific day this week — between lunes and domingo — plus a time. You need to commit in Spanish, using 'el' + day + 'a las' + hour.",
    rwenRole: "Martín — Buenos Aires friend in his early 30s, easy-going asadero who hosts every other weekend; he insists on Spanish for plan-making, expects 'el sábado a las dos' rather than 'Saturday at 2', and will tease you if you say 'los sábados' (every Saturday) when you mean this Saturday.",
    successCriteria: "User commits to a specific day using 'el + lunes/martes/.../domingo' (not 'los' for habitual, not bare 'sábado'), pairs it with 'a las + plural hour' (or 'a la una' for 1pm), and says at least three weekday names correctly with 'el' before them — no English days.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
