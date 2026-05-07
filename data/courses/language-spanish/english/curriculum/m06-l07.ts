import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-precios-y-regateo',
  module: 6,
  lesson: 7,
  title: 'Precios y regateo — Prices & Haggling',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Haggling — el regateo — is alive in Latin American street markets, especially in Mexico's tianguis and Buenos Aires's ferias. Supermarkets and chains, no. Markets and small artesanías, absolutely. The opening line is '¿Cuánto cuesta?' (how much?) — and 'está caro' (it's expensive) signals you want to negotiate. Walk away without saying it and you've paid the gringo price.",
    culturalNote: "In a Buenos Aires feria, the vendor expects you to push back once. Not twice — once. Half-price counters are insulting; ten-to-twenty percent below is the dance. In Mexico City's Mercado de la Lagunilla the same rule. Knowing 'me lo deja en X' (will you let me have it for X) lets you negotiate without sounding pushy.",
  },

  chunks: [
    {
      id: 'esta_caro',
      target: 'Está caro / Está barato',
      native: "It's expensive / It's cheap",
      literal: 'It-is expensive / cheap',
      emoji: '💸',
      phonetic: 'ehs-TAH KAH-roh / bah-RAH-toh',
      audioRef: null,
    },
    {
      id: 'me_lo_deja',
      target: '¿Me lo deja en...?',
      native: 'Will you let me have it for...?',
      literal: 'Me it leave at? — soft haggling phrase',
      emoji: '🤝',
      phonetic: 'meh loh DEH-hah ehn',
      audioRef: null,
    },
    {
      id: 'me_lo_llevo',
      target: 'Me lo llevo',
      native: "I'll take it",
      literal: 'Me it I-take',
      emoji: '🛍️',
      phonetic: 'meh loh YEH-voh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Haggling flow: ask price → react → counter → close',
    explanation: "The four-beat market dance. (1) '¿Cuánto cuesta?' — opens. (2) 'Está caro' — signals you want to negotiate. (3) '¿Me lo deja en X?' — counter offer (X = a number 10-20% lower). (4) 'Me lo llevo' — closes the deal. Done in Spanish, you cross from tourist to cliente in two minutes.",
    examples: [
      { target: '¿Cuánto cuesta?', native: 'How much does it cost?' },
      { target: 'Está caro. ¿Me lo deja en cien?', native: "It's expensive. Will you let me have it for 100?" },
      { target: 'Me lo llevo. Gracias.', native: "I'll take it. Thanks." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the haggling phrase to its meaning',
      pairs: [
        { left: 'Está caro', right: "It's expensive" },
        { left: '¿Me lo deja en...?', right: 'Will you let me have it for...?' },
        { left: 'Me lo llevo', right: "I'll take it" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Open the haggle politely',
      sentence: 'Está _____. ¿Me lo deja en cien?',
      options: ['caro', 'barato', 'bueno'],
      correct: 'caro',
      context: 'Signal that the price is high before counter-offering.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'll take it",
      correct: ['Me lo llevo', 'me lo llevo'],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor says '150 pesos'. You think it's too high. What do you say?",
      question: 'Best haggling response:',
      options: [
        { text: 'Está caro. ¿Me lo deja en ciento veinte?', correct: true },
        { text: 'Bueno, me lo llevo.', correct: false },
        { text: 'No tengo dinero.', correct: false },
      ],
      explanation: "Signal the price is high ('está caro') and counter with a specific number ('ciento veinte' = 120). Vague pushback gets nothing; a real number gets a real reply.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Will you let me have it for fifty?'",
      words: ['¿Me', 'lo', 'deja', 'en', 'cincuenta?'],
      correct: ['¿Me', 'lo', 'deja', 'en', 'cincuenta?'],
      translation: 'Will you let me have it for fifty?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "It's expensive",
      correct: ['Está caro', 'está caro'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a feria in Buenos Aires. You see a leather wallet. Time to negotiate.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas. ¿Cuánto cuesta la billetera?', native: 'Hi. How much does the wallet cost?', correct: true, feedback: "Greeted, asked the price — opened the dance properly." },
          { target: 'Quiero esto', native: 'I want this', correct: false, feedback: "Open with the price — '¿Cuánto cuesta?' — then negotiate." },
          { target: 'How much?', native: '(in English)', correct: false, feedback: "Stay in Spanish — '¿Cuánto cuesta?' He'll respect you for it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Son tres mil pesos.',
        native: "It's three thousand pesos.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Está caro. ¿Me lo deja en dos mil quinientos?', native: "It's expensive. Will you let me have it for twenty-five hundred?", correct: true, feedback: "Reaction + specific counter. The vendor scratches his chin — you're in the negotiation now." },
          { target: 'Bueno, me lo llevo', native: "Fine, I'll take it (no haggle)", correct: false, feedback: "Push back once — 'Está caro. ¿Me lo deja en dos mil quinientos?' That's expected here." },
          { target: 'Está caro', native: "It's expensive (no counter)", correct: false, feedback: "Add a number — 'Está caro. ¿Me lo deja en dos mil quinientos?' Vague gets you nowhere." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Dos mil ochocientos. Última.',
        native: 'Twenty-eight hundred. Final offer.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bueno, me lo llevo. Gracias.', native: "Okay, I'll take it. Thanks.", correct: true, feedback: "Closed at 2.800 instead of 3.000 — 200 pesos saved AND a cordial vendor. Perfect feria flow." },
          { target: 'Está muy caro', native: "It's too expensive (still pushing)", correct: false, feedback: "He gave you 'última' — accept the small win: 'Bueno, me lo llevo. Gracias.'" },
          { target: 'No quiero', native: "I don't want it", correct: false, feedback: "You opened the haggle — close it: 'Bueno, me lo llevo. Gracias.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Me lo llevo at 2.800. Negotiated, closed, and respected — that's a real Buenos Aires feria buy.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "It's expensive", correct: ['Está caro', 'está caro'] },
      { prompt: "I'll take it", correct: ['Me lo llevo', 'me lo llevo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you buy anything from a small seller, run the four beats in your head: '¿Cuánto cuesta?' → 'Está caro' → '¿Me lo deja en X?' → 'Me lo llevo.' Even if you don't say it out loud, it changes how you shop.",
    rwenSignoff: "El regateo es conversación, no conflicto — haggling is conversation, not conflict. Hasta mañana.",
  },

  phase8: {
    scenario: "Sunday afternoon at the Feria de San Telmo in Buenos Aires. You've spotted a chunky silver mate cup at an artesanía stall and the first quote is wildly inflated for the gringo. You need to run the full four-beat haggle in Spanish: ask the price, react with 'está caro', counter with a specific number, and close.",
    rwenRole: "Don Pablo — San Telmo artesano in his late 50s, weathered hands, sharp negotiator; he opens 30% above his floor and respects buyers who push back once with a real number. He'll only drop if you stay in Spanish and counter with a number, not vague pushback.",
    successCriteria: "User opens with '¿Cuánto cuesta?' (not English), reacts with 'Está caro' to signal negotiation, follows with '¿Me lo deja en X?' giving a specific peso number, and closes with 'Me lo llevo' once Don Pablo lands on a final price — no English at any step.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
