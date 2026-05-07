import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-tranquilo',
  module: 10,
  lesson: 8,
  title: 'Estoy tranquilo/a — Calm & Listening with Empathy',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Tranquilo' is one of Spanish's quiet superpowers. It means calm, peaceful, at ease — and as a one-word reply ('Tranquilo.'), it tells someone 'relax, you're safe, I've got you.' Today we learn the calm word and the listening phrases that go with it. Because in Spanish, listening is also speaking — 'te escucho', 'te entiendo', 'sigue'.",
    culturalNote: "Latin American conversations leave more room for the speaker than English ones often do. Active-listening phrases — 'Te escucho' (I'm listening to you), 'Te entiendo' (I understand you), 'Sigue, por favor' (please continue) — keep the speaker going without rushing them. They show empathy with words, not silence.",
  },

  chunks: [
    {
      id: 'estoy_tranquilo',
      target: 'Estoy tranquilo/a',
      native: 'I am calm / at peace',
      literal: 'Estoy + tranquilo (-o) / tranquila (-a)',
      emoji: '😌',
      phonetic: 'es-TOY tran-KEE-loh/lah',
      audioRef: null,
    },
    {
      id: 'te_escucho',
      target: 'Te escucho',
      native: 'I am listening to you',
      literal: 'Te (you) + escucho (I-listen) — present tense, full attention',
      emoji: '👂',
      phonetic: 'teh es-KOO-choh',
      audioRef: null,
    },
    {
      id: 'tranquilo_imperative',
      target: 'Tranquilo/a — respira',
      native: 'Easy now — breathe',
      literal: 'Tranquilo as imperative + respira (breathe)',
      emoji: '🫁',
      phonetic: 'tran-KEE-loh/lah, REH-spee-rah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tranquilo as adjective AND imperative',
    explanation: "'Tranquilo/a' wears two hats. As adjective: 'Estoy tranquilo' — I am calm. As one-word imperative: 'Tranquilo.' — said to someone agitated, it means 'relax, easy now'. Spanish does this with several adjectives — 'Calma' (calm), 'Despacio' (slowly). Tone makes the difference between describing yourself and reassuring someone else.",
    examples: [
      { target: 'Estoy tranquilo/a', native: 'I am calm' },
      { target: 'Tranquilo/a — respira', native: 'Easy now — breathe' },
      { target: 'Te escucho. Sigue.', native: "I'm listening. Go on." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the calm/listening phrase to its meaning',
      pairs: [
        { left: 'Estoy tranquilo/a', right: 'I am calm' },
        { left: 'Te escucho', right: 'I am listening to you' },
        { left: 'Tranquilo/a — respira', right: 'Easy now — breathe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell a panicked friend to slow down',
      sentence: 'Tranquilo, _____. Te escucho.',
      options: ['respira', 'corre', 'come'],
      correct: 'respira',
      context: 'Easy, breathe. I am listening to you.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am listening to you',
      correct: ['Te escucho', 'te escucho'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend is mid-sentence sharing something painful and trails off, unsure if they should continue. What do you say?",
      question: 'Encourage them to keep speaking:',
      options: [
        { text: 'Te escucho. Sigue, por favor.', correct: true },
        { text: '¡Felicidades!', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "'Te escucho. Sigue, por favor.' — I'm listening. Please continue. Two short sentences that hand the floor back to the speaker without crowding them.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am calm now — thank you'",
      words: ['Estoy', 'tranquilo/a', 'ahora', '—', 'gracias.'],
      correct: ['Estoy', 'tranquilo/a', 'ahora', '—', 'gracias.'],
      translation: 'I am calm now — thank you',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a woman speaking)',
      prompt: 'I am calm',
      correct: ['Estoy tranquila', 'estoy tranquila'],
    },
  ],

  rwenDialogue: {
    intro: "Your friend Mateo calls in distress about a fight with his partner. He's pacing, talking fast, half-crying.",
    lines: [
      {
        speaker: 'npc',
        target: 'No sé qué hacer. Todo se cayó. No puedo respirar.',
        native: "I don't know what to do. Everything fell apart. I can't breathe.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tranquilo, Mateo. Respira. Te escucho. Sigue cuando estés listo.', native: "Easy, Mateo. Breathe. I'm listening. Go on when you're ready.", correct: true, feedback: "Four short Spanish sentences — calm, breath, presence, permission. That's how you hold someone's storm without competing with it." },
          { target: 'Estoy enojado contigo', native: "I'm angry with you", correct: false, feedback: "He needs calm, not heat — 'Tranquilo, Mateo. Respira. Te escucho.'" },
          { target: '¡Felicidades!', native: 'Congratulations!', correct: false, feedback: "Read the moment — he's in pain. 'Tranquilo, Mateo. Respira. Te escucho. Sigue cuando estés listo.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Gracias. Sólo necesitaba que alguien escuchara.',
        native: 'Thank you. I just needed someone to listen.',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Te escucho.' Two words. They hold more space than any advice. Spanish friendship at its quietest and best.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am listening to you', correct: ['Te escucho', 'te escucho'] },
      { prompt: 'I am calm (a man)', correct: ['Estoy tranquilo', 'estoy tranquilo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time someone shares something heavy with you — friend, family, anyone — try one Spanish line: 'Te escucho. Sigue.' Even if the rest of the conversation is in English. See how it changes the room.",
    rwenSignoff: "Escuchar también es hablar. Hasta mañana.",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "Late evening WhatsApp call. Your friend Mateo in Medellín is in the middle of a hard fight with his partner — he's pacing his apartment, voice shaking, talking too fast. He just needs someone to listen, in Spanish, without rushing him toward solutions.",
    rwenRole: "Mateo — close friend, ~32, in active distress; doesn't want advice, wants presence. Will keep talking if you create space; will shut down if you fill it with platitudes or English.",
    successCriteria: "User uses 'Tranquilo' as an imperative (NOT just describing themselves), instructs a single calming action ('respira'), follows with 'Te escucho', and resists the urge to give advice — instead invites him to continue ('sigue', 'cuando estés listo'). Listening as language, not silence.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
