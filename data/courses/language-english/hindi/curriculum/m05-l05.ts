import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Aunts & Uncles — चाचा, मामा, बुआ, मौसी',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "यहाँ हिंदी और English का सबसे बड़ा फ़र्क़ है। हिंदी में हर रिश्ते के लिए अलग शब्द — चाचा (पिता का छोटा भाई), ताया (पिता का बड़ा भाई), मामा (माँ का भाई), फूफा (बुआ का पति)। बुआ, मौसी, चाची, ताई, मामी — सब के अलग नाम। English सब को एक ही शब्द में लपेट देती है: 'aunt', 'uncle'।",
    culturalNote: "हिंदी की family-vocabulary दुनिया में सबसे rich है। चाचा रोज़ रात खाने पर साथ बैठते थे — मामा शादी पर सबसे आगे dance करते थे — मौसी आपको अपनी बेटी की तरह संभालती थी — हर रिश्ते का अलग रंग। English-speaker से बात करते वक़्त, यह nuance शब्दों में नहीं आ सकता — पर आप explain कर सकते हैं: 'my uncle — my father's younger brother — we call him chacha'। इस तरह आप अपनी संस्कृति को English में जिलाते हैं, न कि उसे ख़त्म करते।",
  },

  chunks: [
    {
      id: 'aunt',
      target: 'Aunt',
      native: 'चाची / बुआ / मौसी / मामी',
      literal: 'Chachi / Bua / Mausi / Maami — collapsed',
      emoji: '👩🏽‍🦱',
      phonetic: 'AHNT (or ANT)',
      audioRef: null,
    },
    {
      id: 'uncle',
      target: 'Uncle',
      native: 'चाचा / ताया / मामा / फूफा',
      literal: 'Chacha / Taya / Mama / Foofa — collapsed',
      emoji: '👨🏽‍🦱',
      phonetic: 'UN-kuhl',
      audioRef: null,
    },
    {
      id: 'cousin',
      target: 'Cousin',
      native: 'चचेरा/ममेरा/फुफेरा/मौसेरा भाई-बहन',
      literal: 'Cousin — gender-neutral, no age distinction',
      emoji: '🧑🏽',
      phonetic: 'KUH-zin',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kinship complexity — clarifying with English',
    explanation: "अंग्रेज़ी में 'aunt' = चाची, बुआ, मौसी, मामी सब। 'Uncle' = चाचा, ताया, मामा, फूफा सब। बारीकी बचाने के लिए जोड़ें: 'my aunt on my father's side' (= चाची/बुआ), 'my mother's younger sister' (= छोटी मौसी)। 'Cousin' gender-neutral — 'male cousin' / 'female cousin' formal contexts में चलता है।",
    examples: [
      { target: 'My aunt (my father\'s sister)',         native: 'मेरी बुआ' },
      { target: 'My uncle (my mother\'s brother)',       native: 'मेरे मामा' },
      { target: 'My cousin (my aunt\'s child)',          native: 'मेरी कज़न, बुआ का बच्चा' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Aunt',                    right: 'चाची / बुआ' },
        { left: 'Uncle',                   right: 'चाचा / मामा' },
        { left: 'Cousin',                  right: 'चचेरा भाई/बहन' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त को बुआ के बारे में बताएँ',
      prompt: 'मेरी बुआ जयपुर में रहती हैं।',
      correct: ['My aunt lives in Jaipur.', "My aunt — my father's sister — lives in Jaipur.", 'My aunt lives in Jaipur', 'my aunt lives in Jaipur.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरे मामा ने मुझे गाड़ी चलाना सिखाया।',
      correct: ["My uncle — my mother's brother — taught me to drive.", "My uncle, my mother's brother, taught me to drive.", "My maternal uncle taught me to drive."],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My cousin is my aunt\'s son"',
      words: ['son.', 'My', 'is', "aunt's", 'cousin', 'my'],
      correct: ['My', 'cousin', 'is', 'my', "aunt's", 'son.'],
      translation: 'मेरा कज़न बुआ का बेटा है',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — मामा को describe कर रहे हैं',
      sentence: 'This is my uncle, on my _____ side.',
      options: ['mother', "mother's", 'mothers'],
      correct: "mother's",
      context: "'My mother's side' — apostrophe-s दिखाता है कि रिश्ता माँ के पक्ष से है। Tricky पर ज़रूरी।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही choose करें — हिंदी और English दोनों को संभालता हो',
      question: "शादी में, अपनी बुआ को विदेशी मेहमान से मिलवा रहे हैं। क्या कहेंगे?",
      options: [
        { text: "This is my aunt — my father's sister.",   correct: true },
        { text: "This is my bua.",                          correct: false },
        { text: "This my father sister woman.",              correct: false },
      ],
      explanation: "'This is my aunt — my father's sister' दोनों भाषा को मिला देता है: 'aunt' = English form, 'my father's sister' = हिंदी की बारीकी। आप nothing खो रहे, सब share कर रहे।",
    },
  ],

  rwenDialogue: {
    intro: "आप चचेरे भाई की शादी में हैं। English-speaking मेहमान को अपने रिश्तेदारों से मिलवाना है। बुआ और ताया से शुरू करें।",
    lines: [
      { speaker: 'npc', target: "Who is everyone? Help me understand!", native: 'सब कौन हैं? समझाइए!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my aunt — my father's sister, we call her 'bua'. And this is my uncle on my father's side, my taya.", native: 'ये मेरी बुआ हैं — पिता की बहन। और ये मेरे ताया हैं — पिता के बड़े भाई।', correct: true, feedback: "बढ़िया — आपने English (aunt/uncle) और हिंदी (bua/taya) दोनों दिखाए। मेहमान आपकी family की richness समझ गया।" },
          { target: "This my aunt. This my uncle. Different.",                                                                                native: 'ये बुआ। ये ताया। अलग।',                                                                       correct: false, feedback: "बहुत छोटा — 'my father's sister' या 'my mother's brother' जोड़ें ताकि बारीकी आए।" },
          { target: "Bua aur taya.",                                                                                                          native: 'बुआ और ताया।',                                                                                                  correct: false, feedback: "हिंदी-only — मेहमान नहीं समझेगा। English से शुरू करें।" },
        ],
      },
      { speaker: 'npc', target: "Wow — Hindi has so many names for family. I love that.", native: 'वाह — हिंदी में परिवार के लिए कितने नाम! मुझे अच्छा लगा।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने हिंदी की richness English में पहुँचा दी — कुछ खोया नहीं, बल्कि explain किया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: "My aunt — my father's sister (अंग्रेज़ी में)", correct: ["My aunt — my father's sister", "My aunt - my father's sister", "My aunt, my father's sister"] },
      { prompt: 'My cousin (अंग्रेज़ी में)',                     correct: ['My cousin', 'my cousin'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक चाचा या मौसी choose करें जो पास के हैं। Phone में English में लिखें: 'My aunt — my [father's/mother's] sister — lives in [place].' या 'My uncle on my [father's/mother's] side works as [job].' देखें कि बारीकी English में कैसे आती है।",
    rwenSignoff: "कल — सास-ससुर (in-laws)। यहाँ संस्कृति की बारीकी फिर आएगी।",
  },

  phase8: {
    scenario: "You're at a family wedding in Delhi. A foreign guest is curious about who everyone is. Introduce at least one aunt and one uncle, and explain — using English — the Hindi kinship distinction (paternal vs maternal side).",
    rwenRole: "James, 40, a guest from the UK who is fascinated by Indian family structure. Asks 'Wait — is that another aunt? How are they different?' and listens with genuine curiosity.",
    successCriteria: "User uses 'my aunt' or 'my uncle' AND clarifies the side (e.g. 'on my father's side' or 'my mother's brother'). Captures at least one Hindi nuance in English. Doesn't simply translate 'chacha' as 'uncle' without context.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
