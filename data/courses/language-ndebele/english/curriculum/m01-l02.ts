import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02',
  module: 1,
  lesson: 2,
  title: 'The C-click — dental',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today, only one click: c. The dental one. The same disapproving 'tsk' your grandmother made when you came home late — except in isiNdebele it's a normal consonant, not a scolding.",
    culturalNote: "In Bulawayo households, ucansi — the woven sleeping mat — was once the centre of family life. Children slept on it, elders rested on it, important conversations happened sitting on its edge. The c-click sits at the start of the word, soft and clear.",
  },

  chunks: [
    {
      id: 'ucansi',
      target: 'ucansi',
      native: 'sleeping mat',
      literal: 'u- (noun prefix) + cansi (mat)',
      emoji: '🛏️',
      phonetic: 'oo-[c-click]ahn-see',
      audioRef: null,
    },
    {
      id: 'ucamango',
      target: 'ucamango',
      native: 'a thought, an idea',
      literal: 'u- + camango (thinking)',
      emoji: '💭',
      phonetic: 'oo-[c-click]ah-MAHN-goh',
      audioRef: null,
    },
    {
      id: 'isicelo',
      target: 'isicelo',
      native: 'a request, an application',
      literal: 'isi- + celo (asking)',
      emoji: '🙏',
      phonetic: 'ee-see-[c-click]EH-loh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The C-click in words',
    explanation: "When you see the letter c at the start of a syllable in isiNdebele, you make the dental click — exactly the tsk-tsk sound — and then the vowel that follows it. Try ucansi: oo, then click, then 'ahn-see'. The click and the vowel must come out in one smooth motion.",
    examples: [
      { target: 'ucansi',   native: 'sleeping mat' },
      { target: 'ucamango', native: 'a thought' },
      { target: 'isicelo',  native: 'a request' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'ucansi',
      correct: ['sleeping mat', 'mat', 'a sleeping mat', 'the mat'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'When you see "c" at the start of a syllable in isiNdebele, what sound is it?',
      options: [
        { text: 'A dental click — tongue tip behind the front teeth.', correct: true },
        { text: 'The English "k" sound.', correct: false },
        { text: 'The English "s" sound.', correct: false },
      ],
      explanation: "C is always the dental click in isiNdebele. Never an English c.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match each c-click word to its meaning',
      pairs: [
        { left: 'ucansi',   right: 'sleeping mat' },
        { left: 'ucamango', right: 'a thought' },
        { left: 'isicelo',  right: 'a request' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill in the missing letter — the dental click',
      sentence: "I have an idea: ngilo___amango.",
      options: ['c', 'q', 'x'],
      correct: 'c',
      context: "All three click letters are real isiNdebele consonants — but the dental one is what we want here.",
    },
  ],

  rwenDialogue: {
    intro: "A friend in Bulawayo has just had a thought she wants to share. The c-click is in every key word.",
    lines: [
      { speaker: 'npc',  target: 'Nginocamango.', native: "I have a thought." },
      { speaker: 'rwen', rwenLine: "Did you catch the click? oo-[c-click]ah-MAHN-goh — 'I have a thought'. The c is dental." },
      { speaker: 'npc',  target: 'Ngifuna ukubeka isicelo.', native: "I want to make a request." },
      { speaker: 'rwen', rwenLine: "Two c-clicks in that sentence: ucamango and isicelo. Don't rush them — let each one be its own beat." },
      { speaker: 'npc',  target: 'Hlala phansi ecansini.',   native: "Sit down on the mat." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'How do you say "sleeping mat" in isiNdebele?',         correct: ['ucansi', 'Ucansi'] },
      { prompt: 'What does "ucamango" mean?',                            correct: ['a thought', 'thought', 'an idea', 'idea'] },
      { prompt: 'Which click is in all three words above (c, q, or x)?', correct: ['c', 'C'] },
    ],
  },

  mission: {
    title: "Make ten c-clicks today",
    task: "Out loud, ten times in a row: ucansi. Don't whisper. Tongue tip behind the front teeth, pull away sharply, then 'ansi'. If your housemate looks at you funny, that means you're doing it right.",
    rwenSignoff: "The c-click is the easiest of the three — you've been making it your whole life. You just never put a vowel after it.",
  },

  phase8: {
    scenario: "Rwen quizzes you on three c-click words and asks you to use one of them in a short sentence about your evening.",
    rwenRole: "Patient isiNdebele tutor from Bulawayo, encourages over-pronouncing the click at first",
    successCriteria: "User produced a c-click in at least one word (ucansi, ucamango, or isicelo) and translated one to English.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
