import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: '숫자 11-100',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "11-19는 -teen, 20·30·40 등은 -ty. 25 = twenty-five (하이픈). 한국어 한자어 (이십오)와 거의 같은 구조예요.",
    culturalNote: "영어 -teen과 -ty는 발음 헷갈리기 쉬워요 — fifteen (15) vs fifty (50). 듣고 분간하기 핵심. 강세도 달라요 — fifTEEN (뒤) vs FIFty (앞).",
  },

  chunks: [
    { id: 'eleven_fifteen',  target: 'Eleven, twelve, thirteen, fourteen, fifteen',                native: '열하나, 열둘, 열셋, 열넷, 열다섯',                                          literal: '11, 12, 13, 14, 15',                                emoji: '🔢', phonetic: 'ee-LEV-un',         audioRef: null },
    { id: 'twenty_ninety',   target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety', native: '스물, 서른, 마흔, 쉰, 예순, 일흔, 여든, 아흔',                              literal: '20, 30, 40, 50, 60, 70, 80, 90',                    emoji: '🔢', phonetic: 'TWEN-tee-THIR-tee', audioRef: null },
    { id: 'one_hundred',     target: 'One hundred',                                                  native: '백 (baek)',                                                                   literal: '100',                                                emoji: '💯', phonetic: 'wun-HUN-dred',      audioRef: null },
  ],

  pattern: {
    name: 'Teen vs -ty',
    explanation: "11-19 = -teen (강세 뒤). 20-90 = -ty (강세 앞). 25 = twenty-five (하이픈). 100 = one hundred. 100 이상 다음 레슨에서.",
    examples: [
      { target: 'Twenty-five years old',  native: '25살' },
      { target: 'Fifty dollars',            native: '50달러' },
      { target: 'One hundred people',       native: '100명' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Fifteen',  right: '15' },
      { left: 'Fifty',    right: '50' },
      { left: 'One hundred', right: '100' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '25', correct: ['Twenty-five', 'twenty-five'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I am twenty-____ years old.', options: ['five', 'fifth', 'fives'], correct: 'five', context: '나이 — twenty-five.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"50달러"의 영어:', options: [
      { text: 'Fifty dollars',     correct: true },
      { text: 'Fifteen dollars',    correct: false },
      { text: 'Five-zero dollars',  correct: false },
    ], explanation: '50 = fifty (강세 앞).' },
    { type: 'build_sentence', instruction: '문장', words: ['old', 'years', 'twenty-five', "I'm"], correct: ["I'm", 'twenty-five', 'years', 'old'], translation: '저는 25살이에요' },
    { type: 'translate', instruction: '영어로', prompt: '100', correct: ['One hundred', 'one hundred', '100'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 매장 — 가격 듣고 정확히 답하기.',
    lines: [
      { speaker: 'npc', target: "That'll be fifty-five dollars.", native: '55달러입니다.' },
      { speaker: 'user', userChoices: [
        { target: 'Fifty-five — okay, here you go.', native: '55달러 — 네, 여기요.', correct: true, feedback: '정확히 듣고 확인 — 핵심 스킬이에요.' },
        { target: 'Fifteen?',                          native: '15?',                  correct: false, feedback: '15와 55는 다른 숫자예요 — fifTEEN vs FIFty.' },
        { target: 'Yes.',                                native: '네.',                   correct: false, feedback: '숫자 확인이 필요해요.' },
      ]},
      { speaker: 'npc', target: "Yes, fifty-five. Thanks.", native: '네, 55달러. 감사합니다.' },
      { speaker: 'rwen', rwenLine: '-teen vs -ty — 영어 듣기에서 가장 헷갈리는 자리예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: '15 (영어로)',  correct: ['Fifteen', 'fifteen'] },
      { prompt: '50 (영어로)',  correct: ['Fifty', 'fifty'] },
      { prompt: '100 (영어로)', correct: ['One hundred', 'one hundred'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 본 가격 5개를 영어로 발음해 보세요. -teen vs -ty 강세 구분하면서.",
    rwenSignoff: '숫자 듣기 — 영어 매장·식당 생존 기술이에요.',
  },

  phase8: {
    scenario: '뉴욕 매장 — 가격 듣고 정확히 확인. -teen vs -ty 구분.',
    rwenRole: 'Shop staff, 30대 미국인.',
    successCriteria: "User correctly hears and confirms multi-digit prices (e.g., fifty-five vs fifteen).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
