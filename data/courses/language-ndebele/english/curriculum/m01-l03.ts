import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03',
  module: 1,
  lesson: 3,
  title: 'The Q-click — palatal',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday, the soft tsk. Today: the loud pop. The q-click is the one people notice from across the room. Suck your tongue against the roof of your mouth, then release. Pop.",
    culturalNote: "Iqaqa — the polecat — is famous in Matabeleland folklore for its smell, but its name is famous for its sound: two q-clicks back-to-back. Children practise saying 'iqaqa' the way English-speaking kids practise tongue twisters. If you can say it, you've earned the click.",
  },

  chunks: [
    {
      id: 'umuqo',
      target: 'umuqo',
      native: 'a code, a system',
      literal: 'umu- (noun prefix) + qo (rule, code)',
      emoji: '🧭',
      phonetic: 'oo-moo-[q-click]oh',
      audioRef: null,
    },
    {
      id: 'iqaqa',
      target: 'iqaqa',
      native: 'polecat / striped skunk',
      literal: 'i- + qaqa',
      emoji: '🦨',
      phonetic: 'ee-[q-click]AH-[q-click]ah',
      audioRef: null,
    },
    {
      id: 'iqola',
      target: 'iqola',
      native: 'a thief, a swindler',
      literal: 'i- + qola',
      emoji: '🦹',
      phonetic: 'ee-[q-click]OH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Q-click — palatal pop',
    explanation: "The q-click is louder, sharper, and higher in the mouth than the c-click. Press the body of your tongue firmly against the hard roof of your mouth, then snap it down. The release pops like a champagne cork. Two q's in a row (iqaqa) means two pops in a row — don't soften the second one.",
    examples: [
      { target: 'umuqo', native: 'a code, system' },
      { target: 'iqaqa', native: 'polecat' },
      { target: 'iqola', native: 'a thief' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each q-click word to its meaning',
      pairs: [
        { left: 'umuqo', right: 'a code or system' },
        { left: 'iqaqa', right: 'polecat' },
        { left: 'iqola', right: 'a thief' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Where does your tongue touch when you make the q-click?',
      options: [
        { text: 'The hard roof of the mouth (palate).', correct: true },
        { text: 'The back of the front teeth.',         correct: false },
        { text: 'The side teeth (molars).',             correct: false },
      ],
      explanation: "The q-click is palatal — the body of the tongue presses the hard palate, then snaps down for a sharp pop.",
    },
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'iqaqa',
      correct: ['polecat', 'a polecat', 'skunk', 'a skunk', 'striped skunk'],
    },
    {
      type: 'build_sentence',
      instruction: 'Put the words in order to mean: "The thief ran away."',
      words: ['baleka', 'iqola', 'lim'],
      correct: ['iqola', 'lim', 'baleka'],
      translation: 'The thief, it ran away.',
    },
  ],

  rwenDialogue: {
    intro: 'On a kombi from Bulawayo to Plumtree, a passenger is gossiping about an incident at the market.',
    lines: [
      { speaker: 'npc',  target: 'Iqola lithathe imali yami!', native: "The thief took my money!" },
      { speaker: 'rwen', rwenLine: "Hear the q-click — ee-[q-click]OH-lah. Sharper than yesterday's c. Higher up in the mouth." },
      { speaker: 'npc',  target: 'Lobu yi-umuqo wabantwana abadala.',  native: "This is the code of the older boys." },
      { speaker: 'rwen', rwenLine: "Umuqo — a code, a system. The way things are done. Try it: oo-moo-[q-click]oh." },
      { speaker: 'npc',  target: 'Iqaqa linuka kakhulu!',               native: "The polecat smells terrible!" },
      { speaker: 'rwen', rwenLine: "Two pops in iqaqa. Two. Don't let the second one go quiet." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'What does "iqola" mean?',                              correct: ['a thief', 'thief', 'swindler', 'a swindler'] },
      { prompt: 'Which click is in iqaqa (c, q, or x)?',                correct: ['q', 'Q'] },
      { prompt: 'Where does the tongue touch for the q-click — teeth, palate, or sides?', correct: ['palate', 'roof', 'roof of mouth', 'hard palate'] },
    ],
  },

  mission: {
    title: 'The iqaqa challenge',
    task: "Say 'iqaqa' five times fast. Both q-clicks must be loud and sharp — no soft second click. Record yourself if you can. Listen back: are both pops equally strong?",
    rwenSignoff: "The q-click feels strange in your mouth at first. By tomorrow it will feel less strange. By next week, normal.",
  },

  phase8: {
    scenario: "Rwen plays the role of a market gossip in Bulawayo, telling you a short story about a thief (iqola) — you have to repeat the q-click words after him.",
    rwenRole: "Friendly market gossip, ~45yo, leans in to whisper but always overdoes the q-click for emphasis",
    successCriteria: "User produced a recognisable q-click on at least one of: iqola, iqaqa, umuqo.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
