import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 finale. Nine lessons of building blocks — name, age, job, family, hobbies, languages, home, personality, open questions. Tonight you stitch them together. Sunday lunch in Quezon City, the whole table looking at you, the new face. You stand up. You introduce yourself in Tagalog.",
    culturalNote: "A full Filipino introduction is a small dance. Name with 'si', role and origin without it, a humble fact about your work or family, a personality trait softened with 'medyo', an honest 'konting Tagalog lang' — and crucially, you don't just talk about yourself. You ask back. The two-way flow is what makes it Filipino, not just translated English.",
  },

  chunks: [
    {
      id: 'masaya-akong-makilala',
      target: 'Masaya akong makilala kayo',
      native: "I'm happy to meet you (all)",
      literal: 'Happy I [linker] meet you-respectful',
      emoji: '🤝',
      phonetic: 'ma-SA-ya a-KONG ma-kee-LA-la ka-YO',
      audioRef: null,
    },
    {
      id: 'salamat-sa-pagtanggap',
      target: 'Salamat sa pagtanggap',
      native: 'Thanks for welcoming (me)',
      literal: 'Thanks [marker] welcoming',
      emoji: '🙏',
      phonetic: 'sa-LA-mat sa pag-tang-GAP',
      audioRef: null,
    },
    {
      id: 'ikaw-naman',
      target: 'Ikaw naman?',
      native: 'How about you?',
      literal: 'You also?',
      emoji: '🔄',
      phonetic: 'ee-KAW na-MAN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two-way introduction',
    explanation: "A full Tagalog intro flows: greeting + 'Ako si ___' (name) + role/origin + a hobby/trait + 'konting Tagalog lang' (modesty) + 'masaya akong makilala kayo' (warm close) + 'ikaw naman?' (turn it back). The 'Ikaw naman?' is non-negotiable — it's the move that transforms a monologue into a relationship.",
    examples: [
      { target: 'Ako si Ben, guro ako', native: "I'm Ben, I'm a teacher" },
      { target: 'Masaya akong makilala kayo', native: "I'm happy to meet you all" },
      { target: 'Ikaw naman, ano ang istorya mo?', native: "How about you, what's your story?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Masaya akong makilala kayo', right: "I'm happy to meet you (all)" },
        { left: 'Salamat sa pagtanggap', right: 'Thanks for welcoming (me)' },
        { left: 'Ikaw naman?', right: 'How about you?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Turn the conversation back to them',
      sentence: 'Ikaw ___?',
      options: ['naman', 'pala', 'lang'],
      correct: 'naman',
      context: "'Ikaw naman?' is the standard 'how about you?' — the move that closes a one-way intro.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm happy to meet you all",
      correct: ['Masaya akong makilala kayo', 'masaya akong makilala kayo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Open your introduction warmly — put the words in order',
      words: ['ako', 'si', 'Ben', 'Ako', 'po,'],
      correct: ['Ako', 'po,', 'ako', 'si', 'Ben'],
      translation: 'I [respectful], I am Ben',
    },
    {
      type: 'multiple_choice',
      instruction: "You've just told the Sunday lunch table your name, job, and where you're from. What's the perfect closer?",
      question: 'Choose the warmest finish',
      options: [
        { text: 'Salamat sa pagtanggap. Masaya akong makilala kayo. Ikaw naman po?', correct: true },
        { text: 'Ako si Ben.', correct: false },
        { text: 'Wala pa.', correct: false },
      ],
      explanation: "Thanks + happy-to-meet + ikaw naman = the full Filipino bow. You leave space for them to talk.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — turn it back to them',
      prompt: 'How about you?',
      correct: ['Ikaw naman?', 'ikaw naman'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch in Quezon City. Tita Mila has tapped her glass — everyone looks at you, the visitor. You stand. Time for the full intro.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Magandang hapon po. Ako si Ben, guro ako, galing ako sa Australia. Mahilig ako sa musika, medyo mahiyain, at konting Tagalog lang po. Salamat sa pagtanggap — masaya akong makilala kayo.',
            native: "Good afternoon. I'm Ben, a teacher, from Australia. I love music, a bit shy, and I only speak a little Tagalog. Thanks for welcoming me — happy to meet you all.",
            correct: true,
            feedback: 'Beautiful — every Module 3 pattern, in flow, with respect (po) and modesty. The whole table is leaning in.',
          },
          {
            target: 'Hi! Ako Ben. Galing Australia. Mahilig musika. Ako shy.',
            native: 'Hi! I Ben. From Australia. Fond music. I shy.',
            correct: false,
            feedback: "Missing 'si', 'sa', 'ako', and the linkers. The patterns matter — slow it down and stitch them in.",
          },
          {
            target: 'Mabait ako, masipag ako, matalino ako, masayahin ako!',
            native: "I'm kind, I'm hardworking, I'm smart, I'm cheerful!",
            correct: false,
            feedback: 'Way too much self-praise for a Filipino table — modesty is the move. Pick two-three traits with a softener.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, magaling ka pala mag-Tagalog!',
        native: "Oh, you're really good at Tagalog!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Konti lang po, pero gusto kong matuto pa. Ikaw naman po, ano ang istorya mo?', native: "Just a little, but I want to learn more. How about you, what's your story?", correct: true, feedback: 'Perfect — modest, then turn the table. That is the full Filipino move.' },
          { target: 'Salamat!', native: 'Thanks!', correct: false, feedback: 'Decent, but you missed the chance to keep the door open. Turn it back to them.' },
          { target: 'Mahilig ako sa kape.', native: 'I love coffee.', correct: false, feedback: "She just complimented your Tagalog — answer the compliment first, then redirect." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at you. You walked into a Filipino lunch table and walked out part of the family. Module 3 is yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm happy to meet you all (in Tagalog)", correct: ['Masaya akong makilala kayo', 'masaya akong makilala kayo'] },
      { prompt: 'How about you? (in Tagalog)', correct: ['Ikaw naman?', 'ikaw naman'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Have a full two-way introduction in Tagalog with one person today — voice memo to yourself counts. Name, role, origin, hobby, modest Tagalog level, warm close, then 'ikaw naman?'. The whole module in one breath.",
    rwenSignoff: "Module 3 complete. Salamat sa pagtutulungan — thanks for walking with me. Ingat lagi.",
  },

  phase8: {
    scenario: "Sunday lunch at the Reyes family home in Quezon City. Tita Mila has tapped her glass; the whole table — tito, tita, kuya, ate, pinsan — is looking at you. You're the new face, and they want a proper introduction in Tagalog. Then they will introduce themselves back.",
    rwenRole: "Tita Mila — your warm Sunday-lunch host, early 60s; she leads the round of introductions and gently signals when it's your turn. Other family members chime in with friendly questions after your intro.",
    successCriteria: "User delivers a full two-way introduction: greeting with 'po', name with 'Ako si ___', role + origin, one hobby ('Mahilig ako sa ___' or 'Gusto kong ___'), modesty about Tagalog ('konting Tagalog lang'), warm close ('Masaya akong makilala kayo'), AND turns it back with 'Ikaw naman po?' — then reacts to Tita Mila's answer.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
