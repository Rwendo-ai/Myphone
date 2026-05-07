import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: '형제자매 — Brothers & Sisters',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 형/누나/오빠/언니 — 영어는 brother/sister 두 단어. 나이 위/아래 구분이 사라져요. 굳이 말하려면 'older brother', 'younger sister'.",
    culturalNote: "한국 가족 호칭은 위계의 핵심 — 형/오빠/누나/언니로 화자의 성별과 나이 차를 모두 표시. 영어 'sibling' 한 단어가 그 모든 위계를 평평하게 만들어요. 처음에는 정보 손실 같지만, 영어식 사고에서는 자연스럽습니다.",
  },

  chunks: [
    { id: 'brother',         target: 'Brother',              native: '형/오빠/남동생 (hyeong/oppa/namdongsaeng)', literal: 'brother',          emoji: '👦', phonetic: 'BRUTH-er',          audioRef: null },
    { id: 'sister',          target: 'Sister',                native: '누나/언니/여동생 (nuna/eonni/yeodongsaeng)', literal: 'sister',           emoji: '👧', phonetic: 'SIS-ter',            audioRef: null },
    { id: 'two_siblings',    target: 'I have two siblings.',  native: '형제자매가 둘 있어요 (hyeongjejamaega dul isseoyo)', literal: 'I have two siblings', emoji: '👨‍👩‍👦', phonetic: 'aye-hav-too-SIB-lings', audioRef: null },
  ],

  pattern: {
    name: 'Sibling vocabulary',
    explanation: "한국어 4가지 호칭이 영어로는 brother/sister + (older/younger 옵션). 더 일반적인 'sibling'은 형제자매 통칭. 'I have one older brother and a younger sister' 식으로 풀 수 있어요.",
    examples: [
      { target: 'My older brother',          native: '저희 형 / 오빠' },
      { target: 'My younger sister',          native: '저희 여동생' },
      { target: 'I have two siblings.',         native: '형제자매가 둘 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Brother',          right: '형/오빠/남동생' },
      { left: 'Sister',           right: '누나/언니/여동생' },
      { left: 'I have two siblings', right: '형제자매가 둘 있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '형 (오빠)', correct: ['Older brother', 'older brother', 'My older brother'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have one ____ brother.', options: ['older', 'oldest', 'old'], correct: 'older', context: '나이 위 — older.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"형이 한 명, 여동생이 한 명 있어요" 영어:', options: [
      { text: 'I have an older brother and a younger sister.',  correct: true },
      { text: 'I have one hyung sister.',                          correct: false },
      { text: 'Brother sister me.',                                  correct: false },
    ], explanation: 'older/younger로 한국어 호칭 정보를 살릴 수 있어요.' },
    { type: 'build_sentence', instruction: '문장', words: ['siblings', 'have', 'two', 'I'], correct: ['I', 'have', 'two', 'siblings'], translation: '형제자매가 둘 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '저희 여동생', correct: ['My younger sister', 'my younger sister'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 친구가 가족 구성을 묻는 자리.',
    lines: [
      { speaker: 'npc', target: "Any siblings?", native: '형제자매?' },
      { speaker: 'user', userChoices: [
        { target: 'Yes, I have an older brother and a younger sister.', native: '네, 형이 하나, 여동생이 하나 있어요.', correct: true, feedback: '한국어 호칭 정보 (위/아래)를 영어 older/younger로 살렸어요.' },
        { target: 'Brother sister.',                                       native: '형 여동생.',                            correct: false, feedback: '동사·관사 빠졌어요.' },
        { target: 'No.',                                                    native: '아니요.',                                correct: false, feedback: '있는데 답을 닫지 마세요.' },
      ]},
      { speaker: 'npc', target: "Cool — middle child?", native: '와 — 중간이세요?' },
      { speaker: 'rwen', rwenLine: 'older/younger — 한국어 4호칭을 영어 두 단어로 압축했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Brother (영어로)', correct: ['Brother', 'brother'] },
      { prompt: 'Sister (영어로)',  correct: ['Sister', 'sister'] },
      { prompt: 'I have two siblings (영어로)', correct: ['I have two siblings', 'i have two siblings'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 형제자매를 영어로 풀어 보세요 — older brother, younger sister 등.",
    rwenSignoff: '형제자매 영어 — 위계 평평한 두 단어.',
  },

  phase8: {
    scenario: '뉴욕 친구와 가족 구성 영어로 풀기.',
    rwenRole: 'Friend, 27세 미국인, 외동.',
    successCriteria: "User uses brother/sister with older/younger to convey Korean hyung/oppa/nuna/eonni distinctions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
