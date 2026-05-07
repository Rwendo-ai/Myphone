import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Money — How much is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "पैसा English में: 'How much?', 'It costs ₹500', 'It's expensive'। Bargain और shopping की language।",
    culturalNote: "Indian markets में bargain culture बहुत strong है — Sarojini Nagar, Colaba Causeway, Commercial Street, Lajpat Nagar सब जगह। 'Bhaiya, kam karo na' — हिंदी में 'भैया कुछ कम करो' से जो शुरू होता है, English में 'Can you do cheaper?' या 'Best price?' से होता है। Supermarket में bargain नहीं चलता — fixed price। US/UK tourist को 'It's expensive' सुनकर surprise नहीं होता — पर 'I'll give you ₹150' (counter-offer) से वो impressed होते हैं। Diaspora में Diwali sale, Black Friday, weekend deals — सब 'discount' और 'sale' के शब्द से जुड़े।",
  },

  chunks: [
    {
      id: 'how_much_cost',
      target: 'How much does it cost?',
      native: 'कितने का है?',
      literal: 'Kitne ka hai?',
      emoji: '💰',
      phonetic: 'how-MUCH-duz-it-kost',
      audioRef: null,
    },
    {
      id: 'it_costs',
      target: 'It costs five hundred rupees',
      native: 'पाँच सौ रुपये का है',
      literal: 'Paanch sau rupaye ka hai',
      emoji: '💵',
      phonetic: 'it-KOSTS-fyv-HUN-dred...',
      audioRef: null,
    },
    {
      id: 'expensive_cheap',
      target: "It's expensive / It's cheap",
      native: 'महंगा है / सस्ता है',
      literal: 'Mehnga hai / Sasta hai',
      emoji: '💸',
      phonetic: "its-eks-PEN-siv / its-CHEEP",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Price questions and answers',
    explanation: "Price पूछने को: 'How much?' (short) या 'How much does it cost?' (long)। जवाब: 'It's five hundred rupees' या 'It costs five hundred rupees'। Bargain: 'It's too expensive' (बहुत महंगा), 'Can you do cheaper?' (कुछ कम कर सकते हैं?), 'Best price?' (आख़िरी दाम क्या है?)।",
    examples: [
      { target: "How much is this?",          native: 'यह कितने का है?' },
      { target: "It's five hundred rupees.",        native: 'पाँच सौ रुपये का है।' },
      { target: "It's too expensive for me.",  native: 'मेरे लिए बहुत महंगा है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'पैसे के शब्द मिलाएँ',
      pairs: [
        { left: 'How much?',       right: 'कितने का?' },
        { left: "It's expensive",   right: 'महंगा है' },
        { left: 'Five hundred rupees',   right: 'पाँच सौ रुपये' },
        { left: 'Cheaper, please',  right: 'कुछ कम, please' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दाम पूछ रहे हैं',
      prompt: 'कितने का है?',
      correct: ['How much?', 'How much is it?', 'how much?', 'How much does it cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — दाम कम कराने को',
      sentence: "Can you do ____?",
      options: ['cheaper', 'cheapest', 'cheap'],
      correct: 'cheaper',
      context: "Bargain में 'cheaper' (more cheap) से discount माँगते हैं।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — दाम बता रहे हैं',
      words: ['costs', 'It', 'fifteen', 'hundred', 'rupees.'],
      correct: ['It', 'costs', 'fifteen', 'hundred', 'rupees.'],
      translation: 'पंद्रह सौ रुपये का है।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दाम पर शिकायत',
      prompt: 'मेरे लिए महंगा है',
      correct: ["It's too expensive for me", "It's too expensive for me.", "Too expensive for me", "It is too expensive for me"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'यह चार सौ रुपये का है',
      correct: ['This is four hundred rupees', 'This is four hundred rupees.', "It's four hundred rupees", "It costs four hundred rupees"],
    },
  ],

  rwenDialogue: {
    intro: 'आप Dilli Haat में अपना stall चला रहे हैं। US tourist पत्थर की मूर्ति देख रहा है। आज आप ही दुकानदार हैं।',
    lines: [
      { speaker: 'npc', target: "Hi, how much is this stone sculpture?", native: 'यह पत्थर की मूर्ति कितने की है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It costs three thousand rupees, but I can do twenty-five hundred for you.",  native: 'तीन हज़ार रुपये की है, पर आपके लिए पच्चीस सौ कर सकता हूँ।', correct: true,  feedback: "बढ़िया — दाम भी दिया, discount भी दिखा दिया। Market style perfect।" },
          { target: "Three thousand.",                                                  native: '3000।',                                                                       correct: false, feedback: 'बहुत छोटा — "rupees" और flexibility जोड़ें।' },
          { target: "I don't know the price.",                                 native: 'दाम नहीं पता।',                                                       correct: false, feedback: "आप दुकानदार हैं — दाम तो पता होना चाहिए!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Bargain शुरू कर दी — यही market की कला है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'How much does it cost? (अंग्रेज़ी में)', correct: ['How much does it cost?', 'How much does it cost', 'How much?', 'how much does it cost?'] },
      { prompt: "It's expensive (अंग्रेज़ी में)", correct: ["It's expensive", "It's expensive.", "It is expensive", "Expensive"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "किसी चीज़ के बारे में सोचें जो ख़रीदना है। आज दाम पूछें English में: 'How much does it cost?' अपने आप जवाब दें: 'It costs ₹___'। दो बार करें।",
    rwenSignoff: 'पैसा बोलता है — आपको भी English में बोलना है। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You're a stall owner at a craft market in Delhi (Dilli Haat). An English-speaking tourist (American) is interested in your handmade wooden bowls. Negotiate the sale — start with a higher price, expect them to push back, and work down to a deal.",
    rwenRole: "Tom, 50, an American tourist who has bargained at markets before. Friendly but firm. Will start by saying 'too expensive' to your first price.",
    successCriteria: "User gives an opening price using 'It costs ₹X' or 'It's ₹X', responds to 'too expensive' by offering a discount with 'I can do ₹X' or 'For you, ₹X', and closes the sale (or politely declines if Tom's offer is too low).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
