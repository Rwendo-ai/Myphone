import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: "D'où venez-vous? — Where from",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After 'what's your name', the second French question is always 'where are you from?'. The answer carries a tiny grammar twist — you 'come from' a country, but you 'live in' a city.",
    culturalNote: "French speakers love to map newcomers — country, then city, then neighbourhood. It's not nosy, it's how the conversation finds traction. Saying 'Australia' or 'Canada' opens whole conversations about places they've travelled or cousins who emigrated.",
  },

  chunks: [
    {
      id: 'dou_venez_vous',
      target: "D'où venez-vous?",
      native: 'Where are you from?',
      literal: 'From-where come-you?',
      emoji: '🌍',
      phonetic: 'doo vuh-NAY VOO',
      audioRef: null,
    },
    {
      id: 'je_viens_de',
      target: 'Je viens de...',
      native: 'I come from...',
      literal: 'I come from...',
      emoji: '✈️',
      phonetic: 'zhuh vee-EHN duh',
      audioRef: null,
    },
    {
      id: 'jhabite_a',
      target: "J'habite à...",
      native: 'I live in...',
      literal: 'I-live in...',
      emoji: '🏠',
      phonetic: 'zhah-BEET ah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"De" + place',
    explanation: '"Venir de" = come from. The "de" links the verb to the place. With a city: "de Paris", "de Sydney". With a country it shifts: "des États-Unis", "de France", "du Canada" — the article gets contracted in. For now, just learn it with cities.',
    examples: [
      { target: 'Je viens de Sydney', native: 'I come from Sydney' },
      { target: 'Je viens de Londres', native: 'I come from London' },
      { target: "J'habite à Paris", native: 'I live in Paris' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "D'où venez-vous?", right: 'Where are you from?' },
        { left: 'Je viens de...', right: 'I come from...' },
        { left: "J'habite à...", right: 'I live in...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the answer',
      sentence: 'Je viens _____ Melbourne.',
      options: ['de', 'à', 'en'],
      correct: 'de',
      context: '"Venir de" — come FROM. The preposition is always "de" with a city.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I come from London',
      correct: ['Je viens de Londres', 'je viens de Londres'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a stranger where they\'re from — put the words in order',
      words: ['vous?', 'venez-', "D'où"],
      correct: ["D'où", 'venez-', 'vous?'],
      translation: 'Where are you from?',
    },
    {
      type: 'translate',
      instruction: 'Type in French — say where you currently live',
      prompt: 'I live in Paris',
      correct: ["J'habite à Paris", "j'habite à Paris", "J habite à Paris"],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I come from Sydney',
      correct: ['Je viens de Sydney', 'je viens de Sydney'],
    },
  ],

  rwenDialogue: {
    intro: "You're on the TGV to Lyon. The seat next to you fills up — a woman in her 50s. Twenty minutes in, she breaks the silence.",
    lines: [
      {
        speaker: 'npc',
        target: "Vous avez un petit accent... d'où venez-vous?",
        native: "You have a slight accent... where are you from?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Je viens de Melbourne, mais j'habite à Paris depuis un an", native: "I come from Melbourne, but I've lived in Paris for a year", correct: true, feedback: 'Beautifully done — the country, the city, the timeline. She has lots to ask now.' },
          { target: "Melbourne", native: 'Melbourne', correct: false, feedback: 'Just one word feels abrupt — wrap it in a sentence: "Je viens de Melbourne".' },
          { target: "Je suis de Melbourne", native: 'I am from Melbourne', correct: false, feedback: 'Understandable, but the natural French is "Je viens de" — I come from.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, l\'Australie! Mon neveu y est allé en 2018...',
        native: 'Ah, Australia! My nephew went there in 2018...',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there it is — the conversation just opened. That's what 'where are you from' does in France.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Where are you from? (formal)',
        correct: ["D'où venez-vous?", "D'où venez-vous", "d'où venez-vous?"],
      },
      {
        prompt: 'I come from [your city]',
        correct: ['Je viens de', 'je viens de'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build the two-line answer to 'D'où venez-vous?' — your home city plus where you live now. Say it out loud once. Tomorrow you'll need it.",
    rwenSignoff: "Demain — the moment a stranger becomes a friend. À demain.",
  },

  phase8: {
    scenario: "TGV from Paris-Gare de Lyon to Lyon Part-Dieu, mid-morning. The woman next to you has unwrapped a sandwich, offered a polite smile, and an hour in is making the gentle small talk French strangers do on long trains. She's noticed a slight accent in your earlier 'pardon'.",
    rwenRole: "Madame Garnier — early 60s, retired teacher heading back to Lyon to see grandchildren; warm, curious, well-travelled, will follow up on whatever country you mention.",
    successCriteria: "User uses 'Je viens de [city]' (with 'de', not 'à'), then layers 'J'habite à [current city]' to add context, stays in vous register, and answers her follow-up question with another full sentence rather than one-word answers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
