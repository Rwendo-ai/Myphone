import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Being Sick — Estoy enfermo',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: estar enfermo. Las frases para describir cómo te sientes mal y pedir ayuda médica.",
    culturalNote: "Trampa enorme: en español decimos 'tengo dolor de cabeza'. En inglés es 'I HAVE a headache' (con 'have'). Pero 'estoy enfermo' es 'I'M sick' (con 'to be'). La regla: condiciones físicas específicas usan 'have' (a headache, a cold, a fever); estados generales usan 'to be' (sick, tired, exhausted). Y atención: en EE.UU. la atención médica es CARÍSIMA sin seguro. Saber decir 'I don't feel well' antes de que sea grave puede ahorrarte una visita de $500 al ER.",
  },

  chunks: [
    {
      id: 'dont_feel_well',
      target: "I don't feel well",
      native: 'No me siento bien',
      literal: 'I do-not feel well',
      emoji: '🤒',
      phonetic: 'ay-DOHNT-feel-WEL',
      audioRef: null,
    },
    {
      id: 'have_headache',
      target: 'I have a headache',
      native: 'Tengo dolor de cabeza',
      literal: 'I-have a headache',
      emoji: '🤕',
      phonetic: 'ay-HAV-uh-HED-ayk',
      audioRef: null,
    },
    {
      id: 'need_a_doctor',
      target: 'I need a doctor',
      native: 'Necesito un médico',
      literal: 'I-need a doctor',
      emoji: '👨‍⚕️',
      phonetic: 'ay-NEED-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Have vs be for symptoms',
    explanation: "Síntomas específicos = 'have': 'I have a headache', 'I have a cold', 'I have a fever', 'I have a sore throat'. Estados generales = 'to be': 'I'm sick', 'I'm tired', 'I'm exhausted'. La estructura inglesa elige según si es síntoma puntual (have) o estado general (be).",
    examples: [
      { target: 'I have a fever',           native: 'Tengo fiebre' },
      { target: "I'm exhausted",             native: 'Estoy agotado' },
      { target: 'I have a sore throat',      native: 'Me duele la garganta' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I don't feel well",  right: 'No me siento bien' },
        { left: 'I have a headache',   right: 'Tengo dolor de cabeza' },
        { left: 'I need a doctor',     right: 'Necesito un médico' },
        { left: 'I have a fever',       right: 'Tengo fiebre' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el verbo',
      sentence: 'I ____ a headache.',
      options: ['am', 'have', 'do'],
      correct: 'have',
      context: 'Síntomas específicos usan "have", no "be". "I am a headache" significaría "yo soy un dolor de cabeza".',
    },
    {
      type: 'multiple_choice',
      instruction: '¿Cómo se dice "estoy enfermo"?',
      question: 'Choose the correct phrase:',
      options: [
        { text: "I'm sick",       correct: true },
        { text: 'I have sick',     correct: false },
        { text: 'I do sick',        correct: false },
      ],
      explanation: '"Sick" es estado general — usa "to be": "I am sick" / "I\'m sick".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo dolor de cabeza',
      correct: ['I have a headache', 'i have a headache', 'I have a headache.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — necesito un médico',
      words: ['doctor', 'a', 'I', 'need'],
      correct: ['I', 'need', 'a', 'doctor'],
      translation: 'Necesito un médico',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'No me siento bien',
      correct: ["I don't feel well", 'I dont feel well', "i don't feel well"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás trabajando en una oficina en San Francisco. Te empieza a doler la cabeza fuerte. Hablas con tu jefa.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "I don't feel well — I have a bad headache. Could I leave early?", native: 'No me siento bien — tengo un fuerte dolor de cabeza. ¿Puedo salir temprano?', correct: true,  feedback: '¡Perfecto! Estado general (don\'t feel well) + síntoma específico (have a headache) + petición.' },
          { target: 'I am headache.',                                                     native: 'Yo soy dolor de cabeza.',                                                       correct: false, feedback: '"I am a headache" no tiene sentido. Es "I HAVE a headache".' },
          { target: 'Sick today.',                                                          native: 'Enfermo hoy.',                                                                  correct: false, feedback: 'Cortado. La oración completa funciona mejor en el trabajo.' },
        ],
      },
      { speaker: 'npc', target: "Of course, take care of yourself. Feel better!", native: 'Claro, cuídate. ¡Que te sientas mejor!' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Y "Feel better!" es la respuesta clásica — un deseo de mejoría.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Tengo dolor de cabeza (en inglés)', correct: ['I have a headache', 'i have a headache', 'I have a headache.'] },
      { prompt: 'No me siento bien (en inglés)',     correct: ["I don't feel well", 'I dont feel well', "i don't feel well"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Aprende cinco síntomas en inglés con "I have": a headache, a cold, a fever, a sore throat, a stomachache. Ten una lista lista para una emergencia.',
    rwenSignoff: 'Mañana: partes del cuerpo.',
  },

  phase8: {
    scenario: "You wake up feeling sick on a workday in San Francisco. Call your manager to explain symptoms and ask to take the day off.",
    rwenRole: "Janet, 50, your direct manager. Understanding, asks about symptoms.",
    successCriteria: "User uses 'I don't feel well', specifies at least one symptom with 'I have a [symptom]', and asks for time off politely.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
