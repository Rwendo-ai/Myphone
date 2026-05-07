import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Where I live — मैं कहाँ रहता हूँ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "आज सीखेंगे — कहाँ रहते हो और कहाँ बड़े हुए। 'I live in ...' अभी के लिए, 'I grew up in ...' पहले के लिए। और 'for ten years' से समय बताते हैं — 'दस साल से'।",
    culturalNote: "अंग्रेज़ी में 'I live in Mumbai' सही है — 'I live at Mumbai' ग़लत। 'in' शहरों और देशों के साथ आता है। 'Grew up' का मतलब है 'बड़ा हुआ' — past tense। हिंदी में हम 'मेरा पैतृक गाँव' कहते हैं — अंग्रेज़ी में 'I grew up in [गाँव/शहर]' इसका natural अनुवाद है।",
  },

  chunks: [
    {
      id: 'i_live_in_mumbai',
      target: 'I live in Mumbai',
      native: 'मैं मुंबई में रहता हूँ',
      literal: 'I live in Mumbai',
      emoji: '🏘️',
      phonetic: 'आय-लिव-इन-मुम्बई',
      audioRef: null,
    },
    {
      id: 'i_grew_up_in',
      target: 'I grew up in ...',
      native: 'मैं ... में बड़ा हुआ',
      literal: 'I grew up in ...',
      emoji: '🌱',
      phonetic: 'आय-ग्रू-अप-इन',
      audioRef: null,
    },
    {
      id: 'for_ten_years',
      target: 'For ten years',
      native: 'दस साल से',
      literal: 'For ten years',
      emoji: '📅',
      phonetic: 'फॉर-टेन-यीयर्ज़',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"For" + duration',
    explanation: "समय का अंतराल बताने के लिए 'for' + number + समय: 'for ten years' (दस साल), 'for two months' (दो महीने)। पूरा वाक्य: 'I've lived in Mumbai for ten years' = 'मैं दस साल से मुंबई में रह रहा हूँ'। शुरुआत में आसान रूप: 'I live in Mumbai. For ten years now.'",
    examples: [
      { target: 'I live in Mumbai',          native: 'मैं मुंबई में रहता हूँ' },
      { target: 'For ten years',              native: 'दस साल से' },
      { target: 'I grew up in Lucknow',       native: 'मैं लखनऊ में बड़ा हुआ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'घर-शहर के वाक्य मिलाओ',
      pairs: [
        { left: 'I live in Mumbai',     right: 'मैं मुंबई में रहता हूँ' },
        { left: 'I grew up in Lucknow', right: 'मैं लखनऊ में बड़ा हुआ' },
        { left: 'For ten years',         right: 'दस साल से' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं मुंबई में रहता हूँ',
      correct: ['I live in Mumbai', 'i live in Mumbai', 'I live in mumbai'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'दस साल से',
      correct: ['For ten years', 'for ten years', 'For 10 years', 'for 10 years'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही preposition चुनो',
      sentence: "I live ____ Mumbai.",
      options: ['in', 'at', 'on'],
      correct: 'in',
      context: "शहरों और देशों के साथ 'in' लगता है।",
    },
    {
      type: 'build_sentence',
      instruction: 'जगह का वाक्य बनाओ',
      words: ['I', 'live', 'in', 'Mumbai'],
      correct: ['I', 'live', 'in', 'Mumbai'],
      translation: 'मैं मुंबई में रहता हूँ',
    },
    {
      type: 'build_sentence',
      instruction: 'समय का वाक्य बनाओ',
      words: ['For', 'ten', 'years'],
      correct: ['For', 'ten', 'years'],
      translation: 'दस साल से',
    },
  ],

  rwenDialogue: {
    intro: "तुम Bandra के एक café में बैठे हो। पास की table पर एक British tourist तुमसे बात शुरू करती है।",
    lines: [
      { speaker: 'npc', target: "So, are you from here? How long have you lived in Mumbai?", native: 'तो, आप यहीं से हैं? मुंबई में कब से हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I live in Mumbai, but I grew up in Lucknow. For ten years now.", native: 'मैं मुंबई में रहता हूँ, पर बड़ा लखनऊ में हुआ। दस साल हो गए।', correct: true,  feedback: "बढ़िया — अभी, पहले, और कब से — तीनों बातें एक साथ कह दीं।" },
          { target: "Mumbai ten years.",                                              native: 'मुंबई दस साल।',                                              correct: false, feedback: "जानकारी है पर 'I live' और 'for' दोनों नहीं — पूरा वाक्य चाहिए।" },
          { target: "I live at Mumbai.",                                              native: 'मैं मुंबई पर रहता हूँ।',                                       correct: false, feedback: "'in Mumbai' सही है — 'at' नहीं। बड़े शहरों के साथ हमेशा 'in'।" },
        ],
      },
      { speaker: 'npc', target: "Lucknow is beautiful. Do you go back often?", native: 'लखनऊ बहुत सुंदर है। वापस जाते हो?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'in' शहर के लिए और 'for' समय के लिए — दोनों सही जगह आए।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'मैं मुंबई में रहता हूँ (in English)',  correct: ['I live in Mumbai', 'i live in Mumbai', 'I live in mumbai'] },
      { prompt: 'मैं लखनऊ में बड़ा हुआ (in English)',    correct: ['I grew up in Lucknow', 'i grew up in Lucknow', 'I grew up in lucknow'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "तीन वाक्य बोलो: 'I live in ___', 'I grew up in ___', 'For ___ years'। ध्यान दो — 'in' लगाओ, 'at' नहीं।",
    rwenSignoff: "अच्छे जा रहे हो। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "A curious tourist at a Bandra café in Mumbai strikes up a chat in English. They want to know if you're a local and what life in Mumbai is like.",
    rwenRole: "Hannah, 32, a backpacker from the UK on day three of her India trip. Friendly, asks where you live, where you grew up, how long, what's changed.",
    successCriteria: "User says 'I live in [city]' (with 'in', not 'at'), mentions where they grew up using past tense ('I grew up in ...'), and uses 'for' + duration at least once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
