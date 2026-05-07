import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need" — चाहना और ज़रूरत',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'मुझे चाहिए' = 'I want', पर restaurant या service में 'I want' rough लगता। बेहतर: 'I'd like' (मैं lena chahunga)। 'I need' तब जब ज़रूरत हो।",
    culturalNote: "हिंदी 'मुझे चाहिए' सब जगह चलता — घर, ऑफिस, restaurant। English में politeness ladder है: I want = direct (घर पर OK)। I need = urgent। I'd like = polite (restaurant, shop)। Cafe में 'I want coffee' सुनकर barista को अजीब लगेगा — 'I'd like a coffee' सही है। Indian English में 'I want' overused है — Module 8 का goal: 'I'd like' को natural बनाना।",
  },

  chunks: [
    {
      id: 'i_want_coffee',
      target: 'I want coffee.',
      native: 'मुझे कॉफ़ी चाहिए।',
      literal: 'Mujhe coffee chahiye',
      emoji: '☕',
      phonetic: 'ay-WONT-KAW-fee',
      audioRef: null,
    },
    {
      id: 'i_need_a_break',
      target: 'I need a break.',
      native: 'मुझे break चाहिए।',
      literal: 'Mujhe break chahiye',
      emoji: '😮‍💨',
      phonetic: 'ay-NEED-uh-BRAYK',
      audioRef: null,
    },
    {
      id: 'id_like_tea',
      target: "I'd like tea, please.",
      native: 'मुझे चाय चाहिए, please।',
      literal: 'I would like tea, please',
      emoji: '🍵',
      phonetic: 'ayd-LAYK-TEE-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Want / Need / Would like — Politeness ladder',
    explanation: "WANT = सादा (घर, दोस्तों के साथ OK)। NEED = ज़रूरत (urgency दिखाता)। WOULD LIKE ('I'd like') = polite (cafe, shop, restaurant में सबसे अच्छा)। Service context में हमेशा 'I'd like' या 'Could I have'।",
    examples: [
      { target: 'I want coffee.',         native: 'मुझे कॉफ़ी चाहिए।' },
      { target: 'I need a break.',        native: 'मुझे break चाहिए।' },
      { target: "I'd like tea, please.",  native: 'मुझे चाय चाहिए, please।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I want',    right: 'चाहिए (सादा)' },
        { left: 'I need',    right: 'ज़रूरत है' },
        { left: "I'd like",  right: 'चाहिए (polite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "London cafe में सही चुनें",
      sentence: "_____ a coffee, please.",
      options: ["I'd like", 'I want', 'I need'],
      correct: "I'd like",
      context: "Cafe में 'I'd like' सबसे polite।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त को बोल रहे',
      prompt: 'मुझे कॉफ़ी चाहिए।',
      correct: ['I want coffee.', 'I want coffee', 'i want coffee.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — बहुत महीने से बिना break काम',
      prompt: 'मुझे break चाहिए।',
      correct: ['I need a break.', 'I need a break', 'i need a break.', 'I need to rest.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Polite वाक्य: "मुझे चाय चाहिए"',
      words: ['please.', 'tea,', "I'd", 'like'],
      correct: ["I'd", 'like', 'tea,', 'please.'],
      translation: 'मुझे चाय चाहिए, please',
    },
    {
      type: 'multiple_choice',
      instruction: 'Office में बहुत प्यासे हैं, manager ने पूछा कैसा हूँ',
      question: 'Choose the right phrase:',
      options: [
        { text: 'I need some water.', correct: true },
        { text: 'I want some water.', correct: false },
        { text: 'I have some water.', correct: false },
      ],
      explanation: "'Need' urgency दिखाता — सच में प्यास लगी है। 'Want' सादा preference।",
    },
  ],

  rwenDialogue: {
    intro: "London के Soho cafe में हैं। Breakfast order करना है।",
    lines: [
      { speaker: 'npc', target: "Good morning! What can I get you?", native: 'सुप्रभात! क्या लेंगे?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a coffee and a croissant, please.", native: 'मुझे एक coffee और croissant चाहिए, please।', correct: true, feedback: "बढ़िया — 'I'd like' polite + 'please' = perfect cafe English।" },
          { target: "I want coffee. I want croissant.", native: 'मुझे coffee चाहिए। मुझे croissant चाहिए।', correct: false, feedback: "Cafe में rough — 'I'd like' use करें।" },
          { target: "I need coffee now.", native: 'मुझे abhi coffee चाहिए।', correct: false, feedback: "'Need' urgency — cafe में normal नहीं। 'I'd like' use करें।" },
        ],
      },
      { speaker: 'npc', target: "Of course. Anything else?", native: 'ज़रूर। और कुछ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "No, that's all, thanks.", native: 'नहीं, बस इतना ही, धन्यवाद।', correct: true, feedback: "अच्छा — order politely ख़त्म।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I'd like' = service में, 'I want' = घर में, 'I need' = urgency।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I want coffee (अंग्रेज़ी में)', correct: ['I want coffee', 'I want coffee.', 'i want coffee.'] },
      { prompt: "I'd like tea, please (अंग्रेज़ी में)", correct: ["I'd like tea, please", "I'd like tea, please.", "I would like tea, please.", "i'd like tea, please."] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "London cafe की कल्पना करें। तीन चीज़ें order करें: 'I'd like a coffee', 'I'd like a sandwich', 'I'd like some water'। हर बार 'please' end पर।",
    rwenSignoff: "कल — सुबह की दिनचर्या।",
  },

  phase8: {
    scenario: "Morning at a London cafe. Order breakfast politely — 'I'd like', 'please', 'thank you'.",
    rwenRole: "Mark, 24, barista at a Shoreditch cafe. Friendly, encourages clear orders.",
    successCriteria: "Student uses 'I'd like' at least three times for orders, distinguishes 'I'd like' (politeness) from 'I need' (urgency), and finishes politely ('thanks').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
