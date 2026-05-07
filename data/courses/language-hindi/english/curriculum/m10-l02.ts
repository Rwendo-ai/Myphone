import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-gham',
  module: 10,
  lesson: 2,
  title: 'Gham — Sadness & Sympathy',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "A language that only does happy is a tourist's language. Today we go to गम (gham) and दुख (dukh) — sadness and sorrow. Hindi has more words for grief than English does, because Indian families don't grieve alone — they grieve in company, and the language reflects that.",
    culturalNote: "When someone shares hard news in Hindi, you don't reply with a brisk 'sorry'. The classical response is 'मुझे बहुत दुख हुआ' (mujhe bahut dukh hua — I felt great sorrow). Saying it slowly, with eye contact, is the cultural softening: you're not solving the pain, you're sitting with it.",
  },

  chunks: [
    {
      id: 'main_udaas_hoon',
      target: 'मैं उदास हूँ — Main udaas hoon',
      native: 'I am sad',
      literal: 'I sad am',
      emoji: '😢',
      phonetic: 'mayn u-DAAS hoon',
      audioRef: null,
    },
    {
      id: 'mujhe_dukh_hua',
      target: 'मुझे दुख हुआ — Mujhe dukh hua',
      native: 'I am sorry / I felt sorrow (to hear that)',
      literal: 'To-me sorrow happened',
      emoji: '💔',
      phonetic: 'mu-JHAY DUKH hu-aa',
      audioRef: null,
    },
    {
      id: 'main_aapke_saath_hoon',
      target: 'मैं आपके साथ हूँ — Main aapke saath hoon',
      native: 'I am with you',
      literal: 'I your with am',
      emoji: '🤝',
      phonetic: 'mayn AAP-kay saath hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe + noun + hua/hai — to me [feeling] happened',
    explanation: "Many Hindi feeling-statements use मुझे (mujhe — to me) + emotion noun + a form of होना (hona — to happen/be). Mujhe dukh hua (I felt sorrow). Mujhe khushi hui (I felt joy). Mujhe afsos hai (I have regret). Hindi often locates the feeling AT you rather than IN you — the emotion arrives, you receive it.",
    examples: [
      { target: 'Mujhe bahut dukh hua — मुझे बहुत दुख हुआ', native: 'I am very sorry / I felt great sorrow' },
      { target: 'Mujhe afsos hai — मुझे अफसोस है', native: 'I have regret / I feel sorry' },
      { target: 'Hum aapke saath hain — हम आपके साथ हैं', native: 'We are with you (in your grief)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sympathy phrase to its meaning',
      pairs: [
        { left: 'Main udaas hoon', right: 'I am sad' },
        { left: 'Mujhe dukh hua', right: 'I felt sorrow / I am sorry' },
        { left: 'Main aapke saath hoon', right: 'I am with you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express deep sympathy',
      sentence: 'Mujhe _____ dukh hua.',
      options: ['bahut', 'thoda', 'nahin'],
      correct: 'bahut',
      context: 'I am very sorry to hear that.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am sad',
      correct: ['Main udaas hoon', 'main udaas hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: "A friend tells you their grandfather has passed away. What do you say first?",
      question: 'Respond to bereavement:',
      options: [
        { text: 'Mujhe bahut dukh hua. Main aapke saath hoon.', correct: true },
        { text: 'Theek hai', correct: false },
        { text: 'Main khush hoon', correct: false },
      ],
      explanation: "Acknowledge their loss before anything else — 'Mujhe bahut dukh hua' (I felt great sorrow), then offer presence — 'Main aapke saath hoon' (I am with you). Order matters.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Don't be sad — I am with you'",
      words: ['Udaas', 'mat', 'ho', '—', 'main', 'aapke', 'saath', 'hoon.'],
      correct: ['Udaas', 'mat', 'ho', '—', 'main', 'aapke', 'saath', 'hoon.'],
      translation: "Don't be sad — I am with you",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am sorry to hear that',
      correct: ['Mujhe dukh hua', 'mujhe dukh hua', 'Mujhe bahut dukh hua', 'mujhe bahut dukh hua'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen tells you that an old friend has passed away. The line goes quiet — you have to respond.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mera ek purana dost guzar gaya. Main bahut udaas hoon.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mujhe bahut dukh hua, Rwen. Main aapke saath hoon. Udaas mat ho — main yahin hoon.', native: "I am very sorry, Rwen. I am with you. Don't be sad — I am right here.", correct: true, feedback: "Sympathy first, then presence, then comfort. That's the right order in Hindi grief language." },
          { target: 'Theek hai', native: "It's okay", correct: false, feedback: "It is NOT okay — don't dismiss. Lead with sorrow: 'Mujhe bahut dukh hua. Main aapke saath hoon.'" },
          { target: 'Main udaas hoon', native: 'I am sad', correct: false, feedback: "Don't centre yourself — acknowledge HIS pain first: 'Mujhe bahut dukh hua, Rwen.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shukriya. Aapka saath hi sab kuch hai — your presence is everything. Hindi can hold grief, and you held mine.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am sorry to hear that (felt sorrow)', correct: ['Mujhe dukh hua', 'mujhe dukh hua', 'Mujhe bahut dukh hua', 'mujhe bahut dukh hua'] },
      { prompt: 'I am with you', correct: ['Main aapke saath hoon', 'main aapke saath hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of someone going through a hard time. Send them three Hindi words: 'Main aapke saath hoon.' (I am with you.) Even silently. Especially silently.",
    rwenSignoff: "Sukh baant ne se badhta hai, dukh baant ne se ghatta hai — joy shared grows, sorrow shared shrinks.",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "Late-night call from your cousin Riya in Mumbai. Her father has just been diagnosed with something serious and the family WhatsApp is full of half-news. She's crying quietly on the other end and you have to say something, in Hindi, that holds her without trying to fix anything.",
    rwenRole: "Riya — cousin, ~28, on the edge; she doesn't need solutions, she needs to feel that you're there. The Hindi register matters — formal-warm, not casual.",
    successCriteria: "User leads with 'Mujhe bahut dukh hua' (NOT 'Main udaas hoon' which centres self), follows with 'Main aapke saath hoon' for presence, AVOIDS the dismissive 'Theek hai' / 'Sab theek ho jayega' brush-offs, and lets the sorrow stand without rushing to comfort.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
