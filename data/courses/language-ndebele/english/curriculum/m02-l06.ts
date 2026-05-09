import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06',
  module: 2,
  lesson: 6,
  title: 'Livuke njani / Litshone njani — Time-of-day greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beyond plain 'salibonani', Ndebele has time-of-day greetings that show extra care. 'Livuke njani' literally asks 'how have you woken up' — the morning check-in. 'Litshone njani' asks 'how has your day gone' — the evening one. Use either and you sound several months further along than you are.",
    culturalNote: "These greetings carry real weight in older neighbourhoods and rural areas. 'Livuke njani' (with the 'li-' plural-respect) is what you say to anyone older than you in the morning — not 'salibonani'. The reply is 'sivuke kuhle' (we woke up well). At sunset, 'litshone njani?' replaces hello entirely. Skipping these for younger generic greetings is fine in Bulawayo's CBD but lands flat in places like Lupane or with older relatives.",
  },

  chunks: [
    {
      id: 'livuke_njani',
      target: 'Livuke njani?',
      native: 'How did you wake up? (morning, plural/respectful)',
      literal: 'You-(plural)-woke how?',
      emoji: '🌅',
      phonetic: 'lee-VOO-keh nJAH-nee',
      audioRef: null,
    },
    {
      id: 'sivuke_kuhle',
      target: 'Sivuke kuhle',
      native: 'We woke up well',
      literal: 'We-woke well — standard reply',
      emoji: '☀️',
      phonetic: 'see-VOO-keh KOO-hleh',
      audioRef: null,
    },
    {
      id: 'litshone_njani',
      target: 'Litshone njani?',
      native: 'How has your day gone? (evening)',
      literal: 'You-(plural)-have-set how? — sunset greeting',
      emoji: '🌇',
      phonetic: 'lee-CHOH-neh nJAH-nee',
      audioRef: null,
    },
    {
      id: 'sitshone_kuhle',
      target: 'Sitshone kuhle',
      native: "We've had a good day",
      literal: 'We-have-set well',
      emoji: '🌆',
      phonetic: 'see-CHOH-neh KOO-hleh',
      audioRef: null,
    },
    {
      id: 'uvuke_njani',
      target: 'Uvuke njani?',
      native: 'How did you wake up? (singular casual)',
      literal: 'You-(singular)-woke how?',
      emoji: '🌄',
      phonetic: 'oo-VOO-keh nJAH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greetings — vuka (wake) vs tshona (set)',
    explanation: "Two verb roots cover most of the day. 'Vuka' = to wake — used as a morning greeting until about 10am. 'Tshona' = to set (like the sun) — used from late afternoon onward. Both follow the plural/singular respect rule: 'li-' for elders or groups ('Livuke njani'), 'u-' for peers ('Uvuke njani'). Reply with 'si-' (we) — 'Sivuke kuhle' / 'Sitshone kuhle'.",
    examples: [
      { target: 'Livuke njani? / Sivuke kuhle.', native: 'Morning — how did you wake? / We woke well.' },
      { target: 'Litshone njani? / Sitshone kuhle.', native: 'Evening — how has your day been? / It went well.' },
      { target: 'Uvuke njani, mngane?', native: 'How did you wake up, friend? (peer)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to the time of day',
      pairs: [
        { left: 'Livuke njani?', right: 'Morning (respectful)' },
        { left: 'Litshone njani?', right: 'Evening (respectful)' },
        { left: 'Sivuke kuhle', right: 'We woke up well' },
        { left: 'Sitshone kuhle', right: "We've had a good day" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 6:30am. You're walking past your neighbour Gogo on her veranda. What do you say?",
      question: 'Pick the cleanest greeting',
      options: [
        { text: 'Livuke njani?', correct: true },
        { text: 'Litshone njani?', correct: false },
        { text: 'Sawubona', correct: false },
      ],
      explanation: "Morning + elder = 'Livuke njani'. 'Litshone' is sunset territory. 'Sawubona' is fine but the time-of-day version shows more care.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "We had a good day" (the standard evening reply)',
      words: ['kuhle', 'Sitshone', 'njani'],
      correct: ['Sitshone', 'kuhle'],
      translation: "We've had a good day",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'How did you wake up? (morning, respectful)',
      correct: ['Livuke njani', 'livuke njani', 'Livuke njani?', 'livuke njani?'],
    },
  ],

  rwenDialogue: {
    intro: "It's 6:45am. You're heading to the bakery in Hillside. An elderly woman next door is sweeping her stoep. She looks up as you pass.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Livuke njani?', native: 'How did you wake up? (respectful morning)', correct: true, feedback: "She stops sweeping and beams. 'Sivuke kuhle, sibili.' (Truly well.) You've been seen as someone who knows." },
          { target: 'Litshone njani?', native: "How has your day gone?", correct: false, feedback: "It's 7am. The day hasn't gone anywhere yet. 'Litshone' belongs to sunset." },
          { target: 'Sawubona', native: 'Hi (singular)', correct: false, feedback: "Workable, but you've used the peer-greeting on a gogo and skipped the time-of-day version. The morning greeting would have warmed her up much more." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sivuke kuhle, sibili. Wena?',
        native: 'We woke well, truly. And you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngivuke kuhle, ngiyabonga.', native: 'I woke well, thank you.', correct: true, feedback: "Mirror back with 'ngi-' (I) since she's asking just you. Perfect." },
          { target: 'Ngiyaphila.', native: "I'm fine.", correct: false, feedback: "Right vibe, wrong question — she's asking how you woke up specifically. 'Ngivuke kuhle' is the matching reply." },
          { target: 'Salibonani.', native: 'Hello.', correct: false, feedback: "Already past hello. She's into the volley now." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Vuke' for waking, 'tshone' for setting. Two verbs and you've got morning AND evening greetings locked. Big upgrade.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How did you wake up? (respectful)', correct: ['Livuke njani', 'livuke njani', 'Livuke njani?', 'livuke njani?'] },
      { prompt: "How has your day gone? (evening)", correct: ['Litshone njani', 'litshone njani', 'Litshone njani?', 'litshone njani?'] },
      { prompt: 'We woke up well', correct: ['Sivuke kuhle', 'sivuke kuhle'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use one time-of-day greeting today. If it's before 10am, 'Livuke njani'. After 5pm, 'Litshone njani'. Send it as a voice note or use it walking past a neighbour. Both win.",
    rwenSignoff: "Time-of-day greetings show you've been paying attention. That's the whole point. Sala kuhle.",
  },

  phase8: {
    scenario: "It's just before 7am. You're walking down a quiet street in Bulawayo's Hillside, heading to the bakery. Three older neighbours are out — one watering plants, one sweeping, one waiting at her gate. Greet each one as you pass with the morning version, and respond when one bounces it back.",
    rwenRole: "Three neighbours in their 60s-70s, all friendly, expecting the morning version of greeting; one will stop you for a longer chat to test you on 'wena?'.",
    successCriteria: "User uses 'Livuke njani?' (NOT generic 'Salibonani') for at least two of the three, replies 'Ngivuke kuhle' when asked back, and switches to plural 'Sivuke kuhle' if they're asked on behalf of the household.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
