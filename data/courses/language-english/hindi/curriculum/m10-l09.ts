import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Sharing Hindi proverbs in English — मुहावरे और कहावतें',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "हिंदी मुहावरे और कहावतें — दादी की दौलत। 'जो होता है अच्छे के लिए होता है', 'अंत भला तो सब भला'। English में पहुँचाएँ — हिंदी नाम बचाएँ, फिर translate, फिर meaning।",
    culturalNote: "हिंदी मुहावरे (mahavare) सेकंड में पीढ़ी की समझ देते — 'अंगूर खट्टे हैं' (Aesop की fox से जुड़ा), 'दूध का जला छाछ भी फूँक-फूँक के पीता' (एक बार जला तो सावधान)। Bollywood में, कहावतें मुहूर्त बदल देती हैं — एक dialogue पूरी कहानी का सार। English-speaking audience को share करते वक़्त: हिंदी में बोलें, फिर literal English, फिर meaning। यह Indian wisdom global करने का तरीक़ा।",
  },

  chunks: [
    {
      id: 'jo_hota_hai',
      target: "Jo hota hai achhe ke liye hota hai — Whatever happens, happens for the good",
      native: 'जो होता है अच्छे के लिए होता है — Whatever happens, happens for the good',
      literal: 'optimism / acceptance — what happens has purpose',
      emoji: '🌅',
      phonetic: 'JOH HO-tah hai ACH-chhay kay LI-yay',
      audioRef: null,
    },
    {
      id: 'ant_bhala',
      target: "Ant bhala to sab bhala — All's well that ends well",
      native: 'अंत भला तो सब भला — All\'s well that ends well',
      literal: 'happy ending makes the journey worthwhile',
      emoji: '🎯',
      phonetic: 'ANT bha-LAH toh SUB bha-LAH',
      audioRef: null,
    },
    {
      id: 'ek_haath_se',
      target: 'Ek haath se taali nahin bajti — One hand cannot clap (it takes two)',
      native: 'एक हाथ से ताली नहीं बजती — One hand cannot clap',
      literal: 'cooperation is needed — both parties contribute',
      emoji: '🤝',
      phonetic: 'EK haath say TAA-lee NAH-hin BAJ-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Proverb-sharing structure: name + literal + meaning',
    explanation: "Pattern: (1) 'In Hindi we say ___' (हिंदी नाम)। (2) 'It literally means ___' (सीधा अर्थ)। (3) 'It teaches us / It's used when ___' (मतलब)। तीन steps में सब मिलता।",
    examples: [
      { target: "In Hindi we say 'Jo hota hai achhe ke liye hota hai'. It literally means 'whatever happens, happens for the good'. It teaches us to accept what we can't control.",      native: 'हिंदी में कहते "जो होता है अच्छे के लिए होता है"। मतलब हम जो control नहीं कर सकते उसे accept करना।' },
      { target: "We have a saying: 'Ant bhala to sab bhala' — all's well that ends well. It's a reminder to stay patient through difficulty.",                                  native: '"अंत भला तो सब भला" — मुश्किल में धीरज रखने की याद।' },
      { target: "There's a Hindi proverb: 'Ek haath se taali nahin bajti' — one hand cannot clap. It means we need each other.",                                       native: '"एक हाथ से ताली नहीं बजती" — हम एक-दूसरे के बिना नहीं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मुहावरा और मतलब मिलाएँ',
      pairs: [
        { left: 'Jo hota hai achhe ke liye hota hai',  right: 'optimism / acceptance' },
        { left: 'Ant bhala to sab bhala',         right: 'all\'s well that ends well' },
        { left: 'Ek haath se taali nahin bajti',         right: 'cooperation needed' },
      ],
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में लिखें — मुहावरा + literal",
      prompt: "हिंदी में कहते 'जो होता है अच्छे के लिए होता है'। मतलब 'whatever happens, happens for the good'।",
      correct: ["In Hindi we say 'Jo hota hai achhe ke liye hota hai'. It literally means 'whatever happens, happens for the good'.", "In Hindi we say 'Jo hota hai achhe ke liye hota hai'. It literally means 'what happens, happens for the good'.", "In Hindi we say 'Jo hota hai achhe ke liye hota hai' — it literally means 'whatever happens, happens for the good'.", "in hindi we say 'jo hota hai achhe ke liye hota hai'. it literally means 'whatever happens, happens for the good'."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में — मुश्किल में धीरज',
      prompt: 'मुश्किल में धीरज रखने की याद दिलाता।',
      correct: ["It's a reminder to stay patient through difficulty.", "It's a reminder to be patient through hard times.", 'It reminds us to stay patient in difficult times.', "it's a reminder to stay patient through difficulty."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'It teaches us that we need each other'",
      words: ['need', 'us', 'we', 'It', 'that', 'each', 'other.', 'teaches'],
      correct: ['It', 'teaches', 'us', 'that', 'we', 'need', 'each', 'other.'],
      translation: 'हमें एक-दूसरे की ज़रूरत है',
    },
    {
      type: 'fill_blank',
      instruction: 'Translation pattern',
      sentence: "In Hindi we say 'Ek haath se taali nahin bajti'. It literally _____ 'one hand cannot clap'.",
      options: ['means', 'is', 'tells'],
      correct: 'means',
      context: "'It literally means ___' = साफ़ pattern।",
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में — multicultural dinner पर",
      prompt: 'हिंदी में कहावत है "एक हाथ से ताली नहीं बजती" — मतलब हम सब एक-दूसरे के बिना नहीं।',
      correct: ['There\'s a Hindi proverb: "Ek haath se taali nahin bajti" — it means we all need each other.', "There's a Hindi saying: 'Ek haath se taali nahin bajti' — it means we all need each other.", "We have a Hindi proverb: 'Ek haath se taali nahin bajti' — it means we all need each other.", 'there\'s a hindi proverb: "ek haath se taali nahin bajti" — it means we all need each other.'],
    },
  ],

  rwenDialogue: {
    intro: "London में multicultural dinner। चीनी कहावत किसी ने share की। पूछा गया — 'Hindi में ऐसा है?'",
    lines: [
      { speaker: 'npc', target: "Do you have a saying like that in Hindi?", native: 'हिंदी में ऐसी कहावत है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, we do. In Hindi we say 'Ek haath se taali nahin bajti'. It literally means 'one hand cannot clap'. It teaches us that even strong people need help — no one wins alone.", native: 'हाँ, है। हिंदी में कहते "एक हाथ से ताली नहीं बजती"। मतलब "एक हाथ ताली नहीं बजा सकता"। सिखाता है कि ताक़तवर भी अकेले नहीं — सबको मदद चाहिए।', correct: true, feedback: "बढ़िया — तीनों parts: नाम, literal, meaning।" },
          { target: "We say 'Ek haath se taali nahin bajti'.", native: 'हम कहते "एक हाथ से ताली नहीं बजती"।', correct: false, feedback: "Literal और meaning जोड़ें।" },
          { target: "Yes, we have many.", native: 'हाँ, बहुत हैं।', correct: false, feedback: "एक चुनकर पूरा share करें।" },
        ],
      },
      { speaker: 'npc', target: "Beautiful — that's wisdom we all need. Where I'm from we have something similar.", native: 'सुंदर — यह wisdom सबको चाहिए। मेरी जगह भी ऐसा।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Hindi मुहावरा global stage पर पहुँचा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: "In Hindi we say (अंग्रेज़ी में)",       correct: ['In Hindi we say', 'in hindi we say'] },
      { prompt: 'It literally means (अंग्रेज़ी में)',     correct: ['It literally means', 'it literally means'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "तीन में से एक मुहावरा choose करें — जो आज की ज़िंदगी से जुड़ता हो। English में लिखें: 'In Hindi we say [मुहावरा]. It literally means [translation]. It teaches us [meaning].' पढ़ें। कल English-only दोस्त को share करें।",
    rwenSignoff: "कल — capstone! Lesson 100।",
  },

  phase8: {
    scenario: "You're at a multicultural dinner in London. Someone has just shared a proverb from their culture and turns to you: 'Do you have a saying like that in Hindi?' Share ONE Hindi proverb using the full structure: Hindi name, literal translation, meaning. Then connect it to a real situation in your life.",
    rwenRole: "Aisha, 38, the dinner host. Curious, loves wisdom from different cultures. Will ask: 'When have you used that?', 'Did your grandmother say it?'",
    successCriteria: "User says 'In Hindi we say ___' OR 'There's a Hindi proverb ___'. Gives literal English translation. Explains meaning ('it teaches us ___', 'it's used when ___'). Connects it to a real example. Stays in English (Hindi only for the proverb itself).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
