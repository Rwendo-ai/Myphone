import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-comer',
  module: 8,
  lesson: 3,
  title: 'Comer — To Eat',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Comer is your first regular -er verb. After all the irregular ones (ir, venir), comer is a relief: como, comes, come, comemos, coméis, comen. Memorise that ending pattern once and you've got hundreds of -er verbs — beber, leer, aprender, vender — all using the exact same endings.",
    culturalNote: "'Comer' in Spain often means lunch specifically — the big meal between 2pm and 4pm. In Mexico, 'comida' is the midday meal. 'La cena' is dinner. So '¿Vamos a comer?' at 2pm means 'shall we go for lunch?' — it's not a generic 'let's eat'. Different country, different mealtime, same verb.",
  },

  chunks: [
    {
      id: 'como',
      target: 'Como',
      native: 'I eat',
      literal: '(yo) como — regular -er verb, 1st person',
      emoji: '🍽️',
      phonetic: 'KOH-moh',
      audioRef: null,
    },
    {
      id: 'comemos',
      target: 'Comemos',
      native: 'We eat',
      literal: '(nosotros) comemos — 1st person plural',
      emoji: '👥',
      phonetic: 'koh-MEH-mos',
      audioRef: null,
    },
    {
      id: 'comi',
      target: 'Comí',
      native: 'I ate',
      literal: '(yo) comí — preterite (single completed event)',
      emoji: '✅',
      phonetic: 'koh-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Regular -er endings — present and preterite',
    explanation: "Present: -o, -es, -e, -emos, -éis, -en (como, comes, come, comemos, coméis, comen). Preterite: -í, -iste, -ió, -imos, -isteis, -ieron (comí, comiste, comió...). Once you can chant those two rows, every regular -er verb in Spanish is yours. The accent on -í, -ió matters — it's how you tell preterite from present.",
    examples: [
      { target: 'Como a las dos', native: 'I eat at two' },
      { target: 'Comemos en casa', native: 'We eat at home' },
      { target: 'Comí paella ayer', native: 'I ate paella yesterday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form of comer to its meaning',
      pairs: [
        { left: 'Como', right: 'I eat' },
        { left: 'Comemos', right: 'We eat' },
        { left: 'Comí', right: 'I ate (preterite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the preterite',
      sentence: 'Ayer _____ paella en Valencia.',
      options: ['comí', 'como', 'comeré'],
      correct: 'comí',
      context: 'Yesterday I ate paella in Valencia.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'We eat at two',
      correct: ['Comemos a las dos', 'comemos a las dos'],
    },
    {
      type: 'multiple_choice',
      instruction: "Mid-afternoon in Madrid, a friend asks '¿Has comido?' — meaning have you had lunch. You ate at 2pm. What's the natural reply?",
      question: 'Reply that you already ate:',
      options: [
        { text: 'Sí, comí a las dos.', correct: true },
        { text: 'Sí, como a las dos.', correct: false },
        { text: 'Sí, voy a comer.', correct: false },
      ],
      explanation: "'Comí' (preterite) marks a single completed past action — exactly what you want for 'I ate at two'. 'Como' would say 'I eat at two' (habit). 'Voy a comer' is future.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I ate with my colleagues'",
      words: ['Comí', 'con', 'mis', 'compañeros.'],
      correct: ['Comí', 'con', 'mis', 'compañeros.'],
      translation: 'I ate with my colleagues',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I eat (habitually)',
      correct: ['Como', 'como'],
    },
  ],

  rwenDialogue: {
    intro: "Friday 3:15pm in the office canteen at your job in Polanco, Mexico City. Your coworker Andrés walks in late carrying tupperware.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Ya comiste?',
        native: 'Have you eaten already?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, comí a las dos. ¿Y tú?', native: 'Yes, I ate at two. And you?', correct: true, feedback: "Preterite for the single completed lunch + a return question. Conversation flows." },
          { target: 'Sí, como ahora.', native: 'Yes, I eat now.', correct: false, feedback: "'Como' is present habit. He asked about today's lunch — use 'Comí a las dos.'" },
          { target: 'Sí, voy a comer.', native: "Yes, I'm going to eat.", correct: false, feedback: "That's future. He asked if you'd already eaten. 'Sí, comí a las dos' is the right tense." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yo no, voy a comer ahora. ¡Buen provecho!',
        native: "I haven't, I'm about to eat. Enjoy what you had!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Como vs comí — one letter, one accent, completely different time. Master the accent and the past opens up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I eat (present habit)', correct: ['Como', 'como'] },
      { prompt: 'I ate (preterite)', correct: ['Comí', 'comí', 'comi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "At lunch today, narrate it three ways: before — 'Voy a comer.' During — 'Como ahora.' After — 'Comí a las...' Three tenses, one meal.",
    rwenSignoff: "Como. Comí. Comeré. The meal in three timelines. ¡Buen provecho!",
  },

  phase8: {
    scenario: "Friday 3:30pm at the office canteen in Polanco, Mexico City. Your coworker Andrés joins you at the table with his tupperware and asks about your lunch — what you ate today, where you usually eat during the week, and whether you'll go out for tacos with the team tonight.",
    rwenRole: "Andrés — Mexico City coworker, late 20s, peer register (tú). Foodie, talks about meals constantly, will quiz you on Mexican lunch vocabulary if you're game.",
    successCriteria: "User uses 'comí' (preterite) for what they ate today, 'como' (present habit) for usual weekday lunch, and 'voy a comer' for tonight's planned tacos. Three distinct tense forms in the reply, no English code-switching for the verbs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
