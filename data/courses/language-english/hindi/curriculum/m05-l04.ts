import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — दादा-दादी, नाना-नानी',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "हिंदी में हम पिता के माता-पिता को 'दादा-दादी' और माँ के माता-पिता को 'नाना-नानी' कहते हैं — दो अलग शब्द। अंग्रेज़ी में सब एक हो जाता है: 'grandmother', 'grandfather'। बारीकी ख़त्म नहीं होती — आप clarify कर सकते हैं — पर default में same शब्द चलता है।",
    culturalNote: "Joint family में दादा-दादी रोज़ की ज़िंदगी का हिस्सा होते हैं — कहानियाँ, संस्कार, अनुशासन सब उनसे आता है। UK/US में grandparents ज़्यादातर अलग रहते हैं — साल में 2-3 बार मिलते हैं। जब आप अपने दादा या नाना की बात English-speaking दोस्त से करें, तो आप उन्हें कहानियों में जिलाते हैं — 'My grandmother used to make the best samosas' — यह wisdom-passing का तरीक़ा है। शब्द short हैं, पर भावना पूरी आती है।",
  },

  chunks: [
    {
      id: 'grandmother',
      target: 'Grandmother',
      native: 'दादी / नानी',
      literal: 'Dadi / Nani',
      emoji: '👵🏽',
      phonetic: 'GRAND-muh-thuh',
      audioRef: null,
    },
    {
      id: 'grandfather',
      target: 'Grandfather',
      native: 'दादा / नाना',
      literal: 'Dada / Nana',
      emoji: '👴🏽',
      phonetic: 'GRAND-fah-thuh',
      audioRef: null,
    },
    {
      id: 'grandchild',
      target: 'Grandchild',
      native: 'पोता-पोती / नाती-नातिन',
      literal: 'Pota-poti / naati-naatin',
      emoji: '🧒🏽',
      phonetic: 'GRAND-chayld',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Generational — grand- prefix',
    explanation: "अंग्रेज़ी में 'grand-' prefix एक पीढ़ी ऊपर/नीचे दिखाता है। Grandmother = माँ की माँ या पिता की माँ। Grandchild = बेटे/बेटी का बच्चा। Plural: 'grandparents' (नियमित), 'grandchildren' (irregular — 'children' की तरह)।",
    examples: [
      { target: 'My grandmother',     native: 'मेरी दादी / मेरी नानी' },
      { target: 'My grandfather',     native: 'मेरे दादा / मेरे नाना' },
      { target: 'My grandchildren',   native: 'मेरे पोते-पोतियाँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Grandmother',  right: 'दादी / नानी' },
        { left: 'Grandfather',  right: 'दादा / नाना' },
        { left: 'Grandchild',   right: 'पोता-पोती' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरी दादी गाँव में रहती हैं।',
      correct: ['My grandmother lives in the village.', 'My grandmother lives in the village', 'my grandmother lives in the village.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — कहानी सुना रहे हैं',
      prompt: 'मेरे दादाजी ने मुझे कहानी सुनाई।',
      correct: ['My grandfather told me a story.', 'My grandfather told me a story', 'my grandfather told me a story.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My grandmother used to sing"',
      words: ['used', 'My', 'sing.', 'grandmother', 'to'],
      correct: ['My', 'grandmother', 'used', 'to', 'sing.'],
      translation: 'मेरी दादी गाती थीं',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — irregular plural',
      sentence: 'My grandparents have five _____ in total.',
      options: ['grandchilds', 'grandchildren', 'grandchildrens'],
      correct: 'grandchildren',
      context: "'Children' irregular है — इसलिए 'grandchildren' भी irregular है। 's' या 'es' नहीं लगता।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'आप English-speaking दोस्त को नानी की कोई बात बता रहे हैं। शुरुआत कैसे करेंगे?',
      options: [
        { text: "My grandmother used to say...",      correct: true },
        { text: "Nani said always...",                 correct: false },
        { text: "Grandmother of me say always...",     correct: false },
      ],
      explanation: "'My grandmother used to say' — past habit के लिए perfect। यह कहानियों की शुरुआत का English तरीक़ा है।",
    },
  ],

  rwenDialogue: {
    intro: 'English-speaking दोस्त के साथ coffee पर हैं। आपने नानी की एक सीख का ज़िक्र किया।',
    lines: [
      { speaker: 'npc', target: "You said your grandmother taught you something important — tell me.", native: 'आपने कहा था कि नानी ने कुछ ज़रूरी सिखाया — बताइए।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My grandmother used to say: 'A patient person eats ripe fruit.' She told me that often.", native: 'मेरी नानी कहती थीं: "धीरज रखने वाला पका फल खाता है।" वो ये अक्सर कहती थीं।', correct: true, feedback: "बढ़िया — 'My grandmother used to say' से proper शुरुआत हुई, और आपने proverb भी English में पकड़ी। संस्कार English में जीवित।" },
          { target: "Grandmother says fruit ripe wait people.",                                                  native: 'दादी कहती फल पका इंतज़ार लोग।',                                                                    correct: false, feedback: "मतलब है पर शब्द बिखरे हुए — English में 'sense' नहीं बना। आसान करें: 'used to say...'" },
          { target: "Nani kehti thi...",                                                                          native: 'नानी कहती थी...',                                                                                          correct: false, feedback: "हिंदी ही रह गई — दोस्त नहीं समझेगा। English में: 'My grandmother used to say...'" },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — was she from the village?", native: 'बहुत प्यारा — क्या वो गाँव से थीं?' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने नानी की कहानी English में जिला दी — संस्कार बच गया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My grandmother (अंग्रेज़ी में)',  correct: ['My grandmother', 'my grandmother'] },
      { prompt: 'My grandfather (अंग्रेज़ी में)',  correct: ['My grandfather', 'my grandfather'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "दादी/नानी या दादा/नाना ने जो सिखाया, उनमें से एक चीज़ सोचें। Phone notes में English में लिखें: 'My grandmother used to say...' या 'My grandfather taught me...' ज़ोर से पढ़ें।",
    rwenSignoff: "कल — चाचा-चाची, मामा-मामी, ताया-ताई (aunts and uncles) — हिंदी की richness यहाँ मज़ेदार है।",
  },

  phase8: {
    scenario: "You're sharing a memory of your grandmother's wisdom with an English-speaking friend over coffee. Tell them what she used to say or do, and why it stayed with you.",
    rwenRole: "Anna, 35, your friend who loves family stories. Listens warmly and asks follow-ups like 'What was she like?' or 'Do you still remember her voice?'",
    successCriteria: "User uses 'grandmother' or 'grandfather' at least twice. Uses past form like 'used to say' or 'told me'. Shares a specific memory or saying — not a vague 'she was nice'. Avoids dropping into Hindi.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
