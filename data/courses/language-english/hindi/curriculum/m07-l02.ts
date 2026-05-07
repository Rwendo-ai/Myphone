import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Common foods — आम खाना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "खाने के नाम — रोटी, चावल, सब्ज़ी English में: 'bread', 'rice', 'vegetables'। Hotel menu और restaurants में काम आते हैं।",
    culturalNote: "India में 35-40% लोग शाकाहारी हैं — सबसे बड़ा हिस्सा दुनिया में। Religious vegetarianism (Jain, कुछ Hindu, Buddhist), uske अलावा वे लोग जो 'no meat on Tuesdays/Saturdays' follow करते। English में 'I'm vegetarian' पूरी पहचान बन जाती है — UK/US tourist, restaurant, dinner host सब इसका respect करते। 'Pure veg' phrase Indian English है — international English में 'strictly vegetarian'। Beef हिंदू perspective में taboo है — 'I don't eat beef' सीधे clear करना पड़ता है, especially American restaurants में। Bread और rice 'uncountable' हैं — 'a bread' नहीं, 'some bread' या 'a slice of bread'।",
  },

  chunks: [
    {
      id: 'bread',
      target: 'Bread',
      native: 'रोटी / ब्रेड',
      literal: 'Roti / Bread',
      emoji: '🍞',
      phonetic: 'BRED',
      audioRef: null,
    },
    {
      id: 'rice',
      target: 'Rice',
      native: 'चावल',
      literal: 'Chaawal',
      emoji: '🍚',
      phonetic: 'RAYS',
      audioRef: null,
    },
    {
      id: 'vegetables',
      target: 'Vegetables',
      native: 'सब्ज़ी / सब्ज़ियाँ',
      literal: 'Sabzi / Sabziyaan',
      emoji: '🥬',
      phonetic: 'VEJ-tuh-bulz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Food nouns — countable vs uncountable',
    explanation: "अंग्रेज़ी में कुछ खाने gname uncountable हैं — 'rice', 'bread' — 'a rice' या 'breads' नहीं। 'Some bread', 'a slice of bread', 'a bowl of rice'। 'Vegetables' countable plural। 'I'm vegetarian' = स्पष्ट pre-statement, restaurants में helpful।",
    examples: [
      { target: 'Some bread, please.',     native: 'थोड़ी रोटी, please।' },
      { target: 'A bowl of rice.',          native: 'एक कटोरी चावल।' },
      { target: "I'm vegetarian.",             native: 'मैं शाकाहारी हूँ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'खाने मिलाएँ',
      pairs: [
        { left: 'Bread', right: 'रोटी' },
        { left: 'Rice',  right: 'चावल' },
        { left: 'Vegetables',  right: 'सब्ज़ियाँ' },
      ],
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में लिखें — breakfast में रोटी चाहिए",
      prompt: 'रोटी, please।',
      correct: [
        'Bread, please.',
        'Some bread, please.',
        'Bread please.',
        'Some bread please.',
        'bread, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — waiter को कहें कि चावल चाहिए',
      prompt: 'मुझे चावल चाहिए।',
      correct: [
        'I want rice.',
        "I'd like rice.",
        'I would like rice.',
        'I want some rice.',
        'i want rice.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: "खाली भरें — Mumbai hotel breakfast",
      sentence: "I'd like some ____ and butter, please.",
      options: ['bread', 'rice', 'meat'],
      correct: 'bread',
      context: "Breakfast: bread और butter typical।",
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ — चावल और सब्ज़ी order',
      words: ['I', 'want', 'rice', 'and', 'vegetables'],
      correct: ['I', 'want', 'rice', 'and', 'vegetables'],
      translation: 'मुझे चावल और सब्ज़ी चाहिए',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "Waiter ने पूछा 'What would you like for breakfast?' आपको रोटी और butter चाहिए।",
      options: [
        { text: "Some bread and butter, please.", correct: true },
        { text: "A bread, please.",                correct: false },
        { text: "Breads, please.",                 correct: false },
      ],
      explanation: "'Bread' uncountable — 'a bread' या 'breads' नहीं। 'Some bread' सही।",
    },
  ],

  rwenDialogue: {
    intro: 'Mumbai hotel breakfast room में हैं। Waiter आ रहा है आपके पास।',
    lines: [
      { speaker: 'npc', target: "Good morning, what can I get you for breakfast?", native: 'सुप्रभात, breakfast में क्या लेंगे?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Some bread and tea, please.",  native: 'थोड़ी रोटी और चाय, please।', correct: true,  feedback: 'बढ़िया — clear order, polite।' },
          { target: "A bread please.",                native: 'एक bread please।', correct: false, feedback: "'Bread' uncountable — 'a bread' नहीं। 'Some bread' लें।" },
          { target: "Bread.",                          native: 'रोटी।',                  correct: false, feedback: "'Please' छूटा — restaurant में politeness ज़रूरी।" },
        ],
      },
      { speaker: 'npc', target: "Coming right up.", native: 'अभी ले आता हूँ।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Food नाम हर hotel, restaurant, family dinner में काम आएँगे।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Bread (अंग्रेज़ी में)', correct: ['Bread', 'bread', 'Bread.', 'bread.'] },
      { prompt: 'I want rice (अंग्रेज़ी में)', correct: ['I want rice', 'I want rice.', "I'd like rice", "I'd like rice.", 'i want rice'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज breakfast menu सोचें — English में तीन चीज़ें बोलें: 'Bread, tea, eggs, please.' ज़ोर से, चाहे अकेले ही।",
    rwenSignoff: "कल — restaurant।",
  },

  phase8: {
    scenario: "You're staying at a hotel in Mumbai's Colaba. The breakfast room is busy. An English-speaking server comes to your table to take your order — bread, tea, and eggs.",
    rwenRole: "Tanaka, 28, the breakfast server. Speaks polished English with an Indian accent. Polite, attentive.",
    successCriteria: "User orders at least one food item using 'some' or a polite request frame ('I'd like...', 'Could I have...'), avoids 'a bread' or 'breads', uses 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
