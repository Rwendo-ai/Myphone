import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-duibuqi',
  module: 2,
  lesson: 1,
  title: 'Duìbuqǐ — Sorry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Duìbuqǐ. Today, the apology — but a calibrated one. Mandarin has different 'sorrys' for different weights. Pick the wrong one, and you either sound theatrical or cold.",
    culturalNote: "In Chinese culture, apologies are weighed. Over-apologising for tiny things — bumping someone, asking the time — reads as weak or even strange. Save 'duìbuqǐ' (对不起) for when you've actually wronged someone. Use 'bù hǎoyìsi' (不好意思) for the small stuff: squeezing past, getting attention, mild inconvenience.",
  },

  chunks: [
    {
      id: 'duibuqi',
      target: 'Duìbuqǐ',
      native: "I'm sorry (sincere)",
      literal: '(对不起) lit: face-not-rise — "I cannot face you"',
      emoji: '🙇',
      phonetic: 'dway-boo-CHEE (falling, neutral, dipping)',
      audioRef: null,
    },
    {
      id: 'bu_haoyisi',
      target: 'Bù hǎoyìsi',
      native: 'Excuse me / Sorry (mild)',
      literal: '(不好意思) lit: not-good-meaning — "embarrassing"',
      emoji: '😅',
      phonetic: 'boo HOW-yee-suh',
      audioRef: null,
    },
    {
      id: 'mei_guanxi',
      target: 'Méi guānxi',
      native: "It's fine / No problem",
      literal: '(没关系) lit: no-relation — "it doesn\'t matter"',
      emoji: '🙂',
      phonetic: 'may GWAN-shee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Calibrated Apologies',
    explanation: "Match the weight. 'Duìbuqǐ' = real fault. 'Bù hǎoyìsi' = social friction. 'Méi guānxi' = the standard reply to either — it brushes things away.",
    examples: [
      { target: 'You step on someone\'s foot → Duìbuqǐ!', native: "Real harm — sincere apology" },
      { target: 'Squeezing through a crowd → Bù hǎoyìsi', native: "Mild — social lubricant" },
      { target: 'Someone apologises to you → Méi guānxi', native: "It's fine, brush it off" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Duìbuqǐ', right: "I'm sorry (sincere)" },
        { left: 'Bù hǎoyìsi', right: 'Excuse me (mild)' },
        { left: 'Méi guānxi', right: "It's fine" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You bumped someone slightly on the Shanghai metro. What do you say?",
      question: 'Pick the right register',
      options: [
        { text: 'Bù hǎoyìsi', correct: true },
        { text: 'Duìbuqǐ', correct: false },
        { text: 'Méi guānxi', correct: false },
      ],
      explanation: "A small bump = small apology. 'Duìbuqǐ' would sound like you broke their arm. 'Bù hǎoyìsi' is the everyday city phrase.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or Chinese characters',
      prompt: "I'm sorry (sincere — you actually messed up)",
      correct: ['Duìbuqǐ', 'duibuqi', 'Duibuqi', 'duìbuqǐ', '对不起'],
    },
    {
      type: 'fill_blank',
      instruction: 'Someone steps on your foot and says "Duìbuqǐ". You reply...',
      sentence: '_____ guānxi',
      options: ['Méi', 'Bù', 'Wǒ'],
      correct: 'Méi',
      context: "'Méi' = no/none. 'Méi guānxi' literally means 'no relation' — it doesn't matter, brush it off.",
    },
    {
      type: 'build_sentence',
      instruction: 'Apologise mildly — squeeze past someone in a crowd',
      words: ['hǎoyìsi', 'Bù'],
      correct: ['Bù', 'hǎoyìsi'],
      translation: 'Excuse me (mild apology)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the standard reply when someone apologises to you',
      prompt: "It's fine / No problem",
      correct: ['Méi guānxi', 'Mei guanxi', 'mei guanxi', 'méi guānxi', '没关系'],
    },
  ],

  rwenDialogue: {
    intro: "Rush hour on the Shanghai metro, line 2. The carriage is packed. As the train lurches, you stumble and tread on the foot of a businessman in a navy suit. He winces.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Duìbuqǐ!', native: "I'm so sorry!", correct: true, feedback: 'Right weight — you actually hurt him. Sincere apology earns a sincere reply.' },
          { target: 'Bù hǎoyìsi', native: 'Excuse me', correct: false, feedback: "Too mild for a stomped foot. He'll think you don't care." },
          { target: 'Méi guānxi', native: "It's fine", correct: false, feedback: "That's HIS line, not yours — you're the one who caused it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Méi guānxi',
        native: "It's fine",
      },
      {
        speaker: 'rwen',
        rwenLine: "See how he didn't make a fuss? That's the rhythm. Real apology, light reply. The whole exchange takes two seconds and you both move on.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm sorry (sincere)",
        correct: ['Duìbuqǐ', 'duibuqi', 'Duibuqi', 'duìbuqǐ', '对不起'],
      },
      {
        prompt: "It's fine (reply to an apology)",
        correct: ['Méi guānxi', 'Mei guanxi', 'mei guanxi', 'méi guānxi', '没关系'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Catch yourself the next time you almost over-apologise in English ('sorry, sorry, sorry!') and say a single calm 'duìbuqǐ' instead — silently, in your head. Train the calibration.",
    rwenSignoff: "Apologies are gifts. Don't hand them out for free. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday evening, Shanghai metro line 2 between Nanjing East Road and People's Square. The carriage is shoulder-to-shoulder. The train brakes hard, you lose balance, and your shoulder bag swings into a young woman's coffee — splashing it onto her sleeve. She looks up, more startled than angry. You have about three seconds to make this right.",
    rwenRole: "Lǐ Xīn (李欣) — late 20s, marketing analyst, on her way home. Polite, will accept a real apology gracefully but will judge a mumbled English 'sorry'.",
    successCriteria: "User uses 'Duìbuqǐ' (not 'bù hǎoyìsi' — the coffee is genuine harm), responds 'Méi guānxi' if she apologises back for being in your way, and doesn't lapse into English.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
