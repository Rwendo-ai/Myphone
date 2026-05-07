import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: '저녁 루틴 — Evening routine',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "저녁 동사 — come home (집 오다), cook dinner (저녁 만들다), watch TV (TV 보다). '하루의 마무리' 영어 카드.",
    culturalNote: "한국 직장인은 저녁 회식 문화가 있지만, 영어권은 'family dinner'를 더 강조해요. 'I cook dinner for my family' / 'We watch TV together' — 가족 시간 표현이 자연스러워요.",
  },

  chunks: [
    { id: 'come_home',     target: 'I come home at 6.',  native: '6시에 집 와요 (yeoseot-si-e jip wayo)',     literal: 'I come home at 6',  emoji: '🏠', phonetic: 'aye-KUM-HOHM',          audioRef: null },
    { id: 'cook_dinner',   target: 'I cook dinner.',       native: '저녁 만들어요 (jeonyeok mandeureoyo)',        literal: 'I cook dinner',      emoji: '🍳', phonetic: 'aye-KUK-DIN-er',        audioRef: null },
    { id: 'watch_tv',       target: 'I watch TV.',          native: 'TV 봐요 (TV bwayo)',                          literal: 'I watch TV',          emoji: '📺', phonetic: 'aye-WACH-TEE-VEE',     audioRef: null },
  ],

  pattern: {
    name: 'Evening verbs',
    explanation: "흐름: come home (도착) → cook/have dinner (식사) → watch TV / read / relax (여가) → go to bed (취침). 시간 표현 추가하면 자연스러운 일상.",
    examples: [
      { target: 'I come home at 6.',  native: '6시에 집 와요.' },
      { target: 'I cook dinner at 7.',  native: '7시에 저녁 만들어요.' },
      { target: 'I watch TV at 9.',     native: '9시에 TV 봐요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I come home at 6', right: '6시에 집 와요' },
      { left: 'I cook dinner',     right: '저녁 만들어요' },
      { left: 'I watch TV',         right: 'TV 봐요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: 'TV 봐요', correct: ['I watch TV', 'i watch TV'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I come ____ at 6.', options: ['home', 'house', 'to home'], correct: 'home', context: 'come home (to 없음).' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"가족과 저녁 먹어요" 영어:', options: [
      { text: 'I have dinner with my family.',  correct: true },
      { text: 'I dinner family.',                  correct: false },
      { text: 'Family eat me.',                     correct: false },
    ], explanation: 'have dinner with + 사람.' },
    { type: 'build_sentence', instruction: '문장', words: ['dinner', 'cook', 'I'], correct: ['I', 'cook', 'dinner'], translation: '저녁 만들어요' },
    { type: 'translate', instruction: '영어로', prompt: '6시에 집 와요', correct: ['I come home at 6', 'I come home at six'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 친구와 저녁 루틴 비교.',
    lines: [
      { speaker: 'npc', target: "What's a typical evening for you?", native: '평소 저녁 어떻게 보내요?' },
      { speaker: 'user', userChoices: [
        { target: 'I come home at 6, cook dinner with my partner, and we watch K-dramas till 10.', native: '6시 귀가, 파트너와 저녁 만들고, 10시까지 K-드라마 봐요.', correct: true, feedback: '저녁 동사 + 시간·관계 — 자연스러운 일상.' },
        { target: 'Home cook TV.',                                                                  native: '집 요리 TV.',                                              correct: false, feedback: '구조 부족.' },
        { target: 'No.',                                                                             native: '아니요.',                                                  correct: false, feedback: '일상 풀어요.' },
      ]},
      { speaker: 'npc', target: "Sounds cozy.", native: '아늑하네요.' },
      { speaker: 'rwen', rwenLine: '저녁 영어 — 매일 마무리 카드 흐름.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I come home (영어로)',   correct: ['I come home', 'i come home'] },
      { prompt: 'I cook dinner (영어로)', correct: ['I cook dinner', 'i cook dinner'] },
      { prompt: 'I watch TV (영어로)',     correct: ['I watch TV', 'i watch TV'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 저녁 루틴을 영어 5문장으로.",
    rwenSignoff: '저녁 영어 — 하루의 마무리 카드.',
  },

  phase8: {
    scenario: '뉴욕 친구와 자기 저녁 루틴 영어로 비교.',
    rwenRole: 'Friend, 30대 미국인.',
    successCriteria: "User uses 'come home', 'cook/have dinner', 'watch TV' or similar evening verbs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
