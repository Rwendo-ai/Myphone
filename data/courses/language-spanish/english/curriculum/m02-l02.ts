import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-gracias',
  module: 2,
  lesson: 2,
  title: 'Gracias — Thank You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Gracias is probably the one Spanish word every English speaker already knows. But knowing it isn't using it well. A flat 'gracias' lands like a flat 'thanks' — fine, forgettable. Let's make yours land.",
    culturalNote: "Across Latin America, gratitude is given verbally and often. 'Muchas gracias' (thank you very much) for small things isn't excessive — it's normal. Adding 'qué amable' (how kind of you) to acknowledge the person, not just the act, marks you as someone who notices. In Bogotá especially, this kind of warmth gets returned tenfold.",
  },

  chunks: [
    {
      id: 'gracias',
      target: 'Gracias',
      native: 'Thank you',
      literal: 'Graces',
      emoji: '🙏',
      phonetic: 'GRAH-syas',
      audioRef: null,
    },
    {
      id: 'muchas_gracias',
      target: 'Muchas gracias',
      native: 'Thank you very much',
      literal: 'Many graces',
      emoji: '💛',
      phonetic: 'MOO-chas GRAH-syas',
      audioRef: null,
    },
    {
      id: 'que_amable',
      target: 'Qué amable',
      native: 'How kind (of you)',
      literal: 'How kind',
      emoji: '✨',
      phonetic: 'keh ah-MAH-bleh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Muchas — the intensifier',
    explanation: "'Muchas' means 'many' or 'a lot of' (feminine plural to agree with 'gracias'). Stack it on gratitude: 'muchas gracias' = thank you very much. For real over-the-top warmth, add 'qué amable' — how kind of you. Two beats, much warmer.",
    examples: [
      { target: 'Gracias', native: 'Thank you' },
      { target: 'Muchas gracias', native: 'Thank you very much' },
      { target: 'Muchísimas gracias', native: 'Thanks a million (super warm)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Gracias', right: 'Thank you' },
        { left: 'Muchas gracias', right: 'Thank you very much' },
        { left: 'Qué amable', right: 'How kind' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Intensify the thank you',
      sentence: '_____ gracias.',
      options: ['Muchas', 'Pocas', 'Buenas'],
      correct: 'Muchas',
      context: 'Someone went well out of their way to help you.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Thank you very much',
      correct: ['Muchas gracias', 'muchas gracias'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build a warm thank you',
      words: ['gracias', 'Muchas'],
      correct: ['Muchas', 'gracias'],
      translation: 'Thank you very much',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How kind (of you)',
      correct: ['Qué amable', 'qué amable', 'que amable'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone gives you a gift. What is the warmest response?',
      question: 'Choose the most grateful reply',
      options: [
        { text: 'Muchas gracias. Qué amable.', correct: true },
        { text: 'De nada', correct: false },
        { text: 'Por favor', correct: false },
      ],
      explanation: "'Muchas gracias. Qué amable.' — thank you very much, how kind — is the warmest combination for receiving a gift.",
    },
  ],

  rwenDialogue: {
    intro: "A vendor at the Plaza de Mercado de Paloquemao in Bogotá has just walked you to the right stall and waited while you bought what you came for.",
    lines: [
      {
        speaker: 'npc',
        target: 'Aquí está. Espero que le sirva.',
        native: "Here you go. I hope it's useful.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muchas gracias. Qué amable.', native: 'Thank you very much. How kind.', correct: true, feedback: "Warm and genuine. She smiles — exactly the response she was hoping for." },
          { target: 'Gracias', native: 'Thank you', correct: false, feedback: "Correct — but flat. She walked you halfway across the market. 'Muchas gracias. Qué amable.' shows you noticed the effort." },
          { target: 'De nada', native: "You're welcome", correct: false, feedback: "That's the REPLY to thanks — right now you're the one giving thanks." },
        ],
      },
      {
        speaker: 'npc',
        target: 'De nada. Que tenga buen día.',
        native: "You're welcome. Have a good day.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Gratitude given freely is never forgotten in Colombian culture. You're already doing more than translating — you're connecting.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you very much', correct: ['Muchas gracias', 'muchas gracias'] },
      { prompt: 'How kind (of you)', correct: ['Qué amable', 'qué amable', 'que amable'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'gracias' to someone today — and mean it. If they did something significant, upgrade to 'muchas gracias' and add 'qué amable' to acknowledge them as a person, not just the act.",
    rwenSignoff: "Gratitude is its own reward. ¡Buen camino!",
  },

  phase8: {
    scenario: "You drop your wallet on the wet cobblestones outside the Plaza de Mercado de Paloquemao in Bogotá and don't notice. An older woman in a delantal scoops it up and runs after you, out of breath by the time she catches you. You owe her a real thank-you, not a flinch.",
    rwenRole: "Doña Marta — ~68, Paloquemao stallholder, dignified, hair pulled back; a mumbled 'gracias' lands like an insult. She's done you a real favour and she's standing there waiting.",
    successCriteria: "User says 'Muchas gracias' (NOT bare 'gracias' — she ran after them, this needs the intensifier) and follows up with 'Qué amable' to acknowledge her kindness as a person rather than just the act of returning the wallet.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
