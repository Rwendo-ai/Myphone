import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: '내가 사는 곳 — Where I live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "거주지 묻기는 자기소개의 다음 단계예요. 'I live in Seoul', 'I grew up in Busan', 'I've lived here for 10 years'. 시간 표현 'for ___ years'까지 같이 익혀 두세요.",
    culturalNote: "한국에서는 '서울 사람이세요?' 식으로 도시를 묻지만, 영어권은 'Where do you live?' / 'Where did you grow up?'으로 거주지와 출신지를 분리해서 묻습니다. 답할 때도 둘을 분리해서.",
  },

  chunks: [
    { id: 'i_live_in_seoul', target: 'I live in Seoul',  native: '서울에 살아요 (seoure sarayo)',           literal: 'I live in Seoul',  emoji: '🏙️', phonetic: 'aye-LIV-in-SOLE',   audioRef: null },
    { id: 'i_grew_up',        target: 'I grew up in ...',  native: '저는 ~에서 자랐어요 (jeoneun ~eseo jaratseoyo)', literal: 'I grew up in', emoji: '🌱', phonetic: 'aye-GROO-up-in', audioRef: null },
    { id: 'for_ten_years',    target: 'For ten years',     native: '10년 동안 (sip-nyeon dongan)',                 literal: 'for ten years',    emoji: '⏳', phonetic: 'for-ten-YEERS',   audioRef: null },
  ],

  pattern: {
    name: 'Live / grew up / for',
    explanation: "현재 거주: 'I live in ___' (현재형). 출신·자란 곳: 'I grew up in ___' (과거형 grew = grow). 기간: 'for ___ years'. 한국어 '~에서 ~년 살았어요'를 영어는 두 문장으로 나눠요.",
    examples: [
      { target: 'I live in Seoul.',                       native: '서울에 살아요.' },
      { target: 'I grew up in Busan.',                     native: '부산에서 자랐어요.' },
      { target: "I've lived here for ten years.",          native: '여기 10년 살았어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I live in Seoul', right: '서울에 살아요' },
      { left: 'I grew up in ...', right: '저는 ~에서 자랐어요' },
      { left: 'For ten years',    right: '10년 동안' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '서울에 살아요', correct: ['I live in Seoul', 'i live in Seoul'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I grew up ____ Busan.', options: ['in', 'on', 'at'], correct: 'in', context: '출신 도시.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '거주지 + 출신지 + 기간을 한 번에:', options: [
      { text: "I live in Seoul. I grew up in Busan. I've been here for 10 years.", correct: true },
      { text: 'Seoul Busan ten.',                                                     correct: false },
      { text: 'I Seoul.',                                                              correct: false },
    ], explanation: '세 문장으로 나눠 풀어 답해요.' },
    { type: 'build_sentence', instruction: '문장', words: ['Busan', 'I', 'in', 'up', 'grew'], correct: ['I', 'grew', 'up', 'in', 'Busan'], translation: '부산에서 자랐어요' },
    { type: 'translate', instruction: '영어로', prompt: '10년 동안 살았어요', correct: ["I've lived for ten years", "I have lived for ten years", "I lived for ten years"] },
  ],

  rwenDialogue: {
    intro: '미국 동료가 서울에 처음 와서 한국 친구의 출신지를 궁금해함.',
    lines: [
      { speaker: 'npc', target: "Are you from Seoul originally?", native: '원래 서울 사람이세요?' },
      { speaker: 'user', userChoices: [
        { target: "No, I grew up in Busan. I've lived in Seoul for 10 years now.", native: '아니요, 부산에서 자랐어요. 서울에는 10년 살고 있어요.', correct: true, feedback: '거주지 + 출신지 + 기간 — 영어권 표준 답변 구조예요.' },
        { target: 'Seoul.',                                                          native: '서울.',                                                  correct: false, feedback: '도시만 답하면 단순해요. 풀어 보세요.' },
        { target: 'Yes, no.',                                                        native: '네, 아니요.',                                            correct: false, feedback: '둘 중 하나를 명확히.' },
      ]},
      { speaker: 'npc', target: "Busan! I want to visit there.", native: '부산! 가 보고 싶어요.' },
      { speaker: 'rwen', rwenLine: '거주지 + 출신 — 두 카드를 분리해서 잘 답했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I live in Seoul (영어로)', correct: ['I live in Seoul', 'i live in Seoul'] },
      { prompt: 'I grew up in Busan (영어로)', correct: ['I grew up in Busan', 'i grew up in Busan'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 거주지 + 출신지 + 기간을 영어 세 문장으로 만들어 보세요.",
    rwenSignoff: '거주지 영어 — 정체성의 또 한 카드예요.',
  },

  phase8: {
    scenario: '미국 동료가 첫 한국 방문 중. 자연스럽게 출신·거주·기간 풀기.',
    rwenRole: 'US colleague, 38세, 한국 첫 방문, 호기심 많음.',
    successCriteria: "User uses 'I live in ___' (present), 'I grew up in ___' (past), and a duration like 'for ___ years'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
