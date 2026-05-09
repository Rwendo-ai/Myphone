import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l06',
  module: 11,
  lesson: 6,
  title: 'Idioms Part 1 — Cultural Roots',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today you stop translating. Idioms are where a language stops being words and starts being a way of seeing. Drop one of these and a Ndebele speaker will tilt their head and smile — you spoke their thinking, not just their grammar.",
    culturalNote: "Ndebele idioms are agricultural, ancestral, and animal-shaped — they come from a culture that watched cattle, walked between homesteads, and held memory across generations. Using one shows you have not just learned isiNdebele; you have started to think a little bit Ndebele. Use sparingly at first — one idiom in a conversation lands; three in a row sounds rehearsed.",
  },

  chunks: [
    {
      id: 'inhliziyo_yami',
      target: 'inhliziyo yami iyajabula',
      native: 'my heart is happy (I am genuinely glad)',
      literal: 'heart my it-rejoices',
      emoji: '❤️',
      phonetic: 'in-hlee-ZEE-yoh YAH-mee ee-yah-jah-BOO-lah',
      audioRef: null,
    },
    {
      id: 'ukuhamba_nezikhathi',
      target: 'ukuhamba nezikhathi',
      native: 'to move with the times',
      literal: 'to-walk with-the-times',
      emoji: '🕰️',
      phonetic: 'oo-koo-HAHM-bah neh-zee-KAH-thee',
      audioRef: null,
    },
    {
      id: 'isandla_sigeza',
      target: 'isandla sigeza esinye',
      native: 'one hand washes the other (we depend on each other)',
      literal: 'hand washes the-other',
      emoji: '🤲',
      phonetic: 'ee-SAHN-dlah see-GEH-zah eh-SEE-nyeh',
      audioRef: null,
    },
    {
      id: 'kawukho_umoya',
      target: 'kawukho umoya',
      native: 'there is no spirit (no atmosphere / dead vibe)',
      literal: 'there-is-not spirit',
      emoji: '🪦',
      phonetic: 'kah-oo-KHOH oo-MOH-yah',
      audioRef: null,
    },
    {
      id: 'inkomo_zibuya',
      target: 'inkomo zibuya kade',
      native: 'the cattle return slowly (good things take time)',
      literal: 'cattle they-return slowly',
      emoji: '🐄',
      phonetic: 'in-KOH-moh zee-BOO-yah KAH-deh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Idioms have a feel before they have a meaning',
    explanation: "An idiom is not parsed word-by-word — it is felt. 'Inhliziyo yami iyajabula' is not 'my heart rejoices' (that is the literal); it is the warm phrase you say when something good has happened that you cannot quite name. Use idioms in moments of feeling, not in arguments. Reach for them when prose is failing you.",
    examples: [
      { target: 'Inhliziyo yami iyajabula ukukubona.', native: "My heart rejoices to see you. (genuine warmth on reunion)" },
      { target: 'Kufanele sihambe nezikhathi.', native: 'We must move with the times.' },
      { target: 'Isandla sigeza esinye — ngiyabonga.', native: 'One hand washes the other — thank you. (mutual aid)' },
      { target: 'Inkomo zibuya kade — siza ubekezele.', native: 'The cattle return slowly — please be patient.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the idiom to its real meaning',
      pairs: [
        { left: 'Inhliziyo yami iyajabula', right: 'I am genuinely glad' },
        { left: 'Ukuhamba nezikhathi', right: 'To move with the times' },
        { left: 'Isandla sigeza esinye', right: 'We depend on each other' },
        { left: 'Inkomo zibuya kade', right: 'Good things take time' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the idiom that fits',
      sentence: 'Ungakhathazeki — ____.',
      options: ['inkomo zibuya kade', 'kawukho umoya', 'inhliziyo yami iyajabula'],
      correct: 'inkomo zibuya kade',
      context: '"Do not worry — good things take time." The cattle idiom about patience.',
    },
    {
      type: 'translate',
      instruction: 'Translate the feeling, not the words',
      prompt: 'My heart is happy to see you.',
      correct: ['Inhliziyo yami iyajabula ukukubona', 'inhliziyo yami iyajabula ukukubona'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right idiom for the moment',
      question: "You walk into a party and it is flat — no music, people on their phones. A friend asks how it is. What do you say?",
      options: [
        { text: 'Kawukho umoya. (There is no spirit / dead vibe.)', correct: true },
        { text: 'Inkomo zibuya kade. (The cattle return slowly.)', correct: false },
        { text: 'Isandla sigeza esinye. (One hand washes the other.)', correct: false },
      ],
      explanation: "'Kawukho umoya' is exactly the Ndebele way to say a gathering has no atmosphere. The cattle idiom is for patience; the hands idiom is for mutual aid. Idioms must match the moment.",
    },
  ],

  rwenDialogue: {
    intro: "You have not seen your old friend Thembinkosi for three years. He arrives at your door unannounced. You open it.",
    lines: [
      { speaker: 'npc', target: 'Mngane wami!', native: 'My friend!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Inhliziyo yami iyajabula ukukubona!', native: 'My heart rejoices to see you!', correct: true, feedback: 'Perfect moment for the idiom. Three years apart — only the heart-phrase fits. He will hold that.' },
          { target: 'Salibonani.', native: 'Hello.', correct: false, feedback: 'Polite but flat. After three years, the moment deserves the idiom.' },
          { target: 'Ngiyaphila.', native: 'I am well.', correct: false, feedback: 'You answered a question he did not ask. He is greeting you with feeling — meet him there.' },
        ],
      },
      { speaker: 'npc', target: 'Sengikhulile, mngane. Indaba zempilo zinzima.', native: 'I have aged, friend. Life has been heavy.' },
      { speaker: 'rwen', rwenLine: 'He has just opened a hard window. The patience idiom would land here.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyezwa. Inkomo zibuya kade — ubekezele.', native: 'I hear you. The cattle return slowly — be patient.', correct: true, feedback: 'A Ndebele blessing wrapped in cattle and weather. He will recognise it as deep, not casual.' },
          { target: 'Konke kuzakulunga.', native: 'Everything will be fine.', correct: false, feedback: 'Generic reassurance. The idiom would have honoured the weight he just shared.' },
        ],
      },
      { speaker: 'npc', target: 'Isandla sigeza esinye, mngane. Ngifike nawe.', native: 'One hand washes the other, friend. I came to be with you.' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "my heart is happy / I am genuinely glad"?', correct: ['inhliziyo yami iyajabula', 'Inhliziyo yami iyajabula'] },
      { prompt: 'How do you say "to move with the times"?', correct: ['ukuhamba nezikhathi', 'Ukuhamba nezikhathi'] },
      { prompt: 'How do you say "one hand washes the other / we depend on each other"?', correct: ['isandla sigeza esinye', 'Isandla sigeza esinye'] },
      { prompt: 'How do you say "good things take time" (the cattle idiom)?', correct: ['inkomo zibuya kade', 'Inkomo zibuya kade'] },
    ],
  },

  mission: {
    title: 'Use one idiom today',
    task: "Pick the idiom that matches today most. If you reunite with someone, the heart-idiom. If something is slow, the cattle. If something is helping each other, the hands. Say it once aloud, even if alone. Idioms live by being said.",
    rwenSignoff: "An idiom is not decoration. It is the language thinking out loud.",
  },

  phase8: {
    scenario: "You meet an old Ndebele friend after a long time apart. They share a hard year. You respond with at least two idioms — one for the reunion, one for the patience.",
    rwenRole: "Thembinkosi — late 30s, old school friend, has had a tough year, recognises and rewards the right idiom in the right moment.",
    successCriteria: "User used at least two idioms naturally, matched each to the actual moment (reunion / patience / mutual aid / vibe), and did NOT over-stuff the conversation with idioms.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
