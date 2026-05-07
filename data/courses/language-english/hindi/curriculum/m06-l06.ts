import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Days of the week — हफ़्ते के दिन',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "हफ़्ते के दिन: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday। English में हफ़्ता Monday से शुरू होता है।",
    culturalNote: "हिंदी में दिनों के नाम ग्रहों से जुड़े (सोमवार = चंद्र, मंगलवार = मंगल, बुधवार = बुध, etc.) — same English में: Monday = Moon-day, Saturday = Saturn-day। Roman मूल हैं। Indian context में रविवार off-day है — वही UK/US/Australia में Sunday off। शुक्रवार weekend की शुरुआत Gulf countries में, US में नहीं। Diaspora में Saturday family day सबसे पवित्र — Indians abroad temple, gurudwara, dinner-meet सब Saturday/Sunday पर। Days हमेशा Capital letter से लिखें: 'Monday' (M), 'monday' नहीं।",
  },

  chunks: [
    {
      id: 'weekdays',
      target: 'Monday, Tuesday, Wednesday, Thursday, Friday',
      native: 'सोमवार, मंगलवार, बुधवार, गुरुवार, शुक्रवार',
      literal: 'Somvaar, Mangalvaar, Budhvaar, Guruvaar, Shukravaar',
      emoji: '📅',
      phonetic: 'MUN-day, TYOOZ-day, WENZ-day, THURZ-day, FRY-day',
      audioRef: null,
    },
    {
      id: 'weekend',
      target: 'Saturday, Sunday',
      native: 'शनिवार, रविवार',
      literal: 'Shanivaar, Ravivaar',
      emoji: '🛌',
      phonetic: 'SAT-er-day, SUN-day',
      audioRef: null,
    },
    {
      id: 'today_tomorrow',
      target: 'Today, tomorrow, yesterday',
      native: 'आज, कल, कल (बीता हुआ)',
      literal: 'Aaj, kal (future), kal (past)',
      emoji: '⏳',
      phonetic: 'too-DAY, too-MOR-oh, YES-ter-day',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Week cycle — capitals + on',
    explanation: "Days हमेशा Capital से: Monday (M), monday नहीं। 'Pamkai दिन' दिखाने को 'on' use करें: 'on Monday', 'on Friday'। Plural से 'every': 'on Mondays' = हर सोमवार। 'Today' (आज), 'yesterday' (बीता कल), 'tomorrow' (आने वाला कल) — हिंदी में दोनों 'कल' पर context से समझ आता है, English में अलग शब्द।",
    examples: [
      { target: 'See you on Monday',        native: 'सोमवार को मिलेंगे' },
      { target: 'Today is Wednesday',       native: 'आज बुधवार है' },
      { target: 'Tomorrow is my birthday',  native: 'कल मेरा जन्मदिन है' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'दिन मिलाएँ',
      pairs: [
        { left: 'Monday',    right: 'सोमवार' },
        { left: 'Friday',    right: 'शुक्रवार' },
        { left: 'Sunday',    right: 'रविवार' },
        { left: 'Tomorrow',  right: 'कल (आने वाला)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आज बुधवार है',
      correct: ['Today is Wednesday', 'Today is Wednesday.', 'today is Wednesday'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही preposition चुनें',
      sentence: 'I have a meeting ____ Friday.',
      options: ['on', 'in', 'at'],
      correct: 'on',
      context: "दिनों के लिए 'on': 'on Monday', 'on Friday'।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — दोस्त को हर सोमवार call करना है',
      words: ["Let's", 'every', 'call', 'Monday.'],
      correct: ["Let's", 'call', 'every', 'Monday.'],
      translation: 'हर सोमवार कॉल करते हैं।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'कल रविवार है',
      correct: ['Tomorrow is Sunday', 'Tomorrow is Sunday.', 'tomorrow is Sunday'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Formal writing में सही चुनें',
      question: 'Which is correct in formal English writing?',
      options: [
        { text: 'I see her on monday.',       correct: false },
        { text: 'I see her on Monday.',       correct: true },
        { text: 'I see her in Monday.',       correct: false },
      ],
      explanation: "Days हमेशा Capital से ('Monday')। 'On' दिनों का preposition है।",
    },
  ],

  rwenDialogue: {
    intro: "आपकी एक UK की दोस्त है — हर हफ़्ते video call करना है। Day और time fix कर रहे।",
    lines: [
      { speaker: 'npc', target: "When should we call each other every week?", native: 'हर हफ़्ते कब call करें?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's call every Sunday at six P.M.",  native: 'हर रविवार शाम 6 बजे call करते हैं।', correct: true,  feedback: "बढ़िया — 'every Sunday' से routine साफ़, 'at six P.M.' से time।" },
          { target: "Sunday call.",                            native: 'रविवार call।',                                       correct: false, feedback: 'बहुत छोटा — "every" जोड़ें ताकि routine लगे, और time दें।' },
          { target: "I will call on Sundays sometime.",        native: 'किसी समय रविवार को call करूँगी।',                          correct: false, feedback: '"Sometime" से दुविधा — fixed time दें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Every Sunday' से routine — हर हफ़्ते tied-up समय।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Tomorrow (अंग्रेज़ी में)', correct: ['Tomorrow', 'tomorrow'] },
      { prompt: 'On Friday (अंग्रेज़ी में)', correct: ['On Friday', 'on Friday'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "बिना app देखे, सब seven days English में बोलें। 'Today is ___' और 'tomorrow is ___' तीन बार बोलें।",
    rwenSignoff: 'सात दिन — हर एक का अपना मक़सद। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You have a long-distance English-speaking friend (London) and you're scheduling a weekly video call. Pick a day of the week and a time that works, and confirm the routine clearly. Time-zone matters.",
    rwenRole: "Tom, 35, your friend who lives in London. Will suggest alternatives if your day clashes.",
    successCriteria: "User proposes a specific weekday using 'on' + Day, suggests a time, uses 'every' to indicate routine, and confirms the final agreement. Capitalises day correctly when typing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
