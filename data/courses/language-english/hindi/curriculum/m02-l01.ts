import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — कृपया',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! Module 2 शुरू होता है 'survival phrases' से — वो शब्द जो आपको बचाते हैं जब आप खो जाते हैं या समझ नहीं पाते। पहले तीन: 'Please', 'Excuse me', और 'Sorry'.",
    culturalNote: "हिन्दी में 'कृपया' थोड़ा भारी शब्द है — formal request में आता है, रोज़ की बातचीत में 'ज़रा' या tone से ही काम चल जाता है। English में 'Please' बहुत हल्का और बहुत common है — एक चाय माँगते वक़्त भी लगाना पड़ता है। अगर 'please' छोड़ दिया, तो आप order करते हुए लगते हैं — जैसे boss बोल रहा हो।",
  },

  chunks: [
    {
      id: 'please',
      target: 'Please',
      native: 'कृपया',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'PLEEZ',
      audioRef: null,
    },
    {
      id: 'excuse_me',
      target: 'Excuse me',
      native: 'सुनिए / माफ़ कीजिए',
      literal: 'Excuse-me / Pardon-me',
      emoji: '✋',
      phonetic: 'eks-KYOOZ-mee',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry',
      native: 'माफ़ कीजिए',
      literal: 'I-am-sorry',
      emoji: '😔',
      phonetic: 'SOH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness markers',
    explanation: "English में तीन अलग-अलग शब्द तीन अलग कामों के लिए हैं: 'Please' request को नरम करता है, 'Excuse me' किसी का ध्यान खींचने या रास्ता माँगने के लिए, और 'Sorry' तब जब आपसे ग़लती हो गई। तीनों एक साथ नहीं चलते — situation देखकर एक चुनिए।",
    examples: [
      { target: 'A coffee, please.',           native: 'एक coffee, कृपया।' },
      { target: 'Excuse me, where is the door?', native: 'सुनिए, दरवाज़ा कहाँ है?' },
      { target: "Sorry, I'm late.",             native: 'माफ़ कीजिए, मुझे देर हो गई।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Please',     right: 'कृपया' },
        { left: 'Excuse me',  right: 'सुनिए' },
        { left: 'Sorry',      right: 'माफ़ कीजिए' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आप Dubai airport के cafe में coffee order कर रहे हैं',
      prompt: 'एक coffee, कृपया।',
      correct: ['A coffee, please.', 'A coffee please.', 'Coffee, please.', 'Coffee please.', 'a coffee, please.'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — आप किसी के सामने से निकलना चाहते हैं',
      sentence: '____, can I pass?',
      options: ['Please', 'Excuse me', 'Sorry'],
      correct: 'Excuse me',
      context: "English में रास्ता माँगने के लिए 'Excuse me' लगता है, 'Sorry' नहीं।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप देर के लिए माफ़ी माँग रहे हैं',
      words: ['Sorry', 'I', 'am', 'late'],
      correct: ['Sorry', 'I', 'am', 'late'],
      translation: 'माफ़ कीजिए, मुझे देर हो गई',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'सुनिए',
      correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'सबसे सही जवाब चुनिए',
      question: "आप अपने manager के cabin में घुसे, पर वो phone पर हैं। उनका ध्यान खींचने के लिए क्या कहेंगे?",
      options: [
        { text: 'Excuse me.', correct: true },
        { text: 'Sorry.',     correct: false },
        { text: 'Please.',    correct: false },
      ],
      explanation: "'Excuse me' interruption या ध्यान खींचने के लिए है। 'Sorry' तब जब आपने कुछ ग़लत किया हो — यहाँ कुछ नहीं हुआ।",
    },
  ],

  rwenDialogue: {
    intro: 'आप Dubai airport के cafe में हैं। transit लम्बी है, coffee चाहिए। barista सिर्फ़ English बोलता है। order कीजिए।',
    lines: [
      { speaker: 'npc', target: 'Hi, what can I get you?', native: 'नमस्ते, क्या लेंगे आप?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A coffee, please.',          native: 'एक coffee, कृपया।',           correct: true,  feedback: "बढ़िया — 'please' ने आपकी request को polite बना दिया।" },
          { target: 'Coffee.',                     native: 'Coffee।',                    correct: false, feedback: "थोड़ा rude लगता है — 'please' लगाइए ताकि request लगे, order नहीं।" },
          { target: 'Sorry, a coffee.',            native: 'माफ़ कीजिए, एक coffee।',     correct: false, feedback: "आपने कुछ ग़लत नहीं किया — 'Sorry' की ज़रूरत नहीं। 'please' use कीजिए।" },
        ],
      },
      { speaker: 'npc', target: 'Coming right up.', native: 'अभी लाता हूँ।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'Please' हिन्दी की 'कृपया' से हल्का है — but यहाँ ज़रूरी है। एक छोटा शब्द, बड़ा फ़र्क।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Please (in English)',    correct: ['Please', 'please', 'Please.', 'please.'] },
      { prompt: 'Excuse me (in English)', correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज एक बार English में 'please' use कीजिए — चाहे दोस्त से पानी माँगते वक़्त ही सही। ध्यान दीजिए कि मुँह से कैसा निकलता है।",
    rwenSignoff: "कल मिलते हैं — कल हम thank you सीखेंगे।",
  },

  phase8: {
    scenario: "You walk into a busy cafe at Dubai airport during a long transit. The barista is English-speaking and slightly rushed. Order a coffee politely, using 'please' and 'excuse me' or 'sorry' if needed.",
    rwenRole: "Mike, 24, the barista. Friendly but efficient — a queue is forming behind you. Speaks fast, casual English.",
    successCriteria: "User uses 'please' when ordering, uses 'excuse me' to get attention OR 'sorry' if they need to apologise (e.g. for changing their order). Doesn't bark a one-word order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
