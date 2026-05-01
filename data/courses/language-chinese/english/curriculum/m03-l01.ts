import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-wo-shi',
  module: 3,
  lesson: 1,
  title: 'Wǒ shì — I am',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Wǒ shì' (我是) is the bridge between you and the room. 'I am a student.' 'I am American.' Two syllables that let you place yourself anywhere in a Chinese conversation. But — and listen carefully — 'shì' has a strict job. It connects you to a NOUN, never to a feeling.",
    culturalNote: "In English we say 'I am tired' — same 'am' as 'I am a teacher'. Mandarin splits these. 'Shì' (是) is for nouns and identity ('I am a teacher'). For adjectives like tired or happy, you use 'hěn' (很) instead — 'Wǒ hěn lèi' (我很累), never 'Wǒ shì lèi'. Saying 'wǒ shì lèi' marks you instantly as a beginner. We'll fix that early.",
  },

  chunks: [
    {
      id: 'wo_shi_xuesheng',
      target: 'Wǒ shì xuésheng',
      native: 'I am a student',
      literal: '(我是学生) lit: I-am-student',
      emoji: '🎓',
      phonetic: 'WAW shr SHWEH-shung',
      audioRef: null,
    },
    {
      id: 'wo_shi_laoshi',
      target: 'Wǒ shì lǎoshī',
      native: 'I am a teacher',
      literal: '(我是老师) lit: I-am-old-master',
      emoji: '👩‍🏫',
      phonetic: 'WAW shr LAO-shr',
      audioRef: null,
    },
    {
      id: 'wo_shi_meiguo_ren',
      target: 'Wǒ shì Měiguó rén',
      native: 'I am American',
      literal: '(我是美国人) lit: I-am-beautiful-country-person',
      emoji: '🇺🇸',
      phonetic: 'WAW shr MAY-gwaw run',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Shì" + noun (NOT + adjective)',
    explanation: "'Wǒ shì ___' fills the blank with a NOUN — a job, a country-person, a role. Never an adjective. For 'I am tired/happy/cold', drop 'shì' and use 'hěn': 'Wǒ hěn lèi' (I'm tired), 'Wǒ hěn gāoxìng' (I'm happy). It feels backwards to English ears, but it's the bedrock of Mandarin grammar.",
    examples: [
      { target: 'Wǒ shì lǎoshī (我是老师)', native: 'I am a teacher — noun, so use "shì"' },
      { target: 'Wǒ hěn lèi (我很累)', native: 'I am tired — adjective, so DROP "shì" and use "hěn"' },
      { target: 'Wǒ shì Zhōngguó rén (我是中国人)', native: 'I am Chinese — noun ("Chinese-person")' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ shì xuésheng', right: 'I am a student' },
        { left: 'Wǒ shì lǎoshī', right: 'I am a teacher' },
        { left: 'Wǒ shì Měiguó rén', right: 'I am American' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (with or without tone marks) or characters',
      prompt: 'I am a student',
      correct: ['Wǒ shì xuésheng', 'Wo shi xuesheng', 'wo shi xuesheng', 'wǒ shì xuésheng', '我是学生'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct sentence',
      question: 'Which means "I am tired"?',
      options: [
        { text: 'Wǒ hěn lèi', correct: true },
        { text: 'Wǒ shì lèi', correct: false },
        { text: 'Wǒ lèi shì', correct: false },
      ],
      explanation: '"Lèi" (tired) is an adjective, so we use "hěn" — never "shì". "Wǒ shì lèi" is the classic English-speaker mistake.',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence — you\'re a teacher introducing yourself',
      sentence: 'Wǒ _____ lǎoshī',
      options: ['shì', 'hěn', 'jiào'],
      correct: 'shì',
      context: '"Lǎoshī" (teacher) is a noun — so "shì" is the bridge.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I am American',
      correct: ['Wǒ shì Měiguó rén', 'Wo shi Meiguo ren', 'wo shi meiguo ren', 'wǒ shì měiguó rén', '我是美国人'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am a teacher"',
      words: ['lǎoshī', 'Wǒ', 'shì'],
      correct: ['Wǒ', 'shì', 'lǎoshī'],
      translation: 'I am a teacher',
    },
  ],

  rwenDialogue: {
    intro: "Beijing, mid-morning. You've just walked into a tech firm's lobby for the first day of a 3-month contract. A Chinese colleague — early 30s, lanyard, friendly — spots you and walks over. They want to know who you are.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo! Nǐ shì...?',
        native: 'Hello! You are...?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ shì Měiguó rén, wǒ shì gōngchéngshī', native: "I'm American, I'm an engineer", correct: true, feedback: 'Two clean "shì" sentences — nationality, then role. They know exactly who you are.' },
          { target: 'Wǒ shì lèi', native: 'I am tired', correct: false, feedback: '"Lèi" is an adjective — drop "shì" and use "hěn": "Wǒ hěn lèi". Also, they asked who you ARE, not how you feel.' },
          { target: 'Wǒ jiào Měiguó', native: "I'm called America", correct: false, feedback: 'Funny — but "jiào" is for your name. For nationality, use "Wǒ shì... rén".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn hǎo! Wǒ shì chǎnpǐn jīnglǐ',
        native: 'Great! I am the product manager',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how they used 'shì' too — for their job, a noun. The pattern repeats. Once you trust 'shì + noun, hěn + adjective,' Mandarin sentences start building themselves.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I am a student',
        correct: ['Wǒ shì xuésheng', 'Wo shi xuesheng', 'wo shi xuesheng', 'wǒ shì xuésheng', '我是学生'],
      },
      {
        prompt: 'I am American',
        correct: ['Wǒ shì Měiguó rén', 'Wo shi Meiguo ren', 'wo shi meiguo ren', 'wǒ shì měiguó rén', '我是美国人'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Wǒ shì ___' three times today — out loud, even to yourself. 'Wǒ shì [your job]', 'Wǒ shì [your nationality] rén', 'Wǒ shì [a thing you are]'. Three reps cement the bridge.",
    rwenSignoff: "Identity in two syllables. Tomorrow we add a number: how old are you? Zàijiàn.",
  },

  phase8: {
    scenario: "First day at a Beijing tech firm. You've made it through reception, lanyard clipped on, jet-lagged but functioning. A colleague from the product team spots you in the kitchen by the hot-water dispenser — they're filling a thermos and waiting for the water to boil. They smile and start the introduction. This is the moment you place yourself: who you are, where you're from, what you do. All on 'shì'.",
    rwenRole: "Lǐ Wěi (李伟) — product manager, early 30s, friendly, has worked with foreigners before. Speaks slowly for you. Will gently course-correct if you mix up 'shì' and 'hěn'.",
    successCriteria: "User uses 'Wǒ shì' at least twice — once for nationality ('Wǒ shì ___ rén') and once for job/role ('Wǒ shì ___'). They correctly DON'T use 'shì' when describing how they feel (e.g. saying 'Wǒ hěn lèi' if jet-lagged, not 'Wǒ shì lèi'). Bonus: they ask 'Nǐ shì...?' back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
