import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06',
  module: 1,
  lesson: 6,
  title: 'Hello — with and without a click',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Plot twist: the most common Ndebele greeting has zero clicks. Salibonani — sah-lee-boh-NAH-nee. No c, no q, no x. But the words you'll meet right after the greeting? Those have clicks. So learn both — the clean opener, and what to expect next.",
    culturalNote: "In Bulawayo it's 'Salibonani' (we see you all — even when speaking to one person, the plural form is the polite default). After the hello, conversation often pivots to news of the day, and that's where clicks turn up: indaba (news), ucamango (a thought), iqiniso (the truth — q-click).",
  },

  chunks: [
    {
      id: 'salibonani',
      target: 'Salibonani',
      native: 'Hello (literally: we see you-all)',
      literal: 'sa- (we) + li- (you-plural object) + bonani (see-plural)',
      emoji: '👋',
      phonetic: 'sah-lee-boh-NAH-nee — no clicks',
      audioRef: null,
    },
    {
      id: 'unjani',
      target: 'Unjani?',
      native: 'How are you?',
      literal: 'u- (you) + njani (how)',
      emoji: '🙂',
      phonetic: 'oon-JAH-nee — no clicks',
      audioRef: null,
    },
    {
      id: 'iqiniso',
      target: 'iqiniso',
      native: 'the truth',
      literal: 'i- + qiniso (truth)',
      emoji: '🎯',
      phonetic: 'ee-[q-click]ee-NEE-soh — q-click',
      audioRef: null,
    },
    {
      id: 'ixoxo_recap',
      target: 'ixoxo',
      native: 'frog (recap from yesterday)',
      emoji: '🐸',
      phonetic: 'ee-[x-click]OH-[x-click]oh — two x-clicks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greeting words: usually click-free',
    explanation: "The everyday opening of a Ndebele conversation — Salibonani, Unjani, Sikhona (we are well) — happens to have no clicks. This is useful: you can greet anyone confidently before you've fully mastered the clicks. But the moment the conversation goes anywhere interesting (news, opinions, animals, people's names), clicks return. So the greeting is your warm-up, not your finish line.",
    examples: [
      { target: 'Salibonani', native: 'Hello (no click)' },
      { target: 'Unjani?',    native: 'How are you? (no click)' },
      { target: 'iqiniso',    native: 'the truth (q-click)' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'Salibonani',
      correct: ['Hello', 'hello', 'Hi', 'hi', 'we see you'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Does "Salibonani" contain a click?',
      options: [
        { text: 'No — none of c, q, or x appear.', correct: true },
        { text: 'Yes — the s is a click.',          correct: false },
        { text: 'Yes — there is a hidden q-click.', correct: false },
      ],
      explanation: "Salibonani is entirely click-free. That's why it makes such a friendly first word — even a complete beginner can say it perfectly.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match each word to whether it has a click — and which one',
      pairs: [
        { left: 'Salibonani', right: 'no click' },
        { left: 'iqiniso',    right: 'q-click' },
        { left: 'ixoxo',      right: 'x-click' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Order the words to make: "Hello, how are you?"',
      words: ['Unjani', 'Salibonani'],
      correct: ['Salibonani', 'Unjani'],
      translation: 'Hello, how are you?',
    },
  ],

  rwenDialogue: {
    intro: "Your first real exchange. A neighbour greets you on a Bulawayo street. Listen for which words have clicks and which don't.",
    lines: [
      { speaker: 'npc',  target: 'Salibonani! Unjani?', native: "Hello! How are you?" },
      { speaker: 'rwen', rwenLine: "Two click-free words — easy. Now you reply." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani! Ngiyaphila.', native: 'Hello! I am well.', correct: true,  feedback: "Perfect — you opened with the click-free greeting and answered the question." },
          { target: 'Iqiniso.',                native: 'The truth.',         correct: false, feedback: "That's a real word, but it's not a greeting — and it has a q-click in the middle." },
          { target: 'Ixoxo.',                  native: 'Frog.',              correct: false, feedback: "Frogs are not greetings. Try Salibonani." },
        ],
      },
      { speaker: 'npc',  target: 'Ngifuna ukuxoxa lawe ngeqiniso.', native: "I want to chat with you about the truth." },
      { speaker: 'rwen', rwenLine: "Three clicks just landed in one sentence — ukuxoxa (x), iqiniso (q). The clicks come back the moment the topic gets serious." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'How do you say "Hello" in isiNdebele?',                          correct: ['Salibonani', 'salibonani'] },
      { prompt: 'Does Salibonani have a click? (yes / no)',                       correct: ['no', 'No', 'NO'] },
      { prompt: 'Which click is in "iqiniso" (c, q, or x)?',                      correct: ['q', 'Q'] },
    ],
  },

  mission: {
    title: 'Greet someone today',
    task: "Out loud, in a mirror or to a friend: 'Salibonani! Unjani?' No clicks needed. Then add 'Ngifuna iqiniso' (I want the truth) — that one has a q-click. Two greetings, one click. Total time: ten seconds.",
    rwenSignoff: "You can now greet a Ndebele speaker in their language. That alone will earn you a smile in Bulawayo.",
  },

  phase8: {
    scenario: "Morning on Joshua Mqabuko Nkomo street in Bulawayo. A neighbour stops you. You exchange greetings — click-free — then she pivots and asks you about something using a q-click word.",
    rwenRole: "Friendly neighbour, ~50yo, switches between click-free greeting and click-heavy follow-up to test the learner",
    successCriteria: "User opened with Salibonani (click-free) and produced at least one q-click word in response to the follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
