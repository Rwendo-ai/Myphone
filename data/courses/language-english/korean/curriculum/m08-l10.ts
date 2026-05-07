import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: '하루 일과 캡스톤 — Module 8',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 마무리 — 일상 동사·과거형·미래형 모두를 한 흐름으로. 'Yesterday I went, today I'm doing, tomorrow I will'.",
    culturalNote: "한국어 일상 표현은 시제가 어미로 가벼웠지만, 영어는 시제마다 동사가 바뀌어요. Module 8을 다 통과하면 영어로 자기 하루를 정확히 표현할 수 있어요 — 어제·오늘·내일 모두.",
  },

  chunks: [
    { id: 'morning_full',     target: 'I wake up at 6, take a shower, and have breakfast.',                              native: '6시 일어나, 샤워하고, 아침 먹어요.',                            literal: 'I wake up at 6, take a shower, and have breakfast', emoji: '☀️', phonetic: 'aye-wayk-up-at-SIX',  audioRef: null },
    { id: 'work_full',         target: 'I go to work, have meetings, and make plans.',                                  native: '회사 가서, 회의하고, 계획 세워요.',                                literal: 'I go to work, have meetings, and make plans',     emoji: '💼', phonetic: 'aye-GOH-too-WERK',     audioRef: null },
    { id: 'past_future',       target: 'Yesterday I went home early; tomorrow I will work late.',                         native: '어제 일찍 집 갔고; 내일은 늦게까지 일할 거예요.',                       literal: 'yesterday I went home early; tomorrow I will work late', emoji: '⏰', phonetic: 'YES-ter-day-aye-WENT', audioRef: null },
  ],

  pattern: {
    name: 'Three tenses in flow',
    explanation: "한 단락에 세 시제: (1) 과거 — Yesterday I went/saw/ate/was. (2) 현재 습관 — I wake up / I go to / I have. (3) 미래 — Tomorrow I will / I'm going to. 시제 흐름으로 인생을 풀어요.",
    examples: [
      { target: 'Yesterday I worked late.',       native: '어제 늦게까지 일했어요.' },
      { target: 'I usually wake up at 6.',         native: '보통 6시 일어나요.' },
      { target: "Tomorrow I'll go to the gym.",   native: '내일 헬스장 갈 거예요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I wake up at 6',          right: '현재 습관' },
      { left: 'Yesterday I went home',    right: '과거' },
      { left: 'Tomorrow I will work',     right: '미래' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '6시 일어나, 샤워하고, 아침 먹어요', correct: ['I wake up at 6, take a shower, and have breakfast', 'I wake up at 6, take a shower, and have breakfast.'] },
    { type: 'fill_blank', instruction: '빈칸 — 시제', sentence: 'Yesterday I ____ home early; tomorrow I ____ work late.', options: ['went / will', 'go / will', 'went / am'], correct: 'went / will', context: '과거 + 미래.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '하루 일과 영어 한 단락 — 시제 흐름:', options: [
      { text: '과거 (어제) → 현재 (오늘 일과) → 미래 (내일)', correct: true },
      { text: '현재만',                                              correct: false },
      { text: '미래만',                                              correct: false },
    ], explanation: '세 시제가 한 단락에 자연스럽게.' },
    { type: 'build_sentence', instruction: '문장', words: ['late', 'work', 'will', 'I', 'tomorrow'], correct: ['Tomorrow', 'I', 'will', 'work', 'late'], translation: '내일은 늦게까지 일할 거예요' },
    { type: 'translate', instruction: '영어로', prompt: '회사 가서, 회의하고, 계획 세워요', correct: ['I go to work, have meetings, and make plans', 'I go to work, have meetings, and make plans.'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 동료와 일주일 일정 영어로 풀기.',
    lines: [
      { speaker: 'npc', target: "Tell me about your week.", native: '한 주 어떻게 보내요?' },
      { speaker: 'user', userChoices: [
        { target: "Yesterday I went home early. Today I usually wake up at 6, take a shower, have breakfast, then go to work and have meetings. Tomorrow I'll work late, but I'm going to take Saturday off.", native: '어제는 일찍 집 갔어요. 오늘은 보통 6시 일어나, 샤워, 아침, 회사, 회의. 내일은 늦게까지 일하지만 토요일엔 쉴 거예요.', correct: true, feedback: 'Module 8 다 — 과거·현재 습관·미래 (will + going to) 모든 시제.' },
        { target: 'Yesterday today tomorrow.',                                                                                                                                                              native: '어제 오늘 내일.',                                                                                                                                                                                                    correct: false, feedback: '동사·구조 다 빠졌어요.' },
        { target: 'No.',                                                                                                                                                                                     native: '아니요.',                                                                                                                                                                                                              correct: false, feedback: '풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Solid week. Hope Saturday's good.", native: '단단한 한 주. 토요일 좋게 보내요.' },
      { speaker: 'rwen', rwenLine: 'Module 8 완성 — 영어 시제 세 카드를 한 흐름으로.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '세 시제 기억',
    prompts: [
      { prompt: 'I wake up at 6 (현재, 영어로)',           correct: ['I wake up at 6', 'I wake up at six'] },
      { prompt: 'Yesterday I went home (과거, 영어로)',    correct: ['Yesterday I went home', 'yesterday I went home'] },
      { prompt: 'Tomorrow I will work late (미래, 영어로)', correct: ['Tomorrow I will work late', "Tomorrow I'll work late"] },
    ],
  },

  mission: {
    title: 'Module 8 미션',
    task: "어제·오늘·내일 한 단락에 영어로 — 세 시제 모두.",
    rwenSignoff: 'Module 8 완성. 다음은 Module 9 — 길·여행이에요.',
  },

  phase8: {
    scenario: '뉴욕 동료와 한 주 일정 영어로 풀기 — 세 시제 모두 활용.',
    rwenRole: 'Colleague, 30대 미국인.',
    successCriteria: "User uses past tense (yesterday + went/saw/etc.), present habit (I wake up / go), and future (will / going to) in one flow.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
