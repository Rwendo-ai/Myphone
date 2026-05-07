import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Future tense — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "कल (आने वाला) — tomorrow। English में future के लिए 'will' या 'going to'। 'I will go' (मैं जाऊँगा), 'I'm going to call' (मैं call करने वाला हूँ)।",
    culturalNote: "हिंदी में future एक प्रत्यय (suffix) से — 'जाऊँगा', 'देखूँगा'। English में अलग शब्द 'will' verb से पहले: 'I WILL go'। 'Going to' अलग feel: 'I'm going to call her' = सोचा-समझा plan। 'Will' सहज decision: 'I'll get it' (फ़ोन बजी, आप उठाने वाले). दोनों चलते हैं — context से जुड़ते हैं।",
  },

  chunks: [
    {
      id: 'tomorrow_i_will',
      target: 'Tomorrow I will call you.',
      native: 'कल मैं आपको call करूँगा।',
      literal: 'Kal main aapko call karoonga',
      emoji: '📞',
      phonetic: 'tu-MOR-oh-ay-WIL-KAWL-yoo',
      audioRef: null,
    },
    {
      id: 'im_going_to',
      target: "I'm going to study tonight.",
      native: 'आज रात मैं पढ़ने वाला हूँ।',
      literal: 'Aaj raat main padhne wala hoon',
      emoji: '📚',
      phonetic: 'aym-GOH-ing-too-STUH-dee',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow!',
      native: 'कल मिलते हैं!',
      literal: 'Kal milte hain',
      emoji: '👋',
      phonetic: 'SEE-yoo-tu-MOR-oh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple future — Will & going to',
    explanation: "WILL + base verb = सहज future ('I'll get it', 'I will be there')। GOING TO + base verb = सोचा-समझा plan ('I'm going to study tonight')। 'I will' का short \"I'll\" — 'I'll see you tomorrow'।",
    examples: [
      { target: 'Tomorrow I will call you.',         native: 'कल मैं call करूँगा।' },
      { target: "I'm going to study tonight.",       native: 'आज रात पढ़ने वाला हूँ।' },
      { target: 'See you tomorrow!',                 native: 'कल मिलते हैं!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I will call',     right: 'मैं call करूँगा' },
        { left: "I'm going to go", right: 'मैं जाने वाला हूँ' },
        { left: 'See you tomorrow', right: 'कल मिलते हैं' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'सही future form',
      sentence: 'Tomorrow I _____ visit my mother.',
      options: ['will', 'is', 'have'],
      correct: 'will',
      context: "Future verb 'visit' से पहले 'will'।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — future',
      prompt: 'कल मैं आपको call करूँगा।',
      correct: ["Tomorrow I will call you.", "Tomorrow I'll call you.", "I will call you tomorrow.", "I'll call you tomorrow.", 'tomorrow i will call you.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — meeting ख़त्म कर रहे',
      prompt: 'कल मिलते हैं!',
      correct: ['See you tomorrow!', 'See you tomorrow', "See you tomorrow.", 'see you tomorrow!'],
    },
    {
      type: 'build_sentence',
      instruction: 'Future plan: "आज रात पढ़ने वाला हूँ"',
      words: ['tonight.', 'study', "I'm", 'to', 'going'],
      correct: ["I'm", 'going', 'to', 'study', 'tonight.'],
      translation: 'आज रात पढ़ने वाला हूँ',
    },
    {
      type: 'multiple_choice',
      instruction: 'फ़ोन बजी — आप तुरंत बोलें',
      question: '"I _____ get it!"',
      options: [
        { text: "'ll", correct: true },
        { text: 'am going to', correct: false },
        { text: 'will be', correct: false },
      ],
      explanation: "तुरंत decision — \"I'll\" (will)। 'I'm going to' पहले से plan किया हुआ।",
    },
  ],

  rwenDialogue: {
    intro: "London ऑफ़िस में। Colleague कल का plan पूछ रहा।",
    lines: [
      { speaker: 'npc', target: "What are you doing tomorrow?", native: 'कल क्या कर रहे हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to a doctor's appointment in the morning, and then I'll come to the office at 2.", native: 'सुबह doctor के पास जाने वाला हूँ, फिर 2 बजे office आऊँगा।', correct: true, feedback: "बढ़िया — 'going to' (planned — doctor) और 'will' ('I'll come' — natural)।" },
          { target: "Tomorrow I go doctor. I come office.", native: 'कल मैं doctor जाता। Office आता।', correct: false, feedback: "'I go' present — future के लिए 'will' या 'going to'।" },
        ],
      },
      { speaker: 'npc', target: "Cool — I'll see you at 2 then. Have a good morning!", native: 'अच्छा — 2 बजे मिलते। सुबह अच्छी हो!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks. See you tomorrow!", native: 'धन्यवाद। कल मिलते!', correct: true, feedback: "'See you tomorrow' perfect ending।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Will' = future, 'Going to' = plan। दोनों आपके पास।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Tomorrow I will call you (अंग्रेज़ी में)', correct: ['Tomorrow I will call you', 'Tomorrow I will call you.', "Tomorrow I'll call you.", "I'll call you tomorrow.", 'tomorrow i will call you.'] },
      { prompt: 'See you tomorrow (अंग्रेज़ी में)', correct: ['See you tomorrow', 'See you tomorrow!', 'See you tomorrow.', 'see you tomorrow!'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल के तीन काम सोचें। English में बोलें: 'Tomorrow I will go to ___', 'I'm going to ___', 'I'll see ___'। 'Will' और 'going to' दोनों practice।",
    rwenSignoff: "कल — capstone। सब verbs एक साथ।",
  },

  phase8: {
    scenario: "London office. Manager asks 'What's your plan for tomorrow?' Use 'will' and 'going to'.",
    rwenRole: "David, 38, your manager. Direct, wants to know your schedule.",
    successCriteria: "Student uses both 'will' (immediate decisions) and 'going to' (planned), closes politely ('See you tomorrow').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
