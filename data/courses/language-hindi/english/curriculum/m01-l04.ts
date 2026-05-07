import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-shubh-sandhya',
  module: 1,
  lesson: 4,
  title: 'Shubh Sandhya — Good Evening',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Evening in India is sacred. Diya lamps come out, families gather, the heat finally breaks. The greeting that goes with it — 'Shubh sandhya' — carries that warmth. Like Suprabhat at dawn, this is the lyrical evening form.",
    culturalNote: "'Shubh sandhya' (शुभ संध्या) — shubh (auspicious) + sandhya (evening) — is the formal evening greeting. In daily Hinglish life most people just say 'Good evening' or 'Namaste'. But during a Diwali visit, an evening puja, or arriving at a family home for dinner, 'Shubh sandhya' lands beautifully.",
  },

  chunks: [
    {
      id: 'shubh_sandhya',
      target: 'शुभ संध्या',
      native: 'Good evening (formal/auspicious)',
      literal: 'Shubh sandhya — auspicious evening',
      emoji: '🌇',
      phonetic: 'SHOOBH SAND-yaa',
      audioRef: null,
    },
    {
      id: 'shubh_ratri',
      target: 'शुभ रात्रि',
      native: 'Good night',
      literal: 'Shubh ratri — auspicious night',
      emoji: '🌙',
      phonetic: 'SHOOBH RAA-tree',
      audioRef: null,
    },
    {
      id: 'andar_aaiye',
      target: 'अंदर आइए',
      native: 'Please come inside (formal)',
      literal: 'Andar aaiye — inside come(formal)',
      emoji: '🚪',
      phonetic: 'AN-dar AA-i-yay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Shubh — the auspicious modifier',
    explanation: "'Shubh' (शुभ) means 'auspicious' or 'good in a blessed way'. It pairs with time-of-day words and life events. You'll see it everywhere — Shubh Diwali, Shubh Vivah (auspicious wedding), Shubh prabhat. It's one of Hindi's warmest, most ceremonial words.",
    examples: [
      { target: 'Shubh sandhya', native: 'Good evening (auspicious evening)' },
      { target: 'Shubh ratri', native: 'Good night (auspicious night)' },
      { target: 'Shubh Diwali', native: 'Happy Diwali (auspicious Diwali)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Shubh sandhya', right: 'Good evening (formal)' },
        { left: 'Shubh ratri', right: 'Good night' },
        { left: 'Andar aaiye', right: 'Please come inside (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the warm evening greeting',
      sentence: '_____ sandhya, aap kaise hain?',
      options: ['Shubh', 'Suprabhat', 'Kya'],
      correct: 'Shubh',
      context: "You arrive at a family home for Diwali dinner — make the evening feel auspicious.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Good evening (formal/auspicious)',
      correct: ['Shubh sandhya', 'shubh sandhya'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at your friend's home at 7pm during Diwali week. What do you say first?",
      question: 'Choose the best opening greeting',
      options: [
        { text: 'Shubh sandhya', correct: true },
        { text: 'Suprabhat', correct: false },
        { text: 'Shubh ratri', correct: false },
      ],
      explanation: "'Shubh sandhya' is the formal evening greeting — perfect for arriving at a family home. 'Suprabhat' is morning; 'Shubh ratri' is bedtime.",
    },
    {
      type: 'build_sentence',
      instruction: 'Put the evening greeting in order',
      words: ['hain?', 'aap', 'Shubh', 'kaise', 'sandhya,'],
      correct: ['Shubh', 'sandhya,', 'aap', 'kaise', 'hain?'],
      translation: 'Good evening, how are you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Good night',
      correct: ['Shubh ratri', 'shubh ratri'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at a family home in Jaipur at 7pm during Diwali week. The hostess opens the door — diya lamps glowing behind her, the smell of pakoras drifting out. Greet her.",
    lines: [
      {
        speaker: 'npc',
        target: 'शुभ संध्या',
        native: 'Shubh sandhya (Good evening)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shubh sandhya, aap kaise hain?', native: 'Good evening, how are you? (formal)', correct: true, feedback: "You matched her register and her warmth. The diyas seem to glow brighter." },
          { target: 'Suprabhat', native: 'Good morning', correct: false, feedback: "It's evening, not dawn. Use 'Shubh sandhya' for evening." },
          { target: 'Shubh ratri', native: 'Good night', correct: false, feedback: "'Shubh ratri' is for bedtime / parting at night. Arrival at 7pm needs 'Shubh sandhya'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'अंदर आइए, स्वागत है',
        native: 'Please come inside, welcome',
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked into that lit-up home with the right words. That's what auspicious greetings do — they open the door before the door opens.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good evening (formal/auspicious)', correct: ['Shubh sandhya', 'shubh sandhya'] },
      { prompt: 'Good night', correct: ['Shubh ratri', 'shubh ratri'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Shubh sandhya' to someone tonight — a family member, housemate, anyone. Notice how it lands differently from a flat 'good evening'.",
    rwenSignoff: "Evenings carry their own blessing. Shubh ratri — until tomorrow.",
  },

  phase8: {
    scenario: "It's 7pm during Diwali week. You've been invited to your friend Rohan's family home in Jaipur for the festival. You step up to the door — diya lamps along the threshold, rangoli on the floor, his mother opens the door wearing a silk saree. This is the threshold moment that will set the whole evening's tone.",
    rwenRole: "Auntie-ji — Rohan's mother, ~52, hospitable Diwali hostess; a 'Shubh sandhya' from a guest tells her you understand the auspicious framing of the night.",
    successCriteria: "User leads with 'Shubh sandhya' (NOT 'Good evening' in English, NOT the morning 'Suprabhat', NOT bedtime 'Shubh ratri'), follows with formal 'Aap kaise hain?' because she's an elder hostess, and ideally references the festival or evening context rather than reverting to morning chunks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
