import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-wo-bu-dong',
  module: 2,
  lesson: 2,
  title: "Wǒ bù dǒng — I don't understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Wǒ bù dǒng. Three words that will save you a hundred times. The moment Mandarin floods past you — and it will — this phrase opens a door. Said clearly, it earns slowness, kindness, and a second chance.",
    culturalNote: "Negation in Mandarin is one tiny word: 'bù' (不). Stick it in front of any verb. One quirk: when 'bù' sits before a 4th-tone (falling) syllable, the bù itself rises to 2nd tone — 'bú duì' (not 'bù duì'). Don't worry about the rule, just listen and let it happen.",
  },

  chunks: [
    {
      id: 'wo_bu_dong',
      target: 'Wǒ bù dǒng',
      native: "I don't understand",
      literal: '(我不懂) lit: I-not-understand',
      emoji: '🤷',
      phonetic: 'WAW boo DUNG',
      audioRef: null,
    },
    {
      id: 'qing_zai_shuo_yi_ci',
      target: 'Qǐng zài shuō yí cì',
      native: 'Please say it again',
      literal: '(请再说一次) lit: please-again-say-one-time',
      emoji: '🔁',
      phonetic: 'ching dzye SHWAW yee tsuh',
      audioRef: null,
    },
    {
      id: 'man_yi_dian',
      target: 'Màn yì diǎn',
      native: 'A bit slower',
      literal: '(慢一点) lit: slow-one-bit',
      emoji: '🐢',
      phonetic: 'MAHN yee dyen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Negation with bù',
    explanation: "Mandarin negates verbs by sticking 'bù' (不) right in front. 'Dǒng' = understand. 'Bù dǒng' = don't understand. Tiny rule: before a 4th-tone (falling) syllable, 'bù' shifts to rising 'bú' — your ear will catch it.",
    examples: [
      { target: 'Wǒ bù dǒng', native: "I don't understand (dǒng is 3rd tone — bù stays bù)" },
      { target: 'Bú duì', native: "Not correct (duì is 4th tone — bù becomes bú)" },
      { target: 'Wǒ bù zhīdào', native: "I don't know" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ bù dǒng', right: "I don't understand" },
        { left: 'Qǐng zài shuō yí cì', right: 'Please say it again' },
        { left: 'Màn yì diǎn', right: 'A bit slower' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the lifeline phrase',
      prompt: "I don't understand",
      correct: ['Wǒ bù dǒng', 'Wo bu dong', 'wo bu dong', 'wǒ bù dǒng', '我不懂'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the polite request',
      sentence: 'Qǐng _____ shuō yí cì',
      options: ['zài', 'bù', 'hěn'],
      correct: 'zài',
      context: "'Zài' (再) means 'again'. Combined with 'shuō' (say) and 'yí cì' (one time), you get 'say it once again'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ask the speaker to slow down',
      words: ['diǎn', 'Màn', 'yì'],
      correct: ['Màn', 'yì', 'diǎn'],
      translation: 'A bit slower',
    },
    {
      type: 'multiple_choice',
      instruction: "Why does 'bù duì' often sound like 'bú duì'?",
      question: 'The tone shift rule',
      options: [
        { text: "Because 'duì' is 4th tone (falling) — 'bù' shifts to rising 'bú'", correct: true },
        { text: "Because 'duì' starts with d", correct: false },
        { text: "Because it's a question", correct: false },
      ],
      explanation: "Before any 4th-tone syllable, 'bù' itself becomes 'bú'. It just sounds smoother. You don't need to memorise it — it'll happen naturally as you mimic native speakers.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Please say it again',
      correct: ['Qǐng zài shuō yí cì', 'Qing zai shuo yi ci', 'qing zai shuo yi ci', 'qǐng zài shuō yí cì', '请再说一次'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small shop in a Chengdu hutong. The owner — middle-aged, friendly — has just rattled off a sentence at full speed. You catch maybe two words. She's waiting.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ yào bu yào jiā tángcù?',
        native: 'Do you want sugar and vinegar added?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Duìbuqǐ, wǒ bù dǒng. Màn yì diǎn?', native: "Sorry, I don't understand. A bit slower?", correct: true, feedback: 'Beautiful chain — apology, honesty, request. She will smile and slow down.' },
          { target: 'Wǒ hěn hǎo', native: "I'm well", correct: false, feedback: "That's a greeting reply — doesn't fit. She'll be confused." },
          { target: 'Méi guānxi', native: "It's fine", correct: false, feedback: "That means 'don't worry about it' — but YOU'RE the one who needs help here." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, hǎo. Nǐ — yào — tángcù — ma?',
        native: 'OK, OK. You — want — sugar-vinegar — yes?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen to that — she broke it into chunks for you. That's the gift these three phrases buy you. Honesty unlocks patience.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I don't understand",
        correct: ['Wǒ bù dǒng', 'Wo bu dong', 'wo bu dong', 'wǒ bù dǒng', '我不懂'],
      },
      {
        prompt: 'A bit slower',
        correct: ['Màn yì diǎn', 'Man yi dian', 'man yi dian', 'màn yì diǎn', '慢一点'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Catch one moment today where you'd normally fake-nod through something confusing. Imagine saying 'wǒ bù dǒng' instead. The phrase that ends pretending.",
    rwenSignoff: "Honesty is faster than guessing. Zàijiàn.",
  },

  phase8: {
    scenario: "A small noodle shop in a Chengdu side street. You've ordered, but the owner is now asking you something rapid-fire about the broth — sugar levels, spice, who knows. You caught maybe one word. The bowl is steaming on the counter and she's tapping a ladle, waiting.",
    rwenRole: "Zhāng Āyí (张阿姨) — owner of the noodle shop, late 50s, born and raised in Chengdu. Speaks fast Sichuan-tinged Mandarin but will slow down kindly if you ask.",
    successCriteria: "User uses 'wǒ bù dǒng' to admit confusion, asks 'màn yì diǎn' or 'qǐng zài shuō yí cì', and gets to a clear yes/no answer about their order without lapsing into English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
