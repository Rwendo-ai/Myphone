import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Sekuru & Ambuya — Grandparents',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Grandparents in Zimbabwe hold the highest honour. They carry the family history, the stories, the clan name. 'Sekuru' and 'Ambuya' are among the most important words you'll learn — and they extend beyond blood.",
    culturalNote: "'Sekuru' means grandfather but also 'uncle' (mother's brother) and is used to respectfully address any elderly man. 'Ambuya' means grandmother and any elderly woman. These titles acknowledge wisdom and age.",
  },

  chunks: [
    {
      id: 'sekuru',
      shona: 'Sekuru',
      english: 'Grandfather / Respectful address for elderly men',
      literal: 'Sekuru (elder male respect)',
      emoji: '👴',
      phonetic: 'se-KU-ru',
      audioRef: null,
    },
    {
      id: 'muzukuru',
      shona: 'Muzukuru',
      english: 'Grandchild / Nephew / Niece',
      literal: 'Mu-zukuru (grandchild class)',
      emoji: '🧒',
      phonetic: 'mu-zu-KU-ru',
      audioRef: null,
    },
    {
      id: 'dzinza',
      shona: 'Dzinza',
      english: 'Clan / Lineage',
      literal: 'Dzinza (family bloodline)',
      emoji: '🌳',
      phonetic: 'DZI-nza',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sekuru and Ambuya extend beyond blood',
    explanation: "In Shona, Sekuru can mean: your grandfather, your mother's brother, OR any respected elderly man. Ambuya similarly extends beyond just 'grandmother'. These words are titles of honour, not just relationship labels.",
    examples: [
      { shona: 'Sekuru wangu', english: 'My grandfather' },
      { shona: 'Ambuya wangu', english: 'My grandmother' },
      { shona: 'Muzukuru wangu', english: 'My grandchild / nephew / niece' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the family term to its meaning',
      pairs: [
        { left: 'Sekuru', right: 'Grandfather / Elderly man' },
        { left: 'Muzukuru', right: 'Grandchild / Nephew / Niece' },
        { left: 'Dzinza', right: 'Clan / Family lineage' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my grandfather'",
      sentence: 'Sekuru _____ anogara kumusha.',
      options: ['wangu', 'yangu', 'rangu'],
      correct: 'wangu',
      context: 'My grandfather lives in the village.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Grandfather / Respectful elderly man',
      correct: ['Sekuru', 'sekuru'],
    },
    {
      type: 'multiple_choice',
      instruction: "You see an elderly man you don't know. What respectful title do you use?",
      question: 'Respectful address for an elderly man:',
      options: [
        { text: 'Sekuru', correct: true },
        { text: 'Baba', correct: false },
        { text: 'Mukomana', correct: false },
      ],
      explanation: "'Sekuru' is used respectfully for any elderly man — grandfather, uncle, or stranger. It signals deep respect.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My grandfather is wise'",
      words: ['Sekuru', 'wangu', 'ane', 'ungwaru.'],
      correct: ['Sekuru', 'wangu', 'ane', 'ungwaru.'],
      translation: 'My grandfather is wise',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Grandchild / Nephew / Niece',
      correct: ['Muzukuru', 'muzukuru'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen takes you to meet his grandfather, who is sitting under a tree.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Mangwanani, muzukuru.',
        english: 'Good morning, grandchild.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Mangwanani, Sekuru. Mamuka sei?', english: 'Good morning, Grandfather. How did you wake?', correct: true, feedback: "Using 'Sekuru' with the respectful morning greeting — exactly right. The grandfather smiles." },
          { shona: 'Mangwanani', english: 'Good morning (simple)', correct: false, feedback: "Add the respectful title and wellness check: 'Mangwanani, Sekuru. Mamuka sei?'" },
          { shona: 'Makadii, Baba', english: 'How are you, Father (wrong title)', correct: false, feedback: "Use Sekuru for grandfather — 'Mangwanani, Sekuru. Mamuka sei?'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sekuru vanofara. Unoshandisa mazita ezita nzira yakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Grandfather / Respectful elderly man', correct: ['Sekuru', 'sekuru'] },
      { prompt: 'Grandchild / Nephew / Niece', correct: ['Muzukuru', 'muzukuru'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you see an elderly man or woman, mentally say 'Sekuru' or 'Ambuya'. Notice how the Shona word changes your perception of respect.",
    rwenSignoff: "Elders carry the memory of the family. Sekuru. Ambuya. Famba zvakanaka.",
  },
};

export default lesson;
