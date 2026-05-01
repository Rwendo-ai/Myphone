import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: "Shūshu, Āyí, Bóbo — Aunts & Uncles",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Lunar New Year reunion. The doorbell keeps ringing — uncles, aunts, second cousins, neighbours-who-might-as-well-be-aunts. In English, all the men of your parents' generation are 'uncle'. In Mandarin, that's lazy. There's a separate word depending on whether he's older or younger than your dad, and whether he's from your mum's side or your dad's. Today we'll learn the three you'll actually use most.",
    culturalNote: "Chinese has roughly a dozen distinct aunt/uncle terms. Don't panic — even native speakers sometimes pause to figure out which one applies. In modern urban speech, 'shūshu' (uncle, generic) and 'āyí' (auntie, generic) get used loosely — even for non-family adults like a neighbour or shopkeeper. A child calling a friendly stranger 'āyí' is normal and warm.",
  },

  chunks: [
    {
      id: 'shushu',
      target: 'Shūshu',
      native: "Uncle (father's younger brother — also generic 'uncle')",
      literal: '(叔叔) lit: paternal-younger-uncle',
      emoji: '👨',
      phonetic: 'SHOO-shoo (high & flat, then light)',
      audioRef: null,
    },
    {
      id: 'bobo',
      target: 'Bóbo',
      native: "Father's older brother",
      literal: '(伯伯) lit: paternal-older-uncle',
      emoji: '🧓',
      phonetic: 'BWOR-bwor (rising, then light)',
      audioRef: null,
    },
    {
      id: 'ayi',
      target: 'Āyí',
      native: "Auntie (mother's sister — also generic 'auntie')",
      literal: '(阿姨) lit: ah-auntie',
      emoji: '👩',
      phonetic: 'AH-yee (flat, then rising)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why so many aunt/uncle words?',
    explanation: "Chinese kinship splits aunts and uncles by (1) which parent's side they're on and (2) whether they're older or younger than that parent. The full set: bóbo (dad's older brother), shūshu (dad's younger brother), gūgu (dad's sister), jiùjiu (mum's brother), yímā (mum's sister). For now, master shūshu, bóbo, and āyí — they cover most everyday conversations.",
    examples: [
      { target: 'Bóbo (伯伯)', native: "Dad's older brother — call him this" },
      { target: 'Shūshu (叔叔)', native: "Dad's younger brother — also any friendly older man" },
      { target: 'Āyí (阿姨)', native: "Mum's sister — also any friendly older woman" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each title to which relative it refers to',
      pairs: [
        { left: 'Shūshu', right: "Dad's younger brother" },
        { left: 'Bóbo', right: "Dad's older brother" },
        { left: 'Āyí', right: "Mum's sister / friendly auntie" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your dad's older brother is visiting. You greet him as...",
      sentence: '_____, nǐ hǎo!',
      options: ['Bóbo', 'Shūshu', 'Āyí'],
      correct: 'Bóbo',
      context: "Dad's OLDER brother = bóbo (伯伯). If he were younger than your dad, he'd be shūshu.",
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'My uncle (dad\'s younger brother) lives in Shanghai',
      correct: ['Wǒ shūshu zhù zài Shànghǎi', 'Wǒ de shūshu zhù zài Shànghǎi', 'Wo shushu zhu zai Shanghai', 'Wo de shushu zhu zai Shanghai', 'wo shushu zhu zai shanghai', '我叔叔住在上海', '我的叔叔住在上海'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Auntie (greeting a friendly older woman)',
      correct: ['Āyí', 'Ayi', 'ayi', 'āyí', '阿姨'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "This is my auntie" (introducing)',
      words: ['de', 'shì', 'Zhè', 'wǒ', 'āyí'],
      correct: ['Zhè', 'shì', 'wǒ', 'de', 'āyí'],
      translation: 'This is my auntie',
    },
    {
      type: 'multiple_choice',
      instruction: "A small Chinese child calls a stranger at the park 'āyí'. Is this rude?",
      question: 'Pick the right interpretation',
      options: [
        { text: 'No — it\'s warm and normal. Adults are addressed by family titles even when not family.', correct: true },
        { text: 'Yes — āyí should only be used for blood relatives.', correct: false },
        { text: 'Only acceptable if the woman is actually old.', correct: false },
      ],
      explanation: "Calling an unrelated friendly woman 'āyí' (or man 'shūshu') is the normal, polite default in China. It mirrors how Chinese society treats all elders as extended family. A waitress, a neighbour, your friend's mum — all 'āyí'.",
    },
  ],

  rwenDialogue: {
    intro: "Lunar New Year reunion at your husband's family home. The door swings open and a procession of relatives streams in. His dad's older brother — bóbo — is the first to spot you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hāi! Nǐ jiù shì wǒ zhízi de qīzi ba?',
        native: "Ha! You must be my nephew's wife?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bóbo, nǐ hǎo! Hěn gāoxìng rènshi nǐ', native: 'Hello bóbo! Lovely to meet you', correct: true, feedback: 'Perfect — naming him bóbo signals you understand exactly who he is in the family. Big points scored.' },
          { target: 'Shūshu, nǐ hǎo!', native: 'Hello shūshu!', correct: false, feedback: "He's your husband's dad's OLDER brother — that makes him bóbo, not shūshu. The family will gently correct you." },
          { target: 'Nǐ hǎo!', native: 'Hello!', correct: false, feedback: "Technically polite — but at Chinese New Year, NOT using a kinship title feels distant. Try bóbo." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hāha — hǎo! Lái lái lái, chī jiǎozi!',
        native: 'Haha — good! Come, come, eat dumplings!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you feel that warmth shift? The moment you used 'bóbo', you stopped being a foreigner and became 'one of us'. Names open doors.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Dad's younger brother (uncle)", correct: ['Shūshu', 'Shushu', 'shushu', 'shūshu', '叔叔'] },
      { prompt: "Auntie (greeting a friendly older woman)", correct: ['Āyí', 'Ayi', 'ayi', 'āyí', '阿姨'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick ONE specific aunt or uncle in your life. Practise their Chinese title out loud — bóbo, shūshu, or āyí. If you have a Chinese friend, try addressing their parents the next time you meet them: 'Shūshu, āyí, nǐ hǎo'. They'll grin.",
    rwenSignoff: "Don't try to memorise all twelve aunt/uncle words this week. Three are plenty. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Lunar New Year reunion at your husband's family home in Beijing. Red envelopes on the table, dumplings being folded in the kitchen, a doorbell ringing every few minutes as more relatives arrive. His father's older brother just walked in — and he's making a beeline for you.",
    rwenRole: "Bóbo (伯伯) — your husband's paternal uncle, late 60s, jovial, slightly tipsy on báijiǔ. He'll greet you, ask about your family, and steer you toward the dumpling table. Will quietly note whether you address him as 'bóbo' (correct) or 'shūshu' (technically wrong — he's the OLDER brother).",
    successCriteria: "User correctly addresses him as 'bóbo' (older brother) rather than 'shūshu' (younger brother), uses 'nǐ hǎo' or 'xīn nián hǎo' (Happy New Year) as a greeting, and handles his question about their own aunts/uncles using at least one correct kinship term.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
