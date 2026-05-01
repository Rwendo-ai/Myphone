import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'Biyenan — In-laws',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When you marry into a Filipino family, you don't just gain a partner — you gain biyenan (in-laws), bayaw, hipag, and a thousand new fiestas. Today we learn the words that turn one family into two.",
    culturalNote: "Filipino in-law relationships are close, often daily. Many newlyweds live near or even with the biyenan. Sunday lunch with Nanay Cecilia (your mother-in-law) isn't optional — it's how the family stays one.",
  },

  chunks: [
    {
      id: 'biyenan_na_lalaki',
      target: 'Biyenan na lalaki',
      native: 'Father-in-law',
      literal: 'In-law that-is male',
      emoji: '👴',
      phonetic: 'bi-YEN-an na la-LA-ki',
      audioRef: null,
    },
    {
      id: 'biyenan_na_babae',
      target: 'Biyenan na babae',
      native: 'Mother-in-law',
      literal: 'In-law that-is female',
      emoji: '👵',
      phonetic: 'bi-YEN-an na ba-BA-eh',
      audioRef: null,
    },
    {
      id: 'bayaw_hipag',
      target: 'Bayaw / Hipag',
      native: 'Brother-in-law / Sister-in-law',
      literal: 'Bayaw=male in-law (sibling), Hipag=female in-law (sibling)',
      emoji: '👫',
      phonetic: 'BA-yaw / HI-pag',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marriage kin — and what you actually call them',
    explanation: "Biyenan literally means 'in-law' but is mostly used for parents-in-law. In daily life you often just call them Nanay/Tatay (or Mama/Papa), the same as your partner does — that's the warmth of being accepted into the family.",
    examples: [
      { target: 'Biyenan ko na babae', native: 'My mother-in-law' },
      { target: 'Bayaw ko si Mark.', native: 'Mark is my brother-in-law.' },
      { target: 'Hipag ko si Joy.', native: 'Joy is my sister-in-law.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Biyenan na lalaki', right: 'Father-in-law' },
        { left: 'Biyenan na babae', right: 'Mother-in-law' },
        { left: 'Bayaw', right: 'Brother-in-law' },
        { left: 'Hipag', right: 'Sister-in-law' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're describing your wife's mother to a friend.",
      sentence: 'Si Cecilia ang biyenan ko na _____.',
      options: ['babae', 'lalaki', 'bunso'],
      correct: 'babae',
      context: 'Mother-in-law = biyenan na babae (female in-law).',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My father-in-law',
      correct: ['Biyenan ko na lalaki', 'biyenan ko na lalaki', 'Biyenan kong lalaki', 'biyenan kong lalaki'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Mark is my brother-in-law"',
      words: ['ko', 'Mark', 'Bayaw', 'si'],
      correct: ['Bayaw', 'ko', 'si', 'Mark'],
      translation: 'Mark is my brother-in-law.',
    },
    {
      type: 'multiple_choice',
      instruction: "Sunday lunch. You arrive at your mother-in-law Cecilia's house. She greets you at the door.",
      question: 'What\'s the warmest, most natural greeting?',
      options: [
        { text: 'Hi Nanay! Kumusta po kayo?', correct: true },
        { text: 'Hi Biyenan!', correct: false },
        { text: 'Hi Cecilia!', correct: false },
      ],
      explanation: "Even though she's technically your biyenan, you call her Nanay (or Mama) — that's how you say 'I'm part of the family now.'",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My sister-in-law',
      correct: ['Hipag ko', 'hipag ko'],
    },
  ],

  rwenDialogue: {
    intro: "It's Sunday in Manila. You arrive at your mother-in-law Cecilia's house for lunch. She opens the door, beaming.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ay, anak! Pasok ka, kumain na tayo!',
        native: "Oh, my child! Come in, let's eat!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salamat po, Nanay. Namimiss ko po ang luto ninyo.', native: "Thank you, Mum. I miss your cooking.", correct: true, feedback: "Beautiful — calling her Nanay tells her you're truly family." },
          { target: 'Hi Biyenan!', native: 'Hi In-law!', correct: false, feedback: 'Technically right but cold — Filipinos use Nanay/Mama for biyenan in everyday talk.' },
          { target: 'Hi Cecilia.', native: 'Hi Cecilia.', correct: false, feedback: "First-name-only with biyenan? She'll feel hurt. Always Nanay or Mama." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, ang sweet mo talaga. Halika na, kakain na tayo!',
        native: "Oh, you're so sweet. Come on, let's eat now!",
      },
      {
        speaker: 'rwen',
        rwenLine: "She called you 'anak'. You called her 'Nanay'. That's not a transaction — that's a family forming. This is how Filipinos do it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother-in-law (in Tagalog)', correct: ['Biyenan na babae', 'biyenan na babae'] },
      { prompt: 'Brother-in-law (in Tagalog)', correct: ['Bayaw', 'bayaw'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Mention one in-law (yours, a friend's, a fictional one) using 'biyenan', 'bayaw', or 'hipag' today. Bonus: think about which of YOUR in-laws you'd naturally call Nanay or Tatay.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "It's Sunday lunch at Nanay Cecilia's house in Manila — your wife's mother. The whole biyenan side is here: your bayaw Mark, your hipag Joy, and Tatay Lito at the head of the table.",
    rwenRole: "Nanay Cecilia — your warm mother-in-law in her 60s, will ladle adobo onto your plate without asking, ask if you've eaten, and quietly check whether you call her Nanay or 'Biyenan'.",
    successCriteria: "User addresses Cecilia as 'Nanay' (or Mama) — not 'Biyenan' or 'Cecilia' — uses 'po/ninyo' respect markers, and refers to bayaw/hipag correctly when discussing other in-laws. Bonus: compliments her cooking.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
