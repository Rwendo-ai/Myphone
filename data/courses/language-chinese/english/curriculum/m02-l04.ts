import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-ma-question',
  module: 2,
  lesson: 4,
  title: 'Ma — The Question Particle',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today, the cheat code. One tiny syllable — 'ma' (吗) — turns ANY Mandarin statement into a yes/no question. No word reordering, no inverted verbs. Just stick it on the end. This is the single highest-leverage thing you'll learn this week.",
    culturalNote: "English makes questions by flipping word order ('You are tired' → 'Are you tired?'). Mandarin doesn't bother. You keep the statement exactly as it is, and add 'ma' (吗) at the end. The 'ma' itself is neutral tone — light, almost a breath. Drill this pattern and your survival vocabulary doubles overnight.",
  },

  chunks: [
    {
      id: 'ni_lei_ma',
      target: 'Nǐ lèi ma?',
      native: 'Are you tired?',
      literal: '(你累吗?) lit: you-tired-(question)',
      emoji: '😴',
      phonetic: 'nee LAY ma',
      audioRef: null,
    },
    {
      id: 'ni_e_ma',
      target: 'Nǐ è ma?',
      native: 'Are you hungry?',
      literal: '(你饿吗?) lit: you-hungry-(question)',
      emoji: '🍜',
      phonetic: 'nee UH ma',
      audioRef: null,
    },
    {
      id: 'ni_zhidao_ma',
      target: 'Nǐ zhīdào ma?',
      native: 'Do you know?',
      literal: '(你知道吗?) lit: you-know-(question)',
      emoji: '❓',
      phonetic: 'nee jr-DOW ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Statement + ma = Question',
    explanation: "Mandarin's killer shortcut: take any statement, add 'ma' (吗) at the end, and you've made a yes/no question. No reordering, no auxiliary verbs, no inversion. The 'ma' rides as light neutral tone.",
    examples: [
      { target: 'Nǐ hǎo → Nǐ hǎo ma?', native: 'You good → Are you good? (How are you?)' },
      { target: 'Nǐ è → Nǐ è ma?', native: 'You hungry → Are you hungry?' },
      { target: 'Tā huì shuō → Tā huì shuō ma?', native: "He can speak → Can he speak?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question to its meaning',
      pairs: [
        { left: 'Nǐ lèi ma?', right: 'Are you tired?' },
        { left: 'Nǐ è ma?', right: 'Are you hungry?' },
        { left: 'Nǐ zhīdào ma?', right: 'Do you know?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Turn the statement into a question: 'Tā hěn hǎo' (he is well) → 'Tā hěn hǎo _____ ?'",
      sentence: 'Tā hěn hǎo _____ ?',
      options: ['ma', 'bù', 'hěn'],
      correct: 'ma',
      context: "That's the entire trick. Statement + ma = question. Master it once, use it forever.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Are you hungry?',
      correct: ['Nǐ è ma?', 'Ni e ma?', 'ni e ma', 'nǐ è ma?', '你饿吗?', '你饿吗', 'Ni e ma'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask "Are you tired?"',
      words: ['ma?', 'Nǐ', 'lèi'],
      correct: ['Nǐ', 'lèi', 'ma?'],
      translation: 'Are you tired?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — turn this into a question',
      prompt: 'Do you know? (you-know-ma)',
      correct: ['Nǐ zhīdào ma?', 'Ni zhidao ma?', 'ni zhidao ma', 'nǐ zhīdào ma?', '你知道吗?', '你知道吗', 'Ni zhidao ma'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you turn 'Wǒ huì shuō Zhōngwén' (I can speak Chinese) into 'Can I speak Chinese?'",
      question: 'Pick the correct version',
      options: [
        { text: 'Wǒ huì shuō Zhōngwén ma?', correct: true },
        { text: 'Ma wǒ huì shuō Zhōngwén?', correct: false },
        { text: 'Huì wǒ shuō Zhōngwén?', correct: false },
      ],
      explanation: "Just add 'ma' at the end. Don't move anything else. Mandarin word order is statement-stable.",
    },
  ],

  rwenDialogue: {
    intro: "Mid-afternoon at a Taipei night market warm-up — the stalls are just opening. You're with a Taiwanese friend who's been showing you around since morning. She looks a bit drained.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nǐ lèi ma?', native: 'Are you tired?', correct: true, feedback: 'Three syllables, full question. The pattern is doing the work for you.' },
          { target: 'Nǐ hǎo lèi', native: "You're so tired", correct: false, feedback: "That's a statement, not a question — and a bit blunt. You need 'ma' on the end." },
          { target: 'Lèi ma nǐ?', native: 'Tired you?', correct: false, feedback: "Word order's wrong. Mandarin keeps the statement order: subject → adjective → ma." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yǒu yìdiǎnr lèi. Nǐ è ma?',
        native: 'A bit tired. Are you hungry?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'È! Wǒ hěn è.', native: "Hungry! I'm very hungry.", correct: true, feedback: "Perfect. You answered the 'ma' question by REUSING the verb. That's how you reply: drop the 'ma', keep the verb." },
          { target: 'Ma', native: '(question particle)', correct: false, feedback: "'Ma' alone is meaningless — it has to ride a sentence." },
          { target: 'Nǐ è ma?', native: 'Are you hungry?', correct: false, feedback: "She just asked YOU that — you'd be repeating her question back at her." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice the rhythm: ask with ma, answer by repeating the verb. That's the entire yes/no machinery of Mandarin. You'll fly now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Are you tired?',
        correct: ['Nǐ lèi ma?', 'Ni lei ma?', 'ni lei ma', 'nǐ lèi ma?', '你累吗?', '你累吗', 'Ni lei ma'],
      },
      {
        prompt: 'Do you know?',
        correct: ['Nǐ zhīdào ma?', 'Ni zhidao ma?', 'ni zhidao ma', 'nǐ zhīdào ma?', '你知道吗?', '你知道吗', 'Ni zhidao ma'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Take any English yes/no question you ask today and silently translate it to the 'statement + ma' shape. 'Are you free? → Nǐ yǒu kòng ma?' Just train the reflex.",
    rwenSignoff: "One particle, a hundred questions. Zàijiàn.",
  },

  phase8: {
    scenario: "Taipei's Raohe Street Night Market, 7pm — neon flickering on, smell of grilled squid and stinky tofu. You and your Taiwanese friend Ai-Ling have been walking for an hour. You want to check in with her — is she tired? Hungry? Does she know which stall does the famous pepper buns? Three questions, three chances to use 'ma'.",
    rwenRole: "Lín Ài-líng (林愛玲) — local Taipei friend, mid-20s, born and raised in the city. Speaks fast Taiwan Mandarin but slows for you. Will answer naturally — you have to listen for the verb in her reply.",
    successCriteria: "User asks at least three questions using the statement + ma pattern (e.g. 'Nǐ lèi ma?', 'Nǐ è ma?', 'Nǐ zhīdào ma?'), keeps word order correct, and never inserts English question words like 'do' or 'are'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
