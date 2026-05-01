import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Pēngrèn — Cooking verbs',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Stand at the door of any Chinese kitchen. The wok is screaming hot, oil shimmering, ginger and garlic hitting it with a hiss. The chef tosses, lifts, flips — chǎo (stir-fry). That sound is the SOUND of Chinese cuisine. Today you learn the four cooking verbs that build every dish: zhǔ (boil), chǎo (stir-fry), zhēng (steam), zhá (deep-fry).",
    culturalNote: "Chinese cooking isn't a long list of techniques — it's mostly four verbs done very, very well. Cantonese cuisine LOVES zhēng (steam — preserves freshness). Sichuan loves chǎo (stir-fry with málà spice). Northern China loves zhǔ (boil — dumplings, noodles). Knowing the verb tells you the region AND the texture.",
  },

  chunks: [
    {
      id: 'zhu',
      target: 'Zhǔ',
      native: 'To boil',
      literal: '(煮) lit: boil',
      emoji: '🍲',
      phonetic: 'JOO',
      audioRef: null,
    },
    {
      id: 'chao',
      target: 'Chǎo',
      native: 'To stir-fry',
      literal: '(炒) lit: stir-fry',
      emoji: '🍳',
      phonetic: 'CHOW (dipping)',
      audioRef: null,
    },
    {
      id: 'zheng',
      target: 'Zhēng',
      native: 'To steam',
      literal: '(蒸) lit: steam',
      emoji: '♨️',
      phonetic: 'JUNG',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Bǎ X chǎo' — fronting what you cook",
    explanation: "When you describe cooking something, Chinese often uses 'bǎ' (把) to put the OBJECT first: 'Bǎ niúròu chǎo yi chǎo' = 'take the beef and stir-fry it'. Pattern: bǎ + (object) + (verb) + (often a doubling for casualness, like 'chǎo yi chǎo'). The doubling makes it sound informal and warm — like 'give it a quick stir'.",
    examples: [
      { target: 'Bǎ jīròu chǎo yi chǎo', native: 'Quickly stir-fry the chicken' },
      { target: 'Bǎ yú zhēng yi zhēng', native: 'Steam the fish' },
      { target: 'Bǎ jiǎozi zhǔ yi zhǔ', native: 'Boil the dumplings' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its meaning',
      pairs: [
        { left: 'Zhǔ', right: 'To boil' },
        { left: 'Chǎo', right: 'To stir-fry' },
        { left: 'Zhēng', right: 'To steam' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're describing dumplings (jiǎozi) — they're traditionally...",
      sentence: 'Jiǎozi shì _____ de',
      options: ['zhǔ', 'chǎo', 'zhēng'],
      correct: 'zhǔ',
      context: "Northern Chinese dumplings are 'zhǔ jiǎozi' (boiled dumplings) — that's the classic. Steamed dumplings (zhēngjiǎo) and pan-fried (jiānjiǎo) exist too, but 'zhǔ' is the default jiǎozi.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'To stir-fry (the cooking verb)',
      correct: ['Chǎo', 'Chao', 'chao', 'chǎo', '炒'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Steam the fish please"',
      words: ['yú', 'qǐng', 'zhēng', 'bǎ'],
      correct: ['Qǐng', 'bǎ', 'yú', 'zhēng'],
      translation: 'Please steam the fish',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'To boil (the cooking verb)',
      correct: ['Zhǔ', 'Zhu', 'zhu', 'zhǔ', '煮'],
    },
    {
      type: 'multiple_choice',
      instruction: "Cantonese cuisine is famous for which technique above all others?",
      question: 'Pick the answer',
      options: [
        { text: 'Zhēng (steam) — to preserve freshness, especially seafood.', correct: true },
        { text: 'Zhá (deep-fry) — heavy and rich.', correct: false },
        { text: 'Zhǔ (boil) — basic and slow.', correct: false },
      ],
      explanation: "Cantonese kitchens worship zhēng (steam) — it lets the natural taste come through. A whole steamed fish (zhēngyú) with ginger and scallions is the classic test of a good Cantonese chef.",
    },
  ],

  rwenDialogue: {
    intro: "You're in your Chinese friend's kitchen in Shenzhen. He's about to cook dinner. You volunteered to help. He passes you a slab of beef and points at the cleaver.",
    lines: [
      {
        speaker: 'npc',
        target: "Hǎo — bǎ niúròu qiē piàn. Wǒmen yào chǎo niúròu hé qīngcài.",
        native: 'OK — slice the beef. We\'re going to stir-fry beef and greens.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hǎo — bǎ niúròu chǎo yi chǎo, duì ma?', native: "OK — stir-fry the beef quickly, right?", correct: true, feedback: "Perfect — you echoed back his plan with the 'bǎ X chǎo yi chǎo' pattern. He nods, impressed." },
          { target: 'Wǒ shì chǎo', native: 'I am stir-fry (incorrect)', correct: false, feedback: "Drop the 'shì' (am). Verbs in Mandarin don't take 'am' — just 'wǒ chǎo' (I stir-fry) or use 'bǎ' to front the object." },
          { target: 'Niúròu', native: 'Beef (just the noun)', correct: false, feedback: "He needs an action — say what you'll DO with the beef. 'Bǎ niúròu chǎo yi chǎo' confirms the plan." },
        ],
      },
      {
        speaker: 'npc',
        target: "Yú yě yào zuò — wǒmen zhēng yú, hǎo bù hǎo?",
        native: "Fish too — we'll steam the fish, OK?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hǎo, bǎ yú zhēng yi zhēng. Wǒ xǐhuān zhēngyú', native: "Good, steam the fish. I love steamed fish", correct: true, feedback: "Beautiful — you confirmed AND showed personal taste. Plus you used 'zhēngyú' (the noun form, steamed fish) like a native." },
          { target: 'Bù — zhǔ yú', native: "No — boil the fish", correct: false, feedback: "Boiling fish is RARE in Chinese cooking — almost never done for whole fish. Stick with zhēng (steam) — it's the Cantonese way and the fish will thank you." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just used 'bǎ' to front objects, doubled the verbs for warmth, and chose the right cooking method per ingredient. That's not language — that's cooking IN the language. Tomorrow we drink tea.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'To stir-fry (the cooking verb)', correct: ['Chǎo', 'Chao', 'chao', 'chǎo', '炒'] },
      { prompt: 'To steam (the cooking verb)', correct: ['Zhēng', 'Zheng', 'zheng', 'zhēng', '蒸'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at your dinner tonight — every dish on your plate. Name the cooking method out loud in Mandarin. Boiled pasta? 'Zhǔ.' Stir-fried veggies? 'Chǎo.' Steamed broccoli? 'Zhēng.' Deep-fried anything? 'Zhá.' Train your eye to see Chinese cooking everywhere.",
    rwenSignoff: "Tomorrow — tea, coffee, water, alcohol. The other half of every Chinese meal. Zàijiàn.",
  },

  phase8: {
    scenario: "Cooking class at a friend's apartment in Shenzhen. Three Chinese friends are showing you how to cook a real home-style dinner. They want you to call out the cooking method for each dish as it happens — quiz-style. Beef going in the wok? Fish heading for the steamer? Dumplings dropping into the pot? Name the verb.",
    rwenRole: "Chén Hào (陈浩) — your Cantonese friend, 30, professional cook, patient teacher. He'll narrate what he's doing in slow Mandarin and pause for you to fill in the verb. He'll occasionally throw curveballs ('what about deep-frying?' = zhá) to test edges of your knowledge.",
    successCriteria: "User correctly identifies zhǔ (boil) for dumplings/noodles, chǎo (stir-fry) for vegetables/meat in a wok, and zhēng (steam) for fish/buns. Uses the 'bǎ X (verb)' pattern at least once. Bonus: introduces zhá (deep-fry) for fried items.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
