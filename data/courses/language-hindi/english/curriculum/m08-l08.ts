import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-dena-lena',
  module: 8,
  lesson: 8,
  title: 'Dena / Lena — To Give, To Take',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "देना (dena — to give) and लेना (lena — to take). Two of the most-used verbs in any Indian shop, kitchen, or family transaction. 'Ek chai dena' (give me one chai) at the stall. 'Yeh lo' (take this) when handing something over. They also pair with other verbs to soften or extend meaning — 'kha lena' (take eat = to go ahead and eat). Compound verbs are coming.",
    culturalNote: "Indian generosity runs through 'dena' — guests are given food before they ask, neighbours give plates of sweets at festivals, autos return your change unbidden ('le lo, le lo' — take, take). 'Lena-dena' as a single phrase means 'transactions, dealings' in everyday speech: 'mera unse koi lena-dena nahin hai' (I have no give-and-take with them) = I have nothing to do with them.",
  },

  chunks: [
    {
      id: 'dena',
      target: 'देना — Dena',
      native: 'To give',
      literal: 'de- (give-stem) + -na',
      emoji: '🤲',
      phonetic: 'DAY-na',
      audioRef: null,
    },
    {
      id: 'lena',
      target: 'लेना — Lena',
      native: 'To take',
      literal: 'le- (take-stem) + -na',
      emoji: '🫴',
      phonetic: 'LAY-na',
      audioRef: null,
    },
    {
      id: 'mujhe_do',
      target: 'मुझे ___ दो / दीजिए — Mujhe ___ do / dijiye',
      native: 'Give me ___ (informal / formal)',
      literal: 'To-me ___ give-tum / give-aap',
      emoji: '👉',
      phonetic: 'mu-jhay ... DOH / DEE-ji-yay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe + object + dena — the universal "give me" frame',
    explanation: "'Give me X' in Hindi: 'Mujhe X do/dijiye' — literally 'to-me X give'. 'Mujhe' (to me) is an indirect-object pronoun. The object goes in the middle. The command verb (do informal / dijiye formal) comes last. Same frame works for ordering at a chai stall, asking for the salt at dinner, or requesting time off from your boss.",
    examples: [
      { target: 'मुझे एक चाय दीजिए — Mujhe ek chai dijiye', native: 'Give me one chai (formal — at a stall)' },
      { target: 'यह लो — Yeh lo', native: 'Take this (informal)' },
      { target: 'मेरा बैग ले लीजिए — Mera bag le lijiye', native: 'Take my bag (formal — to a hotel porter)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Dena', right: 'To give' },
        { left: 'Lena', right: 'To take' },
        { left: 'Mujhe ek chai dijiye', right: 'Give me one chai (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order one chai politely at a stall',
      sentence: 'Mujhe ek chai _____.',
      options: ['dijiye', 'do', 'lijiye'],
      correct: 'dijiye',
      context: 'Formal command of dena = dijiye. Polite, common at any chai-stall.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Take this (informal)',
      correct: ['Yeh lo', 'yeh lo', 'Ye lo', 'ye lo'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'Give me water' politely to a stranger?",
      question: 'Polite request for water:',
      options: [
        { text: 'Mujhe paani dijiye', correct: true },
        { text: 'Paani de', correct: false },
        { text: 'Main paani lena', correct: false },
      ],
      explanation: "'Mujhe (to me) + object + dijiye (formal give-command)' is the universal polite request frame.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Give me two samosas, please' (formal)",
      words: ['Mujhe', 'do', 'samose', 'dijiye.'],
      correct: ['Mujhe', 'do', 'samose', 'dijiye.'],
      translation: 'Give me two samosas (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (formal)',
      prompt: 'Give me water',
      correct: ['Mujhe paani dijiye', 'mujhe paani dijiye'],
    },
  ],

  rwenDialogue: {
    intro: "Tuesday 8:30am, you stop at a chai stall on the way to the office. The chai-wallah looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'जी, क्या लीजिएगा?',
        native: 'Yes sir, what will you take?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mujhe ek chai aur ek samosa dijiye, bhaiya. Kitne ka hai?', native: 'Give me one chai and one samosa, brother. How much is it?', correct: true, feedback: "Used 'mujhe + object + dijiye' frame, called him 'bhaiya' (brother — friendly), asked the price. Total chai-stall etiquette." },
          { target: 'Ek chai do', native: 'Give one chai (too curt)', correct: false, feedback: "Add 'mujhe' (to me) and use formal 'dijiye'. 'Mujhe ek chai dijiye' — politer, smoother." },
          { target: 'Main chai lena chahta hoon', native: "I want to take chai (overcomplicated)", correct: false, feedback: "Simpler is better at a stall. 'Mujhe ek chai dijiye' — direct, polite, perfect." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mujhe + object + dijiye. The frame works for chai, samosas, train tickets, hotel rooms — every transaction in India. Two verbs, infinite uses.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Give me one chai (formal)', correct: ['Mujhe ek chai dijiye', 'mujhe ek chai dijiye'] },
      { prompt: 'Take this (informal)', correct: ['Yeh lo', 'yeh lo', 'Ye lo', 'ye lo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order something today — a chai, a coffee, a snack. Even if it's at your home kitchen. Say 'Mujhe ek ___ dijiye' (formal) or 'Ek ___ do' (casual). The give-take frame in your real life.",
    rwenSignoff: "Lena-dena — give-and-take. The rhythm of every Indian relationship. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday afternoon at the local sabzi-mandi (vegetable market) in Pune. The vendor (uncle, ~55, friendly aap-register) doesn't speak English. You need to order: two kilos of onions, half a kilo of tomatoes, and one bunch of coriander. Use 'mujhe + object + dijiye' for each request, ask the price ('kitne ka hai?'), and use 'lena' to confirm you'll take it ('main yeh le lunga/lungi').",
    rwenRole: "Sabzi-wallah uncle — friendly Hindi-only, formal aap. Will gently repeat numbers if you stumble. Not a tourist trap — fair prices, expects polite Hindi.",
    successCriteria: "User uses 'Mujhe ___ dijiye' frame at least three times for the three items. Asks 'kitne ka hai?' for price. Confirms taking with 'main yeh le lunga' (man) or 'main yeh le lungi' (woman) — future of lena. Stays in formal aap throughout. Gender ending on lena correct.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
