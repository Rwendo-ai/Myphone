import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-chhe-bees',
  module: 6,
  lesson: 2,
  title: 'Chhe se Bees — Numbers 6 to 20',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Now it gets harder. Six to twenty in Hindi is not 'six, seven, eight... ten plus one, ten plus two'. Each number is its own word. Gyarah (11) sounds nothing like 'das ek'. Bees (20) is its own thing. There is no shortcut here — only memorisation. The good news: 6 to 10 is short, and rhyme helps with the rest.",
    culturalNote: "Indian shopkeepers and auto drivers will quote prices in numbers like 'pachees' (25) or 'pacchas' (50) all day. The numbers become part of the city's heartbeat. Once you can hear 'gyarah rupaye' and not freeze, you've crossed a line.",
  },

  chunks: [
    {
      id: 'chhe_saat_aath',
      target: 'छह / सात / आठ',
      native: 'Six / Seven / Eight',
      literal: 'Chhe (6), Saat (7), Aath (8)',
      emoji: '6️⃣7️⃣8️⃣',
      phonetic: 'CHHEH / SAAT / AATH',
      audioRef: null,
    },
    {
      id: 'nau_das',
      target: 'नौ / दस',
      native: 'Nine / Ten',
      literal: 'Nau (9), Das (10)',
      emoji: '9️⃣🔟',
      phonetic: 'NOW / DUSS',
      audioRef: null,
    },
    {
      id: 'gyarah_bees',
      target: 'ग्यारह / बीस',
      native: 'Eleven / Twenty',
      literal: 'Gyarah (11 — irregular), Bees (20 — irregular)',
      emoji: '1️⃣1️⃣2️⃣0️⃣',
      phonetic: 'GYAA-rah / BEES',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'No -teen, no -ty: each number is its own word',
    explanation: "English builds 'eleven, twelve, thirteen, fourteen' on a clear pattern. Hindi does NOT. Gyarah (11), baarah (12), terah (13), chaudah (14), pandrah (15), solah (16), satrah (17), atharah (18), unnees (19), bees (20). Memorise. There is no decoding. The vague rhyme of '...rah' helps for 11–15, but 16–19 each have their own shape.",
    examples: [
      { target: 'Gyarah baje hain.', native: "It's 11 o'clock." },
      { target: 'Bees rupaye, please.', native: 'Twenty rupees, please.' },
      { target: 'Mujhe pandrah samose chahiye.', native: 'I want fifteen samosas.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi number to its English value',
      pairs: [
        { left: 'Chhe', right: 'Six' },
        { left: 'Das', right: 'Ten' },
        { left: 'Bees', right: 'Twenty' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the count from 8 to 11',
      sentence: 'Aath, nau, das, _____.',
      options: ['gyarah', 'bees', 'paanch'],
      correct: 'gyarah',
      context: 'Eight, nine, ten, eleven.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Ten',
      correct: ['Das', 'das'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why is Hindi 11 (gyarah) so different from das + ek?",
      question: "Which is true about Hindi numbers 11–20?",
      options: [
        { text: 'Each one is a unique non-compositional word — there is no formula', correct: true },
        { text: "It's just das + the digit, like English 'ten-one'", correct: false },
        { text: 'They follow the same pattern as numbers 1–10', correct: false },
      ],
      explanation: "Hindi numbers 11–99 are largely irregular and have to be memorised one by one. This is the major learner challenge of the module.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Twenty rupees, please'",
      words: ['Bees', 'rupaye,', 'please.'],
      correct: ['Bees', 'rupaye,', 'please.'],
      translation: 'Twenty rupees, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Eleven',
      correct: ['Gyarah', 'gyarah'],
    },
  ],

  rwenDialogue: {
    intro: "An auto driver in Delhi quotes a fare. You need to repeat the number back to confirm.",
    lines: [
      {
        speaker: 'npc',
        target: 'बीस रुपये।',
        native: 'Twenty rupees.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bees? Theek hai.', native: 'Twenty? Okay.', correct: true, feedback: "You repeated the number to confirm — perfect auto-driver habit. Driver nods, meter on." },
          { target: 'Twenty rupees? Okay.', native: 'Twenty rupees? Okay (in English)', correct: false, feedback: "Stay in Hindi — repeat the number: 'Bees? Theek hai.'" },
          { target: 'Kitne?', native: 'How many?', correct: false, feedback: "He just told you the price. Confirm by repeating: 'Bees? Theek hai.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bees rupaye. You confirmed an auto fare in Hindi. The first of many.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Nine', correct: ['Nau', 'nau'] },
      { prompt: 'Twenty', correct: ['Bees', 'bees'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from 1 to 10 in Hindi out loud right now: ek, do, teen, chaar, paanch, chhe, saat, aath, nau, das. Then say 'gyarah' (11) and 'bees' (20). Memorise the irregular shapes — they're going to come up everywhere.",
    rwenSignoff: "Das. You've reached ten. Bees. You've leapt to twenty. The path between is the hard climb. Phir milenge.",
  },

  phase8: {
    scenario: "Outside Connaught Place metro station in Delhi at 9pm. You're hailing an autorickshaw to Khan Market and the driver quotes a fare somewhere between gyarah (11) and bees (20) — you need to repeat the price back, push back if it's too high, and confirm in Hindi without falling back to English digits.",
    rwenRole: "Auto driver in his late 30s, parked at the Connaught Place rank; he'll quote a slightly inflated number to test if you understand, and drop it only if you repeat the Hindi number back and push for a lower one in Hindi.",
    successCriteria: "User repeats at least one number from 6–20 back accurately in Hindi (e.g. 'Bees? Pandrah, please?'), uses 'kitne' or 'theek hai' to manage the exchange, and confirms a final fare without saying the digits in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
