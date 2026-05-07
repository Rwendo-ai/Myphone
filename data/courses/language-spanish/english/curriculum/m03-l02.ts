import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-tengo-anos',
  module: 3,
  lesson: 2,
  title: 'Tengo Años — How Old You Are',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a sentence that will save you embarrassment for life. In English you ARE 30 years old. In Spanish you HAVE 30 years. 'Tengo treinta años.' If you say 'Soy treinta años' — and every English speaker tries this once — Spanish speakers will gently grin. Tener (to have), not ser. Lock this in tonight.",
    culturalNote: "Asking someone's age in Latin America is far less taboo than in English-speaking countries — it's small talk, not a probe. Older relatives often ask kids 'cuántos años tienes' to gauge how to address them. Answering crisply with 'tengo X años' makes you sound natural; pausing makes you sound like a tourist.",
  },

  chunks: [
    {
      id: 'cuantos_anos',
      target: '¿Cuántos años tienes?',
      native: 'How old are you? (lit. how many years do you have?)',
      literal: 'How-many years you-have?',
      emoji: '🎂',
      phonetic: 'KWAN-tos AHN-yos TYEH-nes',
      audioRef: null,
    },
    {
      id: 'tengo_anos',
      target: 'Tengo ___ años',
      native: 'I am ___ years old (lit. I have ___ years)',
      literal: 'I-have ___ years',
      emoji: '🔢',
      phonetic: 'TEN-go ___ AHN-yos',
      audioRef: null,
    },
    {
      id: 'naci_en',
      target: 'Nací en...',
      native: 'I was born in... (year or place)',
      literal: 'I-was-born in...',
      emoji: '👶',
      phonetic: 'nah-SEE en',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tener (to have) — for age, hunger, fear, NOT to be',
    explanation: "Spanish uses 'tener' (to have) for age, hunger ('tengo hambre'), thirst, fear, and being hot/cold. 'Tengo treinta años' literally is 'I have thirty years'. The 'ñ' in 'años' matters — without it, 'anos' means something else entirely (anuses). Always type the ñ.",
    examples: [
      { target: 'Tengo veinticinco años', native: 'I am 25 years old (I have 25 years)' },
      { target: 'Tengo hambre', native: "I am hungry (I have hunger — same tener trick)" },
      { target: 'Tengo treinta y dos años', native: 'I am 32 years old' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '¿Cuántos años tienes?', right: 'How old are you?' },
        { left: 'Tengo ___ años', right: 'I am ___ years old' },
        { left: 'Nací en...', right: 'I was born in...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb for age',
      sentence: '_____ treinta años.',
      options: ['Tengo', 'Soy', 'Estoy'],
      correct: 'Tengo',
      context: "Age in Spanish is something you HAVE, not something you ARE.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (include the ñ in años)',
      prompt: 'How old are you? (informal "tú")',
      correct: ['¿Cuántos años tienes?', 'Cuántos años tienes?', 'cuántos años tienes', '¿Cuántos años tienes', 'cuantos años tienes?', '¿Cuantos años tienes?'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Tengo cuarenta años'. They are saying:",
      question: 'What does this mean?',
      options: [
        { text: 'I am 40 years old', correct: true },
        { text: 'I have 40 things', correct: false },
        { text: 'I was born in the year 40', correct: false },
      ],
      explanation: "Literally 'I have 40 years' — but that's exactly how Spanish expresses age. 'Cuarenta' = 40.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am 30 years old"',
      words: ['años', 'Tengo', 'treinta'],
      correct: ['Tengo', 'treinta', 'años'],
      translation: 'I am 30 years old (I have 30 years)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I was born in 1990 (use "Nací en")',
      correct: ['Nací en 1990', 'nací en 1990', 'Naci en 1990', 'naci en 1990'],
    },
  ],

  rwenDialogue: {
    intro: "A community gathering in East LA — a quinceañera prep party. The grandmother of the quinceañera is sitting in a folding chair and beckons you over to chat.",
    lines: [
      {
        speaker: 'npc',
        target: 'M\'ijo, ¿cuántos años tienes?',
        native: 'Sweetie, how old are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tengo treinta años. Nací en 1995.', native: 'I am 30 years old. I was born in 1995.', correct: true, feedback: "Tener for age, plus the birth year. She nods — exactly how a Latino would answer." },
          { target: 'Soy treinta años.', native: 'I AM 30 years.', correct: false, feedback: "The classic English-speaker error. Spanish HAS years, doesn't BE them. Use 'Tengo treinta años'." },
          { target: 'Estoy treinta.', native: 'I am [located at] 30.', correct: false, feedback: "Estar is for location and temporary states. For age: tener. 'Tengo treinta años' is the only natural phrasing." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Treinta, qué bonito. Yo tengo setenta y ocho.',
        native: '30, how lovely. I am 78 years old.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She used 'tengo' for her age too — same pattern, every age, every Spanish speaker. You're never going back to 'soy treinta'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you? (informal)', correct: ['¿Cuántos años tienes?', '¿Cuántos años tienes', 'Cuántos años tienes?', 'cuántos años tienes', 'cuántos años tienes?'] },
      { prompt: 'I am 30 years old (using tener)', correct: ['Tengo treinta años', 'tengo treinta años'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your real age out loud in Spanish — 'Tengo [number] años.' If you don't know your number yet, look it up. The phrase has to come automatically before you ever need it in conversation.",
    rwenSignoff: "Age is something you have in Spanish, never something you are. Hold onto that. ¡Nos vemos!",
  },

  phase8: {
    scenario: "You're at a Latino community gathering in East LA — a quinceañera planning party. The teen's abuela is curious about you and asks your age in Spanish, expecting a quick natural answer.",
    rwenRole: "Doña Lupe — the quinceañera's grandmother, ~78, kind, will speak slowly but only in Spanish; she'll follow up with 'y ¿de dónde eres?' once age is settled.",
    successCriteria: "User answers with 'Tengo [number] años' (NOT 'Soy [number] años' — the classic English-learner trap), pronounces or types 'años' with the ñ, and can extend with 'Nací en [year]' if asked. Doesn't fall into ser/estar for age.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
