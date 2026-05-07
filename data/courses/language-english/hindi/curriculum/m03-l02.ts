import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — आपकी उम्र क्या है?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "हिंदी में 'आपकी उम्र क्या है?' सीधा सवाल है। अंग्रेज़ी में 'How old are you?' पूछा जाता है — पर हर जगह नहीं। Form भरते समय, doctor के पास, या US grad school orientation पर — जवाब देना आना चाहिए।",
    culturalNote: "अंग्रेज़ी में 'I'm 27' काफ़ी है — 'years old' हर बार ज़रूरी नहीं। एक बड़ी ग़लती से बचो: हिंदी में 'मेरी उम्र 27 साल है' सही है, पर अंग्रेज़ी में 'I have 27 years' ग़लत है — हमेशा 'I am' लगाओ। बड़े लोग अक्सर 'I'm in my thirties' बोल देते हैं — विनम्रता का तरीक़ा।",
  },

  chunks: [
    {
      id: 'how_old_are_you',
      target: 'How old are you?',
      native: 'आपकी उम्र क्या है?',
      literal: 'How old are you?',
      emoji: '🎂',
      phonetic: 'हाउ-ओल्ड-आर-यू',
      audioRef: null,
    },
    {
      id: 'im_x_years_old',
      target: "I'm X years old",
      native: 'मैं X साल का/की हूँ',
      literal: 'I-am X years old',
      emoji: '🔢',
      phonetic: 'आयम-एक्स-यीयर्ज़-ओल्ड',
      audioRef: null,
    },
    {
      id: 'twenty_seven',
      target: 'Twenty-seven',
      native: 'सत्ताईस',
      literal: 'Twenty-seven',
      emoji: '2️⃣7️⃣',
      phonetic: 'ट्वेन्टी-सेवन',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers in age',
    explanation: "उम्र का जवाब 'I'm' से शुरू होता है, फिर number। 'years old' लगाना optional है — दोनों ठीक हैं। ज़रूरी numbers: twenty (20), twenty-five (25), twenty-seven (27), thirty (30), forty (40)। हिंदी की तरह 'I have' मत लगाना — 'I am' ही सही है।",
    examples: [
      { target: "I'm 27",                native: 'मैं सत्ताईस साल का हूँ' },
      { target: "I'm 30 years old",      native: 'मैं तीस साल का/की हूँ' },
      { target: "I'm twenty-one",        native: 'मैं इक्कीस साल का/की हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी number और अंक मिलाओ',
      pairs: [
        { left: 'Twenty',         right: '20' },
        { left: 'Twenty-seven',   right: '27' },
        { left: 'Thirty',          right: '30' },
        { left: 'Forty',           right: '40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'आपकी उम्र क्या है?',
      correct: ['How old are you?', 'how old are you?', 'How old are you'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो (number अंग्रेज़ी में)',
      prompt: 'मैं सत्ताईस साल का हूँ',
      correct: ["I'm 27", "I am 27", "I'm twenty-seven", "I am twenty-seven", "I'm 27 years old", "I am 27 years old"],
    },
    {
      type: 'fill_blank',
      instruction: 'जवाब पूरा करो',
      sentence: "I'm thirty years ____.",
      options: ['old', 'olds', 'older'],
      correct: 'old',
      context: 'उम्र का सवाल पूछा गया है।',
    },
    {
      type: 'build_sentence',
      instruction: 'उम्र का जवाब बनाओ',
      words: ["I'm", '27', 'years', 'old'],
      correct: ["I'm", '27', 'years', 'old'],
      translation: 'मैं सत्ताईस साल का हूँ',
    },
    {
      type: 'build_sentence',
      instruction: 'सवाल बनाओ',
      words: ['How', 'old', 'are', 'you'],
      correct: ['How', 'old', 'are', 'you'],
      translation: 'आपकी उम्र क्या है?',
    },
  ],

  rwenDialogue: {
    intro: "तुम US में grad school orientation में हो। एक admin staff तुम्हारा student ID form भर रही है।",
    lines: [
      { speaker: 'npc', target: "And how old are you?", native: 'और आपकी उम्र क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm 27 years old.",     native: 'मैं सत्ताईस साल का हूँ।',  correct: true,  feedback: "बढ़िया — पूरा वाक्य, बिना हिचकिचाहट के।" },
          { target: "27.",                    native: '27।',                       correct: false, feedback: "Form भरते समय आम तौर पर पूरा वाक्य चलता है — 'I'm' लगा दो।" },
          { target: "I have 27 years.",       native: 'मेरी उम्र सत्ताईस साल है।', correct: false, feedback: "हिंदी से सीधा अनुवाद हो गया। अंग्रेज़ी में 'I am' लगाते हैं, 'I have' नहीं।" },
        ],
      },
      { speaker: 'npc', target: "Thank you. That's all we need.", native: 'धन्यवाद। बस इतना ही चाहिए था।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! तुमने 'I have' का जाल नहीं फँसा — यही हिंदी और अंग्रेज़ी का सबसे बड़ा फ़र्क़ है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: "आपकी उम्र क्या है? (in English)",       correct: ['How old are you?', 'how old are you?', 'How old are you'] },
      { prompt: "मैं तीस साल का हूँ (in English)",        correct: ["I'm 30", "I am 30", "I'm thirty", "I am thirty", "I'm 30 years old", "I am 30 years old", "I'm thirty years old"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज एक form भरो (असली या काल्पनिक) और अपनी उम्र अंग्रेज़ी में लिखो: 'I'm ___ years old.' किसी से अंग्रेज़ी में पूछो भी — 'How old are you?'",
    rwenSignoff: "बहुत अच्छे। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're at the front desk of a US university clinic during your first week as a grad student. The receptionist asks the registration questions in English and types your answers.",
    rwenRole: "Lisa, 50, a no-nonsense but kind clinic receptionist. Asks short, direct questions and confirms each answer.",
    successCriteria: "User answers the age question with a full 'I'm X years old' (or 'I'm X') sentence, uses 'am' (not 'have'), and pronounces the number clearly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
