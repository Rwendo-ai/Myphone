import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'How far? — कितनी दूर?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "जगह मिल गई — अब पूछो: 'कितनी दूर? पैदल चलूँ या Ola/Uber/auto लूँ?' English में 'How far?'।",
    culturalNote: "India में हम 'दो मिनट का काम' कहते हैं — actually 20 मिनट लग सकते हैं! UK/US में '5 minutes' = असली पाँच। Mumbai में '5 km' = traffic में 1 घंटा हो सकता है। 'Just around the corner' (बस मोड़ पर) — Mumbai/Delhi में थोड़ा कम trustable, London में literal होता। Indian context में auto-rickshaw, Ola, Uber — सब आम। '20 minutes by walk' और '20 minutes by Uber' अलग बात।",
  },

  chunks: [
    {
      id: 'how_far',
      target: 'How far?',
      native: 'कितनी दूर?',
      literal: 'Kitni door?',
      emoji: '📏',
      phonetic: 'HOW-FAR',
      audioRef: null,
    },
    {
      id: 'five_minutes_walk',
      target: "Five minutes' walk",
      native: 'पाँच मिनट का पैदल रास्ता',
      literal: 'Paanch minute ka paidal raasta',
      emoji: '🚶',
      phonetic: 'fyv-MIN-its-WAWK',
      audioRef: null,
    },
    {
      id: 'around_the_corner',
      target: 'Just around the corner',
      native: 'बस मोड़ पर',
      literal: 'Bas mor par',
      emoji: '↩️',
      phonetic: 'JUST-uh-ROWND-thuh-COR-ner',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Distance — near and far',
    explanation: "'How far?' या 'Is it far?' से distance पूछो। जवाब time से ('5 minutes'), walk से ('a 5-minute walk'), या phrase से ('just around the corner', 'down the road')।",
    examples: [
      { target: 'How far?',              native: 'कितनी दूर?' },
      { target: "Five minutes' walk",    native: 'पाँच मिनट पैदल' },
      { target: 'Just around the corner', native: 'बस मोड़ पर' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Distance शब्द मिलाएँ',
      pairs: [
        { left: 'How far?',                right: 'कितनी दूर?' },
        { left: "Five minutes' walk",      right: '5 मिनट पैदल' },
        { left: 'Just around the corner',  right: 'बस मोड़ पर' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'कितनी दूर?',
      correct: [
        'How far?',
        'How far is it?',
        'Is it far?',
        'how far?',
        'How far is it from here?',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — बहुत क़रीब है',
      prompt: 'बस मोड़ पर है',
      correct: [
        'Just around the corner',
        'Around the corner',
        'just around the corner',
        "It's just around the corner",
        'Just round the corner',
      ],
    },
    {
      type: 'build_sentence',
      instruction: '5 मिनट पैदल',
      words: ["minutes'", 'Five', 'walk'],
      correct: ['Five', "minutes'", 'walk'],
      translation: '5 मिनट पैदल',
    },
    {
      type: 'fill_blank',
      instruction: 'Distance का सवाल',
      sentence: '____ far is the station?',
      options: ['How', 'Where', 'When'],
      correct: 'How',
      context: "Distance के सवाल 'How far' से।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें — airport पर पूछा',
      question: 'किसी ने कहा: "It\'s a 20-minute walk." क्या मतलब?',
      options: [
        { text: '20 मिनट पैदल चलना है',    correct: true },
        { text: '20 घंटे लगेंगे',                  correct: false },
        { text: 'बाएँ है',                                   correct: false },
      ],
      explanation: "'A 20-minute walk' = पैदल का समय। India में Ola/Uber/auto लेना बेहतर इतनी दूर के लिए।",
    },
  ],

  rwenDialogue: {
    intro: "London hotel में पहुँचे। Premier Inn से कितना दूर? सवाल पूछें।",
    lines: [
      { speaker: 'npc', target: "Need a hand?", native: 'मदद चाहिए?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. How far is the Premier Inn from here?", native: 'हाँ please। यहाँ से Premier Inn कितना दूर?', correct: true,  feedback: 'बढ़िया — distance पूछा।' },
          { target: "Hotel?",                                                  native: 'Hotel?',                                                correct: false, feedback: 'अधूरा।' },
          { target: "I am tired.",                                              native: 'मैं थका हूँ।',                                                correct: false, feedback: 'सवाल नहीं पूछा।' },
        ],
      },
      { speaker: 'npc', target: "Oh, it's just around the corner — about a 3-minute walk.", native: 'बस मोड़ पर — 3 मिनट का पैदल रास्ता।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Just around the corner' सुना तो taxi की ज़रूरत नहीं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'How far? (अंग्रेज़ी में)',                correct: ['How far?', 'How far', 'Is it far?', 'how far?', 'How far is it?'] },
      { prompt: 'Just around the corner (अंग्रेज़ी में)', correct: ['Just around the corner', 'Around the corner', "It's just around the corner", 'just around the corner'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने मोहल्ले की दो जगहें सोचें। English में पूछें: 'How far is the ___?' फिर ख़ुद जवाब दें: 'It's a ___-minute walk' या 'It's just around the corner'।",
    rwenSignoff: "Distance पूछने वाला taxi नहीं भागता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at a hotel reception in Edinburgh. You want to walk to the National Museum of Scotland but you're not sure if it's walkable in the rain. Ask the receptionist how far it is and decide whether to walk or take a cab.",
    rwenRole: "Catriona, 41, hotel receptionist. Patient and chatty, gives helpful estimates with options ('5 minutes if you cut through the park', 'a tenner in a cab'). Scottish English.",
    successCriteria: "User asks 'How far is ___?' or 'Is it far?', understands the time/distance answer, decides ('I'll walk' / 'I'll get a cab'), and thanks her.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
