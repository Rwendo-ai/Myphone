import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-possession',
  module: 4,
  lesson: 6,
  title: 'Possession — Whose Is It?',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You already know 'zita rangu' (my name) and 'shamwari yangu' (my friend). Notice the different endings? Rangu, yangu, wangu — they all mean 'my' but they change based on the noun class. Today we unlock that system.",
    culturalNote: "Possession in Shona reveals the noun class of what is owned. 'My' looks different for every class — not to confuse you, but because Shona encodes relationships between words at every level. It's elegant, not complicated.",
  },

  chunks: [
    {
      id: 'wangu_rangu',
      target: '-wangu / -rangu / -yangu',
      native: 'My (changes with noun class)',
      literal: 'Possession marker — class dependent',
      emoji: '🫵',
      phonetic: 'wa-ngu / ra-ngu / ya-ngu',
      audioRef: null,
    },
    {
      id: 'imba_yangu',
      target: 'Imba yangu',
      native: 'My house',
      literal: 'House my (ya- = house class)',
      emoji: '🏠',
      phonetic: 'I-mba ya-ngu',
      audioRef: null,
    },
    {
      id: 'buku_rangu',
      target: 'Buku rangu',
      native: 'My book',
      literal: 'Book my (ra- = book class)',
      emoji: '📖',
      phonetic: 'BU-ku ra-ngu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possession markers match noun class',
    explanation: "The 'my' word changes with the noun class. Zita rangu (my name), Imba yangu (my house), Musha wangu (my village), Chinhu changu (my thing). The first letter mirrors the noun's class prefix.",
    examples: [
      { target: 'Zita ra-ngu', native: 'My name (ri/ma class → ra-)' },
      { target: 'Imba ya-ngu', native: 'My house (i class → ya-)' },
      { target: 'Musha wa-ngu', native: 'My village (mu/mi class → wa-)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the possession phrase to its meaning',
      pairs: [
        { left: 'Imba yangu', right: 'My house' },
        { left: 'Buku rangu', right: 'My book' },
        { left: 'Musha wangu', right: 'My village' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "my book"',
      sentence: 'Buku _____ riri pano.',
      options: ['rangu', 'yangu', 'wangu'],
      correct: 'rangu',
      context: 'My book is here.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My house',
      correct: ['Imba yangu', 'imba yangu'],
    },
    {
      type: 'multiple_choice',
      instruction: "You learned 'zita rangu' (my name). Which possession marker does 'zita' use?",
      question: "Zita ___ ngu = my name:",
      options: [
        { text: 'ra- (rangu)', correct: true },
        { text: 'ya- (yangu)', correct: false },
        { text: 'wa- (wangu)', correct: false },
      ],
      explanation: "Zita (name) uses ra-ngu. You already know this — zita rangu = my name.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My village is beautiful"',
      words: ['wakanaka.', 'Musha', 'wangu'],
      correct: ['Musha', 'wangu', 'wakanaka.'],
      translation: 'My village is beautiful',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My book',
      correct: ['Buku rangu', 'buku rangu'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's family asks about your belongings. Show them what's yours.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buku iri nderenani?',
        native: 'Whose book is this?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buku rangu.', native: 'My book.', correct: true, feedback: "Correct possession marker. Buku rangu — my book." },
          { target: 'Buku yangu.', native: 'My book (wrong marker)', correct: false, feedback: "Close — but buku uses ra-ngu not ya-ngu. Buku rangu." },
          { target: 'Ndinoziva', native: 'I know', correct: false, feedback: "Tell them whose book it is: 'Buku rangu' — my book." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. Using the right possession marker shows you understand the class system.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My house', correct: ['Imba yangu', 'imba yangu'] },
      { prompt: 'My book', correct: ['Buku rangu', 'buku rangu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name 3 things you own today using '-ngu'. Try: Imba yangu, Buku rangu, Musha wangu. Feel how the '-ngu' suffix carries 'mine'.",
    rwenSignoff: "What's yours is yours — in every noun class. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You've just dropped your backpack at the door of your homestead in Mt Darwin. Your young niece Tafadzwa has emptied half of it onto the woven mat and is holding up each item — your book, the keys to your house, a photo of your home village — asking 'nderani?' (whose is this?). You answer her each time using the correct possession marker.",
    rwenRole: "Tafadzwa — the same curious 8-year-old niece, this time playing 'whose is it' with your belongings; she'll squeal in mock-victory if you say 'buku yangu' instead of 'buku rangu'.",
    successCriteria: "User answers 'Buku rangu' for the book (ra- ending, NOT ya- or wa-), 'Imba yangu' for the photo of the house (ya- ending), and 'Musha wangu' for the village (wa- ending) — three different possession markers correctly matched to three different noun classes.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
