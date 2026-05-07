import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Daily routine — सुबह की दिनचर्या',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "सुबह: 'I wake up at 6', 'I take a shower', 'I eat breakfast'। हिंदी में 'मैं 6 बजे उठता हूँ' — 'पर' नहीं। English में 'at 6' (पर/बजे) ज़रूरी।",
    culturalNote: "हिंदी में '6 बजे' पूरा time लगाता है — कोई 'पर' की ज़रूरत नहीं। English में 'at' लगाना पड़ता है: 'I wake up AT 6'। 'At' time के लिए, 'on' day के लिए, 'in' month के लिए। 'Wake up' phrasal verb है — 'up' छोड़ नहीं सकते। 'I wake' अधूरा। शुरू में Indian English speakers 'I wake at 6' बोलते — पर 'I wake up at 6' सही है।",
  },

  chunks: [
    {
      id: 'i_wake_up_at_6',
      target: 'I wake up at 6.',
      native: 'मैं 6 बजे उठता हूँ।',
      literal: 'Main 6 baje uthta hoon',
      emoji: '⏰',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_take_a_shower',
      target: 'I take a shower.',
      native: 'मैं नहाता हूँ।',
      literal: 'Main nahaata hoon',
      emoji: '🚿',
      phonetic: 'ay-TAYK-uh-SHOW-er',
      audioRef: null,
    },
    {
      id: 'i_eat_breakfast',
      target: 'I eat breakfast.',
      native: 'मैं नाश्ता करता हूँ।',
      literal: 'Main nashta karta hoon',
      emoji: '🍳',
      phonetic: 'ay-EET-BREK-fust',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time + verb — Morning routine',
    explanation: "Routine बताने को simple present: 'I wake up at 6', 'I take a shower', 'I eat breakfast'। Time के साथ 'at': 'at 6', 'at 7'। 'Wake up' phrasal verb — दोनों शब्द ज़रूरी।",
    examples: [
      { target: 'I wake up at 6.',     native: 'मैं 6 बजे उठता हूँ।' },
      { target: 'I take a shower.',    native: 'मैं नहाता हूँ।' },
      { target: 'I eat breakfast.',    native: 'मैं नाश्ता करता हूँ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I wake up',    right: 'मैं उठता हूँ' },
        { left: 'I take a shower', right: 'मैं नहाता हूँ' },
        { left: 'I eat breakfast', right: 'मैं नाश्ता करता हूँ' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'सही preposition भरें',
      sentence: 'I wake up _____ 7 every day.',
      options: ['at', 'on', 'in'],
      correct: 'at',
      context: "Specific time के लिए 'at'। 'On' दिन के लिए। 'In' बड़े parts के लिए।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं 6 बजे उठता हूँ।',
      correct: ['I wake up at 6.', 'I wake up at 6', 'I wake up at six.', 'I get up at 6.', 'i wake up at 6.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं नाश्ता करता हूँ।',
      correct: ['I eat breakfast.', 'I eat breakfast', 'I have breakfast.', 'I have breakfast', 'i eat breakfast.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "मैं नहाता हूँ"',
      words: ['shower.', 'a', 'take', 'I'],
      correct: ['I', 'take', 'a', 'shower.'],
      translation: 'मैं नहाता हूँ',
    },
    {
      type: 'build_sentence',
      instruction: 'सुबह की पूरी routine',
      words: ['breakfast.', 'I', 'wake', 'I', 'shower,', 'eat', 'a', 'I', 'up,', 'take'],
      correct: ['I', 'wake', 'up,', 'I', 'take', 'a', 'shower,', 'I', 'eat', 'breakfast.'],
      translation: 'मैं उठता हूँ, नहाता हूँ, नाश्ता करता हूँ।',
    },
  ],

  rwenDialogue: {
    intro: "London में flatmate के साथ रहते हो। वो आपकी morning routine पूछ रही है।",
    lines: [
      { speaker: 'npc', target: "What time do you usually get up?", native: 'आप आमतौर पर कब उठते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, take a shower, then eat breakfast around 6:30.", native: 'मैं 6 बजे उठता हूँ, नहाता हूँ, फिर 6:30 के आसपास नाश्ता करता हूँ।', correct: true, feedback: "बढ़िया — तीन चीज़ें simple present, और 'at 6' सही।" },
          { target: "Six. Shower. Eat.", native: 'छह। नहाता। खाना।', correct: false, feedback: "अधूरा — 'I wake up AT 6', 'I TAKE a shower', 'I EAT breakfast' पूरा करें।" },
        ],
      },
      { speaker: 'npc', target: "Wow, that's early! I wake up at 8.", native: 'वाह, जल्दी! मैं 8 बजे उठती हूँ।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'At 6' — सिर्फ़ '6' नहीं। छोटी details बड़ी होती हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I wake up at 6 (अंग्रेज़ी में)', correct: ['I wake up at 6', 'I wake up at 6.', 'I wake up at six.', 'i wake up at 6.'] },
      { prompt: 'I eat breakfast (अंग्रेज़ी में)', correct: ['I eat breakfast', 'I eat breakfast.', 'I have breakfast.', 'i eat breakfast.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल सुबह जब उठें, English में बोलें: 'I wake up at __'। फिर 'I take a shower' और 'I eat breakfast' जोड़ें।",
    rwenSignoff: "कल — work day।",
  },

  phase8: {
    scenario: "London में flat में रहते हैं। Flatmate बाथरूम-kitchen schedule jaanna चाहती है।",
    rwenRole: "Emma, 27, designer, your flatmate. Wants to know your timing for shower, kitchen.",
    successCriteria: "Student describes morning routine — wake up time (with 'at'), what they do (wake up, take a shower, eat breakfast), reaches arrangement with flatmate.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
