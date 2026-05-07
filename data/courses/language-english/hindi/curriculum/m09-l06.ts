import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the airport — Airport पर',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Airport — यहाँ English के बिना जान निकलती है। 'Boarding pass', 'departure gate', 'customs' — Heathrow, JFK, Dubai, Singapore — एक ही शब्द हर जगह।",
    culturalNote: "Indian airports — Mumbai (BOM), Delhi (DEL), Bangalore (BLR) — सब major international hubs। Gulf flights से UK/US/Australia जाने वालों की लाखों संख्या। Connection miss होना ज़िंदगी में एक बार होता ही है — 'I missed my connection' — यह वाक्य आपको ज़मीन पर नहीं छोड़ेगा। Customs पर 'Anything to declare?' = कुछ declare करना है? (mostly नहीं, अगर आप normal traveller हो)। Indian airports पर हिंदी signs भी होते — पर international zone पूरा English।",
  },

  chunks: [
    {
      id: 'boarding_pass',
      target: 'Boarding pass',
      native: 'Boarding pass',
      literal: 'Boarding pass',
      emoji: '🛂',
      phonetic: 'BOR-ding-PAS',
      audioRef: null,
    },
    {
      id: 'departure_gate',
      target: 'Departure gate',
      native: 'जाने का gate',
      literal: 'Jaane ka gate',
      emoji: '🚪',
      phonetic: 'di-PAR-cher-GAYT',
      audioRef: null,
    },
    {
      id: 'customs',
      target: 'Customs',
      native: 'Customs',
      literal: 'Customs',
      emoji: '🛃',
      phonetic: 'KUS-tums',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Air travel vocabulary',
    explanation: "ज़रूरी शब्द: 'Boarding pass' (plane में चढ़ने का pass), 'gate' / 'departure gate' (कहाँ से चढ़ना है), 'customs' (देश के अंदर पहुँच कर check)। 'Where is gate ___?' = ज़रूरी सवाल।",
    examples: [
      { target: 'Boarding pass',    native: 'Boarding pass' },
      { target: 'Departure gate',   native: 'जाने का gate' },
      { target: 'Customs',           native: 'Customs' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Airport शब्द मिलाएँ',
      pairs: [
        { left: 'Boarding pass',  right: 'Boarding pass' },
        { left: 'Departure gate', right: 'जाने का gate' },
        { left: 'Customs',         right: 'सामान check' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — gate ढूँढ रहे',
      prompt: 'Gate 25 कहाँ है?',
      correct: [
        'Where is gate 25?',
        'Where is the departure gate 25?',
        'Where is gate twenty-five?',
        'where is gate 25?',
        'Where is the gate 25?',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — boarding pass दिखाते',
      prompt: 'यह मेरा boarding pass है।',
      correct: [
        'Here is my boarding pass.',
        "Here's my boarding pass.",
        'Here is my boarding pass',
        "here's my boarding pass.",
        'This is my boarding pass.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Departure gate पूछना',
      words: ['the', 'gate', 'is', 'Where', 'departure'],
      correct: ['Where', 'is', 'the', 'departure', 'gate'],
      translation: 'जाने का gate कहाँ है?',
    },
    {
      type: 'fill_blank',
      instruction: 'Customs पर सवाल',
      sentence: "Do you have anything to ____?",
      options: ['declare', 'discover', 'desire'],
      correct: 'declare',
      context: "Customs: 'declare' = बताना (e.g. ज़्यादा cash, food)।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — connection miss',
      prompt: 'मेरी connection miss हो गई।',
      correct: [
        "I missed my connection.",
        "I've missed my connection.",
        "I missed my connecting flight.",
        "i missed my connection.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Heathrow Terminal 5 पर। Mumbai जाने वाली connection miss हो गई। Gate agent से बात।",
    lines: [
      { speaker: 'npc', target: "Hi there, can I help?", native: 'नमस्ते, मदद करूँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. I missed my connection to Mumbai. Where do I go?", native: 'हाँ please। Mumbai की connection miss हो गई। कहाँ जाऊँ?', correct: true,  feedback: 'बढ़िया — समस्या और सवाल एक sentence में।' },
          { target: "Plane gone.",                                                            native: 'Plane गया।',                                                                correct: false, feedback: 'अधूरा।' },
          { target: "Help me Mumbai.",                                                          native: 'Mumbai help।',                                                            correct: false, feedback: "Polite नहीं — 'I missed my connection' से शुरू।" },
        ],
      },
      { speaker: 'npc', target: "Oh no — let me check. The next flight is in 4 hours. Take this voucher to gate 18.", native: 'अरे — चेक करूँ। अगला flight 4 घंटे में। यह voucher gate 18 ले जाइए।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I missed my connection' से Heathrow जैसी जगहों पर भी आप survive करेंगे।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Boarding pass (अंग्रेज़ी में)',  correct: ['Boarding pass', 'boarding pass', 'My boarding pass'] },
      { prompt: 'Where is the gate? (अंग्रेज़ी में)', correct: ['Where is the gate?', 'Where is the departure gate?', 'where is the gate?', 'Where is gate ___?'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल्पना airport पर। English में बोलें: 'Here is my boarding pass.' → 'Where is the departure gate?' → 'I have nothing to declare.' बिना देखे।",
    rwenSignoff: "Heathrow में चलने वाला हर जगह चलता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're stranded at Heathrow Terminal 5 because your inbound BA flight from Bangalore landed late and you've missed your connection to Mumbai. Find a gate agent and explain the situation, ask what to do, and find out the next flight.",
    rwenRole: "David, 33, BA gate agent at T5. Calm, problem-solver, asks for your boarding pass. Speaks clear British English.",
    successCriteria: "User explains 'I missed my connection to Mumbai', shows 'my boarding pass', asks about the next flight or where to go, and follows the agent's instruction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
