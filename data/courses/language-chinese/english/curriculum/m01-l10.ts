import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'A complete Chinese greeting',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today is the integration. Everything from the last nine lessons — greetings, name, nationality, please, thank you, yes/no, goodbye — woven into one real conversation. You're not learning a new chunk. You're stringing what you have into music.",
    culturalNote: "A complete first encounter in Mandarin has a rhythm: greet → introduce → place yourself → exchange small warmth → close. Skipping a step feels rushed. Doing all five takes thirty seconds and leaves a lasting impression of someone who respects the form.",
  },

  chunks: [
    {
      id: 'review_greeting',
      target: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ',
      native: 'Hello, pleased to meet you',
      literal: '(你好,很高兴认识你) lit: hello, very-glad-know-you',
      emoji: '👋',
      phonetic: 'nee how, hun GOW-shing RUN-sh nee',
      audioRef: null,
    },
    {
      id: 'review_intro',
      target: 'Wǒ jiào... wǒ shì... rén',
      native: "I'm called... I'm [nationality]",
      literal: '(我叫...我是...人) lit: I-called-... I-am-...-person',
      emoji: '🪪',
      phonetic: 'WAW jyow... WAW shr ... run',
      audioRef: null,
    },
    {
      id: 'review_close',
      target: 'Xièxie, zàijiàn',
      native: 'Thanks, goodbye',
      literal: '(谢谢,再见) lit: thanks, again-see',
      emoji: '🙏',
      phonetic: 'SHYEH-shyeh, DZIGH-jyen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full politeness chain — the 5-step encounter',
    explanation: "A complete Mandarin first meeting follows: (1) greet (Nǐ hǎo), (2) name yourself (Wǒ jiào...), (3) place yourself (Wǒ shì... rén), (4) exchange warmth (Hěn gāoxìng rènshi nǐ → Wǒ yě shì), (5) close (Xièxie, zàijiàn). Five beats. Memorise the shape.",
    examples: [
      { target: '1. Nǐ hǎo', native: 'Hello' },
      { target: '2. Wǒ jiào Anna, wǒ shì Àozhōu rén', native: "I'm Anna, I'm Australian" },
      { target: '3. Hěn gāoxìng rènshi nǐ → Wǒ yě shì', native: 'Pleased to meet you → Me too' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its step in the encounter',
      pairs: [
        { left: 'Nǐ hǎo', right: 'Step 1 — Greet' },
        { left: 'Wǒ jiào... wǒ shì... rén', right: 'Step 2 — Introduce' },
        { left: 'Hěn gāoxìng rènshi nǐ', right: 'Step 3 — Exchange warmth' },
        { left: 'Xièxie, zàijiàn', right: 'Step 4 — Close' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the full opener in pinyin or characters',
      prompt: "Hello, I'm Anna, I'm Australian, pleased to meet you",
      correct: [
        'Nǐ hǎo, wǒ jiào Anna, wǒ shì Àozhōu rén, hěn gāoxìng rènshi nǐ',
        'Ni hao, wo jiao Anna, wo shi Aozhou ren, hen gaoxing renshi ni',
        'ni hao, wo jiao anna, wo shi aozhou ren, hen gaoxing renshi ni',
        '你好,我叫Anna,我是澳洲人,很高兴认识你',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the complete close — thank them and say goodbye for tomorrow',
      words: ['míngtiān', 'Xièxie,', 'jiàn'],
      correct: ['Xièxie,', 'míngtiān', 'jiàn'],
      translation: 'Thanks, see you tomorrow',
    },
    {
      type: 'fill_blank',
      instruction: 'Someone has just said "Hěn gāoxìng rènshi nǐ" to you — return the warmth',
      sentence: 'Wǒ _____ shì',
      options: ['yě', 'shì', 'jiào'],
      correct: 'yě',
      context: '"Wǒ yě shì" — me too. The mirror reply that closes the warmth-loop.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the polite question opener',
      prompt: 'Excuse me, may I ask...',
      correct: ['Qǐng wèn', 'Qing wen', 'qing wen', 'qǐng wèn', '请问'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're meeting your Chinese host family for the first time. Pick the smoothest opener.",
      question: 'Which sequence flows best?',
      options: [
        { text: 'Nǐ hǎo, wǒ jiào Anna, hěn gāoxìng rènshi nǐ', correct: true },
        { text: 'Wǒ jiào Anna, nǐ hǎo, zàijiàn', correct: false },
        { text: 'Hěn gāoxìng rènshi nǐ, wǒ jiào Anna, nǐ hǎo', correct: false },
      ],
      explanation: 'The shape is greet → name → warmth. Other orders sound jumbled — like saying "pleased to meet you, my name is Anna, hello" in English.',
    },
  ],

  rwenDialogue: {
    intro: "You've just landed in Beijing. Your Chinese host family has come to the airport to pick you up — they're holding a small sign with your name on it. They're standing in arrivals, smiling, a little nervous. This is your first encounter. All five steps in one go.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo! Huānyíng dào Běijīng',
        native: 'Hello! Welcome to Beijing',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Nǐ hǎo, wǒ jiào Anna, wǒ shì Àozhōu rén, hěn gāoxìng rènshi nǐ',
            native: "Hello, I'm Anna, I'm Australian, pleased to meet you",
            correct: true,
            feedback: 'A full five-step opener. They will remember this for years.',
          },
          {
            target: 'Nǐ hǎo',
            native: 'Hello',
            correct: false,
            feedback: 'Polite, but you\'ve only done step 1 of 5. Push through — give them name and nationality too.',
          },
          {
            target: 'Zàijiàn',
            native: 'Goodbye',
            correct: false,
            feedback: 'You just arrived. Goodbye is the LAST step, not the first.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn gāoxìng rènshi nǐ, Anna! Wǒ jiào Wáng āyí, zhège shì wǒ xiānsheng',
        native: "Pleased to meet you, Anna! I'm Auntie Wáng, this is my husband",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yě shì, xièxie', native: 'Me too, thank you', correct: true, feedback: 'Mirror plus thanks — exactly the warmth this moment needs.' },
          { target: 'Bú shì', native: 'No (am not)', correct: false, feedback: 'You just denied being pleased to meet them. Yikes.' },
          { target: 'Bù kèqi', native: "You're welcome", correct: false, feedback: "They didn't thank you. 'Bù kèqi' is the reply to thanks." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at what you just did. Ten lessons ago, 'Nǐ hǎo' was a mountain. Now you greeted, named yourself, placed yourself, and matched their warmth — in Mandarin, in real time, on landing day. This is the whole module's heartbeat. Hěn hǎo. Bǎozhòng — onwards.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Full opener: Hello, I'm [your name], I'm [your nationality], pleased to meet you",
        correct: [
          'Nǐ hǎo, wǒ jiào ___, wǒ shì ___ rén, hěn gāoxìng rènshi nǐ',
          'Ni hao, wo jiao ___, wo shi ___ ren, hen gaoxing renshi ni',
          'ni hao, wo jiao ___, wo shi ___ ren, hen gaoxing renshi ni',
        ],
      },
      {
        prompt: 'Full close: Thanks, see you tomorrow',
        correct: ['Xièxie, míngtiān jiàn', 'Xiexie, mingtian jian', 'xiexie, mingtian jian', 'xièxie, míngtiān jiàn', '谢谢,明天见'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 1 Complete",
    task: "Today, do the full 5-step encounter out loud — alone, in a mirror, with a friend, doesn't matter. Greet → introduce → place → warmth → close. Time it — under 30 seconds is the goal. You've earned this.",
    rwenSignoff: "Module One closed. You can open a real conversation in Mandarin now. That's the door — let's see what's on the other side. Zàijiàn... for now.",
  },

  phase8: {
    scenario: "Beijing Capital Airport, arrivals hall. You've just walked through the sliding doors with your suitcases — jet-lagged, slightly disoriented, a little nervous. Across the crowd you spot a small handmade sign with your name on it, held by a kind-looking couple in their late 50s. They wave when they see you and walk over. This is your first face-to-face moment with your host family. Everything you've learned in Module 1 lives or dies right here.",
    rwenRole: "Wáng āyí & Wáng shūshu (王阿姨,王叔叔) — your host parents, late 50s, second-tier-city teachers, warm and traditional. They speak slowly for foreigners and will gently translate any word you stall on. Auntie Wáng leads — Uncle Wáng nods and smiles. They want to see effort more than perfection.",
    successCriteria: "User does ALL FIVE steps in sequence: (1) opens with 'Nǐ hǎo', (2) gives name with 'Wǒ jiào...', (3) places themselves with 'Wǒ shì... rén' or 'Wǒ cóng... lái', (4) exchanges warmth with 'Hěn gāoxìng rènshi nǐ' or returns it with 'Wǒ yě shì', (5) thanks them ('xièxie') and uses an appropriate farewell when they head to the car. Bonus: they use 'qǐng wèn' to ask one polite question (e.g. about the drive) on the way out.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
