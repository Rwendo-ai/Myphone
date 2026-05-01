import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-shi-you',
  module: 8,
  lesson: 1,
  title: 'Shì & Yǒu — Be & Have',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Two verbs unlock half of Chinese: shì (是) — to be, and yǒu (有) — to have. Today you tell people who you are and what you carry. There's one quirk that trips up every English speaker — and we'll meet it head-on.",
    culturalNote: "Mandarin keeps shì (是) for identity only — your name, role, nationality. For 'I am tired' or 'I am happy', you don't use shì at all (you'd say 'wǒ hěn lèi'). And yǒu (有) — to have — has its own private negative: méi yǒu (没有), not bù yǒu. No exceptions. The whole language respects this little asymmetry.",
  },

  chunks: [
    {
      id: 'wo_shi',
      target: 'Wǒ shì lǎoshī',
      native: 'I am a teacher',
      literal: '(我是老师) lit: I-am-teacher',
      emoji: '🧑‍🏫',
      phonetic: 'WAW shrr LAO-shrr',
      audioRef: null,
    },
    {
      id: 'wo_you',
      target: 'Wǒ yǒu yí ge dìdi',
      native: 'I have a younger brother',
      literal: '(我有一个弟弟) lit: I-have-one-(measure)-younger-brother',
      emoji: '👬',
      phonetic: 'WAW yo yee guh DEE-dee',
      audioRef: null,
    },
    {
      id: 'mei_you',
      target: 'Tā méi yǒu shíjiān',
      native: "He doesn't have time",
      literal: '(他没有时间) lit: he-not-have-time',
      emoji: '⏰',
      phonetic: 'tah may yo SHRR-jyen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The negative quirk: bù vs méi',
    explanation: "To negate shì, use bù: 'wǒ bú shì' (I am not). To negate yǒu, you MUST use méi: 'wǒ méi yǒu' (I don't have). Yǒu is the one verb that refuses bù. Memorise this pair as a unit and you'll never trip on it.",
    examples: [
      { target: 'Wǒ bú shì xuéshēng', native: "I'm not a student (shì → bù shì)" },
      { target: 'Wǒ méi yǒu qián', native: "I don't have money (yǒu → méi yǒu)" },
      { target: 'Tā bú shì Zhōngguó rén', native: "She's not Chinese" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ shì lǎoshī', right: 'I am a teacher' },
        { left: 'Wǒ yǒu yí ge dìdi', right: 'I have a younger brother' },
        { left: 'Tā méi yǒu shíjiān', right: "He doesn't have time" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right negative',
      sentence: 'Wǒ _____ yǒu shǒujī',
      options: ['méi', 'bù', 'bú'],
      correct: 'méi',
      context: "Yǒu (to have) takes méi, not bù. So: wǒ méi yǒu shǒujī — I don't have a phone.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I am a teacher',
      correct: ['Wǒ shì lǎoshī', 'Wo shi laoshi', 'wo shi laoshi', 'wǒ shì lǎoshī', '我是老师'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "He doesn\'t have time"',
      words: ['shíjiān', 'Tā', 'yǒu', 'méi'],
      correct: ['Tā', 'méi', 'yǒu', 'shíjiān'],
      translation: "He doesn't have time",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I don't have money (use méi yǒu)",
      correct: ['Wǒ méi yǒu qián', 'Wo mei you qian', 'wo mei you qian', 'wǒ méi yǒu qián', '我没有钱'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sentence is grammatical?',
      question: 'Pick the correct negative form',
      options: [
        { text: 'Wǒ méi yǒu shíjiān', correct: true },
        { text: 'Wǒ bù yǒu shíjiān', correct: false },
        { text: 'Wǒ bú yǒu shíjiān', correct: false },
      ],
      explanation: "Yǒu is the special one — it always pairs with méi for negation, never with bù. Lock that pair together in your head: méi yǒu.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a welcome dinner for new colleagues at a Beijing tech firm. Someone leans over with the classic opening question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ shì lǎoshī ma?',
        native: 'Are you a teacher?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bú shì, wǒ shì gōngchéngshī', native: "No, I'm an engineer", correct: true, feedback: 'Clean negative — bù turns into bú before a falling tone (shì). Natural and correct.' },
          { target: 'Méi yǒu, wǒ shì gōngchéngshī', native: 'No-have, I am an engineer', correct: false, feedback: "Méi yǒu is for 'don't have'. For 'am not', use bú shì." },
          { target: 'Wǒ yǒu lǎoshī', native: 'I have a teacher', correct: false, feedback: "That answers a different question. Stick with shì for identity." },
        ],
      },
      {
        speaker: 'npc',
        target: 'A, gōngchéngshī! Nǐ yǒu míngpiàn ma?',
        native: 'Ah, an engineer! Do you have a business card?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two verbs, two clean answers. Shì for who you are, yǒu for what you carry. The colleague now knows both.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I am a teacher',
        correct: ['Wǒ shì lǎoshī', 'Wo shi laoshi', 'wo shi laoshi', 'wǒ shì lǎoshī', '我是老师'],
      },
      {
        prompt: "He doesn't have time",
        correct: ['Tā méi yǒu shíjiān', 'Ta mei you shijian', 'ta mei you shijian', 'tā méi yǒu shíjiān', '他没有时间'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use shì and yǒu (or their negatives) five times today — even silently in your head. 'Wǒ shì...' to introduce yourself, 'wǒ yǒu...' for what's in your bag, 'wǒ méi yǒu...' for what's missing.",
    rwenSignoff: "Two verbs, half the language. Míngtiān jiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "First day at a Beijing tech company. You're in the small kitchen pouring hot water for tea when a cheerful colleague spots you and starts the standard new-hire interrogation: who are you, what do you do, do you have a WeChat, are you new here?",
    rwenRole: "Lǐ Wěi (李伟) — friendly mid-30s product manager, has been at the company 5 years. Curious, asks lots of questions in a row, switches between shì and yǒu naturally. Will gently nudge if you mix up bù and méi.",
    successCriteria: "User uses 'wǒ shì...' to state their role, 'wǒ yǒu...' for at least one thing they have (WeChat, a phone, a question), and demonstrates the méi yǒu vs bú shì distinction at least once when answering a 'do you have' or 'are you' question in the negative.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
