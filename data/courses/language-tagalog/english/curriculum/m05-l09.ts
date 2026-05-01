import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Family Stories — Memory in Tagalog',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipinos don't just have families — they have family STORIES. The Lola who walked five kilometres to school. The Tatay who saved his first peso for forty years. Today we learn the openings that begin every Filipino family memory.",
    culturalNote: "Storytelling is woven into Filipino family life. At fiestas, after dinner, on long jeepney rides — someone always starts with 'Noong bata pa ako…' (When I was a child…). These three openers will let you tell — and hear — those stories.",
  },

  chunks: [
    {
      id: 'noong_bata_pa_ako',
      target: 'Noong bata pa ako',
      native: 'When I was a child',
      literal: 'Past-when child still I',
      emoji: '🧒',
      phonetic: 'no-ONG BA-ta pa a-KO',
      audioRef: null,
    },
    {
      id: 'lagi_sinasabi_ng_lola_ko',
      target: 'Lagi sinasabi ng lola ko',
      native: 'My grandmother always said',
      literal: 'Always being-said by grandmother my',
      emoji: '👵',
      phonetic: 'LA-gi si-na-SA-bi nang LO-la ko',
      audioRef: null,
    },
    {
      id: 'hindi_ko_makakalimutan',
      target: 'Hindi ko makakalimutan',
      native: "I'll never forget",
      literal: 'Not by-me will-be-forgotten',
      emoji: '💭',
      phonetic: 'hin-DI ko ma-ka-ka-li-MU-tan',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three openers that unlock every family story',
    explanation: "Use these three to set the time and feeling: 'Noong bata pa ako' (when I was a child) for childhood memories, 'Lagi sinasabi ng [Lola/Tatay/Nanay] ko' (my [Lola] always said) for handed-down wisdom, and 'Hindi ko makakalimutan' (I'll never forget) for emotional anchor moments.",
    examples: [
      { target: 'Noong bata pa ako, sa Cebu kami nakatira.', native: 'When I was a child, we lived in Cebu.' },
      { target: 'Lagi sinasabi ng Lola ko, "Mag-ingat ka."', native: 'My Lola always said, "Take care."' },
      { target: 'Hindi ko makakalimutan ang Pasko sa Lola.', native: "I'll never forget Christmas at Lola's." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog opener to its meaning',
      pairs: [
        { left: 'Noong bata pa ako', right: 'When I was a child' },
        { left: 'Lagi sinasabi ng Lola ko', right: 'My grandmother always said' },
        { left: 'Hindi ko makakalimutan', right: "I'll never forget" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're starting a story about something your grandfather always repeated.",
      sentence: '_____ ng Lolo ko, "Mag-aral kang mabuti."',
      options: ['Lagi sinasabi', 'Noong bata', 'Hindi ko'],
      correct: 'Lagi sinasabi',
      context: '"My Lolo always said, \'Study hard.\'" — Lagi sinasabi = always said.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'When I was a child',
      correct: ['Noong bata pa ako', 'noong bata pa ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I\'ll never forget my Lola"',
      words: ['ang', 'ko', 'makakalimutan', 'Hindi', 'Lola', 'ko'],
      correct: ['Hindi', 'ko', 'makakalimutan', 'ang', 'Lola', 'ko'],
      translation: "I'll never forget my Lola.",
    },
    {
      type: 'multiple_choice',
      instruction: 'You want to start a story about Christmas at your Lola\'s house — the one you\'ll never forget. Which opener fits best?',
      question: 'Pick the opener that lands the emotion',
      options: [
        { text: "Hindi ko makakalimutan ang Pasko sa Lola.", correct: true },
        { text: "Bumisita ako sa Lola.", correct: false },
        { text: "Tropa ko ang Lola.", correct: false },
      ],
      explanation: "'Hindi ko makakalimutan' = 'I'll never forget' — the perfect emotional anchor for a memory-rich story.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'll never forget my grandmother.",
      correct: ['Hindi ko makakalimutan ang Lola ko.', 'hindi ko makakalimutan ang lola ko', 'Hindi ko makakalimutan ang lola ko.'],
    },
  ],

  rwenDialogue: {
    intro: "After Sunday lunch in Manila, the table is full of empty plates. Your Tita Marissa leans in. 'Tell me a story about your Lola,' she says.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kuwentuhan mo ako tungkol sa Lola mo.',
        native: 'Tell me a story about your grandmother.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Noong bata pa ako, lagi sinasabi ng Lola ko, "Kumain ka na." Hindi ko makakalimutan iyon.', native: 'When I was a child, my Lola always said, "Eat now." I\'ll never forget that.', correct: true, feedback: 'Three openers in one sentence — you just told a story like a Filipina.' },
          { target: 'Lola ang Tito ko.', native: 'My Tito is Lola.', correct: false, feedback: "Mixed up — Lola is grandma, Tito is uncle. Try the memory openers." },
          { target: 'Bumisita ang Lola.', native: 'Lola visited.', correct: false, feedback: "That's a fact, not a story. Open with 'Noong bata pa ako…' to set the memory." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, ang ganda. Tulad ng Lola ko rin.',
        native: 'Oh, how lovely. Just like my Lola too.',
      },
      {
        speaker: 'rwen',
        rwenLine: "And just like that you bonded across grandmothers. That's what these openers do — they make memory shareable in Tagalog.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'When I was a child (in Tagalog)', correct: ['Noong bata pa ako', 'noong bata pa ako'] },
      { prompt: "I'll never forget (in Tagalog)", correct: ["Hindi ko makakalimutan", "hindi ko makakalimutan"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick ONE family memory — the smaller the better. Try to start telling it in your head with 'Noong bata pa ako…'. You don't need the whole story in Tagalog yet — just the opener will pull memory into a new language.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "After Sunday lunch in Manila, you're sitting at the table with Tita Marissa, who asks you to share a memory of your own Lola — the one you grew up with.",
    rwenRole: "Tita Marissa — warm Filipina in her late 50s, leans in for stories, will follow up with 'tapos?' (and then?) after every line, and shares a small Lola story of her own to match yours.",
    successCriteria: "User opens with 'Noong bata pa ako' and uses at least one of 'Lagi sinasabi ng Lola ko' or 'Hindi ko makakalimutan' to anchor the memory. Bonus: uses Tita Marissa as a title and includes 'po' for respect.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
