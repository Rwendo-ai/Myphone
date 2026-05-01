import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-ako-si',
  module: 3,
  lesson: 1,
  title: 'Ako si... — I am',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "First day in the Manila office. Coffee in the pantry, name tag still warm from the printer. Someone smiles and asks, 'Sino ka?' Today you answer — Ako si Ben. The little word 'si' is doing a lot of work.",
    culturalNote: "Tagalog is one of the few languages that grammatically marks proper names. 'Si' before a person's name is required — saying 'Ako Ben' instead of 'Ako si Ben' sounds broken. For roles or descriptions (student, Australian, teacher), you flip the order: 'Estudyante ako'. Two tiny patterns, one big mental switch.",
  },

  chunks: [
    {
      id: 'ako-si-ben',
      target: 'Ako si Ben',
      native: 'I am Ben',
      literal: 'I [name-marker] Ben',
      emoji: '👋',
      phonetic: 'a-KO see BEN',
      audioRef: null,
    },
    {
      id: 'estudyante-ako',
      target: 'Estudyante ako',
      native: "I'm a student",
      literal: 'Student I',
      emoji: '🎓',
      phonetic: 'es-tood-YAN-te a-KO',
      audioRef: null,
    },
    {
      id: 'galing-ako-sa-australia',
      target: 'Galing ako sa Australia',
      native: "I'm from Australia",
      literal: 'From I [marker] Australia',
      emoji: '🇦🇺',
      phonetic: 'GA-ling a-KO sa aus-TRAL-ya',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Si` + name vs `ako` + role',
    explanation: "Use 'Ako si ___' for proper names only — 'si' is the personal-name marker. For roles, jobs, or origins, drop 'si' and put the role first: 'Estudyante ako', 'Pilipino ako', 'Galing ako sa ___'. The marker is what changes, not the meaning of 'ako'.",
    examples: [
      { target: 'Ako si Maria', native: 'I am Maria (name)' },
      { target: 'Guro ako', native: "I'm a teacher (role)" },
      { target: 'Galing ako sa Sydney', native: "I'm from Sydney (origin)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Ako si Ben', right: 'I am Ben' },
        { left: 'Estudyante ako', right: "I'm a student" },
        { left: 'Galing ako sa Australia', right: "I'm from Australia" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Introducing yourself by name to a Manila colleague',
      sentence: 'Ako ___ Ben.',
      options: ['si', 'ako', 'sa'],
      correct: 'si',
      context: "'Si' is the personal-name marker — required before a person's name.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm a student",
      correct: ['Estudyante ako', 'estudyante ako'],
    },
    {
      type: 'build_sentence',
      instruction: "Tell someone you're from Australia — put the words in order",
      words: ['ako', 'sa', 'Galing', 'Australia'],
      correct: ['Galing', 'ako', 'sa', 'Australia'],
      translation: "I'm from Australia",
    },
    {
      type: 'multiple_choice',
      instruction: "A new colleague Lia asks 'Sino ka?'. Your name is Ben — what do you say?",
      question: 'Choose the correct introduction',
      options: [
        { text: 'Ako si Ben', correct: true },
        { text: 'Ako Ben', correct: false },
        { text: 'Si ako Ben', correct: false },
      ],
      explanation: "Personal names always need 'si' between 'ako' and the name.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — say your name is Maria',
      prompt: 'I am Maria',
      correct: ['Ako si Maria', 'ako si maria'],
    },
  ],

  rwenDialogue: {
    intro: "Pantry on the 14th floor of a Makati office tower. Lia from the marketing team is pouring coffee. She turns to you, smiles. 'Hi, sino ka?'",
    lines: [
      {
        speaker: 'npc',
        target: 'Hi, sino ka?',
        native: 'Hi, who are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ako si Ben. Estudyante ako, galing ako sa Australia.', native: "I'm Ben. I'm a student, from Australia.", correct: true, feedback: 'Beautiful — name with si, role and origin in their proper shape.' },
          { target: 'Ako Ben. Ako estudyante.', native: 'I Ben. I student.', correct: false, feedback: "Missing 'si' before the name, and word order is reversed for the role." },
          { target: 'Si ako Ben.', native: 'Marker I Ben.', correct: false, feedback: "'Si' goes before the name, not before 'ako'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, welcome sa Pilipinas!',
        native: 'Ah, welcome to the Philippines!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three sentences. One handshake's worth of words. You just told her exactly who you are in Tagalog.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am Ben (in Tagalog)', correct: ['Ako si Ben', 'ako si ben'] },
      { prompt: "I'm a student (in Tagalog)", correct: ['Estudyante ako', 'estudyante ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'ako si ___' three times today. Your name to your reflection, to a friend, into a voice memo. Three reps and the marker stops feeling foreign.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — take care.",
  },

  phase8: {
    scenario: "It's 10am coffee break on your first day at a Makati marketing agency. Lia, a friendly colleague from the next desk, has come to the pantry to introduce herself. She's curious — she heard there was a new Australian on the team and wants to know your name, what you do, and where you're from.",
    rwenRole: "Lia — late 20s, warm Manila colleague, switches between Taglish and full Tagalog; she'll gently nudge if you forget 'si' before a name and beam when you get it right.",
    successCriteria: "User introduces themselves using 'Ako si [name]' (with 'si' before the name), states a role using the role-first pattern (e.g. 'Estudyante ako' or '___ ako'), and gives an origin with 'Galing ako sa ___'. All three patterns used at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
