import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-otouto-imouto',
  module: 5,
  lesson: 4,
  title: 'Otouto / Imouto vs Otoutosan / Imoutosan — Younger Siblings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Younger siblings: 弟 (otouto) is your own younger brother, 妹 (imouto) your own younger sister. Add さん to refer to someone else's: 弟さん (otoutosan) and 妹さん (imoutosan). Notice the お- prefix is OPTIONAL here — the さん carries most of the respect.",
    culturalNote: "There's no お- pretending here, unlike with parents and older siblings. 'Otoutosan' (without お-) is the standard respectful form, though you'll hear 'お弟さん' from people being extra careful. The さん suffix is doing the heavy lifting: it marks the person as someone-else's-family.",
  },

  chunks: [
    {
      id: 'otouto',
      target: '弟 (おとうと)',
      native: 'My (own) younger brother — humble',
      literal: 'otouto — younger brother (in-group)',
      emoji: '👦',
      phonetic: 'oh-TOH-toh',
      audioRef: null,
    },
    {
      id: 'imouto',
      target: '妹 (いもうと)',
      native: 'My (own) younger sister — humble',
      literal: 'imouto — younger sister (in-group)',
      emoji: '👧',
      phonetic: 'ee-MOH-toh',
      audioRef: null,
    },
    {
      id: 'otoutosan',
      target: '弟さん / 妹さん',
      native: "Someone else's younger brother / sister (respectful)",
      literal: 'otouto-san / imouto-san — younger sibling + respectful suffix',
      emoji: '🧒',
      phonetic: 'oh-TOH-toh-san / ee-MOH-toh-san',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Younger-sibling pairs use さん without お- prefix',
    explanation: "弟 → 弟さん (otouto → otoutosan). 妹 → 妹さん (imouto → imoutosan). Unlike parents and older siblings (which take both お- AND さん), younger sibling respect is carried by さん alone. The asymmetry mirrors a subtle cultural fact: hierarchy flows up; you don't need elaborate honorifics for those below you in age.",
    examples: [
      { target: '弟は学生です', native: 'My younger brother is a student (humble)' },
      { target: '妹さんはお元気ですか', native: "How is your younger sister? (respectful)" },
      { target: '弟さんは何歳ですか', native: 'How old is your younger brother? (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese to its meaning',
      pairs: [
        { left: '弟 (otouto)', right: 'My own younger brother' },
        { left: '妹 (imouto)', right: 'My own younger sister' },
        { left: '弟さん (otoutosan)', right: "Someone else's younger brother (respectful)" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Talking about your own younger sister to a coworker — which form?",
      sentence: '_____ は大学生です。',
      options: ['妹', '妹さん', 'お妹さん'],
      correct: '妹',
      context: "Your own younger sister, to a coworker — humble imouto.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your friend\'s younger brother (respectful)',
      prompt: "Friend's younger brother",
      correct: ['otoutosan', 'Otoutosan', 'otōtosan', '弟さん'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which form do you use to ask 'How is YOUR younger sister?' to a friend?",
      question: 'Asking about a friend\'s younger sister:',
      options: [
        { text: '妹さんはお元気ですか (Imoutosan wa ogenki desu ka — respectful, correct)', correct: true },
        { text: '妹はお元気ですか (Imouto wa... — sounds like you\'re asking about your own)', correct: false },
        { text: 'お妹さんはお元気ですか (Oimoutosan — overdone, not standard)', correct: false },
      ],
      explanation: 'For someone else\'s younger sister: imouto + さん. Bare imouto sounds like you\'re asking yourself about your own. お妹さん is over-correction — younger siblings get さん, not お-.',
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'My younger brother is twelve years old' (to an outsider)",
      words: ['です。', '弟', '十二歳', 'は'],
      correct: ['弟', 'は', '十二歳', 'です。'],
      translation: 'My younger brother is twelve years old',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your own younger sister, to an outsider',
      prompt: 'My younger sister (humble)',
      correct: ['imouto', 'Imouto', 'imōto'],
    },
  ],

  rwenDialogue: {
    intro: "A casual lunch with your colleague's family at their home in Kawasaki. Their teenage daughter — the colleague's younger sister, only 17 — has just sat down at the table.",
    lines: [
      {
        speaker: 'npc',
        target: '妹も今年大学に入ったんですよ。',
        native: "My younger sister started university this year, by the way. (the colleague refers to her own little sister with humble imouto)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '妹さん、おめでとうございます！', native: 'Congratulations, imoutosan! (addressing her with the respectful form)', correct: true, feedback: 'You shifted to imoutosan when speaking TO her — exactly right. The colleague used imouto about her own sister; you, an outsider, use imoutosan.' },
          { target: '妹、おめでとうございます！', native: 'Congratulations, imouto! (humble form — wrong for addressing someone else\'s sister)', correct: false, feedback: 'Imouto without さん is what your colleague uses about her own sister. You, addressing her directly, need imoutosan.' },
          { target: 'おめでとうございます。', native: 'Congratulations. (no address)', correct: false, feedback: 'Acceptable, but acknowledging her as imoutosan makes the moment land better — especially in front of her older sister.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You hit imoutosan with the さん even though the colleague had just used bare imouto. That switch — same person, two registers depending on who's speaking — is the move. They both noticed.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My own younger brother (humble)', correct: ['otouto', 'Otouto', 'otōto', '弟'] },
      { prompt: "Someone else's younger sister (respectful)", correct: ['imoutosan', 'Imoutosan', 'imōtosan', '妹さん'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Map out your siblings (real or hypothetical) in Japanese: ani/ane for older, otouto/imouto for younger. Then flip it: how would a friend refer to YOUR younger sibling? Add さん.",
    rwenSignoff: "さん carries the respect for younger siblings. Mata ashita.",
  },

  phase8: {
    scenario: "Sunday afternoon at your colleague Aiko's family apartment in Kawasaki — multi-generational lunch. Aiko's younger brother (18, university student) is at the table. You'll need to: address HIM directly using otoutosan when you speak to him, refer to your own younger sister back home with bare imouto when Aiko's mother asks, and not over-honorify with お弟さん (a common foreigner mistake).",
    rwenRole: "Aiko's younger brother Hiroto — 18, shy, watching to see whether you'll address him as otoutosan or fumble. Aiko herself sometimes calls him 弟 (humble) when telling you about him.",
    successCriteria: "User addresses Hiroto as 'otoutosan' (or '弟さん') when speaking to him, and uses bare 'imouto' (or '妹') when talking about their own younger sister to Aiko's family. Does NOT add お- prefix to younger siblings (no 'oimoutosan' or 'ootoutosan'), and does NOT call Hiroto plain 'otouto'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
