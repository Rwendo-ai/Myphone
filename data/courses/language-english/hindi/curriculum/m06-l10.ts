import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 ख़त्म! अब आप जानते हैं संख्याएँ 1 से million, समय (hours, half past, quarter to), दिन, महीने, पैसा (how much, discount, total)। आज सब एक बातचीत में।",
    culturalNote: "Numbers की बातचीत English में हमारी रोज़ की ज़िंदगी का हिस्सा है। India में — auto-rickshaw, supermarket, online order, salary discussion — सब numbers, time, और money से जुड़ा। 'Lakh' और 'crore' से 'thousand' और 'million' का जो फ़ासला था, वो अब आपने पाट लिया। यही bridge international zoom calls में, US/UK clients के साथ, या foreign tourist को price बताते समय काम आता है।",
  },

  chunks: [
    {
      id: 'price_time',
      target: "It costs five hundred rupees and the shop closes at six P.M.",
      native: 'पाँच सौ रुपये का है और दुकान शाम 6 बजे बंद होती है।',
      literal: 'price + closing time',
      emoji: '🛒',
      phonetic: 'it-kosts...',
      audioRef: null,
    },
    {
      id: 'when_meet',
      target: "Let's meet on Friday at half past seven.",
      native: 'शुक्रवार को साढ़े सात बजे मिलते हैं।',
      literal: 'day + time meeting',
      emoji: '🤝',
      phonetic: "lets-MEET-on-FRY-day...",
      audioRef: null,
    },
    {
      id: 'total_with_discount',
      target: "The total is two thousand rupees with a ten percent discount.",
      native: 'दस प्रतिशत छूट के साथ कुल दो हज़ार रुपये हैं।',
      literal: 'total + percentage discount',
      emoji: '🧾',
      phonetic: 'thuh-TOH-tul-iz...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers, time, money — capstone integration',
    explanation: "Real बातचीत में संख्या (1-million), समय (hours, half past, A.M./P.M.), दिन (Monday-Sunday), महीने (in October), पैसा (it costs ₹X, discount, total) सब एक साथ आते हैं। Prepositions याद रखें: 'at' time के साथ ('at six P.M.'), 'on' दिन के साथ ('on Friday'), 'in' महीने के साथ ('in October'), 'for' price के साथ ('two for two hundred')। यह A2-B1 English है।",
    examples: [
      { target: 'I will pay one thousand rupees on Monday at three P.M.',          native: 'सोमवार दोपहर 3 बजे एक हज़ार रुपये दूँगा।' },
      { target: 'The meeting is on Friday at half past nine in the morning.', native: 'मीटिंग शुक्रवार सुबह साढ़े नौ बजे है।' },
      { target: "What's the total with the discount?",                       native: 'discount के साथ कुल कितना हुआ?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — full sentence',
      prompt: 'शुक्रवार शाम 6 बजे cafe में मिलते हैं।',
      correct: ["Let's meet on Friday at six P.M. at the cafe", "Let's meet on Friday at six P.M. at the cafe.", "Let's meet at the cafe on Friday at six P.M."],
    },
    {
      type: 'fill_blank',
      instruction: 'सही prepositions चुनें — संख्या, समय, महीना',
      sentence: 'My birthday is ____ October ____ Saturday ____ seven P.M.',
      options: ['in / on / at', 'on / in / at', 'at / on / in'],
      correct: 'in / on / at',
      context: "'In October' (month), 'on Saturday' (day), 'at seven P.M.' (time)। यह pattern सबसे common है।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'बिना discount के तीन हज़ार रुपये का है।',
      correct: ['It costs three thousand rupees without a discount', 'It costs three thousand rupees without a discount.', 'It costs three thousand rupees with no discount'],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य बनाएँ — दुकान कब बंद होती है",
      words: ['closes', 'shop', 'P.M.', 'The', 'six', 'at'],
      correct: ['The', 'shop', 'closes', 'at', 'six', 'P.M.'],
      translation: 'दुकान शाम 6 बजे बंद होती है।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — पैसा कब और कितना देंगे',
      prompt: 'मैं सोमवार को दो हज़ार रुपये दूँगा।',
      correct: ['I will pay two thousand rupees on Monday', 'I will pay two thousand rupees on Monday.', "I'll pay two thousand rupees on Monday"],
    },
    {
      type: 'multiple_choice',
      instruction: 'सबसे natural A2 sentence चुनें',
      question: 'Choose the most natural full sentence:',
      options: [
        { text: "Let's meet on Friday at half past seven for dinner — it costs about a thousand rupees.", correct: true },
        { text: "Meet Friday seven half. It costs thousand.",                                              correct: false },
        { text: "On Friday in seven and half meet for dinner thousand rupees cost.",                       correct: false },
      ],
      explanation: "पहला — 'on Friday' + 'at half past seven' + 'for dinner' + 'about a thousand rupees'। Prepositions perfect, flow natural।",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone! London से दोस्त India आया है — आपको dinner plan बताना है: कब, कहाँ, कितना। शुक्रवार fix करना है।',
    lines: [
      {
        speaker: 'npc',
        target: "Hey! When and where should we meet for dinner this week, and what's a good budget?",
        native: 'इस हफ़्ते कब और कहाँ dinner करें, और अच्छा budget कितना?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's meet on Friday at half past seven at Cafe Lota. It costs about twelve hundred rupees per person.",  native: '...', correct: true,  feedback: "बहुत बढ़िया — संख्या (1200), समय (half past seven), दिन (Friday), पैसा (per person) सब एक साथ। यह A2-B1 level है।" },
          { target: "Friday seven dollars twenty cafe.",                                                                          native: '...', correct: false, feedback: 'सब है पर structure नहीं — prepositions जोड़ें: "on Friday at seven" "twenty" "at the cafe"।' },
          { target: "Maybe we meet sometime expensive cafe.",                                                                      native: '...', correct: false, feedback: '"Sometime" से time साफ़ नहीं, "expensive cafe" budget नहीं। A2 में specific time और price बोलें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 6 पूरा! Numbers, time, money — सब बिना सोचे आ रहे हैं। अब आप market, bank, meeting सब संभाल सकते हैं। 'How much?' से डर नहीं लगता।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे। Capstone recall.',
    prompts: [
      { prompt: 'Let\'s meet on Friday at half past seven (अंग्रेज़ी में)', correct: ["Let's meet on Friday at half past seven", "Let's meet on Friday at half past seven.", "Lets meet on Friday at half past seven"] },
      { prompt: "What's the total with discount? (अंग्रेज़ी में)", correct: ["What's the total with discount?", "What is the total with discount?", "What's the total with the discount?", "What is the total with the discount?"] },
    ],
  },

  mission: {
    title: 'Module 6 का अंतिम काम',
    task: "एक paragraph English में लिखें या बोलें: 'Today is ___, the time is ___, I want to buy ___ for ___ rupees on ___.' सब use करें: दिन, समय, महीना, price। दोस्त को share करें या journal में रखें।",
    rwenSignoff: "Module 6 पूरा — numbers आपकी ज़बान पर हैं। Module 7 — खाना। Real ChiNgezi table से शुरू।",
  },

  phase8: {
    scenario: "Capstone conversation: you're planning a weekend outing with an English-speaking friend in Mumbai. Cover when (day + time), where, what to do (with prices), and how to split the bill. Use numbers, time, days, months, and money phrases naturally — at least four different categories.",
    rwenRole: "Alex, 33, a Canadian friend living in Mumbai. Will ask follow-up questions about timing, prices, and splitting costs. Will counter-suggest if your timing is bad.",
    successCriteria: "User uses at least one item from each of: a specific day ('on Saturday'), a time using 'at' or 'half past' or 'quarter to', a money phrase with a number ('₹500', 'discount', 'total', 'per person'), and a month or 'this week/weekend'. Sentences flow without obvious dropped articles.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
