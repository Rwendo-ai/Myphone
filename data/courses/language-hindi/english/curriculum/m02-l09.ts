import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-madad-emergency',
  module: 2,
  lesson: 9,
  title: 'Madad! — Emergency Phrases',
  estimatedMinutes: 6,
  xpReward: 25,
  crisisHandoff: true,

  hook: {
    rwenLine: "I hope you never need this lesson. But in a real emergency — illness, accident, theft — three words can change the outcome. 'Madad!' (help!), 'doctor chahiye' (I need a doctor), 'police bulao' (call the police). Short. Loud. Clear.",
    culturalNote: "In an emergency in India, the people around you will mobilise — strangers will stop, hand over phones, flag down autos to the hospital. The challenge isn't lack of help, it's making the situation legible fast. Hindi works better than English for shouted emergencies because everyone hears it. The national emergency number is 112; police is 100, ambulance is 102. In tourist cities, hotel reception is also a fast route to help.",
  },

  chunks: [
    {
      id: 'madad',
      target: 'मदद!',
      native: 'Help!',
      literal: 'Madad — help/aid (a shouted call)',
      emoji: '🆘',
      phonetic: 'ma-DAD',
      audioRef: null,
    },
    {
      id: 'doctor_chahiye',
      target: 'मुझे डॉक्टर चाहिए',
      native: 'I need a doctor',
      literal: 'Mujhe doctor chahiye — to-me doctor needed',
      emoji: '🏥',
      phonetic: 'MU-jhe DOK-tar CHAA-hi-ye',
      audioRef: null,
    },
    {
      id: 'police_bulao',
      target: 'पुलिस बुलाओ',
      native: 'Call the police',
      literal: 'Police bulao — police call(command)',
      emoji: '🚓',
      phonetic: 'po-LEES bu-LAA-o',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe X chahiye — I need X',
    explanation: "'Mujhe... chahiye' is the structure for 'I need [thing]'. Slot any noun in the middle. 'Mujhe paani chahiye' — I need water. 'Mujhe doctor chahiye' — I need a doctor. 'Mujhe madad chahiye' — I need help. One pattern, every emergency request.",
    examples: [
      { target: 'मुझे डॉक्टर चाहिए (Mujhe doctor chahiye)', native: 'I need a doctor' },
      { target: 'मुझे पानी चाहिए (Mujhe paani chahiye)', native: 'I need water' },
      { target: 'मुझे मदद चाहिए (Mujhe madad chahiye)', native: 'I need help' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each emergency phrase to its meaning',
      pairs: [
        { left: 'मदद! (Madad!)', right: 'Help!' },
        { left: 'डॉक्टर चाहिए (Doctor chahiye)', right: 'I need a doctor' },
        { left: 'पुलिस बुलाओ (Police bulao)', right: 'Call the police' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You need help urgently. What goes in the middle?',
      sentence: 'मुझे _____ चाहिए।',
      options: ['मदद (madad)', 'धन्यवाद (dhanyavaad)', 'कृपया (kripaya)'],
      correct: 'मदद (madad)',
      context: 'You\'re feeling faint and need to flag a stranger.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Help! (shouted call for help)',
      correct: ['मदद!', 'मदद', 'Madad!', 'Madad', 'madad'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your phone has been snatched in a crowded market. What's the immediate move?",
      question: 'Choose the right phrase',
      options: [
        { text: 'पुलिस बुलाओ! (Police bulao!)', correct: true },
        { text: 'धन्यवाद (Dhanyavaad)', correct: false },
        { text: 'ठीक है (Theek hai)', correct: false },
      ],
      explanation: "'Police bulao!' (call the police!) gets bystanders moving immediately. The other two would be wildly out of place in this moment.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I need a doctor"',
      words: ['चाहिए (chahiye)', 'डॉक्टर (doctor)', 'मुझे (Mujhe)'],
      correct: ['मुझे (Mujhe)', 'डॉक्टर (doctor)', 'चाहिए (chahiye)'],
      translation: 'I need a doctor',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'I need water',
      correct: ['मुझे पानी चाहिए', 'Mujhe paani chahiye', 'mujhe paani chahiye', 'mujhe pani chahiye'],
    },
  ],

  rwenDialogue: {
    intro: "You're walking through a quieter lane in Pahar Ganj when you start feeling lightheaded — the heat plus dehydration. A shopkeeper notices you stumble.",
    lines: [
      {
        speaker: 'npc',
        target: 'सर, ठीक हैं आप? (Sir, theek hain aap?)',
        native: 'Sir, are you okay?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मुझे मदद चाहिए। मुझे पानी चाहिए। (Mujhe madad chahiye. Mujhe paani chahiye.)', native: 'I need help. I need water.', correct: true, feedback: "Clear, named, fast. He grabs a water bottle and waves you to a chair." },
          { target: 'ठीक है (Theek hai)', native: "I'm okay", correct: false, feedback: "If you're not okay, don't say you are. Indians won't push if you say theek hai — they'll move on. Be honest in an emergency." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "Thanks before help is reverse order. Tell him what you need first, thank him after." },
        ],
      },
      {
        speaker: 'npc',
        target: 'बैठिए, बैठिए। यह पानी लीजिए। डॉक्टर चाहिए? (Baithiye, baithiye. Yeh paani lijiye. Doctor chahiye?)',
        native: 'Sit, sit. Take this water. Need a doctor?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'शायद। थोड़ी देर रुकिए। (Shayad. Thodi der rukiye.)', native: 'Maybe. Wait a moment.', correct: true, feedback: "Honest — you don't know yet. 'Shayad' buys you a minute to feel out whether you actually need one." },
          { target: 'नहीं, ठीक है (Nahi, theek hai)', native: "No, I'm fine", correct: false, feedback: "Only say that if you actually feel okay. If you're still woozy, hedge with 'shayad'." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "Answer his question first — does the doctor question need a yes, no, or shayad?" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Honest emergency Hindi got you a chair, water, and the offer of a doctor inside thirty seconds. That's the system working — but only if you name what you need.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need a doctor', correct: ['मुझे डॉक्टर चाहिए', 'Mujhe doctor chahiye', 'mujhe doctor chahiye'] },
      { prompt: 'Call the police', correct: ['पुलिस बुलाओ', 'Police bulao', 'police bulao'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Save these three numbers in your phone before you next travel: 112 (national emergency), 100 (police), 102 (ambulance). Then say 'mujhe doctor chahiye' and 'police bulao' out loud once each — make the words available to your panicked future self.",
    rwenSignoff: "Stay safe. Speak clearly when it matters most. Phir milenge.",
  },

  phase8: {
    scenario: "Your travel companion has just twisted their ankle badly stepping off a kerb in Connaught Place. They can't put weight on it. It's 8pm, traffic is heavy, you don't have a working data connection, and there's a paan-wallah at the corner watching the situation. You need help fast — and you need to keep your head.",
    rwenRole: "Mukesh Bhai — ~45, paan-wallah at the CP outer circle, sharp-eyed, used to dealing with foreigners and emergencies on his corner; will hail an auto and call a doctor's number if you ask clearly, will assume it's not serious if you don't.",
    successCriteria: "User opens with 'Bhaiya, mujhe madad chahiye' to flag the situation as urgent (NOT a casual 'kahaan hai...?'), follows with 'mujhe doctor chahiye' to make the medical need explicit, and uses 'jaldi' (quickly) or 'auto bulao' (call an auto) — running the mujhe-X-chahiye pattern under genuine pressure without freezing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
