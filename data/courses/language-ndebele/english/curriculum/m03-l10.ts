import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10',
  module: 3,
  lesson: 10,
  title: 'Telling stories with time',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Today you stitch all of Module 3 together. Numbers, days, parts of the day, clock time, months, seasons, today/tomorrow/yesterday. Three small sentences and you can place an event anywhere in the year. That is how stories begin.",
    culturalNote: "Bulawayo storytellers — at funerals, at family gatherings, on radio call-ins — almost always start with a time anchor. 'Izolo ekuseni...' (yesterday morning...), 'Ngo-Disemba ngokwehlobo...' (in December, in the rainy season...). The time is the doorway you walk the listener through. Master it and your listener relaxes; without it they're guessing when things happen.",
  },

  chunks: [
    {
      id: 'izolo_ekuseni',
      target: 'Izolo ekuseni',
      native: 'Yesterday morning',
      literal: 'yesterday morning',
      emoji: '🌅',
      phonetic: 'ee-ZOH-loh eh-koo-SEH-nee',
      audioRef: null,
    },
    {
      id: 'ngo_lwesibili',
      target: 'NgoLwesibili',
      native: 'On Tuesday',
      literal: 'on-the-second-day',
      emoji: '📅',
      phonetic: 'ngoh-l-weh-see-BEE-lee',
      audioRef: null,
    },
    {
      id: 'ngo_disemba',
      target: 'NgoDisemba ngokwehlobo',
      native: 'In December, in summer',
      literal: 'in-December in-the-summer',
      emoji: '🌧️',
      phonetic: 'ngoh-dee-SEHM-bah ngoh-koo-eh-SHLOH-boh',
      audioRef: null,
    },
    {
      id: 'kusasa_ngo_3',
      target: 'Kusasa ngo-3 ntambama',
      native: 'Tomorrow at 3 in the afternoon',
      literal: 'tomorrow at-three afternoon',
      emoji: '🕒',
      phonetic: 'koo-SAH-sah ngoh-koo-TAH-too n-tahm-BAH-mah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The time-anchor sentence — wide to narrow',
    explanation: "Stack time words from the largest to the smallest scope. Season → month → day → part of day → clock time. You will rarely use all five at once, but knowing the order keeps you natural. 'NgoDisemba, ngoMsombuluko, ekuseni, ngo-7' — December, on a Monday, in the morning, at 7. English does this too ('In December, on Monday morning at 7') — isiNdebele just makes you commit to the same logical order. Drop the anchor at the front of the sentence, then say what happened.",
    examples: [
      { target: 'Izolo ngiyahamba', native: 'Yesterday I was leaving' },
      { target: 'NgoLwesibili kusasa ekuseni', native: 'On Tuesday — tomorrow morning' },
      { target: 'NgoDisemba kushisa kakhulu', native: "In December it's very hot" },
      { target: 'Kusasa ngo-3 ntambama sizahlangana', native: "Tomorrow at 3 in the afternoon we'll meet" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each anchor to its meaning',
      pairs: [
        { left: 'Izolo ekuseni', right: 'Yesterday morning' },
        { left: 'NgoLwesibili', right: 'On Tuesday' },
        { left: 'NgoDisemba ngokwehlobo', right: 'In December, in summer' },
        { left: 'Kusasa ngo-3 ntambama', right: 'Tomorrow at 3 p.m.' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Tomorrow at 7 in the morning"',
      words: ['ekuseni', 'ngo-7', 'Kusasa'],
      correct: ['Kusasa', 'ngo-7', 'ekuseni'],
      translation: 'Tomorrow at 7 in the morning',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Yesterday I was leaving',
      correct: ['Izolo ngiyahamba', 'izolo ngiyahamba', 'Izolo bengihamba', 'izolo bengihamba'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Which of these orders sounds most natural for 'On Monday morning at 8 we will meet'?",
      options: [
        { text: 'NgoMsombuluko ekuseni ngo-8 sizahlangana — day, part-of-day, clock, then verb.', correct: true },
        { text: 'Sizahlangana ngo-8 ekuseni ngoMsombuluko — verb first, then time anchors backwards.', correct: false },
        { text: 'Ekuseni ngo-8 ngoMsombuluko sizahlangana — part-of-day before the day name.', correct: false },
      ],
      explanation: "Wide to narrow: day → part of day → clock time → verb. That's the spine of a clean isiNdebele time sentence.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a family lunch in Bulawayo's Hillside. Your host's daughter, Thando, asks you to tell the story of how you arrived in Zimbabwe. Three sentences, lots of time anchors.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wafika nini eZimbabwe? Sitshele — kancane kancane.',
        native: 'When did you arrive in Zimbabwe? Tell us — slowly, slowly.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'NgoSeptemba, ngoLwesihlanu, ekuseni', native: 'In September, on a Friday, in the morning', correct: true, feedback: "Wide to narrow — month, day, part of day. Thando smiles and leans in." },
          { target: 'Ekuseni ngoSeptemba', native: 'In the morning, in September', correct: false, feedback: "Order matters here. Start wide (month) then go narrow (part of day). 'NgoSeptemba ekuseni' is the natural shape." },
          { target: 'Ngiyahamba', native: 'I am leaving', correct: false, feedback: "Wrong tense and missing the time anchor. She wants when you arrived — start with a month or a day." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kuhle. Wahlangana labani izolo?',
        native: 'Good. Who did you meet yesterday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Izolo ntambama, ngahlangana labangane', native: 'Yesterday afternoon, I met some friends', correct: true, feedback: "Anchor first ('izolo ntambama'), then the action — that's a story-teller's move." },
          { target: 'Lamhla', native: 'Today', correct: false, feedback: "She asked about yesterday. Lead with 'izolo' and add a part-of-day if you can." },
          { target: 'Kusasa', native: 'Tomorrow', correct: false, feedback: "Future, not past. The question was about izolo — yesterday." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hawu! Sokukhuluma okuhle ngolimi lwesiNdebele.',
        native: 'Wow! You are speaking isiNdebele beautifully now.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked her through your whole arrival — month, day, part of day — without flinching. That's what Module 3 was for.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Yesterday morning', correct: ['Izolo ekuseni', 'izolo ekuseni'] },
      { prompt: 'On Tuesday', correct: ['NgoLwesibili', 'ngoLwesibili', 'ngolwesibili'] },
      { prompt: 'Tomorrow at 3 in the afternoon', correct: ['Kusasa ngo-3 ntambama', 'kusasa ngo-3 ntambama'] },
    ],
  },

  mission: {
    title: 'Tell a three-sentence story',
    task: "Out loud, narrate something real that happened to you in the last week. Three sentences. Each one starts with a time anchor: 'Izolo...', 'NgoLwesithathu...', 'Ekuseni...'. Don't worry about the rest of the sentence being perfect — it's the anchor that does the heavy lifting.",
    rwenSignoff: "Module 3 closed. You can now place any event anywhere in the year, and that is how every story is told.",
  },

  phase8: {
    scenario: "Rwen plays Thando, your host's daughter at a Bulawayo family lunch. She asks you three questions: when you arrived in Zimbabwe, what you did yesterday, and what you're planning tomorrow. You answer each with a time anchor at the front, mixing month/day/part-of-day/clock time as appropriate.",
    rwenRole: "Thando, ~22, university student, your host's daughter — bilingual, will switch to English if you panic but rewards every isiNdebele time anchor with warmth",
    successCriteria: "User opened all three answers with a correct time anchor (e.g. 'NgoSeptemba ekuseni', 'Izolo ntambama', 'Kusasa ngo-3'), used at least three different categories from Module 3 across the conversation (numbers, days, months, seasons, today/tomorrow/yesterday, parts of the day, clock times), and demonstrated wide-to-narrow ordering on at least one answer.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
