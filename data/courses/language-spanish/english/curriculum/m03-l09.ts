import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-no-entiendo',
  module: 3,
  lesson: 9,
  title: 'No Entiendo — Asking to Clarify',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Real Spanish conversations break down. Words get lost, people speak too fast, somebody uses slang you've never heard. The skill that separates beginners-who-quit from beginners-who-keep-going is the ability to ASK — clearly, politely, repeatedly. Today's three phrases will save you hundreds of conversations.",
    culturalNote: "Latin Americans almost never get annoyed at being asked to repeat or rephrase. Asking '¿cómo?' or '¿puedes repetir?' signals you're paying attention, not failing. The opposite — silently nodding when you didn't catch something — is what creates awkward moments later when you couldn't follow up.",
  },

  chunks: [
    {
      id: 'no_entiendo',
      target: 'No entiendo',
      native: "I don't understand",
      literal: 'Not I-understand',
      emoji: '🤷',
      phonetic: 'no en-TYEN-doh',
      audioRef: null,
    },
    {
      id: 'puedes_repetir',
      target: '¿Puedes repetir, por favor?',
      native: 'Can you repeat that, please?',
      literal: 'Can-you to-repeat, please?',
      emoji: '🔁',
      phonetic: 'PWEH-des reh-peh-TEER por fah-BOR',
      audioRef: null,
    },
    {
      id: 'que_significa',
      target: '¿Qué significa...?',
      native: 'What does ... mean?',
      literal: 'What it-means...?',
      emoji: '❓',
      phonetic: 'keh seeg-nee-FEE-kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tú vs Usted — informal vs formal "you"',
    explanation: "When asking someone to repeat, the verb form changes with formality. '¿Puedes repetir?' uses 'tú' (informal — friends, peers, kids). '¿Puede repetir?' uses 'usted' (formal — strangers, elders, professional contexts). Drop the final 's' for usted. Most Latin Americans default to 'tú' fast once introduced; in Spain and parts of Colombia, 'usted' is held longer. When in doubt, start with usted and let them invite you to switch.",
    examples: [
      { target: '¿Puedes repetir? (informal — friend)', native: 'Can you repeat? (tú form)' },
      { target: '¿Puede repetir? (formal — stranger/elder)', native: 'Can you repeat? (usted form)' },
      { target: '¿Qué significa esa palabra?', native: 'What does that word mean?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'No entiendo', right: "I don't understand" },
        { left: '¿Puedes repetir, por favor?', right: 'Can you repeat that, please?' },
        { left: '¿Qué significa...?', right: 'What does ... mean?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re asking an elderly stranger — use the formal form',
      sentence: '¿_____ repetir, por favor?',
      options: ['Puede', 'Puedes', 'Puedo'],
      correct: 'Puede',
      context: 'No final "s" with usted — formality changes the verb.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't understand",
      correct: ['No entiendo', 'no entiendo'],
    },
    {
      type: 'multiple_choice',
      instruction: "You hear a word you don't know — 'chido'. The best ask is:",
      question: 'Choose the question',
      options: [
        { text: '¿Qué significa "chido"?', correct: true },
        { text: 'No entiendo "chido".', correct: false },
        { text: 'Repite "chido".', correct: false },
      ],
      explanation: "'¿Qué significa X?' asks specifically for the meaning. 'No entiendo' is more general — it tells them you missed something but doesn't ask what. (For the record, 'chido' is Mexican slang for 'cool'.)",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I don\'t understand. Can you repeat, please?" (informal)',
      words: ['favor', 'No', 'entiendo.', 'por', '¿Puedes', 'repetir,'],
      correct: ['No', 'entiendo.', '¿Puedes', 'repetir,', 'por', 'favor'],
      translation: "I don't understand. Can you repeat, please?",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What does "principiante" mean?',
      correct: ['¿Qué significa "principiante"?', '¿Qué significa principiante?', 'Qué significa principiante?', 'que significa principiante?', '¿Qué significa principiante', 'Qué significa "principiante"?'],
    },
  ],

  rwenDialogue: {
    intro: "Video call with abuela in Monterrey. She launches into a story about your tío Roberto and uses a word you've never heard.",
    lines: [
      {
        speaker: 'npc',
        target: 'Y entonces, tu tío Roberto se puso bien chocho con la nieta.',
        native: 'And then, your uncle Roberto got really doting with the granddaughter.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Abuela, no entiendo. ¿Qué significa "chocho"?', native: 'Grandma, I don\'t understand. What does "chocho" mean?', correct: true, feedback: "Two-step ask — flag the gap, then point at the exact word. She'll explain. ('Chocho' = doting/sentimental about grandkids, very common with abuelos.)" },
          { target: 'Sí, sí, abuela.', native: 'Yes, yes, grandma.', correct: false, feedback: "Don't fake it — abuela WILL ask a follow-up question and you'll be stranded. 'No entiendo' is always better than nodding through." },
          { target: 'Repite, abuela!', native: 'Repeat, grandma! (sounds curt)', correct: false, feedback: "The bare imperative 'Repite!' sounds like an order — and to abuela, rude. '¿Puedes repetir, por favor?' is the polite version." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Ay, m\'ija! "Chocho" es cuando un abuelo está bien enamorado de sus nietos.',
        native: 'Oh sweetie! "Chocho" is when a grandparent is really smitten with their grandkids.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She just taught you a word. That's the whole point of asking — every '¿qué significa?' adds one more piece. Beginner becomes intermediate one word at a time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I don't understand", correct: ['No entiendo', 'no entiendo'] },
      { prompt: 'Can you repeat, please? (informal "tú")', correct: ['¿Puedes repetir, por favor?', 'Puedes repetir, por favor?', '¿Puedes repetir por favor?', 'puedes repetir por favor?', '¿Puedes repetir, por favor', 'Puedes repetir por favor?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you're hearing or watching Spanish (a song, a show, a conversation) and a word stops you cold, say out loud: '¿Qué significa [that word]?' Look it up. That's the loop you'll run for years.",
    rwenSignoff: "Asking is the opposite of failing. Every '¿qué significa?' is one rung up the ladder. ¡Sigue preguntando!",
  },

  phase8: {
    scenario: "Sunday afternoon video call with abuela in Monterrey. She tells a long family story full of regional Mexican slang you don't recognise — you'll need to interrupt politely and ask for help.",
    rwenRole: "Abuela Cuca — your grandmother in Monterrey, ~80, story-teller, drops Mexican slang and old-fashioned phrases unselfconsciously, expects you to ask when lost.",
    successCriteria: "User uses 'No entiendo' to flag a gap, then '¿Qué significa [word]?' to point at the unknown word, AND adapts politeness — uses 'puedes' (tú) with grandma but recognises 'puede' (usted) for strangers/elders. Doesn't fake comprehension.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
