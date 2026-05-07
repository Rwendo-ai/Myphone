import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: '요리 동사 — Cooking verbs',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "요리 동사 — cook (요리하다), chop (썰다), boil (끓이다). 한국어 '볶다·끓이다·튀기다'를 영어로 stir-fry, boil, fry.",
    culturalNote: "한국 요리는 동사가 풍부 ('볶다·찌다·끓이다·삶다·찜하다·구이다·튀기다'). 영어로 풀려면 fry, stir-fry, boil, steam, grill, deep-fry. 요리 영상 영어로 보면 다 등장해요.",
  },

  chunks: [
    { id: 'cook',  target: 'Cook',  native: '요리하다 (yorihada)', literal: 'to cook', emoji: '👩‍🍳', phonetic: 'KUK',  audioRef: null },
    { id: 'chop',  target: 'Chop',  native: '썰다 (sseolda)',      literal: 'to chop', emoji: '🔪', phonetic: 'CHOP', audioRef: null },
    { id: 'boil',  target: 'Boil',  native: '끓이다 (kkeurida)',   literal: 'to boil', emoji: '♨️', phonetic: 'BOYL', audioRef: null },
  ],

  pattern: {
    name: 'Cooking verbs',
    explanation: "기본 동사: cook (일반 요리), chop (썰기), boil (끓이기). 추가: fry (튀기기), stir-fry (볶기), steam (찌기), grill (구이), bake (오븐 굽기). 한국 요리 풀 때 자주 등장.",
    examples: [
      { target: 'I cook every day.',         native: '매일 요리해요.' },
      { target: 'Chop the onions.',           native: '양파 썰어요.' },
      { target: 'Boil the water for ramen.',   native: '라면 물 끓여요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Cook', right: '요리하다' },
      { left: 'Chop', right: '썰다' },
      { left: 'Boil', right: '끓이다' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '양파 썰다', correct: ['Chop onions', 'chop onions', 'Chop the onions'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: '____ the water for tea.', options: ['Boil', 'Chop', 'Cook'], correct: 'Boil', context: '물 끓이기.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"매일 요리해요" 영어:', options: [
      { text: 'I cook every day.',  correct: true },
      { text: 'I cooking day.',       correct: false },
      { text: 'Cook me day.',          correct: false },
    ], explanation: '주어 + 동사 + 시간.' },
    { type: 'build_sentence', instruction: '문장', words: ['water', 'the', 'Boil'], correct: ['Boil', 'the', 'water'], translation: '물 끓여요' },
    { type: 'translate', instruction: '영어로', prompt: '요리해요', correct: ['I cook', 'i cook'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 김치찌개 만들기 영어 설명.',
    lines: [
      { speaker: 'npc', target: "How do you make kimchi stew?", native: '김치찌개 어떻게 만들어요?' },
      { speaker: 'user', userChoices: [
        { target: 'Chop the kimchi, boil the water with pork, then cook for 20 minutes.', native: '김치 썰고, 돼지고기와 물 끓이고, 20분 끓여요.', correct: true, feedback: 'chop + boil + cook 세 동사 — 레시피 영어 마스터.' },
        { target: 'Kimchi pot fire.',                                                       native: '김치 냄비 불.',                                  correct: false, feedback: '동사가 빠졌어요.' },
        { target: 'No.',                                                                     native: '아니요.',                                          correct: false, feedback: '레시피 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Wow, sounds simple. Can I try?", native: '와, 간단해 보이네요. 해 봐도 돼요?' },
      { speaker: 'rwen', rwenLine: '요리 동사 — 한국 요리를 영어로 가르치는 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Cook (영어로)', correct: ['Cook', 'cook'] },
      { prompt: 'Chop (영어로)', correct: ['Chop', 'chop'] },
      { prompt: 'Boil (영어로)', correct: ['Boil', 'boil'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기가 자주 만드는 음식 레시피를 영어 동사 5개로 풀어 보세요.",
    rwenSignoff: '요리 동사 — 한국 요리 영어로 가르치는 카드예요.',
  },

  phase8: {
    scenario: '미국 친구에게 김치찌개 또는 다른 한국 요리 레시피를 영어로 설명.',
    rwenRole: 'Friend, 30세 미국인, 한국 요리 호기심.',
    successCriteria: "User uses at least 3 cooking verbs (chop/boil/cook/fry/stir-fry/steam/grill).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
