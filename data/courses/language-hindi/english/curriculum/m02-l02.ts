import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-dhanyavaad',
  module: 2,
  lesson: 2,
  title: 'Dhanyavaad — Thank You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hindi gives you two thank-yous, and choosing between them tells the listener who you think you are. 'Dhanyavaad' is formal, written, weighty. 'Shukriya' is everyday, warm, conversational. Get the register right and the gratitude lands harder.",
    culturalNote: "In urban India, you'll often hear 'thank you' (in English) for casual stuff — a tea handed across a counter, a door held. 'Shukriya' is what you say to a person, not a service. 'Dhanyavaad' is reserved for real gratitude — someone went out of their way, an elder helped you, the moment matters. Saying 'dhanyavaad' to a Zomato delivery rider sounds odd; saying it to your friend's mother for hosting you lands perfectly.",
  },

  chunks: [
    {
      id: 'dhanyavaad',
      target: 'धन्यवाद',
      native: 'Thank you (formal)',
      literal: 'Dhanyavaad — thanks/blessing',
      emoji: '🙏',
      phonetic: 'DHAN-ya-vaad',
      audioRef: null,
    },
    {
      id: 'shukriya',
      target: 'शुक्रिया',
      native: 'Thanks (everyday)',
      literal: 'Shukriya — thanks (Urdu origin)',
      emoji: '💛',
      phonetic: 'shuk-RI-yaa',
      audioRef: null,
    },
    {
      id: 'bahut_dhanyavaad',
      target: 'बहुत धन्यवाद',
      native: 'Thank you very much',
      literal: 'Bahut dhanyavaad — much thanks',
      emoji: '✨',
      phonetic: 'BA-hut DHAN-ya-vaad',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bahut — the intensifier',
    explanation: "'Bahut' means 'very' or 'a lot' and goes BEFORE the word it intensifies — opposite of where 'very' often lands in English. 'Bahut dhanyavaad' (much thanks), 'bahut accha' (very good), 'bahut khushi' (much happiness). One word, dial it up.",
    examples: [
      { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you' },
      { target: 'बहुत धन्यवाद (Bahut dhanyavaad)', native: 'Thank you very much' },
      { target: 'बहुत अच्छा (Bahut accha)', native: 'Very good' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'धन्यवाद (Dhanyavaad)', right: 'Thank you (formal)' },
        { left: 'शुक्रिया (Shukriya)', right: 'Thanks (everyday)' },
        { left: 'बहुत धन्यवाद (Bahut dhanyavaad)', right: 'Thank you very much' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Intensify the thank you',
      sentence: '_____ धन्यवाद।',
      options: ['बहुत (Bahut)', 'कृपया (Kripaya)', 'नहीं (Nahi)'],
      correct: 'बहुत (Bahut)',
      context: 'Someone went out of their way to help you find an address in Mumbai.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Thank you very much',
      correct: ['बहुत धन्यवाद', 'Bahut dhanyavaad', 'bahut dhanyavaad'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build a warm thank-you',
      words: ['धन्यवाद (dhanyavaad)', 'बहुत (Bahut)'],
      correct: ['बहुत (Bahut)', 'धन्यवाद (dhanyavaad)'],
      translation: 'Thank you very much',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Thanks (everyday, casual)',
      correct: ['शुक्रिया', 'Shukriya', 'shukriya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend's mother has just served you home-cooked dal-chawal and won't let you leave without a second helping. You're properly grateful. What's the right register?",
      question: 'Choose the most appropriate thanks',
      options: [
        { text: 'बहुत धन्यवाद, आंटी (Bahut dhanyavaad, aunty)', correct: true },
        { text: 'थैंक्स (Thanks)', correct: false },
        { text: 'शुक्रिया (Shukriya)', correct: false },
      ],
      explanation: "With an elder hosting you in their home, 'bahut dhanyavaad' is the warm, formal landing. 'Shukriya' is too casual for the moment; 'thanks' would feel cold.",
    },
  ],

  rwenDialogue: {
    intro: "You asked a stranger near Andheri station for directions to a meeting. He walked you all the way to the building entrance.",
    lines: [
      {
        speaker: 'npc',
        target: 'यह वही बिल्डिंग है। (Yeh wahi building hai.)',
        native: "This is the building.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'बहुत धन्यवाद, आपने बहुत मदद की (Bahut dhanyavaad, aapne bahut madad ki)', native: 'Thank you very much, you helped a lot', correct: true, feedback: "Warm, formal, properly grateful. He smiles and says 'koi baat nahi'." },
          { target: 'शुक्रिया (Shukriya)', native: 'Thanks', correct: false, feedback: "Friendly — but he walked you ten minutes out of his way. This deserves the formal 'bahut dhanyavaad'." },
          { target: 'कोई बात नहीं (Koi baat nahi)', native: "It's nothing", correct: false, feedback: "That's the REPLY to thanks — right now you're the one saying thanks, not receiving them." },
        ],
      },
      {
        speaker: 'npc',
        target: 'कोई बात नहीं। (Koi baat nahi.)',
        native: "It's nothing.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Gratitude with the right weight — 'bahut dhanyavaad' for real help, 'shukriya' for the small stuff. You've got both keys now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you very much (formal)', correct: ['बहुत धन्यवाद', 'Bahut dhanyavaad', 'bahut dhanyavaad'] },
      { prompt: 'Thanks (everyday)', correct: ['शुक्रिया', 'Shukriya', 'shukriya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'shukriya' to one person today for something small — and 'bahut dhanyavaad' to someone for something real. Notice the weight difference.",
    rwenSignoff: "Gratitude in the right register is its own art. Phir milenge.",
  },

  phase8: {
    scenario: "You drop your wallet at a Mother Dairy booth in Defence Colony market and don't notice. An older woman in a cotton sari sees it on the pavement, calls out, and runs after you with it — she's properly out of breath. You owe her a real thank-you, not a casual one.",
    rwenRole: "Sharma Aunty — ~70, retired schoolteacher, dignified, on her morning milk run; a mumbled 'thanks' will land like an insult, the formal register is the bare minimum here.",
    successCriteria: "User says 'Bahut dhanyavaad' (NOT bare 'Shukriya' — she ran after you, this needs the intensifier and the formal register) and follows up acknowledging her kindness as a person — not just the act of returning the wallet.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
