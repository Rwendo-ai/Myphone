import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-ka-possession',
  module: 4,
  lesson: 5,
  title: 'का / की / के — Possession',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English has one possessive: 'of' — 'the colour of the chair'. Or 's: 'Ram's chair'. Hindi has THREE forms: का (kā), की (kī), के (ke). Which one you use depends on the gender and number of the thing being possessed — not the owner. Get this right and your Hindi suddenly sounds native.",
    culturalNote: "Hindi possession follows the noun being possessed, not the owner. 'Ram's chair' = 'Rām kī kursī' — Ram of-feminine chair. The kī agrees with kursī (chair, fem), not with Ram. English speakers default to 'kā' for everything; that one habit marks you as a learner.",
  },

  chunks: [
    {
      id: 'ka',
      target: 'का',
      native: "'s / of (masculine singular)",
      literal: 'kā — agrees with masc sg possessed noun',
      emoji: '👨',
      phonetic: 'KAA',
      audioRef: null,
    },
    {
      id: 'ki',
      target: 'की',
      native: "'s / of (feminine, sg or pl)",
      literal: 'kī — agrees with fem possessed noun',
      emoji: '👩',
      phonetic: 'KEE',
      audioRef: null,
    },
    {
      id: 'ke',
      target: 'के',
      native: "'s / of (masculine plural)",
      literal: 'ke — agrees with masc pl possessed noun',
      emoji: '👬',
      phonetic: 'KAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'का/की/के agrees with the POSSESSED noun, not the owner',
    explanation: "The possession marker takes its form from the thing being possessed. Ram's chair (kursī, fem) = Rām kī kursī. Ram's table (mez, masc) = Rām kā mez. Ram's chairs (kursiyãã, fem pl) = Rām kī kursiyãã. Ram's tables (mezeṅ, masc pl) = Rām ke mez. The owner stays the same; the marker bends.",
    examples: [
      { target: 'Rām kā mez', native: "Ram's table (mez = masc → kā)" },
      { target: 'Rām kī kursī', native: "Ram's chair (kursī = fem → kī)" },
      { target: 'Rām ke jūte', native: "Ram's shoes (jūte = masc pl → ke)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to what it agrees with',
      pairs: [
        { left: 'का (kā)', right: 'Masculine singular possessed' },
        { left: 'की (kī)', right: 'Feminine possessed' },
        { left: 'के (ke)', right: 'Masculine plural possessed' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right possession marker',
      sentence: 'राम _____ कुर्सी (Ram\'s chair — kursī is fem)',
      options: ['kī', 'kā', 'ke'],
      correct: 'kī',
      context: 'Kursī is feminine, so the marker is kī.',
    },
    {
      type: 'translate',
      instruction: "Type in Romanized Hindi",
      prompt: "Ram's chair",
      correct: ['Rām kī kursī', 'Ram ki kursi', 'Ram kī kursī', 'Rām ki kursi'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does the possession marker agree with?",
      question: 'Choose the rule:',
      options: [
        { text: 'The thing being possessed (gender + number)', correct: true },
        { text: 'The owner (the person who owns it)', correct: false },
        { text: 'Whichever speaker is comfortable', correct: false },
      ],
      explanation: "The marker bends with the possessed noun, not the owner. Ram's chair (fem chair) = Rām kī kursī even though Ram is masculine.",
    },
    {
      type: 'build_sentence',
      instruction: "Build \"Ram's table\" (Rām kā mez — mez is masc)",
      words: ['मेज़', 'का', 'राम'],
      correct: ['राम', 'का', 'मेज़'],
      translation: "Ram's table",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Ram's shoes (masc plural)",
      correct: ['Rām ke jūte', 'Ram ke jute', 'Ram ke jūte', 'Rām ke jute'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's house in Hyderabad. Your friend's mother points to several items and asks whose they are.",
    lines: [
      {
        speaker: 'npc',
        target: 'यह कुर्सी और यह मेज़ — किसकी हैं?',
        native: "This chair and this table — whose are they?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeh Rām kī kursī hai aur yeh Rām kā mez hai.', native: "This is Ram's chair, and this is Ram's table.", correct: true, feedback: "Two markers, two genders — kī for the feminine chair and kā for the masculine table. Native-level agreement." },
          { target: 'Yeh Rām kā kursī hai aur yeh Rām kī mez hai.', native: '[swapped genders]', correct: false, feedback: "You swapped them. Kursī (fem) needs kī. Mez (masc) needs kā." },
          { target: 'Rām kī', native: "Ram's (no noun)", correct: false, feedback: "Complete the phrase: 'Yeh Rām kī kursī hai' (this is Ram's chair) and 'Yeh Rām kā mez hai' (this is Ram's table)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wāh — kā / kī agreement is one of the trickiest gates in Hindi, and you walked right through it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Ram's chair (chair is feminine)", correct: ['Rām kī kursī', 'Ram ki kursi', 'Ram kī kursī', 'Rām ki kursi'] },
      { prompt: "Ram's table (table is masculine)", correct: ['Rām kā mez', 'Ram ka mez', 'Rām ka mez', 'Ram kā mez'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three things in your house and label them with possession in Hindi — 'merī kursī' (my chair, fem), 'merā mez' (my table, masc), 'mere jūte' (my shoes, masc pl). Notice the marker bending with the noun.",
    rwenSignoff: "Possession bends with what's owned. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Saturday lunch at your colleague Priya's parents' house in Chandigarh. Priya is showing you around the living room and pointing at items belonging to different family members — her father's chair, her mother's books, her brother's shoes — and quizzing you on whether you can name each one with the correctly-gendered possession marker.",
    rwenRole: "Priya — your sharp-eyed 30-year-old colleague who listens for whether you bend kā/kī/ke with the POSSESSED item (not the owner) and laughs warmly when you nail 'pitā jī kī kursī' (father's chair — kī because chair is fem).",
    successCriteria: "User produces 'X kī kursī' (kī for the feminine chair, regardless of who owns it), 'Y kā mez' (kā for the masculine table), and 'Z ke jūte' (ke for plural masculine shoes) — three different markers, each agreeing with the possessed item not the owner.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
