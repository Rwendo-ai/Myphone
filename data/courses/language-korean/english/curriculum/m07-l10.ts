import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-food-conversation',
  module: 7,
  lesson: 10,
  title: 'Food Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7 cap. BBQ + soju + banchan + jeong + paying ritual. The whole Korean dinner experience in one extended interaction.",
    culturalNote: "Korean dining is choreography: greet, order, pre-meal phrase, pour with two hands, react to food, request refills, post-meal phrase, the pay-dance, farewell. Each beat carries jeong.",
  },

  chunks: [
    { id: 'review_jal_meogeo', target: '잘 먹겠습니다', native: 'I will eat well (pre-meal)', literal: 'well eat-formal', emoji: '🥢', phonetic: 'jal meo-get-seum-ni-da', audioRef: null },
    { id: 'review_geonbae', target: '건배!', native: 'Cheers!', literal: 'dry-cup', emoji: '🥂', phonetic: 'geon-bae', audioRef: null },
    { id: 'review_jega', target: '제가 낼게요', native: "I'll pay", literal: 'I-SUBJ pay-will', emoji: '💳', phonetic: 'je-ga nael-ge-yo', audioRef: null },
  ],

  pattern: {
    name: 'The Korean Dinner Choreography',
    explanation: "Eight beats from arrival to farewell.",
    examples: [
      { target: '몇 분이세요? → 네 명이에요', native: '1. Headcount' },
      { target: '삼겹살 이 인분 주세요', native: '2. Order' },
      { target: '잘 먹겠습니다', native: '3. Pre-meal' },
      { target: '건배!', native: '4. Toast' },
      { target: '맛있어요!', native: '5. React' },
      { target: '반찬 더 주세요', native: '6. Refill' },
      { target: '잘 먹었습니다', native: '7. Post-meal' },
      { target: '제가 낼게요', native: '8. Pay-dance' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match beat to phrase', pairs: [
      { left: 'Pre-meal', right: '잘 먹겠습니다' },
      { left: 'Toast', right: '건배!' },
      { left: 'Pay-offer', right: '제가 낼게요' },
    ]},
    { type: 'multiple_choice', instruction: 'Best Korean BBQ opener (full template)?', question: 'Pick the natural sequence', options: [
      { text: '안녕하세요. 네 명이에요. 삼겹살 이 인분 주세요', correct: true },
      { text: '비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Greeting + headcount + order — full entry.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I ate well (post-meal)', correct: ['잘 먹었습니다', 'jal meogeotseumnida'] },
    { type: 'fill_blank', instruction: 'Refill banchan', sentence: '저기요, 반찬 _____ 주세요.', options: ['더', '비싸', '얼마'], correct: '더', context: 'Refill request.' },
    { type: 'build_sentence', instruction: 'Build "I\'ll pay"', words: ['낼게요', '제가'], correct: ['제가', '낼게요'], translation: "I'll pay." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Cheers!', correct: ['건배', 'geonbae', '건배!'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ in Hongdae. You're host with two friends. Lead the entire choreography.",
    lines: [
      { speaker: 'npc', target: '몇 분이세요?', native: 'How many?' },
      { speaker: 'user', userChoices: [
        { target: '세 명이에요', native: 'Three people', correct: true, feedback: 'Native + 명. Clean entry.' },
        { target: '삼 명이에요', native: 'Sino + 명 (wrong)', correct: false, feedback: '명 is Native counter.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Order?' },
      { speaker: 'user', userChoices: [
        { target: '삼겹살 삼 인분이랑 소주 한 병 주세요', native: 'Three portions of pork belly and a bottle of soju', correct: true, feedback: '인분 (Sino) + 한 병 (Native shrunk). Mixed counters live.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Order first.' },
        { target: '안녕히 계세요', native: 'Goodbye', correct: false, feedback: 'You just arrived.' },
      ]},
      { speaker: 'rwen', rwenLine: '(Server brings food. Soju glass arrives.) Pour for your eldest friend first — both hands.' },
      { speaker: 'user', userChoices: [
        { target: '(both hands pour) 건배!', native: 'Two-handed pour + cheers', correct: true, feedback: 'Etiquette + toast. Module 7 fluency.' },
        { target: '(one hand, sloppy) 건배!', native: 'One hand', correct: false, feedback: 'Two hands when pouring for elder.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '계산서 주세요!', native: 'Bill please!' },
      { speaker: 'user', userChoices: [
        { target: '제가 낼게요. 잘 먹었습니다', native: "I'll pay. Thanks for the meal", correct: true, feedback: 'Pay-offer + post-meal phrase. Module 7 closed.' },
        { target: '더치페이 할까요?', native: "Let's split", correct: false, feedback: 'Offer to pay first — splitting is a fallback, not opener.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Farewell comes after the pay-dance.' },
      ]},
      { speaker: 'rwen', rwenLine: "The whole Korean dinner — eight beats, three friends, full jeong. Module 7 closed. Food fluent.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I will eat well (pre-meal)', correct: ['잘 먹겠습니다', 'jal meogetseumnida'] },
      { prompt: 'Three portions of pork belly please', correct: ['삼겹살 삼 인분 주세요', 'samgyeopsal sam inbun juseyo'] },
    ],
  },

  mission: {
    title: "Your Module 7 Mission",
    task: "Run the eight-beat dinner choreography in your head. Greet → order → pre-meal → toast → react → refill → post-meal → pay.",
    rwenSignoff: "Module 7 closed. Korean meals are now choreography you know. Module 8 = verbs.",
  },

  phase8: {
    scenario: "Full Korean BBQ choreography — entry to farewell — with two friends and one older boss at the table.",
    rwenRole: "Multiple — server, friends, boss.",
    successCriteria: "User runs at least 6 of 8 beats. Uses two-hands pour with boss. Offers 제가 낼게요 even if overruled. Says 잘 먹겠습니다 / 잘 먹었습니다.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
