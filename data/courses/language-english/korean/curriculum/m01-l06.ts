import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — 이름이 뭐예요?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국에서는 명함을 두 손으로 건네면서 이름을 말하지만, 영어권은 'My name is ___'이면 끝입니다. 손을 어떻게 내밀지 고민할 필요 없어요.",
    culturalNote: "한국어는 '존함이 어떻게 되세요?'(높임)부터 '이름이 뭐야?'(친한 사이)까지 다양하지만, 영어는 'What's your name?' 한 가지로 거의 다 됩니다. 처음에는 너무 단순해 보이지만, 그게 영어의 평등화된 인사 시스템이에요.",
  },

  chunks: [
    { id: 'whats_your_name',  target: "What's your name?",  native: '이름이 뭐예요? (ireumi mwoyeyo?)', literal: 'what-is your name?', emoji: '❓', phonetic: 'wuts-yor-NAYM',     audioRef: null },
    { id: 'my_name_is',       target: 'My name is Jiwon',   native: '제 이름은 지원이에요 (je ireumeun jiwonieyo)', literal: 'my name is Jiwon', emoji: '🪪', phonetic: 'my-NAYM-iz', audioRef: null },
    { id: 'nice_to_meet_you', target: 'Nice to meet you',   native: '만나서 반가워요 (mannaseo bangawoyo)', literal: 'nice to meet you', emoji: '🤝', phonetic: 'nyse-to-MEET-yoo', audioRef: null },
  ],

  pattern: {
    name: 'Self-introduction',
    explanation: "이름 묻기 → 답하기 → 'Nice to meet you'로 마무리. 한국어 '만나서 반갑습니다'와 거의 같은 자리에 옵니다. 영어권에서는 보통 first name(이름)만 말합니다 — 성(family name)은 비즈니스 자리에서나 추가해요.",
    examples: [
      { target: "What's your name?", native: '이름이 뭐예요?' },
      { target: 'My name is Jiwon',  native: '제 이름은 지원이에요' },
      { target: 'Nice to meet you',  native: '만나서 반가워요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "What's your name?", right: '이름이 뭐예요?' },
      { left: 'My name is Jiwon',  right: '제 이름은 지원이에요' },
      { left: 'Nice to meet you',  right: '만나서 반가워요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '만나서 반가워요', correct: ['Nice to meet you', 'nice to meet you'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "Hi! What's your ____?", options: ['name', 'age', 'job'], correct: 'name', context: '컨퍼런스에서 처음 만난 사람.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "처음 만난 사람이 'What's your name?'이라고 묻습니다.", options: [
      { text: 'My name is Jiwon. Nice to meet you.', correct: true },
      { text: 'Jiwon.',                                correct: false },
      { text: "What's your name?",                     correct: false },
    ], explanation: "전체 문장 'My name is ___'을 쓰고 'Nice to meet you'로 마무리하면 자연스러워요." },
    { type: 'build_sentence', instruction: '문장', words: ['Jiwon', 'is', 'name', 'My'], correct: ['My', 'name', 'is', 'Jiwon'], translation: '제 이름은 지원이에요' },
    { type: 'translate', instruction: '영어로', prompt: '제 이름은 지원이에요', correct: ['My name is Jiwon', 'my name is Jiwon', "I'm Jiwon"] },
  ],

  rwenDialogue: {
    intro: '서울 컨퍼런스 — 미국 회사 부스에서 처음 만난 엔지니어와 명함 교환.',
    lines: [
      { speaker: 'npc', target: "Hi! What's your name?", native: '안녕! 이름이 뭐예요?' },
      { speaker: 'user', userChoices: [
        { target: "My name is Jiwon. Nice to meet you.", native: '제 이름은 지원이에요. 만나서 반가워요.', correct: true, feedback: '완벽 — 이름과 인사 두 박자.' },
        { target: 'Jiwon.',                                native: '지원.',                                  correct: false, feedback: '너무 짧아요 — 처음 인사니까 전체 문장으로.' },
        { target: "What's your name?",                     native: '이름이 뭐예요?',                          correct: false, feedback: '먼저 답한 다음 되물어야 해요.' },
      ]},
      { speaker: 'npc', target: "Nice to meet you, Jiwon. I'm Sarah.", native: '만나서 반가워요, 지원. 저는 사라예요.' },
      { speaker: 'rwen', rwenLine: '이름 교환 클리어 — 명함도 부드럽게 따라올 수 있어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "What's your name? (영어로)", correct: ["What's your name?", "What's your name", "what's your name?"] },
      { prompt: 'Nice to meet you (영어로)',  correct: ['Nice to meet you', 'nice to meet you'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 누구에게든 'My name is ___. Nice to meet you'를 영어로 말해 보세요.",
    rwenSignoff: '이름을 말한 만큼 한 번 더 가까워졌어요.',
  },

  phase8: {
    scenario: '서울 SaaS 컨퍼런스 부스 — 미국 회사 엔지니어와 명함 교환 직전.',
    rwenRole: 'Mark, 35세 미국 엔지니어, 컨퍼런스에서 한국 인재 채용 중.',
    successCriteria: "User says 'My name is ___', closes with 'Nice to meet you', maintains polite first-meeting tone.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
