import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: '생존 영어 캐스케이드 — Module 2 Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 2를 마무리합니다. Excuse me + Can you help me + I don't understand + Slowly please + Thank you so much. 이 다섯 마디만 있으면 영어권 어디에서든 살아남을 수 있어요.",
    culturalNote: "한국에서 자란 사람이 영어권에서 가장 어려워하는 건 '낯선 사람에게 부탁하기'예요. 정(情) 문화는 안전한 관계 안에서 작동하지만, 영어권에서는 도움 요청이 일상이에요. 부탁이 약함이 아니라는 걸 입에 익히는 레슨이에요.",
  },

  chunks: [
    { id: 'excuse_help',     target: 'Excuse me, can you help me?',         native: '실례합니다, 도와주실 수 있어요?',           literal: 'excuse me, can you help me?', emoji: '🙋', phonetic: 'eks-KYOOZ-mee',  audioRef: null },
    { id: 'dont_understand_slowly', target: "I don't understand. Slowly, please.", native: '이해 못 했어요. 천천히 말해 주세요.', literal: "I don't understand. slowly please.", emoji: '🐢', phonetic: 'aye-DONT-un-der-STAND', audioRef: null },
    { id: 'thanks_help',     target: 'Thank you so much for your help.',     native: '도와주셔서 정말 감사합니다.',                literal: 'thank you so much for your help', emoji: '🙏', phonetic: 'THANK-yoo-soh-MUCH', audioRef: null },
  ],

  pattern: {
    name: 'Survival 5-card combo',
    explanation: "여행 생존 5단계: (1) Excuse me — 주의 끌기, (2) Can you help me? — 부탁, (3) I don't understand — 솔직히 모름, (4) Slowly, please — 속도 부탁, (5) Thank you so much — 감사. 이 흐름 하나면 어디든 통해요.",
    examples: [
      { target: 'Excuse me, can you help me?', native: '실례합니다, 도와주실 수 있어요?' },
      { target: "I don't understand.",          native: '이해 못 했어요.' },
      { target: 'Thank you so much.',           native: '정말 감사합니다.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Excuse me',         right: '실례합니다' },
      { left: "I don't understand", right: '이해 못 했어요' },
      { left: 'Thank you so much', right: '정말 감사합니다' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '실례합니다, 도와주실 수 있어요?', correct: ['Excuse me, can you help me?', 'Excuse me can you help me?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I don't understand. ____, please.", options: ['Slowly', 'Quickly', 'Loudly'], correct: 'Slowly', context: '영어가 빠를 때.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '낯선 도시에서 길을 잃었을 때 가장 자연스러운 5단계 흐름:', options: [
      { text: "Excuse me → Can you help me? → I don't understand → Slowly please → Thank you so much", correct: true },
      { text: 'Help! Help! Help!',                                                                              correct: false },
      { text: 'Goodbye!',                                                                                         correct: false },
    ], explanation: '단계별로 부드럽게 풀어가는 게 영어 생존 표준이에요.' },
    { type: 'build_sentence', instruction: '문장', words: ['help', 'your', 'for', 'Thank', 'you', 'so', 'much'], correct: ['Thank', 'you', 'so', 'much', 'for', 'your', 'help'], translation: '도와주셔서 정말 감사합니다' },
    { type: 'translate', instruction: '영어로', prompt: '도와주셔서 정말 감사합니다.', correct: ['Thank you so much for your help.', 'Thank you so much for your help', 'Thanks a lot for your help.'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 미드타운 — 한국 관광객이 길을 잃고, 영어가 너무 빨라서 회복하고, 마지막엔 감사 표현까지.',
    lines: [
      { speaker: 'npc', target: "Are you alright?", native: '괜찮으세요?' },
      { speaker: 'user', userChoices: [
        { target: "Excuse me, can you help me? I'm lost. I don't understand fast English — slowly, please.", native: '실례합니다, 도와주실 수 있어요? 길을 잃었어요. 빠른 영어 못 알아들어요 — 천천히 말해 주세요.', correct: true, feedback: '5단계 다 — 이게 Module 2 마스터의 모습이에요.' },
        { target: 'Help!',                                                                                       native: '도와줘!',                                                                                            correct: false, feedback: '응급 상황 외엔 너무 강해요.' },
        { target: 'Bye.',                                                                                         native: '잘 가.',                                                                                              correct: false, feedback: '도움이 필요한데 헤어지면 안 돼요.' },
      ]},
      { speaker: 'npc', target: "Of course. Where are you going? I'll show you the way.", native: '물론이죠. 어디 가시려고요? 길 알려 드릴게요.' },
      { speaker: 'user', userChoices: [
        { target: "Thank you so much for your help.", native: '도와주셔서 정말 감사합니다.', correct: true, feedback: '마지막 카드 — 감사 표현까지 완료. Module 2 클리어.' },
        { target: 'Bye.',                              native: '잘 가.',                       correct: false, feedback: '감사 표현 빼면 차가워 보여요.' },
        { target: 'Yes.',                              native: '네.',                           correct: false, feedback: '감사가 필요한 자리예요.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Module 2 완성 — 영어권 어디에서든 살아남을 5장의 카드를 다 가졌어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '5단계 카드 기억',
    prompts: [
      { prompt: 'Excuse me, can you help me? (영어로)', correct: ['Excuse me, can you help me?', 'Excuse me can you help me?'] },
      { prompt: "I don't understand (영어로)",          correct: ["I don't understand", "I do not understand"] },
      { prompt: 'Thank you so much (영어로)',           correct: ['Thank you so much', 'thank you so much'] },
    ],
  },

  mission: {
    title: 'Module 2 미션',
    task: "오늘 5단계 카드를 거울 앞에서 한 번 연속으로 말해 보세요. 진짜 여행에서 자동으로 나오게.",
    rwenSignoff: 'Module 2 완성. 다음은 Module 3 — 자기소개와 정체성이에요.',
  },

  phase8: {
    scenario: '뉴욕 길거리 — 한국 관광객이 5단계 생존 카드를 모두 사용. 첫 만남부터 감사 표현까지.',
    rwenRole: 'Helpful New Yorker, 35세 미국인, 약간 빠른 말투지만 친절.',
    successCriteria: "User chains 'Excuse me' → request → 'I don't understand' → 'Slowly, please' → 'Thank you so much'. All five cards in one conversation.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
