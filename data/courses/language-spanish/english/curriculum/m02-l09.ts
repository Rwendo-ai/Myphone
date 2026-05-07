import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-cuanto-cuesta',
  module: 2,
  lesson: 9,
  title: '¿Cuánto cuesta? — How Much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Money talk. '¿Cuánto cuesta?' opens every market, every taxi, every menu. Pair it with the basics for negotiating and you handle pretty much any transaction in Latin America.",
    culturalNote: "In open markets across the region — Mexico City's Mercado de la Merced, Bogotá's Paloquemao, Buenos Aires' San Telmo Sunday market — gentle haggling is expected. Not rude, not aggressive, just 'un poco menos' (a little less) and a smile. In supermarkets, fixed-price restaurants, and chain stores, the price is the price. Read the room. The currency varies across countries — pesos in Mexico, Colombia, Argentina; the question stays the same.",
  },

  chunks: [
    {
      id: 'cuanto_cuesta',
      target: '¿Cuánto cuesta?',
      native: 'How much does it cost?',
      literal: 'How-much costs?',
      emoji: '💰',
      phonetic: 'KWAN-toh KWES-tah',
      audioRef: null,
    },
    {
      id: 'es_caro',
      target: 'Es caro / Es barato',
      native: "It's expensive / It's cheap",
      literal: 'It-is expensive / cheap',
      emoji: '💸',
      phonetic: 'es KAH-roh / es bah-RAH-toh',
      audioRef: null,
    },
    {
      id: 'un_poco_menos',
      target: '¿Un poco menos?',
      native: 'A little less? (haggle)',
      literal: 'A little less',
      emoji: '🤏',
      phonetic: 'oon POH-koh MEH-nos',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Es + adjective — describing the price',
    explanation: "'Es' = it is. Pair it with any adjective to describe what's in front of you. 'Es caro' (it's expensive), 'es barato' (it's cheap), 'es mucho' (it's a lot), 'es justo' (it's fair). Adjectives usually agree with the noun's gender — but for prices and general 'it', the masculine form works as default.",
    examples: [
      { target: 'Es caro', native: "It's expensive" },
      { target: 'Es barato', native: "It's cheap" },
      { target: 'Es muy caro', native: "It's very expensive" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '¿Cuánto cuesta?', right: 'How much does it cost?' },
        { left: 'Es caro', right: "It's expensive" },
        { left: '¿Un poco menos?', right: 'A little less?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask how much something costs',
      sentence: '¿_____ cuesta?',
      options: ['Cuánto', 'Dónde', 'Quién'],
      correct: 'Cuánto',
      context: "You're pointing at a leather bag at a market stall.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How much does it cost?',
      correct: ['¿Cuánto cuesta?', '¿cuánto cuesta?', 'Cuánto cuesta?', 'cuánto cuesta', 'Cuanto cuesta', 'cuanto cuesta'],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor names a price that feels too high. You want to negotiate gently. What do you say?",
      question: 'Choose the right haggle line',
      options: [
        { text: 'Es un poco caro. ¿Un poco menos?', correct: true },
        { text: 'No, gracias', correct: false },
        { text: 'Es barato', correct: false },
      ],
      explanation: "'Es un poco caro. ¿Un poco menos?' — it's a bit expensive, a little less? — keeps the door open. 'No, gracias' walks away; 'es barato' tells them to charge MORE.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It\'s very expensive"',
      words: ['caro', 'Es', 'muy'],
      correct: ['Es', 'muy', 'caro'],
      translation: "It's very expensive",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'A little less?',
      correct: ['¿Un poco menos?', '¿un poco menos?', 'Un poco menos?', 'un poco menos'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a craft stall in the Mercado de la Merced in Mexico City. The vendor has just shown you a hand-tooled leather wallet you like.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: '¿Cuánto cuesta?', native: 'How much does it cost?', correct: true, feedback: "Direct and clear — exactly the question. He picks up the wallet and tells you the price." },
          { target: 'Es caro', native: "It's expensive", correct: false, feedback: "You haven't heard the price yet — you can't say it's expensive. Ask first: '¿Cuánto cuesta?'" },
          { target: '¿Dónde está?', native: 'Where is it?', correct: false, feedback: "It's right in front of you. The right question is '¿Cuánto cuesta?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Quinientos pesos. Hecho a mano.',
        native: 'Five hundred pesos. Made by hand.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Es un poco caro. ¿Un poco menos?', native: "It's a bit expensive. A little less?", correct: true, feedback: "Soft, polite haggle — keeps the door open. He smiles and counters with 450." },
          { target: 'Es muy caro', native: "It's very expensive", correct: false, feedback: "Too blunt — sounds like you're done. 'Un poco caro' with the haggle question is the move." },
          { target: 'Sí, claro', native: 'Yes, of course', correct: false, feedback: "That's accepting the price. If you want to negotiate, soften with 'es un poco caro'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bueno, le dejo en cuatrocientos cincuenta. ¿Cierra trato?',
        native: "Alright, I'll leave it at four-fifty. Deal?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Ask the price — comment softly — counter politely. That sequence works in any market on the continent.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much does it cost?', correct: ['¿Cuánto cuesta?', '¿cuánto cuesta?', 'Cuánto cuesta', 'cuánto cuesta', 'Cuanto cuesta', 'cuanto cuesta'] },
      { prompt: "It's expensive", correct: ['Es caro', 'es caro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you're at a market today. Pick something within sight — a coffee, a banana, a notebook — and say '¿Cuánto cuesta?' out loud. Then react: 'es caro', 'es barato', or just 'gracias'.",
    rwenSignoff: "Know what it costs. Know what it's worth. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're at a leather-goods stall in the Mercado de la Merced in Mexico City and you've found a hand-tooled wallet you actually want. The vendor names a price that's slightly above your budget. You like the wallet but you want to haggle politely without insulting the workmanship.",
    rwenRole: "Don Salvador — ~55, third-generation leatherworker at La Merced; he respects buyers who haggle politely with 'un poco menos' but won't budge for anyone who sneers 'es muy caro' or walks off without trying.",
    successCriteria: "User asks '¿Cuánto cuesta?' to open, comments with 'Es un poco caro' (NOT 'Es muy caro' — too aggressive), counters with '¿Un poco menos?' to invite a counter-offer rather than walking away, and either accepts or politely declines with 'No, gracias' — keeping the door open.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
