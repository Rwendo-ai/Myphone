import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'At the Doctor — Kuchipitari',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Healthcare in Zimbabwe is a mix of public and private — government hospitals, mission hospitals, private clinics, and traditional healers. No matter which you visit, knowing how to describe what's wrong in Shona gets you better care.",
    culturalNote: "The word 'chiremba' (doctor) carries authority and respect. Addressing a doctor as 'Chiremba' (Doctor) without adding their name is perfectly correct and respectful — similar to calling someone 'Doctor' in English.",
  },

  chunks: [
    {
      id: 'ndinoirwa',
      target: 'Ndinoirwa',
      native: 'I am in pain / It hurts',
      literal: 'I-am-pained',
      emoji: '😣',
      phonetic: 'ndi-no-IR-wa',
      audioRef: null,
    },
    {
      id: 'kwangu',
      target: '...kwangu',
      native: 'Mine / My (for places)',
      literal: '...mine (locative possession)',
      emoji: '📍',
      phonetic: 'kwa-ngu',
      audioRef: null,
    },
    {
      id: 'ndinorwara_ne',
      target: 'Ndinorwara ne...',
      native: 'I am sick with... / I have...',
      literal: 'I-am-sick with...',
      emoji: '🏥',
      phonetic: 'ndi-no-RWA-ra ne',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Describing illness — ndinorwara ne + condition',
    explanation: "'Ndinorwara ne' + illness/symptom = I have [condition]. Ndinorwara ne fivha (I have a fever), Ndinorwara ne chikosoro (I have a cough), Ndinorwara ne mushonga wokuvhiringidzika (I feel dizzy). 'Ne' connects the verb to the condition.",
    examples: [
      { target: 'Ndinorwara ne fivha', native: 'I have a fever' },
      { target: 'Ndinorwara ne chikosoro', native: 'I have a cough' },
      { target: 'Ndinoirwa musoro wangu', native: 'My head hurts' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the doctor phrase to its meaning',
      pairs: [
        { left: 'Ndinoirwa', right: 'I am in pain' },
        { left: 'Ndinorwara ne fivha', right: 'I have a fever' },
        { left: 'Chiremba', right: 'Doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have a cough',
      sentence: 'Ndinorwara _____ chikosoro.',
      options: ['ne', 'na', 'ku'],
      correct: 'ne',
      context: 'I have a cough.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am in pain',
      correct: ['Ndinoirwa', 'ndinoirwa'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at the doctor's. What do you say first?",
      question: 'Opening at a doctor\'s visit:',
      options: [
        { text: 'Mangwanani, Chiremba. Ndinorwara. Ndinoda rubatsiro.', correct: true },
        { text: 'Ndinoda kuona menyu', correct: false },
        { text: 'Mutengo uri ngani?', correct: false },
      ],
      explanation: "Greet + state you're sick + request help. 'Mangwanani, Chiremba. Ndinorwara. Ndinoda rubatsiro.' Complete and respectful.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My stomach hurts since yesterday'",
      words: ['Ndinoirwa', 'dumbu', 'rangu', 'kubva', 'mazuva', 'adarika.'],
      correct: ['Ndinoirwa', 'dumbu', 'rangu', 'kubva', 'mazuva', 'adarika.'],
      translation: 'My stomach hurts since recently',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have a fever',
      correct: ['Ndinorwara ne fivha', 'ndinorwara ne fivha'],
    },
  ],

  rwenDialogue: {
    intro: "You are at the clinic. The doctor greets you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mangwanani. Ndinokubatsira sei nhasi?',
        native: 'Good morning. How can I help you today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mangwanani, Chiremba. Ndinorwara. Ndinova musoro uye ndinorwara ne fivha.', native: 'Good morning, Doctor. I am sick. I have a headache and I have a fever.', correct: true, feedback: "Greeted respectfully, named the doctor correctly, described two symptoms. Perfect medical Shona." },
          { target: 'Ndinorwara', native: 'I am sick', correct: false, feedback: "Add your specific symptoms — 'Ndinova musoro uye ndinorwara ne fivha.' Give the doctor information." },
          { target: 'Ndine dambudziko', native: 'I have a problem', correct: false, feedback: "Be specific — 'Ndinorwara. Ndinova musoro uye ndinorwara ne fivha.' Headache and fever." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The doctor now has everything they need. Your Shona got you proper care. Poreswa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am in pain', correct: ['Ndinoirwa', 'ndinoirwa'] },
      { prompt: 'I have a fever', correct: ['Ndinorwara ne fivha', 'ndinorwara ne fivha'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the doctor visit sequence: 'Mangwanani, Chiremba. Ndinorwara. Ndinova [body part]. Ndinoda rubatsiro.' Say it until it flows naturally.",
    rwenSignoff: "Health is sacred. Know how to ask for it. Poreswa. Famba zvakanaka.",
  },
};

export default lesson;
