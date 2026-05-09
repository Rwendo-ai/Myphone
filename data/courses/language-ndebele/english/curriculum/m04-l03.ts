import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03',
  module: 4,
  lesson: 3,
  title: 'Staples — Isitshwala and Umngqusho',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Isitshwala is the heart of a Ndebele meal. Stiff, white, made from maize meal — eaten with the right hand, no spoon. Today you also meet umngqusho, an older staple from before maize ever crossed the ocean.",
    culturalNote: "Isitshwala is the Ndebele equivalent of Shona's sadza — same dish, same role on the plate. Umngqusho (samp and beans) is older: maize hominy and sugar beans, cooked slow. Madiba — Nelson Mandela — said it was his favourite meal. It is everywhere from Bulawayo to Cape Town.",
  },

  chunks: [
    {
      id: 'isitshwala',
      target: 'isitshwala',
      native: 'maize-meal staple (the main carb of a meal)',
      emoji: '🍚',
      phonetic: 'ee-see-CHWAH-lah',
      audioRef: null,
    },
    {
      id: 'umngqusho',
      target: 'umngqusho',
      native: 'samp and beans (hominy maize + sugar beans)',
      emoji: '🥣',
      phonetic: 'oom-n[q]oo-SHOH',
      audioRef: null,
    },
    {
      id: 'ukudla',
      target: 'ukudla',
      native: 'food / to eat',
      emoji: '🍽️',
      phonetic: 'oo-KOO-dlah',
      audioRef: null,
    },
    {
      id: 'mnandi',
      target: 'mnandi',
      native: 'tasty / delicious',
      emoji: '😋',
      phonetic: 'mnahn-dee',
      audioRef: null,
    },
    {
      id: 'isitshwala_mnandi',
      target: 'Isitshwala simnandi',
      native: 'The isitshwala is delicious',
      emoji: '👌',
      phonetic: 'ee-see-CHWAH-lah see-mnahn-dee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective agreement: si- to match isi- nouns',
    explanation: "isiNdebele adjectives 'agree' with the noun's class. Isitshwala (isi- class) takes 'si-' on its adjective: si-mnandi. The bare adjective is 'mnandi' (tasty), but it grows a prefix to match its noun. This is the same logic as Spanish making adjectives match gender — except in isiNdebele the agreement is by noun class, not gender.",
    examples: [
      { target: 'mnandi', native: 'tasty (bare form)' },
      { target: 'Isitshwala simnandi', native: 'The isitshwala is tasty (si- agrees with isi-)' },
      { target: 'Umngqusho umnandi', native: 'The umngqusho is tasty (u- agrees with um-)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the words',
      pairs: [
        { left: 'isitshwala', right: 'maize-meal staple' },
        { left: 'umngqusho',  right: 'samp and beans' },
        { left: 'ukudla',     right: 'food / to eat' },
        { left: 'mnandi',     right: 'tasty' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "The isitshwala is tasty"',
      words: ['simnandi', 'Isitshwala'],
      correct: ['Isitshwala', 'simnandi'],
      translation: 'The isitshwala is tasty.',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the compliment to your host',
      sentence: 'Umngqusho ____.',
      options: ['umnandi', 'simnandi', 'mnandi'],
      correct: 'umnandi',
      context: "Umngqusho is in the um- class — its adjective takes a u- prefix.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural question',
      question: 'You are eating isitshwala at a Ndebele family meal. There is no spoon for the isitshwala. What do you do?',
      options: [
        { text: 'Use my right hand to take a small piece, roll it, and dip it.', correct: true },
        { text: 'Ask for a spoon — clearly they forgot one.', correct: false },
        { text: 'Use my left hand because my right hand is more dominant.', correct: false },
      ],
      explanation: "Isitshwala is eaten with the right hand. The left hand is traditionally considered unclean for eating across much of Africa — including Matabeleland. No spoon was forgotten.",
    },
  ],

  rwenDialogue: {
    intro: "It is dinner. Your host's mother brings out a steaming bowl of isitshwala and a stew of greens.",
    lines: [
      { speaker: 'npc',  target: "Phakela isitshwala, ukudla sekulungile.", native: 'Help yourself to isitshwala — the food is ready.' },
      { speaker: 'rwen', rwenLine: 'Right hand. Take a piece, roll it gently in your palm, dip it in the stew. No rush.' },
      { speaker: 'user', userChoices: [
        { target: 'Ngiyabonga.', native: 'Thank you.', correct: true, feedback: 'Always begin with thanks before eating.' },
        { target: 'Hatshi, ngomile.', native: 'No, I am thirsty.', correct: false, feedback: 'A non-sequitur here — accept first, ask for water separately.' },
      ] },
      { speaker: 'npc',  target: 'Kunjani ukudla?', native: 'How is the food?' },
      { speaker: 'user', userChoices: [
        { target: 'Isitshwala simnandi!', native: 'The isitshwala is delicious!', correct: true, feedback: "Specific praise — your host will beam." },
        { target: 'Mnandi.', native: 'Tasty.', correct: false, feedback: "Almost — but isitshwala needs the agreeing 'si-': simnandi. Adjectives match their nouns." },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "What is the isiNdebele word for the maize-meal staple?",         correct: ['isitshwala'] },
      { prompt: "What does 'umngqusho' mean?",                                    correct: ['samp and beans', 'samp', 'hominy and beans', 'samp and beans (hominy maize + sugar beans)'] },
      { prompt: "How do you say 'The isitshwala is tasty'?",                      correct: ['Isitshwala simnandi', 'isitshwala simnandi'] },
    ],
  },

  mission: {
    title: 'Eat one meal with your right hand',
    task: "Pick one meal today — bread, rice, anything you can eat by hand without cutlery. Eat it with only your right hand. Notice how it changes the pace and the attention you bring to the food.",
    rwenSignoff: "Eating with the hand is intimate. The mouth meets the food, and the hand has been there too. The whole body eats.",
  },

  phase8: {
    scenario: "You are eating dinner at a Ndebele family home. Isitshwala and a stew are in front of you. Your host asks how the food is and whether you would like more.",
    rwenRole: "MaSibanda — your friend's mother, who cooked the meal and is watching to see if you enjoy it.",
    successCriteria: "User complimented the food using a noun-class-agreeing adjective ('isitshwala simnandi' or similar), said 'ngiyabonga' at least once, and accepted or declined seconds politely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
