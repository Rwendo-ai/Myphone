import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — 안녕하세요',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "안녕하세요! 영어에서는 누구를 만나든 'Hello' 한 단어면 됩니다. 나이도, 직급도 묻지 않고요. 한국어처럼 '-습니다'와 '-요' 사이에서 고민할 필요가 없어요.",
    culturalNote: "한국어는 상대의 나이·직급에 따라 인사가 달라집니다 — '안녕하세요' vs '안녕'. 영어 'Hello'는 그 계층이 평평해진 단어예요. 사장님, 친구, 처음 보는 사람 — 같은 'Hello'. 처음에는 어색하지만, 그게 영어의 사회 규칙입니다.",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: '안녕하세요 (annyeonghaseyo)',
      literal: undefined,
      emoji: '👋',
      phonetic: 'heh-LOH',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: '어떻게 지내세요? (eotteoke jinaeseyo?)',
      literal: 'How are you (formal)?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: '잘 지내요, 감사합니다. (jal jinaeyo, gamsahamnida.)',
      literal: 'I-am OK, thank-you',
      emoji: '✨',
      phonetic: 'aym-FAYN-thanks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings — flat formality',
    explanation: "영어의 'How are you?'는 진짜 질문이 아니라 인사의 일부입니다. 답은 거의 항상 'I'm fine, thanks' — 실제로 어떻든 상관없이요. 한국어 '어떻게 지내세요?'는 진짜 대화를 시작하는 말이지만, 영어는 다릅니다. 'Fine, thanks' 한 마디면 충분해요.",
    examples: [
      { target: 'Hello',        native: '안녕하세요' },
      { target: 'Hi',           native: '안녕 (캐주얼)' },
      { target: 'How are you?', native: '어떻게 지내세요?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: '영어 표현과 한국어를 짝지으세요',
      pairs: [
        { left: 'Hello',         right: '안녕하세요' },
        { left: 'How are you?',  right: '어떻게 지내세요?' },
        { left: "I'm fine",      right: '잘 지내요' },
      ],
    },
    {
      type: 'translate',
      instruction: '영어로 쓰세요',
      prompt: '안녕하세요',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
    {
      type: 'fill_blank',
      instruction: '빈칸을 채우세요',
      sentence: 'Hello! ____ are you?',
      options: ['How', 'What', 'Who'],
      correct: 'How',
      context: '미국 클라이언트와의 첫 줌 미팅 — 시작하는 한 마디.',
    },
    {
      type: 'multiple_choice',
      instruction: '맞는 답을 고르세요',
      question: "클라이언트가 'How are you?'라고 묻습니다 — 뭐라고 답하시겠어요?",
      options: [
        { text: "I'm fine, thanks.", correct: true },
        { text: 'Yes, please.',      correct: false },
        { text: 'Goodbye.',          correct: false },
      ],
      explanation: "'I'm fine, thanks'가 가장 안전하고 자연스러운 답입니다 — 진짜 기분과 상관없이.",
    },
    {
      type: 'build_sentence',
      instruction: '단어를 순서대로 놓으세요',
      words: ['How', 'you', 'are'],
      correct: ['How', 'are', 'you'],
      translation: '어떻게 지내세요?',
    },
    {
      type: 'translate',
      instruction: '영어로 쓰세요',
      prompt: '잘 지내요, 감사합니다.',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine thanks"],
    },
  ],

  rwenDialogue: {
    intro: '서울 강남의 IT 스타트업 — 미국 본사에서 온 시니어 엔지니어와 첫 줌 콜.',
    lines: [
      { speaker: 'npc',  target: 'Hello! How are you?', native: '안녕하세요! 어떻게 지내세요?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, I'm fine, thanks. How are you?", native: '안녕하세요, 잘 지내요, 감사합니다. 어떻게 지내세요?', correct: true,  feedback: '완벽해요 — 답하고, 같은 질문을 돌려줬어요. 이게 자연스러운 영어 인사 캐치볼입니다.' },
          { target: 'Hello.',                                native: '안녕하세요.',                                       correct: false, feedback: '너무 짧아요 — 첫 인사에서는 짧은 답과 되묻기를 같이 하세요.' },
          { target: 'Yes, sir.',                             native: '네, 선생님.',                                       correct: false, feedback: "'Yes, sir'는 'How are you?'의 답이 아니에요 — 'I'm fine, thanks'가 답입니다." },
        ],
      },
      { speaker: 'npc',  target: "I'm good, thanks. Welcome to the team.", native: '저도 잘 지내요, 고마워요. 팀에 오신 걸 환영해요.' },
      {
        speaker: 'rwen',
        rwenLine: '훌륭해요! 첫 영어 인사 — 너무 정중하지도, 너무 짧지도 않게 잘 했습니다.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: '위를 보지 않고 기억해서 쓰세요.',
    prompts: [
      { prompt: 'Hello (영어로)',         correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (영어로)',  correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 누군가에게 — 한국어를 쓰는 사람이라도 — 'Hello, how are you?'라고 말해 보세요. 거울 앞이라도 좋아요.",
    rwenSignoff: '내일 또 만나요. Take care.',
  },

  phase8: {
    scenario: '서울 강남의 핀테크 스타트업, 첫 출근. 9시 글로벌 스탠드업 미팅이 시작되고, 미국 본사의 엔지니어링 매니저가 줌으로 처음 인사합니다. 짧고 프로페셔널하게 답해야 해요.',
    rwenRole: 'Mike — 32세 미국인 엔지니어링 매니저. 친근하지만 새 한국 팀원이 캐주얼한 영어에 편한지 보고 있어요.',
    successCriteria: "User opens with 'Hello' (NOT '안녕하세요, sir'), responds 'I'm fine, thanks' to 'How are you?' (NOT a literal long answer), and asks 'How are you?' back to keep the exchange flowing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
