import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'Kàn yīshēng — At the Doctor',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "You're sitting on the paper-covered exam bed in a small Shanghai clinic. The doctor walks in. They have three questions, always: where does it hurt, how long, and the prescription. Today's lesson hands you the answers.",
    culturalNote: "In Chinese, you 'eat medicine' (吃药 chī yào) — never 'take' it. Pills, syrups, herbal teas — all eaten. The verb maps to anything you put in your mouth. Western medicine and traditional Chinese medicine (中药 zhōngyào) sit side by side in most pharmacies.",
  },

  chunks: [
    {
      id: 'zheli_teng',
      target: 'Zhèlǐ téng',
      native: 'It hurts here',
      literal: '(这里疼) lit: here-hurt',
      emoji: '👉',
      phonetic: 'JUR-lee TUNG',
      audioRef: null,
    },
    {
      id: 'san_tian_le',
      target: 'Sān tiān le',
      native: 'For three days now',
      literal: '(三天了) lit: three-day-(ongoing)',
      emoji: '📅',
      phonetic: 'sahn TYEN luh',
      audioRef: null,
    },
    {
      id: 'chi_zhe_ge_yao',
      target: 'Chī zhè ge yào',
      native: 'Take this medicine',
      literal: '(吃这个药) lit: eat-this-(measure word)-medicine',
      emoji: '💊',
      phonetic: 'chrr JUH guh YAO',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Le" (了) for ongoing duration',
    explanation: '"Le" again — but a different flavour. After a duration ([number] [time-unit] le), it means "for [duration] now, still ongoing". "Sān tiān le" = three days and counting. Subtle but everywhere.',
    examples: [
      { target: 'Sān tiān le', native: 'Three days now (still hurting)' },
      { target: 'Yí ge yuè le', native: 'A month now (still happening)' },
      { target: 'Hǎo jiǔ le', native: "It's been a long time" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Zhèlǐ téng', right: 'It hurts here' },
        { left: 'Sān tiān le', right: 'For three days now' },
        { left: 'Chī zhè ge yào', right: 'Take this medicine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'The doctor asks how long. You\'ve been sick three days. Complete:',
      sentence: 'Sān tiān _____.',
      options: ['le', 'ma', 'hěn'],
      correct: 'le',
      context: '"Le" after a duration = "for [duration] and still ongoing".',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'It hurts here',
      correct: ['Zhèlǐ téng', 'Zheli teng', 'zheli teng', '这里疼'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Take (eat) this medicine."',
      words: ['yào', 'Chī', 'zhè', 'ge'],
      correct: ['Chī', 'zhè', 'ge', 'yào'],
      translation: 'Take this medicine',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'For three days now',
      correct: ['Sān tiān le', 'San tian le', 'san tian le', '三天了'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does Mandarin say "eat medicine" (chī yào)?',
      question: 'Pick the right answer.',
      options: [
        { text: '"Chī" covers anything you put in your mouth — pills, syrups, soups, all "eaten"', correct: true },
        { text: '"Chī" specifically means swallow', correct: false },
        { text: "It's only used for traditional medicine, not pills", correct: false },
      ],
      explanation: 'Chī (吃) is the universal verb for ingesting — broader than English "eat".',
    },
  ],

  rwenDialogue: {
    intro: "You're at a Shanghai clinic. The doctor — kind, focused, white coat — sits across from you. She points to your stomach with her pen.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǎlǐ bù shūfu?',
        native: "Where doesn't feel right?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zhèlǐ téng. Sān tiān le.', native: "Here. It's been three days.", correct: true, feedback: 'Two sentences, complete medical history. The doctor has what she needs.' },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: 'Wrong context.' },
          { target: 'Bié dānxīn', native: "Don't worry", correct: false, feedback: "She's the one helping you — let her help." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo. Chī zhè ge yào, yì tiān sān cì.',
        native: 'OK. Take this medicine, three times a day.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Diagnosis, prescription, done. You just navigated a Chinese clinic — something most travellers fear. Quietly huge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'It hurts here',
        correct: ['Zhèlǐ téng', 'Zheli teng', 'zheli teng', '这里疼'],
      },
      {
        prompt: 'Take (eat) this medicine',
        correct: ['Chī zhè ge yào', 'Chi zhe ge yao', 'chi zhe ge yao', '吃这个药'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Imagine the clinic. Run through the script: "Wǒ bù shūfu. Zhèlǐ téng. Sān tiān le." Three sentences that have rescued countless travellers.',
    rwenSignoff: 'You have the language for the worst day of a trip. Tomorrow we go somewhere happier — into your past.',
  },

  phase8: {
    scenario: "You're back at the Shanghai clinic — second visit. The doctor needs an update. You point to where it hurts, say how long, and ask about the medicine she gave you last time.",
    rwenRole: "Doctor in Shanghai, mid-40s, warm but efficient. Speaks slowly for foreigners but only Mandarin.",
    successCriteria: "User uses 'Zhèlǐ téng' with a body part, gives a duration with [number] [time-unit] + 'le', and asks something about 'zhè ge yào'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
