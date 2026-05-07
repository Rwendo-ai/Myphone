import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Describing yourself — अपने बारे में बताना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "तुम कैसे इंसान हो? मिलनसार? थोड़े शर्मीले? सीखने के शौक़ीन? अंग्रेज़ी में 'I'm friendly', 'I'm shy sometimes', 'I love learning' — यही adjectives खुद को साफ़ बताने का तरीक़ा हैं।",
    culturalNote: "हिंदी संस्कृति में अपनी तारीफ़ ख़ुद करना थोड़ा अटपटा लगता है — विनम्रता आती है। पर अंग्रेज़ी interview में, US grad school admission essay में, या LinkedIn पर — 'I'm hardworking', 'I'm a quick learner' कहना ज़रूरी है। यह घमंड नहीं, खुली बातचीत की रीति है। फिर भी 'I'm shy sometimes' जैसे 'sometimes' से नरम कर देना संतुलन रखता है।",
  },

  chunks: [
    {
      id: 'im_friendly',
      target: "I'm friendly",
      native: 'मैं मिलनसार हूँ',
      literal: 'I-am friendly',
      emoji: '😊',
      phonetic: 'आयम-फ्रेन्ड-ली',
      audioRef: null,
    },
    {
      id: 'im_shy_sometimes',
      target: "I'm shy sometimes",
      native: 'कभी-कभी मैं शर्मीला हो जाता हूँ',
      literal: 'I-am shy sometimes',
      emoji: '🙈',
      phonetic: 'आयम-शाय-सम-टाइम्ज़',
      audioRef: null,
    },
    {
      id: 'i_love_learning',
      target: 'I love learning',
      native: 'मुझे सीखना बहुत पसंद है',
      literal: 'I love learning',
      emoji: '📖',
      phonetic: 'आय-लव-लर्न-इंग',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjectives for self',
    explanation: "'I'm' के बाद adjective: friendly (मिलनसार), shy (शर्मीला), curious (जिज्ञासु), hardworking (मेहनती), patient (धैर्यवान)। 'sometimes' या 'always' लगाने से वाक्य नरम होता है: 'I'm shy sometimes' — पूरी तरह शर्मीला नहीं, बस कभी-कभी।",
    examples: [
      { target: "I'm friendly",                native: 'मैं मिलनसार हूँ' },
      { target: "I'm patient",                  native: 'मैं धैर्यवान हूँ' },
      { target: "I'm curious by nature",         native: 'मैं स्वभाव से जिज्ञासु हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Adjective मिलाओ',
      pairs: [
        { left: 'Friendly',     right: 'मिलनसार' },
        { left: 'Shy',          right: 'शर्मीला' },
        { left: 'Curious',      right: 'जिज्ञासु' },
        { left: 'Hardworking',   right: 'मेहनती' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं मिलनसार हूँ',
      correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मुझे सीखना बहुत पसंद है',
      correct: ['I love learning', 'i love learning', 'I love to learn', 'i love to learn'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही शब्द चुनो',
      sentence: "I'm ____ sometimes.",
      options: ['shy', 'shies', 'shyly'],
      correct: 'shy',
      context: "'I'm' के बाद adjective आता है — adverb नहीं।",
    },
    {
      type: 'build_sentence',
      instruction: 'अपने बारे में वाक्य बनाओ',
      words: ["I'm", 'friendly', 'and', 'patient'],
      correct: ["I'm", 'friendly', 'and', 'patient'],
      translation: 'मैं मिलनसार और धैर्यवान हूँ',
    },
    {
      type: 'build_sentence',
      instruction: 'सीखने का वाक्य बनाओ',
      words: ['I', 'love', 'learning'],
      correct: ['I', 'love', 'learning'],
      translation: 'मुझे सीखना बहुत पसंद है',
    },
  ],

  rwenDialogue: {
    intro: "तुम Hyderabad के एक IT company में job interview में हो। panel का आख़िरी सवाल आ रहा है।",
    lines: [
      { speaker: 'npc', target: "Describe yourself in three words.", native: 'अपने बारे में तीन शब्दों में बताओ।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm hardworking, friendly, and curious.",   native: 'मैं मेहनती, मिलनसार, और जिज्ञासु हूँ।',          correct: true,  feedback: "बढ़िया — तीनों adjectives एक साफ़ वाक्य में।" },
          { target: "Hardworking. Friendly. Curious.",            native: 'मेहनती। मिलनसार। जिज्ञासु।',                       correct: false, feedback: "शब्द ठीक हैं पर वाक्य नहीं — 'I'm' लगाओ।" },
          { target: "I am very good.",                            native: 'मैं बहुत अच्छा हूँ।',                              correct: false, feedback: "Interview में 'very good' अस्पष्ट है — चुनिंदा adjectives बेहतर हैं।" },
        ],
      },
      { speaker: 'npc', target: "Lovely. Tell me about a time you were curious.", native: 'अच्छा। जिज्ञासा वाला कोई एक उदाहरण दो।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! अंग्रेज़ी में अपनी तारीफ़ करना सीख गए — यह घमंड नहीं, ज़रूरी रीति है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'मैं मिलनसार हूँ (in English)',                  correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"] },
      { prompt: 'कभी-कभी मैं शर्मीला हो जाता हूँ (in English)',  correct: ["I'm shy sometimes", "I am shy sometimes", "i'm shy sometimes", "i am shy sometimes"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने लिए तीन adjectives चुनो — और अंग्रेज़ी में बोलो: 'I'm ___, ___, and ___'। interview में 'Describe yourself' का जवाब इसी तरह दिया जाता है।",
    rwenSignoff: "बहुत अच्छे। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're in the final five minutes of an English-language job interview at a Hyderabad IT company. The interviewer says, 'Last question — describe yourself in three words.'",
    rwenRole: "Mr. Reddy, 45, the hiring manager. Polite but probing. After your three words, asks for one example of one of them.",
    successCriteria: "User produces three adjectives in an 'I'm X, Y, and Z' sentence (full sentence, not bare list), then backs one up with a one-sentence example when probed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
