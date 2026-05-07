import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — 어머니와 아버지',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 어머니/아버지는 격식, 엄마/아빠는 친근. 영어도 비슷해요 — Mother/Father는 격식, Mom/Dad는 친근. 일상에서는 거의 Mom/Dad만 써요.",
    culturalNote: "한국어는 부모를 직접 부르는 호칭이 많아요 ('어머니', '엄마', '어머님'). 영어는 사실상 두 단계 — Mom/Dad (캐주얼) vs Mother/Father (격식·문어). 'My mom said...'이 일상 90%.",
  },

  chunks: [
    { id: 'mother',     target: 'Mother',     native: '어머니 (eomeoni)',           literal: 'mother (formal)',  emoji: '👩', phonetic: 'MUH-ther', audioRef: null },
    { id: 'father',     target: 'Father',     native: '아버지 (abeoji)',             literal: 'father (formal)',  emoji: '👨', phonetic: 'FAH-ther',  audioRef: null },
    { id: 'my_parents', target: 'My parents', native: '저희 부모님 (jeohui bumonim)', literal: 'my parents',        emoji: '👨‍👩‍👧', phonetic: 'my-PAIR-ents', audioRef: null },
  ],

  pattern: {
    name: 'Family vocabulary — formal vs casual',
    explanation: "격식: Mother / Father / parents. 친근: Mom / Dad. 영어권은 가족과 일상 대화에서도 Mom/Dad. 면접·격식에선 'My mother taught me ___'.",
    examples: [
      { target: 'My mother is a teacher.',  native: '저희 어머니는 선생님이세요.' },
      { target: 'My dad loves fishing.',     native: '저희 아빠는 낚시 좋아하세요.' },
      { target: 'My parents live in Seoul.',  native: '저희 부모님은 서울에 사세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Mother',     right: '어머니' },
      { left: 'Father',     right: '아버지' },
      { left: 'My parents', right: '저희 부모님' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저희 부모님', correct: ['My parents', 'my parents'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My ____ is a teacher.', options: ['mother', 'mom', 'mothers'], correct: 'mother', context: '격식 자기소개.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"엄마가 만들어 주신 김치"의 영어:', options: [
      { text: "Kimchi my mom made.",  correct: true },
      { text: 'Kimchi mom me.',         correct: false },
      { text: 'My kimchi mom.',          correct: false },
    ], explanation: '영어권 일상은 Mom — Mother는 격식.' },
    { type: 'build_sentence', instruction: '문장', words: ['Seoul', 'in', 'parents', 'My', 'live'], correct: ['My', 'parents', 'live', 'in', 'Seoul'], translation: '저희 부모님은 서울에 사세요' },
    { type: 'translate', instruction: '영어로', prompt: '저희 어머니는 선생님이세요', correct: ['My mother is a teacher', 'my mother is a teacher'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 가족 이야기 시작.',
    lines: [
      { speaker: 'npc', target: "Tell me about your parents.", native: '부모님 얘기해 주세요.' },
      { speaker: 'user', userChoices: [
        { target: 'My mom is a teacher and my dad runs a small shop. They live in Seoul.', native: '엄마는 선생님이고 아빠는 작은 가게 하세요. 부모님 서울에 사세요.', correct: true, feedback: 'Mom/Dad 캐주얼 + parents 정리 — 자연스러운 영어 가족 표현.' },
        { target: 'Mother father.',                                                          native: '어머니 아버지.',                                                      correct: false, feedback: '동사 + 정보가 빠졌어요.' },
        { target: 'Bye.',                                                                     native: '잘 가.',                                                              correct: false, feedback: '대화 시작이에요.' },
      ]},
      { speaker: 'npc', target: "Lovely. Are you close to them?", native: '좋네요. 가까이 지내요?' },
      { speaker: 'rwen', rwenLine: 'Mom/Dad — 영어 가족 일상 표현의 첫 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Mother (영어로)',     correct: ['Mother', 'mother', 'Mom', 'mom'] },
      { prompt: 'Father (영어로)',     correct: ['Father', 'father', 'Dad', 'dad'] },
      { prompt: 'My parents (영어로)', correct: ['My parents', 'my parents'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 부모님께 영어로 한 마디 — 'I love you, Mom' 또는 'Thanks, Dad'.",
    rwenSignoff: '가족 영어 — 매일의 따뜻함을 담는 카드예요.',
  },

  phase8: {
    scenario: '미국 친구와 가족 이야기 — 부모님 직업·거주 자연스럽게.',
    rwenRole: 'Friend, 28세 미국인, 자기 부모 얘기도 함.',
    successCriteria: "User uses 'Mom/Dad' (casual) or 'mother/father' (formal) appropriately, mentions 'parents' in plural correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
