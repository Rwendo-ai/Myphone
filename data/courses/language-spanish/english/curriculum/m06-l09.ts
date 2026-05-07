import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-citas-y-horarios',
  module: 6,
  lesson: 9,
  title: 'Citas y horarios — Appointments & Scheduling',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You have numbers, time, days, dates. Now stitch them into real plans. Spanish uses 'a las' for 'at [hour]' and 'el [día]' for 'on [day]' — so 'el viernes a las ocho' is Friday at 8. For future actions: 'voy a + infinitive' (I'm going to). One sentence, one plan, locked in.",
    culturalNote: "Latin American time is famously flexible — but professional time, especially for Zoom calls and doctor appointments, runs strict. Mexican and Argentine offices usually run on the dot for video meetings; social asados drift 30-60 minutes late. Knowing 'puntual' (on time) versus 'sobre las ocho' (around 8) tells you which culture you're in.",
  },

  chunks: [
    {
      id: 'voy_a',
      target: 'Voy a + [infinitive]',
      native: 'I am going to [do something]',
      literal: 'I-go to + verb — near-future tense',
      emoji: '🚗',
      phonetic: 'voy ah',
      audioRef: null,
    },
    {
      id: 'nos_vemos',
      target: 'Nos vemos',
      native: 'See you / See you then',
      literal: 'We see-each-other — universal sign-off',
      emoji: '👋',
      phonetic: 'nohs VEH-mohs',
      audioRef: null,
    },
    {
      id: 'a_las_el',
      target: 'el [día] a las [hora]',
      native: 'on [day] at [hour]',
      literal: 'el-day a-las-hour: the standard scheduling spine',
      emoji: '📅⏰',
      phonetic: 'ehl ___ ah lahs ___',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Voy a + verb (going to do); el [day] a las [hour] (on day at hour)",
    explanation: "Near future is just 'voy a' + the infinitive: voy a llegar (I'm going to arrive), voy a comer (I'm going to eat). Combine with 'el [día] a las [hora]' to lock in plans. 'Voy a llegar el viernes a las ocho' = I'll arrive Friday at 8. 'Nos vemos' is the catch-all closer.",
    examples: [
      { target: 'Voy a llegar a las ocho', native: "I'll arrive at 8" },
      { target: 'Nos vemos el viernes', native: 'See you Friday' },
      { target: 'La reunión es el lunes a las tres', native: 'The meeting is Monday at 3' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the scheduling phrase to its meaning',
      pairs: [
        { left: 'Voy a llegar', right: "I'm going to arrive" },
        { left: 'Nos vemos', right: 'See you' },
        { left: 'a las ocho', right: 'at 8' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Lock in the time',
      sentence: 'Voy a llegar _____ las ocho.',
      options: ['a', 'en', 'de'],
      correct: 'a',
      context: "At 8 — uses 'a' before 'las'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'See you Friday',
      correct: ['Nos vemos el viernes', 'nos vemos el viernes'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I'm going to call you on Monday at 3'?",
      question: 'Choose the correct phrase:',
      options: [
        { text: 'Voy a llamarte el lunes a las tres', correct: true },
        { text: 'Voy llamarte el lunes a tres', correct: false },
        { text: 'Voy a llamarte en lunes en tres', correct: false },
      ],
      explanation: "The pattern is 'voy a + infinitive' + 'el [día]' + 'a las [hora]'. Don't drop the 'a' after voy, and don't use 'en' for either day or time.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'll arrive on Friday at 7'",
      words: ['Voy', 'a', 'llegar', 'el', 'viernes', 'a', 'las', 'siete.'],
      correct: ['Voy', 'a', 'llegar', 'el', 'viernes', 'a', 'las', 'siete.'],
      translation: "I'll arrive on Friday at 7",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'See you',
      correct: ['Nos vemos', 'nos vemos'],
    },
  ],

  rwenDialogue: {
    intro: "Scheduling a Zoom call between Mexico City and Buenos Aires. Two timezones, one slot.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Cuándo nos podemos conectar para el Zoom?',
        native: 'When can we connect for the Zoom?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El jueves a las cuatro, hora de México. ¿Te queda?', native: 'Thursday at 4, Mexico time. Works for you?', correct: true, feedback: "Day + hour + timezone, all in one shot. That's professional Spanish scheduling." },
          { target: 'Jueves cuatro', native: 'Thursday four (no articles)', correct: false, feedback: "Articles matter — 'el jueves a las cuatro'. Without them you sound like a robot." },
          { target: 'Thursday at 4', native: '(in English)', correct: false, feedback: "Spanish — 'el jueves a las cuatro'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Perfecto. Nos vemos.',
        native: 'Perfect. See you.',
      },
      {
        speaker: 'rwen',
        rwenLine: "El jueves a las cuatro — locked in across two timezones, all in Spanish. Real-life scheduling, real-life win.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'See you', correct: ['Nos vemos', 'nos vemos'] },
      { prompt: "I'm going to arrive (start of phrase)", correct: ['Voy a llegar', 'voy a llegar'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Plan one thing today in Spanish — even silently. 'Voy a [verb] el [día] a las [hora].' Then add 'Nos vemos.' Even mental Spanish builds the muscle.",
    rwenSignoff: "Los planes hechos en español se sienten reales — plans made in Spanish feel real. Hasta mañana.",
  },

  phase8: {
    scenario: "Coordinating a Zoom call across three timezones — you're in the US, your colleague is in Mexico City, and a teammate is in Madrid. You need to propose a specific day and time, clarify whose timezone you're using, and close with 'Nos vemos' — all in Spanish, with 'voy a + infinitive' for any future actions you commit to.",
    rwenRole: "Sofía — Mexico City product manager, mid-30s, organised; she runs scheduling in Spanish, expects 'el [día] a las [hora]' with both articles, asks about 'hora de México o de Madrid' if you skip the timezone, and signs off with 'Nos vemos'.",
    successCriteria: "User proposes a meeting using 'el [día] a las [hora]' (both 'el' and 'a las' present), clarifies the timezone in Spanish ('hora de México' or 'hora de Madrid'), uses 'voy a + infinitive' at least once for what they'll do (voy a enviar / voy a llamar), and closes with 'Nos vemos' — no English days, hours, or sign-off.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
