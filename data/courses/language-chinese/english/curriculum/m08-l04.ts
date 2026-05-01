import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want',
  module: 8,
  lesson: 4,
  title: 'Yào & Xiǎng — Want',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Two ways to say 'want' in Mandarin, and the difference is feeling, not grammar. Yào (要) is firm — 'I'll have'. Xiǎng (想) is softer — 'I'd like to'. Pick the one that matches your mood.",
    culturalNote: "At a Chinese restaurant or kiosk, 'wǒ yào...' is exactly right — direct, confident, what locals use. It's not rude. Save xiǎng for things that involve a wish or feeling: 'wǒ xiǎng huí jiā' (I'd like to go home). And memorise 'yào bú yào?' — the yes/no echo question that comes at you ten times a day.",
  },

  chunks: [
    {
      id: 'wo_yao',
      target: 'Wǒ yào kāfēi',
      native: 'I want coffee',
      literal: '(我要咖啡) lit: I-want-coffee',
      emoji: '☕',
      phonetic: 'WAW yao KAH-fay',
      audioRef: null,
    },
    {
      id: 'wo_xiang',
      target: 'Wǒ xiǎng xiūxi',
      native: "I'd like to rest",
      literal: '(我想休息) lit: I-want(soft)-rest',
      emoji: '😌',
      phonetic: 'WAW shyahng SHYOH-shee',
      audioRef: null,
    },
    {
      id: 'yao_bu_yao',
      target: 'Yào bú yào?',
      native: 'Do you want (it)?',
      literal: '(要不要?) lit: want-not-want',
      emoji: '🤔',
      phonetic: 'yao boo YAO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Yes-no echo questions: V bù V?',
    explanation: "A super-common Chinese question shape: say the verb, then bù, then the verb again. 'Yào bú yào?' (want not want = do you want?). 'Hǎo bù hǎo?' (good not good = is it okay?). Native speakers prefer this over the 'ma?' question for snappy yes/no checks.",
    examples: [
      { target: 'Hǎo bù hǎo?', native: 'Is that okay?' },
      { target: 'Qù bú qù?', native: 'Are you going?' },
      { target: 'Yǒu méi yǒu?', native: 'Do you have it?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ yào kāfēi', right: 'I want coffee' },
        { left: 'Wǒ xiǎng xiūxi', right: "I'd like to rest" },
        { left: 'Yào bú yào?', right: 'Do you want it?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick yào or xiǎng',
      sentence: 'Wǒ _____ huí jiā',
      options: ['xiǎng', 'yào', 'shì'],
      correct: 'xiǎng',
      context: "Going home is a wish/feeling, not an order at a counter. Xiǎng (would like to) fits the softness.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — order one at a Chinese coffee shop',
      prompt: 'I want coffee',
      correct: ['Wǒ yào kāfēi', 'Wo yao kafei', 'wo yao kafei', 'wǒ yào kāfēi', '我要咖啡'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the yes-no echo question: "Do you want (it)?"',
      words: ['yào', 'bú', 'Yào'],
      correct: ['Yào', 'bú', 'yào'],
      translation: 'Do you want it?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'd like to rest",
      correct: ['Wǒ xiǎng xiūxi', 'Wo xiang xiuxi', 'wo xiang xiuxi', 'wǒ xiǎng xiūxi', '我想休息'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a street kiosk in Beijing buying a bottle of water. Which is most natural?",
      question: 'Pick the right "want"',
      options: [
        { text: 'Wǒ yào yì píng shuǐ', correct: true },
        { text: 'Wǒ xiǎng yì píng shuǐ', correct: false },
        { text: 'Wǒ shì yì píng shuǐ', correct: false },
      ],
      explanation: 'At a counter, yào is exactly right — confident, locals-style. Xiǎng would sound oddly hesitant, like "I think about a bottle of water". Shì is "I am", which would be weird.',
    },
  ],

  rwenDialogue: {
    intro: "You walk up to a coffee cart near your office in Beijing. The barista glances up, eyebrows raised — your turn.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yào shénme?',
        native: 'What do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào yì bēi kāfēi', native: 'I want a cup of coffee', correct: true, feedback: "Crisp local-style ordering. Yào at the counter is exactly the right register." },
          { target: 'Wǒ xiǎng kāfēi', native: 'I think coffee', correct: false, feedback: "Xiǎng + plain noun feels off — for ordering, yào is the move. Save xiǎng for wishes and intentions." },
          { target: 'Wǒ shì kāfēi', native: 'I am coffee', correct: false, feedback: "You are not coffee (probably). Shì is for identity. Use yào." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo. Yào bú yào jiā nǎi?',
        native: 'Okay. Do you want milk?',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there it is — yào bú yào? — the yes-no echo. You'll hear that pattern more than 'ma?' before the day's done.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I want coffee (at a counter)',
        correct: ['Wǒ yào kāfēi', 'Wo yao kafei', 'wo yao kafei', 'wǒ yào kāfēi', '我要咖啡'],
      },
      {
        prompt: 'Do you want (it)? — the yes-no echo',
        correct: ['Yào bú yào?', 'Yào bú yào', 'Yao bu yao?', 'yao bu yao', '要不要?', '要不要'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order or ask for one thing using 'wǒ yào...' today, and one wish using 'wǒ xiǎng...'. Even silently in your head before bed: 'wǒ xiǎng shuìjiào' (I'd like to sleep).",
    rwenSignoff: "Two flavours of want — direct and dreamy. Pick the one that matches the moment. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Lunchtime. A small noodle shop near your office, busy and steamy. The owner shouts orders to the kitchen, eyes you and your colleague waiting at the counter, and rattles off the standard 'yào shénme?'. You need to order, decide what you want, and respond to the rapid yào-bú-yào checks she throws at you.",
    rwenRole: "Lǎobǎn niáng (老板娘) — owner of the noodle shop, late 40s, brisk but kind. Will fire 'yào bú yào?' for sauces and side dishes. Doesn't slow down for foreigners, but won't get annoyed if you ask her to repeat.",
    successCriteria: "User uses 'wǒ yào...' confidently to order at least one item, answers a 'yào bú yào?' question with either 'yào' or 'bú yào', and uses 'wǒ xiǎng...' at least once for a softer wish (e.g. 'wǒ xiǎng yě yào...' or 'wǒ xiǎng zuò xiàlái').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
