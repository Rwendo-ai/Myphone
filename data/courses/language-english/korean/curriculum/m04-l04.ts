import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: '복수형 — -s 붙이기',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "한국어는 '책 두 권' 식으로 수량을 따로 표시하지만, 영어는 명사 자체가 변해요 — book → books. 단순한 -s 추가가 영어 수 일치의 시작이에요.",
    culturalNote: "한국어는 복수형이 거의 없어요 ('아이들', '학생들'은 있지만 자주 빠뜨려요). 영어는 둘 이상이면 무조건 -s. 한국 화자가 'two book' (X) / 'two books' (O) 헷갈리는 이유예요.",
  },

  chunks: [
    { id: 'cat_cats',       target: 'Cat → Cats',       native: '고양이 → 고양이들 (goyangi → goyangideul)', literal: 'cat → cats',     emoji: '🐱', phonetic: 'KAT-KATS',       audioRef: null },
    { id: 'day_days',       target: 'Day → Days',       native: '날 → 날들 (nal → naldeul)',                  literal: 'day → days',      emoji: '📅', phonetic: 'DAY-DAYS',       audioRef: null },
    { id: 'friend_friends', target: 'Friend → Friends', native: '친구 → 친구들 (chingu → chingudeul)',        literal: 'friend → friends', emoji: '👥', phonetic: 'FREND-FRENDS',  audioRef: null },
  ],

  pattern: {
    name: 'Regular -s plural',
    explanation: "기본 규칙: 명사 + s = 복수형. cat→cats, friend→friends. -s/-x/-ch/-sh로 끝나면 -es: bus→buses, box→boxes. -y로 끝나는 경우 -ies: city→cities. 한 번 외우면 90%는 됩니다.",
    examples: [
      { target: 'One cat, two cats.',       native: '고양이 한 마리, 두 마리.' },
      { target: 'I have many friends.',      native: '친구 많아요.' },
      { target: 'Three buses came.',          native: '버스 세 대 왔어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Cat → Cats',       right: '고양이 → 고양이들' },
      { left: 'Day → Days',       right: '날 → 날들' },
      { left: 'Friend → Friends', right: '친구 → 친구들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '두 마리 고양이', correct: ['Two cats', 'two cats'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have three ____.', options: ['friends', 'friend', 'friendes'], correct: 'friends', context: '셋 — 복수형.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"5일"을 영어로:', options: [
      { text: 'Five days', correct: true },
      { text: 'Five day',   correct: false },
      { text: 'Five dayes',  correct: false },
    ], explanation: '복수면 -s, day는 단순 -s 추가.' },
    { type: 'build_sentence', instruction: '문장', words: ['cats', 'two', 'have', 'I'], correct: ['I', 'have', 'two', 'cats'], translation: '고양이 두 마리 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '친구 많아요', correct: ['I have many friends', 'I have many friends.', 'i have many friends'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 한국 친구·반려동물 수를 궁금해함.',
    lines: [
      { speaker: 'npc', target: "How many close friends do you have here?", native: '여기 친한 친구 몇 명?' },
      { speaker: 'user', userChoices: [
        { target: 'I have three close friends and two cats.', native: '친한 친구 셋, 고양이 두 마리 있어요.', correct: true, feedback: '복수 -s 잘 챙겼어요.' },
        { target: 'Three friend, two cat.',                     native: '셋 친구, 둘 고양이.',                     correct: false, feedback: '-s가 빠졌어요. 둘 이상은 -s.' },
        { target: 'Friends cats.',                                native: '친구들 고양이들.',                          correct: false, feedback: '문장 구조와 수량이 빠졌어요.' },
      ]},
      { speaker: 'npc', target: "Cute! Names?", native: '귀여워요! 이름은?' },
      { speaker: 'rwen', rwenLine: '복수 -s — 영어 매 명사에 적용되는 핵심 규칙이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Two cats (영어로)',     correct: ['Two cats', 'two cats'] },
      { prompt: 'Many friends (영어로)', correct: ['Many friends', 'many friends'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 영어 문장 5개에 복수형 -s를 의식적으로 붙여 보세요.",
    rwenSignoff: '-s — 영어 수 일치의 첫 카드예요.',
  },

  phase8: {
    scenario: '미국 친구와 가족·친구·반려동물 수 영어로 풀기.',
    rwenRole: 'Friend, 32세 미국인.',
    successCriteria: "User uses regular -s plurals correctly with at least 3 nouns.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
