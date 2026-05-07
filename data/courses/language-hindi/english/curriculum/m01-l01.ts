import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-namaste',
  module: 1,
  lesson: 1,
  title: 'Namaste — The Greeting Bow',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Namaste! One word, palms together at your chest, a small bow — and you've already shown respect, hello, and 'I see the divine in you' all at once. Bollywood didn't invent it. India has been doing this for 3,000 years.",
    culturalNote: "'Namaste' (नमस्ते) literally means 'I bow to you'. It works across all of India — North, South, every state, every age. The hands-together gesture (called the 'namaskar mudra') is part of the word. Saying it without the hands feels half-finished to many Indians.",
  },

  chunks: [
    {
      id: 'namaste',
      target: 'नमस्ते',
      native: 'Hello / I bow to you (universal)',
      literal: 'Namaste — namah (bow) + te (to you)',
      emoji: '🙏',
      phonetic: 'nuh-mus-TAY',
      audioRef: null,
    },
    {
      id: 'namaskar',
      target: 'नमस्कार',
      native: 'Hello (more formal, more respectful)',
      literal: 'Namaskar — fuller, more reverent form',
      emoji: '🛕',
      phonetic: 'nuh-mus-KAAR',
      audioRef: null,
    },
    {
      id: 'aap_kaise_hain',
      target: 'आप कैसे हैं?',
      native: 'How are you? (formal/respectful)',
      literal: 'Aap kaise hain — You(formal) how are?',
      emoji: '🤲',
      phonetic: 'AAP KAY-say HAIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Aap — the respect pronoun',
    explanation: "Hindi has THREE words for 'you'. 'Aap' (आप) is the respectful form — for elders, strangers, anyone you don't know well. Get this wrong and you sound either rude or oddly distant. Today we lock in 'Aap'.",
    examples: [
      { target: 'Aap kaise hain?', native: 'How are you? (formal — to elder/stranger)' },
      { target: 'Aap kahan hain?', native: 'Where are you? (formal)' },
      { target: 'Namaste, aap kaise hain?', native: 'Hello, how are you? (the standard polite opener)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi phrase to its meaning',
      pairs: [
        { left: 'Namaste', right: 'Hello (universal)' },
        { left: 'Namaskar', right: 'Hello (more formal)' },
        { left: 'Aap kaise hain?', right: 'How are you? (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the polite greeting',
      sentence: 'Namaste, _____ kaise hain?',
      options: ['aap', 'tum', 'main'],
      correct: 'aap',
      context: "You're greeting your friend's grandmother — use the respectful form.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Hello / I bow to you',
      correct: ['Namaste', 'namaste'],
    },
    {
      type: 'build_sentence',
      instruction: 'Greet a respected elder — put the words in order',
      words: ['hain?', 'Namaste,', 'kaise', 'aap'],
      correct: ['Namaste,', 'aap', 'kaise', 'hain?'],
      translation: 'Hello, how are you? (formal)',
    },
    {
      type: 'multiple_choice',
      instruction: 'An elder folds their hands and says "Namaste". What do you do?',
      question: 'Choose the right response',
      options: [
        { text: 'Fold your hands and say "Namaste, aap kaise hain?"', correct: true },
        { text: 'Wave and say "Hi"', correct: false },
        { text: 'Bow silently without speaking', correct: false },
      ],
      explanation: "You mirror the gesture (hands together) and the word, then add the wellness check 'Aap kaise hain?'. Skipping the hands feels incomplete.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi — formal',
      prompt: 'How are you? (to an elder)',
      correct: ['Aap kaise hain?', 'Aap kaise hain', 'aap kaise hain?', 'aap kaise hain'],
    },
  ],

  rwenDialogue: {
    intro: "You've just arrived at a small temple in Varanasi. An older priest is sitting near the entrance and looks up as you approach. Greet him properly.",
    lines: [
      {
        speaker: 'npc',
        target: 'नमस्ते',
        native: 'Namaste (Hello)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, aap kaise hain?', native: 'Hello, how are you? (formal)', correct: true, feedback: 'Perfect — folded hands, respectful pronoun. He smiles back.' },
          { target: 'Hi, kaise ho?', native: 'Hi, how are you? (informal)', correct: false, feedback: "Too casual — 'kaise ho' is for friends. With a priest, use 'aap kaise hain?'." },
          { target: 'Namaskar', native: 'Hello (formal)', correct: false, feedback: "Polite, but pair it with the wellness check — 'Namaste, aap kaise hain?' is the full opener." },
        ],
      },
      {
        speaker: 'npc',
        target: 'मैं ठीक हूँ, धन्यवाद',
        native: 'I am well, thank you',
      },
      {
        speaker: 'rwen',
        rwenLine: "You showed respect with one word and a gesture. That's how India opens its doors.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Hello (in Hindi — the universal greeting)',
        correct: ['Namaste', 'namaste'],
      },
      {
        prompt: 'How are you? (formal, to an elder)',
        correct: ['Aap kaise hain?', 'Aap kaise hain', 'aap kaise hain?', 'aap kaise hain'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Namaste' to someone today — with the hands-together gesture. Even silently to yourself in the mirror counts. Notice how it changes your posture.",
    rwenSignoff: "I'll ask you tomorrow. Phir milenge — we will meet again.",
  },

  phase8: {
    scenario: "It's a warm morning in Old Delhi and you've been invited to your colleague Priya's home for the first time. Her grandmother — the matriarch of the joint family — is seated on the sofa as you step into the living room. She looks up and folds her hands. Your opening greeting will travel through the whole family by lunchtime.",
    rwenRole: "Dadi-ji — Priya's grandmother, ~72, traditional and observant; she notices respect immediately and warms up fast when she sees the hands-together namaste done properly.",
    successCriteria: "User opens with 'Namaste' (NOT casual 'Hi' or English 'Hello'), uses the formal 'Aap kaise hain?' (NOT informal 'kaise ho?') because she's an elder, ideally mirrors the folded-hands gesture in their description, and stays in the respectful 'aap' form throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
