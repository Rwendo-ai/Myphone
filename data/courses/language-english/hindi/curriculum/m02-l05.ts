import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — मुझे समझ नहीं आया",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! जब समझ न आए, तो छुपाइए मत — बता दीजिए। English में: 'I don't understand'. यह एक शब्द आपको कई फँसने वाली situations से बचाता है।",
    culturalNote: "हिन्दी में negation 'नहीं' से बनती है ('समझ नहीं आया')। English में 'don't' (= do + not) है — 'I don't understand'. इसे बोलने में शर्म मत कीजिए — English बोलने वाले समझते हैं कि non-native speaker को confirm करना ज़रूरी है, और अक्सर वो धीरे या साफ़ दोहरा देते हैं। 'Yes-yes' करते रहना ज़्यादा बड़ी समस्या लाता है, खासकर BPO calls में।",
  },

  chunks: [
    {
      id: 'i_dont_understand',
      target: "I don't understand",
      native: 'मुझे समझ नहीं आया',
      literal: 'I do-not understand',
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND',
      audioRef: null,
    },
    {
      id: 'repeat_please',
      target: 'Repeat, please',
      native: 'दोहराइए, कृपया',
      literal: 'Repeat, please',
      emoji: '🔁',
      phonetic: 'ree-PEET-PLEEZ',
      audioRef: null,
    },
    {
      id: 'what_did_you_say',
      target: 'What did you say?',
      native: 'आपने क्या कहा?',
      literal: 'What did you say?',
      emoji: '❓',
      phonetic: 'WHUT-did-yoo-SAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Negation with 'don't'",
    explanation: "English में negation का सबसे आम तरीक़ा 'don't' है, verb से ठीक पहले: 'I don't understand', 'I don't know', 'I don't speak French'. 'Don't' अगले verb को मना कर देता है।",
    examples: [
      { target: "I don't understand.", native: 'मुझे समझ नहीं आया।' },
      { target: "I don't know.",        native: 'मुझे नहीं पता।' },
      { target: "I don't speak fast.",  native: 'मैं तेज़ नहीं बोलता।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: "I don't understand", right: 'मुझे समझ नहीं आया' },
        { left: 'Repeat, please',     right: 'दोहराइए, कृपया' },
        { left: 'What did you say?',   right: 'आपने क्या कहा?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'मुझे समझ नहीं आया',
      correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — आप बता रहे हैं कि समझ नहीं आया',
      sentence: "I ____ understand.",
      options: ["don't", "am not", "do"],
      correct: "don't",
      context: "Negation में verb से पहले 'don't' लगता है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप दोहराने को कह रहे हैं',
      words: ['Can', 'repeat', 'you', 'that'],
      correct: ['Can', 'you', 'repeat', 'that'],
      translation: 'क्या आप वो दोहरा सकते हैं?',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'आपने क्या कहा?',
      correct: ['What did you say?', 'what did you say?', 'What did you say', 'what did you say'],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — धीरे दोहराने को कहिए',
      prompt: 'धीरे दोहराइए, कृपया',
      correct: ['Repeat slowly, please', 'Repeat slowly, please.', 'Please repeat slowly', 'Please, repeat slowly', 'repeat slowly, please'],
    },
  ],

  rwenDialogue: {
    intro: "आप London Heathrow पहुँच गए हैं। Immigration officer तेज़ British accent में पूछते हैं — आपको आधा भी नहीं सुनाई दिया।",
    lines: [
      { speaker: 'npc', target: "How long are you staying and what's your hotel address?", native: "आप कितने दिन रहेंगे और होटल का पता क्या है?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please.", native: "माफ़ कीजिए, मुझे समझ नहीं आया। धीरे, कृपया।", correct: true,  feedback: 'बढ़िया — माफ़ी, situation, और request — तीनों आ गए।' },
          { target: "Yes.",                                         native: 'जी हाँ।',                                                 correct: false, feedback: "ख़तरनाक 'yes' — समझे नहीं और हाँ कह दी। कभी मत कीजिए।" },
          { target: "OK, goodbye.",                                  native: 'ठीक है, अलविदा।',                                   correct: false, feedback: "बात ख़त्म नहीं हुई — आपको बताना है कि समझ नहीं आया।" },
        ],
      },
      { speaker: 'npc', target: "Sure. How — long — are — you — staying?", native: 'ठीक है। आप कितने दिन रुकेंगे?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! ये शब्द आपको language की हर मुश्किल से निकालेंगे — डरिए मत बोलने में।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: "I don't understand (in English)", correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"] },
      { prompt: 'Repeat, please (in English)',     correct: ['Repeat, please', 'Repeat please', 'repeat, please', 'Please repeat', 'Please, repeat'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज दो बार 'I don't understand' मुँह से बोलिए — चाहे अकेले ही। आवाज़ साफ़ हो। ये शब्द आपके पास हमेशा रहने चाहिए।",
    rwenSignoff: "कोई भी सब कुछ तुरंत समझने वाला नहीं होता। मिलते हैं कल।",
  },

  phase8: {
    scenario: "You're at the immigration desk at London Heathrow. The officer is professional but speaks fast British English. You're tired from the flight and missed half of the question. Politely tell them you don't understand and ask for clarification.",
    rwenRole: "Officer Davies, 45, immigration officer. Polite but no-nonsense, speaks fast clipped English. Will repeat slowly if asked.",
    successCriteria: "User uses 'I don't understand' or 'Sorry, I didn't catch that', asks 'Can you repeat?' or 'Slowly, please', stays calm. Doesn't pretend to understand and say 'Yes' to questions they didn't follow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
