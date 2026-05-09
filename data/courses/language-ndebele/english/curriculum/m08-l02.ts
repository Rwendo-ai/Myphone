import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02',
  module: 8,
  lesson: 2,
  title: 'Numbers in Money — Kuhlanu Kwemadolari',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Counting money in isiNdebele looks complicated and is — but only for the first hour. The structure is: number + 'kwema-' + currency. Kuhlanu kwemadolari = five (of) dollars. Once you hear the kwema- bridge, every price slots into place.",
    culturalNote: "In Zimbabwe, USD prices are typically rounded to whole dollars or the half-dollar (US$0.50, US$1, US$2, US$5). Coins are rare and disliked — vendors will round up or hand you sweets as change. ZiG prices are messier (ZiG37, ZiG142). For travellers, USD is king — and a wallet of US$1, US$2, and US$5 bills is more useful than US$20s, which nobody can break.",
  },

  chunks: [
    {
      id: 'kunye',
      target: 'Kunye',
      native: 'One',
      literal: 'class-15 numeral — used for prices',
      emoji: '1️⃣',
      phonetic: 'KOO-nyeh',
      audioRef: null,
    },
    {
      id: 'kubili',
      target: 'Kubili',
      native: 'Two',
      emoji: '2️⃣',
      phonetic: 'koo-BEE-lee',
      audioRef: null,
    },
    {
      id: 'kuhlanu',
      target: 'Kuhlanu',
      native: 'Five',
      emoji: '5️⃣',
      phonetic: 'koo-SHLAH-noo',
      audioRef: null,
    },
    {
      id: 'idola_one',
      target: 'Idola elilodwa',
      native: 'One dollar',
      literal: 'idola (dollar) + elilodwa (single, lone) — used for "$1"',
      emoji: '💵',
      phonetic: 'ee-DOH-lah eh-lee-LOH-dwah',
      audioRef: null,
    },
    {
      id: 'kuhlanu_dollars',
      target: 'Kuhlanu kwemadolari',
      native: 'Five dollars',
      literal: 'kuhlanu (five) + kwema- (of the) + dolari (dollars)',
      emoji: '💸',
      phonetic: 'koo-SHLAH-noo kweh-mah-doh-LAH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Number + kwema- + currency',
    explanation: "To say 'five dollars' you bridge the number to the noun with 'kwema-' (literally 'of the'). Kuhlanu kwemadolari. Kubili kwemadolari (two dollars). Kuthathu kwemadolari (three). The number stays the same; the currency word takes the kwema- prefix to mean 'of'. For ZiG you say 'kwama-ZiG' or just 'i-ZiG' — younger speakers often drop the bridge entirely and say 'ZiG forty' in mixed isiNdebele-English.",
    examples: [
      { target: 'Kunye kwedolari', native: 'One dollar (lit. one of dollar)' },
      { target: 'Kuhlanu kwemadolari', native: 'Five dollars' },
      { target: 'I-ZiG amatshumi amane', native: '40 ZiG (forty ZiG)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the price to its English',
      pairs: [
        { left: 'Kunye', right: 'One' },
        { left: 'Kubili', right: 'Two' },
        { left: 'Kuhlanu', right: 'Five' },
        { left: 'Kuhlanu kwemadolari', right: 'Five dollars' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Vendor says: "two dollars"',
      sentence: 'Kubili ____.',
      options: ['kwemadolari', 'idola', 'imali'],
      correct: 'kwemadolari',
      context: "Kubili kwemadolari — Two dollars.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Five dollars',
      correct: ['Kuhlanu kwemadolari', 'kuhlanu kwemadolari', 'Kuhlanu kwemadolari.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You hand over a US$20 bill for a US$3 item. Why does the vendor look pained?',
      question: 'Most likely real-world reason:',
      options: [
        { text: 'US$20 bills are hard to break — most stalls have no change for them.', correct: true },
        { text: 'US$20 is illegal currency in Zimbabwe.', correct: false },
        { text: "She doesn't recognise US dollars.", correct: false },
      ],
      explanation: "USD is fully legal and preferred — but small bills are gold. Carry US$1s, US$2s and US$5s. A US$20 at a small stall means a 10-minute hunt for change, often topped up with sweets or an IOU.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a curio stall in Bulawayo's Centenary Park. A small soapstone hippo catches your eye.",
    lines: [
      { speaker: 'user', target: 'Imalini?', native: 'How much?' },
      { speaker: 'npc', target: 'Kuhlanu kwemadolari.', native: 'Five dollars.' },
      { speaker: 'rwen', rwenLine: "Listen for the structure: kuhlanu (five) + kwemadolari (of dollars). What's she asking for in numerals?" },
      {
        speaker: 'user',
        userChoices: [
          { target: 'US$5', native: '$5', correct: true, feedback: "Right. Kuhlanu = 5, kwemadolari = USD. You hand over a US$5 bill — exact, no change needed. She smiles." },
          { target: 'US$50', native: '$50', correct: false, feedback: "No — kuhlanu is five (5), not fifty. Fifty is amatshumi amahlanu. We'll get there in lesson 8." },
          { target: 'ZiG5', native: '5 ZiG', correct: false, feedback: "She said kwemadolari — 'of dollars'. If she meant ZiG she'd have said kwama-ZiG. Five US dollars." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Number + kwema- + currency. That's the whole formula. Now you can hear any price under ten.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'One', correct: ['Kunye', 'kunye'] },
      { prompt: 'Two', correct: ['Kubili', 'kubili'] },
      { prompt: 'Five', correct: ['Kuhlanu', 'kuhlanu'] },
      { prompt: 'Five dollars', correct: ['Kuhlanu kwemadolari', 'kuhlanu kwemadolari'] },
    ],
  },

  mission: {
    title: 'Stack five small bills',
    task: "Before any Zimbabwe trip, ask your bank for US$1, US$2 and US$5 bills — at least US$50 worth in small notes. Today, count out 'kuhlanu kwemadolari' as you stack five $1 bills. Say it as you stack: kunye, kubili, kuthathu, kune, kuhlanu — kuhlanu kwemadolari.",
    rwenSignoff: "Small bills, big mouth. Tomorrow we learn to push back when the price is too high.",
  },

  phase8: {
    scenario: "Curio stall in Centenary Park, Bulawayo. The vendor has soapstone carvings priced between US$3 and US$10. You ask the price of two items in isiNdebele numbers and confirm whether you've understood the dollar amount correctly.",
    rwenRole: "Baba Sibanda — soapstone carver, 60s, took up the trade after losing his mining job in 2008. Speaks slowly, repeats numbers if asked.",
    successCriteria: "User asks 'Imalini?' for at least one item, hears the price in 'kuhlanu/kubili/kuthathu kwemadolari' format, and correctly states the USD amount back. No need to bargain yet — that's lesson 4.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
