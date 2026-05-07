import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-bus-metro',
  module: 9,
  lesson: 6,
  title: 'Bus & Metro — City Transport',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beyond the auto-rickshaw, two more pillars hold up Indian city transport: the bus and the Metro. Delhi Metro carries 6 million people a day. Mumbai's local trains carry 7.5 million. Bengaluru, Kolkata, Chennai, Hyderabad — every major city now has a Metro. Today you learn how to ride them in Hindi.",
    culturalNote: "Indian Metros are clean, fast, and air-conditioned — a reliable contrast to traffic above. Buses are cheaper and more crowded. Both are split into 'general' and reserved categories — women's coaches on the Metro, women's seats on buses. Hindi signage is everywhere; English is alongside but Hindi flows easier with conductors.",
  },

  chunks: [
    {
      id: 'bus',
      target: 'बस',
      native: 'Bus',
      literal: 'Bus',
      emoji: '🚌',
      phonetic: 'BUS',
      audioRef: null,
    },
    {
      id: 'metro',
      target: 'मेट्रो',
      native: 'Metro',
      literal: 'Metro — underground train',
      emoji: '🚇',
      phonetic: 'MEH-troh',
      audioRef: null,
    },
    {
      id: 'kaunsa_platform',
      target: 'कौनसा प्लेटफॉर्म?',
      native: 'Which platform?',
      literal: 'Kaunsa platform — which platform?',
      emoji: '🚉',
      phonetic: 'KAUN-saa plat-FORM',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Destination] ki bus / [Destination] ki Metro',
    explanation: "'Ki' (of, for) connects a destination to the transport. 'Karol Bagh ki Metro' (the Metro for Karol Bagh). 'Andheri ki bus' (the bus for Andheri). When asking which line: 'Karol Bagh ki Metro kaunsa platform?' — which platform for the Karol Bagh Metro?",
    examples: [
      { target: 'Andheri ki bus', native: 'The bus for Andheri' },
      { target: 'Karol Bagh ki Metro kaunsi line?', native: 'Which line is the Metro for Karol Bagh?' },
      { target: 'Yeh bus kahan jaati hai?', native: 'Where does this bus go?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the transport phrase to its meaning',
      pairs: [
        { left: 'Bus', right: 'Bus' },
        { left: 'Metro', right: 'Metro' },
        { left: 'Kaunsa platform?', right: 'Which platform?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask which platform the Karol Bagh Metro leaves from',
      sentence: 'Karol Bagh ki Metro _____ platform?',
      options: ['kaunsa', 'kahan', 'kya'],
      correct: 'kaunsa',
      context: 'Which platform is the Karol Bagh Metro?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Where does this bus go?',
      correct: ['Yeh bus kahan jaati hai?', 'yeh bus kahan jaati hai?', 'Yeh bus kahan jaati hai', 'yeh bus kahan jaati hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at New Delhi Metro station and need the Yellow Line to Hauz Khas. What do you ask?",
      question: 'Best question at the Metro:',
      options: [
        { text: 'Hauz Khas ki Metro kaunsa platform?', correct: true },
        { text: 'Main Hauz Khas jaata hoon', correct: false },
        { text: 'Hauz Khas accha hai', correct: false },
      ],
      explanation: "'[Destination] ki Metro kaunsa platform?' is the precise question — for Hauz Khas, which platform? Locals get an instant answer.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Where does the Andheri bus leave from?'",
      words: ['Andheri', 'ki', 'bus', 'kahan', 'se', 'jaati', 'hai?'],
      correct: ['Andheri', 'ki', 'bus', 'kahan', 'se', 'jaati', 'hai?'],
      translation: 'Where does the Andheri bus leave from?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Which platform?',
      correct: ['Kaunsa platform?', 'kaunsa platform?', 'Kaunsa platform', 'kaunsa platform'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Rajiv Chowk Metro station in Delhi, looking for the Yellow Line to Hauz Khas. A station attendant is standing at the gate.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, Hauz Khas ki Metro kaunsa platform?', native: 'Brother, which platform is the Hauz Khas Metro?', correct: true, feedback: "Polite address + the correct '[place] ki Metro kaunsa platform?' frame. He points to platform 2." },
          { target: 'Hauz Khas?', native: 'Hauz Khas?', correct: false, feedback: "Too vague — he might think you're asking if you're already there. Use the full frame: 'Hauz Khas ki Metro kaunsa platform?'" },
          { target: 'Yellow Line?', native: 'Yellow Line?', correct: false, feedback: "Switch to the destination instead — Indians navigate by stop name: 'Hauz Khas ki Metro kaunsa platform?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'प्लेटफॉर्म दो — दाएं तरफ।',
        native: 'Platform two — to the right.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Platform do, daayen — using last lesson's daayen already. The directions are stacking. Tomorrow we book a long-distance train.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Which platform?', correct: ['Kaunsa platform?', 'kaunsa platform?', 'Kaunsa platform', 'kaunsa platform'] },
      { prompt: 'Metro', correct: ['Metro', 'metro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look up your nearest city's Metro map (or any city's). Pick a destination and say out loud: '[Destination] ki Metro kaunsa platform?' The frame is universal — once it's in your tongue, you can ride any Metro in India.",
    rwenSignoff: "The Metro is India's underground spine. Now you ride it. Phir milenge.",
  },

  phase8: {
    scenario: "You're at Rajiv Chowk Metro station in Delhi during evening rush hour, trying to reach Hauz Khas on the Yellow Line. The signs are bilingual but the crowd is thick — you need to ask the station attendant in Hindi which platform, then confirm the direction back so you don't end up on a Yellow Line train heading the opposite way to Samaypur Badli.",
    rwenRole: "Rajiv Chowk Metro station attendant — late 20s, in uniform, manages thousands of confused commuters daily, will give a precise platform number AND the direction (towards which terminus) if you ask in Hindi using 'kaunsa platform' and the destination name.",
    successCriteria: "User opens with 'Bhaiya' or 'Sir', uses the full '[Hauz Khas] ki Metro kaunsa platform?' construction (not bare 'Yellow Line?'), confirms the direction by asking 'Kis taraf?' if he doesn't volunteer it, and combines with 'daayen' / 'baayen' from earlier lessons when he points.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
