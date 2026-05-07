import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "한국어에는 a/an 같은 부정관사가 없어요. '책 한 권' 식으로 수량을 직접 말하죠. 영어는 단수 명사 앞에 'a' 또는 'an'을 거의 항상 붙입니다 — 안 붙이면 어색해요.",
    culturalNote: "한국 화자가 영어에서 가장 자주 빠뜨리는 게 a/an입니다. '저는 학생이에요' → 'I am student' (X) / 'I am a student' (O). a/an을 안 붙이는 건 단어 절반을 빼는 것과 같아요. 모음으로 시작하면 an, 자음이면 a — 발음 기준이에요.",
  },

  chunks: [
    { id: 'a_book',   target: 'A book',   native: '책 한 권 (chaek han gwon)',   literal: 'a book',   emoji: '📕', phonetic: 'uh-BUK',   audioRef: null },
    { id: 'an_apple', target: 'An apple', native: '사과 한 개 (sagwa han gae)',   literal: 'an apple', emoji: '🍎', phonetic: 'an-AP-ul', audioRef: null },
    { id: 'a_house',  target: 'A house',  native: '집 한 채 (jip han chae)',     literal: 'a house',  emoji: '🏠', phonetic: 'uh-HOWS',  audioRef: null },
  ],

  pattern: {
    name: 'A vs An — vowel sound rule',
    explanation: "단수 셀 수 있는 명사 앞: 자음 발음 시작 → 'a' (a book, a house, a university 'yu' 발음). 모음 발음 시작 → 'an' (an apple, an hour 'h' 묵음 → 모음). 철자 아닌 발음 기준이에요.",
    examples: [
      { target: 'A book',     native: '책 한 권' },
      { target: 'An apple',   native: '사과 한 개' },
      { target: 'An hour',    native: '한 시간' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'A book',    right: '책 한 권' },
      { left: 'An apple',  right: '사과 한 개' },
      { left: 'A house',   right: '집 한 채' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '사과 한 개', correct: ['An apple', 'an apple'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have ____ apple and ____ banana.', options: ['an / a', 'a / an', 'a / a'], correct: 'an / a', context: '모음 vs 자음 시작.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '학생 한 명을 영어로:', options: [
      { text: 'A student', correct: true },
      { text: 'An student', correct: false },
      { text: 'Student',    correct: false },
    ], explanation: 'student는 자음 s로 시작 → a. 단수 명사에는 항상 a/an.' },
    { type: 'build_sentence', instruction: '문장', words: ['have', 'an', 'I', 'apple'], correct: ['I', 'have', 'an', 'apple'], translation: '사과 한 개 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '집 한 채', correct: ['A house', 'a house'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 카페에서 주문 — a/an 빠뜨리지 않기.',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: '뭐 드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "An americano and a croissant, please.", native: '아메리카노 한 잔, 크루아상 한 개 주세요.', correct: true, feedback: '완벽 — americano는 모음 a → an, croissant는 자음 c → a.' },
        { target: 'Americano croissant.',                    native: '아메리카노 크루아상.',                       correct: false, feedback: 'a/an이 빠졌어요. 단수 명사엔 항상 붙여요.' },
        { target: 'A americano.',                              native: '한 아메리카노.',                              correct: false, feedback: 'americano는 모음 a → an americano.' },
      ]},
      { speaker: 'npc', target: "Coming up.", native: '바로 준비해 드릴게요.' },
      { speaker: 'rwen', rwenLine: 'a/an — 한국어에 없는 카드, 영어 매 문장에 들어가요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A book (영어로)',   correct: ['A book', 'a book'] },
      { prompt: 'An apple (영어로)', correct: ['An apple', 'an apple'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 영어 문장 5개에 a/an을 의식적으로 붙여 보세요. 모음·자음 발음 기준으로.",
    rwenSignoff: 'a/an — 영어 문법의 첫 빌딩 블록이에요.',
  },

  phase8: {
    scenario: '뉴욕 카페에서 a/an을 단수 명사마다 붙여 주문하기.',
    rwenRole: 'Barista, 25세, 친근.',
    successCriteria: "User uses 'a' or 'an' before every singular countable noun, distinguishes by vowel sound.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
