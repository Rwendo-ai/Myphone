import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: '관사·복수·어순 캡스톤 — Module 4',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 4 마무리 — 영어 문법 골격 (a/an/the · 단복수 · 어순)을 한 자리에서 자연스러운 일상 영어로. 하루 일과를 영어로 풀어 보면 모든 카드를 한꺼번에 써야 해요.",
    culturalNote: "한국 화자에게 영어 문법의 가장 큰 산은 article. 한국어에 없는 카드 (a/an/the/-s)를 매 명사에 붙여야 해요. 이 모듈을 통과하면 영어 단어의 60%가 정확히 자리 잡습니다 — 어순(SVO)도 자연스러워져요.",
  },

  chunks: [
    { id: 'morning_routine',  target: 'I woke up. I had a cup of coffee and an apple.',                          native: '일어났어요. 커피 한 잔과 사과 한 개 먹었어요.',                                literal: 'I woke up. I had a cup of coffee and an apple.', emoji: '☕', phonetic: 'aye-WOK-up',     audioRef: null },
    { id: 'work_meeting',      target: 'I went to work. The meeting took three hours. I have many emails.',     native: '회사에 갔어요. 회의가 3시간 걸렸어요. 이메일 많아요.',                            literal: 'I went to work. The meeting took three hours. I have many emails.', emoji: '💼', phonetic: 'aye-WENT-too-WERK', audioRef: null },
    { id: 'home_family',       target: 'I came home. These children are mine. I love my family.',                native: '집에 왔어요. 이 아이들은 제 거예요. 저는 가족을 사랑해요.',                          literal: 'I came home. These children are mine. I love my family.', emoji: '🏠', phonetic: 'aye-KAYM-HOHM',  audioRef: null },
  ],

  pattern: {
    name: 'Articles + plurals + word order in flow',
    explanation: "한 단락에 모든 카드: (1) 첫 등장 a/an. (2) 다시 등장 the. (3) 단수=-, 복수=-s. (4) 어순 = SVO (주어-동사-목적어). 한국어 SOV (~을 ~다)와 어순이 다르다는 걸 매 문장에 적용.",
    examples: [
      { target: 'I had a cup of coffee.',          native: '커피 한 잔 마셨어요.' },
      { target: 'The meeting took three hours.',    native: '회의가 3시간 걸렸어요.' },
      { target: 'These children are mine.',          native: '이 아이들은 제 거예요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'a cup of coffee',          right: '커피 한 잔' },
      { left: 'an apple',                  right: '사과 한 개' },
      { left: 'These children',             right: '이 아이들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '커피 한 잔과 사과 한 개 먹었어요', correct: ['I had a cup of coffee and an apple', 'I had a cup of coffee and an apple.'] },
    { type: 'fill_blank', instruction: '빈칸 — 모든 카드', sentence: 'I read ____ book. ____ book was great. ____ children loved it too.', options: ['a / The / The', 'the / a / a', 'a / a / a'], correct: 'a / The / The', context: '처음 a → 다시 the → 특정 group these/the.' },
    { type: 'multiple_choice', instruction: '문법 흐름', question: '"커피 한 잔 마셨어요. 그 커피는 뜨거웠어요." 영어:', options: [
      { text: 'I had a cup of coffee. The coffee was hot.',  correct: true },
      { text: 'I had cup of coffee. Coffee was hot.',          correct: false },
      { text: 'I had the coffee. A coffee was hot.',           correct: false },
    ], explanation: 'a (처음) → the (다시).' },
    { type: 'build_sentence', instruction: '문장', words: ['my', 'love', 'family', 'I'], correct: ['I', 'love', 'my', 'family'], translation: '저는 가족을 사랑해요' },
    { type: 'translate', instruction: '영어로', prompt: '회의가 3시간 걸렸어요. 저는 이메일이 많아요.', correct: ['The meeting took three hours. I have many emails.', 'The meeting took three hours. I have many emails'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 룸메이트와 저녁 식사 — 하루 일과 영어로 풀기.',
    lines: [
      { speaker: 'npc', target: "How was your day?", native: '오늘 어땠어요?' },
      { speaker: 'user', userChoices: [
        { target: "I woke up at 7. I had a cup of coffee and an apple. I went to work — the meeting took three hours. Now I have many emails. But I came home, these kids are happy, and I love my family. So overall, it was a good day.", native: '7시에 일어나서, 커피 한 잔과 사과 한 개 먹고, 회사 갔어요 — 회의가 3시간. 지금 이메일 많아요. 근데 집에 와서 이 아이들이 행복해 보이고, 저는 가족 사랑해요. 그래서 전체적으로 좋은 하루였어요.', correct: true, feedback: 'Module 4 카드 다 — a/an, the, 복수 -s, these, 추상 my family, SVO 어순. 자연스러운 영어 일상 단락.' },
        { target: 'Day good. Coffee apple. Meeting three. Children happy.',                                                                                                                                                                  native: '날 좋음. 커피 사과. 회의 셋. 아이들 행복.',                                                                                                                                                                                                            correct: false, feedback: '관사·복수·어순 다 빠졌어요. Module 4 카드를 적용해 보세요.' },
        { target: 'Bye.',                                                                                                                                                                                                                          native: '잘 가.',                                                                                                                                                                                                                                                            correct: false, feedback: '대화 시작이에요.' },
      ]},
      { speaker: 'npc', target: "Sounds full. Tomorrow's another day.", native: '꽉 찬 하루였네요. 내일은 또 다른 날이에요.' },
      { speaker: 'rwen', rwenLine: 'Module 4 완성 — 영어 문법 골격을 일상 단락에 자연스럽게 펼쳤어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로 — 모든 카드 적용',
    prompts: [
      { prompt: 'a cup of coffee and an apple (영어로)',           correct: ['a cup of coffee and an apple', 'A cup of coffee and an apple'] },
      { prompt: 'These children are mine (영어로)',                   correct: ['These children are mine', 'these children are mine'] },
      { prompt: 'The meeting took three hours (영어로)',              correct: ['The meeting took three hours', 'the meeting took three hours'] },
    ],
  },

  mission: {
    title: 'Module 4 미션',
    task: "오늘 하루를 영어 일기 한 단락으로 — a/an, the, 복수 -s, these/those, SVO 어순 모두 적용.",
    rwenSignoff: 'Module 4 완성. 다음은 Module 5 — 가족이에요.',
  },

  phase8: {
    scenario: '뉴욕 룸메이트와 저녁 식사 — 하루 일과를 영어 단락으로 풀기. 모든 문법 카드 활용.',
    rwenRole: 'Roommate Sarah, 27세 미국인, 친근.',
    successCriteria: "User uses a/an for first mention, the for second, plurals, demonstratives (these/those), and consistent SVO order across at least 3 sentences.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
