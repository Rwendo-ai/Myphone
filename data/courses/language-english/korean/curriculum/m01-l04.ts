import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — 좋은 오후',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Good afternoon'은 점심 이후부터 해 질 때까지의 인사입니다. 'How's your day?'는 한국어 '오늘 어땠어요?'에 가까워요.",
    culturalNote: "한국어는 시간대별 인사가 거의 없어요 — 종일 '안녕하세요'. 영어는 점심 이후 'Good afternoon'으로 바뀌고, 비즈니스 이메일에서도 자주 봅니다.",
  },

  chunks: [
    { id: 'good_afternoon',  target: 'Good afternoon',   native: '좋은 오후 (joeun ohu)',                  literal: undefined,           emoji: '🌤️', phonetic: 'good-af-ter-NOON',  audioRef: null },
    { id: 'how_your_day',    target: "How's your day?",  native: '오늘 어때요? (oneul eottaeyo?)',         literal: 'how-is your day?',  emoji: '☕',  phonetic: 'howz-yor-DAY',      audioRef: null },
    { id: 'going_well',      target: "It's going well",  native: '잘 되고 있어요 (jal doego isseoyo)',     literal: 'it-is going well',  emoji: '✅',  phonetic: 'its-go-ing-WEL',    audioRef: null },
  ],

  pattern: {
    name: 'Afternoon greeting',
    explanation: "정오 이후엔 'Good afternoon', 'How's your day?'를 묻고, 'It's going well' 정도로 답합니다. 자세한 일과는 묻지 않아요 — 형식적인 인사예요.",
    examples: [
      { target: 'Good afternoon',  native: '좋은 오후' },
      { target: "How's your day?", native: '오늘 어때요?' },
      { target: "It's going well", native: '잘 되고 있어요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Good afternoon',  right: '좋은 오후' },
      { left: "How's your day?", right: '오늘 어때요?' },
      { left: "It's going well", right: '잘 되고 있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '좋은 오후', correct: ['Good afternoon', 'good afternoon'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "Good afternoon. How's ____ day?", options: ['your', 'my', 'his'], correct: 'your', context: '점심 후 회의실에서 동료와 마주침.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "오후 2시, 동료가 'How's your day?'라고 묻습니다.", options: [
      { text: "It's going well, thanks.", correct: true },
      { text: 'Good morning.',             correct: false },
      { text: 'Bye.',                      correct: false },
    ], explanation: "오후 인사에는 'Good afternoon' + 'It's going well'이 어울려요." },
    { type: 'build_sentence', instruction: '문장', words: ['day', "How's", 'your'], correct: ["How's", 'your', 'day'], translation: '오늘 어때요?' },
    { type: 'translate', instruction: '영어로', prompt: '잘 되고 있어요, 감사합니다', correct: ["It's going well, thanks", "It's going well thanks", "its going well, thanks"] },
  ],

  rwenDialogue: {
    intro: '판교 IT 회사 점심 회의실 — 미국 본사 PM과의 오후 미팅 시작 직전.',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: '좋은 오후! 오늘 어때요?' },
      { speaker: 'user', userChoices: [
        { target: "Good afternoon. It's going well, thanks.", native: '좋은 오후. 잘 되고 있어요, 감사합니다.', correct: true, feedback: '딱 맞는 톤 — 짧고 프로페셔널해요.' },
        { target: 'Good morning.',                              native: '좋은 아침.',                            correct: false, feedback: '오후예요 — Good afternoon이 맞아요.' },
        { target: 'Bye!',                                       native: '잘 가!',                                correct: false, feedback: '이제 막 만났는데 헤어지면 안 돼요.' },
      ]},
      { speaker: 'npc', target: "Glad to hear that.", native: '다행이에요.' },
      { speaker: 'rwen', rwenLine: '오후 인사 클리어 — 시간대를 정확히 맞췄어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Good afternoon (영어로)', correct: ['Good afternoon', 'good afternoon'] },
      { prompt: "It's going well (영어로)", correct: ["It's going well", "its going well", "It is going well"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 오후에 누군가에게 'Good afternoon'이라고 인사해 보세요.",
    rwenSignoff: '오후도 잘 보내요!',
  },

  phase8: {
    scenario: '판교 사무실 오후 2시 회의 시작 직전. 미국 본사 PM이 줌으로 들어옴.',
    rwenRole: 'David, 미국 PM, 40대, 친근하지만 미팅 본론에 빨리 들어가는 스타일.',
    successCriteria: "User says 'Good afternoon', responds 'It's going well, thanks' to 'How's your day?'",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
