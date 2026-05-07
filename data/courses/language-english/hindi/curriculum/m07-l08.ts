import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-shona-food',
  module: 7,
  lesson: 8,
  title: 'Sharing Indian food in English — रोटी, थाली, बिरयानी',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "विदेशी दोस्त को थाली, रोटी, बिरयानी कैसे बताएँ। हिंदी नाम बचाएँ — फिर short English explanation जोड़ें। यह आप ambassador बनते हैं अपनी संस्कृति के।",
    culturalNote: "महत्वपूर्ण: 'Roti' को 'Indian bread' मत कहो — 'Roti — it's a flatbread, like a tortilla but unleavened' कहो। 'Thali' को 'Indian platter' न कहो — 'Thali — it's a metal plate with multiple small bowls of dal, sabzi, rice, roti, and pickle.' Right-hand eating tradition explain करें: 'In India, we traditionally eat with our right hand — it's part of the experience.' US/UK में हाथ से खाने वाले आज भी देख कर surprise हो जाते हैं — पर अब Indian restaurants में it's accepted। 'Chai' जैसे 'sushi', 'pizza', 'paella' का अपना नाम है — translate मत करो। बस explain।",
  },

  chunks: [
    {
      id: 'roti',
      target: "Roti — Indian flatbread",
      native: 'रोटी',
      literal: 'Roti (unleavened flatbread)',
      emoji: '🥙',
      phonetic: 'ROH-tee',
      audioRef: null,
    },
    {
      id: 'thali',
      target: 'Thali — a metal plate with many small dishes',
      native: 'थाली',
      literal: 'Thali (round metal plate)',
      emoji: '🍽️',
      phonetic: 'THAH-lee',
      audioRef: null,
    },
    {
      id: 'biryani',
      target: 'Biryani — spiced rice with meat or vegetables',
      native: 'बिरयानी',
      literal: 'Biryani',
      emoji: '🍛',
      phonetic: 'bir-YAH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming foreign foods — keep the Hindi name, then explain',
    explanation: "Pattern: <हिंदी नाम> — <short English explanation>। नाम translate नहीं करते। 'Roti — it's a flatbread', 'Thali — a metal plate with many small dishes', 'Biryani — spiced rice'। Right-hand eating add: 'We traditionally eat with our right hand'।",
    examples: [
      { target: 'Roti is a flatbread, similar to a tortilla but unleavened.',          native: 'रोटी एक flatbread है — tortilla जैसी पर बिना खमीर।' },
      { target: 'Thali is a round metal plate with many small bowls of food.',          native: 'थाली एक गोल धातु की प्लेट है जिसमें कई कटोरियाँ होती हैं।' },
      { target: 'Biryani is spiced rice cooked with meat or vegetables.',                    native: 'बिरयानी मसाले डाली चावल — meat या सब्ज़ी के साथ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'हिंदी नाम और English explanation मिलाएँ',
      pairs: [
        { left: 'Roti',      right: 'Indian flatbread' },
        { left: 'Thali',   right: 'Plate with many small dishes' },
        { left: 'Biryani',  right: 'Spiced rice with meat or vegetables' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — रोटी explain',
      prompt: 'रोटी एक flatbread है।',
      correct: [
        'Roti is a flatbread.',
        'Roti is an Indian flatbread.',
        'Roti is a thin flatbread.',
        'Roti is a flatbread, similar to a tortilla.',
        'roti is a flatbread.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — थाली explain',
      prompt: 'थाली एक धातु की प्लेट है जिसमें कई कटोरियाँ होती हैं।',
      correct: [
        'Thali is a metal plate with many small bowls.',
        'Thali is a metal plate with several small bowls.',
        'Thali is a round metal plate with many bowls.',
        'thali is a metal plate with many small bowls.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — UK दोस्त को बताएँ खाने का तरीक़ा',
      sentence: 'In India, we traditionally eat ____ our right hand.',
      options: ['with', 'in', 'on'],
      correct: 'with',
      context: "'With our right hand' = दाएँ हाथ से। यह Indian eating tradition है।",
    },
    {
      type: 'build_sentence',
      instruction: 'थाली explain',
      words: ['plate', 'small', 'A', 'with', 'thali', 'is', 'bowls'],
      correct: ['A', 'thali', 'is', 'plate', 'with', 'small', 'bowls'],
      translation: 'थाली एक प्लेट है जिसमें छोटी कटोरियाँ',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "UK दोस्त ने रोटी पूछा। आप हिंदी नाम बचाते हुए explain करना चाहते हैं।",
      options: [
        { text: "It's called roti — it's a thin Indian flatbread, like a tortilla.", correct: true },
        { text: "It's bread basically.",                                  correct: false },
        { text: "Indian thing.",                                             correct: false },
      ],
      explanation: "'It's called roti' से नाम protect किया, फिर explanation। 'Bread basically' से अपनी identity खोते हैं।",
    },
  ],

  rwenDialogue: {
    intro: "London में dinner party पर हैं। किसी ने पूछा भारत का main खाना क्या है। थाली और बिरयानी explain करें।",
    lines: [
      { speaker: 'npc', target: "I've never had Indian food. What's the main thing you eat?", native: 'मैंने कभी Indian खाना नहीं खाया। मुख्य खाना क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thali — it's a metal plate with many small bowls of dal, rice, sabzi, and roti. We eat with our right hand.", native: 'थाली — एक धातु की प्लेट जिसमें दाल, चावल, सब्ज़ी, रोटी की कटोरियाँ होती हैं। हम दाएँ हाथ से खाते हैं।', correct: true,  feedback: 'बढ़िया — हिंदी नाम बचाया, explanation दी, eating tradition भी।' },
          { target: "Indian platter basically.",                                                                       native: 'Indian platter।',                                       correct: false, feedback: "'Thali' को नाम बचाएँ — translate नहीं करें।" },
          { target: "Food.",                                                                                     native: 'खाना।',                                                  correct: false, feedback: "बहुत कम — मौक़ा था explain करने का।" },
        ],
      },
      { speaker: 'npc', target: "Right hand? Wow — tell me more about that.", native: 'दाएँ हाथ से? वाह — और बताइए।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आप अपनी संस्कृति के ambassador बने।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Thali is a metal plate with many small bowls (अंग्रेज़ी में)', correct: ['Thali is a metal plate with many small bowls', 'Thali is a metal plate with many small bowls.', 'Thali is a plate with many small bowls', 'thali is a metal plate with many small bowls.'] },
      { prompt: 'Roti is a flatbread (अंग्रेज़ी में)', correct: ['Roti is a flatbread', 'Roti is a flatbread.', 'Roti is an Indian flatbread', 'roti is a flatbread.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "थाली, रोटी, या बिरयानी एक choose करें। English में explain करें ज़ोर से — हिंदी नाम बचाएँ। Pattern: नाम, '—', short explanation।",
    rwenSignoff: "कल — मेहमाननवाज़ी।",
  },

  phase8: {
    scenario: "Highlight lesson. You're at a dinner party in London. A British colleague who's never been to India is genuinely curious about Indian food. Explain thali and roti using the Hindi names — don't translate them away.",
    rwenRole: "Hannah, 38, your colleague's wife. Asks thoughtful follow-ups: 'How do you eat it?', 'What does it taste like?', 'Is roti hard to make?'. Genuinely interested.",
    successCriteria: "User keeps the Hindi names ('thali', 'roti', 'biryani') intact, follows each name with a brief English explanation, handles at least one follow-up question, mentions right-hand eating tradition. Doesn't reduce roti to 'Indian bread' or thali to 'platter'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
