import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Gàosu wǒ — Tell me about you',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Eight lessons of 'wǒ' — me, me, me. Today we flip the camera. 'Gàosu wǒ' (告诉我) means 'tell me'. 'Nǐ cóng nǎlǐ lái?' — Where are you from? 'Nǐ shì zěnme yàng de rén?' — What kind of person are you? These are the open doors. Use one and you stop being a tourist; you become a listener.",
    culturalNote: "In Chinese conversation, asking back is more than politeness — it's a sign you're a real conversational partner. After answering even a small question, returning it with 'Nǐ ne?' or a fuller open question is a tiny act of warmth. Question words ('shénme' what, 'nǎlǐ' where, 'zěnme yàng' what kind/how) all stay in their natural answer-slot — same rule as Lesson 3. Don't front-load them.",
  },

  chunks: [
    {
      id: 'gaosu_wo_ni_de_gushi',
      target: 'Gàosu wǒ nǐ de gùshi',
      native: 'Tell me your story',
      literal: '(告诉我你的故事) lit: tell-me-your-story',
      emoji: '📖',
      phonetic: 'GOW-soo waw nee duh GOO-shr',
      audioRef: null,
    },
    {
      id: 'ni_cong_nali_lai',
      target: 'Nǐ cóng nǎlǐ lái?',
      native: 'Where do you come from?',
      literal: '(你从哪里来?) lit: you-from-where-come',
      emoji: '🌍',
      phonetic: 'nee tsong NA-lee lai',
      audioRef: null,
    },
    {
      id: 'ni_shi_zenme_yang_de_ren',
      target: 'Nǐ shì zěnme yàng de rén?',
      native: 'What kind of person are you?',
      literal: '(你是怎么样的人?) lit: you-are-what-kind-of-person',
      emoji: '🤔',
      phonetic: 'nee shr DZUN-muh yahng duh run',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open question shapes — "cóng nǎlǐ", "zěnme yàng"',
    explanation: "Two new question shapes. (1) 'Nǐ cóng nǎlǐ lái?' = 'You from where come?' — 'cóng' (from) + 'nǎlǐ' (where) + 'lái' (come). Same answer-slot rule: 'nǎlǐ' sits where the answer ('Sydney') will sit: 'Wǒ cóng Sydney lái'. (2) 'Zěnme yàng' (what-kind / how) — versatile. 'Nǐ shì zěnme yàng de rén?' (what kind of person are you?). 'Zěnme yàng?' on its own = 'How is it?' / 'How's things?' — a casual all-purpose conversational opener.",
    examples: [
      { target: 'Nǐ cóng nǎlǐ lái? (你从哪里来?)', native: 'Where are you from? — answer: Wǒ cóng Sydney lái' },
      { target: 'Zěnme yàng? (怎么样?)', native: "How's things? — casual catch-up greeting" },
      { target: 'Gàosu wǒ ___ (告诉我___)', native: 'Tell me ___ — pair with anything: your name, story, opinion' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Gàosu wǒ nǐ de gùshi', right: 'Tell me your story' },
        { left: 'Nǐ cóng nǎlǐ lái?', right: 'Where are you from?' },
        { left: 'Nǐ shì zěnme yàng de rén?', right: 'What kind of person are you?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Where are you from? (literally: you from where come?)',
      correct: ['Nǐ cóng nǎlǐ lái?', 'Ni cong nali lai?', 'ni cong nali lai', 'Nǐ cóng nǎlǐ lái', 'nǐ cóng nǎlǐ lái', '你从哪里来?', '你从哪里来'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Where do you come from?" — note the word order',
      words: ['lái?', 'Nǐ', 'nǎlǐ', 'cóng'],
      correct: ['Nǐ', 'cóng', 'nǎlǐ', 'lái?'],
      translation: 'Where do you come from?',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — "Tell me your story"',
      sentence: '_____ wǒ nǐ de gùshi',
      options: ['Gàosu', 'Shì', 'Hěn'],
      correct: 'Gàosu',
      context: '"Gàosu" = tell. The pattern is "Gàosu wǒ ___" — tell me [something]. Beautifully productive opener.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural-sounding question',
      question: 'You want to ask "What kind of person are you?"',
      options: [
        { text: 'Nǐ shì zěnme yàng de rén?', correct: true },
        { text: 'Zěnme yàng nǐ shì de rén?', correct: false },
        { text: 'Nǐ shì rén zěnme yàng?', correct: false },
      ],
      explanation: '"Zěnme yàng" stays in its slot, modifying "rén" via "de": "what-kind-of person". Same answer-slot rule.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Tell me your story',
      correct: ['Gàosu wǒ nǐ de gùshi', 'Gaosu wo ni de gushi', 'gaosu wo ni de gushi', 'gàosu wǒ nǐ de gùshi', '告诉我你的故事'],
    },
  ],

  rwenDialogue: {
    intro: "Back at the language exchange café in Chengdu — your fourth meet-up. Liú Yáng has stopped slowing her speech. You've earned a real conversation. Tonight you decide to flip it: instead of answering, you ask.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gàosu wǒ nǐ de gùshi — nǐ cóng nǎlǐ lái?', native: 'Tell me your story — where are you from?', correct: true, feedback: 'A two-beat opener — "tell me" plus a specific question. They will lean back, smile, and answer for ten minutes.' },
          { target: 'Nǐ shì shénme?', native: 'What are you?', correct: false, feedback: 'Too blunt — almost asks for a label. You wanted to invite a story. "Cóng nǎlǐ lái" or "zěnme yàng de rén" is far warmer.' },
          { target: 'Wǒ hěn hǎo', native: "I'm fine", correct: false, feedback: "That's an answer — but you're meant to be asking THEM. Try a question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo wèntí! Wǒ cóng Chéngdū lái, wǒ shì lǎoshī, wǒ hěn xǐhuān jiāo Zhōngwén',
        native: "Good question! I'm from Chengdu, I'm a teacher, and I love teaching Chinese",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nǐ shì zěnme yàng de rén?', native: 'What kind of person are you?', correct: true, feedback: 'You went from biographical to introspective. They will love this question — most foreigners never ask it.' },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "You're not leaving — you're listening. Keep the door open with another question." },
          { target: 'Wǒ hěn yǒushàn', native: "I'm friendly", correct: false, feedback: "You answered about yourself again — turn the camera back on them." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at what just happened. You asked TWO open questions in Mandarin and they kept talking. That's not language learning anymore — that's a real conversation. Hěn hǎo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Where do you come from?',
        correct: ['Nǐ cóng nǎlǐ lái?', 'Ni cong nali lai?', 'ni cong nali lai', 'Nǐ cóng nǎlǐ lái', 'nǐ cóng nǎlǐ lái', '你从哪里来?', '你从哪里来'],
      },
      {
        prompt: 'Tell me your story',
        correct: ['Gàosu wǒ nǐ de gùshi', 'Gaosu wo ni de gushi', 'gaosu wo ni de gushi', 'gàosu wǒ nǐ de gùshi', '告诉我你的故事'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find one Chinese speaker — colleague, friend, exchange partner — and ask them ONE open question in Mandarin: 'Nǐ cóng nǎlǐ lái?' or 'Gàosu wǒ nǐ de gùshi.' Then listen.",
    rwenSignoff: "Camera flipped. Tomorrow: the full two-way introduction. Last lesson of the module. Zàijiàn.",
  },

  phase8: {
    scenario: "Language exchange café in Chengdu, your fourth meet-up. The relationship has settled — your partner Liú Yáng has stopped over-articulating and you've stopped panicking when you don't catch every word. Tonight you've decided something: this whole hour, YOU will ask the questions. Not just bouncing 'Nǐ ne?' back, but actually leading the conversation with open questions. The tea arrives. She waits.",
    rwenRole: "Liú Yáng (刘洋), your now-familiar language partner. She will answer fully and naturally, occasionally asking back, but mainly letting you steer. She will reward open questions with longer, more personal answers.",
    successCriteria: "User asks at least TWO different open questions during the conversation — drawn from 'Nǐ cóng nǎlǐ lái?', 'Nǐ shì zěnme yàng de rén?', 'Gàosu wǒ ___', or built using 'shénme/nǎlǐ/zěnme yàng' in their answer-slot positions. They listen actively and follow up rather than pivoting back to talking about themselves.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
