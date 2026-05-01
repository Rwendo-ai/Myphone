import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-jiuming',
  module: 2,
  lesson: 9,
  title: 'Jiùmìng — Emergency phrases',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today's lesson is the one I hope you never need. Memorise it like a fire drill — once, deeply, then file it away. If you do need it, you'll be glad it lives in your bones already.",
    culturalNote: "China's universal emergency numbers: 110 (police, jǐngchá), 120 (ambulance, jiùhùchē), 119 (fire). 'Jiùmìng!' (救命) literally means 'save my life' — it's the universal panic shout that will turn any street toward you. These phrases are imperatives — direct commands, no softening. In emergencies, register goes out the window.",
  },

  chunks: [
    {
      id: 'jiuming',
      target: 'Jiùmìng!',
      native: 'Help! (life-threatening)',
      literal: '(救命) lit: save-life',
      emoji: '🚨',
      phonetic: 'JEW-ming',
      audioRef: null,
    },
    {
      id: 'jiao_jingcha',
      target: 'Jiào jǐngchá!',
      native: 'Call the police!',
      literal: '(叫警察) lit: call-police',
      emoji: '🚓',
      phonetic: 'jyow JING-cha',
      audioRef: null,
    },
    {
      id: 'wo_xuyao_yisheng',
      target: 'Wǒ xūyào yīshēng',
      native: 'I need a doctor',
      literal: '(我需要医生) lit: I-need-doctor',
      emoji: '🩺',
      phonetic: 'waw shoo-YOW yee-SHUNG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative urgency',
    explanation: "Emergency Mandarin drops politeness. No 'qǐng' (please), no 'ma' (question particle). Just verbs: Jiào! (Call!), Bāng! (Help!), Lái! (Come!). Loud, short, clear. People will respond.",
    examples: [
      { target: 'Jiào jiùhùchē!', native: 'Call an ambulance!' },
      { target: 'Bāng wǒ!', native: 'Help me!' },
      { target: 'Kuài lái!', native: 'Come quickly!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emergency phrase to its meaning',
      pairs: [
        { left: 'Jiùmìng!', right: 'Help! (life-threatening)' },
        { left: 'Jiào jǐngchá!', right: 'Call the police!' },
        { left: 'Wǒ xūyào yīshēng', right: 'I need a doctor' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the universal panic shout',
      prompt: 'Help! (life-threatening — save my life)',
      correct: ['Jiùmìng', 'Jiùmìng!', 'Jiuming', 'Jiuming!', 'jiuming', 'jiùmìng', '救命', '救命!'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone has collapsed at the next table. What do you shout?",
      question: 'Pick the right phrase',
      options: [
        { text: "'Jiào jiùhùchē!' — Call an ambulance!", correct: true },
        { text: "'Tài guì le!' — It's too expensive!", correct: false },
        { text: "'Bù hǎoyìsi' — Excuse me", correct: false },
      ],
      explanation: "'Jiùhùchē' (救护车) is ambulance. 'Jǐngchá' (警察) is police. Memorise both — they're the two emergency calls.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'Call the police!'",
      sentence: '_____ jǐngchá!',
      options: ['Jiào', 'Yào', 'Xiǎng'],
      correct: 'Jiào',
      context: "'Jiào' (叫) means 'call / summon'. In emergencies, drop the polite 'qǐng' — short and loud is right.",
    },
    {
      type: 'build_sentence',
      instruction: 'Tell a stranger "I need a doctor"',
      words: ['yīshēng', 'xūyào', 'Wǒ'],
      correct: ['Wǒ', 'xūyào', 'yīshēng'],
      translation: 'I need a doctor',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — call an ambulance',
      prompt: 'Call an ambulance!',
      correct: ['Jiào jiùhùchē', 'Jiào jiùhùchē!', 'Jiao jiuhuche', 'Jiao jiuhuche!', 'jiao jiuhuche', 'jiào jiùhùchē', '叫救护车', '叫救护车!'],
    },
  ],

  rwenDialogue: {
    intro: "A street in central Guangzhou. You've just rounded a corner and seen an older woman lose her balance, fall, and not get up. People are slowing but no one's moving. You're closest. Time matters.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Jiùmìng! Jiào jiùhùchē!', native: 'Help! Call an ambulance!', correct: true, feedback: 'Loud, clear, complete. Two phrases — one to gather attention, one to direct it. People will move now.' },
          { target: 'Bù hǎoyìsi', native: 'Excuse me', correct: false, feedback: "Far too polite for the situation. Someone is hurt. Drop the social register entirely." },
          { target: 'Duōshao qián?', native: 'How much?', correct: false, feedback: "Wrong lesson — keep your head. This is the moment for jiùmìng and jiào jiùhùchē." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ dǎ 120!',
        native: "I'm calling 120 (the ambulance number)!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tā xūyào yīshēng', native: 'She needs a doctor', correct: true, feedback: "Calm, clinical, useful — you've handed off and given the responder the key info." },
          { target: 'Wǒ mí lù le', native: "I'm lost", correct: false, feedback: "Wrong context completely — you're not lost, she is hurt. Stay focused on her need." },
          { target: 'Méi guānxi', native: "It's fine", correct: false, feedback: "It is decidedly NOT fine. Don't downplay an emergency." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You did it. In real moments people freeze — vocabulary disappears. But you just kept the words at hand. That's why we drilled it. Hope the next time it's a fire drill, not a fire.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Help! (save my life — universal shout)',
        correct: ['Jiùmìng', 'Jiùmìng!', 'Jiuming', 'Jiuming!', 'jiuming', 'jiùmìng', '救命', '救命!'],
      },
      {
        prompt: 'I need a doctor',
        correct: ['Wǒ xūyào yīshēng', 'Wo xuyao yisheng', 'wo xuyao yisheng', 'wǒ xūyào yīshēng', '我需要医生'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Read all three phrases out loud, three times, slowly. That's it. We don't repeat them daily — but you owe them this single deep imprint, in case the day ever comes when you can't think.",
    rwenSignoff: "Hope you never use these. Glad you have them. Zàijiàn.",
  },

  phase8: {
    scenario: "A busy Guangzhou street at lunchtime. An older woman at the bus stop has collapsed — she's conscious but holding her chest. People are slowing but no one is acting yet. You're closest. You need to (a) shout for help, (b) get someone to call 120 for an ambulance, and (c) tell the responder she needs a doctor — all in Mandarin, fast, no English fallback.",
    rwenRole: "A bystander — middle-aged, will respond if you give clear instructions but freezes without leadership. They have a phone and will call 120 if you tell them to.",
    successCriteria: "User uses 'jiùmìng!' to gather attention, gives the imperative 'jiào jiùhùchē!' (or 'jiào yīshēng'), and follows up with 'tā xūyào yīshēng' to communicate her need to the responder. No 'qǐng' or other politeness softeners — speed and clarity over manners.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
