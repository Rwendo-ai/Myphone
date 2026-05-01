import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'Yí cì lǚxíng tánhuà — Travel Conversation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 finale. Imagine: it's 11am in a Beijing hutong, you have a 12:40 gāotiě to Hangzhou, and you've just realised this alley does NOT lead to the metro. You have nine lessons in your pocket. Let's use them.",
    culturalNote: "Real travel Mandarin isn't about perfect grammar — it's about chaining short, useful phrases at the right moments. 'Qǐng bāng wǒ máng' → 'Wǒ mí lù le' → 'Dìtiě zhàn zài nǎlǐ?' Three sentences, problem solved. That's what fluency looks like in motion.",
  },

  chunks: [
    {
      id: 'ditie_zhan',
      target: 'Dìtiě zhàn zài nǎlǐ?',
      native: "Where's the metro station?",
      literal: '(地铁站在哪里?) lit: subway-station-located-where?',
      emoji: '🚇',
      phonetic: 'DEE-tyeh JAN dzye NA-lee',
      audioRef: null,
    },
    {
      id: 'wo_yao_qu',
      target: 'Wǒ yào qù Hángzhōu',
      native: "I want to go to Hangzhou",
      literal: '(我要去杭州) lit: I-want-go-Hangzhou',
      emoji: '🚄',
      phonetic: 'WAW yao chyoo HANG-jo',
      audioRef: null,
    },
    {
      id: 'lai_de_ji_ma',
      target: 'Lái de jí ma?',
      native: "Will I make it in time?",
      literal: '(来得及吗?) lit: come-(particle)-reach-(question)?',
      emoji: '⏱️',
      phonetic: 'LAI duh JEE ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stacking the toolkit — full travel sentences',
    explanation: "Module 9 phrases combine like Lego: ['Qǐng bāng wǒ máng'] + ['Wǒ mí lù le'] + ['Dìtiě zhàn zài nǎlǐ?'] = a complete plea for help. Add 'lái de jí ma?' (will I make it in time?) and you're handling time pressure. Notice how Module 9 L1's 'zài nǎlǐ?' pattern keeps reappearing — that single template carries you everywhere.",
    examples: [
      { target: 'Wǒ yào zuò gāotiě qù Hángzhōu', native: 'I want to take the high-speed rail to Hangzhou' },
      { target: 'Yì zhāng dào Hángzhōu, dān chéng', native: 'One ticket to Hangzhou, one-way' },
      { target: 'Lái de jí, bié dānxīn', native: "You'll make it, don't worry" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the travel phrase to its meaning',
      pairs: [
        { left: 'Dìtiě zhàn zài nǎlǐ?', right: "Where's the metro station?" },
        { left: 'Wǒ yào qù Hángzhōu', right: 'I want to go to Hangzhou' },
        { left: 'Lái de jí ma?', right: 'Will I make it in time?' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Build a complete travel sentence: 'I want to take the high-speed rail to Hangzhou'",
      words: ['gāotiě', 'qù', 'Wǒ', 'Hángzhōu', 'yào', 'zuò'],
      correct: ['Wǒ', 'yào', 'zuò', 'gāotiě', 'qù', 'Hángzhōu'],
      translation: 'I want to take the high-speed rail to Hangzhou',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Where's the metro station?",
      correct: ['Dìtiě zhàn zài nǎlǐ?', 'Ditie zhan zai nali?', 'ditie zhan zai nali', 'dìtiě zhàn zài nǎlǐ', '地铁站在哪里?', '地铁站在哪里'],
    },
    {
      type: 'fill_blank',
      instruction: "Combine: lost AND need help. Pick the right opener",
      sentence: '_____ bāng wǒ máng. Wǒ mí lù le',
      options: ['Qǐng', 'Yào', 'Hěn'],
      correct: 'Qǐng',
      context: "'Qǐng' (请) opens a polite request. The full chain: Qǐng bāng wǒ máng (please help me), Wǒ mí lù le (I'm lost). One after another — calm, polite, clear.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Will I make it in time?',
      correct: ['Lái de jí ma?', 'Lai de ji ma?', 'lai de ji ma', 'lái de jí ma', '来得及吗?', '来得及吗'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're lost in a Beijing hutong with a train at 12:40. What's the BEST opening line to a stranger?",
      question: 'Pick the most useful single sentence',
      options: [
        { text: 'Bù hǎo yìsi, qǐng bāng wǒ máng — wǒ mí lù le', correct: true },
        { text: 'Nǐ hǎo, nǐ hǎo ma?', correct: false },
        { text: 'Yì zhāng dào Hángzhōu', correct: false },
      ],
      explanation: "Time pressure means cut the small talk. 'Bù hǎo yìsi' (excuse me) + 'Qǐng bāng wǒ máng' (please help me) + 'Wǒ mí lù le' (I'm lost) — fastest, clearest path to the help you need.",
    },
  ],

  rwenDialogue: {
    intro: "11:15am, deep in a Beijing hutong. You have a 12:40 high-speed train to Hangzhou from Beijing South. You took a wrong turn looking for breakfast jiānbǐng and now nothing looks familiar. An older man with a pet bird in a bamboo cage is sitting on a low stool. Make this count.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎo yìsi, qǐng bāng wǒ máng. Wǒ mí lù le', native: "Excuse me, please help me. I'm lost", correct: true, feedback: 'Calm, polite, true. He nods, ready to help.' },
          { target: 'Nǐ hǎo ma?', native: 'How are you?', correct: false, feedback: "Sweet, but the train won't wait. Skip ahead: 'Qǐng bāng wǒ máng. Wǒ mí lù le.'" },
          { target: 'Wǒ è le', native: "I'm hungry", correct: false, feedback: "True. Not the priority. You need DIRECTIONS, not breakfast." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Nǐ qù nǎlǐ?',
        native: 'Where are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào qù Běijīng nán zhàn. Zuò gāotiě qù Hángzhōu', native: 'I want to go to Beijing South Station. Taking the high-speed rail to Hangzhou', correct: true, feedback: 'Two clean sentences, full context. He understands instantly.' },
          { target: 'Hángzhōu', native: 'Hangzhou', correct: false, feedback: "He needs to know where you need to GET TO right now — the station — not just the final destination." },
          { target: 'Yì zhāng dào Hángzhōu', native: 'One ticket to Hangzhou', correct: false, feedback: "That's for the ticket window. He needs the station name: 'Wǒ yào qù Běijīng nán zhàn'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Dìtiě zài qiánmiàn — yòu zhuǎn, zhí zǒu, wǔ fēnzhōng',
        native: 'Metro is ahead — turn right, go straight, 5 minutes',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Lái de jí ma? Shí'èr diǎn sìshí de huǒchē", native: "Will I make it? It's the 12:40 train", correct: true, feedback: "Sharp question. He glances at his watch and gives you a thumbs-up." },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "Ask if you'll make it before you bolt — he might know a faster way." },
          { target: 'Yùdìng', native: 'Reservation', correct: false, feedback: "Wrong context — that's hotel vocab. You want 'Lái de jí ma?' (will I make it in time?)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Lái de jí, kuài zǒu! Yí lù shùnfēng',
        native: "You'll make it, hurry! Safe travels",
      },
      {
        speaker: 'rwen',
        rwenLine: "You just navigated a real travel emergency in Mandarin. Lost in a hutong, ten lessons of vocabulary, one kind stranger, one train caught. This is what we've been building for. Module 9 — done.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Where's the metro station?",
        correct: ['Dìtiě zhàn zài nǎlǐ?', 'Ditie zhan zai nali?', 'ditie zhan zai nali', 'dìtiě zhàn zài nǎlǐ', '地铁站在哪里?', '地铁站在哪里'],
      },
      {
        prompt: 'I want to go to Hangzhou',
        correct: ['Wǒ yào qù Hángzhōu', 'Wo yao qu Hangzhou', 'wo yao qu hangzhou', 'wǒ yào qù hángzhōu', '我要去杭州'],
      },
    ],
  },

  mission: {
    title: "Module 9 Mission",
    task: "Plan a real or imagined Chinese trip — Beijing → Hangzhou, Shanghai → Xi'an, anywhere. Out loud, walk through the whole journey in Mandarin: where you're going (Wǒ yào qù...), how you'll get there (Wǒ zuò gāotiě), buying the ticket (Yì zhāng dào...), checking into the hotel (Wǒ yǒu yùdìng), and what you'd say if it all went sideways (Wǒ mí lù le). String the lessons together.",
    rwenSignoff: "Module 9 done. You can navigate China with your mouth. Onwards to Module 10 — feelings, health, stories. Yí lù shùnfēng — may the wind be at your back.",
  },

  phase8: {
    scenario: "11:20am Saturday in a tangle of Beijing hutongs near Qianmen. You have a 12:40 gāotiě to Hangzhou departing from Beijing South Station (北京南站, Běijīng nán zhàn). Your phone died. You've taken a wrong turn somewhere and you can't see the metro entrance you came from. You spot a retired man feeding pigeons. The train will not wait.",
    rwenRole: "Lǎo Liú (老刘) — retired Beijing taxi driver, 68, knows every hutong by feel, kindly impatient. Will speak crisp medium-pace Mandarin, give directions in 2-3 short sentences.",
    successCriteria: "User chains the toolkit: opens with 'Bù hǎo yìsi, qǐng bāng wǒ máng' or similar polite request; states problem with 'Wǒ mí lù le'; gives destination with 'Wǒ yào qù Běijīng nán zhàn' or 'zuò gāotiě qù Hángzhōu'; asks 'Lái de jí ma?' about the time. Follows direction reply (zuǒ/yòu zhuǎn, zhí zǒu, dìtiě zhàn). Closes with thanks. At least FOUR Module 9 chunks must appear naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
