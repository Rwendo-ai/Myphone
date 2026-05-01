import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Gōngzuò — Work',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Work talk. Today you describe your hours, your office, your meetings — the spine of the Chinese 9-to-5 conversation. The trick is one little structure: cóng…dào… (from…to…).",
    culturalNote: "Chinese workplace small talk leans practical: 'jǐ diǎn shàngbān?' (what time do you start?), 'jǐ diǎn xiàbān?' (what time do you finish?). The 9-to-6 day (jiǔ liù — yes, often six, not five) is the urban default at most tech firms. The phrase '996' (9am to 9pm, 6 days) became a national debate.",
  },

  chunks: [
    {
      id: 'qu_gongsi_morning',
      target: 'Wǒ qù gōngsī',
      native: 'I go to the office',
      literal: '(我去公司) lit: I-go-company',
      emoji: '🏢',
      phonetic: 'WAW chyoo GONG-sih',
      audioRef: null,
    },
    {
      id: 'cong_dao',
      target: 'Cóng jiǔ diǎn dào wǔ diǎn',
      native: 'From 9 to 5',
      literal: '(从九点到五点) lit: from-9-o\'clock-to-5-o\'clock',
      emoji: '🕘',
      phonetic: 'tsong jyo dyen DAO woo dyen',
      audioRef: null,
    },
    {
      id: 'you_huiyi',
      target: 'Wǒ yǒu huìyì',
      native: 'I have a meeting',
      literal: '(我有会议) lit: I-have-meeting',
      emoji: '💼',
      phonetic: 'WAW yo HWAY-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cóng X dào Y — from X to Y',
    explanation: "One of the most useful frames in Mandarin. Cóng (从) = from. Dào (到) = to. Works for time, place, anything with a span. 'Cóng jiā dào gōngsī' (from home to the office). 'Cóng zhōu yī dào zhōu wǔ' (from Monday to Friday). Pin both ends and the rest takes care of itself.",
    examples: [
      { target: 'Cóng Běijīng dào Shànghǎi', native: 'From Beijing to Shanghai' },
      { target: 'Cóng zǎoshang dào wǎnshang', native: 'From morning to evening' },
      { target: 'Cóng zhōu yī dào zhōu wǔ', native: 'From Monday to Friday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ qù gōngsī', right: 'I go to the office' },
        { left: 'Cóng jiǔ diǎn dào wǔ diǎn', right: 'From 9 to 5' },
        { left: 'Wǒ yǒu huìyì', right: 'I have a meeting' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the from-to structure',
      sentence: '_____ jiǔ diǎn dào wǔ diǎn',
      options: ['Cóng', 'Dào', 'Zài'],
      correct: 'Cóng',
      context: "The pair is cóng…dào… — from…to… You need cóng at the front.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'From 9 to 5',
      correct: ['Cóng jiǔ diǎn dào wǔ diǎn', 'Cong jiu dian dao wu dian', 'cong jiu dian dao wu dian', 'cóng jiǔ diǎn dào wǔ diǎn', '从九点到五点'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I have a meeting"',
      words: ['huìyì', 'yǒu', 'Wǒ'],
      correct: ['Wǒ', 'yǒu', 'huìyì'],
      translation: 'I have a meeting',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'From home to the office (use cóng…dào…, jiā for home, gōngsī for office)',
      correct: ['Cóng jiā dào gōngsī', 'Cong jia dao gongsi', 'cong jia dao gongsi', 'cóng jiā dào gōngsī', '从家到公司'],
    },
    {
      type: 'multiple_choice',
      instruction: '"I work from 9 to 6" — which is correct?',
      question: 'Pick the natural sentence',
      options: [
        { text: 'Wǒ cóng jiǔ diǎn dào liù diǎn shàngbān', correct: true },
        { text: 'Wǒ shàngbān jiǔ diǎn dào liù diǎn', correct: false },
        { text: 'Wǒ jiǔ liù diǎn shàngbān', correct: false },
      ],
      explanation: "Time block goes BEFORE the verb (shàngbān = work). Cóng jiǔ diǎn dào liù diǎn is the time block. Then the verb at the end.",
    },
  ],

  rwenDialogue: {
    intro: "Lunch break, office canteen. A new colleague sits across from you and starts with the universal Chinese workplace question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ jǐ diǎn shàngbān?',
        native: 'What time do you start work?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ cóng jiǔ diǎn dào wǔ diǎn shàngbān', native: 'I work from 9 to 5', correct: true, feedback: 'Cóng…dào… nailed. Time block before the verb. Very natural.' },
          { target: 'Wǒ shàngbān jiǔ wǔ', native: 'I work nine five', correct: false, feedback: 'Word order off, and you dropped the cóng…dào… frame. Native speakers will smile but ask you to repeat.' },
          { target: 'Wǒ yǒu jiǔ diǎn', native: 'I have nine o\'clock', correct: false, feedback: 'Yǒu means have — that doesn\'t fit here. You need cóng…dào… for the time span.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'A, hái hǎo. Xià wǔ wǒmen yǒu huìyì, jì de ma?',
        native: 'Ah, not bad. We have a meeting this afternoon — remember?',
      },
      {
        speaker: 'rwen',
        rwenLine: "From-to. Two pegs in time, the rest of the day stretched between them. Whole conversations turn on this frame.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'From 9 to 5',
        correct: ['Cóng jiǔ diǎn dào wǔ diǎn', 'Cong jiu dian dao wu dian', 'cong jiu dian dao wu dian', 'cóng jiǔ diǎn dào wǔ diǎn', '从九点到五点'],
      },
      {
        prompt: 'I have a meeting',
        correct: ['Wǒ yǒu huìyì', 'Wo you huiyi', 'wo you huiyi', 'wǒ yǒu huìyì', '我有会议'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your work day in one Mandarin sentence using cóng…dào… — even silently. Bonus: add 'wǒ yǒu huìyì' if you've got a meeting on the calendar.",
    rwenSignoff: "Two pegs, one day, all the language you need. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Wednesday afternoon at your Beijing tech firm. You bump into a colleague at the watercooler. They want to know your hours, what meetings you've got today, and whether you can join the team for lunch. A normal mid-week chat — except it's all in Mandarin.",
    rwenRole: "Wáng Xīn (王欣) — colleague from a different team, mid-30s, friendly. Will ask 'cóng jǐ diǎn dào jǐ diǎn?' (from when to when?) and 'jīntiān yǒu huìyì ma?' (got a meeting today?). Patient, encouraging.",
    successCriteria: "User uses cóng…dào… at least once to describe their hours, says 'wǒ yǒu huìyì' or 'wǒ méi yǒu huìyì' in response to the meeting question, and mentions 'wǒ qù gōngsī' or similar movement verb naturally during the chat.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
