import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-sadza',
  module: 7,
  lesson: 1,
  title: 'Sadza — The National Dish',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, sadza is not just food — it is identity. To eat sadza is to eat Shona. If someone offers you sadza, they are offering you a piece of their home. Let's learn the language of Zimbabwe's most important meal.",
    culturalNote: "Sadza is a thick maize porridge eaten with relish (muriwo — vegetables or nyama — meat). It's eaten with the right hand, rolled into a ball, dipped in relish. Refusing sadza offered by a host is a significant cultural slight.",
  },

  chunks: [
    {
      id: 'sadza',
      target: 'Sadza',
      native: 'Sadza (maize meal staple)',
      literal: 'Sadza — the national staple food',
      emoji: '🍚',
      phonetic: 'SA-dza',
      audioRef: null,
    },
    {
      id: 'muriwo',
      target: 'Muriwo',
      native: 'Vegetables / Relish',
      literal: 'Mu-riwo (vegetable relish)',
      emoji: '🥬',
      phonetic: 'mu-RI-wo',
      audioRef: null,
    },
    {
      id: 'nyama',
      target: 'Nyama',
      native: 'Meat',
      literal: 'Nyama (meat)',
      emoji: '🥩',
      phonetic: 'NYA-ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sadza ne muriwo — the pairing pattern',
    explanation: "'Ne' (and/with) connects sadza to its accompaniment: Sadza ne muriwo (sadza with vegetables), Sadza ne nyama (sadza with meat). 'Ne' is one of Shona's most useful small words — connecting things in pairs.",
    examples: [
      { target: 'Sadza ne muriwo', native: 'Sadza with vegetables' },
      { target: 'Sadza ne nyama', native: 'Sadza with meat' },
      { target: 'Ndinoda sadza', native: 'I want sadza' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the food word to its meaning',
      pairs: [
        { left: 'Sadza', right: 'Maize meal staple' },
        { left: 'Muriwo', right: 'Vegetables / Relish' },
        { left: 'Nyama', right: 'Meat' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the meal description',
      sentence: 'Ndinoda sadza _____ nyama.',
      options: ['ne', 'na', 'ndi'],
      correct: 'ne',
      context: 'I want sadza with meat.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Sadza with vegetables',
      correct: ['Sadza ne muriwo', 'sadza ne muriwo'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your host offers you sadza. What is the culturally correct response?",
      question: 'When offered sadza by a host:',
      options: [
        { text: 'Accept gratefully — refusing is a slight', correct: true },
        { text: 'Refuse if you are not hungry', correct: false },
        { text: 'Ask what else is available', correct: false },
      ],
      explanation: "In Shona culture, refusing sadza offered by a host is considered rude. Accept it — even a small portion shows respect.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I want sadza with meat'",
      words: ['Ndinoda', 'sadza', 'ne', 'nyama.'],
      correct: ['Ndinoda', 'sadza', 'ne', 'nyama.'],
      translation: 'I want sadza with meat',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Meat',
      correct: ['Nyama', 'nyama'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's mother brings out a plate of sadza. You are the guest of honour.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tora sadza, mwanangu. Sadza ne nyama.',
        native: 'Take sadza, my child. Sadza with meat.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda zvikuru, Amai. Ndinofara sadza ne nyama.', native: 'Thank you very much, Mother. I love sadza with meat.', correct: true, feedback: "Grateful, warm, specific. Rwen's mother beams. You've honoured the meal." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Warmer — add what you're grateful for: 'Ndatenda zvikuru, Amai. Ndinofara sadza ne nyama.'" },
          { target: 'Handidi sadza', native: "I don't want sadza", correct: false, feedback: "Never refuse sadza from a host — it's a cultural slight. Accept graciously: 'Ndatenda zvikuru, Amai.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Amai vanofarira. The meal is shared. You're part of the family now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Sadza with vegetables', correct: ['Sadza ne muriwo', 'sadza ne muriwo'] },
      { prompt: 'Meat', correct: ['Nyama', 'nyama'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look up a sadza recipe today. As you read through the ingredients, name each one in Shona if you can. You're building a food vocabulary that tastes like Zimbabwe.",
    rwenSignoff: "Sadza is home. Wherever you eat it, you're in Zimbabwe. Famba zvakanaka.",
  },

  phase8: {
    scenario: "It's late afternoon in a smoky thatched kitchen in Domboshava. A heavy black pot of sadza is stiffening on the open fire, a bowl of muriwo wenyevhe sits ready, and you've been pulled in to help dish up for the evening meal — your first time being trusted with the cooking pot.",
    rwenRole: "Mai Chipo — the household's matriarch, late 50s, stirring sadza with a mugoti; she gently asks the user what to pair it with and whether the portions look right.",
    successCriteria: "User correctly pairs the staple with a relish using 'ne' (e.g., 'Sadza ne nyama' or 'Sadza ne muriwo' — NOT 'Sadza na nyama'), accepts the offered plate gratefully instead of refusing, and identifies 'nyama' / 'muriwo' by name when Mai Chipo points at the pots.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
