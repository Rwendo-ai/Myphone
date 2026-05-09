import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06',
  module: 10,
  lesson: 6,
  title: 'Sequence words — kuqala, bese, ekugcineni',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Kuqala — first. Bese — then. Ekugcineni — finally. Three little words that turn a list of facts into a story. Yesterday you had verbs. Today you get the joints that connect them.",
    culturalNote: "Ndebele storytellers use sequence words as audible breath-marks. 'Bese' is the storyteller's pause — a beat of suspense before the next thing happens. Skilled tellers can stretch a 'bese…' for two full seconds, eyes wide, while the children lean forward. Sequence is rhythm, not just grammar.",
  },

  chunks: [
    {
      id: 'kuqala',
      target: 'kuqala',
      native: 'first / at the start',
      literal: 'ku- + qala (begin)',
      emoji: '1️⃣',
      phonetic: 'koo-[c-click… no, pure k] -KAH-lah',
      audioRef: null,
    },
    {
      id: 'bese',
      target: 'bese',
      native: 'then / and so',
      literal: 'narrative bridge — adds the next event',
      emoji: '➡️',
      phonetic: 'BEH-seh',
      audioRef: null,
    },
    {
      id: 'emva_kwalokho',
      target: 'emva kwalokho',
      native: 'after that',
      literal: 'emva (behind/after) + kwalokho (of that)',
      emoji: '🔁',
      phonetic: 'eh-MVAH kwah-LOH-koh',
      audioRef: null,
    },
    {
      id: 'ekugcineni',
      target: 'ekugcineni',
      native: 'finally / in the end',
      literal: 'e- + uku- + gcina (finish) + -eni (locative)',
      emoji: '🏁',
      phonetic: 'eh-koo-g[c-click]EE-neh-nee',
      audioRef: null,
    },
    {
      id: 'kanti',
      target: 'kanti',
      native: 'meanwhile / but actually (the twist word)',
      literal: 'used when the story flips — "meanwhile, unbeknown to him…"',
      emoji: '🔄',
      phonetic: 'KAHN-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Storyteller\'s skeleton sentence',
    explanation: "Drop sequence words at the start of each beat: 'Kuqala… Bese… Emva kwalokho… Ekugcineni…'. That's the spine of a four-beat story. 'Kanti' goes anywhere you want a twist — 'kanti, the hare was already asleep'. Use 'bese' the most; it's the everyday narrative connector.",
    examples: [
      { target: 'Kuqala wahamba.', native: 'First, he went.' },
      { target: 'Bese wabona umfudu.', native: 'Then he saw the tortoise.' },
      { target: 'Ekugcineni umfudu waphumelela.', native: 'Finally, the tortoise won.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each connector to its English',
      pairs: [
        { left: 'kuqala', right: 'first / at the start' },
        { left: 'bese', right: 'then / and so' },
        { left: 'emva kwalokho', right: 'after that' },
        { left: 'ekugcineni', right: 'finally' },
        { left: 'kanti', right: 'meanwhile / but actually' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right connector',
      sentence: 'Wagijima umvundla. ____ , wabona isihlahla, walala phansi kwaso.',
      options: ['Bese', 'Ekugcineni', 'Kuqala'],
      correct: 'Bese',
      context: '"Then" he saw a tree — bese is the everyday next-thing connector.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the twist word',
      question: 'A storyteller wants to flip the story: "MEANWHILE, the tortoise was already at the finish line." Which word does she use?',
      options: [
        { text: 'kanti', correct: true },
        { text: 'kuqala', correct: false },
        { text: 'ekugcineni', correct: false },
      ],
      explanation: "'Kanti' carries the surprise — the unseen-by-the-character truth that the audience now learns.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Finally, the tortoise won."',
      words: ['waphumelela', 'umfudu', 'Ekugcineni'],
      correct: ['Ekugcineni', 'umfudu', 'waphumelela'],
      translation: 'Finally, the tortoise won.',
    },
  ],

  rwenDialogue: {
    intro: "Gogo retells the hare-and-tortoise — but this time slowly, putting a sequence word at the start of every beat. Listen for the four joints.",
    lines: [
      { speaker: 'npc', target: 'Kuqala bavumelana ngomjaho.', native: 'First, they agreed on a race.' },
      { speaker: 'npc', target: 'Bese umvundla wagijima kakhulu.', native: 'Then the hare ran fast.' },
      { speaker: 'npc', target: 'Kanti umfudu wayehamba kancane, kodwa engemi.', native: 'Meanwhile, the tortoise walked slowly, but never stopping.' },
      { speaker: 'npc', target: 'Emva kwalokho umvundla walala phansi kwesihlahla.', native: 'After that, the hare slept under the tree.' },
      { speaker: 'npc', target: 'Ekugcineni umfudu waphumelela.', native: 'Finally, the tortoise won.' },
      { speaker: 'rwen', rwenLine: "Five sentences. Five connectors. Same old story — but the joints make it a story instead of a list." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kanti', native: 'meanwhile (twist)', correct: true, feedback: "Yes — 'kanti' is the audience-aimed surprise word." },
          { target: 'Kuqala', native: 'first', correct: false, feedback: "'Kuqala' opens. 'Kanti' twists." },
          { target: 'Ekugcineni', native: 'finally', correct: false, feedback: "'Ekugcineni' closes. 'Kanti' is the mid-story twist." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Tomorrow you tell your own story using these connectors. Today, you just learn the joints.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Which word means "first / at the start"?', correct: ['kuqala', 'Kuqala'] },
      { prompt: 'Which word means "then / and so"?', correct: ['bese', 'Bese'] },
      { prompt: 'Which word means "finally / in the end"?', correct: ['ekugcineni', 'Ekugcineni'] },
    ],
  },

  mission: {
    title: "Tell your morning in four beats",
    task: "Out loud, in any mix of isiNdebele and English: tell your morning today in EXACTLY four sentences, each starting with one of the four connectors — Kuqala, Bese, Emva kwalokho, Ekugcineni. Notice how shaping the story makes it feel bigger.",
    rwenSignoff: "Stories aren't long. They're well-jointed. Sala kuhle.",
  },

  phase8: {
    scenario: "Rwen asks you to tell him about something that happened yesterday — anything — using the four-connector skeleton: Kuqala, Bese, Emva kwalokho, Ekugcineni. He'll prompt you forward at each beat with 'kwabe sekuthini?' (and then what?).",
    rwenRole: "Curious friend — listens, prompts you to the next beat, gently corrects if you forget a connector.",
    successCriteria: "User used at least three of the four sequence connectors (kuqala, bese, emva kwalokho, ekugcineni) in their correct positions in a 4-beat narrative.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
