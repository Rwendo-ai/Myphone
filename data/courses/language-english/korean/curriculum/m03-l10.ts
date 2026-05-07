import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: '완전한 자기소개 대화 — Module 3 Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 마무리 — 30초짜리 자기소개에서 5분짜리 자기소개 대화로 확장. 이름·나이·직업·출신·취미·언어·성격까지 한 자리에서.",
    culturalNote: "한국에서 5분짜리 자기소개는 어색하지만, 영어권 컨퍼런스·면접·네트워킹에선 표준이에요. 자기 정체성을 영어 카드 7장으로 풀어 보세요. 이 사이클을 한 번 통과하면 영어로 자기를 표현하는 게 자연스러워져요.",
  },

  chunks: [
    { id: 'pleasure_to_meet', target: 'Pleasure to meet you',   native: '뵙게 되어 반가워요 (boepge doeeo bangawoyo)', literal: 'pleasure to meet you', emoji: '🤝', phonetic: 'PLEZH-er-too-MEET-yoo', audioRef: null },
    { id: 'and_yourself',     target: 'And yourself?',           native: '본인은요? (boninneunnyo?)',                       literal: 'and yourself?',         emoji: '🔄', phonetic: 'and-yor-SELF',           audioRef: null },
    { id: 'keep_in_touch',    target: "Let's keep in touch",     native: '연락 계속 해요 (yeollak gyesok haeyo)',           literal: 'let-us keep in touch',  emoji: '📱', phonetic: 'lets-keep-in-TUCH',     audioRef: null },
  ],

  pattern: {
    name: 'Full self-introduction arc',
    explanation: "5분짜리 자기소개 흐름: (1) Hello + 이름, (2) 직업, (3) 출신·거주, (4) 가족·관심사, (5) 'And yourself?' 되묻기, (6) 'Pleasure to meet you' 마무리, (7) 'Let's keep in touch' 다음 약속. 한 사이클이면 영어 정체성 표현 끝.",
    examples: [
      { target: "I'm Jiwon, a software engineer from Seoul.", native: '저는 지원이고, 서울 출신 소프트웨어 엔지니어예요.' },
      { target: 'Pleasure to meet you. And yourself?',         native: '만나서 반가워요. 본인은요?' },
      { target: "Let's keep in touch.",                         native: '연락 계속 해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Pleasure to meet you', right: '뵙게 되어 반가워요' },
      { left: 'And yourself?',         right: '본인은요?' },
      { left: "Let's keep in touch",   right: '연락 계속 해요' },
    ]},
    { type: 'translate', instruction: '영어로 — 자기소개 한 줄', prompt: '저는 지원이고, 서울 출신 엔지니어예요', correct: ["I'm Jiwon, an engineer from Seoul", "I'm Jiwon, an engineer from Seoul.", "I am Jiwon, an engineer from Seoul"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "Let's keep ____ touch.", options: ['in', 'on', 'at'], correct: 'in', context: '헤어질 때 연락 약속.' },
    { type: 'multiple_choice', instruction: '대화 마무리', question: '5분짜리 첫 만남 끝에 가장 자연스러운 마무리는?', options: [
      { text: "Pleasure to meet you. Let's keep in touch.", correct: true },
      { text: 'Goodbye.',                                     correct: false },
      { text: 'No.',                                            correct: false },
    ], explanation: '연락 약속까지 더하면 다음 만남으로 이어져요.' },
    { type: 'build_sentence', instruction: '문장', words: ['touch', 'keep', 'in', "Let's"], correct: ["Let's", 'keep', 'in', 'touch'], translation: '연락 계속 해요' },
    { type: 'translate', instruction: '영어로', prompt: '본인은요?', correct: ['And yourself?', 'and yourself?'] },
  ],

  rwenDialogue: {
    intro: 'LA 한인 IT 컨퍼런스 — 미국 회사 한국계 디렉터와 5분짜리 자기소개 + 연락 약속.',
    lines: [
      { speaker: 'npc', target: "Hi, I'm Daniel. Tell me about yourself.", native: '안녕, 저는 다니엘이에요. 본인 얘기 좀 해 주세요.' },
      { speaker: 'user', userChoices: [
        { target: "I'm Jiwon, a software engineer from Seoul. I work in fintech, and in my free time I love hiking and watching K-dramas. I'm 28, single, and I live in Gangnam. And yourself?", native: '저는 지원이에요, 서울 출신 소프트웨어 엔지니어예요. 핀테크 분야에서 일하고, 한가할 때 등산과 K-드라마 좋아해요. 28살, 미혼이고 강남에 살아요. 본인은요?', correct: true, feedback: 'Module 1-3 카드 다 — 이름·직업·출신·취미·나이·결혼·거주·되묻기까지 7장 다 썼어요.' },
        { target: 'Jiwon engineer.',                                                                                                                                                              native: '지원 엔지니어.',                                                                                                                                  correct: false, feedback: '너무 짧아요. Module 1-3 카드를 다 써 보세요.' },
        { target: 'Bye.',                                                                                                                                                                          native: '잘 가.',                                                                                                                                          correct: false, feedback: '자기소개 시간이에요.' },
      ]},
      { speaker: 'npc', target: "Wow, impressive. I'm Daniel, also Korean-American, originally from LA. Pleasure to meet you, Jiwon — let's keep in touch.", native: '와, 인상적이네요. 저는 다니엘, 한국계 미국인이고 LA 출신이에요. 만나서 반가워요, 지원 — 연락 계속 해요.' },
      { speaker: 'rwen', rwenLine: 'Module 3 완성 — 영어로 자기 정체성 7장의 카드를 한 자리에서 풀었어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '7장의 카드 기억',
    prompts: [
      { prompt: "I'm Jiwon, an engineer from Seoul (영어로)", correct: ["I'm Jiwon, an engineer from Seoul", "I'm Jiwon, an engineer from Seoul.", "I am Jiwon, an engineer from Seoul"] },
      { prompt: 'Pleasure to meet you (영어로)',               correct: ['Pleasure to meet you', 'pleasure to meet you'] },
      { prompt: "Let's keep in touch (영어로)",                correct: ["Let's keep in touch", "Lets keep in touch"] },
    ],
  },

  mission: {
    title: 'Module 3 미션',
    task: "거울 앞에서 5분짜리 영어 자기소개를 한 번 해 보세요. 이름·직업·출신·취미·언어·성격·연락 약속까지 7장 카드.",
    rwenSignoff: 'Module 3 완성. 다음은 Module 4 — 영어 문법의 골격 (a/an/the·복수·어순)이에요.',
  },

  phase8: {
    scenario: 'LA 한인 IT 컨퍼런스 — 첫 만남에서 5분짜리 자기소개 + 연락 약속까지.',
    rwenRole: 'Daniel, 35세 한국계 미국인, LA 출신 디렉터, 친근함.',
    successCriteria: "User uses at least 5 of the 7 cards: name, job, origin, hobbies, family/age, returns question with 'And yourself?', closes with 'Let's keep in touch'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
