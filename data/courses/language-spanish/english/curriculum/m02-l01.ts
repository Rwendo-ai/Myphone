import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-por-favor',
  module: 2,
  lesson: 1,
  title: 'Por favor — Please',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish does politeness differently than English. The tone of voice carries a lot of the work — but native speakers still expect 'por favor' on direct requests. Skip it and you sound like you're issuing orders.",
    culturalNote: "Latin American Spanish is famously warm but it's not loose with politeness. Adding 'por favor' to a request is the line between asking and demanding. With strangers, vendors, or anyone older than you, default to 'usted' (formal) over 'tú' until invited otherwise — Mexico City and Bogotá especially.",
  },

  chunks: [
    {
      id: 'por_favor',
      target: 'Por favor',
      native: 'Please',
      literal: 'For favor',
      emoji: '🙏',
      phonetic: 'por fah-VOR',
      audioRef: null,
    },
    {
      id: 'ayudame_por_favor',
      target: 'Ayúdeme, por favor',
      native: 'Please help me (formal)',
      literal: 'Help-me, please',
      emoji: '🤝',
      phonetic: 'ah-YOO-deh-meh por fah-VOR',
      audioRef: null,
    },
    {
      id: 'de_nada',
      target: 'De nada',
      native: "You're welcome / It's nothing",
      literal: 'Of nothing',
      emoji: '✅',
      phonetic: 'deh NAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Por favor — the politeness key',
    explanation: "'Por favor' can go at the start or end of any request and softens it instantly. With strangers, pair it with the formal 'usted' verb form — 'ayúdeme' (help me) rather than the informal 'ayúdame'. Same word, different ending, very different register.",
    examples: [
      { target: 'Por favor, dígame...', native: 'Please tell me... (formal)' },
      { target: 'Ayúdeme, por favor', native: 'Please help me (formal)' },
      { target: 'De nada', native: "You're welcome (reply to gracias)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Por favor', right: 'Please' },
        { left: 'Ayúdeme', right: 'Help me (formal)' },
        { left: 'De nada', right: "You're welcome" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add please to make this polite',
      sentence: 'Ayúdeme, _____.',
      options: ['por favor', 'gracias', 'de nada'],
      correct: 'por favor',
      context: 'You need directions from a stranger on the street.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Please',
      correct: ['Por favor', 'por favor'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please help me" (formal)',
      words: ['por favor', 'Ayúdeme,'],
      correct: ['Ayúdeme,', 'por favor'],
      translation: 'Please help me',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "You're welcome / It's nothing",
      correct: ['De nada', 'de nada'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Gracias" (thank you). What do you reply?',
      question: 'Choose the correct response',
      options: [
        { text: 'De nada', correct: true },
        { text: 'Por favor', correct: false },
        { text: 'Ayúdeme', correct: false },
      ],
      explanation: "'De nada' is the natural reply to 'gracias' — like 'you're welcome' or 'it's nothing'.",
    },
  ],

  rwenDialogue: {
    intro: "You're at the entrance to the Mexico City Metro at Pino Suárez and your card won't tap. A station worker is nearby. Ask politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ayúdeme, por favor', native: 'Please help me', correct: true, feedback: "Polite and formal — exactly right for a stranger doing their job. They walk over." },
          { target: 'Ayúdame', native: 'Help me (informal)', correct: false, feedback: "Grammatically fine but 'ayúdame' is informal and missing 'por favor'. With a stranger working a metro booth, 'ayúdeme, por favor' lands much better." },
          { target: '¿Cómo está?', native: 'How are you?', correct: false, feedback: "A polite opener — but get to your actual ask. 'Ayúdeme, por favor' is what you need here." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sí, claro. ¿Qué necesita?',
        native: 'Yes, of course. What do you need?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muchas gracias', native: 'Thank you very much', correct: true, feedback: "Warm and clear. The interaction lands well." },
          { target: 'De nada', native: "You're welcome", correct: false, feedback: "That's the REPLY to thanks — but right now you're the one who should be saying thanks." },
          { target: 'Por favor', native: 'Please', correct: false, feedback: "They're already helping — now it's time to thank them, not ask again." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Por favor' plus the usted form — that's the unlock for any stranger interaction in Mexico, Colombia, or anywhere south of the Río Grande.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please', correct: ['Por favor', 'por favor'] },
      { prompt: "You're welcome / It's nothing", correct: ['De nada', 'de nada'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Add 'por favor' to every request you make today — even internally, even in English. Notice how it changes the feeling of the ask.",
    rwenSignoff: "Politeness opens every door. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're at the Pino Suárez metro entrance in Mexico City CDMX with a dead Metrobús card and a train leaving in three minutes. A station worker in a blue vest is sorting tickets at the booth — you have to flag him in politely before the rush hits.",
    rwenRole: "Don Rodrigo — ~50, Metro CDMX station attendant; courteous but no patience for tourists barking 'help me' without 'por favor' or the formal verb. He'll help anyone who asks the right way.",
    successCriteria: "User opens with 'Ayúdeme, por favor' (NOT informal 'ayúdame' and NOT bare 'ayúdeme' without 'por favor'), uses 'por favor' again to soften the follow-up question about the card, and replies with 'De nada' if Don Rodrigo thanks them for their patience — not the other way around.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
