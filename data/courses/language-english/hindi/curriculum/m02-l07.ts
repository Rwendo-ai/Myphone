import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — ...कहाँ है?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! कोई जगह या चीज़ ढूँढनी हो — पूछिए 'Where is...?'। यह सवाल आपको toilet, exit, और लापता मिठाई के डिब्बे — सब तक पहुँचाएगा।",
    culturalNote: "हिन्दी में हम पूछते हैं 'Toilet कहाँ है?' — जगह आगे, 'कहाँ' अंत में। English में उल्टा है: 'Where is the bathroom?' — सवाल पहले, चीज़ बाद में। और एक बात — चीज़ से पहले 'the' लगता है। 'Where is bathroom?' adhura लगता है — proper question में 'the' छोड़िए मत।",
  },

  chunks: [
    {
      id: 'where_is_the_bathroom',
      target: 'Where is the bathroom?',
      native: 'Toilet कहाँ है?',
      literal: 'Where is the bathroom?',
      emoji: '🚻',
      phonetic: 'WHAIR-iz-thuh-BATH-room',
      audioRef: null,
    },
    {
      id: 'where_is_the_exit',
      target: 'Where is the exit?',
      native: 'बाहर निकलने का रास्ता कहाँ है?',
      literal: 'Where is the exit?',
      emoji: '🚪',
      phonetic: 'WHAIR-iz-thee-EK-sit',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'वहाँ',
      literal: 'Over there',
      emoji: '👉',
      phonetic: 'OH-ver-THAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Locative 'where'",
    explanation: "जगह का सवाल pattern: 'Where is + the + (चीज़)?'। 'The' बताता है कि चीज़ specific है — building की toilet, इस room का exit। जवाब छोटा हो सकता है: 'Over there' या 'Down the hall'।",
    examples: [
      { target: 'Where is the bathroom?', native: 'Toilet कहाँ है?' },
      { target: 'Where is the exit?',      native: 'बाहर निकलने का रास्ता कहाँ है?' },
      { target: 'Where is room 101?',      native: 'Room 101 कहाँ है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Where is the bathroom?', right: 'Toilet कहाँ है?' },
        { left: 'Where is the exit?',      right: 'बाहर निकलने का रास्ता कहाँ है?' },
        { left: 'Over there',               right: 'वहाँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आप एक meeting में हैं, toilet चाहिए',
      prompt: 'Toilet कहाँ है?',
      correct: [
        'Where is the bathroom?',
        'Where is the toilet?',
        'where is the bathroom?',
        'Where is the bathroom',
        'Where is the restroom?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरकर सवाल पूरा कीजिए',
      sentence: '____ is the exit?',
      options: ['Where', 'What', 'How'],
      correct: 'Where',
      context: "जगह के सवाल 'Where' से शुरू होते हैं।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप exit पूछ रहे हैं',
      words: ['the', 'is', 'Where', 'exit'],
      correct: ['Where', 'is', 'the', 'exit'],
      translation: 'बाहर निकलने का रास्ता कहाँ है?',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आपको रास्ता दिखाया गया है',
      prompt: 'वहाँ',
      correct: ['Over there', 'Over there.', 'over there', "It's over there", "It's over there."],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'Coffee shop कहाँ है?',
      correct: ['Where is the coffee shop?', 'Where is the coffee shop', 'where is the coffee shop?', 'Where is the cafe?'],
    },
  ],

  rwenDialogue: {
    intro: "आप एक college के office में हैं — admission documents जमा करने आए हैं। चाय बहुत हो गई है — toilet चाहिए। peon से पूछिए।",
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'नमस्ते, मैं मदद कर सकता हूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the bathroom?', native: 'सुनिए, toilet कहाँ है?',     correct: true,  feedback: 'बढ़िया — "Excuse me" से शुरू और सीधा सवाल।' },
          { target: 'Toilet?',                              native: 'Toilet?',                          correct: false, feedback: 'बहुत छोटा है — पूरा सवाल पूछिए।' },
          { target: 'I am lost.',                          native: 'मैं रास्ता भूल गया हूँ।',                       correct: false, feedback: 'आप खोए नहीं हैं — आपको toilet चाहिए। सीधा वही पूछिए।' },
        ],
      },
      { speaker: 'npc', target: "Sure — over there, on the right.", native: 'ज़रूर — वहाँ, दाईं तरफ़।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'Where is the bathroom?' हर तीसरी चाय के बाद काम आएगा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Where is the bathroom? (in English)', correct: ['Where is the bathroom?', 'Where is the bathroom', 'where is the bathroom?', 'Where is the toilet?', 'Where is the restroom?'] },
      { prompt: 'Over there (in English)',              correct: ['Over there', 'Over there.', 'over there', "It's over there"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज एक बार 'Where is the ...?' मुँह से बोलिए — कोई भी चीज़ डाल लीजिए (toilet, kitchen, बस stop)। आवाज़ confident हो — डरी हुई नहीं।",
    rwenSignoff: "जो पूछता है, वो खोता नहीं। मिलते हैं कल।",
  },

  phase8: {
    scenario: "You're at an English-language tech conference at a hotel in Bengaluru. You urgently need to find the bathroom and you're not sure where the registration desk moved to. Find a steward and ask.",
    rwenRole: "Thandi, 29, conference steward. Smiling, helpful, knows the venue inside out. Speaks clear Indian English.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the bathroom?' or 'Where is the registration desk?', understands directional response ('Over there', 'down the hall', 'on the right'), thanks her.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
