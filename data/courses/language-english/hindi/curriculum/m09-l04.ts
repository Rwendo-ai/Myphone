import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Bus, Taxi, Train — बस, टैक्सी, ट्रेन',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "India में हम auto, Ola, Uber, metro, train, bus लेते। UK/US में 'the bus', 'the tube', 'an Uber'। Vehicles same — शब्द अलग।",
    culturalNote: "India में transport options भरे: 'Ola/Uber' (booked through app), 'auto-rickshaw' (street-hailed, three-wheeler), 'kaali-peeli' (Mumbai's iconic taxi), 'Indian Railways' (दुनिया का सबसे बड़ा railway network), 'Delhi Metro/Mumbai Metro' (modern). UK में 'tube' = London Underground, 'bus' = double-decker, 'train' = National Rail। US में 'subway' = NYC underground, 'cab' = taxi। 'Uber' अब global word — हर जगह काम करता। Auto-rickshaw सिर्फ़ South Asia में, पर अब Bangkok, Egypt में भी। UK/US दोस्त को 'auto-rickshaw' बोलने पर वो interested हो जाते — 'a three-wheeled motor taxi' explain करें।",
  },

  chunks: [
    {
      id: 'the_bus',
      target: 'The bus',
      native: 'बस',
      literal: 'Bus',
      emoji: '🚌',
      phonetic: 'thuh-BUS',
      audioRef: null,
    },
    {
      id: 'taxi',
      target: 'A taxi / an auto-rickshaw',
      native: 'टैक्सी / ऑटो',
      literal: 'Taxi / Auto',
      emoji: '🚕',
      phonetic: 'uh-TAK-see',
      audioRef: null,
    },
    {
      id: 'the_train',
      target: 'The train',
      native: 'ट्रेन',
      literal: 'Train',
      emoji: '🚆',
      phonetic: 'thuh-TRAYN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Transport nouns',
    explanation: "'The bus' (specific bus आती है), 'a taxi' (कोई भी taxi)। Verb 'take' transport के साथ चलता: 'I take the bus', 'I'm taking an Uber'। Indian-specific: 'auto-rickshaw' (UK/US में novel — explain करना पड़ता)।",
    examples: [
      { target: 'The bus',   native: 'बस' },
      { target: 'A taxi',    native: 'टैक्सी' },
      { target: 'The train', native: 'ट्रेन' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Transport शब्द मिलाएँ',
      pairs: [
        { left: 'The bus',   right: 'बस' },
        { left: 'A taxi',    right: 'टैक्सी' },
        { left: 'The train', right: 'ट्रेन' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — बस ले रहे',
      prompt: "मैं बस ले रहा हूँ।",
      correct: [
        "I'm taking the bus.",
        "I am taking the bus.",
        "I'm taking the bus",
        "i'm taking the bus.",
        "I take the bus.",
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — train कब आती है',
      prompt: 'ट्रेन कब आती है?',
      correct: [
        'When does the train arrive?',
        'When does the train come?',
        'When is the train?',
        'when does the train arrive?',
        'What time does the train arrive?',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'ऑफ़िस जाने का तरीक़ा',
      words: ['take', 'I', 'bus', 'the'],
      correct: ['I', 'take', 'the', 'bus'],
      translation: 'मैं बस लेता हूँ',
    },
    {
      type: 'fill_blank',
      instruction: 'London में airport जाना',
      sentence: "Let's take ____ tube to Heathrow.",
      options: ['the', 'a', 'an'],
      correct: 'the',
      context: "London में 'the tube' = पूरा system।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — UK दोस्त को auto explain',
      prompt: 'Auto-rickshaw एक तीन-पहिए की टैक्सी जैसी है।',
      correct: [
        "An auto-rickshaw is like a three-wheeled taxi.",
        "An auto is like a small three-wheeled taxi.",
        "An auto-rickshaw is a three-wheeler taxi.",
        "Auto-rickshaw is like a small three-wheeled motor taxi.",
        "an auto-rickshaw is like a three-wheeled taxi.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "London में Sarah के साथ हैं। उसने पूछा कि auto-rickshaw क्या है।",
    lines: [
      { speaker: 'npc', target: "So what's an auto-rickshaw exactly? Is it like a taxi?", native: 'Auto-rickshaw क्या है? Taxi जैसी?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, but smaller. An auto-rickshaw is like a three-wheeled taxi — open on the sides, and you flag it down on the street.", native: 'हाँ, पर छोटी। तीन-पहिए की taxi जैसी — किनारे खुले, सड़क पर रोकते हैं।', correct: true,  feedback: 'बढ़िया — explanation साफ़।' },
          { target: "Auto.",                                                                                                            native: 'Auto।',                                                                              correct: false, feedback: 'अधूरा — Sarah को समझाना है।' },
          { target: "Is taxi.",                                                                                                             native: 'Taxi है।',                                                                              correct: false, feedback: 'फ़र्क़ बताइए — three wheels, open sides।' },
        ],
      },
      { speaker: 'npc', target: "Oh, like a tuk-tuk in Thailand! That's wild.", native: 'अरे, Thailand का tuk-tuk! मज़ेदार।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Auto-rickshaw English में पहुँच गया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'The bus (अंग्रेज़ी में)',   correct: ['The bus', 'the bus', 'A bus', 'a bus'] },
      { prompt: 'The train (अंग्रेज़ी में)', correct: ['The train', 'the train', 'A train', 'a train'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Airport जाने के तीन तरीक़े बताएँ। English में: 'I take the bus to ___', 'I take a taxi to ___', 'I take the train to ___'।",
    rwenSignoff: "Transport जानने वाला हर देश घूमता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at a London pub with a UK friend. They've never been to India and ask how auto-rickshaws work compared to London cabs. Explain in English so they really get it — including how you flag one down, the pricing, and the experience.",
    rwenRole: "Sarah, 32, your London friend. Curious, asks follow-up questions ('Is there a meter?', 'Is it safer than an Uber?'). Speaks fast, casual British English.",
    successCriteria: "User explains auto-rickshaw in English using comparison to taxi or tuk-tuk, mentions at least one feature (three wheels, flag down on street, meter or fare negotiation), and answers a follow-up question.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
