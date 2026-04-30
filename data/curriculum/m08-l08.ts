import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-kuterera',
  module: 8,
  lesson: 8,
  title: 'Kuterera — To Listen',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Listening is the most underrated language skill. In Shona culture, a good listener is highly respected. 'Tererai' (listen — formal plural) is used by elders before sharing important wisdom. When you hear it, pay attention.",
    culturalNote: "Shona oral culture values listening deeply. Elders don't repeat themselves. Stories are told once. Proverbs are shared and expected to be remembered. 'Kuterera' is an act of respect and readiness to receive wisdom.",
  },

  chunks: [
    {
      id: 'ndinoterera',
      shona: 'Ndinoterera',
      english: 'I listen (habitually)',
      literal: 'I-listen (habitual)',
      emoji: '👂',
      phonetic: 'ndi-no-te-RE-ra',
      audioRef: null,
    },
    {
      id: 'ndiri_kuterera',
      shona: 'Ndiri kuterera',
      english: 'I am listening (right now)',
      literal: 'I-am listening',
      emoji: '🔄',
      phonetic: 'NDI-ri ku-te-RE-ra',
      audioRef: null,
    },
    {
      id: 'tererai',
      shona: 'Tererai',
      english: 'Listen (formal/plural command)',
      literal: 'Listen-you-all',
      emoji: '🔇',
      phonetic: 'te-re-RAI',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-rerai and -rai endings for formal plural commands',
    explanation: "Formal/plural commands add -ai or -rai endings: Tererai (listen, all of you), Garai (sit down, all of you), Endai (go, all of you). These are for addressing groups or elders respectfully. Singular is shorter: Tera (listen), Gara (sit).",
    examples: [
      { shona: 'Tererai', english: 'Listen (you all)' },
      { shona: 'Garai', english: 'Sit down (you all)' },
      { shona: 'Endai', english: 'Go (you all)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the listening phrase to its meaning',
      pairs: [
        { left: 'Ndinoterera', right: 'I listen (habitual)' },
        { left: 'Ndiri kuterera', right: 'I am listening now' },
        { left: 'Tererai', right: 'Listen! (formal, all of you)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are listening right now',
      sentence: 'Ndiri _____ zvakanyatsera.',
      options: ['kuterera', 'kuenda', 'kutaura'],
      correct: 'kuterera',
      context: 'I am listening carefully.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am listening',
      correct: ['Ndiri kuterera', 'ndiri kuterera'],
    },
    {
      type: 'multiple_choice',
      instruction: "An elder is about to speak to a group. What do they say first?",
      question: 'Elder\'s call to attention:',
      options: [
        { text: 'Tererai!', correct: true },
        { text: 'Ona!', correct: false },
        { text: 'Enda!', correct: false },
      ],
      explanation: "'Tererai!' — Listen, all of you! — is the traditional call to attention before an elder shares wisdom.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am listening carefully'",
      words: ['Ndiri', 'kuterera', 'zvakanyatsera.'],
      correct: ['Ndiri', 'kuterera', 'zvakanyatsera.'],
      translation: 'I am listening carefully',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Listen! (formal, to a group)',
      correct: ['Tererai', 'tererai', 'Tererai!', 'tererai!'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's grandfather is about to share a proverb. He calls for attention.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Tererai — ndichakuudzai chinhu chakakosha.',
        english: 'Listen — I will tell you something important.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndiri kuterera, Sekuru. Taurirai.', english: 'I am listening, Grandfather. Please speak.', correct: true, feedback: "Confirmed your attention, used the respectful title, invited him to speak. Perfect response to an elder." },
          { shona: 'Ndiri kuterera', english: 'I am listening', correct: false, feedback: "Good — add the title and invitation: 'Ndiri kuterera, Sekuru. Taurirai.' — I'm listening, Grandfather. Please speak." },
          { shona: 'Zvakanaka', english: "That's good", correct: false, feedback: "Respond to the call — 'Ndiri kuterera, Sekuru. Taurirai.' — I am listening. Please speak." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sekuru says: 'Chara chimwe hachitswanyi inda — one finger cannot kill a louse.' Listen. Remember.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am listening', correct: ['Ndiri kuterera', 'ndiri kuterera'] },
      { prompt: 'Listen! (formal)', correct: ['Tererai', 'tererai', 'Tererai!', 'tererai!'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, before an important conversation, say to yourself 'Ndiri kuterera' (I am listening). Set the intention to truly listen, not just wait for your turn to speak.",
    rwenSignoff: "Tererai — and the wisdom will find you. Famba zvakanaka.",
  },
};

export default lesson;
