import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-ser-vs-estar',
  module: 4,
  lesson: 8,
  title: 'Ser vs Estar — The Central Trap',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "This is the lesson. Every English speaker who has ever learned Spanish has been corrected on this. 'Ser' for what something IS (identity, essence). 'Estar' for HOW or WHERE something IS (state, location). Same English verb, two Spanish verbs, and the wrong choice changes the meaning. 'Es aburrido' = he is BORING. 'Está aburrido' = he is BORED. Different word.",
    culturalNote: "Some adjectives flip meaning between ser and estar. 'Ser bueno' = to be a good person. 'Estar bueno' = to look hot / be tasty (slang in some dialects). 'Ser listo' = to be clever. 'Estar listo' = to be ready. 'Ser aburrido' = boring; 'estar aburrido' = bored. Native speakers HEAR this distinction and pick up immediately on which one you mean — even if the English is the same.",
  },

  chunks: [
    {
      id: 'es_aburrido',
      target: 'es aburrido / está aburrido',
      native: 'he is boring / he is bored',
      literal: 'ser → permanent trait; estar → temporary state',
      emoji: '😴',
      phonetic: 'ehs ah-boo-RREE-doh / ehs-TAH ah-boo-RREE-doh',
      audioRef: null,
    },
    {
      id: 'es_listo',
      target: 'es listo / está listo',
      native: 'he is clever / he is ready',
      literal: 'ser → trait (clever); estar → state (ready)',
      emoji: '🧠',
      phonetic: 'ehs LEES-toh / ehs-TAH LEES-toh',
      audioRef: null,
    },
    {
      id: 'es_está',
      target: 'es alta / está cansada',
      native: 'she is tall / she is tired',
      literal: 'ser → permanent quality; estar → temporary state',
      emoji: '📏',
      phonetic: 'ehs AHL-tah / ehs-TAH kahn-SAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser vs estar — the choice changes the meaning',
    explanation: "Use ser for permanent identity, defining traits, origin, profession, time. Use estar for current location, mood, temporary state, anything in flux. Some adjectives have BOTH meanings — and the verb you pick decides which one. 'Ser aburrido' = boring as a person. 'Estar aburrido' = bored right now. Listen to which verb your interlocutor uses; it tells you what they mean.",
    examples: [
      { target: 'Es alta.', native: 'She is tall. (permanent → ser)' },
      { target: 'Está cansada.', native: 'She is tired. (temporary → estar)' },
      { target: 'Es aburrido vs Está aburrido', native: 'He is boring vs He is bored — verb changes meaning' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sentence to its meaning',
      pairs: [
        { left: 'Es aburrido', right: 'He is boring (personality)' },
        { left: 'Está aburrido', right: 'He is bored (right now)' },
        { left: 'Está listo', right: 'He is ready' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: '"My sister is tall." — ser or estar?',
      question: 'Mi hermana ___ alta.',
      options: [
        { text: 'es (alta — permanent quality)', correct: true },
        { text: 'está (would mean she is tall right now temporarily — wrong)', correct: false },
        { text: 'soy', correct: false },
      ],
      explanation: "Height is a permanent trait — that's ser. 'Mi hermana es alta.' If you said 'está alta' it would suggest she got tall this morning, which makes no sense.",
    },
    {
      type: 'multiple_choice',
      instruction: '"The food is cold." — ser or estar?',
      question: 'La comida ___ fría.',
      options: [
        { text: 'está (temperature is a temporary state)', correct: true },
        { text: 'es (would imply food is essentially cold by nature)', correct: false },
        { text: 'soy', correct: false },
      ],
      explanation: "Temperature changes — it's a state, not identity. 'La comida está fría.' Saying 'es fría' would mean cold-as-essence (e.g. ice cream by definition).",
    },
    {
      type: 'fill_blank',
      instruction: 'Pick ser or estar',
      sentence: 'Mi profesora _____ inteligente y _____ contenta hoy.',
      options: ['es / está', 'está / es', 'soy / eres'],
      correct: 'es / está',
      context: 'My teacher IS intelligent (trait → ser) and IS happy today (mood → estar).',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish: "I am tired but my brother is tall"',
      prompt: 'I am tired but my brother is tall',
      correct: ['Estoy cansado pero mi hermano es alto', 'Estoy cansada pero mi hermano es alto', 'estoy cansado pero mi hermano es alto', 'estoy cansada pero mi hermano es alto'],
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'She is bored (right now)',
      correct: ['Está aburrida', 'está aburrida'],
    },
  ],

  rwenDialogue: {
    intro: "Lucía and you are people-watching from a café terrace in Plaza Santa Ana. She points out three people walking by and tests whether you'll pick ser or estar correctly each time.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mira ese chico — ¿es alto o está alto? Y esa señora — ¿es aburrida o está aburrida?',
        native: 'Look at that boy — is he tall (ser) or tall right now (estar)? And that lady — is she boring or bored?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El chico es alto. La señora está aburrida — está esperando.', native: 'The boy is tall. The lady is bored — she is waiting.', correct: true, feedback: "¡Excelente! Height is a trait → ser. Boredom-while-waiting is a state → estar. You picked both correctly." },
          { target: 'El chico está alto. La señora es aburrida.', native: 'Wrong on both', correct: false, feedback: "Height is permanent → 'es alto'. The waiting lady is temporarily bored → 'está aburrida' (saying 'es aburrida' would mean she is a boring person, not tired/bored)." },
          { target: 'No sé.', native: "I don't know", correct: false, feedback: "Try: tall = trait (ser → es alto). Bored from waiting = state (estar → está aburrida)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. Same English word ('is'), two Spanish verbs, two different meanings. You're starting to feel it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'She is tall (permanent)', correct: ['Es alta', 'es alta'] },
      { prompt: 'She is tired (right now)', correct: ['Está cansada', 'está cansada'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at one person near you. Say two sentences silently in Spanish: one describing a permanent trait ('es...'), one describing a current state ('está...'). 'Es alta. Está cansada.' Two verbs, two truths.",
    rwenSignoff: "Ser for what something IS. Estar for how something IS. The whole language pivots on this. Hasta mañana.",
  },

  phase8: {
    scenario: "You're back at the same café in Plaza Santa Ana with Lucía and her cousin Marcos. They're describing relatives, ordering food, and complaining about the weather — and every other sentence forces a choice between ser and estar. Marcos in particular keeps catching beginners on 'es aburrido' vs 'está aburrido'.",
    rwenRole: "Marcos — Lucía's wisecracking 28-year-old cousin who deliberately tests the ser/estar split: 'Mi tío es médico, y hoy está cansado.' 'La paella está rica, pero ese restaurante es caro.' He laughs warmly when you slip but expects you to self-correct.",
    successCriteria: "User correctly distinguishes ser (identity/permanent: 'es médico', 'es alta', 'es de Madrid') from estar (location/state: 'está cansado', 'está en el café', 'la comida está fría'). At least one sentence each, no 'soy en el café' or 'estoy estudiante' errors. Bonus if user catches a meaning-shift adjective (aburrido, listo).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
