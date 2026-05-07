import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — क्या आप मेरी मदद कर सकते हैं?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! जब आप खो जाएँ या समझ न आए कि क्या करना है, तो मदद माँगना पड़ता है। English में 'can' शब्द आपके लिए दरवाज़ा खोलता है।",
    culturalNote: "हिन्दी में हम मदद माँगते वक़्त 'क्या आप' और 'कृपया' लगाते हैं — respect का layer। English में 'Can you help me?' इतना ही काफ़ी है — चाहे officer हो, चाहे stranger। Sir/Madam optional है, अनिवार्य नहीं। शब्द कम, काम साफ़।",
  },

  chunks: [
    {
      id: 'can_you_help_me',
      target: 'Can you help me?',
      native: 'क्या आप मेरी मदद कर सकते हैं?',
      literal: 'Can you help me?',
      emoji: '🆘',
      phonetic: 'KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_need_help',
      target: 'I need help',
      native: 'मुझे मदद चाहिए',
      literal: 'I-need help',
      emoji: '🙋',
      phonetic: 'AY-need-HELP',
      audioRef: null,
    },
    {
      id: 'im_lost',
      target: "I'm lost",
      native: 'मैं रास्ता भूल गया हूँ',
      literal: 'I-am lost',
      emoji: '🧭',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modal verb "can"',
    explanation: "'Can' का use तब जब आप किसी की क्षमता या मदद के बारे में पूछ रहे हों। Pattern: 'Can + you + (do something)?'। 'Can' शब्द question को order की तरह नहीं, request की तरह बनाता है।",
    examples: [
      { target: 'Can you help me?',           native: 'क्या आप मेरी मदद कर सकते हैं?' },
      { target: 'Can you speak slowly?',      native: 'क्या आप धीरे बोल सकते हैं?' },
      { target: 'Can you show me the way?',   native: 'क्या आप मुझे रास्ता दिखा सकते हैं?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Can you help me?', right: 'क्या आप मेरी मदद कर सकते हैं?' },
        { left: 'I need help',      right: 'मुझे मदद चाहिए' },
        { left: "I'm lost",         right: 'मैं रास्ता भूल गया हूँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आप एक नए शहर में रास्ता भूल गए हैं',
      prompt: 'मैं रास्ता भूल गया हूँ। क्या आप मेरी मदद कर सकते हैं?',
      correct: [
        "I'm lost. Can you help me?",
        "I'm lost, can you help me?",
        "I am lost. Can you help me?",
        "i'm lost. can you help me?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — आप information desk पर मदद माँग रहे हैं',
      sentence: '____ you help me, please?',
      options: ['Can', 'Are', 'Do'],
      correct: 'Can',
      context: "मदद माँगने का सबसे सरल तरीक़ा 'Can you...?' है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप बता रहे हैं कि मदद चाहिए',
      words: ['I', 'need', 'some', 'help'],
      correct: ['I', 'need', 'some', 'help'],
      translation: 'मुझे थोड़ी मदद चाहिए',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'मैं रास्ता भूल गया हूँ',
      correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — information desk पर politely मदद माँगिए',
      prompt: 'कृपया, क्या आप मेरी मदद कर सकते हैं?',
      correct: ['Please, can you help me?', 'Please can you help me?', 'Please, can you help me', 'please, can you help me?'],
    },
  ],

  rwenDialogue: {
    intro: "आप Heathrow airport में हैं — रास्ता भूल गए हैं, gate नहीं मिल रहा। Information desk पर जाइए।",
    lines: [
      { speaker: 'npc', target: "Hi, how can I help?", native: 'नमस्ते, मैं कैसे मदद करूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me?", native: 'सुनिए, मैं रास्ता भूल गया हूँ। क्या आप मदद कर सकते हैं?', correct: true,  feedback: 'बढ़िया — आपने polite ढंग से शुरू किया, situation बताई, और मदद माँगी।' },
          { target: 'Help.',                                  native: 'मदद।',                                    correct: false, feedback: 'बहुत छोटा है — पूरा वाक्य बोलिए।' },
          { target: 'Thank you.',                             native: 'धन्यवाद।',                                   correct: false, feedback: "अभी तो कुछ हुआ ही नहीं — पहले मदद माँगिए।" },
        ],
      },
      { speaker: 'npc', target: "Of course — where are you trying to go?", native: 'ज़रूर — आप कहाँ जाना चाहते हैं?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'Excuse me' + 'I'm lost' + 'Can you help me?' — यह combination हर airport में, हर station पर काम आएगा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Can you help me? (in English)', correct: ['Can you help me?', 'Can you help me', 'can you help me?', 'can you help me'] },
      { prompt: "I'm lost (in English)",          correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक situation सोचिए जहाँ आपको मदद चाहिए होती (चाहे कल्पना में ही)। मुँह से बोलिए: 'Excuse me, can you help me? I'm lost.' दो बार।",
    rwenSignoff: "ये शब्द आपके साथ रहेंगे — डरिए मत, use कीजिए।",
  },

  phase8: {
    scenario: "You've just landed at London Heathrow on your first international trip. You can't find the exit to ground transport, your phone is dead, and signs aren't making sense. Approach the information desk and ask for help.",
    rwenRole: "Lwazi, 26, the airport information officer. Patient, helpful, polite. Speaks clear British English.",
    successCriteria: "User opens with 'Excuse me' or 'Hi', states a problem ('I'm lost' / 'I need help'), uses 'Can you help me?' or equivalent. Responds to follow-up questions about where they're trying to go.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
