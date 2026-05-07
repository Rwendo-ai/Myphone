import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Sharing proverbs in English — Refranes en inglés',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "Hoy: cómo compartir refranes y proverbios — sabiduría heredada — con un anglo.",
    culturalNote: "En América Latina los refranes son moneda diaria: 'No por mucho madrugar amanece más temprano', 'En boca cerrada no entran moscas', 'Cría cuervos y te sacarán los ojos'. Cada país, su biblia oral. El inglés tiene también — 'A stitch in time saves nine', 'Don\'t count your chickens before they hatch' — pero los anglos los citan menos. Cuando un latino comparte un refrán traducido, suele resultar gracioso y memorable. La técnica: di el refrán original, luego el significado en inglés. 'There\'s a saying in Spanish: \"En boca cerrada no entran moscas\" — flies don\'t enter a closed mouth. It means: silence keeps you out of trouble.' Los anglos lo aman.",
  },

  chunks: [
    {
      id: 'chara_chimwe',
      target: "Chara chimwe hachitswanyi inda — One finger can't crush a louse",
      native: "Chara chimwe hachitswanyi inda — Un dedo solo no aplasta un piojo",
      literal: 'cooperation / unity is needed',
      emoji: '🤝',
      phonetic: 'CHA-ra CHI-mwe ha-chi-TSWA-nyi IN-da',
      audioRef: null,
    },
    {
      id: 'mwana_washe',
      target: "Mwana washe muranda kumwe — A chief's child is a servant elsewhere",
      native: "Mwana washe muranda kumwe — El hijo del jefe es sirviente en otra parte",
      literal: 'humility — your status at home is not your status away',
      emoji: '🙇🏾',
      phonetic: 'MWA-na WA-she mu-RAN-da KU-mwe',
      audioRef: null,
    },
    {
      id: 'rume_rimwe',
      target: 'Rume rimwe harikombi churu — One man cannot surround an anthill',
      native: 'Rume rimwe harikombi churu — Un solo hombre no puede rodear un hormiguero',
      literal: 'we need others — no one succeeds alone',
      emoji: '🐜',
      phonetic: 'RU-me RI-mwe ha-ri-KO-mbi CHU-ru',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sharing proverbs cross-culturally',
    explanation: "La fórmula universal: '[original proverb] — [literal English] — [meaning].' Funciona con refranes españoles, shonas, japoneses, lo que sea. Estructura: cita original (mantiene la cultura) + traducción (el anglo entiende) + significado (cierra el sentido). 'There\'s a saying...' o 'We say...' son aperturas naturales.",
    examples: [
      { target: "We say 'En boca cerrada no entran moscas' — Flies don't enter a closed mouth — meaning silence is wise.", native: "Decimos 'En boca cerrada no entran moscas' — significa que el silencio es sabiduría." },
      { target: "There's a Spanish saying: 'Más vale tarde que nunca' — Better late than never.", native: "Hay un refrán español: 'Más vale tarde que nunca' — mejor tarde que nunca." },
      { target: "We have a proverb: 'No hay mal que por bien no venga' — Every cloud has a silver lining.", native: "Tenemos un refrán: 'No hay mal que por bien no venga' — todo mal trae algo bueno." },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Comparte un refrán español en inglés con la fórmula completa',
      prompt: "'En boca cerrada no entran moscas'",
      correct: ["We say 'En boca cerrada no entran moscas' — Flies don't enter a closed mouth — meaning silence is wise.", "There's a Spanish saying: 'En boca cerrada no entran moscas' — Flies don't enter a closed mouth.", "We have a saying: 'En boca cerrada no entran moscas' — flies don't enter a closed mouth — silence keeps you safe."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Le explicas a un colega "Más vale tarde que nunca"',
      question: 'Most natural way to share it:',
      options: [
        { text: "We have a saying — 'Más vale tarde que nunca' — Better late than never.", correct: true },
        { text: 'Spanish word late never.',                                                  correct: false },
        { text: 'You late.',                                                                  correct: false },
      ],
      explanation: 'Empezar con "We have a saying" introduce el refrán, luego das original + traducción. Funciona en cualquier conversación.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — abres un refrán',
      sentence: "There's a ____ in Spanish: 'No hay mal que por bien no venga.'",
      options: ['saying', 'word', 'phrase'],
      correct: 'saying',
      context: '"Saying" es lo más usado para introducir un refrán. "Phrase" funciona pero es menos específico.',
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja refrán y enseñanza',
      pairs: [
        { left: 'One finger can\'t crush a louse',     right: 'Necesitamos cooperación' },
        { left: "A chief's child is a servant elsewhere", right: 'La humildad importa' },
        { left: 'One man cannot surround an anthill',     right: 'No se logra solo' },
        { left: 'Better late than never',                  right: 'Más vale tarde que nunca' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — comparte un refrán',
      words: ['saying', "There's", 'a', 'in', 'Spanish'],
      correct: ["There's", 'a', 'saying', 'in', 'Spanish'],
      translation: 'Hay un refrán en español',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — explica el significado',
      prompt: 'Significa que el silencio es sabiduría',
      correct: ['It means silence is wise', 'It means that silence is wise', 'it means silence is wise'],
    },
  ],

  rwenDialogue: {
    intro: 'En una cena con amigos angloparlantes, alguien comenta que tuvo un mal día pero después salió algo bueno. Es el momento perfecto para tu refrán.',
    lines: [
      { speaker: 'npc', target: "What a day! I lost the contract, but then I got an even better offer.", native: '¡Qué día! Perdí el contrato pero luego me ofrecieron uno mejor.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "We have a saying in Spanish: 'No hay mal que por bien no venga' — Every cloud has a silver lining. It fits perfectly.", native: "Tenemos un dicho en español: 'No hay mal que por bien no venga'. Encaja perfecto.", correct: true,  feedback: "¡Perfecto! Original + traducción + conexión a la situación. Clase magistral de refrán." },
          { target: 'In Spanish bad good come.',                                                                                                native: 'En español malo bueno viene.',                                                            correct: false, feedback: 'Traducción palabra por palabra falla. Da el refrán original + una traducción natural.' },
          { target: "Don't worry.",                                                                                                              native: 'No te preocupes.',                                                                          correct: false, feedback: 'Pierdes la oportunidad de compartir cultura. El refrán habría conectado mucho.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Excelente! Compartir refranes es uno de los regalos más bonitos que puedes hacerle a un anglo. Recuerdan a la persona que se los enseñó.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: "Comparte 'En boca cerrada no entran moscas' en inglés con la fórmula completa",
        correct: ["We say 'En boca cerrada no entran moscas' — Flies don't enter a closed mouth — meaning silence is wise.", "There's a saying: 'En boca cerrada no entran moscas' — Flies don't enter a closed mouth.", "We have a saying — 'En boca cerrada no entran moscas' — flies don't enter a closed mouth"] },
      { prompt: 'Hay un dicho en español (en inglés)', correct: ["There's a saying in Spanish", 'There is a saying in Spanish', "we have a saying in Spanish"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Elige tu refrán español favorito. Practica compartirlo en inglés con la fórmula: "We have a saying — \'[original]\' — [literal] — meaning [significance]." Compártelo con un amigo angloparlante hoy o mañana.',
    rwenSignoff: 'Mañana cerramos el módulo y el curso entero — tu historia en inglés.',
  },

  phase8: {
    scenario: "You're at a dinner with American friends. The conversation invites a moment where a Spanish refrán fits perfectly. Share at least two refranes with the original-translation-meaning structure.",
    rwenRole: "Three friends listening curiously. They love the cultural exchange.",
    successCriteria: "User shares at least two proverbs using the structure 'We have a saying / There's a saying — [original] — [English literal] — [meaning].' Connects the proverbs to the conversation context.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
