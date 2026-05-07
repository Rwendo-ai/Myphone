import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-samjha',
  module: 3,
  lesson: 9,
  title: 'Samajh Nahin Aaya — Clarifying',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Real conversations stall, restart, ask back. Today you stop pretending to understand and learn three short phrases that keep the conversation alive: 'I didn't understand', 'please say it again', and 'what does that mean?'. These are the most useful words you'll ever learn.",
    culturalNote: "In India, asking someone to repeat themselves — 'फिर से बोलिए' (phir se boliye) — is normal and not rude. People often use 'क्या?' (kya — what?) to ask for repetition without offence. Pretending to understand and nodding along is the move that backfires; honest 'samajh nahin aaya' is welcomed.",
  },

  chunks: [
    {
      id: 'samajh_nahin',
      target: 'समझ नहीं आया — Samajh nahin aaya',
      native: "I didn't understand",
      literal: 'Understanding not came',
      emoji: '🤔',
      phonetic: 'sa-MAJH na-HEEN AA-ya',
      audioRef: null,
    },
    {
      id: 'phir_se',
      target: 'फिर से बोलिए — Phir se boliye',
      native: 'Please say it again',
      literal: 'Again say (polite)',
      emoji: '🔁',
      phonetic: 'phir say BO-lee-yay',
      audioRef: null,
    },
    {
      id: 'kya_matlab',
      target: '...का क्या मतलब है? — ...ka kya matlab hai?',
      native: 'What does ... mean?',
      literal: '...of what meaning is?',
      emoji: '❓',
      phonetic: 'ka kya MAT-lab hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness via -iye — boliye, kijiye, dekhiye',
    explanation: "To make a request polite in Hindi, end the verb stem with -iye. बोल (bol — speak) becomes बोलिए (boliye — please speak). कर (kar — do) becomes कीजिए (kijiye — please do). देख (dekh — look) becomes देखिए (dekhiye — please look). This is the form for strangers, elders, and any professional setting.",
    examples: [
      { target: 'फिर से बोलिए — Phir se boliye', native: 'Please say it again' },
      { target: 'धीरे बोलिए — Dheere boliye', native: 'Please speak slowly' },
      { target: 'इधर देखिए — Idhar dekhiye', native: 'Please look here' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Samajh nahin aaya', right: "I didn't understand" },
        { left: 'Phir se boliye', right: 'Please say it again' },
        { left: '...ka kya matlab hai?', right: 'What does ... mean?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely ask someone to say it again',
      sentence: 'Phir se _____.',
      options: ['boliye', 'bolo', 'bola'],
      correct: 'boliye',
      context: 'बोलिए (boliye) is polite. बोलो (bolo) is informal. बोला (bola) is past tense for a man.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: "I didn't understand",
      correct: ['Samajh nahin aaya', 'samajh nahin aaya', 'Samajh nahi aaya', 'समझ नहीं आया'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to ask 'what does X mean?'. Which sentence shape is correct?",
      question: 'Pick the natural Hindi form',
      options: [
        { text: 'X ka kya matlab hai?', correct: true },
        { text: 'Kya X matlab?', correct: false },
        { text: 'X hai matlab?', correct: false },
      ],
      explanation: "'X का क्या मतलब है?' — of X, what meaning is? The का (ka) attaches the meaning to X. Word order matters in Hindi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "What does this mean?" (using इसका = of this)',
      words: ['kya', 'matlab', 'hai', 'Iska'],
      correct: ['Iska', 'kya', 'matlab', 'hai'],
      translation: 'What does this mean?',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'Please say it again',
      correct: ['Phir se boliye', 'phir se boliye', 'फिर से बोलिए'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen says something fast, in Hindi. You need to clarify without pretending.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'अच्छा तो आप कल मेरे साथ Connaught Place चलेंगे शाम को छह बजे? (Accha to aap kal mere saath Connaught Place chalenge shaam ko chhah baje?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'क्षमा कीजिए, समझ नहीं आया। फिर से बोलिए, धीरे। (Kshama kijiye, samajh nahin aaya. Phir se boliye, dheere.)', native: "Sorry, I didn't understand. Please say it again, slowly.", correct: true, feedback: "Honest and polite. You stayed in the conversation instead of bluffing — that's the move." },
          { target: 'हाँ, हाँ (Haan, haan)', native: 'Yes, yes', correct: false, feedback: "Don't fake-nod. Say samajh nahin aaya — Indians prefer honest confusion to faked agreement." },
          { target: 'पता नहीं (Pata nahin)', native: "I don't know", correct: false, feedback: "That's a different gap. For 'didn't catch what you said', use samajh nahin aaya." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'कोई बात नहीं। कल — Connaught Place — शाम को छह बजे। ठीक है? (Koi baat nahin. Kal — Connaught Place — shaam ko chhah baje. Theek hai?)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for a slow repeat doesn't lose face — it earns help. You just unlocked the most repair-useful phrase in Hindi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I didn't understand", correct: ['Samajh nahin aaya', 'samajh nahin aaya', 'Samajh nahi aaya'] },
      { prompt: 'Please say it again', correct: ['Phir se boliye', 'phir se boliye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time someone speaks Hindi too fast — at a restaurant, in a shop, in a video call — try out 'समझ नहीं आया, फिर से बोलिए।' (Samajh nahin aaya, phir se boliye.) Don't bluff. Ask.",
    rwenSignoff: "Asking is the language hack. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "An IT industry conference in Hyderabad. During a fast-paced Q&A after a panel, a delegate asks you something in rapid Hindi about your team's approach to model latency. You catch maybe 30% of the words.",
    rwenRole: "Rajesh — a senior engineer in the audience, mid-50s, asks technical questions in fast Hindi by default; will gladly switch to slower Hindi or English the moment you flag it.",
    successCriteria: "User uses 'Samajh nahin aaya' (NOT 'Pata nahin' — wrong gap), follows with the polite 'Phir se boliye' or 'Dheere boliye', and may add 'X ka kya matlab hai?' for a specific term they didn't catch. No fake-nodding.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
