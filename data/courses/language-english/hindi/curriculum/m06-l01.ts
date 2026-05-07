import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Numbers 1-10 — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 6 शुरू — numbers। रोज़ की चीज़। पहले 1-10 English में: One, Two, Three... Ten।",
    culturalNote: "हिंदी में 'दो आम', 'तीन कुर्सियाँ' — जब noun बदलता है, gender या वचन से कुछ शब्द बदलते हैं ('एक लड़का', 'एक लड़की' — संख्या same, पर noun gender)। English बहुत आसान है: 'three apples', 'three children', 'three rupees' — three सबके साथ same। कोई बदलाव नहीं। यही पहली राहत है।",
  },

  chunks: [
    {
      id: 'one_five',
      target: 'One, two, three, four, five',
      native: 'एक, दो, तीन, चार, पाँच',
      literal: 'Ek, do, teen, chaar, paanch',
      emoji: '🖐️',
      phonetic: 'wun, too, three, for, fyv',
      audioRef: null,
    },
    {
      id: 'six_ten',
      target: 'Six, seven, eight, nine, ten',
      native: 'छह, सात, आठ, नौ, दस',
      literal: 'Chhah, saat, aath, nau, das',
      emoji: '🔟',
      phonetic: 'siks, SEH-vn, ayt, nyn, ten',
      audioRef: null,
    },
    {
      id: 'how_many',
      target: 'How many?',
      native: 'कितने?',
      literal: 'Kitne?',
      emoji: '❓',
      phonetic: 'how-MEH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cardinal counting',
    explanation: "अंग्रेज़ी में संख्याएँ noun के साथ नहीं बदलतीं — 'three apples', 'three children', 'three rupees' — three हमेशा three। हिंदी जैसा कोई gender या plural-form change नहीं। एक form याद कर लें — सबके साथ चलेगा।",
    examples: [
      { target: 'Three children',  native: 'तीन बच्चे' },
      { target: 'Three apples',    native: 'तीन सेब' },
      { target: 'Three rupees',    native: 'तीन रुपये' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी संख्याओं को हिंदी से मिलाएँ',
      pairs: [
        { left: 'One',   right: 'एक' },
        { left: 'Five',  right: 'पाँच' },
        { left: 'Ten',   right: 'दस' },
        { left: 'Seven', right: 'सात' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'तीन',
      correct: ['Three', 'three'],
    },
    {
      type: 'fill_blank',
      instruction: 'अगली संख्या भरें',
      sentence: 'One, two, three, ____, five.',
      options: ['four', 'five', 'six'],
      correct: 'four',
      context: 'Sequence: 1-2-3-4-5.',
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — संख्या पूछ रहे हैं',
      words: ['many', 'are', 'How', 'they?'],
      correct: ['How', 'many', 'are', 'they?'],
      translation: 'कितने हैं?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — सेब गिन रहे हैं',
      prompt: 'आठ सेब',
      correct: ['Eight apples', 'eight apples'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'दो',
      correct: ['Two', 'two'],
    },
  ],

  rwenDialogue: {
    intro: 'आप दिल्ली के सब्ज़ी मंडी में हैं। English-speaking दुकानदार से आम ख़रीद रहे हैं।',
    lines: [
      { speaker: 'npc', target: "How many mangoes do you want?", native: 'कितने आम चाहिए?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Five, please.',          native: 'पाँच, please.',    correct: true,  feedback: 'बढ़िया — short और clear। "Five" + "please" perfect।' },
          { target: 'Many.',                  native: 'बहुत सारे।',             correct: false, feedback: 'साफ़ नहीं — दुकानदार को नहीं पता कितने। संख्या बोलें।' },
          { target: 'I want mango.',          native: 'मुझे आम चाहिए।',     correct: false, feedback: 'सवाल का जवाब नहीं — संख्या पूछी थी।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '1-10 ही नींव हैं। हर ख़रीदारी इन्हीं से शुरू।',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Seven (अंग्रेज़ी में)', correct: ['Seven', 'seven'] },
      { prompt: 'How many? (अंग्रेज़ी में)', correct: ['How many?', 'How many', 'how many?', 'how many'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: 'अभी पाँच चीज़ें English में गिनें: "one chair, two cups, three pens..." आज तीन बार करें।',
    rwenSignoff: 'Numbers हर कहानी की रीढ़ हैं — पैसा, समय, लोग। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You're at a fresh produce market in Delhi and a tourist stall owner speaks only English. Buy a few items by counting them aloud — mangoes, tomatoes, oranges. Use numbers 1-10 to specify quantity for each item.",
    rwenRole: "Sunita ji, 45, a friendly market stall owner who has worked with English-speaking customers for years. She'll ask 'how many?' for each item.",
    successCriteria: "User uses at least three different numbers between 1 and 10 to specify quantities, says 'How many?' or responds to it correctly, and completes the purchase politely (with 'please' or 'thank you').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
