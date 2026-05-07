import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-triste',
  module: 10,
  lesson: 2,
  title: 'Estoy triste — Sadness & Sympathy',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Spanish doesn't dodge sadness. There's a phrase for the moment a friend's heart breaks — 'Lo siento mucho' — and a heavier one for death: 'Mi sentido pésame'. Knowing them is part of being a real friend in Spanish, not a textbook one. Today we learn how to be present in the hard moments.",
    culturalNote: "In Latin American culture, condolences are often spoken in person, with a hand placed on the arm or a hug. 'Lo siento' literally means 'I feel it' — the speaker is taking some of your pain on themselves. That's a generous verb. 'Pésame' (from pesar — to weigh) carries the weight of grief.",
  },

  chunks: [
    {
      id: 'estoy_triste',
      target: 'Estoy triste',
      native: 'I am sad',
      literal: 'Estoy (I am — temporary) + triste (sad)',
      emoji: '😢',
      phonetic: 'es-TOY TREES-teh',
      audioRef: null,
    },
    {
      id: 'lo_siento',
      target: 'Lo siento mucho',
      native: "I'm so sorry / I feel it deeply",
      literal: 'I-feel-it much — said when someone shares hard news',
      emoji: '💔',
      phonetic: 'loh see-EN-toh MOO-choh',
      audioRef: null,
    },
    {
      id: 'mi_sentido_pesame',
      target: 'Mi sentido pésame',
      native: 'My deepest condolences',
      literal: 'My felt condolence — formal phrase for a death',
      emoji: '🕊️',
      phonetic: 'mee sen-TEE-doh PEH-sah-meh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Lo siento — the empathy verb',
    explanation: "'Lo siento' literally is 'I feel it'. The 'lo' is a placeholder for whatever the other person just shared. Add 'mucho' (a lot) for weight: 'Lo siento mucho'. For deaths, escalate to 'Mi sentido pésame'. The phrase isn't apology — it's shared feeling.",
    examples: [
      { target: 'Lo siento', native: "I'm sorry / I feel it" },
      { target: 'Lo siento mucho', native: "I'm so sorry" },
      { target: 'Mi sentido pésame', native: 'My deepest condolences' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the empathy phrase to its meaning',
      pairs: [
        { left: 'Estoy triste', right: 'I am sad' },
        { left: 'Lo siento mucho', right: "I'm so sorry" },
        { left: 'Mi sentido pésame', right: 'My deepest condolences' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Respond to a friend who shared bad news',
      sentence: 'Lo _____ mucho. Estoy aquí.',
      options: ['siento', 'soy', 'tengo'],
      correct: 'siento',
      context: "I'm so sorry. I'm here.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am sad',
      correct: ['Estoy triste', 'estoy triste'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend's grandmother just passed away. What do you say?",
      question: 'Best response for a death in the family:',
      options: [
        { text: 'Mi sentido pésame. Lo siento mucho.', correct: true },
        { text: '¡Felicidades!', correct: false },
        { text: 'Estoy feliz', correct: false },
      ],
      explanation: "'Mi sentido pésame' is the formal condolence phrase. Pair it with 'Lo siento mucho' for warmth — the formal acknowledgement plus the personal feeling.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Don't be sad — I'm here with you'",
      words: ['No', 'estés', 'triste', '—', 'estoy', 'aquí', 'contigo.'],
      correct: ['No', 'estés', 'triste', '—', 'estoy', 'aquí', 'contigo.'],
      translation: "Don't be sad — I'm here with you",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm so sorry",
      correct: ['Lo siento mucho', 'lo siento mucho'],
    },
  ],

  rwenDialogue: {
    intro: "Late evening WhatsApp call. Your friend Camila in Bogotá tells you her abuela just passed.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mi abuela falleció esta mañana. Todavía no lo creo.',
        native: "My grandmother passed this morning. I still can't believe it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mi sentido pésame, Camila. Lo siento mucho. Estoy aquí contigo.', native: "My deepest condolences, Camila. I'm so sorry. I'm here with you.", correct: true, feedback: "Formal condolence first, personal sorrow second, presence third. That's the full Spanish empathy sequence." },
          { target: 'Estoy triste', native: 'I am sad', correct: false, feedback: "Centre HER grief, not yours — 'Mi sentido pésame, Camila. Lo siento mucho. Estoy aquí contigo.'" },
          { target: 'No te preocupes', native: "Don't worry", correct: false, feedback: "Too dismissive for a death — 'Mi sentido pésame. Lo siento mucho.' Acknowledge the weight." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Gracias. Necesitaba escuchar eso.',
        native: 'Thank you. I needed to hear that.',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Lo siento' — I feel it. You took some of her grief into yourself. That's what the verb does.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am sad', correct: ['Estoy triste', 'estoy triste'] },
      { prompt: 'My deepest condolences', correct: ['Mi sentido pésame', 'mi sentido pésame', 'Mi sentido pesame', 'mi sentido pesame'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of someone going through something hard. Even if you only say it to yourself: 'Lo siento mucho. Estoy aquí.' Practice the rhythm in your mouth — you may need it sooner than you expect.",
    rwenSignoff: "El dolor compartido pesa menos. Hasta mañana.",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "Late at night on a video call with your friend Camila in Bogotá. Her grandmother passed early that morning, and the funeral is tomorrow. The line goes quiet — she needs you to say something, in Spanish, that shows you can hold this with her.",
    rwenRole: "Camila — close friend, mid-30s, raw with grief, calling because her partner is at work and she can't be alone with it; she's not looking for advice, she's listening for whether you can be present in her language.",
    successCriteria: "User leads with 'Mi sentido pésame' or 'Lo siento mucho' (NOT 'Estoy triste' — that centres themselves), avoids minimising phrases ('no te preocupes', 'todo va a estar bien'), and adds presence: 'Estoy aquí' or 'Estoy contigo'. Order: acknowledge her loss → name your feeling for her → offer presence.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
