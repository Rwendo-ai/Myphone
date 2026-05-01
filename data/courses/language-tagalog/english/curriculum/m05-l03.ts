import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Anak — Children',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Anak. One word, mountains of love. Filipinos call their children Anak even into adulthood — your Lola will still call your Tatay 'Anak' at 60. Today we learn how to talk about kids the Filipino way.",
    culturalNote: "Anak doesn't just mean 'child' — it's a term of endearment. A stranger might call a young person 'anak' on a jeepney. A teacher calls her students 'mga anak'. It carries care, never just biology.",
  },

  chunks: [
    {
      id: 'anak_na_lalaki',
      target: 'Anak na lalaki',
      native: 'Son',
      literal: 'Child that-is male',
      emoji: '👦',
      phonetic: 'A-nak na la-LA-ki',
      audioRef: null,
    },
    {
      id: 'anak_na_babae',
      target: 'Anak na babae',
      native: 'Daughter',
      literal: 'Child that-is female',
      emoji: '👧',
      phonetic: 'A-nak na ba-BA-eh',
      audioRef: null,
    },
    {
      id: 'mga_anak',
      target: 'Mga anak',
      native: 'Children',
      literal: '(plural) child',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'manga A-nak',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Specifying gender with "na lalaki / na babae"',
    explanation: "Tagalog 'anak' is gender-neutral — it just means 'child'. Add 'na lalaki' (male) or 'na babae' (female) to specify. This pattern works on lots of words: kapatid na lalaki = brother, kapatid na babae = sister.",
    examples: [
      { target: 'Anak ko na lalaki', native: 'My son' },
      { target: 'Anak ko na babae', native: 'My daughter' },
      { target: 'Mga anak ko', native: 'My children' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Anak na lalaki', right: 'Son' },
        { left: 'Anak na babae', right: 'Daughter' },
        { left: 'Mga anak', right: 'Children' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're showing a photo of your daughter.",
      sentence: 'Ito ang anak ko na _____.',
      options: ['babae', 'lalaki', 'bunso'],
      correct: 'babae',
      context: 'Daughter = anak na babae (female child).',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My children',
      correct: ['Mga anak ko', 'mga anak ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I have two sons"',
      words: ['lalaki', 'akong', 'May', 'dalawang', 'anak', 'na'],
      correct: ['May', 'dalawang', 'anak', 'akong', 'na', 'lalaki'],
      translation: 'I have two sons.',
    },
    {
      type: 'multiple_choice',
      instruction: 'A neighbour asks how many children you have. You have one son and one daughter.',
      question: 'Choose the most natural reply',
      options: [
        { text: 'May dalawa akong anak — isang lalaki, isang babae.', correct: true },
        { text: 'May dalawa akong magulang.', correct: false },
        { text: 'Wala akong Bunso.', correct: false },
      ],
      explanation: "'Dalawang anak — isang lalaki, isang babae' = 'two children — one boy, one girl'. The natural Filipino answer.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My son',
      correct: ['Anak ko na lalaki', 'anak ko na lalaki', 'Anak kong lalaki', 'anak kong lalaki'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a community fiesta. A Tita sits beside you and asks about your family.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ilan ang mga anak mo?',
        native: 'How many children do you have?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'May dalawa akong anak — isang lalaki, isang babae.', native: 'I have two children — one son, one daughter.', correct: true, feedback: "Lovely — exactly how a Filipina would answer." },
          { target: 'Mga anak ako.', native: 'I am children.', correct: false, feedback: 'Almost — but you flipped subject and object. Try again.' },
          { target: 'Bunso lang.', native: 'Just the youngest.', correct: false, feedback: "Bunso describes YOU as a youngest sibling, not your kids." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, ang sarap ng pamilya mo!',
        native: 'Oh, what a lovely family you have!',
      },
      {
        speaker: 'rwen',
        rwenLine: "She just blessed your family. That's the Filipino way — even a stranger speaks to your children with affection.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My daughter (in Tagalog)', correct: ['Anak ko na babae', 'anak ko na babae', 'Anak kong babae', 'anak kong babae'] },
      { prompt: 'My children (in Tagalog)', correct: ['Mga anak ko', 'mga anak ko'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have a child — or a niece, nephew, godchild, anyone you adore — call them 'anak' once today. Watch what it does to your tone of voice.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're at a barangay fiesta in Quezon City. A friendly Tita sitting next to you on a long bench asks about your family — especially your kids.",
    rwenRole: "Tita Cecilia — warm Filipina in her 60s, asks gentle questions about your mga anak and shares about her own three; she'll ask names, ages, and whether they're studying.",
    successCriteria: "User correctly uses 'mga anak ko' for children, plus 'anak na lalaki' (or 'anak kong lalaki') for son and 'anak na babae' for daughter. User can answer 'Ilan ang mga anak mo?'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
