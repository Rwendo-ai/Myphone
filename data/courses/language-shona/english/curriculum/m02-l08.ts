import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-ndanzwisisa',
  module: 2,
  lesson: 8,
  title: 'Ndanzwisisa — I Understand',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After everything we've learned about asking for help and clarity, here's the other side of the conversation: telling someone you understand — or that you still don't. Both matter equally.",
    culturalNote: "In Shona conversation, confirming understanding is expected and valued. Staying silent when confused can lead to misunderstandings building up. Saying 'Ndanzwisisa' or 'Handanzwisisi' keeps the conversation honest.",
  },

  chunks: [
    {
      id: 'ndanzwisisa',
      target: 'Ndanzwisisa',
      native: 'I understand',
      literal: 'I-have-understood',
      emoji: '✅',
      phonetic: 'ndan-zwi-SI-sa',
      audioRef: null,
    },
    {
      id: 'handanzwisisi',
      target: 'Handanzwisisi',
      native: "I don't understand",
      literal: 'I-understand-not',
      emoji: '😕',
      phonetic: 'han-dan-zwi-SI-si',
      audioRef: null,
    },
    {
      id: 'ndanzwa',
      target: 'Ndanzwa',
      native: 'I heard / I get it',
      literal: 'I-heard/felt',
      emoji: '👂',
      phonetic: 'ndan-ZWA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Nda- vs Handa- — I did vs I did not',
    explanation: "'Nda-' at the start of a verb means 'I did' (completed action). 'Handa-' negates it — 'I did not'. This pairs with the Ha- negation prefix you learned before.",
    examples: [
      { target: 'Nd-a-nzwisisa', native: 'I understood (I did understand)' },
      { target: 'Hand-a-nzwisisi', native: "I didn't understand" },
      { target: 'Nd-a-nzwa', native: 'I heard' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndanzwisisa', right: 'I understand' },
        { left: 'Handanzwisisi', right: "I don't understand" },
        { left: 'Ndanzwa', right: 'I heard / I get it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Your teacher explains something and asks 'Unanzwisisa?' (Do you understand?). You followed it perfectly. What do you say?",
      question: 'Choose the honest reply',
      options: [
        { text: 'Ndanzwisisa', correct: true },
        { text: 'Handanzwisisi', correct: false },
        { text: 'Dzokorora', correct: false },
      ],
      explanation: "'Ndanzwisisa' confirms understanding. Only use 'Handanzwisisi' if you genuinely didn't follow.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I understand',
      correct: ['Ndanzwisisa', 'ndanzwisisa'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the honest admission',
      sentence: '_____, dzokorora ndapota.',
      options: ['Handanzwisisi', 'Ndanzwisisa', 'Ndinogona'],
      correct: 'Handanzwisisi',
      context: 'The explanation was too fast and you missed it.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I heard / I get it"',
      words: ['Ndanzwa'],
      correct: ['Ndanzwa'],
      translation: 'I heard / I get it',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't understand",
      correct: ['Handanzwisisi', 'handanzwisisi'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen just explained the difference between formal and informal greetings. They ask if you followed.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Saka — 'Ma-' ndeyekuremekedza, 'Wa-' ndeyeshamwari. Unanzwisisa?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndanzwisisa. Ma- kuvakuru, Wa- kushamwari.', native: 'I understand. Ma- for elders, Wa- for friends.', correct: true, feedback: "You understood AND summarised it back. That's real learning." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Good — and even better to summarise what you learned to confirm." },
          { target: 'Handanzwisisi', native: "I don't understand", correct: false, feedback: "That's okay — use 'Dzokorora ndapota' and Rwen will explain again." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndanzwa! You've got it. That distinction is one many learners miss for months.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Understanding and saying so — that's the conversation working.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I understand', correct: ['Ndanzwisisa', 'ndanzwisisa'] },
      { prompt: "I don't understand", correct: ['Handanzwisisi', 'handanzwisisi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone explains something to you, reply with 'Ndanzwisisa' (in your head or out loud). Affirm your own understanding.",
    rwenSignoff: "Understanding is the goal. You're getting there. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You're booking a guided walk at a lodge reception in Masvingo and the manager is laying out the route, pickup time, and what to bring — half English, half Shona. He asks 'Wanzwisisa here?' and you've genuinely caught about 70% of it. Don't fake the rest.",
    rwenRole: "Mr Chinembiri — ~40, lodge manager near Great Zimbabwe ruins, polite but precise; he'd rather repeat himself than have a confused tourist wandering off at 5am.",
    successCriteria: "User says 'Ndanzwisisa' for the parts they got, then immediately uses 'Handanzwisisi' for the specific part they missed (asking him to repeat just that piece) — distinguishing the two rather than blanket-claiming understanding, and uses 'Ndanzwa' as the soft ack on the second pass.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
