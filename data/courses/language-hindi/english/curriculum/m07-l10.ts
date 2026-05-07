import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-thali-full-meal',
  module: 7,
  lesson: 10,
  title: 'Pure Thali — Full Meal Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Tonight you\'re a guest at a full North Indian thali dinner — five katoris, two kinds of roti, rice, papad, sweet at the end. From 'namaste' at the door to 'khaana bahut accha tha' as you leave, run the whole evening in Hindi. Module 7 ends here.",
    culturalNote: "A formal home thali in India is a long ritual — wash hands, sit, namaste before eating, accept refills (the host WILL push), end with sweet (mithai), then sit and chat. Leaving immediately after the last bite reads as treating the family like a restaurant. Stay. Talk. Praise. Then leave with thanks.",
  },

  chunks: [
    {
      id: 'pet_bhar_gaya',
      target: 'पेट भर गया',
      native: 'I\'m full (lit. stomach has filled)',
      literal: 'Pet bhar gaya — stomach filled went',
      emoji: '😌',
      phonetic: 'PET BHAR ga-YA',
      audioRef: null,
    },
    {
      id: 'bahut_dhanyavaad',
      target: 'बहुत बहुत धन्यवाद',
      native: 'Thank you very, very much',
      literal: 'Bahut bahut dhanyavaad — much much thanks',
      emoji: '🙏',
      phonetic: 'ba-HUT ba-HUT DHAN-ya-vaad',
      audioRef: null,
    },
    {
      id: 'phir_milenge',
      target: 'फिर मिलेंगे',
      native: 'We\'ll meet again',
      literal: 'Phir milenge — again will-meet',
      emoji: '👋',
      phonetic: 'PHIR mi-LEN-gay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Compound verbs — gaya, liya, diya (closing the action)',
    explanation: "Hindi pairs a main verb with a 'helper' verb to mark completion. 'Pet bhar gaya' (stomach got filled — completely). 'Khaa liya' (ate — and finished). 'De diya' (gave — and it\'s done). The helper verbs 'jaana' (go), 'lena' (take), 'dena' (give) close the action emotionally — it\'s done, behind you, no going back.",
    examples: [
      { target: 'Pet bhar gaya', native: 'My stomach filled (I\'m full)' },
      { target: 'Maine khaa liya', native: 'I have eaten (and I\'m done)' },
      { target: 'Aapne sab kuch de diya', native: 'You\'ve given everything' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the closing phrase to its meaning',
      pairs: [
        { left: 'Pet bhar gaya', right: 'I\'m full (stomach filled)' },
        { left: 'Bahut bahut dhanyavaad', right: 'Thank you very, very much' },
        { left: 'Phir milenge', right: 'We\'ll meet again' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Aunty offers you a third helping. You\'re honestly full. What\'s the right way to refuse?',
      question: 'Refusing a third helping politely:',
      options: [
        { text: 'Aunty, bas bas — pet bhar gaya. Bahut swaad tha.', correct: true },
        { text: 'Nahi chahiye', correct: false },
        { text: 'I\'m done', correct: false },
      ],
      explanation: "'Bas bas' (enough enough) + 'pet bhar gaya' (I\'m full) + 'bahut swaad tha' (it was very tasty) — refusal cushioned with praise. She\'ll accept it because you\'ve framed the no with appreciation.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Thank you very, very much',
      correct: ['Bahut bahut dhanyavaad', 'bahut bahut dhanyavaad'],
    },
    {
      type: 'fill_blank',
      instruction: 'Say goodbye warmly',
      sentence: 'Phir _____, aunty.',
      options: ['milenge', 'milna', 'mila'],
      correct: 'milenge',
      context: '"We\'ll meet again" — the warm Hindi farewell.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m full, the food was very tasty"',
      words: ['Pet', 'tha', 'gaya,', 'bahut', 'khaana', 'bhar', 'swaad'],
      correct: ['Pet', 'bhar', 'gaya,', 'khaana', 'bahut', 'swaad', 'tha'],
      translation: 'I\'m full, the food was very tasty',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I\'m full (stomach has filled)',
      correct: ['Pet bhar gaya', 'pet bhar gaya'],
    },
  ],

  rwenDialogue: {
    intro: "It\'s the end of dinner at your friend\'s family home in Lucknow. The thalis are being cleared. Aunty wants the verdict.",
    lines: [
      {
        speaker: 'npc',
        target: 'और रोटी लीजिए — एक और दे दूँ?',
        native: 'Have more roti — should I give one more?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Aunty, bas bas! Pet bhar gaya. Khaana bahut swaad tha — aapke haath mein jadoo hai.', native: 'Aunty, enough enough! I\'m full. The food was very tasty — your hands have magic.', correct: true, feedback: 'Polite refusal cushioned with full-hearted praise. The whole family heard that.' },
          { target: 'Nahi chahiye', native: 'I don\'t want it', correct: false, feedback: 'Too blunt for a host. Soften: "Aunty, bas bas. Pet bhar gaya. Bahut swaad tha."' },
          { target: 'Haan ek aur', native: 'Yes one more', correct: false, feedback: 'If you\'re truly full, refuse warmly: "Bas bas, aunty. Pet bhar gaya."' },
        ],
      },
      {
        speaker: 'npc',
        target: 'अरे बेटा, मीठा तो खाना ही पड़ेगा।',
        native: 'Oh dear, you must have something sweet at least.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bilkul aunty, thoda mithai zaroor lunga. Aapne to bahut kuch banaya hai.', native: 'Of course aunty, I\'ll definitely have a little sweet. You\'ve made so much.', correct: true, feedback: 'You knew sweet is non-negotiable in an Indian home — accepted gracefully and credited her effort.' },
          { target: 'Nahi, mujhe nahi chahiye', native: 'No, I don\'t want it', correct: false, feedback: 'Sweet at the end is non-negotiable. Accept a small portion: "Thoda mithai zaroor lunga, aunty."' },
          { target: 'Pet bhar gaya', native: 'I\'m full', correct: false, feedback: 'You already said that. For the sweet specifically: "Bilkul, thoda mithai lunga." She wants you to taste it.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'आप जब चाहो आओ, बेटा। यह आपका भी घर है।',
        native: 'Come whenever you want, dear. This is your home too.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bahut bahut dhanyavaad, aunty. Khaana, baatein, sab kuch — bahut khoob. Phir milenge.', native: 'Thank you very, very much, aunty. The food, the conversation, everything — wonderful. We\'ll meet again.', correct: true, feedback: 'Layered farewell — praise + gratitude + the warm "phir milenge". The family will talk about you for a week. Module 7 complete.' },
          { target: 'Bye aunty', native: 'Bye aunty', correct: false, feedback: 'Too thin for the moment. Try: "Bahut bahut dhanyavaad, aunty. Phir milenge."' },
          { target: 'Achha, jaata hoon', native: 'Okay, I\'m going', correct: false, feedback: 'Add the warmth: "Bahut bahut dhanyavaad, aunty. Phir milenge."' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You came as a guest. You ate, refused a refill warmly, took the sweet, thanked the cook, said you\'d come back. That\'s an Indian dinner — done in Hindi. Module 7: complete. Khaana, swaad, mehmaan-nawazi — all yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I\'m full (stomach has filled)', correct: ['Pet bhar gaya', 'pet bhar gaya'] },
      { prompt: 'Thank you very, very much', correct: ['Bahut bahut dhanyavaad', 'bahut bahut dhanyavaad'] },
    ],
  },

  mission: {
    title: "Your Module 7 Mission",
    task: "Cook or share a meal this week. Run the full Hindi sequence: 'Aaiye, baithiye' → 'kuch lijiye' / 'aur lijiye' → 'bahut swaad hai' → 'pet bhar gaya' → 'bahut bahut dhanyavaad. Phir milenge.' Use it on whoever\'s with you. The vocabulary is now muscle.",
    rwenSignoff: "Atithi devo bhava — the guest is god. Khaana shared, language used, connection made. Module 8 — daily life and routines — begins next. Phir milenge.",
  },

  phase8: {
    scenario: "It\'s 10pm and dinner is over at your friend Rohan\'s parents\' Lucknow home. The thalis are cleared, the gulab jamun has been eaten, and Rohan\'s mother is walking you to the door. This is the moment to deliver the full layered farewell — the one that closes the whole module and gets you invited back next month.",
    rwenRole: "Rohan\'s mother — late 50s, ran the entire dinner herself; she\'ll watch how you close the visit and quietly judge whether you treated this like home or like a restaurant.",
    successCriteria: "User delivers a layered closing that combines: 'pet bhar gaya' for fullness, 'bahut swaad tha' for the food, 'aapke haath mein jadoo hai' or similar to credit the cook directly, 'bahut bahut dhanyavaad' for gratitude, and 'phir milenge' as the warm farewell — and accepts the offered sweet/leftovers rather than refusing outright. NOT a quick English 'thanks, bye'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
