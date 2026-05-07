import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-rwen-parivar',
  module: 5,
  lesson: 10,
  title: "Rwen's Parivār — The Full Diwali Conversation",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today is the big one. Rwen's whole family is at the Diwali dinner — Dādā-jī, Dādī-jī, Pitā-jī, Mātā-jī, Tāyā-jī, Chachī-jī, Bhaiyā, Didī, Choṭā bhāī, Buā, Fūfā, Māmā, Nānī. Three generations under one roof, every relationship distinct in Hindi. You're going to navigate it.",
    culturalNote: "An Indian Diwali dinner is the deep end of joint-family vocabulary. People you've never met will be introduced rapid-fire — 'yeh tumhārī Buā-jī, yeh Fūfā-jī, yeh chote bhāī kā beṭā…' Knowing the words isn't optional. It's the difference between being a guest who tried and a guest who belonged.",
  },

  chunks: [
    {
      id: 'shubh_diwali',
      target: 'शुभ दीवाली (Shubh Diwālī)',
      native: 'Happy Diwali (auspicious Diwali)',
      literal: 'Shubh = auspicious; Diwālī = the festival',
      emoji: '🪔',
      phonetic: 'SHOOBH dee-WAA-lee',
      audioRef: null,
    },
    {
      id: 'aap_se_milkar',
      target: 'आप से मिलकर खुशी हुई (Aap se milkar khushī huī)',
      native: 'Pleased to meet you (formal)',
      literal: 'Aap se (with you) milkar (meeting) khushī huī (happiness happened)',
      emoji: '🤝',
      phonetic: 'AAP say MIL-kar khu-SHEE huee',
      audioRef: null,
    },
    {
      id: 'sab_log',
      target: 'सब लोग (Sab log)',
      native: 'Everyone / all the people',
      literal: 'Sab (all) + log (people)',
      emoji: '👥',
      phonetic: 'SAB LOG',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Greeting an entire joint family at once",
    explanation: "When you walk into a room of Indian relatives, you greet the eldest first, then work through the generations. 'Namaste Dādā-jī, namaste Dādī-jī…' (grandparents) → '…namaste Pitā-jī, namaste Mātā-jī, namaste Tāyā-jī, Chachī-jī…' (parent generation) → 'Namaste Bhaiyā, Didī…' (siblings/cousins). NEVER lump them together as 'sab log'. Each title earns acknowledgement.",
    examples: [
      { target: 'Shubh Diwālī, Dādā-jī!', native: 'Happy Diwali, Grandfather!' },
      { target: 'Aap se milkar khushī huī, Tāyā-jī.', native: 'Pleased to meet you, Older Uncle.' },
      { target: 'Sab log kaise hain?', native: 'How is everyone? (after individual greetings)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Diwali-conversation phrase to its meaning',
      pairs: [
        { left: 'Shubh Diwālī', right: 'Happy Diwali' },
        { left: 'Aap se milkar khushī huī', right: 'Pleased to meet you' },
        { left: 'Sab log', right: 'Everyone' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Walking into a Diwali gathering, you greet the eldest first',
      sentence: 'Shubh Diwālī, _____-jī!',
      options: ['Dādā', 'Choṭā bhāī', 'Pati'],
      correct: 'Dādā',
      context: 'Greet the eldest paternal grandfather first — Dādā-jī.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Pleased to meet you (formal)',
      correct: ['Aap se milkar khushī huī', 'Aap se milkar khushi hui', 'aap se milkar khushi hui'],
    },
    {
      type: 'multiple_choice',
      instruction: "You enter a joint-family Diwali room. Who do you greet FIRST?",
      question: 'Order of greeting in a joint family:',
      options: [
        { text: 'The eldest — Dādā-jī or Dādī-jī if present, then down through generations', correct: true },
        { text: 'Everyone at once with "namaste sab log"', correct: false },
        { text: 'Whoever is closest to the door', correct: false },
      ],
      explanation: "Hindi joint-family etiquette: oldest first, working down. Lumping everyone with 'sab log' as your opening is considered lazy — each elder deserves a direct greeting with their title.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Happy Diwali to all of you"',
      words: ['ko.', 'sab', 'Diwālī', 'Shubh', 'log'],
      correct: ['Shubh', 'Diwālī', 'sab', 'log', 'ko.'],
      translation: 'Happy Diwali to everyone.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Happy Diwali',
      correct: ['Shubh Diwālī', 'Shubh Diwali', 'shubh diwali'],
    },
  ],

  rwenDialogue: {
    intro: "You step into Rwen's family flat in Lucknow on the night of Diwali. The whole joint family is there — three generations, fifteen people. The eldest, Dādā-jī, is sitting on the sofa with Dādī-jī. Your turn.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Sabse pehle, Dādā-jī aur Dādī-jī. Phir baaki sab.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shubh Diwālī, Dādā-jī! Shubh Diwālī, Dādī-jī! Aap se milkar khushī huī.', native: 'Happy Diwali, Grandfather! Happy Diwali, Grandmother! Pleased to meet you.', correct: true, feedback: "Eldest first, both addressed by title, formal pleasantry to follow. The whole room is watching and the room is impressed." },
          { target: 'Hi everyone!', native: 'Hi everyone (English).', correct: false, feedback: "Three generations of relatives just heard 'Hi everyone'. Switch to Hindi: 'Shubh Diwālī, Dādā-jī! Shubh Diwālī, Dādī-jī!' — eldest first." },
          { target: 'Namaste sab log.', native: 'Hello everyone.', correct: false, feedback: "Lumping the family together is considered lazy in joint-family etiquette. Greet the eldest individually first: Dādā-jī, then Dādī-jī, then work through the generations." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Beṭā, aao, baiṭho. Tum hamāre ghar ke ho.',
        native: 'Dear, come, sit. You belong to our home.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Dhanyavād, Dādī-jī. Yeh mere liye bahut khās hai.', native: 'Thank you, Grandmother. This is very special for me.', correct: true, feedback: "Receiving the welcome with grace, addressing Dādī-jī directly, and sharing a feeling. Perfect joint-family register." },
          { target: 'OK thanks.', native: 'OK thanks (English casual).', correct: false, feedback: "She said something deeply welcoming — 'you belong to our home'. Honour it: 'Dhanyavād, Dādī-jī. Yeh mere liye bahut khās hai.'" },
          { target: 'Mujhe jānā hai.', native: 'I have to leave.', correct: false, feedback: "Wrong direction! She's welcoming you in. Receive the welcome warmly: 'Dhanyavād, Dādī-jī.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bahut achcha. Pūrā parivār dekh rahā hai — aur sab log khush hain. Tum sirf mehmān nahin ho. Aaj se, hamāre parivār kā hisā ho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — the full set.',
    prompts: [
      { prompt: 'Happy Diwali', correct: ['Shubh Diwālī', 'Shubh Diwali', 'shubh diwali'] },
      { prompt: 'Pleased to meet you (formal)', correct: ['Aap se milkar khushī huī', 'Aap se milkar khushi hui', 'aap se milkar khushi hui'] },
      { prompt: 'Paternal grandfather', correct: ['Dādā-jī', 'Dada-ji', 'dada-ji', 'Dadaji', 'dadaji'] },
      { prompt: "Mother's brother", correct: ['Māmā', 'Mama', 'mama'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine a Diwali, an Eid, a wedding — a big Indian family event with three generations. Practice walking through it in your head: greet the eldest first by title, work through every relationship. You now have the words for almost every person in that room. Use them.",
    rwenSignoff: "Tumne mhuri ke saath chalnā seekh liyā. Aaj se, Hindi parivār-bhāshā tumhārī hai. Phir milenge — har Diwālī.",
  },

  phase8: {
    scenario: "It's the climax of the trip — Diwali night at Rwen's Lucknow family flat, fifteen relatives across three generations. Dādā-jī and Dādī-jī (paternal grandparents) are on the sofa; Pitā-jī, Mātā-jī, and Tāyā-jī (older paternal uncle) are by the puja thali; Chachī-jī (younger paternal aunt) is laying out mithai; Anjali Didī, Bhaiyā Arjun, and Choṭā bhāī Rohan are arranging diyas; Buā-jī (paternal aunt) is on the phone; Māmā-jī (maternal uncle) just walked in with sweets. You have one shot to greet everyone correctly, eldest first, working through every generation in Hindi.",
    rwenRole: "The full family, with Dādā-jī Hari (~80, the patriarch, sharp and watchful) leading the response. Rwen stays beside you the whole time as quiet support. If you greet the eldest first and use the right titles for at least 5 family members, the room visibly relaxes and Dādā-jī delivers a quiet line of approval.",
    successCriteria: "User greets the eldest (Dādā-jī, Dādī-jī) FIRST with 'Shubh Diwālī' and '-jī'. Uses correct paternal vs maternal titles where it matters (Dādā NOT Nānā for the paternal grandfather; Māmā NOT Chachā for the maternal uncle). Distinguishes Tāyā-jī (older paternal uncle) from Chachā/Chachī (younger paternal). Acknowledges Bhaiyā/Didī by their elder-sibling titles. Sustains Hindi (with light English mixing OK) across at least 5 named family members across 2 generations. Doesn't lump the family with 'sab log' as the opener.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
