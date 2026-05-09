import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05',
  module: 6,
  lesson: 5,
  title: 'Ngifuna Idokotela — At the Doctor',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "'Ngifuna idokotela' = I want a doctor. 'Ngi-funa' (I want) is one of the most useful verb-stems in isiNdebele. Combine it with anything — idokotela, amanzi, ikhambi — and you can ask for what you need.",
    culturalNote: "In Zimbabwe, 'idokotela' covers both Western-trained medical doctors and, in some usage, anyone who heals. The traditional healer is more specifically 'inyanga' (herbalist) or 'isangoma' (spiritual healer). Many Ndebele families consult both — modern clinic for an infection, inyanga for things the clinic can't see. Neither is dismissed.",
  },

  chunks: [
    {
      id: 'ngifuna_idokotela',
      target: 'Ngifuna idokotela.',
      native: 'I want / need a doctor.',
      literal: 'Ngi- (I) + funa (want) + idokotela (the doctor)',
      emoji: '👨‍⚕️',
      phonetic: 'ngee-FOO-nah ee-doh-koh-TEH-lah',
      audioRef: null,
    },
    {
      id: 'isibhedlela',
      target: 'isibhedlela',
      native: 'hospital',
      literal: 'isi- (class 7) + bhedlela (from English "bed")',
      emoji: '🏥',
      phonetic: 'ee-see-bheh-DLEH-lah',
      audioRef: null,
    },
    {
      id: 'ikliniki',
      target: 'ikliniki',
      native: 'clinic',
      literal: 'i- (class 5) + kliniki (loanword)',
      emoji: '🏪',
      phonetic: 'ee-klee-NEE-kee',
      audioRef: null,
    },
    {
      id: 'ngingahamba_njani',
      target: 'Ngingahamba njani?',
      native: 'How can I get there?',
      literal: 'Ngi-nga-hamba (I can go) + njani (how)',
      emoji: '🚶',
      phonetic: 'ngee-ngah-HAM-bah n-JAH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"I want / need" — Ngifuna ...',
    explanation: "'Ngifuna' is your all-purpose 'I want / I need' opener. Place any noun straight after it — no extra words. 'Ngifuna idokotela.' (doctor). 'Ngifuna amanzi.' (water). 'Ngifuna ukuphumula.' (to rest). For a softer 'please', add 'ngiyacela' at the start: 'Ngiyacela, ngifuna idokotela.'",
    examples: [
      { target: 'Ngifuna idokotela.', native: 'I need a doctor.' },
      { target: 'Ngifuna amanzi.', native: 'I want water.' },
      { target: 'Ngiyacela, ngifuna ikliniki.', native: 'Please, I need a clinic.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the word to its meaning',
      pairs: [
        { left: 'idokotela', right: 'doctor' },
        { left: 'isibhedlela', right: 'hospital' },
        { left: 'ikliniki', right: 'clinic' },
        { left: 'inyanga', right: 'traditional herbalist' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'I need a doctor.',
      correct: ['Ngifuna idokotela', 'Ngifuna idokotela.', 'ngifuna idokotela'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please, I need a clinic"',
      words: ['ngifuna', 'ikliniki.', 'Ngiyacela,'],
      correct: ['Ngiyacela,', 'ngifuna', 'ikliniki.'],
      translation: 'Please, I need a clinic.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right place',
      question: 'You have a deep cut that needs stitches. Which do you ask for?',
      options: [
        { text: 'Isibhedlela (hospital).', correct: true },
        { text: 'Ikliniki (clinic — small, may not stitch).', correct: false },
        { text: 'Inyanga (herbalist).', correct: false },
      ],
      explanation: "Stitches are an isibhedlela job. Ikliniki handles minor things and triage; inyanga is for traditional remedies and is respected for what it does — but for a deep wound, hospital first.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a kombi rank in central Bulawayo. You're not feeling well and need to ask a stranger where to find help.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani, ngiyacela — ngifuna idokotela.', native: 'Hello — please, I need a doctor.', correct: true, feedback: "Greeting first, soft 'ngiyacela', then the request. Textbook polite Ndebele." },
          { target: 'Doctor!', native: '(English, no greeting)', correct: false, feedback: "No greeting, no Ndebele — that's two cultural misses in one breath. Try 'Salibonani, ngifuna idokotela'." },
          { target: 'Ngifuna ukudla.', native: 'I want food.', correct: false, feedback: "That's 'I want food' — different problem. You need 'ngifuna idokotela'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, salibonani. Ikliniki iseduze — phumela ngapha.',
        native: 'Yes, hello. The clinic is nearby — go out this way.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga kakhulu.', native: 'Thank you very much.', correct: true, feedback: "Locked. You greeted, asked, thanked — full Ndebele transactional arc." },
          { target: 'Bye.', native: '(English)', correct: false, feedback: "Use 'Ngiyabonga' — thank you." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Ngifuna' is your power-verb. Whatever you need — say it, get it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need a doctor.', correct: ['Ngifuna idokotela', 'Ngifuna idokotela.', 'ngifuna idokotela'] },
      { prompt: 'hospital', correct: ['isibhedlela', 'Isibhedlela'] },
      { prompt: 'clinic', correct: ['ikliniki', 'Ikliniki'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build three 'ngifuna ___' sentences out loud — one for a doctor, one for water, one for something you actually want today. Then add 'ngiyacela' to one of them.",
    rwenSignoff: "Asking is allowed. Sala kuhle.",
  },

  phase8: {
    scenario: "You're staying with a host family in Bulawayo. You wake up with a steady headache and dizziness — nothing emergency, but you'd like to see a doctor today. You need to ask the host father where the nearest clinic is and request to be taken or directed.",
    rwenRole: "The host father, mid-60s, calm and helpful. He'll happily call his nephew with a car if you ask politely — but he wants you to actually use your isiNdebele to make the request.",
    successCriteria: "User opens with a greeting, uses 'Ngifuna idokotela' or 'Ngifuna ikliniki' clearly, optionally softens with 'ngiyacela', and closes with 'ngiyabonga' when help is offered.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
