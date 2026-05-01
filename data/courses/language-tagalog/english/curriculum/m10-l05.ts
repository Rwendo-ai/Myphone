import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Mga bahagi ng katawan — Body Parts',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you said 'masakit ang ulo ko'. But what if it's the tiyan? The braso? Today we name the body — so you can point and tell the doctor exactly where it hurts.",
    culturalNote: "Tagalog body words are short, warm, and used in everyday phrases — 'malaki ang puso mo' (your heart is big = you're generous), 'matigas ang ulo' (hard-headed). Knowing body words unlocks idioms too.",
  },

  chunks: [
    {
      id: 'ulo',
      target: 'Ulo',
      native: 'Head',
      literal: 'Head',
      emoji: '🧠',
      phonetic: 'U-lo',
      audioRef: null,
    },
    {
      id: 'tiyan',
      target: 'Tiyan',
      native: 'Stomach',
      literal: 'Stomach / belly',
      emoji: '🫃',
      phonetic: 'ti-YAN',
      audioRef: null,
    },
    {
      id: 'braso',
      target: 'Braso',
      native: 'Arm',
      literal: 'Arm (from Spanish brazo)',
      emoji: '💪',
      phonetic: 'BRA-so',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body nouns + ang/ko',
    explanation: "Body parts are plain nouns. To say 'my [body part]' add **ko** at the end: *braso ko* = my arm. To make it the subject of pain, wrap it: **ang [body part] ko**. Many body words come from Spanish (braso, leeg, mukha) — Filipinos use both Spanish-rooted and pure Tagalog ones interchangeably.",
    examples: [
      { target: 'ulo ko', native: 'my head' },
      { target: 'tiyan ko', native: 'my stomach' },
      { target: 'Masakit ang braso ko', native: 'My arm hurts' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the body part to its meaning',
      pairs: [
        { left: 'Ulo', right: 'Head' },
        { left: 'Tiyan', right: 'Stomach' },
        { left: 'Braso', right: 'Arm' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You did too many push-ups. Where does it hurt?',
      sentence: 'Masakit ang _____ ko.',
      options: ['braso', 'ulo', 'tiyan'],
      correct: 'braso',
      context: 'Push-ups = arms. Pick the body part that matches.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Stomach',
      correct: ['Tiyan', 'tiyan'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "My stomach hurts"',
      words: ['ko', 'ang', 'tiyan', 'Masakit'],
      correct: ['Masakit', 'ang', 'tiyan', 'ko'],
      translation: 'My stomach hurts',
    },
    {
      type: 'multiple_choice',
      instruction: 'The doctor asks where it hurts. You point to your head. What word do you use?',
      question: 'Which body part?',
      options: [
        { text: 'Ulo', correct: true },
        { text: 'Tiyan', correct: false },
        { text: 'Braso', correct: false },
      ],
      explanation: 'Ulo = head. The first body word every Filipino kid learns.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My head (use ko)',
      correct: ['Ulo ko', 'ulo ko'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a barangay health centre. The doctor needs you to point to where it hurts.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan masakit? Ituro mo sa akin.',
        native: 'Where does it hurt? Point it out to me.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Dito — masakit ang tiyan ko.', native: 'Here — my stomach hurts.', correct: true, feedback: 'Clear: location word + the body part. Doctor knows exactly what to check.' },
          { target: 'Masaya ang braso ko.', native: 'My arm is happy.', correct: false, feedback: 'Body parts can hurt — they cannot be masaya. Wrong feeling word.' },
          { target: 'Ulo doktor.', native: 'Head doctor.', correct: false, feedback: 'Missing the verb. Use masakit ang ___ ko.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, titingnan ko.',
        native: "Okay, I'll take a look.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Five body words and you can describe ninety percent of an ache. That's huge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Head (in Tagalog)', correct: ['Ulo', 'ulo'] },
      { prompt: 'Arm (in Tagalog)', correct: ['Braso', 'braso'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Stand in front of the mirror. Point to 5 body parts and name them in Tagalog: ulo, tiyan, braso, mata (eyes), bibig (mouth). Out loud.",
    rwenSignoff: "Ingat ang katawan mo — take care of your body. Bukas ulit.",
  },

  phase8: {
    scenario: "You're at a small barangay health centre. The nurse hands you a paper diagram of the body and asks you to point and name three places that bother you — even if just a little. Practice the body-part vocabulary in real use.",
    rwenRole: "Nurse Joy — barangay nurse, late 30s, patient, used to teaching first-time patients the words.",
    successCriteria: "User names at least 3 body parts (ulo / tiyan / braso / mata / etc.) and uses 'masakit ang ___ ko' for at least one of them. Conversational, not just word list.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
