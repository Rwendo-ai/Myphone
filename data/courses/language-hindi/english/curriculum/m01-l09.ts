import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-phir-milenge',
  module: 1,
  lesson: 9,
  title: 'Phir Milenge — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Every journey has a farewell. In Hindi, goodbye isn't a final word — it's a promise. 'Phir milenge' means 'we will meet again'. Indians rarely say a sharp 'bye' — they leave a door open, a thread to follow.",
    culturalNote: "'Alvida' (अलविदा) is the dramatic, final-sounding goodbye — Bollywood film farewells, parting forever. Real life uses 'Phir milenge' (we'll meet again) or 'Namaste' (which works as both hello AND goodbye, like Italian 'ciao'). 'Khuda hafiz' is the Urdu-flavoured 'God protect you' — used by Hindi speakers too, especially in Lucknow / Delhi.",
  },

  chunks: [
    {
      id: 'phir_milenge',
      target: 'फिर मिलेंगे',
      native: 'We will meet again (the everyday goodbye)',
      literal: 'Phir milenge — again will-meet',
      emoji: '👋',
      phonetic: 'PHIR mil-EN-gay',
      audioRef: null,
    },
    {
      id: 'alvida',
      target: 'अलविदा',
      native: 'Goodbye (dramatic / final / Bollywood)',
      literal: 'Alvida — Persian-rooted formal farewell',
      emoji: '🎬',
      phonetic: 'al-vi-DAA',
      audioRef: null,
    },
    {
      id: 'khuda_hafiz',
      target: 'खुदा हाफ़िज़',
      native: 'May God protect you (warm goodbye, Urdu-flavoured)',
      literal: 'Khuda hafiz — God protector',
      emoji: '🤲',
      phonetic: 'KHU-daa HAA-fiz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Phir milenge — the open-door goodbye',
    explanation: "Hindi farewells lean toward continuity, not closure. 'Phir milenge' literally promises another meeting. 'Namaste' loops back to the beginning. Even 'Khuda hafiz' is a blessing, not a full stop. Save 'Alvida' for moments that genuinely feel final — most days, use 'Phir milenge'.",
    examples: [
      { target: 'Phir milenge', native: 'We will meet again (everyday goodbye)' },
      { target: 'Alvida', native: 'Goodbye (final, dramatic — use sparingly)' },
      { target: 'Namaste', native: 'Hello / Goodbye (works as both, like ciao)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the farewell to its tone',
      pairs: [
        { left: 'Phir milenge', right: 'We will meet again (everyday)' },
        { left: 'Alvida', right: 'Goodbye (dramatic / final)' },
        { left: 'Khuda hafiz', right: 'May God protect you (warm)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend is leaving the cafe after a normal coffee catch-up. What do you say?",
      question: 'Choose the everyday farewell',
      options: [
        { text: 'Phir milenge', correct: true },
        { text: 'Alvida', correct: false },
        { text: 'Suprabhat', correct: false },
      ],
      explanation: "'Phir milenge' fits an everyday parting. 'Alvida' is dramatic / final — Bollywood territory; 'Suprabhat' is good morning, not goodbye.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the everyday Hindi goodbye",
      sentence: 'Theek hai, _____ milenge!',
      options: ['phir', 'alvida', 'kaise'],
      correct: 'phir',
      context: "You're parting after a normal day's chat — open-door farewell.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'We will meet again (everyday goodbye)',
      correct: ['Phir milenge', 'phir milenge'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "We will meet again, take care"',
      words: ['hai,', 'milenge,', 'Phir', 'apna', 'rakhna', 'khayal'],
      correct: ['Phir', 'milenge,', 'apna', 'khayal', 'rakhna', 'hai,'],
      translation: 'We will meet again, take care of yourself',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'May God protect you (warm Urdu-flavoured goodbye)',
      correct: ['Khuda hafiz', 'khuda hafiz', 'Khudahafiz', 'khudahafiz'],
    },
  ],

  rwenDialogue: {
    intro: "You've spent the afternoon with Rwen at a Mumbai cafe. It's time to head back. You're leaving — Rwen is staying for another chai.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Theek hai, phir milenge!', native: "Okay, we'll meet again!", correct: true, feedback: "Perfect — open-door, warm, everyday. Exactly the right register." },
          { target: 'Alvida', native: 'Goodbye (final)', correct: false, feedback: "Too dramatic for a normal cafe parting — 'Alvida' sounds like you're leaving forever. Use 'Phir milenge'." },
          { target: 'Suprabhat', native: 'Good morning', correct: false, feedback: "That's a greeting, not a farewell. Use 'Phir milenge' to leave warmly." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Phir milenge! Apna khayal rakhna.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You left with a promise of return, not a final goodbye. That's how Hindi keeps friendships alive.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'We will meet again (everyday Hindi goodbye)', correct: ['Phir milenge', 'phir milenge'] },
      { prompt: 'May God protect you (warm farewell)', correct: ['Khuda hafiz', 'khuda hafiz', 'Khudahafiz', 'khudahafiz'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone leaves — a friend, colleague, anyone — say 'Phir milenge' instead of 'bye'. Notice how it leaves the door open.",
    rwenSignoff: "Phir milenge. Until tomorrow.",
  },

  phase8: {
    scenario: "You've spent the whole afternoon at your friend Priya's house in Bandra — chai, samosas, long conversation about her family. It's now early evening and you're standing at her door with your bag, ready to walk to the auto rickshaw stand. Priya is staying. This is the farewell moment, and an Indian-style open-door goodbye matters more than a flat 'bye'.",
    rwenRole: "Priya — your friend, ~30, warm Mumbaikar; she'll smile at a proper Hindi farewell and tease you gently if you go full Bollywood with 'Alvida'.",
    successCriteria: "User says 'Phir milenge' for the parting (NOT the dramatic 'Alvida' which would sound like leaving forever, NOT just English 'bye'), responds gracefully if she returns the same or adds 'Khuda hafiz', and leaves with the open-door tone rather than a hard stop.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
