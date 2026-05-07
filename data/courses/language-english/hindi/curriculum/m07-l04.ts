import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Ordering food — Order करना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अब order करना। English में 'I want' बहुत blunt — 'I'd like' (मुझे चाहिए) ज़्यादा polite। Modifications: 'without onions' (बिना प्याज़)।",
    culturalNote: "India में हम 'मुझे चाहिए' से order करते हैं — direct, normal। English में 'I want chicken' boss को order देना लगता है। 'I'd like chicken' = 'मैं lena चाहूँगा' — softer। Modifications restaurant culture में expected हैं — 'no onions' (Jain), 'no garlic' (Brahmin), 'no spice' (foreign visitor), 'extra spicy' (आप)। Polite स्पष्ट request: 'I'd like the chicken, but without onions, please' — restaurant comfortable इस से। India में kitchen बहुत flexible है — UK में थोड़ी कम, पर polite request हमेशा accommodate होती है।",
  },

  chunks: [
    {
      id: 'id_like',
      target: "I'd like...",
      native: 'मुझे चाहिए...',
      literal: 'Mujhe chahiye (polite)',
      emoji: '👉',
      phonetic: 'ayd-LAYK',
      audioRef: null,
    },
    {
      id: 'could_i_have',
      target: 'Could I have...',
      native: 'क्या मुझे मिल सकता है...',
      literal: 'Kya mujhe mil sakta hai',
      emoji: '🤲',
      phonetic: 'kud-ay-HAV',
      audioRef: null,
    },
    {
      id: 'without_onions',
      target: 'Without onions',
      native: 'बिना प्याज़ के',
      literal: 'Bina pyaaz ke',
      emoji: '🚫',
      phonetic: 'with-OWT-UN-yuns',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — would/could',
    explanation: "Restaurant में 'I want' rough लगता — 'I'd like' (= I would like) या 'Could I have...?' use करें। दोनों polite। 'Without ___' से modification — 'without onions', 'no spice', 'no garlic'।",
    examples: [
      { target: "I'd like the chicken, please.",            native: 'मुझे चिकन चाहिए, please।' },
      { target: 'Could I have it without onions?',          native: 'बिना प्याज़ के मिल सकता है?' },
      { target: "I'd like the rice, no chilli, please.",    native: 'मुझे चावल चाहिए, बिना मिर्ची के।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Order शब्द मिलाएँ',
      pairs: [
        { left: "I'd like",       right: 'मुझे चाहिए' },
        { left: 'Could I have',   right: 'मिल सकता है' },
        { left: 'Without onions', right: 'बिना प्याज़' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — चिकन order',
      prompt: 'मुझे चिकन चाहिए, please।',
      correct: [
        "I'd like the chicken, please.",
        "I'd like chicken, please.",
        "I would like the chicken, please.",
        "Could I have the chicken, please?",
        "i'd like the chicken, please.",
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — बिना प्याज़',
      prompt: 'बिना प्याज़ के, please।',
      correct: [
        'Without onions, please.',
        'No onions, please.',
        'Without onions please.',
        'No onions please.',
        'without onions, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — polite order',
      sentence: '____ I have the paneer tikka, please?',
      options: ['Could', 'Want', 'Give'],
      correct: 'Could',
      context: "'Could I have...' polite formula।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — चिकन बिना प्याज़',
      words: ['like', 'chicken', "I'd", 'the', 'without', 'onions'],
      correct: ["I'd", 'like', 'the', 'chicken', 'without', 'onions'],
      translation: 'मुझे चिकन चाहिए बिना प्याज़ के',
    },
    {
      type: 'build_sentence',
      instruction: 'Polite menu request',
      words: ['have', 'I', 'menu', 'Could', 'the'],
      correct: ['Could', 'I', 'have', 'the', 'menu'],
      translation: 'मेन्यू मिल सकता है',
    },
  ],

  rwenDialogue: {
    intro: "London के Indian restaurant में हैं। Waiter order लेने आया।",
    lines: [
      { speaker: 'npc', target: "Are you ready to order?", native: 'Order देने को तैयार हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'd like the chicken, without onions, please.",  native: 'हाँ, मुझे चिकन चाहिए, बिना प्याज़ के, please।', correct: true,  feedback: "बढ़िया — polite, clear, modification भी।" },
          { target: "I want chicken, no onion.",                              native: 'मुझे चिकन, बिना प्याज़।',                  correct: false, feedback: "'I want' rough — 'I'd like' use करें।" },
          { target: "Chicken.",                                                native: 'चिकन।',                                              correct: false, feedback: "बहुत छोटा — restaurant में polite होना।" },
        ],
      },
      { speaker: 'npc', target: "No problem. Anything to drink?", native: 'कोई दिक़्क़त नहीं। कुछ पीने को?' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I'd like' + 'without ___' — polite + clear। यही good English है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: "I'd like the chicken (अंग्रेज़ी में)", correct: ["I'd like the chicken", "I'd like the chicken.", "I would like the chicken", "i'd like the chicken"] },
      { prompt: 'Without onions, please (अंग्रेज़ी में)', correct: ['Without onions, please', 'Without onions, please.', 'No onions, please', 'No onions, please.', 'without onions, please.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक खाना सोचें जो आपको पसंद है। English में order करें ज़ोर से: 'I'd like ___, without ___, please.' Modification choose करें — onions, chilli, salt — कुछ भी।",
    rwenSignoff: "कल — पसंद और नापसंद।",
  },

  phase8: {
    scenario: "You're at a restaurant in London. The waiter comes to take your order. You want the grilled chicken but you can't eat onions. Order it with the modification.",
    rwenRole: "Sipho, 35, an experienced waiter. Speaks polished English. Will check details for the kitchen.",
    successCriteria: "User uses 'I'd like...' or 'Could I have...', specifies a dish, and uses 'without ___' / 'no ___' to modify. Polite throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
