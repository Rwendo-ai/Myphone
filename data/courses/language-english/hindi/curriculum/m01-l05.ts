import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — शुभ संध्या',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "शाम 5/6 बजे के बाद — सूरज ढलने लगा। अब greeting फिर बदलती है: 'Good evening'। और दिन के बारे में अब past tense में बात होती है।",
    culturalNote: "हिंदी में 'दिन कैसा रहा?' को आप casually पूछते हैं। अंग्रेज़ी में 'How was your day?' एक genuine सवाल हो सकता है — जवाब में 'It was good' या 'It was busy' काफ़ी है। लंबी कहानी की ज़रूरत नहीं — पर एक-दो शब्द ज़रूर बोलें, सिर्फ़ 'Good' से ज़्यादा।",
  },

  chunks: [
    {
      id: 'good_evening',
      target: 'Good evening',
      native: 'शुभ संध्या / नमस्कार (Shubh sandhya / Namaskar)',
      literal: undefined,
      emoji: '🌆',
      phonetic: 'good-EEV-ning',
      audioRef: null,
    },
    {
      id: 'how_was_your_day',
      target: 'How was your day?',
      native: 'दिन कैसा रहा? (Din kaisa raha?)',
      literal: 'How was your day? (past)',
      emoji: '🤔',
      phonetic: 'how-wuz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'it_was_good',
      target: 'It was good',
      native: 'अच्छा रहा (Accha raha)',
      literal: 'It was good (past)',
      emoji: '✨',
      phonetic: 'it-wuz-GOOD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense in greetings',
    explanation: "शाम को दिन ख़त्म हो चुका है — इसलिए past tense: 'How WAS your day?' (न कि 'How IS your day?')। जवाब भी past में: 'It WAS good'। यह छोटी सी बात अंग्रेज़ी में बहुत महत्वपूर्ण है — present tense बोलने पर अजीब लगता है।",
    examples: [
      { target: 'Good evening',      native: 'शुभ संध्या' },
      { target: 'How was your day?', native: 'दिन कैसा रहा?' },
      { target: 'It was good',       native: 'अच्छा रहा' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मिलाएँ',
      pairs: [
        { left: 'Good evening',      right: 'शुभ संध्या' },
        { left: 'How was your day?', right: 'दिन कैसा रहा?' },
        { left: 'It was good',       right: 'अच्छा रहा' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'शुभ संध्या',
      correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'अच्छा रहा',
      correct: ['It was good', 'it was good', 'It was good.', 'it was good.'],
    },
    {
      type: 'fill_blank',
      instruction: 'past tense सही करें',
      sentence: 'How ____ your day?',
      options: ['was', 'is', 'are'],
      correct: 'was',
      context: 'समय 7pm — शाम का खाना। दिन ख़त्म हो चुका है।',
    },
    {
      type: 'build_sentence',
      instruction: 'जवाब क्रम में लगाएँ',
      words: ['It', 'was', 'a', 'good', 'day'],
      correct: ['It', 'was', 'a', 'good', 'day'],
      translation: 'अच्छा दिन रहा',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'दिन कैसा रहा?',
      correct: ['How was your day?', 'how was your day?', 'How was your day', 'how was your day'],
    },
  ],

  rwenDialogue: {
    intro: 'शाम 7 बजे। आप American college campus की dining hall में हैं — आपकी roommate डिनर पर मिलती है।',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: 'शुभ संध्या! दिन कैसा रहा?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good evening. It was good, thanks.", native: 'शुभ संध्या। अच्छा रहा, धन्यवाद।', correct: true,  feedback: "बढ़िया — past tense सही, और जवाब short लेकिन warm।" },
          { target: 'Good morning.',                       native: 'सुप्रभात।',                            correct: false, feedback: "शाम हो चुकी है — अब 'Good evening' है।" },
          { target: "How's your day?",                     native: 'दिन कैसा जा रहा है? (वर्तमान)',           correct: false, feedback: "दिन ख़त्म हो चुका है — past tense में पूछिए: 'How WAS your day?'" },
        ],
      },
      { speaker: 'npc', target: "I'm glad. Let's eat.", native: 'अच्छा लगा। चलो खाते हैं।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! Past tense — 'was', 'It was good' — यह आपकी English को natural बनाता है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Good evening (अंग्रेज़ी में)', correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'] },
      { prompt: 'It was good (अंग्रेज़ी में)',  correct: ['It was good', 'it was good', 'It was good.', 'it was good.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज शाम घर वापस जाते हुए किसी से 'Good evening' बोलें। और कोई पूछे 'How was your day?' तो English में जवाब देने की कोशिश करें।",
    rwenSignoff: "शुभ संध्या। कल मिलते हैं।",
  },

  phase8: {
    scenario: "आप MIT Boston में Master's student हैं — पहला semester। शाम के 7 बजे dining hall में खाना ले रहे हैं और आपकी American roommate आकर बैठती है। दिन कैसा रहा, यह वो casually पूछेगी।",
    rwenRole: "Sarah — आपकी roommate, ~22, Texas से, friendly और curious। Indian culture के बारे में जानती है पर आपसे American casual English सुनने की उम्मीद रखती है।",
    successCriteria: "User opens with 'Good evening' (NOT 'Good afternoon' since 7pm है, NOT formal 'Namaste'), uses past tense 'It was good' / 'How was your day?' (NOT present tense 'How is your day' — दिन ख़त्म हो चुका है), और casual but warm tone रखता है।",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
