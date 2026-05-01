import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'Ilang taon ka na? — Age',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sunday lunch in Quezon City. Tita Mila puts another scoop of rice on your plate and asks, 'Anak, ilang taon ka na?' In Australia that question would feel rude — here it's how she figures out whether to call you 'kuya' or just 'Ben'. Today you answer her warmly.",
    culturalNote: "Asking age in the Philippines is normal, even for older relatives — it's not nosy, it's navigational. Age decides the honorific (kuya/ate for a bit older, tito/tita for parent-age, lolo/lola for grandparents). Many Filipinos lean into modesty: 'bata pa ako' (I'm still young) or 'matanda na ako' (I'm old already) — playful self-deprecation that softens the exchange.",
  },

  chunks: [
    {
      id: 'ilang-taon-ka-na',
      target: 'Ilang taon ka na?',
      native: 'How old are you?',
      literal: 'How-many year you already?',
      emoji: '🎂',
      phonetic: 'ee-LANG ta-ON ka NA',
      audioRef: null,
    },
    {
      id: 'tatlumpu-ako',
      target: 'Tatlumpu ako',
      native: "I'm 30",
      literal: 'Thirty I',
      emoji: '🔢',
      phonetic: 'tat-loom-POO a-KO',
      audioRef: null,
    },
    {
      id: 'bata-pa-ako',
      target: 'Bata pa ako',
      native: "I'm still young",
      literal: 'Young still I',
      emoji: '🌱',
      phonetic: 'BA-ta pa a-KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Taon` + number',
    explanation: "Age uses the structure '[number] taon ako' or '[number] na ako' — 'taon' means year. The little word 'na' means 'already' and adds gentle warmth: 'tatlumpu na ako' = 'I'm 30 already'. For modesty plays, swap the number for 'bata pa' (still young) or 'matanda na' (already old).",
    examples: [
      { target: 'Bente-singko ako', native: "I'm 25" },
      { target: 'Apatnapu na ako', native: "I'm 40 already" },
      { target: 'Matanda na ako', native: "I'm old already (modesty)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Ilang taon ka na?', right: 'How old are you?' },
        { left: 'Tatlumpu ako', right: "I'm 30" },
        { left: 'Bata pa ako', right: "I'm still young" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tita Mila asks your age',
      sentence: 'Ilang ___ ka na?',
      options: ['taon', 'oras', 'tao'],
      correct: 'taon',
      context: "'Taon' = year. 'Oras' = hour, 'tao' = person.",
    },
    {
      type: 'translate',
      instruction: "Type in Tagalog — playful modesty",
      prompt: "I'm still young",
      correct: ['Bata pa ako', 'bata pa ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a new friend their age — put the words in order',
      words: ['ka', 'taon', 'na?', 'Ilang'],
      correct: ['Ilang', 'taon', 'ka', 'na?'],
      translation: 'How old are you?',
    },
    {
      type: 'multiple_choice',
      instruction: "Tita Mila asks your age. You're 32 and want to add a touch of modesty. What do you say?",
      question: 'Choose the warmest reply',
      options: [
        { text: 'Trentay-dos ako, pero bata pa ako sa puso.', correct: true },
        { text: 'Ilang taon ka na?', correct: false },
        { text: 'Galing ako sa Australia.', correct: false },
      ],
      explanation: "Stating the number plus a modest 'bata pa ako sa puso' (still young at heart) is the classic Filipino move.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — your real age, or pick 30',
      prompt: "I'm 30",
      correct: ['Tatlumpu ako', 'tatlumpu ako'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Sunday lunch with your friend's family in Quezon City. Tita Mila, the warm host, leans across the table with a curious smile.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, ilang taon ka na?',
        native: 'Child, how old are you now?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tatlumpu ako, tita. Bata pa ako!', native: "I'm 30, tita. Still young!", correct: true, feedback: 'Perfect — number, honorific, and a playful modesty closer. Very Filipino.' },
          { target: 'Ilang taon ka na?', native: 'How old are you?', correct: false, feedback: "You bounced the question back instead of answering — try giving your age first." },
          { target: 'Ako si tatlumpu.', native: 'I am 30 (using the name marker).', correct: false, feedback: "Don't use 'si' for numbers — 'si' is only for personal names." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, bata ka pa nga!',
        native: 'Oh, you really are still young!',
      },
      {
        speaker: 'rwen',
        rwenLine: "She laughed. That's the whole game — Tagalog age talk is half answer, half charm.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you? (in Tagalog)', correct: ['Ilang taon ka na?', 'ilang taon ka na'] },
      { prompt: "I'm still young (in Tagalog)", correct: ['Bata pa ako', 'bata pa ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age in Tagalog out loud once today: '___ ako'. Then add 'bata pa ako!' just for fun. Modesty is muscle memory here.",
    rwenSignoff: "I'll ask you tomorrow. Ingat lagi — always take care.",
  },

  phase8: {
    scenario: "Sunday lunch at the Reyes family home in Quezon City. You're seated next to Tita Mila, your friend's mum, who has just put kare-kare on your plate. She wants to know your age so she knows what to call you and which of her nephews to introduce you to.",
    rwenRole: "Tita Mila — early 60s, warm Filipino host, will pepper you with caring questions; loves a good 'bata pa ako!' deflection and will tease back with 'matanda na ako!' herself.",
    successCriteria: "User answers Tita's age question with the '[number] ako' structure (or 'bata pa / matanda na ako' modesty version), uses 'tita' as the honorific at least once, and asks her age back politely with 'Kayo po, ilang taon na po kayo?' or similar.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
