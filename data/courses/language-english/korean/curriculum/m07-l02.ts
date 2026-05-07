import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: '기본 음식 — Common foods',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Bread (빵), rice (밥), meat (고기) — 세계 어디서나 먹는 기본 음식 영어. 한국 사람의 'rice'는 '밥' = 매일의 주식.",
    culturalNote: "한국어 '밥'은 단순 쌀밥이 아니라 '식사' 통칭이기도 해요 ('밥 먹었어요?'). 영어 'rice'는 쌀밥만. '식사' 일반은 'meal' 또는 'food'. 한국 화자가 자주 'I ate rice' (밥 먹었어요)라고 하면 영어권에선 '쌀밥만' 먹은 걸로 들려요.",
  },

  chunks: [
    { id: 'bread', target: 'Bread', native: '빵 (ppang)',     literal: 'bread', emoji: '🍞', phonetic: 'BRED', audioRef: null },
    { id: 'rice',   target: 'Rice',  native: '밥 (bap)',       literal: 'rice',   emoji: '🍚', phonetic: 'RYS',  audioRef: null },
    { id: 'meat',   target: 'Meat',  native: '고기 (gogi)',    literal: 'meat',   emoji: '🥩', phonetic: 'MEET', audioRef: null },
  ],

  pattern: {
    name: 'Uncountable food nouns',
    explanation: "Bread, rice, meat, water — 셀 수 없는 명사. 'a bread' (X) / 'some bread' (O), 'a rice' (X) / 'a bowl of rice' (O). 갯수 표현은 'a piece of bread', 'a bowl of rice'.",
    examples: [
      { target: 'A piece of bread',  native: '빵 한 조각' },
      { target: 'A bowl of rice',     native: '밥 한 그릇' },
      { target: 'I love meat.',        native: '고기 좋아해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Bread', right: '빵' },
      { left: 'Rice',  right: '밥' },
      { left: 'Meat',  right: '고기' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '밥 한 그릇', correct: ['A bowl of rice', 'a bowl of rice'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'd like a piece of ____.", options: ['bread', 'breads', 'a bread'], correct: 'bread', context: '셀 수 없는 명사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"고기 한 점"의 영어:', options: [
      { text: 'A piece of meat',  correct: true },
      { text: 'A meat',            correct: false },
      { text: 'One meat',           correct: false },
    ], explanation: '셀 수 없는 명사엔 "a piece/bowl/cup of ___".' },
    { type: 'build_sentence', instruction: '문장', words: ['rice', 'love', 'I'], correct: ['I', 'love', 'rice'], translation: '밥 좋아해요' },
    { type: 'translate', instruction: '영어로', prompt: '빵 한 조각', correct: ['A piece of bread', 'a piece of bread'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 카페테리아 — 메뉴에서 음식 고르기.',
    lines: [
      { speaker: 'npc', target: "What would you like?", native: '뭘 드시겠어요?' },
      { speaker: 'user', userChoices: [
        { target: "A bowl of rice and some chicken, please.", native: '밥 한 그릇과 닭고기 좀 주세요.', correct: true, feedback: '셀 수 없는 명사 정확히 — bowl of, some.' },
        { target: 'A rice a meat.',                              native: '한 밥 한 고기.',                  correct: false, feedback: 'rice/meat는 셀 수 없음.' },
        { target: 'Bread.',                                       native: '빵.',                                correct: false, feedback: '동사·구조 빠졌어요.' },
      ]},
      { speaker: 'npc', target: "Coming right up.", native: '바로 준비해 드릴게요.' },
      { speaker: 'rwen', rwenLine: '음식 영어 — 셀 수 없는 명사 표현 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Bread (영어로)', correct: ['Bread', 'bread'] },
      { prompt: 'Rice (영어로)',   correct: ['Rice', 'rice'] },
      { prompt: 'Meat (영어로)',   correct: ['Meat', 'meat'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "냉장고 음식 5개를 영어로 — 셀 수 있는지 없는지 분류하면서.",
    rwenSignoff: '음식 영어 — 매일 식탁의 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 카페테리아에서 음식 고르기 — 셀 수 없는 명사 정확히.',
    rwenRole: 'Server, 30대 미국인.',
    successCriteria: "User orders uncountable foods correctly with 'a bowl of', 'a piece of', or 'some'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
