import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: '상대를 묻기 — Asking about them',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "자기 소개만 하면 일방적이에요. 'Tell me about yourself', 'What's your story?', 'Where did you grow up?' — 상대 이야기를 끌어내는 카드들.",
    culturalNote: "한국어 '본인 얘기 좀 해 주세요'는 너무 격식. 영어권은 'Tell me about yourself' (소개 부탁), 'What's your story?' (인생 이야기 — 캐주얼) 둘 다 자연스러워요.",
  },

  chunks: [
    { id: 'tell_me_about_yourself', target: 'Tell me about yourself', native: '본인 얘기 좀 해 주세요 (bonin yaegi jom hae juseyo)', literal: 'tell me about yourself', emoji: '🎤', phonetic: 'tel-mee-uh-BOWT-yor-self', audioRef: null },
    { id: 'whats_your_story',       target: "What's your story?",      native: '어떤 분이세요? (eotteon bunieseyo?)',                literal: 'what is your story?',     emoji: '📖', phonetic: 'wuts-yor-STOR-ee',          audioRef: null },
    { id: 'where_did_you_grow_up',  target: 'Where did you grow up?', native: '어디서 자라셨어요? (eodiseo jarasyeosseoyo?)',         literal: 'where did you grow up?',  emoji: '🌱', phonetic: 'wair-did-yoo-GROH-up',     audioRef: null },
  ],

  pattern: {
    name: 'Open-ended questions',
    explanation: "Yes/No 질문 대신 open question을 쓰면 대화가 풍성해져요. 'Where' / 'What' / 'How' / 'Tell me about ___' — 한국어 '어디서/뭘/어떻게'에 해당.",
    examples: [
      { target: 'Tell me about yourself.', native: '본인 얘기 좀 해 주세요.' },
      { target: "What's your story?",       native: '어떤 분이세요?' },
      { target: 'Where did you grow up?',   native: '어디서 자라셨어요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Tell me about yourself', right: '본인 얘기 좀 해 주세요' },
      { left: "What's your story?",     right: '어떤 분이세요?' },
      { left: 'Where did you grow up?', right: '어디서 자라셨어요?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '어디서 자라셨어요?', correct: ['Where did you grow up?', 'where did you grow up?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Tell ____ about yourself.', options: ['me', 'I', 'my'], correct: 'me', context: '대화 시작.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '대화를 더 깊게 만들고 싶어요. 가장 좋은 질문은?', options: [
      { text: 'Tell me about yourself.', correct: true },
      { text: 'How old are you?',         correct: false },
      { text: 'Goodbye.',                  correct: false },
    ], explanation: "open question — 짧은 답으로 끝나지 않아 대화가 길어져요." },
    { type: 'build_sentence', instruction: '문장', words: ['yourself', 'me', 'about', 'Tell'], correct: ['Tell', 'me', 'about', 'yourself'], translation: '본인 얘기 좀 해 주세요' },
    { type: 'translate', instruction: '영어로', prompt: '어떤 분이세요?', correct: ["What's your story?", "What is your story?"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 네트워킹 행사 — 처음 만난 사람과 깊은 대화를 시작하고 싶어요.',
    lines: [
      { speaker: 'npc', target: "Hi, I'm Sarah. Nice to meet you.", native: '안녕, 저는 사라예요. 만나서 반가워요.' },
      { speaker: 'user', userChoices: [
        { target: "Nice to meet you, Sarah! Tell me about yourself — what's your story?", native: '만나서 반가워요, 사라! 본인 얘기 좀 해 주세요 — 어떤 분이세요?', correct: true, feedback: "대화를 깊게 만드는 두 카드 — Tell me about yourself + What's your story?" },
        { target: 'Hi.',                                                                    native: '안녕.',                                                                correct: false, feedback: '인사만 하면 대화가 안 늘어나요.' },
        { target: 'Bye.',                                                                    native: '잘 가.',                                                              correct: false, feedback: '이제 시작인데 헤어지면 안 돼요.' },
      ]},
      { speaker: 'npc', target: "Well — I grew up in Boston, moved to New York for college...", native: '음 — 저는 보스턴에서 자랐고, 대학 때문에 뉴욕에 왔어요...' },
      { speaker: 'rwen', rwenLine: 'Open question — 영어 깊은 대화의 핵심 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Tell me about yourself (영어로)', correct: ['Tell me about yourself', 'tell me about yourself'] },
      { prompt: "What's your story? (영어로)",     correct: ["What's your story?", "What is your story?"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "친구나 동료에게 영어로 'Tell me about yourself'를 한 번 던져 보세요. 답변 길이를 직접 느껴 보세요.",
    rwenSignoff: '질문이 좋으면 대화도 좋아져요.',
  },

  phase8: {
    scenario: '뉴욕 네트워킹 행사 — open question으로 처음 만난 사람의 깊은 이야기를 끌어냄.',
    rwenRole: 'Sarah, 32세 뉴욕 출신, 친근.',
    successCriteria: "User asks at least 2 open questions ('Tell me about yourself' / 'What's your story?' / 'Where did you grow up?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
