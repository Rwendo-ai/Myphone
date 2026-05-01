import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Dalawampu hanggang sandaan — 20 to 100',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Bigger numbers, same logic. Tens in Tagalog are built with the suffix `-pu` — `dalawampu` (20) is literally `dalawa` (2) + `-ng` + `pu` (ten). Once you spot the pattern, you can count to a hundred.",
    culturalNote: "Filipinos use these tens-numbers for counting houses on a street, ages of older relatives, and quantities at the palengke. `Sandaan` (100) often shows up rounded — `sandaang piso` (100 pesos) is the price of half a kilo of pork belly in 2026 Manila.",
  },

  chunks: [
    {
      id: 'dalawampu',
      target: 'Dalawampu',
      native: 'Twenty',
      literal: 'two-tens',
      emoji: '2️⃣0️⃣',
      phonetic: 'da-la-WAM-poo',
      audioRef: null,
    },
    {
      id: 'limampu',
      target: 'Limampu',
      native: 'Fifty',
      literal: 'five-tens',
      emoji: '5️⃣0️⃣',
      phonetic: 'lee-MAM-poo',
      audioRef: null,
    },
    {
      id: 'sandaan',
      target: 'Sandaan',
      native: 'One hundred',
      literal: 'one-hundred',
      emoji: '💯',
      phonetic: 'san-DA-an',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -pu tens suffix',
    explanation: 'Take the native number, add `-ng pu` (or `m-pu`/`-pu`): dalawa→dalawampu (20), tatlo→tatlumpu (30), apat→apatnapu (40), lima→limampu (50), anim→animnapu (60), pito→pitumpu (70), walo→walumpu (80), siyam→siyamnapu (90). Then `sandaan` = 100.',
    examples: [
      { target: 'Tatlumpu', native: 'Thirty' },
      { target: 'Pitumpu', native: 'Seventy' },
      { target: 'Siyamnapu', native: 'Ninety' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog number to its English meaning',
      pairs: [
        { left: 'Dalawampu', right: 'Twenty' },
        { left: 'Limampu', right: 'Fifty' },
        { left: 'Sandaan', right: 'One hundred' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your tita is fifty years old. Fill in the gap.',
      sentence: '_____ taong gulang si Tita Marissa.',
      options: ['Limampu', 'Sandaan', 'Dalawampu'],
      correct: 'Limampu',
      context: 'For ages, Tagalog usually mixes — but `limampung taong gulang` (50 years old) is the most natural native form.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'One hundred',
      correct: ['Sandaan', 'sandaan', 'Isandaan', 'isandaan'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "House number twenty"',
      words: ['bahay', 'numero', 'dalawampu'],
      correct: ['Bahay', 'numero', 'dalawampu'],
      translation: 'House number twenty.',
    },
    {
      type: 'multiple_choice',
      instruction: "You're telling someone your dad is sixty.",
      question: "How do you say 'sixty years old'?",
      options: [
        { text: 'animnapung taong gulang', correct: true },
        { text: 'sandaang taong gulang', correct: false },
        { text: 'dalawampung taong gulang', correct: false },
      ],
      explanation: "Anim (six) + -napu = animnapu (60). Sixty years is a real Filipino milestone — many lolos retire around then.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Twenty',
      correct: ['Dalawampu', 'dalawampu'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting your barangay captain. He asks where you live.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan ka nakatira, anak?',
        native: 'Where do you live, child?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sa bahay numero limampu po', native: 'At house number fifty (polite)', correct: true, feedback: 'Clear — and `po` keeps the respect for an elder official.' },
          { target: 'Sandaan ang bahay', native: 'The house is one hundred', correct: false, feedback: 'Grammatically off — `numero limampu` (number 50) is how Filipinos give house numbers.' },
          { target: 'Dalawa lamang', native: 'Only two', correct: false, feedback: "He asked where, not how many." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, sa kanto pala. Salamat.',
        native: 'Ah, on the corner — thank you.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Limampu — fifty. You can now count to a hundred and label your house. Quietly powerful.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Twenty (in Tagalog)', correct: ['Dalawampu', 'dalawampu'] },
      { prompt: 'One hundred (in Tagalog)', correct: ['Sandaan', 'sandaan', 'Isandaan', 'isandaan'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Say your age and your house number out loud in Tagalog today. Use the `-pu` suffix at least once.',
    rwenSignoff: "Hanggang bukas, kaibigan.",
  },

  phase8: {
    scenario: "You're filling out a form at the barangay hall. Kapitan Boy (the barangay captain) needs your age and house number to register you. He's friendly but writes everything in Tagalog.",
    rwenRole: 'Kapitan Boy — barangay captain, ~55yo, formal but warm; he asks `ilang taon ka na?` (how old are you?) and `ano ang numero ng bahay mo?` (what is your house number?).',
    successCriteria: 'User states an age and a house number using a tens number in the 20-100 range with the correct `-pu` form (e.g., `dalawampu`, `limampu`, `pitumpu`).',
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
