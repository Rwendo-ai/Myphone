import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l02',
  module: 11,
  lesson: 2,
  title: 'Conditionals — When and If',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Real conversations live in maybe-land. 'If it rains...' 'When you arrive...' 'Should we be late...' Today you get the two doors into that land — uma and kwanele.",
    culturalNote: "Ndebele speakers tend to soften plans with conditionals rather than commit hard. 'Uma kungenzeka' — if it is possible — is a common closer, even when both speakers know it will happen. The conditional leaves room for life to do what it does. Hard plans without 'uma' can sound brittle.",
  },

  chunks: [
    {
      id: 'uma',
      target: 'uma',
      native: 'if',
      emoji: '❓',
      phonetic: 'OO-mah',
      audioRef: null,
    },
    {
      id: 'kwanele',
      target: 'kwanele',
      native: 'when / once (it is enough that)',
      literal: 'it-is-enough / when-it-suffices',
      emoji: '⏳',
      phonetic: 'kwah-NEH-leh',
      audioRef: null,
    },
    {
      id: 'uma_kungenzeka',
      target: 'uma kungenzeka',
      native: 'if it is possible',
      emoji: '🙏',
      phonetic: 'OO-mah koon-gen-ZEH-kah',
      audioRef: null,
    },
    {
      id: 'uma_lina',
      target: 'uma lina',
      native: 'if it rains',
      emoji: '🌧️',
      phonetic: 'OO-mah LEE-nah',
      audioRef: null,
    },
    {
      id: 'kwanele_ufika',
      target: 'kwanele ufika',
      native: 'when you arrive / once you arrive',
      emoji: '🚪',
      phonetic: 'kwah-NEH-leh oo-FEE-kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Uma vs kwanele — uncertainty vs sequence',
    explanation: "'Uma' opens a hypothetical — the thing might or might not happen. 'Kwanele' opens a sequence — when X happens (and it will), then Y. English blurs both into 'when/if'; isiNdebele keeps them separate. Use uma for genuine uncertainty, kwanele for 'as soon as'.",
    examples: [
      { target: 'Uma lina, ngizahlala ekhaya.', native: 'If it rains, I will stay home.' },
      { target: 'Kwanele ufika, ungitshele.', native: 'Once you arrive, tell me.' },
      { target: 'Uma kungenzeka, sizahamba kusasa.', native: 'If it is possible, we will go tomorrow.' },
      { target: 'Kwanele uphumula, sizadlala.', native: 'When you have rested, we will play.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the conditional to its meaning',
      pairs: [
        { left: 'uma', right: 'if (uncertain)' },
        { left: 'kwanele', right: 'when / once (sequenced)' },
        { left: 'uma kungenzeka', right: 'if it is possible' },
        { left: 'kwanele ufika', right: 'once you arrive' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right conditional.',
      sentence: '____ uphumula, sizahamba.',
      options: ['kwanele', 'uma', 'kanti'],
      correct: 'kwanele',
      context: '"Once you have rested, we will go." This is sequenced — rest first, then go. Not uncertain.',
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'If it rains, I will stay home.',
      correct: ['Uma lina, ngizahlala ekhaya', 'uma lina, ngizahlala ekhaya', 'Uma lina ngizahlala ekhaya'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the more culturally graceful version.',
      question: 'You want to invite a Ndebele friend to dinner tomorrow. Which sounds best?',
      options: [
        { text: 'Uza kusasa kudla. (You are coming tomorrow to eat.)', correct: false },
        { text: 'Uma kungenzeka, woza kusasa kudla. (If it is possible, come tomorrow to eat.)', correct: true },
        { text: 'Kwanele kudla, uza. (Once it is food, come.)', correct: false },
      ],
      explanation: "Adding 'uma kungenzeka' (if it is possible) is the Ndebele way of inviting without pressuring. It leaves your friend's life intact. The first version commands; the third is grammatically wrong.",
    },
  ],

  rwenDialogue: {
    intro: "Your friend Nkosi has invited you to a family braai (cookout) on Saturday. The weather forecast is shaky.",
    lines: [
      { speaker: 'npc', target: 'Uzakuza eSaturday?', native: 'Will you come on Saturday?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, uma lingani, ngizakuza.', native: 'Yes, if it does not rain, I will come.', correct: true, feedback: '"Uma" for genuine uncertainty (the rain). Honest and graceful.' },
          { target: 'Yebo, kwanele lingani, ngizakuza.', native: 'Yes, once it does not rain, I will come.', correct: false, feedback: '"Kwanele" implies sequence — first the not-raining, then the coming. But not-raining is not a thing that "happens." This is a conditional, so use "uma".' },
          { target: 'Yebo, ngizakuza.', native: 'Yes, I will come.', correct: false, feedback: 'Hard commit. Saturday weather is uncertain — leaving room with "uma" is more honest and culturally lighter.' },
        ],
      },
      { speaker: 'npc', target: 'Kulungile. Kwanele ufika, ngitshele.', native: 'Fine. Once you arrive, tell me.' },
      { speaker: 'rwen', rwenLine: 'Hear it — he used "kwanele" for arriving, because arriving IS a thing that happens in sequence.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kulungile, kwanele ngifika ngizakutshela.', native: 'Fine, once I arrive I will tell you.', correct: true, feedback: 'Mirroring his "kwanele" — sequenced, certain. Perfect.' },
          { target: 'Uma ngifika ngizakutshela.', native: 'If I arrive I will tell you.', correct: false, feedback: 'Now you sound unsure whether you will arrive at all. Switch to kwanele for "once / when".' },
        ],
      },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "if" (uncertain)?', correct: ['uma', 'Uma'] },
      { prompt: 'How do you say "when / once" (sequenced)?', correct: ['kwanele', 'Kwanele'] },
      { prompt: 'How do you say "if it is possible"?', correct: ['uma kungenzeka', 'Uma kungenzeka'] },
      { prompt: 'How do you say "if it rains"?', correct: ['uma lina', 'Uma lina'] },
    ],
  },

  mission: {
    title: 'Soften one plan today',
    task: "Pick one plan you have today. Mentally re-frame it with 'uma kungenzeka' (if it is possible). Notice how the Ndebele framing leaves your day breathable. Brittleness is not toughness — it is just brittleness.",
    rwenSignoff: "Plans held lightly are plans that survive the day.",
  },

  phase8: {
    scenario: "You're inviting a Ndebele friend to a Saturday gathering, but the weather is uncertain and your friend has a sick parent. You navigate the invitation using 'uma' and 'kwanele' to leave appropriate room.",
    rwenRole: "Mthokozisi — late 30s, caring son with an ailing father, grateful when invitations leave room for his real life.",
    successCriteria: "User used 'uma' for the genuinely uncertain parts (weather, his father), used 'kwanele' for the sequenced parts (arriving, eating), and never issued a hard command.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
