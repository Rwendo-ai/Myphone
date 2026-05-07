import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-survival-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 2 cap. Café, market, taxi — every survival scenario. 주세요 + 얼마예요? + 어디예요? + 뭐예요? + 천천히 말해주세요. You can now order, pay, navigate, ask, and slow people down. That's traveler-tier Korean.",
    culturalNote: "Korean survival language is built around politeness verbs (주세요, 말해주세요) and three-distance pointers (이/그/저). Most travel mishaps are solved by combining two phrases you already know.",
  },

  chunks: [
    { id: 'review_juseyo', target: '주세요', native: 'Please give me / Please do', literal: 'give-please', emoji: '🙏', phonetic: 'ju-se-yo', audioRef: null },
    { id: 'review_eolma', target: '얼마예요?', native: 'How much is it?', literal: 'how-much-is?', emoji: '💵', phonetic: 'eol-ma-ye-yo', audioRef: null },
    { id: 'review_eodi', target: '어디예요?', native: 'Where is it?', literal: 'where-is?', emoji: '📍', phonetic: 'eo-di-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'The Survival Loop',
    explanation: "Five tools handle 90% of traveler interactions. Stack them in any order.",
    examples: [
      { target: '이거 주세요', native: 'Order' },
      { target: '얼마예요?', native: 'Pay' },
      { target: '어디예요?', native: 'Navigate' },
      { target: '이게 뭐예요?', native: 'Ask' },
      { target: '천천히 말해주세요', native: 'Rescue' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match tool to function', pairs: [
      { left: '주세요', right: 'Order' },
      { left: '얼마예요?', right: 'Pay / price' },
      { left: '어디예요?', right: 'Navigate' },
    ]},
    { type: 'multiple_choice', instruction: "Lost in Itaewon, can't find the bathroom, the local speaks fast. Best combo?", question: 'Pick the survival stack', options: [
      { text: '죄송합니다, 화장실 어디예요? 천천히 말해주세요', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: 'Soften → ask location → request slow speech. Three tools chained.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's too expensive", correct: ['너무 비싸요', 'neomu bissayo'] },
    { type: 'fill_blank', instruction: "Order at a café", sentence: '커피 _____.', options: ['주세요', '얼마예요', '어디예요'], correct: '주세요', context: 'Asking for the coffee.' },
    { type: 'build_sentence', instruction: 'Build "What is this? How much?"', words: ['얼마예요?', '이게 뭐예요?'], correct: ['이게 뭐예요?', '얼마예요?'], translation: 'What is this? How much?' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I don't understand", correct: ['잘 모르겠어요', 'jal moreugesseoyo'] },
  ],

  rwenDialogue: {
    intro: "Hongdae café-then-street-stall combo. You order, pay, then ask the way to the subway and bargain on a souvenir. Lead the entire run.",
    lines: [
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Would you like to order?' },
      { speaker: 'user', userChoices: [
        { target: '커피 주세요', native: 'Coffee please', correct: true, feedback: 'Survival key 1 — order with 주세요.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: "Order first, then price." },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'You just got here.' },
      ]},
      { speaker: 'npc', target: '4,500원입니다.', native: '4,500 won.' },
      { speaker: 'user', userChoices: [
        { target: '여기 있어요. 감사합니다', native: "Here you go. Thank you", correct: true, feedback: 'Polite hand-off + thanks. Smooth.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Café prices are fixed — don\'t bargain coffee.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Wrong register and wrong moment.' },
      ]},
      { speaker: 'npc', target: '감사합니다, 안녕히 가세요!', native: 'Thank you, goodbye!' },
      { speaker: 'user', userChoices: [
        { target: '안녕히 계세요', native: 'Goodbye (you stay, I leave)', correct: true, feedback: "You're leaving, she's staying. 계세요. Module 2 closed." },
        { target: '안녕히 가세요', native: 'Goodbye (you stay, they leave)', correct: false, feedback: 'Wrong direction.' },
        { target: '잘 가', native: 'Bye (banmal)', correct: false, feedback: 'Banmal to a stranger.' },
      ]},
      { speaker: 'rwen', rwenLine: "A complete survival conversation in Korean — order, pay, farewell. Module 2 closed. You can travel solo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please give me this', correct: ['이거 주세요', 'igeo juseyo'] },
      { prompt: 'Where is the bathroom?', correct: ['화장실 어디예요?', 'hwajangsil eodieyo'] },
    ],
  },

  mission: {
    title: "Your Module 2 Mission",
    task: "Run a full mental survival loop today: order, ask price, ask location, ask 'what is this?', request slow speech. Five tools, one trip.",
    rwenSignoff: "Module 2 closed. You can survive Korea now. Module 3 = identity.",
  },

  phase8: {
    scenario: "A full Hongdae afternoon: order at café, ask the way to the subway, browse a street stall, bargain politely, find the bathroom, navigate the language barrier when someone speaks too fast.",
    rwenRole: "Multiple — café barista, street vendor, passerby, all polite Koreans.",
    successCriteria: "User chains at least four of the five survival tools (주세요, 얼마예요?, 어디예요?, 뭐예요?, 천천히 말해주세요). Stays polite throughout. Uses 안녕히 가세요/계세요 correctly.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
