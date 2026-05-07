import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-banmal',
  module: 4,
  lesson: 8,
  title: 'Banmal — When to Drop the -yo',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Banmal (반말 — 'half speech') is Korean without the politeness ending. Used between close friends, family, to children, to clearly younger. Get it wrong and you'll either offend or come off cold.",
    culturalNote: "Among friends, asking 우리 말 놓을까? — 'shall we speak banmal?' is a relationship deepening moment. Until both agree, stay in 요. Korean dramas use this exact line as a romance/friendship beat.",
  },

  chunks: [
    { id: 'banmal', target: '반말', native: 'Casual / informal speech', literal: 'half-speech', emoji: '😎', phonetic: 'ban-mal', audioRef: null },
    { id: 'mal_nochja', target: '말 놓을까요?', native: 'Shall we drop the politeness?', literal: 'speech put-down-shall-we?', emoji: '🤝', phonetic: 'mal no-eul-kka-yo', audioRef: null },
    { id: 'gajja', target: '가자', native: "Let's go (banmal)", literal: 'go-let-banmal', emoji: '✌️', phonetic: 'ga-ja', audioRef: null },
  ],

  pattern: {
    name: 'Drop 요, drop 시, drop 입니다',
    explanation: "Banmal = strip the politeness. 가요 → 가. 해요 → 해. 먹어요 → 먹어. Stays SOV. Only allowed after both sides agree.",
    examples: [
      { target: '가요 → 가', native: 'go (polite → banmal)' },
      { target: '해요 → 해', native: 'do (polite → banmal)' },
      { target: '먹어요 → 먹어', native: 'eat (polite → banmal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match polite to banmal', pairs: [
      { left: '가요', right: '가' },
      { left: '해요', right: '해' },
      { left: '먹어요', right: '먹어' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (banmal)', prompt: "let's go (to a close friend)", correct: ['가자', 'gaja'] },
    { type: 'fill_blank', instruction: 'Drop the polite form', sentence: '같이 _____ (to your best friend).', options: ['가자', '가요', '갑니다'], correct: '가자', context: 'Best friend = banmal.' },
    { type: 'build_sentence', instruction: 'Build "Shall we drop the politeness?"', words: ['놓을까요?', '말'], correct: ['말', '놓을까요?'], translation: 'Shall we drop the politeness?' },
    { type: 'multiple_choice', instruction: 'New Korean acquaintance, three days in. Time for banmal?', question: 'Pick the safe move', options: [
      { text: 'No — stay in 요-form. Wait for them to suggest 말 놓을까요?', correct: true },
      { text: 'Yes — banmal speeds things up', correct: false },
      { text: 'Only if you are older', correct: false },
    ], explanation: 'Even if you\'re older, asking 말 놓을까요? is the move. Forcing banmal = rude.' },
    { type: 'translate', instruction: 'Type in Korean (banmal)', prompt: 'do (banmal)', correct: ['해', 'hae'] },
  ],

  rwenDialogue: {
    intro: "A long-time Korean friend wants to deepen.",
    lines: [
      { speaker: 'npc', target: '우리 이제 말 놓을까요?', native: 'Shall we drop the politeness now?' },
      { speaker: 'user', userChoices: [
        { target: '네! 좋아!', native: 'Yes! Sounds good (banmal)', correct: true, feedback: 'You agreed and switched to banmal — relationship deepens.' },
        { target: '아니요, 됐어요', native: 'No, never mind', correct: false, feedback: "Refusing banmal can hurt — it's a closeness offer." },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "Banmal is a relationship marker. Wait for the offer; respond warmly.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Banmal (Korean term)', correct: ['반말', 'banmal'] },
      { prompt: 'Shall we drop the politeness?', correct: ['말 놓을까요?', 'mal noeulkkayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "List three people in your life. For each: what register would they get in Korean? 입니다 / 요 / banmal?",
    rwenSignoff: "Banmal = trust. Don't force it; let it come.",
  },

  phase8: {
    scenario: "A long-time Korean friend asks 말 놓을까요? — you accept and try banmal for the first time.",
    rwenRole: "Korean friend — close peer, ready for banmal.",
    successCriteria: "User accepts 말 놓을까요? warmly. Switches at least 2 verbs to banmal (가, 해, 먹어). Does NOT use banmal with strangers.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
