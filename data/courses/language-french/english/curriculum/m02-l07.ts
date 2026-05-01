import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-how-much',
  module: 2,
  lesson: 7,
  title: 'Combien? — How much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A leather wallet at a Paris brocante. A round of pétanque-paint pottery in Aix. A bouquet from the flower stall. You point, you smile, you ask — 'Ça coûte combien?' This is the phrase that unlocks every market.",
    culturalNote: "In English-speaking countries, prices are usually labelled and haggling is unusual outside flea markets. In France, supermarkets are fixed-price too, but at brocantes, marchés aux puces, and small stalls, asking the price is normal — and gentle haggling is sometimes expected. Saying 'trop cher' (too expensive) isn't rude; it's the polite opening move of a negotiation. The seller often comes back with a better number.",
  },

  chunks: [
    {
      id: 'combien',
      target: 'Combien?',
      native: 'How much? / How many?',
      literal: 'How-much?',
      emoji: '🔢',
      phonetic: 'kohn-BYAHN',
      audioRef: null,
    },
    {
      id: 'ca_coute_combien',
      target: 'Ça coûte combien?',
      native: 'How much does it cost?',
      literal: 'That costs how-much?',
      emoji: '💶',
      phonetic: 'sah koot kohn-BYAHN',
      audioRef: null,
    },
    {
      id: 'trop_cher',
      target: 'Trop cher',
      native: 'Too expensive',
      literal: 'Too expensive',
      emoji: '😬',
      phonetic: 'troh SHAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Asking and reacting to price',
    explanation: "'Combien' is the standalone question — pointing at something and saying 'Combien?' is enough at a stall. 'Ça coûte combien?' is the full sentence, more polite. After the price comes, you can react: 'D'accord' (ok), 'Trop cher' (too expensive — soft haggle), or just 'Je prends' (I'll take it).",
    examples: [
      { target: 'Combien pour ce pain?', native: 'How much for this bread?' },
      { target: 'Ça coûte combien, le foulard?', native: 'How much is the scarf?' },
      { target: 'Cinq euros? Trop cher!', native: 'Five euros? Too expensive!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its job',
      pairs: [
        { left: 'Combien?', right: 'Quick "how much?" while pointing' },
        { left: 'Ça coûte combien?', right: 'Full polite "how much does it cost?"' },
        { left: 'Trop cher', right: 'Soft "too expensive" — opens haggling' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the polite price question",
      sentence: 'Ça _____ combien?',
      options: ['coûte', 'a', 'est'],
      correct: 'coûte',
      context: "'Coûter' = to cost. Ça coûte combien — literally 'that costs how much'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — you’re holding up a hand-painted bowl at a brocante and want a price',
      prompt: 'How much does it cost?',
      correct: ['Ça coûte combien?', 'ça coûte combien?', 'Ça coûte combien', 'ça coûte combien', 'Sa coute combien?', 'sa coute combien?'],
    },
    {
      type: 'build_sentence',
      instruction: 'React to a high price — softly say "too expensive"',
      words: ['cher', 'Trop'],
      correct: ['Trop', 'cher'],
      translation: 'Too expensive',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most natural reaction',
      question: 'A vendor at the Marché aux Puces de Saint-Ouen says "Cinquante euros". You think it’s steep but want to keep the conversation alive.',
      options: [
        { text: 'Hmm, trop cher…', correct: true },
        { text: 'Au secours!', correct: false },
        { text: 'Bonsoir', correct: false },
      ],
      explanation: "'Trop cher' is the gentle opener for a haggle — friendly, not aggressive. The others are off-script.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — bare-bones "how much?" while pointing',
      prompt: 'How much?',
      correct: ['Combien?', 'combien?', 'Combien', 'combien'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Marché aux Fleurs in Nice. You spot a small ceramic cigale (cicada — Provence's lucky charm). The vendor is reading a paper. Get a price.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, ça coûte combien?', native: 'Excuse me, how much does it cost?', correct: true, feedback: 'Polite, clear, the right question.' },
          { target: 'Combien argent?', native: 'How much money?', correct: false, feedback: "'Combien argent' is broken — French wraps it tighter: 'ça coûte combien' or just 'combien'." },
          { target: 'Pas cher!', native: 'Not expensive!', correct: false, feedback: "You haven't heard the price yet — that's a reaction, not a question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Douze euros, monsieur.',
        native: 'Twelve euros, sir.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hmm… trop cher. Dix euros?', native: 'Hmm… too expensive. Ten euros?', correct: true, feedback: 'Beautiful — soft trop cher, then a counter. Classic move.' },
          { target: 'Oui!', native: 'Yes!', correct: false, feedback: "Fair if you're happy with twelve — but you wanted to try a haggle." },
          { target: 'Non!', native: 'No!', correct: false, feedback: "Closes the door. 'Trop cher' opens it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Trop cher' isn't insulting — it's the start of the dance. He'll likely meet you at eleven.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much does it cost? (in French)',
        correct: ['Ça coûte combien?', 'ça coûte combien?', 'Ça coûte combien', 'ça coûte combien'],
      },
      {
        prompt: 'Too expensive (in French)',
        correct: ['Trop cher', 'trop cher'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find one object in your house. Imagine selling it at a Marseille flea market. Say its price out loud in euros, then say 'trop cher' to your imaginary customer. The mouth needs the words.",
    rwenSignoff: "Bonne marchandage — happy haggling.",
  },

  phase8: {
    scenario: "You're at a Saturday brocante in the village of L'Isle-sur-la-Sorgue, Provence. You've been eyeing a 1960s enamel coffee pot for ten minutes. The seller is sipping rosé behind his table. The marked price is 45€ but you've seen similar for 30€ in the next stall. Try to land it for 35€.",
    rwenRole: "Monsieur Robert — brocanteur, ~70, has been doing this market every weekend for 30 years. Loves a real haggler, dismissive of nervous tourists. Will come down on price for someone who plays the game with grace.",
    successCriteria: "User asks the price clearly — 'Combien?' or 'Ça coûte combien?' — even though it's marked, to open the conversation. Uses 'Trop cher' to open the haggle (not 'Non!' or silence), and proposes a counter-price. The whole exchange happens in French politeness, not English bluntness.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
