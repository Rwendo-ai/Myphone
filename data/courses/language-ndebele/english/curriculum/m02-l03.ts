import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03',
  module: 2,
  lesson: 3,
  title: 'Unjani / Linjani — How are you?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After the greeting comes the check-in. 'Unjani?' — how are you (one person). 'Linjani?' — how are you all (group, or respectful singular). The reply almost everyone uses is 'Ngiyaphila' — I'm well. Even if you're not. This isn't dishonesty; it's the social rhythm.",
    culturalNote: "In Ndebele, 'Ngiyaphila' (I'm fine / I'm alive) is the default reply, like 'fine, thanks' in English. People share real feelings in follow-up sentences, not in this opening exchange. Saying 'I'm bad' here would derail the rhythm and feel awkward — keep your weather report for later in the conversation. The 'how are you' question is essentially a verbal handshake.",
  },

  chunks: [
    {
      id: 'unjani',
      target: 'Unjani?',
      native: 'How are you? (one person, casual)',
      literal: 'How are you (singular)?',
      emoji: '🤔',
      phonetic: 'oo-NJAH-nee',
      audioRef: null,
    },
    {
      id: 'linjani',
      target: 'Linjani?',
      native: 'How are you? (plural / respectful singular)',
      literal: 'How are you (plural)?',
      emoji: '👥',
      phonetic: 'lee-NJAH-nee',
      audioRef: null,
    },
    {
      id: 'ngiyaphila',
      target: 'Ngiyaphila',
      native: "I'm fine / I'm well",
      literal: 'I am living / I am alive',
      emoji: '😊',
      phonetic: 'ng-ee-yah-PEE-lah',
      audioRef: null,
    },
    {
      id: 'siyaphila',
      target: 'Siyaphila',
      native: "We're fine / We're well",
      literal: 'We are living',
      emoji: '👨‍👩‍👧',
      phonetic: 'see-yah-PEE-lah',
      audioRef: null,
    },
    {
      id: 'wena',
      target: 'Wena?',
      native: 'And you?',
      literal: 'You? — bouncing the question back',
      emoji: '↩️',
      phonetic: 'WEH-nah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The greeting volley: ask, answer, return',
    explanation: "Ndebele check-ins follow a three-step volley. They ask ('Unjani?' or 'Linjani?'), you answer ('Ngiyaphila'), then you bounce it back ('Wena?'). Skip the bounce-back and the conversation stalls. The 'u-' vs 'li-' prefix matches the same plural-respect rule as Salibonani / Sawubona.",
    examples: [
      { target: 'Unjani? / Ngiyaphila. Wena?', native: 'How are you? / I\'m fine. And you?' },
      { target: 'Linjani? / Siyaphila.', native: 'How are you all? / We\'re fine.' },
      { target: 'Ngiyaphila, ngiyabonga.', native: "I'm fine, thank you." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question/answer to its meaning',
      pairs: [
        { left: 'Unjani?', right: 'How are you? (singular casual)' },
        { left: 'Linjani?', right: 'How are you all / how are you (respectful)' },
        { left: 'Ngiyaphila', right: "I'm fine" },
        { left: 'Wena?', right: 'And you?' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "An elder asks: 'Linjani?'. What's the cleanest reply?",
      question: 'Pick the best answer',
      options: [
        { text: 'Ngiyaphila, ngiyabonga. Wena?', correct: true },
        { text: 'Hatshi.', correct: false },
        { text: 'Salibonani.', correct: false },
      ],
      explanation: "Three-part volley: report yourself ('ngiyaphila'), thank her ('ngiyabonga'), bounce it back ('wena?'). She'll smile.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m fine, and you?"',
      words: ['Wena?', 'Ngiyaphila,', 'Ngiyabonga'],
      correct: ['Ngiyaphila,', 'Wena?'],
      translation: "I'm fine, and you?",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'How are you all? (or asking respectfully)',
      correct: ['Linjani', 'linjani', 'Linjani?', 'linjani?'],
    },
  ],

  rwenDialogue: {
    intro: "You bump into a Ndebele colleague's mother at a wedding. She's seen you before but you've never spoken much. She greets you first.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salibonani! Linjani?',
        native: 'Hello! How are you (respectfully)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyaphila, ngiyabonga. Wena?', native: "I'm fine, thank you. And you?", correct: true, feedback: "Perfect three-part volley. She lights up — you've done this before." },
          { target: 'Ngiyaphila.', native: "I'm fine.", correct: false, feedback: "Technically correct, but you didn't bounce it back. The conversation just stalled mid-exchange." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "She didn't ask a yes/no question. 'Hatshi' here makes no sense and would confuse her." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ngiyaphila lami, ngiyabonga.',
        native: "I'm fine too, thank you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "She used 'lami' — 'me too'. You've reached the natural end of the greeting volley. From here you can talk about anything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (respectfully, or to a group)', correct: ['Linjani', 'linjani', 'Linjani?', 'linjani?'] },
      { prompt: "I'm fine", correct: ['Ngiyaphila', 'ngiyaphila'] },
      { prompt: 'And you?', correct: ['Wena', 'wena', 'Wena?', 'wena?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Volley once today. After someone greets you, ask them how they are — even in English. Notice that the rhythm is the same in every language: greet, check, bounce back.",
    rwenSignoff: "The greeting volley closes a loop. That's why it matters. Sala kuhle.",
  },

  phase8: {
    scenario: "You arrive ten minutes early at a friend's family home in Hillside, Bulawayo. The grandmother — Gogo — is on the veranda shelling peanuts. You've met her once before, very briefly. Greet her, do the full volley, then settle in to wait.",
    rwenRole: "Gogo MaNdlovu — late 70s, sharp, kind, will hold your gaze; will not let you skip the volley; if you forget to bounce 'wena?' back she'll just stare patiently until you remember.",
    successCriteria: "User opens with 'Salibonani', asks 'Linjani?' (NOT 'Unjani?' — she's elder), accepts her answer with 'Ngiyabonga', and ALSO answers her own 'unjani' check-in with 'Ngiyaphila + wena bounce-back'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
