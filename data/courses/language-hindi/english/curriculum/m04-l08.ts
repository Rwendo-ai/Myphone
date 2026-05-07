import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-demonstratives',
  module: 4,
  lesson: 8,
  title: 'यह / वह / ये / वे — This, That, These, Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English has four demonstratives: this, that, these, those. Hindi has the same four — यह (yeh), वह (vah), ये (ye), वे (ve) — but the rules are different. यह is for something close. वह is for something farther. And in spoken Hindi, ye/ve often double as 'this/that' too. Today we untangle them.",
    culturalNote: "In everyday spoken Hindi, ye (ये) and vo (वो) frequently replace yeh/vah, especially in Bollywood and Mumbai street speech. Written Hindi tends to be stricter. Both are correct — context decides.",
  },

  chunks: [
    {
      id: 'yeh',
      target: 'यह',
      native: 'This (singular, close)',
      literal: 'yeh — proximal singular',
      emoji: '👇',
      phonetic: 'YEH',
      audioRef: null,
    },
    {
      id: 'vah',
      target: 'वह',
      native: 'That (singular, far)',
      literal: 'vah — distal singular',
      emoji: '👉',
      phonetic: 'VAH',
      audioRef: null,
    },
    {
      id: 'ye_ve',
      target: 'ये / वे',
      native: 'These / Those (plural)',
      literal: 'ye — proximal plural / ve — distal plural',
      emoji: '👥',
      phonetic: 'YAY / VAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Proximal (yeh/ye) vs distal (vah/ve)',
    explanation: "yeh = this (one thing, close). vah = that (one thing, far). ye = these (plural close). ve = those (plural far). The 'y' words are near you; the 'v' words are away. The same demonstrative also functions as 'he/she/it' and 'they' — context tells you which.",
    examples: [
      { target: 'yeh kursī hai', native: 'This is a chair (close, sg)' },
      { target: 'vah mez hai', native: 'That is a table (far, sg)' },
      { target: 'ye laṛke hain', native: 'These are boys (close, pl)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the demonstrative to its meaning',
      pairs: [
        { left: 'yeh (यह)', right: 'This (sg, close)' },
        { left: 'vah (वह)', right: 'That (sg, far)' },
        { left: 've (वे)', right: 'Those (pl, far)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the correct demonstrative',
      sentence: '_____ कुर्सी है (This is a chair, close to you)',
      options: ['yeh', 'vah', 've'],
      correct: 'yeh',
      context: 'For "this" (close singular) use yeh.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'This is a chair',
      correct: ['yeh kursī hai', 'yeh kursi hai', 'Yeh kursi hai', 'Yeh kursī hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'those are tables' (far, plural)?",
      question: 'Those (far) tables are =',
      options: [
        { text: 've mez hain', correct: true },
        { text: 'yeh mez hai', correct: false },
        { text: 'vah mez hai', correct: false },
      ],
      explanation: "Plural distal (those) = ve. Plural also requires hain (not hai).",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "That is a table" (far, sg)',
      words: ['है', 'मेज़', 'वह'],
      correct: ['वह', 'मेज़', 'है'],
      translation: 'That is a table',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'These are boys (close, plural)',
      correct: ['ye laṛke hain', 'ye larke hain', 'Ye larke hain', 'Ye laṛke hain'],
    },
  ],

  rwenDialogue: {
    intro: "You're shopping in a Jaipur bazaar. The shopkeeper has bangles and scarves on two trays — one near you, one across the counter.",
    lines: [
      {
        speaker: 'npc',
        target: 'आप क्या लेंगे?',
        native: 'What will you take?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeh chūṛiyãã aur vah dupaṭṭā.', native: 'These bangles (close) and that scarf (far).', correct: true, feedback: "Proximal for the close tray, distal for the far one. Pinpoint demonstratives." },
          { target: 'Vah chūṛiyãã aur yeh dupaṭṭā.', native: '[swapped distance]', correct: false, feedback: "Swapped. The bangles are close (yeh/ye), the scarf is far (vah)." },
          { target: 'Sab kuch', native: 'Everything (no demonstratives)', correct: false, feedback: "Use the demonstratives to point: 'Ye chūṛiyãã' (these bangles) and 'vah dupaṭṭā' (that scarf)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bilkul. y- words point near you, v- words point away. You're navigating space in Hindi now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'This is a chair', correct: ['yeh kursī hai', 'yeh kursi hai', 'Yeh kursi hai', 'Yeh kursī hai'] },
      { prompt: 'That is a table', correct: ['vah mez hai', 'Vah mez hai', 'vo mez hai', 'Vo mez hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Stand in any room and pick three objects — one near, one far, one in a group. Label them: 'yeh ___ hai', 'vah ___ hai', 'ye ___ hain'. Your hand moves naturally with the demonstrative.",
    rwenSignoff: "y- is here, v- is there. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Sunday afternoon at a flea-market stall at Sunday Bazaar in Delhi. The vendor Rashid-bhai has spread textiles on three different tables — one right in front of you, one across the aisle, and one at the far end of the stall — and he wants you to point out which fabrics interest you using the right demonstrative for each distance.",
    rwenRole: "Rashid-bhai — a 50-year-old textile vendor with sharp ears for grammar, who'll switch to English mid-sentence if you keep saying yeh for things across the room, but smiles broadly when you correctly point with vah/ve at the far table.",
    successCriteria: "User uses yeh/ye for items close to them (the front table), vah/ve for items farther away (the across-aisle and far tables), and uses the plural form (ye/ve) when pointing at multiple items — three different demonstratives mapped to three distances.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
