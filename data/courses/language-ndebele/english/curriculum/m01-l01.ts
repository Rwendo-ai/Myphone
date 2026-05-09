import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01',
  module: 1,
  lesson: 1,
  title: 'The Three Clicks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Salibonani! Before we learn a single greeting, you need to meet three sounds: c, q, x. They are not letters borrowed from English — they are clicks. Listen first. Speak later.",
    culturalNote: "The clicks travelled into isiNdebele through isiZulu, who borrowed them from the Khoisan peoples — the first inhabitants of southern Africa. When you produce a click, you are speaking sounds older than any written language on this continent.",
  },

  chunks: [
    {
      id: 'c_click',
      target: 'c',
      native: 'dental click — like the English "tsk-tsk" of disapproval',
      emoji: '👅',
      phonetic: '[c-click] tongue-tip behind the front teeth',
      audioRef: null,
    },
    {
      id: 'q_click',
      target: 'q',
      native: 'palatal click — a sharp pop, like a cork leaving a bottle',
      emoji: '🍾',
      phonetic: '[q-click] tongue against the roof of the mouth',
      audioRef: null,
    },
    {
      id: 'x_click',
      target: 'x',
      native: 'lateral click — like the cluck used to urge a horse forward',
      emoji: '🐴',
      phonetic: '[x-click] tongue on the side teeth',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Clicks are consonants',
    explanation: "In isiNdebele, c, q and x are not pronounced anything like they are in English. They are full consonants — the way we use 'b' or 'k'. Every click is a different sound made in a different place in the mouth. You already know how to make them; English just doesn't use them inside words.",
    examples: [
      { target: 'c', native: 'dental — tsk-tsk' },
      { target: 'q', native: 'palatal — pop' },
      { target: 'x', native: 'lateral — horse clop' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each click letter to its sound',
      pairs: [
        { left: 'c', right: 'dental (tsk-tsk)' },
        { left: 'q', right: 'palatal (sharp pop)' },
        { left: 'x', right: 'lateral (horse clop)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Which click sounds like the English disapproving "tsk-tsk"?',
      options: [
        { text: 'c (dental)',  correct: true },
        { text: 'q (palatal)', correct: false },
        { text: 'x (lateral)', correct: false },
      ],
      explanation: "The c-click is dental — your tongue tip touches the back of your front teeth and pulls away sharply.",
    },
    {
      type: 'translate',
      instruction: 'Which click letter is the horse-clop?',
      prompt: 'horse clop sound',
      correct: ['x', 'X', 'x-click'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'In isiNdebele, are c, q, x pronounced like English c, q, x?',
      options: [
        { text: 'No — they are click consonants, totally different sounds.', correct: true },
        { text: 'Yes — exactly the same.', correct: false },
        { text: 'Only c is the same as English.', correct: false },
      ],
      explanation: "Every isiNdebele click is its own consonant. Forget the English values — those letters were re-purposed by missionary linguists to write the clicks down.",
    },
  ],

  rwenDialogue: {
    intro: 'A grandmother in Bulawayo introduces you to the three sounds. No words yet — just sounds.',
    lines: [
      { speaker: 'rwen', rwenLine: "Listen — she will make each click for you. Try not to copy yet. Just hear." },
      { speaker: 'npc',  target: 'c — c — c', native: 'the dental click, three times' },
      { speaker: 'npc',  target: 'q — q — q', native: 'the palatal pop, three times' },
      { speaker: 'npc',  target: 'x — x — x', native: 'the lateral horse-clop, three times' },
      { speaker: 'rwen', rwenLine: "Different places in the mouth, different sounds. They are not noises — they are letters. Tomorrow we put them inside words." },
    ],
  },

  activeRecall: {
    instruction: 'Recall the three clicks. Type your answer.',
    prompts: [
      { prompt: 'Which click is dental (like tsk-tsk)?',          correct: ['c', 'C', 'c-click'] },
      { prompt: 'Which click is palatal (sharp pop)?',            correct: ['q', 'Q', 'q-click'] },
      { prompt: 'Which click is lateral (horse clop)?',           correct: ['x', 'X', 'x-click'] },
    ],
  },

  mission: {
    title: 'Listen for clicks today',
    task: "Find one isiNdebele or isiZulu news clip on YouTube (search 'ZBC Ndebele news' or 'SABC isiZulu'). Listen for one minute. Don't try to understand — just count how many clicks you hear.",
    rwenSignoff: "Listening trains the ear before speaking trains the mouth. Tomorrow you make your first click.",
  },

  phase8: {
    scenario: "Your first audio session with Rwen. He plays the three clicks one at a time and asks you to identify which is which. No vocabulary yet — pure sound discrimination.",
    rwenRole: "Patient isiNdebele tutor from Bulawayo, never makes the learner feel slow",
    successCriteria: "User correctly identified at least two of the three clicks by name (c, q, or x) when described.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
