import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-como-llego',
  module: 9,
  lesson: 3,
  title: '¿Cómo llego a...? — Asking the Way',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "One question opens any street in any Spanish-speaking country: '¿Cómo llego a...?' (How do I get to...?) Add a place name and you're handed the route. Madrid, Cusco, Cartagena — same five-syllable key.",
    culturalNote: "In Madrid you'll hear the locals say 'permiso' constantly when navigating crowds — it means 'excuse me, let me through' and is non-negotiable on a packed Metro at 8am. Different from 'disculpe' (which is to get someone's attention) and 'perdón' (sorry, after bumping). Three words; one is for movement.",
  },

  chunks: [
    {
      id: 'como_llego',
      target: '¿Cómo llego a...?',
      native: 'How do I get to...?',
      literal: 'How I-arrive to...?',
      emoji: '🗺️',
      phonetic: 'KOH-moh YEH-goh ah',
      audioRef: null,
    },
    {
      id: 'donde_esta',
      target: '¿Dónde está...?',
      native: 'Where is...?',
      literal: 'Where is...?',
      emoji: '📍',
      phonetic: 'DON-deh ess-TAH',
      audioRef: null,
    },
    {
      id: 'permiso',
      target: 'Permiso',
      native: 'Excuse me / Let me through',
      literal: 'Permission',
      emoji: '🚶',
      phonetic: 'pehr-MEE-soh',
      audioRef: null,
    },
  ],

  pattern: {
    name: '¿Cómo llego a + place? — the universal direction-asker',
    explanation: "'Llego' is 'I arrive' (from llegar). '¿Cómo llego a...?' literally asks 'how do I arrive at...?' — and it's the most natural way to ask directions to anywhere. With masculine places, 'a + el' contracts to 'al': '¿Cómo llego al museo?'. With feminine places, it stays as 'a la': '¿Cómo llego a la estación?'.",
    examples: [
      { target: '¿Cómo llego al museo?', native: 'How do I get to the museum?' },
      { target: '¿Cómo llego a la estación?', native: 'How do I get to the station?' },
      { target: '¿Cómo llego al hotel desde aquí?', native: 'How do I get to the hotel from here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question to its meaning',
      pairs: [
        { left: '¿Cómo llego a...?', right: 'How do I get to...?' },
        { left: '¿Dónde está...?', right: 'Where is...?' },
        { left: 'Permiso', right: 'Excuse me / Let me through' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask how to get to the museum',
      sentence: '¿Cómo llego ___ museo?',
      options: ['al', 'a la', 'a'],
      correct: 'al',
      context: 'How do I get to the museum? (a + el = al)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Where is...?',
      correct: ['¿Dónde está?', 'Dónde está?', '¿Dónde está', 'donde esta?', 'Donde esta?'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're squeezing through a packed Madrid Metro carriage to reach the door. What do you say?",
      question: 'The right word for moving through a crowd:',
      options: [
        { text: 'Permiso', correct: true },
        { text: 'Disculpe', correct: false },
        { text: 'Hola', correct: false },
      ],
      explanation: "Permiso = let me through (movement). Disculpe = excuse me (to get attention). Perdón = sorry (after a collision). Pack 'permiso' for trains and crowds.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'How do I get to the airport?'",
      words: ['¿Cómo', 'llego', 'al', 'aeropuerto?'],
      correct: ['¿Cómo', 'llego', 'al', 'aeropuerto?'],
      translation: 'How do I get to the airport?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How do I get to the station? (la estación)',
      correct: ['¿Cómo llego a la estación?', 'Cómo llego a la estación?', 'cómo llego a la estación', 'como llego a la estacion?'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Plaza Mayor in Madrid, trying to find the Plaza de Sol. You stop a passer-by.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, ¿cómo llego a la Puerta del Sol?', native: 'Excuse me, how do I get to Puerta del Sol?', correct: true, feedback: "'Disculpe' to get attention + the universal direction question. He'll point the way." },
          { target: 'Sol dónde', native: 'Sol where', correct: false, feedback: "Frame it properly: 'Disculpe, ¿cómo llego a la Puerta del Sol?'" },
          { target: 'Permiso, ¿dónde Sol?', native: 'Let me through, where Sol?', correct: false, feedback: "'Permiso' is for moving through crowds, not asking. Try: 'Disculpe, ¿cómo llego a la Puerta del Sol?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sigue todo recto por la calle Mayor, son cinco minutos andando.',
        native: 'Go straight along Calle Mayor — it\'s five minutes on foot.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Calle Mayor — name of the street. Recto, cinco minutos. Now you have street, direction, and time. That's a complete answer in Madrid.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How do I get to...?', correct: ['¿Cómo llego a?', '¿Cómo llego a...?', 'Cómo llego a', 'cómo llego a', 'como llego a'] },
      { prompt: 'Excuse me / Let me through (in a crowd)', correct: ['Permiso', 'permiso'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three real places — your office, a café, a friend's house — and ask out loud: '¿Cómo llego al [place]?' Build the question into reflex before you ever need it on a Madrid sidewalk.",
    rwenSignoff: "Five syllables. Every place. Hasta mañana.",
  },

  phase8: {
    scenario: "You're standing in Plaza Mayor in Madrid trying to find the Puerta del Sol. A friendly-looking man in his 50s is walking past with a newspaper and a coffee. You need to stop him correctly, ask the universal direction question, and follow his answer back without flipping anything.",
    rwenRole: "Don Manuel — Madrid local in his late 50s, retired, walks through Plaza Mayor every morning with a coffee; he'll happily give you full street-name directions if you start with 'Disculpe' and use '¿cómo llego a...?' properly.",
    successCriteria: "User opens with 'Disculpe' (NOT 'Permiso' which is for moving through crowds), uses '¿cómo llego a la Puerta del Sol?' with correct 'a la', repeats the street name back to confirm, and closes with 'gracias' or 'muchas gracias'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
