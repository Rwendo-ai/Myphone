import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have" — मैं हूँ / मेरे पास',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "हिंदी में 'मैं ख़ुश हूँ' — verb 'हूँ' अंत में आता है (SOV: subject-object-verb)। English में 'I am happy' — verb बीच में (SVO: subject-verb-object)। यह सबसे बड़ी छलांग है।",
    culturalNote: "हिंदी SOV भाषा है — 'मैं रोज़ ऑफिस जाता हूँ' (I daily office go-am)। English SVO है — 'I go to office daily' (I go office daily)। शुरुआत में 'I going' या 'I office go' जैसी ग़लतियाँ Indian English में बहुत common हैं — यह hindi structure का असर है। Module 8 में हम verb को बीच में लाने की आदत डालेंगे। 'To be' (हूँ/है) और 'to have' (पास है) हर वाक्य की रीढ़ हैं।",
  },

  chunks: [
    {
      id: 'i_am_happy',
      target: 'I am happy.',
      native: 'मैं ख़ुश हूँ।',
      literal: 'Main khush hoon (I happy am)',
      emoji: '😊',
      phonetic: 'ay-AM-HAP-ee',
      audioRef: null,
    },
    {
      id: 'you_have_a_friend',
      target: 'You have a friend.',
      native: 'आपके पास एक दोस्त है।',
      literal: 'Aapke paas ek dost hai',
      emoji: '🤝',
      phonetic: 'yoo-HAV-uh-FREND',
      audioRef: null,
    },
    {
      id: 'they_are_tired',
      target: 'They are tired.',
      native: 'वो थक गए हैं।',
      literal: 'Wo thak gaye hain',
      emoji: '😩',
      phonetic: 'thay-AHR-TY-erd',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"To be" and "to have" — verb in the middle',
    explanation: "'Be' subject के साथ बदलता: I AM, You ARE, He/She IS, We ARE, They ARE। 'Have' कम बदलता: I/You/We/They HAVE, He/She HAS। हिंदी में verb अंत में, English में बीच में: 'I AM happy' (मैं ख़ुश हूँ — verb को आगे लाएँ)।",
    examples: [
      { target: 'I am happy.',         native: 'मैं ख़ुश हूँ।' },
      { target: 'You have a friend.',  native: 'आपके पास दोस्त है।' },
      { target: 'They are tired.',     native: 'वो थके हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I am happy',       right: 'मैं ख़ुश हूँ' },
        { left: 'You have a friend', right: 'आपके पास दोस्त है' },
        { left: 'They are tired',   right: 'वो थके हैं' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "सही शब्द चुनें",
      sentence: 'I _____ happy today.',
      options: ['am', 'is', 'are'],
      correct: 'am',
      context: "'I' के साथ 'am'। He/She के साथ 'is'। You/We/They के साथ 'are'।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आपके पास एक दोस्त है।',
      correct: ['You have a friend.', 'You have a friend', 'you have a friend.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं ख़ुश हूँ।',
      correct: ['I am happy.', 'I am happy', "I'm happy.", "I'm happy", 'i am happy.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "वो थके हैं"',
      words: ['tired.', 'are', 'They'],
      correct: ['They', 'are', 'tired.'],
      translation: 'वो थके हैं',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'She _____ a sister in Canada.',
      options: [
        { text: 'has', correct: true },
        { text: 'have', correct: false },
        { text: 'are', correct: false },
      ],
      explanation: "He/She/It के साथ 'have' बदलकर 'has'। 'I/You/We/They have' पर 'He/She HAS'।",
    },
  ],

  rwenDialogue: {
    intro: "London के coffee shop में नई दोस्त मिली। वो introduction चाहती है।",
    lines: [
      { speaker: 'npc', target: "Hi! So tell me a bit about yourself.", native: 'नमस्ते! अपने बारे में थोड़ा बताइए।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I am from India. I have a sister here, and I am happy to meet you.", native: 'मैं भारत से हूँ। मेरी एक बहन यहाँ है, और आपसे मिलकर ख़ुश हूँ।', correct: true, feedback: "बढ़िया — 'I am' दो बार और 'I have' एक बार सही use।" },
          { target: "From India. Sister here. Happy.", native: 'भारत से। बहन यहाँ। ख़ुश।', correct: false, feedback: "हिंदी में prefix से चलता पर English में 'I' + 'am'/'have' ज़रूरी।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I am' और 'I have' — हर वाक्य की रीढ़।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I am happy (अंग्रेज़ी में)', correct: ['I am happy', 'I am happy.', "I'm happy", "I'm happy.", 'i am happy.'] },
      { prompt: 'You have a friend (अंग्रेज़ी में)', correct: ['You have a friend', 'You have a friend.', 'you have a friend.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज पाँच बार 'I am' और 'I have' use करें — ज़ोर से। 'I am hungry', 'I have time', 'I am tired', 'I have a phone', 'I am here'। 'I' हमेशा रहे।",
    rwenSignoff: "Module 8 शुरू — verb backbone। कल फिर।",
  },

  phase8: {
    scenario: "You met someone at a coffee shop in Bangalore. First conversation — they want to know about you. Use 'I am' and 'I have' five times naturally.",
    rwenRole: "Tom, 32, working on his laptop, friendly. Asks about your life, work, family.",
    successCriteria: "User uses 'I am' and 'I have' at least 5 times together — e.g., 'I am from India', 'I have a sister', 'I am tired', 'I have a job', 'I am happy'. No sentences without 'I'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
