import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: "Nǐ zuò shénme gōngzuò? — What's your job?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Nǐ zuò shénme gōngzuò?' literally is 'You do what work?' — exactly that order. English speakers reach for 'What is your job?' and try to translate word-by-word. Mandarin doesn't put the question word at the start. It sits where the answer would go. Once you see this, dozens of Mandarin questions click open at once.",
    culturalNote: "In Chinese small talk, asking about work is one of the first three questions — alongside age and where you're from. It's not nosy; it's how people place each other on the social map. Answers tend to be specific: not just 'I work in tech' but 'Wǒ shì gōngchéngshī' (I'm an engineer) plus where: 'Wǒ zài Tencent gōngzuò' (I work at Tencent).",
  },

  chunks: [
    {
      id: 'ni_zuo_shenme_gongzuo',
      target: 'Nǐ zuò shénme gōngzuò?',
      native: "What's your job?",
      literal: '(你做什么工作?) lit: you-do-what-work',
      emoji: '💼',
      phonetic: 'nee DZWAW shun-muh GONG-dzwaw',
      audioRef: null,
    },
    {
      id: 'wo_shi_gongchengshi',
      target: 'Wǒ shì gōngchéngshī',
      native: "I'm an engineer",
      literal: '(我是工程师) lit: I-am-engineer',
      emoji: '👷',
      phonetic: 'WAW shr GONG-chung-shr',
      audioRef: null,
    },
    {
      id: 'wo_zai_gongzuo',
      target: 'Wǒ zài ___ gōngzuò',
      native: 'I work at ___',
      literal: '(我在___工作) lit: I-at-___-work',
      emoji: '🏢',
      phonetic: 'WAW dzigh ___ GONG-dzwaw',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question word stays where the answer goes',
    explanation: "In English, 'what' jumps to the front: 'What do you do?' In Mandarin, 'shénme' (what) sits exactly where the answer will sit. 'Nǐ zuò shénme gōngzuò?' = 'You do WHAT work?' — and the answer 'Wǒ zuò ___ gōngzuò' fills the same slot. Same shape. No re-ordering.",
    examples: [
      { target: 'Nǐ jiào shénme? (你叫什么?)', native: "You're called WHAT? — answer: 'Wǒ jiào Anna' (I'm called Anna)" },
      { target: 'Nǐ zuò shénme gōngzuò? (你做什么工作?)', native: 'You do WHAT work? — answer: "Wǒ zuò sheji gōngzuò" (I do design work)' },
      { target: 'Nǐ zài nǎlǐ gōngzuò? (你在哪里工作?)', native: 'You at WHERE work? — answer: "Wǒ zài Beijing gōngzuò" (I work in Beijing)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Nǐ zuò shénme gōngzuò?', right: "What's your job?" },
        { left: 'Wǒ shì gōngchéngshī', right: "I'm an engineer" },
        { left: 'Wǒ zài ___ gōngzuò', right: 'I work at ___' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "What's your job? (literally: you do what work?)",
      correct: ['Nǐ zuò shénme gōngzuò?', 'Ni zuo shenme gongzuo?', 'ni zuo shenme gongzuo', 'Nǐ zuò shénme gōngzuò', 'nǐ zuò shénme gōngzuò', '你做什么工作?', '你做什么工作'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the question — remember, "shénme" stays in the middle',
      words: ['shénme', 'Nǐ', 'gōngzuò?', 'zuò'],
      correct: ['Nǐ', 'zuò', 'shénme', 'gōngzuò?'],
      translation: "What's your job?",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — you work at Google',
      sentence: 'Wǒ _____ Google gōngzuò',
      options: ['zài', 'shì', 'zuò'],
      correct: 'zài',
      context: '"Zài" (at/in) is the place-locator. "Wǒ zài [place] gōngzuò" = "I work at [place]".',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm an engineer",
      correct: ['Wǒ shì gōngchéngshī', 'Wo shi gongchengshi', 'wo shi gongchengshi', 'wǒ shì gōngchéngshī', '我是工程师'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural-sounding question',
      question: 'You want to ask "What do you do?" — which is right?',
      options: [
        { text: 'Nǐ zuò shénme gōngzuò?', correct: true },
        { text: 'Shénme nǐ zuò gōngzuò?', correct: false },
        { text: 'Nǐ shì shénme gōngzuò?', correct: false },
      ],
      explanation: 'The question word "shénme" stays in the middle, exactly where the answer would sit. Don\'t front-load it like English. And we use "zuò" (do) with "gōngzuò" (work), not "shì".',
    },
  ],

  rwenDialogue: {
    intro: "Video call with a Chinese counterpart, mid-morning. You're 10 minutes into a kickoff call with a partner team in Shenzhen. The formal intros are done. Their tech lead leans toward the camera and asks the question that everyone wants answered before they trust you with code.",
    lines: [
      {
        speaker: 'npc',
        target: 'Suǒyǐ, nǐ zuò shénme gōngzuò?',
        native: 'So — what do you do?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ shì gōngchéngshī, wǒ zài Sydney gōngzuò', native: "I'm an engineer, I work in Sydney", correct: true, feedback: 'Role + place. Two short sentences cover everything they wanted to know. Clean.' },
          { target: 'Shénme wǒ zuò gōngzuò', native: 'What I do work', correct: false, feedback: 'You front-loaded "shénme" — that\'s English word order. Mandarin keeps "shénme" where the answer would sit.' },
          { target: 'Wǒ zài lǎoshī', native: 'I at teacher', correct: false, feedback: '"Zài" is for places, not jobs. For "I am a teacher", use "Wǒ shì lǎoshī".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo de! Wǒ shì chǎnpǐn jīnglǐ, wǒ zài Shēnzhèn gōngzuò',
        native: "Got it! I'm a product manager, I work in Shenzhen",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear the mirror? You said role + place. They said role + place. The structure is contagious — once you set the rhythm, the whole conversation follows it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "What's your job? (literally: you do what work?)",
        correct: ['Nǐ zuò shénme gōngzuò?', 'Ni zuo shenme gongzuo?', 'ni zuo shenme gongzuo', 'Nǐ zuò shénme gōngzuò', 'nǐ zuò shénme gōngzuò', '你做什么工作?', '你做什么工作'],
      },
      {
        prompt: "I work at [your company]",
        correct: ['Wǒ zài ___ gōngzuò', 'Wo zai ___ gongzuo', 'wǒ zài ___ gōngzuò', 'wo zai ___ gongzuo'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your job in Mandarin out loud, twice today. Two sentences: 'Wǒ shì [your role]' + 'Wǒ zài [your company/city] gōngzuò.' That's a complete professional intro.",
    rwenSignoff: "Role and place. Tomorrow we add family. Zàijiàn.",
  },

  phase8: {
    scenario: "Video call kickoff with a partner team in Shenzhen, 9:30am your time. Lights are good, coffee within reach, the formal pleasantries are done. Their tech lead — visible in a frame next to a wall of post-its — has just asked what you actually do. The next 60 seconds set whether they see you as a peer or a foreigner who needs hand-holding. This is your professional opener.",
    rwenRole: "Chén Xīn (陈鑫) — tech lead at the Shenzhen partner team, late 30s, no-nonsense but warm once you prove you've prepped. Speaks reasonably slowly on video for foreigners. She'll respond with her own role + city.",
    successCriteria: "User answers with TWO connected sentences: 'Wǒ shì [role]' AND 'Wǒ zài [company or city] gōngzuò'. Word order on the question is preserved if echoed back ('shénme' stays middle). Bonus: they ask 'Nǐ ne?' or 'Nǐ zuò shénme gōngzuò?' back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
