import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction — a complete two-way intro',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today is the integration. Nine lessons compressed into one real conversation. Name, age, job, family, hobbies, languages, where you live, who you are — and the open questions you ask back. You're not learning a new chunk. You're stringing what you have into a self-portrait, then politely turning the canvas around.",
    culturalNote: "A complete Mandarin introduction follows a rhythm: place yourself ('shì + noun'), state facts ('suì', 'gè háizi'), share tastes ('xǐhuān ___'), describe yourself ('hěn ___'), THEN flip the camera ('Gàosu wǒ ___', 'Nǐ ne?'). The flip is the act that turns biography into conversation. Skipping it makes you sound like a press release.",
  },

  chunks: [
    {
      id: 'review_full_intro',
      target: 'Wǒ jiào ___, wǒ ___ suì, wǒ shì ___',
      native: "I'm called ___, I'm ___ years old, I'm a ___",
      literal: '(我叫___,我___岁,我是___) lit: I-called-___, I-___-years, I-am-___',
      emoji: '🪪',
      phonetic: 'WAW jyow ___, waw ___ sway, waw shr ___',
      audioRef: null,
    },
    {
      id: 'review_full_likes',
      target: 'Wǒ xǐhuān ___, wǒ hěn ___',
      native: 'I like ___, I am ___',
      literal: '(我喜欢___,我很___) lit: I-like-___, I-(degree)-___',
      emoji: '💛',
      phonetic: 'WAW SHEE-hwahn ___, waw hun ___',
      audioRef: null,
    },
    {
      id: 'review_flip',
      target: 'Gàosu wǒ — nǐ ne?',
      native: 'Tell me — and you?',
      literal: '(告诉我 — 你呢?) lit: tell-me, you-(particle)',
      emoji: '🎤',
      phonetic: 'GOW-soo waw — nee nuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 5-beat full introduction',
    explanation: "A complete Mandarin self-introduction has 5 beats: (1) name + age + job — 'Wǒ jiào ___, wǒ ___ suì, wǒ shì ___'. (2) family + place — 'Wǒ yǒu ___ gè háizi / Wǒ dānshēn / Wǒ zhù zài ___'. (3) tastes — 'Wǒ xǐhuān ___'. (4) self-portrait — 'Wǒ hěn ___'. (5) THE FLIP — 'Gàosu wǒ ___ / Nǐ ne?'. Five beats. Roughly 30 seconds. The flip is the most important — it's what turns a monologue into a conversation.",
    examples: [
      { target: '1. Wǒ jiào Anna, wǒ sānshí suì, wǒ shì gōngchéngshī', native: "I'm Anna, 30, an engineer" },
      { target: '2. Wǒ yǒu liǎng gè háizi, wǒ zhù zài Sydney', native: 'I have two kids, live in Sydney' },
      { target: '3-5. Wǒ xǐhuān kàn shū, wǒ hěn hàoqí — gàosu wǒ nǐ de gùshi', native: 'I like reading, I\'m curious — tell me your story' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its beat in a full introduction',
      pairs: [
        { left: 'Wǒ jiào ___, wǒ shì ___', right: 'Beat 1 — name & job' },
        { left: 'Wǒ yǒu liǎng gè háizi', right: 'Beat 2 — family' },
        { left: 'Wǒ xǐhuān kàn shū', right: 'Beat 3 — tastes' },
        { left: 'Gàosu wǒ — nǐ ne?', right: 'Beat 5 — flip the camera' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the full self-portrait',
      prompt: "I'm Anna, 30, an engineer, I live in Sydney",
      correct: [
        'Wǒ jiào Anna, wǒ sānshí suì, wǒ shì gōngchéngshī, wǒ zhù zài Sydney',
        'Wo jiao Anna, wo sanshi sui, wo shi gongchengshi, wo zhu zai Sydney',
        'wo jiao anna, wo sanshi sui, wo shi gongchengshi, wo zhu zai sydney',
        '我叫Anna,我三十岁,我是工程师,我住在悉尼',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the flip — "Tell me your story, and you?"',
      words: ['nǐ', 'gùshi,', 'Gàosu', 'wǒ', 'ne?', 'nǐ', 'de'],
      correct: ['Gàosu', 'wǒ', 'nǐ', 'de', 'gùshi,', 'nǐ', 'ne?'],
      translation: 'Tell me your story, and you?',
    },
    {
      type: 'fill_blank',
      instruction: "Complete — describing yourself with proper degree word",
      sentence: 'Wǒ _____ yǒushàn',
      options: ['hěn', 'shì', 'le'],
      correct: 'hěn',
      context: 'Adjectives need a degree word — "hěn" is the default. Without it, the sentence sounds like an unfinished comparison.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I have two kids, I'm curious, and you?",
      correct: [
        'Wǒ yǒu liǎng gè háizi, wǒ hěn hàoqí, nǐ ne?',
        'Wo you liang ge haizi, wo hen haoqi, ni ne?',
        'wo you liang ge haizi, wo hen haoqi, ni ne',
        '我有两个孩子,我很好奇,你呢?',
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're meeting a Chinese client for the first time. Pick the smoothest opener.",
      question: 'Which sequence flows best?',
      options: [
        { text: 'Wǒ jiào Anna, wǒ shì gōngchéngshī, hěn gāoxìng rènshi nǐ. Nǐ ne?', correct: true },
        { text: 'Hěn gāoxìng rènshi nǐ, wǒ shì lèi, wǒ jiào Anna', correct: false },
        { text: 'Nǐ ne, wǒ jiào Anna, zàijiàn', correct: false },
      ],
      explanation: 'Name → role → warmth → flip. The wrong options either use "shì" with an adjective ("shì lèi") or close before they\'ve opened ("zàijiàn" first).',
    },
  ],

  rwenDialogue: {
    intro: "Video call — your first real client meeting in Mandarin. Not a kickoff this time, but a deal call. Three new faces in the gallery: a director from a Shenzhen retailer, plus their two leads. The director smiles into the camera. 'Wǒmen kāishǐ ba — let's begin. Tell us about yourself.' This is the moment Module 3 was built for.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wǒmen kāishǐ ba — qǐng zìwǒ jièshào',
        native: "Let's begin — please introduce yourself",
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Wǒ jiào Anna, wǒ sānshí suì, wǒ shì gōngchéngshī. Wǒ zhù zài Sydney — wǒ zài zhèlǐ wǔ nián le. Wǒ hěn hàoqí, hěn xǐhuān xuéxí Zhōngwén',
            native: "I'm Anna, 30, an engineer. I live in Sydney — been here 5 years. I'm curious, and I really enjoy learning Chinese",
            correct: true,
            feedback: 'A full five-beat intro — name, age, job, place + duration, self-portrait + tastes. They will absolutely take you seriously.',
          },
          { target: 'Wǒ shì lèi', native: 'I am tired', correct: false, feedback: '"Lèi" is an adjective — it needs "hěn", not "shì". And "I\'m tired" isn\'t the introduction this moment is asking for.' },
          { target: 'Nǐ hǎo, zàijiàn', native: 'Hello, goodbye', correct: false, feedback: "You opened and closed in two words — they wanted a real introduction." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn hǎo! Nǐ Zhōngwén shuō de hěn hǎo. Wǒ jiào Lǐ Zǒng, wǒ shì zǒngjiān',
        native: "Lovely! Your Chinese is great. I'm Director Lǐ — I'm the general manager",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hěn gāoxìng rènshi nǐ. Gàosu wǒ — nǐmen gōngsī zuò shénme?', native: "Pleased to meet you. Tell me — what does your company do?", correct: true, feedback: 'The flip — beat 5. You acknowledged them, then opened the door for THEM to talk. This is what separates a memorised script from a conversation.' },
          { target: 'Wǒ shì gōngchéngshī', native: "I'm an engineer", correct: false, feedback: "You already said that. Now is the moment to flip — ask THEM something." },
          { target: 'Wǒ hěn lèi', native: "I'm tired", correct: false, feedback: "Honest, but not the right beat. The flip is the goal here." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo wèntí! Wǒmen zuò gōngyìng liàn jiějué fāng\'àn...',
        native: "Good question! We do supply-chain solutions...",
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at what you just did. Ten lessons ago, 'Wǒ shì' was a mountain. Now you self-introduced for thirty seconds in Mandarin AND flipped the conversation back to them — on a real client call. The five-beat shape is yours. Module 3 closed. Hěn hǎo, péngyou.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Full opener: I'm called [name], I'm [age], I'm a [job]",
        correct: [
          'Wǒ jiào ___, wǒ ___ suì, wǒ shì ___',
          'Wo jiao ___, wo ___ sui, wo shi ___',
          'wǒ jiào ___, wǒ ___ suì, wǒ shì ___',
        ],
      },
      {
        prompt: 'The flip: Tell me — and you?',
        correct: ['Gàosu wǒ — nǐ ne?', 'Gaosu wo - ni ne?', 'gaosu wo, ni ne', 'gàosu wǒ, nǐ ne', '告诉我,你呢?', '告诉我 - 你呢?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 3 Complete",
    task: "Today, do the full 5-beat introduction out loud — alone in front of a mirror, on a walk, in a notebook, doesn't matter. Name + age + job → family + place → tastes + self-portrait → flip. Time it. Under 45 seconds is the goal. You've earned it.",
    rwenSignoff: "Module Three closed. You can now place yourself, share yourself, and ask back — in Mandarin, in real time, in a real conversation. That's a self in another language. Hěn hǎo. Zàijiàn — for now.",
  },

  phase8: {
    scenario: "Video call, 10am. Your first real client meeting in Mandarin — a deal call with a Shenzhen retailer. Three new faces in the Zoom gallery: Director Lǐ (the general manager) and two of her senior leads. Coffee gone cold beside you, notes pulled up off-screen. Director Lǐ opens with a polite 'Qǐng zìwǒ jièshào — please introduce yourself'. The next 60 seconds decide whether they treat you as a peer or as someone the Sydney office sent because no one else was free. This is everything Module 3 has built toward — name, age, role, place, tastes, character, and the flip.",
    rwenRole: "Director Lǐ Méi (李梅) — general manager of a Shenzhen retail chain, late 40s, sharp, time-conscious but warm with people who put in the effort. Her two leads listen and occasionally interject with questions. Director Lǐ will respond to your introduction with her own and then expects you to drive the conversation forward.",
    successCriteria: "User produces a complete 5-beat introduction: (1) name + age + job using 'shì' for nouns, (2) place with 'Wǒ zhù zài ___' or family with 'gè háizi'/'dānshēn', (3) tastes with 'Wǒ xǐhuān ___', (4) self-portrait with 'Wǒ hěn ___' (degree word never dropped), (5) THE FLIP — at least one open question or 'Nǐ ne?' / 'Gàosu wǒ ___'. Bonus: they correctly use 'le' for ongoing duration ('zài Sydney wǔ nián le').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
