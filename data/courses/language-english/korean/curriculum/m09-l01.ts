import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — 어디 있어요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "여행 영어 첫 카드 — 'Where is the bank?', 'Where are the toilets?'. 단수 is, 복수 are 구분 잊지 마세요.",
    culturalNote: "한국에서 'toilets'(복수)는 어색하지만, 영국 공공장소는 보통 화장실이 여러 칸 — 'Where are the toilets?'(공중화장실 복수). 미국은 'restroom'(단수) 자주.",
  },

  chunks: [
    { id: 'where_bank',     target: 'Where is the bank?',         native: '은행이 어디 있어요? (eunhaengi eodi isseoyo?)', literal: 'where is the bank?',  emoji: '🏦', phonetic: 'wair-iz-thuh-BANK',    audioRef: null },
    { id: 'excuse_toilets', target: 'Excuse me, the toilets?',     native: '실례합니다, 화장실은요? (sillyehamnida, hwajangsireunnyo?)', literal: 'excuse me, the toilets?', emoji: '🚻', phonetic: 'eks-KYOOZ-mee',       audioRef: null },
    { id: 'over_there',     target: 'Over there',                  native: '저쪽이요 (jeojjogiyo)',                          literal: 'over there',           emoji: '👉', phonetic: 'OH-ver-thair',         audioRef: null },
  ],

  pattern: {
    name: 'Where is/are + the + place',
    explanation: "is = 단수 (the bank, the station), are = 복수 (the toilets, the shops). 'Excuse me'로 시작하면 정중함 +1. 답: 'Over there', 'Down the street', 'On your right'.",
    examples: [
      { target: 'Where is the bank?',     native: '은행 어디예요?' },
      { target: 'Where are the toilets?',  native: '화장실 어디예요?' },
      { target: "It's over there.",         native: '저쪽이에요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Where is the bank?',     right: '은행 어디예요?' },
      { left: 'Excuse me, the toilets?', right: '실례합니다, 화장실은요?' },
      { left: 'Over there',               right: '저쪽이요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저쪽이요', correct: ['Over there', 'over there'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Where ____ the toilets?', options: ['are', 'is', 'be'], correct: 'are', context: 'toilets는 복수 → are.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"역이 어디예요?" 정중하게:', options: [
      { text: 'Excuse me, where is the station?', correct: true },
      { text: 'Station!',                            correct: false },
      { text: 'Bye.',                                  correct: false },
    ], explanation: 'Excuse me + Where is the ___?' },
    { type: 'build_sentence', instruction: '문장', words: ['the', 'is', 'Where', 'bank?'], correct: ['Where', 'is', 'the', 'bank?'], translation: '은행 어디예요?' },
    { type: 'translate', instruction: '영어로', prompt: '화장실 어디예요?', correct: ['Where are the toilets?', 'Where is the toilet?', 'Where is the bathroom?'] },
  ],

  rwenDialogue: {
    intro: 'London 거리 — 한국 관광객이 은행 위치 묻기.',
    lines: [
      { speaker: 'npc', target: "Need help?", native: '도움 필요하세요?' },
      { speaker: 'user', userChoices: [
        { target: 'Excuse me, where is the nearest bank?', native: '실례합니다, 가장 가까운 은행이 어디예요?', correct: true, feedback: 'Excuse me + Where is + nearest — 정확.' },
        { target: 'Bank!',                                    native: '은행!',                                       correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                                      native: '네.',                                          correct: false, feedback: '구체적 질문 필요.' },
      ]},
      { speaker: 'npc', target: "It's over there, on your right.", native: '저쪽 오른쪽이에요.' },
      { speaker: 'rwen', rwenLine: 'Where is + 장소 — 여행 영어 만능 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Where is the bank? (영어로)',     correct: ['Where is the bank?', 'where is the bank?'] },
      { prompt: 'Where are the toilets? (영어로)', correct: ['Where are the toilets?', 'where are the toilets?'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "여행 시뮬레이션 — Where is/are 5문장 다양한 장소.",
    rwenSignoff: 'Where is — 여행 영어의 만능 카드.',
  },

  phase8: {
    scenario: 'London 거리에서 은행·역·화장실 위치 묻기.',
    rwenRole: 'Local pedestrian, 40대 영국인.',
    successCriteria: "User uses 'Where is/are the ___?' with correct singular/plural matching.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
