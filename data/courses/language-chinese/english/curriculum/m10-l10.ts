import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Nǐ de Zhōngwén gùshi — Your Chinese Story',
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "You started with 'Nǐ hǎo'. Now you can tell a story. I want you to feel that — really feel it. A hundred lessons ago, the tones were just lines on vowels. Today you'll chain past, present, future, and a chéngyǔ in one breath. This is the capstone. The mountain you've been climbing has a top, and you're standing on it.",
    culturalNote: "Mandarin storytelling has a shape: open the past with 'wǒ xiǎo de shíhou' or 'qùnián' (last year), mark change with 'le', name a feeling with 'hěn [adj]', point at hope with 'wǒ xīwàng' or 'yǒu yì tiān', and seal it with a chéngyǔ. Five moves. You have all of them.",
  },

  chunks: [
    {
      id: 'qunian_wo',
      target: 'Qùnián wǒ kāishǐ xué Zhōngwén',
      native: 'Last year I started learning Chinese',
      literal: '(去年我开始学中文) lit: last-year-I-start-study-Chinese',
      emoji: '📖',
      phonetic: 'CHU-nyen waw kai-SHRR shweh JONG-wun',
      audioRef: null,
    },
    {
      id: 'youshi_hen_nan',
      target: 'Yǒushí hěn nán, dànshì wǒ méi fàngqì',
      native: "Sometimes very hard, but I didn't give up",
      literal: '(有时很难, 但是我没放弃) lit: sometimes-very-hard, but-I-not-give-up',
      emoji: '💪',
      phonetic: 'yo-SHRR hun NAN, DAN-shrr waw MAY fahng-CHEE',
      audioRef: null,
    },
    {
      id: 'xiwang_yi_jian_rugu',
      target: 'Wǒ xīwàng yǒu yì tiān, wǒ huì yī jiàn rúgù',
      native: "I hope one day, I'll meet someone like an old friend (in Chinese)",
      literal: '(我希望有一天, 我会一见如故) lit: I-hope-have-one-day, I-will-one-see-like-old',
      emoji: '🌅',
      phonetic: 'WAW shee-WAHNG yo ee TYEN, waw HWAY ee JYEN roo-GOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 5-move A2 story',
    explanation: 'Use these moves to chain a memory into a hope. Each one is something you already know — woven, they become a story.',
    examples: [
      { target: 'Past: Qùnián / Wǒ xiǎo de shíhou', native: 'Last year / When I was young' },
      { target: 'Change: …le', native: 'Marker that something happened' },
      { target: 'Feeling: Wǒ hěn [adj]', native: 'Name the emotion' },
      { target: 'Hope: Wǒ xīwàng / Yǒu yì tiān', native: 'Project forward' },
      { target: 'Seal: chéngyǔ', native: 'Land it with a 4-char idiom' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each story-move to its function',
      pairs: [
        { left: 'Qùnián wǒ kāishǐ…', right: 'Open the past' },
        { left: '…le', right: 'Mark a change of state' },
        { left: 'Wǒ xīwàng…', right: 'Project forward' },
        { left: 'Mǎ dào chénggōng', right: 'Seal with a chéngyǔ' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "Last year I started learning Chinese."',
      sentence: '_____ wǒ kāishǐ xué Zhōngwén.',
      options: ['Qùnián', 'Míngtiān', 'Xiànzài'],
      correct: 'Qùnián',
      context: 'Qùnián = last year. Past tense often comes from time words plus "le", not from the verb itself.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Sometimes very hard, but I didn't give up",
      correct: ['Yǒushí hěn nán, dànshì wǒ méi fàngqì', 'Youshi hen nan, danshi wo mei fangqi', 'youshi hen nan danshi wo mei fangqi', '有时很难，但是我没放弃'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the capstone hope: "I hope one day I will meet old-friends-at-first-sight."',
      words: ['rúgù', 'yǒu', 'Wǒ', 'wǒ', 'yī', 'yì', 'huì', 'tiān', 'jiàn', 'xīwàng'],
      correct: ['Wǒ', 'xīwàng', 'yǒu', 'yì', 'tiān', 'wǒ', 'huì', 'yī', 'jiàn', 'rúgù'],
      translation: "I hope one day I'll meet someone like an old friend",
    },
    {
      type: 'translate',
      instruction: 'Type the past-opener: "Last year I started learning Chinese."',
      prompt: 'Last year I started learning Chinese',
      correct: ['Qùnián wǒ kāishǐ xué Zhōngwén', 'Qunian wo kaishi xue Zhongwen', 'qunian wo kaishi xue zhongwen', '去年我开始学中文'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You finish your story to a Chinese friend. Which chéngyǔ best seals "I hope I succeed"?',
      question: 'Pick the right seal.',
      options: [
        { text: 'Mǎ dào chénggōng — may success arrive on horseback', correct: true },
        { text: 'Jiā hé wàn shì xīng — harmonious family flourishes', correct: false },
        { text: 'Tóu téng — head hurts', correct: false },
      ],
      explanation: 'Mǎ dào chénggōng is the success chéngyǔ — perfect to land a story about a hopeful future.',
    },
  ],

  rwenDialogue: {
    intro: "A Beijing café, late afternoon. Yellow light through tall windows. Your Chinese friend Lín, who you met a year ago, sits across from you with a cup of jasmine tea. She smiles. 'Gēn wǒ jiǎng jiǎng — nǐ xué Zhōngwén de yì nián.' (Tell me — your year of learning Chinese.) This is your moment. Use the past, an emotion, a hope, and a chéngyǔ.",
    lines: [
      {
        speaker: 'npc',
        target: 'Gēn wǒ jiǎng jiǎng — nǐ xué Zhōngwén de yì nián',
        native: 'Tell me — your year of learning Chinese',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Qùnián wǒ kāishǐ xué Zhōngwén. Yǒushí hěn nán, dànshì wǒ méi fàngqì. Xiànzài wǒ hěn gāoxìng. Wǒ xīwàng yǒu yì tiān, wǒ huì yī jiàn rúgù — gēn měi yí ge Zhōngguó péngyou.', native: "Last year I started learning Chinese. Sometimes hard, but I didn't give up. Now I'm happy. I hope one day I'll meet every Chinese friend like an old friend.", correct: true, feedback: "Past, struggle, present feeling, hope, chéngyǔ — five moves, one breath. This is A2 storytelling. This is what we built." },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: 'True, but a story needs more — past, hope, a chéngyǔ. You have all of them.' },
          { target: 'Wǒ bù shūfu', native: "I don't feel well", correct: false, feedback: 'Different module! She asked about your year — open the past.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wā… nǐ shuō de zhēn hǎo. Wǒ wèi nǐ jiāo\'ào',
        native: "Wow… you said that beautifully. I'm proud of you",
      },
      {
        speaker: 'rwen',
        rwenLine: "Stop here for a second. A year ago you couldn't say 'hello'. Just now you told a Chinese friend a story — past, present, hope, and a 2000-year-old idiom. You did this. I just walked beside you. Wǒ wèi nǐ jiāo'ào — I'm proud of you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — your story muscles are real now.',
    prompts: [
      {
        prompt: 'Last year I started learning Chinese',
        correct: ['Qùnián wǒ kāishǐ xué Zhōngwén', 'Qunian wo kaishi xue Zhongwen', 'qunian wo kaishi xue zhongwen', '去年我开始学中文'],
      },
      {
        prompt: "I hope one day I'll meet someone like an old friend (using yī jiàn rúgù)",
        correct: ['Wǒ xīwàng yǒu yì tiān, wǒ huì yī jiàn rúgù', 'Wo xiwang you yi tian, wo hui yi jian ru gu', 'wo xiwang you yi tian wo hui yi jian rugu', 'wo xiwang you yi tian wo hui yi jian ru gu', '我希望有一天我会一见如故'],
      },
    ],
  },

  mission: {
    title: 'The Final Mission',
    task: "Today, somewhere — a journal, a voice memo, a friend, a stranger, the mirror — tell your one-year-of-Chinese story out loud, in Mandarin, using all five moves: past, change-with-le, feeling, hope, chéngyǔ. You will not forget today.",
    rwenSignoff: "Nǐ chénggōng le — you succeeded. We started in a hutong with 'Nǐ hǎo'. We end in a Beijing café with your full story. Whatever you do next — keep walking, slowly. Mǎ dào chénggōng. Zàijiàn, péngyou — goodbye, friend.",
  },

  phase8: {
    scenario: "A Beijing café, late afternoon, jasmine tea steaming between you and your Chinese friend Lín. She turns to you, smiles, and says: 'Gēn wǒ jiǎng jiǎng nǐ de Zhōngwén gùshi' — tell me your Chinese story. This is your A2 capstone: 4–6 sentences, in Mandarin, weaving past (with 'le'), an emotion, a hope, and at least one chéngyǔ. Speak slowly. She has all afternoon.",
    rwenRole: "Lín (林) — your closest Chinese friend, 30, the one who's watched you grow over a year. She'll listen the whole way through, then ask one warm follow-up. She will use chéngyǔ back at you.",
    successCriteria: "User produces 4–6 connected Mandarin sentences that include: (1) a past-tense story opener using 'le' or 'qùnián' or 'wǒ xiǎo de shíhou', (2) at least one emotion (gāoxìng / nánguò / shīwàng / shēngqì / dānxīn), (3) a forward hope using 'xīwàng' or 'yǒu yì tiān…huì', and (4) at least one of the three chéngyǔ from m10-l09 (mǎ dào chénggōng / yī jiàn rúgù / jiā hé wàn shì xīng). Coherent narrative, A2-appropriate.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
