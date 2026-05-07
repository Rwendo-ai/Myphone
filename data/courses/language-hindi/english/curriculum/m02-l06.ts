import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-haan-nahi-shayad',
  module: 2,
  lesson: 6,
  title: 'Haan, Nahi, Shayad — Yes, No, Maybe',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three of the most-used words in any language. But in Hindi there's a fourth that does heavy lifting: 'theek hai' — okay, fine, alright, sure, agreed, no problem. It's the multitool. You'll hear it twenty times a day and use it for half of those.",
    culturalNote: "'Haan' (yes) and 'nahi' (no) are direct, but Indian conversation often softens them with the famous head-bobble — neither yes nor no, somewhere in between. 'Theek hai' is the verbal equivalent: a flexible 'okay' that can mean genuine agreement, polite acknowledgement, or 'fine, whatever you say'. When you're not sure how to respond, 'theek hai' almost always works.",
  },

  chunks: [
    {
      id: 'haan_nahi',
      target: 'हाँ / नहीं',
      native: 'Yes / No',
      literal: 'Haan / Nahi — yes / not',
      emoji: '✅',
      phonetic: 'haan / na-HEE',
      audioRef: null,
    },
    {
      id: 'shayad',
      target: 'शायद',
      native: 'Maybe / perhaps',
      literal: 'Shayad — perhaps',
      emoji: '🤔',
      phonetic: 'SHA-yad',
      audioRef: null,
    },
    {
      id: 'theek_hai',
      target: 'ठीक है',
      native: 'Okay / fine / alright',
      literal: 'Theek hai — correct is',
      emoji: '👌',
      phonetic: 'THEEK hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Theek hai — the multitool',
    explanation: "'Theek hai' literally means 'is correct' but functions as one of Hindi's most flexible phrases. Use it to: agree ('yes, ok'), confirm ('got it'), reassure ('it's fine'), close a loop ('alright then'), or politely accept something you'd rather not. Listen for it in any Indian conversation — it's everywhere.",
    examples: [
      { target: 'हाँ, ठीक है (Haan, theek hai)', native: 'Yes, okay' },
      { target: 'शायद (Shayad)', native: 'Maybe' },
      { target: 'ठीक है, धन्यवाद (Theek hai, dhanyavaad)', native: 'Alright, thanks' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'हाँ (Haan)', right: 'Yes' },
        { left: 'नहीं (Nahi)', right: 'No' },
        { left: 'शायद (Shayad)', right: 'Maybe' },
        { left: 'ठीक है (Theek hai)', right: 'Okay / fine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Confirm an arrangement politely",
      sentence: '_____, मैं कल आऊँगा।',
      options: ['ठीक है (Theek hai)', 'नहीं (Nahi)', 'कृपया (Kripaya)'],
      correct: 'ठीक है (Theek hai)',
      context: "Your colleague proposes meeting tomorrow. You're agreeing.",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Maybe / perhaps',
      correct: ['शायद', 'Shayad', 'shayad'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auto driver asks if you'll pay 200 rupees for a short ride. You don't fully agree but don't want a row. What's the diplomatic 'maybe'?",
      question: 'Choose the right hedge',
      options: [
        { text: 'शायद (Shayad)', correct: true },
        { text: 'हाँ (Haan)', correct: false },
        { text: 'नहीं (Nahi)', correct: false },
      ],
      explanation: "'Shayad' buys you time without commiting. 'Haan' would lock in the overpay. 'Nahi' might trigger a fight before you've even tried bargaining.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Yes, okay"',
      words: ['है (hai)', 'हाँ (Haan)', 'ठीक (theek)'],
      correct: ['हाँ (Haan)', 'ठीक (theek)', 'है (hai)'],
      translation: 'Yes, okay',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Okay / fine / alright',
      correct: ['ठीक है', 'Theek hai', 'theek hai'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a tea stall in Old Delhi. The owner is a chatty older man who keeps asking yes/no questions while you wait for your masala chai.",
    lines: [
      {
        speaker: 'npc',
        target: 'पहली बार दिल्ली आए हो? (Pehli baar Dilli aaye ho?)',
        native: 'First time in Delhi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'हाँ, पहली बार। (Haan, pehli baar.)', native: 'Yes, first time.', correct: true, feedback: "Direct, friendly, perfect tone for a chai stall." },
          { target: 'शायद (Shayad)', native: 'Maybe', correct: false, feedback: "You either are or you aren't — 'shayad' here just confuses him. Save 'shayad' for things you actually don't know." },
          { target: 'ठीक है (Theek hai)', native: 'Okay', correct: false, feedback: "That's not really an answer to his question. He asked yes/no — give him 'haan' or 'nahi'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'अच्छा। चाय अच्छी है — एक और लोगे? (Accha. Chai acchi hai — ek aur loge?)',
        native: 'Ah. The chai is good — will you take another?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'ठीक है, एक और। (Theek hai, ek aur.)', native: 'Okay, one more.', correct: true, feedback: "'Theek hai' as the gentle yes. Natural and warm — exactly how locals roll." },
          { target: 'नहीं (Nahi)', native: 'No', correct: false, feedback: "That works — but is a touch flat. 'Nahi, dhanyavaad' would soften it; or if you actually want one, 'theek hai' is friendlier." },
          { target: 'शायद (Shayad)', native: 'Maybe', correct: false, feedback: "He's pouring chai, not negotiating. Commit one way or the other." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Haan, nahi, theek hai — three answers, three different gears. Pick the one that fits the moment, not just the dictionary translation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Yes', correct: ['हाँ', 'Haan', 'haan'] },
      { prompt: 'Okay / fine / alright', correct: ['ठीक है', 'Theek hai', 'theek hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'theek hai' five times today — even in your head, even substituted for 'okay' in English conversations. Notice how flexible it is. By tomorrow, you'll catch yourself thinking in it.",
    rwenSignoff: "The right word for the moment is half of fluency. Phir milenge.",
  },

  phase8: {
    scenario: "You're at a busy chai stall opposite Jama Masjid in Old Delhi and the owner — a chatty man who's never met a tourist he didn't want to interrogate — is firing yes/no questions at you between pouring chai for the regulars: where you're from, if you like the food, if you've tried jalebi, if you're coming back tomorrow. Don't lock up.",
    rwenRole: "Rashid Bhai — ~60, owns the stall for thirty years, encyclopaedic knowledge of every customer, asks rapid yes/no questions as a way of being friendly; will warm to a learner who hedges naturally rather than freezes.",
    successCriteria: "User uses 'haan' / 'nahi' for clear yes/no questions, deploys 'shayad' for an honest 'maybe' (will you come back tomorrow?), and uses 'theek hai' as the natural acknowledgement when he hands over the chai or makes a recommendation — proving they can switch between the four registers fluidly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
