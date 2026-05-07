import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-roti-dal',
  module: 7,
  lesson: 2,
  title: 'Roti, Dal, Sabzi — The Daily Plate',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Across India, a normal home dinner is three things: roti, dal, sabzi. Bread, lentils, vegetable. From Punjab to Kerala, the names change but the rhythm stays the same. Learn these three and you can read any Indian menu.",
    culturalNote: "A typical 'thali' (थाली) — the round plate — gathers roti (flatbread), dal (lentils), sabzi (cooked vegetable), rice, and curd in small katoris (bowls). The thali is India's edible thesis: variety, balance, and you finish what you take.",
  },

  chunks: [
    {
      id: 'roti',
      target: 'रोटी',
      native: 'Roti (flatbread)',
      literal: 'Roti — wheat flatbread, the daily bread',
      emoji: '🫓',
      phonetic: 'RO-tee',
      audioRef: null,
    },
    {
      id: 'dal',
      target: 'दाल',
      native: 'Dal (lentils / lentil stew)',
      literal: 'Dal — cooked lentils, the protein staple',
      emoji: '🍲',
      phonetic: 'DAAL',
      audioRef: null,
    },
    {
      id: 'sabzi',
      target: 'सब्ज़ी',
      native: 'Sabzi (cooked vegetable dish)',
      literal: 'Sabzi — vegetable curry/dry dish',
      emoji: '🥬',
      phonetic: 'SUB-zee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Aur — joining items in a list',
    explanation: "'Aur' (और) means 'and' in Hindi — the conjunction that strings food items together. 'Roti aur dal' (roti and dal). 'Roti, dal aur sabzi' (roti, dal, and sabzi). Same as English Oxford comma rules — the 'aur' goes before the last item.",
    examples: [
      { target: 'Roti aur dal', native: 'Roti and dal' },
      { target: 'Roti, dal aur sabzi', native: 'Roti, dal, and sabzi' },
      { target: 'Ek roti aur ek dal', native: 'One roti and one dal' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the food to its meaning',
      pairs: [
        { left: 'Roti', right: 'Flatbread' },
        { left: 'Dal', right: 'Lentil stew' },
        { left: 'Sabzi', right: 'Cooked vegetable dish' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order the daily three',
      sentence: 'Roti, dal _____ sabzi.',
      options: ['aur', 'ya', 'hai'],
      correct: 'aur',
      context: 'Roti, dal, and sabzi — the standard order.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Roti and dal',
      correct: ['Roti aur dal', 'roti aur dal'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A thali arrives with five small bowls. What\'s the right way to eat it?',
      question: 'Eating a thali:',
      options: [
        { text: 'Tear roti, scoop dal/sabzi with it, mix bites — finish what\'s on the plate', correct: true },
        { text: 'Eat each bowl separately, one at a time', correct: false },
        { text: 'Pour everything onto the rice and stir', correct: false },
      ],
      explanation: "The thali is designed to be mixed — bite of roti with dal, bite with sabzi, a spoon of rice. Refills (especially of dal) are usually free. Finish what you take.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want roti and dal"',
      words: ['chahiye', 'Mujhe', 'aur', 'roti', 'dal'],
      correct: ['Mujhe', 'roti', 'aur', 'dal', 'chahiye'],
      translation: 'I want roti and dal',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Sabzi (cooked vegetable)',
      correct: ['Sabzi', 'sabzi'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small dhaba in Jaipur at lunchtime. The owner walks over and asks what you'll have.",
    lines: [
      {
        speaker: 'npc',
        target: 'क्या लेंगे आप?',
        native: 'What will you have?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mujhe roti, dal aur sabzi chahiye.', native: 'I want roti, dal, and sabzi.', correct: true, feedback: 'Perfect — the daily three, listed naturally with "aur" before the last item.' },
          { target: 'Mujhe naan aur curry', native: 'I want naan and curry', correct: false, feedback: 'Naan and curry is the British-Indian menu. Inside India, the everyday request is "roti, dal aur sabzi".' },
          { target: 'Roti', native: 'Roti', correct: false, feedback: 'Just bread? Round it out: "Mujhe roti, dal aur sabzi chahiye." Then you\'ve got a proper meal.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'जी, अभी लाता हूँ।',
        native: 'Yes, I\'ll bring it now.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three names, one plate. You ordered like someone who eats here, not someone who reads menus.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Roti and dal', correct: ['Roti aur dal', 'roti aur dal'] },
      { prompt: 'Sabzi (cooked vegetable)', correct: ['Sabzi', 'sabzi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find an Indian restaurant or grocer near you. Say the words 'roti', 'dal', 'sabzi' as you point at each. Even if you order in English, name them in Hindi first. The food meets the language.",
    rwenSignoff: "Three words = one plate = one billion daily meals. Phir milenge.",
  },

  phase8: {
    scenario: "It's 1pm at a no-frills Jaipur dhaba — plastic chairs, brass thalis, a hand-written board on the wall. The owner has just dropped a glass of water on your table and is standing with a notebook, waiting for the order.",
    rwenRole: "Owner — late 50s, weathered, doesn't speak much English; will be visibly pleased if a foreigner orders roti/dal/sabzi by name in Hindi instead of pointing at the menu.",
    successCriteria: "User orders the three staples by their Hindi names (NOT 'naan and curry' Western-menu style), uses 'aur' to join items naturally, and asks for one or two rotis specifically rather than vague 'bread' — quantity matters since dal is usually unlimited but roti is counted.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
