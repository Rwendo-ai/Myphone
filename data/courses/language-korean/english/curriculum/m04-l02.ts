import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-i-ga',
  module: 4,
  lesson: 2,
  title: 'I/Ga — The Subject Marker',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "이/가 marks the SUBJECT — the doer of the verb. Different from 은/는 (topic). The split confuses learners forever, so we hit it head-on.",
    culturalNote: "Quick rule: 은/는 introduces or contrasts. 이/가 reports new info or asks who/what. K-drama lines rotate constantly between them — pay attention to where the camera focuses.",
  },

  chunks: [
    { id: 'i', target: '이', native: 'Subject marker (after consonant)', literal: 'SUBJ-cons', emoji: '🎯', phonetic: 'i', audioRef: null },
    { id: 'ga', target: '가', native: 'Subject marker (after vowel)', literal: 'SUBJ-vowel', emoji: '🎯', phonetic: 'ga', audioRef: null },
    { id: 'mwoga', target: '뭐가 ___?', native: 'What is ___?', literal: 'what-SUBJ ___?', emoji: '❓', phonetic: 'mwo-ga ___', audioRef: null },
  ],

  pattern: {
    name: '이 (after consonant) / 가 (after vowel)',
    explanation: "Same shape rule as 은/는, different job. 이/가 = subject (the actor). Common with 있어요/없어요 (exists/doesn't), with 누구 (who), 뭐 (what).",
    examples: [
      { target: '뭐가 좋아요?', native: 'What is good?' },
      { target: '누가 왔어요?', native: 'Who came?' },
      { target: '책이 있어요', native: 'There is a book' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match noun to subject marker', pairs: [
      { left: '책 (book, consonant)', right: '책이' },
      { left: '커피 (coffee, vowel)', right: '커피가' },
      { left: '누구 (who)', right: '누가' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Who came?', correct: ['누가 왔어요?', 'nuga wasseoyo'] },
    { type: 'fill_blank', instruction: 'Pick the right subject marker', sentence: '커피_____ 좋아요.', options: ['가', '이', '는'], correct: '가', context: '커피 ends in vowel → 가.' },
    { type: 'build_sentence', instruction: 'Build "There is a book"', words: ['있어요', '책이'], correct: ['책이', '있어요'], translation: 'There is a book.' },
    { type: 'multiple_choice', instruction: 'Compare: 저는 학생이에요 vs 제가 학생이에요. What\'s different?', question: 'Pick the right read', options: [
      { text: '저는 = "as for me, I am a student". 제가 = "I (specifically) am the student" — answers a who-question.', correct: true },
      { text: 'They mean exactly the same thing.', correct: false },
      { text: '제가 is wrong grammar.', correct: false },
    ], explanation: '은/는 introduces; 이/가 specifies the actor.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What is good?', correct: ['뭐가 좋아요?', 'mwoga joayo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests the topic-vs-subject split.",
    lines: [
      { speaker: 'rwen', rwenLine: '"Who came?" — pick the marker.' },
      { speaker: 'user', userChoices: [
        { target: '누가 왔어요?', native: 'Who-SUBJ came?', correct: true, feedback: '누구 + 가 → 누가. Subject question.' },
        { target: '누구는 왔어요?', native: 'As for who, came?', correct: false, feedback: 'Topic on a question word feels off.' },
        { target: '누구를 왔어요?', native: 'Whom-OBJ came?', correct: false, feedback: 'Object marker — wrong job.' },
      ]},
      { speaker: 'rwen', rwenLine: '이/가 reports. 은/는 introduces. The longer you use Korean, the more this split clicks.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Who came?', correct: ['누가 왔어요?', 'nuga wasseoyo'] },
      { prompt: 'Subject marker after consonant', correct: ['이', 'i'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "When you next see a Korean sentence, find the 이/가. Ask yourself: who is doing the verb?",
    rwenSignoff: "이/가 vs 은/는 — Korean's most-debated split. You're started.",
  },

  phase8: {
    scenario: "Rwen drills you on choosing 은/는 vs 이/가 across short scenarios.",
    rwenRole: "Rwen — patient grammar coach.",
    successCriteria: "User correctly picks 이/가 for who/what questions and 은/는 for self-introductions. Explains the split in own words.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
