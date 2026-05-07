import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-ver-mirar',
  module: 8,
  lesson: 7,
  title: 'Ver & Mirar — See and Watch',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "English uses 'see' for both passive sight and intentional watching. Spanish splits them. Ver — to see, to perceive, often automatic ('te veo', I see you). Mirar — to look at, to watch, deliberate ('miro la tele', I watch TV). Get this distinction wrong and natives won't misunderstand — but they'll know you're translating from English.",
    culturalNote: "'Te veo' is a casual sign-off in Mexico City and Madrid alike — 'see you'. 'Te miro' would be creepy ('I'm watching you'). For films and TV, always 'mirar' (or 've una película' in some regions — Spanish breathes in dialect). The split between ver and mirar mirrors the split in life: what reaches you vs what you choose to focus on.",
  },

  chunks: [
    {
      id: 'veo',
      target: 'Veo',
      native: 'I see',
      literal: '(yo) veo — ver, irregular yo',
      emoji: '👁️',
      phonetic: 'BEH-oh',
      audioRef: null,
    },
    {
      id: 'miro',
      target: 'Miro',
      native: 'I watch / I look at',
      literal: '(yo) miro — regular -ar, deliberate watching',
      emoji: '👀',
      phonetic: 'MEE-roh',
      audioRef: null,
    },
    {
      id: 'vi',
      target: 'Vi',
      native: 'I saw',
      literal: 'preterite of ver — single completed event',
      emoji: '✅',
      phonetic: 'BEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Preterite vs imperfect — the Spanish past has two flavours',
    explanation: "English has 'I saw' and 'I was seeing' / 'I used to see'. Spanish has TWO past tenses: preterite (vi — single completed action) and imperfect (veía — habitual or ongoing past). 'Vi una película anoche' (I saw a movie last night — done). 'Veía películas todos los domingos' (I used to watch movies every Sunday — habit). This distinction is one of the hardest things in Spanish, and one of the most rewarding when it clicks.",
    examples: [
      { target: 'Vi a Pablo ayer', native: 'I saw Pablo yesterday (one event)' },
      { target: 'Cuando era niño, veía dibujos', native: 'When I was a kid, I used to watch cartoons (habit)' },
      { target: 'Miro la tele cada noche', native: 'I watch TV every night' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its meaning',
      pairs: [
        { left: 'Veo', right: 'I see' },
        { left: 'Miro', right: 'I watch / look at' },
        { left: 'Vi', right: 'I saw (preterite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right past tense — habit or single event?',
      sentence: 'De pequeño, _____ dibujos cada sábado.',
      options: ['veía', 'vi', 'veo'],
      correct: 'veía',
      context: 'As a kid, I used to watch cartoons every Saturday — recurring habit, so imperfect.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I saw a movie last night',
      correct: ['Vi una película anoche', 'vi una película anoche', 'vi una pelicula anoche'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You want to say "I watch TV every night". Which verb fits?',
      question: 'Watching TV deliberately:',
      options: [
        { text: 'Miro la tele cada noche.', correct: true },
        { text: 'Veo a la tele cada noche.', correct: false },
        { text: 'Vi la tele cada noche.', correct: false },
      ],
      explanation: "'Mirar' is for deliberate watching. 'Ver' works in some regions for TV but 'mirar' is safer everywhere. 'Vi' would be preterite — a single completed event.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I saw your message yesterday'",
      words: ['Vi', 'tu', 'mensaje', 'ayer.'],
      correct: ['Vi', 'tu', 'mensaje', 'ayer.'],
      translation: 'I saw your message yesterday',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (casual goodbye)',
      prompt: 'See you',
      correct: ['Te veo', 'te veo', 'Nos vemos', 'nos vemos'],
    },
  ],

  rwenDialogue: {
    intro: "Friday 9pm WhatsApp message from your friend Sofía in Mexico City. She's curious about your weekend plans.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Viste la nueva serie? Y dime, de niño, ¿qué veías los sábados?',
        native: 'Did you see the new series? And tell me, as a kid, what did you watch on Saturdays?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Vi dos episodios anoche. De niño veía dibujos animados cada sábado.', native: 'I watched two episodes last night. As a kid I used to watch cartoons every Saturday.', correct: true, feedback: "Preterite for the single weekend act, imperfect for the childhood habit. That's the past split working." },
          { target: 'Veía dos episodios anoche.', native: 'I used to watch two episodes last night.', correct: false, feedback: "Imperfect for last night sounds wrong — that was one specific evening. Use 'vi' (preterite). Save 'veía' for childhood habit." },
          { target: 'Vi dibujos cada sábado.', native: 'I watched cartoons every Saturday (preterite).', correct: false, feedback: "'Cada sábado' = recurring habit, that wants imperfect: 'veía dibujos cada sábado'." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Qué nostalgia! Yo veía Dragon Ball cada domingo.',
        native: 'So nostalgic! I used to watch Dragon Ball every Sunday.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Vi vs veía. One time vs every time. The Spanish past splits — and English speakers feel the difference for the first time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I saw (single event)', correct: ['Vi', 'vi'] },
      { prompt: 'I watch / I look at', correct: ['Miro', 'miro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight pick a film or show. Before pressing play say 'Voy a ver una película'. After say 'Vi una película'. Tomorrow if you tell someone 'cada noche miro algo en Netflix' — congratulations, you've used habit-imperfect adjacent. Past splits real life.",
    rwenSignoff: "Vi. Veía. Two pasts, one Spanish. ¡Buen camino!",
  },

  phase8: {
    scenario: "Friday 10pm, WhatsApp voice note from your friend Sofía in Mexico City. She wants to know what you watched recently and what you used to watch as a kid — she's nostalgic and asking everyone in her group chat the same question.",
    rwenRole: "Sofía — Mexico City friend, mid-30s, peer register (tú). Loves talking about TV, will push you to use both pasts correctly when you tell stories.",
    successCriteria: "User uses 'vi' (preterite) for at least one specific recent watching event AND 'veía' (imperfect) for at least one childhood habit. The contrast between completed-once vs used-to is clearly marked. Bonus if 'mirar' shows up for deliberate current watching ('miro la tele cada noche').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
