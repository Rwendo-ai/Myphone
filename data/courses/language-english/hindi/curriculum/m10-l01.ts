import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Happy & Sad — ख़ुशी और उदासी',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "हिंदी में हम 'दिल भारी है', 'मन मायूस है', 'दिल बाग़-बाग़ है' — emotions अक्सर शरीर से जोड़ते। English में direct: 'I'm happy', 'I'm sad'। बिना नाटक — सीधी बात।",
    culturalNote: "Bollywood ने emotions बड़े-नाटकीय बनाए — 'दिल टूट गया!', 'जान निकल जाएगी!'। यह melodrama Indian films की पहचान। पर असल English (specially UK/US therapy context) में emotions short-direct: 'I'm sad', 'I'm anxious', 'I'm proud'। Therapist या close friend से 'I'm fine' से ज़्यादा बोलना मुश्किल लगता हम Indians को — संस्कारिक रूप से 'सब ठीक है' कहते रहते। पर real friend या counselor honesty चाहती। 'I'm a little sad today' = ज़्यादा real, कम melodramatic।",
  },

  chunks: [
    {
      id: 'im_happy',
      target: "I'm happy",
      native: 'मैं ख़ुश हूँ',
      literal: 'Main khush hoon',
      emoji: '😊',
      phonetic: 'aym-HAP-ee',
      audioRef: null,
    },
    {
      id: 'im_sad',
      target: "I'm sad",
      native: 'मैं उदास हूँ',
      literal: 'Main udaas hoon',
      emoji: '😔',
      phonetic: 'aym-SAD',
      audioRef: null,
    },
    {
      id: 'made_me_feel',
      target: 'It made me feel...',
      native: 'इसने मुझे ___ feel कराया...',
      literal: 'Isne mujhe ___ feel karaya',
      emoji: '💭',
      phonetic: 'it-MAYD-mee-FEEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emotion adjectives — direct, not somatic',
    explanation: "English में emotions 'I'm + adjective': 'I'm happy', 'I'm sad', 'I'm tired', 'I'm proud'। हिंदी का 'दिल भारी' literal translate नहीं होता — short में 'I'm sad' पकड़ें। 'A little' से soften: 'I'm a little sad today'। 'It made me feel ___' — कोई घटना का असर।",
    examples: [
      { target: "I'm happy today.",                              native: 'आज मैं ख़ुश हूँ।' },
      { target: "I'm a little sad — but I'll be okay.",          native: 'थोड़ा उदास हूँ — पर ठीक हो जाऊँगा।' },
      { target: "It made me feel proud.",                        native: 'मुझे गर्व feel हुआ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: "I'm happy",            right: 'मैं ख़ुश हूँ' },
        { left: "I'm sad",              right: 'मैं उदास हूँ' },
        { left: 'It made me feel...',   right: 'इसने feel कराया' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आज मैं ख़ुश हूँ।',
      correct: ["I'm happy today.", "I am happy today.", "i'm happy today.", "I'm happy today"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आज मैं थोड़ा उदास हूँ।',
      correct: ["I'm a little sad today.", "I am a little sad today.", "I'm a bit sad today.", "i'm a little sad today."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य बनाएँ: 'It made me feel happy'",
      words: ['feel', 'It', 'happy.', 'made', 'me'],
      correct: ['It', 'made', 'me', 'feel', 'happy.'],
      translation: 'इसने मुझे ख़ुश feel कराया',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — sad news देखकर',
      sentence: "Watching the news, I felt _____.",
      options: ['sad', 'sadly', 'sadness'],
      correct: 'sad',
      context: "'I felt' के बाद adjective (sad)। Adverb (sadly) या noun (sadness) नहीं।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "दोस्त ने पूछा कैसे हो। थोड़े उदास हो पर बहुत बुरे नहीं। Most natural?",
      options: [
        { text: "I'm a little sad today, but I'll be okay.", correct: true },
        { text: "Mera dil bhaari hai.",                       correct: false },
        { text: "Sad me much.",                                  correct: false },
      ],
      explanation: "'I'm a little sad' direct, real। हिंदी का 'दिल भारी' translate करने पर अजीब लगता English में।",
    },
  ],

  rwenDialogue: {
    intro: "Therapist या close English-speaking दोस्त से session। उन्होंने 'How are you really feeling today?' पूछा।",
    lines: [
      { speaker: 'npc', target: "How are you really feeling today?", native: 'आज सच में कैसे feel कर रहे हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a little sad today. The news made me feel heavy.", native: 'आज थोड़ा उदास हूँ। News ने मन भारी कर दिया।', correct: true, feedback: "बढ़िया — adjective ('sad'), 'a little' से soften, 'It made me feel' से कारण। Honest पर balanced।" },
          { target: "I'm fine, thanks.", native: 'ठीक हूँ, धन्यवाद।', correct: false, feedback: "OK पर दोस्त honesty चाहती। 'I'm a little sad' से शुरू करें।" },
          { target: "Dil bhaari hai.", native: 'दिल भारी है।', correct: false, feedback: "हिंदी का literal — 'I'm sad' या 'My heart is heavy' use करें।" },
        ],
      },
      { speaker: 'npc', target: "Thanks for being honest. I'm here.", native: 'सच बोलने के लिए धन्यवाद। मैं हूँ।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I'm a little sad' = honesty बिना नाटक। Bollywood drama की ज़रूरत नहीं — सीधी बात।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: "I'm happy (अंग्रेज़ी में)",       correct: ["I'm happy", "I am happy", "i'm happy"] },
      { prompt: 'It made me feel sad (अंग्रेज़ी में)', correct: ['It made me feel sad', 'it made me feel sad', 'It made me feel sad.', 'it made me feel sad.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज की feeling सोचें। Diary में English में लिखें: 'Today I'm ___ because ___. It made me feel ___.' English को दिल का साथी बनाएँ।",
    rwenSignoff: "कल — ग़ुस्सा और frustration।",
  },

  phase8: {
    scenario: "You're meeting an English-speaking therapist (or trusted close friend) for the first time. They ask 'How are you really feeling today?' and gently want a real answer — not 'I'm fine'. Share two emotions and one event that affected you.",
    rwenRole: "Sarah, 40, English-speaking therapist. Calm, warm, never judges. Asks gentle follow-up questions like 'When did that start?' and 'How heavy does it feel?'",
    successCriteria: "User uses 'I'm + emotion adjective' (happy/sad/tired/anxious/proud). Uses 'It made me feel ___' to describe what caused it. Avoids only-Hindi somatic phrasing. Speaks in 3+ sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;
