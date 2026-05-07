import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-bangapseumnida',
  module: 1,
  lesson: 2,
  title: 'Bangapseumnida — Nice to Meet You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After 안녕하세요, the next move when meeting someone new is 반갑습니다 — pleased to meet you. It comes with a bow. Bigger bow = more respect.",
    culturalNote: "Koreans bow when meeting. Depth signals respect: a head-nod for peers, a 30° bow for elders. The phrase and the bow are one unit — never say it standing stiff.",
  },

  chunks: [
    { id: 'bangapseumnida', target: '반갑습니다', native: 'Nice to meet you (formal)', literal: 'I-am-pleased', emoji: '🤝', phonetic: 'ban-gap-seum-ni-da', audioRef: null },
    { id: 'bangawayo', target: '반가워요', native: 'Nice to meet you (polite/warm)', literal: 'pleased-yo', emoji: '😊', phonetic: 'ban-ga-wo-yo', audioRef: null },
    { id: 'cheoeum', target: '처음 뵙겠습니다', native: "First time meeting you (very formal)", literal: 'first-time meeting-shall', emoji: '🙇‍♂️', phonetic: 'cheo-eum boep-get-seum-ni-da', audioRef: null },
  ],

  pattern: {
    name: 'Meeting register matches the room',
    explanation: "Casual chat = 반가워요. Work or elders = 반갑습니다. First formal meeting (interview, in-laws) = 처음 뵙겠습니다.",
    examples: [
      { target: '반가워요', native: 'Polite warm — daily life' },
      { target: '반갑습니다', native: 'Formal — work, elders' },
      { target: '처음 뵙겠습니다', native: 'Very formal — first formal meeting' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: '반가워요', right: 'Nice to meet you (warm)' },
        { left: '반갑습니다', right: 'Nice to meet you (formal)' },
        { left: '처음 뵙겠습니다', right: 'First time meeting (very formal)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You meet your friend's mother for the first time. What do you say?",
      question: 'Choose the appropriate register',
      options: [
        { text: '처음 뵙겠습니다, 반갑습니다', correct: true },
        { text: '반가워요', correct: false },
        { text: '안녕', correct: false },
      ],
      explanation: "Friend's parents = elder + first meeting → very formal opener, then 반갑습니다.",
    },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Nice to meet you (formal)', correct: ['반갑습니다', 'bangapseumnida'] },
    {
      type: 'fill_blank',
      instruction: 'Complete the introduction',
      sentence: '안녕하세요, _____.',
      options: ['반갑습니다', '안녕', '잘 가'],
      correct: '반갑습니다',
      context: "You're meeting a coworker for the first time.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build a polite first-time greeting',
      words: ['반갑습니다', '안녕하세요,'],
      correct: ['안녕하세요,', '반갑습니다'],
      translation: 'Hello, nice to meet you.',
    },
    { type: 'translate', instruction: 'Type in Korean — warm/polite version', prompt: 'Nice to meet you (warm)', correct: ['반가워요', 'bangawayo'] },
  ],

  rwenDialogue: {
    intro: "You're at a Seoul language exchange meetup. A Korean woman about your age walks up.",
    lines: [
      { speaker: 'npc', target: '안녕하세요! 반가워요.', native: 'Hello! Nice to meet you.' },
      {
        speaker: 'user',
        userChoices: [
          { target: '안녕하세요, 반가워요', native: 'Hello, nice to meet you', correct: true, feedback: "Perfectly mirrored — same register, same warmth." },
          { target: '처음 뵙겠습니다', native: 'First time meeting (very formal)', correct: false, feedback: "Too stiff for a casual meetup peer." },
          { target: '안녕', native: 'Hi (casual)', correct: false, feedback: "Skipping politeness on a first meeting reads as cold." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mirror the register. She gave you 반가워요 — you returned it. Conversation flows.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Nice to meet you (formal)', correct: ['반갑습니다', 'bangapseumnida'] },
      { prompt: 'Nice to meet you (warm/polite)', correct: ['반가워요', 'bangawayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pair 안녕하세요 with 반갑습니다 next time you introduce yourself — even in the mirror. Feel the bow that comes with it.",
    rwenSignoff: "Bow a little. The words land warmer.",
  },

  phase8: {
    scenario: "You're at a Hongdae K-pop dance studio open class. The instructor is greeting newcomers before warmups.",
    rwenRole: "Dance instructor — mid-30s, polite-formal, expects 반갑습니다 from a new student.",
    successCriteria: "User pairs 안녕하세요 with 반갑습니다 (formal — she's the instructor). Does NOT use 안녕.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
