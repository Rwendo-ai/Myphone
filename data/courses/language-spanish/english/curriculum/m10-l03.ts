import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-cansado',
  module: 10,
  lesson: 3,
  title: 'Estoy cansado/a — Tired & The Agreement Rule',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Today you meet one of the friendliest grammar rules in Spanish — adjective agreement. When YOU say you're tired, the word 'cansado' has to match your gender. A man says 'estoy cansado'. A woman says 'estoy cansada'. Same word, different ending. Once you hear it, you'll never miss it again.",
    culturalNote: "In Latin America, '¿Cómo estás?' often gets a real answer — '¡Qué cansado/a estás!' (you look exhausted!) is something a friend will say to your face out of care, not rudeness. Saying you're tired isn't complaining; it's telling the truth so the people around you can show up for you.",
  },

  chunks: [
    {
      id: 'estoy_cansado',
      target: 'Estoy cansado / Estoy cansada',
      native: 'I am tired (man / woman)',
      literal: 'Estoy + cansado (-o for masc.) / cansada (-a for fem.)',
      emoji: '😩',
      phonetic: 'es-TOY kan-SAH-doh / kan-SAH-dah',
      audioRef: null,
    },
    {
      id: 'que_cansado_estas',
      target: '¡Qué cansado/a estás!',
      native: 'How tired you look! (caring exclamation)',
      literal: 'How tired you-are! — said with concern',
      emoji: '😴',
      phonetic: 'keh kan-SAH-doh/dah es-TAHS',
      audioRef: null,
    },
    {
      id: 'agotado',
      target: 'Estoy agotado/a',
      native: 'I am exhausted / wiped out',
      literal: 'Agotado/a — stronger than cansado/a; emptied out',
      emoji: '🥱',
      phonetic: 'es-TOY ah-goh-TAH-doh/dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective agreement — -o for masculine, -a for feminine',
    explanation: "Spanish adjectives change ending to match the person/noun. A man IS cansado, a woman IS cansada. A tired father is 'cansado', a tired mother is 'cansada'. The word is the same — only the final vowel flips. This rule covers most emotion adjectives: contento/contenta, agotado/agotada, preocupado/preocupada.",
    examples: [
      { target: 'Estoy cansado (man)', native: 'I am tired' },
      { target: 'Estoy cansada (woman)', native: 'I am tired' },
      { target: '¡Qué cansada estás, mamá!', native: 'How tired you look, mom!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the tiredness phrase to its meaning',
      pairs: [
        { left: 'Estoy cansado', right: 'I am tired (man)' },
        { left: 'Estoy cansada', right: 'I am tired (woman)' },
        { left: 'Estoy agotado/a', right: 'I am exhausted' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says she is tired. Pick the correct ending.',
      sentence: 'Estoy cansad___ — necesito dormir.',
      options: ['a', 'o', 'os'],
      correct: 'a',
      context: 'I am tired (woman) — I need to sleep.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a man speaking)',
      prompt: 'I am tired',
      correct: ['Estoy cansado', 'estoy cansado'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your friend Marisol shows up looking wiped out. What do you say with care?',
      question: 'Caring exclamation to a tired female friend:',
      options: [
        { text: '¡Qué cansada estás! ¿Quieres descansar?', correct: true },
        { text: '¡Qué cansado estás!', correct: false },
        { text: 'Estoy cansado', correct: false },
      ],
      explanation: "Marisol is feminine, so it's 'cansada' — '¡Qué cansada estás!' Then the offer: '¿Quieres descansar?' That's care, not commentary.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am very tired today' (a woman speaking)",
      words: ['Estoy', 'muy', 'cansada', 'hoy.'],
      correct: ['Estoy', 'muy', 'cansada', 'hoy.'],
      translation: 'I am very tired today',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a woman speaking)',
      prompt: 'I am exhausted',
      correct: ['Estoy agotada', 'estoy agotada'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday afternoon at your tía Beatriz's place in Lima. She walks in from the kitchen, sees your face, and stops.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Qué cansado/a estás! ¿Estás bien?',
        native: 'How tired you look! Are you okay?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, tía. Estoy un poco cansado/a — la semana fue larga. Pero estoy bien.', native: "Yes, aunt. I'm a bit tired — the week was long. But I'm okay.", correct: true, feedback: "Honest, agreeing adjective ending matches your gender, and you reassure her without dismissing her care. Spanish family conversation at its kindest." },
          { target: 'No, estoy feliz', native: 'No, I am happy', correct: false, feedback: "She CAN see you're tired — don't deny it. 'Sí, tía. Estoy un poco cansado/a — la semana fue larga.' Acknowledge it." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "She just expressed concern — meet it: 'Sí, tía. Estoy un poco cansado/a. Pero estoy bien.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ven, siéntate. Te traigo un té.',
        native: 'Come, sit down. I\'ll bring you some tea.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Note the ending you chose — that one vowel is your whole identity in Spanish grammar. Get it right and the language treats you like family.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am tired (a man)', correct: ['Estoy cansado', 'estoy cansado'] },
      { prompt: 'I am tired (a woman)', correct: ['Estoy cansada', 'estoy cansada'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "When someone asks how you are today, answer honestly in Spanish — 'Estoy cansado/a' or 'Estoy agotado/a' if it fits. Pick the ending that matches you. Truth is grammar's first job.",
    rwenSignoff: "Una vocal — y todo cambia. Hasta mañana.",
  },

  phase8: {
    scenario: "Sunday lunch at your tía Beatriz's apartment in Lima. You walked in five minutes ago and she's already noticed. She puts down her wooden spoon, faces you, and says '¡Qué cansado/a estás! ¿Estás bien?' — she actually wants to know.",
    rwenRole: "Tía Beatriz — your aunt, ~60, the kind who reads your face from three metres away; will press if you fob her off, will fuss if you're honest, but in either case wants the truth.",
    successCriteria: "User picks the correct -o or -a ending for their own gender on 'cansado/a' (a structural test), admits truthfully ('Estoy un poco cansado/a' rather than denying), and offers context ('la semana fue larga' or similar) so it sounds like a real conversation, not a textbook line.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
