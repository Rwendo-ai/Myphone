import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Tagasaan ka? — Where from?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipinos love this question. 'Tagasaan ka?' — where are you from? — opens the door to the second half of every introduction. And 'Taga-Sydney ako' answers it cleanly: that little prefix 'Taga-' means 'from'.",
    culturalNote: "'Taga-' is one of the most useful prefixes in Tagalog. Slap it onto any place name and you've made an adjective: Taga-Manila (from Manila), Taga-Cebu (from Cebu), Taga-London. It's how Filipinos tag identity to place — and they ALWAYS ask, especially of foreigners.",
  },

  chunks: [
    {
      id: 'tagasaan_ka',
      target: 'Tagasaan ka?',
      native: 'Where are you from?',
      literal: 'From-where you-singular?',
      emoji: '🌍',
      phonetic: 'ta-ga-sa-AN KA',
      audioRef: null,
    },
    {
      id: 'taga_sydney_ako',
      target: 'Taga-Sydney ako',
      native: "I'm from Sydney",
      literal: 'From-Sydney I',
      emoji: '🏙️',
      phonetic: 'ta-GA SID-ni a-KO',
      audioRef: null,
    },
    {
      id: 'galing_ako_sa',
      target: 'Galing ako sa...',
      native: 'I come from...',
      literal: 'Coming I from...',
      emoji: '✈️',
      phonetic: 'GA-ling a-KO SA',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Taga-' + place",
    explanation: "Glue 'Taga-' to any place name and you've said 'from there'. 'Taga-' + Manila → Taga-Manila. 'Taga-' + Sydney → Taga-Sydney. The respectful form just adds kayo + po: 'Tagasaan po kayo?'. The alternate frame 'Galing ako sa...' uses the linker 'sa' before the place — same meaning, slightly more formal flavour.",
    examples: [
      { target: 'Taga-Manila ako', native: "I'm from Manila" },
      { target: 'Taga-London si Emma', native: 'Emma is from London' },
      { target: 'Galing ako sa Auckland', native: 'I come from Auckland' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Tagasaan ka?', right: 'Where are you from?' },
        { left: 'Taga-Sydney ako', right: "I'm from Sydney" },
        { left: 'Galing ako sa...', right: 'I come from...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're from London. Complete the sentence.",
      sentence: '_____-London ako.',
      options: ['Taga', 'Galing', 'Ako'],
      correct: 'Taga',
      context: "'Taga-' + place name = 'from that place'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (use the city Sydney)',
      prompt: "I'm from Sydney",
      correct: ['Taga-Sydney ako', 'taga-Sydney ako', 'Taga Sydney ako', 'taga sydney ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: Where are you from? (respectful)',
      words: ['kayo', 'Tagasaan', 'po'],
      correct: ['Tagasaan', 'po', 'kayo'],
      translation: 'Where are you from? (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "An OFW kabayan you've just met asks where you're from. You're from Auckland. Which answer is right?",
      question: 'Pick the natural reply',
      options: [
        { text: 'Taga-Auckland ako', correct: true },
        { text: 'Ako Auckland', correct: false },
        { text: 'Tagasaan ka?', correct: false },
      ],
      explanation: "'Taga-' + place + 'ako' is the clean answer. 'Ako Auckland' drops the prefix; 'Tagasaan ka?' is the question, not the reply.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Where are you from? (casual)',
      correct: ['Tagasaan ka?', 'Tagasaan ka', 'tagasaan ka?', 'tagasaan ka'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a video call with your tita who works as a nurse in Dubai — a classic OFW phone-home moment. She's video-calling her sister back in Cavite, and now her sister wants to meet you. You're on screen, the wifi is shaky, but she leans in.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kumusta po. Tagasaan po kayo?',
        native: "Hello. Where are you from? (respectful)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Taga-Sydney po ako, tita.', native: "I'm from Sydney (respectful), auntie.", correct: true, feedback: "Lovely — 'Taga-' + place + 'po' for respect, and 'tita' to wrap it warmly. She'll already be planning to feed you." },
          { target: 'Sydney', native: 'Sydney', correct: false, feedback: 'Too bare — wrap it: Taga-Sydney po ako.' },
          { target: 'Taga-Sydney ako', native: "I'm from Sydney", correct: false, feedback: "Right structure, but you skipped 'po' to an elder tita. Slip it in." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, ang layo! Galing ka pa sa Australia?',
        native: 'Oh, so far! You came all the way from Australia?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she switched to 'galing' — that's the other frame. Same idea, different flavour. You'll hear both everywhere.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Where are you from? (casual, in Tagalog)',
        correct: ['Tagasaan ka?', 'Tagasaan ka', 'tagasaan ka?', 'tagasaan ka'],
      },
      {
        prompt: "I'm from Sydney (in Tagalog)",
        correct: ['Taga-Sydney ako', 'taga-Sydney ako', 'Taga Sydney ako', 'taga sydney ako'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone in Tagalog where you're from today. Substitute your real city. 'Taga-[your city] ako'. Feel that 'Taga-' click onto your place.",
    rwenSignoff: "I'll ask tomorrow how it landed. Hanggang sa muli — until next time.",
  },

  phase8: {
    scenario: "Your tita is an OFW nurse in Dubai. She's on a video call with her sister back in Cavite, who wants to meet you. The wifi is shaky, the connection drops every 30 seconds, and the auntie on screen is asking where you're from — in respectful Tagalog.",
    rwenRole: "Tita Susan — auntie in Cavite, 60s, warm and curious, treats foreigners on video calls like long-lost relatives; she beams when you answer 'Taga-' + place properly.",
    successCriteria: "User answers with 'Taga-[city] po ako' (the 'Taga-' prefix MUST be present and connected to a place; 'po' is preserved since she's an elder). Bare 'Sydney' or '[city] ako' without Taga- doesn't pass.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
