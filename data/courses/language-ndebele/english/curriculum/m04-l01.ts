import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01',
  module: 4,
  lesson: 1,
  title: "Hunger and Thirst",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Ngilambile. Ngomile. Two of the most useful things you can say in any language. 'I am hungry. I am thirsty.' Today they are yours.",
    culturalNote: "In a Ndebele home, telling your host you are hungry is not impolite — it is welcomed. The host has been waiting for the cue. Hospitality is the rhythm; your appetite is the downbeat.",
  },

  chunks: [
    {
      id: 'ngilambile',
      target: 'Ngilambile',
      native: "I'm hungry",
      literal: 'I-have-become-hungry',
      emoji: '🍲',
      phonetic: 'ngee-lahm-BEE-leh',
      audioRef: null,
    },
    {
      id: 'ngomile',
      target: 'Ngomile',
      native: "I'm thirsty",
      literal: 'I-have-become-dry',
      emoji: '💧',
      phonetic: 'ngoh-MEE-leh',
      audioRef: null,
    },
    {
      id: 'ulambile',
      target: 'Ulambile?',
      native: 'Are you hungry?',
      emoji: '❓',
      phonetic: 'oo-lahm-BEE-leh',
      audioRef: null,
    },
    {
      id: 'kakhulu',
      target: 'kakhulu',
      native: 'very / a lot',
      emoji: '💯',
      phonetic: 'kah-KOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -ile ending: a state you have arrived at',
    explanation: "Ngilambile and ngomile both end in -ile. This ending describes a state you have entered into — not a moment, but a condition you are currently in. 'Ngi-' is the 'I' subject prefix. Swap it for 'u-' and you are asking about another person.",
    examples: [
      { target: 'Ngilambile', native: 'I am hungry (I have arrived at hunger)' },
      { target: 'Ulambile', native: 'You are hungry' },
      { target: 'Ngomile kakhulu', native: 'I am very thirsty' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the isiNdebele to the English',
      pairs: [
        { left: 'Ngilambile', right: "I'm hungry" },
        { left: 'Ngomile',    right: "I'm thirsty" },
        { left: 'Ulambile?',  right: 'Are you hungry?' },
        { left: 'kakhulu',    right: 'very / a lot' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You want to say you are very thirsty.',
      sentence: 'Ngomile ____.',
      options: ['kakhulu', 'ulambile', 'ngilambile'],
      correct: 'kakhulu',
      context: 'Add the intensifier "a lot / very" to the end.',
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: "I'm hungry",
      correct: ['Ngilambile', 'ngilambile'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the best answer',
      question: 'You arrive at a friend\'s home in Bulawayo. They ask "Ulambile?" What is the polite truthful answer if you ARE hungry?',
      options: [
        { text: 'Yebo, ngilambile. (Yes, I am hungry.)', correct: true },
        { text: "Stay silent — saying you're hungry is rude.", correct: false },
        { text: "Hatshi (no), even if it isn't true.", correct: false },
      ],
      explanation: "Ndebele hospitality expects honesty about hunger. Lying to be polite forces your host into guesswork. 'Yebo, ngilambile' is the welcomed answer.",
    },
  ],

  rwenDialogue: {
    intro: "You're at MaNdlovu's house in Bulawayo, mid-afternoon. She has noticed you have been quiet.",
    lines: [
      { speaker: 'npc',  target: "Ulambile?", native: 'Are you hungry?' },
      { speaker: 'user', userChoices: [
        { target: 'Yebo, ngilambile.', native: 'Yes, I am hungry.', correct: true, feedback: "Honest and welcomed. Now she knows what to do." },
        { target: 'Hatshi.', native: 'No.', correct: false, feedback: "If you really were hungry, this would put your host in a difficult spot. Honesty is the kinder choice here." },
      ] },
      { speaker: 'npc',  target: 'Uyaphuza? Ngomile lami.', native: 'Will you drink? I am thirsty too.' },
      { speaker: 'rwen', rwenLine: "Notice — she said 'ngomile lami.' She is thirsty too. The cue is mutual." },
      { speaker: 'user', userChoices: [
        { target: 'Yebo, ngomile kakhulu.', native: 'Yes, I am very thirsty.', correct: true, feedback: 'Perfect — and you used kakhulu.' },
        { target: 'Ngilambile.', native: 'I am hungry.', correct: false, feedback: 'She asked about thirst, not hunger. Listen for the verb.' },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'I am hungry' in isiNdebele?",  correct: ['Ngilambile', 'ngilambile'] },
      { prompt: "How do you say 'I am thirsty' in isiNdebele?", correct: ['Ngomile', 'ngomile'] },
      { prompt: "What does 'kakhulu' mean?",                    correct: ['very', 'a lot', 'very / a lot', 'a lot / very'] },
    ],
  },

  mission: {
    title: 'Notice your hunger today',
    task: "Three times today, when you notice you are hungry or thirsty, say the isiNdebele phrase out loud. Quiet voice is fine — the goal is to attach the words to the actual feeling, not just memorise them.",
    rwenSignoff: "Words tied to bodily feelings stay in the memory longer than words tied to flashcards.",
  },

  phase8: {
    scenario: "You arrive at MaNdlovu's home in Bulawayo. She greets you and asks if you are hungry and thirsty. You respond truthfully and use kakhulu at least once.",
    rwenRole: "MaNdlovu — a warm Ndebele host in her sixties, who waits for her guest's honest cue before bringing food.",
    successCriteria: "User answered 'Ulambile?' with 'Yebo, ngilambile' (or equivalent), responded to a thirst question with 'ngomile', and used 'kakhulu' once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
