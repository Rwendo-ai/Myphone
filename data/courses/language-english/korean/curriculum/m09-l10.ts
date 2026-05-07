import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: '여행 대화 캡스톤 — Module 9',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 마무리 — 도착·교통·호텔·길 안내 모든 카드를 한 흐름에. 공항부터 호텔 체크인까지 영어로 자신감 있게.",
    culturalNote: "한국 화자가 영어권 여행에서 가장 어려워하는 게 'Where is + 받아쓰기'. 이 모듈을 통과하면 런던·뉴욕·시드니·홍콩 어디든 영어로 도착 → 길 → 숙소까지 자기 힘으로 갈 수 있어요.",
  },

  chunks: [
    { id: 'arrived_underground', target: "Excuse me, I just arrived. Where is the Underground?",   native: '실례합니다, 방금 도착했어요. 지하철 어디예요?',                       literal: "excuse me, I just arrived. Where is the Underground?", emoji: '🚇', phonetic: 'eks-KYOOZ-mee', audioRef: null },
    { id: 'one_kings_cross',     target: "One ticket to King's Cross, please. How far is it?",     native: '킹스크로스 한 장 부탁드려요. 얼마나 멀어요?',                            literal: "one ticket to King's Cross, please. How far is it?",   emoji: '🎫', phonetic: 'wun-TIK-it',     audioRef: null },
    { id: 'reservation_wifi',    target: 'I have a reservation. Could you write down the WiFi password?', native: '예약했어요. 와이파이 비밀번호 적어 주실 수 있어요?',                  literal: 'I have a reservation. Could you write down the WiFi password?', emoji: '🏨', phonetic: 'aye-hav-uh-rez', audioRef: null },
  ],

  pattern: {
    name: 'Travel arc — arrival to room',
    explanation: "한 흐름: (1) 도착 + 길 묻기 (Where is + 교통). (2) 발권 (One ticket to + 목적지). (3) 호텔 체크인 (I have a reservation). (4) 도움 요청 (Could you write it down). 여행 한 사이클.",
    examples: [
      { target: "Excuse me, where is the Underground?",                    native: '지하철 어디예요?' },
      { target: "One ticket to King's Cross, please.",                       native: '킹스크로스 한 장.' },
      { target: 'I have a reservation under Kim. Could you write the WiFi?', native: '김 이름 예약. 와이파이 적어 주세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I just arrived',           right: '방금 도착했어요' },
      { left: "One ticket to King's Cross", right: '킹스크로스 한 장' },
      { left: 'I have a reservation',       right: '예약했어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '실례합니다, 방금 도착했어요. 지하철 어디예요?', correct: ['Excuse me, I just arrived. Where is the Underground?', 'Excuse me, I just arrived. Where is the subway?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Could you ____ down the WiFi password?', options: ['write', 'wrote', 'writing'], correct: 'write', context: 'Could you + 동사 원형.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '여행 한 사이클 영어 흐름:', options: [
      { text: '도착 → 교통 → 발권 → 호텔 → WiFi 부탁', correct: true },
      { text: 'WiFi → 도착 → Bye',                          correct: false },
      { text: '단어만 외치기',                                 correct: false },
    ], explanation: 'Module 9의 모든 카드를 한 흐름에.' },
    { type: 'build_sentence', instruction: '문장', words: ['Underground?', 'is', 'the', 'Where'], correct: ['Where', 'is', 'the', 'Underground?'], translation: '지하철 어디예요?' },
    { type: 'translate', instruction: '영어로', prompt: '예약했어요. 와이파이 비밀번호 적어 주실 수 있어요?', correct: ['I have a reservation. Could you write down the WiFi password?', 'I have a reservation. Could you write down the WiFi password'] },
  ],

  rwenDialogue: {
    intro: 'London Heathrow 도착 — 호텔 체크인까지 영어 한 사이클.',
    lines: [
      { speaker: 'npc', target: "Welcome to London. Need anything?", native: '런던에 오신 걸 환영합니다. 필요한 거 있으세요?' },
      { speaker: 'user', userChoices: [
        { target: "Excuse me, I just arrived. Where is the Underground? I need one ticket to King's Cross. How far is it? And after that, I have a reservation at the hotel — could you write down the address?", native: '실례합니다, 방금 도착했어요. 지하철 어디예요? 킹스크로스 한 장 필요해요. 얼마나 멀어요? 그리고 그 후 호텔 예약했는데 — 주소 적어 주실 수 있어요?', correct: true, feedback: 'Module 9 카드 다 — 도착·교통·발권·거리·호텔·받아쓰기 한 흐름.' },
        { target: 'Underground King\'s Cross hotel.',                                                                                                                                                                  native: '지하철 킹스크로스 호텔.',                                                                                                                                  correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                                                                                                                                                                                                native: '네.',                                                                                                                                                       correct: false, feedback: '여행 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Sure thing. Let me write everything for you.", native: '물론이죠. 다 적어 드릴게요.' },
      { speaker: 'rwen', rwenLine: 'Module 9 완성 — 영어권 여행 한 사이클을 자기 힘으로.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '한 사이클 기억',
    prompts: [
      { prompt: 'I just arrived (영어로)',           correct: ['I just arrived', 'i just arrived'] },
      { prompt: 'One ticket to ___, please (영어로)', correct: ['One ticket to', 'one ticket to'] },
      { prompt: 'I have a reservation (영어로)',      correct: ['I have a reservation', 'i have a reservation'] },
    ],
  },

  mission: {
    title: 'Module 9 미션',
    task: "다음 여행 — 도착 → 교통 → 호텔까지 영어로 머릿속 시뮬레이션.",
    rwenSignoff: 'Module 9 완성. 마지막 Module 10 — 감정·이야기예요.',
  },

  phase8: {
    scenario: 'London Heathrow 도착부터 호텔 체크인까지 영어 한 사이클 — 모든 여행 카드 활용.',
    rwenRole: 'Airport info desk, 40대 영국인.',
    successCriteria: "User chains: arrival → asks where transport is → buys ticket → arrives at hotel → mentions reservation → asks for written info.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
