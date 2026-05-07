import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-tikha-mat-karna',
  module: 7,
  lesson: 5,
  title: 'Tikha — Spice, Mild, Just Right',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Indian-spicy' and 'tourist-spicy' are two different scales. The kitchen will dial it down if you ask — but you have to actually ask. 'Tikha mat banana' (don't make it spicy) is the most useful sentence in any Indian restaurant when you don't know the chef yet.",
    culturalNote: "'Tikha' (तीखा) means hot/spicy from chilies — distinct from 'masala' (spiced/flavoured). A heavily 'masaledar' dish can have lots of spices and still not be 'tikha'. North Indian kitchens tend to be heavier on cream + spice, South Indian kitchens leaner with chilies + tamarind. Know which you're walking into.",
  },

  chunks: [
    {
      id: 'tikha',
      target: 'तीखा',
      native: 'Spicy / hot (chili-hot)',
      literal: 'Tikha — sharp/hot from chilies',
      emoji: '🌶️',
      phonetic: 'TEE-kha',
      audioRef: null,
    },
    {
      id: 'kam_tikha',
      target: 'कम तीखा',
      native: 'Less spicy',
      literal: 'Kam tikha — less spicy',
      emoji: '🌶️➖',
      phonetic: 'KUM TEE-kha',
      audioRef: null,
    },
    {
      id: 'tikha_mat_banana',
      target: 'तीखा मत बनाना',
      native: 'Don\'t make it spicy',
      literal: 'Tikha mat banana — spicy don\'t make',
      emoji: '🚫🌶️',
      phonetic: 'TEE-kha MUT bun-AA-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mat + verb — soft negative command',
    explanation: "'Mat' (मत) is the polite negative imperative — 'don\'t (do this)'. Place it right before the verb: 'tikha mat banana' (don\'t make it spicy), 'jaldi mat karna' (don\'t hurry). Softer than 'nahi' which negates statements; 'mat' specifically blocks an action.",
    examples: [
      { target: 'Tikha mat banana', native: 'Don\'t make it spicy' },
      { target: 'Pyaaz mat daalna', native: 'Don\'t add onion' },
      { target: 'Jaldi mat karna', native: 'Don\'t hurry' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the spice phrase to its meaning',
      pairs: [
        { left: 'Tikha', right: 'Spicy / hot' },
        { left: 'Kam tikha', right: 'Less spicy' },
        { left: 'Tikha mat banana', right: 'Don\'t make it spicy' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the cook not to make it spicy',
      sentence: 'Tikha _____ banana.',
      options: ['mat', 'nahi', 'kya'],
      correct: 'mat',
      context: 'Polite negative command — "don\'t make".',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Less spicy',
      correct: ['Kam tikha', 'kam tikha'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A South Indian thali arrives glistening red. The waiter asks "tikha theek hai?" (is the spice okay?). You\'re struggling. Best move:',
      question: 'When the spice is too much:',
      options: [
        { text: 'Bhaiya, thoda dahi milega? Bahut tikha hai.', correct: true },
        { text: 'No, take it back', correct: false },
        { text: 'Drink water and keep going silently', correct: false },
      ],
      explanation: "Curd (dahi) cuts chili better than water — water spreads the capsaicin around. Asking for it is normal, not embarrassing. 'Bahut tikha hai' (it\'s very spicy) is honest feedback the kitchen will note for next time.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Don\'t add onion"',
      words: ['daalna', 'mat', 'Pyaaz'],
      correct: ['Pyaaz', 'mat', 'daalna'],
      translation: 'Don\'t add onion',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Don\'t make it spicy',
      correct: ['Tikha mat banana', 'tikha mat banana'],
    },
  ],

  rwenDialogue: {
    intro: "You're ordering at a Hyderabadi biryani place known for melting tongues. The cook calls out from the kitchen.",
    lines: [
      {
        speaker: 'npc',
        target: 'भैया, तीखा कितना?',
        native: 'Brother, how spicy?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, kam tikha banana — pehli baar khaa raha hoon.', native: 'Brother, make it less spicy — first time eating it.', correct: true, feedback: 'You named the level (kam tikha) AND gave the reason (first time). The cook will dial it down honestly.' },
          { target: 'Tikha kar do!', native: 'Make it spicy!', correct: false, feedback: 'Brave but unwise on Hyderabadi. Try "kam tikha" first — you can always ask for chili on the side later.' },
          { target: 'Normal banao', native: 'Make it normal', correct: false, feedback: '"Normal" in Hyderabad is volcanic. Be specific: "Kam tikha banana, bhaiya."' },
        ],
      },
      {
        speaker: 'npc',
        target: 'ठीक है साहब, मीडियम कर देता हूँ।',
        native: 'Okay sir, I\'ll make it medium.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He didn't punish you for being a foreigner. He met you where you are. That's how 'kam tikha' works.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Spicy / hot', correct: ['Tikha', 'tikha'] },
      { prompt: 'Don\'t make it spicy', correct: ['Tikha mat banana', 'tikha mat banana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you eat any food with heat in it — Indian or otherwise — rate it: 'tikha', 'kam tikha', or 'bilkul nahi tikha' (not at all spicy). Calibrate your scale. You\'ll need it.",
    rwenSignoff: "Spice is a dial, not a destiny. Phir milenge.",
  },

  phase8: {
    scenario: "It's 8pm at a Hyderabadi biryani joint famous for its dum gosht. You\'ve sat down with a colleague who orders 'extra tikha' — and the cook is now leaning out of the kitchen window directly at you, asking how spicy you want yours. Your mouth has not been to Hyderabad before.",
    rwenRole: "The cook — 50s, has run this kitchen for 25 years; he can dial spice anywhere from zero to nuclear and won\'t judge a 'kam tikha' request, but appreciates honesty over bravado.",
    successCriteria: "User specifies a calibrated spice level using 'kam tikha' or 'bilkul tikha mat banana' (NOT 'normal' or 'medium' which mean nothing in Hyderabadi context), gives a reason if helpful (first time, etc.), and uses the 'mat + verb' construction correctly when asking the cook not to do something.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
