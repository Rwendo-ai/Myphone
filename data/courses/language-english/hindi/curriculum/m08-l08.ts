import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Past tense — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "कल — yesterday। English में past के लिए '-ed' (walked, talked) या completely different forms (go → WENT, see → SAW)। ये irregular verbs रट लें।",
    culturalNote: "हिंदी में past एकदम simple — 'जाता हूँ' → 'गया'। 'देखता हूँ' → 'देखा'। एक pattern, सब verbs। English में दो हैं: REGULAR ('-ed' लगाओ — walked, talked, watched) और IRREGULAR (form पूरा बदलता — go → went, see → saw, eat → ate)। शुरू में सिर्फ़ तीन-चार irregular याद कर लो: WENT (गया), SAW (देखा), HAD (के पास था), WAS (था)। ये 80% past stories के लिए काफ़ी हैं।",
  },

  chunks: [
    {
      id: 'yesterday_i_went',
      target: 'Yesterday I went to the market.',
      native: 'कल मैं market गया।',
      literal: 'Kal main market gaya',
      emoji: '🚶',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
    {
      id: 'i_saw_a_friend',
      target: 'I saw a friend.',
      native: 'मैंने एक दोस्त देखा।',
      literal: 'Maine ek dost dekha',
      emoji: '👀',
      phonetic: 'ay-SAW-uh-FREND',
      audioRef: null,
    },
    {
      id: 'it_was_great',
      target: 'It was great.',
      native: 'अच्छा था।',
      literal: 'Achha tha',
      emoji: '👍',
      phonetic: 'it-WUZ-GRAYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple past — Regular & Irregular',
    explanation: "REGULAR: '-ed' लगाओ (walk → walked)। IRREGULAR (रटें): go → WENT, see → SAW, eat → ATE, have → HAD, be → WAS/WERE, come → CAME, do → DID, make → MADE। 'I was', 'You/We/They WERE'।",
    examples: [
      { target: 'Yesterday I went to the market.',  native: 'कल मैं market गया।' },
      { target: 'I saw a friend.',                  native: 'मैंने दोस्त देखा।' },
      { target: 'It was great.',                    native: 'अच्छा था।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Present और past मिलाएँ (irregular)',
      pairs: [
        { left: 'go',   right: 'went' },
        { left: 'see',  right: 'saw' },
        { left: 'eat',  right: 'ate' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Irregular past भरें',
      sentence: 'Yesterday I _____ to the shop.',
      options: ['went', 'goed', 'go'],
      correct: 'went',
      context: "'Go' irregular — past 'went'। 'Goed' English में नहीं।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — past',
      prompt: 'कल मैं market गया।',
      correct: ['Yesterday I went to the market.', 'Yesterday I went to the market', 'I went to the market yesterday.', 'yesterday i went to the market.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — past',
      prompt: 'मैंने एक दोस्त देखा।',
      correct: ['I saw a friend.', 'I saw a friend', 'I saw my friend.', 'i saw a friend.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Past वाक्य: "बहुत अच्छा था"',
      words: ['really', 'It', 'great.', 'was'],
      correct: ['It', 'was', 'really', 'great.'],
      translation: 'बहुत अच्छा था',
    },
    {
      type: 'build_sentence',
      instruction: 'Past कहानी',
      words: ['saw', 'I', 'a', 'I', 'and', 'friend.', 'went,'],
      correct: ['I', 'went,', 'and', 'I', 'saw', 'a', 'friend.'],
      translation: 'मैं गया, और एक दोस्त देखा',
    },
  ],

  rwenDialogue: {
    intro: "London में हैं। कल बुरा दिन था — train late, meeting miss। दोस्त को बताना है।",
    lines: [
      { speaker: 'npc', target: "Hey! What happened yesterday? You looked stressed.", native: 'अरे! कल क्या हुआ? Stressed लग रहे थे।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yesterday I went to a meeting, but the train was late, so I missed it. It was a bad day.", native: 'कल मैं meeting गया, पर train late थी, इसलिए miss हो गई। बुरा दिन था।', correct: true, feedback: "बढ़िया — 'went', 'was', 'missed' सब irregular past forms perfect।" },
          { target: "Yesterday I goed to meeting. Train late. Bad day.", native: 'कल मैं goed meeting। Train late। बुरा दिन।', correct: false, feedback: "'Goed' नहीं — 'WENT'। 'Train was late' (was)।" },
        ],
      },
      { speaker: 'npc', target: "That sounds awful. I had a similar day last week.", native: 'अरे बुरा। मेरा भी पिछले हफ़्ते ऐसा था।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 4 irregular past forms — went, saw, had, was — सब stories खुलती हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Yesterday I went to the market (अंग्रेज़ी में)', correct: ['Yesterday I went to the market', 'Yesterday I went to the market.', 'I went to the market yesterday.', 'yesterday i went to the market.'] },
      { prompt: 'I saw a friend (अंग्रेज़ी में)', correct: ['I saw a friend', 'I saw a friend.', 'I saw my friend.', 'i saw a friend.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज शाम कल के बारे में English में सोचें। तीन वाक्य: 'Yesterday I went to ___', 'I saw ___', 'It was ___'। Practice से went, saw, was स्वाभाविक हो जाएँगे।",
    rwenSignoff: "कल — future ('I will...').",
  },

  phase8: {
    scenario: "London pub में work colleague के साथ। कल बुरा दिन था — सुनाओ।",
    rwenRole: "Lucy, 30, your colleague, loves stories. Asks questions to draw out details.",
    successCriteria: "Student uses irregular past forms (went, saw, was, had, made, did) at least 6 times. Tells a clear past story without confusing present and past.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
