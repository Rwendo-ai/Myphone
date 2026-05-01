import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Zuǒ, Yòu, Zhí — Left, Right, Straight',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you asked 'where?' Today you understand the answer. A Beijing taxi driver will rapid-fire three words at you: zuǒ, yòu, zhí. Left, right, straight. Catch those three sounds and you can navigate any city in China.",
    culturalNote: "These are imperatives — direct commands, no softening particle, no please. In English we say 'turn left at the lights, please'. In Mandarin a driver or guide just says 'Zuǒ zhuǎn'. It's not rude — it's efficient. Don't be thrown by the bluntness.",
  },

  chunks: [
    {
      id: 'zuo_zhuan',
      target: 'Zuǒ zhuǎn',
      native: 'Turn left',
      literal: '(左转) lit: left-turn',
      emoji: '⬅️',
      phonetic: 'dzwaw JWAN (both syllables dip then rise)',
      audioRef: null,
    },
    {
      id: 'you_zhuan',
      target: 'Yòu zhuǎn',
      native: 'Turn right',
      literal: '(右转) lit: right-turn',
      emoji: '➡️',
      phonetic: 'YOH jwan (yòu falls, zhuǎn dips)',
      audioRef: null,
    },
    {
      id: 'zhi_zou',
      target: 'Zhí zǒu',
      native: 'Go straight',
      literal: '(直走) lit: straight-walk',
      emoji: '⬆️',
      phonetic: 'jrr DZOH (zhí rises, zǒu dips)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Direction] + [verb] — directional commands',
    explanation: "The pattern is direction-word + action: zuǒ (left) + zhuǎn (turn). yòu (right) + zhuǎn (turn). zhí (straight) + zǒu (walk). You can swap zhuǎn for zǒu — 'zuǒ zǒu' (walk left) is also fine. The direction always comes first.",
    examples: [
      { target: 'Zuǒ zhuǎn', native: 'Turn left' },
      { target: 'Yòu zǒu', native: 'Go right (walk right)' },
      { target: 'Zhí zǒu', native: 'Go straight' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction to its meaning',
      pairs: [
        { left: 'Zuǒ zhuǎn', right: 'Turn left' },
        { left: 'Yòu zhuǎn', right: 'Turn right' },
        { left: 'Zhí zǒu', right: 'Go straight' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: a driver tells you to turn LEFT",
      sentence: '_____ zhuǎn',
      options: ['Zuǒ', 'Yòu', 'Zhí'],
      correct: 'Zuǒ',
      context: "Zuǒ (左) = left. Yòu (右) = right. Notice they both have the dipping/falling tones — listen carefully when a local rattles them off.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Go straight',
      correct: ['Zhí zǒu', 'Zhi zou', 'zhi zou', 'zhí zǒu', '直走'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the command 'Turn right'",
      words: ['zhuǎn', 'Yòu'],
      correct: ['Yòu', 'zhuǎn'],
      translation: 'Turn right',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Turn left',
      correct: ['Zuǒ zhuǎn', 'Zuo zhuan', 'zuo zhuan', 'zuǒ zhuǎn', '左转'],
    },
    {
      type: 'multiple_choice',
      instruction: "A taxi driver says 'Zhí zǒu, ránhòu yòu zhuǎn'. What does she mean?",
      question: 'Pick the correct interpretation',
      options: [
        { text: 'Go straight, then turn right', correct: true },
        { text: 'Turn left, then go straight', correct: false },
        { text: 'Stop, then turn right', correct: false },
      ],
      explanation: "'Ránhòu' (然后) means 'then / after that'. So: zhí zǒu (go straight) → ránhòu (then) → yòu zhuǎn (turn right). String two directions with 'ránhòu' and you can give a real route.",
    },
  ],

  rwenDialogue: {
    intro: "You're in a Didi (China's Uber) heading to a hot pot place in Chengdu. The driver doesn't quite know the lane. He asks you for directions from your phone map.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zěnme zǒu?',
        native: 'How do I go?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zhí zǒu, ránhòu zuǒ zhuǎn', native: 'Go straight, then turn left', correct: true, feedback: 'Perfect — natural sentence with ránhòu linking the two steps.' },
          { target: 'Zǒu zhí, zhuǎn zuǒ', native: 'Walk straight, turn left', correct: false, feedback: "Word order — direction word FIRST: zhí zǒu, not zǒu zhí. Same for zuǒ zhuǎn." },
          { target: 'Yòu yòu yòu', native: 'Right right right', correct: false, feedback: "He needs a sentence, not a chant. Try: zhí zǒu, ránhòu zuǒ zhuǎn." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, míngbái le',
        native: "OK, got it",
      },
      {
        speaker: 'rwen',
        rwenLine: "You just gave directions in Mandarin. To a Chengdu cab driver. From your phone. That's a bigger leap than it feels.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Turn left',
        correct: ['Zuǒ zhuǎn', 'Zuo zhuan', 'zuo zhuan', 'zuǒ zhuǎn', '左转'],
      },
      {
        prompt: 'Go straight',
        correct: ['Zhí zǒu', 'Zhi zou', 'zhi zou', 'zhí zǒu', '直走'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk somewhere today — to the kitchen, to the bus stop, to your bathroom — and narrate it in Mandarin under your breath: 'Zhí zǒu... yòu zhuǎn... zuǒ zhuǎn...' Get the three words on autopilot. They will save you in a real city.",
    rwenSignoff: "Three words, three directions, the whole world walkable. Zàijiàn.",
  },

  phase8: {
    scenario: "You're standing at a Beijing crossroads near the Forbidden City. A young Chinese tourist asks YOU for directions to the metro station. You can see it: go straight, then turn right at the second corner.",
    rwenRole: "Lín Yǔ (林雨) — domestic tourist from Chengdu, late 20s, friendly. Lost on her first Beijing visit. Speaks normal-pace Mandarin.",
    successCriteria: "User uses 'zhí zǒu' AND one of 'zuǒ zhuǎn' / 'yòu zhuǎn' in a connected instruction (ideally with 'ránhòu' or another linker). Doesn't reverse word order ('zǒu zhí' = wrong).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
