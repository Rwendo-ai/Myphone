import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-eul-reul',
  module: 4,
  lesson: 3,
  title: 'Eul/Reul — The Object Marker',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "을/를 marks the object — the thing receiving the verb. 김치를 먹어요 = I eat kimchi (kimchi is what's getting eaten). Like 은/는 and 이/가, picks by ending: 을 after consonant, 를 after vowel.",
    culturalNote: "In casual Korean, 을/를 is often dropped — but in writing and learning, write it in. Korean SOV: subject + OBJECT-marked + verb. The marker tells you the role even if word order shuffles.",
  },

  chunks: [
    { id: 'eul', target: '을', native: 'Object marker (after consonant)', literal: 'OBJ-cons', emoji: '🎯', phonetic: 'eul', audioRef: null },
    { id: 'reul', target: '를', native: 'Object marker (after vowel)', literal: 'OBJ-vowel', emoji: '🎯', phonetic: 'reul', audioRef: null },
    { id: 'kimchireul', target: '김치를 먹어요', native: 'I eat kimchi', literal: 'kimchi-OBJ eat-yo', emoji: '🥬', phonetic: 'kim-chi-reul meo-geo-yo', audioRef: null },
  ],

  pattern: {
    name: '을 (consonant) / 를 (vowel)',
    explanation: "Object before the verb. Order: subject + object + verb. 저는 김치를 먹어요 — I + kimchi-OBJ + eat.",
    examples: [
      { target: '김치를 먹어요', native: 'I eat kimchi' },
      { target: '책을 읽어요', native: 'I read a book' },
      { target: '커피를 마셔요', native: 'I drink coffee' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match noun to object marker', pairs: [
      { left: '김치 (vowel)', right: '김치를' },
      { left: '책 (consonant)', right: '책을' },
      { left: '커피 (vowel)', right: '커피를' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I eat kimchi', correct: ['김치를 먹어요', '저는 김치를 먹어요', 'kimchireul meogeoyo'] },
    { type: 'fill_blank', instruction: 'Pick the right object marker', sentence: '책_____ 읽어요.', options: ['을', '를', '이'], correct: '을', context: '책 ends in consonant → 을.' },
    { type: 'build_sentence', instruction: 'Build "I drink coffee"', words: ['커피를', '마셔요', '저는'], correct: ['저는', '커피를', '마셔요'], translation: 'I drink coffee.' },
    { type: 'multiple_choice', instruction: 'Korean is SOV. What goes last in a sentence?', question: 'Pick the right slot', options: [
      { text: 'Verb', correct: true },
      { text: 'Subject', correct: false },
      { text: 'Object', correct: false },
    ], explanation: 'Subject-Object-Verb. Verb is the anchor at the END.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I read a book', correct: ['책을 읽어요', '저는 책을 읽어요', 'chaegeul ilgeoyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests SOV order with object markers.",
    lines: [
      { speaker: 'rwen', rwenLine: '"I drink coffee" — order the words: 저는, 커피를, 마셔요.' },
      { speaker: 'user', userChoices: [
        { target: '저는 커피를 마셔요', native: 'S-O-V', correct: true, feedback: 'Subject + Object + Verb. Korean default order locked.' },
        { target: '저는 마셔요 커피를', native: 'S-V-O', correct: false, feedback: 'English order — wrong for Korean. Verb goes last.' },
        { target: '커피를 저는 마셔요', native: 'O-S-V', correct: false, feedback: 'Object can move forward for emphasis but default is S-O-V.' },
      ]},
      { speaker: 'rwen', rwenLine: 'SOV is the spine. Particles tell you the role; word order is flexible AROUND that.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I eat kimchi', correct: ['김치를 먹어요', '저는 김치를 먹어요', 'kimchireul meogeoyo'] },
      { prompt: 'Object marker after consonant', correct: ['을', 'eul'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build three SOV sentences in Korean: I + [thing]을/를 + [verb]. 김치, 책, 커피.",
    rwenSignoff: "을/를 — the object handle. SOV is the spine.",
  },

  phase8: {
    scenario: "Rwen drills SOV sentence-building with object markers.",
    rwenRole: "Rwen — grammar coach.",
    successCriteria: "User builds at least 3 SOV sentences with correct 을/를. Verb stays at the end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
