import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-bhasha',
  module: 3,
  lesson: 6,
  title: 'Bhasha — Languages I Speak',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "India has 22 official languages and hundreds more spoken every day. Saying which ones you speak is normal social information — and so is admitting which ones you don't. Today you learn to say both, in Hindi.",
    culturalNote: "Most Indians switch between two or three languages a day without thinking — Hindi at home, English at work, Tamil/Marathi/Punjabi with parents. Saying 'मुझे थोड़ी हिंदी आती है' (mujhe thodi Hindi aati hai — I know a little Hindi) is welcomed, not apologised for. People will help you, not test you.",
  },

  chunks: [
    {
      id: 'mujhe_aati_hai',
      target: 'मुझे... आती है — Mujhe... aati hai',
      native: 'I know / I can speak... (a language)',
      literal: 'To-me ... comes is',
      emoji: '🗣️',
      phonetic: 'MU-jhay ... AA-tee hai',
      audioRef: null,
    },
    {
      id: 'thodi_hindi',
      target: 'मुझे थोड़ी हिंदी आती है — Mujhe thodi Hindi aati hai',
      native: 'I know a little Hindi',
      literal: 'To-me little Hindi comes is',
      emoji: '🇮🇳',
      phonetic: 'MU-jhay THO-ree HIN-dee AA-tee hai',
      audioRef: null,
    },
    {
      id: 'angrezi_aati',
      target: 'मुझे अंग्रेज़ी आती है — Mujhe Angrezi aati hai',
      native: 'I know English',
      literal: 'To-me English comes is',
      emoji: '🇬🇧',
      phonetic: 'MU-jhay an-GRAY-zee AA-tee hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe X aati hai — the "language comes to me" idiom',
    explanation: "Hindi expresses language ability with the same experiencer pattern as 'like': मुझे X आती है (mujhe X aati hai) — literally 'X comes to me'. Languages take आती (aati, feminine) because भाषा (bhasha — language) is feminine. To say 'a little', add थोड़ी (thodi, also feminine). To say 'I don't know X', use नहीं आती (nahin aati).",
    examples: [
      { target: 'मुझे हिंदी आती है — Mujhe Hindi aati hai', native: 'I know Hindi' },
      { target: 'मुझे थोड़ी हिंदी आती है — Mujhe thodi Hindi aati hai', native: 'I know a little Hindi' },
      { target: 'मुझे तमिल नहीं आती — Mujhe Tamil nahin aati', native: "I don't know Tamil" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Mujhe... aati hai', right: 'I know / can speak (a language)' },
        { left: 'Mujhe thodi Hindi aati hai', right: 'I know a little Hindi' },
        { left: 'Mujhe Angrezi aati hai', right: 'I know English' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you know a little Hindi',
      sentence: 'Mujhe _____ Hindi aati hai.',
      options: ['thodi', 'thoda', 'bahut'],
      correct: 'thodi',
      context: 'थोड़ी (thodi) is the feminine form, agreeing with भाषा (bhasha). थोड़ा (thoda) is masculine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I know a little Hindi',
      correct: ['Mujhe thodi Hindi aati hai', 'mujhe thodi hindi aati hai', 'मुझे थोड़ी हिंदी आती है'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I don't know Tamil' in Hindi?",
      question: 'Choose the right negative form',
      options: [
        { text: 'Mujhe Tamil nahin aati', correct: true },
        { text: 'Main Tamil nahin', correct: false },
        { text: 'Mujhe Tamil hai', correct: false },
      ],
      explanation: "'Mujhe X nahin aati' — language doesn't come to me. The 'है' often drops in the negative. 'Main Tamil nahin' is incomplete grammar.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I know English"',
      words: ['Mujhe', 'aati', 'hai', 'Angrezi'],
      correct: ['Mujhe', 'Angrezi', 'aati', 'hai'],
      translation: 'I know English',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: "I don't know Tamil",
      correct: ['Mujhe Tamil nahin aati', 'mujhe tamil nahin aati', 'Mujhe Tamil nahi aati', 'मुझे तमिल नहीं आती'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks which languages you actually speak.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आपको कौनसी भाषाएँ आती हैं? (Aapko kaunsi bhashayein aati hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मुझे अंग्रेज़ी आती है। मुझे थोड़ी हिंदी आती है। (Mujhe Angrezi aati hai. Mujhe thodi Hindi aati hai.)', native: 'I know English. I know a little Hindi.', correct: true, feedback: "Honest and confident. Saying 'thodi Hindi' invites help, not judgement." },
          { target: 'मुझे हिंदी (Mujhe Hindi)', native: 'To me Hindi', correct: false, feedback: "Almost — finish with the verb: Mujhe Hindi aati hai." },
          { target: 'मैं हिंदी हूँ (Main Hindi hoon)', native: 'I am Hindi', correct: false, feedback: "That means 'I am Hindi' — a different sentence. Use Mujhe Hindi aati hai." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'अरे वाह! थोड़ी हिंदी काफी है शुरू करने के लिए। (Arre wah! Thodi Hindi kaafi hai shuru karne ke liye.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "A little is enough to start. That's the truth in any language — and you just said it in Hindi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I know English', correct: ['Mujhe Angrezi aati hai', 'mujhe angrezi aati hai'] },
      { prompt: 'I know a little Hindi', correct: ['Mujhe thodi Hindi aati hai', 'mujhe thodi hindi aati hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name two languages you speak, and one you don't. In Hindi: 'मुझे ___ आती है। मुझे थोड़ी ___ आती है। मुझे ___ नहीं आती।'",
    rwenSignoff: "Languages are bridges. You're building yours. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "An IT industry conference in Hyderabad. During the lunch buffet, a colleague from the Chennai office switches from English to Tamil to Hindi mid-sentence to test you, then asks — half-joking, half-curious — which Indian languages you actually speak.",
    rwenRole: "Lakshmi — senior engineer from the Chennai office, ~40s, friendly switcher between Tamil/English/Hindi, genuinely curious how multilingual you are.",
    successCriteria: "User uses 'Mujhe X aati hai' for at least one language they know AND 'Mujhe X nahin aati' for one they don't. Says 'thodi' (not 'thoda') for Hindi/any feminine language. Doesn't say 'Main Hindi hoon' (which means 'I am Hindi the language').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
