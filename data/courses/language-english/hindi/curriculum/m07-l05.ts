import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: "I like / I don't like food — पसंद और नापसंद",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "खाने की पसंद-नापसंद। 'I love it', 'I don't like ___', 'It's delicious'। यह वो शब्द हैं जब आप दोस्त को बताते हैं क्या पसंद है।",
    culturalNote: "India में 35-40% लोग शाकाहारी हैं — 'I'm vegetarian' पहचान है। Jain — 'I don't eat root vegetables (no onion, no garlic)'। Brahmin — 'no onion, no garlic'। Hindus — 'I don't eat beef'। Muslim — 'I don't eat pork'। English में clear: 'I don't eat ___' formal, 'I don't really like ___' personal preference। UK dinner party में जब host चिकन serve करे और आप शाकाहारी हों, polite बोलें: 'Thank you, I'm vegetarian — but the rice and vegetables look delicious.' होस्ट का दिल नहीं टूटेगा। 'It's delicious' है compliment — restaurant और घर दोनों जगह।",
  },

  chunks: [
    {
      id: 'i_love_it',
      target: 'I love it',
      native: 'बहुत पसंद है',
      literal: 'Bahut pasand hai',
      emoji: '❤️',
      phonetic: 'ay-LUV-it',
      audioRef: null,
    },
    {
      id: 'i_dont_like',
      target: "I don't like it",
      native: 'पसंद नहीं है',
      literal: 'Pasand nahin hai',
      emoji: '👎',
      phonetic: 'ay-DOHNT-LAYK-it',
      audioRef: null,
    },
    {
      id: 'its_delicious',
      target: "It's delicious",
      native: 'बहुत स्वादिष्ट है',
      literal: 'Bahut swaadisht hai',
      emoji: '😋',
      phonetic: 'its-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Preferences — like, love, don\'t like',
    explanation: "तीन levels: 'I like it' (सादी पसंद), 'I love it' (बहुत पसंद), 'I don't like it' (नापसंद)। 'Really' से force बढ़ाएँ: 'I really like it', 'I really don't like onions'। 'I love' खाने के लिए — किसी person के लिए reserve रखें।",
    examples: [
      { target: 'I love biryani.',                native: 'मुझे बिरयानी बहुत पसंद है।' },
      { target: "I don't really like fish.",    native: 'मछली ज़्यादा पसंद नहीं।' },
      { target: "It's delicious.",              native: 'बहुत स्वादिष्ट है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'पसंद के शब्द मिलाएँ',
      pairs: [
        { left: 'I love it',       right: 'बहुत पसंद' },
        { left: "I don't like it", right: 'पसंद नहीं' },
        { left: "It's delicious",  right: 'स्वादिष्ट' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — बिरयानी पसंद है',
      prompt: 'मुझे बिरयानी बहुत पसंद है।',
      correct: [
        'I love biryani.',
        'I really like biryani.',
        'I love biryani!',
        'i love biryani.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — pork नहीं खाते',
      prompt: 'मुझे pork पसंद नहीं।',
      correct: [
        "I don't like pork.",
        "I don't really like pork.",
        "I don't eat pork.",
        "I don't like pork much.",
        "i don't like pork.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — स्वादिष्ट खाना खा रहे',
      sentence: "Mmm, ____ delicious!",
      options: ["it's", "I am", "they are"],
      correct: "it's",
      context: "खाने के लिए 'It's delicious'।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — biryani बहुत पसंद',
      words: ['I', 'love', 'biryani'],
      correct: ['I', 'love', 'biryani'],
      translation: 'मुझे बिरयानी बहुत पसंद',
    },
    {
      type: 'build_sentence',
      instruction: 'शब्द क्रम में — pork नहीं खाते',
      words: ["like", "I", "pork", "don't"],
      correct: ["I", "don't", "like", "pork"],
      translation: 'मुझे pork पसंद नहीं',
    },
  ],

  rwenDialogue: {
    intro: "London में dinner party पर हैं। होस्ट की बहन ने पूछा कि भारत का कौन-सा खाना पसंद है।",
    lines: [
      { speaker: 'npc', target: "So, what's your favourite food back home?", native: 'भारत में आपकी पसंद का खाना क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I love biryani — it's delicious. Have you tried it?", native: 'मुझे बिरयानी बहुत पसंद है — बहुत स्वादिष्ट। आपने try की?', correct: true,  feedback: 'बढ़िया — खाना बताया, स्वादिष्ट कहा, सवाल भी पूछा।' },
          { target: "I food eat biryani.",                                          native: 'मैं biryani खाना खाता।',                       correct: false, feedback: "'I food eat' English में नहीं। 'I love ___' use करें।" },
          { target: "Biryani yes.",                                                  native: 'बिरयानी हाँ।',                                    correct: false, feedback: "अधूरा — पूरा वाक्य बनाएँ: 'I love biryani'।" },
        ],
      },
      { speaker: 'npc', target: "Oh wow — what's it like?", native: 'अच्छा — कैसी होती है?' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आपने बिरयानी English में explain करने का mauka खोल दिया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I love it (अंग्रेज़ी में)', correct: ['I love it', 'I love it.', 'I really like it', 'i love it'] },
      { prompt: "I don't like it (अंग्रेज़ी में)", correct: ["I don't like it", "I don't like it.", "I do not like it", "i don't like it"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Dinner party की कल्पना करें। English में बोलें: दो खाने जो बहुत पसंद हैं, और एक जो नहीं। 'I love ___' और 'I don't really like ___'।",
    rwenSignoff: "कल — खाना पकाना।",
  },

  phase8: {
    scenario: "You're at a UK dinner party in your friend's London flat. They've cooked something European. Someone asks about your favourite Indian food. Talk about biryani or sadza-equivalent and one dish you don't really eat (e.g. very spicy food, or pork).",
    rwenRole: "Emma, 32, your British friend's housemate. Curious about India, never been. Will ask follow-up questions.",
    successCriteria: "User uses 'I love ___' for at least one Indian dish, uses 'I don't (really) like ___' for one item, optionally uses 'It's delicious'. Conversational, not a lecture.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
