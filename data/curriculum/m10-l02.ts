import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-sadness',
  module: 10,
  lesson: 2,
  title: 'Ndakasuwa — Sadness & Difficulty',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Language that only expresses happiness is incomplete. Today we go to the harder emotions — sadness, difficulty, loss. These words matter because real relationships include hard days. Knowing them lets you be truly present for people.",
    culturalNote: "In Shona culture, expressing sadness is not weakness — it's honesty. The community gathers around grief. 'Zvinosuwa' (it is sad/difficult) is said with empathy when someone shares hard news. It acknowledges pain without minimising it.",
  },

  chunks: [
    {
      id: 'ndakasuwa',
      target: 'Ndakasuwa',
      native: 'I am sad / I feel sorrowful',
      literal: 'I-became-sorrowful',
      emoji: '😢',
      phonetic: 'nda-ka-SU-wa',
      audioRef: null,
    },
    {
      id: 'zvinosuwa',
      target: 'Zvinosuwa',
      native: 'It is sad / It is difficult / I am sorry to hear that',
      literal: 'Things-are-sorrowful',
      emoji: '💔',
      phonetic: 'zvi-no-SU-wa',
      audioRef: null,
    },
    {
      id: 'usatye',
      target: 'Usatye / Usasuwa',
      native: "Don't be afraid / Don't be sad",
      literal: 'Don\'t-fear / Don\'t-sorrow',
      emoji: '🤝',
      phonetic: 'u-sat-YE / u-sa-SU-wa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Usa- prefix — do not [verb]',
    explanation: "'Usa-' before a verb creates a negative command — 'do not'. Usatye (don't be afraid), Usasuwa (don't be sad), Usaenda (don't go), Usatuka (don't insult). This 'usa-' prefix is how you comfort, warn, or redirect in Shona.",
    examples: [
      { target: 'Usasuwa', native: "Don't be sad" },
      { target: 'Usatye', native: "Don't be afraid" },
      { target: 'Usaenda', native: "Don't go" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emotion phrase to its meaning',
      pairs: [
        { left: 'Ndakasuwa', right: 'I am sad' },
        { left: 'Zvinosuwa', right: 'It is sad / I am sorry' },
        { left: 'Usasuwa', right: "Don't be sad" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express sadness',
      sentence: 'Ndaka_____ mazuva ano.',
      options: ['suwa', 'fara', 'enda'],
      correct: 'suwa',
      context: 'I have been sad recently.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am sad',
      correct: ['Ndakasuwa', 'ndakasuwa'],
    },
    {
      type: 'multiple_choice',
      instruction: "A friend shares bad news. What is the empathetic Shona response?",
      question: 'Respond to bad news:',
      options: [
        { text: 'Zvinosuwa. Ndine hana yako.', correct: true },
        { text: 'Zvakanaka', correct: false },
        { text: 'Ndinofara', correct: false },
      ],
      explanation: "'Zvinosuwa' (it is sad) + 'Ndine hana yako' (I am with your heart = I'm sorry) — two essential phrases for showing empathy.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Don't be sad — I am here'",
      words: ['Usasuwa', '—', 'ndiri', 'pano.'],
      correct: ['Usasuwa', '—', 'ndiri', 'pano.'],
      translation: "Don't be sad — I am here",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'It is sad / I am sorry to hear that',
      correct: ['Zvinosuwa', 'zvinosuwa'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen shares some difficult news about a family member being ill.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndine dambudziko. Sekuru wangu anorwara zvakanyanya.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvinosuwa zvikuru, Rwen. Ndiri nawe. Usasuwa — mhuri yose iripo.', native: "I am so sorry, Rwen. I am with you. Don't be sad — the whole family is there.", correct: true, feedback: "Empathy + presence + comfort. That's how Shona friendship sounds in hard moments." },
          { target: 'Ndakasuwa', native: 'I am sad', correct: false, feedback: "Acknowledge HIS situation first — 'Zvinosuwa zvikuru, Rwen.' Then offer comfort: 'Usasuwa — ndiri nawe.'" },
          { target: 'Haitei', native: "No problem", correct: false, feedback: "Too dismissive for serious news — 'Zvinosuwa zvikuru, Rwen. Ndiri nawe.' Show real empathy." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndatenda. Ndiri nawe zvakare. Sekuru vachazoporeswa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am sad', correct: ['Ndakasuwa', 'ndakasuwa'] },
      { prompt: "Don't be sad", correct: ['Usasuwa', 'usasuwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of someone going through a hard time. Say 'Zvinosuwa. Ndiri nawe' — it is sad. I am with you. Even if you only say it in your heart.",
    rwenSignoff: "Sadness shared is sadness halved. Famba zvakanaka.",
  },
};

export default lesson;
