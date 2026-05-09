import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l01',
  module: 11,
  lesson: 1,
  title: 'Conjunctions — Linking Your Thoughts',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Until now your sentences have been single thoughts, side by side. Today you stitch them together. Kanye, kanjalo, kanti, kodwa — four little words and your isiNdebele suddenly sounds like a person, not a phrasebook.",
    culturalNote: "Ndebele speakers value flow in conversation. A speaker who can hold two ideas in one breath — 'I went to the market, but it was closed' — is heard as steady-minded. Choppy speech reads as anxious. Conjunctions are how you slow your sentences down without saying less.",
  },

  chunks: [
    {
      id: 'kanye',
      target: 'kanye',
      native: 'with / together with / and (people)',
      literal: 'together-with',
      emoji: '🤝',
      phonetic: 'KAH-nyeh',
      audioRef: null,
    },
    {
      id: 'kanjalo',
      target: 'kanjalo',
      native: 'similarly / likewise / also so',
      literal: 'in-that-same-way',
      emoji: '🔁',
      phonetic: 'kahn-JAH-loh',
      audioRef: null,
    },
    {
      id: 'kanti',
      target: 'kanti',
      native: 'whereas / on the other hand',
      literal: 'while-actually',
      emoji: '⚖️',
      phonetic: 'KAHN-tee',
      audioRef: null,
    },
    {
      id: 'kodwa',
      target: 'kodwa',
      native: 'but / however',
      literal: 'but',
      emoji: '🚧',
      phonetic: 'KOH-dwah',
      audioRef: null,
    },
    {
      id: 'kanye_lami',
      target: 'kanye lami',
      native: 'with me / together with me',
      emoji: '👥',
      phonetic: 'KAH-nyeh LAH-mee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Linking two ideas with one connector',
    explanation: "Conjunctions sit BETWEEN two clauses. Build clause A, drop the connector, then build clause B. 'Kodwa' (but) reverses direction. 'Kanjalo' (similarly) continues direction. 'Kanti' (whereas) contrasts gently — softer than 'kodwa'. 'Kanye' joins people or things together.",
    examples: [
      { target: 'Ngiyahamba kodwa ngibuya masinyane.', native: 'I am leaving but I will return soon.' },
      { target: 'Mina ngilambile, kanjalo lawe.', native: 'I am hungry, and you are too.' },
      { target: 'Yena uyasebenza, kanti mina ngiyaphumula.', native: 'He is working, whereas I am resting.' },
      { target: 'Ngihamba kanye lomngane wami.', native: 'I am going with my friend.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each connector to its job',
      pairs: [
        { left: 'kodwa', right: 'but / however' },
        { left: 'kanjalo', right: 'similarly / likewise' },
        { left: 'kanti', right: 'whereas / on the other hand' },
        { left: 'kanye', right: 'with / together with' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the connector that fits.',
      sentence: 'Ngifuna ukuhamba ____ kuyana lina.',
      options: ['kodwa', 'kanjalo', 'kanye'],
      correct: 'kodwa',
      context: '"I want to go BUT it is raining." Direction reverses — choose the contrast word.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am going with my friend"',
      words: ['kanye', 'lomngane', 'Ngihamba', 'wami'],
      correct: ['Ngihamba', 'kanye', 'lomngane', 'wami'],
      translation: 'I am going with my friend.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the right connector',
      question: 'You want to say: "She is reading, whereas I am cooking." Which connector?',
      options: [
        { text: 'kanti — gentle contrast between two ongoing things', correct: true },
        { text: 'kodwa — too strong, sounds like an objection', correct: false },
        { text: 'kanjalo — that means "similarly", wrong direction', correct: false },
      ],
      explanation: "'Kanti' is the soft contrast — two things happening side by side, slightly different. 'Kodwa' is a harder 'but' that reverses direction. Choose 'kanti' when you are observing, 'kodwa' when you are objecting.",
    },
  ],

  rwenDialogue: {
    intro: "You're walking into Bulawayo CBD with your colleague Sipho. You want to buy a SIM card; he wants tea. The day is warm but the wind is picking up.",
    lines: [
      { speaker: 'npc', target: 'Siyaphi manje?', native: 'Where are we going now?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mina ngifuna i-SIM, kanti wena ufuna itiye.', native: 'I want a SIM, whereas you want tea.', correct: true, feedback: 'Beautiful — "kanti" holds two parallel desires gently. That is mature isiNdebele.' },
          { target: 'Mina ngifuna i-SIM kodwa wena ufuna itiye.', native: 'I want a SIM but you want tea.', correct: false, feedback: '"Kodwa" works but reads slightly confrontational — like you are objecting to his tea. "Kanti" is the kinder choice here.' },
          { target: 'Ngifuna i-SIM. Ufuna itiye.', native: 'I want a SIM. You want tea.', correct: false, feedback: 'Two clipped sentences. Grammatically fine, but a connector would make this flow.' },
        ],
      },
      { speaker: 'npc', target: 'Kulungile. Sihambe kanye.', native: "It's fine. Let's go together." },
      { speaker: 'rwen', rwenLine: 'He used "kanye" — together. The plan is now joint, not split.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, sihambe kanye. Kodwa kuyabanda — masinyane.', native: 'Yes, let us go together. But it is getting cold — quickly.', correct: true, feedback: 'Two connectors in a row. "Kanye" for togetherness, "kodwa" for the genuine objection (the cold). You are linking like a native.' },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: 'Safe, but you are not stitching ideas. Try a connector.' },
        ],
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How do you say "but / however"?', correct: ['kodwa', 'Kodwa'] },
      { prompt: 'How do you say "similarly / likewise"?', correct: ['kanjalo', 'Kanjalo'] },
      { prompt: 'How do you say "whereas / on the other hand"?', correct: ['kanti', 'Kanti'] },
      { prompt: 'How do you say "with / together with"?', correct: ['kanye', 'Kanye'] },
    ],
  },

  mission: {
    title: 'Stitch two thoughts',
    task: "Today, the next time you are about to say two short isiNdebele sentences in a row, glue them with a connector. Even out loud to yourself. 'Ngiyahamba, kodwa ngibuya' (I am leaving, but I will return). The shape will start to feel natural.",
    rwenSignoff: "A connector turns two children's blocks into one bridge.",
  },

  phase8: {
    scenario: "You and a Ndebele-speaking friend are planning a Saturday in Bulawayo. You want to go to the market; they want to visit family. You discuss what to do — using kanye, kanjalo, kanti, or kodwa at least three times across the conversation.",
    rwenRole: "Thandi — your warm, easygoing friend in her 30s, will gently push you to use connectors instead of choppy single sentences.",
    successCriteria: "User used at least three of {kanye, kanjalo, kanti, kodwa} correctly, with two clauses each, and ended with a coherent joint plan.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
