import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — आप कहाँ से हैं?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अंग्रेज़ी में दो अलग सवाल हैं: 'Where are you from?' (आप कहाँ के मूल निवासी हैं?) और 'Where do you live?' (आप अभी कहाँ रहते हैं?)। हिंदी में अक्सर एक ही 'कहाँ से हो?' से दोनों मतलब निकलते हैं — पर अंग्रेज़ी इन दोनों को alag-alag रखती है।",
    culturalNote: "Indians के लिए यह बहुत relatable है — आप 'from Lucknow' हो सकते हैं पर 'living in Dubai' हों। Diaspora context में यह बहुत common सवाल है: कोई कहता है 'I'm from India, but I live in London' — दोनों अलग-अलग सच हैं।",
  },

  chunks: [
    {
      id: 'where_are_you_from',
      target: 'Where are you from?',
      native: 'आप कहाँ से हैं? (Aap kahaan se hain?)',
      literal: 'You-came from where?',
      emoji: '🌍',
      phonetic: 'wair-ar-yoo-FROM',
      audioRef: null,
    },
    {
      id: 'im_from',
      target: "I'm from ...",
      native: 'मैं ... से हूँ (Main ... se hoon)',
      literal: 'I am from (place)',
      emoji: '📍',
      phonetic: 'aym-FROM',
      audioRef: null,
    },
    {
      id: 'i_live_in',
      target: 'I live in ...',
      native: 'मैं ... में रहता/रहती हूँ (Main ... mein rehta/rehti hoon)',
      literal: 'I live in (place)',
      emoji: '🏡',
      phonetic: 'aye-LIV-in',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'From vs In — origin vs current home',
    explanation: "'From' बताता है आप मूलतः कहाँ के हैं (जन्म, परिवार, या जहाँ बड़े हुए)। 'In' बताता है आप अभी कहाँ रहते हैं। इसलिए natural sentence बनती है: 'I'm from Delhi, but I live in Dubai' — मेरी जड़ें दिल्ली में हैं पर अभी मैं दुबई में रहता हूँ।",
    examples: [
      { target: "I'm from India",        native: 'मैं भारत से हूँ' },
      { target: 'I live in Bengaluru',   native: 'मैं बेंगलुरु में रहता हूँ' },
      { target: 'Are you from Mumbai?',  native: 'क्या आप मुंबई से हैं?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मिलाएँ',
      pairs: [
        { left: 'Where are you from?', right: 'आप कहाँ से हैं?' },
        { left: "I'm from ...",        right: 'मैं ... से हूँ' },
        { left: 'I live in ...',       right: 'मैं ... में रहता हूँ' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'सही preposition चुनें',
      sentence: 'I live ____ Dubai.',
      options: ['in', 'from', 'at'],
      correct: 'in',
      context: "Dubai में कोई आपको पूछ रहा है कि आप अभी कहाँ रहते हैं।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आप कहाँ से हैं?',
      correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'],
    },
    {
      type: 'build_sentence',
      instruction: '"मैं भारत से हूँ" बनाएँ',
      words: ['India', "I'm", 'from'],
      correct: ["I'm", 'from', 'India'],
      translation: 'मैं भारत से हूँ',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — अधूरा वाक्य',
      prompt: 'मैं ... में रहता हूँ',
      correct: ['I live in', 'i live in'],
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "कोई कहे 'I'm from India, but I live in Toronto.' — इसका क्या मतलब है?",
      options: [
        { text: 'भारतीय मूल का है, पर अभी टोरंटो में रहता है', correct: true },
        { text: 'भारत में रहता है, टोरंटो जा रहा है',           correct: false },
        { text: 'दोनों जगहों का बराबर निवासी है',                correct: false },
      ],
      explanation: "'From' = origin (जड़ें), 'live in' = current home (अभी कहाँ हैं)। दोनों अलग।",
    },
  ],

  rwenDialogue: {
    intro: 'Dubai के एक IT company में coffee break। आपका Filipino colleague आपसे casually पूछता है।',
    lines: [
      { speaker: 'npc', target: 'Hi! Where are you from?', native: 'हाय! आप कहाँ से हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from India. I live in Dubai now.", native: 'मैं भारत से हूँ। अभी दुबई में रहता हूँ।', correct: true,  feedback: "बढ़िया — आपने origin और current home दोनों बताए। यह OFW context में बहुत natural है।" },
          { target: "I live in India.",                       native: 'मैं भारत में रहता हूँ।',                       correct: false, feedback: "लेकिन अभी आप Dubai में हैं — 'live in' का मतलब है present, 'from' का origin।" },
          { target: 'Yes.',                                   native: 'हाँ।',                                            correct: false, feedback: "'Yes' इस सवाल का जवाब नहीं है — पूरा वाक्य चाहिए।" },
        ],
      },
      { speaker: 'npc', target: "Oh nice! I'm from the Philippines. We're both far from home.", native: 'अच्छा! मैं Philippines से हूँ। दोनों घर से दूर हैं।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! Dubai में migrant workers के बीच यह सबसे common बातचीत है — origin share करने से connection बनता है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Where are you from? (अंग्रेज़ी में)', correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'] },
      { prompt: "I'm from ... (अंग्रेज़ी में, अधूरा)", correct: ["I'm from", "i'm from", 'I am from', 'i am from'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी से English में बताएँ कि आप कहाँ से हैं — 'I'm from [city/country]'। और अगर आप कहीं और रहते हैं तो जोड़ें: 'I live in...'।",
    rwenSignoff: "आपकी कहानी आपकी पहचान है। बाद में मिलते हैं।",
  },

  phase8: {
    scenario: "Dubai में आप एक construction project के site office में हैं — आप 6 महीने से OFW (Overseas Filipino Worker) नहीं, OIW (Overseas Indian Worker) के रूप में काम कर रहे हैं। एक नया Filipino colleague आज join हुआ है और lunch break पर casually पूछता है कि आप कहाँ से हैं।",
    rwenRole: "Carlo — Manila से Filipino welder, ~35, English fluently बोलता है, खुद भी 4 साल से Dubai में है। Friendly, talkative, expat connections बनाने में expert।",
    successCriteria: "User answers with 'I'm from [India/specific city]' to indicate origin (NOT 'I live in India' which would be wrong since they're currently in Dubai), uses 'I live in Dubai' for current home, और दोनों ideas को एक sentence में link करना ('I'm from X, but I live in Y') if natural.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
