import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Polite "How are you?" forms',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अब तक हमने 'How are you?' सीखा — casual register। आज सीखते हैं formal forms — interview, बड़े client meeting, या director से मिलने पर काम आते हैं।",
    culturalNote: "हिंदी में 'आप कैसे हैं?' (आदरपूर्ण) और 'तुम कैसे हो?' (दोस्ताना) में फ़र्क़ साफ़ है। अंग्रेज़ी में 'you' एक ही है — पर words बदलते हैं। Formal में 'How do you do?' (बहुत formal, थोड़ा पुराना), 'Pleased to meet you' (न कि 'Nice to meet you'), 'I hope you're well' (emails में बहुत common)।",
  },

  chunks: [
    {
      id: 'how_do_you_do',
      target: 'How do you do?',
      native: 'आप कैसे हैं? (आदरपूर्ण) (Aap kaise hain? — formal)',
      literal: 'How do you do?',
      emoji: '🎩',
      phonetic: 'how-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'pleased_to_meet_you',
      target: 'Pleased to meet you',
      native: 'आपसे मिलकर बहुत खुशी हुई (Aapse milkar bahut khushi hui)',
      literal: 'I-am-pleased to meet-you',
      emoji: '🤝',
      phonetic: 'PLEEZD-too-MEET-yoo',
      audioRef: null,
    },
    {
      id: 'i_hope_youre_well',
      target: "I hope you're well",
      native: 'आशा है आप स्वस्थ हैं (Aasha hai aap swasth hain)',
      literal: 'I hope you are well',
      emoji: '🌟',
      phonetic: 'aye-HOHP-yor-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs casual',
    explanation: "Casual: 'Hi', 'How are you?', 'Nice to meet you'। Formal: 'Hello' या 'Good morning', 'How do you do?', 'Pleased to meet you', 'I hope you're well'। Difference: formal में full words, no contractions, और सख़्ती से polite। Job interview, client emails, senior leadership से बात — हमेशा formal side पर रहें।",
    examples: [
      { target: 'How do you do?',           native: 'आप कैसे हैं? (बहुत आदरपूर्ण)' },
      { target: 'Pleased to meet you',      native: 'आपसे मिलकर बहुत खुशी हुई' },
      { target: "I hope you're well",       native: 'आशा है आप स्वस्थ हैं' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Formal phrases को मिलाएँ',
      pairs: [
        { left: 'How do you do?',         right: 'आप कैसे हैं? (आदरपूर्ण)' },
        { left: 'Pleased to meet you',    right: 'आपसे मिलकर बहुत खुशी हुई' },
        { left: "I hope you're well",     right: 'आशा है आप स्वस्थ हैं' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें (formal)',
      prompt: 'आप कैसे हैं? (आदरपूर्ण)',
      correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें (formal)',
      prompt: 'आपसे मिलकर बहुत खुशी हुई',
      correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Formal email की शुरुआत पूरी करें',
      sentence: "I ____ you're well.",
      options: ['hope', 'know', 'see'],
      correct: 'hope',
      context: 'आप एक UK client को email लिख रहे हैं।',
    },
    {
      type: 'build_sentence',
      instruction: 'Manager से मिलने पर — क्रम लगाएँ',
      words: ['Pleased', 'to', 'meet', 'you'],
      correct: ['Pleased', 'to', 'meet', 'you'],
      translation: 'आपसे मिलकर बहुत खुशी हुई',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें (formal)',
      prompt: 'आशा है आप स्वस्थ हैं',
      correct: ["I hope you're well", "i hope you're well", "I hope you are well", "i hope you are well"],
    },
  ],

  rwenDialogue: {
    intro: "Mumbai में MNC headquarters। आपका job interview है — Regional Director आपसे पहली बार मिल रहे हैं।",
    lines: [
      { speaker: 'npc', target: 'Good morning. How do you do?', native: 'सुप्रभात। आप कैसे हैं? (आदरपूर्ण)' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'How do you do? Pleased to meet you.',  native: 'आप कैसे हैं? आपसे मिलकर बहुत खुशी हुई।', correct: true,  feedback: "बहुत बढ़िया — interview-grade formal English। Director impressed होगा।" },
          { target: "Hi! What's up?",                         native: 'हाय! क्या हाल है?',                            correct: false, feedback: "बहुत casual — interview में 'How do you do?' या 'Pleased to meet you' से शुरू करें।" },
          { target: "How are you?",                           native: 'आप कैसे हैं? (साधारण)',                          correct: false, feedback: "ठीक है पर interview के लिए और formal होना चाहिए — 'How do you do?' impression बनाता है।" },
        ],
      },
      { speaker: 'npc', target: 'Pleased to meet you too. Please have a seat.', native: 'आपसे मिलकर भी ख़ुशी हुई। बैठिए।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! Interview की पहली impression बहुत मायने रखती है — formal register से आपने professionalism दिखा दी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: 'How do you do? (अंग्रेज़ी में, formal)',  correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'] },
      { prompt: 'Pleased to meet you (अंग्रेज़ी में)',     correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अगली बार जब office email लिखें, उसमें 'I hope you're well' शामिल करें। और किसी senior से मिलें तो 'Pleased to meet you' बोलें।",
    rwenSignoff: "Take care — कल मिलते हैं।",
  },

  phase8: {
    scenario: "मुंबई में Bandra-Kurla Complex के एक MNC office में आपका job interview है — एक US-based investment bank। Reception से आपको 23rd floor पर भेजा गया है। Glass conference room में Regional Director आते हैं और आपसे handshake के साथ पहली बार मिल रहे हैं — formal register की पूरी ज़रूरत है।",
    rwenRole: "Mr Iyer — Regional Director, ~52, IIM-A graduate, US में 15 साल काम कर चुके हैं। Polished, formal, register पर बहुत ध्यान देते हैं। Casual जवाब उन्हें red flag लगता है।",
    successCriteria: "User uses formal phrasing: opens with 'How do you do?' या 'Good morning, sir' (NOT 'Hi'), responds 'Pleased to meet you' (NOT 'Nice to meet you' which is casual), avoids contractions where possible, और कोई भी 'What's up' / 'Hey' / 'Bro' avoid करता है।",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
