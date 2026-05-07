import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-kahaan-hai',
  module: 2,
  lesson: 7,
  title: 'Kahaan Hai? — Where Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lost in Mumbai? Looking for the nearest bathroom in Jaipur? Trying to find platform 7 at New Delhi station? Three words handle all of it: 'kahaan hai?' Where is it. Add the noun and you're navigating.",
    culturalNote: "Indian directions are wonderfully chaotic — landmarks over street names, hand gestures over compass points, 'side mein' (on the side) and 'thoda aage' (a bit ahead) doing most of the work. People will almost never tell you they don't know — they'll point in the rough direction and send you on. The fix: ask two or three people, triangulate. 'Kahaan hai?' is the opener that gets the conversation going.",
  },

  chunks: [
    {
      id: 'kahaan_hai',
      target: 'कहाँ है?',
      native: 'Where is it?',
      literal: 'Kahaan hai — where is',
      emoji: '🗺️',
      phonetic: 'ka-HAAN hai',
      audioRef: null,
    },
    {
      id: 'station_kahaan',
      target: 'स्टेशन कहाँ है?',
      native: 'Where is the station?',
      literal: 'Station kahaan hai — station where is',
      emoji: '🚂',
      phonetic: 'STAY-shan ka-HAAN hai',
      audioRef: null,
    },
    {
      id: 'yahaan_wahaan',
      target: 'यहाँ / वहाँ',
      native: 'Here / there',
      literal: 'Yahaan / Wahaan — here / there',
      emoji: '👉',
      phonetic: 'ya-HAAN / wa-HAAN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Noun + kahaan hai? — the where-question',
    explanation: "To ask where anything is, just put the noun first and 'kahaan hai?' after it. Hindi puts the verb at the end of sentences — opposite of English. 'Bathroom kahaan hai?' (where is the bathroom?), 'metro kahaan hai?' (where is the metro?). Borrowed English nouns work fine — 'auto kahaan hai?', 'ATM kahaan hai?'",
    examples: [
      { target: 'स्टेशन कहाँ है? (Station kahaan hai?)', native: 'Where is the station?' },
      { target: 'बाथरूम कहाँ है? (Bathroom kahaan hai?)', native: 'Where is the bathroom?' },
      { target: 'यहाँ / वहाँ (Yahaan / Wahaan)', native: 'Here / there' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'कहाँ है? (Kahaan hai?)', right: 'Where is it?' },
        { left: 'स्टेशन कहाँ है? (Station kahaan hai?)', right: 'Where is the station?' },
        { left: 'यहाँ (Yahaan)', right: 'Here' },
        { left: 'वहाँ (Wahaan)', right: 'There' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask where the metro is',
      sentence: 'मेट्रो _____?',
      options: ['कहाँ है (kahaan hai)', 'क्या है (kya hai)', 'कौन है (kaun hai)'],
      correct: 'कहाँ है (kahaan hai)',
      context: "You're outside Bandra station looking for the local train platform.",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Where is it?',
      correct: ['कहाँ है?', 'Kahaan hai?', 'kahaan hai', 'kahaan hai?'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at New Delhi railway station and need to find platform 7 in a hurry. What's the cleanest opener to a porter?",
      question: 'Choose the best phrase',
      options: [
        { text: 'भैया, प्लेटफ़ॉर्म सात कहाँ है? (Bhaiya, platform saat kahaan hai?)', correct: true },
        { text: 'यहाँ है (Yahaan hai)', correct: false },
        { text: 'धन्यवाद (Dhanyavaad)', correct: false },
      ],
      explanation: "'Bhaiya' (brother) is the friendly call to a working-age man. Lead with it, then ask 'platform saat kahaan hai?' — works every time at any Indian station.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Where is the bathroom?"',
      words: ['है (hai)', 'बाथरूम (Bathroom)', 'कहाँ (kahaan)'],
      correct: ['बाथरूम (Bathroom)', 'कहाँ (kahaan)', 'है (hai)'],
      translation: 'Where is the bathroom?',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'There (over there)',
      correct: ['वहाँ', 'Wahaan', 'wahaan'],
    },
  ],

  rwenDialogue: {
    intro: "You step out of Churchgate station in Mumbai and need to find the nearest ATM. A vendor is selling vada pav nearby.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'भैया, ATM कहाँ है? (Bhaiya, ATM kahaan hai?)', native: 'Brother, where is the ATM?', correct: true, feedback: "Friendly, direct, exactly how locals ask. He looks up and points." },
          { target: 'ATM (ATM)', native: 'ATM', correct: false, feedback: "Just shouting the noun is rough. Wrap it in 'kahaan hai?' to make it a polite question." },
          { target: 'यहाँ है (Yahaan hai)', native: "It's here", correct: false, feedback: "That's a statement. You're trying to find out where it IS, not tell him." },
        ],
      },
      {
        speaker: 'npc',
        target: 'वहाँ — सीधा, फिर दाएँ। (Wahaan — seedha, phir dayen.)',
        native: 'Over there — straight, then right.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'धन्यवाद! (Dhanyavaad!)', native: 'Thank you!', correct: true, feedback: "Warm, clean, complete. He'd already turned back to his pan, but he smiles." },
          { target: 'वहाँ (Wahaan)', native: 'There', correct: false, feedback: "Just repeating his word doesn't close the loop — thank him before walking off." },
          { target: 'कहाँ है? (Kahaan hai?)', native: 'Where is it?', correct: false, feedback: "He just told you. Don't ask again — thank and move." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words — 'kahaan hai?' — and Mumbai opens up to you. That's the unlock.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where is it?', correct: ['कहाँ है?', 'Kahaan hai?', 'kahaan hai', 'kahaan hai?'] },
      { prompt: 'There (over there)', correct: ['वहाँ', 'Wahaan', 'wahaan'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three things in your immediate surroundings. Practice asking '[noun] kahaan hai?' for each — phone kahaan hai, chai kahaan hai, kitchen kahaan hai. Build the muscle for the real moment.",
    rwenSignoff: "Find your way, ask your way. Phir milenge.",
  },

  phase8: {
    scenario: "You've just stepped out of Andheri station in Mumbai during evening rush hour and you need to find a specific cafe in a side street ten minutes away — but the GPS is spinning, the signs are in Marathi, and there's a vada-pav guy at the corner who's been working this spot since 1998. Ask, listen, walk.",
    rwenRole: "Mahesh Kaka — ~55, vada-pav vendor outside Andheri East exit, hands always greasy, knows every alley in a five-block radius; will give precise landmark-based directions if you ask in Hindi, will ignore you if you don't.",
    successCriteria: "User opens with 'Kaka, [cafe name] kahaan hai?' (NOT a cold English 'do you know...?'), uses 'wahaan' to confirm the direction he points, and chains 'samajh nahi aaya, dheere boliye' from lesson 5 if his rapid-fire landmark directions go too fast — the where-pattern under live pressure.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
