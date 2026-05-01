import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-hui-shuo',
  module: 2,
  lesson: 3,
  title: 'Huì shuō — Can you speak...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Nǐ huì shuō Yīngwén ma? Six syllables that have rescued more travellers than any phrasebook. Today we plant the question that opens English-speaking helpers wherever you go.",
    culturalNote: "Mandarin has THREE different words for English's 'can'. 'Huì' (会) = can do something you've LEARNED — languages, swimming, cooking. 'Néng' (能) = physically capable right now. 'Kěyǐ' (可以) = have permission. For language, always 'huì'. We'll just plant this flag today — the rest comes later.",
  },

  chunks: [
    {
      id: 'ni_hui_shuo_yingwen_ma',
      target: 'Nǐ huì shuō Yīngwén ma?',
      native: 'Can you speak English?',
      literal: '(你会说英文吗?) lit: you-can-speak-English-(question)',
      emoji: '🗣️',
      phonetic: 'nee HWAY shwaw YING-wun ma',
      audioRef: null,
    },
    {
      id: 'wo_hui_shuo_yidianr',
      target: 'Wǒ huì shuō yìdiǎnr',
      native: 'I can speak a little',
      literal: '(我会说一点儿) lit: I-can-speak-a-little-bit',
      emoji: '🤏',
      phonetic: 'waw HWAY shwaw YEE-dyar',
      audioRef: null,
    },
    {
      id: 'wo_bu_hui',
      target: 'Wǒ bú huì',
      native: "I can't / I don't know how",
      literal: '(我不会) lit: I-not-can',
      emoji: '🙅',
      phonetic: 'waw BOO hway',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Huì = 'can' (acquired skill)",
    explanation: "'Huì' (会) is the 'can' you use for things you've LEARNED — languages, instruments, recipes. Don't confuse it with 'kěyǐ' (permission) or 'néng' (current ability). For language: always huì.",
    examples: [
      { target: 'Wǒ huì shuō Zhōngwén', native: 'I can speak Chinese (skill)' },
      { target: 'Wǒ huì kāichē', native: 'I can drive (skill — learned)' },
      { target: 'Wǒ bú huì yóuyǒng', native: "I can't swim (never learned)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Nǐ huì shuō Yīngwén ma?', right: 'Can you speak English?' },
        { left: 'Wǒ huì shuō yìdiǎnr', right: 'I can speak a little' },
        { left: 'Wǒ bú huì', right: "I can't" },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask "Can you speak English?"',
      words: ['shuō', 'Nǐ', 'ma?', 'huì', 'Yīngwén'],
      correct: ['Nǐ', 'huì', 'shuō', 'Yīngwén', 'ma?'],
      translation: 'Can you speak English?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I can speak a little',
      correct: ['Wǒ huì shuō yìdiǎnr', 'Wo hui shuo yidianr', 'wo hui shuo yidianr', 'wǒ huì shuō yìdiǎnr', '我会说一点儿', 'Wǒ huì shuō yìdiǎn', 'wo hui shuo yidian'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I can speak Chinese' uses which 'can'?",
      sentence: 'Wǒ _____ shuō Zhōngwén',
      options: ['huì', 'kěyǐ', 'néng'],
      correct: 'huì',
      context: "Languages = learned skills = 'huì'. Always. (kěyǐ = permission; néng = current ability.)",
    },
    {
      type: 'multiple_choice',
      instruction: "Why is it 'bú huì' and not 'bù huì'?",
      question: 'Tone change rule (small one!)',
      options: [
        { text: "'Huì' is 4th tone (falling), so 'bù' shifts to rising 'bú'", correct: true },
        { text: "It's a typo — they're the same", correct: false },
        { text: "Because the speaker is shy", correct: false },
      ],
      explanation: "Before any 4th-tone syllable, 'bù' becomes 'bú'. You met this rule yesterday — it's everywhere.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the polite admission',
      prompt: "I can't / I don't know how",
      correct: ["Wǒ bú huì", 'Wo bu hui', 'wo bu hui', 'wǒ bú huì', '我不会'],
    },
  ],

  rwenDialogue: {
    intro: "Hong Kong, a busy dim sum tea house on a Sunday morning. Carts of bamboo steamers rattle past. You need help reading the order sheet — characters everywhere, no English. You spot a young woman at the next table. She looks friendly.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎoyìsi, nǐ huì shuō Yīngwén ma?', native: 'Excuse me, can you speak English?', correct: true, feedback: 'Perfect — soft opener with bù hǎoyìsi, then the real ask. Polite and clear.' },
          { target: 'Nǐ hǎo!', native: 'Hello!', correct: false, feedback: 'Friendly, but she has no idea what you need. Ask the question.' },
          { target: 'Wǒ bú huì', native: "I can't", correct: false, feedback: "That's about you, not her — and it doesn't ask for help." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Huì, wǒ huì shuō yìdiǎnr. Nǐ xūyào shénme?',
        native: 'Yes, I can speak a little. What do you need?',
      },
      {
        speaker: 'rwen',
        rwenLine: "And just like that, the wall comes down. 'Huì shuō yìdiǎnr' — the most generous phrase in Mandarin. People underestimate themselves and over-deliver. You'll hear it constantly.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Can you speak English?',
        correct: ['Nǐ huì shuō Yīngwén ma?', 'Ni hui shuo Yingwen ma?', 'ni hui shuo yingwen ma', 'nǐ huì shuō yīngwén ma?', '你会说英文吗?', '你会说英文吗', 'Ni hui shuo Yingwen ma'],
      },
      {
        prompt: 'I can speak a little',
        correct: ['Wǒ huì shuō yìdiǎnr', 'Wo hui shuo yidianr', 'wo hui shuo yidianr', 'wǒ huì shuō yìdiǎnr', '我会说一点儿', 'Wǒ huì shuō yìdiǎn'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find one thing you 'huì' do — a language, a skill, anything you LEARNED. Say to yourself: 'Wǒ huì _____ '. Plant the verb in muscle memory.",
    rwenSignoff: "Skills you carry. Permissions you ask. Languages you huì. Zàijiàn.",
  },

  phase8: {
    scenario: "A bustling Hong Kong dim sum tea house at peak Sunday brunch. You've sat down but the menu is a paper sheet of Chinese characters with no pictures. Steamers are flying past. You spot a young local at the next table sipping tea — your best chance for an English-speaking ally.",
    rwenRole: "Chan Wai-yi (陳慧儀) — late 20s, accountant, bilingual Cantonese/Mandarin/English. Friendly, will happily help if approached politely in any of her languages.",
    successCriteria: "User opens with 'bù hǎoyìsi', asks 'nǐ huì shuō Yīngwén ma?', and follows up with a specific request (help reading the menu / ordering shrimp dumplings) once she says yes. No English-only opening.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
