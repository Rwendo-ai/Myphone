import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-bahut-swaad',
  module: 7,
  lesson: 6,
  title: 'Bahut Swaad — Praising the Cook',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You finished the meal. Now the cook — usually an aunty, mother, or grandmother — is hovering. She wants one specific feedback. 'Bahut swaad hai' (it\'s very tasty) is good. 'Aunty, aap ke haath mein jadoo hai' (aunty, your hands have magic) — that one will get you fed for life.",
    culturalNote: "Indian kitchen culture has a deep idea: 'haath ka swaad' (हाथ का स्वाद) — the taste of someone\'s hands. The cook\'s touch transforms food. Two people using the same recipe will produce different flavours; the difference IS the cook. Praising the hands, not just the food, hits the deepest layer.",
  },

  chunks: [
    {
      id: 'swaad',
      target: 'स्वाद',
      native: 'Taste / flavour',
      literal: 'Swaad — taste',
      emoji: '👅',
      phonetic: 'SWAAD',
      audioRef: null,
    },
    {
      id: 'bahut_swaad',
      target: 'बहुत स्वाद है',
      native: 'It\'s very tasty',
      literal: 'Bahut swaad hai — much taste is',
      emoji: '😋',
      phonetic: 'ba-HUT SWAAD hai',
      audioRef: null,
    },
    {
      id: 'haath_jadoo',
      target: 'आपके हाथ में जादू है',
      native: 'Your hands have magic',
      literal: 'Aapke haath mein jadoo hai — your hand in magic is',
      emoji: '✨🤲',
      phonetic: 'AAP-kay HAATH mein JAA-doo hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bahut + adjective — "very X"',
    explanation: "'Bahut' (बहुत) intensifies — much, very, a lot. Place it before the noun or adjective: 'bahut swaad' (very tasty), 'bahut accha' (very good), 'bahut khoob' (excellent). The sentence stays simple: subject + 'bahut X' + 'hai'. No suffix gymnastics, just 'bahut'.",
    examples: [
      { target: 'Bahut swaad hai', native: 'It\'s very tasty' },
      { target: 'Bahut accha khaana hai', native: 'The food is very good' },
      { target: 'Aapne bahut acha banaya', native: 'You made it very well' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the praise phrase to its meaning',
      pairs: [
        { left: 'Swaad', right: 'Taste' },
        { left: 'Bahut swaad hai', right: 'It\'s very tasty' },
        { left: 'Aapke haath mein jadoo hai', right: 'Your hands have magic' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the cook the food is very tasty',
      sentence: '_____ swaad hai!',
      options: ['Bahut', 'Kam', 'Nahi'],
      correct: 'Bahut',
      context: 'You loved the meal — pile on the praise.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'It\'s very tasty',
      correct: ['Bahut swaad hai', 'bahut swaad hai'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Aunty has cooked for three hours. You finish. She asks "kaisa laga?" (how was it?). What lands deepest?',
      question: 'Best response to the cook:',
      options: [
        { text: 'Aunty, aapke haath mein jadoo hai. Bahut swaad tha.', correct: true },
        { text: 'Theek tha', correct: false },
        { text: 'Mujhe aur chahiye', correct: false },
      ],
      explanation: "'Aapke haath mein jadoo hai' praises HER, not the food. Indian kitchen culture says the cook is the dish. Praise the hands and you\'ve praised the soul of the kitchen.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Aunty, the food is very tasty"',
      words: ['hai', 'swaad', 'Aunty,', 'bahut', 'khaana'],
      correct: ['Aunty,', 'khaana', 'bahut', 'swaad', 'hai'],
      translation: 'Aunty, the food is very tasty',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Your hands have magic',
      correct: ['Aapke haath mein jadoo hai', 'aapke haath mein jadoo hai'],
    },
  ],

  rwenDialogue: {
    intro: "You've just finished a home-cooked dinner at your friend\'s house. His mother is clearing plates and looking at you sideways, waiting.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, खाना कैसा लगा?',
        native: 'Dear, how did the food taste?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Aunty, bahut swaad tha. Aapke haath mein sach mein jadoo hai.', native: 'Aunty, it was very tasty. Your hands really have magic.', correct: true, feedback: 'You named the taste AND praised her hands. She\'s already packing leftovers for you to take home.' },
          { target: 'Theek tha aunty', native: 'It was okay, aunty', correct: false, feedback: '"Theek" is "fine" — damning with faint praise after three hours of cooking. Try "Bahut swaad tha, aunty."' },
          { target: 'Achha hai', native: 'It\'s good', correct: false, feedback: 'Too short. Add the personal layer: "Bahut swaad hai. Aapke haath mein jadoo hai."' },
        ],
      },
      {
        speaker: 'npc',
        target: 'अरे बेटा! रुको, थोड़ा और दूँ?',
        native: 'Oh dear! Wait, let me give you a little more?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Praising the food praises the cook. Praising the hands praises the soul. You did both.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'It\'s very tasty', correct: ['Bahut swaad hai', 'bahut swaad hai'] },
      { prompt: 'Your hands have magic', correct: ['Aapke haath mein jadoo hai', 'aapke haath mein jadoo hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone cooks for you — anyone, anywhere — say 'bahut swaad hai' before they clear the plate. If they made it from scratch, add 'aapke haath mein jadoo hai'. Watch their face change.",
    rwenSignoff: "The hands made the food. Praise the hands. Phir milenge.",
  },

  phase8: {
    scenario: "It's the end of a Sunday lunch at your friend Rohan\'s family home in South Delhi. His mother spent the entire morning making rajma-chawal, aloo gobhi, and homemade roti. The plates are being cleared and she\'s looking your way, very lightly hovering, waiting to hear what you thought.",
    rwenRole: "Rohan\'s mother — late 50s, has cooked for the family for thirty years; she will not say so but is genuinely waiting for the verdict; a sincere Hindi compliment will produce leftovers in tupperware on your way out.",
    successCriteria: "User goes beyond a generic 'thank you' or 'it was good' — uses 'bahut swaad' to compliment the food, AND adds 'aapke haath mein jadoo hai' to praise the cook directly (NOT just the food). Bonus if user names a specific dish she made and calls it out.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
