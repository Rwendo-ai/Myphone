import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Zuótiān — Yesterday (Past with le)',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Time to talk about yesterday. Mandarin doesn't change verb endings the way English does ('eat' → 'ate'). Instead, it adds a tiny particle: le (了). Drop le after the verb and the action is done. That's the whole trick — for now.",
    culturalNote: "Le is one of the most loved and feared particles in Mandarin. Don't worry — today we use only ONE of its jobs: the verb-completion le. Stick it after the verb to mean 'I did this'. The other uses come later, gently, when you're ready. We learn through examples, not rules.",
  },

  chunks: [
    {
      id: 'zuotian_qu_le',
      target: 'Zuótiān wǒ qù le gōngsī',
      native: 'Yesterday I went to the office',
      literal: '(昨天我去了公司) lit: yesterday-I-go-(done)-office',
      emoji: '📅',
      phonetic: 'dzwo-TYEN waw chyoo luh GONG-sih',
      audioRef: null,
    },
    {
      id: 'wo_chi_le',
      target: 'Wǒ chī le jiǎozi',
      native: 'I ate dumplings',
      literal: '(我吃了饺子) lit: I-eat-(done)-dumplings',
      emoji: '🥟',
      phonetic: 'WAW chrr luh JYAO-dzih',
      audioRef: null,
    },
    {
      id: 'hen_hao',
      target: 'Hěn hǎo',
      native: 'It was good',
      literal: '(很好) lit: very-good',
      emoji: '👍',
      phonetic: 'hun HAO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb + le = action completed',
    explanation: "Slip le (了) right after the verb to mark it as done. 'Wǒ chī fàn' = I eat. 'Wǒ chī le fàn' = I ate. 'Tā lái' = he comes. 'Tā lái le' = he came / he's here now. The verb itself doesn't change — le does the work.",
    examples: [
      { target: 'Wǒ kàn le diànyǐng', native: 'I watched a movie' },
      { target: 'Tā mǎi le shū', native: 'She bought a book' },
      { target: 'Wǒmen hē le chá', native: 'We drank tea' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Zuótiān wǒ qù le gōngsī', right: 'Yesterday I went to the office' },
        { left: 'Wǒ chī le jiǎozi', right: 'I ate dumplings' },
        { left: 'Hěn hǎo', right: 'It was good / very good' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Mark the action as completed',
      sentence: 'Zuótiān wǒ kàn _____ diànshì',
      options: ['le', 'ma', 'ba'],
      correct: 'le',
      context: "Le after the verb = action done. So 'kàn le diànshì' = watched TV.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — past action',
      prompt: 'I ate dumplings',
      correct: ['Wǒ chī le jiǎozi', 'Wo chi le jiaozi', 'wo chi le jiaozi', 'wǒ chī le jiǎozi', '我吃了饺子'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Yesterday I went to the office"',
      words: ['gōngsī', 'qù', 'wǒ', 'le', 'Zuótiān'],
      correct: ['Zuótiān', 'wǒ', 'qù', 'le', 'gōngsī'],
      translation: 'Yesterday I went to the office',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Yesterday I went to the office',
      correct: ['Zuótiān wǒ qù le gōngsī', 'Zuotian wo qu le gongsi', 'zuotian wo qu le gongsi', 'zuótiān wǒ qù le gōngsī', '昨天我去了公司'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Where does le go to mark a completed action?',
      question: 'Pick the natural sentence',
      options: [
        { text: 'Wǒ chī le fàn', correct: true },
        { text: 'Wǒ le chī fàn', correct: false },
        { text: 'Le wǒ chī fàn', correct: false },
      ],
      explanation: "Le sits right after the verb. Verb + le + (object). Don't overthink it — it's a small particle that just hangs onto the verb like a barnacle.",
    },
  ],

  rwenDialogue: {
    intro: "Monday morning. Your colleague drops by your desk and asks the universal back-from-the-weekend question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zuótiān nǐ zuò shénme le?',
        native: 'What did you do yesterday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ qù le gōngyuán, hěn hǎo', native: 'I went to the park, it was good', correct: true, feedback: "Beautiful — qù + le for the past, hěn hǎo as the verdict. Exactly how a Chinese friend would say it." },
          { target: 'Wǒ qù gōngyuán', native: 'I go park', correct: false, feedback: "Without le, this sounds present-tense. Add le after qù to mark it as done." },
          { target: 'Le wǒ qù gōngyuán', native: 'Done I go park', correct: false, feedback: "Le doesn't go at the front. It belongs right after the verb: qù le." },
        ],
      },
      {
        speaker: 'npc',
        target: 'A, hǎo de. Wǒ zuótiān zài jiā xiūxi le.',
        native: 'Ah nice. I rested at home yesterday.',
      },
      {
        speaker: 'rwen',
        rwenLine: "One little le, one whole tense. The verb didn't change — that's the gift Mandarin gave you. Stick le after the verb when the thing is done.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Yesterday I went to the office',
        correct: ['Zuótiān wǒ qù le gōngsī', 'Zuotian wo qu le gongsi', 'zuotian wo qu le gongsi', 'zuótiān wǒ qù le gōngsī', '昨天我去了公司'],
      },
      {
        prompt: 'I ate dumplings (past)',
        correct: ['Wǒ chī le jiǎozi', 'Wo chi le jiaozi', 'wo chi le jiaozi', 'wǒ chī le jiǎozi', '我吃了饺子'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight before bed, narrate three things you did today using verb + le. 'Wǒ qù le ___, wǒ chī le ___, wǒ kàn le ___'. Even silently. The le will start to feel automatic after a week.",
    rwenSignoff: "One small le, one whole yesterday. Don't memorise — just let it land. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Monday lunchtime. A friend WeChats you over the lunch break: 'zuótiān nǐ zuò shénme le?' (what did you do yesterday?). They want the full Sunday rundown — where you went, who you saw, what you ate. They'll share theirs back.",
    rwenRole: "Sūn Méi (孙美) — friend, early 30s, weekend warrior who hiked yesterday. Will fire 'qù nǎlǐ le?' (where did you go?), 'chī le shénme?' (what did you eat?), 'hǎo wán ma?' (was it fun?). Will gently correct missing le.",
    successCriteria: "User produces at least three past-tense sentences using verb + le (qù le, chī le, kàn le, etc.). Each sentence has le in the correct slot — right after the verb. User responds to a 'hǎo wán ma?' or similar with 'hěn hǎo' or a similar verdict.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
