import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — नमस्कार (दोपहर)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "12 बज गए — अब 'Good morning' काम नहीं करेगा। दोपहर में अंग्रेज़ी की greeting बदलकर 'Good afternoon' हो जाती है।",
    culturalNote: "हिंदी में दिन भर 'नमस्ते' चलता है — कोई time-of-day नहीं। अंग्रेज़ी में सख़्ती से तीन हिस्से हैं: morning (12 बजे तक), afternoon (12 से 5/6 बजे), evening (शाम)। ग़लत वक़्त पर 'Good morning' बोलना अजीब लगता है — जैसे कि आपने घड़ी ही नहीं देखी।",
  },

  chunks: [
    {
      id: 'good_afternoon',
      target: 'Good afternoon',
      native: 'नमस्कार / शुभ दोपहर (Namaskar / Shubh dopahar)',
      literal: undefined,
      emoji: '☀️',
      phonetic: 'good-af-tuh-NOON',
      audioRef: null,
    },
    {
      id: 'hows_your_day',
      target: "How's your day?",
      native: 'दिन कैसा जा रहा है? (Din kaisa ja raha hai?)',
      literal: 'How is your day?',
      emoji: '🙂',
      phonetic: 'howz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'going_well',
      target: 'Going well',
      native: 'अच्छा जा रहा है (Accha ja raha hai)',
      literal: 'Going well',
      emoji: '👍',
      phonetic: 'GO-ing-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day shifts',
    explanation: "'Good morning' खत्म होती है दोपहर 12 बजे। फिर 'Good afternoon' शुरू — 5/6 बजे शाम तक। 'How's your day?' दोपहर में natural है — सुबह में लोग कहते हैं 'How are you?', दोपहर में 'How's your day?' क्योंकि दिन शुरू हो चुका है। जवाब: 'Going well' — short और positive।",
    examples: [
      { target: 'Good afternoon',  native: 'नमस्कार / शुभ दोपहर' },
      { target: "How's your day?", native: 'दिन कैसा जा रहा है?' },
      { target: "It's going well", native: 'अच्छा जा रहा है' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मिलाएँ',
      pairs: [
        { left: 'Good afternoon',  right: 'नमस्कार / शुभ दोपहर' },
        { left: "How's your day?", right: 'दिन कैसा जा रहा है?' },
        { left: 'Going well',      right: 'अच्छा जा रहा है' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'नमस्कार (दोपहर)',
      correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'दिन कैसा जा रहा है?',
      correct: ["How's your day?", "how's your day?", "How is your day?", "how is your day?"],
    },
    {
      type: 'fill_blank',
      instruction: 'सही greeting चुनें — समय 2pm है',
      sentence: 'Good ____, how are you?',
      options: ['morning', 'afternoon', 'evening'],
      correct: 'afternoon',
      context: 'आप lunch के बाद client से video call पर मिल रहे हैं।',
    },
    {
      type: 'build_sentence',
      instruction: 'जवाब को क्रम में लगाएँ',
      words: ['My', 'day', 'is', 'going', 'well'],
      correct: ['My', 'day', 'is', 'going', 'well'],
      translation: 'मेरा दिन अच्छा जा रहा है',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "1pm बज रहा है। आप दोस्त से मिले। क्या कहेंगे?",
      options: [
        { text: 'Good afternoon!', correct: true },
        { text: 'Good morning!',   correct: false },
        { text: 'Good night!',     correct: false },
      ],
      explanation: "12 बजे के बाद से 5/6pm तक 'Good afternoon' इस्तेमाल होता है।",
    },
  ],

  rwenDialogue: {
    intro: 'दोपहर 1:30। London के British client के साथ आपकी पहली Zoom call है — IT support team से।',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: 'नमस्कार! दिन कैसा जा रहा है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good afternoon. It's going well, thanks.", native: 'नमस्कार। अच्छा जा रहा है, धन्यवाद।', correct: true,  feedback: "सही — आपने सही greeting दी और short professional जवाब।" },
          { target: 'Good morning.',                              native: 'सुप्रभात।',                              correct: false, feedback: "12 बज चुके हैं — अब 'Good afternoon' सही है।" },
          { target: 'Bye!',                                       native: 'बाय!',                                    correct: false, feedback: "यह अलविदा है — call अभी शुरू हुई है।" },
        ],
      },
      { speaker: 'npc', target: "Glad to hear that. Shall we begin?", native: 'अच्छा लगा। शुरू करें?' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आपने समय के हिसाब से greeting बदली — यह छोटी बात है पर professional लगती है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: "Good afternoon (अंग्रेज़ी में)", correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'] },
      { prompt: "Going well (अंग्रेज़ी में)",     correct: ['Going well', 'going well', "It's going well", "it's going well"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज 12 बजे के बाद किसी को 'Good afternoon' बोलें — दुकानदार, security guard, कोई भी।",
    rwenSignoff: "शुभ दोपहर। बाद में मिलते हैं।",
  },

  phase8: {
    scenario: "दोपहर 1:30 बजे है। आप Pune की एक IT firm में हैं और अपने British client से पहली बार video call पर मिल रहे हैं — एक KT (knowledge transfer) session। उसने अभी lunch खाया है, आपका दोपहर शुरू हो चुका है।",
    rwenRole: "James — UK-based product manager, ~45, London में रहता है, polite-but-direct British style। India team के साथ daily काम करता है, समझता है कि Indian English थोड़ी अलग है, पर time-of-day greetings पर ध्यान देता है।",
    successCriteria: "User opens with 'Good afternoon' (NOT 'Good morning' since UK में भी दोपहर हो चुकी है, NOT 'Hello sir' over-formal), uses 'How's your day?' or responds with 'Going well' / 'It's going well' if asked, और British client के साथ professional-but-warm register रखता है।",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
