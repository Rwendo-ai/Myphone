import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-zai-nali',
  module: 2,
  lesson: 6,
  title: 'Zài nǎlǐ — Where is...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Where is the bathroom? Where is the metro? Where is my hotel? Today we crack the locator pattern — and it's the OPPOSITE of English word order. Mandarin puts the THING FIRST, the question last.",
    culturalNote: "English: 'Where IS the bathroom?' Mandarin: 'Bathroom IS-AT where?' (Cèsuǒ zài nǎlǐ?) The thing comes first. 'Zài' (在) means 'is at / is in / is located at' — it's the location verb. 'Nǎlǐ' (哪里) is 'where'. The pattern is: [thing] zài nǎlǐ?",
  },

  chunks: [
    {
      id: 'cesuo_zai_nali',
      target: 'Cèsuǒ zài nǎlǐ?',
      native: 'Where is the bathroom?',
      literal: '(厕所在哪里?) lit: bathroom-at-where',
      emoji: '🚻',
      phonetic: 'tsuh-SWAW dzye NA-lee',
      audioRef: null,
    },
    {
      id: 'ditie_zhan_zai_nali',
      target: 'Dìtiě zhàn zài nǎlǐ?',
      native: 'Where is the metro station?',
      literal: '(地铁站在哪里?) lit: metro-station-at-where',
      emoji: '🚇',
      phonetic: 'dee-TYEH JAHN dzye NA-lee',
      audioRef: null,
    },
    {
      id: 'zai_nali',
      target: 'Zài nàlǐ',
      native: 'Over there',
      literal: '(在那里) lit: at-that-place',
      emoji: '👉',
      phonetic: 'dzye NA-lee (different tone — falling)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Thing] zài nǎlǐ? — Where is [thing]?',
    explanation: "Reverse of English. Mandarin puts what you're looking for FIRST, then asks where. '[Thing] + zài (is-at) + nǎlǐ (where)'. To answer, swap 'nǎlǐ' for the location: 'Zài nàlǐ' (over there), 'Zài zhèlǐ' (right here).",
    examples: [
      { target: 'Cèsuǒ zài nǎlǐ?', native: 'Bathroom is-at where?' },
      { target: 'Wǒ de bāo zài nǎlǐ?', native: 'My bag is-at where?' },
      { target: 'Tā zài jiā', native: 'He is-at home' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Cèsuǒ zài nǎlǐ?', right: 'Where is the bathroom?' },
        { left: 'Dìtiě zhàn zài nǎlǐ?', right: 'Where is the metro station?' },
        { left: 'Zài nàlǐ', right: 'Over there' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask "Where is the metro station?"',
      words: ['nǎlǐ?', 'Dìtiě', 'zài', 'zhàn'],
      correct: ['Dìtiě', 'zhàn', 'zài', 'nǎlǐ?'],
      translation: 'Where is the metro station?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Where is the bathroom?',
      correct: ['Cèsuǒ zài nǎlǐ?', 'Cesuo zai nali?', 'cesuo zai nali', 'cèsuǒ zài nǎlǐ?', '厕所在哪里?', '厕所在哪里', 'Cesuo zai nali'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the question 'Where is my bag?'",
      sentence: 'Wǒ de bāo _____ nǎlǐ?',
      options: ['zài', 'ma', 'le'],
      correct: 'zài',
      context: "'Zài' (在) is the location verb — 'is at'. It always sits between the thing and the where.",
    },
    {
      type: 'multiple_choice',
      instruction: "Why doesn't Mandarin start questions with 'where'?",
      question: 'Word order rule',
      options: [
        { text: "Mandarin keeps the SUBJECT first — the thing you're asking about leads, the question word goes where the answer would slot in", correct: true },
        { text: "Mandarin doesn't have question words", correct: false },
        { text: "Because 'nǎlǐ' is too long to start a sentence", correct: false },
      ],
      explanation: "Mandarin keeps the answer-shape and the question-shape mirrored. Q: 'Cèsuǒ zài nǎlǐ?' / A: 'Cèsuǒ zài nàlǐ.' Same structure, just swap the question word for the answer.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — pointing-and-answering',
      prompt: 'Over there',
      correct: ['Zài nàlǐ', 'Zai nali', 'zai nali', 'zài nàlǐ', '在那里'],
    },
  ],

  rwenDialogue: {
    intro: "You're inside a vast Shanghai shopping mall — five floors, dozens of escalators, dim signage. After lunch, urgent biological reality. You stop a member of staff in a branded polo shirt.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎoyìsi, cèsuǒ zài nǎlǐ?', native: 'Excuse me, where is the bathroom?', correct: true, feedback: 'Perfect — soft opener, then thing-first locator question. Textbook Mandarin.' },
          { target: 'Nǎlǐ cèsuǒ?', native: 'Where bathroom?', correct: false, feedback: "Reversed word order — you put the question word first like English. Stick to: thing + zài + nǎlǐ." },
          { target: 'Wǒ xūyào cèsuǒ', native: 'I need bathroom', correct: false, feedback: "Grammatically OK but you're announcing your need rather than asking where it is. Locator question is more elegant." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Cèsuǒ zài èr lóu, zài nàlǐ',
        native: "The bathroom is on the 2nd floor, over there",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how 'zài nàlǐ' echoed back? She used the same structure. That's the rhythm — your question and her answer are mirrors of each other. Mandarin word order is your friend.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Where is the bathroom?',
        correct: ['Cèsuǒ zài nǎlǐ?', 'Cesuo zai nali?', 'cesuo zai nali', 'cèsuǒ zài nǎlǐ?', '厕所在哪里?', '厕所在哪里', 'Cesuo zai nali'],
      },
      {
        prompt: 'Where is the metro station?',
        correct: ['Dìtiě zhàn zài nǎlǐ?', 'Ditie zhan zai nali?', 'ditie zhan zai nali', 'dìtiě zhàn zài nǎlǐ?', '地铁站在哪里?', '地铁站在哪里', 'Ditie zhan zai nali'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three things in the room with you right now. Silently ask 'X zài nǎlǐ?' and answer 'Zài nàlǐ' while pointing. Train the word order until it stops feeling backwards.",
    rwenSignoff: "Thing first, question last. Always. Zàijiàn.",
  },

  phase8: {
    scenario: "Lost in a sprawling Shanghai mall, you've walked the same atrium twice trying to find the nearest metro entrance. A young man in a security uniform is standing by an escalator, looking bored. Your phone is at 4%. You need directions in Mandarin, fast and clear.",
    rwenRole: "Zhāng Wěi (张伟) — late 20s, mall security guard, polite but in a hurry. Speaks clear standard Mandarin, points a lot, will give a quick answer if you ask cleanly.",
    successCriteria: "User asks 'dìtiě zhàn zài nǎlǐ?' with correct word order (thing first, nǎlǐ last), understands a directional answer like 'zài nàlǐ' or 'zài èr lóu', and thanks him before walking off.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
