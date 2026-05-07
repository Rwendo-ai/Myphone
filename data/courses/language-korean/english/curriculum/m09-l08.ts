import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency',
  module: 9,
  lesson: 8,
  title: 'Emergency Korean',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "If something goes wrong: 도와주세요 (please help), 119 (emergency — fire/medical), 112 (police), 응급실 (ER), 약국 (pharmacy). Pre-load these — they save real time in real moments.",
    culturalNote: "Korean emergency response is fast and free for foreigners in life-threatening cases. 119 dispatches both ambulance and fire. 112 is police. Most hospitals have an English-speaking desk for foreigners (외국인 데스크).",
  },

  chunks: [
    { id: 'dowajuseyo', target: '도와주세요', native: 'Please help me', literal: 'help-give-please', emoji: '🆘', phonetic: 'do-wa-ju-se-yo', audioRef: null },
    { id: 'eunggeupsil', target: '응급실 어디예요?', native: 'Where is the emergency room?', literal: 'ER where-is?', emoji: '🏥', phonetic: 'eung-geup-sil eo-di-ye-yo', audioRef: null },
    { id: 'apayo', target: '아파요', native: 'It hurts / I\'m sick', literal: 'painful-yo', emoji: '🤕', phonetic: 'a-pa-yo', audioRef: null },
  ],

  pattern: {
    name: 'Emergency phrases — keep simple',
    explanation: "도와주세요 + body part 아파요 + 응급실. Add 119 if calling. Don't over-think — these are short, recognized phrases.",
    examples: [
      { target: '도와주세요!', native: 'Please help!' },
      { target: '머리가 아파요', native: 'My head hurts' },
      { target: '구급차 불러주세요', native: 'Please call an ambulance' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '도와주세요', right: 'Please help' },
      { left: '응급실', right: 'Emergency room' },
      { left: '약국', right: 'Pharmacy' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please help me', correct: ['도와주세요', 'dowajuseyo'] },
    { type: 'fill_blank', instruction: 'Asking where the ER is', sentence: '_____ 어디예요?', options: ['응급실', '약국', '카페'], correct: '응급실', context: 'ER for emergencies.' },
    { type: 'build_sentence', instruction: 'Build "Please call an ambulance"', words: ['구급차', '불러주세요'], correct: ['구급차', '불러주세요'], translation: 'Please call an ambulance.' },
    { type: 'multiple_choice', instruction: 'Korean emergency number for fire/medical?', question: 'Pick the correct number', options: [
      { text: '119', correct: true },
      { text: '112 (that\'s police)', correct: false },
      { text: '911 (US/Canada)', correct: false },
    ], explanation: '119 = fire/medical in Korea. 112 = police. 911 is North American.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'It hurts / I\'m sick', correct: ['아파요', 'apayo'] },
  ],

  rwenDialogue: {
    intro: "Itaewon late at night. A friend has fallen and is hurt.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '도와주세요! 친구가 다쳤어요!', native: 'Please help! My friend is hurt!', correct: true, feedback: 'Direct, clear, urgent.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong moment.' },
        { target: '안녕하세요', native: 'Hello', correct: false, feedback: 'Skip pleasantries in emergencies.' },
      ]},
      { speaker: 'npc', target: '괜찮아요? 119 부를게요!', native: "Are you ok? I'll call 119!" },
      { speaker: 'rwen', rwenLine: "Emergency Korean — short, direct, no register games. 도와주세요 unlocks help.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please help me', correct: ['도와주세요', 'dowajuseyo'] },
      { prompt: 'Where is the emergency room?', correct: ['응급실 어디예요?', 'eunggeupsil eodieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pre-load three emergency phrases. 도와주세요 / 응급실 어디예요? / 119. Memorize.",
    rwenSignoff: "Emergencies = clear words, fast help. Now you can ask.",
  },

  phase8: {
    scenario: "Itaewon late at night. Sudden injury — you flag a stranger and need help fast.",
    rwenRole: "Stranger — kind, willing to help.",
    successCriteria: "User uses 도와주세요 + clear short sentences. Asks for ER or calls 119. No register games — direct.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;
