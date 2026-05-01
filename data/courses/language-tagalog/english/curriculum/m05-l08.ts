import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Bumisita, Tumawag, Namimiss — Family Verbs',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Family isn't just nouns — it's verbs. To visit. To call. To miss. The Filipino phrase 'Namimiss kita' is one of the most-said sentences in the country, especially across oceans. Today, we learn how to do family.",
    culturalNote: "With millions of OFWs working abroad, 'tumawag' (to call) and 'namimiss kita' (I miss you) are everyday words. A Filipina mother in Dubai says them to her kids in Manila every Sunday. They aren't dramatic — they're routine love.",
  },

  chunks: [
    {
      id: 'bumisita',
      target: 'Bumisita',
      native: 'To visit',
      literal: 'To-visit (-um- focus form)',
      emoji: '🚪',
      phonetic: 'bu-mi-SI-ta',
      audioRef: null,
    },
    {
      id: 'tumawag',
      target: 'Tumawag',
      native: 'To call',
      literal: 'To-call (phone/voice)',
      emoji: '📞',
      phonetic: 'tu-MA-wag',
      audioRef: null,
    },
    {
      id: 'namimiss_kita',
      target: 'Namimiss kita',
      native: 'I miss you',
      literal: 'Being-missed (by-me) you',
      emoji: '💌',
      phonetic: 'na-mi-MISS ki-TA',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Namimiss kita" — the Filipino "I miss you"',
    explanation: "'Namimiss kita' is the standard everyday form. Same word covers both 'I miss you' (now) and 'I'm missing you' (ongoing). Swap 'kita' for 'ko siya' to say 'I miss him/her'. Swap for 'ko sila' for 'I miss them'.",
    examples: [
      { target: 'Namimiss kita.', native: 'I miss you.' },
      { target: 'Namimiss ko siya.', native: 'I miss him/her.' },
      { target: 'Namimiss ko ang Nanay ko.', native: 'I miss my mum.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Bumisita', right: 'To visit' },
        { left: 'Tumawag', right: 'To call' },
        { left: 'Namimiss kita', right: 'I miss you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's been months since you've spoken to your Lola. You decide to call her tonight.",
      sentence: '_____ ako kay Lola mamaya.',
      options: ['Tumawag', 'Bumisita', 'Namimiss'],
      correct: 'Tumawag',
      context: "'I will call Lola later.' — Tumawag = to call (by phone).",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I miss you.',
      correct: ['Namimiss kita.', 'namimiss kita', 'Namimiss kita', 'Namimiss kita!'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I miss my mum"',
      words: ['ang', 'ko', 'Namimiss', 'Nanay', 'ko'],
      correct: ['Namimiss', 'ko', 'ang', 'Nanay', 'ko'],
      translation: 'I miss my mum.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your Tita Marissa hasn't seen you in two years. You're flying back to Manila next week. What do you message her?",
      question: 'Choose the warmest opener',
      options: [
        { text: 'Tita, namimiss kita! Bibisita ako sa susunod na linggo.', correct: true },
        { text: 'Marissa, gusto kong bumili.', correct: false },
        { text: 'Tatay, tumawag ka.', correct: false },
      ],
      explanation: "'Tita, namimiss kita!' opens with feeling. Then 'Bibisita ako' (I'll visit) signals the plan. Pure Filipino warmth.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I will visit you.',
      correct: ['Bibisita ako sa iyo.', 'bibisita ako sa iyo', 'Bibisitahin kita.', 'bibisitahin kita'],
    },
  ],

  rwenDialogue: {
    intro: "Late Sunday night. You're abroad, your Nanay is in Manila. You haven't called in a few weeks. You pick up the phone.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak! Naku, kanina ka pa hindi tumatawag.',
        native: "My child! Oh, you haven't called in ages.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sorry po, Nanay. Namimiss kita. Bibisita ako sa Pasko.', native: "Sorry, Mum. I miss you. I'll visit at Christmas.", correct: true, feedback: "She's smiling and tearing up at the same time. That's the magic combo." },
          { target: 'Mabuti po ako.', native: "I'm fine.", correct: false, feedback: 'Too cold for a Nanay who waited weeks for your call. Tell her you miss her.' },
          { target: 'Hindi ko alam.', native: "I don't know.", correct: false, feedback: "She'll worry. Lead with 'namimiss kita' — it's exactly what she needs." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, anak. Namimiss din kita. Mag-iingat ka, ha?',
        native: "Oh, my child. I miss you too. Take care, okay?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Two words — 'namimiss kita' — and the whole call lit up. That's why every OFW knows this phrase by heart.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I miss you. (in Tagalog)', correct: ['Namimiss kita.', 'namimiss kita', 'Namimiss kita'] },
      { prompt: 'To call (phone) — in Tagalog', correct: ['Tumawag', 'tumawag'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send 'Namimiss kita' to one family member or close friend today — text, voice note, post-it on the fridge. Don't translate it. Let it land in Tagalog.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're an OFW in Singapore. It's Sunday night. You haven't video-called your Nanay in three weeks because work has been brutal. You finally pick up the phone.",
    rwenRole: "Nanay — your mother in Manila, mid-50s, half-worried half-relieved you called; she'll ask if you've been eating, when you're visiting, and quietly hope you say 'namimiss kita'.",
    successCriteria: "User uses 'namimiss kita' (or 'namimiss ko po kayo' for full respect) at least once, mentions a plan to visit (bumisita) or call again soon (tumawag), and uses 'po' throughout. Bonus: apologises gently for not calling sooner.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
