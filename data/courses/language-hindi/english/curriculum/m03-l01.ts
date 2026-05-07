import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-main-hoon',
  module: 3,
  lesson: 1,
  title: 'Main Hoon — I Am',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greetings open the door. Now step through it. Module 3 is your story — मैं हूँ (main hoon), I am. Three syllables that put you in the room. We start here because in India, knowing who someone is matters more than what they say next.",
    culturalNote: "In Indian culture, मेरा नाम (mera naam — my name) is rarely just one word. A full Indian name is Given name + Father's name + Family/clan name (e.g. Priya Rajeev Sharma). When an elder asks 'आप कौन हैं?' (aap kaun hain — who are you?), they are placing you within a lineage, not just labelling you. Answer with care.",
  },

  chunks: [
    {
      id: 'main_hoon',
      target: 'मैं हूँ — Main hoon',
      native: 'I am',
      literal: 'I am',
      emoji: '🙋',
      phonetic: 'mayn hoon',
      audioRef: null,
    },
    {
      id: 'mera_naam',
      target: 'मेरा नाम... है — Mera naam... hai',
      native: 'My name is...',
      literal: 'My name... is',
      emoji: '🏷️',
      phonetic: 'MAY-ra naam ... hai',
      audioRef: null,
    },
    {
      id: 'main_vidyarthi',
      target: 'मैं विद्यार्थी हूँ — Main vidyarthi hoon',
      native: 'I am a student',
      literal: 'I student am',
      emoji: '📖',
      phonetic: 'mayn vid-YAR-thee hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Subject + Noun + होना (hona) — verb at the end',
    explanation: "In Hindi the verb comes LAST. 'I am a student' is literally 'I student am' — मैं विद्यार्थी हूँ. The verb हूँ (hoon) is the 'I am' form of होना (hona — to be). For 'my name is X', you say मेरा नाम X है (mera naam X hai) — name X is. Always end with the verb.",
    examples: [
      { target: 'मैं हूँ — Main hoon', native: 'I am' },
      { target: 'मैं विद्यार्थी हूँ — Main vidyarthi hoon', native: 'I am a student' },
      { target: 'मेरा नाम प्रिया है — Mera naam Priya hai', native: 'My name is Priya' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'मैं हूँ (Main hoon)', right: 'I am' },
        { left: 'मेरा नाम... है (Mera naam... hai)', right: 'My name is...' },
        { left: 'मैं विद्यार्थी हूँ (Main vidyarthi hoon)', right: 'I am a student' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I am a student"',
      sentence: 'मैं विद्यार्थी _____. (Main vidyarthi _____.)',
      options: ['hoon', 'hai', 'hain'],
      correct: 'hoon',
      context: 'हूँ (hoon) is the "I am" form. हैं (hain) is for "they/you are", है (hai) is for "he/she/it is".',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I am (just the phrase)',
      correct: ['Main hoon', 'main hoon', 'मैं हूँ'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'आपका नाम क्या है?' (aapka naam kya hai — what is your name?). What is the natural answer?",
      question: 'Choose the correct response',
      options: [
        { text: 'मेरा नाम Priya है — Mera naam Priya hai', correct: true },
        { text: 'मैं Priya — Main Priya', correct: false },
        { text: 'मैं हूँ — Main hoon', correct: false },
      ],
      explanation: "Mera naam Priya hai — my name is Priya. Hindi requires the verb है (hai) at the end. 'Main Priya' on its own is incomplete; it needs hoon or the full naam construction.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My name is Priya"',
      words: ['hai', 'naam', 'Mera', 'Priya'],
      correct: ['Mera', 'naam', 'Priya', 'hai'],
      translation: 'My name is Priya',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I am a student',
      correct: ['Main vidyarthi hoon', 'main vidyarthi hoon', 'मैं विद्यार्थी हूँ'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to know your full name and who you are. Use the structure properly.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आपका नाम क्या है? आप कौन हैं? (Aapka naam kya hai? Aap kaun hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मेरा नाम... है। मैं विद्यार्थी हूँ। (Mera naam... hai. Main vidyarthi hoon.)', native: 'My name is... I am a student.', correct: true, feedback: "You ended both sentences with the verb — exactly right. Rwen smiles." },
          { target: 'मैं विद्यार्थी (Main vidyarthi)', native: 'I student', correct: false, feedback: "Almost — Hindi needs the verb at the end. Add हूँ (hoon)." },
          { target: 'पता नहीं (Pata nahin)', native: "I don't know", correct: false, feedback: "You know who you are. Try मेरा नाम... है (mera naam... hai)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'बहुत अच्छा। आपसे मिलकर खुशी हुई। (Bahut accha. Aapse milkar khushi hui.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "You introduced yourself. The verb landed at the end where it belongs. That's Hindi grammar working for you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am (just the phrase)', correct: ['Main hoon', 'main hoon', 'मैं हूँ'] },
      { prompt: 'My name is... (start of phrase, no name yet)', correct: ['Mera naam', 'mera naam', 'मेरा नाम'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say out loud: 'मेरा नाम ___ है। मैं ___ हूँ।' (Mera naam ___ hai. Main ___ hoon.) — your name, then who you are. End each sentence with the verb. Feel where it lands.",
    rwenSignoff: "You are someone worth knowing. फिर मिलेंगे (phir milenge — see you again).",
  },

  phase8: {
    scenario: "Sunday family dinner at your colleague's home in Bandra, Mumbai. Three generations are seated on floor cushions around the thali. The grandmother (Dadi) sets down her glass of chai and asks, in Hindi, who you are.",
    rwenRole: "Dadi-ji — host's grandmother, ~75, warm but formal, asking your full name and what you do; she will use this to place you within her son's circle of friends.",
    successCriteria: "User uses 'Mera naam X hai' (with the verb है at the end), follows with 'Main [profession/role] hoon', and does NOT drop the verb. Treats Dadi's question as relational, not nosy — answers with full name (given + family), not just a first name.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
