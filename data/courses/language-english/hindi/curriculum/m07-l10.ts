import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'A meal conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7 ख़त्म! आज सब मिलाएँ: restaurant entry, order, Indian food explain, polite finish। एक पूरी बातचीत।",
    culturalNote: "Indian dining English में दो संस्कार जोड़ती है — हमारा 'अतिथि देवो भव' और उनका 'thank you, please, would, could'। दोनों simple, polite, और real हैं। Restaurant में अब आप अकेले survival नहीं कर रहे — full conversation कर सकते हैं। थाली explain करना, बिरयानी order करना, host बनना — सब आपकी English वोकैबुलरी में आ चुका। यह Module भारत-बाहर हर restaurant में काम आएगा — Singapore, Dubai, London, NYC — कहीं भी।",
  },

  chunks: [
    {
      id: 'review_table_menu',
      target: "A table for two, please. Could we have the menu?",
      native: 'दो लोगों के लिए, please। मेन्यू मिल सकता है?',
      literal: 'Restaurant arrival',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_id_like_modify',
      target: "I'd like the chicken, without onions, please.",
      native: 'मुझे चिकन चाहिए, बिना प्याज़ के, please।',
      literal: 'Order with modification',
      emoji: '🍗',
      phonetic: "ayd-LAYK-thuh-CHIK-en",
      audioRef: null,
    },
    {
      id: 'review_delicious_bill',
      target: "It was delicious. Could we have the bill, please?",
      native: 'बहुत स्वादिष्ट था। बिल मिल सकता है?',
      literal: 'End of meal',
      emoji: '🧾',
      phonetic: 'it-WUZ-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full meal flow',
    explanation: "पूरा meal flow — चार parts: ENTER ('A table for two'), ORDER ('I'd like ___, without ___'), DURING ('It's delicious' / 'A glass of water'), END ('Could we have the bill?')। Politeness हर step पर।",
    examples: [
      { target: "A table for two, please.",                                  native: 'दो लोगों के लिए, please।' },
      { target: "I'd like the chicken, without onions, please.",            native: 'मुझे चिकन चाहिए, बिना प्याज़ के, please।' },
      { target: "It was delicious. Could we have the bill, please?",        native: 'स्वादिष्ट था। बिल मिल सकता है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Meal के parts मिलाएँ',
      pairs: [
        { left: 'A table for two',          right: 'How you arrive' },
        { left: "I'd like ___, please",     right: 'How you order' },
        { left: 'The bill, please',         right: 'How you finish' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त के साथ restaurant',
      prompt: 'दो लोगों के लिए, please।',
      correct: [
        'A table for two, please.',
        'Table for two, please.',
        'A table for two please.',
        'a table for two, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — चिकन बिना प्याज़',
      prompt: 'मुझे चिकन चाहिए, बिना प्याज़ के, please।',
      correct: [
        "I'd like the chicken, without onions, please.",
        "I'd like chicken, without onions, please.",
        "I would like the chicken, without onions, please.",
        "Could I have the chicken, without onions, please?",
        "i'd like the chicken, without onions, please.",
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — खा चुके, बिल चाहिए',
      prompt: 'स्वादिष्ट था। बिल मिल सकता है?',
      correct: [
        "It was delicious. Could we have the bill, please?",
        "That was delicious. Could we have the bill, please?",
        "It was delicious. The bill, please.",
        "It was delicious. Could we get the bill, please?",
        "it was delicious. could we have the bill, please?",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'चावल का polite order',
      words: ["I'd", 'rice', 'like', 'please', 'the'],
      correct: ["I'd", 'like', 'the', 'rice', 'please'],
      translation: 'मुझे चावल चाहिए please',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — खा चुके, waiter को धन्यवाद',
      sentence: 'Thanks ____ the meal — it was lovely.',
      options: ['for', 'on', 'in'],
      correct: 'for',
      context: "'Thanks for ___' किसी चीज़ के लिए धन्यवाद।",
    },
  ],

  rwenDialogue: {
    intro: "Mumbai के Bandra restaurant में partner के साथ हैं। पूरी conversation: enter, order, eat, finish।",
    lines: [
      { speaker: 'npc', target: "Hi, welcome. Just the two of you?", native: 'नमस्ते, स्वागत। आप दो ही?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a table for two, please. Could we see the menu?", native: 'हाँ, दो के लिए, please। मेन्यू देख सकते हैं?', correct: true,  feedback: 'बढ़िया — entry clean, मेन्यू भी माँगा।' },
          { target: "Two.",                                                       native: 'दो।',                                                correct: false, feedback: "बहुत छोटा।" },
          { target: "Hello, hungry.",                                              native: 'नमस्ते, भूख लगी।',                                    correct: false, feedback: "Hostess ने number पूछा था।" },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu. Anything to drink while you decide?", native: 'इधर आइए। यह मेन्यू। पीने के लिए कुछ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two glasses of water, please. And I'd like the chicken, without onions.", native: 'दो गिलास पानी, please। और मुझे चिकन चाहिए बिना प्याज़।', correct: true,  feedback: 'बढ़िया — order साफ़, modification भी।' },
          { target: "Water. Chicken no onion.",                                                  native: 'पानी। चिकन बिना प्याज़।',                                          correct: false, feedback: "बहुत कटा-कटा — 'please' और 'I'd like' जोड़ें।" },
        ],
      },
      { speaker: 'npc', target: "Lovely choice. Coming up.", native: 'अच्छी choice। बस आता है।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. It was delicious — could we have the bill, please?", native: 'धन्यवाद। स्वादिष्ट था — बिल मिल सकता है?', correct: true,  feedback: 'बढ़िया — politely ख़त्म।' },
          { target: "Bill.",                                                                 native: 'बिल।',                                                    correct: false, feedback: "'Could we have' + 'please' जोड़ें।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 7 पूरा! Restaurant की पूरी language English में — दरवाज़े से बिल तक।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे। Capstone recall.',
    prompts: [
      { prompt: "I'd like the chicken, without onions, please (अंग्रेज़ी में)", correct: ["I'd like the chicken, without onions, please", "I'd like the chicken, without onions, please.", "I'd like the chicken without onions please", "i'd like the chicken, without onions, please."] },
      { prompt: 'Could we have the bill, please? (अंग्रेज़ी में)', correct: ['Could we have the bill, please?', 'Could we have the bill please?', 'The bill, please.', 'Could we have the check, please?', 'could we have the bill, please?'] },
    ],
  },

  mission: {
    title: 'Module 7 का अंतिम काम',
    task: "Restaurant की कल्पना करें। पूरी conversation ज़ोर से English में: 'A table for two, please.' → 'I'd like ___, without ___, please.' → 'Could I have a glass of water?' → 'It was delicious.' → 'Could we have the bill, please?' बिना देखे।",
    rwenSignoff: "Module 7 पूरा। दाल से लेकर London restaurant तक — सब English में।",
  },

  phase8: {
    scenario: "Capstone. You're at a busy mid-range restaurant in Mumbai with your partner. Run the full meal: arrive (table for two), order (with a modification), drink, comment on the food, ask for the bill, and thank the staff. The conversation should naturally span 4 minutes.",
    rwenRole: "Lerato, 30, the same hostess from m07-l03 — and Sipho, 35, the waiter from m07-l04. Both polished, attentive. Will react naturally to your pace.",
    successCriteria: "Full meal flow: 'a table for two', orders with 'I'd like ___, without ___', uses 'a glass of water' or similar drink, comments 'delicious' / 'lovely' during the meal, closes with 'Could we have the bill?' + 'thank you'. Combines chunks from Module 7 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
