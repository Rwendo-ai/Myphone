import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08',
  module: 5,
  lesson: 8,
  title: 'umngane, uthando — Friendship and Love',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Family is one circle. Friends and lovers are another, sometimes overlapping. umngane — friend. uthando — love. These two words travel everywhere in spoken isiNdebele, from teasing schoolyard banter to the deepest declarations a person ever makes.",
    culturalNote: "In Ndebele culture, calling someone umngane wami (my friend) is more than 'we hang out'. It signals chosen kinship — someone you'd defend, host, eat with. The word stretches: a close friend may eventually be called umfowethu (my brother) even with no blood tie. Language follows love before grammar does.",
  },

  chunks: [
    {
      id: 'umngane',
      target: 'umngane',
      native: 'Friend',
      literal: 'um- (class 1 prefix, person) + ngane. Plural is abangane (friends).',
      emoji: '🤝🏾',
      phonetic: 'oom-NGAH-neh',
      audioRef: null,
    },
    {
      id: 'uthando',
      target: 'uthando',
      native: 'Love',
      literal: 'u- (class 11 prefix) + thando. Both the noun (love) and the feeling.',
      emoji: '❤️',
      phonetic: 'oo-THAHN-doh',
      audioRef: null,
    },
    {
      id: 'siyathandana',
      target: 'siyathandana',
      native: 'We love each other',
      literal: 'si- (we) + ya (present) + thanda (love) + -na (each other / reciprocal). One whole sentence in one word.',
      emoji: '💑🏾',
      phonetic: 'see-yah-thahn-DAH-nah',
      audioRef: null,
    },
    {
      id: 'isithandwa',
      target: 'isithandwa',
      native: 'Beloved / sweetheart',
      literal: 'isi- (class 7 prefix) + thandwa (loved one). The one who is loved.',
      emoji: '💞',
      phonetic: 'ee-see-THAHN-dwah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The verb root -thanda and its family',
    explanation: "From the root -thanda (to love, to like) you get many words. uthando = love (noun). isithandwa = beloved. siyathandana = we love each other (with the reciprocal -ana). Ngiyakuthanda = I love you. The same root threads through friendship and romance — Ndebele doesn't strictly separate them.",
    examples: [
      { target: 'umngane wami', native: 'My friend' },
      { target: 'Ngiyakuthanda', native: 'I love you' },
      { target: 'siyathandana', native: 'We love each other' },
      { target: 'isithandwa sami', native: 'My beloved' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'umngane', right: 'Friend' },
        { left: 'uthando', right: 'Love' },
        { left: 'siyathandana', right: 'We love each other' },
        { left: 'isithandwa', right: 'Beloved / sweetheart' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You introduce your closest friend at a gathering.',
      sentence: 'Lo ngu_____ wami osondelene.',
      options: ['mngane', 'Mama', 'thando'],
      correct: 'mngane',
      context: 'Friend = umngane. After "ngu" the prefix u- often elides to "ngumngane".',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'I love you.',
      correct: ['Ngiyakuthanda', 'Ngiyakuthanda.', 'ngiyakuthanda'],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the correct breakdown",
      question: "What does the -ana ending in siyathandana do?",
      options: [
        { text: 'Marks reciprocity — "each other". siyathandana = we love EACH OTHER.', correct: true },
        { text: 'Marks the past tense.', correct: false },
        { text: 'Marks the noun as plural.', correct: false },
      ],
      explanation: "-ana is the reciprocal suffix. Stick it on a verb and the action becomes mutual. siyathanda = we love. siyathandana = we love each other.",
    },
  ],

  rwenDialogue: {
    intro: "At a small dinner, you introduce your closest friend to a Ndebele family. They watch carefully — they want to understand the bond.",
    lines: [
      { speaker: 'rwen', rwenLine: "They are looking at you and your friend. Tell them what you are to each other — in isiNdebele, with warmth." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lo ngumngane wami osondelene. Sihlangene iminyaka eminengi.', native: 'This is my close friend. We have been together for many years.', correct: true, feedback: "Kinship-warm, time-bound, said with weight. The family understands the bond." },
          { target: 'My friend.', native: 'My friend (English).', correct: false, feedback: "English here misses the moment. Use 'Lo ngumngane wami osondelene' — this is my close friend." },
          { target: 'Siyathandana.', native: 'We love each other.', correct: false, feedback: "Strong word — 'siyathandana' is more often used for romantic partners. For a close friend use 'umngane wami osondelene' (my close friend)." },
        ],
      },
      { speaker: 'npc', target: 'Abangane abahle bayisipho. Wamukelekile lapha lobabili.', native: 'Good friends are a gift. You are both welcome here.' },
      { speaker: 'rwen', rwenLine: "umngane wami. Three syllables that opened their door.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Friend', correct: ['umngane', 'Umngane'] },
      { prompt: 'Love (the noun)', correct: ['uthando', 'Uthando'] },
      { prompt: 'I love you.', correct: ['Ngiyakuthanda', 'Ngiyakuthanda.'] },
      { prompt: 'We love each other.', correct: ['siyathandana', 'Siyathandana', 'siyathandana.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one friend and one person you love. Write a short isiNdebele sentence for each: 'umngane wami osondelene ngu___' and 'isithandwa sami ngu___'. Read them aloud. The names of the people we love become anchors for the new vocabulary.",
    rwenSignoff: "Friendship, love. Two of the strongest words in any language. Tomorrow — the cultural concept that binds them in marriage: lobola.",
  },

  phase8: {
    scenario: "An older Ndebele woman at a Sunday lunch is asking about your life — does anyone love you, do you have close friends. The conversation is gentle but personal. You answer with isiNdebele kinship vocabulary, talking about umngane wami and (if applicable) isithandwa sami.",
    rwenRole: "Auntie Thandi — a 60s aunt at the table, the kind who asks soft questions about love and friendship. She'll celebrate any honest answer.",
    successCriteria: "User uses umngane (friend) at least once, ideally with a possessive (umngane wami), and either uthando, siyathandana, or isithandwa naturally in describing their close people. Stays in isiNdebele for the bulk of the answer.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
