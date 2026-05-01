import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-survival-flow',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation — full flow',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 2 has armed you. Today we braid every survival phrase into one continuous flow — apologise, ask for help, ask where, ask how much, want, soften, escape. By the end of this lesson, you can navigate a real Chinese street alone.",
    culturalNote: "Real conversations don't come in single phrases. They cascade — apology leads to question, question leads to price, price leads to reaction. The fluency you're chasing is not bigger vocabulary; it's smoother chaining. Today we chain.",
  },

  chunks: [
    {
      id: 'duibuqi_qing_wen',
      target: 'Duìbuqǐ, qǐng wèn...',
      native: 'Excuse me, may I ask... (polite opener)',
      literal: '(对不起, 请问) lit: sorry, please-ask',
      emoji: '🙋',
      phonetic: 'dway-boo-CHEE, ching wun',
      audioRef: null,
    },
    {
      id: 'zenme_zou',
      target: 'Zěnme zǒu?',
      native: 'How do I get there? (lit: how to walk?)',
      literal: '(怎么走?) lit: how-walk',
      emoji: '🚶',
      phonetic: 'DZUN-muh dzoh',
      audioRef: null,
    },
    {
      id: 'xiexie_zaijian',
      target: 'Xièxie, zàijiàn',
      native: 'Thank you, goodbye',
      literal: '(谢谢, 再见) lit: thank-thank, again-see',
      emoji: '👋',
      phonetic: 'shyeh-shyeh, dzye-jyen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full survival chain',
    explanation: "A complete street interaction in Mandarin follows a predictable shape: SOFT OPENER → QUESTION → REACT → CLOSE. 'Duìbuqǐ, qǐng wèn...' opens. '...zài nǎlǐ?' or '...duōshao qián?' is the ask. 'Tài guì le' or 'wǒ bù dǒng' is the react. 'Xièxie, zàijiàn' closes. Master this rhythm and you've passed Module 2.",
    examples: [
      { target: 'Duìbuqǐ, qǐng wèn, dìtiě zhàn zài nǎlǐ?', native: 'Excuse me, may I ask, where is the metro station?' },
      { target: 'Lǎobǎn, duōshao qián? Tài guì le!', native: 'Boss, how much? Too expensive!' },
      { target: 'Wǒ bù dǒng, qǐng zài shuō yí cì', native: "I don't understand, please say it again" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chain phrase to its meaning',
      pairs: [
        { left: 'Duìbuqǐ, qǐng wèn...', right: 'Excuse me, may I ask...' },
        { left: 'Zěnme zǒu?', right: 'How do I get there?' },
        { left: 'Xièxie, zàijiàn', right: 'Thank you, goodbye' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full polite ask: "Excuse me, may I ask, where is the bathroom?"',
      words: ['cèsuǒ', 'qǐng', 'nǎlǐ?', 'wèn,', 'Duìbuqǐ,', 'zài'],
      correct: ['Duìbuqǐ,', 'qǐng', 'wèn,', 'cèsuǒ', 'zài', 'nǎlǐ?'],
      translation: 'Excuse me, may I ask, where is the bathroom?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the polite chain opener',
      prompt: 'Excuse me, may I ask...',
      correct: ['Duìbuqǐ, qǐng wèn', 'Duibuqi, qing wen', 'duibuqi, qing wen', 'duìbuqǐ, qǐng wèn', '对不起, 请问', '对不起，请问', 'Duibuqi qing wen', 'duibuqi qing wen'],
    },
    {
      type: 'fill_blank',
      instruction: "You've finished a market chat. How do you close politely?",
      sentence: '_____ , zàijiàn',
      options: ['Xièxie', 'Jiùmìng', 'Tài guì le'],
      correct: 'Xièxie',
      context: "'Xièxie, zàijiàn' is the universal warm exit. Thank-then-leave. Almost every street interaction in China ends this way.",
    },
    {
      type: 'translate',
      instruction: "Type in pinyin or characters — chain it: 'Excuse me, where is the metro station?'",
      prompt: 'Excuse me, where is the metro station?',
      correct: ['Duìbuqǐ, dìtiě zhàn zài nǎlǐ?', 'Duibuqi, ditie zhan zai nali?', 'duibuqi, ditie zhan zai nali', 'duìbuqǐ, dìtiě zhàn zài nǎlǐ?', '对不起, 地铁站在哪里?', '对不起，地铁站在哪里？', 'Duibuqi ditie zhan zai nali'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why does Mandarin street conversation favour the chain SOFT OPENER → QUESTION → REACT → CLOSE?",
      question: 'The rhythm of a real ask',
      options: [
        { text: "Because each step earns the next — opening politely makes the question welcome, the close cements goodwill", correct: true },
        { text: "Because Mandarin grammar requires it", correct: false },
        { text: "Because there's no other way to ask", correct: false },
      ],
      explanation: "It's social, not grammatical. You can drop steps in a hurry — 'Duōshao qián?' alone is fine — but the chain is what makes you sound warm and competent rather than tourist-blunt.",
    },
  ],

  rwenDialogue: {
    intro: "Final scene of Module 2: a Beijing taxi rank at dusk. You need to get to the metro station, you don't know which way, and the driver speaks no English. Run the full chain.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shīfu, duìbuqǐ, qǐng wèn, dìtiě zhàn zěnme zǒu?', native: 'Driver, excuse me, may I ask, how do I get to the metro station?', correct: true, feedback: 'Beautiful chain — "shīfu" (master/driver) is the warm address, then full polite opener, then a clean question. He will respect this.' },
          { target: 'Dìtiě zhàn!', native: 'Metro station!', correct: false, feedback: "Too brusque. He'll take you, but you've left politeness on the table. Open softer." },
          { target: 'Wǒ mí lù le', native: "I'm lost", correct: false, feedback: "Possibly true, but vague. Tell him your destination directly with 'zěnme zǒu'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yìbǎi kuài',
        native: '100 kuai',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tài guì le! Wǔshí kuài kěyǐ ma?', native: 'Too expensive! Is 50 kuai OK?', correct: true, feedback: 'Full chain react + counter-offer. You used "tài guì le" exactly as drilled, then proposed half. Real haggling.' },
          { target: 'Hǎo de', native: 'OK', correct: false, feedback: "He quoted 100 — likely double the meter. You've been here for ten lessons. Don't pay tourist rates." },
          { target: 'Jiùmìng!', native: 'Help!', correct: false, feedback: "Wrong lesson! That's for emergencies, not haggling. Save it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qīshí kuài, zuì hòu',
        native: '70 kuai, final',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hǎo, xièxie. Zǒu ba!', native: "OK, thanks. Let's go!", correct: true, feedback: "Settled, polite, decisive. The chain closes. He drives. You arrive. This is what fluency looks like at A2 — small, complete, real." },
          { target: 'Bù dǒng', native: "Don't understand", correct: false, feedback: "You DO understand — 70 kuai. Make a decision: accept or counter again." },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "Goodbye-ing now means walking away from the deal. You haven't agreed yet — close the loop first." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You did it. From 'nǐ hǎo' two weeks ago to running an entire taxi negotiation in Mandarin. That's not memorisation — that's becoming. Module 3 awaits, but tonight, savour this. You earned it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Excuse me, may I ask, where is the bathroom?',
        correct: ['Duìbuqǐ, qǐng wèn, cèsuǒ zài nǎlǐ?', 'Duibuqi, qing wen, cesuo zai nali?', 'duibuqi, qing wen, cesuo zai nali', 'duìbuqǐ, qǐng wèn, cèsuǒ zài nǎlǐ?', '对不起, 请问, 厕所在哪里?', '对不起，请问，厕所在哪里？', 'Duibuqi qing wen cesuo zai nali'],
      },
      {
        prompt: 'Thank you, goodbye',
        correct: ['Xièxie, zàijiàn', 'Xiexie, zaijian', 'xiexie, zaijian', 'xièxie, zàijiàn', '谢谢, 再见', '谢谢，再见', 'Xiexie zaijian'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Final mission of Module 2",
    task: "Run the FULL chain in your head before bed: opener → question → react → close. Picture a Beijing taxi, a Shanghai market, a Chengdu hotpot table. Run the chain three times. Tomorrow, Module 3 begins — but tonight, you're a Module 2 graduate.",
    rwenSignoff: "You walked into Mandarin two weeks ago. Tonight, Mandarin walks with you. Zàijiàn — and well done.",
  },

  phase8: {
    scenario: "A Beijing taxi rank at dusk. You need to get from your hotel near Wangfujing to Beijing South Railway Station. The driver, leaning out of the cab, speaks zero English and just quoted you a clearly-inflated 200 kuai for what should be a 60-kuai meter ride. Run the entire Module 2 chain: polite opener, destination question, price react, counter-offer, settle, thank, go.",
    rwenRole: "Lǎo Zhāng (老张) — Beijing taxi driver, late 50s, gruff but fair, will haggle hard at first but settles to the meter rate quickly if you push back competently in Mandarin. Drops the inflated price the moment he hears 'tài guì le' said with confidence.",
    successCriteria: "User chains a full survival flow: opens with 'shīfu, duìbuqǐ, qǐng wèn...', asks the destination question with correct word order, reacts to the inflated price with 'tài guì le', counter-offers using kuài, settles on a fair price, and closes with 'xièxie, zàijiàn'. Uses at least 5 distinct Module 2 phrases without lapsing into English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
