import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-bonjour',
  module: 1,
  lesson: 1,
  title: 'Bonjour — Hello',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Bonjour! In France, the moment you walk into a shop, café, or even an elevator, you say 'Bonjour' — first, before anything else. Skip it and people quietly judge you. Today, we open every door the French way.",
    culturalNote: "In English we can mumble 'hi' or skip the greeting entirely — totally fine. In France, walking into a small shop without a clear 'Bonjour' to the shopkeeper is read as cold or rude. It's not a formality, it's an acknowledgement that another human is in the room.",
  },

  chunks: [
    {
      id: 'bonjour',
      target: 'Bonjour',
      native: 'Hello / Good day',
      literal: 'Good-day',
      emoji: '☀️',
      phonetic: 'bohn-ZHOOR',
      audioRef: null,
    },
    {
      id: 'salut',
      target: 'Salut',
      native: 'Hi (casual)',
      literal: 'Greetings (informal)',
      emoji: '👋',
      phonetic: 'sah-LOO',
      audioRef: null,
    },
    {
      id: 'bonsoir',
      target: 'Bonsoir',
      native: 'Good evening',
      literal: 'Good-evening',
      emoji: '🌆',
      phonetic: 'bohn-SWAHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greeting',
    explanation: 'French splits the day into two parts: until roughly 6pm you say Bonjour, after that Bonsoir. Salut is informal — only for people you already know.',
    examples: [
      { target: 'Bonjour, madame', native: 'Hello, madam (any time of day, polite)' },
      { target: 'Salut, Marc!', native: 'Hi, Marc! (friend)' },
      { target: 'Bonsoir, monsieur', native: 'Good evening, sir' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French greeting to its meaning',
      pairs: [
        { left: 'Bonjour', right: 'Hello / Good day' },
        { left: 'Salut', right: 'Hi (casual)' },
        { left: 'Bonsoir', right: 'Good evening' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You walk into a boulangerie at 10am. What do you say?',
      sentence: '_____, madame.',
      options: ['Bonjour', 'Salut', 'Bonsoir'],
      correct: 'Bonjour',
      context: "Strangers and shopkeepers always get the polite Bonjour, never Salut.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Good evening',
      correct: ['Bonsoir', 'bonsoir'],
    },
    {
      type: 'build_sentence',
      instruction: 'Greet your friend Léa casually — put the words in order',
      words: ['Léa!', 'Salut,'],
      correct: ['Salut,', 'Léa!'],
      translation: 'Hi, Léa!',
    },
    {
      type: 'multiple_choice',
      instruction: "You enter a café at 7:30pm. The owner is behind the counter — you've never met. What do you say?",
      question: 'Choose the right greeting',
      options: [
        { text: 'Bonsoir', correct: true },
        { text: 'Salut', correct: false },
        { text: 'Bonjour', correct: false },
      ],
      explanation: "After ~6pm it's Bonsoir. Salut would be too familiar with someone you don't know.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Hello (to a stranger, in the morning)',
      correct: ['Bonjour', 'bonjour'],
    },
  ],

  rwenDialogue: {
    intro: "It's 9am. You walk into a small Parisian boulangerie. The boulangère looks up from arranging baguettes. Greet her.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour, madame', native: 'Hello, madam', correct: true, feedback: 'Perfect — warm, polite, exactly what she expects.' },
          { target: 'Salut!', native: 'Hi!', correct: false, feedback: "Too casual for someone you don't know — she'll find it rude." },
          { target: 'Bonsoir', native: 'Good evening', correct: false, feedback: "Wrong time of day — Bonsoir is for after ~6pm." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bonjour! Vous désirez?',
        native: 'Hello! What would you like?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Heard that warmth in her reply? That's what 'Bonjour' unlocks. You just opened the door.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Hello / Good day (in French)',
        correct: ['Bonjour', 'bonjour'],
      },
      {
        prompt: 'Good evening (in French)',
        correct: ['Bonsoir', 'bonsoir'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet someone today with 'Bonjour' — out loud. The barista, your reflection, your dog. Let your mouth feel the shape of it.",
    rwenSignoff: "I'll ask you tomorrow how it went. À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "It's 9am in a small boulangerie in the 11th arrondissement of Paris. The boulangère is behind the counter arranging fresh baguettes. You walk in to buy a baguette tradition for breakfast — and in France that means greeting her properly first, before pointing at any bread.",
    rwenRole: "Madame Élise — the boulangère, ~55, kind but a stickler for politesse; she warms up immediately when she hears a clear Bonjour, and freezes a little if customers skip it.",
    successCriteria: "User opens with a clear 'Bonjour, madame' (NOT 'Salut' — they don't know her — and NOT 'Bonsoir' since it's morning), THEN asks for what they want. Greeting comes BEFORE the request, never after.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
