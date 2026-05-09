import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09',
  module: 5,
  lesson: 9,
  title: 'Lobola — Marriage and the Bride Wealth',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Today we learn one of the most important — and most carefully spoken — concepts in Ndebele family life. Lobola. The bride wealth. It is not a price tag. It is not a transaction. It is a centuries-old practice of two families binding themselves together with cattle, gifts, and ceremony. Listen carefully — outsiders often misunderstand it.",
    culturalNote: "Lobola (sometimes called roora in Shona, mahari in other African languages) is bride wealth — historically paid in cattle, today often partly in cash and gifts. It is NOT 'buying a wife'. The cattle move from the groom's family to the bride's family as recognition of the bride's value, the parents' raising of her, and the linking of two clans. Ndebele families today still hold lobola negotiations, sometimes simplified, sometimes elaborate. Speaking of it without respect — joking that someone was 'sold' — is a wound. Speak of it as something serious and beautiful.",
  },

  chunks: [
    {
      id: 'lobola',
      target: 'ilobolo',
      native: 'Lobola — bride wealth',
      literal: 'Cattle, cash, and gifts given by the groom\'s family to the bride\'s family to honour the union and the bride\'s upbringing.',
      emoji: '🐄',
      phonetic: 'ee-loh-BOH-loh',
      audioRef: null,
    },
    {
      id: 'umshado',
      target: 'umshado',
      native: 'Wedding / marriage',
      literal: 'um- (class 3 prefix) + shado. The wedding ceremony itself, the formal marriage.',
      emoji: '💍',
      phonetic: 'oom-SHAH-doh',
      audioRef: null,
    },
    {
      id: 'umalume_lobola',
      target: 'uMalume',
      native: "Mother's brother (the lobola negotiator)",
      literal: "uMalume traditionally leads lobola negotiations for his sister's daughter — the maternal uncle's ceremonial role.",
      emoji: '🤝🏾',
      phonetic: 'oo-mah-LOO-meh',
      audioRef: null,
    },
    {
      id: 'idombo',
      target: 'idombo',
      native: 'Cattle (specifically lobola cattle)',
      literal: 'The herd offered. Today often expressed as a cash equivalent, but the word and concept hold.',
      emoji: '🐂',
      phonetic: 'ee-DOHM-boh',
      audioRef: null,
    },
    {
      id: 'ukushada',
      target: 'ukushada',
      native: 'To marry / to get married',
      literal: 'uku- (infinitive prefix) + shada. The verb for entering marriage.',
      emoji: '💒',
      phonetic: 'oo-koo-SHAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Lobola in respectful Ndebele speech',
    explanation: "When Ndebele speakers discuss lobola, the framing matters. They speak of 'lobola yenziwa' (lobola is being done — the negotiations are happening), 'idombo lihambile' (the cattle have moved), or 'umshado uzobakhona' (the wedding will take place). They DO NOT say someone was 'bought' or 'sold' — that framing is foreign and offensive. The vocabulary itself carries the dignity of the practice.",
    examples: [
      { target: 'ilobolo lenziwa.', native: 'Lobola is being done (negotiations are underway).' },
      { target: 'umshado uzobakhona.', native: 'The wedding will take place.' },
      { target: 'uMalume uyaxoxisana.', native: 'The maternal uncle is negotiating.' },
      { target: 'Bayoshada.', native: 'They will marry.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'ilobolo', right: 'Bride wealth' },
        { left: 'umshado', right: 'Wedding / marriage' },
        { left: 'idombo', right: 'Cattle (lobola)' },
        { left: 'ukushada', right: 'To marry' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A family is preparing for a daughter\'s lobola. The maternal uncle has arrived to lead negotiations.',
      sentence: '_____ uyaxoxisana namhlanje.',
      options: ['uMalume', 'umngane', 'umakoti'],
      correct: 'uMalume',
      context: "Traditionally, uMalume — the mother's brother — leads lobola negotiations for his sister's daughter. The role belongs to the maternal side.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'The wedding (the ceremony itself).',
      correct: ['umshado', 'Umshado'],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the most accurate description",
      question: "What is lobola in Ndebele culture?",
      options: [
        { text: "Bride wealth — cattle and gifts that bind two families together; recognition of the bride's value and her parents' raising of her.", correct: true },
        { text: "A purchase price for a wife.", correct: false },
        { text: "A modern wedding gift list.", correct: false },
      ],
      explanation: "Lobola is bride wealth, not a purchase. The cattle and gifts move between two FAMILIES to honour the union, the bride's upbringing, and the linking of the clans. Speaking of it as 'buying a wife' is foreign framing and offends Ndebele speakers.",
    },
  ],

  rwenDialogue: {
    intro: "Rwen takes you aside before a family lobola gathering. He wants you to understand what's happening before you walk in.",
    lines: [
      { speaker: 'rwen', rwenLine: "Today my cousin's lobola is being negotiated. uMalume — her mother's brother — leads. The groom's family will come with idombo. Don't joke about it. Watch, listen, and if you speak, speak with weight." },
      { speaker: 'rwen', rwenLine: "When the negotiations end, the families will eat together. That meal is more important than the cattle. The cattle measure the gift; the meal measures the union." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga ngokungichazela. Ngizobukela ngenhlonipho.', native: 'Thank you for explaining. I will watch with respect.', correct: true, feedback: "You acknowledged the cultural depth and committed to respect. Rwen relaxes — he can take you in." },
          { target: 'How much does she cost?', native: 'How much does she cost?', correct: false, feedback: "This is exactly the framing Rwen warned you against. Lobola is not a price; it's a ceremonial gift between families. Try: 'Ngiyabonga ngokungichazela — ngizobukela ngenhlonipho.'" },
          { target: 'Sounds expensive.', native: 'Sounds expensive (English).', correct: false, feedback: "Reduces a cultural ceremony to a money observation. Respond with respect: 'Ngiyabonga — ngizobukela ngenhlonipho.' (Thank you — I will watch with respect.)" },
        ],
      },
      { speaker: 'rwen', rwenLine: "Yebo. ilobolo, umshado, izihlobo. Three words; one ceremony; centuries of meaning. Come — they are waiting.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Lobola (bride wealth)', correct: ['ilobolo', 'Ilobolo', 'lobola', 'Lobola'] },
      { prompt: 'Wedding / marriage (the ceremony)', correct: ['umshado', 'Umshado'] },
      { prompt: 'To marry', correct: ['ukushada', 'Ukushada'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Read one short article about lobola today (search 'lobola Zimbabwe meaning' or 'roora Shona tradition' for the closely related Shona practice). Notice how it's framed by the writer — respectful or transactional. The way you speak about lobola in isiNdebele will determine whether Ndebele people open their family stories to you.",
    rwenSignoff: "ilobolo. Speak it slowly. Tomorrow, the whole family vocabulary comes together — a real conversation at a Ndebele gathering.",
  },

  phase8: {
    scenario: "Rwen's older cousin is having her lobola negotiated this week. At Sunday lunch, the family is talking about the upcoming gathering. Auntie Thandi explains parts of the process to you. You listen, ask one or two respectful questions in isiNdebele, and acknowledge the cultural weight without flattening it.",
    rwenRole: "Auntie Thandi — a 60s aunt who has hosted three lobola negotiations of her own daughters; warm, slightly testing, listens for whether you frame lobola as ceremony or as transaction.",
    successCriteria: "User uses ilobolo and/or umshado correctly, asks at least one respectful question about the practice, and AVOIDS framing lobola as 'buying' or 'price'. Bonus if they reference uMalume's role.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
