import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Much' = uncountable cheezein (paani, paise, samay). 'Many' = countable cheezein (bachhe, kitaabein, ghante). Saaf rule.",
    culturalNote: "Hindi mein hum 'bahut' ya 'kaafi' har cheez ke saath bol dete hain — chahe paani ho ya log. English mein yeh distinction strict hai. BPO/IT mein common galti: 'How many time do you need?' — yeh galat hai. 'Time' uncountable hai — 'How much time?' lagega. Trick yeh hai: agar aap 1, 2, 3 gin sakte ho, to many. Agar nahi gin sakte (paani, hawa, paise as substance), to much.",
  },

  chunks: [
    {
      id: 'much_water',
      target: 'Much water',
      native: 'Bahut paani',
      literal: 'uncountable',
      emoji: '🌊',
      phonetic: 'much-WAW-ter',
      audioRef: null,
    },
    {
      id: 'many_friends',
      target: 'Many friends',
      native: 'Bahut dost',
      literal: 'countable plural',
      emoji: '👥',
      phonetic: 'MEN-ee FRENDS',
      audioRef: null,
    },
    {
      id: 'how_much_how_many',
      target: 'How much? / How many?',
      native: 'Kitna? / Kitne?',
      literal: 'much (uncount) vs many (count)',
      emoji: '🤔',
      phonetic: 'how-much / how-MEN-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Much (uncountable) vs Many (countable)",
    explanation: "Much: uncountable — water, money, time, music, work. Many: countable plural — books, friends, hours, cars, emails. Questions: 'How much money?' / 'How many books?'.",
    examples: [
      { target: 'How much time do you have?',  native: 'Aapke paas kitna time hai?' },
      { target: 'How many minutes are left?',  native: 'Kitne minute bache hain?' },
      { target: 'I have many friends.',        native: 'Mere bahut dost hain.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "'much' ya 'many' chuniye",
      sentence: 'How _____ money do you have?',
      options: ['much', 'many', 'lot'],
      correct: 'much',
      context: 'Money = uncountable. "Much".',
    },
    {
      type: 'fill_blank',
      instruction: "'much' ya 'many' chuniye",
      sentence: 'How _____ books are on the shelf?',
      options: ['many', 'much', 'lot'],
      correct: 'many',
      context: 'Books = countable plural. "Many".',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Aapke paas kitna time hai?',
      correct: ['How much time do you have?', 'How much time do you have', 'how much time do you have?'],
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Bahut dost',
      correct: ['Many friends', 'many friends'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi kaunsa hai?',
      question: "I don't have _____ work today.",
      options: [
        { text: 'much', correct: true },
        { text: 'many', correct: false },
        { text: 'lots', correct: false },
      ],
      explanation: 'Work = uncountable. "Much work" — "many works" galat hai.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "How many minutes do you need?"',
      words: ['need?', 'do', 'minutes', 'How', 'you', 'many'],
      correct: ['How', 'many', 'minutes', 'do', 'you', 'need?'],
      translation: 'Aapko kitne minute chahiye?',
    },
  ],

  rwenDialogue: {
    intro: "Aapke IT manager aapse aapka workload poochh rahe hain — kitna kaam, kitne projects, kitna time. Yahan much aur many ka istemaal critical hai.",
    lines: [
      {
        speaker: 'npc',
        target: "How was your day? Are you handling the new project well?",
        native: 'Aapka din kaisa raha? Naya project sambhal pa rahe ho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Long day, sir! I had many meetings and not much time to code.", native: 'Lamba din tha sir! Bahut meetings hui aur code karne ka time bahut kam tha.', correct: true, feedback: "Bahut accha — meetings (countable) → many; time (uncountable) → much." },
          { target: "Long day, sir! I had much meetings and not many time to code.", native: '...', correct: false, feedback: "Ulta ho gaya — meetings countable hai (many), time uncountable hai (much)." },
          { target: "Long day! I had a lot meetings and not many time.", native: '...', correct: false, feedback: "'A lot of meetings' theek hai — par yahan focus much/many par hai. 'Many meetings' aur 'much time' lagao." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. Gin sakte ho — many. Nahi gin sakte — much. Time, money, water — much. Emails, meetings, hours — many.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'How much time? (English mein)', correct: ['How much time?', 'How much time', 'how much time?', 'how much time'] },
      { prompt: 'Many friends (English mein)', correct: ['Many friends', 'many friends'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Aaj 5 questions banaao — har baar 'how much' ya 'how many' chuno: '_____ money?' '_____ books?' '_____ water?' '_____ children?' '_____ time?'. Apne aap se boliye.",
    rwenSignoff: "Gin sakte ho — many. Nahi gin sakte — much. Aasaan rule.",
  },

  phase8: {
    scenario: "IT office mein project planning ki conversation — time, resources, team members, hours, work — sab discuss kar rahe ho. Much aur many sahi use karna hai.",
    rwenRole: "Project manager who is asking about your bandwidth — time, hours, tasks, emails — gives many openings for much/many use.",
    successCriteria: "User correctly uses 'much' with at least two uncountable nouns (time, work, money) and 'many' with at least two countable plurals (meetings, emails, hours, tasks) in the conversation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
