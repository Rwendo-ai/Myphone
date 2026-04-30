import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-eating-together',
  module: 7,
  lesson: 8,
  title: 'Kudya Pamwe — Eating Together',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, eating alone is unusual. Meals are shared — plates are central, everyone eats together. 'Kudya pamwe' is not just sharing food. It's building trust, resolving conflict, celebrating life. The table is sacred.",
    culturalNote: "The Shona proverb 'Ukama igasva hunozadziswa nekudya' means 'Relationship is incomplete, it is completed by sharing food.' Food seals bonds. The act of eating from the same plate is an act of deep trust.",
  },

  chunks: [
    {
      id: 'taudzai',
      target: 'Taudzai / Taudzai pamwe',
      native: 'Let\'s eat / Let\'s eat together',
      literal: 'Let-us-eat / together',
      emoji: '🍽️🍽️',
      phonetic: 'tau-DZA-i / pa-mwe',
      audioRef: null,
    },
    {
      id: 'kudya_pamwe',
      target: 'Kudya pamwe',
      native: 'Eating together',
      literal: 'To-eat together',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ku-DYA pa-mwe',
      audioRef: null,
    },
    {
      id: 'tikudzane',
      target: 'Tikudzane',
      native: 'Let us honour each other',
      literal: 'We-honour-each-other',
      emoji: '🤝',
      phonetic: 'ti-ku-DZA-ne',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ta-/Ti- inclusive we commands',
    explanation: "'Taudzai' (let's eat) uses the Ti- (we) prefix in imperative form. Ta-u-dza-i = we-each-other-eat. Tikudzane = we-honour-each-other. These Ti- forms create inclusive invitations — not commands, but shared actions.",
    examples: [
      { target: 'Taudzai', native: "Let's eat" },
      { target: 'Tikudzane', native: "Let us honour each other" },
      { target: 'Tiende pamwe', native: "Let's go together" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Taudzai', right: "Let's eat" },
        { left: 'Kudya pamwe', right: 'Eating together' },
        { left: 'Tikudzane', right: 'Let us honour each other' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Invite everyone to eat',
      sentence: 'Taudzai _____ chete — zvokudya zviripo.',
      options: ['pamwe', 'chete', 'mese'],
      correct: 'pamwe',
      context: "Let's eat together — there is food.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "Let's eat",
      correct: ['Taudzai', 'taudzai'],
    },
    {
      type: 'multiple_choice',
      instruction: "The proverb says 'Ukama igasva hunozadziswa nekudya'. What does it mean?",
      question: 'Ukama igasva hunozadziswa nekudya:',
      options: [
        { text: 'Relationship is completed by sharing food', correct: true },
        { text: 'You should always eat before meetings', correct: false },
        { text: 'Hungry people cannot have relationships', correct: false },
      ],
      explanation: "Ukama (relationship) is igasva (incomplete) until hunozadziswa (it is completed) nekudya (by eating together). Food seals bonds.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Let us eat together'",
      words: ['Taudzai', 'pamwe', 'chete.'],
      correct: ['Taudzai', 'pamwe', 'chete.'],
      translation: "Let's eat together",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Let us honour each other',
      correct: ['Tikudzane', 'tikudzane'],
    },
  ],

  rwenDialogue: {
    intro: "The whole family gathers at the table. Rwen's father invites everyone to eat.",
    lines: [
      {
        speaker: 'npc',
        target: 'Taudzai vose. Tikudzane nhasi.',
        native: 'Let everyone eat. Let us honour each other today.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Taudzai pamwe chete! Ndinofara kudya nemi vose.', native: "Let's eat together! I am happy to eat with all of you.", correct: true, feedback: "You joined the invitation and expressed joy. You're part of this meal now." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Join the invitation! 'Taudzai pamwe chete! Ndinofara kudya nemi vose.' — Let's eat together!" },
          { target: 'Zvakanaka', native: "That's good", correct: false, feedback: "Be more engaged — 'Taudzai pamwe chete! Ndinofara kudya nemi vose.' You're invited. Accept fully." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ukama igasva hunozadziswa nekudya. This meal completes what words began.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Let's eat", correct: ['Taudzai', 'taudzai'] },
      { prompt: 'Eating together', correct: ['Kudya pamwe', 'kudya pamwe'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Eat with someone today — anyone. Say 'Taudzai pamwe chete' before you start. Notice how the meal feels different when it begins with an invitation.",
    rwenSignoff: "Relationship is completed by eating together. Famba zvakanaka.",
  },
};

export default lesson;
