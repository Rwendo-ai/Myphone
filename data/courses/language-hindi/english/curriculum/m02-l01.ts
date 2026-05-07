import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-kripaya',
  module: 2,
  lesson: 1,
  title: 'Kripaya — Please',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greetings got you in the door. Now you need to get things done. In Hindi, 'kripaya' is your master key — it turns commands into requests, and strangers into helpers.",
    culturalNote: "Indian English already runs on a politeness layer ('kindly do the needful', 'please send'), but in Hindi the politeness is baked into the verb endings — '-iye' for formal requests. 'Kripaya' is the explicit cherry on top: formal, respectful, and a clear marker that you're a learner trying to do this right.",
  },

  chunks: [
    {
      id: 'kripaya',
      target: 'कृपया',
      native: 'Please',
      literal: 'Kripaya — please/kindly',
      emoji: '🙏',
      phonetic: 'KRIP-ya-aa',
      audioRef: null,
    },
    {
      id: 'madad_kijiye',
      target: 'कृपया मदद कीजिए',
      native: 'Please help me',
      literal: 'Kripaya madad kijiye — please help do(formal)',
      emoji: '🤝',
      phonetic: 'KRIP-ya-aa ma-DAD KEE-ji-ye',
      audioRef: null,
    },
    {
      id: 'koi_baat_nahi',
      target: 'कोई बात नहीं',
      native: "You're welcome / It's nothing",
      literal: 'Koi baat nahi — any matter not',
      emoji: '✅',
      phonetic: 'KO-ee BAAT na-HEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kripaya — the politeness key',
    explanation: "'Kripaya' goes at the start of any request to mark it as polite and formal. The verb itself also takes the formal '-iye' ending (kijiye = please do). Together they signal respect — especially important with strangers, elders, and anyone in a service role.",
    examples: [
      { target: 'कृपया बताइए (Kripaya bataiye)', native: 'Please tell me' },
      { target: 'कृपया मदद कीजिए (Kripaya madad kijiye)', native: 'Please help me' },
      { target: 'कोई बात नहीं (Koi baat nahi)', native: "It's nothing (reply to thanks)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'कृपया (Kripaya)', right: 'Please' },
        { left: 'मदद कीजिए (Madad kijiye)', right: 'Please help (do help)' },
        { left: 'कोई बात नहीं (Koi baat nahi)', right: "You're welcome" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add the politeness key to make this respectful',
      sentence: '_____ मदद कीजिए।',
      options: ['कृपया (Kripaya)', 'धन्यवाद (Dhanyavaad)', 'नमस्ते (Namaste)'],
      correct: 'कृपया (Kripaya)',
      context: 'You need directions from a stranger at Connaught Place.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Please',
      correct: ['कृपया', 'Kripaya', 'kripaya'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please help me"',
      words: ['कीजिए (kijiye)', 'कृपया (Kripaya)', 'मदद (madad)'],
      correct: ['कृपया (Kripaya)', 'मदद (madad)', 'कीजिए (kijiye)'],
      translation: 'Please help me',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: "You're welcome / It's nothing",
      correct: ['कोई बात नहीं', 'Koi baat nahi', 'koi baat nahi', 'koi baat nahin'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Dhanyavaad" (thank you). What do you reply?',
      question: 'Choose the correct response',
      options: [
        { text: 'कोई बात नहीं (Koi baat nahi)', correct: true },
        { text: 'कृपया (Kripaya)', correct: false },
        { text: 'नमस्ते (Namaste)', correct: false },
      ],
      explanation: "'Koi baat nahi' is the natural reply to thanks — like 'no worries' or 'it's nothing'. It downplays the favour, which is the cultural expectation.",
    },
  ],

  rwenDialogue: {
    intro: "You're outside Connaught Place metro station looking lost. A young man is checking his phone nearby. Ask for help politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'कृपया मदद कीजिए (Kripaya madad kijiye)', native: 'Please help me', correct: true, feedback: "Polite, formal, perfect. He looks up and smiles." },
          { target: 'मदद कीजिए (Madad kijiye)', native: 'Help me', correct: false, feedback: "Grammatically polite — but adding 'kripaya' is the cultural cherry on top, especially with a stranger." },
          { target: 'नमस्ते (Namaste)', native: 'Hello', correct: false, feedback: "Good opener — but follow it with the actual ask. 'Kripaya madad kijiye' tells him what you need." },
        ],
      },
      {
        speaker: 'npc',
        target: 'जी हाँ, बताइए। (Ji haan, bataiye.)',
        native: 'Yes, tell me.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: true, feedback: "Warm and clear. The interaction lands well." },
          { target: 'कोई बात नहीं (Koi baat nahi)', native: "You're welcome", correct: false, feedback: "That's the REPLY to thanks — but he's the one helping, so he says that, not you." },
          { target: 'कृपया (Kripaya)', native: 'Please', correct: false, feedback: "He's already helping — now is the moment for thanks, not another please." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "One word — kripaya — and a stranger became a helper. That's the politeness key at work.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please', correct: ['कृपया', 'Kripaya', 'kripaya'] },
      { prompt: "You're welcome / It's nothing", correct: ['कोई बात नहीं', 'Koi baat nahi', 'koi baat nahi', 'koi baat nahin'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Add 'kripaya' to one request you make today — even if the rest of the sentence is in English. Notice how the word changes the energy of the asking.",
    rwenSignoff: "Politeness opens every door. Phir milenge.",
  },

  phase8: {
    scenario: "You're standing at Connaught Place inner circle in Delhi at 11am, phone on 4% battery, looking for the metro entrance to Rajiv Chowk. A young guy in a grey kurta is scrolling Instagram on the corner — you've got to flag him politely before your phone dies.",
    rwenRole: "Aakash — 24, Delhi University postgrad waiting for a friend, friendly but a bit distracted; will help if you ask properly, won't even look up if you bark.",
    successCriteria: "User opens with 'Kripaya madad kijiye' (NOT bare 'Madad kijiye'), uses 'kripaya' to soften the follow-up directions question, and replies 'Koi baat nahi' if Aakash thanks them for being patient — not the other way around.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
