import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Lolo & Lola — Grandparents',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Every Filipino has a Lola story. The Lola who fed you while your parents worked abroad. The Lolo who taught you to fish. In Filipino families, grandparents are co-raisers — and Lolo, Lola, Apo are sacred words.",
    culturalNote: "When Filipinos talk about Lola, voices soften. Many were raised partly by their grandparents while parents worked overseas (OFWs). Mano po — taking an elder's hand to your forehead — is reserved especially for Lolo and Lola.",
  },

  chunks: [
    {
      id: 'lolo',
      target: 'Lolo',
      native: 'Grandfather',
      literal: 'Grandfather',
      emoji: '👴',
      phonetic: 'LO-lo',
      audioRef: null,
    },
    {
      id: 'lola',
      target: 'Lola',
      native: 'Grandmother',
      literal: 'Grandmother',
      emoji: '👵',
      phonetic: 'LO-la',
      audioRef: null,
    },
    {
      id: 'apo',
      target: 'Apo',
      native: 'Grandchild',
      literal: 'Grandchild',
      emoji: '👶',
      phonetic: 'A-po',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Generational respect — title before name',
    explanation: "Like Kuya/Ate, Lolo and Lola go BEFORE the name: Lolo Ben, Lola Cora. Filipinos NEVER drop the title with grandparents — it's a non-negotiable mark of respect, even more than with siblings.",
    examples: [
      { target: 'Lolo Ben', native: 'Grandpa Ben' },
      { target: 'Lola Cora', native: 'Grandma Cora' },
      { target: 'Ako ang apo niya.', native: "I am his/her grandchild." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Lolo', right: 'Grandfather' },
        { left: 'Lola', right: 'Grandmother' },
        { left: 'Apo', right: 'Grandchild' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're FaceTiming your grandmother in Cebu.",
      sentence: 'Hi _____ Cora, kumusta po kayo?',
      options: ['Lola', 'Lolo', 'Apo'],
      correct: 'Lola',
      context: 'Grandma = Lola. And notice the "po" — respect words for elders are non-negotiable.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My grandfather',
      correct: ['Lolo ko', 'lolo ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I am her grandchild"',
      words: ['niya', 'ang', 'Ako', 'apo'],
      correct: ['Ako', 'ang', 'apo', 'niya'],
      translation: 'I am her grandchild.',
    },
    {
      type: 'multiple_choice',
      instruction: 'You video-call your grandmother. She picks up. What\'s the most respectful greeting?',
      question: 'Choose the warmest, most respectful answer',
      options: [
        { text: 'Lola, kumusta po kayo?', correct: true },
        { text: 'Cora, kumusta?', correct: false },
        { text: 'Hi Apo!', correct: false },
      ],
      explanation: "Always 'Lola' (never just her first name) and always with 'po/kayo' for an elder.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My grandmother',
      correct: ['Lola ko', 'lola ko'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a video call from abroad to your Lola Cora in Cebu. Her face fills the screen — she's been waiting all day.",
    lines: [
      {
        speaker: 'npc',
        target: 'Apo ko! Kamusta ka na?',
        native: 'My grandchild! How are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti po, Lola. Namimiss ko po kayo.', native: "I'm well, Lola. I miss you.", correct: true, feedback: "She'll cry. Real Filipino warmth right there." },
          { target: 'Mabuti, Cora.', native: "I'm well, Cora.", correct: false, feedback: "Calling Lola by her first name is unthinkable in Filipino culture — it would hurt her." },
          { target: 'Sino ka?', native: 'Who are you?', correct: false, feedback: "She's your Lola — she'd be devastated. Try the warm option." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, anak. Mag-iingat ka palagi, ha?',
        native: "Oh, child. Take care always, okay?",
      },
      {
        speaker: 'rwen',
        rwenLine: "She called you 'anak' even though you're her apo. That's how Filipino love works — every younger person is also your child.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Grandmother (in Tagalog)', correct: ['Lola', 'lola'] },
      { prompt: 'Grandchild (in Tagalog)', correct: ['Apo', 'apo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell one Lola or Lolo story today — to a friend, in a journal, out loud to yourself. Use the words 'Lola' or 'Lolo' instead of 'grandma' or 'grandpa' as you tell it. Feel the difference.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're an OFW abroad on a Sunday-morning video call to your Lola Cora in Cebu. The wifi is patchy. She wants to hear everything — work, food, when you're coming home.",
    rwenRole: "Lola Cora — your grandmother in her 80s, sweet but worried, will ask 'kumain ka na ba?' (have you eaten?) and remind you to take care; she'll be hurt if you don't address her as Lola.",
    successCriteria: "User addresses her as 'Lola' (never first name), uses 'po/kayo' respect markers throughout, calls themselves her 'apo' at least once, and says 'namimiss ko po kayo' or similar warmth.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
