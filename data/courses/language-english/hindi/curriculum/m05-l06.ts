import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — सास-ससुर का रिश्ता',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "सास-ससुर — शादी से जुड़े नए रिश्ते। English में: 'mother-in-law', 'father-in-law'। इन शब्दों के बीच hyphens (-) हैं — मतलब 'शादी के क़ानून से जुड़ा'। हिंदी में हम सास, ससुर, साला, साली, ननद, देवर — सब अलग बोलते हैं।",
    culturalNote: "Indian संस्कृति में सास-ससुर का रिश्ता बहुत भारी है — लड़की के लिए नया घर, माँ-बाप जैसी ज़िम्मेदारी। English में 'mother-in-law' सिर्फ़ एक शब्द — पर भावना वही है। UK में जब आप 'I'm meeting my future mother-in-law next week' कहते हैं, सब समझते हैं nervousness क्या है — दुनिया भर में सास-बहू/दामाद की कहानियाँ same हैं। आप जो आदर हिंदी में आँखों से दिखाते थे, वो English में आवाज़ के लहजे से दिखाएँ।",
  },

  chunks: [
    {
      id: 'mother_in_law',
      target: 'Mother-in-law',
      native: 'सास',
      literal: 'Saas',
      emoji: '👩🏽‍🦳',
      phonetic: 'MUH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'father_in_law',
      target: 'Father-in-law',
      native: 'ससुर',
      literal: 'Sasur',
      emoji: '👨🏽‍🦳',
      phonetic: 'FAH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'spouse',
      target: 'My husband / My wife',
      native: 'मेरे पति / मेरी पत्नी',
      literal: 'Mere pati / Meri patni',
      emoji: '💍',
      phonetic: 'mahy HUZ-bund / mahy WAYF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marriage-family — hyphenated terms',
    explanation: "अंग्रेज़ी में 'in-law' शब्द hyphens से जुड़ा है। Plural में 's' पहले शब्द पर लगता है: 'mothers-in-law', 'sisters-in-law' — 'in-law' पर नहीं। पर 'in-laws' (general — सब ससुराल वाले) group के लिए चलता है: 'I'm visiting my in-laws.'",
    examples: [
      { target: 'My mother-in-law',           native: 'मेरी सास' },
      { target: 'My in-laws live in Lucknow.', native: 'मेरे सास-ससुर लखनऊ में रहते हैं।' },
      { target: 'My husband\'s sister',         native: 'मेरी ननद' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Mother-in-law',  right: 'सास' },
        { left: 'Father-in-law',  right: 'ससुर' },
        { left: 'My husband',     right: 'मेरे पति' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरी पत्नी और मेरी सास साथ काम करती हैं।',
      correct: ['My wife and my mother-in-law work together.', 'My wife and mother-in-law work together.', 'my wife and my mother-in-law work together.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त को बता रहे हैं ससुर से पहली बार मिलना है',
      prompt: 'मैं अगले हफ़्ते पहली बार ससुर से मिलूँगा।',
      correct: ["I'm meeting my father-in-law for the first time next week.", "I will meet my father-in-law for the first time next week.", "I'm meeting my father-in-law next week for the first time."],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My in-laws are very kind"',
      words: ['kind.', 'My', 'are', 'in-laws', 'very'],
      correct: ['My', 'in-laws', 'are', 'very', 'kind.'],
      translation: 'मेरे सास-ससुर बहुत अच्छे हैं',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — in-law का plural',
      sentence: 'My _____ are visiting from Lucknow this weekend.',
      options: ['mother-in-laws', 'mothers-in-law', 'in-laws'],
      correct: 'in-laws',
      context: "'In-laws' पूरे ससुराल परिवार के लिए। Singular में 'mother-in-law'। Plural अकेला 'mother-in-law' का होता तो 'mothers-in-law' (s 'mother' पर, 'in-law' पर नहीं)।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "आप पहली बार होने वाली सास से मिलने जा रहे हैं। दोस्त को English में text क्या भेजेंगे?",
      options: [
        { text: "I'm meeting my mother-in-law tomorrow — I'm a bit nervous.", correct: true },
        { text: "Tomorrow saas of me. Fear inside.",                       correct: false },
        { text: "I have meeting woman of marriage tomorrow scared.",          correct: false },
      ],
      explanation: "'I'm meeting my mother-in-law tomorrow' सही है। 'a bit nervous' जोड़ने से आप real लगते हैं — यही natural English है।",
    },
  ],

  rwenDialogue: {
    intro: "आपने close friend को message भेजा है — पहली बार होने वाले ससुर से मिलने वाले हैं और अपनी feelings share करनी हैं।",
    lines: [
      { speaker: 'npc', target: "How was meeting the in-laws? Tell me everything!", native: 'सास-ससुर से मिलना कैसा रहा? सब बताइए!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It went well — my father-in-law is kind, but my mother-in-law was a bit reserved at first. We talked for two hours.", native: 'अच्छा रहा — ससुर बहुत अच्छे हैं, पर सास शुरू में थोड़ी quiet थीं। हमने दो घंटे बात की।', correct: true, feedback: "बढ़िया — आपने nuance पकड़ा: ससुर और सास अलग थे, और 'a bit reserved' से दिखाया कि पहली मुलाक़ात की स्वाभाविक हिचकिचाहट थी।" },
          { target: "Good. Talked. Done.",                                                                                                  native: 'अच्छा। बात हुई। ख़त्म।',                                                                                              correct: false, feedback: "बहुत छोटा — दोस्त detail चाहती है। 'my mother-in-law was kind...' या 'we talked about...' जोड़ें।" },
          { target: "Sasur ji acche the par saas thodi quiet thi.",                                                                          native: 'ससुर जी अच्छे थे पर सास थोड़ी quiet थीं।',                                                                                  correct: false, feedback: "Hindi-mix — पूरा English में: 'My father-in-law was kind but my mother-in-law was reserved.'" },
        ],
      },
      { speaker: 'npc', target: "That's normal at first — give it time.", native: 'पहली बार में normal है — समय दो।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने सास-ससुर का आदर English में निभाया — 'in-law' शब्द भले flat लगे, आपके बोलने से रिश्ते की गहराई आई।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My mother-in-law (अंग्रेज़ी में)', correct: ['My mother-in-law', 'my mother-in-law'] },
      { prompt: 'My husband (अंग्रेज़ी में)',        correct: ['My husband', 'my husband'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने सास-ससुर के बारे में सोचें (या होने वाले)। English में वाक्य बनाएँ: 'My mother-in-law is...' या 'My father-in-law lives in...' ज़ोर से पढ़ें। अगर आपके नहीं हैं, दोस्त के बारे में लिखें।",
    rwenSignoff: "कल — दोस्त जो परिवार जैसे हैं (friends as family)।",
  },

  phase8: {
    scenario: "You're texting/talking to a close English-speaking friend before or after meeting your future in-laws for the first time. Share how you're feeling and what's on your mind. Be honest — nervous, excited, both.",
    rwenRole: "Lisa, 30, your closest English-speaking friend. Knows you well. Listens with empathy and asks 'How did your husband/wife react?' or 'Did your mother-in-law like the gift you brought?'",
    successCriteria: "User uses 'mother-in-law', 'father-in-law', or 'in-laws' at least once. Uses 'my husband' or 'my wife' (or future tense). Conveys an emotional state ('nervous', 'happy', 'worried'). Doesn't bark single words — full sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
