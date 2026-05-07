import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-mi-dia',
  module: 8,
  lesson: 10,
  title: 'Mi Día — Describing Your Whole Day',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "From 'me despierto' (I wake up) to 'duermo' (I sleep), every hour of your day exists in Spanish now. This is the module-cap. Today you'll narrate a full day — past, habit, future — using nine of the verbs from this module. Spanish isn't a list of words. It's a life lived in another tense system.",
    culturalNote: "In Mexico City, the day stretches: 9am wake, 2pm comida, 6pm second wind, 10pm dinner. In Madrid: 8am wake, 2:30pm comida, evening paseo at 7pm, 10pm cena. Same verbs, different rhythms. Telling your day in Spanish locks both the language and the timezone into your body.",
  },

  chunks: [
    {
      id: 'todos_los_dias',
      target: 'Todos los días',
      native: 'Every day',
      literal: 'all the days',
      emoji: '🔁',
      phonetic: 'TOH-dos los DEE-as',
      audioRef: null,
    },
    {
      id: 'fue_un_buen_dia',
      target: 'Fue un buen día',
      native: 'It was a good day',
      literal: 'was a good day — preterite of ser',
      emoji: '😊',
      phonetic: 'FWEH oon bwen DEE-ah',
      audioRef: null,
    },
    {
      id: 'maana_voy_a',
      target: 'Mañana voy a...',
      native: "Tomorrow I'm going to...",
      literal: 'tomorrow I-go to- + infinitive',
      emoji: '➡️',
      phonetic: 'mah-NYAH-nah BOY ah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'A full day, three timelines, nine verbs',
    explanation: "A complete Spanish day stitches three tenses: preterite for what happened (me desperté → comí → trabajé → leí → me dormí), present for habits (todos los días me levanto a las siete), and 'voy a + infinitive' for tomorrow (mañana voy a estudiar). Nine verbs — despertarse, levantarse, comer, beber, trabajar, leer, escribir, ver, dormir — woven together is your day.",
    examples: [
      { target: 'Me desperté, comí, trabajé', native: 'I woke, ate, worked' },
      { target: 'Todos los días bebo café', native: 'Every day I drink coffee' },
      { target: 'Mañana voy a estudiar', native: "Tomorrow I'm going to study" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the daily action to its Spanish verb',
      pairs: [
        { left: 'Waking up', right: 'Me desperté' },
        { left: 'Working', right: 'Trabajé' },
        { left: 'Sleeping', right: 'Me dormí' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sequence narrates a Mexico City weekday in correct order, all in preterite?',
      question: 'Morning to night, completed events:',
      options: [
        { text: 'Me desperté → comí → trabajé → leí → me dormí', correct: true },
        { text: 'Me dormí → trabajé → comí → me desperté', correct: false },
        { text: 'Voy a despertar → comí → me dormí → trabajé', correct: false },
      ],
      explanation: "Wake → eat → work → read → sleep. All preterite (-é, -í endings). The middle option scrambles the day; the third mixes tenses incorrectly.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'It was a good day',
      correct: ['Fue un buen día', 'fue un buen día', 'fue un buen dia'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the future plan',
      sentence: 'Mañana _____ a estudiar español.',
      options: ['voy', 'fui', 'iré'],
      correct: 'voy',
      context: "Tomorrow I'm going to study Spanish — near-future ir + a + infinitive.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I woke, ate, and went to work'",
      words: ['Me', 'desperté,', 'comí', 'y', 'fui', 'al', 'trabajo.'],
      correct: ['Me', 'desperté,', 'comí', 'y', 'fui', 'al', 'trabajo.'],
      translation: 'I woke, ate, and went to work',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Every day',
      correct: ['Todos los días', 'todos los días', 'todos los dias'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 9:30pm. WhatsApp video call from your friend Sofía in Mexico City. End of the weekend. She wants the full rundown of your day — and your plan for tomorrow.",
    lines: [
      {
        speaker: 'npc',
        target: 'Cuéntame todo. ¿Qué hiciste hoy y qué vas a hacer mañana?',
        native: 'Tell me everything. What did you do today and what are you doing tomorrow?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me desperté a las nueve, comí con amigos, leí un libro y escribí en mi diario. Fue un buen día. Mañana voy a trabajar y voy a estudiar español por la noche.', native: "I woke at nine, ate with friends, read a book and wrote in my diary. It was a good day. Tomorrow I'm going to work and going to study Spanish at night.", correct: true, feedback: "Six verbs, three timelines, one full day. That's Module 8 fluency. ¡Increíble!" },
          { target: 'Me desperté comí leí escribí.', native: 'I woke ate read wrote.', correct: false, feedback: "A list, not a story. Add details and the future: 'Me desperté a las nueve... fue un buen día. Mañana voy a...' Make it a narrative." },
          { target: 'Voy a hacer todo mañana.', native: "I'm going to do everything tomorrow.", correct: false, feedback: "Sofía asked about today AND tomorrow. Cover both: preterite for today, 'voy a + infinitive' for tomorrow." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Qué día! Yo me desperté tarde y vi tres películas. Mañana también voy a trabajar. ¡Que descanses!',
        native: 'What a day! I woke up late and watched three films. Tomorrow I work too. Rest well!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 8 complete. From 'voy' to 'fue un buen día' — the daily verbs are yours. Module 9 — the city, directions, getting around — comes next.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'It was a good day', correct: ['Fue un buen día', 'fue un buen día', 'fue un buen dia'] },
      { prompt: "Tomorrow I'm going to study", correct: ['Mañana voy a estudiar', 'mañana voy a estudiar', 'manana voy a estudiar'] },
    ],
  },

  mission: {
    title: "Your Module 8 Mission",
    task: "Tonight before bed, narrate your real day in Spanish out loud. 'Me desperté a las... comí... trabajé... leí... fue un buen día. Mañana voy a...' Six verbs minimum. Past, habit, future. Your actual life — in Spanish.",
    rwenSignoff: "Module 8 complete. Verbs are the engine of fluency, and now you have nine. Module 9 — la ciudad, las calles, los caminos — begins next. ¡Hasta mañana!",
  },

  phase8: {
    scenario: "Sunday 9:45pm WhatsApp video call from your friend Sofía in Mexico City. She wants you to narrate your whole Sunday, beginning to end, in Spanish — and then tell her what you're going to do differently tomorrow (Monday morning routine, work, evening). She's holding you accountable to the module: full day, full sentences, no English crutches.",
    rwenRole: "Sofía — Mexico City friend, mid-30s, peer register (tú). Patient, your accountability buddy for Spanish practice. Will gently push back if you skip a verb or default to English.",
    successCriteria: "User narrates the day in chained preterite verbs (at least five: 'me desperté → comí → trabajé/leí → escribí → me dormí'), uses one habit-present sentence ('todos los días bebo café'), AND closes with at least one 'mañana voy a + infinitive' for tomorrow's plan. Reflexive pronouns intact. Three timelines stitched into one narration.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
