import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05',
  module: 7,
  lesson: 5,
  title: 'Directions — left, right, forward',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Three words will get you anywhere on foot in Bulawayo: kwesokunxele (left), kwesokudla (right), phambili (forward). They're long, but they're the same three you'll hear from every helpful stranger between Mzilikazi and Hillside.",
    culturalNote: "Ndebele speakers often gesture broadly when giving directions — a sweeping arm for 'phambili' (forward), a chin point for left or right. If someone gives you directions without gesturing, ask them to repeat with their hands. It's not rude; it's the local norm.",
  },

  chunks: [
    {
      id: 'kwesokunxele',
      target: 'kwesokunxele',
      native: 'on the left',
      literal: 'on the of-left',
      emoji: '⬅️',
      phonetic: 'kweh-soh-koon-shleh',
      audioRef: null,
    },
    {
      id: 'kwesokudla',
      target: 'kwesokudla',
      native: 'on the right',
      literal: 'on the of-eating (right hand = eating hand)',
      emoji: '➡️',
      phonetic: 'kweh-soh-kood-lah',
      audioRef: null,
    },
    {
      id: 'phambili',
      target: 'phambili',
      native: 'forward / straight ahead',
      emoji: '⬆️',
      phonetic: 'pahm-bee-lee',
      audioRef: null,
    },
    {
      id: 'emuva',
      target: 'emuva',
      native: 'back / behind',
      emoji: '⬇️',
      phonetic: 'eh-moo-vah',
      audioRef: null,
    },
    {
      id: 'jika',
      target: 'jika',
      native: 'turn',
      emoji: '🔄',
      phonetic: 'jee-kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative + direction',
    explanation: "To give a direction in isiNdebele, you put the verb first (imperative form, no prefix) followed by the direction word. 'Jika kwesokudla' = 'Turn right'. 'Hamba phambili' = 'Go forward.' 'Buyela emuva' = 'Go back.' The verb does the action; the direction word tells you which way.",
    examples: [
      { target: 'Jika kwesokunxele.', native: 'Turn left.' },
      { target: 'Jika kwesokudla.', native: 'Turn right.' },
      { target: 'Hamba phambili.', native: 'Go forward / straight.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each direction word to its meaning',
      pairs: [
        { left: 'kwesokunxele', right: 'on the left' },
        { left: 'kwesokudla', right: 'on the right' },
        { left: 'phambili', right: 'forward / straight ahead' },
        { left: 'emuva', right: 'back / behind' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence',
      words: ['Jika', 'kwesokudla'],
      correct: ['Jika', 'kwesokudla'],
      translation: 'Turn right.',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'Go straight ahead.',
      correct: ['Hamba phambili', 'hamba phambili', 'Hamba phambili.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why does 'kwesokudla' (right) come from the word for 'eating'?",
      options: [
        { text: "The right hand is the eating hand in traditional Ndebele meals.", correct: true },
        { text: "Right means 'food market' historically.", correct: false },
        { text: "It's a colonial loanword.", correct: false },
      ],
      explanation: "In Nguni cultures including isiNdebele, you eat with your right hand. So 'kwesokudla' literally means 'on the eating side' — a body-based way of marking direction.",
    },
  ],

  rwenDialogue: {
    intro: "You're trying to find the Bulawayo Railway Museum. You stop a man walking his dog.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: 'Sawubona, kungaphi i-Railway Museum?', native: "Hello, where is the Railway Museum?", correct: true, feedback: "Polite opener and a clear question." },
      ]},
      { speaker: 'npc',  target: 'Hamba phambili. Jika kwesokudla esitalateni esilandelayo. Sengathi izokuba phambi kwakho.', native: 'Go straight. Turn right at the next street. It will be in front of you.' },
      { speaker: 'rwen', rwenLine: "Three instructions: forward, right at the next, in front. Repeat them back to him to be sure." },
      { speaker: 'user', userChoices: [
        { target: 'Phambili, jika kwesokudla — yebo?', native: 'Forward, turn right — yes?', correct: true, feedback: "Confirming back is good practice everywhere." },
        { target: 'Ngiyabonga.', native: 'Thank you.', correct: false, feedback: "Polite, but you missed a chance to confirm. Locals appreciate the repetition." },
      ]},
      { speaker: 'npc',  target: 'Yebo, kanjalo. Hamba kuhle.', native: 'Yes, like that. Go well.' },
    ],
  },

  activeRecall: {
    instruction: 'Recall the direction words.',
    prompts: [
      { prompt: 'How do you say "left"?', correct: ['kwesokunxele'] },
      { prompt: 'How do you say "right"?', correct: ['kwesokudla'] },
      { prompt: 'How do you say "forward / straight"?', correct: ['phambili'] },
    ],
  },

  mission: {
    title: 'Direct yourself home',
    task: "Stand at your front door. Out loud, give the directions — in isiNdebele — from your bedroom to where you are. 'Hamba phambili. Jika kwesokunxele. Sengathi ngapha.' Use real turns from your real house.",
    rwenSignoff: "When directions sit in your body, the words come faster than the map.",
  },

  phase8: {
    scenario: "You ask a Bulawayo local for directions from the City Hall to the Natural History Museum. They give you turn-by-turn instructions. Confirm each step.",
    rwenRole: "Bulawayo local in their 50s, knows the city by heart, gives directions at a brisk pace",
    successCriteria: "User asked for directions, repeated back at least one turn, and used a direction word correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
