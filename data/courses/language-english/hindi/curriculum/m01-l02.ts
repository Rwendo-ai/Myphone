import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — Casual greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "आज सीखते हैं दोस्तों के बीच के शब्द — 'Hi' और 'Bye'। ये office के बाहर, चाय पर, WhatsApp पर — हर जगह काम आते हैं।",
    culturalNote: "हिंदी में 'हाय' अब सब बोलते हैं — पर sir/madam के सामने नहीं। अंग्रेज़ी में भी same: 'Hi' दोस्त को, colleague को ठीक है — पर interview में या CEO के सामने नहीं। 'Bye' बहुत relaxed है — formal meetings के बाद इसे avoid करें।",
  },

  chunks: [
    {
      id: 'hi',
      target: 'Hi',
      native: 'हाय (Haay)',
      literal: undefined,
      emoji: '👋',
      phonetic: 'HAI',
      audioRef: null,
    },
    {
      id: 'bye',
      target: 'Bye',
      native: 'अलविदा / बाय (Alvida / Bye)',
      literal: 'Goodbye (short)',
      emoji: '👋',
      phonetic: 'BAI',
      audioRef: null,
    },
    {
      id: 'see_you_later',
      target: 'See you later',
      native: 'बाद में मिलते हैं (Baad mein milte hain)',
      literal: 'Later we will meet',
      emoji: '🔁',
      phonetic: 'SEE-yoo-LAY-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual register',
    explanation: "'Hi' और 'Bye' दोस्ती की भाषा है — colleagues, classmates, cousins के लिए। 'See you later' का मतलब है 'जल्दी मिलेंगे' — ज़रूरी नहीं कि आज ही। यह कोई commitment नहीं है, बस गर्मजोशी से अलग होने का तरीका है।",
    examples: [
      { target: 'Hi',             native: 'हाय' },
      { target: 'Bye',            native: 'बाय' },
      { target: 'See you later',  native: 'बाद में मिलते हैं' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी से मिलाएँ',
      pairs: [
        { left: 'Hi',             right: 'हाय' },
        { left: 'Bye',            right: 'बाय / अलविदा' },
        { left: 'See you later',  right: 'बाद में मिलते हैं' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'बाद में मिलते हैं',
      correct: ['See you later', 'see you later', 'See you later.', 'see you later.'],
    },
    {
      type: 'fill_blank',
      instruction: 'दोस्तों की बातचीत पूरी करें',
      sentence: '____, see you later!',
      options: ['Hi', 'Hello', 'Bye'],
      correct: 'Bye',
      context: "आप cafeteria से उठ रहे हैं, दोस्त वहीं बैठा है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को सही क्रम में लगाएँ',
      words: ['Hi', 'see', 'you', 'later'],
      correct: ['Hi', 'see', 'you', 'later'],
      translation: 'हाय, बाद में मिलते हैं',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'हाय',
      correct: ['Hi', 'hi', 'Hi.', 'hi.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "Starbucks में दोस्त के साथ coffee ख़त्म हुई। आप जा रहे हैं। क्या कहेंगे?",
      options: [
        { text: 'Bye, see you later!', correct: true },
        { text: 'Hello, how are you?', correct: false },
        { text: 'Good morning.',       correct: false },
      ],
      explanation: "'Bye' और 'See you later' दोस्तों से अलग होने के standard शब्द हैं।",
    },
  ],

  rwenDialogue: {
    intro: 'IT पार्क की कैंटीन में lunch के बाद। आपका कॉलीग जल्दी निकल रहा है — meeting है।',
    lines: [
      { speaker: 'npc', target: 'Hi! How was the food?', native: 'हाय! खाना कैसा था?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, it was good. See you later!",  native: 'हाय, अच्छा था। बाद में मिलते हैं!', correct: true,  feedback: 'सही — आपने जवाब दिया और casual goodbye जोड़ दी।' },
          { target: 'Good afternoon, sir.',              native: 'नमस्कार सर।',                          correct: false, feedback: 'बहुत formal हो गया — colleague है, sir नहीं। "Hi" से जवाब दीजिए।' },
          { target: 'Yes.',                              native: 'हाँ।',                                  correct: false, feedback: '"Yes" "How was the food?" का जवाब नहीं है — "It was good" बोलिए।' },
        ],
      },
      { speaker: 'npc', target: 'Bye! Catch you in the meeting.', native: 'बाय! मीटिंग में मिलते हैं।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आपने casual register पकड़ ली — colleague को colleague की भाषा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Hi (अंग्रेज़ी में)',              correct: ['Hi', 'hi'] },
      { prompt: 'See you later (अंग्रेज़ी में)',  correct: ['See you later', 'see you later', 'See you later.', 'see you later.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी दोस्त को 'Hi' से greet करें — और निकलते वक़्त 'Bye, see you later!' बोलें। WhatsApp पर भी चलेगा।",
    rwenSignoff: "बाद में मिलते हैं!",
  },

  phase8: {
    scenario: "गुरुग्राम के एक IT campus में lunch break है। आप cafeteria में अपने पुराने college के दोस्त से अचानक मिलते हैं — दोनों अलग-अलग companies में हैं। दो मिनट का casual exchange — hi, थोड़ी सी बात, फिर bye क्योंकि उसकी 1pm की meeting है।",
    rwenRole: "Priya — आपकी college batchmate, ~26, अब Accenture में काम करती है। Friendly, fast-paced, हिंदी और English दोनों मिक्स करती है पर इस moment में पूरी तरह English में बात कर रही है।",
    successCriteria: "User opens with 'Hi' (NOT 'Hello' which is too neutral, NOT 'Namaste ji' which is over-formal for a friend), uses 'See you later' or 'Bye' to close, और casual register में रहता है (no 'sir/madam', no 'Pleased to meet you' formality).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
