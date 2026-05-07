import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — मैं हूँ...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! आज हम अंग्रेज़ी में अपना परिचय देना सीखेंगे। सबसे ज़रूरी शब्द है 'I am' — या इसका छोटा रूप 'I'm'। यही से नाम, काम और शहर बताना शुरू होता है।",
    culturalNote: "हिंदी में 'मैं इंजीनियर हूँ' कह देते हैं — 'हूँ' अंत में आता है। अंग्रेज़ी में 'am' नाम या काम से पहले आता है: 'I am an engineer'। 'am' को कभी मत छोड़ना — 'I engineer' सुनने में अधूरा लगता है। और हाँ — interview या visa form पर अपना पूरा नाम (पहला + पिता का + family name) ही लिखें।",
  },

  chunks: [
    {
      id: 'i_am',
      target: 'I am',
      native: 'मैं हूँ',
      literal: 'I am',
      emoji: '🙋',
      phonetic: 'आय-ऐम',
      audioRef: null,
    },
    {
      id: 'im_an_engineer',
      target: "I'm an engineer",
      native: 'मैं इंजीनियर हूँ',
      literal: 'I-am an engineer',
      emoji: '💻',
      phonetic: 'आयम-अन-एन-जि-नीयर',
      audioRef: null,
    },
    {
      id: 'im_from_india',
      target: "I'm from India",
      native: 'मैं भारत से हूँ',
      literal: 'I-am from India',
      emoji: '🇮🇳',
      phonetic: 'आयम-फ्रॉम-इन-डिया',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb "to be" — I am / I\'m',
    explanation: "अंग्रेज़ी में 'am' सिर्फ़ 'I' के साथ ही आता है। 'I am' को छोटा करके 'I'm' कह सकते हैं — दोनों सही हैं। नाम, काम, देश या स्थिति बताने वाले हर वाक्य की शुरुआत 'I am' या 'I'm' से होती है।",
    examples: [
      { target: "I am Priya",            native: 'मैं प्रिया हूँ' },
      { target: "I'm an engineer",       native: 'मैं इंजीनियर हूँ' },
      { target: "I'm from India",        native: 'मैं भारत से हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाओ',
      pairs: [
        { left: 'I am',                right: 'मैं हूँ' },
        { left: "I'm an engineer",     right: 'मैं इंजीनियर हूँ' },
        { left: "I'm from India",      right: 'मैं भारत से हूँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं इंजीनियर हूँ',
      correct: ["I'm an engineer", "I am an engineer", "i'm an engineer", "i am an engineer"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं भारत से हूँ',
      correct: ["I'm from India", "I am from India", "i'm from India", "i am from India"],
    },
    {
      type: 'fill_blank',
      instruction: "'I'm' या 'I am' से पूरा करो",
      sentence: "____ from Mumbai.",
      options: ["I'm", 'I the', 'Am I'],
      correct: "I'm",
      context: 'किसी नए व्यक्ति से अपना परिचय दे रहे हो।',
    },
    {
      type: 'build_sentence',
      instruction: 'परिचय का वाक्य बनाओ',
      words: ["I'm", 'an', 'engineer'],
      correct: ["I'm", 'an', 'engineer'],
      translation: 'मैं इंजीनियर हूँ',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही विकल्प चुनो',
      question: "मैं प्रिया हूँ। अंग्रेज़ी में सही वाक्य कौन-सा है?",
      options: [
        { text: "I am Priya.",   correct: true },
        { text: "Me Priya.",     correct: false },
        { text: "I Priya.",      correct: false },
      ],
      explanation: "अंग्रेज़ी में 'I' और नाम के बीच 'am' ज़रूरी है। 'I Priya' अधूरा है।",
    },
  ],

  rwenDialogue: {
    intro: "तुम Bengaluru के एक BPO के interview में पहुँचे हो। recruiter तुमसे अपना परिचय अंग्रेज़ी में देने को कहती है।",
    lines: [
      { speaker: 'npc', target: "Welcome! Please tell us about yourself.", native: 'स्वागत है! अपने बारे में कुछ बताइए।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm Priya. I'm an engineer from Pune.", native: 'नमस्ते, मैं प्रिया हूँ। मैं पुणे से इंजीनियर हूँ।', correct: true,  feedback: "बहुत बढ़िया — एक ही वाक्य में नाम, काम और शहर तीनों आ गए।" },
          { target: "Priya. Engineer. Pune.",                    native: 'प्रिया। इंजीनियर। पुणे।',                          correct: false, feedback: "सब जानकारी है, पर 'I'm' के बिना यह list जैसी लगती है। पूरा वाक्य बेहतर है।" },
          { target: "I Priya from Pune.",                        native: 'I प्रिया Pune से।',                                 correct: false, feedback: "'am' छूट गया — अंग्रेज़ी में 'I' के बाद 'am' लगाना ज़रूरी है।" },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you, Priya.", native: 'आपसे मिलकर अच्छा लगा, प्रिया।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! तुमने नाम, काम और शहर — तीनों चीज़ें 'I'm' से जोड़ीं। यही अंग्रेज़ी की पहली पहचान है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: "मैं इंजीनियर हूँ (in English)",   correct: ["I'm an engineer", "I am an engineer", "i'm an engineer", "i am an engineer"] },
      { prompt: "मैं भारत से हूँ (in English)",     correct: ["I'm from India", "I am from India", "i'm from India", "i am from India"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज तीन वाक्य 'I'm ...' से बोलो — चाहे आईने के सामने ही क्यों न हो: 'I'm Priya.' / 'I'm an engineer.' / 'I'm from India.'",
    rwenSignoff: "अच्छी शुरुआत हुई। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're at a BPO interview in Bengaluru. The recruiter opens with 'Tell me about yourself' and expects a one- or two-sentence English introduction before moving on.",
    rwenRole: "Anjali, 32, the recruiter. Warm but assessing. Asks one gentle follow-up after your introduction.",
    successCriteria: "User produces at least two 'I'm ...' sentences (name + role/origin) and answers Anjali's follow-up without dropping the verb 'am'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
