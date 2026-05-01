import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Bàifǎng, Dǎ Diànhuà, Xiǎng — Visiting, Calling, Missing',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Family across time zones. You haven't seen your wàipó in two years. Today we learn the three verbs that bridge that distance — visit, call, miss. There's a small jewel hiding in the third: 'wǒ xiǎng nǐ' literally means 'I think of you' — and that's how Mandarin says 'I miss you'. Missing someone IS thinking of them.",
    culturalNote: "In Chinese family life, 'dǎ diànhuà' (calling) is the most universal love-action — daily phone calls between adult children and elderly parents are the cultural baseline. Not calling for a week is a quiet kind of failure. The verbs we learn today aren't just vocabulary; they're the actions that hold a Chinese family together across distance.",
  },

  chunks: [
    {
      id: 'baifang',
      target: 'Bàifǎng',
      native: 'To visit (formally)',
      literal: '(拜访) lit: bow-visit',
      emoji: '🚪',
      phonetic: 'BYE-fahng (falling, then dipping)',
      audioRef: null,
    },
    {
      id: 'da_dianhua',
      target: 'Dǎ diànhuà',
      native: 'To make a phone call',
      literal: '(打电话) lit: hit electric-speech',
      emoji: '📞',
      phonetic: 'dah dyen-HWA',
      audioRef: null,
    },
    {
      id: 'xiang',
      target: 'Xiǎng',
      native: 'To miss / to think of',
      literal: '(想) lit: think',
      emoji: '💭',
      phonetic: 'shyahng (dipping tone)',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Compound verbs — when you 'hit' a phone call",
    explanation: "Chinese loves verb-noun compounds where the verb is unexpected. 'Dǎ' (打) literally means 'hit/strike' — but you 'hit' a phone call, 'hit' a typewriter, 'hit' an umbrella (open it). Don't translate dǎ literally — recognise it as a workhorse verb that pairs with hundreds of nouns. And 'xiǎng' (想) means 'think' — but 'wǒ xiǎng nǐ' = 'I miss you'. Missing IS thinking-of.",
    examples: [
      { target: 'Wǒ dǎ diànhuà gěi māma', native: 'I call (lit: hit-phone-to) my mum' },
      { target: 'Wǒ xiǎng nǐ', native: 'I miss you (lit: I think-of you)' },
      { target: 'Wǒ qù bàifǎng yéye', native: "I'm going to visit grandfather" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its meaning',
      pairs: [
        { left: 'Bàifǎng', right: 'To visit (formally)' },
        { left: 'Dǎ diànhuà', right: 'To make a phone call' },
        { left: 'Xiǎng', right: 'To miss / think of' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'I miss you (to a family member)',
      correct: ['Wǒ xiǎng nǐ', 'Wo xiang ni', 'wo xiang ni', 'wǒ xiǎng nǐ', '我想你'],
    },
    {
      type: 'fill_blank',
      instruction: "Fill in the verb: 'I'm going to call mum'",
      sentence: 'Wǒ yào _____ diànhuà gěi māma',
      options: ['dǎ', 'qù', 'xiǎng'],
      correct: 'dǎ',
      context: "To make a call = dǎ diànhuà (hit + phone). Don't try to translate dǎ literally — it's just the verb that pairs with phone.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I miss my grandmother (paternal)"',
      words: ['nǎinai', 'Wǒ', 'wǒ', 'xiǎng', 'de'],
      correct: ['Wǒ', 'xiǎng', 'wǒ', 'de', 'nǎinai'],
      translation: 'I miss my grandmother',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm going to visit my parents",
      correct: ['Wǒ qù bàifǎng wǒ de bàba māma', 'Wo qu baifang wo de baba mama', 'wo qu baifang wo de baba mama', 'wǒ qù bàifǎng wǒ de bàba māma', '我去拜访我的爸爸妈妈'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why does 'wǒ xiǎng nǐ' mean 'I miss you' if 'xiǎng' literally means 'think'?",
      question: 'Pick the cultural reading',
      options: [
        { text: 'Because in Chinese, missing someone IS the act of thinking about them — there\'s no separate verb for it.', correct: true },
        { text: 'Because xiǎng has two unrelated meanings.', correct: false },
        { text: "It's a translation error — they're not really the same.", correct: false },
      ],
      explanation: "Mandarin collapses 'think of' and 'miss' into one verb — xiǎng. 'Wǒ xiǎng māma' could mean 'I'm thinking of mum' or 'I miss mum' — context tells you which, and often both are true at once. Beautiful.",
    },
  ],

  rwenDialogue: {
    intro: "Sunday afternoon. Your wàipó (mother's mother) lives 6,000 miles away in Beijing. You haven't called her in two weeks and the guilt is real. Time to dial.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wèi? Shéi a?',
        native: 'Hello? Who is it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wàipó, shì wǒ. Wǒ hěn xiǎng nǐ', native: "Wàipó, it's me. I miss you so much", correct: true, feedback: "Perfect — naming her 'wàipó' tells her instantly who's calling, and 'wǒ xiǎng nǐ' will melt her." },
          { target: 'Nǐ hǎo, wǒ dǎ diànhuà', native: 'Hello, I am calling', correct: false, feedback: "Technically true — but you don't announce that you're calling on a call. Open with the relationship word and your feeling." },
          { target: 'Wǒ qù bàifǎng', native: "I'm going to visit", correct: false, feedback: "Wrong action — you're calling, not visiting. Use 'dǎ diànhuà' or just open with 'shì wǒ' (it's me)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Āiyā! Wǒ yě xiǎng nǐ. Nǐ shénme shíhou lái bàifǎng?',
        native: "Oh! I miss you too. When are you coming to visit?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice the rhythm: missing → calling → visiting. Three verbs, one love. That's the whole Chinese family playbook in three words.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I miss you', correct: ['Wǒ xiǎng nǐ', 'Wo xiang ni', 'wo xiang ni', 'wǒ xiǎng nǐ', '我想你'] },
      { prompt: 'To make a phone call (the verb phrase)', correct: ['Dǎ diànhuà', 'Da dianhua', 'da dianhua', 'dǎ diànhuà', '打电话'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one family member you haven't spoken to in too long. Dǎ diànhuà — call them. Open with 'wǒ xiǎng nǐ' (or its English equivalent if they don't speak Mandarin). The verb is small. The action is everything.",
    rwenSignoff: "Three verbs to hold a family across distance. You have all three now. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Sunday afternoon, video-calling your wàipó (maternal grandmother) in Beijing. She's 84, lives alone, and lights up every time the screen turns on. You haven't called in two weeks and you can hear it in her voice when she picks up.",
    rwenRole: "Wàipó (外婆) — your maternal grandmother, 84, gentle, slightly hard of hearing. She'll express how much she's missed you, ask when you're coming to visit (bàifǎng), and gently scold you for not calling more often. Speaks slowly.",
    successCriteria: "User opens by naming her ('wàipó'), uses 'wǒ xiǎng nǐ' to express missing her, employs 'dǎ diànhuà' when explaining why they hadn't called more often, and addresses 'bàifǎng' (visit) in their response about coming to see her.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
