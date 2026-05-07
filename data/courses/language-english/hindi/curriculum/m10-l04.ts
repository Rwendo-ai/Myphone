import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Being Sick — बीमारी',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "हिंदी में 'मुझे सिरदर्द है', 'मुझे बुख़ार है' — 'मुझे + लक्षण'। English में same: 'I have a headache', 'I have a fever'। यह bridge perfect है!",
    culturalNote: "Indian medical system: GP visits short — 5-10 minute। UK NHS में और भी short — 8 minute slot। Direct से शुरू: 'I don't feel well. I have a headache that won't go away.' घर के हाल-चाल बाद में। यह तरीक़ा हमारे साथ संस्कार के विपरीत — हम doctor से 'नमस्ते sir, परिवार ठीक है?' से शुरू करते। English में जल्दी आरकर बीमारी पर आना ही professional।",
  },

  chunks: [
    {
      id: 'dont_feel_well',
      target: "I don't feel well",
      native: 'तबीयत ठीक नहीं',
      literal: 'Tabiyat theek nahin',
      emoji: '🤒',
      phonetic: 'ay-DOHNT-feel-WEL',
      audioRef: null,
    },
    {
      id: 'have_headache',
      target: 'I have a headache',
      native: 'मुझे सिरदर्द है',
      literal: 'Mujhe sirdard hai',
      emoji: '🤕',
      phonetic: 'ay-HAV-uh-HED-ayk',
      audioRef: null,
    },
    {
      id: 'need_a_doctor',
      target: 'I need a doctor',
      native: 'मुझे doctor चाहिए',
      literal: 'Mujhe doctor chahiye',
      emoji: '👨‍⚕️',
      phonetic: 'ay-NEED-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'I have a... (symptom structure)',
    explanation: "'I have a + symptom' = बीमारी बताने का formula — हिंदी 'मुझे ___ है' से बिल्कुल same। 'I have a headache', 'I have a sore throat', 'I have a cough'। चलती बीमारी: 'that won't go away' (जो ठीक नहीं हो रही)।",
    examples: [
      { target: "I don't feel well — I have a headache.",                  native: 'तबीयत ठीक नहीं — सिरदर्द है।' },
      { target: "I have a sore throat and a cough.",                       native: 'गला ख़राब है और खाँसी है।' },
      { target: "I think I need a doctor.",                                  native: 'मुझे doctor चाहिए।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: "I don't feel well",   right: 'तबीयत ठीक नहीं' },
        { left: 'I have a headache',    right: 'सिरदर्द है' },
        { left: 'I need a doctor',      right: 'doctor चाहिए' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — GP पर पहली बात',
      prompt: 'तबीयत ठीक नहीं। तीन दिन से सिरदर्द है।',
      correct: ["I don't feel well. I have a headache for three days.", "I don't feel well. I've had a headache for three days.", "I don't feel well — I have a headache for three days.", "i don't feel well. i have a headache for three days."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मुझे doctor से मिलना है।',
      correct: ['I need to see a doctor.', 'I want to see a doctor.', 'I need a doctor.', 'i need to see a doctor.'],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'I have a headache that won't go away'",
      words: ['away.', 'go', "won't", 'I', 'a', 'have', 'headache', 'that'],
      correct: ['I', 'have', 'a', 'headache', 'that', "won't", 'go', 'away.'],
      translation: 'जो सिरदर्द ठीक नहीं हो रहा',
    },
    {
      type: 'fill_blank',
      instruction: "GP पर शुरुआत",
      sentence: "I _____ a sore throat and a cough.",
      options: ['have', 'am', 'do'],
      correct: 'have',
      context: "'I have + symptom' = हिंदी 'मुझे ___ है' का English mirror।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही शुरुआत',
      question: "UK GP appointment। Doctor ने पूछा 'What can I do for you today?'",
      options: [
        { text: "I don't feel well. I have a headache that won't go away — for five days now.", correct: true },
        { text: "Hello, doctor, how are you, your family is well?",                                   correct: false },
        { text: "Just give me medicine, please.",                                                       correct: false },
      ],
      explanation: "GP पर सीधे problem बोलें। संस्कार के सवाल भारत में चलते — UK में time short।",
    },
  ],

  rwenDialogue: {
    intro: "UK GP appointment। Doctor screen पर लिख रहा।",
    lines: [
      { speaker: 'npc', target: "Hi, please come in. What can I do for you today?", native: 'नमस्ते, अंदर आइए। आज क्या मदद करूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, doctor. I don't feel well — I have a headache that won't go away. It's been five days.", native: 'नमस्ते। तबीयत ठीक नहीं — जो सिरदर्द है ठीक नहीं हो रहा। पाँच दिन हो गए।', correct: true, feedback: "बढ़िया — direct, duration भी।" },
          { target: "Headache.", native: 'सिरदर्द।', correct: false, feedback: "अधूरा।" },
          { target: "Hello doctor, how are you, your family well?", native: 'नमस्ते डॉक्टर, परिवार ठीक है?', correct: false, feedback: "UK में time कम — सीधे problem बोलें।" },
        ],
      },
      { speaker: 'npc', target: "Five days — that's a while. Any nausea? Vision changes?", native: 'पाँच दिन — लंबा। उल्टी जैसा? देखने में बदलाव?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a little nausea in the morning. My vision is fine.", native: 'हाँ, सुबह थोड़ी मतली। नज़र ठीक है।', correct: true, feedback: "बढ़िया — short, exact।" },
          { target: "Haan.", native: 'हाँ।', correct: false, feedback: "दो सवाल पूछे — दोनों के जवाब।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I have a ___' = 'मुझे ___ है' का सही English mirror।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'I have a headache (अंग्रेज़ी में)',     correct: ['I have a headache', 'I have a headache.', 'i have a headache'] },
      { prompt: "I don't feel well (अंग्रेज़ी में)",     correct: ["I don't feel well", "I do not feel well", "I don't feel well.", "i don't feel well"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "GP visit की कल्पना। Phone notes में English: 'Hi doctor, I don't feel well. I have a ___ that won't go away. It's been ___ days.' तीन बार पढ़ें।",
    rwenSignoff: "कल — body parts।",
  },

  phase8: {
    scenario: "You're at a UK GP surgery. You've had a persistent headache for 5 days, plus mild morning nausea. The GP has 8 minutes. Open with what's wrong, answer follow-ups about duration and other symptoms, and ask one question at the end.",
    rwenRole: "Dr. Patel, 50, UK NHS GP. Efficient, kind, slightly time-pressured. Will ask: duration, pain location, other symptoms, medications you're taking.",
    successCriteria: "User opens with 'I don't feel well' or 'I have a ___'. Uses 'have a + symptom' structure at least twice. Mentions duration ('for five days', 'since Monday'). Stays in English. Asks one question (e.g., 'Should I be worried?', 'What can I take?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
