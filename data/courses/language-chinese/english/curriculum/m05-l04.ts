import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Yéye, Nǎinai, Wàigōng, Wàipó — Grandparents',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Sunday morning, dim sum with the grandparents. Your partner's yéye reaches for the last shrimp dumpling and tells the same story he tells every week. In English you have one word — 'grandfather' — for two completely different people. Mandarin gives you four words for four grandparents, and the difference matters: which side of the family they belong to is built right into the name.",
    culturalNote: "Father's parents are 'inner' family (内 nèi) — yéye and nǎinai. Mother's parents get the prefix 'wài' (外 — outside): wàigōng and wàipó. This dates back to a patrilineal kinship system where children belonged to the father's lineage. Modern China is more egalitarian, but the words haven't changed. Many families today are equally close to both sides — but they still call them by these original names.",
  },

  chunks: [
    {
      id: 'yeye_nainai',
      target: 'Yéye, Nǎinai',
      native: "Father's father, Father's mother",
      literal: "(爷爷/奶奶) lit: paternal-grandpa / paternal-grandma",
      emoji: '👴',
      phonetic: 'YEH-yeh / NIGH-nigh',
      audioRef: null,
    },
    {
      id: 'waigong_waipo',
      target: 'Wàigōng, Wàipó',
      native: "Mother's father, Mother's mother",
      literal: "(外公/外婆) lit: outer-grandpa / outer-grandma",
      emoji: '👵',
      phonetic: 'why-GONG / why-PWOR',
      audioRef: null,
    },
    {
      id: 'wo_de_yeye_hen_lao',
      target: 'Wǒ de yéye hěn lǎo',
      native: 'My grandfather (paternal) is very old',
      literal: '(我的爷爷很老) lit: I-(possessive)-paternal-grandpa-very-old',
      emoji: '👴🏻',
      phonetic: 'WAW duh YEH-yeh hun LOW',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'wài' (外) prefix — mother's side",
    explanation: "The character 外 means 'outer'. When attached to grandparent words, it flags 'mother's side'. Yéye → wàigōng. Nǎinai → wàipó. This isn't a put-down — it's just the historic kinship label. Many regions also use alternatives like 'lǎolao' (姥姥) for maternal grandmother. But wài-words are understood everywhere.",
    examples: [
      { target: 'Yéye (爷爷)', native: "Father's father — no prefix" },
      { target: 'Wàigōng (外公)', native: "Mother's father — 'wài' marks the maternal side" },
      { target: 'Wàipó (外婆)', native: "Mother's mother" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Chinese word to which grandparent it means',
      pairs: [
        { left: 'Yéye', right: "Father's father" },
        { left: 'Nǎinai', right: "Father's mother" },
        { left: 'Wàigōng', right: "Mother's father" },
        { left: 'Wàipó', right: "Mother's mother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your mother's mother is your...",
      sentence: 'Wǒ de _____',
      options: ['wàipó', 'nǎinai', 'yéye'],
      correct: 'wàipó',
      context: "Mother's mother = wàipó (外婆). The 'wài' (outer) marks her as mother's-side.",
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: "My grandfather (father's side) is very old",
      correct: ['Wǒ de yéye hěn lǎo', 'Wo de yeye hen lao', 'wo de yeye hen lao', 'wǒ de yéye hěn lǎo', '我的爷爷很老'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "My maternal grandmother is in Beijing"',
      words: ['zài', 'wàipó', 'Wǒ', 'de', 'Běijīng'],
      correct: ['Wǒ', 'de', 'wàipó', 'zài', 'Běijīng'],
      translation: 'My maternal grandmother is in Beijing',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "My grandmother (father's side)",
      correct: ['Wǒ de nǎinai', 'Wo de nainai', 'wo de nainai', 'wǒ de nǎinai', '我的奶奶'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does the prefix 'wài' (外) tell you about a grandparent term?",
      question: 'Pick the correct meaning',
      options: [
        { text: 'They belong to the mother\'s side of the family.', correct: true },
        { text: 'They live far away.', correct: false },
        { text: 'They are step-grandparents.', correct: false },
      ],
      explanation: "外 (wài) literally means 'outer/outside'. In kinship terms, it historically marked the mother's lineage as outside the father's family line. Today it's just a neutral label — but it still tells you which side at a glance.",
    },
  ],

  rwenDialogue: {
    intro: "Sunday dim sum with your partner's grandparents in Hong Kong. The yéye (paternal grandfather) leans across to ask about your own grandparents back home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ de yéye nǎinai zài nǎlǐ?',
        native: 'Where are your grandparents (paternal)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ de yéye qùshì le. Wǒ de nǎinai zài Yīngguó', native: 'My (paternal) grandfather has passed. My (paternal) grandmother is in England', correct: true, feedback: 'Beautifully handled — direct and respectful. He nods softly.' },
          { target: 'Wǒ de wàigōng zài Yīngguó', native: 'My maternal grandfather is in England', correct: false, feedback: 'He asked about your yéye/nǎinai — paternal side. You answered about your wàigōng (maternal). Right grandparent, wrong side.' },
          { target: 'Wǒ yéye Yīngguó', native: 'I grandfather England', correct: false, feedback: "Add 'de' (my) and 'zài' (is in/at): 'Wǒ de yéye zài Yīngguó'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'A — yuǎn ya. Cháng dǎ diànhuà ba.',
        native: 'Ah — that\'s far. Call her often.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice he didn't lecture — just a soft 'call her often'. In Chinese family talk, the gentle nudge is the love.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Father's mother (paternal grandmother)", correct: ['Nǎinai', 'Nainai', 'nainai', 'nǎinai', '奶奶'] },
      { prompt: "My maternal grandfather", correct: ['Wǒ de wàigōng', 'Wo de waigong', 'wo de waigong', 'wǒ de wàigōng', '我的外公'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture your four grandparents — or however many you knew. Name each one in Mandarin: yéye, nǎinai, wàigōng, wàipó. If one passed before you were born, name them anyway. Saying their kinship word is a small honour.",
    rwenSignoff: "Four grandparents, four words — none of them interchangeable. Mandarin remembers the family map for you. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Sunday dim sum at a Hong Kong tea house. Bamboo steamers are stacking up. Your partner's yéye and nǎinai are at the table, and they want to know about your own grandparents — both sides, both still alive or not, where they are now.",
    rwenRole: "Yéye (爷爷) — your partner's paternal grandfather, mid-80s, soft-spoken, traditional. He'll ask about each of your four grandparents one by one and gently expects you to mark which side correctly using yéye/nǎinai or wàigōng/wàipó.",
    successCriteria: "User correctly distinguishes paternal (yéye/nǎinai) from maternal (wàigōng/wàipó), uses the possessive 'de' (我的), and handles the case where a grandparent has passed away with a respectful phrase like 'qùshì le'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
