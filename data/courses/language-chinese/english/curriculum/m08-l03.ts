import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-qu-lai',
  module: 8,
  lesson: 3,
  title: 'Qù & Lái — Go & Come',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Qù (去) and lái (来) are the heartbeat of movement in Chinese. Qù = away from where you stand. Lái = toward you. The whole map of a Chinese day swings between these two.",
    culturalNote: "Notice 'wǒmen zǒu ba' (let's go). That little ba (吧) at the end softens it from a command to a friendly suggestion — like adding 'shall we?' in English. Mandarin uses ba constantly to keep the social temperature warm.",
  },

  chunks: [
    {
      id: 'qu_gongsi',
      target: 'Wǒ qù gōngsī',
      native: 'I go to the company',
      literal: '(我去公司) lit: I-go-company',
      emoji: '🏢',
      phonetic: 'WAW chyoo GONG-sih',
      audioRef: null,
    },
    {
      id: 'ta_lai_le',
      target: 'Tā lái le',
      native: 'He came / he is here',
      literal: '(他来了) lit: he-come-(completion)',
      emoji: '🚪',
      phonetic: 'tah LAI luh',
      audioRef: null,
    },
    {
      id: 'women_zou_ba',
      target: 'Wǒmen zǒu ba',
      native: "Let's go",
      literal: '(我们走吧) lit: we-walk-(suggestion)',
      emoji: '🚶',
      phonetic: 'WAW-men dzoh bah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Qù vs Lái — direction relative to YOU',
    explanation: "Qù = movement AWAY from where the speaker is. Lái = movement TOWARD the speaker. So 'wǒ qù Běijīng' (I go to Beijing — I'm not in Beijing yet). 'Tā lái Shànghǎi' (he comes to Shanghai — said by someone in Shanghai). Anchor it to your own position.",
    examples: [
      { target: 'Wǒ qù chāoshì', native: "I'm going to the supermarket (away)" },
      { target: 'Lái wǒ jiā', native: 'Come to my house (toward me)' },
      { target: 'Nǐ lái ma?', native: 'Are you coming? (toward speaker)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ qù gōngsī', right: 'I go to the company' },
        { left: 'Tā lái le', right: 'He came / is here' },
        { left: 'Wǒmen zǒu ba', right: "Let's go" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick qù or lái',
      sentence: 'Míngtiān nǐ _____ wǒ jiā chī fàn',
      options: ['lái', 'qù', 'zǒu'],
      correct: 'lái',
      context: "You're inviting them to YOUR house — movement toward you. So lái (come), not qù (go).",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Let's go (with the soft ba)",
      correct: ['Wǒmen zǒu ba', 'Women zou ba', 'women zou ba', 'wǒmen zǒu ba', '我们走吧'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I go to the company"',
      words: ['gōngsī', 'qù', 'Wǒ'],
      correct: ['Wǒ', 'qù', 'gōngsī'],
      translation: 'I go to the company',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'He came / he is here (3 syllables)',
      correct: ['Tā lái le', 'Ta lai le', 'ta lai le', 'tā lái le', '他来了'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You are in Shanghai. Your friend is in Beijing and wants to visit you. They text:',
      question: 'Which is correct from their side?',
      options: [
        { text: 'Wǒ lái Shànghǎi', correct: true },
        { text: 'Wǒ qù Shànghǎi', correct: false },
        { text: 'Wǒ zǒu Shànghǎi', correct: false },
      ],
      explanation: "From the speaker's perspective in Beijing, going to Shanghai is movement TOWARD where you (the listener) are. So lái — they're coming to you.",
    },
  ],

  rwenDialogue: {
    intro: "It's 8:30am, packed Shanghai metro. Your colleague messages you on WeChat — they're already at the office.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ zài nǎlǐ?',
        native: 'Where are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ qù gōngsī, kuài dào le', native: "I'm heading to the company, almost there", correct: true, feedback: "Spot on. Qù — movement away from home, toward work. 'Kuài dào le' adds 'almost there' — natural commute talk." },
          { target: 'Wǒ lái gōngsī', native: 'I come company', correct: false, feedback: "Lái would only work if YOU were already at the office speaking. From the metro heading there, it's qù." },
          { target: 'Wǒ zuò gōngsī', native: 'I make company', correct: false, feedback: "Zuò is do/make. For movement to a place, you need qù." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, kuài lái ba!',
        native: 'Okay, hurry up and come!',
      },
      {
        speaker: 'rwen',
        rwenLine: "From your seat on the metro you said 'qù'. From their seat at the office they said 'lái'. Same journey, two perspectives. That's the whole pattern.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I go to the company',
        correct: ['Wǒ qù gōngsī', 'Wo qu gongsi', 'wo qu gongsi', 'wǒ qù gōngsī', '我去公司'],
      },
      {
        prompt: "Let's go (gentle suggestion)",
        correct: ['Wǒmen zǒu ba', 'Women zou ba', 'women zou ba', 'wǒmen zǒu ba', '我们走吧'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use qù and lái at least once each today, even silently. When you head somewhere — 'wǒ qù...'. When someone heads toward you — 'tā lái...'. Anchor each one to your own location.",
    rwenSignoff: "Movement is geometry. You and your listener are the two points. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "8:15am on the Shanghai metro, line 2. Standing-room only. A colleague WeChats you wondering where you are and whether the team should wait for you for the morning standup. There's also talk of going for lunch together later.",
    rwenRole: "Zhāng Lì (张丽) — your team lead, mid-30s, organised, kind. Already at the office. Sends rapid-fire WeChats. Will use lái when talking about you coming to her, and ask about your qù plans for lunch.",
    successCriteria: "User uses 'wǒ qù...' for at least one destination (gōngsī, the meeting, lunch), responds correctly when she uses 'lái' from her perspective, and uses 'wǒmen zǒu ba' or similar to suggest going somewhere together.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
