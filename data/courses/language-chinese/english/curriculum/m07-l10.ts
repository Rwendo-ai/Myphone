import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'Yìqǐ chīfàn — Eating together (the whole meal)',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Beijing, Friday night, 7pm. Your three Chinese colleagues have insisted on dinner — to celebrate your first month at the company. You're at a famous duck restaurant, the 烤鸭 (kǎoyā Peking duck) being carved tableside. They poured you a glass of báijiǔ (white liquor) without asking. They want you to order the next dishes. They want you to toast. They want you to enjoy. EVERYTHING from this module — è le, càidān, lái yí ge, hěn hào chī, gānbēi, wǒ bù néng hē jiǔ, bú yào kèqi — is now in your hands. Tonight you eat like a local.",
    culturalNote: "Being hosted by Chinese colleagues at a banquet is a milestone — it means they see you as 'one of us'. You'll be tested in soft ways: Can you handle the spice? Can you toast properly? Can you praise the food? Can you decline a third helping without offending? Tonight you prove you can. The phrases you've learned aren't tourist Chinese anymore — they're working Chinese.",
  },

  chunks: [
    {
      id: 'wo_chi_bao_le',
      target: 'Wǒ chī bǎo le',
      native: "I'm full (lit: I have eaten full)",
      literal: '(我吃饱了) lit: I-eat-full-(change-of-state)',
      emoji: '🤤',
      phonetic: 'waw chirr BOW luh',
      audioRef: null,
    },
    {
      id: 'jintian_de_cai',
      target: 'Jīntiān de cài tài hào chī le',
      native: "Today's food is so delicious",
      literal: '(今天的菜太好吃了) lit: today-(possessive)-dish-too-good-eat-(intensifier)',
      emoji: '✨',
      phonetic: 'jin-tyen duh tsai TIE how chirr luh',
      audioRef: null,
    },
    {
      id: 'wo_jingni_yi_bei',
      target: 'Wǒ jìng nǐ yì bēi',
      native: "I toast you (one cup)",
      literal: '(我敬你一杯) lit: I-respect-you-one-cup',
      emoji: '🥂',
      phonetic: 'waw jing nee YEE bay',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Tài...le' — the praise intensifier",
    explanation: "When you want to crank up praise, frame it as 'tài [adjective] le' — 'too [adjective]'. Tài hào chī le = SO tasty (literally: too good-to-eat). Tài hǎo le = SO good. Tài piàoliang le = SO beautiful. The 'tài...le' frame is louder and warmer than just 'hěn' (very). Use it at banquets, at hosts' homes, anywhere the food deserves emotional praise.",
    examples: [
      { target: 'Tài hào chī le!', native: 'SO tasty!' },
      { target: 'Tài hǎo le!', native: 'So good / wonderful!' },
      { target: 'Zhè ge cài tài bàng le', native: 'This dish is amazing' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each capstone phrase to its meaning',
      pairs: [
        { left: 'Wǒ chī bǎo le', right: "I'm full" },
        { left: 'Jīntiān de cài tài hào chī le', right: "Today's food is so delicious" },
        { left: 'Wǒ jìng nǐ yì bēi', right: 'I toast you (one cup)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin — your host has piled food on your plate three times',
      prompt: "I'm full (with the proper change-of-state 'le')",
      correct: ['Wǒ chī bǎo le', 'Wo chi bao le', 'wo chi bao le', 'wǒ chī bǎo le', '我吃饱了'],
    },
    {
      type: 'fill_blank',
      instruction: "You raise your glass to your boss across the table:",
      sentence: 'Lǐ zǒng, wǒ _____ nǐ yì bēi',
      options: ['jìng', 'yào', 'kàn'],
      correct: 'jìng',
      context: "'Jìng' (敬) means 'to respect/honour' — and in toasting, 'wǒ jìng nǐ yì bēi' is the formal toast. It's how you'd toast a boss, an elder, or anyone you want to honour publicly.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Today\'s food is so delicious!"',
      words: ['hào chī', 'cài', 'tài', 'Jīntiān', 'le', 'de'],
      correct: ['Jīntiān', 'de', 'cài', 'tài', 'hào chī', 'le'],
      translation: "Today's food is so delicious",
    },
    {
      type: 'translate',
      instruction: "Type in Mandarin — you're being hosted, food is amazing, give big praise",
      prompt: "Today's food is so delicious",
      correct: ["Jīntiān de cài tài hào chī le", 'Jintian de cai tai hao chi le', 'jintian de cai tai hao chi le', 'jīntiān de cài tài hào chī le', '今天的菜太好吃了'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your boss has just toasted you with 'gānbēi!'. You don't drink alcohol. What's the masterclass move?",
      question: 'Pick the answer',
      options: [
        { text: "Raise your tea or water glass, look him in the eye, say 'Wǒ bù néng hē jiǔ — wǒ yòng chá jìng nín yì bēi'.", correct: true },
        { text: "Drink the báijiǔ to avoid offending him.", correct: false },
        { text: 'Wave him off and ignore the toast.', correct: false },
      ],
      explanation: "Lift your tea, declare 'wǒ bù néng hē jiǔ' (I can't drink alcohol), and toast him with TEA instead — 'wǒ yòng chá jìng nín yì bēi' (I honour you one cup with tea). Honour is preserved on both sides. NEVER ignore a toast — that's the only real offence.",
    },
  ],

  rwenDialogue: {
    intro: "Beijing, Friday night, 7pm. The famous Quánjùdé Peking duck restaurant. Your boss Lǐ zǒng (Director Lǐ), and two colleagues — Wáng Jiě (older sister Wáng) and Chén Gē (older brother Chén) — are at the round table with you. The duck has just arrived, carved into 108 paper-thin slices. Lǐ zǒng raises his glass.",
    lines: [
      {
        speaker: 'npc',
        target: "Huānyíng nǐ jiārù wǒmen gōngsī! Lái — wǒmen gānbēi!",
        native: "Welcome to our company! Come on — let's gānbēi!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie Lǐ zǒng. Wǒ bù néng hē jiǔ — wǒ yòng chá jìng nín yì bēi', native: "Thanks Director Lǐ. I can't drink alcohol — I honour you with tea instead", correct: true, feedback: "MASTERCLASS. You declined the báijiǔ AND honoured him with a counter-toast in tea — using 'jìng' (the formal toast verb) and 'nín' (the polite 'you'). His face is delighted." },
          { target: 'Hǎo, gānbēi!', native: "OK, cheers! (drinking it)", correct: false, feedback: "If you don't drink, this commits you to draining a baijiu glass — and baijiu is 50%+ alcohol. The Chinese-savvy move is to toast in tea instead." },
          { target: 'Bù — wǒ bù xǐhuān', native: "No — I don't like (it)", correct: false, feedback: "Far too curt for a boss's welcome toast. Always redirect: 'wǒ bù néng hē jiǔ' (I can't drink alcohol) and toast with tea. Never just refuse." },
        ],
      },
      {
        speaker: 'npc',
        target: "Hǎo hǎo hǎo — yǒngyuǎn shēntǐ jiànkāng zuì zhòngyào. Lái, kuài chī kǎoyā!",
        native: 'Good, good — health is always most important. Come on, eat the duck quickly!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wā — jīntiān de kǎoyā tài hào chī le. Xièxie Lǐ zǒng', native: "Wow — today's duck is so delicious. Thank you Director Lǐ", correct: true, feedback: "Perfect — used 'tài...le' for big praise, named the dish ('kǎoyā'), thanked the host. He just made a mental note that you're worth promoting." },
          { target: 'Hái xíng', native: "It's okay (lukewarm)", correct: false, feedback: "Lukewarm praise of Quánjùdé Peking duck is offensive. Use 'tài hào chī le!' — and name the dish. The specificity is the warmth." },
          { target: 'Hěn hǎo', native: "Pretty good (still flat)", correct: false, feedback: "Better than 'hái xíng' but still flat for a banquet. Crank it up: 'tài hào chī le' is the right setting for this room." },
        ],
      },
      {
        speaker: 'npc',
        target: "Lái lái lái — duō chī yìdiǎn! Bú yào kèqi! Zhè ge yú yě yào cháng yi cháng.",
        native: "Come on — eat more! Don't be shy! Try the fish too.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie — wǒ chī bǎo le, dànshì zhè ge yú zhēn de hěn hào chī', native: "Thank you — I'm full, but this fish really is so tasty", correct: true, feedback: "Masterclass refusal-with-praise. 'Wǒ chī bǎo le' (I'm full, with 'le' for change-of-state) AND a specific compliment so the host doesn't feel pushed away. He'll relent — gracefully." },
          { target: 'Bú yào — wǒ bù xǐhuān yú', native: "No — I don't like fish", correct: false, feedback: "Brutal. Even if true, the host has chosen this fish for you. Decline with 'wǒ chī bǎo le' (I'm full) and a redirect-compliment. Don't ever insult a dish at someone's banquet." },
          { target: 'Hǎo, lái', native: "OK, bring it (committing to more food)", correct: false, feedback: "If you're truly full, the move is 'wǒ chī bǎo le' — not committing to a fourth course. The 'le' is critical: it means 'I have BECOME full' — a recent state, not a refusal of his hospitality." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You navigated a Chinese business banquet in Mandarin — declined alcohol with grace, praised the host's choice of restaurant, refused a third helping while making him feel honoured. This is what fluency looks like at A2: not perfect grammar, but warm, contextual, and culturally aware Chinese. Module 7 is yours. Wǒ wèi nǐ jiāo'ào — I am proud of you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm full (after a big meal, with the proper 'le')", correct: ['Wǒ chī bǎo le', 'Wo chi bao le', 'wo chi bao le', 'wǒ chī bǎo le', '我吃饱了'] },
      { prompt: "I toast you (one cup)", correct: ['Wǒ jìng nǐ yì bēi', 'Wo jing ni yi bei', 'wo jing ni yi bei', 'wǒ jìng nǐ yì bēi', '我敬你一杯'] },
    ],
  },

  mission: {
    title: "Today's Journey — Module 7 complete",
    task: "Out loud in Mandarin, walk yourself through a complete Chinese meal — start to finish. Open: 'Wǒ è le.' Sit down: 'Liǎng wèi.' Order: 'Lái yí ge huǒguō, bú yào tài là.' Praise: 'Tài hào chī le!' Toast: 'Wǒ jìng nǐ yì bēi.' Decline: 'Wǒ chī bǎo le, xièxie.' Pay: 'Mǎidān!' That's a full Chinese meal you can now narrate in your head — and survive in any restaurant from Chengdu to Vancouver Chinatown.",
    rwenSignoff: "Ten lessons. You went from 'I'm hungry' to hosting a banquet. You can now order, praise, decline, toast, and host — all in Chinese. That's not small. Next module — verbs that make daily life come alive. Wǒ wèi nǐ jiāo'ào. Module 7 — done.",
  },

  phase8: {
    scenario: "Friday night, 7pm. Famous Quánjùdé Peking duck restaurant in Beijing. You've been invited by your three Chinese colleagues — Lǐ zǒng (your boss), Wáng Jiě (senior colleague), Chén Gē (peer) — to celebrate your first month at the company. The duck is being carved tableside. A bottle of báijiǔ has been opened. They want you to (1) order the next round of dishes, (2) handle a toast from your boss, (3) react to spice level when the má pó dòufu arrives, (4) decline a third helping gracefully, and (5) toast back. Everything from Module 7 lives in this meal.",
    rwenRole: "Lǐ zǒng (李总) and team — your Chinese boss + colleagues, all warm but watching to see if you've integrated. Lǐ zǒng will toast 'gānbēi' with báijiǔ early. Wáng Jiě will pile food on your plate aggressively. Chén Gē will ask for your opinion on the spice level. Rwen plays all three voices in sequence. They will gently mock you if you slip into English, but warmly reward Mandarin attempts.",
    successCriteria: "User: (1) orders at least one dish using 'lái yí ge...' (e.g., 'lái yí ge gōngbǎo jīdīng'), (2) handles boss's gānbēi toast by declining alcohol gracefully ('wǒ bù néng hē jiǔ') and counter-toasting in tea ('wǒ yòng chá jìng nín yì bēi'), (3) praises the food using 'tài hào chī le' (NOT just 'hěn hǎo'), (4) declines a third helping with 'wǒ chī bǎo le' + specific compliment, (5) initiates at least one toast back to a colleague with 'wǒ jìng nǐ yì bēi'. Bonus: handles spice level with 'bú yào tài là' or 'wǒ bù néng chī là'. Failure mode: defaulting to English under pressure, or refusing food/toast without redirecting.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
