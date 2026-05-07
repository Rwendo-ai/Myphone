import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-agradecido',
  module: 10,
  lesson: 5,
  title: 'Estoy agradecido/a — Gratitude & Pride',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish gratitude is more than 'gracias'. 'Estoy agradecido' goes deeper — 'I am grateful, the state of carrying thanks inside me'. Pair it with 'Estoy orgulloso de ti' (I'm proud of you) and you have two of the warmest sentences anyone in Spanish can hear from a friend or a parent.",
    culturalNote: "In many Latin American families, expressing pride out loud — 'Estoy orgulloso de ti, mijo/mija' — is a culturally significant moment. It's not casual praise. Saying it to a child, a sibling, a friend who just achieved something hard is a small ceremony of love. Don't waste it; don't ration it either.",
  },

  chunks: [
    {
      id: 'estoy_agradecido',
      target: 'Estoy agradecido/a',
      native: 'I am grateful',
      literal: 'Estoy + agradecido (-o) / agradecida (-a) — carrying thanks',
      emoji: '🙏',
      phonetic: 'es-TOY ah-grah-deh-SEE-doh/dah',
      audioRef: null,
    },
    {
      id: 'estoy_orgulloso',
      target: 'Estoy orgulloso/a de ti',
      native: 'I am proud of you',
      literal: 'Estoy + orgulloso/a + de ti (of you)',
      emoji: '🌟',
      phonetic: 'es-TOY or-goo-YO-soh/sah deh tee',
      audioRef: null,
    },
    {
      id: 'mil_gracias',
      target: 'Mil gracias / De todo corazón',
      native: 'A thousand thanks / From all my heart',
      literal: 'Mil gracias (a thousand thanks); De todo corazón (with the whole heart)',
      emoji: '❤️',
      phonetic: 'meel GRAH-see-ahs / deh TOH-doh ko-rah-SOHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estar + agradecido/orgulloso + de + person/thing',
    explanation: "Both gratitude and pride point at someone. The pattern: 'Estoy [adjective] de [person/thing]'. Estoy agradecido de ti (I'm grateful for you). Estoy orgulloso de mi hija (I'm proud of my daughter). Estoy agradecido por todo (I'm grateful for everything — 'por' for things, 'de' for people).",
    examples: [
      { target: 'Estoy agradecido/a de ti', native: "I'm grateful for you" },
      { target: 'Estoy orgulloso/a de mi hijo', native: "I'm proud of my son" },
      { target: 'Mil gracias, de todo corazón', native: 'A thousand thanks, from all my heart' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the gratitude/pride phrase to its meaning',
      pairs: [
        { left: 'Estoy agradecido/a', right: 'I am grateful' },
        { left: 'Estoy orgulloso/a de ti', right: 'I am proud of you' },
        { left: 'Mil gracias', right: 'A thousand thanks' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right preposition before a person',
      sentence: 'Estoy orgullosa _____ ti, mija.',
      options: ['de', 'a', 'por'],
      correct: 'de',
      context: "I'm proud of you, daughter.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a man speaking)',
      prompt: 'I am grateful',
      correct: ['Estoy agradecido', 'estoy agradecido'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your sister just defended her thesis. The proudest sentence you can say in Spanish:',
      question: 'Express deep pride in Spanish:',
      options: [
        { text: 'Estoy muy orgulloso/a de ti, hermana.', correct: true },
        { text: 'Estoy enojado contigo', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "'Estoy muy orgulloso/a de ti' — adjective ending matches the speaker, not the sister; 'de ti' points the pride at her. Add 'hermana' to make it warm and family.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am grateful for everything, from all my heart'",
      words: ['Estoy', 'agradecido/a', 'por', 'todo,', 'de', 'todo', 'corazón.'],
      correct: ['Estoy', 'agradecido/a', 'por', 'todo,', 'de', 'todo', 'corazón.'],
      translation: 'I am grateful for everything, from all my heart',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a woman speaking)',
      prompt: 'I am proud of you',
      correct: ['Estoy orgullosa de ti', 'estoy orgullosa de ti'],
    },
  ],

  rwenDialogue: {
    intro: "Your aunt in Santiago hosted you for two weeks while you took a Spanish course. You're at the airport about to leave.",
    lines: [
      {
        speaker: 'npc',
        target: 'Te voy a extrañar. Cuídate mucho, mija/mijo.',
        native: "I'm going to miss you. Take great care of yourself.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tía, estoy muy agradecido/a. Mil gracias por todo, de todo corazón.', native: "Aunt, I'm so grateful. A thousand thanks for everything, from all my heart.", correct: true, feedback: "Three layers — agradecido (the deep word), mil gracias (the warm phrase), de todo corazón (from the heart). She'll remember this departure for years." },
          { target: 'Gracias', native: 'Thanks', correct: false, feedback: "Two weeks of love deserves more than 'gracias' — 'Estoy muy agradecido/a. Mil gracias por todo, de todo corazón.'" },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "Take a moment first — 'Tía, estoy muy agradecido/a. Mil gracias por todo, de todo corazón.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Vuelve pronto. Esta también es tu casa.',
        native: 'Come back soon. This is your home too.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three Spanish phrases — and your aunt knows you didn't just learn the language; you learned how to love in it. That's the real lesson today.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am grateful', correct: ['Estoy agradecido', 'estoy agradecido', 'Estoy agradecida', 'estoy agradecida'] },
      { prompt: 'I am proud of you', correct: ['Estoy orgulloso de ti', 'estoy orgulloso de ti', 'Estoy orgullosa de ti', 'estoy orgullosa de ti'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell one person today — in Spanish — 'Estoy agradecido/a por ti' (I'm grateful for you). A friend, a family member, anyone. Watch what changes between you.",
    rwenSignoff: "La gratitud dicha en voz alta cambia las habitaciones. Hasta mañana.",
  },

  phase8: {
    scenario: "The last evening of a two-week stay at your tía Mónica's house in Santiago de Chile. Tomorrow you fly home. She's just brewed coffee and sat down across from you, and the silence is the kind where someone is waiting for you to speak first — in Spanish, properly, the way she's hoped you would by now.",
    rwenRole: "Tía Mónica — ~65, has been quietly proud of your Spanish all fortnight, will tear up if you do this right; she wants to hear that two weeks meant something, in her language.",
    successCriteria: "User uses 'Estoy agradecido/a' (NOT just 'gracias') with correct gender ending, names her specifically ('por ti, tía' or 'de ti'), and lands at least one second-layer phrase — 'Mil gracias' OR 'de todo corazón'. Bonus if they say 'Estoy orgulloso/a de ser tu sobrino/a' or similar.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
