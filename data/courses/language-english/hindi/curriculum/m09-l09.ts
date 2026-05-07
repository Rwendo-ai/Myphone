import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Asking for help while travelling — मदद माँगना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नया शहर — कुछ देखना है, खाना ढूँढना है। 'Could you help me?', 'I don't know this area', 'Could you write it down?'। ये आपकी ज़िंदगी आसान कर देंगे।",
    culturalNote: "Polite request English में 'Could' या 'Would' से — 'Can you help me' से ज़्यादा formal। 'Could you write it down?' (लिखकर दे दीजिए?) — concierge, hotel, restaurant पर काम। Indian context: हम 'भैया, ज़रा बताइए' से directly पूछते हैं — UK में 'Could you possibly...' होता है। दोनों polite, बस styles अलग।",
  },

  chunks: [
    {
      id: 'could_you_help_me',
      target: 'Could you help me?',
      native: 'मदद कर सकते हैं?',
      literal: 'Madad kar sakte hain',
      emoji: '🙏',
      phonetic: 'KOOD-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_dont_know_area',
      target: "I don't know this area.",
      native: 'यह जगह मुझे नहीं पता।',
      literal: 'Yeh jagah mujhe nahin pata',
      emoji: '🗺️',
      phonetic: 'ay-DOHNT-NOH-this-AIR-ee-uh',
      audioRef: null,
    },
    {
      id: 'could_you_write_it_down',
      target: 'Could you write it down?',
      native: 'लिखकर दे सकते हैं?',
      literal: 'Likh kar de sakte hain',
      emoji: '📝',
      phonetic: 'KOOD-yoo-RYT-it-DOWN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — Could you',
    explanation: "'Could you ___?' polite request की king-formula — concierge, restaurant, station सब जगह। 'Please' end पर जोड़ें: 'Could you help me, please?'।",
    examples: [
      { target: 'Could you help me?',         native: 'मदद कर सकते हैं?' },
      { target: "I don't know this area.",     native: 'यह जगह नहीं पता।' },
      { target: 'Could you write it down?',    native: 'लिखकर दे दीजिए?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Polite सवाल मिलाएँ',
      pairs: [
        { left: 'Could you help me?',         right: 'मदद करेंगे?' },
        { left: "I don't know this area",     right: 'जगह नहीं पता' },
        { left: 'Could you write it down?',    right: 'लिखकर दीजिए?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — मदद माँगना',
      prompt: 'मदद कर सकते हैं?',
      correct: [
        'Could you help me?',
        'Could you help me, please?',
        'Can you help me?',
        'could you help me?',
        'Would you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — जगह नहीं पता',
      prompt: 'यह जगह मुझे नहीं पता।',
      correct: [
        "I don't know this area.",
        "I don't know this area",
        "I'm not familiar with this area.",
        "i don't know this area.",
        "I don't know the area.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'पते लिखकर देना',
      words: ['it', 'write', 'Could', 'down', 'you'],
      correct: ['Could', 'you', 'write', 'it', 'down'],
      translation: 'लिखकर दे दीजिए?',
    },
    {
      type: 'fill_blank',
      instruction: 'Concierge से recommendation',
      sentence: '____ you recommend a good restaurant nearby?',
      options: ['Could', 'Why', 'How'],
      correct: 'Could',
      context: "'Could you recommend ___?' polite formula।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — sightseeing सुझाव',
      prompt: 'क्या आप दो दिन में देखने की चीज़ें सुझाएँगे?',
      correct: [
        'Could you recommend things to see in London in two days?',
        'Could you recommend things to do in London in two days?',
        'Could you suggest things to see in London in two days?',
        'Could you recommend what to see in London in two days?',
        'could you recommend things to see in London in two days?',
      ],
    },
  ],

  rwenDialogue: {
    intro: "London Marriott concierge desk। दो दिन है — plan बनवाना है।",
    lines: [
      { speaker: 'npc', target: "Hi there — how can I help?", native: 'नमस्ते — मदद करूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could you help me? I don't know this area, and I only have two days in London. Could you recommend things to see?", native: 'मदद कर सकते? यह जगह नहीं पता, दो दिन हैं। देखने की चीज़ें सुझा सकते?', correct: true,  feedback: 'बढ़िया — situation और request।' },
          { target: "Show me London.",                                                                                                              native: 'London दिखाओ।',                                                                                                              correct: false, feedback: 'Rude — "Could you" use करें।' },
          { target: "Tour.",                                                                                                                        native: 'Tour।',                                                                                                              correct: false, feedback: "अधूरा।" },
        ],
      },
      { speaker: 'npc', target: "Of course! For two days, I'd say the British Museum, Tower of London, and a Thames walk. Shall I write it down for you?", native: 'ज़रूर! दो दिन के लिए British Museum, Tower of London, Thames walk। लिखकर दूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please — could you write it down? Thank you so much.", native: 'हाँ please — लिखकर दीजिए? बहुत धन्यवाद।', correct: true,  feedback: 'बढ़िया — polite finish।' },
          { target: "Write.",                                                              native: 'लिखो।',                                                  correct: false, feedback: "'Could you' और 'please'।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Could you ___?' — हर concierge की key।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Could you help me? (अंग्रेज़ी में)',     correct: ['Could you help me?', 'Could you help me, please?', 'Can you help me?', 'could you help me?'] },
      { prompt: 'Could you write it down? (अंग्रेज़ी में)', correct: ['Could you write it down?', 'Could you write it down, please?', 'Can you write it down?', 'could you write it down?'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Hotel की कल्पना। English में बोलें: 'Could you help me? I don't know this area. Could you recommend a good restaurant?' और 'Could you write it down?' बिना देखे।",
    rwenSignoff: "Polite पूछने वाला सब पाता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at the concierge desk of your hotel in central London. You have just two days in the city, never visited before, and want a sensible tourist plan. Ask the concierge for recommendations and ask them to write it down for you.",
    rwenRole: "Marcus, 38, hotel concierge. Knowledgeable, enthusiastic, will recommend 3-4 sights and offer to write them down. Polished British English.",
    successCriteria: "User asks 'Could you help me?', explains 'I don't know this area' or 'I only have two days', accepts the recommendation, asks 'Could you write it down?', and thanks him warmly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
