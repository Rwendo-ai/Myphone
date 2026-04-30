import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sickness',
  module: 10,
  lesson: 4,
  title: 'Ndinorwara — Illness & Wellness',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Health is the first wealth. In Zimbabwe as everywhere, illness interrupts life. Knowing how to say you're unwell, describe symptoms, and seek help in Shona could matter more than any other vocabulary in this course.",
    culturalNote: "Health conversations in Zimbabwe bridge traditional and modern medicine. Someone might say they're going to the chiremba (doctor) AND the n'anga (traditional healer). Both are respected. Knowing the language navigates both worlds.",
  },

  chunks: [
    {
      id: 'ndinorwara',
      target: 'Ndinorwara',
      native: 'I am sick / I am unwell',
      literal: 'I-am-ill',
      emoji: '🤒',
      phonetic: 'ndi-no-RWA-ra',
      audioRef: null,
    },
    {
      id: 'ndiripo_zvisiri_nani',
      target: 'Ndiripo zvisiri nani',
      native: 'I am not well / I am not okay',
      literal: 'I-am-here that-is-not-well',
      emoji: '😔',
      phonetic: 'ndi-ri-po zvi-si-ri NA-ni',
      audioRef: null,
    },
    {
      id: 'ndinova_musoro',
      target: 'Ndinova musoro',
      native: 'I have a headache',
      literal: 'I-have-pain head',
      emoji: '🤕',
      phonetic: 'ndi-no-VA mu-SO-ro',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinova [body part] — I have pain in [body part]',
    explanation: "'Ndinova' + body part = I have pain there. Ndinova musoro (headache), Ndinova dumbu (stomach ache), Ndinova ruoko (arm pain). Ndinova is the pain verb — learn it and you can describe any body pain.",
    examples: [
      { target: 'Ndinova musoro', native: 'I have a headache' },
      { target: 'Ndinova dumbu', native: 'I have a stomach ache' },
      { target: 'Ndinova mazino', native: 'I have a toothache' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the health phrase to its meaning',
      pairs: [
        { left: 'Ndinorwara', right: 'I am sick' },
        { left: 'Ndiripo zvisiri nani', right: 'I am not well' },
        { left: 'Ndinova musoro', right: 'I have a headache' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Describe a stomach ache',
      sentence: 'Ndinova _____ zvakanyanya.',
      options: ['dumbu', 'musoro', 'mazino'],
      correct: 'dumbu',
      context: 'I have a very bad stomach ache.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am sick',
      correct: ['Ndinorwara', 'ndinorwara'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Wakadii?' and you have a headache. What do you say?",
      question: 'Reply when you have a headache:',
      options: [
        { text: 'Ndiripo zvisiri nani. Ndinova musoro.', correct: true },
        { text: 'Ndiripo, ndatenda', correct: false },
        { text: 'Zvakanaka', correct: false },
      ],
      explanation: "'Ndiripo zvisiri nani. Ndinova musoro.' — I am not well. I have a headache. Honest and specific.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am sick, I need a doctor'",
      words: ['Ndinorwara.', 'Ndinoda', 'chiremba.'],
      correct: ['Ndinorwara.', 'Ndinoda', 'chiremba.'],
      translation: 'I am sick. I need a doctor.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am not well',
      correct: ['Ndiripo zvisiri nani', 'ndiripo zvisiri nani'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen notices you seem unwell and asks.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Wakadii? Unoita sei? Unoita sengoronga.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndiripo zvisiri nani, Rwen. Ndinova musoro uye ndinorwara zvishoma.', native: "I'm not well, Rwen. I have a headache and I'm a bit sick.", correct: true, feedback: "Honest, specific symptoms. Rwen immediately helps you sit down and get water." },
          { target: 'Ndiripo, ndatenda', native: "I'm fine, thank you", correct: false, feedback: "Be honest — you're unwell: 'Ndiripo zvisiri nani. Ndinova musoro.'" },
          { target: 'Zvakanaka', native: "It's fine", correct: false, feedback: "Don't dismiss it — 'Ndiripo zvisiri nani. Ndinova musoro uye ndinorwara zvishoma.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Gara pano. Ndichatora mvura. Poreswa — get well soon. Your wellbeing matters.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am sick', correct: ['Ndinorwara', 'ndinorwara'] },
      { prompt: 'I have a headache', correct: ['Ndinova musoro', 'ndinova musoro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Check in on someone today — 'Wakadii?' (How are you?). If they're unwell, say 'Zvinosuwa. Poreswa.' (I'm sorry. Get well soon.) Use Shona to care.",
    rwenSignoff: "Health is the first wealth. Poreswa — get well. Famba zvakanaka.",
  },
};

export default lesson;
