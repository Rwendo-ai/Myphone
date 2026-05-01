import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Isa hanggang sampu — 1 to 10',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to count, kaibigan. Tagalog has TWO number systems — the native one (isa, dalawa, tatlo) for counting things, and a Spanish-loan one (uno, dos, tres) you'll meet later for time and money. Today we start with the native side: one to ten.",
    culturalNote: "Filipinos switch number systems mid-sentence and don't even notice. Counting fish at the palengke? Native (`tatlong isda` — three fish). Asking the time? Spanish-loan (`alas tres` — 3 o'clock). The split is the defining quirk of Tagalog numbers — get used to both.",
  },

  chunks: [
    {
      id: 'isa',
      target: 'Isa',
      native: 'One',
      literal: 'one',
      emoji: '☝️',
      phonetic: 'ee-SAH',
      audioRef: null,
    },
    {
      id: 'lima',
      target: 'Lima',
      native: 'Five',
      literal: 'five',
      emoji: '🖐️',
      phonetic: 'LEE-mah',
      audioRef: null,
    },
    {
      id: 'sampu',
      target: 'Sampu',
      native: 'Ten',
      literal: 'ten',
      emoji: '🔟',
      phonetic: 'SAM-poo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Native cardinal numbers 1-10',
    explanation: 'The native Tagalog numbers 1-10 are: isa, dalawa, tatlo, apat, lima, anim, pito, walo, siyam, sampu. Use these for counting things, people, and animals — `tatlong mangga` (three mangoes), `limang bata` (five children).',
    examples: [
      { target: 'Dalawa', native: 'Two' },
      { target: 'Tatlo', native: 'Three' },
      { target: 'Pito', native: 'Seven' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog number to its English meaning',
      pairs: [
        { left: 'Isa', right: 'One' },
        { left: 'Lima', right: 'Five' },
        { left: 'Sampu', right: 'Ten' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Count the fingers on one hand',
      sentence: 'May _____ na daliri sa isang kamay. (There are ___ fingers on one hand.)',
      options: ['lima', 'isa', 'sampu'],
      correct: 'lima',
      context: 'One hand = five fingers. Tagalog uses the native number for counting body parts.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Ten',
      correct: ['Sampu', 'sampu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I have one mango"',
      words: ['mangga', 'May', 'isang', 'ako'],
      correct: ['May', 'isang', 'mangga', 'ako'],
      translation: 'I have one mango.',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at the palengke counting bananas you want to buy.",
      question: "How do you say 'five bananas'?",
      options: [
        { text: 'limang saging', correct: true },
        { text: 'singko saging', correct: false },
        { text: 'sampung saging', correct: false },
      ],
      explanation: "For counting things, use the NATIVE number (lima → limang before a noun). Spanish-loan `singko` is for time, money, and age — not market goods.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'One',
      correct: ['Isa', 'isa'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small sari-sari store buying eggs. The tindera asks how many you want.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ilang itlog, iho?',
        native: 'How many eggs, son?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sampung itlog po', native: 'Ten eggs (polite)', correct: true, feedback: 'Perfect — native number `sampu` becomes `sampung` before a noun. And `po` keeps it respectful.' },
          { target: 'Dyes na itlog', native: 'Ten eggs (Spanish-loan)', correct: false, feedback: "Filipinos do say `dyes` for time and money — but for counting eggs, the native `sampung` sounds more natural." },
          { target: 'Isa lang', native: 'Just one', correct: false, feedback: 'That works grammatically — but you wanted ten.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, sampung itlog. Salamat!',
        native: 'Okay, ten eggs. Thanks!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Sampu — ten. You just used the native number system the way every Filipino lola does at the palengke.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'One (in Tagalog)', correct: ['Isa', 'isa'] },
      { prompt: 'Ten (in Tagalog)', correct: ['Sampu', 'sampu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Count to ten in Tagalog out loud once today: isa, dalawa, tatlo, apat, lima, anim, pito, walo, siyam, sampu. In the shower, the kitchen, anywhere.',
    rwenSignoff: "I'll check tomorrow. Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're at a sari-sari store in Cubao. Aling Nena (the tindera) is behind the wooden counter. You want to buy eggs and bananas — practise asking for specific amounts using native numbers 1-10.",
    rwenRole: 'Aling Nena — sari-sari store owner, ~60yo, friendly but quick; she asks `ilan?` (how many?) for everything and expects native numbers like `tatlong itlog` or `limang saging`.',
    successCriteria: 'User asks for at least two items using NATIVE numbers (isa-sampu) with the correct linker form (`isang`, `tatlong`, `limang`, `sampung`). No Spanish-loan numbers for counting goods.',
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
