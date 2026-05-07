import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Brothers & Sisters — भाई और बहन',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "हिंदी में हम बड़े-छोटे का फ़र्क़ शब्दों से करते हैं — बड़ा भाई 'भैया', छोटा भाई 'भाई'; बड़ी बहन 'दीदी', छोटी बहन 'बहन'। तमिल में 'अन्ना/तंबी', 'अक्का/थंगाई'। अंग्रेज़ी में सब एक हो जाता है — 'brother', 'sister'। उम्र दिखाने के लिए 'older' या 'younger' लगाना पड़ता है।",
    culturalNote: "हिंदी में 'भैया' सिर्फ़ रिश्ते का नाम नहीं — आदर भी है। आप दीदी का first name नहीं पुकारते। अंग्रेज़ी में बड़े भाई-बहन को सीधे नाम से बुलाते हैं — 'Hi Rahul, hi Priya' — चाहे वो आपसे 10 साल बड़े हों। US/UK में normal है, हमारे लिए शुरू में अजीब लगता है। अगर आप nuance बचाना चाहते हैं, English में 'older brother' या 'elder sister' कहें — तब listener समझता है कि आप कौन-सी पीढ़ी की बात कर रहे हैं।",
  },

  chunks: [
    {
      id: 'brother',
      target: 'Brother',
      native: 'भाई / भैया',
      literal: 'Bhai / Bhaiya — older / younger collapsed',
      emoji: '👦🏽',
      phonetic: 'BRUH-thuh',
      audioRef: null,
    },
    {
      id: 'sister',
      target: 'Sister',
      native: 'बहन / दीदी',
      literal: 'Behen / Didi — younger / older collapsed',
      emoji: '👧🏽',
      phonetic: 'SIS-tuh',
      audioRef: null,
    },
    {
      id: 'two_siblings',
      target: 'I have two siblings.',
      native: 'मेरे दो भाई-बहन हैं।',
      literal: 'Mere do bhai-behen hain',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav too SIB-lings',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sibling nuance — older / younger',
    explanation: "अंग्रेज़ी में 'brother' और 'sister' में उम्र नहीं छुपी होती। उम्र दिखाने के लिए 'older' (बड़ा) या 'younger' (छोटा) पहले लगाएँ — 'older brother' (भैया), 'younger sister' (छोटी बहन)। 'Siblings' एक gender-neutral शब्द है — सभी भाई-बहनों के लिए एक साथ।",
    examples: [
      { target: 'My older brother',     native: 'मेरे भैया' },
      { target: 'My younger sister',    native: 'मेरी छोटी बहन' },
      { target: 'I have two siblings.', native: 'मेरे दो भाई-बहन हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Older brother',  right: 'भैया' },
        { left: 'Younger sister', right: 'छोटी बहन' },
        { left: 'Siblings',       right: 'भाई-बहन' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — भैया के बारे में बताइए',
      prompt: 'मेरे भैया मुंबई में रहते हैं।',
      correct: ['My older brother lives in Mumbai.', 'My older brother lives in Mumbai', 'my older brother lives in Mumbai.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरे तीन भाई-बहन हैं — दो भाई और एक बहन।',
      correct: ['I have three siblings — two brothers and one sister.', 'I have three siblings, two brothers and one sister.', 'I have three siblings: two brothers and one sister.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My younger brother is at school"',
      words: ['younger', 'My', 'is', 'at', 'school.', 'brother'],
      correct: ['My', 'younger', 'brother', 'is', 'at', 'school.'],
      translation: 'मेरा छोटा भाई स्कूल में है',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — बड़ी बहन के बारे में',
      sentence: 'My _____ sister is a teacher in Pune.',
      options: ['older', 'big', 'old'],
      correct: 'older',
      context: "अंग्रेज़ी में 'older' सही है, 'big' नहीं। 'Elder sister' भी चलता है (UK), पर 'older sister' सबसे natural है।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'दोस्त ने पूछा "Do you have any siblings?" — आपके एक बड़े भाई हैं। सबसे natural जवाब?',
      options: [
        { text: "Yes, I have one older brother.",   correct: true },
        { text: "Yes, I have one bhaiya.",           correct: false },
        { text: "Yes, brother of me one.",            correct: false },
      ],
      explanation: "English में 'older brother' सही है। 'Bhaiya' English-only friend नहीं समझेगा — पर अगर आप nuance share करना चाहें तो बाद में explain कर सकते हैं: 'we call him bhaiya'.",
    },
  ],

  rwenDialogue: {
    intro: 'आप London में दोस्त के साथ dinner पर हैं। उसने परिवार के बारे में पूछा।',
    lines: [
      { speaker: 'npc', target: "Tell me about your siblings — do you have brothers, sisters?", native: 'अपने भाई-बहनों के बारे में बताइए — भाई हैं, बहन हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two siblings — an older brother and a younger sister.", native: "मेरे दो भाई-बहन हैं — एक भैया और एक छोटी बहन।", correct: true,  feedback: "बढ़िया — 'older brother' और 'younger sister' से उम्र भी साफ़ हो गई।" },
          { target: "I have brother and sister.",                                    native: 'मेरे भाई और बहन है।',                                       correct: false, feedback: "'a' / 'two' / 'older/younger' छूट गया — वाक्य अधूरा लगता है। Detail जोड़ें।" },
          { target: "Bhaiya aur didi.",                                               native: "भैया और दीदी।",                                              correct: false, feedback: "हिंदी ही रह गई — दोस्त नहीं समझेगा। पूरी English में बोलिए।" },
        ],
      },
      { speaker: 'npc', target: "Oh nice — what do they do?", native: 'अच्छा — वो क्या करते हैं?' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने भैया-दीदी की उम्र की बारीकी English में पकड़ ली।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My older brother (अंग्रेज़ी में)',  correct: ['My older brother', 'my older brother'] },
      { prompt: 'I have two siblings (अंग्रेज़ी में)', correct: ['I have two siblings', 'I have two siblings.', 'i have two siblings'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने सभी भाई-बहनों के बारे में सोचें। Phone notes में English में लिखें: 'I have ___ siblings.' फिर बताएँ कौन बड़ा, कौन छोटा — 'older' या 'younger' से। ज़ोर से पढ़ें।",
    rwenSignoff: "कल — children (बच्चे)।",
  },

  phase8: {
    scenario: "You're at an English-speaking dinner — friends are sharing about their families. When asked, describe your siblings clearly, including whether they're older or younger than you.",
    rwenRole: "Priya, 28, a colleague who studied abroad and is curious about your family. Asks short follow-ups like 'Are you the oldest?' or 'Where do they live?'",
    successCriteria: "User says 'I have [number] siblings' or names brothers/sisters. Uses 'older' or 'younger' at least once to capture the Hindi age nuance. Answers a follow-up question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
