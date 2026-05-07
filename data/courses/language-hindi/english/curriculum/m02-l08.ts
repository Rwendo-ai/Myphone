import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-kitne-ka-hai',
  module: 2,
  lesson: 8,
  title: 'Kitne Ka Hai? — How Much Is It?',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In a Delhi market, the first price you hear is rarely the real price. 'Kitne ka hai?' — how much is it — kicks off the dance. 'Bahut mehenga hai' — it's too expensive — keeps it going. 'Theek hai' — okay — closes it. Three phrases, one of India's oldest social arts.",
    culturalNote: "Bargaining isn't rudeness in India — it's expected, especially in markets, with auto/taxi drivers (when not on meter), with street vendors, and at handicraft shops. The opening price for a foreigner is often 2-3x the local price. The script is: ask price, look unimpressed, name half, meet in the middle. Smile through it. Walk away once or twice — they'll often call you back. In malls, supermarkets, and restaurants, prices are fixed; don't bargain.",
  },

  chunks: [
    {
      id: 'kitne_ka_hai',
      target: 'कितने का है?',
      native: 'How much is it?',
      literal: 'Kitne ka hai — how-much of is',
      emoji: '💰',
      phonetic: 'KIT-ne kaa hai',
      audioRef: null,
    },
    {
      id: 'bahut_mehenga',
      target: 'बहुत महंगा है',
      native: "It's too expensive",
      literal: 'Bahut mehenga hai — very expensive is',
      emoji: '😬',
      phonetic: 'BA-hut me-HEN-gaa hai',
      audioRef: null,
    },
    {
      id: 'kam_kijiye',
      target: 'कम कीजिए',
      native: 'Reduce the price',
      literal: 'Kam kijiye — less do(formal)',
      emoji: '📉',
      phonetic: 'KAM KEE-ji-ye',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bargaining script — three moves',
    explanation: "The bargaining flow runs on three phrases: ask the price, push back on it, ask for less. 'Kitne ka hai?' opens. 'Bahut mehenga hai' is the soft no. 'Kam kijiye' is the formal request to drop. Repeat the cycle until you both land on a price — or you walk and he calls you back.",
    examples: [
      { target: 'कितने का है? (Kitne ka hai?)', native: 'How much is it?' },
      { target: 'बहुत महंगा है (Bahut mehenga hai)', native: "It's too expensive" },
      { target: 'कम कीजिए, कृपया (Kam kijiye, kripaya)', native: 'Please reduce the price' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'कितने का है? (Kitne ka hai?)', right: 'How much is it?' },
        { left: 'बहुत महंगा है (Bahut mehenga hai)', right: "It's too expensive" },
        { left: 'कम कीजिए (Kam kijiye)', right: 'Reduce the price' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Push back on a high price',
      sentence: 'बहुत _____ है।',
      options: ['महंगा (mehenga)', 'सस्ता (sasta)', 'अच्छा (accha)'],
      correct: 'महंगा (mehenga)',
      context: 'A vendor at Janpath market quoted 2000 rupees for a scarf you know is worth 600.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'How much is it?',
      correct: ['कितने का है?', 'Kitne ka hai?', 'kitne ka hai', 'kitne ka hai?'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auto driver in Jaipur quotes 400 rupees for a 5-minute ride. What's your opening move?",
      question: 'Choose the right phrase',
      options: [
        { text: 'बहुत महंगा है। कम कीजिए। (Bahut mehenga hai. Kam kijiye.)', correct: true },
        { text: 'ठीक है (Theek hai)', correct: false },
        { text: 'धन्यवाद (Dhanyavaad)', correct: false },
      ],
      explanation: "'Bahut mehenga hai. Kam kijiye.' is the classic opening pushback. 'Theek hai' would lock in the overpay. 'Dhanyavaad' is what you say at the END once you've agreed.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please reduce the price"',
      words: ['कीजिए (kijiye)', 'कृपया (Kripaya)', 'कम (kam)'],
      correct: ['कृपया (Kripaya)', 'कम (kam)', 'कीजिए (kijiye)'],
      translation: 'Please reduce the price',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: "It's too expensive",
      correct: ['बहुत महंगा है', 'Bahut mehenga hai', 'bahut mehenga hai', 'bahut mehnga hai'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Sarojini Nagar market in Delhi. A vendor is selling kurtas. You like one but the asking price is high.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'भैया, यह कितने का है? (Bhaiya, yeh kitne ka hai?)', native: 'Brother, how much is this?', correct: true, feedback: "Friendly opener, clear question. He grins — he can smell a tourist but you spoke Hindi, so the script is on." },
          { target: 'महंगा (Mehenga)', native: 'Expensive', correct: false, feedback: "You haven't even heard the price yet — start with 'kitne ka hai?', then push back." },
          { target: 'कम कीजिए (Kam kijiye)', native: 'Reduce', correct: false, feedback: "Reduce from what? Get the price first, THEN argue." },
        ],
      },
      {
        speaker: 'npc',
        target: 'पंद्रह सौ का है, सर। बहुत बढ़िया कुर्ता। (Pandrah sau ka hai, sir. Bahut badhiya kurta.)',
        native: '1500 rupees, sir. Very fine kurta.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'अरे नहीं, बहुत महंगा है। कम कीजिए। (Are nahi, bahut mehenga hai. Kam kijiye.)', native: 'Oh no, very expensive. Reduce.', correct: true, feedback: "Right script. He'll counter — that's the dance. You're inside the bargain now." },
          { target: 'ठीक है (Theek hai)', native: 'Okay', correct: false, feedback: "You just locked in the tourist price. 'Theek hai' is the LAST thing you say in this conversation, not the first." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "You're not done yet — push back on the price first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'अच्छा, आप के लिए — आठ सौ। पक्का। (Accha, aap ke liye — aath sau. Pakka.)',
        native: 'Okay, for you — 800. Final.',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Pakka' — final price. Now you decide: counter again, accept with 'theek hai', or walk and see if he calls you back. Bargaining is theatre — and you're learning the part.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much is it?', correct: ['कितने का है?', 'Kitne ka hai?', 'kitne ka hai', 'kitne ka hai?'] },
      { prompt: "It's too expensive", correct: ['बहुत महंगा है', 'Bahut mehenga hai', 'bahut mehenga hai', 'bahut mehnga hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine the next thing you'll buy in a market. Run the script in your head: 'kitne ka hai?' — pause for the price — 'bahut mehenga hai, kam kijiye' — pause — 'theek hai'. Three moves, the bargaining muscle is real.",
    rwenSignoff: "Bargain with a smile. Walk away with the win — or walk away. Phir milenge.",
  },

  phase8: {
    scenario: "You're at Sarojini Nagar market in Delhi on a Saturday afternoon. You've spotted a leather sling bag you actually like, but the vendor's opening price (1800) is at least double what you should pay. The market is roaring around you, three other tourists are watching to see how you handle it, and the vendor is smiling because he can read every move on your face.",
    rwenRole: "Pappu Bhai — ~40, Sarojini Nagar leather goods vendor, twenty years on this stall, can spot a first-time bargainer in a heartbeat; will respect a learner who plays the game properly, will fleece one who doesn't.",
    successCriteria: "User opens with 'Bhaiya, yeh kitne ka hai?' (NOT cold English), pushes back with 'Bahut mehenga hai, kam kijiye', counters with a real number when he drops to 1200 ('teen sau' / 'paanch sau' or similar), and lands the deal with 'theek hai' once they reach a sane price — running the full three-phrase script under pressure rather than caving on the first counter.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
