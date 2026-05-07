import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is it. Everything from this module — in one conversation. No new words today. Just you, me, and the Hindi you've built. Let's see what you can do.",
    culturalNote: "A full first encounter in Hindi flows like this: greeting → wellness check → name exchange → origin → open-door farewell. Each beat builds trust. By the end, you're not strangers — you're the start of a connection.",
  },

  chunks: [
    {
      id: 'review_namaste',
      target: 'नमस्ते, आप कैसे हैं?',
      native: 'Hello, how are you? (formal — universal opener)',
      literal: 'Namaste, aap kaise hain — Hello, you(formal) how are?',
      emoji: '🤝',
      phonetic: 'nuh-mus-TAY, AAP KAY-say HAIN',
      audioRef: null,
    },
    {
      id: 'review_naam',
      target: 'आपका नाम क्या है?',
      native: 'What is your name? (formal)',
      literal: 'Aapka naam kya hai — Your(formal) name what is?',
      emoji: '🏷️',
      phonetic: 'AAP-kaa NAAM KYAA HAY',
      audioRef: null,
    },
    {
      id: 'review_phir_milenge',
      target: 'फिर मिलेंगे',
      native: 'We will meet again (everyday goodbye)',
      literal: 'Phir milenge — again will-meet',
      emoji: '👋',
      phonetic: 'PHIR mil-EN-gay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Full Greeting Flow',
    explanation: "A complete Hindi first encounter has five beats. Each one matters. Miss a step and the conversation feels rushed or cold.",
    examples: [
      { target: 'Namaste / Suprabhat / Shubh sandhya', native: '1. Greeting (time-aware)' },
      { target: 'Aap kaise hain?', native: '2. Wellness check' },
      { target: 'Aapka naam kya hai?', native: '3. Name exchange' },
      { target: 'Aap kahaan se hain?', native: '4. Origin' },
      { target: 'Phir milenge', native: '5. Open-door farewell' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each step to the right phrase',
      pairs: [
        { left: 'Greeting (universal)', right: 'Namaste' },
        { left: 'Wellness check (formal)', right: 'Aap kaise hain?' },
        { left: 'Everyday farewell', right: 'Phir milenge' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's morning. A new colleague greets you: 'Namaste, aap kaise hain?' — what is the BEST reply?",
      question: 'Choose the complete, natural reply',
      options: [
        { text: 'Main theek hoon, dhanyavaad. Aapka naam kya hai?', correct: true },
        { text: 'Namaste', correct: false },
        { text: 'Main theek hoon', correct: false },
      ],
      explanation: "The best reply answers the wellness check AND continues the conversation by asking their name — that's how you build connection.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'What is your name? (formal)',
      correct: ['Aapka naam kya hai?', 'Aapka naam kya hai', 'aapka naam kya hai?', 'aapka naam kya hai'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the everyday farewell',
      sentence: 'Theek hai, _____ milenge!',
      options: ['phir', 'alvida', 'sab'],
      correct: 'phir',
      context: 'A new acquaintance is heading off after a great conversation.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am well, and you?"',
      words: ['hoon,', 'theek', 'aap?', 'Main'],
      correct: ['Main', 'theek', 'hoon,', 'aap?'],
      translation: 'I am well, and you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Pleased to meet you (formal)',
      correct: ['Aapse milkar khushi hui', 'aapse milkar khushi hui', 'Aapse milkar khushi hui.', 'aapse milkar khushi hui.'],
    },
  ],

  rwenDialogue: {
    intro: "A full conversation. You've earned this. I'll be a stranger you meet on a Mumbai-bound train — you lead the whole exchange.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, aap kaise hain?', native: 'Hello, how are you? (formal)', correct: true, feedback: "Strong opening — universal and respectful. The conversation begins." },
          { target: 'Kya haal hai?', native: "What's up? (casual)", correct: false, feedback: "Too casual for a first meeting with a stranger. 'Namaste, aap kaise hain?' opens the door more warmly." },
          { target: 'Kaise ho?', native: 'How are you? (informal)', correct: false, feedback: "Reserve informal greetings for friends. With a stranger, start with 'Aap kaise hain?'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'मैं ठीक हूँ, धन्यवाद। आपका नाम क्या है?',
        native: 'I am well, thank you. What is your name?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mera naam ... hai. Aap kahaan se hain?', native: 'My name is ... Where are you from?', correct: true, feedback: "You answered and kept the conversation going. That's fluency in motion." },
          { target: 'Main theek hoon', native: "I'm well", correct: false, feedback: "Good — but answer their NAME question too. Use 'Mera naam ... hai' to introduce yourself." },
          { target: 'Aap kaise hain?', native: 'How are you?', correct: false, feedback: "They already asked you that — now share your name with 'Mera naam ... hai'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'आपसे मिलकर खुशी हुई। मैं मुंबई से हूँ। फिर मिलेंगे!',
        native: "Pleased to meet you. I'm from Mumbai. We'll meet again!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Phir milenge! Apna khayal rakhna.', native: "We'll meet again! Take care.", correct: true, feedback: "You closed it warmly with the open-door Hindi goodbye. Beautifully done." },
          { target: 'Alvida', native: 'Goodbye (dramatic / final)', correct: false, feedback: "Too final for a normal train parting. 'Phir milenge' keeps the door open." },
          { target: 'Dhanyavaad', native: 'Thank you', correct: false, feedback: "Close — but this is the farewell beat. Use 'Phir milenge' to mirror their goodbye." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A complete Hindi conversation. Greeting to goodbye — with respect, curiosity, and warmth. You did it. Module 1 complete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hello, how are you? (formal — universal opener)', correct: ['Namaste, aap kaise hain?', 'Namaste, aap kaise hain', 'namaste, aap kaise hain?', 'namaste, aap kaise hain', 'Namaste aap kaise hain?', 'namaste aap kaise hain?'] },
      { prompt: 'We will meet again (everyday Hindi goodbye)', correct: ['Phir milenge', 'phir milenge'] },
    ],
  },

  mission: {
    title: "Your Module 1 Mission",
    task: "Have a complete Hindi first encounter today — even if it's with yourself in the mirror. Greeting, wellness check, name, origin, farewell. All five beats.",
    rwenSignoff: "You've walked through Module 1. The door to Hindi is open. Phir milenge — we will meet again in Module 2.",
  },

  phase8: {
    scenario: "It's late morning at your colleague's family home in a Lucknow joint family. You've been brought inside to meet his nani (maternal grandmother) for the very first time. She's seated on a takhat (low wooden bed) sipping chai. This is THE encounter — you need to navigate the entire Module 1 cycle: greeting, wellness check, name exchange, origin, and a proper farewell when you eventually take your leave.",
    rwenRole: "Nani-ji — your colleague's maternal grandmother, ~76, sharp-eyed Lucknow matriarch with old-school manners; her judgement of you will travel through the whole family, so this conversation matters more than it looks.",
    successCriteria: "User runs all five beats — (1) opens with 'Namaste' (or 'Suprabhat' since it's morning), (2) formal wellness check 'Aap kaise hain?' in the aap form because she's an elder, (3) name exchange using 'Aapka naam kya hai?' and 'Mera naam ... hai', (4) origin via 'Aap kahaan se hain?' / 'Main ... se hoon', (5) parts with 'Phir milenge' and ideally adds 'Khuda hafiz' or 'Aapse milkar khushi hui' rather than a flat goodbye. Bonus credit for staying in the formal aap/hain register all the way through.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
