import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Qǐng bāng máng — Asking for Help',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday: 'I'm lost.' Today: how to ASK for help. The phrase that opens almost any door in China — 'Qǐng bāng wǒ máng' — please-help-me-busy. Sounds odd, lands warmly. Locals hear it and almost always step in.",
    culturalNote: "'Bāng máng' (帮忙) literally means 'help-busy' — to lend a hand with something. 'Qǐng bāng wǒ máng' = 'please help me out'. It's softer and friendlier than the textbook 'Qǐng bāngzhù wǒ' (please assist me). Use it. People respond to it.",
  },

  chunks: [
    {
      id: 'qing_bang_wo_mang',
      target: 'Qǐng bāng wǒ máng',
      native: 'Please help me',
      literal: '(请帮我忙) lit: please-help-me-busy',
      emoji: '🙏',
      phonetic: 'CHING bang waw MANG',
      audioRef: null,
    },
    {
      id: 'wo_bu_shuxi_zheli',
      target: 'Wǒ bù shúxī zhèlǐ',
      native: "I don't know this area",
      literal: '(我不熟悉这里) lit: I-not-familiar-here',
      emoji: '🤷',
      phonetic: 'waw boo SHOO-shee JUH-lee',
      audioRef: null,
    },
    {
      id: 'neng_bang_wo_xie_xia_lai_ma',
      target: 'Néng bāng wǒ xiě xià lái ma?',
      native: 'Could you write it down for me?',
      literal: '(能帮我写下来吗?) lit: can-help-me-write-down-come-(question)?',
      emoji: '✍️',
      phonetic: 'nung bang waw SHYEH shya LAI ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Qǐng (please) + verb-phrase — polite requests',
    explanation: "'Qǐng' (请) at the front of a sentence makes it a polite request — like 'please' but more naturally 'kindly'. 'Qǐng bāng máng' = please help. 'Qǐng zài shuō yí biàn' = please say (it) again. 'Néng... ma?' (能...吗?) = 'are you able to...?', a softer request frame.",
    examples: [
      { target: 'Qǐng zài shuō yí biàn', native: 'Please say it again' },
      { target: 'Qǐng màn yìdiǎn', native: 'A bit slower, please' },
      { target: 'Néng bāng wǒ ma?', native: 'Could you help me?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the help phrase to its meaning',
      pairs: [
        { left: 'Qǐng bāng wǒ máng', right: 'Please help me' },
        { left: "Wǒ bù shúxī zhèlǐ", right: "I don't know this area" },
        { left: 'Néng bāng wǒ xiě xià lái ma?', right: 'Could you write it down?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Please help me',
      correct: ['Qǐng bāng wǒ máng', 'Qing bang wo mang', 'qing bang wo mang', 'qǐng bāng wǒ máng', '请帮我忙'],
    },
    {
      type: 'fill_blank',
      instruction: "Soften your request — pick the polite opener",
      sentence: '_____ bāng wǒ máng',
      options: ['Qǐng', 'Wǒ', 'Le'],
      correct: 'Qǐng',
      context: "'Qǐng' (请) is the polite-request opener. Without it, 'Bāng wǒ máng' sounds like an order. With it, you sound considerate.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Could you write it down for me?'",
      words: ['xiě', 'wǒ', 'xià lái', 'Néng', 'bāng', 'ma?'],
      correct: ['Néng', 'bāng', 'wǒ', 'xiě', 'xià lái', 'ma?'],
      translation: 'Could you write it down for me?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I don't know this area",
      correct: ["Wǒ bù shúxī zhèlǐ", "Wo bu shuxi zheli", "wo bu shuxi zheli", "wǒ bù shúxī zhèlǐ", '我不熟悉这里'],
    },
    {
      type: 'multiple_choice',
      instruction: "Locals are giving you directions in rapid Mandarin and you can't catch the address. What do you ask?",
      question: 'Pick the right rescue line',
      options: [
        { text: 'Néng bāng wǒ xiě xià lái ma?', correct: true },
        { text: 'Wǒ hěn hǎo, xièxie', correct: false },
        { text: 'Yuǎn ma?', correct: false },
      ],
      explanation: "'Néng bāng wǒ xiě xià lái ma?' = 'Could you write it down for me?' Saves you when spoken Mandarin moves too fast. Show your phone or a pen — they'll write it; you'll show the next person.",
    },
  ],

  rwenDialogue: {
    intro: "You're trying to get to a small dumpling shop your friend recommended in Xi'an. The address she sent is in characters you can't read. You step into a tea shop and ask the woman behind the counter.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎo yìsi, qǐng bāng wǒ máng. Wǒ bù shúxī zhèlǐ', native: "Excuse me, please help me. I don't know this area", correct: true, feedback: 'Soft entry, clear ask, honest context. She puts down her phone.' },
          { target: 'Bāng máng!', native: 'Help busy!', correct: false, feedback: "Bare 'bāng máng' sounds like a shout for help in an emergency. Soften with 'Qǐng bāng wǒ máng'." },
          { target: 'Wǒ shúxī zhèlǐ', native: 'I know this area', correct: false, feedback: "Opposite of what you mean — drop the negative? You need 'bù' (not): 'Wǒ BÙ shúxī zhèlǐ'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, nǐ qù nǎlǐ?',
        native: 'OK, where are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Néng bāng wǒ xiě xià lái ma?', native: 'Could you write it down for me?', correct: true, feedback: "Genius — get the address in writing. You can show it to a taxi driver." },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "She just offered to help — don't leave. Ask her to write it down." },
          { target: 'Wǒ è le', native: "I'm hungry", correct: false, feedback: "True (it's a dumpling shop after all), but unhelpful. Get the address written." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three lessons combined in one exchange — politeness, locating, and clever fall-back. You're travelling like a Mandarin speaker now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Please help me',
        correct: ['Qǐng bāng wǒ máng', 'Qing bang wo mang', 'qing bang wo mang', 'qǐng bāng wǒ máng', '请帮我忙'],
      },
      {
        prompt: 'Could you write it down for me?',
        correct: ['Néng bāng wǒ xiě xià lái ma?', 'Neng bang wo xie xia lai ma?', 'neng bang wo xie xia lai ma', 'néng bāng wǒ xiě xià lái ma', '能帮我写下来吗?', '能帮我写下来吗'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, anywhere — when you genuinely need help with something small, ask in your head in Mandarin first: 'Qǐng bāng wǒ máng.' Then ask in English. The mental rehearsal builds the habit of reaching for the Mandarin first when you need it.",
    rwenSignoff: "Tomorrow we put it all together. The Hangzhou train won't wait. Zàijiàn.",
  },

  phase8: {
    scenario: "You're in the wrong neighbourhood of Chengdu, looking for a specific Sichuan hot pot restaurant. You don't recognise any of the buildings on the map. You approach a young couple drinking bubble tea on a bench.",
    rwenRole: "Liú Jié (刘杰) — Chengdu local, 25, friendly, speaks fast Sichuan-accented Mandarin but slows when asked. His girlfriend will chime in.",
    successCriteria: "User opens with 'Qǐng bāng wǒ máng' AND uses 'Wǒ bù shúxī zhèlǐ' to explain. When directions come too fast, asks 'Néng bāng wǒ xiě xià lái ma?' to get them written. All three chunks land in one conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
