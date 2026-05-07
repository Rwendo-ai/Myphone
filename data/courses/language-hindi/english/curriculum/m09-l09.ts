import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-airport',
  module: 9,
  lesson: 9,
  title: 'At the Airport — Hawai Adda',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Indira Gandhi (Delhi), Chhatrapati Shivaji (Mumbai), Kempegowda (Bengaluru) — Indian airports are the gateways for 350 million annual passengers. The terminal staff, the check-in counter agents, the security officers — most operate in Hindi as their first language. Your check-in just got 30% friendlier the moment you switched from English.",
    culturalNote: "Indian airports run on a mixture of formal procedure and informal warmth. A 'Namaste' to the security officer at the X-ray gate isn't required, but it changes the temperature of the interaction. The check-in agent who hears Hindi from a foreigner often quietly hands over a better seat or skips the bag fee.",
  },

  chunks: [
    {
      id: 'hawai_adda',
      target: 'हवाई अड्डा',
      native: 'Airport',
      literal: 'Hawai adda — air station',
      emoji: '🛫',
      phonetic: 'ha-WAA-ee UD-daa',
      audioRef: null,
    },
    {
      id: 'check_in_counter',
      target: 'चेक-इन काउंटर कहाँ है?',
      native: 'Where is the check-in counter?',
      literal: 'Check-in counter kahan hai',
      emoji: '🧳',
      phonetic: 'check-in COUN-tar ka-HAAN hai',
      audioRef: null,
    },
    {
      id: 'boarding_pass',
      target: 'बोर्डिंग पास',
      native: 'Boarding pass',
      literal: 'Boarding pass — same word',
      emoji: '🎟️',
      phonetic: 'BOAR-ding pass',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Service] kahan hai? — Where is the [service]?',
    explanation: "The pattern from m09-l01 returns at the airport — 'kahan hai?' (where is?) attaches to any service. 'Check-in counter kahan hai?', 'Boarding gate kahan hai?', 'Bathroom kahan hai?'. One frame, every airport need answered.",
    examples: [
      { target: 'Check-in counter kahan hai?', native: 'Where is the check-in counter?' },
      { target: 'Boarding gate kahan hai?', native: 'Where is the boarding gate?' },
      { target: 'Boarding pass dijiye, please', native: 'Boarding pass please (when handing over)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the airport phrase to its meaning',
      pairs: [
        { left: 'Hawai adda', right: 'Airport' },
        { left: 'Check-in counter kahan hai?', right: 'Where is check-in?' },
        { left: 'Boarding pass', right: 'Boarding pass' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask where the boarding gate is',
      sentence: 'Boarding gate _____ hai?',
      options: ['kahan', 'kya', 'kab'],
      correct: 'kahan',
      context: 'Where is the boarding gate?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Where is the check-in counter?',
      correct: ['Check-in counter kahan hai?', 'check-in counter kahan hai?', 'Check-in counter kahan hai', 'check-in counter kahan hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'hawai adda' literally mean?",
      question: 'Hawai adda literal meaning:',
      options: [
        { text: 'Air station / air stop', correct: true },
        { text: 'Bird house', correct: false },
        { text: 'Flying market', correct: false },
      ],
      explanation: "'Hawai' (air, sky) + 'adda' (station, stop, hangout). Hawai adda = air station = airport. 'Adda' is the same word used for bus stations, fish markets, and casual hangout spots.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Brother, where is gate 14?'",
      words: ['Bhaiya,', 'gate', 'chaudah', 'kahan', 'hai?'],
      correct: ['Bhaiya,', 'gate', 'chaudah', 'kahan', 'hai?'],
      translation: 'Brother, where is gate 14?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Airport',
      correct: ['Hawai adda', 'hawai adda'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Indira Gandhi International in Delhi, looking for your IndiGo check-in counter. You spot a uniformed staff member.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste. IndiGo ka check-in counter kahan hai?', native: 'Namaste. Where is the IndiGo check-in counter?', correct: true, feedback: "Greeting + airline-specific question. He's already pointing toward Counter 8." },
          { target: 'Check-in?', native: 'Check-in?', correct: false, feedback: "Too clipped — the airport has dozens of airlines. Specify: 'IndiGo ka check-in counter kahan hai?'" },
          { target: 'Where is IndiGo?', native: 'Where is IndiGo? (in English)', correct: false, feedback: "He'll answer in English, but not warmly. Try: 'Namaste. IndiGo ka check-in counter kahan hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'काउंटर आठ — सीधे जाइए, फिर बाएं।',
        native: 'Counter 8 — go straight, then left.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Counter aath, seedhe jaiye, baayen — every word from this module's earlier lessons. The patterns are stacking. One more lesson — Module 9 ends tomorrow with a full Mumbai journey.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Airport', correct: ['Hawai adda', 'hawai adda'] },
      { prompt: 'Where is the check-in counter?', correct: ['Check-in counter kahan hai?', 'check-in counter kahan hai?', 'Check-in counter kahan hai', 'check-in counter kahan hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say each airport phrase out loud as if you're already in the terminal: 'Check-in counter kahan hai?' 'Boarding gate kahan hai?' 'Bathroom kahan hai?' By the third you won't need to think — the frame is automatic.",
    rwenSignoff: "Hawai adda hai. The plane is waiting. Phir milenge.",
  },

  phase8: {
    scenario: "You're at Terminal 3 of Indira Gandhi International airport in Delhi, two hours before an IndiGo domestic flight to Bengaluru. You need to find the IndiGo check-in counter, then later the boarding gate. The terminal is huge and bilingual signs help, but the staff respond warmer when you ask in Hindi using the 'kahan hai?' frame.",
    rwenRole: "Terminal 3 ground staff member at IGI airport — late 20s, in IndiGo uniform, fluent in Hindi and English; will give the standard answer in English to a tourist asking in English, but lights up and gives a more detailed walkthrough (counter number + which baggage drop) when addressed in Hindi.",
    successCriteria: "User opens with 'Namaste', uses the full '[IndiGo ka check-in counter] kahan hai?' frame (NOT bare 'check-in?'), follows up at the boarding gate with the same '[gate number] kahan hai?' construction, and combines with 'seedhe jaiye / baayen mudiye' from earlier lessons when she points the way.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
