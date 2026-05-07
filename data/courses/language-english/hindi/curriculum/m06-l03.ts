import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Hundreds, Thousands, Millions — और lakh-crore का गड़बड़',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "बड़ी संख्याएँ: 'one thousand, ten thousand, one million, one billion'। यह English दुनिया का तरीक़ा है — गाड़ी के दाम, salary, business deals, सबकुछ इसी से।",
    culturalNote: "यहाँ हिंदी से English सीखने वालों के लिए सबसे बड़ी मुश्किल। हम बोलते हैं 'एक लाख' (1,00,000), 'एक करोड़' (1,00,00,000) — comma 5 digit बाद। English में 'lakh' और 'crore' नहीं! वो लोग हज़ार-लाख-करोड़ नहीं, thousand-million-billion में सोचते हैं — comma 3 digit बाद। '1 lakh' = '100 thousand' (एक सौ हज़ार)। '1 crore' = '10 million' (एक करोड़ = सौ लाख)। '1 billion' = '100 crore'। US tourist को कभी मत बोलिए '50 lakh rupees' — कहो '5 million rupees' या उन्हें calculator दिखाओ। यह एक life-saving conversion है।",
  },

  chunks: [
    {
      id: 'one_thousand',
      target: 'One thousand',
      native: 'एक हज़ार',
      literal: 'Ek hazaar',
      emoji: '🔢',
      phonetic: 'wun-THOW-zand',
      audioRef: null,
    },
    {
      id: 'ten_thousand',
      target: 'Ten thousand',
      native: 'दस हज़ार',
      literal: 'Das hazaar',
      emoji: '💵',
      phonetic: 'ten-THOW-zand',
      audioRef: null,
    },
    {
      id: 'one_million',
      target: 'One million',
      native: 'दस लाख (one million)',
      literal: 'Das lakh — note the gap',
      emoji: '💰',
      phonetic: 'wun-MIL-yon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Large numbers — no plural; lakh→thousand conversion',
    explanation: "जब संख्या के साथ hundred/thousand/million बोलें — 's' मत लगाएँ: 'two hundred', 'five thousand', 'ten million'। पर बिना संख्या के 's' लगता है: 'hundreds of people', 'thousands of dollars'। **Lakh-Crore conversion**: 1 lakh = 100,000 = one hundred thousand। 1 crore = 10,000,000 = ten million। हमेशा याद: 1 lakh = 100k, 1 crore = 10 million, 100 crore = 1 billion।",
    examples: [
      { target: 'Two thousand rupees',         native: 'दो हज़ार रुपये' },
      { target: 'Five hundred people',          native: 'पाँच सौ लोग' },
      { target: 'Five lakh = five hundred thousand', native: 'पाँच लाख = पाँच सौ हज़ार (English में)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'बड़ी संख्याएँ मिलाएँ',
      pairs: [
        { left: 'One thousand',  right: '1,000' },
        { left: 'Ten thousand',  right: '10,000 (1 lakh = 1,00,000 = one hundred thousand)' },
        { left: 'One million',   right: '1,000,000 (= 10 lakh)' },
        { left: 'One billion',   right: '1,000,000,000 (= 100 crore)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'दो हज़ार रुपये (2,000)',
      correct: ['Two thousand rupees', 'two thousand rupees'],
    },
    {
      type: 'fill_blank',
      instruction: 'सही form चुनें — संख्या या s?',
      sentence: 'I bought it for five ____ rupees.',
      options: ['hundreds', 'hundred', 'hundred of'],
      correct: 'hundred',
      context: 'Five (specific number) के बाद no "s": "five hundred rupees"। "Hundreds" बिना संख्या के use होता है।',
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — flat का दाम बता रहे हैं',
      words: ['is', 'flat', 'fifty', 'lakh', 'The', 'rupees.'],
      correct: ['The', 'flat', 'is', 'fifty', 'lakh', 'rupees.'],
      translation: 'फ़्लैट पचास लाख रुपये का है।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — एक US tourist को flat का दाम बता रहे हैं',
      prompt: 'पचास लाख रुपये (= 5 million rupees, US speaker को साफ़ हो)',
      correct: ['Five million rupees', 'five million rupees', 'About 50 lakh — that\'s 5 million rupees'],
    },
    {
      type: 'multiple_choice',
      instruction: 'सही form चुनें',
      question: 'Which is correct?',
      options: [
        { text: 'Three hundred rupees',   correct: true },
        { text: 'Three hundreds rupees',  correct: false },
        { text: 'Three of hundred rupees', correct: false },
      ],
      explanation: 'संख्या (three) के बाद hundred पर "s" नहीं। "Hundreds" बिना संख्या के — "hundreds of rupees"।',
    },
  ],

  rwenDialogue: {
    intro: 'आपके US-based cousin Mumbai आए हैं — flat ख़रीदने के बारे में बात कर रहे। आपको दाम बताना है पर वो "lakh" नहीं समझेंगे।',
    lines: [
      { speaker: 'npc', target: "How much was the new flat?", native: 'नया फ़्लैट कितने का था?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "About sixty lakh rupees — that's six million in your terms.",     native: 'लगभग साठ लाख रुपये — यानी आपकी भाषा में 6 million।', correct: true,  feedback: 'बिल्कुल बढ़िया — आपने lakh भी बताया, US-friendly conversion भी दे दी। यह bridge perfect है।' },
          { target: "Sixty lakhs.",          native: '60 लाख।',                                       correct: false, feedback: 'US cousin "lakh" नहीं समझेगा। बेहतर: "About sixty lakh — that\'s six million rupees."' },
          { target: "Many money.",                        native: 'बहुत पैसा।',                            correct: false, feedback: 'साफ़ नहीं — और "many money" ग़लत है (money uncountable, "much money")। संख्या दें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Lakh ↔ million का bridge आपने बना लिया। अब किसी US/UK वाले को कभी confused नहीं छोड़ेंगे।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Five thousand rupees (अंग्रेज़ी में)', correct: ['Five thousand rupees', 'five thousand rupees'] },
      { prompt: '1 lakh = ___ thousand (in English)', correct: ['One hundred thousand', 'one hundred thousand', 'hundred thousand', '100 thousand'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: 'सोचिए कोई US dollar में price बताए — $10,000 = कितने lakh रुपये? ($10,000 ≈ ₹8 lakh आज के rate से)। आज एक US/UK price आते दिख जाए तो mind में convert करें।',
    rwenSignoff: "बड़ी संख्याएँ thousand-million से चलती हैं — आपने bridge बना लिया।",
  },

  phase8: {
    scenario: "You're discussing salaries with a new English-speaking colleague at a Bangalore IT office (he's just relocated from London). Talk about salary ranges in your industry — using thousand and million figures. Be vague where polite (use 'about'). Help him understand the lakh→thousand conversion.",
    rwenRole: "David, 40, a senior accountant who just moved from London. Curious about Indian salaries. Polite, will share approximate salary ranges himself, won't push for precise numbers. Doesn't know lakh/crore.",
    successCriteria: "User uses 'thousand' or 'million' correctly (no 's' after a number), uses 'about' or 'around' for approximation, and either asks David's salary range or shares their own. Bridges 'lakh' to 'thousand' or 'million' for clarity.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
