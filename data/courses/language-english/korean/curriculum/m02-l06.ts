import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — 네 / 아니요',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Yes / No / Maybe' — 한국어 '네/아니요/아마도'와 거의 동일. 단, 한국에서는 부정 질문에 '네'(맞음)/'아니요'(틀림)로 답하지만, 영어는 사실 자체로 답해요.",
    culturalNote: "예: 'Don't you like coffee?' (커피 싫어하지 않으세요?) — 한국어는 '네 (싫어해요)'지만, 영어는 'No, I don't' (싫어요) 또는 'Yes, I do' (좋아해요). 사실에 맞추세요. 한국어식으로 답하면 영어권에서 정반대로 들려요.",
  },

  chunks: [
    { id: 'yes',   target: 'Yes',   native: '네 (ne)',     literal: undefined, emoji: '✅', phonetic: 'YES',  audioRef: null },
    { id: 'no',    target: 'No',    native: '아니요 (aniyo)', literal: undefined, emoji: '❌', phonetic: 'NOH',  audioRef: null },
    { id: 'maybe', target: 'Maybe', native: '아마도 (amado)',  literal: undefined, emoji: '🤷', phonetic: 'MAY-bee', audioRef: null },
  ],

  pattern: {
    name: 'Yes/No to negative questions',
    explanation: "부정 질문 답변: 한국어는 질문자 의견에 동의/반대로 답하지만, 영어는 '내 사실'로 답해요. 'Don't you like it?' — 좋아하면 'Yes, I do', 싫어하면 'No, I don't'. 한국어 직역하면 정반대 됩니다.",
    examples: [
      { target: 'Yes',   native: '네' },
      { target: 'No',    native: '아니요' },
      { target: 'Maybe', native: '아마도' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Yes',   right: '네' },
      { left: 'No',    right: '아니요' },
      { left: 'Maybe', right: '아마도' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '아마도', correct: ['Maybe', 'maybe'] },
    { type: 'fill_blank', instruction: '빈칸 — 부정 질문', sentence: "'Don't you like coffee?' — 'I love coffee.' → ____ I do.", options: ['Yes', 'No', 'Maybe'], correct: 'Yes', context: '커피를 좋아할 때 영어식 답변.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "'Don't you have a brother?' — 형이 있을 때:", options: [
      { text: 'Yes, I do.',  correct: true },
      { text: 'No, I do.',   correct: false },
      { text: 'Maybe.',       correct: false },
    ], explanation: '있다는 사실 자체에 Yes. 한국어식 사고를 비우세요.' },
    { type: 'build_sentence', instruction: '문장', words: ['I', 'Yes', 'do'], correct: ['Yes', 'I', 'do'], translation: '네, 그래요' },
    { type: 'translate', instruction: '영어로', prompt: '아니요, 안 좋아해요', correct: ["No, I don't", "No, I do not"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 카페 — 친구가 부정 질문을 던짐.',
    lines: [
      { speaker: 'npc', target: "Don't you like sugar in your coffee?", native: '커피에 설탕 안 좋아하세요?' },
      { speaker: 'user', userChoices: [
        { target: "No, I don't. I like it black.", native: '아니요, 안 좋아해요. 블랙으로 마셔요.', correct: true, feedback: "사실에 맞춘 답 — 'No, I don't'가 정확해요." },
        { target: "Yes, I don't.",                    native: '네, 안 좋아해요.',                      correct: false, feedback: '한국어 직역이에요 — 영어에서는 사실에 Yes/No.' },
        { target: 'Maybe.',                            native: '아마도.',                                correct: false, feedback: '단순 사실에 maybe는 회피처럼 들려요.' },
      ]},
      { speaker: 'npc', target: "Black it is.", native: '블랙으로 드릴게요.' },
      { speaker: 'rwen', rwenLine: '부정 질문 영어 답변 — 한국어식 사고 한 번에 끊었어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Yes (영어로)',   correct: ['Yes', 'yes'] },
      { prompt: 'No (영어로)',    correct: ['No', 'no'] },
      { prompt: 'Maybe (영어로)', correct: ['Maybe', 'maybe'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 부정 질문 한 번 만들어 보세요. 영어식으로 답하면 어떻게 되는지 머릿속에서 시뮬레이션.",
    rwenSignoff: '사실에 Yes/No — 영어식 사고의 시작이에요.',
  },

  phase8: {
    scenario: '뉴욕 카페에서 부정 질문에 영어식 답변하기.',
    rwenRole: 'Cafe friend, 26세 미국인.',
    successCriteria: "User answers negative question by FACT (not by Korean-style agreement), uses 'Yes, I do / No, I don't' correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
