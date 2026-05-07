import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — आपका नाम क्या है?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "किसी को जानने की शुरुआत होती है नाम से। अंग्रेज़ी में पूछते हैं 'What's your name?' और जवाब देते हैं 'My name is ...'। फिर natural follow-up: 'Nice to meet you'।",
    culturalNote: "हिंदी में अनजान को 'भैया' या 'सर' कहकर भी काम चल जाता है — नाम पूछना थोड़ा personal लगता है। अंग्रेज़ी में पहली मुलाकात में नाम पूछना बिलकुल normal है — इसके बिना professional networking नहीं हो सकती।",
  },

  chunks: [
    {
      id: 'whats_your_name',
      target: "What's your name?",
      native: 'आपका नाम क्या है? (Aapka naam kya hai?)',
      literal: 'What is your name?',
      emoji: '❓',
      phonetic: 'wuts-yor-NAYM',
      audioRef: null,
    },
    {
      id: 'my_name_is',
      target: 'My name is ...',
      native: 'मेरा नाम ... है (Mera naam ... hai)',
      literal: 'My name is ...',
      emoji: '🪪',
      phonetic: 'may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'nice_to_meet_you',
      target: 'Nice to meet you',
      native: 'आपसे मिलकर अच्छा लगा (Aapse milkar accha laga)',
      literal: 'I-am-glad to meet-you',
      emoji: '🤝',
      phonetic: 'nais-too-MEET-yoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessives my/your',
    explanation: "अंग्रेज़ी में 'my' = मेरा, 'your' = आपका। सवाल 'your' से शुरू होता है ('What's YOUR name?'), जवाब 'My' से ('MY name is...')। 'Nice to meet you' एक standard phrase है — हर पहली मुलाकात में बोला जाता है। हिंदी में यह optional है, अंग्रेज़ी में लगभग ज़रूरी।",
    examples: [
      { target: "What's your name?",   native: 'आपका नाम क्या है?' },
      { target: 'My name is Priya',    native: 'मेरा नाम प्रिया है' },
      { target: 'Nice to meet you',    native: 'आपसे मिलकर अच्छा लगा' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मिलाएँ',
      pairs: [
        { left: "What's your name?", right: 'आपका नाम क्या है?' },
        { left: 'My name is ...',    right: 'मेरा नाम ... है' },
        { left: 'Nice to meet you',  right: 'आपसे मिलकर अच्छा लगा' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'आपका नाम क्या है?',
      correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें (अपना नाम Priya रखें)',
      prompt: 'मेरा नाम प्रिया है',
      correct: ['My name is Priya', 'my name is Priya', 'My name is priya', 'my name is priya'],
    },
    {
      type: 'fill_blank',
      instruction: 'पूरा करें',
      sentence: '____ name is Aman.',
      options: ['My', 'Your', 'His'],
      correct: 'My',
      context: 'आप अपना परिचय दे रहे हैं।',
    },
    {
      type: 'build_sentence',
      instruction: 'मुलाकात की phrase क्रम में लगाएँ',
      words: ['Nice', 'to', 'meet', 'you'],
      correct: ['Nice', 'to', 'meet', 'you'],
      translation: 'आपसे मिलकर अच्छा लगा',
    },
    {
      type: 'build_sentence',
      instruction: 'सवाल को क्रम में लगाएँ',
      words: ["What's", 'your', 'name'],
      correct: ["What's", 'your', 'name'],
      translation: 'आपका नाम क्या है?',
    },
  ],

  rwenDialogue: {
    intro: "Hyderabad में एक tech networking event। आप अनजान professional से मिल रहे हैं — दोनों English बोल रहे हैं।",
    lines: [
      { speaker: 'npc', target: "Hi! What's your name?", native: 'हाय! आपका नाम क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My name is Aman. Nice to meet you.",  native: 'मेरा नाम अमन है। आपसे मिलकर अच्छा लगा।', correct: true,  feedback: "बढ़िया — आपने नाम बताया और मुलाकात की warmth जोड़ी।" },
          { target: 'Aman.',                                 native: 'अमन।',                                       correct: false, feedback: "बहुत छोटा है — पहली मुलाकात में 'My name is...' से full sentence बोलिए।" },
          { target: "What's your name?",                     native: 'आपका नाम क्या है?',                           correct: false, feedback: "उन्होंने पहले पूछा — पहले जवाब दीजिए, फिर वापस पूछिए।" },
        ],
      },
      { speaker: 'npc', target: "Nice to meet you, Aman. I'm Sarah.", native: 'आपसे मिलकर अच्छा लगा, अमन। मैं Sarah हूँ।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने professional way में नाम exchange किया — यही networking का foundation है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: "What's your name? (अंग्रेज़ी में)", correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"] },
      { prompt: 'Nice to meet you (अंग्रेज़ी में)',  correct: ['Nice to meet you', 'nice to meet you', 'Nice to meet you.', 'nice to meet you.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी अनजान को English में अपना परिचय दें — 'My name is ...'। दुकान, gym, lift में — कहीं भी।",
    rwenSignoff: "आपसे मिलकर अच्छा लगा। कल मिलते हैं।",
  },

  phase8: {
    scenario: "Hyderabad के HITEC City में एक startup networking event। आप अकेले खड़े हैं, hand में coffee, और एक पीली jacket पहना professional आपके पास आता है। वह pure English में अपना introduction देता है और आपका नाम पूछता है — आपको proper exchange करना है।",
    rwenRole: "Vikram — एक product manager, ~30, Bangalore से लेकिन US में 5 साल रहा है। Smooth English speaker, networking pro, कुछ minutes में connection बनाने की कोशिश करता है।",
    successCriteria: "User answers with 'My name is [name]' (NOT just the bare name, NOT 'I am [name] only'), adds 'Nice to meet you' as the standard follow-up, और अपनी तरफ़ से 'What's your name?' पूछता है ताकि exchange one-sided न रहे।",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
