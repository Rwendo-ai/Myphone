import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Emergency phrases — आपातकालीन शब्द',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! ईश्वर करे आपको ये शब्द कभी use न करने पड़ें — पर पता ज़रूर होने चाहिए। आपात स्थिति में शब्द जल्दी और साफ़ निकलने चाहिए।",
    culturalNote: "हिन्दी में हम चिल्लाते हैं 'बचाओ!' — एक शब्द में सब कुछ। English में 'Help!' वैसा ही है — छोटा, ज़ोरदार, दूर तक सुनाई देता है। यहाँ politeness छोड़ दीजिए — 'please' की ज़रूरत नहीं। 'Help!', 'Call the police!', 'I need a doctor' — सीधा बात।",
  },

  chunks: [
    {
      id: 'help',
      target: 'Help!',
      native: 'बचाओ!',
      literal: 'Help-me-please!',
      emoji: '🚨',
      phonetic: 'HELP',
      audioRef: null,
    },
    {
      id: 'call_the_police',
      target: 'Call the police',
      native: 'पुलिस को बुलाओ',
      literal: 'Call the police',
      emoji: '🚓',
      phonetic: 'KAWL-thuh-poh-LEES',
      audioRef: null,
    },
    {
      id: 'i_need_a_doctor',
      target: 'I need a doctor',
      native: 'मुझे डॉक्टर चाहिए',
      literal: 'I need a doctor',
      emoji: '🚑',
      phonetic: 'AY-need-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative urgency',
    explanation: "आपातकालीन वाक्य छोटे और सीधे होते हैं। 'Help!' अकेला बोलिए — 'please' मत लगाइए। 'Call the police' verb से शुरू — सीधा order। समय हो तो 'now' या 'quickly' जोड़िए: 'Call an ambulance, quickly!'.",
    examples: [
      { target: 'Help! Help me!',     native: 'बचाओ! मुझे बचाओ!' },
      { target: 'Call an ambulance.', native: 'Ambulance बुलाओ।' },
      { target: 'I need a doctor — now.', native: 'मुझे डॉक्टर चाहिए — अभी।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Help!',             right: 'बचाओ!' },
        { left: 'Call the police',   right: 'पुलिस को बुलाओ' },
        { left: 'I need a doctor',   right: 'मुझे डॉक्टर चाहिए' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — कुछ डरावना हो रहा है',
      prompt: 'बचाओ!',
      correct: ['Help!', 'Help me!', 'help!', 'Help', 'Help me'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — पुलिस बुलाने के लिए',
      sentence: '____ the police!',
      options: ['Call', 'Tell', 'Bring'],
      correct: 'Call',
      context: "English में 'Call' का मतलब फ़ोन लगाना भी है (पुलिस को) — 'Call the police' सीधा वही।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आपको डॉक्टर तुरंत चाहिए',
      words: ['need', 'I', 'doctor', 'a'],
      correct: ['I', 'need', 'a', 'doctor'],
      translation: 'मुझे डॉक्टर चाहिए',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — ambulance चाहिए',
      prompt: 'Ambulance बुलाओ!',
      correct: ['Call an ambulance!', 'Call an ambulance', 'call an ambulance!', 'Call the ambulance!'],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'मुझे डॉक्टर चाहिए — अभी',
      correct: ['I need a doctor — now', 'I need a doctor now', 'I need a doctor, now', 'I need a doctor now.', 'I need a doctor right now'],
    },
  ],

  rwenDialogue: {
    intro: "आप London में हैं work trip पर। आपके दोस्त को restaurant में अचानक allergic reaction हुआ — साँस लेने में दिक़्क़त। 999 (UK emergency number) dial कीजिए।",
    lines: [
      { speaker: 'npc', target: "999 emergency, what's your emergency?", native: '999 emergency, क्या आपात स्थिति है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Help! I need a doctor. My friend is hurt.", native: 'बचाओ! मुझे डॉक्टर चाहिए। मेरा दोस्त घायल है।', correct: true,  feedback: 'बढ़िया — छोटा, साफ़, और सब ज़रूरी जानकारी।' },
          { target: "Hello, how are you?",                          native: 'नमस्ते, आप कैसे हैं?',                                          correct: false, feedback: 'यह आपात स्थिति है — formality छोड़ दीजिए।' },
          { target: "Excuse me, please...",                          native: 'सुनिए, कृपया...',                                    correct: false, feedback: "अभी समय नहीं है politeness का — 'Help!' सीधा बोलिए।" },
        ],
      },
      { speaker: 'npc', target: "OK, where are you?", native: 'ठीक है, आप कहाँ हैं?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! आपात में कम शब्द, सही शब्द — 'Help', 'doctor', 'hurt'। Politeness बाद में लौटेगी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Help! (in English)',           correct: ['Help!', 'Help me!', 'Help', 'help!'] },
      { prompt: 'I need a doctor (in English)', correct: ['I need a doctor', 'I need a doctor.', 'I need a doctor!', 'i need a doctor'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अभी — बिना देखे — मुँह से बोलिए: 'Help!', 'Call the police', 'I need a doctor'। ईश्वर करे ज़रूरत न पड़े, पर ये शब्द उँगलियों पर होने चाहिए।",
    rwenSignoff: "सुरक्षित रहिए — रास्ते में सावधान रहिए।",
  },

  phase8: {
    scenario: "You're abroad in London on a work trip when your travel companion suddenly has a serious allergic reaction in a restaurant. You need to call emergency services (999) and explain the situation in clear English fast.",
    rwenRole: "999 emergency dispatcher, professional and calm. Will guide you with questions: what's the emergency, where are you, is the person breathing. Speaks clear British English but quickly.",
    successCriteria: "User opens with 'Help!' or states the emergency immediately. Uses 'I need a doctor' / 'Call an ambulance' / 'My friend is sick'. Stays focused, gives location when asked, doesn't waste words on greetings or apologies.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
