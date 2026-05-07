import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "한국어 '이/그/저'와 영어 'this/that'의 사상 — 거의 같지만 영어는 두 단계만이에요. 가까우면 'this/these', 멀면 'that/those'.",
    culturalNote: "한국어 '이/그/저'가 화자/청자/제3자 거리 셋으로 나뉘는 반면, 영어는 화자 가까이 (this/these) vs 멀리 (that/those) 둘로만. '저것' (한국어 화자 청자 모두 멈) → 영어는 그냥 'that'.",
  },

  chunks: [
    { id: 'this_book',     target: 'This book',     native: '이 책 (i chaek)',           literal: 'this book',    emoji: '📕', phonetic: 'this-BUK',     audioRef: null },
    { id: 'that_house',    target: 'That house',    native: '저 집 (jeo jip)',            literal: 'that house',    emoji: '🏠', phonetic: 'that-HOWS',    audioRef: null },
    { id: 'these_children', target: 'These children', native: '이 아이들 (i aideul)',       literal: 'these children', emoji: '👶', phonetic: 'theez-CHIL-dren', audioRef: null },
  ],

  pattern: {
    name: 'This/These vs That/Those',
    explanation: "단수 가까이: this. 복수 가까이: these. 단수 멀리: that. 복수 멀리: those. 명사가 단수냐 복수냐로 형태가 바뀌어요 — 한국어 '이 아이' / '이 아이들' 둘 다 '이' 그대로지만, 영어는 'this child' / 'these children'으로 바뀌어요.",
    examples: [
      { target: 'This book is mine.',          native: '이 책은 내 거예요.' },
      { target: 'That house is big.',           native: '저 집은 커요.' },
      { target: 'These children are loud.',      native: '이 아이들은 시끄러워요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'This book',     right: '이 책' },
      { left: 'That house',    right: '저 집' },
      { left: 'These children', right: '이 아이들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '이 아이들', correct: ['These children', 'these children'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: '____ books are heavy. (멀리, 복수)', options: ['Those', 'That', 'These'], correct: 'Those', context: '복수 + 멀리 = those.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"이 사람들"의 영어:', options: [
      { text: 'These people',   correct: true },
      { text: 'This people',     correct: false },
      { text: 'That people',     correct: false },
    ], explanation: 'people은 복수 — these (가까이) / those (멀리).' },
    { type: 'build_sentence', instruction: '문장', words: ['big', 'is', 'house', 'That'], correct: ['That', 'house', 'is', 'big'], translation: '저 집은 커요' },
    { type: 'translate', instruction: '영어로', prompt: '이 책', correct: ['This book', 'this book'] },
  ],

  rwenDialogue: {
    intro: '서울 시장 — 한국 시장에서 외국 친구에게 물건 가리키며 설명.',
    lines: [
      { speaker: 'npc', target: "What's that?", native: '저게 뭐예요?' },
      { speaker: 'user', userChoices: [
        { target: 'This is kimchi, and those are rice cakes.', native: '이건 김치고, 저것들은 떡이에요.', correct: true, feedback: 'this(가까이) + those(멀리, 복수) — 정확히 구분.' },
        { target: 'This those rice cakes.',                       native: '이것 저것들 떡.',                  correct: false, feedback: 'be 동사 + 명사 구조가 빠졌어요.' },
        { target: 'That is this.',                                  native: '저것이 이것이에요.',               correct: false, feedback: '거리 헷갈렸어요.' },
      ]},
      { speaker: 'npc', target: "Awesome! I want to try those.", native: '와! 저것들 먹어 보고 싶어요.' },
      { speaker: 'rwen', rwenLine: 'this/these/that/those — 한국어 이/그/저보다 단순한 두 단계예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'This book (영어로)',     correct: ['This book', 'this book'] },
      { prompt: 'These children (영어로)', correct: ['These children', 'these children'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "주변 물건 5개를 영어 this/these/that/those로 가리켜 보세요.",
    rwenSignoff: 'this/that — 영어 거리 표현의 두 카드예요.',
  },

  phase8: {
    scenario: '서울 시장 — 외국 친구에게 한국 음식 종류 가리키며 설명.',
    rwenRole: 'US friend, 30세, 한국 시장 첫 방문.',
    successCriteria: "User uses 'this/these' (close) and 'that/those' (far) correctly with singular/plural matching.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
