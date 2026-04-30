import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-adjectives',
  module: 4,
  lesson: 7,
  title: 'Adjectives — Good, Big, Beautiful',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You already know 'akanaka' (good/beautiful) from greeting phrases. But in Shona, 'good' looks different depending on what it describes. A good person, a good thing, a good tree — three different forms, one meaning.",
    culturalNote: "In English, adjectives never change. In Shona, they agree with their noun's class — just like verbs do. This might feel complex at first, but it makes sentences feel connected and harmonious, like everything is in agreement.",
  },

  chunks: [
    {
      id: 'munhu_akanaka',
      target: 'Munhu akanaka',
      native: 'A good person',
      literal: 'Person a-ka-naka (a- = class 1 agreement)',
      emoji: '😊',
      phonetic: 'MU-nhu a-ka-NA-ka',
      audioRef: null,
    },
    {
      id: 'chinhu_chakanaka',
      target: 'Chinhu chakanaka',
      native: 'A good thing',
      literal: 'Thing cha-ka-naka (cha- = class 7 agreement)',
      emoji: '✅',
      phonetic: 'CHI-nhu cha-ka-NA-ka',
      audioRef: null,
    },
    {
      id: 'muti_wakanaka',
      target: 'Muti wakanaka',
      native: 'A good tree',
      literal: 'Tree wa-ka-naka (wa- = class 3 agreement)',
      emoji: '🌳',
      phonetic: 'MU-ti wa-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjectives agree with noun class',
    explanation: "The adjective prefix mirrors the noun's subject prefix. Munhu uses a- (akanaka), Chinhu uses cha- (chakanaka), Muti uses wa- (wakanaka). Same adjective root (-kanaka), different class prefix.",
    examples: [
      { target: 'Munhu a-kanaka', native: 'Good person (class 1)' },
      { target: 'Chinhu cha-kanaka', native: 'Good thing (class 7)' },
      { target: 'Imba ya-kanaka', native: 'Good house (class 9)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Munhu akanaka', right: 'A good person' },
        { left: 'Chinhu chakanaka', right: 'A good thing' },
        { left: 'Muti wakanaka', right: 'A good tree' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'a good school' in Shona? (Chikoro = school, class 7)",
      question: 'Chikoro ___kanaka:',
      options: [
        { text: 'Chikoro chakanaka', correct: true },
        { text: 'Chikoro akanaka', correct: false },
        { text: 'Chikoro wakanaka', correct: false },
      ],
      explanation: "Chikoro is class 7 (Chi/Zvi), so the adjective uses cha- → chakanaka.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'A good person',
      correct: ['Munhu akanaka', 'munhu akanaka'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the adjective agreement',
      sentence: 'Imba _____ iri pedyo.',
      options: ['yakanaka', 'akanaka', 'chakanaka'],
      correct: 'yakanaka',
      context: 'A good house is nearby.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "A good thing happened"',
      words: ['Chinhu', 'chakanaka', 'chakaitika.'],
      correct: ['Chinhu', 'chakanaka', 'chakaitika.'],
      translation: 'A good thing happened',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'A good thing',
      correct: ['Chinhu chakanaka', 'chinhu chakanaka'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks you to describe things you see around you.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bvunza: Munhu uyu akanaka here? Uye chikoro ichi?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu, munhu akanaka. Uye chikoro chakanaka.', native: 'Yes, a good person. And a good school.', correct: true, feedback: "Both adjectives agree correctly with their noun classes." },
          { target: 'Munhu chakanaka', native: 'Person chakanaka (wrong class)', correct: false, feedback: "Munhu uses a- not cha-. Munhu akanaka. Chikoro chakanaka." },
          { target: 'Zvakanaka', native: "It's good (general)", correct: false, feedback: "Describe the specific nouns — 'Munhu akanaka' and 'Chikoro chakanaka'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka zvikuru! Adjective agreement — you're speaking real Shona now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A good person', correct: ['Munhu akanaka', 'munhu akanaka'] },
      { prompt: 'A good thing', correct: ['Chinhu chakanaka', 'chinhu chakanaka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe 3 things as 'good' today using the right class agreement. Start with what you know: Munhu akanaka, Chinhu chakanaka, Muti wakanaka.",
    rwenSignoff: "Everything agrees in Shona. That's its harmony. Famba zvakanaka.",
  },
};

export default lesson;
