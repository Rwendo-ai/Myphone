import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'Zài jīchǎng — At the Airport',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Beijing has TWO airports — old PEK (Capital, 首都机场) and new Daxing (PKX, 大兴机场), a futuristic starfish of a building. Shanghai has Pudong (PVG) and Hongqiao. Knowing which airport you're flying from is the first survival skill. Knowing the words for boarding pass, gate, and customs — that's today.",
    culturalNote: "Chinese airports are huge and immaculately signposted in English — but staff often default to Mandarin first. The three words you'll see most: 登机牌 (dēngjī pái) on every gate sign, 登机口 (dēngjī kǒu) on the screens, 海关 (hǎiguān) at the international border.",
  },

  chunks: [
    {
      id: 'dengji_pai',
      target: 'Dēngjī pái',
      native: 'Boarding pass',
      literal: '(登机牌) lit: board-aircraft-card',
      emoji: '🎟️',
      phonetic: 'dung-JEE PIE',
      audioRef: null,
    },
    {
      id: 'dengji_kou',
      target: 'Dēngjī kǒu',
      native: 'Boarding gate',
      literal: '(登机口) lit: board-aircraft-mouth',
      emoji: '🚪',
      phonetic: 'dung-JEE KOH',
      audioRef: null,
    },
    {
      id: 'haiguan',
      target: 'Hǎiguān',
      native: 'Customs',
      literal: '(海关) lit: sea-pass(barrier)',
      emoji: '🛂',
      phonetic: 'HIGH gwan',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Compound airport nouns',
    explanation: "Mandarin builds airport vocab from pieces: 'dēngjī' (登机) = board-aircraft, the verb 'to board'. Add 'pái' (牌, card) → boarding card. Add 'kǒu' (口, mouth/opening) → boarding gate. 'Xíngli' (行李) = luggage. 'Hùzhào' (护照) = passport. Once you know dēngjī, the airport opens up.",
    examples: [
      { target: 'Xíngli', native: 'Luggage' },
      { target: 'Hùzhào', native: 'Passport' },
      { target: 'Hángbān', native: 'Flight (number)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the airport word to its meaning',
      pairs: [
        { left: 'Dēngjī pái', right: 'Boarding pass' },
        { left: 'Dēngjī kǒu', right: 'Boarding gate' },
        { left: 'Hǎiguān', right: 'Customs' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Boarding pass',
      correct: ['Dēngjī pái', 'Dengji pai', 'dengji pai', 'dēngjī pái', '登机牌'],
    },
    {
      type: 'fill_blank',
      instruction: "You ask: 'Where is gate 23?'",
      sentence: '23 hào _____ zài nǎlǐ?',
      options: ['dēngjī kǒu', 'dēngjī pái', 'hǎiguān'],
      correct: 'dēngjī kǒu',
      context: "'Hào' (号) = number. So '23 hào dēngjī kǒu' = gate number 23. Gates are 'kǒu' (mouths/openings); the boarding pass is the 'pái' (card).",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Where is customs?'",
      words: ['nǎlǐ?', 'zài', 'Hǎiguān'],
      correct: ['Hǎiguān', 'zài', 'nǎlǐ?'],
      translation: 'Where is customs?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Boarding gate',
      correct: ['Dēngjī kǒu', 'Dengji kou', 'dengji kou', 'dēngjī kǒu', '登机口'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're flying from Pudong (PVG) to Beijing. The airline staff says 'Qǐng chūshì dēngjī pái'. What do you do?",
      question: "Pick the right move",
      options: [
        { text: 'Show your boarding pass', correct: true },
        { text: 'Hand over your luggage', correct: false },
        { text: 'Walk to customs', correct: false },
      ],
      explanation: "'Chūshì' (出示) = show / present. 'Qǐng chūshì dēngjī pái' = 'Please show your boarding pass'. Standard at every gate.",
    },
  ],

  rwenDialogue: {
    intro: "You're at Shanghai Pudong Airport, 6am, heading to Chengdu for a long weekend. You've checked in but you can't find Gate 47. A staff member in red sees you frowning at the screens.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ qù nǎlǐ?',
        native: 'Where are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '47 hào dēngjī kǒu zài nǎlǐ?', native: 'Where is gate 47?', correct: true, feedback: 'Number + hào + dēngjī kǒu. Exactly how a local would ask.' },
          { target: 'Wǒ yào dēngjī pái', native: 'I need a boarding pass', correct: false, feedback: "You already have your boarding pass — what you need is the GATE: dēngjī kǒu, not pái." },
          { target: 'Hǎiguān', native: 'Customs', correct: false, feedback: "You're flying domestic — no customs. You need the gate (dēngjī kǒu)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Zhí zǒu, ránhòu zuǒ zhuǎn',
        native: 'Go straight, then turn left',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice — every Module 9 phrase is now stacking. You asked 'where' (l1), they answered with directions (l2), at an airport (l6). The pieces fit. That's fluency starting.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Boarding pass',
        correct: ['Dēngjī pái', 'Dengji pai', 'dengji pai', 'dēngjī pái', '登机牌'],
      },
      {
        prompt: 'Customs',
        correct: ['Hǎiguān', 'Haiguan', 'haiguan', 'hǎiguān', '海关'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture yourself walking through Beijing Daxing Airport — that starfish-shaped masterpiece. Out loud, name three things in Mandarin: dēngjī pái in your pocket, dēngjī kǒu on the screen, hǎiguān at the international border. Make the airport speak Mandarin in your head.",
    rwenSignoff: "Tomorrow, you check into your hotel. Zàijiàn.",
  },

  phase8: {
    scenario: "Beijing Daxing Airport (PKX), 9am. You're flying to Chengdu and you can't find Gate B22. Your flight boards in 25 minutes. You ask a uniformed airport staff member.",
    rwenRole: "Lǐ Wěi (李伟) — airport ground staff, 30s, professional, will give a quick efficient answer in Mandarin.",
    successCriteria: "User asks for the boarding gate using 'dēngjī kǒu' (NOT 'dēngjī pái'). Asks with 'zài nǎlǐ?' word order (Module 9 L1). Follows direction reply (Module 9 L2: zhí zǒu / zuǒ zhuǎn / yòu zhuǎn) and confirms understanding.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
