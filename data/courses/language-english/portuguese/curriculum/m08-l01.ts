import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have" — I am / I have',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Os dois pilares do inglês: 'be' (ser/estar) e 'have' (ter). 'I am happy', 'I have a friend'.",
    culturalNote: "Em português 'sou' e 'estou' são dois verbos diferentes. Em inglês os dois colapsam em 'I am'. E você não pode omitir o 'am' — em português a gente diz 'feliz' ou 'cansado' às vezes sem o verbo, em inglês não.",
  },

  chunks: [
    {
      id: 'i_am_happy',
      target: 'I am happy.',
      native: 'Estou feliz.',
      literal: 'I am happy',
      emoji: '😊',
      phonetic: 'ay-AM-HAP-ee',
      audioRef: null,
    },
    {
      id: 'you_have_a_friend',
      target: 'You have a friend.',
      native: 'Você tem um amigo.',
      literal: 'You have a friend',
      emoji: '🤝',
      phonetic: 'yoo-HAV-uh-FREND',
      audioRef: null,
    },
    {
      id: 'they_are_tired',
      target: 'They are tired.',
      native: 'Eles estão cansados.',
      literal: 'They are tired',
      emoji: '😩',
      phonetic: 'thay-AHR-TY-erd',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"To be" and "to have" — the two pillars',
    explanation: "'Be' muda com pessoa: I am, You are, He/She is, We are, They are. 'Have' muda pouco: I/You/We/They have, He/She HAS. Em inglês precisa do sujeito explícito ('I', 'you', etc.).",
    examples: [
      { target: 'I am happy.',         native: 'Estou feliz.' },
      { target: 'You have a brother.', native: 'Você tem um irmão.' },
      { target: 'She is at home.',     native: 'Ela está em casa.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os pilares',
      pairs: [
        { left: 'I am', right: 'Eu sou/estou' },
        { left: 'She has', right: 'Ela tem' },
        { left: 'They are', right: 'Eles são/estão' },
        { left: "We have", right: 'Temos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou feliz.',
      correct: ['I am happy.', "I'm happy.", 'i am happy.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Conjugação',
      sentence: 'She _____ a sister.',
      options: ['has', 'have', 'is'],
      correct: 'has',
      context: "He/She/It → has.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "They are tired"',
      words: ['tired.', 'are', 'They'],
      correct: ['They', 'are', 'tired.'],
      translation: 'Eles estão cansados',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Temos um carro.',
      correct: ['We have a car.', 'We have a car', 'we have a car.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Conjugação certa',
      question: 'Choose the correct one:',
      options: [
        { text: 'He has a dog.', correct: true },
        { text: 'He have a dog.', correct: false },
        { text: 'He is a dog.', correct: false },
      ],
      explanation: 'He/She → has.',
    },
  ],

  rwenDialogue: {
    intro: 'Você apresenta sua família pra colega americana.',
    lines: [
      { speaker: 'npc', target: "Tell me about your family.", native: 'Me conta da sua família.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two siblings, and we are very close.", native: 'Tenho dois irmãos, e somos muito próximos.', correct: true, feedback: 'Mandou bem — be e have juntos.' },
          { target: "I two siblings.", native: '...', correct: false, feedback: "Falta 'have'." },
          { target: "Tenho dois irmãos.", native: 'Tenho dois irmãos.', correct: false, feedback: 'Em português — traduza.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I am happy (em inglês)', correct: ['I am happy', "I'm happy", 'I am happy.'] },
      { prompt: 'She has a sister (em inglês)', correct: ['She has a sister', 'She has a sister.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês cinco frases — três com 'be' (am/is/are) e duas com 'have/has'.",
    rwenSignoff: "Amanhã — do e make.",
  },

  phase8: {
    scenario: "Casual conversation describing yourself, your family, your home using be and have.",
    rwenRole: "Curious English-speaking friend.",
    successCriteria: "User uses 'be' (am/is/are) and 'have/has' at least twice each correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
