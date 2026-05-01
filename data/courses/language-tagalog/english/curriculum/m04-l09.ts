import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-question-words',
  module: 4,
  lesson: 9,
  title: 'Ano, Sino, Saan — What, Who, Where',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three question words unlock three entire conversation types. 'Ano' opens up things. 'Sino' opens up people. 'Saan' opens up places. With these three plus the markers you've learned, you can ask about almost anything around you.",
    culturalNote: "Tagalog question words go at the START of the sentence, like English. But notice: 'sino' triggers 'si' (name marker), and 'saan' often pairs with 'sa'. The grammar threads through. The question word and the marker travel together — that's the rhythm.",
  },

  chunks: [
    {
      id: 'ano_ito',
      target: 'Ano ito?',
      native: 'What is this?',
      literal: 'What this?',
      emoji: '❓',
      phonetic: 'a-NO ee-TO',
      audioRef: null,
    },
    {
      id: 'sino_siya',
      target: 'Sino siya?',
      native: 'Who is he/she?',
      literal: 'Who 3rd-person?',
      emoji: '🙋',
      phonetic: 'SI-no shee-YA',
      audioRef: null,
    },
    {
      id: 'saan_tayo',
      target: 'Saan tayo?',
      native: 'Where are we?',
      literal: 'Where we (incl)?',
      emoji: '📍',
      phonetic: 'sa-AN TA-yo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question word + topic',
    explanation: "Put the question word first, then the topic. 'Ano' for things, 'sino' for people (pairs with 'si' / 'ni' / 'kay'), 'saan' for places (pairs with 'sa'). The marker family stays consistent — questions just put a 'wh-' word in front.",
    examples: [
      { target: 'Ano ang pangalan mo?', native: 'What is your name?' },
      { target: 'Sino ang guro?', native: 'Who is the teacher?' },
      { target: 'Saan ka pupunta?', native: 'Where will you go?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog question word to its meaning',
      pairs: [
        { left: 'Ano', right: 'What' },
        { left: 'Sino', right: 'Who' },
        { left: 'Saan', right: 'Where' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Ask: 'What is your name?'",
      sentence: '_____ ang pangalan mo?',
      options: ['Ano', 'Sino', 'Saan'],
      correct: 'Ano',
      context: "A name is a thing — 'ano' for things.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Who is he/she?',
      correct: ['Sino siya?', 'Sino siya', 'sino siya', 'sino siya?'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Where will you go?'",
      words: ['ka', 'pupunta', 'Saan'],
      correct: ['Saan', 'ka', 'pupunta'],
      translation: 'Where will you go?',
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the question word for each blank: 'Pangalan mo?'",
      question: "'_____ ang pangalan mo?' = What is your name?",
      options: [
        { text: 'Ano', correct: true },
        { text: 'Sino', correct: false },
        { text: 'Saan', correct: false },
      ],
      explanation: "'Ano' for things (a name is a thing). 'Sino' = who. 'Saan' = where.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Where are we?',
      correct: ['Saan tayo?', 'Saan tayo', 'saan tayo', 'saan tayo?'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive somewhere new with a Filipino friend. You're a little lost, you see someone you don't recognize, and there's an unfamiliar fruit on the table. Ask three questions.",
    lines: [
      {
        speaker: 'npc',
        target: 'Eto na tayo!',
        native: 'Here we are!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Saan tayo? Sino siya? Ano ito?', native: 'Where are we? Who is that? What is this?', correct: true, feedback: "Three question words, three different domains. Pure marker awareness." },
          { target: 'Ano tayo? Ano siya? Ano ito?', native: 'What are we? What is he? What is this?', correct: false, feedback: "'Ano' is for things — not people or places. Mix it up." },
          { target: 'Saan ito? Saan siya? Saan tayo?', native: 'Where is this? Where is he? Where are we?', correct: false, feedback: "Only the third question is about a place. Use 'ano' for the thing and 'sino' for the person." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sa Quiapo tayo. Si Tito Boy iyan. At ito ay langka.',
        native: "We're in Quiapo. That's Tito Boy. And this is jackfruit.",
      },
      {
        speaker: 'rwen',
        rwenLine: "She used 'sa' for the place, 'si' for the person, 'ito' for the thing — each marker matched the question word. The whole grammar lined up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'What is this? (in Tagalog)',
        correct: ['Ano ito?', 'Ano ito', 'ano ito', 'ano ito?'],
      },
      {
        prompt: 'Where are we? (in Tagalog)',
        correct: ['Saan tayo?', 'Saan tayo', 'saan tayo', 'saan tayo?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask three different question types today — even silently. 'Ano ito?' (looking at a snack). 'Sino siya?' (looking at a stranger). 'Saan tayo?' (catching your bearings). Three doorways into Tagalog conversation.",
    rwenSignoff: "Hanggang bukas — tomorrow we put it all together.",
  },

  phase8: {
    scenario: "You're walking through a barangay festival with a Filipino friend. You're surrounded by unfamiliar food, unfamiliar people, and you've lost your bearings. You need to ask all three question types just to keep up.",
    rwenRole: "Kaibigan Lyn — your friend, mid-30s, knows everyone, will patiently answer 'ano', 'sino', and 'saan' questions and will gently nudge you if you mix up the question word.",
    successCriteria: "User asks at least one 'ano' question, one 'sino' question, and one 'saan' question, with the right marker pattern in each (e.g., 'ano ito?', 'sino siya?', 'saan tayo?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
