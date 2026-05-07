import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "नमस्ते! आज Module 1 का capstone है। 'Hello' से लेकर 'Goodbye' तक — एक complete पहली मुलाकात की बातचीत।",
    culturalNote: "हिंदी में पहली बातचीत में बहुत detail आ जाती है — कहाँ से, क्या काम, परिवार, सब। अंग्रेज़ी में पहली मुलाकात short होती है: greeting, नाम, कहाँ से, और farewell। बस इतना। बाकी details बाद की मुलाकातों में आते हैं — यह efficient और respectful है।",
  },

  chunks: [
    {
      id: 'review_hello_intro',
      target: 'Hello, my name is ...',
      native: 'नमस्ते, मेरा नाम ... है (Namaste, mera naam ... hai)',
      literal: 'Hello, my name is...',
      emoji: '👋',
      phonetic: 'heh-LOH-may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'review_where_from',
      target: "I'm from India",
      native: 'मैं भारत से हूँ (Main Bharat se hoon)',
      literal: 'I am from India',
      emoji: '🌍',
      phonetic: 'aym-FROM-IN-dee-uh',
      audioRef: null,
    },
    {
      id: 'review_goodbye_full',
      target: 'Goodbye, take care',
      native: 'अलविदा, अपना ख्याल रखना (Alvida, apna khyaal rakhna)',
      literal: 'Goodbye, take care',
      emoji: '🤝',
      phonetic: 'good-BAI-tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full greeting flow',
    explanation: "एक complete पहली मुलाकात के तीन हिस्से: (1) Greeting — 'Hello' या 'Good morning'। (2) Introduction — 'My name is ...' और 'I'm from ...'। (3) Farewell — 'Goodbye' और 'Take care'। जब आप यह तीनों step बिना सोचे कर पाएँ, तो आपकी English conversation की शुरुआत हो गई।",
    examples: [
      { target: "Hello, my name is Aman. I'm from Delhi.", native: 'नमस्ते, मेरा नाम अमन है। मैं दिल्ली से हूँ।' },
      { target: "How are you? I'm fine, thanks.",            native: 'आप कैसे हैं? मैं ठीक हूँ, धन्यवाद।' },
      { target: 'Nice to meet you. Goodbye!',                native: 'आपसे मिलकर अच्छा लगा। अलविदा!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'बातचीत के हिस्सों को मिलाएँ',
      pairs: [
        { left: 'Hello, how are you?', right: "I'm fine, thanks" },
        { left: "What's your name?",   right: 'My name is Aman' },
        { left: 'Goodbye!',            right: 'See you tomorrow' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — पूरा परिचय',
      prompt: 'नमस्ते, मेरा नाम अमन है। मैं दिल्ली से हूँ।',
      correct: [
        "Hello, my name is Aman. I'm from Delhi.",
        "hello, my name is Aman. I'm from Delhi.",
        "Hello, my name is Aman. I'm from Delhi",
        "Hello my name is Aman. I'm from Delhi.",
      ],
    },
    {
      type: 'translate',
      instruction: '"How are you?" का जवाब अंग्रेज़ी में',
      prompt: 'मैं ठीक हूँ, धन्यवाद',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine, thank you", "i'm fine thanks"],
    },
    {
      type: 'build_sentence',
      instruction: 'पूरी farewell को क्रम में लगाएँ',
      words: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      correct: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      translation: 'अलविदा, कल मिलते हैं, अपना ख्याल रखना',
    },
    {
      type: 'fill_blank',
      instruction: 'पहली मुलाकात पूरी करें',
      sentence: "Hello, my ____ is Priya.",
      options: ['name', 'home', 'day'],
      correct: 'name',
      context: 'आप "What\'s your name?" का जवाब दे रहे हैं।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'अलविदा, अपना ख्याल रखना',
      correct: ['Goodbye, take care', 'goodbye, take care', 'Goodbye take care', 'Goodbye, take care.'],
    },
  ],

  rwenDialogue: {
    intro: 'New York में airport के lounge में आप एक British traveller से बात कर रहे हैं — flight में 2 घंटे की देरी है। पूरी पहली मुलाकात — English में।',
    lines: [
      { speaker: 'npc', target: "Hello! How are you?", native: 'नमस्ते! आप कैसे हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm fine, thanks. My name is Aman. What's your name?",  native: 'मैं ठीक हूँ, धन्यवाद। मेरा नाम अमन है। आपका नाम क्या है?', correct: true,  feedback: "बहुत बढ़िया — आपने जवाब दिया, नाम बताया, और सवाल वापस पूछा। यह perfect first-meeting flow है।" },
          { target: 'Hi.',                                                     native: 'हाय।',                                                                  correct: false, feedback: "बहुत छोटा है — पहली मुलाकात में नाम और एक return-question भी बोलिए।" },
          { target: 'Where are you from?',                                     native: 'आप कहाँ से हैं?',                                                       correct: false, feedback: "उन्होंने पहले 'How are you?' पूछा — पहले उसका जवाब, फिर नाम और origin।" },
        ],
      },
      { speaker: 'npc', target: "I'm Sarah, from London. Nice to meet you, Aman. Goodbye!", native: 'मैं Sarah हूँ, London से। आपसे मिलकर अच्छा लगा, अमन। अलविदा!' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! Module 1 पूरा हुआ — आप पहली English बातचीत बिना डरे कर सकते हैं। अपना ख्याल रखना।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, पूरा परिचय याद से लिखें।',
    prompts: [
      { prompt: "Hello, my name is Aman. I'm from Delhi. (अंग्रेज़ी में)", correct: [
        "Hello, my name is Aman. I'm from Delhi.",
        "Hello, my name is Aman. I'm from Delhi",
        "Hello my name is Aman. I'm from Delhi.",
      ] },
      { prompt: "Nice to meet you. Goodbye! (अंग्रेज़ी में)", correct: [
        'Nice to meet you. Goodbye!',
        'Nice to meet you. Goodbye',
        'Nice to meet you. Goodbye.',
        'nice to meet you. goodbye!',
      ] },
    ],
  },

  mission: {
    title: 'आज का काम — पूरी बातचीत',
    task: "आज किसी से English में पहली पूरी मुलाकात का अभ्यास करें: 'Hello' से शुरू, नाम और कहाँ से बताएँ, फिर 'Take care' से अलविदा। 30 सेकंड में पूरा।",
    rwenSignoff: "Module 1 पूरा हुआ — आपने यात्रा शुरू की है। Module 2 में मिलते हैं।",
  },

  phase8: {
    scenario: "JFK airport, New York — आपकी connecting flight में 2 घंटे की देरी है, और आप lounge में बैठे coffee पी रहे हैं। बगल वाली seat पर एक British traveller बैठती है, मुस्कुराती है, और casual conversation शुरू करती है। आपको Module 1 के सारे elements use करने हैं: greeting, names, origin, और warm farewell।",
    rwenRole: "Emma — एक Australian-British dual citizen, ~30, Sydney जा रही है via Singapore। Friendly, curious, well-travelled। India पहले visit कर चुकी है, इसलिए comfortable है पर पूरी बातचीत English में होगी।",
    successCriteria: "User runs the full flow naturally: opens with proper greeting (Hello / Good afternoon depending on time), exchanges names ('My name is...' और 'What's your name?'), shares origin ('I'm from India / [city]'), asks back ('Where are you from?'), और closes warmly with 'Goodbye' और 'Take care'। सारे Module 1 chunks naturally use हो रहे हों — कोई step skip न हो।",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
