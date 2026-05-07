import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Numbers 11-100 — Eleven to One Hundred',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अब बड़ी संख्याएँ — 11-100। अंग्रेज़ी का pattern आसान है: 'twenty, thirty, forty...' और बीच की संख्या hyphen से जोड़ें — 'twenty-five', 'forty-seven'।",
    culturalNote: "हिंदी की 1-100 का pattern अनोखा है — हर संख्या almost अलग शब्द (इक्कीस, बाईस, तेईस, चौबीस... तीस, इकत्तीस... अड़तालीस... सैंतालीस)। Memorize करना पड़ता है। English बहुत आसान — सिर्फ़ 1-19, फिर 'twenty', 'thirty'... के साथ basic numbers। '25' = 'twenty-five' (बीस-पाँच) — patterns आसान। हिंदी से English सीखने वालों के लिए यह बड़ी राहत है।",
  },

  chunks: [
    {
      id: 'eleven_nineteen',
      target: 'Eleven, twelve, thirteen, fourteen, fifteen',
      native: '11, 12, 13, 14, 15',
      literal: 'Gyaarah, baarah, terah, chaudah, pandrah',
      emoji: '1️⃣2️⃣',
      phonetic: 'ee-LEH-vn, twelv, THUR-teen, FOR-teen, FIF-teen',
      audioRef: null,
    },
    {
      id: 'tens',
      target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
      native: '20, 30, 40, 50, 60, 70, 80, 90',
      literal: 'Bees, tees, chaalis, pachaas, saath, sattar, assi, nabbe',
      emoji: '🔢',
      phonetic: 'TWEN-tee, THUR-tee, FOR-tee, FIF-tee...',
      audioRef: null,
    },
    {
      id: 'one_hundred',
      target: 'One hundred',
      native: 'सौ',
      literal: 'Sau',
      emoji: '💯',
      phonetic: 'wun-HUN-dred',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tens + units pattern',
    explanation: "Pattern: tens का शब्द (twenty, thirty) + hyphen + unit (one to nine)। '21' = 'twenty-one', '47' = 'forty-seven', '99' = 'ninety-nine'। ध्यान दें: 'thirteen' (13) और 'thirty' (30) सुनने में मिलते-जुलते हैं — पर अलग हैं।",
    examples: [
      { target: 'Twenty-five',   native: 'पच्चीस' },
      { target: 'Forty-seven',   native: 'सैंतालीस' },
      { target: 'Ninety-nine',   native: 'निन्यानवे' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'संख्याएँ मिलाएँ',
      pairs: [
        { left: 'Twelve',     right: '12' },
        { left: 'Thirty',     right: '30' },
        { left: 'Fifty-five', right: '55' },
        { left: 'One hundred', right: '100' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'तैंतीस (33)',
      correct: ['Thirty-three', 'thirty-three', 'Thirty three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Tens का pattern पूरा करें',
      sentence: 'Twenty, thirty, ____, fifty, sixty.',
      options: ['fourty', 'forty', 'fortie'],
      correct: 'forty',
      context: '40 = "forty" (ध्यान दें — "u" नहीं: "fourty" ग़लत है)।',
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — phone number दे रहे हैं',
      words: ['is', 'My', 'seven', 'six', 'two', 'eight', 'three', 'number'],
      correct: ['My', 'number', 'is', 'seven', 'six', 'eight', 'two', 'three'],
      translation: 'मेरा नंबर 7-6-8-2-3 है।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं पच्चीस साल का हूँ (25)',
      correct: ["I am twenty-five years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'सौ (100)',
      correct: ['One hundred', 'one hundred', 'A hundred', 'a hundred'],
    },
  ],

  rwenDialogue: {
    intro: 'बेंगलुरु के cafe में नई दोस्त मिली। वो आपका phone number माँग रही है ताकि बाद में text भेज सके।',
    lines: [
      { speaker: 'npc', target: "What's your phone number?", native: 'आपका phone number क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's nine eight, four hundred, ninety-six, twenty-three.",   native: '98-400-96-23',    correct: true,  feedback: 'बढ़िया — आपने tens और hundreds अच्छे से बोले। यही natural English style है phone number बोलने का।' },
          { target: "Nine eight four nine six two three.",                          native: '9-8-4-9-6-2-3',      correct: false, feedback: 'यह भी चलता है, पर American style में grouping ज़्यादा natural है — फिर try करें।' },
          { target: "My number.",                                                     native: 'मेरा नंबर।',     correct: false, feedback: 'आपने नंबर नहीं बोला — digits बताएँ।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Tens और hundreds आ गईं। अब किसी भी English-speaker को phone number दे सकते हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Forty-two (अंग्रेज़ी में)', correct: ['Forty-two', 'forty-two', 'Forty two', 'forty two'] },
      { prompt: 'Thirteen (thirty नहीं!) (अंग्रेज़ी में)', correct: ['Thirteen', 'thirteen'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: 'आज अपना phone number English में तीन बार बोलें — चाहे ख़ुद से ही सही। Tens-units पर ध्यान दें: 25, 47, 89।',
    rwenSignoff: "Phone number deशी identity है — अब हर देश में चलेगी। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You met an English-speaking expat at a cafe in Bangalore's Indiranagar and she wants your phone number to invite you to a hike on Saturday. Exchange numbers and ages — say your age and ask hers.",
    rwenRole: "Sarah, 32, a British expat working at a tech company. Friendly, asks follow-up questions, will share her own number back.",
    successCriteria: "User says their phone number using English numbers (combined as tens where natural — e.g., 'ninety-eight, four hundred...'), states their age in English, and asks for Sarah's age or number back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
