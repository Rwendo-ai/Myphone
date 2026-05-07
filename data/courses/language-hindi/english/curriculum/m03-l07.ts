import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-parivaar',
  module: 3,
  lesson: 7,
  title: 'Mera Parivaar — My Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In India, your परिवार (parivaar — family) often includes people English doesn't have a single word for. Your father's elder brother, your mother's younger sister, your grandfather's cousin — each has a specific name. Today, the basics. Enough to introduce yours.",
    culturalNote: "Indian families are often joint — multiple generations under one roof or in close orbit. Saying 'मेरा परिवार बड़ा है' (mera parivaar bada hai — my family is big) is a quiet point of pride, not a complaint. The joint-family identity shapes festivals, finances, weddings, and the very meaning of 'home'. Even a nuclear-family Indian usually still answers questions about parivaar with a wider net than just spouse + kids.",
  },

  chunks: [
    {
      id: 'mera_parivaar',
      target: 'मेरा परिवार — Mera parivaar',
      native: 'My family',
      literal: 'My family',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'MAY-ra pa-ri-VAAR',
      audioRef: null,
    },
    {
      id: 'mere_do_bhai',
      target: 'मेरे... भाई/बहन हैं — Mere... bhai/behen hain',
      native: 'I have ... brothers/sisters',
      literal: 'My ... brother/sister are',
      emoji: '👫',
      phonetic: 'MAY-ray ... bhai / BAY-hen hain',
      audioRef: null,
    },
    {
      id: 'shaadi_shuda',
      target: 'मैं शादी-शुदा हूँ — Main shaadi-shuda hoon',
      native: 'I am married',
      literal: 'I marriage-done am',
      emoji: '💍',
      phonetic: 'mayn shaa-DEE-SHU-da hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mere... hain — possession with plural nouns',
    explanation: "For singular things 'is mine', use मेरा (mera, m) or मेरी (meri, f). For PLURAL things you have, use मेरे (mere) and the verb becomes हैं (hain), not है (hai). 'I have two brothers' = मेरे दो भाई हैं (mere do bhai hain). 'I have a sister' (one) = मेरी एक बहन है (meri ek behen hai).",
    examples: [
      { target: 'मेरा परिवार बड़ा है — Mera parivaar bada hai', native: 'My family is big' },
      { target: 'मेरे दो भाई हैं — Mere do bhai hain', native: 'I have two brothers' },
      { target: 'मेरी एक बहन है — Meri ek behen hai', native: 'I have one sister' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Mera parivaar', right: 'My family' },
        { left: 'Mere... bhai/behen hain', right: 'I have ... brothers/sisters' },
        { left: 'Main shaadi-shuda hoon', right: 'I am married' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say "I have two brothers"',
      sentence: 'Mere do bhai _____.',
      options: ['hain', 'hai', 'hoon'],
      correct: 'hain',
      context: 'हैं (hain) is for plural subjects. Two brothers = plural.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'My family',
      correct: ['Mera parivaar', 'mera parivaar', 'मेरा परिवार'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I have one sister' in Hindi?",
      question: 'Pick the correct agreement',
      options: [
        { text: 'Meri ek behen hai', correct: true },
        { text: 'Mera ek behen hai', correct: false },
        { text: 'Mere ek behen hain', correct: false },
      ],
      explanation: "बहन (behen — sister) is feminine, so 'my' is मेरी (meri). One sister is singular, so the verb is है (hai). Get the agreement and the verb together.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have two brothers"',
      words: ['hain', 'do', 'Mere', 'bhai'],
      correct: ['Mere', 'do', 'bhai', 'hain'],
      translation: 'I have two brothers',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I am married',
      correct: ['Main shaadi-shuda hoon', 'main shaadi-shuda hoon', 'Main shaadi shuda hoon', 'मैं शादी-शुदा हूँ'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your family — expected and welcome in any Indian conversation.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आपका परिवार कैसा है? कौन-कौन हैं? (Aapka parivaar kaisa hai? Kaun-kaun hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मेरा परिवार बड़ा/छोटा है। मेरे... भाई/बहन हैं। (Mera parivaar bada/chhota hai. Mere... bhai/behen hain.)', native: 'My family is big/small. I have ... brothers/sisters.', correct: true, feedback: "Family size and siblings — that's the natural shape of an Indian family answer. Well done." },
          { target: 'मेरा परिवार (Mera parivaar)', native: 'My family', correct: false, feedback: "Good start — finish with a description: bada hai (is big) or chhota hai (is small)." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know your own family. Try Mera parivaar... and tell Rwen about it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'परिवार ही सब कुछ है। (Parivaar hi sab kuchh hai.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Family is everything — that's a phrase you'll hear often in India. And now you can speak about yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My family', correct: ['Mera parivaar', 'mera parivaar', 'मेरा परिवार'] },
      { prompt: 'I am married', correct: ['Main shaadi-shuda hoon', 'main shaadi-shuda hoon', 'Main shaadi shuda hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your family in Hindi today: 'मेरा परिवार ___ है। मेरे ___ भाई/बहन हैं।' Big or small, the size doesn't matter — what matters is you can say it.",
    rwenSignoff: "Your family is part of you. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "An Indian wedding (shaadi) in Jaipur. After the baraat reaches the venue and the formal welcome is done, the bride's mother takes you aside near the gulab jamun station and asks about your own parivaar — siblings, marriage status, kids if any.",
    rwenRole: "Mrs. Kapoor — bride's mother, ~55, hospitable and asking about your family the way Indian mothers do — to figure out who you 'belong' to and how you fit into the gathering.",
    successCriteria: "User uses 'Mera parivaar...' to describe family size, 'Mere X bhai/behen hain' for siblings (correct mere + plural verb hain), and either 'Main shaadi-shuda hoon' or its negative if applicable. Doesn't confuse mera/meri/mere agreements (e.g. 'Meri do bhai hain' is wrong — should be Mere do bhai hain).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
