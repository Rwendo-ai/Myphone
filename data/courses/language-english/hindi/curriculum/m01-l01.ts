import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — नमस्ते',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! अंग्रेज़ी में जब किसी से मिलते हैं, तो शुरुआत 'Hello' से होती है। न हाथ जोड़ना, न झुकना — बस एक सीधा शब्द।",
    culturalNote: "हिंदी में 'नमस्ते' में आदर है — हाथ जुड़ते हैं, सिर हल्का झुकता है। अंग्रेज़ी का 'Hello' इतना गहरा नहीं — यह तटस्थ है, हर किसी के साथ चलता है: बॉस, क्लाइंट, अजनबी, दोस्त।",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'नमस्ते (Namaste)',
      literal: undefined,
      emoji: '👋',
      phonetic: 'heh-LOH',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: 'आप कैसे हैं? (Aap kaise hain?)',
      literal: 'How are you-respectful?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: 'मैं ठीक हूँ, धन्यवाद। (Main theek hoon, dhanyavaad.)',
      literal: 'I-am OK, thank-you',
      emoji: '✨',
      phonetic: 'aym-FAYN-thanks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings',
    explanation: "अंग्रेज़ी में 'How are you?' एक असली सवाल नहीं है — यह greeting का हिस्सा है। जवाब लगभग हमेशा 'I'm fine, thanks' होता है, चाहे आप थके हों या ठीक हों। हिंदी में 'कैसे हैं?' से लंबी बातचीत शुरू होती है — अंग्रेज़ी में नहीं।",
    examples: [
      { target: 'Hello',        native: 'नमस्ते' },
      { target: 'Hi',           native: 'हाय (कैजुअल)' },
      { target: 'How are you?', native: 'आप कैसे हैं?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Hello',         right: 'नमस्ते' },
        { left: 'How are you?',  right: 'आप कैसे हैं?' },
        { left: "I'm fine",      right: 'मैं ठीक हूँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'नमस्ते',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें',
      sentence: "Hello! ____ are you?",
      options: ['How', 'What', 'Who'],
      correct: 'How',
      context: 'अमेरिकी क्लाइंट से ज़ूम कॉल पर पहली मुलाकात।',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "क्लाइंट पूछता है 'How are you?' — आप क्या कहेंगे?",
      options: [
        { text: "I'm fine, thanks.", correct: true },
        { text: 'Yes, please.',      correct: false },
        { text: 'Goodbye.',          correct: false },
      ],
      explanation: "'I'm fine, thanks' सबसे आम और सुरक्षित जवाब है — चाहे आप सच में ठीक हों या नहीं।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाएँ',
      words: ['How', 'you', 'are'],
      correct: ['How', 'are', 'you'],
      translation: 'आप कैसे हैं?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं ठीक हूँ, धन्यवाद।',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine thanks"],
    },
  ],

  rwenDialogue: {
    intro: 'बेंगलुरु के BPO ऑफिस में सुबह की standup। टीम लीड आपको पहली बार मिल रहा है।',
    lines: [
      { speaker: 'npc',  target: 'Hello! How are you?', native: 'नमस्ते! आप कैसे हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, I'm fine, thanks. How are you?", native: 'नमस्ते, मैं ठीक हूँ, धन्यवाद। आप कैसे हैं?', correct: true,  feedback: 'बहुत अच्छा — आपने जवाब दिया और सवाल वापस पूछा। यह natural English है।' },
          { target: 'Hello.',                                   native: 'नमस्ते।',                                          correct: false, feedback: 'थोड़ा छोटा है — टीम लीड को जवाब और एक return-question भी दीजिए।' },
          { target: 'Yes, sir.',                                native: 'जी सर।',                                            correct: false, feedback: '"Yes, sir" इस सवाल का जवाब नहीं है — "How are you?" का जवाब "I\'m fine, thanks" है।' },
        ],
      },
      { speaker: 'npc',  target: "I'm good, thanks. Welcome to the team.", native: 'मैं भी ठीक हूँ, धन्यवाद। टीम में स्वागत है।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! पहली English greeting हो गई — आपने न ज़्यादा polite, न कम कहा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Hello (अंग्रेज़ी में)', correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (अंग्रेज़ी में)', correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी से — चाहे हिंदी बोलने वाले से ही — 'Hello, how are you?' बोलकर देखें। आईने के सामने भी चलेगा।",
    rwenSignoff: "कल फिर मिलेंगे। Take care.",
  },

  phase8: {
    scenario: "बेंगलुरु में आपका पहला दिन है — एक US-based fintech BPO में। 9am की team standup शुरू हो रही है, और आपका manager Skype पर पहली बार आपको English में greet कर रहा है। आपको short, professional जवाब देना है।",
    rwenRole: "Rohan — आपका team lead, ~32, ख़ुद Hyderabad से, US clients के साथ रोज़ काम करता है। Friendly लेकिन यह देख रहा है कि आप casual English में comfortable हैं या नहीं।",
    successCriteria: "User opens with 'Hello' (NOT 'Namaste, sir' — यह over-formal है call centre context में), responds 'I'm fine, thanks' to 'How are you?' (NOT a literal long answer about feelings), and asks 'How are you?' back to keep the exchange flowing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
