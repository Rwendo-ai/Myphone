import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-qing',
  module: 1,
  lesson: 4,
  title: 'Qǐng — Please',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Qǐng' is the magic word for asking. Pair it with a verb and you've got polite. 'Qǐng wèn' (literally 'please ask') is how every well-mannered question in Mandarin starts — like 'excuse me' before an English question.",
    culturalNote: "In China, 'qǐng wèn' opens questions to strangers — concierges, shop staff, passers-by. Skip it and your question lands as a demand. 'Bù hǎoyìsi' is a softer 'sorry/excuse me' for tiny interruptions, like nudging through a crowd.",
  },

  chunks: [
    {
      id: 'qing',
      target: 'Qǐng',
      native: 'Please',
      literal: '(请) lit: please / invite',
      emoji: '🙏',
      phonetic: 'CHING ("q" = "ch"; rhymes with "sing")',
      audioRef: null,
    },
    {
      id: 'qing_wen',
      target: 'Qǐng wèn...',
      native: 'Excuse me, may I ask...',
      literal: '(请问) lit: please-ask',
      emoji: '❓',
      phonetic: 'ching WUN',
      audioRef: null,
    },
    {
      id: 'bu_haoyisi',
      target: 'Bù hǎoyìsi',
      native: 'Sorry / excuse me (light)',
      literal: "(不好意思) lit: not-good-meaning (i.e. embarrassing)",
      emoji: '😅',
      phonetic: 'BOO how-EE-sih',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request markers',
    explanation: "'Qǐng' goes before a verb to soften any request. 'Qǐng wèn' is the fixed phrase that opens polite questions. 'Bù hǎoyìsi' is for minor inconveniences — bumping someone, asking them to move.",
    examples: [
      { target: 'Qǐng zuò', native: 'Please sit (down)' },
      { target: 'Qǐng wèn, cèsuǒ zài nǎlǐ?', native: 'Excuse me, where is the toilet?' },
      { target: 'Bù hǎoyìsi, ràng yī xià', native: 'Sorry, let me through (a moment)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its use',
      pairs: [
        { left: 'Qǐng', right: 'Please' },
        { left: 'Qǐng wèn...', right: 'May I ask...' },
        { left: 'Bù hǎoyìsi', right: 'Excuse me / sorry (light)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — opening a polite question',
      prompt: 'Excuse me, may I ask...',
      correct: ['Qǐng wèn', 'Qing wen', 'qing wen', 'qǐng wèn', '请问'],
    },
    {
      type: 'fill_blank',
      instruction: "You're squeezing past someone on the metro. Apologise lightly.",
      sentence: '_____ , ràng yī xià',
      options: ['Bù hǎoyìsi', 'Qǐng wèn', 'Xièxie'],
      correct: 'Bù hǎoyìsi',
      context: 'Use the soft "sorry" for small inconveniences — not a full "duìbuqǐ" (we\'ll meet that later).',
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask the concierge where to eat lunch',
      words: ['nǎlǐ', 'Qǐng', 'wèn,', 'chī wǔfàn?'],
      correct: ['Qǐng', 'wèn,', 'nǎlǐ', 'chī wǔfàn?'],
      translation: 'Excuse me, where can I eat lunch?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Sorry / excuse me (light apology)',
      correct: ['Bù hǎoyìsi', 'Bu haoyisi', 'bu haoyisi', 'bù hǎoyìsi', '不好意思'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a hotel desk and want to ask the concierge a question.",
      question: 'How do you start?',
      options: [
        { text: 'Qǐng wèn... (excuse me, may I ask...)', correct: true },
        { text: 'Nǐ hǎo, wǒ yào... (hi, I want...)', correct: false },
        { text: 'Zàijiàn (goodbye)', correct: false },
      ],
      explanation: '"Qǐng wèn" is the polite, expected opener for a question to a stranger. Skipping it sounds blunt — even rude — to Chinese ears.',
    },
  ],

  rwenDialogue: {
    intro: "You're standing at the concierge desk of your Beijing hotel. It's 12:30pm, you're hungry, and you want a recommendation for somewhere good and local for lunch.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, xūyào shénme bāngzhù?',
        native: 'Hello, do you need any help?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Qǐng wèn, fùjìn nǎlǐ chī wǔfàn?', native: 'Excuse me, where nearby is good for lunch?', correct: true, feedback: 'Perfect register — polite, specific, framed with "qǐng wèn".' },
          { target: 'Wǔfàn nǎlǐ?', native: 'Lunch where?', correct: false, feedback: 'Grammatically you\'re understood — but it lands as a demand. "Qǐng wèn" softens it.' },
          { target: 'Bù kèqi', native: "You're welcome", correct: false, feedback: 'Wrong tool — that\'s a reply to thanks, not a way to ask a question.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qǐng zǒu zhège fāngxiàng, yǒu yī jiā hěn hǎo de miàn diàn',
        native: 'Please go this way — there\'s a great noodle shop',
      },
      {
        speaker: 'rwen',
        rwenLine: "You opened with the right key. 'Qǐng wèn' isn't just words — it's a posture. The concierge heard a guest, not a tourist barking orders.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Excuse me, may I ask... (polite question opener)',
        correct: ['Qǐng wèn', 'Qing wen', 'qing wen', 'qǐng wèn', '请问'],
      },
      {
        prompt: 'Sorry / excuse me (for bumping past someone)',
        correct: ['Bù hǎoyìsi', 'Bu haoyisi', 'bu haoyisi', 'bù hǎoyìsi', '不好意思'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'qǐng wèn' once today — even silently in your head before you ask anyone anything. Notice how it changes your tone. Bonus: ask Google Maps a question with 'qǐng wèn' in front for fun.",
    rwenSignoff: "Politeness is a posture, not a phrase. 'Qǐng wèn' is the bow before the question.",
  },

  phase8: {
    scenario: "12:30pm, lobby of a mid-range Beijing hotel. You've just dropped your bags and you're starving. The concierge is at her desk, free at the moment. You want a real recommendation for lunch — not the tourist trap on the corner — and you want to ask the right way.",
    rwenRole: "Zhāng xiānsheng (张先生) — male concierge, 40s, knows the neighbourhood inside out. Helpful when asked properly; will give a flat tourist answer if you're rude. Speaks clear Mandarin and a little English.",
    successCriteria: "User opens with 'Qǐng wèn' before the actual question (NOT a bare 'wǔfàn nǎlǐ?'), asks for a lunch recommendation, and closes with 'xièxie' when he gives one. Bonus if they nudge past someone on the way out and use 'bù hǎoyìsi'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
