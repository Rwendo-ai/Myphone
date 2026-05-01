import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-jeepney',
  module: 9,
  lesson: 5,
  title: 'Para po! — Riding a jeepney',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today is a love letter to the jeepney. You climb in the back, knees pressed against a stranger's, and the whole vehicle becomes a tiny society. Coins get passed forward through six hands to the driver. When you want to stop, you say two magic words: PARA PO. Today, you become a jeepney pro.",
    culturalNote: "The jeepney is THE Filipino public transport icon — born from US military jeeps left after WWII, lengthened, painted with saints and dragons and family names. There are no formal stops. You hand your fare to the person nearest the front and call 'Bayad po!' — strangers will pass it down the chain. To get off, you knock the ceiling and shout 'Para po!' Everyone helps. Nobody is annoyed. It's the best part of Manila.",
  },

  chunks: [
    {
      id: 'bayad_po',
      target: 'Bayad po',
      native: "Here's my fare (passing it forward)",
      literal: 'Payment (respectful)',
      emoji: '💰',
      phonetic: 'BAH-yahd poh',
      audioRef: null,
    },
    {
      id: 'para_po',
      target: 'Para po!',
      native: 'Stop, please!',
      literal: 'Stop (respectful)!',
      emoji: '✋',
      phonetic: 'PAH-rah poh',
      audioRef: null,
    },
    {
      id: 'pakisuyong_ipasa',
      target: 'Pakisuyong ipasa',
      native: 'Please pass [the fare]',
      literal: 'Please-favour-the pass',
      emoji: '🤝',
      phonetic: 'pah-kee-soo-YOHNG ee-PAH-sah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Jeepney etiquette — the fare chain',
    explanation: "The jeepney has no conductor. You hand your money to the passenger nearest the front and say 'Bayad po, pakisuyong ipasa' — please pass this forward. They pass it. The next person passes it. The driver gets it. Change comes back the same chain. Nobody pockets anything. It's beautiful.",
    examples: [
      { target: 'Bayad po, isa.', native: "Here's my fare, one [passenger]." },
      { target: 'Pakisuyong ipasa po.', native: 'Please pass it forward (respectful).' },
      { target: 'Para po sa kanto!', native: 'Stop please at the corner!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the jeepney phrase to its meaning',
      pairs: [
        { left: 'Bayad po', right: "Here's my fare" },
        { left: 'Para po!', right: 'Stop, please!' },
        { left: 'Pakisuyong ipasa', right: 'Please pass it' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're 50 meters from your stop. What do you shout?",
      sentence: '_____ po!',
      options: ['Para', 'Bayad', 'Saan'],
      correct: 'Para',
      context: "'Para' = stop. 'Para po!' is the signature jeepney shout.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Here's my fare (the phrase you say handing money forward)",
      correct: ['Bayad po', 'bayad po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "Please pass [my fare] forward"',
      words: ['ipasa', 'Pakisuyong', 'po'],
      correct: ['Pakisuyong', 'ipasa', 'po'],
      translation: 'Please pass it (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "You climb into a jeepney heading to Cubao. You sit at the back. You hand your 12 pesos to the lady in front of you. What do you say?",
      question: 'Pick the natural opener',
      options: [
        { text: 'Bayad po, pakisuyong ipasa.', correct: true },
        { text: 'Para po!', correct: false },
        { text: 'Saan ang Cubao?', correct: false },
      ],
      explanation: "'Bayad po' announces it's a fare; 'pakisuyong ipasa' asks her to relay it forward. Two phrases, one fluent move.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — the shout you use to signal "stop here, please"',
      prompt: 'Stop, please! (jeepney shout)',
      correct: ['Para po!', 'para po', 'Para po'],
    },
  ],

  rwenDialogue: {
    intro: "You're packed into a jeepney heading from Cubao to Quiapo. The route's about to pass your stop. You have 13 pesos in your hand and need to do two things: pay, and signal to stop.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bayad po, pakisuyong ipasa.', native: "Here's my fare, please pass it.", correct: true, feedback: 'Perfect — that\'s exactly the chain. The lady takes it without looking.' },
          { target: 'Bayad', native: 'Payment', correct: false, feedback: "No 'po' = rude. The whole jeepney will side-eye." },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: "Too soon — pay first, signal stop later." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po. (Tatlo pa, dalawa, isa…)',
        native: 'Okay. (Three more passengers, two, one…)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Para po!', native: 'Stop please!', correct: true, feedback: 'Loud, clear. The driver hits the brakes.' },
          { target: 'Saan ang banyo?', native: "Where's the bathroom?", correct: false, feedback: 'Wrong moment entirely!' },
          { target: 'Bayad po', native: "Here's my fare", correct: false, feedback: 'You already paid — now signal the stop.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You did it. Bayad po, then para po. You just rode a jeepney like a Manileño. That's no small thing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Here's my fare (jeepney, respectful)", correct: ['Bayad po', 'bayad po'] },
      { prompt: 'Stop please! (jeepney shout)', correct: ['Para po!', 'para po', 'Para po'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice 'Para po!' out loud — in the shower, on a walk, in your kitchen. When you finally ride your first jeepney, your mouth will already know the word.",
    rwenSignoff: "Para po — until next time. Bukas ulit, kaibigan.",
  },

  phase8: {
    scenario: "You're on a jeepney heading from Cubao to Quiapo. The jeep is packed — five passengers between you and the driver. You need to pay your 13-peso fare and, three minutes later, signal a stop near Quiapo Church. The lady beside you is willing to relay your fare forward, and the driver is listening for the 'Para po!'",
    rwenRole: "Ate Marivic — the jeepney passenger sitting in front of you, ~40, used to relaying fares; she'll wait for your 'Bayad po, pakisuyong ipasa' and pass coins forward. The unseen driver responds to 'Para po!' by braking.",
    successCriteria: "User says 'Bayad po' (with optional 'pakisuyong ipasa') first, then later says 'Para po!' to stop the jeep. Both phrases must appear, in order. 'Po' on both.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
