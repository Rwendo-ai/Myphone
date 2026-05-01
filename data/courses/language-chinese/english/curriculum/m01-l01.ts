import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-nihao',
  module: 1,
  lesson: 1,
  title: 'Nǐ hǎo — Hello',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Nǐ hǎo! Mandarin's first secret: it's a tonal language. The same syllable said with a different pitch is a different word. 'Nǐ hǎo' literally means 'you good' — and the tones are everything.",
    culturalNote: "Mandarin has 4 tones (plus a neutral one). 'mā' (high & flat) means mother. 'má' (rising) means hemp. 'mǎ' (dipping) means horse. 'mà' (falling) means scold. Don't worry — context carries you. But hearing pitch matters from day one.",
  },

  chunks: [
    {
      id: 'nihao',
      target: 'Nǐ hǎo',
      native: 'Hello',
      literal: '(你好) lit: you-good',
      emoji: '👋',
      phonetic: 'nee how (both syllables dip down then up)',
      audioRef: null,
    },
    {
      id: 'nihao_ma',
      target: 'Nǐ hǎo ma?',
      native: 'How are you?',
      literal: '(你好吗?) lit: you-good-(question particle)',
      emoji: '🤔',
      phonetic: 'nee how MA (light "ma" at end)',
      audioRef: null,
    },
    {
      id: 'wo_hen_hao',
      target: 'Wǒ hěn hǎo',
      native: "I'm well",
      literal: '(我很好) lit: I-very-good',
      emoji: '😊',
      phonetic: 'WAW hun how',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 4 Tones',
    explanation: 'Every Mandarin syllable has a tone. Same letters, different pitch, different word. The tone mark on the vowel tells you which: ¯ flat, ´ rising, ˇ dipping, ` falling.',
    examples: [
      { target: 'mā (妈)', native: 'mother — high & flat' },
      { target: 'má (麻)', native: 'hemp — rising (like a question)' },
      { target: 'mǎ (马)', native: 'horse — dips down then up' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Nǐ hǎo', right: 'Hello' },
        { left: 'Nǐ hǎo ma?', right: 'How are you?' },
        { left: 'Wǒ hěn hǎo', right: "I'm well" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (tone marks optional)',
      prompt: 'Hello (in Mandarin)',
      correct: ['Nǐ hǎo', 'Ni hao', 'ni hao', 'nǐ hǎo', '你好'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the reply — someone just asked "Nǐ hǎo ma?"',
      sentence: 'Wǒ _____ hǎo',
      options: ['hěn', 'nǐ', 'ma'],
      correct: 'hěn',
      context: '"Hěn" means "very" — and Chinese almost always pairs adjectives with "hěn" even when you just mean "good".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ask "How are you?" — put the words in order',
      words: ['ma?', 'Nǐ', 'hǎo'],
      correct: ['Nǐ', 'hǎo', 'ma?'],
      translation: 'How are you?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm well (reply)",
      correct: ['Wǒ hěn hǎo', 'Wo hen hao', 'wo hen hao', 'wǒ hěn hǎo', '我很好'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which tone mark goes on a syllable that DIPS down then up?',
      question: 'Pick the right mark',
      options: [
        { text: 'ǎ (third tone — dipping)', correct: true },
        { text: 'ā (first tone — flat)', correct: false },
        { text: 'à (fourth tone — falling)', correct: false },
      ],
      explanation: 'The little "v" mark above the vowel = dipping tone. Your voice goes down, then up. Like the start of "uh-oh".',
    },
  ],

  rwenDialogue: {
    intro: "It's morning in a Beijing hutong — narrow brick alleys, the smell of jianbing being cooked. An older neighbour is sweeping the doorstep of their courtyard home. They look up at you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo',
        native: 'Hello',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nǐ hǎo, nǐ hǎo ma?', native: 'Hello, how are you?', correct: true, feedback: 'Perfect — warm and complete. They will smile.' },
          { target: 'Wǒ hěn hǎo', native: "I'm well", correct: false, feedback: "That's how you reply — but they greeted you first, so greet them back." },
          { target: 'Ma?', native: 'Huh?', correct: false, feedback: '"Ma" alone is just a question particle — it doesn\'t mean anything by itself.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ hěn hǎo, xièxie',
        native: "I'm well, thank you",
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautifully done. You opened the door with two tones — and they let you in. That's all 'nǐ hǎo' really is: a small, warm key.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Hello (in Mandarin pinyin)',
        correct: ['Nǐ hǎo', 'Ni hao', 'ni hao', 'nǐ hǎo', '你好'],
      },
      {
        prompt: "I'm well",
        correct: ['Wǒ hěn hǎo', 'Wo hen hao', 'wo hen hao', 'wǒ hěn hǎo', '我很好'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Nǐ hǎo' out loud once today — to a person, a pet, or your reflection. Pay attention to the dipping tone on 'nǐ' — that's where English speakers slip first.",
    rwenSignoff: "Slowly, slowly. Tones come from listening, not memorising. Zàijiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "Early morning in a Beijing hutong. Sun's just up, the smell of breakfast pancakes drifting from a corner stall. Your elderly neighbour is sweeping the stone doorstep of her courtyard home, the way she does every morning. She looks up — this is your moment to greet her properly.",
    rwenRole: "Wáng Āyí (王阿姨) — neighbourhood auntie, ~70, lives three doors down. Friendly, observant, will gently correct your tones if you mangle them. She speaks slowly for foreigners.",
    successCriteria: "User opens with 'Nǐ hǎo' (not English 'Hi'), follows with 'Nǐ hǎo ma?' to ask after her, and replies 'Wǒ hěn hǎo' when she asks back — including the 'hěn' (which English speakers love to drop because it feels redundant).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
