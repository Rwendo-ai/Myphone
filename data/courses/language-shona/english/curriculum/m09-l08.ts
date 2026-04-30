import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency',
  module: 9,
  lesson: 8,
  title: 'Emergency Phrases',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "I hope you never need these. But knowing emergency Shona could save your life or someone else's in Zimbabwe. 'Batsira!' (Help!) heard in Shona is responded to instantly. These phrases are the most important in this module.",
    culturalNote: "In Zimbabwe, calling out in Shona during an emergency draws immediate community response. Shouting 'Batsira!' or 'Moto!' (Fire!) in a local language signals you belong to the community and triggers collective action.",
  },

  chunks: [
    {
      id: 'batsira',
      target: 'Batsira!',
      native: 'Help!',
      literal: 'Help! (urgent command)',
      emoji: '🆘',
      phonetic: 'bat-SI-ra',
      audioRef: null,
    },
    {
      id: 'ndine_dambudziko',
      target: 'Ndine dambudziko',
      native: 'I have a problem',
      literal: 'I-have problem',
      emoji: '⚠️',
      phonetic: 'ndi-ne dam-bu-DZI-ko',
      audioRef: null,
    },
    {
      id: 'daidzai_chiremba',
      target: 'Daidzai chiremba!',
      native: 'Call a doctor!',
      literal: 'Call doctor! (formal plural)',
      emoji: '🏥',
      phonetic: 'dai-DZA-i chi-RE-mba',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency commands — loud and direct',
    explanation: "Emergency commands are short, loud, and direct. No politeness markers (ndapota) — speed matters. Batsira! (Help!), Daidzai chiremba! (Call a doctor!), Moto! (Fire!), Mhosva! (Stop thief!). Learn them. Hope you never use them.",
    examples: [
      { target: 'Batsira!', native: 'Help!' },
      { target: 'Daidzai chiremba!', native: 'Call a doctor!' },
      { target: 'Ndine dambudziko guru', native: 'I have a serious problem' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emergency phrase to its meaning',
      pairs: [
        { left: 'Batsira!', right: 'Help!' },
        { left: 'Ndine dambudziko', right: 'I have a problem' },
        { left: 'Daidzai chiremba!', right: 'Call a doctor!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the emergency call',
      sentence: 'Batsira! Ndine _____!',
      options: ['dambudziko', 'mhuri', 'nguva'],
      correct: 'dambudziko',
      context: 'Help! I have a problem!',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Help!',
      correct: ['Batsira!', 'batsira!', 'Batsira', 'batsira'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone has collapsed. What do you shout?",
      question: 'Emergency — someone collapsed:',
      options: [
        { text: 'Daidzai chiremba! Batsira!', correct: true },
        { text: 'Ndinoda rubatsiro', correct: false },
        { text: 'Ndine dambudziko', correct: false },
      ],
      explanation: "Loud, immediate commands — 'Daidzai chiremba! Batsira!' — Call a doctor! Help! Speed and volume matter in emergencies.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Help! I have a big problem!'",
      words: ['Batsira!', 'Ndine', 'dambudziko', 'guru!'],
      correct: ['Batsira!', 'Ndine', 'dambudziko', 'guru!'],
      translation: 'Help! I have a big problem!',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Call a doctor!',
      correct: ['Daidzai chiremba!', 'daidzai chiremba!', 'Daidzai chiremba', 'daidzai chiremba'],
    },
  ],

  rwenDialogue: {
    intro: "A scenario: someone near you at the market suddenly falls ill. What do you do?",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Batsira! Daidzai chiremba! Munhu uyu anorwara!', native: 'Help! Call a doctor! This person is sick!', correct: true, feedback: "Three essential emergency phrases in sequence. The crowd responds immediately." },
          { target: 'Ndine dambudziko', native: 'I have a problem', correct: false, feedback: "Too calm for an emergency — shout: 'Batsira! Daidzai chiremba! Munhu uyu anorwara!'" },
          { target: 'Makadii?', native: 'How are you?', correct: false, feedback: "This is an emergency — shout: 'Batsira! Daidzai chiremba! Munhu uyu anorwara!'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tichiuya! Chiremba ari pedyo!',
        native: "We're coming! There's a doctor nearby!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Your Shona emergency call brought help in seconds. These words are not vocabulary — they are life.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Help!', correct: ['Batsira!', 'batsira!', 'Batsira', 'batsira'] },
      { prompt: 'Call a doctor!', correct: ['Daidzai chiremba!', 'daidzai chiremba!', 'Daidzai chiremba', 'daidzai chiremba'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say the emergency sequence out loud today — not in crisis, but as preparation: 'Batsira! Daidzai chiremba! Ndine dambudziko!' Say it loud enough that your body remembers it. Then hope you never need it.",
    rwenSignoff: "Know these words. Mean them. Famba zvakanaka.",
  },
};

export default lesson;
