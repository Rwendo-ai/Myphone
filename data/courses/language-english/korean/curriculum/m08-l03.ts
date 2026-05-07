import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come"',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "go (가다) vs come (오다) — 한국어와 정확히 같아요. 단, 영어 'I'm coming'은 '갈게요' (상대 쪽으로). '오는 중'이 아니에요.",
    culturalNote: "한국에서는 '갈게요'/'올게요'가 화자 입장. 영어 'I'm coming!'은 청자 입장 — 청자에게 가는 중이라는 뜻. 'Are you coming to the party?' = 너 파티에 와? (말하는 사람도 거기 있을 때).",
  },

  chunks: [
    { id: 'go_to_work',   target: 'I go to work.',   native: '회사에 가요 (hoesa-e gayo)',         literal: 'I go to work',   emoji: '🏢', phonetic: 'aye-GOH-too-WERK',  audioRef: null },
    { id: 'come_here',     target: 'Come here.',       native: '이리 와요 (iri wayo)',                literal: 'come here',      emoji: '🤚', phonetic: 'KUM-HEER',          audioRef: null },
    { id: 'were_coming',   target: "We're coming.",    native: '가고 있어요 (gago isseoyo)',           literal: "we are coming",  emoji: '🚶', phonetic: 'weer-KUM-ing',       audioRef: null },
  ],

  pattern: {
    name: 'Come vs Go (speaker perspective)',
    explanation: "go = 화자에서 멀어짐. come = 청자 (또는 제3자) 쪽으로 다가감. 'I go to work' (직장으로 — 화자에서 멀어짐). 'I'm coming home' (집은 청자/가족이 있는 곳).",
    examples: [
      { target: 'I go to work at 9.',  native: '9시에 회사 가요.' },
      { target: 'Come over for dinner.',  native: '저녁 먹으러 와요.' },
      { target: "I'm coming!",           native: '갈게요!' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I go to work',   right: '회사에 가요' },
      { left: 'Come here',       right: '이리 와요' },
      { left: "We're coming",    right: '가고 있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '갈게요', correct: ["I'm coming", "I am coming"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: '____ here for a sec.', options: ['Come', 'Go', 'Make'], correct: 'Come', context: '청자 쪽으로 — come.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '엄마가 부른다 — "갈게요!" 영어:', options: [
      { text: "I'm coming!",  correct: true },
      { text: "I'm going!",    correct: false },
      { text: 'Come!',          correct: false },
    ], explanation: '엄마(청자) 쪽으로 = come.' },
    { type: 'build_sentence', instruction: '문장', words: ['work', 'go', 'I', 'to'], correct: ['I', 'go', 'to', 'work'], translation: '회사에 가요' },
    { type: 'translate', instruction: '영어로', prompt: '이리 와요', correct: ['Come here', 'come here'] },
  ],

  rwenDialogue: {
    intro: '서울 자기 집 — 엄마가 저녁 먹으라고 부름.',
    lines: [
      { speaker: 'npc', target: "Dinner is ready! Come downstairs.", native: '저녁 다 됐다! 내려와.' },
      { speaker: 'user', userChoices: [
        { target: "I'm coming! Just a minute.", native: '가요! 잠깐만요.', correct: true, feedback: '청자 쪽으로 = coming. 정확.' },
        { target: "I'm going!",                   native: '갑니다!',           correct: false, feedback: 'going은 멀어짐. 엄마 쪽이니 coming.' },
        { target: 'Bye.',                          native: '잘 가.',            correct: false, feedback: '저녁 먹으러 가는 중.' },
      ]},
      { speaker: 'npc', target: "Hurry up!", native: '빨리 와!' },
      { speaker: 'rwen', rwenLine: 'come / go — 화자/청자 위치로 결정.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I go to work (영어로)',  correct: ['I go to work', 'i go to work'] },
      { prompt: "I'm coming! (영어로)",    correct: ["I'm coming!", "I'm coming", "I am coming"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "go/come 5문장 — 화자/청자 관계로 분기.",
    rwenSignoff: 'come / go — 영어 위치 동사 두 카드.',
  },

  phase8: {
    scenario: '집에서 엄마가 부르는 상황 — come/go 정확히.',
    rwenRole: 'Mother, 50대.',
    successCriteria: "User uses 'I'm coming' (toward listener) and 'I go to ___' (away from speaker) correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
