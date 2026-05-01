import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Mga Kaibigan — Friends as Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In the Philippines, your barkada — your tropa, your closest friends — aren't separate from family. They're a kind of family. They show up to your wedding, your wake, and every karaoke night in between. Today we learn the words for chosen family.",
    culturalNote: "Filipinos have a phrase: 'Tulad ng pamilya' — like family. It's said about close friends often. The line between blood family and kaibigan is generously blurred. Your tropa eat at your house, your Tita feeds them too.",
  },

  chunks: [
    {
      id: 'pinakamatalik_na_kaibigan',
      target: 'Pinakamatalik na kaibigan',
      native: 'Best friend',
      literal: 'Most-close that-is friend',
      emoji: '💖',
      phonetic: 'pi-na-ka-ma-TA-lik na ka-i-BI-gan',
      audioRef: null,
    },
    {
      id: 'tropa',
      target: 'Tropa',
      native: 'Squad / close friend group',
      literal: 'Crew / barkada',
      emoji: '👥',
      phonetic: 'TRO-pa',
      audioRef: null,
    },
    {
      id: 'tulad_ng_pamilya',
      target: 'Tulad ng pamilya',
      native: 'Like family',
      literal: 'Like (the) family',
      emoji: '🫂',
      phonetic: 'TU-lad nang pa-MIL-ya',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family vocabulary extends to friends',
    explanation: "'Tulad ng pamilya' (like family) is a Filipino superlative for friendship. You can also drop straight into kinship words: tropa = your crew (barkada). And remember — your closest friends still get Kuya/Ate/Tito/Tita if older.",
    examples: [
      { target: 'Pinakamatalik kong kaibigan si Anna.', native: 'Anna is my best friend.' },
      { target: 'Tropa ko sila.', native: 'They are my squad.' },
      { target: 'Tulad ng pamilya na sila.', native: "They're like family already." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Pinakamatalik na kaibigan', right: 'Best friend' },
        { left: 'Tropa', right: 'Squad / close friends' },
        { left: 'Tulad ng pamilya', right: 'Like family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're talking about your university friend group from Manila — you've been tight for ten years.",
      sentence: 'Sila ang _____ ko mula college.',
      options: ['tropa', 'biyenan', 'apo'],
      correct: 'tropa',
      context: "Tropa = your crew, your barkada. The word that says 'these are my people'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My best friend',
      correct: ['Pinakamatalik kong kaibigan', 'pinakamatalik kong kaibigan', 'Pinakamatalik na kaibigan ko', 'pinakamatalik na kaibigan ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "They are like family"',
      words: ['Tulad', 'pamilya', 'sila', 'ng'],
      correct: ['Tulad', 'ng', 'pamilya', 'sila'],
      translation: 'They are like family.',
    },
    {
      type: 'multiple_choice',
      instruction: "A new colleague asks about your closest friends from back home — the ones who showed up at every birthday, breakdown, and karaoke night.",
      question: 'Which phrase captures it best?',
      options: [
        { text: 'Tropa ko sila — tulad ng pamilya.', correct: true },
        { text: 'Mga magulang ko sila.', correct: false },
        { text: 'Mga apo ko sila.', correct: false },
      ],
      explanation: "'Tropa ko sila — tulad ng pamilya' = 'they're my crew — like family'. The full Filipino feeling.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'They are like family.',
      correct: ['Tulad ng pamilya sila.', 'tulad ng pamilya sila', 'Tulad ng pamilya na sila.', 'tulad ng pamilya na sila'],
    },
  ],

  rwenDialogue: {
    intro: "A new Filipino friend asks about your closest people. You start describing your three friends from college — the ones who'd drop everything for you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sino ang pinakamatalik mong kaibigan?',
        native: 'Who is your best friend?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pinakamatalik kong kaibigan si Anna. Tropa ko sila — tulad ng pamilya.', native: 'My best friend is Anna. They\'re my crew — like family.', correct: true, feedback: 'Beautiful. You said it the Filipino way.' },
          { target: 'Pamilya ko sila.', native: 'They are my family.', correct: false, feedback: "Close, but the Filipino phrase 'tulad ng pamilya' (like family) is what you want." },
          { target: 'Biyenan ko sila.', native: 'They are my in-laws.', correct: false, feedback: 'Biyenan is in-laws — for friends use tropa/kaibigan.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ang sarap niyan. Magkikita ba kayo?',
        native: "That's lovely. Will you all see each other?",
      },
      {
        speaker: 'rwen',
        rwenLine: "In Filipino, 'tulad ng pamilya' isn't a metaphor — it's a status. You just told her your tropa has earned that name.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Best friend (in Tagalog)', correct: ['Pinakamatalik na kaibigan', 'pinakamatalik na kaibigan', 'Pinakamatalik kong kaibigan', 'pinakamatalik kong kaibigan'] },
      { prompt: 'Like family (in Tagalog)', correct: ['Tulad ng pamilya', 'tulad ng pamilya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Message one friend who is 'tulad ng pamilya' — like family — to you. Even one line. Use the Tagalog phrase if you can. Tell them what they are to you.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're at a karaoke night with your tropa from college, ten years deep. A new Filipino friend joins for the first time and asks how you all know each other.",
    rwenRole: "Janine — friendly newcomer to the group, asks who's who, who's the pinakamatalik kong kaibigan, and how long the tropa has been together; she's looking for genuine warmth, not just a list.",
    successCriteria: "User correctly uses 'tropa' for the friend group, names a 'pinakamatalik kong kaibigan' (best friend), and uses 'tulad ng pamilya' to describe the closeness. Bonus: at least one Kuya/Ate title for older friends.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
