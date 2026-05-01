import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Raconter une histoire de famille — Family stories',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Every family has them — the stories that get told at every dinner. 'Mon grand-père was a baker, you know. Every Sunday he'd make croissants for us.' To tell those stories in French, you need a special tense: the imparfait. It paints habit, scene, and memory.",
    culturalNote: "The imparfait is French's tense for 'used to', 'was doing', and 'would (habitually) do'. 'Faisait' = used to do/was doing. 'Disait' = used to say. It's the soft, dreamy tense — perfect for family memory. Endings: -ais, -ait, -ions, -iez, -aient.",
  },

  chunks: [
    {
      id: 'il_y_a_longtemps',
      target: 'Il y a longtemps',
      native: 'Long ago',
      literal: 'It-has long-time',
      emoji: '🕰️',
      phonetic: 'eel ya lohn-TAHN',
      audioRef: null,
    },
    {
      id: 'ma_grand_mere_faisait',
      target: 'Ma grand-mère faisait...',
      native: 'My grandmother used to do/make...',
      literal: 'My grand-mother was-doing/making (imparfait)',
      emoji: '👵',
      phonetic: 'mah grahn-mehr fuh-ZAY',
      audioRef: null,
    },
    {
      id: 'il_dit_toujours',
      target: 'Il dit toujours...',
      native: 'He always says...',
      literal: 'He says always',
      emoji: '🗣️',
      phonetic: 'eel dee too-ZHOOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imparfait — habitual past',
    explanation: "Use imparfait for things that USED to happen, were ONGOING, or were HABITUAL. 'Ma grand-mère faisait des tartes chaque dimanche' = 'My grandmother used to make tarts every Sunday.' You can spot it by endings -ait (he/she), -aient (they). It's English's 'used to' or 'would' (habitual).",
    examples: [
      { target: 'Mon père travaillait à Paris', native: 'My father used to work in Paris' },
      { target: 'Nous allions chez ma tante', native: 'We used to go to my aunt\'s' },
      { target: 'Elle me racontait des histoires', native: 'She used to tell me stories' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Il y a longtemps', right: 'Long ago' },
        { left: 'Ma grand-mère faisait...', right: 'My grandmother used to make...' },
        { left: 'Il dit toujours...', right: 'He always says...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're describing what your grandfather USED TO do every Sunday.",
      sentence: 'Mon grand-père _____ des croissants chaque dimanche.',
      options: ['fait', 'faisait', 'fera'],
      correct: 'faisait',
      context: "'Used to make' = imparfait. 'Fait' is present (he makes), 'fera' is future (he will make).",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Long ago',
      correct: ['Il y a longtemps', 'il y a longtemps'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "My grandmother used to tell me stories."',
      words: ['des', 'racontait', 'me', 'histoires.', 'grand-mère', 'Ma'],
      correct: ['Ma', 'grand-mère', 'me', 'racontait', 'des', 'histoires.'],
      translation: 'My grandmother used to tell me stories.',
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say: 'When I was little, we always went to my aunt's house.'",
      question: 'Which is correct?',
      options: [
        { text: "Quand j'étais petit(e), nous allions toujours chez ma tante.", correct: true },
        { text: "Quand je suis petit(e), nous allons toujours chez ma tante.", correct: false },
        { text: "Quand j'étais petit(e), nous irons chez ma tante.", correct: false },
      ],
      explanation: "Both verbs need imparfait — 'étais' (was) and 'allions' (used to go). The other options mix in present or future, which breaks the memory frame.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My grandmother used to make tarts.',
      correct: ['Ma grand-mère faisait des tartes.', 'ma grand-mère faisait des tartes.', 'Ma grand-mere faisait des tartes.', 'ma grand-mere faisait des tartes.'],
    },
  ],

  rwenDialogue: {
    intro: "Family lunch. Your aunt nudges you: 'Tell us a story about Papi — your late grandfather.' You begin.",
    lines: [
      {
        speaker: 'npc',
        target: 'Raconte-nous une histoire sur Papi.',
        native: 'Tell us a story about Grandpa.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Il y a longtemps, mon grand-père faisait des croissants chaque dimanche.", native: "Long ago, my grandfather used to make croissants every Sunday.", correct: true, feedback: "Beautiful — 'il y a longtemps' opens the memory frame, 'faisait' carries the habit. Pure storytelling French." },
          { target: "Mon grand-père fait des croissants.", native: "My grandfather makes croissants.", correct: false, feedback: "That's present tense — sounds like he still does it. Story tense is imparfait: faisait." },
          { target: "Mon grand-père a fait un croissant hier.", native: "My grandfather made a croissant yesterday.", correct: false, feedback: "That's passé composé — a single past event. For habit/memory, use imparfait: faisait." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah oui... et il disait toujours: "Le secret, c\'est le beurre."',
        native: 'Ah yes... and he always used to say: "The secret is the butter."',
      },
      {
        speaker: 'rwen',
        rwenLine: "She caught your imparfait and matched it: 'disait' (used to say). When the family slips into that tense together, you're sharing memory in French. That's connection.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Long ago (in French)',
        correct: ['Il y a longtemps', 'il y a longtemps'],
      },
      {
        prompt: 'My grandmother used to make tarts. (in French)',
        correct: ['Ma grand-mère faisait des tartes.', 'ma grand-mère faisait des tartes.', 'Ma grand-mere faisait des tartes.', 'ma grand-mere faisait des tartes.'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one thing a grandparent or older relative used to do. Say it in French: 'Mon / Ma ___ faisait ___.' One sentence in imparfait. That's a memory in your second language.",
    rwenSignoff: "Stories are how families survive. À demain.",
  },

  phase8: {
    scenario: "You're at a family wake — your great-uncle has died, and the family is gathered after the burial sharing memories around a long table. Your French cousin asks you to share one story you remember. You need to use imparfait to paint the habitual past — what he used to do, what he always said. Soft, warm, story-tense French.",
    rwenRole: "Cousin Élodie — ~35, gentle, just lost her grandfather. Wants to hear a memory, not a eulogy. Listens carefully, will softly say 'oui, c'est vrai' if your imparfait lands. Uses 'tu te souviens?' a lot ('do you remember?') to invite more.",
    successCriteria: "User opens with a time-frame phrase ('il y a longtemps' OR 'quand j'étais petit(e)' OR 'avant'), AND uses at least ONE imparfait verb (faisait, disait, allait, racontait, etc.) about the relative. Bonus: chains two imparfait verbs in the same memory.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
