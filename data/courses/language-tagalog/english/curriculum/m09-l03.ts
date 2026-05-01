import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'Malayo ba? — Is it far?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Manila traffic, 'five minutes' could mean five minutes — or thirty. But the question is the same. Today we learn how to ask 'Is it far?' and decode the answer like a local.",
    culturalNote: "Filipino time estimates are famously elastic. 'Limang minuto lang' (just 5 minutes) is a polite minimum — it could be 15. 'Kanto lang' (just at the corner) usually really IS the corner. Locals also measure walking distance in landmarks: 'three Jollibees away' is a real unit.",
  },

  chunks: [
    {
      id: 'malayo_ba',
      target: 'Malayo ba?',
      native: 'Is it far?',
      literal: 'Far question-marker?',
      emoji: '🛣️',
      phonetic: 'mah-LAH-yoh bah',
      audioRef: null,
    },
    {
      id: 'limang_minuto_lang',
      target: 'Limang minuto lang',
      native: 'Just 5 minutes',
      literal: 'Five-minute only',
      emoji: '⏱️',
      phonetic: 'LEE-mahng mee-NOO-toh lahng',
      audioRef: null,
    },
    {
      id: 'kanto_lang',
      target: 'Kanto lang',
      native: 'Just at the corner',
      literal: 'Corner only',
      emoji: '📍',
      phonetic: 'KAHN-toh lahng',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Yes/no questions with "ba"',
    explanation: "Drop 'ba' into a statement and it becomes a yes/no question. 'Malayo' = far → 'Malayo ba?' = Is it far? You'll hear 'ba' everywhere — 'Mahal ba?' (Is it expensive?), 'Sarap ba?' (Is it tasty?).",
    examples: [
      { target: 'Malayo ba?', native: 'Is it far?' },
      { target: 'Malapit ba?', native: 'Is it near?' },
      { target: 'Mahal ba?', native: 'Is it expensive?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Malayo ba?', right: 'Is it far?' },
        { left: 'Limang minuto lang', right: 'Just 5 minutes' },
        { left: 'Kanto lang', right: 'Just at the corner' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Turn 'malayo' (far) into a question",
      sentence: 'Malayo _____?',
      options: ['ba', 'po', 'ang'],
      correct: 'ba',
      context: "'Ba' is the question marker — it turns any adjective into a yes/no question.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Is it far? (respectful — add "po")',
      correct: ['Malayo po ba?', 'malayo po ba', 'Malayo ba po?', 'malayo ba po', 'Malayo po ba'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "Just 5 minutes"',
      words: ['minuto', 'lang', 'Limang'],
      correct: ['Limang', 'minuto', 'lang'],
      translation: 'Just 5 minutes',
    },
    {
      type: 'multiple_choice',
      instruction: "You ask 'Malayo ba?' The vendor smiles and points two shops down. What's she likely to say?",
      question: 'Pick the most natural answer',
      options: [
        { text: 'Kanto lang', correct: true },
        { text: 'Diretso po', correct: false },
        { text: 'Saan ang banyo?', correct: false },
      ],
      explanation: "Two shops down = corner-distance. 'Kanto lang' literally means 'just the corner'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Just at the corner',
      correct: ['Kanto lang', 'kanto lang'],
    },
  ],

  rwenDialogue: {
    intro: "You're hunting for a famous lechon spot in Cebu. You ask a passer-by — a teenager scrolling on her phone. Find out if you should walk or grab a tricycle.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, malayo ba?', native: "Excuse me, is it far?", correct: true, feedback: 'Polite, clear. She looks up.' },
          { target: 'Malayo!', native: 'Far!', correct: false, feedback: "That's a statement, not a question. She'll be confused." },
          { target: 'Diretso lang', native: 'Just go straight', correct: false, feedback: "You're giving directions to her — wrong way around!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hindi po, kanto lang.',
        native: "No sir/ma'am, just at the corner.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Kanto lang — you're closer than you thought. The lechon is near.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Is it far? (in Tagalog)', correct: ['Malayo ba?', 'malayo ba', 'Malayo ba'] },
      { prompt: 'Just 5 minutes (in Tagalog)', correct: ['Limang minuto lang', 'limang minuto lang'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Estimate the distance to one place near you in Tagalog. Pharmacy? 'Limang minuto lang.' Coffee? 'Kanto lang.' Speak it out.",
    rwenSignoff: "Hindi malayo — not far. Bukas ulit.",
  },

  phase8: {
    scenario: "You're in Makati, looking for a small ramen place a friend recommended. You ask a security guard outside a bank if it's far — he knows the area well. The actual spot is about 7 minutes' walk, two corners away. You need to figure out from his answer whether to walk or grab a Grab.",
    rwenRole: "Kuya Ronnie — bank security guard, ~35, friendly, gives accurate distance estimates and uses landmark phrasing ('katabi ng 7-Eleven', 'tapat ng Mercury Drug').",
    successCriteria: "User asks 'Malayo ba?' (with or without 'po'), then either thanks Kuya Ronnie or asks a follow-up. They demonstrate understanding by deciding to walk if he says 'kanto lang' or 'limang minuto lang'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
