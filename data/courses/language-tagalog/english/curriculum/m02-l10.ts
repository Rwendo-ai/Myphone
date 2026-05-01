import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "You did it — nine lessons of survival Tagalog. Today there's nothing new. We stitch the whole module into one real moment: a jeepney that broke down on EDSA, a Tagalog-only mechanic, no signal, no English. You handle it.",
    culturalNote: "Real Tagalog survival isn't one phrase — it's the FLOW: paumanhin po → hindi ko maintindihan → pakidahan-dahan → magkano → pakitulong → opo / hindi po. The chunks chain. This lesson is the chain.",
  },

  chunks: [
    {
      id: 'paumanhin_po_review',
      target: 'Paumanhin po',
      native: 'Excuse me (formal)',
      literal: 'Forgiveness + respect',
      emoji: 'BOW',
      phonetic: 'pa-oo-MAN-hin POH',
      audioRef: null,
    },
    {
      id: 'pakitulong_review',
      target: 'Pakitulong po, naliligaw ako',
      native: "Please help, I'm lost",
      literal: 'Please-help + respect, getting-lost I',
      emoji: 'MAP',
      phonetic: 'pa-ki-TOO-long POH na-li-li-GAW a-KO',
      audioRef: null,
    },
    {
      id: 'hindi_ko_maintindihan_review',
      target: 'Hindi ko maintindihan, pakidahan-dahan po',
      native: "I don't understand, slowly please",
      literal: 'Not by-me understandable, please-slowly + respect',
      emoji: 'TURTLE',
      phonetic: 'hin-DEE ko ma-in-tin-DEE-han pa-ki-DA-han DA-han POH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full survival flow',
    explanation: "The chain: open with 'paumanhin po' (interrupt politely), state the problem ('naliligaw ako' / 'hindi ko maintindihan'), ask for the fix ('pakitulong' / 'pakidahan-dahan' / 'pakiulit'), confirm with 'opo' / 'hindi po'. Six chunks, infinite combinations, every Manila problem solved.",
    examples: [
      { target: 'Paumanhin po, hindi ko maintindihan. Pakiulit po', native: "Excuse me, I didn't understand. Please repeat" },
      { target: 'Pakitulong po, naliligaw ako. Saan ang MRT?', native: "Please help, I'm lost. Where's the MRT?" },
      { target: 'Magkano po ito? Sobrang mahal — pwede ba 200?', native: 'How much? Too expensive — can it be 200?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the survival situation it solves',
      pairs: [
        { left: 'Paumanhin po', right: 'Need to interrupt politely' },
        { left: 'Hindi ko maintindihan', right: "Speaker went too fast" },
        { left: 'Pakitulong po, naliligaw ako', right: "Stranded and need directions" },
        { left: 'Magkano po ito?', right: 'Asking the price' },
        { left: 'Saklolo!', right: 'Real emergency' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Jeepney broke down. Mechanic walks over speaking only Tagalog. Open the conversation politely.",
      sentence: '_____ po, hindi ko maintindihan.',
      options: ['Paumanhin', 'Saklolo', 'Magkano'],
      correct: 'Paumanhin',
      context: "'Paumanhin' is the polite opener — 'saklolo' is for emergencies, 'magkano' is for prices.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (formal)',
      prompt: "Excuse me, I'm lost. Please help",
      correct: ['Paumanhin po, naliligaw ako. Pakitulong po', 'paumanhin po, naliligaw ako. pakitulong po', 'Paumanhin po naliligaw ako pakitulong po', 'paumanhin po naliligaw ako pakitulong po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask the mechanic to slow down',
      words: ['po', 'maintindihan,', 'Hindi', 'ko', 'pakidahan-dahan'],
      correct: ['Hindi', 'ko', 'maintindihan,', 'pakidahan-dahan', 'po'],
      translation: "I don't understand, slowly please",
    },
    {
      type: 'multiple_choice',
      instruction: "The mechanic says the repair will be 1500 pesos. You think 800 is fair. What's the move?",
      question: 'Which combo opens the haggle properly?',
      options: [
        { text: 'Sobrang mahal — pwede ba 800 po?', correct: true },
        { text: 'Hindi po, salamat', correct: false },
        { text: 'Saklolo!', correct: false },
      ],
      explanation: "'Sobrang mahal' is the haggle opener; 'pwede ba ___ po' is your counter-price softened with 'po'. 'Hindi po, salamat' walks away; 'saklolo' starts a panic.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (full polite chain)',
      prompt: "I don't understand, slowly please",
      correct: ["Hindi ko maintindihan, pakidahan-dahan po", "hindi ko maintindihan, pakidahan-dahan po", "Hindi ko maintindihan pakidahan-dahan po", "hindi ko maintindihan pakidahan-dahan po", "Hindi ko maintindihan, pakidahan dahan po", "hindi ko maintindihan, pakidahan dahan po"],
    },
  ],

  rwenDialogue: {
    intro: "Your jeepney from Cubao to Crossing breaks down on EDSA. Smoke from the hood. The driver pops out, a Tagalog-only mechanic walks over from a nearby shop. No English. No signal. Just you.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, hindi ko maintindihan. Pakidahan-dahan po', native: "Excuse me, I don't understand. Slowly please", correct: true, feedback: "The full opener. Polite, honest, asks for the fix." },
          { target: 'Saklolo!', native: 'Help! (emergency)', correct: false, feedback: "Way too dramatic — the jeepney's just broken, no one's hurt." },
          { target: 'How much?', native: '(English)', correct: false, feedback: "He doesn't speak English — that was the whole point." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah sige, dahan-dahan: sira ang makina, kailangan tig-isang oras',
        native: 'Ah okay, slowly: the engine\'s broken, it\'ll take an hour',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magkano po ang ayos?', native: 'How much for the repair (formal)?', correct: true, feedback: "Excellent — slowing him down worked, now ask the price." },
          { target: 'Opo', native: 'Yes (respectful)', correct: false, feedback: "You agreed to something you didn't price. He'll quote whatever he wants now." },
          { target: 'Naliligaw ako', native: "I'm lost", correct: false, feedback: "Wrong problem — you know where you are, you just need the engine fixed." },
        ],
      },
      {
        speaker: 'npc',
        target: '1500 po',
        native: '1500 sir',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sobrang mahal po — pwede ba 800?', native: 'Too expensive — can it be 800?', correct: true, feedback: "The haggle opener with 'po' — respectful AND firm." },
          { target: 'Sige po, salamat', native: 'Okay sir, thank you', correct: false, feedback: "Tourist tax accepted. Always counter the first number." },
          { target: 'Hindi po', native: 'No (formal)', correct: false, feedback: 'Walking away with no counter-offer leaves the jeepney broken on EDSA.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at you. Broken jeepney, Tagalog-only mechanic, no signal — and you negotiated. That's the whole module right there. Module 2: complete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — these are your full survival chains.',
    prompts: [
      {
        prompt: "Excuse me, I'm lost. Please help (formal)",
        correct: ['Paumanhin po, naliligaw ako. Pakitulong po', 'paumanhin po, naliligaw ako. pakitulong po', 'Paumanhin po naliligaw ako pakitulong po', 'paumanhin po naliligaw ako pakitulong po'],
      },
      {
        prompt: "I don't understand, slowly please (formal)",
        correct: ["Hindi ko maintindihan, pakidahan-dahan po", "hindi ko maintindihan, pakidahan-dahan po", "Hindi ko maintindihan pakidahan-dahan po", "hindi ko maintindihan pakidahan-dahan po", "Hindi ko maintindihan, pakidahan dahan po", "hindi ko maintindihan, pakidahan dahan po"],
      },
      {
        prompt: 'How much is this? Too expensive (full polite haggle)',
        correct: ['Magkano po ito? Sobrang mahal', 'magkano po ito? sobrang mahal', 'Magkano po ito sobrang mahal', 'magkano po ito sobrang mahal'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 2 Final",
    task: "Imagine the worst Manila travel day: lost, broke jeepney, broken English. Run the whole chain in your head — paumanhin po → hindi ko maintindihan → pakitulong po → magkano → sobrang mahal → opo. If you can do it cold, you've earned it.",
    rwenSignoff: "Module 2 tapos na — Module 2 done. Galing mo, kaibigan. Tara sa Module 3.",
  },

  phase8: {
    scenario: "Your jeepney from Cubao to Crossing has broken down on EDSA at 4pm. Smoke is rising from the hood. The driver popped out and a Tagalog-only mechanic from a nearby shop has walked over. Your phone's at 3% battery. You don't share a language with him — except what Module 2 taught you. Negotiate the repair: figure out the problem, the time, and the price.",
    rwenRole: "Mang Pedro — roadside jeepney mechanic, late 50s, gruff but fair, speaks zero English; quotes 1500 to anyone in panic and 800 to anyone who haggles in Tagalog with the right tone.",
    successCriteria: "User chains AT LEAST 4 of Module 2's tools across the conversation: (1) 'paumanhin po' opener, (2) 'hindi ko maintindihan' + 'pakidahan-dahan po' to slow him down, (3) 'magkano po' to ask the price, (4) 'sobrang mahal — pwede ba ___' counter-offer. Tone stays respectful ('po') throughout. Walks away with the price under 1000.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
