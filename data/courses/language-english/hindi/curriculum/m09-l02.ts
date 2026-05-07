import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Left, Right, Straight — बाएँ, दाएँ, सीधे',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "जगह पूछ ली — अब जवाब समझना है। 'Turn left', 'Go straight', 'It's on the right'। Foreign शहर में ये काम के शब्द।",
    culturalNote: "India में लोग directions हाथ से दिखाते — 'idhar, udhar, wahaan'। UK/US में सिर्फ़ शब्दों से: 'Turn left at the lights' (signal पर बाएँ मुड़ो)। यह short पर clear। Mumbai में auto-वाला 'left, right' English में बोलता — 'left ले लो, फिर seedha' (mixed)। पूरी English में: 'Turn left, then go straight, it's on the right'। ये directions UK driving theory test में भी आते।",
  },

  chunks: [
    {
      id: 'turn_left',
      target: 'Turn left',
      native: 'बाएँ मुड़ो',
      literal: 'Baayein muro',
      emoji: '⬅️',
      phonetic: 'TURN-LEFT',
      audioRef: null,
    },
    {
      id: 'go_straight',
      target: 'Go straight',
      native: 'सीधे जाओ',
      literal: 'Seedhe jaao',
      emoji: '⬆️',
      phonetic: 'GOH-STRAYT',
      audioRef: null,
    },
    {
      id: 'its_on_the_right',
      target: "It's on the right",
      native: 'दाहिनी तरफ़ है',
      literal: 'Daahini taraf hai',
      emoji: '➡️',
      phonetic: 'its-on-thuh-RYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Direction verbs',
    explanation: "Directions verb से शुरू: 'Turn ___', 'Go ___', 'Take ___'। 'On the right/left' से बताते कि जगह कहाँ है। शब्द कम, पर specific।",
    examples: [
      { target: 'Turn left',           native: 'बाएँ मुड़ो' },
      { target: 'Go straight',         native: 'सीधे जाओ' },
      { target: "It's on the right",   native: 'दाएँ है' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Direction शब्द मिलाएँ',
      pairs: [
        { left: 'Turn left',         right: 'बाएँ मुड़ो' },
        { left: 'Go straight',       right: 'सीधे जाओ' },
        { left: "It's on the right", right: 'दाएँ है' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — direction दे रहे',
      prompt: 'बाएँ मुड़ो',
      correct: [
        'Turn left',
        'Turn left.',
        'turn left',
        'Take a left',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दुकान दाएँ है',
      prompt: 'दाएँ है',
      correct: [
        "It's on the right",
        "It's on the right.",
        "Its on the right",
        'On the right',
        "it's on the right",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'सीधे जाने के लिए',
      words: ['straight', 'Go'],
      correct: ['Go', 'straight'],
      translation: 'सीधे जाओ',
    },
    {
      type: 'fill_blank',
      instruction: 'Direction पर traffic signal',
      sentence: '____ left at the traffic lights.',
      options: ['Turn', 'Stop', 'Drive'],
      correct: 'Turn',
      context: "'Turn ___' = मुड़ना।",
    },
    {
      type: 'build_sentence',
      instruction: 'जगह दाएँ है',
      words: ['the', 'on', "It's", 'right'],
      correct: ["It's", 'on', 'the', 'right'],
      translation: 'दाएँ है',
    },
  ],

  rwenDialogue: {
    intro: "Mumbai conference में हैं। नया attendee cafeteria पूछ रहा।",
    lines: [
      { speaker: 'npc', target: "Hi, sorry — do you know where the cafeteria is?", native: 'नमस्ते, माफ़ कीजिए — cafeteria कहाँ है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure — go straight, then turn left. It's on the right.", native: 'ज़रूर — सीधे जाइए, फिर बाएँ मुड़िए। दाएँ है।', correct: true,  feedback: 'बढ़िया — पूरी direction।' },
          { target: "There.",                                                       native: 'वहाँ।',                                                          correct: false, feedback: 'बहुत छोटा।' },
          { target: "Go and find.",                                                 native: 'जाओ ढूँढो।',                                            correct: false, feedback: 'Rude — proper direction दें।' },
        ],
      },
      { speaker: 'npc', target: "Brilliant, thanks!", native: 'बढ़िया, धन्यवाद!' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Go straight, turn left' — हर शहर में काम।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Turn left (अंग्रेज़ी में)',         correct: ['Turn left', 'Turn left.', 'turn left', 'Take a left'] },
      { prompt: "It's on the right (अंग्रेज़ी में)", correct: ["It's on the right", "It's on the right.", 'On the right', "it's on the right"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल्पना करें कोई आपके घर का रास्ता पूछे। English में बोलें: 'Go straight, turn left at the corner. It's on the right.' बिना देखे।",
    rwenSignoff: "Direction देने वाला शहर का दोस्त। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're at a tech conference at the Park Plaza Westminster Bridge in London. Another delegate, who seems newer than you, has stopped you in the foyer to ask how to find the cafeteria. Give them clear walking directions in English.",
    rwenRole: "Aisha, 26, a fellow conference attendee from Mumbai. Polite, slightly stressed because she's missed the lunch slot opening. Speaks clear English.",
    successCriteria: "User uses at least two of: 'Go straight', 'Turn left/right', 'It's on the left/right', responds to her thank-you appropriately ('You're welcome' / 'No problem'), and stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
