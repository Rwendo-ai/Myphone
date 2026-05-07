import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Hosting in English — Atithi Devo Bhava',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "मेहमाननवाज़ी English में: Welcome (आइए), please sit down (बैठिए), help yourself (अपनी मर्ज़ी से लीजिए)। आपके संस्कार English में।",
    culturalNote: "'Atithi Devo Bhava' (अतिथि देवो भव) — मेहमान भगवान है। Indian संस्कार में हम मेहमान को serve करते हैं — चाय, खाना, दूसरी चाय, आख़िरी चाय 'अरे एक और कप!' UK/US में 'Help yourself' (अपनी मर्ज़ी से लीजिए) सम्मानजनक माना जाता — मेहमान को decision देना। शुरू में हमें यह distant लगता है — 'क्या मेज़बान काम नहीं करना चाहते?'। पर वो लोग respect दिखाते हैं adult को choose करने का। दोनों भाषाएँ बोलने वाले लोग दोनों संस्कारों को मिला सकते हैं: पहले serve करें (Indian way), फिर 'Help yourself for more' (English way)। Best of both।",
  },

  chunks: [
    {
      id: 'welcome',
      target: 'Welcome',
      native: 'स्वागत है / आइए',
      literal: 'Swagat hai / Aaiye',
      emoji: '🤗',
      phonetic: 'WEL-kum',
      audioRef: null,
    },
    {
      id: 'sit_down',
      target: 'Please, sit down',
      native: 'बैठिए',
      literal: 'Baithiye',
      emoji: '🪑',
      phonetic: 'PLEEZ-SIT-down',
      audioRef: null,
    },
    {
      id: 'help_yourself',
      target: 'Help yourself',
      native: 'अपनी मर्ज़ी से लीजिए',
      literal: 'Apni marzi se leejiye',
      emoji: '🍽️',
      phonetic: 'HELP-yor-SELF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Host phrases — opening, seating, serving',
    explanation: "Hosting के तीन parts: ENTER — 'Welcome' या 'Come in, come in'। SIT — 'Please sit down' या 'Take a seat'। EAT — 'Help yourself' (UK/US polite) या 'Please, eat' (Indian way)। 'Help yourself' का मतलब आदर — मेहमान का decision।",
    examples: [
      { target: 'Welcome! Please come in.',     native: 'स्वागत! अंदर आइए।' },
      { target: 'Please, sit down. Make yourself comfortable.', native: 'बैठिए। आराम से।' },
      { target: 'Help yourself — there\'s plenty.',              native: 'अपनी मर्ज़ी से लीजिए — बहुत है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मेहमाननवाज़ी के शब्द मिलाएँ',
      pairs: [
        { left: 'Welcome',         right: 'स्वागत' },
        { left: 'Please sit down', right: 'बैठिए' },
        { left: 'Help yourself',   right: 'अपनी मर्ज़ी से' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दरवाज़े पर मेहमान',
      prompt: 'स्वागत! अंदर आइए।',
      correct: [
        'Welcome! Please come in.',
        'Welcome! Come in.',
        'Welcome, come in.',
        'Welcome! Please, come in.',
        'welcome! please come in.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — मेहमान को सेल्फ़-सर्व करने को',
      prompt: 'अपनी मर्ज़ी से लीजिए — बहुत है।',
      correct: [
        "Help yourself — there's plenty.",
        "Help yourself, there's plenty.",
        "Please help yourself.",
        "Help yourselves — there's plenty.",
        "help yourself — there's plenty.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — मेहमान को बैठाना',
      sentence: 'Please, ____ down. Make yourself at home.',
      options: ['sit', 'go', 'come'],
      correct: 'sit',
      context: "'Sit down' = बैठिए।",
    },
    {
      type: 'build_sentence',
      instruction: 'मेहमाननवाज़ी का पहला वाक्य',
      words: ['in', 'come', 'Welcome', 'please'],
      correct: ['Welcome', 'please', 'come', 'in'],
      translation: 'स्वागत, अंदर आइए',
    },
    {
      type: 'build_sentence',
      instruction: 'सेल्फ़-सर्व',
      words: ['Please', 'help', 'yourself'],
      correct: ['Please', 'help', 'yourself'],
      translation: 'अपनी मर्ज़ी से लीजिए',
    },
  ],

  rwenDialogue: {
    intro: "UK से दोस्त आपके दिल्ली घर आया। दरवाज़ा खुला। English में स्वागत करें।",
    lines: [
      { speaker: 'npc', target: "Hi! Thanks for having me.", native: 'नमस्ते! बुलाने के लिए शुक्रिया।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Welcome! Please come in, sit down. Make yourself at home.", native: 'स्वागत! अंदर आइए, बैठिए। अपने घर जैसा।', correct: true,  feedback: 'बढ़िया — पूरा warm welcome।' },
          { target: "Sit.",                                                          native: 'बैठो।',                                              correct: false, feedback: "बहुत छोटा — कुछ शब्द जोड़ें।" },
          { target: "Yes hello.",                                                     native: 'हाँ नमस्ते।',                                        correct: false, feedback: "'Welcome' और सीटिंग नहीं — मेहमाननवाज़ी अधूरी।" },
        ],
      },
      { speaker: 'npc', target: "Thank you. This smells amazing — what is it?", native: 'धन्यवाद। बहुत अच्छी ख़ुश्बू — यह क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Biryani with raita. Help yourself — there's plenty.", native: 'बिरयानी रायते के साथ। अपनी मर्ज़ी से लीजिए — बहुत है।', correct: true,  feedback: 'बढ़िया — खाना बताया, सेल्फ़-सर्व कहा।' },
          { target: "I serve you.",                                              native: 'मैं serve करूँगा।',                                 correct: false, feedback: "Indian way में OK — पर UK दोस्त को 'help yourself' से comfortable लगेगा।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आपने Indian संस्कार UK English में पहुँचाए — 'Help yourself' से वो भी comfortable।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Welcome, please come in (अंग्रेज़ी में)', correct: ['Welcome, please come in', 'Welcome please come in', 'Welcome, please come in.', 'welcome, please come in'] },
      { prompt: 'Help yourself (अंग्रेज़ी में)', correct: ['Help yourself', 'Help yourself.', 'Please help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल्पना करें कोई English-speaking दोस्त घर आया। ज़ोर से बोलें: 'Welcome! Please come in. Sit down. Help yourself.' Short पर warm।",
    rwenSignoff: "कल — capstone।",
  },

  phase8: {
    scenario: "Your English-speaking colleague from a Mumbai conference has come to your home in Bangalore for dinner. They're standing at your front door. Welcome them in, get them seated, and serve biryani with raita — using 'help yourself' so they don't feel awkwardly waited on.",
    rwenRole: "James, 40, British, working in Singapore. Polite, slightly shy in unfamiliar settings. Will hesitate before serving himself unless told to.",
    successCriteria: "User uses 'Welcome', 'Please sit down' / 'Take a seat', and 'Help yourself' (or 'please, eat'). Bridges Indian hospitality with English-speaker norms — explicitly invites them to serve themselves.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
