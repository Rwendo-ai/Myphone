import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-no-se',
  module: 2,
  lesson: 4,
  title: "No sé — I Don't Know",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a secret: 'I don't know' is one of the most useful phrases in any new language. It's honest. It invites help. And in Spanish, said with calm — not panic — it sounds confident.",
    culturalNote: "In Latin America, admitting 'no sé' is respected — it shows self-awareness. Bluffing and giving wrong directions or wrong information is considered worse than saying you don't know. A common follow-up is 'pero creo que...' (but I think...) — honest about the gap, generous with the guess.",
  },

  chunks: [
    {
      id: 'no_se',
      target: 'No sé',
      native: "I don't know",
      literal: 'Not I-know',
      emoji: '🤷',
      phonetic: 'no SEH',
      audioRef: null,
    },
    {
      id: 'lo_se',
      target: 'Lo sé',
      native: 'I know (it)',
      literal: 'It I-know',
      emoji: '💡',
      phonetic: 'lo SEH',
      audioRef: null,
    },
    {
      id: 'creo_que',
      target: 'Creo que...',
      native: 'I think (that)... / I believe...',
      literal: 'I-believe that',
      emoji: '🤔',
      phonetic: 'KREH-oh keh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'No — the negation prefix',
    explanation: "Spanish negates verbs by putting 'no' directly before them. 'Sé' (I know) → 'no sé' (I don't know). 'Entiendo' (I understand) → 'no entiendo'. Simple and consistent — no verb-form changes, just 'no' in front. To soften 'no sé', chain it with 'pero creo que...' (but I think...) — admit the gap, then offer the best guess.",
    examples: [
      { target: 'Lo sé', native: 'I know (it)' },
      { target: 'No sé', native: "I don't know" },
      { target: 'No sé, pero creo que...', native: "I don't know, but I think..." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'No sé', right: "I don't know" },
        { left: 'Lo sé', right: 'I know' },
        { left: 'Creo que', right: 'I think / I believe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the honest answer',
      sentence: 'No sé, pero _____ que sí.',
      options: ['creo', 'sé', 'siento'],
      correct: 'creo',
      context: "Someone asks you something you're not certain about.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't know",
      correct: ['No sé', 'no sé', 'No se', 'no se'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks for directions and you genuinely don't know. What's the honest, helpful answer?",
      question: 'Choose the best response',
      options: [
        { text: 'No sé, pregunte a alguien más por favor', correct: true },
        { text: 'Lo sé', correct: false },
        { text: '¿Cómo está?', correct: false },
      ],
      explanation: "'No sé, pregunte a alguien más por favor' — I don't know, please ask someone else — is honest AND helpful. Bluffing directions is worse than admitting the gap.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I think so"',
      words: ['que', 'sí', 'Creo'],
      correct: ['Creo', 'que', 'sí'],
      translation: 'I think so',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I know (it)',
      correct: ['Lo sé', 'lo sé', 'Lo se', 'lo se'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks you a tricky question about Mexican slang you haven't learned yet.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "¿Sabes qué quiere decir 'ahorita' en México?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No sé. Creo que quiere decir "ahora".', native: "I don't know. I think it means 'now'.", correct: true, feedback: "Honest and thoughtful. Rwen smiles — exactly the right move." },
          { target: 'Lo sé', native: 'I know', correct: false, feedback: "Only say 'lo sé' if you actually do — bluffing slang in front of locals lands badly." },
          { target: 'No sé', native: "I don't know", correct: false, feedback: "Good and honest — adding 'creo que...' shows you're trying even when unsure. That extra step matters." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sí — y no. 'Ahorita' técnicamente quiere decir 'ahora', pero en México puede significar 'en cinco minutos', 'en una hora', o nunca. La elasticidad del 'ahorita' es legendaria.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Not knowing is the beginning of knowing. Saying 'no sé' out loud is half the battle.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I don't know", correct: ['No sé', 'no sé', 'No se', 'no se'] },
      { prompt: 'I think / I believe (start of phrase)', correct: ['Creo que', 'creo que'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time you don't know something today, say 'no sé' — even just quietly to yourself. Own the not-knowing.",
    rwenSignoff: "Honesty is the fastest road to fluency. ¡Buen camino!",
  },

  phase8: {
    scenario: "A teenage girl with a school backpack stops you on Avenida Insurgentes in Mexico City and asks — in fast Spanish — whether the Metrobús to Indios Verdes has already left. You have no real idea, but you remember seeing one pull off five minutes ago. Don't bluff her into missing the connection.",
    rwenRole: "Camila — 16, school uniform, anxious, holding a Metrobús card; she'll trust whatever you say, so the cost of a fake answer is real.",
    successCriteria: "User answers honestly with 'No sé' (NOT 'sí' to save face), then hedges with 'pero creo que...' to share the maybe-sighting as a guess rather than a fact — the lesson's negation pattern under live pressure.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
