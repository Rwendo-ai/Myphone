import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Evening routine — Llegar a casa',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: la rutina de la noche. Volver a casa, cocinar la cena, ver TV. La parte tranquila del día.",
    culturalNote: "Diferencia cultural: en muchos países latinos la cena es tarde (8-10 PM) y abundante. En EE.UU. la cena es temprano (5:30-7 PM) y suele ser menos formal. Si invitas a un anglo a cenar 'a las 9' va a pensar que te equivocaste — para él/ella eso es ya casi noche cerrada. Y 'I watch TV' es clásico — pero hoy se dice más 'I watch Netflix' o 'I stream something'. La televisión por cable se está extinguiendo.",
  },

  chunks: [
    {
      id: 'i_come_home',
      target: 'I come home at 6.',
      native: 'Llego a casa a las 6.',
      literal: 'I come home at 6',
      emoji: '🏡',
      phonetic: 'ay-KUM-HOHM-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_cook_dinner',
      target: 'I cook dinner.',
      native: 'Cocino la cena.',
      literal: 'I cook dinner',
      emoji: '🍲',
      phonetic: 'ay-KUUK-DIN-er',
      audioRef: null,
    },
    {
      id: 'i_watch_tv',
      target: 'I watch TV.',
      native: 'Veo TV.',
      literal: 'I watch TV',
      emoji: '📺',
      phonetic: 'ay-WOCH-TEE-VEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sequence with "then" and "after that"',
    explanation: "Para encadenar acciones de la rutina se usan: 'first' (primero), 'then' (luego), 'after that' (después de eso), 'finally' (finalmente). 'I come home, then I cook dinner, after that I watch TV.' Esto da fluidez al describir tu día.",
    examples: [
      { target: 'First I come home, then I cook',     native: 'Primero llego a casa, luego cocino' },
      { target: 'After dinner I watch TV',              native: 'Después de cenar veo TV' },
      { target: 'Finally I go to bed at 11',             native: 'Finalmente me acuesto a las 11' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I come home',   right: 'Llego a casa' },
        { left: 'I cook dinner',  right: 'Cocino la cena' },
        { left: 'I watch TV',     right: 'Veo TV' },
        { left: 'I go to bed',    right: 'Me acuesto' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la conjunción',
      sentence: 'I cook dinner, ____ I watch TV.',
      options: ['then', 'before', 'when'],
      correct: 'then',
      context: '"Then" (luego) une dos acciones en orden temporal.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu amigo pregunta a qué hora cenas',
      question: '"What time do you have dinner?" — best response:',
      options: [
        { text: "I usually have dinner around 7.", correct: true },
        { text: 'Dinner.',                           correct: false },
        { text: 'I dinner.',                          correct: false },
      ],
      explanation: 'En inglés "have dinner" o "eat dinner" funcionan. "I dinner" no es correcto — falta el verbo.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Veo TV',
      correct: ['I watch TV', 'i watch TV', 'I watch TV.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — llego a casa a las seis',
      words: ['home', 'come', '6', 'I', 'at'],
      correct: ['I', 'come', 'home', 'at', '6'],
      translation: 'Llego a casa a las 6',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cocino la cena',
      correct: ['I cook dinner', 'i cook dinner', 'I cook dinner.'],
    },
  ],

  rwenDialogue: {
    intro: 'Tu amigo Jake te llama a las 9 PM y se sorprende de que no estés cenando todavía.',
    lines: [
      { speaker: 'npc', target: "Wait, you haven't had dinner yet? It's 9 PM.", native: 'Espera, ¿todavía no has cenado? Son las 9 PM.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come home at 8, then I cook dinner. I usually eat at 9 — it's normal in my country.", native: 'Llego a casa a las 8, luego cocino. Normalmente como a las 9 — es normal en mi país.', correct: true,  feedback: '¡Perfecto! Explicaste tu rutina y la diferencia cultural — Jake aprende algo.' },
          { target: 'No dinner yet.',                                                                          native: 'Cena todavía no.',                                                                       correct: false, feedback: 'Demasiado cortado. La explicación cultural ayuda a Jake a entenderte.' },
          { target: 'I am dinner.',                                                                              native: 'Yo soy cena.',                                                                            correct: false, feedback: '"I am dinner" significaría "yo soy la cena" — comida para alguien. Usa "I have dinner" o "I eat dinner".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! La cena tarde es muy normal en muchos países latinos — explicarlo ayuda a tu amigo a no preocuparse de tu hambre.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Llego a casa (en inglés)',     correct: ['I come home', 'i come home', 'I come home.'] },
      { prompt: 'Veo TV (en inglés)',             correct: ['I watch TV', 'i watch TV', 'I watch TV.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Describe tu noche en inglés en cinco oraciones encadenadas con "first / then / after that / finally". Por ejemplo: "First I come home. Then I cook dinner..."',
    rwenSignoff: 'Mañana entramos al pasado — qué hiciste ayer.',
  },

  phase8: {
    scenario: "You're texting a US friend who wants to call you tonight. Explain your evening routine, what time you'll be free, and propose a good time to call.",
    rwenRole: "Jake, 27, a US friend. Casual, wants to chat tonight.",
    successCriteria: "User describes at least three evening actions in sequence using 'first/then/after that', mentions specific times with 'at', and proposes a call time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
