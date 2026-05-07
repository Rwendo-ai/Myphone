import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Hobbies — शौक',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "किताबें, cricket, खाना बनाना? अंग्रेज़ी में अपने शौक बताने के लिए 'I like ...' या 'I enjoy ...' काम आता है। पर एक छोटा-सा नियम है — 'I like' के बाद verb में '-ing' लगता है।",
    culturalNote: "हिंदी में 'मुझे पढ़ना पसंद है' — 'पढ़ना' खुद ही noun जैसा लगता है। अंग्रेज़ी में 'I like reading' (कैसे: read + ing) कहते हैं — 'I like read' ग़लत है। यह -ing form (gerund) verb को noun बना देती है। small talk में 'I like reading' सबसे आसान और natural सुनाई देता है।",
  },

  chunks: [
    {
      id: 'i_like',
      target: 'I like ...',
      native: 'मुझे पसंद है...',
      literal: 'I like ...',
      emoji: '👍',
      phonetic: 'आय-लाइक',
      audioRef: null,
    },
    {
      id: 'i_enjoy',
      target: 'I enjoy ...',
      native: 'मुझे अच्छा लगता है...',
      literal: 'I enjoy ...',
      emoji: '😊',
      phonetic: 'आय-एन-जॉय',
      audioRef: null,
    },
    {
      id: 'in_my_free_time',
      target: 'In my free time',
      native: 'खाली समय में',
      literal: 'In my free time',
      emoji: '🕐',
      phonetic: 'इन-माय-फ्री-टाइम',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Like" + gerund (-ing form)',
    explanation: "'I like' या 'I enjoy' के बाद verb में '-ing' लगता है: read → reading, cook → cooking, watch → watching, play → playing। पूरा वाक्य: 'I enjoy reading in my free time' = 'खाली समय में मुझे पढ़ना अच्छा लगता है'।",
    examples: [
      { target: 'I like reading',                  native: 'मुझे पढ़ना पसंद है' },
      { target: 'I enjoy cooking',                  native: 'मुझे खाना बनाना अच्छा लगता है' },
      { target: 'In my free time, I watch films',   native: 'खाली समय में मैं फ़िल्में देखता हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'शौक मिलाओ',
      pairs: [
        { left: 'Reading',         right: 'पढ़ना' },
        { left: 'Cooking',         right: 'खाना बनाना' },
        { left: 'Watching films',  right: 'फ़िल्में देखना' },
        { left: 'Music',           right: 'संगीत' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मुझे पढ़ना पसंद है',
      correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'खाली समय में, मुझे खाना बनाना अच्छा लगता है',
      correct: ['In my free time, I enjoy cooking', 'In my free time I enjoy cooking', 'in my free time, i enjoy cooking', 'in my free time i enjoy cooking'],
    },
    {
      type: 'fill_blank',
      instruction: "'-ing' वाला सही form चुनो",
      sentence: "I like ____ in my free time.",
      options: ['reading', 'read', 'reads'],
      correct: 'reading',
      context: "'like' के बाद '-ing' लगता है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शौक का वाक्य बनाओ',
      words: ['I', 'enjoy', 'cooking'],
      correct: ['I', 'enjoy', 'cooking'],
      translation: 'मुझे खाना बनाना अच्छा लगता है',
    },
    {
      type: 'build_sentence',
      instruction: 'लंबा वाक्य बनाओ',
      words: ['In', 'my', 'free', 'time', 'I', 'read'],
      correct: ['In', 'my', 'free', 'time', 'I', 'read'],
      translation: 'खाली समय में मैं पढ़ता हूँ',
    },
  ],

  rwenDialogue: {
    intro: "तुम Mumbai के एक अंग्रेज़ी book club में पहली बार पहुँचे हो। सब बारी-बारी अपने शौक बता रहे हैं।",
    lines: [
      { speaker: 'npc', target: "Tell us — what do you like doing in your free time?", native: 'बताओ — खाली समय में क्या करना पसंद है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I enjoy reading. In my free time, I read every evening.", native: 'मुझे पढ़ना अच्छा लगता है। खाली समय में हर शाम पढ़ता हूँ।', correct: true,  feedback: "बढ़िया — शौक के साथ एक छोटी-सी detail भी जोड़ दी।" },
          { target: "I like read.",                                              native: 'मुझे पढ़ पसंद है।',                                          correct: false, feedback: "'-ing' छूट गया — 'I like reading' सही है।" },
          { target: "Read.",                                                     native: 'पढ़ना।',                                                     correct: false, feedback: "बहुत छोटा — book club में पूरा वाक्य चाहिए।" },
        ],
      },
      { speaker: 'npc', target: "Oh wonderful — what's your favourite book?", native: 'अच्छा — पसंदीदा किताब कौन-सी है?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'reading' में '-ing' लगाना याद रखा। यही gerund अंग्रेज़ी में शौक बताने का सबसे natural तरीक़ा है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'मुझे पढ़ना पसंद है (in English)',         correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'] },
      { prompt: 'खाली समय में (in English)',                correct: ['In my free time', 'in my free time', 'In my free time,', 'in my free time,'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक शौक चुनो और अंग्रेज़ी में दो वाक्य बोलो: 'In my free time, I enjoy ___-ing.' फिर एक और verb से: 'I like ___-ing'।",
    rwenSignoff: "अच्छे जा रहे हो। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You're at an English-language book club meeting in Mumbai. The host does a quick round of 'tell us one thing you enjoy outside work' before starting the discussion.",
    rwenRole: "Meera, 28, the book club host. Friendly, follows up with 'what's a favourite book/show/recipe?' depending on what you say.",
    successCriteria: "User produces at least one 'I like/enjoy ___-ing' sentence with correct gerund form (no 'I like read'), and gives one extra detail about the hobby.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
