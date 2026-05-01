import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-kumusta',
  module: 1,
  lesson: 3,
  title: 'Kumusta ka? — How are you?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After the greeting comes the wellness check: 'Kumusta?' To a friend, it's 'Kumusta ka?'. To an elder or stranger, it shifts to 'Kumusta po kayo?' — same question, dressed in respect.",
    culturalNote: "Filipinos call ANY older person tito (uncle), tita (auntie), kuya (older brother), or ate (older sister) — even strangers. A market vendor five years older than you is automatically 'ate'. It's warmth, not literal kinship. With these people, you always use 'kayo' + 'po', never bare 'ka'.",
  },

  chunks: [
    {
      id: 'kumusta_ka',
      target: 'Kumusta ka?',
      native: 'How are you? (casual, one friend)',
      literal: 'How (are) you-singular?',
      emoji: '👋',
      phonetic: 'ku-MUS-ta KA',
      audioRef: null,
    },
    {
      id: 'kumusta_po_kayo',
      target: 'Kumusta po kayo?',
      native: 'How are you? (formal / to elder)',
      literal: 'How respect-marker you-plural?',
      emoji: '🙇',
      phonetic: 'ku-MUS-ta PO ka-YO',
      audioRef: null,
    },
    {
      id: 'mabuti_naman_salamat',
      target: 'Mabuti naman, salamat',
      native: 'Fine, thanks',
      literal: 'Good also, thanks',
      emoji: '🙂',
      phonetic: 'ma-BU-ti na-MAN sa-LA-mat',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'ka vs kayo — the respect-shift',
    explanation: "Like French tu/vous: 'ka' is singular-casual (friend, sibling, child), 'kayo' is plural-or-respectful (elder, stranger, customer, your boss — even one person). Pair 'kayo' with 'po' and you've got the full respect package.",
    examples: [
      { target: 'Kumusta ka?', native: 'How are you? (to a buddy)' },
      { target: 'Kumusta po kayo?', native: 'How are you? (to your tita)' },
      { target: 'Kumusta kayo?', native: "How are y'all? / How are you? (formal, no po — neutral)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Kumusta ka?', right: 'How are you? (casual)' },
        { left: 'Kumusta po kayo?', right: 'How are you? (respectful)' },
        { left: 'Mabuti naman, salamat', right: 'Fine, thanks' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're asking your tita. Pick the right form.",
      sentence: 'Kumusta po _____, tita?',
      options: ['kayo', 'ka', 'naman'],
      correct: 'kayo',
      context: "Tita is older — kayo + po, always. Bare 'ka' would feel chilly to her.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful, to an elder)',
      prompt: 'How are you?',
      correct: ['Kumusta po kayo?', 'Kumusta po kayo', 'kumusta po kayo?', 'kumusta po kayo'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the respectful question for your boss",
      words: ['kayo', 'Kumusta', 'po'],
      correct: ['Kumusta', 'po', 'kayo'],
      translation: 'How are you? (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: 'Your old college friend texts you. How do you ask how she is?',
      question: 'Pick the right register',
      options: [
        { text: 'Kumusta ka?', correct: true },
        { text: 'Kumusta po kayo?', correct: false },
        { text: 'Mabuti naman, salamat', correct: false },
      ],
      explanation: "She's a peer and a friend — bare 'ka', no 'po'. Adding 'po' between friends sounds weirdly distant.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Fine, thanks',
      correct: ['Mabuti naman, salamat', 'Mabuti naman salamat', 'mabuti naman, salamat', 'mabuti naman salamat'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Quezon City palengke (market). The vendor is an ate (older sister), maybe 50, weighing tomatoes. She looks up and smiles. Greet her and ask how she is.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magandang umaga po. Kumusta po kayo?', native: 'Good morning (respectful). How are you (respectful)?', correct: true, feedback: "Perfect double — greeting with 'po', then a respectful 'kayo'. She'll feel the warmth." },
          { target: 'Magandang umaga. Kumusta ka?', native: 'Good morning. How are you (casual)?', correct: false, feedback: "She's an ate, not your peer — 'ka' is too casual, and you skipped 'po' twice." },
          { target: 'Kumusta po kayo?', native: 'How are you (respectful)?', correct: false, feedback: "Greeting first! Always 'magandang umaga po' before the wellness check." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti naman, salamat. Ikaw?',
        native: "I'm well, thanks. You?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti naman po, salamat', native: "I'm fine (respectful), thanks", correct: true, feedback: "Right back at her with 'po'. That's tsika — mutual respect." },
          { target: 'Mabuti', native: 'Good', correct: false, feedback: 'Too clipped — soften it with naman, and slip in po.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just had your first real Tagalog exchange. Greeting, wellness check, reply — the whole opening dance.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How are you? (respectful, to an elder)',
        correct: ['Kumusta po kayo?', 'Kumusta po kayo', 'kumusta po kayo?', 'kumusta po kayo'],
      },
      {
        prompt: 'Fine, thanks (in Tagalog)',
        correct: ['Mabuti naman, salamat', 'Mabuti naman salamat', 'mabuti naman, salamat'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask 'Kumusta?' once today — to anyone, in any form. Friend? 'Kumusta ka?'. Stranger? 'Kumusta po kayo?'. Pick the register and feel the difference.",
    rwenSignoff: "I'll ask tomorrow how it landed. Ingat ka — take care.",
  },

  phase8: {
    scenario: "You're at a Quezon City palengke at 8am. An ate (~50) runs a tomato and kalamansi stall. You want to chat before buying — Filipino markets reward the small talk. Greet, ask how she is, reply when she asks back.",
    rwenRole: "Ate Marites — palengke vendor, mid-50s, chatty, instantly clocks whether a foreigner used 'po' and 'kayo' correctly. Warms hugely to those who do.",
    successCriteria: "User greets with 'Magandang umaga po', asks 'Kumusta po kayo?' (NOT 'Kumusta ka' — she's an elder), and when she returns the question, replies with 'Mabuti naman po, salamat' (po preserved on the reply).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
