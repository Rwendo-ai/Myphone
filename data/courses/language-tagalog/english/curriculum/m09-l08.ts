import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Naliligaw, pagod — Travel emergencies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Travel goes wrong sometimes. You miss the jeepney stop. You leave your bag on the bench. You have no idea where you are. Three phrases — 'Naliligaw ako', 'Naiwan ko ang bag ko', 'Hindi po ako pamilyar dito' — turn panic into help.",
    culturalNote: "Filipinos respond to a lost foreigner with genuine concern — 'Naliligaw ka po ba?' (Are you lost?) is offered, not asked sarcastically. The honest admission 'Hindi po ako pamilyar dito' (I'm not familiar here) instantly lowers everyone's shoulders and triggers helpfulness. Don't pretend to know — confess and the city opens.",
  },

  chunks: [
    {
      id: 'naliligaw_ako',
      target: 'Naliligaw ako',
      native: "I'm lost",
      literal: '(present-)getting-lost I',
      emoji: '🧭',
      phonetic: 'nah-lee-lee-GAUW ah-koh',
      audioRef: null,
    },
    {
      id: 'naiwan_ko_ang_bag_ko',
      target: 'Naiwan ko ang bag ko',
      native: 'I left my bag',
      literal: 'Was-left-by-me the bag of-me',
      emoji: '🎒',
      phonetic: 'nah-EE-wahn koh ahng bag koh',
      audioRef: null,
    },
    {
      id: 'hindi_po_ako_pamilyar_dito',
      target: 'Hindi po ako pamilyar dito',
      native: "I'm not familiar here (respectful)",
      literal: 'Not (respectful) I familiar here',
      emoji: '🤷',
      phonetic: 'hin-DEE poh ah-koh pah-meel-YAHR dee-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Nali- (present-progressive of "happening to me")',
    explanation: "'Maligaw' = to get lost. The 'nali-' prefix turns it into 'is currently happening to me' — so 'naliligaw ako' = 'I am [in the act of] getting lost'. This pattern shows up with other verbs too: 'naiiwan' = (I'm) being left behind.",
    examples: [
      { target: 'Naliligaw ako', native: "I'm lost" },
      { target: 'Naiiwan ako', native: "I'm being left behind" },
      { target: 'Naiwan ko ang bag ko', native: 'I left my bag' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emergency phrase to its meaning',
      pairs: [
        { left: 'Naliligaw ako', right: "I'm lost" },
        { left: 'Naiwan ko ang bag ko', right: 'I left my bag' },
        { left: 'Hindi po ako pamilyar dito', right: "I'm not familiar here (respectful)" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're spinning in circles in Quiapo with no idea where you are. What do you say?",
      sentence: '_____ ako.',
      options: ['Naliligaw', 'Naiwan', 'Bayad'],
      correct: 'Naliligaw',
      context: "'Naliligaw ako' = I'm lost — present, ongoing.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I left my bag',
      correct: ['Naiwan ko ang bag ko', 'naiwan ko ang bag ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I\'m not familiar here" (respectful)',
      words: ['ako', 'po', 'pamilyar', 'dito', 'Hindi'],
      correct: ['Hindi', 'po', 'ako', 'pamilyar', 'dito'],
      translation: "I'm not familiar here (respectful)",
    },
    {
      type: 'multiple_choice',
      instruction: "You realize on the jeepney that you forgot your bag at the cafe. What do you tell the driver to explain?",
      question: 'Pick the right line',
      options: [
        { text: 'Naiwan ko ang bag ko!', correct: true },
        { text: 'Magcheck-out na po', correct: false },
        { text: 'Magkano po?', correct: false },
      ],
      explanation: "'Naiwan ko ang bag ko' = 'I left my bag (behind)'. The 'naiwan' tells him it was unintentional.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: "I'm not familiar here",
      correct: ['Hindi po ako pamilyar dito', 'hindi po ako pamilyar dito', 'Hindi ako pamilyar dito po'],
    },
  ],

  rwenDialogue: {
    intro: "You've been walking for 20 minutes in Intramuros and have no idea where you are. A man with a kalesa horse smiles at you. Confess.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, naliligaw ako. Hindi po ako pamilyar dito.', native: "Excuse me, I'm lost. I'm not familiar here.", correct: true, feedback: 'Honest, polite, helpful trigger. He grins.' },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: "He's not driving — he's standing!" },
          { target: 'Susi ng kuwarto', native: 'Room key', correct: false, feedback: 'Wrong context entirely.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Saan po kayo pupunta?',
        native: 'Where are you going, sir/ma\'am?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Confessing 'naliligaw ako' didn't shame you — it unlocked his whole memory of the city. That's how the Philippines works.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm lost (in Tagalog)", correct: ['Naliligaw ako', 'naliligaw ako'] },
      { prompt: 'I left my bag (in Tagalog)', correct: ['Naiwan ko ang bag ko', 'naiwan ko ang bag ko'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorize 'Naliligaw ako' until you can say it sleep-deprived in a foreign airport. It's the one phrase that summons help anywhere in the Philippines.",
    rwenSignoff: "Wala kang dapat ikahiya — nothing to be ashamed of. Bukas ulit.",
  },

  phase8: {
    scenario: "You've been walking through Intramuros, Manila for 25 minutes trying to find Fort Santiago. You're hot, your phone died, and nothing looks like the map you remember. You see a kalesa driver standing by his horse, chewing on a piece of mango. He notices you turning in circles. You need to admit you're lost and ask for help — politely.",
    rwenRole: "Mang Tonyo — kalesa driver, ~55, grew up in Intramuros, knows every alley; warmly helpful when you confess you're lost, gives clear landmark-based directions back.",
    successCriteria: "User says 'Naliligaw ako' AND 'Hindi po ako pamilyar dito' (in either order). 'Po' appears at least once. User accepts or follows up on Mang Tonyo's directions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
