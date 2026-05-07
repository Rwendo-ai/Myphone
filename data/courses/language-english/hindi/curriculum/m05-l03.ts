import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Sons & Daughters — बेटे और बेटियाँ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "बच्चे — परिवार का सबसे प्यारा हिस्सा। अंग्रेज़ी में: 'son' (बेटा), 'daughter' (बेटी), 'children' (बच्चे)। याद रखें: 'children' irregular plural है — 'childs' नहीं होता।",
    culturalNote: "हिंदी में हम 'मेरा बेटा', 'मेरी बेटी', 'मेरे बच्चे' easily बदलते हैं। अंग्रेज़ी में 'son' और 'daughter' अकेले खड़े होते हैं — 'boy son' नहीं कहते। अगर gender मायने नहीं रखता तो 'child' / 'children' सबसे आसान है। School admission form, doctor visit, या immigration पर 'How many children?' पूछा जाता है — तब 'two children' कहना seedha है।",
  },

  chunks: [
    {
      id: 'son',
      target: 'Son',
      native: 'बेटा',
      literal: 'Beta',
      emoji: '👦🏽',
      phonetic: 'SUN',
      audioRef: null,
    },
    {
      id: 'daughter',
      target: 'Daughter',
      native: 'बेटी',
      literal: 'Beti',
      emoji: '👧🏽',
      phonetic: 'DAW-tuh',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'बच्चे',
      literal: 'Bachche — irregular plural of "child"',
      emoji: '🧒🏽',
      phonetic: 'CHIL-druhn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming kids — son / daughter / children',
    explanation: "अंग्रेज़ी में 'son' और 'daughter' gender-specific हैं। 'Child' (बच्चा) gender-neutral है। Plural 'children' है — 's' नहीं लगता end में। संख्या बताने के लिए: 'I have [number] children' या 'I have a son and a daughter'.",
    examples: [
      { target: 'I have one son.',                native: 'मेरा एक बेटा है।' },
      { target: 'I have two daughters.',          native: 'मेरी दो बेटियाँ हैं।' },
      { target: 'I have three children.',         native: 'मेरे तीन बच्चे हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Son',       right: 'बेटा' },
        { left: 'Daughter',  right: 'बेटी' },
        { left: 'Children',  right: 'बच्चे' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — स्कूल form भर रहे हैं',
      prompt: 'मेरे दो बच्चे हैं — एक बेटा और एक बेटी।',
      correct: ['I have two children — one son and one daughter.', 'I have two children, one son and one daughter.', 'I have two children: one son and one daughter.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरा बेटा पाँच साल का है।',
      correct: ['My son is five years old.', 'My son is 5 years old.', 'My son is five.'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My daughter goes to school in Bangalore"',
      words: ['goes', 'My', 'school', 'daughter', 'in', 'to', 'Bangalore.'],
      correct: ['My', 'daughter', 'goes', 'to', 'school', 'in', 'Bangalore.'],
      translation: 'मेरी बेटी बैंगलोर में स्कूल जाती है',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — irregular plural',
      sentence: 'I have three _____ — two boys and one girl.',
      options: ['childs', 'children', 'childrens'],
      correct: 'children',
      context: "'Children' irregular plural है। 'Childs' और 'childrens' English में नहीं हैं — कहीं भी।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'School registration form में "Number of children" वाला field है। आपके एक बेटा और एक बेटी हैं। क्या लिखेंगे/बोलेंगे?',
      options: [
        { text: "Two — one son and one daughter.",   correct: true },
        { text: "Two childs.",                          correct: false },
        { text: "Do bachche.",                          correct: false },
      ],
      explanation: "'Two — one son and one daughter' पूरा answer है: number + detail। 'Childs' ग़लत है। हिंदी form में नहीं चलेगी।",
    },
  ],

  rwenDialogue: {
    intro: 'आप बच्चे का स्कूल form भर रहे हैं। English-speaking admin officer को detail चाहिए।',
    lines: [
      { speaker: 'npc', target: "How many children do you have, and what are their ages?", native: 'आपके कितने बच्चे हैं, और उम्र क्या है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children — a son who is seven and a daughter who is four.", native: 'मेरे दो बच्चे हैं — सात साल का बेटा और चार साल की बेटी।', correct: true, feedback: "बढ़िया — 'two children' (irregular plural), 'a son... and a daughter...', उम्र साफ़। Form ठीक भर गया।" },
          { target: "I have two childs. Son seven. Daughter four.",                          native: 'मेरे दो बच्चे। बेटा सात। बेटी चार।',                  correct: false, feedback: "'Childs' नहीं — 'children' है। और वाक्य बहुत कटा हुआ — 'who is' या 'and' जोड़ें।" },
          { target: "Two childrens, age seven and four.",                                     native: 'दो बच्चे, उम्र सात और चार।',                                              correct: false, feedback: "'Childrens' नहीं — 'children' पहले से plural है। 'age' की जगह 'aged' या 'who are aged'।" },
        ],
      },
      { speaker: 'npc', target: "Perfect. What grades are they in?", native: 'बढ़िया। किस class में हैं?' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! आपने form को English में संभाल लिया — irregular plural के साथ।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'I have two children (अंग्रेज़ी में)', correct: ['I have two children', 'I have two children.', 'i have two children'] },
      { prompt: 'My daughter (अंग्रेज़ी में)',          correct: ['My daughter', 'my daughter'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अगर आपके बच्चे हैं, English में वाक्य बनाएँ: 'I have [number] children.' अगर नहीं, अपने भाई-बहन के बच्चों के लिए: 'My sister has two children — a son and a daughter.' ज़ोर से पढ़ें।",
    rwenSignoff: "कल — दादा-दादी, नाना-नानी (grandparents)।",
  },

  phase8: {
    scenario: "You are filling out a school registration form for your child. The school administrator is English-speaking and asks you a few questions about your family — number of children, ages, what they do.",
    rwenRole: "Mrs. Sharma, the school registrar at an international school in Bangalore — friendly but efficient. Asks straightforward questions like 'How many children do you have?' and 'What are their ages?'",
    successCriteria: "User says 'I have [number] children' using 'children' (not 'childs'), names at least one as 'son' or 'daughter', and gives an age. Avoids slipping into Hindi.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
