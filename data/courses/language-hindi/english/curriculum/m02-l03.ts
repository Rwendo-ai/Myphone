import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-maaf-karna',
  module: 2,
  lesson: 3,
  title: 'Maaf Karna — Excuse Me / Sorry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "On a Mumbai local at peak hour, you'll bump into ten people in three minutes. 'Maaf karna' — excuse me, forgive me — is the social grease that keeps it civil. It's also how you flag a stranger for attention without sounding rude.",
    culturalNote: "In India, 'maaf karna' does double duty: it's both 'sorry' (for a mistake) and 'excuse me' (to interrupt or pass through). 'Maaf kijiye' is the formal version, used with strangers and elders. The English 'sorry' has crept into Hinglish for small bumps, but in Hindi proper, the apology carries more weight — and is expected to be unhurried, not tossed off over your shoulder.",
  },

  chunks: [
    {
      id: 'maaf_karna',
      target: 'माफ़ करना',
      native: 'Sorry / excuse me (informal)',
      literal: 'Maaf karna — to forgive (informal)',
      emoji: '🙏',
      phonetic: 'MAAF KAR-naa',
      audioRef: null,
    },
    {
      id: 'maaf_kijiye',
      target: 'माफ़ कीजिए',
      native: 'Please forgive me / excuse me (formal)',
      literal: 'Maaf kijiye — to forgive (formal/respectful)',
      emoji: '🕊️',
      phonetic: 'MAAF KEE-ji-ye',
      audioRef: null,
    },
    {
      id: 'koi_baat_nahi',
      target: 'कोई बात नहीं',
      native: "No problem / It's nothing",
      literal: 'Koi baat nahi — any matter not',
      emoji: '👌',
      phonetic: 'KO-ee BAAT na-HEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Karna vs Kijiye — informal vs formal',
    explanation: "Hindi verbs have a respect dial built in. 'Karna' is the dictionary form, used with friends and equals. 'Kijiye' is the formal/respectful form (the 'aap' register), used with strangers, elders, and anyone you want to show respect to. Same pattern: 'bataao' (tell, casual) → 'bataaiye' (please tell, formal).",
    examples: [
      { target: 'माफ़ करना (Maaf karna)', native: 'Sorry (to a friend)' },
      { target: 'माफ़ कीजिए (Maaf kijiye)', native: 'Please forgive me (formal)' },
      { target: 'कोई बात नहीं (Koi baat nahi)', native: "No problem (the reply)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'माफ़ करना (Maaf karna)', right: 'Sorry (informal)' },
        { left: 'माफ़ कीजिए (Maaf kijiye)', right: 'Please forgive me (formal)' },
        { left: 'कोई बात नहीं (Koi baat nahi)', right: "No problem" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You step on an elderly man's foot in a crowded Delhi metro. What is the right thing to say?",
      question: 'Choose the most respectful apology',
      options: [
        { text: 'माफ़ कीजिए (Maaf kijiye)', correct: true },
        { text: 'कोई बात नहीं (Koi baat nahi)', correct: false },
        { text: 'माफ़ करना (Maaf karna)', correct: false },
      ],
      explanation: "With an elder, use the formal 'maaf kijiye'. 'Maaf karna' is for friends and casual scrapes. 'Koi baat nahi' is what HE says back to you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Sorry (informal)',
      correct: ['माफ़ करना', 'Maaf karna', 'maaf karna', 'maaf karnaa'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the formal apology to a stranger',
      sentence: '_____, मैं देर से आया।',
      options: ['माफ़ कीजिए (Maaf kijiye)', 'धन्यवाद (Dhanyavaad)', 'कृपया (Kripaya)'],
      correct: 'माफ़ कीजिए (Maaf kijiye)',
      context: 'You arrived late to a business meeting in Bandra Kurla Complex.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build the formal apology',
      words: ['कीजिए (kijiye)', 'माफ़ (Maaf)'],
      correct: ['माफ़ (Maaf)', 'कीजिए (kijiye)'],
      translation: 'Please forgive me',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: "No problem / It's nothing",
      correct: ['कोई बात नहीं', 'Koi baat nahi', 'koi baat nahi', 'koi baat nahin'],
    },
  ],

  rwenDialogue: {
    intro: "You're 15 minutes late to meet a senior colleague at a cafe in Bandra. He's been waiting with cold filter coffee. You owe a real apology.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आप कहाँ थे? मैं काफ़ी देर से इंतज़ार कर रहा हूँ। (Aap kahaan the? Main kaafi der se intezaar kar raha hoon.)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'माफ़ कीजिए, मैं देर से आया (Maaf kijiye, main der se aaya)', native: 'Please forgive me, I came late', correct: true, feedback: "Direct, formal, complete. He nods and lets it go." },
          { target: 'माफ़ करना (Maaf karna)', native: 'Sorry', correct: false, feedback: "Acceptable with a friend — but a senior colleague who waited deserves the formal 'maaf kijiye'." },
          { target: 'कोई बात नहीं (Koi baat nahi)', native: "It's nothing", correct: false, feedback: "That's HIS line back to you, not yours. You're the one apologising." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'कोई बात नहीं। चलिए शुरू करते हैं। (Koi baat nahi. Chaliye shuru karte hain.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "An apology in the right register restores the room fast. Formal for the senior, informal for the friend — same word, different gear.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please forgive me (formal apology)', correct: ['माफ़ कीजिए', 'Maaf kijiye', 'maaf kijiye'] },
      { prompt: "No problem / It's fine", correct: ['कोई बात नहीं', 'Koi baat nahi', 'koi baat nahi', 'koi baat nahin'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you bump into someone or interrupt them, say 'maaf kijiye' (or 'maaf karna' for a friend) out loud. Feel the weight in the formal version.",
    rwenSignoff: "Apology, properly given, is its own kind of strength. Phir milenge.",
  },

  phase8: {
    scenario: "You're rushing through Khan Market with shopping bags and clip an elderly Sardar uncle's elbow hard enough to spin his bag of paneer. He stops dead and turns. You've got three seconds to apologise properly before this turns into a scene.",
    rwenRole: "Singh Uncle — ~70, retired Air Force, sharp blue turban, zero patience for a casual 'sorry' from someone who knocked him; expects the formal register and direct eye contact.",
    successCriteria: "User uses the FULL formal 'Maaf kijiye' (NOT informal 'Maaf karna' — he's an elder you physically bumped) and waits for him to release with 'Koi baat nahi' before moving on, rather than mumbling and fleeing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
