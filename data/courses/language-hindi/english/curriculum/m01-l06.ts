import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-aapka-naam',
  module: 1,
  lesson: 6,
  title: "Aapka Naam Kya Hai? — What's Your Name?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You can greet anyone now. But what comes after 'Namaste'? A name. Indian names carry meaning, lineage, sometimes whole stories — Aarav (peaceful), Diya (lamp), Krishna (the divine cowherd). Asking someone's name in Hindi is asking for a piece of their story.",
    culturalNote: "Many Indian first names are Sanskrit-rooted with literal meanings. Asking 'Aapka naam kya hai?' opens the door to a follow-up — 'meaning kya hai?' (what does it mean?). It's a normal Indian small-talk move, especially when meeting someone new in a joint family or at a wedding.",
  },

  chunks: [
    {
      id: 'aapka_naam',
      target: 'आपका नाम क्या है?',
      native: 'What is your name? (formal)',
      literal: 'Aapka naam kya hai — Your(formal) name what is?',
      emoji: '🏷️',
      phonetic: 'AAP-kaa NAAM KYAA HAY',
      audioRef: null,
    },
    {
      id: 'mera_naam',
      target: 'मेरा नाम ... है',
      native: 'My name is ...',
      literal: 'Mera naam ... hai — My name ... is',
      emoji: '🙋',
      phonetic: 'MAY-raa NAAM ... HAY',
      audioRef: null,
    },
    {
      id: 'aapse_milkar_khushi',
      target: 'आपसे मिलकर खुशी हुई',
      native: 'Pleased to meet you (formal)',
      literal: 'Aapse milkar khushi hui — From-you having-met happiness happened',
      emoji: '🤗',
      phonetic: 'AAP-say MIL-kar KHU-shee HU-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mera vs Aapka — My vs Your',
    explanation: "These two possessives appear constantly. 'Mera' (मेरा) means 'my' for masculine nouns. 'Aapka' (आपका) means 'your' (formal) for masculine nouns. They change with gender — 'meri' / 'aapki' for feminine — but for now, lock in this pair.",
    examples: [
      { target: 'Mera naam', native: 'My name (naam is masculine)' },
      { target: 'Aapka naam', native: 'Your name (formal)' },
      { target: 'Mera ghar', native: 'My house' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Aapka naam kya hai?', right: 'What is your name? (formal)' },
        { left: 'Mera naam ... hai', right: 'My name is ...' },
        { left: 'Aapse milkar khushi hui', right: 'Pleased to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "my name is..."',
      sentence: '_____ naam Anya hai.',
      options: ['Mera', 'Aapka', 'Tumhara'],
      correct: 'Mera',
      context: 'Introduce yourself.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'What is your name? (formal)',
      correct: ['Aapka naam kya hai?', 'Aapka naam kya hai', 'aapka naam kya hai?', 'aapka naam kya hai'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the question "What is your name?"',
      words: ['hai?', 'naam', 'Aapka', 'kya'],
      correct: ['Aapka', 'naam', 'kya', 'hai?'],
      translation: 'What is your name? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Pleased to meet you (formal)',
      correct: ['Aapse milkar khushi hui', 'Aapse milkar khushi hui.', 'aapse milkar khushi hui', 'aapse milkar khushi hui.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Aapka naam kya hai?" — what do they want to know?',
      question: 'What is this question asking?',
      options: [
        { text: 'Your name', correct: true },
        { text: 'Where you are from', correct: false },
        { text: 'How you are', correct: false },
      ],
      explanation: "'Aapka naam kya hai?' literally means 'Your name what is?' — asking for your name.",
    },
  ],

  rwenDialogue: {
    intro: "I've heard your greeting — now I want to know who you are. Let's introduce ourselves.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Aapka naam kya hai?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mera naam ... hai', native: 'My name is ...', correct: true, feedback: "Perfect introduction. Rwen smiles — they know your name now." },
          { target: 'Aapka naam kya hai?', native: 'What is your name?', correct: false, feedback: "That's the question — not the answer. They asked you first, now reply with 'Mera naam ... hai'." },
          { target: 'Aap kaise hain?', native: 'How are you?', correct: false, feedback: "That's a wellness check — they're asking for your name. Use 'Mera naam ... hai'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Aapse milkar khushi hui. Mera naam Rwen hai.',
      },
      {
        speaker: 'rwen',
        rwenLine: "A name exchanged is a connection made. We're not strangers anymore.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What is your name? (formal)', correct: ['Aapka naam kya hai?', 'Aapka naam kya hai', 'aapka naam kya hai?', 'aapka naam kya hai'] },
      { prompt: 'Pleased to meet you', correct: ['Aapse milkar khushi hui', 'aapse milkar khushi hui', 'Aapse milkar khushi hui.', 'aapse milkar khushi hui.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself in Hindi to one person today — even just 'Mera naam [your name] hai'. Watch their eyes light up.",
    rwenSignoff: "Your name in Hindi sounds like its own song. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Saturday afternoon at a wedding reception in a marigold-draped marquee outside Udaipur. Your colleague is taking you around to introduce you to her side of the family — and now you're standing in front of her chacha-ji (paternal uncle), a respected elder in a crisp kurta. He's never met you before. You'll need to greet, exchange names, and make him feel you took the introduction seriously.",
    rwenRole: "Chacha-ji — the bride's paternal uncle, ~62, dignified retired civil servant; he's introduced to many strangers at family weddings and remembers the ones who handle his name properly.",
    successCriteria: "User asks 'Aapka naam kya hai?' to learn his name (formal — NOT casual 'tumhara naam'), introduces themselves with 'Mera naam ... hai' (NOT just stating the bare name in English), and closes with 'Aapse milkar khushi hui' rather than skipping past it. Stays in respectful aap form because he's an elder.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
