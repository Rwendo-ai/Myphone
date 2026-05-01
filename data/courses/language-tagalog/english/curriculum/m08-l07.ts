import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Sa Gabi — Evening Routine',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Evening in the Philippines: traffic, sinigang on the stove, the news on the TV. Today we describe your sundown — umuuwi, nagluluto, nanonood. Same doubled-syllable trick. You already know how it works.",
    culturalNote: "Dinner at home is sacred — most Filipino families try to share the evening meal. Saying 'umuuwi ako' (I'm going home) is one of the most-used phrases in Manila traffic chats.",
  },

  chunks: [
    {
      id: 'umuuwi_ako',
      target: 'Umuuwi ako',
      native: "I'm going home",
      literal: 'Going-home I',
      emoji: '🏠',
      phonetic: 'u-mu-U-wi a-KO',
      audioRef: null,
    },
    {
      id: 'nagluluto_hapunan',
      target: 'Nagluluto ako ng hapunan',
      native: 'I cook dinner / I am cooking dinner',
      literal: 'Cooking I of-dinner',
      emoji: '🍲',
      phonetic: 'nag-lu-LU-to a-KO nang ha-PU-nan',
      audioRef: null,
    },
    {
      id: 'nanonood_tv',
      target: 'Nanonood ako ng TV',
      native: 'I watch TV',
      literal: 'Watching I of-TV',
      emoji: '📺',
      phonetic: 'na-no-NO-od a-KO nang TV',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Evening verbs (more reduplication)',
    explanation: "More habit verbs! Notice the family resemblance: nag-**lu**-luto, na-**no**-nood, u-**mu**-uwi. Doubled first syllable of the root, mag- becomes nag-, um- stays um- but pulls in the doubling. Same engine, three roots.",
    examples: [
      { target: 'Nagluluto siya', native: "She's cooking" },
      { target: 'Nanonood kami ng pelikula', native: 'We watch a movie' },
      { target: 'Umuuwi na ako', native: "I'm going home now" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Umuuwi ako', right: "I'm going home" },
        { left: 'Nagluluto ako ng hapunan', right: 'I cook dinner' },
        { left: 'Nanonood ako ng TV', right: 'I watch TV' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's 8pm and you're chilling on the sofa.",
      sentence: '_____ ako ng TV.',
      options: ['Nanonood', 'Nagluluto', 'Umuuwi'],
      correct: 'Nanonood',
      context: 'Nanonood = watching. The doubled syllable says "right now".',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm going home",
      correct: ['Umuuwi ako', 'umuuwi ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I cook dinner"',
      words: ['ng', 'ako', 'hapunan', 'Nagluluto'],
      correct: ['Nagluluto', 'ako', 'ng', 'hapunan'],
      translation: 'I cook dinner',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 6pm in Manila traffic and your friend asks where you are.",
      question: 'You\'re heading home — what do you say?',
      options: [
        { text: 'Umuuwi na ako', correct: true },
        { text: 'Pumupunta ako sa trabaho', correct: false },
        { text: 'Naliligo ako', correct: false },
      ],
      explanation: "Umuuwi na ako = I'm going home (already). 'Na' adds the 'on my way already' feel.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I watch TV',
      correct: ['Nanonood ako ng TV', 'nanonood ako ng TV', 'nanonood ako ng tv'],
    },
  ],

  rwenDialogue: {
    intro: 'Your kapatid texts you at 7pm — wants to know if you can join a video call.',
    lines: [
      {
        speaker: 'npc',
        target: 'Pwede ka ba mag-call?',
        native: 'Can you hop on a call?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nagluluto ako ng hapunan, sandali lang', native: "I'm cooking dinner, give me a moment", correct: true, feedback: 'Real, warm, exactly right.' },
          { target: 'Pumupunta ako sa palengke', native: "I'm going to the market", correct: false, feedback: 'At 7pm? Maybe — but cooking fits the scene better.' },
          { target: 'Halika', native: 'Come', correct: false, feedback: "She asked something — answer it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, sabihan mo na lang ako pag tapos ka.',
        native: "Okay, just tell me when you're done.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three evening verbs. Same engine as the morning ones. You're really hearing it now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm going home (in Tagalog)", correct: ['Umuuwi ako', 'umuuwi ako'] },
      { prompt: 'I cook dinner (in Tagalog)', correct: ['Nagluluto ako ng hapunan', 'nagluluto ako ng hapunan'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, narrate your evening to yourself in Tagalog. Umuuwi ako. Nagluluto ako. Nanonood ako. Three little sentences as your day winds down.",
    rwenSignoff: 'Magandang gabi — good evening.',
  },

  phase8: {
    scenario: "It's 7pm. Your kapatid (sibling) calls and wants to chat about the day. You're mid-evening — cooking or watching TV — and you'll describe your evening routine using umuuwi, nagluluto, and nanonood, all in habit form.",
    rwenRole: "Ate Cherry — your older sister, 30, lives a few cities away; she calls in the evenings to catch up and loves hearing about even the smallest details of your night.",
    successCriteria: "User describes the evening with at least three habit-form verbs (umuuwi, nagluluto, nanonood or similar mag-/um- verbs) using the doubled-syllable present pattern. The ng object marker is used correctly with at least one verb.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
