import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Proverbes français — French proverbs',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Every culture has the lines old people quote at dinner. France has hundreds. Three of them you'll hear in real conversations — at work, on the news, on a postcard. Drop one in the right moment and a French speaker's eyebrow goes up. 'Where did YOU learn that?'",
    culturalNote: "French oral tradition is rich and proverbs still get quoted in everyday conversation — far more than English ones. They're not corny. A boss says 'qui vivra verra' to mean 'we'll see what happens'. A grandmother says 'petit à petit, l'oiseau fait son nid' when you're learning slowly. Use them sparingly and the language earns weight.",
  },

  chunks: [
    {
      id: 'petit_a_petit',
      target: "Petit à petit, l'oiseau fait son nid",
      native: 'Little by little, the bird builds its nest',
      literal: 'Little to little, the bird makes its nest',
      emoji: '🐦',
      phonetic: 'puh-TEE tah puh-TEE, lwah-ZOH feh sohn NEE',
      audioRef: null,
    },
    {
      id: 'qui_vivra_verra',
      target: 'Qui vivra verra',
      native: 'Wait and see (lit: who lives will see)',
      literal: 'Who will-live will-see',
      emoji: '⏳',
      phonetic: 'kee vee-VRAH veh-RAH',
      audioRef: null,
    },
    {
      id: 'a_coeur_vaillant',
      target: "À cœur vaillant rien d'impossible",
      native: 'To a brave heart, nothing is impossible',
      literal: 'To heart valiant nothing of-impossible',
      emoji: '❤️‍🔥',
      phonetic: 'ah kuhr vah-YAHN ree-AHN dahn-poh-SEE-bluh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'When to drop each proverb',
    explanation: "Each proverb has its moment. 'Petit à petit, l'oiseau fait son nid' — patience and slow progress (perfect for someone learning a language). 'Qui vivra verra' — uncertain future, wait and see. 'À cœur vaillant rien d'impossible' — encouragement before something hard. Match the proverb to the moment, not the literal words.",
    examples: [
      { target: "Petit à petit, l'oiseau fait son nid", native: 'Said to encourage slow, steady progress' },
      { target: 'Qui vivra verra', native: 'Said when the outcome is uncertain — we\'ll see' },
      { target: "À cœur vaillant rien d'impossible", native: 'Said to someone facing something hard' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the proverb to its meaning',
      pairs: [
        { left: "Petit à petit, l'oiseau fait son nid", right: 'Patience — slow steady progress' },
        { left: 'Qui vivra verra', right: 'Wait and see' },
        { left: "À cœur vaillant rien d'impossible", right: 'A brave heart can do anything' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your French friend is anxious about a job interview. Which proverb fits?",
      sentence: 'Avant l\'entretien, je lui dis: "_____."',
      options: ["À cœur vaillant rien d'impossible", "Petit à petit, l'oiseau fait son nid", "Qui vivra verra"],
      correct: "À cœur vaillant rien d'impossible",
      context: 'Encouragement before something hard = the brave-heart proverb. The bird-nest one fits patient learning. Qui vivra verra is for outcomes you can\'t predict.',
    },
    {
      type: 'translate',
      instruction: "Type in French — the patience proverb (the one about the bird)",
      prompt: "Little by little, the bird builds its nest",
      correct: [
        "Petit à petit, l'oiseau fait son nid",
        "Petit à petit l'oiseau fait son nid",
        "petit à petit, l'oiseau fait son nid",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Drop the "wait and see" proverb. Put the words in order.',
      words: ['vivra', 'Qui', 'verra'],
      correct: ['Qui', 'vivra', 'verra'],
      translation: 'Who lives will see — wait and see',
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend is learning French and feels slow. They're frustrated. Which proverb is the perfect kindness?",
      question: 'Pick the right one for the moment',
      options: [
        { text: "Petit à petit, l'oiseau fait son nid.", correct: true },
        { text: "Qui vivra verra.", correct: false },
        { text: "Je suis triste.", correct: false },
      ],
      explanation: "The bird-nest proverb is literally about patient, slow building — exactly what learning a language is. The other two miss the encouragement.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — the proverb about a brave heart',
      prompt: "To a brave heart, nothing is impossible",
      correct: [
        "À cœur vaillant rien d'impossible",
        "à cœur vaillant rien d'impossible",
        "À coeur vaillant rien d'impossible",
        "A cœur vaillant rien d'impossible",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Your friend Léa just told you she's nervous about her PhD defence next week. You want to send her off with something that lands.",
    lines: [
      {
        speaker: 'npc',
        target: "J'ai si peur. Je ne suis pas prête.",
        native: "I'm so scared. I'm not ready.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "À cœur vaillant rien d'impossible. Tu vas y arriver.", native: 'To a brave heart, nothing is impossible. You\'ll do it.', correct: true, feedback: 'Perfect proverb for this moment — encouragement before something hard. And in French.' },
          { target: "Qui vivra verra.", native: "Wait and see.", correct: false, feedback: "Cold — 'we'll see' isn't what she needs hours before her defence. She needs courage, not detachment." },
          { target: "Je suis content.", native: "I'm happy.", correct: false, feedback: "Doesn't address her at all. She's afraid; meet that." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Merci. Vraiment. C\'est beau ce que tu m\'as dit.',
        native: 'Thank you. Really. What you said is beautiful.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just gave a French friend a French proverb at the right moment. That's not learning a language — that's living in it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Wait and see (the French proverb)",
        correct: ['Qui vivra verra', 'qui vivra verra'],
      },
      {
        prompt: "Little by little, the bird builds its nest (in French)",
        correct: [
          "Petit à petit, l'oiseau fait son nid",
          "Petit à petit l'oiseau fait son nid",
          "petit à petit, l'oiseau fait son nid",
        ],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one proverb and use it today — in your head, in a message, in a conversation. The right phrase at the right moment lands harder than ten ordinary sentences.",
    rwenSignoff: "Petit à petit, tu fais ton nid en français. À demain — pour la dernière leçon.",
  },

  phase8: {
    scenario: "You're at a family dinner with your French partner's family in Bordeaux. The conversation has turned to challenges — the grandmother is talking about a tough year, the cousin about a job change. The room goes quiet. You have a chance to drop a proverb at the right moment.",
    rwenRole: "Mamie Geneviève — your partner's grandmother, ~80, sharp and warm; she uses 'tu' with you, will smile if you land the right proverb at the right moment, and ask 'où as-tu appris ça?' (where did you learn that?). She quotes proverbs herself.",
    successCriteria: "User correctly uses at least ONE of the three proverbs at a contextually appropriate moment (patience for slow progress / wait-and-see for unknown / brave-heart for encouragement). Match the proverb to the situation, not just translate it. Bonus: explain in French WHY that proverb fits.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
