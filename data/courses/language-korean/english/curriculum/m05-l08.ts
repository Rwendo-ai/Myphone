import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-chingu',
  module: 5,
  lesson: 8,
  title: 'Chingu — Friend (and Why It\'s Restricted)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "친구 (chingu) means friend — but in Korean, it's reserved for SAME-AGE peers. Calling an older or younger person 친구 sounds off. Older = 형/오빠/누나/언니. Younger = 동생.",
    culturalNote: "Westerners often say 'my friend Sang-ho' — but in Korean, if he's three years older, he's 형/오빠, not 친구. Forcing 친구 across age lines reads as either ignorant or weirdly egalitarian.",
  },

  chunks: [
    { id: 'chingu', target: '친구', native: 'Friend (same age)', literal: 'close-old', emoji: '🤝', phonetic: 'chin-gu', audioRef: null },
    { id: 'jeolchin', target: '절친', native: 'Best friend', literal: 'closest-friend', emoji: '👯', phonetic: 'jeol-chin', audioRef: null },
    { id: 'seonbae', target: '선배 / 후배', native: 'Senior / junior (school/work)', literal: 'senior / junior', emoji: '🎓', phonetic: 'seon-bae / hu-bae', audioRef: null },
  ],

  pattern: {
    name: 'Same age = 친구; otherwise hierarchy',
    explanation: "School/work hierarchy: 선배 (senior, older year) and 후배 (junior, younger year). They survive even after graduation. 친구 = strict peer.",
    examples: [
      { target: '제 친구예요', native: 'My friend (same age)' },
      { target: '선배예요', native: 'Senior (in school/work)' },
      { target: '후배예요', native: 'Junior (in school/work)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match relation', pairs: [
      { left: '친구', right: 'Friend (same age)' },
      { left: '선배', right: 'Senior' },
      { left: '후배', right: 'Junior' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Best friend', correct: ['절친', 'jeolchin'] },
    { type: 'fill_blank', instruction: 'Korean older year-mate at work', sentence: '저는 박 _____예요 (he is older).', options: ['선배', '후배', '친구'], correct: '선배', context: 'Older = 선배.' },
    { type: 'build_sentence', instruction: 'Build "She is my best friend"', words: ['절친이에요', '제'], correct: ['제', '절친이에요'], translation: 'She is my best friend.' },
    { type: 'multiple_choice', instruction: 'Your Korean coworker is 5 years older. What is he?', question: 'Pick the right relation', options: [
      { text: '선배 (senior at work)', correct: true },
      { text: '친구 (friend)', correct: false },
      { text: '동생 (younger sibling)', correct: false },
    ], explanation: 'Older + same workplace = 선배. 친구 violates age rule.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Friend (same age)', correct: ['친구', 'chingu'] },
  ],

  rwenDialogue: {
    intro: "Coworker asks about your social circle.",
    lines: [
      { speaker: 'npc', target: '한국에 친구 많아요?', native: 'Many friends in Korea?' },
      { speaker: 'user', userChoices: [
        { target: '동갑 친구 두 명, 선배 한 명 있어요', native: 'Two same-age friends, one senior', correct: true, feedback: 'Age + role distinction — Korean-fluent thinking.' },
        { target: '친구 많아요', native: 'Lots of friends (vague)', correct: false, feedback: 'Vague Korean-wise. They expect age-based labels.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '와, 한국 사람 많이 만나네요!', native: "Wow, you meet lots of Koreans!" },
      { speaker: 'rwen', rwenLine: "친구 = strictly same-age. Hierarchy maps everyone else.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Friend (same age)', correct: ['친구', 'chingu'] },
      { prompt: 'Senior (older year at work/school)', correct: ['선배', 'seonbae'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three Korean acquaintances. Map each: 친구, 선배, 후배, 형/오빠/누나/언니, or 동생.",
    rwenSignoff: "Hierarchy decides the noun. Korean is precise about it.",
  },

  phase8: {
    scenario: "Korean coworker asks about your friends in Korea — by age and role, not just count.",
    rwenRole: "Coworker — 30s, polite.",
    successCriteria: "User distinguishes 친구 (same age) from 선배/후배/형/오빠/누나/언니 properly. Does NOT call older Koreans 친구.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
