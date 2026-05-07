import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: '관사 없음 — 복수와 추상명사',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "복수형 명사와 추상명사는 a/an/the 없이 그냥 써요. 'I love books' (책 좋아해요), 'Love is everything' (사랑은 모든 것). 한국어처럼 그냥 명사만.",
    culturalNote: "한국 화자는 영어에서 'I love a book' (책 한 권 좋아요?) 같은 어색한 표현을 자주 만들어요. 일반적·추상적 의미일 땐 관사 없이 그냥 복수형 또는 추상명사를 써요.",
  },

  chunks: [
    { id: 'books',     target: 'Books',     native: '책들 (chaekdeul)',   literal: 'books (general)',   emoji: '📚', phonetic: 'BUKS',     audioRef: null },
    { id: 'love',      target: 'Love',      native: '사랑 (sarang)',       literal: 'love (abstract)',   emoji: '❤️', phonetic: 'LUV',     audioRef: null },
    { id: 'children',  target: 'Children',  native: '아이들 (aideul)',     literal: 'children (general)', emoji: '👶', phonetic: 'CHIL-dren', audioRef: null },
  ],

  pattern: {
    name: 'No article rule',
    explanation: "관사 빼는 자리: (1) 일반 복수형 — 'I like books' (책들 좋아). (2) 추상명사 — 'Love conquers all' (사랑은 모든 걸 이겨). (3) 셀 수 없는 명사 일반 — 'Water is essential'. 일반·추상이면 관사 없이.",
    examples: [
      { target: 'I love books.',           native: '책 좋아해요.' },
      { target: 'Love is everything.',      native: '사랑이 모든 거예요.' },
      { target: 'Children love music.',     native: '아이들은 음악을 좋아해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Books',     right: '책들' },
      { left: 'Love',      right: '사랑' },
      { left: 'Children',  right: '아이들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '아이들은 음악을 좋아해요', correct: ['Children love music', 'children love music'] },
    { type: 'fill_blank', instruction: '빈칸 — 관사가 필요한가?', sentence: '____ love books. (일반)', options: ['I', 'A I', 'The I'], correct: 'I', context: '일반·추상엔 관사 빼기.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"사랑은 모든 것"의 영어 표현:', options: [
      { text: 'Love is everything.',    correct: true },
      { text: 'A love is everything.',   correct: false },
      { text: 'The love is everything.',  correct: false },
    ], explanation: '추상명사 일반 의미엔 관사 없음.' },
    { type: 'build_sentence', instruction: '문장', words: ['love', 'I', 'books'], correct: ['I', 'love', 'books'], translation: '책 좋아해요' },
    { type: 'translate', instruction: '영어로', prompt: '사랑이 모든 거예요', correct: ['Love is everything', 'love is everything'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 자기 인생관 풀기 — 추상명사 자연스럽게.',
    lines: [
      { speaker: 'npc', target: "What's important to you?", native: '뭐가 중요해요?' },
      { speaker: 'user', userChoices: [
        { target: 'Family, friends, and learning. Love is everything.', native: '가족, 친구, 배움. 사랑이 모든 거예요.', correct: true, feedback: '추상명사·복수형 모두 관사 없이 — 자연스러운 영어.' },
        { target: 'A family, the friends, a learning.',                    native: '한 가족, 그 친구들, 한 배움.',          correct: false, feedback: '추상·일반 의미엔 관사 빼야 해요.' },
        { target: 'Bye.',                                                   native: '잘 가.',                                  correct: false, feedback: '대화 중간이에요.' },
      ]},
      { speaker: 'npc', target: 'Beautiful answer.', native: '아름다운 답이네요.' },
      { speaker: 'rwen', rwenLine: '추상명사·복수형 — 관사 없이가 자연스러워요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Children love music (영어로)', correct: ['Children love music', 'children love music'] },
      { prompt: 'Love is everything (영어로)',   correct: ['Love is everything', 'love is everything'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 추상명사 5개를 영어로 — Love, Hope, Music, Education, Family — 관사 없이 문장에 써 보세요.",
    rwenSignoff: '관사 빼기 — 영어 문법의 또 한 면이에요.',
  },

  phase8: {
    scenario: '미국 친구와 인생관·가치관에 대해 영어로 — 추상명사 자연스럽게.',
    rwenRole: 'Friend, 30세 미국인, 깊은 대화 좋아함.',
    successCriteria: "User uses general plural and abstract nouns without articles ('I love books', 'Love is ___', 'Children love ___').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
