import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01',
  module: 7,
  lesson: 1,
  title: 'Where are you going?',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "In Matabeleland, the question 'Uya ngaphi?' opens almost every street conversation. Strangers ask. Drivers ask. The taxi rank ladies will ask before you've even put your bag down. Today you learn to answer.",
    culturalNote: "'Uya ngaphi?' literally means 'You go where?' — but socially, it's not nosy. It's the way Ndebele speakers gauge whether they can help, share a ride, or warn you about the road. Answering vaguely ('Ngiyahamba nje' — I'm just going) is fine if you'd rather not say.",
  },

  chunks: [
    {
      id: 'uya_ngaphi',
      target: 'Uya ngaphi?',
      native: 'Where are you going?',
      literal: 'you-go where',
      emoji: '🚶',
      phonetic: 'oo-yah ngah-pee',
      audioRef: null,
    },
    {
      id: 'ngiya',
      target: 'Ngiya...',
      native: 'I am going (to)...',
      literal: 'I-go',
      emoji: '➡️',
      phonetic: 'ngee-yah',
      audioRef: null,
    },
    {
      id: 'ekhaya',
      target: 'ekhaya',
      native: 'home',
      emoji: '🏠',
      phonetic: 'eh-khah-yah',
      audioRef: null,
    },
    {
      id: 'emsebenzini',
      target: 'emsebenzini',
      native: 'to work',
      emoji: '💼',
      phonetic: 'em-seh-ben-zee-nee',
      audioRef: null,
    },
    {
      id: 'edolobheni',
      target: 'edolobheni',
      native: 'to town / to the city',
      emoji: '🏙️',
      phonetic: 'eh-doh-loh-beh-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Locative e- prefix',
    explanation: "In isiNdebele, 'to a place' or 'at a place' is usually marked by adding e- to the front of the noun and -ini to the end. Ikhaya (home) becomes ekhaya. Idolobha (town) becomes edolobheni. You don't need a separate word for 'to' — the noun itself carries the direction.",
    examples: [
      { target: 'ikhaya → ekhaya', native: 'home → (to) home' },
      { target: 'idolobha → edolobheni', native: 'town → (to) town' },
      { target: 'umsebenzi → emsebenzini', native: 'work → (to) work' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele phrase to its English meaning',
      pairs: [
        { left: 'Uya ngaphi?', right: 'Where are you going?' },
        { left: 'Ngiya ekhaya', right: 'I am going home' },
        { left: 'Ngiya emsebenzini', right: 'I am going to work' },
        { left: 'Ngiya edolobheni', right: 'I am going to town' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the answer',
      sentence: 'Ngiya ___ (home).',
      options: ['ekhaya', 'edolobheni', 'emsebenzini'],
      correct: 'ekhaya',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'Where are you going?',
      correct: ['Uya ngaphi?', 'Uya ngaphi', 'uya ngaphi?', 'uya ngaphi'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why do Ndebele speakers ask 'Uya ngaphi?' so casually?",
      options: [
        { text: "It's a social opener — gauging whether they can help, share a ride, or warn you.", correct: true },
        { text: "They are checking on strangers for the police.", correct: false },
        { text: "Only elders may ask it.", correct: false },
      ],
      explanation: "The question is friendly, not invasive. Vague answers like 'Ngiyahamba nje' (I'm just going) are perfectly acceptable.",
    },
  ],

  rwenDialogue: {
    intro: "You're walking past the Bulawayo City Hall. An older man with a newspaper under his arm catches your eye.",
    lines: [
      { speaker: 'npc',  target: 'Sawubona, mfowethu. Uya ngaphi?', native: 'Hello, my brother. Where are you going?' },
      { speaker: 'rwen', rwenLine: "He's just being friendly. Tell him you're going to town." },
      { speaker: 'user', userChoices: [
        { target: 'Ngiya edolobheni.', native: 'I am going to town.', correct: true, feedback: "Perfect — short, polite, gives him just enough." },
        { target: 'Uya ngaphi?', native: 'Where are you going?', correct: false, feedback: "You bounced his question back. He asked first — answer first." },
        { target: 'Ngiya ekhaya.', native: 'I am going home.', correct: false, feedback: "Fine grammar, but you were heading downtown. Try edolobheni." },
      ]},
      { speaker: 'npc',  target: 'Hamba kuhle.', native: 'Go well.' },
      { speaker: 'rwen', rwenLine: "That's the standard sign-off. You'll hear it ten times a day in Bulawayo." },
    ],
  },

  activeRecall: {
    instruction: "Recall today's key phrases.",
    prompts: [
      { prompt: "How do you ask 'Where are you going?' in isiNdebele?", correct: ['Uya ngaphi?', 'Uya ngaphi', 'uya ngaphi'] },
      { prompt: "How do you say 'I am going home'?", correct: ['Ngiya ekhaya', 'ngiya ekhaya'] },
      { prompt: "How do you say 'I am going to town'?", correct: ['Ngiya edolobheni', 'ngiya edolobheni'] },
    ],
  },

  mission: {
    title: 'Plant the question in your head',
    task: "Tomorrow morning, before you do anything else, ask yourself out loud: 'Uya ngaphi?' Then answer with where you're really going. Do it in isiNdebele. Three seconds, your kitchen, no audience.",
    rwenSignoff: "Travel language sticks fastest when you rehearse it on real journeys — even the journey from bed to kettle.",
  },

  phase8: {
    scenario: "You step off a kombi at Bulawayo's Egodini bus terminus. A friendly vendor selling oranges greets you and asks where you're going. Have a short exchange.",
    rwenRole: "Egodini fruit vendor, 40s, warm and chatty, knows the city well",
    successCriteria: "User correctly used 'Uya ngaphi?' or answered with 'Ngiya + e-place', and gave a plausible destination.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
