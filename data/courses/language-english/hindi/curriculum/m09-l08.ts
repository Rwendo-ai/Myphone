import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Lost & Travel emergencies — Lost हो गए',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "कभी-कभी सब उल्टा हो जाता: bus miss हुई, bag train में छूटा, गली में खो गए। 'I'm lost', 'I missed my bus', 'I lost my bag' — ये आपको बचाते।",
    culturalNote: "India में मुसीबत में अजनबी लोग सीधे help करते हैं — कोई auto बुलाएगा, कोई पता बताएगा। UK/NYC में busy schedule वाले हैं पर 'Excuse me, I need help — I'm lost' से वो भी मदद करते हैं। Polite words ज़रूरी हैं — 'please' से language change हो जाती। Emergency: 'I lost my passport!' — दूतावास तुरंत मदद। Indian Embassy हर बड़े शहर में।",
  },

  chunks: [
    {
      id: 'im_lost',
      target: "I'm lost.",
      native: 'मैं खो गया हूँ।',
      literal: 'Main kho gaya hoon',
      emoji: '😰',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
    {
      id: 'i_missed_my_bus',
      target: 'I missed my bus.',
      native: 'मेरी bus miss हो गई।',
      literal: 'Meri bus miss ho gayi',
      emoji: '🚌',
      phonetic: 'ay-MIST-my-BUS',
      audioRef: null,
    },
    {
      id: 'i_lost_my_bag',
      target: 'I lost my bag.',
      native: 'मेरा bag खो गया।',
      literal: 'Mera bag kho gaya',
      emoji: '👜',
      phonetic: 'ay-LOST-my-BAG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Crisis travel — past tense',
    explanation: "Emergency में past tense: 'I missed' (miss हो गई), 'I lost' (खो गया), 'I forgot' (भूल गया)। 'I'm lost' = present (अभी lost हूँ)। 'Could you help me?' polite request।",
    examples: [
      { target: "I'm lost.",         native: 'मैं खो गया हूँ।' },
      { target: 'I missed my bus.', native: 'मेरी bus miss हो गई।' },
      { target: 'I lost my bag.',    native: 'मेरा bag खो गया।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Emergency शब्द मिलाएँ',
      pairs: [
        { left: "I'm lost",         right: 'खो गया' },
        { left: 'I missed my bus', right: 'bus miss हो गई' },
        { left: 'I lost my bag',    right: 'bag खो गया' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — अनजान जगह में',
      prompt: 'मैं खो गया हूँ।',
      correct: [
        "I'm lost.",
        "I am lost.",
        "I'm lost",
        "i'm lost.",
        "I think I'm lost.",
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — bus miss',
      prompt: 'मेरी bus miss हो गई।',
      correct: [
        'I missed my bus.',
        'I missed my bus',
        "I've missed my bus.",
        'i missed my bus.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — train में bag छूटा',
      prompt: 'मेरा bag train में छूट गया।',
      correct: [
        'I lost my bag on the train.',
        "I've lost my bag on the train.",
        'I lost my bag in the train.',
        'I left my bag on the train.',
        'i lost my bag on the train.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'मदद माँगना',
      words: ['help', 'Could', 'me', 'you'],
      correct: ['Could', 'you', 'help', 'me'],
      translation: 'मदद कर सकते हैं?',
    },
    {
      type: 'fill_blank',
      instruction: 'Passport के बारे में',
      sentence: 'Excuse me, I ____ my passport!',
      options: ['lost', 'have', 'am'],
      correct: 'lost',
      context: "'I lost ___' = past tense।",
    },
  ],

  rwenDialogue: {
    intro: "Victoria Coach Station London पर। Mumbai तो नहीं, पर Manchester जाने वाली Megabus miss हो गई। Staff से बात।",
    lines: [
      { speaker: 'npc', target: "You alright? You look a bit panicked.", native: 'ठीक हैं? घबराए लग रहे।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I missed my bus to Manchester. Could you help me?", native: 'माफ़ कीजिए, Manchester की bus miss हो गई। मदद कर सकते?', correct: true,  feedback: 'बढ़िया — "Excuse me", problem, request — एक sentence।' },
          { target: "Bus gone.",                                                              native: 'Bus गई।',                                                                correct: false, feedback: 'अधूरा।' },
          { target: "Manchester.",                                                              native: 'Manchester।',                                                                  correct: false, feedback: "'I missed my bus to Manchester' पूरा करें।" },
        ],
      },
      { speaker: 'npc', target: "Oh no — there's another one in 90 minutes from gate 7. £15. Want me to book it?", native: 'अरे — 90 मिनट में gate 7 से एक और है। £15। Book करूँ?' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I missed my bus' + 'Could you help me?' — हर मुसीबत में काम।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: "I'm lost (अंग्रेज़ी में)",         correct: ["I'm lost", "I'm lost.", 'I am lost.', "i'm lost."] },
      { prompt: 'I missed my bus (अंग्रेज़ी में)', correct: ['I missed my bus', 'I missed my bus.', "I've missed my bus.", 'i missed my bus.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "तीन मुसीबतें सोचें: (1) खो गए, (2) bus miss, (3) bag खोया। English में जवाब बोलें: 'Excuse me, I'm lost. Could you help me?' या 'I missed my bus.' या 'I lost my bag.' बिना देखे।",
    rwenSignoff: "मुसीबत बता सकता वो हल कर सकता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at Victoria Coach Station in London. Your Megabus to Manchester left 5 minutes ago — you missed it because the queue was confusing. You need to find a staff member, explain what happened, and find out your options.",
    rwenRole: "Tom, 50, station staff member. Sympathetic, knows the schedule, will offer the next bus or a different route. Speaks clear British English.",
    successCriteria: "User opens with 'Excuse me', uses 'I missed my bus to Manchester' (or similar), asks 'Could you help me?', understands the alternative offered, and thanks him.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
