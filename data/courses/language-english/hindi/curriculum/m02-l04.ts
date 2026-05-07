import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — क्या आप English बोलते हैं?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! किसी से बात शुरू करने से पहले — जब आप नहीं जानते वो कौन-सी भाषा समझता है — पूछ लीजिए कि English बोलते हैं या नहीं। यह question 'Do' से शुरू होता है।",
    culturalNote: "हिन्दी में हम पूछते हैं 'क्या आप...?' — सवाल में 'क्या' सबसे आगे आता है। English में verb-question 'Do' से शुरू होता है: 'Do you speak English?' सिर्फ़ 'You speak English?' कह देंगे तो लगेगा statement है, doubt के साथ — works in casual chat, but proper question में 'Do' लगाइए।",
  },

  chunks: [
    {
      id: 'do_you_speak_english',
      target: 'Do you speak English?',
      native: 'क्या आप English बोलते हैं?',
      literal: 'Do you speak English?',
      emoji: '🗣️',
      phonetic: 'doo-yoo-SPEEK-ING-glish',
      audioRef: null,
    },
    {
      id: 'a_little',
      target: 'A little',
      native: 'थोड़ी-सी',
      literal: 'A little',
      emoji: '🤏',
      phonetic: 'uh-LIT-uhl',
      audioRef: null,
    },
    {
      id: 'slowly_please',
      target: 'Slowly, please',
      native: 'धीरे, कृपया',
      literal: 'Slowly, please',
      emoji: '🐢',
      phonetic: 'SLOH-lee-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question word "do"',
    explanation: "English में verb (बोलना, समझना, होना) से जुड़े सवाल 'Do' से शुरू होते हैं ('Does' he/she/it के लिए)। Pattern: 'Do + you + speak + ...?'। 'Do' के बिना sentence question नहीं लगता।",
    examples: [
      { target: 'Do you speak English?', native: 'क्या आप English बोलते हैं?' },
      { target: 'Do you understand?',     native: 'क्या आप समझ रहे हैं?' },
      { target: 'Do you have time?',      native: 'क्या आपके पास समय है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Do you speak English?', right: 'क्या आप English बोलते हैं?' },
        { left: 'A little',               right: 'थोड़ी-सी' },
        { left: 'Slowly, please',         right: 'धीरे, कृपया' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'क्या आप English बोलते हैं?',
      correct: ['Do you speak English?', 'do you speak English?', 'Do you speak English', 'do you speak english?'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरकर सवाल पूरा कीजिए',
      sentence: '____ you speak English?',
      options: ['Do', 'Are', 'Is'],
      correct: 'Do',
      context: "Verb-questions English में 'Do' से शुरू होते हैं।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — किसी से धीरे बोलने को कहिए',
      words: ['please', 'slowly', 'Speak'],
      correct: ['Speak', 'slowly', 'please'],
      translation: 'धीरे बोलिए, कृपया',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — किसी ने पूछा है, पर आप थोड़ी ही English जानते हैं',
      prompt: 'थोड़ी-सी',
      correct: ['A little', 'a little', 'A little.', 'A little bit', 'a little bit'],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'धीरे, कृपया',
      correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'],
    },
  ],

  rwenDialogue: {
    intro: "आप Goa में बैठे हैं समुद्र किनारे। एक tourist पास आता है — वो कुछ पूछना चाहता है, पर आप नहीं जानते वो कौन-सी language समझता है। पूछ लीजिए।",
    lines: [
      { speaker: 'npc', target: "Hello! Excuse me...", native: 'Hello! सुनिए...' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi! Do you speak English?',  native: 'नमस्ते! क्या आप English बोलते हैं?',     correct: true,  feedback: 'बढ़िया — आपने greet किया और language confirm की।' },
          { target: 'English?',                    native: 'English?',                           correct: false, feedback: 'बहुत छोटा है — पूरा सवाल पूछिए।' },
          { target: 'I speak English.',            native: 'मैं English बोलता हूँ।',                correct: false, feedback: 'आपने बिना पूछे जवाब दे दिया — पहले उनसे पूछिए।' },
        ],
      },
      { speaker: 'npc', target: "A little. Slowly, please?", native: 'थोड़ी-सी। धीरे बोलिए, कृपया?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! और आपने सीखा कि जब सामने वाला limited English जानता है — तो धीरे बोलना है, simple words use करने हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Do you speak English? (in English)', correct: ['Do you speak English?', 'Do you speak English', 'do you speak English?', 'do you speak english?'] },
      { prompt: 'Slowly, please (in English)',          correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी से (या आइने में अकेले ही) पूछिए — 'Do you speak English?' दो बार। intonation पर ध्यान दीजिए — अंत में आवाज़ ऊपर जाती है।",
    rwenSignoff: "यह सवाल आपके लिए कई दरवाज़े खोलेगा। मिलते हैं कल।",
  },

  phase8: {
    scenario: "You're standing on a beach in Goa. A backpacker approaches you with a confused look — they want to ask something but you're not sure what language they speak. Open the conversation by checking if they speak English.",
    rwenRole: "Hannah, 22, a German backpacker on her gap year. Speaks decent English but slowly and with hesitations. Friendly, curious about India.",
    successCriteria: "User opens with 'Do you speak English?', responds to her 'A little', and adapts by saying 'Slowly, please' or repeating things simply. Doesn't switch to fast English when she struggles.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
