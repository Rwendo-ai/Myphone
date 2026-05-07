import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-iku-kuru',
  module: 8,
  lesson: 1,
  title: '行く・来る — To Go and To Come',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Japanese verbs come in two flavours by ending — る verbs (taberu, miru) and う verbs (iku, nomu). And here's the kicker: the verb always lands at the END of the sentence. Subject, then object, then verb. 'I to Tokyo go.' Today: 行く (iku — to go) and 来る (kuru — to come) — the two most-used motion verbs in the language.",
    culturalNote: "東京 (Tokyo) and 京都 (Kyoto) are wired together by shinkansen — Japanese say 行く (iku) when going there and 来る (kuru) when arriving back home. The direction of motion is anchored to where YOU are, not the listener. A small grammatical detail with a very Japanese flavour.",
  },

  chunks: [
    {
      id: 'ikimasu',
      target: '行きます (ikimasu)',
      native: 'I go / will go (polite)',
      literal: 'go-polite-present',
      emoji: '🚶',
      phonetic: 'i-ki-MAS',
      audioRef: null,
    },
    {
      id: 'ikimashita',
      target: '行きました (ikimashita)',
      native: 'I went (polite past)',
      literal: 'go-polite-past',
      emoji: '⬅️',
      phonetic: 'i-ki-mash-ta',
      audioRef: null,
    },
    {
      id: 'kimasu',
      target: '来ます (kimasu)',
      native: 'I come / will come (polite)',
      literal: 'come-polite-present',
      emoji: '➡️',
      phonetic: 'ki-MAS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'う-verb conjugation: 行く → 行きます → 行きました',
    explanation: "Dictionary form 行く (iku) ends in -く. To make it polite, drop the -く and add -きます (ikimasu). Past polite: -きました (ikimashita). Negative polite: -きません (ikimasen). Same skeleton applies to other -く verbs (聞く kiku → 聞きます). The verb sits at the END of the sentence, after subject and destination.",
    examples: [
      { target: '東京に行きます (Toukyou ni ikimasu)', native: 'I will go to Tokyo' },
      { target: '昨日京都に行きました (Kinou Kyouto ni ikimashita)', native: 'Yesterday I went to Kyoto' },
      { target: '明日来ます (Ashita kimasu)', native: 'I will come tomorrow' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese verb to its meaning',
      pairs: [
        { left: '行きます', right: 'I go (polite)' },
        { left: '行きました', right: 'I went (polite past)' },
        { left: '来ます', right: 'I come (polite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the past-tense sentence',
      sentence: '昨日京都に行き_____。',
      options: ['ました', 'ます', 'ません'],
      correct: 'ました',
      context: 'Yesterday I went to Kyoto. -ました is the polite past ending.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'I will go to Tokyo',
      correct: ['Toukyou ni ikimasu', 'toukyou ni ikimasu', 'Tokyo ni ikimasu', 'tokyo ni ikimasu'],
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I will go to Tokyo tomorrow' — remember verb LAST",
      words: ['東京に', '明日', '行きます'],
      correct: ['明日', '東京に', '行きます'],
      translation: 'Tomorrow I will go to Tokyo',
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague asks 「昨日どこに行きましたか?」 (Where did you go yesterday?). You went to Kyoto. What do you say?",
      question: 'Reply in past polite:',
      options: [
        { text: '京都に行きました (Kyouto ni ikimashita)', correct: true },
        { text: '京都に行きます (Kyouto ni ikimasu)', correct: false },
        { text: '京都に来ます (Kyouto ni kimasu)', correct: false },
      ],
      explanation: "Past polite is -ました. 行きます is present/future; 来ます means 'come' not 'go'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'I will come tomorrow',
      correct: ['Ashita kimasu', 'ashita kimasu'],
    },
  ],

  rwenDialogue: {
    intro: "Monday 9am at your Marunouchi office. A colleague asks about your weekend plans for Kyoto.",
    lines: [
      {
        speaker: 'npc',
        target: '週末はどこに行きますか?',
        native: 'Where will you go this weekend?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '京都に行きます。先月も行きました。', native: 'I will go to Kyoto. I went last month too.', correct: true, feedback: "Future + past in one breath. Verb at the end, polite -ます/-ました endings. Natural office Japanese." },
          { target: '京都に来ます', native: 'Kyoto comes (wrong direction verb)', correct: false, feedback: "来ます (kimasu) is for things coming TO where you are. To go AWAY to Kyoto, use 行きます (ikimasu)." },
          { target: '行きます京都に', native: 'go I Kyoto-to', correct: false, feedback: "Verb at the END in Japanese. It's 京都に行きます — destination first, verb last." },
        ],
      },
      {
        speaker: 'npc',
        target: 'いいですね。気をつけて行ってください。',
        native: 'Nice. Take care on your way.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Verb at the end, ます-form for the office. Two of the most useful verbs in Japanese now live in your mouth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory in Romaji.',
    prompts: [
      { prompt: 'I will go to Tokyo', correct: ['Toukyou ni ikimasu', 'toukyou ni ikimasu', 'Tokyo ni ikimasu', 'tokyo ni ikimasu'] },
      { prompt: 'I went (polite past)', correct: ['ikimashita', 'Ikimashita'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say out loud once today: '[place] に行きます' for somewhere you're going, and '[place] に行きました' for somewhere you went yesterday. Two real destinations, two Japanese sentences.",
    rwenSignoff: "また明日 (mata ashita) — see you tomorrow.",
  },

  phase8: {
    scenario: "Tuesday 9:15am at your Marunouchi office. Tanaka-san pauses by your desk with her coffee and asks where you went over the weekend and where you're planning to go next. She wants two real places — one past, one future — in polite Japanese, verb at the end.",
    rwenRole: "Tanaka-san — section chief, ~50, polite-form expected. She listens for correct verb placement and tense, not vocabulary breadth.",
    successCriteria: "User uses 行きました (ikimashita — polite past) for a place they went, AND 行きます (ikimasu — polite present/future) for a place they're going. Verb at the END of each sentence. Stays in -ます form throughout (no casual 行く). Correct destination particle に.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
