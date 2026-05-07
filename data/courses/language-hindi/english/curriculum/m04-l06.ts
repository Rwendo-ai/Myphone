import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-merा-meri',
  module: 4,
  lesson: 6,
  title: 'मेरा / मेरी / मेरे — My',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "If you understand का/की/के, you already know मेरा/मेरी/मेरे (my). Same rule, just with 'me' as the owner. My chair = merī kursī. My table = merā mez. My shoes = mere jūte. The 'my' bends with whatever's mine.",
    culturalNote: "All Hindi possessives follow this pattern — merā/merī/mere (my), terā/terī/tere (your, intimate), uskā/uskī/uske (his/her), hamārā/hamārī/hamāre (our). The endings -ā/-ī/-e are the same dance you've been learning all module.",
  },

  chunks: [
    {
      id: 'mera',
      target: 'मेरा',
      native: 'My (masculine singular)',
      literal: 'merā — for masc sg possessed',
      emoji: '👈',
      phonetic: 'MAY-raa',
      audioRef: null,
    },
    {
      id: 'meri',
      target: 'मेरी',
      native: 'My (feminine, sg or pl)',
      literal: 'merī — for fem possessed',
      emoji: '👈',
      phonetic: 'MAY-ree',
      audioRef: null,
    },
    {
      id: 'mere',
      target: 'मेरे',
      native: 'My (masculine plural)',
      literal: 'mere — for masc pl possessed',
      emoji: '👈',
      phonetic: 'MAY-ray',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'merā / merī / mere — same rule, applied to "my"',
    explanation: "merā (my, masc sg), merī (my, fem), mere (my, masc pl). The ending matches the gender and number of what's yours, not you. My chair (kursī, fem) = merī kursī. My friend who's a man = merā dost. My friends (multiple, masc) = mere dost.",
    examples: [
      { target: 'merā kamrā', native: 'My room (kamrā = masc sg)' },
      { target: 'merī kitāb', native: 'My book (kitāb = fem)' },
      { target: 'mere bachche', native: 'My children (bachche = masc pl)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the "my" form to its agreement',
      pairs: [
        { left: 'merā', right: 'masc sg (my room, my table)' },
        { left: 'merī', right: 'fem (my chair, my book)' },
        { left: 'mere', right: 'masc pl (my shoes, my friends)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the correct "my"',
      sentence: '_____ कुर्सी (my chair)',
      options: ['merī', 'merā', 'mere'],
      correct: 'merī',
      context: 'Kursī is feminine, so use merī.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'My chair',
      correct: ['merī kursī', 'meri kursi', 'Meri kursi', 'Merī kursī'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'my book'? (kitāb is feminine)",
      question: 'My book =',
      options: [
        { text: 'merī kitāb', correct: true },
        { text: 'merā kitāb', correct: false },
        { text: 'mere kitāb', correct: false },
      ],
      explanation: "Kitāb is feminine, so 'my' takes the fem form: merī kitāb.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "This is my table" (yeh merā mez hai)',
      words: ['है', 'यह', 'मेज़', 'मेरा'],
      correct: ['यह', 'मेरा', 'मेज़', 'है'],
      translation: 'This is my table',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'My shoes (masc plural)',
      correct: ['mere jūte', 'mere jute', 'Mere jute', 'Mere jūte'],
    },
  ],

  rwenDialogue: {
    intro: "You're moving into a guest room at a homestay in Rishikesh. The host wants to know which items are yours.",
    lines: [
      {
        speaker: 'npc',
        target: 'आपकी कौन सी चीज़ें हैं?',
        native: 'Which things are yours?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeh merī kursī hai, yeh merā mez hai, aur ye mere jūte hain.', native: 'This is my chair, this is my table, and these are my shoes.', correct: true, feedback: "Three possessions, three different 'my' forms — merī, merā, mere. Native-level." },
          { target: 'Yeh merā kursī hai, yeh merī mez hai.', native: '[swapped genders]', correct: false, feedback: "Swapped. Kursī (fem) needs merī. Mez (masc) needs merā." },
          { target: 'Sab merā hai', native: "Everything is mine (lazy form)", correct: false, feedback: "Try the agreed forms: merī kursī, merā mez, mere jūte." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bilkul. Possession bends with the thing, not with you. You're inside the system now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My chair (fem)', correct: ['merī kursī', 'meri kursi', 'Meri kursi', 'Merī kursī'] },
      { prompt: 'My shoes (masc pl)', correct: ['mere jūte', 'mere jute', 'Mere jute', 'Mere jūte'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk through your home and silently claim three things in Hindi: 'merī ___' (fem), 'merā ___' (masc sg), 'mere ___' (masc pl). Feel the 'my' shift each time.",
    rwenSignoff: "What's yours bends with what it is. Phir milenge.",
  },

  phase8: {
    scenario: "It's the first night of a 10-day yoga retreat in Goa, and the front-desk auntie Sushma-ji is sorting which items belong to which guest. She's set out your suitcase contents on the lobby table — a book, a yoga mat (chataī, fem), a pair of slippers, a phone — and asks you to claim each one in Hindi using the right form of 'my'.",
    rwenRole: "Sushma-ji — a no-nonsense 60-year-old front-desk manager who keeps a clipboard and listens carefully for whether you bend merā/merī/mere with the gender and number of each item, not with you.",
    successCriteria: "User claims items with correctly agreed possessives: 'merī kitāb' (my book, fem), 'merā fone' (my phone, masc sg), 'mere chappal' (my slippers, masc pl), 'merī chataī' (my mat, fem) — at least three different agreement forms used correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
