import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — 감사합니다',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 '감사합니다'가 있고 '고마워요'가 따로 있듯, 영어도 'Thank you'(격식)와 'Thanks'(캐주얼)가 따로 있어요. 'You're welcome'은 받은 감사에 답하는 말 — 한국어 '천만에요'와 똑같아요.",
    culturalNote: "한국에서는 가까운 가족·친구 사이에서는 '고마워'를 자주 안 써요 — 정(情)으로 표현하니까요. 영어권은 정반대 — 가족끼리도 'Thanks!' 'Thank you!'를 끊임없이 말합니다. 처음에는 어색하지만, 안 하면 차가운 사람 같아 보여요.",
  },

  chunks: [
    { id: 'thank_you',       target: 'Thank you',       native: '감사합니다 (gamsahamnida)',     literal: undefined, emoji: '🙏', phonetic: 'thank-YOO',  audioRef: null },
    { id: 'youre_welcome',   target: "You're welcome",  native: '천만에요 (cheonmaneyo)',          literal: 'you-are welcome', emoji: '🤝', phonetic: 'yor-WEL-kum', audioRef: null },
    { id: 'thanks_a_lot',    target: 'Thanks a lot',    native: '정말 고마워요 (jeongmal gomawoyo)', literal: 'thanks a lot',  emoji: '💚', phonetic: 'thanks-uh-LOT', audioRef: null },
  ],

  pattern: {
    name: 'Thanks ladder',
    explanation: "강도별 사다리: 'Thanks' (캐주얼) < 'Thank you' (표준) < 'Thank you so much' / 'Thanks a lot' (강조). 한국어 '고마워' < '감사합니다' < '정말 감사드립니다'와 같은 구조예요.",
    examples: [
      { target: 'Thanks',          native: '고마워요' },
      { target: 'Thank you',       native: '감사합니다' },
      { target: 'Thanks a lot',    native: '정말 고마워요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Thank you',        right: '감사합니다' },
      { left: "You're welcome",   right: '천만에요' },
      { left: 'Thanks a lot',     right: '정말 고마워요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '천만에요', correct: ["You're welcome", "you're welcome", "You are welcome"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Thanks a ____!', options: ['lot', 'big', 'much'], correct: 'lot', context: '동료가 큰 도움을 줬을 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "친구가 'Thanks!'라고 했어요. 뭐라고 답하죠?", options: [
      { text: "You're welcome!", correct: true },
      { text: 'Sorry.',           correct: false },
      { text: 'Bye!',             correct: false },
    ], explanation: "'Thanks'에 대한 표준 답은 'You're welcome' 또는 'No problem'." },
    { type: 'build_sentence', instruction: '문장', words: ['lot', 'a', 'Thanks'], correct: ['Thanks', 'a', 'lot'], translation: '정말 고마워요' },
    { type: 'translate', instruction: '영어로', prompt: '정말 감사합니다', correct: ['Thank you so much', 'Thanks a lot', 'Thank you very much'] },
  ],

  rwenDialogue: {
    intro: '판교 사무실 — 미국 동료가 점심 사다 준 상황.',
    lines: [
      { speaker: 'npc', target: "I got you a coffee.", native: '커피 사 왔어요.' },
      { speaker: 'user', userChoices: [
        { target: "Thanks a lot! Really appreciate it.", native: '정말 고마워요! 정말 감사드려요.', correct: true, feedback: '강도와 따뜻함 — 영어권에선 이게 정확한 톤이에요.' },
        { target: "Okay.",                                 native: '네.',                              correct: false, feedback: '너무 차가워요 — 영어권에선 감사를 적극 표현해요.' },
        { target: "Sorry.",                                native: '죄송해요.',                        correct: false, feedback: '사과가 아니라 감사예요.' },
      ]},
      { speaker: 'npc', target: "You're welcome!", native: '천만에요!' },
      { speaker: 'rwen', rwenLine: '감사 표현 — 가족·동료 사이에서도 자주 해야 영어권에서 정상이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Thank you (영어로)',     correct: ['Thank you', 'thank you', 'Thanks', 'thanks'] },
      { prompt: "You're welcome (영어로)", correct: ["You're welcome", "you're welcome", "You are welcome"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 가족에게도 'Thank you'를 영어로 한 번 말해 보세요. 영어권 가족 표현 톤을 직접 느껴 보세요.",
    rwenSignoff: 'Thanks for today. See you tomorrow.',
  },

  phase8: {
    scenario: '판교 사무실 — 미국 동료가 작은 호의를 베푼 상황. 적절한 강도로 감사를 표현.',
    rwenRole: 'Brad, 30세 미국 출신 동료, 친근.',
    successCriteria: "User uses 'Thank you' or stronger ('Thanks a lot' / 'Thank you so much'), responds to thanks with 'You're welcome'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
