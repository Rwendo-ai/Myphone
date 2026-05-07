import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-onegaishimasu',
  module: 2,
  lesson: 1,
  title: 'お願いします — Please / If You Would',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greetings opened the door. Now we walk through. お願いします (onegaishimasu) is the magic phrase that makes any request land politely — at a station window, a counter, a taxi door. Two seconds, infinite uses.",
    culturalNote: "Japanese politeness is not optional decoration — it's the gear the language runs in. With strangers, the default is です/ます form (the polite verb endings). Dropping into casual speech with someone you've just met can feel as off as walking into a Tokyo office in pyjamas. Default polite, downshift only when invited.",
  },

  chunks: [
    {
      id: 'onegaishimasu',
      target: 'お願いします (onegaishimasu)',
      native: 'Please / If you would',
      literal: 'Honourable-request-do',
      emoji: '🙏',
      phonetic: 'oh-neh-gai-shi-MAHS',
      audioRef: null,
    },
    {
      id: 'kore_onegai',
      target: 'これお願いします (kore onegaishimasu)',
      native: 'This one, please',
      literal: 'This honourable-request-do',
      emoji: '👉',
      phonetic: 'KOH-reh oh-neh-gai-shi-MAHS',
      audioRef: null,
    },
    {
      id: 'hai_douzo',
      target: 'はい、どうぞ (hai, douzo)',
      native: 'Yes, here you go / Please go ahead',
      literal: 'Yes, please',
      emoji: '✋',
      phonetic: 'HAI DOH-zoh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'X + お願いします — the universal request',
    explanation: "Put almost any noun in front of お願いします and you have a polite request. Pointing at a menu item? それお願いします. Need a receipt? レシートお願いします. The phrase carries the politeness — you just supply what you want.",
    examples: [
      { target: 'これお願いします', native: 'This one, please' },
      { target: 'お水お願いします (omizu onegaishimasu)', native: 'Water, please' },
      { target: 'レシートお願いします (reshiito onegaishimasu)', native: 'A receipt, please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'お願いします', right: 'Please / If you would' },
        { left: 'これお願いします', right: 'This one, please' },
        { left: 'はい、どうぞ', right: 'Yes, here you go' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely ask for the item you pointed at',
      sentence: 'これ_____。',
      options: ['お願いします', 'どうぞ', 'はい'],
      correct: 'お願いします',
      context: "You're at a 7-Eleven counter pointing at an onigiri.",
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'Please / If you would',
      correct: ['お願いします', 'おねがいします', 'onegaishimasu', 'Onegaishimasu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Order a coffee politely — arrange the words',
      words: ['お願いします', 'コーヒー'],
      correct: ['コーヒー', 'お願いします'],
      translation: 'Coffee, please',
    },
    {
      type: 'multiple_choice',
      instruction: "You hand over your IC card at a station window. The clerk says 'はい、どうぞ' as he passes it back. What does that mean?",
      question: 'Choose the meaning',
      options: [
        { text: 'Yes, here you go', correct: true },
        { text: 'No, thank you', correct: false },
        { text: 'Excuse me', correct: false },
      ],
      explanation: "'はい、どうぞ' is the standard 'here you go' when something is being handed back or offered — clerks, baristas, conductors all use it.",
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'This one, please',
      correct: ['これお願いします', 'kore onegaishimasu', 'Kore onegaishimasu', 'これおねがいします'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Tokyo train station green window (みどりの窓口). You need a one-way ticket and your Japanese is brand new.",
    lines: [
      {
        speaker: 'npc',
        target: 'いらっしゃいませ。 (irasshaimase)',
        native: 'Welcome (formal greeting from staff).',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'これお願いします', native: 'This one, please (showing the route on phone)', correct: true, feedback: 'Polite, direct, and you let your phone do the heavy lifting. The clerk nods and starts typing.' },
          { target: 'これ', native: 'This', correct: false, feedback: "Just 'これ' alone sounds like a command. Always pair it with お願いします to keep it polite." },
          { target: 'はい', native: 'Yes', correct: false, feedback: "'はい' is fine to acknowledge them — but they need to know what you want. Add お願いします with a gesture." },
        ],
      },
      {
        speaker: 'npc',
        target: '￥2,800円です。',
        native: '2,800 yen, please.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Notice it — you didn\'t need a single verb. お願いします carried the whole request. That\'s the workhorse phrase of the next ten lessons.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please / If you would', correct: ['お願いします', 'おねがいします', 'onegaishimasu', 'Onegaishimasu'] },
      { prompt: 'This one, please', correct: ['これお願いします', 'kore onegaishimasu', 'Kore onegaishimasu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Order something today by pointing and saying "(item) お願いします" — out loud, even at home. Coffee, water, the remote. Feel how the politeness sits at the end of the phrase, not the start.',
    rwenSignoff: 'お願いします unlocks Japan. また明日 — see you tomorrow.',
  },

  phase8: {
    scenario: "You're at the JR East ticket window inside Tokyo Station at 09:15, trying to buy a single Shinkansen seat to Kyoto for the 10:03 Nozomi. The clerk doesn't speak much English and the queue behind you is six people deep. You have about 90 seconds.",
    rwenRole: 'Sato-san — JR ticket clerk, ~45, uniformed, brisk but not rude; she will help anyone who is polite and points clearly, but won\'t indulge a fumbled order while a queue waits.',
    successCriteria: "User opens by pointing at the route on phone or paper and saying 'これお願いします' (NOT bare 'これ' — that's a command, not a request), uses 'お願いします' on the seat-class follow-up, and acknowledges with 'はい' when she confirms 2,800 yen rather than going silent.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
