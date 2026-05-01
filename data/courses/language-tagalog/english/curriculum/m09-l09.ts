import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Pagtulong sa paglalakbay — Travel help',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you confessed you were lost. Today you ask for the next step — the polite asks that move you forward. 'Pwede po bang pakitulong?' opens a stranger's whole afternoon. 'Pakipakita po sa mapa' makes them point to a map. 'Pakisulat po' gets them to write it down. Three magic 'paki-' verbs.",
    culturalNote: "The 'paki-' prefix in Tagalog is the polite-request marker — it softens an instruction into a favour. 'Bigay' (give) becomes 'pakibigay' (please give). 'Sulat' (write) becomes 'pakisulat' (please write). It's the politest way to ask for anything in Filipino — pair it with 'po' and you can ask anything of anyone.",
  },

  chunks: [
    {
      id: 'pwede_po_bang_pakitulong',
      target: 'Pwede po bang pakitulong?',
      native: 'Could you help me, please? (respectful)',
      literal: 'Possible (respectful) please-help?',
      emoji: '🙏',
      phonetic: 'PWE-de poh bahng pah-kee-TOO-lohng',
      audioRef: null,
    },
    {
      id: 'pakipakita_po_sa_mapa',
      target: 'Pakipakita po sa mapa',
      native: 'Please show me on the map (respectful)',
      literal: 'Please-show (respectful) on the map',
      emoji: '🗺️',
      phonetic: 'pah-kee-pah-KEE-tah poh sah MAH-pah',
      audioRef: null,
    },
    {
      id: 'pakisulat_po',
      target: 'Pakisulat po',
      native: 'Please write it down (respectful)',
      literal: 'Please-write (respectful)',
      emoji: '✍️',
      phonetic: 'pah-kee-SOO-laht poh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Paki- + verb (polite request)',
    explanation: "Slap 'paki-' onto any verb root and it becomes a polite request. 'Tulong' (help) → 'pakitulong' (please help). 'Sulat' (write) → 'pakisulat' (please write). 'Pakita' (show) → 'pakipakita' (please show). Add 'po' for extra warmth.",
    examples: [
      { target: 'Pakitulong po', native: 'Please help (respectful)' },
      { target: 'Pakisulat po', native: 'Please write it down (respectful)' },
      { target: 'Pakipakita po', native: 'Please show me (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the polite ask to its meaning',
      pairs: [
        { left: 'Pwede po bang pakitulong?', right: 'Could you help me, please?' },
        { left: 'Pakipakita po sa mapa', right: 'Please show me on the map' },
        { left: 'Pakisulat po', right: 'Please write it down' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You can't read their fast directions. Ask them to write it down.",
      sentence: '_____ po.',
      options: ['Pakisulat', 'Pakitulong', 'Magkano'],
      correct: 'Pakisulat',
      context: "'Pakisulat po' = please write it (respectful).",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Could you help me, please? (respectful)',
      correct: ['Pwede po bang pakitulong?', 'pwede po bang pakitulong', 'Pwede po bang pakitulong'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "Please show me on the map (respectful)"',
      words: ['mapa', 'po', 'sa', 'Pakipakita'],
      correct: ['Pakipakita', 'po', 'sa', 'mapa'],
      translation: 'Please show me on the map (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "Someone has rattled off directions in fast Tagalog and you got two words. What do you ask?",
      question: 'Pick the right rescue phrase',
      options: [
        { text: 'Pakipakita po sa mapa.', correct: true },
        { text: 'Bayad po', correct: false },
        { text: 'Para po!', correct: false },
      ],
      explanation: "'Pakipakita po sa mapa' (please show me on the map) instantly switches the convo from speech to visual.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Please write it down (respectful)',
      correct: ['Pakisulat po', 'pakisulat po'],
    },
  ],

  rwenDialogue: {
    intro: "You've stopped a passer-by in Vigan to ask the way to Calle Crisologo. They start a long, fast answer. Slow them down — politely.",
    lines: [
      {
        speaker: 'npc',
        target: 'Diretso po, tapos kumanan, tapos kaliwa sa kanto, tapos…',
        native: 'Go straight, then right, then left at the corner, then...',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, pakipakita po sa mapa?', native: 'Excuse me, please show me on the map?', correct: true, feedback: 'Smooth — you saved yourself ten more lefts and rights.' },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: 'Wrong context — they\'re not driving!' },
          { target: 'Magkano po?', native: 'How much?', correct: false, feedback: 'They\'re giving directions, not selling something.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, heto.',
        native: 'Sure, here.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You stopped a runaway answer with one polite ask. Paki- is your best friend in this country.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Could you help me, please? (respectful)', correct: ['Pwede po bang pakitulong?', 'pwede po bang pakitulong', 'Pwede po bang pakitulong'] },
      { prompt: 'Please write it down (respectful)', correct: ['Pakisulat po', 'pakisulat po'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice one 'paki-' phrase out loud today. 'Pakitulong po', 'pakisulat po', 'pakipakita po sa mapa'. Pick one. Say it five times.",
    rwenSignoff: "Salamat — thank you. Bukas ulit, kaibigan.",
  },

  phase8: {
    scenario: "You're in Vigan, Ilocos Sur, trying to get to Calle Crisologo for sunset. A passer-by gives you a long, fast string of Tagalog directions you can barely follow. You need to politely ask her to slow down — either by showing you on the map on your phone or writing the route down on paper.",
    rwenRole: "Aling Tess — local Vigan resident, ~50, friendly but talks fast; will happily switch to pointing on a map or writing it down when you ask politely with 'paki-'.",
    successCriteria: "User uses at least ONE 'paki-' phrase ('pakipakita po sa mapa' OR 'pakisulat po' OR 'pwede po bang pakitulong'). 'Po' is present. User thanks her at the end (e.g., 'Salamat po').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
