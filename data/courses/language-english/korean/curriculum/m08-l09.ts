import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: '미래형 — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "내일 = tomorrow. 미래 표현 두 가지 — 'will + 동사' (즉석 결정·약속), 'be going to + 동사' (계획). 'I'll call you' (약속) vs 'I'm going to study' (계획).",
    culturalNote: "한국어 미래는 '~할 거예요' 한 형태. 영어는 두 갈래 — 'will'은 즉석에서 정함, 'going to'는 미리 계획한 것. 'I'll get coffee' (지금 결정) vs 'I'm going to Japan next month' (계획).",
  },

  chunks: [
    { id: 'will_call',     target: 'Tomorrow I will call you.', native: '내일 전화할게요 (naeil jeonhwahalkkeyo)', literal: 'tomorrow I will call you', emoji: '📞', phonetic: 'too-MOR-oh-aye-WIL', audioRef: null },
    { id: 'going_to_study', target: "I'm going to study tonight.", native: '오늘 밤 공부할 거예요 (oneul bam gongbuhal geoyeyo)', literal: "I'm going to study tonight", emoji: '📚', phonetic: 'aym-GO-ing-too-STUD-ee', audioRef: null },
    { id: 'see_tomorrow',   target: 'See you tomorrow!',          native: '내일 봐요! (naeil bwayo!)',              literal: 'see you tomorrow',           emoji: '👋', phonetic: 'see-yoo-too-MOR-oh', audioRef: null },
  ],

  pattern: {
    name: 'Will vs Going to',
    explanation: "will = 즉석 결정·약속·미래 사실 ('I'll help you', 'It will rain'). going to = 미리 계획·곧 일어날 것 ('I'm going to Japan next year'). 둘 다 자주 쓰니 둘 다 익히기.",
    examples: [
      { target: "I'll call you later.",         native: '나중에 전화할게요.' },
      { target: "I'm going to Japan in May.",   native: '5월에 일본 갈 거예요.' },
      { target: 'See you tomorrow.',              native: '내일 봐요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Tomorrow I will call you', right: '내일 전화할게요' },
      { left: "I'm going to study",        right: '공부할 거예요' },
      { left: 'See you tomorrow',           right: '내일 봐요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '내일 봐요', correct: ['See you tomorrow', 'See you tomorrow!'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'll ____ you later.", options: ['call', 'called', 'calling'], correct: 'call', context: 'will + 동사 원형.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"내년에 일본 갈 거예요" — 계획:', options: [
      { text: "I'm going to Japan next year.",  correct: true },
      { text: "I will Japan next year.",          correct: false },
      { text: "I Japan year.",                     correct: false },
    ], explanation: '계획은 going to. will은 즉석.' },
    { type: 'build_sentence', instruction: '문장', words: ['tomorrow', 'See', 'you'], correct: ['See', 'you', 'tomorrow'], translation: '내일 봐요' },
    { type: 'translate', instruction: '영어로', prompt: '나중에 전화할게요', correct: ["I'll call you later", "I will call you later"] },
  ],

  rwenDialogue: {
    intro: '서울 친구가 다음 약속 정함.',
    lines: [
      { speaker: 'npc', target: "When are you free next?", native: '다음에 언제 시간 돼요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm going to be free this Friday. I'll call you in the morning.", native: '이번 주 금요일에 시간 돼요. 아침에 전화할게요.', correct: true, feedback: 'going to (계획) + will (약속) — 두 미래 표현 정확.' },
        { target: 'Friday call.',                                                       native: '금요일 전화.',                                  correct: false, feedback: '구조 부족.' },
        { target: 'No.',                                                                native: '아니요.',                                       correct: false, feedback: '약속 정해 보세요.' },
      ]},
      { speaker: 'npc', target: "Perfect. Talk to you Friday.", native: '완벽. 금요일에 통화해요.' },
      { speaker: 'rwen', rwenLine: 'will / going to — 영어 미래의 두 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'll call you (영어로)",         correct: ["I'll call you", "I will call you"] },
      { prompt: "I'm going to study (영어로)",     correct: ["I'm going to study", "I am going to study"] },
      { prompt: 'See you tomorrow (영어로)',         correct: ['See you tomorrow', 'See you tomorrow!'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "내일 + 내년 계획 5문장 — will/going to 분기.",
    rwenSignoff: '미래 영어 — 약속과 계획의 두 카드.',
  },

  phase8: {
    scenario: '서울 친구와 다음 약속 정하기 — will + going to 사용.',
    rwenRole: 'Friend, 28세, 한국어·영어 둘 다.',
    successCriteria: "User uses 'will' for promises/instant decisions AND 'going to' for plans correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
