import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Numbers in shopping — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Shopping की भाषा: 'Two for ten dollars', 'discount', 'total'। ये वो शब्द हैं जिनसे आप कीमत और गिनती दोनों संभालेंगे।",
    culturalNote: "हिंदी में 'दो सौ रुपये में दो' (BOGO style), 'छूट' (discount), 'कुल' (total) — सब मिलते-जुलते। English में 'discount', 'sale', 'BOGO' (Buy One Get One)। Indian supermarket bills पर 'subtotal', 'GST', 'total' English में ही होते हैं — पर समझ कितने को है? जब आपने अनजान charge देखा हो, 'What is this charge for?' पूछना सीखें — यह बड़ा skill है, supermarket हो या phone bill।",
  },

  chunks: [
    {
      id: 'two_for_ten',
      target: 'Two for two hundred rupees',
      native: 'दो — दो सौ रुपये में',
      literal: 'Do, do sau rupaye mein',
      emoji: '🛍️',
      phonetic: 'too-for-too-HUN-dred',
      audioRef: null,
    },
    {
      id: 'discount',
      target: 'Discount',
      native: 'छूट / डिस्काउंट',
      literal: 'Chhoot / Discount',
      emoji: '🏷️',
      phonetic: 'DIS-kownt',
      audioRef: null,
    },
    {
      id: 'total',
      target: 'Total / altogether',
      native: 'कुल मिलाकर',
      literal: 'Kul milaakar',
      emoji: '🧾',
      phonetic: 'TOH-tul / ahl-too-GEH-thur',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Shopping math phrases',
    explanation: "Bulk pricing: 'X for Y rupees' = X items in Y rupees ('two for two hundred')। Discount माँगने को: 'Is there a discount?' या 'Can I get a discount?'। Total पूछने को: 'What's the total?' या 'How much altogether?'। Receipt पर: 'subtotal' + 'tax' = 'total'। 'Sale' = कम दाम पर बिकना।",
    examples: [
      { target: 'Three for fifteen hundred rupees',     native: 'तीन — पंद्रह सौ रुपये में' },
      { target: 'Is there a discount?',          native: 'क्या discount है?' },
      { target: "What's the total?",             native: 'कुल कितना हुआ?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Shopping शब्द मिलाएँ',
      pairs: [
        { left: 'Discount',          right: 'छूट' },
        { left: 'Total',             right: 'कुल' },
        { left: 'On sale',           right: 'सस्ते में' },
        { left: 'Two for ten',       right: 'दो — दस में' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — receipt में पूछ रहे',
      prompt: 'कुल कितना हुआ?',
      correct: ["What's the total?", "What is the total?", "How much altogether?", "How much in total?"],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — दो चीज़ों का दाम बता रहे हैं',
      sentence: 'Three ____ five hundred rupees.',
      options: ['for', 'in', 'at'],
      correct: 'for',
      context: "Bulk pricing: 'X for Y' = X items in Y total। 'Three for five hundred' = 3 items at ₹500 total।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — discount पूछ रहे हैं',
      words: ['get', 'a', 'I', 'discount?', 'Can'],
      correct: ['Can', 'I', 'get', 'a', 'discount?'],
      translation: 'क्या discount मिल सकता है?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — receipt पर charge ज़्यादा है',
      prompt: 'कुल इतना ज़्यादा क्यों है?',
      correct: ['Why is the total so high?', 'Why is the total so high', "Why's the total so high?", 'Why is the total this high?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें — receipt पर unexpected charge देखा',
      question: "Unexpected charge पूछने का सबसे natural तरीक़ा?",
      options: [
        { text: "What is this charge for?",           correct: true },
        { text: "Why this money?",                     correct: false },
        { text: "I don't pay this.",                   correct: false },
      ],
      explanation: "'What is this charge for?' polite है और जवाब के लिए open। 'I don't pay' aggressive। 'Why this money' clear नहीं।",
    },
  ],

  rwenDialogue: {
    intro: 'आप D-Mart में हैं — receipt देखी, ₹50 का unknown charge है। English-speaking cashier से पूछना है।',
    lines: [
      { speaker: 'npc', target: "Hi, can I help?", native: 'नमस्ते, क्या मदद करूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — what is this fifty-rupee charge for?",  native: 'हाँ — यह 50 रुपये का charge किस लिए है?', correct: true,  feedback: "बढ़िया — short, polite, और clear।" },
          { target: "Money is wrong.",                                native: 'पैसा ग़लत है।',                          correct: false, feedback: 'साफ़ नहीं — "this charge" से specify करें।' },
          { target: "Why?",                                            native: 'क्यों?',                                           correct: false, feedback: 'बहुत छोटा — cashier को नहीं पता "why what?" Receipt explain करें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'What is this charge for?' supermarket, bank, restaurant — हर जगह काम आता है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Discount (अंग्रेज़ी में)', correct: ['Discount', 'discount'] },
      { prompt: "What's the total? (अंग्रेज़ी में)", correct: ["What's the total?", "What is the total?", "what's the total?", "What's the total"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "हाल की कोई receipt देखें। 'subtotal', 'tax', 'total' — English में पढ़ें। सोचें: कोई charge unknown हो तो English में कैसे पूछेंगे?",
    rwenSignoff: 'जो receipt समझता है, उसके पैसे नहीं चुराए जाते। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You just paid for groceries at a supermarket (D-Mart or Big Bazaar) and notice a ₹50 charge on your receipt that doesn't match anything you bought. Go back to the till and politely query it with the English-speaking cashier.",
    rwenRole: "Jane, 25, a cashier. Helpful, will check the receipt with you. May explain it as a 'service charge' or 'bag fee' — you have to decide if it's fair.",
    successCriteria: "User asks 'What is this charge for?' or similar, listens to Jane's explanation, and either accepts ('OK, thank you') or asks for it to be removed if they didn't agree to it. Uses 'total' or 'receipt' at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
