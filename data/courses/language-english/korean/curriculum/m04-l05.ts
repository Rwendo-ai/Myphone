import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: '불규칙 복수형 — children, men',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "어떤 명사는 -s 안 붙고 모양이 변해요 — child → children, man → men, person → people. 외워야 합니다 — 패턴 없어요.",
    culturalNote: "한국어 '아이/아이들'처럼 영어도 자주 쓰는 단어가 불규칙. 면접·일상에서 'two children' / 'three people'을 헷갈리면 어색해 보여요. 핵심 10개만 외워도 90% 커버.",
  },

  chunks: [
    { id: 'child_children', target: 'Child → Children', native: '아이 → 아이들 (ai → aideul)',     literal: 'child → children', emoji: '👶', phonetic: 'CHYLD-CHIL-dren', audioRef: null },
    { id: 'man_men',         target: 'Man → Men',         native: '남자 → 남자들 (namja → namjadeul)', literal: 'man → men',        emoji: '👨', phonetic: 'MAN-MEN',           audioRef: null },
    { id: 'person_people',   target: 'Person → People',   native: '사람 → 사람들 (saram → saramdeul)', literal: 'person → people',  emoji: '👥', phonetic: 'PER-sun-PEE-pul',  audioRef: null },
  ],

  pattern: {
    name: 'Irregular plurals',
    explanation: "외울 핵심 10개: child→children, man→men, woman→women, person→people, foot→feet, tooth→teeth, mouse→mice, fish→fish (변화 없음), goose→geese, ox→oxen. 일상 80% 여기서 나와요.",
    examples: [
      { target: 'One child, two children.',  native: '아이 하나, 둘.' },
      { target: 'Three people came.',         native: '사람 셋이 왔어요.' },
      { target: 'My feet hurt.',                native: '발이 아파요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Child → Children', right: '아이 → 아이들' },
      { left: 'Man → Men',         right: '남자 → 남자들' },
      { left: 'Person → People',   right: '사람 → 사람들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '두 아이', correct: ['Two children', 'two children'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Three ____ came to the party.', options: ['people', 'persons', 'peoples'], correct: 'people', context: '복수 — person의 불규칙.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"발이 아파요"의 영어:', options: [
      { text: 'My feet hurt.', correct: true },
      { text: 'My foots hurt.',  correct: false },
      { text: 'My foot hurts.',   correct: false },
    ], explanation: 'foot의 복수는 feet — 두 발 모두면 feet.' },
    { type: 'build_sentence', instruction: '문장', words: ['children', 'have', 'two', 'I'], correct: ['I', 'have', 'two', 'children'], translation: '아이가 둘 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '많은 사람들', correct: ['Many people', 'many people'] },
  ],

  rwenDialogue: {
    intro: '미국계 회사 면접 — 가족·팀 사이즈를 영어로.',
    lines: [
      { speaker: 'npc', target: "Tell me about your family and team.", native: '가족과 팀에 대해 말해 보세요.' },
      { speaker: 'user', userChoices: [
        { target: 'I have two children, and my team has 12 people.', native: '아이 둘 있고, 우리 팀은 12명이에요.', correct: true, feedback: 'children + people 둘 다 불규칙 복수 정확히.' },
        { target: 'Two childs, twelve persons.',                        native: '두 아이, 12 사람.',                  correct: false, feedback: 'childs(X)/children(O), persons(X)/people(O).' },
        { target: 'Bye.',                                                native: '잘 가.',                              correct: false, feedback: '면접 중이에요.' },
      ]},
      { speaker: 'npc', target: "Great. Big team!", native: '좋네요. 큰 팀이네요!' },
      { speaker: 'rwen', rwenLine: '불규칙 복수 — 핵심 10개만 외우면 영어 일상 80% 커버해요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Children (영어로)',  correct: ['Children', 'children'] },
      { prompt: 'People (영어로)',     correct: ['People', 'people'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "불규칙 복수 10개 외워 보세요 — child/children, man/men, woman/women, person/people, foot/feet, tooth/teeth, mouse/mice, fish/fish, goose/geese, ox/oxen.",
    rwenSignoff: '불규칙 복수 — 일상 영어의 단단한 카드 10장이에요.',
  },

  phase8: {
    scenario: '미국계 회사 면접 — 가족·팀 사이즈를 정확한 불규칙 복수로 표현.',
    rwenRole: 'Interviewer, 40대 미국인.',
    successCriteria: "User uses 'children' (not 'childs'), 'people' (not 'persons'), correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
