import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Months & Seasons — महीने और मौसम',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "महीने: January, February, March... December। मौसम English में चार: spring, summer, autumn, winter। पर भारत के मौसम अलग — गर्मी, मानसून, सर्दी।",
    culturalNote: "हिंदी कैलेंडर के दो हैं — Gregorian (जनवरी-दिसंबर) और हिंदू पंचांग (चैत्र, वैशाख...)। English में सिर्फ़ Roman/Gregorian: January (Janus से), July (Julius Caesar से)। India में मौसम ख़ास हैं: 'monsoon' (मानसून) दुनिया के लिए जादुई शब्द है — June से September। US/UK में चार seasons हैं, India में तीन या चार बारी आते हैं — गर्मी, मानसून, सर्दी, और हल्की spring। Foreign दोस्त को कहो: 'In India, June to September is monsoon — it rains every day.' वो impress हो जाएगा।",
  },

  chunks: [
    {
      id: 'first_months',
      target: 'January, February, March, April',
      native: 'जनवरी, फ़रवरी, मार्च, अप्रैल',
      literal: 'Jan, Feb, March, April',
      emoji: '🗓️',
      phonetic: 'JAN-yoo-eh-ree, FEB-roo-eh-ree, march, AY-pril',
      audioRef: null,
    },
    {
      id: 'rainy_season',
      target: 'Rainy season',
      native: 'बरसात / मानसून',
      literal: 'Barsaat / Monsoon',
      emoji: '🌧️',
      phonetic: 'RAY-nee-SEE-zn',
      audioRef: null,
    },
    {
      id: 'summer_winter',
      target: 'Summer / Winter',
      native: 'गर्मी / सर्दी',
      literal: 'Garmi / Sardi',
      emoji: '☀️❄️',
      phonetic: 'SUM-er / WIN-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Calendar — months and seasons',
    explanation: "महीनों के साथ 'in': 'in January', 'in March'। मौसम के साथ भी 'in': 'in summer', 'in winter'। Specific date के लिए 'on': 'on January 5th'। Months Capital से ('July', 'july' नहीं)। Seasons capital नहीं (sentence start को छोड़कर)।",
    examples: [
      { target: 'My birthday is in May',          native: 'मेरा जन्मदिन मई में है' },
      { target: 'It rains in monsoon in India',    native: 'भारत में मानसून में बारिश होती है' },
      { target: 'In December, it is cold in Delhi', native: 'दिसंबर में दिल्ली में ठंड होती है' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'महीने और मौसम मिलाएँ',
      pairs: [
        { left: 'January',     right: 'जनवरी' },
        { left: 'July',        right: 'जुलाई' },
        { left: 'Summer',      right: 'गर्मी' },
        { left: 'Rainy season', right: 'बरसात / मानसून' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरा जन्मदिन मार्च में है',
      correct: ['My birthday is in March', 'My birthday is in March.', 'My birthday is March'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही preposition चुनें',
      sentence: 'My birthday is ____ October.',
      options: ['on', 'in', 'at'],
      correct: 'in',
      context: "महीनों के लिए 'in': 'in October'। 'On' specific date के लिए: 'on October 5th'।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — भारत में गर्मी कब आती है',
      words: ['summer', 'In', 'is', 'May.', 'India,', 'our'],
      correct: ['In', 'India,', 'our', 'summer', 'is', 'May.'],
      translation: 'भारत में हमारी गर्मी मई में है।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'जुलाई में मानसून आता है',
      correct: ['It rains in July', 'It rains in July.', 'In July it rains', 'The monsoon comes in July'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — भारत के मौसम बता रहे हैं',
      prompt: 'भारत में बरसात और सर्दी का मौसम है',
      correct: ['In India we have a rainy season and a winter season', 'India has a rainy season and a dry season', 'In India we have monsoon and winter.', 'India has a monsoon season and a winter season.'],
    },
  ],

  rwenDialogue: {
    intro: 'Mumbai International Festival में हैं। US से आए नए दोस्त ने आपका जन्मदिन का महीना पूछा।',
    lines: [
      { speaker: 'npc', target: "When's your birthday?", native: 'आपका जन्मदिन कब है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's in October.",                              native: 'अक्टूबर में।',                              correct: true,  feedback: "बढ़िया — 'in October' से month साफ़ बिना specific date।" },
          { target: "Birthday October.",                                native: 'Birthday अक्टूबर।',                                correct: false, feedback: "'in' और 'is' छूटे — \"It's in October\" करें।" },
          { target: "On October.",                                      native: 'अक्टूबर पर।',                                       correct: false, feedback: "'On' specific date के लिए (on October 5th)। Just month के लिए 'in October'।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'In' + month — एक चीज़ बता दी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'In December (अंग्रेज़ी में)', correct: ['In December', 'in December'] },
      { prompt: 'Rainy season / monsoon (अंग्रेज़ी में)', correct: ['Rainy season', 'rainy season', 'Monsoon', 'monsoon', 'Wet season', 'wet season'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: 'दिल में लिखें: "My birthday is in ___." Month भरें — और आज तीन बार दोस्त को बोलें।',
    rwenSignoff: 'महीने ज़िंदगी के बड़े events बताते हैं — जन्म, परिवार, मौसम। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You're at an English-language community event in Bangalore and people are sharing birth months and zodiac signs. Tell people your birth month, ask theirs, and explain how Indian seasons differ from northern hemisphere ones — especially monsoon.",
    rwenRole: "Emma, 28, an Australian volunteer who is curious about Indian seasons and monsoon. She'll share her own birth month (March, which is autumn for her in Australia).",
    successCriteria: "User states their birth month using 'in' + Month (capitalised), asks Emma's birth month, and mentions at least one fact about Indian seasons (e.g., 'our monsoon is June to September' or 'summer is hot from April to June').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
