import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — 언제 쓸까',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'The'는 '그' — 화자와 청자가 둘 다 아는 특정한 것을 가리킬 때 써요. 한국어 '그 책'에 정확히 해당해요. 'a book' (아무 책 한 권) vs 'the book' (그 책).",
    culturalNote: "한국어 '그'는 빠뜨려도 의미가 통하지만, 영어 'the'는 빠뜨리면 문장이 어색해져요. 'the morning', 'the bus stop', 'the Han River' — 익숙한 곳·시간·고유한 것 앞에 the.",
  },

  chunks: [
    { id: 'the_book',         target: 'The book',         native: '그 책 (geu chaek)',          literal: 'the book',         emoji: '📘', phonetic: 'thuh-BUK',       audioRef: null },
    { id: 'the_korea_team',   target: 'The Korea team',   native: '한국 팀 (hanguk tim)',        literal: 'the Korea team',   emoji: '🇰🇷', phonetic: 'thuh-koh-REE-uh-team', audioRef: null },
    { id: 'the_morning',      target: 'The morning',       native: '아침 (achim)',                literal: 'the morning',      emoji: '🌅', phonetic: 'thuh-MOR-ning',  audioRef: null },
  ],

  pattern: {
    name: 'When to use the',
    explanation: "the를 쓰는 자리: (1) 둘이 아는 특정한 것 — the book on the table. (2) 시간대 — in the morning. (3) 고유한 것 — the Earth, the Han River, the Korea team. (4) 두 번째 언급 — I read a book. The book was good.",
    examples: [
      { target: 'The book on the table',  native: '테이블 위의 그 책' },
      { target: 'In the morning',          native: '아침에' },
      { target: 'The Korea team',           native: '한국 팀' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'The book',         right: '그 책' },
      { left: 'The Korea team',   right: '한국 팀' },
      { left: 'The morning',       right: '아침' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '아침에', correct: ['In the morning', 'in the morning'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I read a book. ____ book was good.', options: ['The', 'A', 'An'], correct: 'The', context: '두 번째 언급 — 같은 책.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '한국 팀이 이겼다는 영어 표현:', options: [
      { text: 'The Korea team won.', correct: true },
      { text: 'Korea team won.',      correct: false },
      { text: 'A Korea team won.',     correct: false },
    ], explanation: '국가 대표팀은 the가 자연스러워요.' },
    { type: 'build_sentence', instruction: '문장', words: ['morning', 'in', 'the'], correct: ['in', 'the', 'morning'], translation: '아침에' },
    { type: 'translate', instruction: '영어로', prompt: '한강', correct: ['The Han River', 'the Han River', 'the Han river'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 한국 명소 소개.',
    lines: [
      { speaker: 'npc', target: "What's the most famous river in Korea?", native: '한국에서 가장 유명한 강이 뭐예요?' },
      { speaker: 'user', userChoices: [
        { target: 'The Han River runs through Seoul.', native: '한강이 서울을 가로질러요.', correct: true, feedback: '강 이름엔 the를 붙여요 — the Han River, the Mississippi.' },
        { target: 'Han River.',                          native: '한강.',                       correct: false, feedback: 'the가 빠졌어요.' },
        { target: 'A Han River.',                         native: '한강 한 개.',                  correct: false, feedback: '고유한 강은 a가 아니라 the.' },
      ]},
      { speaker: 'npc', target: "Cool — I want to see it.", native: '멋지네요 — 보고 싶어요.' },
      { speaker: 'rwen', rwenLine: 'the — 특정한 것·고유한 것 앞에 빠뜨리지 마세요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'In the morning (영어로)', correct: ['In the morning', 'in the morning'] },
      { prompt: 'The Han River (영어로)',   correct: ['The Han River', 'the Han River'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 영어 문장에서 the가 들어갈 자리 5개를 찾아 보세요. 시간·고유명사·두 번째 언급.",
    rwenSignoff: 'the는 영어의 손가락 — 가리키는 도구예요.',
  },

  phase8: {
    scenario: '미국 친구에게 한국 명소를 영어로 소개. the를 강·산·도시 이름에 정확히 사용.',
    rwenRole: 'US friend, 28세, 한국 첫 방문 계획 중.',
    successCriteria: "User uses 'the' before unique landmarks ('the Han River', 'the Korea team'), and time periods ('in the morning').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
