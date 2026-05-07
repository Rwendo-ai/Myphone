import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-baayen-daayen',
  module: 9,
  lesson: 2,
  title: 'Baayen & Daayen — Left & Right',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two words you'll use daily in India: baayen (left) and daayen (right). Auto drivers, Ola drivers, Metro signs, every passer-by — they all live in baayen and daayen. Lock these in today and every direction in India opens up.",
    culturalNote: "In India, 'right' carries cultural weight — the right hand is for greetings, eating, giving, receiving. The left hand is reserved for hygiene. Pointing or giving with the left hand is rude. So 'daayen' isn't just a direction; it's the polite hand. Cultural detail worth knowing.",
  },

  chunks: [
    {
      id: 'baayen',
      target: 'बाएं',
      native: 'Left',
      literal: 'Baayen — to the left',
      emoji: '⬅️',
      phonetic: 'BAA-yen',
      audioRef: null,
    },
    {
      id: 'daayen',
      target: 'दाएं',
      native: 'Right',
      literal: 'Daayen — to the right',
      emoji: '➡️',
      phonetic: 'DAA-yen',
      audioRef: null,
    },
    {
      id: 'mudo',
      target: 'मुड़ो',
      native: 'Turn (command)',
      literal: 'Mudo — turn (informal command, to driver)',
      emoji: '↪️',
      phonetic: 'MU-do',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Direction] mudo / [Direction] mudiye — turn left/right',
    explanation: "'Mudo' (turn) is the informal command — what you'd say to an auto driver mid-traffic. 'Mudiye' is the polite form for an Uber/Ola driver or a stranger. Baayen mudo (turn left), Daayen mudiye (turn right, polite). Direction first, verb second.",
    examples: [
      { target: 'Baayen mudo', native: 'Turn left (informal — to auto driver)' },
      { target: 'Daayen mudiye', native: 'Turn right (polite — to Ola driver)' },
      { target: 'Yahaan baayen', native: 'Left here' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction word to its meaning',
      pairs: [
        { left: 'Baayen', right: 'Left' },
        { left: 'Daayen', right: 'Right' },
        { left: 'Mudo', right: 'Turn (command)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell the auto driver to turn left at the signal",
      sentence: 'Signal pe _____ mudo.',
      options: ['baayen', 'daayen', 'seedhe'],
      correct: 'baayen',
      context: 'Turn left at the signal.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Turn right (polite, to Ola driver)',
      correct: ['Daayen mudiye', 'daayen mudiye', 'Daayen mudiye.', 'daayen mudiye.'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your auto driver overshoots. You need him to turn left at the next lane. What do you say?",
      question: 'Quick command to auto driver:',
      options: [
        { text: 'Baayen mudo!', correct: true },
        { text: 'Daayen mudo!', correct: false },
        { text: 'Seedhe!', correct: false },
      ],
      explanation: "Baayen = left. With an auto driver, the short informal 'mudo' is correct kombi-style register — Ola drivers get the polite 'mudiye'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Turn right here, please'",
      words: ['Yahaan', 'daayen', 'mudiye,', 'please.'],
      correct: ['Yahaan', 'daayen', 'mudiye,', 'please.'],
      translation: 'Turn right here, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Left',
      correct: ['Baayen', 'baayen'],
    },
  ],

  rwenDialogue: {
    intro: "You're in an Ola in Bengaluru, navigating the driver to your AirBnB. He's just hit a roundabout and asks which exit.",
    lines: [
      {
        speaker: 'npc',
        target: 'मैडम, यहाँ बाएं या दाएं?',
        native: 'Madam, left or right here?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Daayen mudiye, phir seedhe.', native: 'Turn right, then straight.', correct: true, feedback: "Polite (mudiye), clear, sequenced. Driver nods and goes." },
          { target: 'Right', native: 'Right (English)', correct: false, feedback: "Use Hindi — 'Daayen mudiye'. The driver respects the effort and remembers you tipped in vocabulary." },
          { target: 'Baayen baayen', native: 'Left left', correct: false, feedback: "That'll send you to the wrong neighbourhood. You wanted right — 'Daayen mudiye'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'ठीक है मैडम।',
        native: 'OK madam.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Daayen, baayen — two words, half of India navigated. Tomorrow: seedhe (straight). The third corner of the triangle.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Right (direction)', correct: ['Daayen', 'daayen'] },
      { prompt: 'Left (direction)', correct: ['Baayen', 'baayen'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you turn today — walking, in a car, anywhere — say 'Baayen' or 'Daayen' under your breath. Make turning Hindi. By tonight your hands and the words will be wired together.",
    rwenSignoff: "Right is daayen. Left is baayen. Both are routes home. Phir milenge.",
  },

  phase8: {
    scenario: "You're in an Ola in Bengaluru on the way to a friend's flat in Indiranagar. The driver has reached the 12th Main junction and stops, asking 'baayen ya daayen?'. You need to direct him through three turns — first right, then left at the bakery, then right at the 100ft Road — entirely in Hindi without flipping baayen and daayen under pressure.",
    rwenRole: "Ola driver in Indiranagar, Bengaluru — late 30s, listens precisely to baayen/daayen calls because he can't see your map; will follow your Hindi directions to the metre, but won't help if you mix up the words mid-turn.",
    successCriteria: "User correctly distinguishes 'baayen' (left) and 'daayen' (right) without swapping them, uses the polite 'mudiye' form (NOT the curt 'mudo' — Ola driver register is polite), chains the sequence — 'Pehle daayen mudiye, phir bakery pe baayen, phir daayen' — confidently in one continuous instruction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
