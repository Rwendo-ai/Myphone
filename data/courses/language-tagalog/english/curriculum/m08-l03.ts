import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: 'Pumupunta & Dumarating — Go & Come',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Notice this: pumunta (went) becomes pum-**u**-punta (going). Tagalog doubles the first syllable to mean 'happening now'. It's the secret of Tagalog tense — and you'll see it everywhere from today.",
    culturalNote: "Reduplication — repeating a syllable — is how Tagalog signals present/ongoing action. Pumunta = went, pumupunta = is/am going. Same root, doubled syllable. The brain spots it after about ten exposures.",
  },

  chunks: [
    {
      id: 'pumupunta_ako',
      target: 'Pumupunta ako sa palengke',
      native: "I'm going to the market",
      literal: 'Going I to market',
      emoji: '🛒',
      phonetic: 'pu-mu-PUN-ta a-KO sa pa-LENG-ke',
      audioRef: null,
    },
    {
      id: 'dumating_na_ako',
      target: 'Dumating na ako',
      native: "I've arrived / I'm here",
      literal: 'Arrived already I',
      emoji: '📍',
      phonetic: 'du-MA-ting na a-KO',
      audioRef: null,
    },
    {
      id: 'halika',
      target: 'Halika!',
      native: 'Come (here)!',
      literal: 'Come!',
      emoji: '👋',
      phonetic: 'ha-LI-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reduplication — present tense',
    explanation: "To say something is happening **now**, double the first syllable of the um- form. Pumunta (went) → p-**umu**-punta (going). Kumain (ate) → k-**uma**-kain (eating). Doubled syllable = right now or habitually.",
    examples: [
      { target: 'Kumakain ako', native: 'I am eating' },
      { target: 'Pumupunta siya sa trabaho', native: 'She is going to work' },
      { target: 'Tumatakbo ang aso', native: 'The dog is running' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Pumupunta ako sa palengke', right: "I'm going to the market" },
        { left: 'Dumating na ako', right: "I've arrived" },
        { left: 'Halika!', right: 'Come (here)!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell your friend you just got to the café.',
      sentence: '_____ na ako.',
      options: ['Dumating', 'Pumunta', 'Halika'],
      correct: 'Dumating',
      context: "Dumating = arrived. The 'na' adds 'already' — common in Filipino texts.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm going to the market",
      correct: ['Pumupunta ako sa palengke', 'pumupunta ako sa palengke'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "Come here!" (informal, to a friend)',
      words: ['na', 'Halika'],
      correct: ['Halika', 'na'],
      translation: 'Come on! / Come now!',
    },
    {
      type: 'multiple_choice',
      instruction: 'You text your barkada from inside the restaurant.',
      question: 'Which one means you are right now on your way?',
      options: [
        { text: 'Pumupunta ako', correct: true },
        { text: 'Pumunta ako', correct: false },
        { text: 'Halika', correct: false },
      ],
      explanation: "Doubled syllable (pu-MU-punta) = happening now. Pumunta (no doubling) = went, past.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I've arrived",
      correct: ['Dumating na ako', 'dumating na ako'],
    },
  ],

  rwenDialogue: {
    intro: 'You text your friend Joana — she is waiting at a coffee shop.',
    lines: [
      {
        speaker: 'npc',
        target: 'Nasaan ka na?',
        native: 'Where are you now?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pumupunta na ako', native: "I'm on my way", correct: true, feedback: 'Doubled syllable — happening now. Spot on.' },
          { target: 'Pumunta ako', native: 'I went', correct: false, feedback: "Past tense. She'd think you went and left." },
          { target: 'Dumating na ako', native: "I've arrived", correct: false, feedback: "But you haven't yet — she'd look around for you." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, hihintayin kita.',
        native: "Okay, I'll wait for you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You just used reduplication — the engine of Tagalog tense. Don't memorise. Keep noticing it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm going to the market (in Tagalog)", correct: ['Pumupunta ako sa palengke', 'pumupunta ako sa palengke'] },
      { prompt: "I've arrived (in Tagalog)", correct: ['Dumating na ako', 'dumating na ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use both pumupunta and dumating today — even silently. Walking into your kitchen? Dumating na ako. Heading out? Pumupunta na ako.",
    rwenSignoff: 'Halika — keep going.',
  },

  phase8: {
    scenario: "Saturday morning, your friend Joana invites you to a coffee shop in Quezon City. She's already there — texting you to come. You're on the way. The exchange is short and natural: she asks where you are, you say you're heading there now, then you arrive.",
    rwenRole: "Joana — your university friend, 26, friendly and chatty over text; switches between Tagalog and a sprinkle of Taglish.",
    successCriteria: "User uses pumupunta (with doubled syllable, present tense) at least once when on the way, and dumating na ako on arrival. The reduplication pattern is correctly applied.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
