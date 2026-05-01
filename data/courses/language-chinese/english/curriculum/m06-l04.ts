import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: "Jǐ diǎn? — What Time Is It?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time in Mandarin is dead simple — number + diǎn (point). Seven o'clock = 'qī diǎn'. No 'o'clock', no preposition, just digit-and-marker. After French and English's quirky time vocabulary, this will feel like a vacation.",
    culturalNote: "China runs on a single time zone (Beijing time / 北京时间) despite spanning 5 geographic time zones — Beijing is the heartbeat. 'Diǎn' (点) literally means 'point' or 'dot' — like a clock-hand pointing. To distinguish AM/PM, Mandarin uses 'shàngwǔ' (上午 morning, before noon) and 'xiàwǔ' (下午 afternoon, after noon). 'Wǎnshang' (晚上) covers evening.",
  },

  chunks: [
    {
      id: 'ji_dian',
      target: 'Jǐ diǎn?',
      native: 'What time is it?',
      literal: '(几点?) — "how many points?" — diǎn marks the hour',
      emoji: '⏰',
      phonetic: 'JEE DYEN (jǐ dipping, diǎn dipping)',
      audioRef: null,
    },
    {
      id: 'qi_dian',
      target: 'Qī diǎn',
      native: "Seven o'clock (7:00)",
      literal: '(七点) — number + diǎn = the hour. Same pattern for any hour',
      emoji: '🕖',
      phonetic: 'CHEE DYEN (qī flat-high, diǎn dipping)',
      audioRef: null,
    },
    {
      id: 'shangwu_xiawu',
      target: 'Shàngwǔ / xiàwǔ',
      native: 'Morning (AM) / afternoon (PM)',
      literal: '(上午/下午) — shàng = upper/before, xià = lower/after, wǔ = noon',
      emoji: '🌅',
      phonetic: 'SHAHNG-WOO / SHYAH-WOO (both endings dip)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Telling the hour: number + diǎn',
    explanation: "To say any hour, just put the number before diǎn. 1:00 = yī diǎn. 9:00 = jiǔ diǎn. 12:00 = shí'èr diǎn. Add shàngwǔ/xiàwǔ before the time to specify AM/PM. Word order: time-period FIRST, then the hour.",
    examples: [
      { target: 'Sān diǎn (三点)', native: '3 o\'clock' },
      { target: 'Shàngwǔ jiǔ diǎn (上午九点)', native: '9 AM (lit: morning, 9 o\'clock)' },
      { target: 'Xiàwǔ sān diǎn (下午三点)', native: '3 PM (lit: afternoon, 3 o\'clock)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the time to its meaning',
      pairs: [
        { left: 'Jǐ diǎn?', right: 'What time is it?' },
        { left: 'Qī diǎn', right: "7 o'clock" },
        { left: 'shàngwǔ', right: 'morning (AM)' },
        { left: 'xiàwǔ', right: 'afternoon (PM)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters. Tones optional.',
      prompt: '5 o\'clock (just the hour)',
      correct: ['wǔ diǎn', 'wu dian', 'wǔdiǎn', 'wudian', 'Wǔ diǎn', '五点'],
    },
    {
      type: 'fill_blank',
      instruction: 'It\'s 9 in the morning. Pick the right time-period.',
      sentence: '_____ jiǔ diǎn',
      options: ['shàngwǔ', 'xiàwǔ', 'wǎnshang'],
      correct: 'shàngwǔ',
      context: 'Shàngwǔ (上午) is morning, before noon. Xiàwǔ (下午) is afternoon. Wǎnshang (晚上) is evening.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It\'s 3 PM"',
      words: ['sān', 'xiàwǔ', 'diǎn'],
      correct: ['xiàwǔ', 'sān', 'diǎn'],
      translation: '3 PM — afternoon, three o\'clock',
    },
    {
      type: 'translate',
      instruction: 'Ask "What time is it?" in Mandarin',
      prompt: 'What time is it?',
      correct: ['jǐ diǎn?', 'jǐ diǎn', 'ji dian', 'ji dian?', 'Jǐ diǎn?', '几点?', '几点'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does Mandarin not need an explicit "AM/PM" marker most of the time?',
      question: 'Pick the best answer',
      options: [
        { text: 'China uses 24-hour time officially, and shàngwǔ/xiàwǔ make AM/PM clear when needed', correct: true },
        { text: 'Mandarin has no concept of morning vs evening', correct: false },
        { text: 'Time zones don\'t exist in Chinese culture', correct: false },
      ],
      explanation: "Schedules and signs often use 24-hour time (so '15:00' is unambiguous). In speech, shàngwǔ (morning) / zhōngwǔ (noon) / xiàwǔ (afternoon) / wǎnshang (evening) handle the rest.",
    },
  ],

  rwenDialogue: {
    intro: "You're scheduling a video call with a Beijing colleague. He's pinning down the time — and Beijing time, of course.",
    lines: [
      {
        speaker: 'npc',
        target: 'Míngtiān jǐ diǎn?',
        native: 'What time tomorrow?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shàngwǔ jiǔ diǎn', native: '9 AM', correct: true, feedback: "Clean — shàngwǔ first, then the hour. He'll send the calendar invite." },
          { target: 'Jiǔ diǎn shàngwǔ', native: '(wrong order)', correct: false, feedback: "Mandarin puts the time-period BEFORE the hour. 'Shàngwǔ jiǔ diǎn' not 'jiǔ diǎn shàngwǔ'." },
          { target: 'Jiǔ', native: 'Nine', correct: false, feedback: "Just 'jiǔ' is the number nine, not a time. You need 'jiǔ diǎn' (nine o'clock) at minimum." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, shàngwǔ jiǔ diǎn — Běijīng shíjiān',
        native: 'OK, 9 AM — Beijing time',
      },
      {
        speaker: 'rwen',
        rwenLine: "You scheduled a call across time zones in Mandarin. The 'diǎn' system is yours now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'What time is it? (in Mandarin pinyin)',
        correct: ['jǐ diǎn?', 'jǐ diǎn', 'ji dian', 'ji dian?', '几点?', '几点'],
      },
      {
        prompt: '7 AM (in Mandarin — full phrase)',
        correct: ['shàngwǔ qī diǎn', 'shangwu qi dian', 'Shàngwǔ qī diǎn', '上午七点'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you check the clock today, say the hour out loud in Mandarin — even mentally. 'Bā diǎn'. 'Shíyī diǎn'. 'Xiàwǔ sān diǎn'. Time becomes a free Mandarin practice loop.",
    rwenSignoff: "Time waits for nobody — but Mandarin time is patient. Xiàwǔ jiàn — see you this afternoon.",
  },

  phase8: {
    scenario: "It's Tuesday evening, your time. You're scheduling a video call with a Beijing colleague for sometime this week. He needs to know the day, the hour, and whether it's AM or PM Beijing time. The conversation is in Mandarin — show him you can handle it.",
    rwenRole: "Colleague Liú (刘) — project manager in Beijing, 40s, busy. Speaks formal-but-friendly Mandarin. Will push back if your time is unclear: 'Shì shàngwǔ háishi xiàwǔ?' (morning or afternoon?).",
    successCriteria: "User proposes a specific hour using number + diǎn, AND specifies shàngwǔ or xiàwǔ. Confirms when Liú repeats the time back. Bonus: uses 'Běijīng shíjiān' (Beijing time) to clarify time zone.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
