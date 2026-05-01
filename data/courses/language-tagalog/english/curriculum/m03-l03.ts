import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'Ano ang trabaho mo? — Work',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Back in the Manila office pantry. Coffee number two. Lia leans on the counter and asks 'Ano ang trabaho mo?' In English we'd answer with a job title and move on. In Tagalog, the answer comes with a tiny verb that brings your work to life — nagtatrabaho.",
    culturalNote: "Filipinos love asking about work — it's not a status check, it's how they place you in their network of cousins, classmates, and barkadas who might want to meet you. Answer warmly, name the place too if you can. 'Sa ___' (at ___) is the magic add-on that turns a flat answer into a conversation.",
  },

  chunks: [
    {
      id: 'ano-ang-trabaho-mo',
      target: 'Ano ang trabaho mo?',
      native: "What's your job?",
      literal: 'What [marker] work your?',
      emoji: '💼',
      phonetic: 'a-NO ang tra-BA-ho mo',
      audioRef: null,
    },
    {
      id: 'guro-ako',
      target: 'Guro ako',
      native: "I'm a teacher",
      literal: 'Teacher I',
      emoji: '🍎',
      phonetic: 'GOO-ro a-KO',
      audioRef: null,
    },
    {
      id: 'nagtatrabaho-ako-sa',
      target: 'Nagtatrabaho ako sa Sydney',
      native: 'I work in Sydney',
      literal: 'Work-currently I [marker] Sydney',
      emoji: '🏢',
      phonetic: 'nag-ta-tra-BA-ho a-KO sa SID-ni',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Ano ang ___ mo?` question',
    explanation: "'Ano ang ___ mo?' = 'What is your ___?' — slot in any noun. Trabaho (job), pangalan (name), hilig (interest). Answer with the role-first pattern: 'Guro ako' (I'm a teacher). Add detail with 'Nagtatrabaho ako sa ___' = 'I work at ___'.",
    examples: [
      { target: 'Ano ang pangalan mo?', native: "What's your name?" },
      { target: 'Doktor ako', native: "I'm a doctor" },
      { target: 'Nagtatrabaho ako sa ospital', native: 'I work at a hospital' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Ano ang trabaho mo?', right: "What's your job?" },
        { left: 'Guro ako', right: "I'm a teacher" },
        { left: 'Nagtatrabaho ako sa Sydney', right: 'I work in Sydney' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Asking a new colleague about their job',
      sentence: 'Ano ___ trabaho mo?',
      options: ['ang', 'sa', 'si'],
      correct: 'ang',
      context: "'Ang' is the focus marker — 'Ano ang ___ mo' is the standard 'What is your ___?' frame.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm a teacher",
      correct: ['Guro ako', 'guro ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell Lia where you work — put the words in order',
      words: ['sa', 'ako', 'Nagtatrabaho', 'Sydney'],
      correct: ['Nagtatrabaho', 'ako', 'sa', 'Sydney'],
      translation: 'I work in Sydney',
    },
    {
      type: 'multiple_choice',
      instruction: "Lia asks your job. You're a designer at an agency. What's the warmest answer?",
      question: 'Choose the most natural reply',
      options: [
        { text: 'Designer ako, nagtatrabaho ako sa isang agency.', correct: true },
        { text: 'Ano ang trabaho mo?', correct: false },
        { text: 'Galing ako sa Australia.', correct: false },
      ],
      explanation: "Lead with the role ('Designer ako'), then add the place with 'nagtatrabaho ako sa ___'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — describe your workplace',
      prompt: 'I work in Sydney',
      correct: ['Nagtatrabaho ako sa Sydney', 'nagtatrabaho ako sa sydney'],
    },
  ],

  rwenDialogue: {
    intro: "Back in the Makati pantry. Lia's heating up her lunch. She glances over and the next question lands.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ano nga pala ang trabaho mo?',
        native: 'By the way, what is your job?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Guro ako, nagtatrabaho ako sa Sydney.', native: "I'm a teacher, I work in Sydney.", correct: true, feedback: 'Beautiful — role first, then the place. Conversation-ready.' },
          { target: 'Ano ang trabaho mo?', native: "What's your job?", correct: false, feedback: "You echoed the question instead of answering. Tell her your role first." },
          { target: 'Ako si guro.', native: 'I am [name-marker] teacher.', correct: false, feedback: "'Si' is only for proper names — for roles, just say 'Guro ako'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, guro pala! Galing.',
        native: 'Oh, a teacher! Cool.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She lit up. 'Galing' means 'cool' or 'awesome' here — you just earned the warmest tag in the Filipino office vocabulary.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "What's your job? (in Tagalog)", correct: ['Ano ang trabaho mo?', 'ano ang trabaho mo'] },
      { prompt: 'I work in Sydney (in Tagalog)', correct: ['Nagtatrabaho ako sa Sydney', 'nagtatrabaho ako sa sydney'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your job in two short Tagalog sentences today: '___ ako. Nagtatrabaho ako sa ___.' Say it to your phone, your dog, the kettle. Just out loud.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — go well.",
  },

  phase8: {
    scenario: "Day three at the Makati office. Lia from the next desk catches you in the pantry again at 3pm coffee. She's curious about what you actually do day-to-day and where back home you worked before this Manila stint.",
    rwenRole: "Lia — your warm Manila colleague; she'll ask 'Ano ang trabaho mo?' then follow up with 'Saan ka nagtatrabaho?' to keep you talking.",
    successCriteria: "User answers Lia's job question with role-first ('___ ako'), then volunteers a workplace using 'Nagtatrabaho ako sa ___'. Bonus: user asks Lia back with 'Ikaw, ano ang trabaho mo?'",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
