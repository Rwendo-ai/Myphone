import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Buying a ticket — Ticket ख़रीदना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Station पर हैं — train 20 मिनट में। Ticket लेना है। English में: 'One ticket to ___, please. Round trip. How much?'",
    culturalNote: "Indian Railways दुनिया का सबसे बड़ा railway network — हर दिन 23 million यात्री। IRCTC app से booking — पूरी English में चलती। UK/US में: 'one-way' (single — UK में), 'return' (UK), 'round trip' (US) — कुछ भी आ सकता। Delhi Metro automated ticket counters पर English से चलते। 'Could I have...?' polite formula हर ticket counter पर। Indian Railways की unique कहानियाँ हैं — 'tatkal' booking, 'waiting list', 'AC chair car' — ये English वाक्यों में हमने ही बनाए।",
  },

  chunks: [
    {
      id: 'one_ticket',
      target: 'One ticket to Delhi, please.',
      native: 'दिल्ली का एक ticket, please।',
      literal: 'Delhi ka ek ticket',
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-DEL-ee-PLEEZ',
      audioRef: null,
    },
    {
      id: 'round_trip',
      target: 'A return, please.',
      native: 'आना-जाना, please।',
      literal: 'Aana-jaana',
      emoji: '🔁',
      phonetic: 'uh-ree-TURN-PLEEZ',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much is it?',
      native: 'कितने का है?',
      literal: 'Kitne ka hai',
      emoji: '💷',
      phonetic: 'how-MUTCH-iz-it',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Travel transactions',
    explanation: "Structure: NUMBER + 'ticket(s) to' + PLACE + 'please'। TYPE: 'one-way'/'single' (एक तरफ़) या 'return'/'round trip' (आना-जाना)। PRICE: 'How much?'। UK में 'return', US में 'round trip' — दोनों चलते।",
    examples: [
      { target: 'One ticket to Delhi, please.', native: 'दिल्ली का एक ticket, please।' },
      { target: 'A return, please.',                    native: 'आना-जाना, please।' },
      { target: 'How much is it?',                      native: 'कितने का है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Ticket शब्द मिलाएँ',
      pairs: [
        { left: 'One ticket to ___, please', right: '___ का एक ticket' },
        { left: 'A return, please',           right: 'आना-जाना' },
        { left: 'How much is it?',             right: 'कितने का?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — Delhi station पर',
      prompt: 'दिल्ली का एक ticket, please।',
      correct: [
        'One ticket to Delhi, please.',
        'A ticket to Delhi, please.',
        'One ticket to Delhi please.',
        'one ticket to Delhi, please.',
        'Could I have one ticket to Delhi, please?',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आना-जाना, please।',
      correct: [
        'A return, please.',
        'Return, please.',
        'A round trip, please.',
        'Round trip, please.',
        'a return, please.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'दाम पूछना',
      words: ['it', 'is', 'much', 'How'],
      correct: ['How', 'much', 'is', 'it'],
      translation: 'कितने का?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दो tickets',
      prompt: 'Mumbai के दो ticket, please।',
      correct: [
        'Two tickets to Mumbai, please.',
        'Two tickets to Mumbai please.',
        'Could I have two tickets to Mumbai, please?',
        'two tickets to Mumbai, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Counter पर पूछा कौन-सा type',
      sentence: "Is that a single or a ____?",
      options: ['return', 'taxi', 'station'],
      correct: 'return',
      context: "UK में 'single' = one-way, 'return' = round trip।",
    },
  ],

  rwenDialogue: {
    intro: "Delhi station पर हैं। Mumbai जाना है, अगले दिन वापस। Ticket counter।",
    lines: [
      { speaker: 'npc', target: "Hi, where to?", native: 'नमस्ते, कहाँ जाना है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "One ticket to Mumbai, please. A return.", native: 'Mumbai का एक ticket, please। आना-जाना।', correct: true,  feedback: 'बढ़िया — एक ही sentence में जगह और type।' },
          { target: "Mumbai.",                                              native: 'Mumbai।',                                                          correct: false, feedback: "अधूरा — 'one ticket' और 'return' बोलें।" },
          { target: "Money.",                                                 native: 'पैसा।',                                                            correct: false, feedback: "जगह नहीं बोली। 'One ticket to ___' से शुरू।" },
        ],
      },
      { speaker: 'npc', target: "Right — single or return?", native: 'अच्छा — single या return?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A return, please. How much is it?", native: 'आना-जाना, please। कितने का?', correct: true,  feedback: 'बढ़िया — दाम भी पूछ लिया।' },
          { target: "Return.",                                  native: 'Return।',                  correct: false, feedback: "'please' और दाम जोड़ें।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'One ticket to ___, return, please' — हर station पर काम।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'A return, please (अंग्रेज़ी में)',         correct: ['A return, please.', 'A return, please', 'Return, please.', 'A round trip, please.', 'a return, please.'] },
      { prompt: 'How much is it? (अंग्रेज़ी में)',           correct: ['How much is it?', 'How much is it', 'How much?', 'how much is it?', 'What is the price?'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल्पना करें Delhi station पर हैं। पूरी बातचीत English में: 'One ticket to Mumbai, please. A return. How much is it?' बिना देखे।",
    rwenSignoff: "Ticket counter पर समझ नहीं — late पहुँचने का खेल। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at the IRCTC ticket counter at New Delhi station. You need a return ticket to Mumbai, leaving today and coming back next Friday. Buy it from the agent.",
    rwenRole: "Nomvula, 45, ticket agent at Indian Railways. Efficient, asks short follow-up questions (class, time, return date). Speaks clear Indian English.",
    successCriteria: "User asks for 'one ticket to Mumbai', specifies 'return' or 'round trip', asks 'How much is it?', confirms a return date when prompted, and thanks her.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
