import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: '격식 있는 인사 — How do you do?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어의 '-습니다' 체와 비슷한 격식 영어 표현들이 있어요. 'How do you do?', 'Pleased to meet you' — 면접, 임원 미팅, 외교 자리에서 들어요.",
    culturalNote: "한국어는 격식 단계가 7개 정도 있지만, 영어는 사실상 2단계: casual ('Hi') vs formal ('How do you do?'). 영어 격식의 미묘함은 단어 선택보다는 문장 구조와 'please / thank you' 빈도로 표현돼요.",
  },

  chunks: [
    { id: 'how_do_you_do',     target: 'How do you do?',           native: '처음 뵙겠습니다 (cheoeum boepgesseumnida)', literal: 'how do you do?',           emoji: '🎩', phonetic: 'how-doo-yoo-DOO',  audioRef: null },
    { id: 'pleased_to_meet',   target: 'Pleased to meet you',     native: '뵙게 되어 반갑습니다 (boepge doeeo bangapseumnida)', literal: 'pleased to meet you', emoji: '🤝', phonetic: 'pleezd-too-MEET-yoo', audioRef: null },
    { id: 'i_hope_youre_well', target: "I hope you're well",      native: '잘 지내시길 바랍니다 (jal jinaesigil baramnida)',   literal: "I hope you-are well",     emoji: '💌', phonetic: 'aye-HOPE-yor-WEL',  audioRef: null },
  ],

  pattern: {
    name: 'Formal first meeting',
    explanation: "면접·공식 자리: 'How do you do?' (격식 인사 — 답도 'How do you do?'예요. 진짜 안부가 아닙니다). 비즈니스 이메일 끝맺음: 'I hope you're well'. 한국어의 '-습니다' 체와 비슷한 거리감을 만들어요.",
    examples: [
      { target: 'How do you do?',         native: '처음 뵙겠습니다' },
      { target: 'Pleased to meet you',    native: '뵙게 되어 반갑습니다' },
      { target: "I hope you're well",     native: '잘 지내시길 바랍니다' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'How do you do?',      right: '처음 뵙겠습니다' },
      { left: 'Pleased to meet you', right: '뵙게 되어 반갑습니다' },
      { left: "I hope you're well",  right: '잘 지내시길 바랍니다' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '뵙게 되어 반갑습니다', correct: ['Pleased to meet you', 'pleased to meet you'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Pleased ____ meet you.', options: ['to', 'for', 'at'], correct: 'to', context: '회사 임원 면접 자리.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "임원 면접에서 'How do you do?'라고 들었어요.", options: [
      { text: 'How do you do? Pleased to meet you.', correct: true },
      { text: "Hi! What's up?",                        correct: false },
      { text: 'How are you?',                           correct: false },
    ], explanation: "면접 자리에서는 같은 말로 받고 'Pleased to meet you'를 더하면 가장 안전해요." },
    { type: 'build_sentence', instruction: '문장', words: ['meet', 'to', 'Pleased', 'you'], correct: ['Pleased', 'to', 'meet', 'you'], translation: '뵙게 되어 반갑습니다' },
    { type: 'translate', instruction: '영어로', prompt: '잘 지내시길 바랍니다', correct: ["I hope you're well", "I hope you are well"] },
  ],

  rwenDialogue: {
    intro: '서울 외국계 IB 임원 면접 — 영국 출신 시니어 디렉터와 첫 인사.',
    lines: [
      { speaker: 'npc', target: 'Good morning. How do you do?', native: '안녕하십니까. 처음 뵙겠습니다.' },
      { speaker: 'user', userChoices: [
        { target: 'How do you do? Pleased to meet you.', native: '처음 뵙겠습니다. 뵙게 되어 반갑습니다.', correct: true, feedback: '면접 톤 — 정확히 매치했어요.' },
        { target: "Hi! What's up?",                        native: '안녕! 뭐해?',                              correct: false, feedback: '캐주얼 너무 — 면접 자리예요.' },
        { target: 'How are you?',                           native: '어떻게 지내세요?',                         correct: false, feedback: '괜찮지만 격식 부족 — How do you do?로 받으세요.' },
      ]},
      { speaker: 'npc', target: 'Pleased to meet you too. Please have a seat.', native: '저도 반갑습니다. 자리에 앉으세요.' },
      { speaker: 'rwen', rwenLine: '격식 모드 — 임원도 톤을 인정했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How do you do? (영어로)',     correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'] },
      { prompt: 'Pleased to meet you (영어로)', correct: ['Pleased to meet you', 'pleased to meet you'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "면접 시뮬레이션: 거울 앞에서 'How do you do? Pleased to meet you.'를 영국식 액센트로 한 번 말해 보세요.",
    rwenSignoff: '면접 영어 — 격식 톤은 연습하면 자연스러워져요.',
  },

  phase8: {
    scenario: '서울 외국계 IB 시니어 디렉터 면접 시작 직전. 격식 톤 유지가 핵심.',
    rwenRole: 'Mr. Whitfield, 영국 출신 50대 디렉터, 격식 중요.',
    successCriteria: "User uses 'How do you do?' (NOT 'How are you?'), follows with 'Pleased to meet you', avoids slang.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
