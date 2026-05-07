import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-mujhe-pasand',
  module: 3,
  lesson: 5,
  title: 'Mujhe... Pasand Hai — What I Like',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hobbies build bridges faster than job titles. Cricket, cooking, music, books — naming what you like in Hindi turns a polite chat into a real conversation. Today you learn to say it in the way Hindi actually says it: 'to me, X is liked.'",
    culturalNote: "Hindi expresses 'I like' indirectly: मुझे X पसंद है (mujhe X pasand hai) literally means 'to me, X is dear/liked.' English speakers often try 'मैं X पसंद करता हूँ' (Main X pasand karta hoon) — that's grammatically possible but sounds stiff. The natural form puts the experience on the speaker, not the action on the speaker. Sit with that.",
  },

  chunks: [
    {
      id: 'mujhe_pasand',
      target: 'मुझे... पसंद है — Mujhe... pasand hai',
      native: 'I like... (lit. "to me, X is liked")',
      literal: 'To-me ... liked is',
      emoji: '❤️',
      phonetic: 'MU-jhay ... pa-SAND hai',
      audioRef: null,
    },
    {
      id: 'cricket_pasand',
      target: 'मुझे cricket पसंद है — Mujhe cricket pasand hai',
      native: 'I like cricket',
      literal: 'To-me cricket liked is',
      emoji: '🏏',
      phonetic: 'MU-jhay CRI-cket pa-SAND hai',
      audioRef: null,
    },
    {
      id: 'mujhe_sangeet',
      target: 'मुझे संगीत पसंद है — Mujhe sangeet pasand hai',
      native: 'I like music',
      literal: 'To-me music liked is',
      emoji: '🎵',
      phonetic: 'MU-jhay san-GEET pa-SAND hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe... pasand hai — the dative-experiencer pattern',
    explanation: "Hindi uses an 'experiencer' construction for likes, hunger, fear, cold, etc. Instead of 'I like X', it's 'to me, X is liked' — मुझे X पसंद है. The thing comes before पसंद है (pasand hai). Same pattern: मुझे भूख है (mujhe bhookh hai — I am hungry, lit. 'to me, hunger is'). Learn this shape and unlock dozens of Hindi expressions.",
    examples: [
      { target: 'मुझे चाय पसंद है — Mujhe chai pasand hai', native: 'I like chai (tea)' },
      { target: 'मुझे cricket पसंद है — Mujhe cricket pasand hai', native: 'I like cricket' },
      { target: 'मुझे पढ़ना पसंद है — Mujhe padhna pasand hai', native: 'I like reading' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Mujhe... pasand hai', right: 'I like...' },
        { left: 'Mujhe cricket pasand hai', right: 'I like cricket' },
        { left: 'Mujhe sangeet pasand hai', right: 'I like music' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you like chai',
      sentence: '_____ chai pasand hai.',
      options: ['Mujhe', 'Main', 'Mera'],
      correct: 'Mujhe',
      context: '"Mujhe" means "to me" — the dative form. This is the natural way to express likes in Hindi.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I like cricket',
      correct: ['Mujhe cricket pasand hai', 'mujhe cricket pasand hai', 'मुझे cricket पसंद है'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence sounds most natural in Hindi for 'I like music'?",
      question: 'Pick the natural Hindi form',
      options: [
        { text: 'Mujhe sangeet pasand hai', correct: true },
        { text: 'Main sangeet pasand karta hoon', correct: false },
        { text: 'Main sangeet hoon', correct: false },
      ],
      explanation: "'Mujhe X pasand hai' is the natural form. 'Main pasand karta hoon' exists but sounds bookish/stiff. 'Main sangeet hoon' would mean 'I am music' — a different sentence entirely.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I like reading"',
      words: ['hai', 'pasand', 'padhna', 'Mujhe'],
      correct: ['Mujhe', 'padhna', 'pasand', 'hai'],
      translation: 'I like reading',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I like music',
      correct: ['Mujhe sangeet pasand hai', 'mujhe sangeet pasand hai', 'मुझे संगीत पसंद है'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks what you actually enjoy. Use the experiencer construction.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आपको क्या पसंद है? कोई शौक? (Aapko kya pasand hai? Koi shauk?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मुझे संगीत पसंद है। मुझे cricket भी पसंद है। (Mujhe sangeet pasand hai. Mujhe cricket bhi pasand hai.)', native: 'I like music. I like cricket too.', correct: true, feedback: "Two things you enjoy, both with mujhe... pasand hai. Now Rwen knows what to talk about with you." },
          { target: 'मैं संगीत (Main sangeet)', native: 'I music', correct: false, feedback: "Almost — Hindi needs the full pattern: Mujhe sangeet pasand hai." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know what you like. Try Mujhe ___ pasand hai." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'मुझे भी संगीत पसंद है। हम अच्छे दोस्त बनेंगे। (Mujhe bhi sangeet pasand hai. Hum acche dost banenge.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Shared likes, fast friendship. The mujhe-pasand-hai shape is now yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I like cricket', correct: ['Mujhe cricket pasand hai', 'mujhe cricket pasand hai'] },
      { prompt: 'I like music', correct: ['Mujhe sangeet pasand hai', 'mujhe sangeet pasand hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one thing you genuinely enjoy. Say it in Hindi: 'मुझे ___ पसंद है।' (Mujhe ___ pasand hai.) Resist saying 'Main ___ pasand karta hoon' — go with the natural form.",
    rwenSignoff: "What you love is who you are. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "Sunday family dinner at your colleague's home in Bandra, Mumbai. After the rotis and dal makhani are cleared, the host's teenage son (just back from cricket coaching) asks what you actually like to do — and whether you follow IPL.",
    rwenRole: "Aarav — host's 15-year-old son, sharp, switching between English and Hindi, wants to know if you're 'fun' or just another boring uncle/aunty.",
    successCriteria: "User produces 'Mujhe X pasand hai' for at least two different things (e.g. cricket and sangeet, or food and reading). AVOIDS the cross-pattern error 'Main X pasand karta hoon' — keeps the experiencer construction. Adds 'bhi' (also) for the second item.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
