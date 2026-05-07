import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-ani-oniisan',
  module: 5,
  lesson: 3,
  title: 'Ani / Ane vs Oniisan / Oneesan — Older Siblings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Siblings split four ways in Japanese: by older/younger AND by your-family/their-family. Today we cover OLDER siblings. Your own older brother is 兄 (ani); their older brother is お兄さん (oniisan). Same for older sister: 姉 (ane) vs お姉さん (oneesan).",
    culturalNote: "Japanese has no neutral word for 'sibling' — you must specify older or younger AND in-group or out-group. Even in casual conversation between friends, 'oniisan' is also used to address young men in the street politely (literally, 'big brother'), the way English speakers might say 'sir' or 'mate'.",
  },

  chunks: [
    {
      id: 'ani',
      target: '兄 (あに)',
      native: 'My (own) older brother — humble',
      literal: 'ani — older brother (in-group)',
      emoji: '👦',
      phonetic: 'AH-ni',
      audioRef: null,
    },
    {
      id: 'oniisan',
      target: 'お兄さん (おにいさん)',
      native: "Older brother (respectful) — someone else's, or addressing your own",
      literal: 'o-nii-san — honorific + older-brother + respectful suffix',
      emoji: '🧑‍🎓',
      phonetic: 'oh-NEE-san',
      audioRef: null,
    },
    {
      id: 'ane_oneesan',
      target: '姉 / お姉さん',
      native: 'My older sister (humble) / Older sister (respectful)',
      literal: 'ane / o-nee-san — same in/out-group split',
      emoji: '👩‍🎓',
      phonetic: 'AH-ne / oh-NAY-san',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Older-sibling pairs follow the same in/out frame',
    explanation: "兄/お兄さん (ani/oniisan) for older brother. 姉/お姉さん (ane/oneesan) for older sister. The bare humble forms (ani, ane) are for talking ABOUT your own siblings to outsiders. The o-...-san forms (oniisan, oneesan) are for someone else's siblings, or for directly addressing your own.",
    examples: [
      { target: '兄は東京にいます', native: 'My older brother is in Tokyo (humble — to outsider)' },
      { target: 'お姉さんはお元気ですか', native: "How is your older sister? (respectful)" },
      { target: 'お兄ちゃん！', native: "Big bro! (childish/affectionate — addressing your own)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese to its meaning',
      pairs: [
        { left: '兄 (ani)', right: 'My own older brother (humble)' },
        { left: 'お兄さん (oniisan)', right: "Someone else's older brother (respectful)" },
        { left: '姉 (ane)', right: 'My own older sister (humble)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Telling a coworker about your own older sister — which form?",
      sentence: '_____ は東京にいます。',
      options: ['姉', 'お姉さん', 'お姉ちゃん'],
      correct: '姉',
      context: "Your own older sister, to a coworker — humble ane.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your friend\'s older brother (respectful)',
      prompt: "Friend's older brother",
      correct: ['oniisan', 'Oniisan', 'onīsan', 'お兄さん'],
    },
    {
      type: 'multiple_choice',
      instruction: "A friend asks about your older brother. Best reply form for YOUR brother:",
      question: 'Talking about your own older brother:',
      options: [
        { text: '兄は会社員です (Ani wa... — humble, correct)', correct: true },
        { text: 'お兄さんは会社員です (Oniisan wa... — wrong; that\'s for someone else\'s)', correct: false },
        { text: 'お兄ちゃんは会社員です (childish; only inside the family)', correct: false },
      ],
      explanation: 'In conversation with anyone outside your family, your own older brother is ani. Oniisan is reserved for someone else\'s older brother — or for affectionately addressing yours directly at home.',
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'My older sister is a teacher' (to an outsider)",
      words: ['先生', '姉', 'です。', 'は'],
      correct: ['姉', 'は', '先生', 'です。'],
      translation: 'My older sister is a teacher',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your own older sister, to an outsider',
      prompt: 'My older sister (humble)',
      correct: ['ane', 'Ane'],
    },
  ],

  rwenDialogue: {
    intro: "A small Lunar New Year (お正月) gathering at a friend's home. Their older sister is in the kitchen helping with osechi-ryouri (New Year food). Your friend tells you...",
    lines: [
      {
        speaker: 'npc',
        target: 'これ、お姉さんが作ったんだよ。',
        native: "My older sister made this. (the friend points to a dish; uses oneesan about her own sister informally)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'お姉さん、ありがとうございます。', native: "Thank you, oneesan. (addressing the friend's older sister respectfully)", correct: true, feedback: 'Right — when you speak TO someone else\'s older sister, oneesan is the natural address. Your friend addressed her informally (her own sister), but you\'re an outsider speaking up to her.' },
          { target: '姉、ありがとうございます。', native: "Thanks, ane. (using the humble form for someone else's sister — wrong)", correct: false, feedback: 'Ane is only for your OWN older sister, when you mention her to outsiders. To address someone else\'s older sister, always oneesan.' },
          { target: 'すみません、ありがとうございます。', native: 'Sorry, thank you. (no address — safe but distant)', correct: false, feedback: 'Acceptable, but using oneesan acknowledges her role and the warmth of the moment.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You used oneesan for the friend's sister — exactly right. The kitchen warmed up. She bowed slightly without realising; you'd just placed her in the right register.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My own older brother (humble)', correct: ['ani', 'Ani', '兄'] },
      { prompt: "Someone else's older sister (respectful)", correct: ['oneesan', 'Oneesan', 'onēsan', 'お姉さん'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have an older sibling, practise saying 'ani wa...' or 'ane wa...' followed by what they do. Then flip it: imagine someone telling YOU about their older brother — they'd say oniisan. Hold both registers in your head.",
    rwenSignoff: "Older = ani/ane (yours), oniisan/oneesan (theirs). Mata ashita.",
  },

  phase8: {
    scenario: "Lunar New Year afternoon at your friend Yuki's house in Yokohama. Yuki's older sister Misaki is hosting — she's the one cooking, pouring tea, playing big-sister-of-the-house. You need to talk WITH Misaki (using oneesan as address), and at one point Yuki asks about YOUR older brother back home (your reply switches to ani).",
    rwenRole: "Misaki — Yuki's older sister, late 20s, warm, attentive, listening for whether you'll fumble the in/out-group switch. She is oneesan when you address her, but talks easily about her own brother as ani.",
    successCriteria: "User addresses Misaki as 'oneesan' (or 'お姉さん') when speaking to her, and switches to 'ani' (or '兄') when answering about their own older brother. Does NOT call Misaki 'ane' (humble form is wrong for someone else), and does NOT call their own brother 'oniisan' to outsiders.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
