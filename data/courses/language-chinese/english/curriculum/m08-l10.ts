import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: "Yī tiān shēnghuó — A Day's Life",
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone day. Yesterday, today, tomorrow — all in one breath. You'll talk through your full day with a Chinese friend on a WeChat video call: when you got up, what you did, what you'll do next. Past le, present verbs, future huì — all the gears turning together.",
    culturalNote: "WeChat video calls (shìpín) are how Chinese friendships breathe across distance. The classic opener: 'jīntiān zěnme yàng?' (how was today?). It invites the full day-in-the-life answer. Mandarin's verb timeline is simple — once you know le, huì, and basic time words, you can sketch any day.",
  },

  chunks: [
    {
      id: 'jintian_zaoshang',
      target: 'Jīntiān zǎoshang wǒ qǐchuáng le',
      native: 'This morning I got up',
      literal: '(今天早上我起床了) lit: today-morning-I-rise-bed-(done)',
      emoji: '🌅',
      phonetic: 'jin-TYEN ZAO-shahng waw chee-CHWAHNG luh',
      audioRef: null,
    },
    {
      id: 'xianzai',
      target: 'Xiànzài wǒ zài jiā',
      native: "Right now I'm at home",
      literal: '(现在我在家) lit: now-I-at-home',
      emoji: '🏠',
      phonetic: 'shyen-DZAI waw dzai JYAH',
      audioRef: null,
    },
    {
      id: 'mingtian_hui_qu',
      target: 'Míngtiān wǒ huì qù shàngbān',
      native: "Tomorrow I'll go to work",
      literal: '(明天我会去上班) lit: tomorrow-I-will-go-start-work',
      emoji: '💼',
      phonetic: 'ming-TYEN waw HWAY chyoo SHAHNG-bahn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The three-frame day: le · zài · huì',
    explanation: "Three little markers, three slots in time. (1) Past: verb + le → 'wǒ chī le' (I ate). (2) Now: zài before the verb → 'wǒ zài chī' (I'm eating). (3) Future: huì before the verb → 'wǒ huì chī' (I'll eat). Stack them with time words (zuótiān, jīntiān, míngtiān) and you can describe any moment of any day.",
    examples: [
      { target: 'Zuótiān wǒ kàn le diànyǐng', native: 'Yesterday I watched a movie' },
      { target: 'Xiànzài wǒ zài kàn diànshì', native: "Right now I'm watching TV" },
      { target: 'Míngtiān wǒ huì kàn shū', native: "Tomorrow I'll read a book" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each chunk to its time frame',
      pairs: [
        { left: 'Jīntiān zǎoshang wǒ qǐchuáng le', right: 'This morning I got up (past)' },
        { left: 'Xiànzài wǒ zài jiā', right: "Right now I'm at home (present)" },
        { left: 'Míngtiān wǒ huì qù shàngbān', right: "Tomorrow I'll go to work (future)" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right marker',
      sentence: 'Míngtiān wǒ _____ qù Shànghǎi',
      options: ['huì', 'le', 'zài'],
      correct: 'huì',
      context: "Tomorrow = future. Future = huì BEFORE the verb.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — past',
      prompt: 'This morning I got up (use jīntiān zǎoshang and verb + le)',
      correct: ['Jīntiān zǎoshang wǒ qǐchuáng le', 'Jintian zaoshang wo qichuang le', 'jintian zaoshang wo qichuang le', 'jīntiān zǎoshang wǒ qǐchuáng le', '今天早上我起床了'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build a future sentence: "Tomorrow I will go to work"',
      words: ['shàngbān', 'huì', 'qù', 'wǒ', 'Míngtiān'],
      correct: ['Míngtiān', 'wǒ', 'huì', 'qù', 'shàngbān'],
      translation: "Tomorrow I'll go to work",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Right now I'm at home",
      correct: ['Xiànzài wǒ zài jiā', 'Xianzai wo zai jia', 'xianzai wo zai jia', 'xiànzài wǒ zài jiā', '现在我在家'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Yesterday I watched TV, right now I\'m making dinner, tomorrow I\'ll rest." Which set of markers is correct?',
      question: 'Pick the right three',
      options: [
        { text: 'Past: verb + le · Now: zài + verb · Future: huì + verb', correct: true },
        { text: 'Past: huì + verb · Now: le + verb · Future: zài + verb', correct: false },
        { text: 'Past: zài + verb · Now: huì + verb · Future: le + verb', correct: false },
      ],
      explanation: "Le is the completion stamp (past). Zài is the in-progress marker (now). Huì is the will-do modal (future). Three slots, three markers — that's your whole timeline.",
    },
  ],

  rwenDialogue: {
    intro: "8pm. Your phone buzzes — WeChat video call from a Chinese friend who hasn't seen you in months. She picks up grinning, kettle steaming behind her. She wants the full day-in-the-life.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wèi! Hǎo jiǔ bú jiàn. Jīntiān zěnme yàng?',
        native: "Hey! Long time. How was today?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Jīntiān zǎoshang wǒ qù le gōngsī, xiànzài wǒ zài jiā, míngtiān wǒ huì xiūxi', native: "This morning I went to the office, right now I'm at home, tomorrow I'll rest", correct: true, feedback: "All three frames in one breath. Le for the morning, zài for now, huì for tomorrow. That's the capstone — one fluent timeline." },
          { target: 'Wǒ qù gōngsī, wǒ zài jiā, wǒ xiūxi', native: 'I go office, I at home, I rest', correct: false, feedback: 'No time markers — every sentence sounds present. Add le, zài, and huì to fix the timeline.' },
          { target: 'Míngtiān wǒ qù le gōngsī', native: 'Tomorrow I went to the office', correct: false, feedback: "Le doesn't fit with tomorrow — that's a past marker. Use huì for the future." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tài bàng le! Nǐ de Zhōngwén jìnbù hěn duō. Míngtiān hǎo hǎo xiūxi.',
        native: 'Amazing! Your Chinese has come a long way. Rest well tomorrow.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 8 done. Yesterday, now, tomorrow — all under your fingers. The verbs of a Chinese day are no longer foreign. Look how far you've walked.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'This morning I got up (past with le)',
        correct: ['Jīntiān zǎoshang wǒ qǐchuáng le', 'Jintian zaoshang wo qichuang le', 'jintian zaoshang wo qichuang le', 'jīntiān zǎoshang wǒ qǐchuáng le', '今天早上我起床了'],
      },
      {
        prompt: "Tomorrow I'll go to work",
        correct: ['Míngtiān wǒ huì qù shàngbān', 'Mingtian wo hui qu shangban', 'mingtian wo hui qu shangban', 'míngtiān wǒ huì qù shàngbān', '明天我会去上班'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Capstone",
    task: "Tonight, narrate your day in three sentences: one past (verb + le), one present (zài + verb), one future (huì + verb). Use any verbs from this module. WeChat them to a friend — even an imaginary one.",
    rwenSignoff: "Module 8 closed. You can now describe any day, in any tense, in Mandarin. That's not small. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "WeChat video call, 8:30pm Beijing time. A Chinese friend you haven't seen in six months calls out of the blue. She wants your full day rundown: what you got up to this morning, what you're doing right now, what's on for tomorrow and the rest of the week. Then she'll share hers. Past, present, future all in play.",
    rwenRole: "Lín Yīng (林莹) — close Chinese friend, early 30s, currently studying in Shanghai. Hasn't seen you in months. Will fire 'jīntiān zěnme yàng?' (how was today?), 'xiànzài zài zuò shénme?' (what are you doing now?), 'míngtiān nǐ huì zuò shénme?' (what'll you do tomorrow?). Warm, curious, will gently nudge if you mix le and huì.",
    successCriteria: "User produces at least one past sentence with verb + le, one present sentence with zài + verb (or just present-tense verb in context), and one future sentence with huì + verb. Each sentence is anchored by a time word (zuótiān, jīntiān, xiànzài, míngtiān, xià ge xīngqī). User asks at least one question back to the friend using the same frames.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
