import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-soy-principiante',
  module: 3,
  lesson: 8,
  title: 'Soy Principiante — I\'m a Beginner',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The single most useful sentence for a Spanish learner: 'Soy principiante.' I'm a beginner. Say it early and Latinos slow down, switch to simpler vocabulary, and root for you. Don't say it and they assume you're fluent — and they will speak at full speed. This is your most powerful tool. Use it.",
    culturalNote: "Latin Americans tend to be incredibly generous with language learners. Saying 'soy principiante' or 'estoy aprendiendo' is greeted with smiles, encouragement, and patience — never judgement. The opposite is also true: pretending to speak well when you don't gets you stranded mid-conversation. Honesty is your best friend in Spanish.",
  },

  chunks: [
    {
      id: 'soy_principiante',
      target: 'Soy principiante',
      native: 'I am a beginner',
      literal: 'I-am beginner',
      emoji: '🌱',
      phonetic: 'soy preen-see-PYAN-teh',
      audioRef: null,
    },
    {
      id: 'estoy_aprendiendo',
      target: 'Estoy aprendiendo',
      native: 'I\'m learning (right now)',
      literal: 'I-am learning',
      emoji: '📚',
      phonetic: 'es-TOY ah-pren-DYEN-doh',
      audioRef: null,
    },
    {
      id: 'mas_despacio',
      target: 'Más despacio, por favor',
      native: 'Slower, please',
      literal: 'More slowly, please',
      emoji: '🐢',
      phonetic: 'mas des-PAH-syo por fah-BOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser vs Estar — identity vs ongoing state',
    explanation: "Here's where ser and estar finally make sense side by side. 'Soy principiante' uses ser because being a beginner is a category you belong to right now — your level, your identity-as-learner. 'Estoy aprendiendo' uses estar because the -ing form ('aprendiendo') describes an ongoing action, which is always estar. Same lesson, both verbs, different jobs.",
    examples: [
      { target: 'Soy principiante', native: 'I am a beginner (ser — category)' },
      { target: 'Estoy aprendiendo español', native: 'I am learning Spanish (estar + -iendo)' },
      { target: 'Estoy un poco confundido', native: 'I am a little confused (estar — temporary state)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Soy principiante', right: 'I am a beginner' },
        { left: 'Estoy aprendiendo', right: "I'm learning (right now)" },
        { left: 'Más despacio, por favor', right: 'Slower, please' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb — "learning" is an ongoing action',
      sentence: '_____ aprendiendo español.',
      options: ['Estoy', 'Soy', 'Tengo'],
      correct: 'Estoy',
      context: 'The -iendo / -ando form (right now, in progress) always pairs with estar.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am a beginner',
      correct: ['Soy principiante', 'soy principiante'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone is speaking too fast. The most polite ask is:",
      question: 'Choose the request',
      options: [
        { text: 'Más despacio, por favor', correct: true },
        { text: 'Habla lento.', correct: false },
        { text: 'No comprendo nada.', correct: false },
      ],
      explanation: "'Más despacio, por favor' (slower, please) is the universal polite request. The other options aren't wrong, just less common — 'no comprendo nada' (I don't get anything) sounds defeated.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am learning Spanish, slower please"',
      words: ['español', 'aprendiendo', 'Estoy', 'más', 'despacio', 'por favor'],
      correct: ['Estoy', 'aprendiendo', 'español', 'más', 'despacio', 'por favor'],
      translation: 'I am learning Spanish, slower please',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm learning (just the phrase, no language specified)",
      correct: ['Estoy aprendiendo', 'estoy aprendiendo'],
    },
  ],

  rwenDialogue: {
    intro: "The Barcelona conference. Day three, post-lunch session. The keynote speaker is rapid-fire and you're losing the thread. The colleague next to you switches to ask if you're following.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Estás siguiendo? Habla muy rápido.',
        native: 'Are you keeping up? She\'s talking very fast.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy principiante. Estoy aprendiendo. Habla muy rápido para mí.', native: 'I\'m a beginner. I\'m learning. She talks very fast for me.', correct: true, feedback: "Three short sentences and the colleague will rephrase the speaker's points for you. That's the magic of admitting your level." },
          { target: 'Sí, todo bien.', native: 'Yes, all good.', correct: false, feedback: "Pretending to follow when you don't gets you nowhere — and is awkward when she asks a follow-up question. 'Soy principiante' is honest and gets you help." },
          { target: 'Estoy principiante.', native: 'I am [temporarily] a beginner.', correct: false, feedback: "Beginner is a category you ARE, not a state you're IN — use ser, not estar. 'Soy principiante' is right." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, no te preocupes. Yo te traduzco lo importante.',
        native: 'Oh, don\'t worry. I\'ll translate the important parts for you.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She slowed down, switched to translator mode, and your day got 100% easier. That's what 'soy principiante' unlocks.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a beginner', correct: ['Soy principiante', 'soy principiante'] },
      { prompt: "I'm learning (right now)", correct: ['Estoy aprendiendo', 'estoy aprendiendo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you talk to a Spanish speaker today — in person, online, anywhere — open with 'Soy principiante. Estoy aprendiendo.' Watch them light up and slow down.",
    rwenSignoff: "Honesty about your level is your fastest path to fluency. Use it freely. ¡Adelante!",
  },

  phase8: {
    scenario: "Day three at the Barcelona conference, the post-lunch keynote. The speaker is racing through slides and a colleague next to you asks (in Spanish) whether you're keeping up.",
    rwenRole: "Sofía — Argentine colleague at the conference, late 30s, will switch to translator-mode for you the moment she knows you're a beginner; bilingual, kind, no pity vibe.",
    successCriteria: "User says 'Soy principiante' (NOT 'Estoy principiante' — beginner is a category, ser) AND 'Estoy aprendiendo' (using estar + -iendo correctly), and asks 'más despacio, por favor' or similar to invite slower speech. Doesn't pretend to follow when they don't.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
