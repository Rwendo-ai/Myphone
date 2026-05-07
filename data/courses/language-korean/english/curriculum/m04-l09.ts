import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-age-hierarchy',
  module: 4,
  lesson: 9,
  title: 'Age Hierarchy — Who Speaks How',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Age sets register in Korean. Older to younger: can use banmal (with permission). Younger to older: stays polite. Same age (동갑): banmal mutual after agreement. This is why Koreans ask age FAST — it sets the entire conversation's grammar.",
    culturalNote: "K-drama's 누나 (older sister, said by male)/언니 (older sister, said by female)/형 (older brother, said by male)/오빠 (older brother, said by female) — these aren't just family terms. They mark the speaker's relative-younger position to a non-blood older friend.",
  },

  chunks: [
    { id: 'oppa', target: '오빠', native: 'Older brother (female speaker)', literal: 'older-bro-female-says', emoji: '👨', phonetic: 'op-pa', audioRef: null },
    { id: 'hyeong', target: '형', native: 'Older brother (male speaker)', literal: 'older-bro-male-says', emoji: '👨', phonetic: 'hyeong', audioRef: null },
    { id: 'noona', target: '누나 / 언니', native: 'Older sister (male / female speaker)', literal: 'older-sis (male / female says)', emoji: '👩', phonetic: 'nu-na / eon-ni', audioRef: null },
  ],

  pattern: {
    name: 'Speaker gender + listener gender + age',
    explanation: "Female says 오빠 (older male)/언니 (older female). Male says 형 (older male)/누나 (older female). Used for non-blood older friends within ~10 years.",
    examples: [
      { target: '오빠', native: 'Older male (said by female)' },
      { target: '형', native: 'Older male (said by male)' },
      { target: '누나', native: 'Older female (said by male)' },
      { target: '언니', native: 'Older female (said by female)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match speaker → who they call older brother', pairs: [
      { left: 'Female speaker', right: '오빠' },
      { left: 'Male speaker', right: '형' },
      { left: 'Female says older sister', right: '언니' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'older brother (said by a female)', correct: ['오빠', 'oppa'] },
    { type: 'fill_blank', instruction: 'Male speaker addressing older male friend', sentence: '_____, 잘 지냈어요?', options: ['형', '오빠', '누나'], correct: '형', context: 'Male → older male = 형.' },
    { type: 'build_sentence', instruction: 'Build "Older sister, what are you doing?" (male speaker)', words: ['뭐해요?', '누나,'], correct: ['누나,', '뭐해요?'], translation: 'Older sister, what are you doing? (male speaker)' },
    { type: 'multiple_choice', instruction: 'Female speaker meets a male friend two years older. What does she call him?', question: 'Pick the term', options: [
      { text: '오빠', correct: true },
      { text: '형', correct: false },
      { text: '누나', correct: false },
    ], explanation: 'Female → older male = 오빠. 형 is male-says. 누나 is for older female (male speaker).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'older sister (said by a male)', correct: ['누나', 'nuna'] },
  ],

  rwenDialogue: {
    intro: "Rwen quizzes hierarchy mapping.",
    lines: [
      { speaker: 'rwen', rwenLine: 'You\'re a male speaker. Your older male friend = ?' },
      { speaker: 'user', userChoices: [
        { target: '형', native: 'Older brother (male says)', correct: true, feedback: 'Correct — male to older male = 형.' },
        { target: '오빠', native: 'Older brother (female says)', correct: false, feedback: 'Female speakers say 오빠. You\'re male.' },
        { target: '누나', native: 'Older sister', correct: false, feedback: 'That\'s for older FEMALE.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Speaker gender + listener gender + age = the term. Memorize the matrix.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Older brother (said by a female)', correct: ['오빠', 'oppa'] },
      { prompt: 'Older sister (said by a female)', correct: ['언니', 'eonni'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Map your closest older friend. What would they be in Korean — 오빠/형/누나/언니?",
    rwenSignoff: "Age sets the address. Korean has a name for every position.",
  },

  phase8: {
    scenario: "Rwen drills age-based address terms (오빠/형/누나/언니) with various speaker/listener gender pairs.",
    rwenRole: "Rwen — hierarchy coach.",
    successCriteria: "User correctly picks term in 4+ scenarios. Distinguishes male-speaker vs female-speaker forms.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
