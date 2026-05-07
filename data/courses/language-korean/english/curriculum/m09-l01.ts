import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-jihacheol',
  module: 9,
  lesson: 1,
  title: 'Jihacheol — Seoul Subway',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "지하철 (subway) is the lifeblood of Seoul travel. Color-coded lines, clean, on-time. Daily phrasebook: 어디로 가요? (which way?), 환승 (transfer), 출구 (exit).",
    culturalNote: "Seoul subway is famous for its number+color line system. Line 2 (green) loops central Seoul. Itaewon = Line 6. Hongdae = Line 2. Gangnam = Line 2. T-money card pays for everything.",
  },

  chunks: [
    { id: 'jihacheol_v', target: '지하철', native: 'Subway', literal: 'underground-iron', emoji: '🚇', phonetic: 'ji-ha-cheol', audioRef: null },
    { id: 'hwanseung', target: '환승', native: 'Transfer (between lines)', literal: 'change-ride', emoji: '🔄', phonetic: 'hwan-seung', audioRef: null },
    { id: 'chulgu', target: '출구', native: 'Exit', literal: 'out-mouth', emoji: '🚪', phonetic: 'chul-gu', audioRef: null },
  ],

  pattern: {
    name: 'Subway navigation phrases',
    explanation: "지하철 + line number + 호선. Line 2 = 2호선 (i-ho-seon). Transfers via 환승. Exits numbered: 출구 1번 (Exit 1).",
    examples: [
      { target: '2호선', native: 'Line 2' },
      { target: '환승역', native: 'Transfer station' },
      { target: '출구 3번', native: 'Exit 3' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to meaning', pairs: [
      { left: '지하철', right: 'Subway' },
      { left: '환승', right: 'Transfer' },
      { left: '출구', right: 'Exit' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where is exit 3?', correct: ['출구 3번 어디예요?', '3번 출구 어디예요?', 'chulgu 3beon eodieyo'] },
    { type: 'fill_blank', instruction: 'Asking about Line 2', sentence: '2_____ 어디예요?', options: ['호선', '번', '명'], correct: '호선', context: 'Line counter.' },
    { type: 'build_sentence', instruction: 'Build "I transfer at Sindorim"', words: ['환승해요', '신도림에서'], correct: ['신도림에서', '환승해요'], translation: 'I transfer at Sindorim.' },
    { type: 'multiple_choice', instruction: "Best Korean for 'where do I transfer?'", question: 'Pick the natural ask', options: [
      { text: '어디서 환승해요?', correct: true },
      { text: '환승 비싸요?', correct: false },
      { text: '환승 얼마예요?', correct: false },
    ], explanation: '어디서 + 환승해요 = where do I transfer.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Subway', correct: ['지하철', 'jihacheol'] },
  ],

  rwenDialogue: {
    intro: "Seoul subway. You're trying to find Hongdae from Itaewon — that's a transfer.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '죄송합니다, 홍대 어떻게 가요?', native: 'Excuse me, how do I get to Hongdae?', correct: true, feedback: 'Polite + direction question.' },
        { target: '홍대 비싸요?', native: 'Is Hongdae expensive?', correct: false, feedback: 'Wrong question shape.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '6호선 타고, 합정에서 2호선 환승하세요.', native: 'Take Line 6, transfer to Line 2 at Hapjeong.' },
      { speaker: 'rwen', rwenLine: "지하철 + 호선 + 환승 — Seoul subway navigation.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Subway', correct: ['지하철', 'jihacheol'] },
      { prompt: 'Transfer (subway)', correct: ['환승', 'hwanseung'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three Seoul stops you want to visit. Map them to subway lines: 호선.",
    rwenSignoff: "Subway = your daily Korean teacher. Now you can navigate.",
  },

  phase8: {
    scenario: "Lost at Itaewon Station, need to get to Hongdae. Ask a Korean local.",
    rwenRole: "Subway helper — 30s, polite, knows the system.",
    successCriteria: "User asks how to get to Hongdae, understands transfer instructions, says thanks. Uses 호선/환승/출구.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
