import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Married? Children? — शादी हुई? बच्चे हैं?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "भारत में 'शादी हुई?' और 'बच्चे कितने?' आम सवाल हैं — रिश्तेदार, पड़ोसी, सब पूछते हैं। अंग्रेज़ी में ये सवाल कम पूछे जाते हैं, पर आते ज़रूर हैं — visa interview, family gatherings, या ससुराल वालों से पहली बार मिलते समय।",
    culturalNote: "'Married' पुरुष-स्त्री दोनों के लिए एक ही शब्द है। बच्चों की बात अंग्रेज़ी में 'I have two children' से होती है — पर 'I'm married' में 'have' नहीं, 'am' लगता है। और 'I'm single' का मतलब है 'अभी तक शादी नहीं हुई' — यह बुरी बात नहीं, साधारण जानकारी है।",
  },

  chunks: [
    {
      id: 'are_you_married',
      target: 'Are you married?',
      native: 'क्या आपकी शादी हुई है?',
      literal: 'Are you married?',
      emoji: '💍',
      phonetic: 'आर-यू-मै-रिड',
      audioRef: null,
    },
    {
      id: 'i_have_two_children',
      target: 'I have two children',
      native: 'मेरे दो बच्चे हैं',
      literal: 'I have two children',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'आय-हैव-टू-चिल्ड्रन',
      audioRef: null,
    },
    {
      id: 'im_single',
      target: "I'm single",
      native: 'मेरी अभी शादी नहीं हुई',
      literal: 'I-am single',
      emoji: '🧍',
      phonetic: 'आयम-सिंगल',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family status questions',
    explanation: "परिवार के सवाल 'Are you ...?' या 'Do you have ...?' से शुरू होते हैं। जवाब: 'Yes, I am' / 'No, I'm not' या 'Yes, I do' / 'No, I don't'। ध्यान दो — शादी के साथ 'I am married' (have नहीं), बच्चों के साथ 'I have' (am नहीं)।",
    examples: [
      { target: 'Are you married?',          native: 'क्या आपकी शादी हुई है?' },
      { target: 'Do you have children?',     native: 'क्या आपके बच्चे हैं?' },
      { target: "I'm single",                 native: 'मेरी अभी शादी नहीं हुई' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'सवाल और जवाब मिलाओ',
      pairs: [
        { left: 'Are you married?',     right: 'क्या आपकी शादी हुई है?' },
        { left: 'I have two children',  right: 'मेरे दो बच्चे हैं' },
        { left: "I'm single",            right: 'मेरी अभी शादी नहीं हुई' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मेरे दो बच्चे हैं',
      correct: ['I have two children', 'i have two children', 'I have 2 children'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मेरी अभी शादी नहीं हुई',
      correct: ["I'm single", "I am single", "i'm single", "i am single"],
    },
    {
      type: 'fill_blank',
      instruction: 'सवाल पूरा करो',
      sentence: "____ you married?",
      options: ['Are', 'Is', 'Do'],
      correct: 'Are',
      context: 'किसी से उसकी शादी के बारे में पूछ रहे हो।',
    },
    {
      type: 'build_sentence',
      instruction: 'परिवार का जवाब बनाओ',
      words: ['I', 'have', 'two', 'children'],
      correct: ['I', 'have', 'two', 'children'],
      translation: 'मेरे दो बच्चे हैं',
    },
    {
      type: 'build_sentence',
      instruction: 'सवाल बनाओ',
      words: ['Are', 'you', 'married'],
      correct: ['Are', 'you', 'married'],
      translation: 'क्या आपकी शादी हुई है?',
    },
  ],

  rwenDialogue: {
    intro: "तुम अपनी मंगेतर के घर पहली बार मिलने पहुँचे हो। उसके NRI चाचाजी अंग्रेज़ी में बात कर रहे हैं।",
    lines: [
      { speaker: 'npc', target: "So, are you married yet? Any children?", native: 'तो, अभी शादी हुई या नहीं? बच्चे?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Not yet — I'm engaged. We don't have children.", native: 'अभी नहीं — मेरी सगाई हुई है। बच्चे नहीं हैं।',  correct: true,  feedback: "बढ़िया — सच्चाई से, साफ़ वाक्य में दोनों बातें कह दीं।" },
          { target: "No, two.",                                          native: 'नहीं, दो।',                                       correct: false, feedback: "बहुत छोटा — पूरा वाक्य बनाओ ताकि बात साफ़ हो।" },
          { target: "I have engaged.",                                   native: 'मेरी सगाई हुई है।',                              correct: false, feedback: "अंग्रेज़ी में 'I'm engaged' / 'I'm married' कहते हैं — 'I have' नहीं।" },
        ],
      },
      { speaker: 'npc', target: "Lovely. When's the wedding?", native: 'बहुत बढ़िया। शादी कब है?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'I have married' का जाल तुमने पार कर लिया — 'I'm married/engaged' ही सही है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'क्या आपकी शादी हुई है? (in English)',  correct: ['Are you married?', 'are you married?', 'Are you married'] },
      { prompt: 'मेरे दो बच्चे हैं (in English)',         correct: ['I have two children', 'i have two children', 'I have 2 children'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने परिवार के बारे में दो वाक्य अंग्रेज़ी में बोलो: स्थिति ('I'm single' / 'I'm married') और बच्चे ('I have ___ children' / 'I don't have children yet')।",
    rwenSignoff: "बहुत अच्छे। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're at the gate of your fiancée's family home in Delhi, meeting her English-speaking NRI uncle for the first time. He's warm, curious, and starts asking polite family questions.",
    rwenRole: "Mr. Khanna, 65, a retired teacher who's lived in Canada for 30 years. Polite, asks gently about family, follows up with one detail.",
    successCriteria: "User answers truthfully (or with a chosen safe answer) about marital status using 'I'm married/single/engaged' (not 'I have married'), and gives at least one detail about family.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
