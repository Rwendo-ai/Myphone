import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — माँ और पिताजी',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 5 परिवार के बारे में है। शुरुआत parents से — 'Mother' = माँ, 'Father' = पिताजी। हिंदी में हम 'मम्मी-पापा', 'माताजी-पिताजी', 'अम्मी-अब्बू' अलग-अलग संदर्भों में बोलते हैं — अंग्रेज़ी इसे एक ही तरह से बोलती है।",
    culturalNote: "हिंदी में माता-पिता को बहुवचन में 'आप' कहकर आदर दिखाते हैं — 'पापा कब आएँगे?' अंग्रेज़ी में ऐसा कोई व्याकरणिक आदर नहीं — 'My father is coming' सबके लिए एक जैसा है। आदर मिलता है आवाज़ के लहजे और संदर्भ से, शब्दों से नहीं। अमेरिका या UK में बच्चे माँ-बाप का first name भी पुकारते हैं — हमारे लिए अजीब लगता है, उनके लिए normal।",
  },

  chunks: [
    {
      id: 'mother',
      target: 'Mother',
      native: 'माँ',
      literal: 'Maa',
      emoji: '👩🏽',
      phonetic: 'MUH-thuh',
      audioRef: null,
    },
    {
      id: 'father',
      target: 'Father',
      native: 'पिताजी',
      literal: 'Pitaji',
      emoji: '👨🏽',
      phonetic: 'FAH-thuh',
      audioRef: null,
    },
    {
      id: 'my_parents',
      target: 'My parents',
      native: 'मेरे माता-पिता',
      literal: 'Mere maata-pita',
      emoji: '👨‍👩‍👧',
      phonetic: 'mahy PAIR-ents',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family possessives — my / our',
    explanation: "अंग्रेज़ी में possessive ('my', 'our') शब्द से पहले आता है — 'my mother', 'our parents'। हिंदी में 'मेरी माँ', 'हमारे माता-पिता' — possessive पहले, पर linking different है। 'My' = एक व्यक्ति का; 'Our' = दो या ज़्यादा का (मैं + कोई और)।",
    examples: [
      { target: 'My mother',  native: 'मेरी माँ' },
      { target: 'My father',  native: 'मेरे पिताजी' },
      { target: 'Our parents', native: 'हमारे माता-पिता' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Mother',      right: 'माँ' },
        { left: 'Father',      right: 'पिताजी' },
        { left: 'My parents',  right: 'मेरे माता-पिता' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरी माँ',
      correct: ['My mother', 'my mother', 'My mother.', 'my mother.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — परिवार के बारे में बता रहे हैं',
      prompt: 'मेरे माता-पिता दिल्ली में रहते हैं।',
      correct: ['My parents live in Delhi.', 'My parents live in Delhi', 'my parents live in Delhi.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — पिताजी की तस्वीर दिखा रहे हैं',
      words: ['This', 'is', 'my', 'father.'],
      correct: ['This', 'is', 'my', 'father.'],
      translation: 'ये मेरे पिताजी हैं',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — दोनों parents की बात कर रहे हैं',
      sentence: '_____ parents are coming to dinner.',
      options: ['My', 'Our', 'I'],
      correct: 'Our',
      context: "जब आप अकेले नहीं — आप और आपकी पत्नी या भाई-बहन साथ बात कर रहे हैं — तो 'Our' लगता है। 'My' सिर्फ़ अकेले के लिए।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही वाक्य चुनें',
      question: 'आप अपने पिताजी को नए सहकर्मी से मिलवा रहे हैं। क्या सबसे natural है?',
      options: [
        { text: "This is my father, James.",     correct: true },
        { text: "Look, my father.",              correct: false },
        { text: "Father is mine, look.",         correct: false },
      ],
      explanation: "'This is my father, [name]' — यह introduce करने का proper तरीक़ा है। आदर शब्दों में नहीं, आवाज़ में आता है।",
    },
  ],

  rwenDialogue: {
    intro: 'आपका US-based colleague Diwali पर आपके घर आया है। माता-पिता drawing room में हैं। उनसे मिलवाएँ।',
    lines: [
      { speaker: 'npc', target: "Hi! It's nice to meet your family.", native: 'नमस्ते! आपके परिवार से मिलकर अच्छा लगा।' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'This is my mother, and this is my father.', native: 'ये मेरी माँ हैं, और ये मेरे पिताजी।', correct: true,  feedback: "बढ़िया — 'This is my mother...' English में introduce करने का सही तरीक़ा है।" },
          { target: 'My mother. My father.',                      native: 'मेरी माँ। मेरे पिताजी।',                  correct: false, feedback: "बहुत छोटा — 'This is...' जोड़ें ताकि introduction proper लगे।" },
          { target: 'Mother and father here.',                     native: 'माँ और पिताजी यहाँ।',                        correct: false, feedback: "'my' नहीं है — परिवार से जोड़ने के लिए 'my' ज़रूरी है।" },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you both.", native: 'दोनों से मिलकर बहुत अच्छा लगा।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने guest को परिवार English में मिलवा दिया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Mother (अंग्रेज़ी में)',          correct: ['Mother', 'mother'] },
      { prompt: 'My parents (अंग्रेज़ी में)',      correct: ['My parents', 'my parents', 'My parents.', 'my parents.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने माता-पिता की तस्वीर देखें — कल्पना करें कि English-speaking दोस्त को मिलवा रहे हैं। ज़ोर से बोलें: 'This is my mother. This is my father.' देखें कि बोलने में कैसा लगता है।",
    rwenSignoff: "कल मिलते हैं — भाई-बहन सीखेंगे (siblings)।",
  },

  phase8: {
    scenario: "An English-speaking visitor has come to your home for the first time. Your mother and father are in the living room. Introduce them warmly and naturally — and answer a simple question or two about your parents.",
    rwenRole: "Sarah, 32, your friend visiting from London. Warm, curious, asks small follow-ups like 'What does your father do?' or 'How long have your parents lived here?'",
    successCriteria: "User uses 'This is my mother / father' or 'My parents are...' clearly. Uses possessive 'my' before mother/father at least twice. Answers at least one follow-up question with a complete sentence.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
