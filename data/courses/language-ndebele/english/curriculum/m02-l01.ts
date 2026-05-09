import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01',
  module: 2,
  lesson: 1,
  title: 'Salibonani vs Sawubona',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Most beginner books teach you 'Sawubona' first because it's the famous one. In isiNdebele, the everyday default is actually 'Salibonani' — plural-respectful, used for one elder or a whole group. Get this one right and you sound like you've been here before.",
    culturalNote: "In Ndebele culture, plural address is the polite default — even when you're talking to one person, especially an elder. 'Sawubona' (singular) is for peers, kids, or someone you know well. 'Salibonani' (plural) is what you say walking into anywhere — a shop, a homestead, a kombi. Skipping the greeting and going straight to your question reads as disrespect, no exceptions.",
  },

  chunks: [
    {
      id: 'salibonani',
      target: 'Salibonani',
      native: 'Hello (to a group, or one person respectfully)',
      literal: 'We see you (plural)',
      emoji: '👋',
      phonetic: 'sah-lee-boh-NAH-nee',
      audioRef: null,
    },
    {
      id: 'sawubona',
      target: 'Sawubona',
      native: 'Hello (to one person, casual)',
      literal: 'We see you (singular)',
      emoji: '🙋',
      phonetic: 'sah-woo-BOH-nah',
      audioRef: null,
    },
    {
      id: 'yebo',
      target: 'Yebo',
      native: 'Yes / Hi back',
      literal: 'Yes — also the standard reply to a greeting',
      emoji: '✅',
      phonetic: 'YEH-boh',
      audioRef: null,
    },
    {
      id: 'salibonani_bobaba',
      target: 'Salibonani bobaba',
      native: 'Hello, gentlemen / sirs',
      literal: 'Salibonani + bobaba (plural fathers/men)',
      emoji: '👨‍👨‍👦',
      phonetic: 'sah-lee-boh-NAH-nee boh-BAH-bah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Plural greeting as default respect',
    explanation: "Ndebele greetings shift with number AND respect. 'Salibonani' (li = you-plural) covers both groups and respectful singular — it's the safe default with anyone older, in a service role, or you don't know. 'Sawubona' (wu = you-singular) is reserved for peers, friends, kids. When in doubt, go plural.",
    examples: [
      { target: 'Salibonani', native: 'Hello (group OR respectful singular)' },
      { target: 'Sawubona', native: 'Hi (one peer or someone younger)' },
      { target: 'Yebo, salibonani', native: 'Yes hello — replying to a greeting' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to who you would say it to',
      pairs: [
        { left: 'Salibonani', right: 'A shopkeeper / a group / an elder' },
        { left: 'Sawubona', right: 'Your friend the same age as you' },
        { left: 'Yebo', right: 'Replying when someone greets you first' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You walk into a small grocery shop in Bulawayo. The owner — a woman in her 50s — looks up. What do you say first?',
      question: 'Choose the right greeting',
      options: [
        { text: 'Salibonani', correct: true },
        { text: 'Sawubona', correct: false },
        { text: '(Just ask for what you want)', correct: false },
      ],
      explanation: "She's older, you don't know her, and you're entering her space — that's plural-respectful territory. 'Salibonani' lands perfectly. Going straight to your request would be read as rude.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Yes, hello"',
      words: ['salibonani', 'Yebo', 'sawubona'],
      correct: ['Yebo', 'salibonani'],
      translation: 'Yes, hello (replying to a greeting)',
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'Hello (to a group of people)',
      correct: ['Salibonani', 'salibonani'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small tuck-shop in Bulawayo. An older man behind the counter is folding airtime cards. Greet him first — then you can buy your bread.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani', native: 'Hello (respectful)', correct: true, feedback: "He looks up, eyes warm. 'Yebo, salibonani.' You're in." },
          { target: 'Sawubona', native: 'Hi (casual)', correct: false, feedback: "He'll still reply — but you've used the peer-greeting on someone twice your age. Ndebele plural-respect would have landed better." },
          { target: 'Bread, please.', native: '(skip the greeting)', correct: false, feedback: "Hard cultural miss. In Ndebele Zimbabwe you greet first, transact second. Always." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, salibonani. Unjani?',
        native: 'Yes hello. How are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo', native: 'Yes / fine', correct: true, feedback: "Clean. 'Yebo' works as both 'yes' and a soft greeting-reply. Now you can ask for the bread." },
          { target: 'Salibonani', native: 'Hello', correct: false, feedback: "You already greeted him — he's now asking how you are. 'Yebo' acknowledges that." },
          { target: 'Sawubona', native: 'Hi (singular)', correct: false, feedback: "Still wrong number for him — and he's asking a follow-up, not greeting again." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Salibonani is your everyday key. Sawubona is for friends. Get the number right and Ndebele opens up fast.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hello (to a group, or respectfully to one elder)', correct: ['Salibonani', 'salibonani'] },
      { prompt: 'Hi (to a friend your age)', correct: ['Sawubona', 'sawubona'] },
      { prompt: 'Yes / Hi back', correct: ['Yebo', 'yebo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one shop, kombi, or stranger today. Lead with 'Salibonani' before saying anything else. Notice how the energy changes — most people will straighten up and smile.",
    rwenSignoff: "Greeting first, transacting second. That's the Ndebele rule. Sala kuhle.",
  },

  phase8: {
    scenario: "You walk into a small spaza-style tuck-shop in Bulawayo's Mzilikazi suburb at 4pm. An older man, maybe 60s, is behind the counter restocking matches. You want to buy a loaf of bread and airtime — but greeting comes first, plural-respectful.",
    rwenRole: "Baba Sibanda — late 60s, kind but old-school, will warm up fast if you greet correctly with 'Salibonani', will be politely cool if you skip the greeting or use 'Sawubona' (peer form) on him.",
    successCriteria: "User opens with 'Salibonani' (NOT 'Sawubona'), accepts the 'Unjani?' follow-up with 'Yebo', and only THEN moves to the actual purchase request. Bonus if they re-use 'Salibonani' if a second customer walks in.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
