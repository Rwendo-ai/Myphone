import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'At a restaurant — रेस्तराँ में',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Restaurant: 'A table for two', 'menu, please', 'the bill'। आज ये तीन steps सीखेंगे — entry, order, exit।",
    culturalNote: "India में restaurants में 'tipping' optional था पर अब expected — 5-10% common, 12.5% service charge already included हो तो। UK में 12.5% pre-added होता है, US में 18-20% expected — और waiter की सीधी salary वहाँ इसी पर depend करती। 'Bill' UK/India English है, 'Check' US English। दोनों चलते हैं। Restaurant में बात आदर से शुरू: 'A table for two, please' (formal), 'For two, please' (casual)। Indian context में 'Table for two ji' मिक्स language चलती है — पर पूरी English बेहतर है foreign tourist के साथ।",
  },

  chunks: [
    {
      id: 'table_for_two',
      target: 'A table for two',
      native: 'दो लोगों के लिए table',
      literal: 'Do logon ke liye table',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO',
      audioRef: null,
    },
    {
      id: 'menu_please',
      target: 'The menu, please',
      native: 'मेन्यू दीजिए',
      literal: 'Menu deejiye',
      emoji: '📋',
      phonetic: 'thuh-MEN-yoo-PLEEZ',
      audioRef: null,
    },
    {
      id: 'the_bill',
      target: 'The bill, please',
      native: 'बिल दीजिए',
      literal: 'Bill deejiye',
      emoji: '🧾',
      phonetic: 'thuh-BILL-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Restaurant arrival → eating → leaving',
    explanation: "Restaurant के तीन steps: ENTRY — 'A table for two'। MIDDLE — menu order ('The menu, please')। EXIT — bill ('The bill, please' या US में 'The check, please')। ये Mumbai, London, NYC — हर जगह काम करते।",
    examples: [
      { target: 'A table for two, please.',  native: 'दो लोगों के लिए, please।' },
      { target: 'Could we have the menu?',   native: 'मेन्यू मिल सकता है?' },
      { target: 'Could we have the bill?',   native: 'बिल मिल सकता है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Restaurant शब्द मिलाएँ',
      pairs: [
        { left: 'A table for two', right: 'दो लोगों के लिए table' },
        { left: 'The menu',        right: 'मेन्यू' },
        { left: 'The bill',        right: 'बिल' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त के साथ restaurant पहुँचे',
      prompt: 'दो लोगों के लिए, please।',
      correct: [
        'A table for two, please.',
        'Table for two, please.',
        'A table for two please.',
        'Table for two please.',
        'a table for two, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — खा चुके, अब पैसे देने हैं',
      prompt: 'बिल दीजिए।',
      correct: [
        'The bill, please.',
        'The bill please.',
        'The check, please.',
        'Could we have the bill?',
        'the bill, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — मेन्यू देखना है',
      sentence: 'Could we have the ____, please?',
      options: ['menu', 'bill', 'table'],
      correct: 'menu',
      context: "Menu = खाने की list।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्द क्रम में रखें — दो लोग साथ',
      words: ['for', 'A', 'two', 'table'],
      correct: ['A', 'table', 'for', 'two'],
      translation: 'दो लोगों के लिए table',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "London में खा चुके, बिल चाहिए। Waiter से क्या कहेंगे?",
      options: [
        { text: "Could we have the bill, please?", correct: true },
        { text: "Money now.",                       correct: false },
        { text: "We finish.",                       correct: false },
      ],
      explanation: "'Could we have the bill?' polite और formal। 'Money now' rude।",
    },
  ],

  rwenDialogue: {
    intro: "London में पार्टनर के साथ पहुँचे हैं। Hostess door पर है।",
    lines: [
      { speaker: 'npc', target: "Hi! Welcome. Just the two of you?", native: 'नमस्ते! स्वागत है। आप दो लोग ही?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a table for two, please.",  native: 'हाँ, दो के लिए table, please।', correct: true,  feedback: 'बढ़िया — clear, polite।' },
          { target: "Two people.",                      native: 'दो लोग।',                       correct: false, feedback: "OK पर short — 'a table for two' पूरा करें।" },
          { target: "Yes table.",                        native: 'हाँ table।',                       correct: false, feedback: "'For two' छूटा — adhura लगता है।" },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu.", native: 'इधर आइए। यह मेन्यू।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! बिल माँगते वक़्त भी 'The bill, please' से polite ख़त्म करें।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'A table for two (अंग्रेज़ी में)', correct: ['A table for two', 'A table for two.', 'Table for two', 'Table for two.', 'a table for two'] },
      { prompt: 'The bill, please (अंग्रेज़ी में)', correct: ['The bill, please', 'The bill, please.', 'The bill please', 'The check, please', 'the bill, please.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "घर पर ही सोचें कि restaurant में हैं। तीन वाक्य ज़ोर से: 'A table for two', 'The menu, please', 'The bill, please'।",
    rwenSignoff: "कल — order करना।",
  },

  phase8: {
    scenario: "You arrive at a busy restaurant in London with your partner. The hostess greets you in English. Get a table for two and ask for the menu.",
    rwenRole: "Lerato, 30, hostess at a mid-range restaurant. Brisk but warm. Speaks fast British English.",
    successCriteria: "User asks for 'a table for two' and 'the menu, please'. Doesn't bark single-word demands. Closes with thanks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
