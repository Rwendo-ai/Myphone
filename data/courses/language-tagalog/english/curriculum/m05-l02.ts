import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Kuya & Ate — Older Siblings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In a Filipino family, age isn't just a number — it's a name. Your older brother is Kuya. Your older sister is Ate. The youngest gets a special title too: Bunso. These words shape every sentence you'll ever say about siblings.",
    culturalNote: "Filipino kids almost never call older siblings by their first name — it's Kuya Mark, Ate Joy. Even cousins. Calling your Kuya just 'Mark' can feel disrespectful. The title comes first, the name follows.",
  },

  chunks: [
    {
      id: 'kuya',
      target: 'Kuya',
      native: 'Older brother',
      literal: 'Older-brother (also honorific)',
      emoji: '👦',
      phonetic: 'KU-ya',
      audioRef: null,
    },
    {
      id: 'ate',
      target: 'Ate',
      native: 'Older sister',
      literal: 'Older-sister (also honorific)',
      emoji: '👧',
      phonetic: 'A-teh',
      audioRef: null,
    },
    {
      id: 'bunso',
      target: 'Bunso',
      native: 'Youngest sibling',
      literal: 'The-youngest',
      emoji: '🧒',
      phonetic: 'bun-SO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Title + name',
    explanation: "Kuya and Ate go BEFORE the name, like a title. Kuya Mark = (older brother) Mark. Ate Joy = (older sister) Joy. You use this for actual siblings AND for older cousins, neighbours, even classmates a few years up.",
    examples: [
      { target: 'Kuya Mark', native: 'Older brother Mark' },
      { target: 'Ate Joy', native: 'Older sister Joy' },
      { target: 'Si Bunso si Lily.', native: 'The youngest is Lily.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Kuya', right: 'Older brother' },
        { left: 'Ate', right: 'Older sister' },
        { left: 'Bunso', right: 'Youngest' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your older sister Joy walks into the room. You greet her.',
      sentence: 'Hi, _____ Joy!',
      options: ['Ate', 'Kuya', 'Bunso'],
      correct: 'Ate',
      context: 'Older sister = Ate. The title goes BEFORE her name.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My older brother (Kuya) Mark',
      correct: ['Kuya Mark ko', 'kuya mark ko', 'Kuya ko si Mark', 'kuya ko si mark'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "Lily is the youngest"',
      words: ['si', 'Lily', 'Bunso', 'Si'],
      correct: ['Si', 'Bunso', 'si', 'Lily'],
      translation: 'The youngest is Lily.',
    },
    {
      type: 'multiple_choice',
      instruction: 'You meet your friend\'s older brother for the first time. He says his name is Carlo.',
      question: 'How do you address him from now on?',
      options: [
        { text: 'Kuya Carlo', correct: true },
        { text: 'Carlo (just the name)', correct: false },
        { text: 'Bunso Carlo', correct: false },
      ],
      explanation: "Older = Kuya, ALWAYS before the name. Calling him just 'Carlo' would feel cold or rude in Filipino culture.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I am the youngest.',
      correct: ['Ako ang Bunso.', 'Ako ang bunso.', 'ako ang bunso', 'Ako ang Bunso'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Filipino friend's house. She introduces her two older siblings — Mark (the eldest) and Joy. Then her little sister Lily runs in.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ito si Mark, tapos si Joy. At ito si Lily, ang Bunso.',
        native: 'This is Mark, then Joy. And this is Lily, the youngest.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi Kuya Mark, hi Ate Joy, hi Bunso!', native: 'Hi big bro Mark, hi big sis Joy, hi little one!', correct: true, feedback: 'Perfect — you used every title right.' },
          { target: 'Hi Mark, hi Joy, hi Lily.', native: 'Hi Mark, hi Joy, hi Lily.', correct: false, feedback: 'Too cold for the older two — Filipinos always add Kuya/Ate.' },
          { target: 'Hi Ate Mark, hi Kuya Joy.', native: '(swapped)', correct: false, feedback: 'You swapped them — Mark is the brother (Kuya), Joy is the sister (Ate).' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ang galing mo! Marunong ka na pala.',
        native: "You're so good! You already know the words.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You just said hello like a Filipino. Kuya, Ate, Bunso — three words that show you know how to belong.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Older brother (in Tagalog)', correct: ['Kuya', 'kuya'] },
      { prompt: 'Older sister (in Tagalog)', correct: ['Ate', 'ate'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one of your own siblings (real or chosen family) and say their name out loud with the right title — 'Kuya [name]' or 'Ate [name]' or 'Bunso'. Feel how it changes the warmth.",
    rwenSignoff: "Until tomorrow. Ingat — take care.",
  },

  phase8: {
    scenario: "You're meeting your Filipino partner's family for the first time over dinner. Their three siblings sit around the table — older brother Mark, older sister Joy, and their bunso Lily.",
    rwenRole: "Mark — kind older brother in his early 30s, will introduce his sisters and ask you about your own siblings; he'll quietly notice if you skip the Kuya/Ate titles.",
    successCriteria: "User addresses Mark as 'Kuya Mark', Joy as 'Ate Joy', and refers to Lily as 'Bunso' or 'ang bunso' at least once. User describes their own sibling order using kuya/ate/bunso.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
