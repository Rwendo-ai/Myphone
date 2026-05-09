import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03',
  module: 3,
  lesson: 3,
  title: 'Numbers 11 to 20 and counting higher',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Once you can say ten — itshumi — you can build every number up to a hundred with one small word: 'lo'. It means 'and'. Eleven is literally 'ten and one'. Most learners never realise how cheap this is.",
    culturalNote: "In schools across Matabeleland, primary teachers drill the 11–20 range as a chant: 'itshumi lokunye, itshumi lokubili, itshumi lokuthathu...' If you learn it as a chant, the rhythm carries you through. This is also where you first meet noun-class concord: the counting prefix 'ku-' shifts depending on what you are counting.",
  },

  chunks: [
    {
      id: 'itshumi_lokunye',
      target: 'itshumi lokunye',
      native: 'eleven',
      literal: 'ten and one',
      emoji: '🔢',
      phonetic: 'ee-CHOO-mee loh-KOO-nyeh',
      audioRef: null,
    },
    {
      id: 'itshumi_lokubili',
      target: 'itshumi lokubili',
      native: 'twelve',
      literal: 'ten and two',
      emoji: '🔢',
      phonetic: 'ee-CHOO-mee loh-koo-BEE-lee',
      audioRef: null,
    },
    {
      id: 'amatshumi_amabili',
      target: 'amatshumi amabili',
      native: 'twenty',
      literal: 'two tens',
      emoji: '2️⃣0️⃣',
      phonetic: 'ah-mah-CHOO-mee ah-mah-BEE-lee',
      audioRef: null,
    },
    {
      id: 'ikhulu',
      target: 'ikhulu',
      native: 'one hundred',
      literal: 'a hundred',
      emoji: '💯',
      phonetic: 'ee-KOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Concord — numbers agree with what they count',
    explanation: "Two big rules unlock all numbers above ten. First, 11 to 19 = 'itshumi lo-' + a number. The 'lo-' is a contraction of 'la' (and) + the prefix on the number. Second, 20, 30, 40 take a plural form of ten: 'amatshumi' (tens), then a matching number — 'amabili' (two), 'amathathu' (three). Notice the prefix on the number changes: 'kubili' becomes 'amabili' to agree with 'amatshumi'. This is concord — the heartbeat of every Bantu language.",
    examples: [
      { target: 'itshumi lokuthathu', native: '13 (ten and three)' },
      { target: 'amatshumi amathathu', native: '30 (three tens)' },
      { target: 'amatshumi amane lokuhlanu', native: '45 (four tens and five)' },
      { target: 'ikhulu', native: '100' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each number to its value',
      pairs: [
        { left: 'itshumi lokunye', right: '11' },
        { left: 'itshumi lokuhlanu', right: '15' },
        { left: 'amatshumi amabili', right: '20' },
        { left: 'amatshumi amathathu', right: '30' },
        { left: 'ikhulu', right: '100' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: thirteen = ten and three',
      sentence: 'itshumi lo_____',
      options: ['kuthathu', 'kubili', 'kuhlanu'],
      correct: 'kuthathu',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Why does "two" change from "kubili" (in 2) to "amabili" (in 20 = amatshumi amabili)?',
      options: [
        { text: 'Concord — the number agrees with the noun "amatshumi" (tens), so its prefix changes to match.', correct: true },
        { text: "It's a typo — they should both be 'kubili'.", correct: false },
        { text: 'Numbers above 10 are completely irregular.', correct: false },
      ],
      explanation: "Concord is the rule: in 'amatshumi amabili', the 'a-' on the number mirrors the 'ama-' on tens. This pattern repeats across the language — adjectives, possessives, numbers all shift to match the noun's class.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele (use lowercase)',
      prompt: '20',
      correct: ['amatshumi amabili'],
    },
  ],

  rwenDialogue: {
    intro: "You're paying for groceries at a small shop in Hillside, Bulawayo. The shopkeeper reads off the total.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yi-amatshumi amathathu lokuhlanu, sicela.',
        native: "It's thirty-five, please.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Amatshumi amathathu lokuhlanu, kulungile', native: 'Thirty-five, alright', correct: true, feedback: "You parsed it right — three tens (30) plus five (lokuhlanu) = 35. She hands you change." },
          { target: 'Itshumi', native: 'Ten', correct: false, feedback: "She said 'amatshumi' (tens, plural) not 'itshumi' (one ten) — listen for the 'ama-' prefix that signals plural." },
          { target: 'Ikhulu', native: 'One hundred', correct: false, feedback: "Way too high — 'ikhulu' is 100. She said 35." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, ngiyabonga.',
        native: 'Yes, thank you.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Tens (amatshumi) plus a unit (lokuhlanu, lokuthathu...) — that pattern carries you to ninety-nine.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'eleven', correct: ['itshumi lokunye', 'Itshumi lokunye'] },
      { prompt: 'twenty', correct: ['amatshumi amabili', 'Amatshumi amabili'] },
      { prompt: 'one hundred', correct: ['ikhulu', 'Ikhulu'] },
    ],
  },

  mission: {
    title: 'Build a number ladder',
    task: "Say out loud: 1, 5, 10, 15, 20, 50, 100 in isiNdebele. Then count from itshumi lokunye to amatshumi amabili (11 to 20) in one breath if you can.",
    rwenSignoff: "Concord scared you for ten seconds, then it set you free.",
  },

  phase8: {
    scenario: "You're paying at a small shop in Hillside. The shopkeeper gives you a total between 15 and 75 dollars in isiNdebele. You repeat it back to confirm, then ask for change politely.",
    rwenRole: "Mr Moyo, ~55, shopkeeper — patient, will repeat the number more slowly if you ask",
    successCriteria: "User correctly parsed a two-digit total (e.g. amatshumi amathathu lokuhlanu = 35) and read it back accurately, OR asked for it to be repeated using a phrase from earlier modules.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
