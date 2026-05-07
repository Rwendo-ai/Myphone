import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: '분 — Half past, Quarter to',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "30분 = half past, 15분 = quarter past, 45분 = quarter to. 'Half past two' = 2시 반. 한국어 '두 시 반'과 같지만, 영어는 시·분 순서가 거꾸로예요.",
    culturalNote: "영어 시간 표현 두 가지: (1) '2:30' → 'two thirty' (디지털식), (2) 'half past two' (전통식). 영국은 전통식 자주 써요. 미국은 둘 다. 'Quarter to nine' = 9시 15분 전 = 8:45.",
  },

  chunks: [
    { id: 'half_past_two',   target: 'Half past two',   native: '2시 반 (du-si ban)',                literal: 'half past two',   emoji: '🕝', phonetic: 'haf-past-TOO',     audioRef: null },
    { id: 'quarter_to_nine', target: 'Quarter to nine',  native: '9시 15분 전 (ahop-si sip-o-bun jeon)', literal: 'quarter to nine', emoji: '🕗', phonetic: 'KWOR-ter-too-NYN', audioRef: null },
    { id: 'five_past_six',   target: 'Five past six',    native: '6시 5분 (yeoseot-si o-bun)',           literal: 'five past six',   emoji: '🕕', phonetic: 'fyv-past-SIX',     audioRef: null },
  ],

  pattern: {
    name: 'Past vs To',
    explanation: "30분 이전 (1-30분) = past. 30분 이후 (31-59분) = to (다음 시간 기준 몇 분 전). 'Five past six' = 6:05. 'Quarter to nine' = 8:45 (9시 15분 전). 'Half past two' = 2:30.",
    examples: [
      { target: 'Five past six = 6:05',     native: '6시 5분' },
      { target: 'Half past two = 2:30',      native: '2시 반' },
      { target: 'Quarter to nine = 8:45',    native: '8시 45분 (9시 15분 전)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Half past two',   right: '2시 반 (2:30)' },
      { left: 'Quarter to nine', right: '8:45' },
      { left: 'Five past six',    right: '6:05' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '2시 반', correct: ['Half past two', 'half past two', '2:30', 'Two thirty'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "It's quarter ____ nine.", options: ['to', 'past', 'on'], correct: 'to', context: '9시 15분 전 = 8:45.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"3시 15분"의 두 가지 영어:', options: [
      { text: 'Three fifteen / Quarter past three', correct: true },
      { text: 'Three quarter only',                    correct: false },
      { text: 'Quarter to three',                       correct: false },
    ], explanation: '디지털식 + 전통식 둘 다 가능.' },
    { type: 'build_sentence', instruction: '문장', words: ['two', 'past', 'Half'], correct: ['Half', 'past', 'two'], translation: '2시 반' },
    { type: 'translate', instruction: '영어로', prompt: '8:45', correct: ['Quarter to nine', 'quarter to nine', 'Eight forty-five'] },
  ],

  rwenDialogue: {
    intro: 'London 카페 — 영국 친구와 약속 시간 정하기.',
    lines: [
      { speaker: 'npc', target: "What time should we meet?", native: '몇 시에 만날까요?' },
      { speaker: 'user', userChoices: [
        { target: "Let's meet at half past seven.", native: '7시 반에 만나요.', correct: true, feedback: '영국식 표현 — half past 자연스러워요.' },
        { target: 'Seven half.',                       native: '7 반.',           correct: false, feedback: 'half가 먼저 — half past seven.' },
        { target: 'Yes.',                                native: '네.',              correct: false, feedback: '구체적 시간 필요.' },
      ]},
      { speaker: 'npc', target: "Half past seven it is.", native: '7시 반에 만나요.' },
      { speaker: 'rwen', rwenLine: 'half past / quarter to — 영국식 시간 표현 마스터.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Half past two (영어로)',  correct: ['Half past two', 'half past two'] },
      { prompt: 'Quarter to nine (영어로)', correct: ['Quarter to nine', 'quarter to nine'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "시계 시간 5개를 영어 전통식 (half past / quarter past / quarter to)으로 말해 보세요.",
    rwenSignoff: 'half past / quarter to — 영국식 시간 표현이에요.',
  },

  phase8: {
    scenario: 'London 카페에서 친구와 약속 시간 — half past / quarter to 사용.',
    rwenRole: 'British friend, 28세, 영국식 시간 표현 좋아함.',
    successCriteria: "User uses 'half past', 'quarter past', or 'quarter to' for non-o'clock times.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
