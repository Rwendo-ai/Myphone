import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-donde-esta',
  module: 2,
  lesson: 8,
  title: '¿Dónde está...? — Where Is...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lost is a feeling everyone has had. In Spanish, '¿dónde está?' is the magic phrase — it works for places, things, and people. Pair it with the right noun and you can find anything.",
    culturalNote: "Latin Americans tend to be generous with directions — sometimes too generous. You'll get hand gestures, landmarks, sometimes a personal escort half a block. Don't be surprised by 'derecho' (straight ahead) and 'a la derecha' (to the right) sounding similar — locals know which is which from context. If someone says 'aquí cerca' (close to here), they might mean five blocks. Calibrate.",
  },

  chunks: [
    {
      id: 'donde_esta',
      target: '¿Dónde está...?',
      native: 'Where is...?',
      literal: 'Where is',
      emoji: '🗺️',
      phonetic: 'DON-deh es-TAH',
      audioRef: null,
    },
    {
      id: 'el_bano',
      target: 'el baño',
      native: 'the bathroom / restroom',
      literal: 'the bath',
      emoji: '🚻',
      phonetic: 'el BAH-nyo',
      audioRef: null,
    },
    {
      id: 'derecho',
      target: 'derecho / a la derecha',
      native: 'straight ahead / to the right',
      literal: 'straight / to the right',
      emoji: '↗️',
      phonetic: 'deh-REH-cho / ah lah deh-REH-chah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '¿Dónde está + el / la + noun?',
    explanation: "'¿Dónde está...?' takes any noun with its article. Masculine nouns use 'el' (el baño, el banco, el hotel); feminine use 'la' (la estación, la farmacia, la salida). Get the article wrong and locals still understand — but matching it makes you sound like a learner doing the work.",
    examples: [
      { target: '¿Dónde está el baño?', native: 'Where is the bathroom?' },
      { target: '¿Dónde está la estación?', native: 'Where is the station?' },
      { target: '¿Dónde está el hotel?', native: 'Where is the hotel?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '¿Dónde está...?', right: 'Where is...?' },
        { left: 'el baño', right: 'the bathroom' },
        { left: 'a la derecha', right: 'to the right' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask where the bathroom is',
      sentence: '¿Dónde está _____ baño?',
      options: ['el', 'la', 'un'],
      correct: 'el',
      context: 'Baño is masculine — pick the matching article.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Where is the bathroom?',
      correct: ['¿Dónde está el baño?', '¿dónde está el baño?', 'Dónde está el baño?', 'dónde está el baño', 'donde esta el bano'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a bus station and need to find the exit. Which question gets you there?",
      question: 'Choose the right phrasing',
      options: [
        { text: '¿Dónde está la salida?', correct: true },
        { text: '¿Dónde está el salida?', correct: false },
        { text: '¿Dónde está salida?', correct: false },
      ],
      explanation: "'Salida' (exit) is feminine, so the article is 'la': '¿Dónde está la salida?'. Skipping the article entirely or using the wrong one both sound off.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Where is the hotel?"',
      words: ['hotel?', 'el', '¿Dónde', 'está'],
      correct: ['¿Dónde', 'está', 'el', 'hotel?'],
      translation: 'Where is the hotel?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Straight ahead',
      correct: ['Derecho', 'derecho'],
    },
  ],

  rwenDialogue: {
    intro: "You've just stepped off the Metro at Plaza de Mayo in Buenos Aires and need to find the Casa Rosada. A vendor at a kiosko is right there.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, ¿dónde está la Casa Rosada?', native: 'Excuse me, where is the Casa Rosada?', correct: true, feedback: "Polite opener + clear question. He points without missing a beat." },
          { target: '¿Dónde está Casa Rosada?', native: 'Where is Casa Rosada?', correct: false, feedback: "Almost — but proper places usually take their article. 'La Casa Rosada' sounds local. Also lead with 'disculpe' (excuse me) for warmth." },
          { target: 'Casa Rosada', native: 'Casa Rosada', correct: false, feedback: "Just naming the place isn't a question. Open with 'Disculpe, ¿dónde está...?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Está acá nomás. Derecho, una cuadra, y a la derecha la ves.',
        native: "It's right here. Straight ahead, one block, and you see it to the right.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muchas gracias. Qué amable.', native: 'Thank you very much. How kind.', correct: true, feedback: "Warm close. He gives a nod and tells you to enjoy your visit." },
          { target: 'No entiendo', native: "I don't understand", correct: false, feedback: "Only say that if you genuinely missed it — and you didn't. He gave you 'derecho, una cuadra, a la derecha' clearly." },
          { target: 'Sí', native: 'Yes', correct: false, feedback: "Doesn't close the loop. Say thanks — 'muchas gracias' — before walking off." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Open with 'disculpe', use the article, close with thanks. That's the directions playbook anywhere from Buenos Aires to Bogotá to Mexico City.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where is the bathroom?', correct: ['¿Dónde está el baño?', '¿dónde está el baño?', 'Dónde está el baño', 'dónde está el baño', 'donde esta el bano'] },
      { prompt: 'To the right', correct: ['A la derecha', 'a la derecha'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three places you'd want to find in a Spanish-speaking city — el baño, la estación, el hotel — and say each one out loud with '¿Dónde está...?'. Drill the article-noun pairing.",
    rwenSignoff: "Find your way. Find your words. ¡Buen camino!",
  },

  phase8: {
    scenario: "You've just arrived at the Plaza de Mayo Metro station in Buenos Aires and you need to find the Casa Rosada — and a bathroom — before a meeting. A kiosko vendor outside the station is your shot. Greet, ask for both, parse the directions.",
    rwenRole: "Don Héctor — ~60, kiosko vendor at Plaza de Mayo for 25 years; quick with directions, gives them in fast porteño Spanish, won't slow down for someone who doesn't ask politely.",
    successCriteria: "User opens with 'Disculpe' or a greeting, asks '¿Dónde está la Casa Rosada?' (correct article 'la' — NOT 'el'), follows up with '¿Dónde está el baño?' (correct article 'el'), and parses 'derecho' / 'a la derecha' from his reply rather than going blank.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
