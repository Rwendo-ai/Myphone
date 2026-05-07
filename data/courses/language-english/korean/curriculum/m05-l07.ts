import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: '가족 같은 친구 — Friends as family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 '식구 같은 친구' — 영어로 'like family'. 절친은 'best friend', 가까운 친구들은 'close friends'.",
    culturalNote: "한국 정(情)이 깊은 친구는 거의 가족처럼 여겨지죠. 영어권에서도 'like family' 표현은 깊이를 전달해요. 'Found family'(가족이 아닌 가족) 개념도 자주 써요 — 특히 LGBTQ나 디아스포라 한국인들 사이에서.",
  },

  chunks: [
    { id: 'best_friend',     target: 'Best friend',  native: '절친 (jeolchin)',                       literal: 'best friend',  emoji: '🤝', phonetic: 'BEST-FREND',          audioRef: null },
    { id: 'close_friends',   target: 'Close friends', native: '가까운 친구들 (gakkaun chingudeul)',     literal: 'close friends', emoji: '👯', phonetic: 'KLOHS-FRENDS',       audioRef: null },
    { id: 'like_family',     target: 'Like family',   native: '가족 같은 (gajok gateun)',                literal: 'like family',   emoji: '❤️', phonetic: 'LYK-FAM-uh-lee',     audioRef: null },
  ],

  pattern: {
    name: 'Friend depth',
    explanation: "강도 사다리: acquaintance (지인) < friend (친구) < close friend (가까운 친구) < best friend (절친) < like family (가족 같은). 영어로 친구 깊이 표현 정확히.",
    examples: [
      { target: 'My best friend, Sarah.',          native: '제 절친 사라.' },
      { target: 'We have close friends here.',      native: '여기 가까운 친구들 있어요.' },
      { target: "She's like family to me.",          native: '저에게는 가족 같아요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Best friend',  right: '절친' },
      { left: 'Close friends', right: '가까운 친구들' },
      { left: 'Like family',   right: '가족 같은' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '제 절친', correct: ['My best friend', 'my best friend'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "She's ____ family to me.", options: ['like', 'as', 'such'], correct: 'like', context: '비유 — like.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '20년된 친구 — "거의 가족이에요" 영어:', options: [
      { text: "She's like family to me.",  correct: true },
      { text: 'She family.',                  correct: false },
      { text: 'My friend family.',             correct: false },
    ], explanation: 'be 동사 + like family 표준 표현.' },
    { type: 'build_sentence', instruction: '문장', words: ['family', 'to', 'like', 'me', "He's"], correct: ["He's", 'like', 'family', 'to', 'me'], translation: '저에게 가족 같아요' },
    { type: 'translate', instruction: '영어로', prompt: '가까운 친구들', correct: ['Close friends', 'close friends'] },
  ],

  rwenDialogue: {
    intro: 'LA에서 만난 한국 디아스포라 친구와 깊은 대화.',
    lines: [
      { speaker: 'npc', target: "Do you have anyone who feels like family here in the US?", native: '미국에서 가족처럼 느껴지는 사람 있어요?' },
      { speaker: 'user', userChoices: [
        { target: "Yes, my best friend Minji. She's like family to me.", native: '네, 제 절친 민지요. 저에게 가족 같아요.', correct: true, feedback: 'best friend + like family — 깊이 두 단계로 표현했어요.' },
        { target: 'Friend Minji.',                                          native: '친구 민지.',                                  correct: false, feedback: '깊이가 안 보여요. best/like family 추가.' },
        { target: 'No.',                                                     native: '아니요.',                                      correct: false, feedback: '있는데 닫지 마세요.' },
      ]},
      { speaker: 'npc', target: "Beautiful. Found family is real.", native: '아름다워요. 만들어진 가족은 진짜예요.' },
      { speaker: 'rwen', rwenLine: '친구 깊이 영어 — 절친·가족 같음을 분명히 표현했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Best friend (영어로)',  correct: ['Best friend', 'best friend'] },
      { prompt: 'Like family (영어로)',  correct: ['Like family', 'like family'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 절친·가까운 친구를 영어로 깊이 표현해 보세요. like family까지 가도 좋아요.",
    rwenSignoff: '친구 영어 — 가족 옆자리의 카드예요.',
  },

  phase8: {
    scenario: 'LA에서 한국 디아스포라 친구와 깊은 대화 — found family 개념.',
    rwenRole: 'Korean-American friend, 32세, 디아스포라 가족 같은 모임.',
    successCriteria: "User uses 'best friend', 'close friends', or 'like family' to express friendship depth.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
