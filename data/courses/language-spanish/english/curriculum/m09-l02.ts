import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-cerca-lejos',
  module: 9,
  lesson: 2,
  title: 'Cerca & Lejos — Near & Far',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Cerca (near) and lejos (far) are the two distance words that decide whether you walk or take an Uber. They look short — five letters each — but locals layer them with 'muy' and 'aquí' and 'de' to map a whole neighbourhood in one phrase.",
    culturalNote: "In Bogotá and Lima, 'cerca' from a chilango (Mexico City local) might mean a 20-minute walk; from a porteño (Buenos Aires local) it could mean half a kilometre. Always follow up with '¿cuántos minutos?' (how many minutes?) — Spanish-speakers underplay distance the way Brits underplay rain.",
  },

  chunks: [
    {
      id: 'cerca',
      target: 'Cerca',
      native: 'Near / Close',
      literal: 'Near',
      emoji: '📍',
      phonetic: 'SEHR-kah',
      audioRef: null,
    },
    {
      id: 'lejos',
      target: 'Lejos',
      native: 'Far',
      literal: 'Far',
      emoji: '🏔️',
      phonetic: 'LEH-hohs',
      audioRef: null,
    },
    {
      id: 'cerca_de_aqui',
      target: 'Cerca de aquí',
      native: 'Near here / Nearby',
      literal: 'Near of here',
      emoji: '👆',
      phonetic: 'SEHR-kah deh ah-KEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cerca de / Lejos de — anchor distance to a landmark',
    explanation: "'De' (of/from) connects cerca and lejos to whatever they describe. Cerca del mercado (near the market — note 'de+el' contracts to 'del'). Lejos de aquí (far from here). Without 'de', cerca and lejos float in space; with 'de', they pin to something specific.",
    examples: [
      { target: 'Cerca del mercado', native: 'Near the market' },
      { target: 'Muy lejos de aquí', native: 'Very far from here' },
      { target: 'Está cerca, a dos cuadras', native: "It's near, two blocks away" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the distance word to its meaning',
      pairs: [
        { left: 'Cerca', right: 'Near' },
        { left: 'Lejos', right: 'Far' },
        { left: 'Cerca de aquí', right: 'Near here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask if the museum is far',
      sentence: '¿El museo está _____?',
      options: ['lejos', 'cerca', 'aquí'],
      correct: 'lejos',
      context: 'Is the museum far?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Near',
      correct: ['Cerca', 'cerca'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Está muy lejos.' What does that mean?",
      question: 'Está muy lejos means:',
      options: [
        { text: "It's very far", correct: true },
        { text: "It's quite near", correct: false },
        { text: "It's just here", correct: false },
      ],
      explanation: "'Muy' = very. Lejos = far. Don't try to walk it — flag a taxi or Uber.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The hotel is near the airport'",
      words: ['El', 'hotel', 'está', 'cerca', 'del', 'aeropuerto.'],
      correct: ['El', 'hotel', 'está', 'cerca', 'del', 'aeropuerto.'],
      translation: 'The hotel is near the airport',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Very far',
      correct: ['Muy lejos', 'muy lejos'],
    },
  ],

  rwenDialogue: {
    intro: "You're standing outside your hotel in Madrid, asking a doorman if the Prado museum is walkable.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, ¿el Prado está cerca o lejos?', native: 'Excuse me, is the Prado near or far?', correct: true, feedback: "Giving him the either/or shows you know both words and want a clear answer." },
          { target: '¿Dónde Prado?', native: 'Where Prado?', correct: false, feedback: "Add cerca/lejos to set expectations: '¿El Prado está cerca o lejos?'" },
          { target: 'Prado lejos', native: 'Prado far', correct: false, feedback: "Frame it as a question: '¿El Prado está cerca o lejos?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Está cerca, a unos quince minutos andando.',
        native: 'It\'s near — about fifteen minutes on foot.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Cerca + 15 minutos andando — that's a real number, not just 'near'. Always anchor cerca/lejos to minutes or blocks. Vague distance is a Spanish national sport.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Near', correct: ['Cerca', 'cerca'] },
      { prompt: 'Far', correct: ['Lejos', 'lejos'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three places near you and three far from you. Say each in Spanish: 'El parque está cerca. El aeropuerto está muy lejos.' Feel the distances in the words.",
    rwenSignoff: "Cerca and lejos — two words, a whole map. Hasta mañana.",
  },

  phase8: {
    scenario: "You're outside your hotel in Madrid's Barrio de las Letras and you want to know whether the Prado is walkable or whether you should grab a taxi. The doorman is right there — he'll give you a useful answer in Spanish if you ask cleanly using cerca/lejos and follow up with '¿cuántos minutos?'.",
    rwenRole: "Don Felipe — hotel doorman in Madrid, 60s, knows every street within a kilometre by heart, will give you precise minutes-on-foot if you frame the question right.",
    successCriteria: "User asks 'Está cerca o lejos?' rather than vague '¿Dónde está?', understands when he answers 'cerca' or 'lejos', follows up with '¿cuántos minutos andando?' to anchor the answer in real time, and uses 'cerca de' or 'lejos de' with a landmark when confirming.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
