import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "नमस्ते! Module 2 ख़त्म होने वाला है — आपने survival shabd सीख लिए। आज सब जोड़ते हैं: 'Excuse me' + 'Please' + 'I don't understand' + 'Where is...?' + 'Thank you'। एक flow — एक मक़सद: English में फँसना नहीं।",
    culturalNote: "हिन्दी में बातचीत lambi होती है — पहले हाल-चाल, फिर असली बात। English में, खासकर stranger से, time कम होता है — सीधा मुद्दे पर आइए, मदद माँगिए, धन्यवाद दीजिए, चलिए। यह rude नहीं — efficient है। BPO calls में भी यही फ़ायदेमंद है: greet → issue → resolve → thank।",
  },

  chunks: [
    {
      id: 'review_excuse_help',
      target: 'Excuse me, can you help me?',
      native: 'सुनिए, क्या आप मेरी मदद कर सकते हैं?',
      literal: 'Excuse me, can you help me?',
      emoji: '🙋',
      phonetic: 'eks-KYOOZ-mee-KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'review_dont_understand',
      target: "I don't understand. Slowly, please.",
      native: 'मुझे समझ नहीं आया। धीरे, कृपया।',
      literal: "I don't understand. Slowly, please.",
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND-SLOH-lee-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_thank_you_lots',
      target: 'Thank you so much for your help.',
      native: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद।',
      literal: 'Thank you so much for your help.',
      emoji: '🙏',
      phonetic: 'THANK-yoo-soh-MUCH-for-yor-HELP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full survival flow',
    explanation: "Survival बातचीत में तीन हिस्से: (1) शुरू — 'Excuse me' + request (Can you help me? / Where is...? / How much?)। (2) फँसने पर — 'I don't understand. Slowly, please.'। (3) ख़त्म — 'Thank you so much.'। यह पूरा flow आपको हर situation में निकाल लेगा।",
    examples: [
      { target: "Excuse me, where is the bathroom?",                    native: 'सुनिए, toilet कहाँ है?' },
      { target: "Sorry, I don't understand. Can you repeat slowly?",   native: 'माफ़ कीजिए, समझ नहीं आया। क्या आप धीरे दोहरा सकते हैं?' },
      { target: 'Thank you so much for your help.',                      native: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Survival flow के step मिलाइए',
      pairs: [
        { left: 'Excuse me...',          right: 'How you start' },
        { left: "I don't understand",   right: 'When you get stuck' },
        { left: 'Thank you so much',     right: 'How you finish' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — survival बातचीत शुरू कीजिए',
      prompt: 'सुनिए, क्या आप मेरी मदद कर सकते हैं?',
      correct: [
        'Excuse me, can you help me?',
        'Excuse me can you help me?',
        'Excuse me, can you help me',
        'excuse me, can you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आप बता रहे हैं कि समझ नहीं आया',
      prompt: 'मुझे समझ नहीं आया। धीरे दोहराइए, कृपया।',
      correct: [
        "I don't understand. Repeat slowly, please.",
        "I don't understand. Please repeat slowly.",
        "I don't understand. Repeat slowly please.",
        "i don't understand. repeat slowly, please.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'धन्यवाद का जवाब बनाइए',
      words: ['so', 'Thank', 'much', 'you'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'बहुत-बहुत धन्यवाद',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — आप दाम पूछ रहे हैं',
      sentence: '____ much is this, please?',
      options: ['How', 'Where', 'What'],
      correct: 'How',
      context: "दाम के सवाल 'How much' से शुरू।",
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद',
      correct: [
        'Thank you so much for your help',
        'Thank you so much for your help.',
        'Thanks a lot for your help',
        'Thank you for all your help',
        'thank you so much for your help.',
      ],
    },
  ],

  rwenDialogue: {
    intro: "आप London में हैं — पहला दिन, work trip। फ़ोन dead, hotel का पता खो गया, meeting 30 मिनट में है। एक राहगीर से मदद माँगिए — पूरा survival flow use कीजिए।",
    lines: [
      { speaker: 'npc', target: "Hi, you alright?", native: 'Hello, सब ठीक है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me, please?", native: "सुनिए, मैं रास्ता भूल गया हूँ। क्या आप मदद कर सकते हैं, कृपया?", correct: true,  feedback: 'बढ़िया — "Excuse me" + situation + पूरी request।' },
          { target: 'Lost.',                                            native: 'खोया हुआ।',                                              correct: false, feedback: "बहुत छोटा है — पूरा वाक्य बोलिए।" },
          { target: "Yes, hello.",                                       native: 'हाँ, नमस्ते।',                                           correct: false, feedback: "आपने उनके सवाल का जवाब नहीं दिया, और मदद भी नहीं माँगी।" },
        ],
      },
      { speaker: 'npc', target: "Sure — where are you trying to get to? The tube's that way.", native: 'ज़रूर — आप कहाँ जाना चाहते हैं? Tube उस तरफ़ है।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: "माफ़ कीजिए, समझ नहीं आया। धीरे, कृपया?", correct: true,  feedback: 'बढ़िया — तेज़ जवाब के बाद आपने ठीक से रोका।' },
          { target: 'Yes.',                                          native: 'हाँ।',                                                correct: false, feedback: "समझे नहीं और 'Yes' मत कहिए — pretend मत कीजिए।" },
          { target: 'Thank you, goodbye.',                            native: 'धन्यवाद, अलविदा।',                              correct: false, feedback: 'अभी रास्ता नहीं मिला — पहले समझिए।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! Module 2 पूरा — शुरू → फँसने पर → धन्यवाद। पूरी बातचीत, कम शब्दों में, मक़सद हासिल। आप English में चलने लगे हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — पूरी बातचीत बनाइए।',
    prompts: [
      { prompt: 'Excuse me, can you help me? (in English)',     correct: ['Excuse me, can you help me?', 'Excuse me can you help me?', 'Excuse me, can you help me', 'excuse me, can you help me?'] },
      { prompt: "I don't understand. Slowly, please. (in English)", correct: ["I don't understand. Slowly, please.", "I don't understand. Slowly please.", "I don't understand. Please, slowly.", "I do not understand. Slowly, please."] },
    ],
  },

  mission: {
    title: 'आज का काम — Survival बातचीत',
    task: "आज एक situation सोचिए जो आपके साथ हो सकती है English में (रास्ता भूलना, toilet ढूँढना, चीज़ ख़रीदना)। पूरी बातचीत मुँह से बोलिए — शुरू करिए, फँसिए, धन्यवाद दीजिए। बिना script देखे।",
    rwenSignoff: "Module 2 पूरा — अब आपके पास English में फँसने पर निकलने का रास्ता है। मिलते हैं Module 3 में।",
  },

  phase8: {
    scenario: "You're in central London on day one of a work trip. Your phone is dead, you've lost your hotel address, and you have a meeting in 30 minutes. Approach a stranger, explain the problem, get directions, deal with not understanding the first reply, and thank them properly.",
    rwenRole: "Olu, 35, a Londoner walking to work. Friendly but in a slight hurry. Speaks fast British English with a London accent. Will help if you're clear, will get impatient if you're not.",
    successCriteria: "Full survival flow: opens with 'Excuse me' + 'Can you help me?' / 'I'm lost', uses 'I don't understand' / 'Slowly, please' when needed, asks 'Where is...?' for the destination, closes with 'Thank you so much'. Combines chunks from Module 2 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
