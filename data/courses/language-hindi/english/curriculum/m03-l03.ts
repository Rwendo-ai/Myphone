import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-kaam',
  module: 3,
  lesson: 3,
  title: 'Main Kaam Karta Hoon — I Work',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Work in India is one of the first three questions you'll be asked: name, age, kaam. In a country where IT engineers, teachers, shopkeepers and farmers are all part of the same family WhatsApp group, your work places you somewhere on a vast, respected map. Let's place you.",
    culturalNote: "When meeting someone new in India — especially in a workplace or at a family gathering — saying 'नमस्ते' (namaste) with palms together is more universal than a handshake. In an IT office in Bengaluru or a bank in Delhi, namaste before a meeting still works at every level of seniority. Hierarchy matters; the gesture acknowledges it.",
  },

  chunks: [
    {
      id: 'main_kaam_karta',
      target: 'मैं काम करता/करती हूँ — Main kaam karta/karti hoon',
      native: 'I work (m / f)',
      literal: 'I work do am (m / f)',
      emoji: '💼',
      phonetic: 'mayn kaam KAR-ta / KAR-tee hoon',
      audioRef: null,
    },
    {
      id: 'engineer_hoon',
      target: 'मैं इंजीनियर हूँ — Main engineer hoon',
      native: 'I am an engineer',
      literal: 'I engineer am',
      emoji: '👨‍💻',
      phonetic: 'mayn EN-jin-yar hoon',
      audioRef: null,
    },
    {
      id: 'main_kaam_karta_company',
      target: '...में काम करता/करती हूँ — ...mein kaam karta/karti hoon',
      native: 'I work at...',
      literal: '...in work do am',
      emoji: '🏢',
      phonetic: 'mayn ... mayn kaam KAR-ta/KAR-tee hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gendered habitual verb — karta hoon (m) / karti hoon (f)',
    explanation: "Hindi habitual verbs (the everyday 'I do X') use a gendered form. A man says करता हूँ (karta hoon — do, I am). A woman says करती हूँ (karti hoon). Same applies to all habitual verbs: padhta/padhti (read), khaata/khaati (eat), jaata/jaati (go). Pick the form that matches you.",
    examples: [
      { target: 'मैं काम करता हूँ — Main kaam karta hoon', native: 'I work (man speaking)' },
      { target: 'मैं काम करती हूँ — Main kaam karti hoon', native: 'I work (woman speaking)' },
      { target: 'मैं Infosys में काम करता हूँ — Main Infosys mein kaam karta hoon', native: 'I work at Infosys (man)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Main kaam karta/karti hoon', right: 'I work' },
        { left: 'Main engineer hoon', right: 'I am an engineer' },
        { left: '...mein kaam karta/karti hoon', right: 'I work at...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says where she works',
      sentence: 'Main Wipro mein kaam _____ hoon.',
      options: ['karti', 'karta', 'karte'],
      correct: 'karti',
      context: 'Female speaker — habitual verbs end in -ti for women.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine) — male speaker',
      prompt: 'I work',
      correct: ['Main kaam karta hoon', 'main kaam karta hoon', 'मैं काम करता हूँ'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'आप क्या करते हैं?' (aap kya karte hain — what do you do?). You are a teacher (woman). What do you say?",
      question: 'Choose the correct answer',
      options: [
        { text: 'Main teacher hoon', correct: true },
        { text: 'Main teacher karta hoon', correct: false },
        { text: 'Mera teacher hai', correct: false },
      ],
      explanation: "For 'I am a [profession]' use 'Main [profession] hoon' — no karta/karti needed. Karta/karti is only for VERBS like work, eat, read.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I work at Infosys" (male speaker)',
      words: ['Infosys', 'hoon', 'karta', 'mein', 'Main', 'kaam'],
      correct: ['Main', 'Infosys', 'mein', 'kaam', 'karta', 'hoon'],
      translation: 'I work at Infosys',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I am an engineer',
      correct: ['Main engineer hoon', 'main engineer hoon', 'मैं इंजीनियर हूँ'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your work. Use the right verb form for your gender.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आप क्या करते हैं? कहाँ काम करते हैं? (Aap kya karte hain? Kahaan kaam karte hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मैं... हूँ। मैं... में काम करता/करती हूँ। (Main... hoon. Main... mein kaam karta/karti hoon.)', native: 'I am [profession]. I work at [place].', correct: true, feedback: "Profession AND workplace, with the verb gendered correctly. Solid." },
          { target: 'मैं काम (Main kaam)', native: 'I work', correct: false, feedback: "Almost — Hindi needs the full verb: karta hoon (m) or karti hoon (f). Don't drop it." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know your work. Use Main [profession] hoon to start." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'बहुत बढ़िया। काम के बारे में बात करना अच्छा है। (Bahut badhiya. Kaam ke baare mein baat karna accha hai.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Talking about your work is a doorway. People in India will follow up — about your company, your city, your projects. You're now ready for that follow-up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I work (male speaker)', correct: ['Main kaam karta hoon', 'main kaam karta hoon'] },
      { prompt: 'I work (female speaker)', correct: ['Main kaam karti hoon', 'main kaam karti hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say in Hindi: 'मैं ___ हूँ। मैं ___ में काम करता/करती हूँ।' Profession, then workplace. Pick karta or karti — let the verb agree with you.",
    rwenSignoff: "Your work is part of your dignity. Say it in Hindi. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "First week onboarding at a tech firm in Whitefield, Bengaluru. After a project standup, your new teammate offers a chai from the office pantry, presses palms in a quick namaste, and asks what you actually do — and where you've worked before.",
    rwenRole: "Karthik — senior developer on your new team, late 30s, opens with 'namaste' instead of a handshake, switches between English and Hindi mid-sentence, friendly but professional.",
    successCriteria: "User uses 'Main [role] hoon' for identity (no karta/karti) AND 'Main X mein kaam karta/karti hoon' for the workplace, picking the gendered ending correctly. Returns the namaste rather than offering a handshake. Doesn't say 'Main engineer karta hoon' (a common cross-pattern error).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
