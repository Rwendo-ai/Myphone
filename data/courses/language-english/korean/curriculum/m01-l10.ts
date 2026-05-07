import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: '인사 캐스케이드 — Module 1 Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "10번째 레슨. 인사·이름·출신·헤어짐 — 인사 사이클 한 바퀴를 영어로 돌릴 수 있게 됐어요. 오늘은 그걸 한 자리에서 해 봅니다.",
    culturalNote: "한국어 첫 만남에서는 '안녕하세요 → 처음 뵙겠습니다 → 어디 사세요? → 안녕히 가세요'까지 5분에 다 끝나죠. 영어도 똑같이 1분 안에 같은 사이클이 가능해요. Module 1을 다 통과했으면 그게 가능합니다.",
  },

  chunks: [
    { id: 'full_intro',  target: "Hello, my name is Jiwon. I'm from Seoul.", native: '안녕하세요, 제 이름은 지원이에요. 서울에서 왔어요.', literal: 'Hello, my name is Jiwon. I-am from Seoul.', emoji: '👋', phonetic: 'heh-LOH-my-NAYM-iz', audioRef: null },
    { id: 'how_response', target: "How are you? I'm fine, thanks.",          native: '어떻게 지내세요? 잘 지내요, 감사합니다.',           literal: 'How are you? I-am fine, thanks',           emoji: '🤝', phonetic: 'how-ar-yoo',         audioRef: null },
    { id: 'goodbye_full', target: 'Nice to meet you. Goodbye!',                native: '만나서 반가워요. 안녕히 가세요!',                  literal: 'nice to meet you. goodbye',                emoji: '👋', phonetic: 'nyse-too-MEET-yoo', audioRef: null },
  ],

  pattern: {
    name: 'Full greeting arc',
    explanation: "영어 첫 대화의 표준 흐름: (1) Hello + 이름, (2) 출신, (3) How are you? + 답, (4) Nice to meet you, (5) Goodbye. 이 5단계가 영어권 모든 첫 만남의 골격입니다.",
    examples: [
      { target: "Hello, my name is Jiwon.",   native: '안녕하세요, 제 이름은 지원이에요.' },
      { target: "I'm from Korea.",             native: '한국에서 왔어요.' },
      { target: 'Nice to meet you. Goodbye!', native: '만나서 반가워요. 안녕히 가세요!' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "Hello, my name is Jiwon.", right: '안녕하세요, 제 이름은 지원이에요.' },
      { left: "I'm from Seoul.",           right: '서울에서 왔어요.' },
      { left: 'Nice to meet you.',         right: '만나서 반가워요.' },
    ]},
    { type: 'translate', instruction: '영어로 — 전체 자기소개', prompt: '안녕하세요, 제 이름은 지원이에요. 서울에서 왔어요.', correct: ["Hello, my name is Jiwon. I'm from Seoul.", "Hi, my name is Jiwon. I'm from Seoul.", "Hello, my name is Jiwon. I am from Seoul."] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "Hello, my ____ is Jiwon. I'm from Seoul.", options: ['name', 'age', 'job'], correct: 'name', context: '컨퍼런스에서 자기소개.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '처음 만난 사람과 첫 30초에 가장 자연스러운 흐름은?', options: [
      { text: "Hello → 이름 → 출신 → How are you? → Nice to meet you", correct: true },
      { text: '나이 → 결혼 → 연봉',                                       correct: false },
      { text: 'Goodbye → Hello → 이름',                                    correct: false },
    ], explanation: '영어권 첫 만남은 일관되게 이 순서를 따라요.' },
    { type: 'build_sentence', instruction: '문장', words: ['Seoul', 'from', "I'm"], correct: ["I'm", 'from', 'Seoul'], translation: '서울에서 왔어요' },
    { type: 'translate', instruction: '영어로', prompt: '만나서 반가워요. 안녕히 가세요!', correct: ['Nice to meet you. Goodbye!', 'Nice to meet you. Bye!'] },
  ],

  rwenDialogue: {
    intro: '서울 SaaS 컨퍼런스 — 미국·영국에서 온 엔지니어들과 30초 짜리 첫 만남. 인사·이름·출신·헤어짐을 한 번에 다 해야 해요.',
    lines: [
      { speaker: 'npc', target: 'Hello! How are you?', native: '안녕하세요! 어떻게 지내세요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm fine, thanks. My name is Jiwon. What's your name?", native: '잘 지내요, 감사합니다. 제 이름은 지원이에요. 이름이 뭐예요?', correct: true, feedback: '완벽 — 답하고, 이름 말하고, 되묻기까지. 이게 영어 첫 대화의 황금 흐름이에요.' },
        { target: 'Hi.',                                                     native: '안녕.',                                                       correct: false, feedback: '너무 짧아요 — 첫 인사라면 이름과 되묻기를 더하세요.' },
        { target: 'Where are you from?',                                     native: '어디서 오셨어요?',                                            correct: false, feedback: '먼저 답해야 해요 — How are you?에 답하지 않고 출신을 묻는 건 어색해요.' },
      ]},
      { speaker: 'npc', target: "I'm Sarah, from London. Nice to meet you, Jiwon. Goodbye!", native: '저는 사라예요, 런던 출신. 만나서 반가워요, 지원. 안녕히 가세요!' },
      { speaker: 'rwen', rwenLine: 'Module 1 완성 — 인사 사이클 한 바퀴를 영어로 자연스럽게 돌렸어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '전체 자기소개를 기억으로 쓰세요',
    prompts: [
      { prompt: '"안녕하세요, 제 이름은 지원이에요" (영어로)', correct: ['Hello, my name is Jiwon', 'Hi, my name is Jiwon'] },
      { prompt: '"한국에서 왔어요" (영어로)',                  correct: ["I'm from Korea", "I am from Korea"] },
      { prompt: '"만나서 반가워요" (영어로)',                  correct: ['Nice to meet you', 'nice to meet you'] },
    ],
  },

  mission: {
    title: 'Module 1 마무리 미션',
    task: "오늘 누구에게든 영어로 30초짜리 자기소개를 해 보세요 — 이름·출신·How are you?·Nice to meet you·Goodbye 다섯 단계 모두.",
    rwenSignoff: 'Module 1 완성. Module 2 — survival phrases — 다음에 만나요.',
  },

  phase8: {
    scenario: '서울 SaaS 컨퍼런스 네트워킹 부스 — 외국 엔지니어와 30초 짜리 자기소개 + 출신 + 헤어짐.',
    rwenRole: 'Alex, 35세 영국 출신 엔지니어, 한국에 처음 와 봄, 호기심 많음.',
    successCriteria: "User chains: greeting + name + origin + 'How are you?' response + 'Nice to meet you' + farewell. All in English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
