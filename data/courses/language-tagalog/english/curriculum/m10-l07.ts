import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Pagkukwento — Telling Stories',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Pagkukwento — storytelling — is the heart of Filipino tables. After dinner, the lola starts: 'Noong bata pa ako...' (When I was a child...). Today, you start your own story.",
    culturalNote: "Filipinos are world-class storytellers — kuwentuhan (story-sharing) goes for hours after meals. Every fiesta, every reunion, every late-night videocall has it. Past-tense narrative is not just grammar — it's the doorway to belonging at the table.",
  },

  chunks: [
    {
      id: 'noong_bata_pa_ako',
      target: 'Noong bata pa ako...',
      native: 'When I was a child...',
      literal: 'Back-when child still I',
      emoji: '👶',
      phonetic: 'no-ONG ba-TA pa a-KO',
      audioRef: null,
    },
    {
      id: 'hindi_ko_makakalimutan',
      target: 'Hindi ko makakalimutan...',
      native: "I'll never forget...",
      literal: 'Not I will-be-able-to-forget',
      emoji: '💭',
      phonetic: 'hin-DI ko ma-ka-ka-li-MU-tan',
      audioRef: null,
    },
    {
      id: 'sobrang_ganda_nun',
      target: 'Sobrang ganda nun',
      native: 'It was so beautiful',
      literal: 'Super beauty of-that',
      emoji: '✨',
      phonetic: 'so-BRANG gan-DA nun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past-tense narrative',
    explanation: "Tagalog past-tense uses two tools: **noong** (back when / it was the time when) opens a memory, and **-um-** or **-in-** infixes mark verbs as past. *Pumunta ako* = 'I went' (-um- inside *punta*). For now, lean on the openers — *Noong bata pa ako* and *Hindi ko makakalimutan* — they carry whole stories.",
    examples: [
      { target: 'Noong bata pa ako, pumunta ako sa Boracay', native: 'When I was a child, I went to Boracay' },
      { target: 'Hindi ko makakalimutan ang fiesta', native: "I'll never forget the fiesta" },
      { target: 'Sobrang ganda nun', native: 'It was so beautiful' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Noong bata pa ako...', right: 'When I was a child...' },
        { left: 'Hindi ko makakalimutan...', right: "I'll never forget..." },
        { left: 'Sobrang ganda nun', right: 'It was so beautiful' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re starting a memory about your childhood. Open with the classic line.',
      sentence: '_____ bata pa ako, masaya kami sa baryo.',
      options: ['Noong', 'Sobrang', 'Hindi'],
      correct: 'Noong',
      context: 'Noong opens past-time stories. The full phrase is "Noong bata pa ako".',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'It was so beautiful',
      correct: ['Sobrang ganda nun', 'sobrang ganda nun'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I\'ll never forget the fiesta"',
      words: ['fiesta', 'ko', 'Hindi', 'ang', 'makakalimutan'],
      correct: ['Hindi', 'ko', 'makakalimutan', 'ang', 'fiesta'],
      translation: "I'll never forget the fiesta",
    },
    {
      type: 'multiple_choice',
      instruction: "Your titá at the family reunion starts a story. Which line does she open with?",
      question: 'The classic Filipino story-opener',
      options: [
        { text: 'Noong bata pa ako...', correct: true },
        { text: 'Masakit ang ulo ko', correct: false },
        { text: 'Inumin mo ang gamot', correct: false },
      ],
      explanation: "'Noong bata pa ako...' is the universal Filipino kuwentuhan opener — every dinner table hears it.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'll never forget...",
      correct: ['Hindi ko makakalimutan', 'hindi ko makakalimutan', 'Hindi ko makakalimutan...'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a family fiesta in Pampanga. After lechon and arroz caldo, the lola turns to you: 'Ikuwento mo naman.' (You tell one now.)",
    lines: [
      {
        speaker: 'npc',
        target: 'Sige, ikuwento mo. Ano ang hindi mo makakalimutan?',
        native: "Go on, tell. What can't you forget?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Noong bata pa ako, pumunta kami sa beach. Sobrang ganda nun.', native: 'When I was a child, we went to the beach. It was so beautiful.', correct: true, feedback: 'Three building blocks woven into a real story. The lola is leaning in.' },
          { target: 'Masakit ang ulo ko.', native: 'My head hurts.', correct: false, feedback: "Wrong moment — that's a clinic line, not a story line." },
          { target: 'Sobrang ganda', native: "Super beautiful", correct: false, feedback: 'Almost — but a story needs an opener too. Noong bata pa ako...' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, ang ganda ng kuwento. Tuloy mo!',
        native: 'Wow, beautiful story. Keep going!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just earned a place at the kuwentuhan table. That's no small thing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'When I was a child... (in Tagalog)', correct: ['Noong bata pa ako', 'noong bata pa ako', 'Noong bata pa ako...'] },
      { prompt: "I'll never forget... (in Tagalog)", correct: ['Hindi ko makakalimutan', 'hindi ko makakalimutan'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself — out loud — a 3-sentence childhood memory in Tagalog. Open with 'Noong bata pa ako...', describe one thing, end with 'Sobrang ganda nun.'",
    rwenSignoff: "Maganda ang kuwento mo. Bukas, isa pang kuwento.",
  },

  phase8: {
    scenario: "It's the merienda hour at a family fiesta in your titá's house in Pampanga. After the lechon, an older relative leans toward you and says, 'Ikuwento mo naman ang isang alaala mo.' (Tell us one of your memories.) The whole table goes quiet, smiling, waiting.",
    rwenRole: "Lolo Andoy — your kaibigan's grandfather, 70s, gentle, the kind of listener who actually hears every word.",
    successCriteria: "User tells a 3-sentence childhood story using 'Noong bata pa ako...' as opener, mentions one specific thing/place, and closes with an emotional line like 'Sobrang ganda nun' or 'Hindi ko makakalimutan'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
