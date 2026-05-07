import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Languages I speak — मैं जो भाषाएँ बोलता हूँ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "भारत में लगभग हर कोई दो-तीन भाषाएँ बोलता है — Hindi, अपनी mother tongue (Marathi, Tamil, Bengali...), और कुछ English। आज हम अंग्रेज़ी में अपनी भाषाएँ गिनाना सीखेंगे — 'I speak Hindi', 'A little English', 'And some others'।",
    culturalNote: "अंग्रेज़ी में भाषाओं के नाम हमेशा बड़े अक्षर (capital) से लिखे जाते हैं — English, Hindi, Tamil, Marathi। हिंदी में ऐसा नहीं। और 'a little English' का मतलब घमंड या नीचा दिखाना नहीं — यह विनम्रता है, साफ़ बात कि 'मैं सीख रहा हूँ'। यही IT/BPO interview में भी अच्छा लगता है।",
  },

  chunks: [
    {
      id: 'i_speak_hindi',
      target: 'I speak Hindi',
      native: 'मैं हिंदी बोलता हूँ',
      literal: 'I speak Hindi',
      emoji: '🗣️',
      phonetic: 'आय-स्पीक-हिन्दी',
      audioRef: null,
    },
    {
      id: 'a_little_english',
      target: 'A little English',
      native: 'थोड़ी-सी अंग्रेज़ी',
      literal: 'A little English',
      emoji: '🤏',
      phonetic: 'अ-लिट्ल-इंग्लिश',
      audioRef: null,
    },
    {
      id: 'and_some_others',
      target: 'And some others',
      native: 'और कुछ और भाषाएँ',
      literal: 'And some others',
      emoji: '➕',
      phonetic: 'एंड-सम-अदर्ज़',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Listing skills — "I speak ..."',
    explanation: "भाषाओं की list बनाओ: 'I speak [भाषा]' से शुरू। दो भाषाएँ — 'I speak Hindi and English'। कमज़ोर भाषा को विनम्रता से कहो — 'and a little [भाषा]'। 'I speak Hindi, English, and some Tamil' का मतलब है कि Tamil थोड़ी-बहुत आती है।",
    examples: [
      { target: 'I speak Hindi and English',           native: 'मैं हिंदी और अंग्रेज़ी बोलता हूँ' },
      { target: 'I speak Hindi and a little English',  native: 'मैं हिंदी और थोड़ी अंग्रेज़ी बोलता हूँ' },
      { target: 'I speak Hindi, English, and some Marathi', native: 'मैं हिंदी, अंग्रेज़ी, और थोड़ी Marathi बोलता हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'भाषाओं के नाम मिलाओ',
      pairs: [
        { left: 'English',     right: 'अंग्रेज़ी' },
        { left: 'Hindi',       right: 'हिंदी' },
        { left: 'Tamil',       right: 'तमिल' },
        { left: 'Marathi',     right: 'मराठी' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं हिंदी और थोड़ी अंग्रेज़ी बोलता हूँ',
      correct: ['I speak Hindi and a little English', 'i speak Hindi and a little English', 'I speak Hindi and a little english'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'और कुछ और भाषाएँ',
      correct: ['And some others', 'and some others', 'And some others.', 'and some others.'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही शब्द चुनो',
      sentence: "I speak Hindi and ____ English.",
      options: ['a little', 'a small', 'a few'],
      correct: 'a little',
      context: 'थोड़ी-सी अंग्रेज़ी आती है।',
    },
    {
      type: 'build_sentence',
      instruction: 'भाषाओं की list बनाओ',
      words: ['I', 'speak', 'Hindi', 'and', 'English'],
      correct: ['I', 'speak', 'Hindi', 'and', 'English'],
      translation: 'मैं हिंदी और अंग्रेज़ी बोलता हूँ',
    },
    {
      type: 'build_sentence',
      instruction: 'छोटा जवाब बनाओ',
      words: ['A', 'little', 'English'],
      correct: ['A', 'little', 'English'],
      translation: 'थोड़ी-सी अंग्रेज़ी',
    },
  ],

  rwenDialogue: {
    intro: "तुम Singapore में एक tech conference में हो। एक delegate तुम्हारे name badge पर 'India' देखकर बात शुरू करता है।",
    lines: [
      { speaker: 'npc', target: "What languages do you speak?", native: 'आप कौन-सी भाषाएँ बोलते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak Hindi, English, and a little Tamil.", native: 'मैं हिंदी, अंग्रेज़ी, और थोड़ी तमिल बोलता हूँ।', correct: true,  feedback: "बढ़िया — साफ़ list, और 'a little' से विनम्रता भी आ गई।" },
          { target: "Hindi, English, Tamil.",                       native: 'हिंदी, अंग्रेज़ी, तमिल।',                          correct: false, feedback: "नाम तो हैं पर 'I speak' नहीं — पूरा वाक्य बेहतर है।" },
          { target: "I speak hindi and english.",                   native: 'मैं हिंदी और अंग्रेज़ी बोलता हूँ।',               correct: false, feedback: "अंग्रेज़ी में भाषाओं के नाम बड़े अक्षर से — Hindi, English।" },
        ],
      },
      { speaker: 'npc', target: "Wonderful! That's so useful in our team.", native: 'बहुत अच्छा! हमारी team में यह बहुत काम आएगा।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! बड़े अक्षर से नाम लिखे — Hindi, English, Tamil। यह अंग्रेज़ी का छोटा-सा पर ज़रूरी नियम है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'मैं हिंदी बोलता हूँ (in English)',          correct: ['I speak Hindi', 'i speak Hindi', 'I speak hindi'] },
      { prompt: 'थोड़ी-सी अंग्रेज़ी (in English)',            correct: ['A little English', 'a little English', 'A little english'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपनी भाषाओं की list अंग्रेज़ी में बनाओ: 'I speak ___, ___, and a little ___'। ध्यान दो कि नाम बड़े अक्षर से शुरू हों।",
    rwenSignoff: "अच्छे जा रहे हो। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're mingling at a multilingual tech conference in Singapore. Someone notices the 'India' on your name badge and asks, in English, 'What languages do you speak?'.",
    rwenRole: "Wei Ming, 38, a Singaporean researcher attending the conference. Genuinely curious about Indian languages and asks one follow-up.",
    successCriteria: "User lists at least two languages with correct capitalisation in speech, uses 'I speak ...' (not just bare list), and uses 'a little' or 'some' to qualify a weaker language honestly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
