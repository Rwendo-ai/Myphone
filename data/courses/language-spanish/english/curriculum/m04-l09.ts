import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-de-del-al',
  module: 4,
  lesson: 9,
  title: 'De, Del, Al — Possession & Direction',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English uses an apostrophe-s to show possession: 'María's book'. Spanish has no apostrophe. Instead it flips it round: 'el libro de María' — literally 'the book of María'. And when 'de' meets 'el' (the masculine article) they MUST contract to 'del'. 'a' + 'el' becomes 'al'. These tiny contractions are mandatory — you can't say 'de el' or 'a el'.",
    culturalNote: "Spanish is one of the most aggressive contractors among Romance languages — but only in these two specific cases. 'de + el = del' (of/from the). 'a + el = al' (to the). Other combinations stay separate: 'de la', 'a la', 'de los', 'a las' all stay as two words. It's a small rule, but skipping it instantly marks you as a beginner.",
  },

  chunks: [
    {
      id: 'libro_de_maria',
      target: 'el libro de María',
      native: "María's book (lit. 'the book of María')",
      literal: 'el + libro + de (of) + María',
      emoji: '📖',
      phonetic: 'el LEE-broh deh mah-REE-ah',
      audioRef: null,
    },
    {
      id: 'del',
      target: 'del profesor',
      native: 'of/from the teacher (de + el = del)',
      literal: 'de + el → del — mandatory contraction',
      emoji: '👨‍🏫',
      phonetic: 'del proh-feh-SOHR',
      audioRef: null,
    },
    {
      id: 'al',
      target: 'al café',
      native: 'to the café (a + el = al)',
      literal: 'a + el → al — mandatory contraction',
      emoji: '☕',
      phonetic: 'ahl kah-FEH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'de + el = del; a + el = al',
    explanation: "To show possession, use 'de': 'el coche de Juan' (Juan's car). When 'de' or 'a' meets 'el' (masculine singular article), they MUST contract: de + el → del; a + el → al. They do NOT contract with la, los, las — only with el. So 'de la mesa' (of the table) stays separate, but 'del libro' (of the book) is mandatory.",
    examples: [
      { target: 'el libro de la profesora', native: "the teacher's book — feminine, no contraction" },
      { target: 'el libro del profesor', native: "the teacher's book — masculine, MUST contract de+el→del" },
      { target: 'Voy al café / Voy a la oficina', native: 'I go to the café (al) / to the office (a la, no contraction)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the contraction rule',
      pairs: [
        { left: 'de + el', right: 'del' },
        { left: 'a + el', right: 'al' },
        { left: 'de + la', right: 'de la (no contraction)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: '"I am going to the cinema" — pick the correct phrasing',
      question: 'Voy ___ cine.',
      options: [
        { text: 'al (a + el cine — must contract)', correct: true },
        { text: 'a el (you cannot say this in Spanish)', correct: false },
        { text: 'a la (would be feminine, but cine is masc.)', correct: false },
      ],
      explanation: "'Cine' is masculine ('el cine'). 'a' + 'el' MUST contract to 'al'. 'Voy al cine.' Saying 'a el cine' is grammatically wrong.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "María's book",
      correct: ['el libro de María', 'El libro de María', 'el libro de Maria', 'El libro de Maria'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right (contracted or non-contracted) form',
      sentence: 'El coche _____ profesor está aquí.',
      options: ['del', 'de el', 'de la'],
      correct: 'del',
      context: "The teacher's car is here — de + el (masc.) MUST contract to del.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I go to the cinema with the teacher\'s sister"',
      words: ['voy', 'al', 'la', 'cine', 'con', 'hermana', 'del', 'profesor'],
      correct: ['voy', 'al', 'cine', 'con', 'la', 'hermana', 'del', 'profesor'],
      translation: "I go to the cinema with the teacher's sister",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I go to the café',
      correct: ['Voy al café', 'voy al café', 'Voy al cafe', 'voy al cafe'],
    },
  ],

  rwenDialogue: {
    intro: "Lucía is showing you a photo on her phone — her family at a Sunday lunch. She tests whether you remember to contract 'de + el' and 'a + el' as you describe what you see.",
    lines: [
      {
        speaker: 'npc',
        target: 'Esta es la casa de mis padres. Y hoy vamos a la casa de mi abuelo. ¿Cómo lo dices?',
        native: 'This is my parents\' house. And today we go to my grandfather\'s house. How do you say it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Es la casa de tus padres. Vais a la casa del abuelo.', native: "It's your parents' house. You go to the grandfather's house. (de + el → del)", correct: true, feedback: "Perfecto. 'De los padres' stays separate (plural), but 'del abuelo' contracts because it's de + el." },
          { target: 'Vais a la casa de el abuelo.', native: 'Wrong — failed to contract', correct: false, feedback: "'De el' MUST contract to 'del'. So: 'la casa del abuelo'. Same with 'a el' → 'al'." },
          { target: 'Vais al la casa.', native: 'Wrong contraction', correct: false, feedback: "Only 'a + el' contracts to 'al'. With 'la' it stays as 'a la': 'Vais a la casa'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. Two contractions, mandatory, simple. Skip them and you sound like a textbook robot.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "the teacher's book (masculine — use contraction)", correct: ['el libro del profesor', 'El libro del profesor'] },
      { prompt: 'I go to the café', correct: ['Voy al café', 'voy al café', 'Voy al cafe', 'voy al cafe'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say silently three possessions and three movements: 'el coche del profesor, el libro de la profesora, voy al café, voy a la oficina'. Feel where the contraction is mandatory and where it isn't.",
    rwenSignoff: "Tiny contractions, mandatory, easy. Tomorrow we put it all together. Hasta mañana.",
  },

  phase8: {
    scenario: "Lucía is giving you a quick walking tour of her neighbourhood in Malasaña. She points to her mother's flat, then says they're heading to the grandfather's place after, and asks if you want to come along to the bookshop on the corner. Every other sentence forces a 'de + el → del' or 'a + el → al' contraction.",
    rwenRole: "Lucía — narrating the walking tour in Spanish, watching whether you remember to contract: 'la casa del abuelo', 'voy al café', 'el dueño del bar' — and gently flags any 'de el' or 'a el' that slips out.",
    successCriteria: "User produces at least two correct 'del' contractions ('el libro del profesor', 'la casa del abuelo') and one correct 'al' ('voy al café', 'al cine'), AND at least one non-contraction with feminine ('a la oficina', 'de la profesora') showing they understand contraction is only for el. No 'de el' or 'a el' errors.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
