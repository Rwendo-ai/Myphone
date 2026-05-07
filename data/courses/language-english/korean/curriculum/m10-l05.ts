import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: '신체 부위 — Body Parts',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "신체 부위 — Head (머리), Stomach (배), Arm (팔). 의사 만났을 때 'It hurts here' + 손가락으로 가리키면 통해요.",
    culturalNote: "영어 신체 부위는 한국어와 1:1 대응 거의 다 — 머리·배·팔·다리·등. 다만 'shoulder'(어깨) vs 'neck'(목)을 헷갈리지 마세요. 미국 응급실은 영어가 핵심이에요.",
  },

  chunks: [
    { id: 'head',     target: 'Head',     native: '머리 (meori)',  literal: 'head',     emoji: '🤯', phonetic: 'HED',     audioRef: null },
    { id: 'stomach',   target: 'Stomach', native: '배 (bae)',       literal: 'stomach',   emoji: '🩻', phonetic: 'STUM-uk', audioRef: null },
    { id: 'arm',       target: 'Arm',     native: '팔 (pal)',        literal: 'arm',       emoji: '💪', phonetic: 'ARM',     audioRef: null },
  ],

  pattern: {
    name: 'Body parts',
    explanation: "주요 부위: head, eye, nose, mouth, ear, neck, shoulder, arm, hand, finger, chest, stomach, back, leg, knee, foot. 'My + 부위 + hurts' = ~가 아파요.",
    examples: [
      { target: 'My head hurts.',     native: '머리가 아파요.' },
      { target: 'My stomach hurts.',   native: '배가 아파요.' },
      { target: 'My arm is broken.',    native: '팔 부러졌어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Head',     right: '머리' },
      { left: 'Stomach', right: '배' },
      { left: 'Arm',     right: '팔' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '배가 아파요', correct: ['My stomach hurts', 'my stomach hurts'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My ____ hurts.', options: ['head', 'haed', 'heads'], correct: 'head', context: '단수.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"팔 부러졌어요" 영어:', options: [
      { text: 'My arm is broken.',  correct: true },
      { text: 'Arm broke me.',        correct: false },
      { text: 'Broken arm.',           correct: false },
    ], explanation: 'My + 부위 + is + broken.' },
    { type: 'build_sentence', instruction: '문장', words: ['hurts', 'My', 'head'], correct: ['My', 'head', 'hurts'], translation: '머리가 아파요' },
    { type: 'translate', instruction: '영어로', prompt: '팔', correct: ['Arm', 'arm'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 응급실 — 의사에게 어디 아픈지 영어로 설명.',
    lines: [
      { speaker: 'npc', target: "Where does it hurt?", native: '어디가 아프세요?' },
      { speaker: 'user', userChoices: [
        { target: 'My stomach hurts here, and my head hurts too.', native: '배가 여기 아프고, 머리도 아파요.', correct: true, feedback: 'My + 부위 + hurts — 두 곳 정확히.' },
        { target: 'Stomach head pain.',                              native: '배 머리 통증.',                       correct: false, feedback: '동사·구조 빠짐.' },
        { target: 'Yes.',                                              native: '네.',                                  correct: false, feedback: '구체적 위치.' },
      ]},
      { speaker: 'npc', target: "Let me check.", native: '확인해 볼게요.' },
      { speaker: 'rwen', rwenLine: '신체 영어 — My + 부위 + hurts 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Head (영어로)',     correct: ['Head', 'head'] },
      { prompt: 'Stomach (영어로)',   correct: ['Stomach', 'stomach'] },
      { prompt: 'Arm (영어로)',       correct: ['Arm', 'arm'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "신체 부위 10개 영어로 — head/eye/nose/mouth/ear/neck/shoulder/arm/leg/foot.",
    rwenSignoff: '신체 영어 — 의사·응급실 핵심 카드.',
  },

  phase8: {
    scenario: '뉴욕 응급실에서 의사에게 통증 위치 영어로 정확히.',
    rwenRole: 'Doctor, 40대 미국인.',
    successCriteria: "User uses 'My + body part + hurts' or 'It hurts here' with at least 2 body parts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
