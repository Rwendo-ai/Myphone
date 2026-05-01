import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Zuòkè — Being hosted (and hosting back)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're invited to a Chinese family's home. They open the door, hand you slippers, lead you in. The mother already has tea pouring. Three phrases turn you from guest into someone she might actually invite back: 'Huānyíng' (welcome — you'll hear it, AND say it back when you host). 'Qǐng zuò' (please sit). And the magic disarmer: 'Bú yào kèqi' — don't be polite. In other words: PLEASE help yourself.",
    culturalNote: "Chinese hospitality runs on a beautiful contradiction. The host insists you eat MORE. You politely refuse. The host insists again. You finally take more. This dance is called 'kèqi' (客气 polite/standing-on-ceremony). Telling someone 'bú yào kèqi' (don't be polite) means 'we're past formality, you're family now, EAT'. It's the warmest thing a host can say.",
  },

  chunks: [
    {
      id: 'huanying',
      target: 'Huānyíng',
      native: 'Welcome',
      literal: '(欢迎) lit: joy-meet',
      emoji: '🤗',
      phonetic: 'HWAN-ying',
      audioRef: null,
    },
    {
      id: 'qing_zuo',
      target: 'Qǐng zuò',
      native: 'Please sit',
      literal: '(请坐) lit: please-sit',
      emoji: '🪑',
      phonetic: 'ching DZWO',
      audioRef: null,
    },
    {
      id: 'bu_yao_keqi',
      target: 'Bú yào kèqi',
      native: "Don't be shy / help yourself (lit: don't-want-polite)",
      literal: '(不要客气) lit: not-want-polite',
      emoji: '🍽️',
      phonetic: 'boo yow KUH-chee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The host-guest verbal dance",
    explanation: "Chinese hosting follows a rhythm. Host: 'Huānyíng, qǐng zuò!' (welcome, please sit). Host pours tea, brings food: 'Suíbiàn chī, bú yào kèqi' (eat at your leisure, don't be polite). Guest: 'Xièxie, dǎrǎo le' (thanks, sorry to disturb). The host then waves it off — 'Bú yào kèqi!' (don't stand on ceremony). The phrases are LOOPS, not one-offs. The same line gets said three times in a meal — it's how warmth gets reaffirmed.",
    examples: [
      { target: 'Huānyíng huānyíng', native: 'Welcome, welcome (doubled for warmth)' },
      { target: 'Suíbiàn chī', native: 'Eat at your leisure / help yourself' },
      { target: 'Bú yào kèqi', native: "Don't be shy / help yourself" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each host phrase to its meaning',
      pairs: [
        { left: 'Huānyíng', right: 'Welcome' },
        { left: 'Qǐng zuò', right: 'Please sit' },
        { left: 'Bú yào kèqi', right: "Don't be polite (help yourself)" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Welcome (greeting a guest at the door)',
      correct: ['Huānyíng', 'Huanying', 'huanying', 'huānyíng', '欢迎'],
    },
    {
      type: 'fill_blank',
      instruction: "Your guest is hesitating to take more food. You urge them on:",
      sentence: 'Bú yào _____ — duō chī yìdiǎn',
      options: ['kèqi', 'shuō', 'lái'],
      correct: 'kèqi',
      context: "'Bú yào kèqi' (don't stand on ceremony) is the host's classic prompt to eat more. 'Duō chī yìdiǎn' = eat a little more. Together they form the heart of the Chinese feeding ritual.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Welcome, please sit, drink tea"',
      words: ['hē', 'qǐng', 'Huānyíng', 'chá', 'zuò'],
      correct: ['Huānyíng', 'qǐng', 'zuò', 'hē', 'chá'],
      translation: 'Welcome, please sit, drink tea',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Don't be polite (telling guest to help themselves)",
      correct: ['Bú yào kèqi', 'Bu yao keqi', 'bu yao keqi', 'bú yào kèqi', '不要客气'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your Chinese host says 'Bú yào kèqi, suíbiàn chī!' What's the right move?",
      question: 'Pick the natural response',
      options: [
        { text: "Smile, say 'Hǎo, xièxie' and actually take more food. The 'don't be polite' is real — they want you to eat.", correct: true },
        { text: "Politely decline forever — that's what 'kèqi' culture demands.", correct: false },
        { text: 'Keep eating but don\'t respond.', correct: false },
      ],
      explanation: "'Bú yào kèqi' is the host's way of saying 'we're past the formality dance — now actually eat'. Acknowledge it ('hǎo, xièxie') and take more. Refusing forever is rude in this moment.",
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon. Your Chinese friend has invited you to her family's apartment in Hangzhou. The door swings open — her mother, smiling broadly, beckoning you in.",
    lines: [
      {
        speaker: 'npc',
        target: "Huānyíng huānyíng! Kuài jìnlái, wàimiàn lěng!",
        native: "Welcome, welcome! Come in quickly, it's cold outside!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie āyí — dǎrǎo le', native: "Thank you Auntie — sorry to intrude", correct: true, feedback: "Perfect — calling her 'āyí' (auntie) is the warm address for friend's mum, and 'dǎrǎo le' (sorry to disturb) is the classic guest's opener. She's already pulling out slippers." },
          { target: 'Nǐ hǎo', native: 'Hello (too distant)', correct: false, feedback: "Too neutral for entering someone's home. Use 'xièxie āyí' — calling her 'auntie' instantly warms the room. Add 'dǎrǎo le' to acknowledge you're entering her space." },
          { target: 'Bú yào kèqi', native: "Don't be polite (wrong direction)", correct: false, feedback: "She said it to you, not the other way! 'Bú yào kèqi' is what HOSTS say to guests, not the reverse." },
        ],
      },
      {
        speaker: 'npc',
        target: "Qǐng zuò qǐng zuò. Wǒ pào diǎn chá. Suíbiàn chī shuǐguǒ!",
        native: "Please sit, please sit. I'll brew some tea. Help yourself to fruit!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie āyí. Wǒ zìjǐ lái', native: "Thanks Auntie. I'll get it myself", correct: true, feedback: "Beautiful — you accepted, took ownership ('wǒ zìjǐ lái' = I'll do it myself), and lowered her workload. She'll insist you sit anyway, but the gesture is everything." },
          { target: 'Bú yào — wǒ bù è', native: "No — I'm not hungry (refusing)", correct: false, feedback: "Even if you're not hungry, refuse food at the START of a Chinese visit and you've broken the warmth. Take a piece of fruit, even just one. 'Xièxie' is the right answer here, not 'bù'." },
          { target: 'Hǎo de', native: "OK (too flat)", correct: false, feedback: "Functional but cold. Layer in 'xièxie āyí' — that one word ('āyí') is the warmth multiplier in Chinese." },
        ],
      },
      {
        speaker: 'npc',
        target: "Bú yào kèqi! Zhè shì nǐ jiā — duō chī yìdiǎn.",
        native: "Don't be polite! This is your home — eat a bit more.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you feel her saying 'zhè shì nǐ jiā' — this is your home? That's the highest gift a Chinese host gives. You earned it by responding warmly to every move. Tomorrow — the capstone. Beijing dinner with your colleagues. Everything you've learned, in one meal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Welcome (greeting a guest)', correct: ['Huānyíng', 'Huanying', 'huanying', 'huānyíng', '欢迎'] },
      { prompt: "Please sit", correct: ['Qǐng zuò', 'Qing zuo', 'qing zuo', 'qǐng zuò', '请坐'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you have ANY guest at your home — friend, delivery person, family — say 'Huānyíng' to yourself as they walk in. Imagine offering 'Qǐng zuò' as you wave them to a chair. Practise the host muscle. Hosting in Chinese is a verbal art — and the only way to learn is to rehearse the rhythm.",
    rwenSignoff: "Tomorrow is the capstone. A whole Beijing dinner — order, eat, toast, decline, thank. Everything from this module. Bring your appetite AND your courage. Zàijiàn.",
  },

  phase8: {
    scenario: "You've invited a Chinese colleague (Wáng Lǎoshī) to your home for dinner — your first time hosting in Mandarin. He arrives at the door with a bottle of wine. Welcome him in, seat him, offer tea, urge him to eat, and play the host role with proper Chinese warmth.",
    rwenRole: "Wáng Lǎoshī (王老师) — your Chinese teacher and mentor, mid-50s, gracious, traditional. He'll be visibly delighted that you're hosting in Mandarin, will be initially 'kèqi' (refusing food/drink politely), and will respond beautifully when you push back with 'bú yào kèqi'. He'll quietly grade your hosting flow.",
    successCriteria: "User opens with 'huānyíng' (doubled if possible — 'huānyíng huānyíng'), uses 'qǐng zuò' to seat him, offers tea ('hē diǎn chá ba'), urges him to eat with 'bú yào kèqi' or 'suíbiàn chī', and addresses him with respect throughout. Bonus: ends the visit with 'mànzǒu' (take care / walk slowly) when he leaves.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
