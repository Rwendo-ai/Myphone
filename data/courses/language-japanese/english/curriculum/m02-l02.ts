import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-sumimasen',
  module: 2,
  lesson: 2,
  title: 'すみません — The Swiss Army Knife',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "If you only learn one word in Japanese, learn this one. すみません (sumimasen) does the work of three English words at once: excuse me, sorry, and even thanks-for-the-trouble. It flags people, opens conversations, smooths bumps. You'll use it ten times today.",
    culturalNote: "すみません is the Swiss Army knife of Japanese politeness. Bumped into someone? すみません. Need to flag a waiter? すみません. Someone holds a door? すみません — meaning 'sorry for the trouble' which lands as warmer than 'thanks'. Japanese gratitude often sounds like apology because it acknowledges the imposition you just caused.",
  },

  chunks: [
    {
      id: 'sumimasen',
      target: 'すみません (sumimasen)',
      native: 'Excuse me / Sorry / Thanks (for the trouble)',
      literal: 'It-is-not-finished — i.e. I am still indebted',
      emoji: '🙇',
      phonetic: 'soo-mi-mah-SEN',
      audioRef: null,
    },
    {
      id: 'sumimasen_chotto',
      target: 'すみません、ちょっと… (sumimasen, chotto…)',
      native: 'Excuse me, can I get a moment…',
      literal: 'Excuse-me, a-little…',
      emoji: '✋',
      phonetic: 'soo-mi-mah-sen, CHOH-toh',
      audioRef: null,
    },
    {
      id: 'iie_daijoubu',
      target: 'いいえ、大丈夫です (iie, daijoubu desu)',
      native: "No, it's fine / No problem",
      literal: 'No, all-right is',
      emoji: '👌',
      phonetic: 'EE-eh dai-JOH-boo dess',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'すみません — three jobs, one word',
    explanation: "すみません works in three different scenarios depending on context: (1) flagging someone (excuse me), (2) apologising (sorry), (3) thanking with humility (sorry to trouble you). The receiver reads context — your tone, what just happened — to know which one you mean. Don't overthink it; default to すみません whenever in doubt.",
    examples: [
      { target: 'すみません！(to a waiter)', native: 'Excuse me! / Over here!' },
      { target: 'すみません、遅れました (sumimasen, okuremashita)', native: "Sorry, I'm late" },
      { target: 'すみません、ありがとうございます', native: "Thanks for the trouble (taking my coat)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'すみません', right: 'Excuse me / Sorry / Thanks' },
        { left: 'すみません、ちょっと…', right: 'Excuse me, a moment…' },
        { left: 'いいえ、大丈夫です', right: "No, it's fine" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You bump someone's elbow on a packed Yamanote line train. What do you say?",
      question: 'Choose the natural response',
      options: [
        { text: 'すみません', correct: true },
        { text: 'お願いします', correct: false },
        { text: 'はい', correct: false },
      ],
      explanation: "すみません is the universal 'sorry' for small physical bumps in Japan. お願いします is for requests; はい is just 'yes'.",
    },
    {
      type: 'fill_blank',
      instruction: 'Politely flag a waiter from across a Kyoto restaurant',
      sentence: '_____！',
      options: ['すみません', 'はい', 'いいえ'],
      correct: 'すみません',
      context: "You want to catch the waiter's attention without shouting.",
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'Excuse me / Sorry (the universal one)',
      correct: ['すみません', 'sumimasen', 'Sumimasen'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely interrupt — "Excuse me, a moment…"',
      words: ['ちょっと…', 'すみません、'],
      correct: ['すみません、', 'ちょっと…'],
      translation: 'Excuse me, a moment…',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: "No, it's fine / No problem",
      correct: ['いいえ、大丈夫です', 'iie, daijoubu desu', 'Iie, daijoubu desu', 'iie daijoubu desu'],
    },
  ],

  rwenDialogue: {
    intro: "Inside a small Kyoto restaurant near Gion, your water glass is empty and the waiter's clearing tables across the room. Flag him.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'すみません！', native: 'Excuse me! (calling out)', correct: true, feedback: 'Perfect — clear, polite, audible. The waiter turns and bows slightly as he comes over.' },
          { target: 'お願いします！', native: 'Please!', correct: false, feedback: "お願いします is for the request itself — not for flagging attention. Lead with すみません to get them looking, then add the request." },
          { target: 'はい！', native: 'Yes!', correct: false, feedback: "はい is for replying. To call someone over, use すみません — that's its job." },
        ],
      },
      {
        speaker: 'npc',
        target: 'はい、ただいま参ります。',
        native: "Yes, I'll be right there.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'すみません、お水お願いします', native: 'Sorry to trouble you, water please', correct: true, feedback: 'Layered すみません on top of the request — that\'s how Japanese stacks politeness. He nods and goes for the pitcher.' },
          { target: 'お水', native: 'Water', correct: false, feedback: 'Single nouns sound like demands. Always frame with すみません or お願いします or both.' },
          { target: 'いいえ、大丈夫です', native: "No, it's fine", correct: false, feedback: "That's the line you'd say if HE asked whether you needed something. Right now you're the one asking." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'すみません flagged him. すみません softened the request. One word, two jobs, in the same exchange. That\'s why it\'s the most-used word in Japan.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Excuse me / Sorry (the universal one)', correct: ['すみません', 'sumimasen', 'Sumimasen'] },
      { prompt: "No, it's fine / No problem", correct: ['いいえ、大丈夫です', 'iie, daijoubu desu', 'Iie daijoubu desu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Use すみません three times today — even in your head. Once to flag someone (mentally), once to apologise for a small thing, once when someone holds a door. Feel how the same word does three different jobs.',
    rwenSignoff: 'One word, infinite uses. また明日.',
  },

  phase8: {
    scenario: "You're crammed into a 7pm Yamanote line carriage near Shinjuku and someone's foot is pinning the bottom of your backpack to the floor — you can't get off at the next stop without freeing it. The doors open in 30 seconds.",
    rwenRole: 'Salaryman in a navy suit — ~40, earbuds in, eyes on his phone, polite but not paying attention; he\'ll move instantly if you flag him properly, but you have to flag him.',
    successCriteria: "User leads with 'すみません' to get attention (NOT silently tugging or just saying 'お願いします'), follows with 'すみません、ちょっと…' to soften the imposition while pointing at the bag, and acknowledges with 'すみません' (thanks-for-the-trouble use) when he steps off — three different jobs of the same word in one micro-interaction.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
