import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: '시댁/처가 — In-laws',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "결혼 후 가족 — 시어머니/장인 등 — 영어로 'mother-in-law', 'father-in-law'. 'in-law'는 '결혼으로 가족이 된 사람'이라는 뜻이에요.",
    culturalNote: "한국 시댁 문화는 영어권보다 훨씬 가까운 거리. 영어권에서 in-laws는 가족이지만, 시집살이 같은 개념은 거의 없어요. 'My mother-in-law is great' / 'I love my in-laws'가 자연스러운 표현.",
  },

  chunks: [
    { id: 'mother_in_law', target: 'Mother-in-law',         native: '시어머니/장모님 (sieomeoni/jangmonim)',  literal: 'mother-in-law',        emoji: '👩‍🦳', phonetic: 'MUH-ther-in-LAW',     audioRef: null },
    { id: 'father_in_law', target: 'Father-in-law',          native: '시아버지/장인어른 (siabeoji/jangineoreun)', literal: 'father-in-law',        emoji: '👴', phonetic: 'FAH-ther-in-LAW',     audioRef: null },
    { id: 'husband_wife',  target: 'My husband / My wife',   native: '저희 남편 / 저희 아내 (jeohui nampyeon / jeohui anae)', literal: 'my husband / my wife', emoji: '💍', phonetic: 'my-HUZ-band-my-WYF', audioRef: null },
  ],

  pattern: {
    name: 'In-law family',
    explanation: "결혼으로 생긴 가족: -in-law 접미사. mother-in-law (시·장모), father-in-law (시·장인), brother-in-law (시동생·처남·매형 등 — 다 한 단어). 한국어식 구분은 'my husband's mother'로 풀 수 있어요.",
    examples: [
      { target: 'My husband and I',           native: '저희 남편과 저' },
      { target: 'My mother-in-law lives nearby.', native: '시어머니가 근처 사세요.' },
      { target: 'I love my wife.',              native: '저희 아내 사랑해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Mother-in-law',         right: '시어머니/장모님' },
      { left: 'Father-in-law',          right: '시아버지/장인어른' },
      { left: 'My husband / My wife',   right: '저희 남편 / 저희 아내' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '시어머니', correct: ['Mother-in-law', 'mother-in-law', 'My mother-in-law'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My mother-in-____ is sweet.', options: ['law', 'lawn', 'love'], correct: 'law', context: 'in-law의 -law.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"저희 남편의 어머니" 영어:', options: [
      { text: "My husband's mother — my mother-in-law.",  correct: true },
      { text: 'Husband mother me.',                          correct: false },
      { text: 'My uncle.',                                     correct: false },
    ], explanation: 'mother-in-law 또는 풀어서 "my husband\'s mother".' },
    { type: 'build_sentence', instruction: '문장', words: ['nearby', 'lives', 'mother-in-law', 'My'], correct: ['My', 'mother-in-law', 'lives', 'nearby'], translation: '시어머니가 근처 사세요' },
    { type: 'translate', instruction: '영어로', prompt: '저희 아내', correct: ['My wife', 'my wife'] },
  ],

  rwenDialogue: {
    intro: '미국 동료에게 시어머니와 명절 보낸 이야기.',
    lines: [
      { speaker: 'npc', target: "How was your weekend?", native: '주말 어땠어요?' },
      { speaker: 'user', userChoices: [
        { target: "We visited my mother-in-law. She made amazing food.", native: '시어머니 댁에 갔어요. 음식 정말 맛있게 해주셨어요.', correct: true, feedback: '시어머니 영어 표현 자연스러워요.' },
        { target: 'Sieomeoni food good.',                                  native: '시어머니 음식 좋음.',                                  correct: false, feedback: '한국어 그대로 — 영어로 풀어 보세요.' },
        { target: 'No.',                                                    native: '아니요.',                                              correct: false, feedback: '대화 시작이에요.' },
      ]},
      { speaker: 'npc', target: "That's lovely. Family time.", native: '좋네요. 가족 시간.' },
      { speaker: 'rwen', rwenLine: 'in-law — 결혼으로 가족이 된 사람들의 영어 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Mother-in-law (영어로)', correct: ['Mother-in-law', 'mother-in-law'] },
      { prompt: 'My husband (영어로)',     correct: ['My husband', 'my husband'] },
      { prompt: 'My wife (영어로)',         correct: ['My wife', 'my wife'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "결혼 가족 (또는 가상으로) 영어로 풀어 보세요 — mother-in-law, husband/wife, in-laws.",
    rwenSignoff: 'in-law — 결혼으로 확장된 가족의 영어 카드예요.',
  },

  phase8: {
    scenario: '미국 동료와 주말 가족 방문 이야기 — 시어머니/장인 영어로 자연스럽게.',
    rwenRole: 'Colleague Tom, 36세 미국인, 결혼.',
    successCriteria: "User uses 'mother-in-law/father-in-law' correctly, mentions 'my husband/wife' or 'my in-laws'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
