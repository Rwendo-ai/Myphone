import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cooking verbs — पकाने की क्रियाएँ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "खाना बनाने के verbs: cook (पकाना), chop (काटना), boil (उबालना)। ये काम आते हैं जब आप किसी विदेशी दोस्त को रेसिपी समझाते हैं।",
    culturalNote: "Indian cooking दुनिया में जटिल है — दाल, रोटी, सब्ज़ी, चावल, अचार — एक साधारण meal में तीन-चार dishes। UK/US में dosa एक dish है, पर हमारे लिए वो ख़ुद में full meal है। दादी की रेसिपी English में explain करते वक़्त धीरे चलें: 'First, you boil water. Then, you chop the onions. Then, you cook everything together.' Step-by-step approach से वो भी समझेगा। 'Cook slowly' (धीमी आँच पर पकाओ), 'cover the lid' (ढक्कन लगाओ) — ये tiny skills हैं जो आपकी कहानी English में पहुँचाते हैं।",
  },

  chunks: [
    {
      id: 'cook',
      target: 'Cook',
      native: 'पकाना',
      literal: 'Pakaana',
      emoji: '👨‍🍳',
      phonetic: 'KOOK',
      audioRef: null,
    },
    {
      id: 'chop',
      target: 'Chop',
      native: 'काटना',
      literal: 'Kaatna',
      emoji: '🔪',
      phonetic: 'CHOP',
      audioRef: null,
    },
    {
      id: 'boil',
      target: 'Boil',
      native: 'उबालना',
      literal: 'Ubaalna',
      emoji: '♨️',
      phonetic: 'BOYL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Action verbs — present simple for instructions',
    explanation: "रेसिपी देते वक़्त 'present simple' या 'imperative' use करें: 'You chop the onions. Then you boil the water.' या 'Chop the onions. Boil the water.' दोनों चलते। ज़ुबान सीधी रखें।",
    examples: [
      { target: 'You boil the water first.',  native: 'पहले पानी उबालो।' },
      { target: 'Chop the onions finely.',    native: 'प्याज़ बारीक काटो।' },
      { target: 'Cook it for ten minutes.',   native: 'दस मिनट पकाओ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'पकाने के verbs मिलाएँ',
      pairs: [
        { left: 'Cook', right: 'पकाना' },
        { left: 'Chop', right: 'काटना' },
        { left: 'Boil', right: 'उबालना' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त को रेसिपी की शुरुआत',
      prompt: 'पहले पानी उबालो।',
      correct: [
        'First, boil the water.',
        'First boil the water.',
        'Boil the water first.',
        'You boil the water first.',
        'first, boil the water.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — प्याज़ काटना',
      prompt: 'प्याज़ काटो।',
      correct: [
        'Chop the onions.',
        'Chop the onion.',
        'You chop the onions.',
        'Cut the onions.',
        'chop the onions.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — दाल पकाने में पहला step',
      sentence: "First you ____ the water until it's bubbling.",
      options: ['boil', 'chop', 'cook'],
      correct: 'boil',
      context: "पानी = boil। Chop = काटना। Cook = पकाना।",
    },
    {
      type: 'build_sentence',
      instruction: 'दाल पकाने का पहला step',
      words: ['boil', 'water', 'the', 'First'],
      correct: ['First', 'boil', 'the', 'water'],
      translation: 'पहले पानी उबालो',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "UK दोस्त को दाल बनाना सिखा रहे। शुरुआत कैसे करें?",
      options: [
        { text: "First, you boil water in a big pot.", correct: true },
        { text: "Boil water big pot first.",            correct: false },
        { text: "Pot water boil.",                      correct: false },
      ],
      explanation: "'First, you boil water in a big pot' — पूरा वाक्य, 'first' से शुरू, 'you' (आप) के लिए, instructions के साथ।",
    },
  ],

  rwenDialogue: {
    intro: "London के दोस्त ने पूछा कि दाल कैसे बनाते हो। तीन steps explain करें।",
    lines: [
      { speaker: 'npc', target: "I keep hearing about dal — how do you actually cook it?", native: 'दाल के बारे में सुनते रहते हैं — कैसे बनाते हो?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "First you boil water with the lentils, then you chop onions and tomatoes, then you cook everything together with spices.", native: 'पहले पानी और दाल उबालते हैं, फिर प्याज़-टमाटर काटते हैं, फिर सब मिलाकर मसाले के साथ पकाते हैं।', correct: true, feedback: 'बढ़िया — step-by-step, साफ़।' },
          { target: "Boil. Cook.",                                                              native: 'उबालो। पकाओ।',                                                          correct: false, feedback: "बहुत छोटा — 'first', 'then' जोड़ें।" },
          { target: "Dal is dal.",                                                          native: 'दाल दाल है।',                                                       correct: false, feedback: "explanation नहीं — रेसिपी बताएँ।" },
        ],
      },
      { speaker: 'npc', target: "Oh, like a stew then. Cool.", native: 'अच्छा, स्ट्यू जैसी। मज़ेदार।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! आपने दाल English में पहुँचा दी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Boil the water (अंग्रेज़ी में)', correct: ['Boil the water', 'Boil the water.', 'You boil the water', 'boil the water'] },
      { prompt: 'Chop the onions (अंग्रेज़ी में)', correct: ['Chop the onions', 'Chop the onions.', 'You chop the onions', 'Cut the onions', 'chop the onions'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक खाना सोचें जो आप बना सकते हैं। English में पाँच steps बोलें: 'First I boil ___. Then I chop ___. Then I cook ___ for ___ minutes.' बिना recipe देखे।",
    rwenSignoff: "कल — चाय।",
  },

  phase8: {
    scenario: "You're at your English-speaking friend's flat in Manchester. They've asked you to teach them how to cook dal. Walk them through it step by step.",
    rwenRole: "Tom, 27, your British friend, never cooked Indian food. Will ask 'how much water?', 'what kind of pot?', 'how do I know it's done?'.",
    successCriteria: "User uses 'first', 'then', and at least 2 of: boil, chop, cook. Gives a real step-by-step explanation. Handles a follow-up question.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
