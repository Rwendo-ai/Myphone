import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-roku-juu',
  module: 6,
  lesson: 2,
  title: 'Roku to Juu — Numbers 6 to 10',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Six to ten — and we hit juu (10), the foundation of everything from eleven to ninety-nine. Japanese stacks tens the same way English does: juu-ichi (10+1) is eleven, juu-ni is twelve. Once you have one through ten, you have one through ninety-nine for free.",
    culturalNote: "Japanese counting is wonderfully regular up to 99 — no English-style 'eleven, twelve' irregularities. The whole system is just decade + ones, decade + ones. The challenge isn't the math; it's the sound changes (rendaku) when certain numbers meet certain counters — but that's a problem for later lessons.",
  },

  chunks: [
    {
      id: 'roku_shichi_hachi',
      target: '六 / 七 / 八 (roku / shichi-nana / hachi)',
      native: 'Six / Seven / Eight',
      literal: 'roku (6), shichi or nana (7), hachi (8) — like 4, seven has two readings',
      emoji: '6️⃣7️⃣8️⃣',
      phonetic: 'ROH-ku / SHEE-chi or NAH-na / HAH-chi',
      audioRef: null,
    },
    {
      id: 'kyuu_juu',
      target: '九 / 十 (kyuu-ku / juu)',
      native: 'Nine / Ten',
      literal: 'kyuu or ku (9), juu (10) — kyuu is the safer everyday reading',
      emoji: '9️⃣🔟',
      phonetic: 'KYOO or KOO / JOO',
      audioRef: null,
    },
    {
      id: 'juu_ichi',
      target: '十一 (juu-ichi)',
      native: 'Eleven',
      literal: 'juu (10) + ichi (1) = 11 — pure stacking',
      emoji: '1️⃣1️⃣',
      phonetic: 'JOO-ee-chi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Juu + ones = teens (11 onwards)',
    explanation: "Japanese teens are radically simple: juu (10) followed directly by the digit. Juu-ichi (11), juu-ni (12), juu-san (13), juu-yon (14), juu-go (15)... all the way to juu-kyuu (19). No new vocabulary. For 4, 7, 9, the safer everyday readings are yon, nana, kyuu (because shi/shichi/ku have unlucky homophones).",
    examples: [
      { target: 'juu-ichi', native: 'Eleven (10 + 1)' },
      { target: 'juu-yon', native: 'Fourteen (10 + yon — not shi)' },
      { target: 'juu-kyuu', native: 'Nineteen (10 + kyuu — not ku)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each number to its meaning',
      pairs: [
        { left: 'roku', right: 'Six' },
        { left: 'juu', right: 'Ten' },
        { left: 'kyuu', right: 'Nine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete fifteen',
      sentence: 'juu-_____',
      options: ['go', 'shanu', 'roku'],
      correct: 'go',
      context: '15 = ten plus five. Stack the digits.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Ten',
      correct: ['juu', 'Juu', 'jū'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'seventeen' in safe everyday Japanese?",
      question: 'Seventeen:',
      options: [
        { text: 'juu-nana', correct: true },
        { text: 'juu-shichi', correct: false },
        { text: 'nana-juu', correct: false },
      ],
      explanation: "juu (10) + nana (7) = juu-nana. Both juu-nana and juu-shichi are heard, but nana is the safer, friendlier reading. Reversed (nana-juu) means 70.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have ten yen'",
      words: ['arimasu', 'juu', 'en'],
      correct: ['juu', 'en', 'arimasu'],
      translation: 'I have ten yen / There is ten yen',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — the everyday-safe reading',
      prompt: 'Nineteen',
      correct: ['juu-kyuu', 'juukyuu', 'juu kyuu', 'jūkyū'],
    },
  ],

  rwenDialogue: {
    intro: "A primary-school kid on the train counts up to ten loudly with you. Don't disappoint them.",
    lines: [
      {
        speaker: 'npc',
        target: '一緒に！ ichi, ni, san...',
        native: 'Together! one, two, three...',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'yon, go, roku, nana, hachi, kyuu, juu!', native: 'four, five, six, seven, eight, nine, ten!', correct: true, feedback: "Counted to ten in Japanese, with the safe readings. The kid grins and high-fives you." },
          { target: 'yon, go, roku...', native: 'four, five, six... (stopped)', correct: false, feedback: "Keep going — yon, go, roku, nana, hachi, kyuu, juu! Don't leave them hanging." },
          { target: 'wakarimasen', native: "I don't know", correct: false, feedback: "You do — try: yon, go, roku, nana, hachi, kyuu, juu." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Juu! You hit ten. The kid will tell their parents about the foreigner who counted with them. That's a memory you just made.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Nine (everyday-safe reading)', correct: ['kyuu', 'Kyuu', 'kyū'] },
      { prompt: 'Ten', correct: ['juu', 'Juu', 'jū'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count one to ten out loud — ichi, ni, san, yon, go, roku, nana, hachi, kyuu, juu. Then count back down. Then jump to seventeen (juu-nana) and twenty-three (you'll learn that pattern in lesson 8 — guess it now).",
    rwenSignoff: "Juu. Ten in your pocket. Mata ashita.",
  },

  phase8: {
    scenario: "Buying a JR train ticket at a Shinjuku machine that's switched to staff-mode because the bills jammed. The attendant is reading off platform numbers and price options out loud in Japanese — you need to repeat back the right digit between 6 and 19 to confirm what you want.",
    rwenRole: "JR ticket attendant — late 30s, polite but moving fast through a queue; she'll quote numbers in standard Japanese (juu-roku-ban-sen for 'platform 16') and expects you to confirm the digit back without dropping into English numerals.",
    successCriteria: "User produces roku/nana/hachi/kyuu/juu correctly, builds at least one teen using the juu + ones pattern (juu-ichi, juu-yon, juu-kyuu), and reaches for nana/kyuu/yon over shichi/ku/shi when speaking 7/9/4 aloud.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
