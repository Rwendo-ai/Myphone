import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Pagising — Morning Routine',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Morning in the Philippines starts with the rooster, the smell of rice, and a quick almusal — breakfast. Today we'll narrate your morning the way a Filipino would: gumigising, naliligo, nag-aalmusal.",
    culturalNote: "Filipinos often describe routines using the present-tense (reduplicated) form — even for habits. 'Gumigising ako ng alas siyete' = 'I wake at 7' (literally 'I am-waking at 7'). For habits, the doubled syllable feels alive.",
  },

  chunks: [
    {
      id: 'gumigising_alas_siyete',
      target: 'Gumigising ako ng alas siyete',
      native: 'I wake up at 7',
      literal: 'Waking I at hour-seven',
      emoji: '⏰',
      phonetic: 'gu-mi-GI-sing a-KO nang a-LAS sye-TE',
      audioRef: null,
    },
    {
      id: 'naliligo_ako',
      target: 'Naliligo ako',
      native: 'I shower / I bathe',
      literal: 'Bathing I',
      emoji: '🚿',
      phonetic: 'na-li-LI-go a-KO',
      audioRef: null,
    },
    {
      id: 'nag_aalmusal_ako',
      target: 'Nag-aalmusal ako',
      native: 'I have breakfast',
      literal: 'Having-breakfast I',
      emoji: '🍳',
      phonetic: 'nag-a-al-MU-sal a-KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'mag- + reduplication (habits/now)',
    explanation: "When mag- verbs go present, you double the first syllable of the **root**: mag-almusal → **nag-a**-almusal. The 'mag' becomes 'nag' for the actor-doing-it form. Same logic as um- verbs — just dressed differently.",
    examples: [
      { target: 'Nag-aaral ako', native: 'I am studying / I study' },
      { target: 'Naglalakad siya', native: 'She is walking' },
      { target: 'Nagluluto si nanay', native: 'Mom is cooking' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Gumigising ako ng alas siyete', right: 'I wake up at 7' },
        { left: 'Naliligo ako', right: 'I shower' },
        { left: 'Nag-aalmusal ako', right: 'I have breakfast' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell your tita how your morning starts.",
      sentence: '_____ ako ng alas siyete.',
      options: ['Gumigising', 'Gumising', 'Gigising'],
      correct: 'Gumigising',
      context: 'Doubled syllable = habit / right now. Gumising (no doubling) = woke.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I shower',
      correct: ['Naliligo ako', 'naliligo ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I have breakfast"',
      words: ['Nag-aalmusal', 'ako'],
      correct: ['Nag-aalmusal', 'ako'],
      translation: 'I have breakfast',
    },
    {
      type: 'multiple_choice',
      instruction: "You're describing your morning as a daily routine.",
      question: 'Which form fits "I wake up at 7" as a habit?',
      options: [
        { text: 'Gumigising ako ng alas siyete', correct: true },
        { text: 'Gumising ako ng alas siyete', correct: false },
        { text: 'Gigising ako ng alas siyete', correct: false },
      ],
      explanation: 'Habits use the present (doubled-syllable) form. Gumising = woke. Gigising = will wake.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I have breakfast',
      correct: ['Nag-aalmusal ako', 'nag-aalmusal ako'],
    },
  ],

  rwenDialogue: {
    intro: 'Your tita asks about your weekday routine over Sunday lunch.',
    lines: [
      {
        speaker: 'npc',
        target: 'Anong oras ka gumigising tuwing umaga?',
        native: 'What time do you wake up every morning?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gumigising ako ng alas siyete, tapos naliligo', native: 'I wake at 7, then I shower', correct: true, feedback: 'Beautiful — chained two habit verbs naturally.' },
          { target: 'Gumising ako', native: 'I woke up', correct: false, feedback: "Past tense. She's asking about your daily routine." },
          { target: 'Pwede ba?', native: 'May I?', correct: false, feedback: "Off-topic — she asked about wake-up time." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, maaga ka palang gumigising!',
        native: 'Oh, you wake up early then!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Habits live in the doubled syllable. Once your ear hears it, you can't unhear it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I wake up at 7 (in Tagalog)', correct: ['Gumigising ako ng alas siyete', 'gumigising ako ng alas siyete'] },
      { prompt: 'I have breakfast (in Tagalog)', correct: ['Nag-aalmusal ako', 'nag-aalmusal ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow morning, narrate your first three actions in Tagalog — even just to yourself. Gumigising ako. Naliligo ako. Nag-aalmusal ako.",
    rwenSignoff: 'Magandang umaga — good morning.',
  },

  phase8: {
    scenario: "Sunday lunch at your tita's house. She's curious about your weekday mornings — what time you wake, whether you shower right away, what you eat. You'll narrate your actual morning routine using habit-form verbs (the reduplicated present).",
    rwenRole: "Tita Beth — your auntie, ~62, asks the way titas do (gentle but pointed); delights in any answer that uses the doubled-syllable habit form.",
    successCriteria: "User describes a morning routine using at least three habit-form verbs (e.g. Gumigising ako, Naliligo ako, Nag-aalmusal ako) with the doubled-syllable pattern correctly applied.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
