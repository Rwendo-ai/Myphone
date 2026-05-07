import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Your English Story — A2 Complete',
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "अंतिम lesson। 100 lessons। 10 modules। 'Hello' से proverbs तक, 'My name is...' से job interview तक। आज सीखना नहीं — बोलना है। आपकी पूरी English-learning journey English में।",
    culturalNote: "Curriculum पूरा करने का मतलब केवल शब्द सीखना नहीं — आप एक नई दुनिया में दाख़िल हो गए। Greet करना, doctor से बात, restaurant order, परिवार बताना, मुहावरे share करना, और अब अपनी पूरी कहानी share करना। यह Rwendo journey: Namaste से 'Where I'm from we say...' तक। आपने हिंदी नहीं खोई — एक नई ज़बान जोड़ी। दो भाषाओं वाला person दो दुनियाओं को जोड़ता है। बधाई हो।",
  },

  chunks: [
    {
      id: 'i_started_learning',
      target: 'I started learning English',
      native: 'मैंने English सीखना शुरू किया',
      literal: 'Maine English seekhna shuru kiya',
      emoji: '🌱',
      phonetic: 'ay-STAR-ted-LER-ning-IN-glish',
      audioRef: null,
    },
    {
      id: 'now_i_can',
      target: 'Now I can...',
      native: 'अब मैं ___ कर सकता हूँ...',
      literal: 'Ab main kar sakta hoon',
      emoji: '🚀',
      phonetic: 'now-AY-kan',
      audioRef: null,
    },
    {
      id: 'journey_continues',
      target: 'The journey continues',
      native: 'सफ़र जारी है',
      literal: 'Safar jaari hai',
      emoji: '🌅',
      phonetic: 'thuh-JER-nee-kun-TIN-yooz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Your full story — past, present, future',
    explanation: "तीन parts: (1) PAST — कहाँ शुरू किया: 'I started learning English when ___' / 'A few months ago I couldn't ___'। (2) PRESENT — अब कहाँ हो: 'Now I can ___' / 'Today I can ___'। (3) FUTURE — कहाँ जा रहे: 'I hope to ___' / 'One day I'll ___' / 'The journey continues'। तीनों एक कहानी में।",
    examples: [
      { target: "I started learning English a few months ago. I couldn't even introduce myself.", native: 'कुछ महीने पहले शुरू किया। नाम तक नहीं बता पाता था।' },
      { target: 'Now I can order in restaurants, talk to my doctor, and tell stories.',          native: 'अब restaurants में order, doctor से बात, कहानी सुना सकता हूँ।' },
      { target: "I hope to keep growing — the journey continues.",                                native: 'बढ़ते रहने की उम्मीद — सफ़र जारी।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'कहानी के parts मिलाएँ',
      pairs: [
        { left: 'I started learning English',  right: 'Past — कहाँ शुरू' },
        { left: 'Now I can',                    right: 'Present — अभी कहाँ' },
        { left: 'The journey continues',        right: 'Future — कहाँ जा रहे' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — past',
      prompt: 'मैंने कुछ महीने पहले English सीखना शुरू किया।',
      correct: ['I started learning English a few months ago.', 'I started learning English a few months ago', 'i started learning english a few months ago.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — present + future',
      prompt: 'अब मैं बोल सकता हूँ। सफ़र जारी है।',
      correct: ['Now I can speak. The journey continues.', 'Now I can talk. The journey continues.', 'Now I can speak — the journey continues.', 'now i can speak. the journey continues.'],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'Now I can order in restaurants and talk to my doctor'",
      words: ['talk', 'restaurants', 'in', 'order', 'doctor.', 'and', 'Now', 'my', 'I', 'to', 'can'],
      correct: ['Now', 'I', 'can', 'order', 'in', 'restaurants', 'and', 'talk', 'to', 'my', 'doctor.'],
      translation: 'अब मैं restaurants में order और doctor से बात कर सकता हूँ',
    },
    {
      type: 'fill_blank',
      instruction: 'अंतिम कहानी',
      sentence: 'I started with "Hello." Now I can tell my whole story. The journey _____.',
      options: ['continues', 'ended', 'stops'],
      correct: 'continues',
      context: "'The journey continues' = सफ़र जारी। A2 पूरा पर ख़त्म नहीं।",
    },
    {
      type: 'multiple_choice',
      instruction: 'Final reflection',
      question: "100 lessons पूरे। आपका A2 moment?",
      options: [
        { text: "I started with 'Hello.' Now I can tell my whole story — in English. The journey continues.", correct: true },
        { text: "I'm not finished yet.",                                                                          correct: false },
        { text: "I learned some words.",                                                                            correct: false },
      ],
      explanation: "तीन parts: past ('started with Hello'), present ('can tell my whole story'), future ('journey continues')। यही A2 moment।",
    },
  ],

  rwenDialogue: {
    intro: "Final lesson। Final dialogue। Rwen का एक सवाल — सबसे ज़रूरी। मन से जवाब दें — English में।",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "We've walked 100 lessons together. From 'Namaste' to proverbs, from 'I'm fine, thanks' to 'Where do you see yourself in 5 years'. Now — tell me your story. Who are you in English today?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I started learning English a few months ago. I couldn't introduce myself. Now I can order in restaurants, see a doctor, share Hindi proverbs at a multicultural dinner, and tell my story. I hope to keep going. The journey continues.", native: 'मैंने कुछ महीने पहले शुरू किया। नाम तक नहीं बता पाता था। अब restaurants में order, doctor से बात, multicultural dinner पर Hindi मुहावरे share, और अपनी कहानी सुना सकता हूँ। आगे बढ़ने की उम्मीद। सफ़र जारी।', correct: true, feedback: "पाँच वाक्य पूरे — past, present, future, संस्कार, और जारी journey। आपने सिर्फ़ English नहीं सीखी — आप English में रहने लगे। Rwen को कुछ और सिखाने को नहीं। पर बहुत celebrate करने को है।" },
          { target: "I learned a lot.", native: 'बहुत सीखा।', correct: false, feedback: "बहुत बड़ा रास्ता तय किया। पूरी कहानी: 'I started with Hello. Now I can tell my whole story. The journey continues.'" },
          { target: "Main English bolta hoon.", native: 'मैं English बोलता हूँ।', correct: false, feedback: "हिंदी — final lesson है, English में: 'I started learning English. Now I can speak. The journey continues.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The journey continues. आपने अपनी कहानी सुनाई — English में। 100 lessons। 10 modules। Namaste से proverbs तक, greeting से job interview तक। आपने हिंदी नहीं खोई — एक ज़बान जोड़ी। फिर मिलेंगे — कभी न कभी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Final recall। शुरुआत यहीं हुई थी।',
    prompts: [
      { prompt: 'Now I can (अंग्रेज़ी में)',           correct: ['Now I can', 'now i can'] },
      { prompt: 'The journey continues (अंग्रेज़ी में)', correct: ['The journey continues', 'the journey continues', 'The journey continues.', 'the journey continues.'] },
    ],
  },

  mission: {
    title: 'सबसे ज़रूरी काम — A2 Mission',
    task: "आज किसी असली English-speaker से बात करें। Practice नहीं — असली। ढूँढिए: bus में, ऑफिस में, online language exchange पर, video call पर। अपनी English use करें। ज़बान सिर्फ़ लोगों के बीच जीती है। सफ़र जारी।",
    rwenSignoff: "बधाई हो। सफ़र जारी। फिर मिलेंगे, English के योद्धा। हमेशा अच्छा चलें।",
  },

  phase8: {
    scenario: "Capstone conversation. You're at a casual gathering — coffee with someone you've just met who asks 'How long have you been speaking English?' You have 4 minutes to tell your full English-learning story: where you started, what you can do now, where you hope to go. Use everything from Modules 1-9.",
    rwenRole: "Sam, 30, an English speaker you've just met. Curious, kind, will ask follow-up questions: 'What was hardest?', 'Where do you use it most?', 'What's next?'",
    successCriteria: "User uses past tense ('I started', 'I couldn't'), present capability ('Now I can ___'), and future hope ('I hope to ___' or 'One day I'll ___'). Mentions at least 2 specific abilities (e.g., 'order in restaurants', 'see a doctor', 'tell stories', 'share proverbs'). Speaks 5+ sentences. Stays in English throughout. Closes with 'The journey continues' or equivalent.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
