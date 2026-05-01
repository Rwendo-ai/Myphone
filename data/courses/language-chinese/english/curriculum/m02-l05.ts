import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-bangzhu',
  module: 2,
  lesson: 5,
  title: 'Bāngzhù — Asking for help',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Qǐng bāngzhù wǒ. Three words that turn strangers into allies. The single most powerful phrase a traveller carries — louder than any phrasebook, kinder than any app.",
    culturalNote: "Asking for help in Chinese cities is met more warmly than tourists expect. People will go out of their way once you ask politely. Today's bonus: 'le' (了), one of Mandarin's most-used particles. It signals a CHANGE OF STATE — something that wasn't true before is true now. 'Wǒ mí lù le' = 'I've become lost' (I wasn't before; I am now).",
  },

  chunks: [
    {
      id: 'qing_bangzhu_wo',
      target: 'Qǐng bāngzhù wǒ',
      native: 'Please help me',
      literal: '(请帮助我) lit: please-help-me',
      emoji: '🆘',
      phonetic: 'ching BANG-joo waw',
      audioRef: null,
    },
    {
      id: 'wo_mi_lu_le',
      target: 'Wǒ mí lù le',
      native: "I'm lost",
      literal: '(我迷路了) lit: I-confused-road-(change of state)',
      emoji: '🧭',
      phonetic: 'waw MEE loo luh',
      audioRef: null,
    },
    {
      id: 'wo_xuyao',
      target: 'Wǒ xūyào...',
      native: 'I need...',
      literal: '(我需要) lit: I-need',
      emoji: '🙏',
      phonetic: 'waw shoo-YOW',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'le' particle — change of state",
    explanation: "'Le' (了) is one of Mandarin's most-used words. One key job: it marks something as having CHANGED. 'Wǒ mí lù' = I'm confused about the road. 'Wǒ mí lù LE' = I've BECOME lost (state changed). Don't try to translate 'le' — feel it.",
    examples: [
      { target: 'Wǒ è le', native: "I've become hungry (I wasn't, now I am)" },
      { target: 'Tā lái le', native: "He has come (he wasn't here, now he is)" },
      { target: 'Hǎo le', native: "It's done / Ready (state has shifted)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Qǐng bāngzhù wǒ', right: 'Please help me' },
        { left: 'Wǒ mí lù le', right: "I'm lost" },
        { left: 'Wǒ xūyào...', right: 'I need...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Please help me',
      correct: ['Qǐng bāngzhù wǒ', 'Qing bangzhu wo', 'qing bangzhu wo', 'qǐng bāngzhù wǒ', '请帮助我'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: tell someone you're lost (change of state — you weren't, now you are)",
      sentence: 'Wǒ mí lù _____',
      options: ['le', 'ma', 'hěn'],
      correct: 'le',
      context: "'Le' (了) marks the shift. Without it, 'wǒ mí lù' sounds like a generic statement. With it, you became lost — it just happened.",
    },
    {
      type: 'build_sentence',
      instruction: 'Tell a stranger "I\'m lost, please help me"',
      words: ['wǒ', 'le,', 'qǐng', 'bāngzhù', 'Wǒ', 'mí', 'lù'],
      correct: ['Wǒ', 'mí', 'lù', 'le,', 'qǐng', 'bāngzhù', 'wǒ'],
      translation: "I'm lost, please help me",
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'le' (了) add to 'Wǒ è'?",
      question: "'Wǒ è' vs 'Wǒ è le'",
      options: [
        { text: "It signals a CHANGE: 'I've become hungry' — I wasn't before, I am now", correct: true },
        { text: "It makes the sentence a question", correct: false },
        { text: "It makes 'è' more polite", correct: false },
      ],
      explanation: "'Le' is the change-of-state stamp. Mandarin loves marking when things shift. Once you tune your ear to it, you'll hear it in nearly every sentence.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — start of an "I need..." request',
      prompt: 'I need...',
      correct: ['Wǒ xūyào', 'Wo xuyao', 'wo xuyao', 'wǒ xūyào', '我需要'],
    },
  ],

  rwenDialogue: {
    intro: "You've wandered out of a Beijing hutong looking for the metro. Twenty minutes later, you realise you've taken three wrong turns. A man your age is sitting on a bench reading a book. He looks approachable.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎoyìsi, wǒ mí lù le. Qǐng bāngzhù wǒ.', native: "Excuse me, I'm lost. Please help me.", correct: true, feedback: 'Beautiful sequence — soft opener, honest state, polite request. He cannot say no.' },
          { target: 'Bāngzhù!', native: 'Help!', correct: false, feedback: "That's an emergency shout — too dramatic. He'll think someone is robbing you." },
          { target: 'Wǒ hǎo', native: "I'm well", correct: false, feedback: "If you're well, why are you talking to him? Show your need clearly." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Méi guānxi. Nǐ xūyào qù nǎlǐ?',
        native: 'No problem. Where do you need to go?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ xūyào qù dìtiě zhàn', native: 'I need to go to the metro station', correct: true, feedback: "Specific need stated. He can now actually help you." },
          { target: 'Wǒ bù dǒng', native: "I don't understand", correct: false, feedback: "He just asked you a clear question — answer it. This phrase only helps if you genuinely didn't catch what he said." },
          { target: 'Méi guānxi', native: "It's fine", correct: false, feedback: "That's brushing off HIS offer. You actually need help — accept it!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Watch how 'le' did the heavy lifting — 'wǒ mí lù le' told him your situation just shifted. He understood instantly. Particles are tiny, but they carry weight.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm lost (use the change-of-state particle)",
        correct: ['Wǒ mí lù le', 'Wo mi lu le', 'wo mi lu le', 'wǒ mí lù le', '我迷路了'],
      },
      {
        prompt: 'Please help me',
        correct: ['Qǐng bāngzhù wǒ', 'Qing bangzhu wo', 'qing bangzhu wo', 'qǐng bāngzhù wǒ', '请帮助我'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice one moment today where something CHANGED about you — you got tired, you got hungry, you got an idea. Mentally stamp it with 'le'. 'Wǒ lèi le.' Train the change-of-state ear.",
    rwenSignoff: "Asking for help is strength, not weakness. Zàijiàn.",
  },

  phase8: {
    scenario: "A Beijing hutong on a hot afternoon. You stepped out of your guesthouse looking for the nearest metro station and have somehow walked in a circle for twenty minutes. The alleys all look identical. You spot an older man trimming a bonsai tree outside his courtyard door — your best bet for kind, unhurried directions.",
    rwenRole: "Wáng Shīfu (王师傅) — retired bonsai keeper, mid-60s, lives in this hutong his entire life. Speaks slow, clear Beijing-tinged Mandarin and knows every shortcut.",
    successCriteria: "User uses 'wǒ mí lù le' (with the 'le'!) to explain their state, asks 'qǐng bāngzhù wǒ' politely, and states a specific destination using 'wǒ xūyào qù...' or similar — without falling back on English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
