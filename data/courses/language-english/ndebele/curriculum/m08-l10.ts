import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-shopping-conversation',
  module: 8,
  lesson: 10,
  title: 'Shopping conversation — putting it all together',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Ilesson elihlanganisayo lale module! Wonke amagama ofunde — 'How much?', 'cash or card?', 'tip', 'discount' — manje konke ngenkulumo eyodwa yokuthenga okuphelele.",
    culturalNote: "Le yindawo lapho izinto ezithathwe namhlanje ezigcwalele yonke i-module zihlangana khona. Khumbula: (1) USA — qiniseka 'plus tax', faka i-tip. (2) UK — 'includes VAT', 10% tip uma ingafakwanga, awunaki ku-pubs. (3) AU — 'includes GST', i-tip ayidingekile. (4) Bargaining — emakethe nje, hhayi e-supermarket. (5) Cash vs card — i-contactless yi-norm e-UK / AU manje. (6) Be polite — 'please', 'thank you', 'sorry to bother you' kuyasebenza emaphakathi onke amazwe a-English. Igama elinkulu LE I-LESSON: i-fluency yokuthenga ayikona ukubangana ngegama elilodwa — kungukuthi ufunde ukuthi 'sorry to bother you, how much is this?' kuhle kakhulu kunokuthi 'price?' Indlela esivamile encwadini yokuthenga: HELLO → ASK PRICE → CONSIDER → ASK TO PAY → SAY THANKS → LEAVE.",
  },

  chunks: [
    {
      id: 'sorry_to_bother',
      target: 'Sorry to bother you...',
      native: 'Uxolo ngokukhathaza...',
      literal: 'sorry / to / bother / you',
      emoji: '🙏',
      phonetic: 'SOR-ee-to-BOTH-er-yoo',
      audioRef: null,
    },
    {
      id: 'do_you_have',
      target: 'Do you have this in a different size?',
      native: 'Ninayo le ngesayizi ehlukile?',
      literal: 'do / you / have / this / in / a / different / size',
      emoji: '📏',
      phonetic: 'doo-yoo-HAV-this-in-uh-DIF-rent-SIZE',
      audioRef: null,
    },
    {
      id: 'ill_take_it',
      target: "I'll take it.",
      native: 'Ngizoyithatha.',
      literal: "I will / take / it",
      emoji: '✅',
      phonetic: 'aill-TAYK-it',
      audioRef: null,
    },
    {
      id: 'can_i_have_a_receipt',
      target: 'Can I have a receipt, please?',
      native: 'Ngingathola i-resithi, ngiyacela?',
      literal: 'can / I / have / a / receipt',
      emoji: '🧾',
      phonetic: 'kan-ay-HAV-uh-ri-SEET',
      audioRef: null,
    },
    {
      id: 'thanks_have_a_good_one',
      target: 'Thanks, have a good one!',
      native: 'Ngiyabonga, hambani kahle!',
      literal: 'thanks / have / a / good / one',
      emoji: '👋',
      phonetic: 'thanks-hav-uh-GOOD-WUN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full shopping flow',
    explanation: "Indlela enempahla yokuthenga: (1) UKUVULA: 'Hi, sorry to bother you...' / 'Excuse me...' (2) UMBUZO: 'How much is this?' / 'Do you have this in...?' (3) UKUCABANGA: 'Hmm, let me think.' / 'It's a bit out of my budget.' (4) UKUNQUMA: 'I'll take it.' / 'Maybe next time, thanks.' (5) UKUKHOKHA: 'Card, please.' / 'Cash. Keep the change.' (6) UKUVALA: 'Can I have a receipt? Thanks, have a good one!' Lokhu kusebenza e-UK / US / AU.",
    examples: [
      { target: "Sorry to bother you, how much is this jumper?", native: 'Uxolo ngokukhathaza, le jumper ibiza malini?' },
      { target: "Do you take Apple Pay?", native: 'Niyamukela i-Apple Pay?' },
      { target: "Thanks, have a good one!", native: 'Ngiyabonga, hambani kahle!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa isigaba senkulumo',
      pairs: [
        { left: 'Opening', right: 'Sorry to bother you...' },
        { left: 'Asking price', right: 'How much is it?' },
        { left: 'Deciding', right: "I'll take it." },
        { left: 'Closing', right: 'Have a good one!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Use-clothing shop e-Sydney. Khetha okufanele.',
      sentence: 'Excuse me, do you have this _____ a medium?',
      options: ['in', 'on', 'at'],
      correct: 'in',
      context: "'In a medium' (size) — i-natural English. 'In red', 'in black' nakho.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Use-NY. I-bill ngu-$30. I-tax + tip ifaka kufike ku-$36.',
      question: 'You hand over $40 cash. The cashier asks "Do you want change?"',
      options: [
        { text: '"Keep the change, thanks." (uma ufuna ukufaka i-tip)', correct: true },
        { text: '"Yes, change please."', correct: false },
        { text: '"No tip, give back."', correct: false },
      ],
      explanation: "Ukubonga umsebenzi: 'Keep the change' kuyiyona ndlela ehloniphekayo. Ku-US nakanjani.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Uxolo ngokukhathaza, le ibiza malini?',
      correct: ['Sorry to bother you, how much is this?', 'sorry to bother you, how much is this?', 'Sorry to bother you how much is this?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — cela i-receipt',
      words: ['have', 'please?', 'a', 'I', 'Can', 'receipt,'],
      correct: ['Can', 'I', 'have', 'a', 'receipt,', 'please?'],
      translation: 'Ngingathola i-resithi, ngiyacela?',
    },
  ],

  rwenDialogue: {
    intro: "Use-clothing shop e-Westfield Stratford (London). Ubona i-jumper olithandayo. Lo i-conversation ephelele kusukela ekuvuleni kuze kube sekugcineni.",
    lines: [
      { speaker: 'npc', target: "Hiya! Let me know if you need a hand.", native: 'Sawubona! Ngitshele uma udinga usizo.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks. Sorry to bother you — how much is this jumper?", native: 'Ngiyabonga. Uxolo ngokukhathaza — le jumper ibiza malini?', correct: true, feedback: "Kuhle — 'sorry to bother you' yi-natural ngempela." },
          { target: "How much price?", native: '', correct: false, feedback: "Akusiyo English. Sebenzisa 'How much is this?'" },
        ],
      },
      { speaker: 'npc', target: "That one's £45. Lovely colour, isn't it?", native: 'Lelo ngu-£45. Umbala omuhle, akunjalo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It is. Do you have it in a medium?", native: 'Yebo. Ninayo nge-medium?', correct: true, feedback: "Phelelisa — 'in a medium' kuhle ngempela." },
          { target: "Have medium?", native: '', correct: false, feedback: "Akusiyo full sentence. 'Do you have it in a medium?'" },
        ],
      },
      { speaker: 'npc', target: "Let me check... yes, here's a medium.", native: 'Ake ngibheke... yebo, nansi i-medium.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Brilliant — I'll take it.", native: 'Kuhle — ngizoyithatha.', correct: true, feedback: "'Brilliant' yi-British natural." },
          { target: "Okay I take.", native: '', correct: false, feedback: "Cacisa: 'I'll take it.'" },
        ],
      },
      { speaker: 'npc', target: "Lovely. That'll be forty-five pounds. Cash or card?", native: 'Kuhle. Kuyoba £45. Ukheshi noma ikhadi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Card, please. Contactless. And can I have a receipt?", native: 'Ngeqhadi, ngiyacela. Contactless. Ngingayithola i-resithi?', correct: true, feedback: "Kuphelele — i-contactless, i-receipt — yonke into." },
          { target: "Yes pay.", native: '', correct: false, feedback: "Cacisa indlela: 'Card, please.'" },
        ],
      },
      { speaker: 'npc', target: "Of course. Here's your receipt. Thanks ever so much!", native: 'Kulungile. Nansi i-resithi yakho. Ngiyabonga kakhulu!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks, have a good one!", native: 'Ngiyabonga, hambani kahle!', correct: true, feedback: "Yindlela ye-UK eyibhekise. Ufundise konke kule module." },
          { target: "Bye.", native: '', correct: false, feedback: "Akwenzi kabi, kepha 'Thanks, have a good one!' yi-natural ngempela." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kahle! Konke kuyahambisana — opening, price, decision, payment, closing. Sekungu-Module 8 isiphelele!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Polite opener (English)', correct: ['Sorry to bother you', 'Sorry to bother you,', 'Excuse me', 'sorry to bother you'] },
      { prompt: 'I am buying it (English, casual)', correct: ["I'll take it.", "I'll take it", "I will take it.", "i'll take it."] },
    ],
  },

  mission: {
    title: 'Umsebenzi wokugcina we-Module 8',
    task: "Khuluma phezulu inkulumo yokuthenga eyodwa eyiphelele — qala ngo-'Sorry to bother you', buza ngentengo, gqibela ngo-'Thanks, have a good one!'. Yenza kabili: kanye kucabanga use-London (UK), kanye kucabanga use-New York (US). Khumbula i-tip ku-NY!",
    rwenSignoff: "Sekuphelile i-Module 8 — usibonile imali yonke. Kusasa: i-Module 9 — Indawo & ukuhamba (i-Tube, i-bus, ukubuza indlela).",
  },

  phase8: {
    scenario: "Full shopping conversation at a clothing store in your choice of city — London, New York, or Sydney. From walking in to walking out, with at least one obstacle (wrong size, no contactless, asking about discount).",
    rwenRole: "Shop assistant in your chosen city. Uses local expressions (London: 'hiya', 'brilliant'; NY: 'hey there', 'all set'; Sydney: 'how ya going', 'no worries'). Helps you through the full purchase.",
    successCriteria: "Student opens politely, asks about price and a variation (size/colour), decides ('I'll take it' or 'maybe next time'), pays with appropriate method (mentions tax/tip if US), gets a receipt, and closes with a natural farewell. At least 6 turns.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
