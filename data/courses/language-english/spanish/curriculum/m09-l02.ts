import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Left, Right, Straight — Izquierda, derecha, derecho',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: izquierda, derecha, derecho. Las palabras que vas a escuchar y a dar cuando preguntes por una dirección.",
    culturalNote: "Trampa común: en español 'derecho' (recto) suena casi igual a 'derecha' (right). Confunde a los hispanohablantes — pero en inglés son totalmente distintas: 'straight' (derecho/recto) y 'right' (derecha). No las puedes mezclar. Y 'turn left' / 'turn right' lleva siempre el verbo 'turn' delante. En EE.UU. también verás 'make a left' / 'make a right' — más casual pero igual de común.",
  },

  chunks: [
    {
      id: 'turn_left',
      target: 'Turn left',
      native: 'Gira a la izquierda',
      literal: 'Turn left',
      emoji: '⬅️',
      phonetic: 'TURN-LEFT',
      audioRef: null,
    },
    {
      id: 'go_straight',
      target: 'Go straight',
      native: 'Sigue derecho / recto',
      literal: 'Go straight',
      emoji: '⬆️',
      phonetic: 'GOH-STRAYT',
      audioRef: null,
    },
    {
      id: 'its_on_the_right',
      target: "It's on the right",
      native: 'Está a la derecha',
      literal: 'It-is on the right',
      emoji: '➡️',
      phonetic: 'its-on-thuh-RYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative directions + "on the [side]"',
    explanation: "Los imperativos para dar direcciones: 'Turn left', 'Turn right', 'Go straight'. Para describir la ubicación: 'It's on the left/right'. Las preposiciones cambian: 'turn TO the left' no es necesario (basta 'turn left'), pero sí se dice 'on THE left/right'.",
    examples: [
      { target: 'Turn right at the corner',     native: 'Gira a la derecha en la esquina' },
      { target: "It's on the left",              native: 'Está a la izquierda' },
      { target: 'Go straight for two blocks',    native: 'Sigue recto dos cuadras' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Turn left',         right: 'Gira a la izquierda' },
        { left: 'Turn right',         right: 'Gira a la derecha' },
        { left: 'Go straight',        right: 'Sigue recto' },
        { left: "It's on the right",  right: 'Está a la derecha' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Te dicen "Go straight, then turn right". ¿Qué haces?',
      question: 'What do you do?',
      options: [
        { text: 'Continúo recto, luego giro a la derecha.', correct: true },
        { text: 'Giro a la derecha, luego sigo recto.',     correct: false },
        { text: 'Giro a la izquierda.',                       correct: false },
      ],
      explanation: '"Go straight" = recto. "Turn right" = a la derecha. La secuencia es: primero recto, luego derecha.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la dirección',
      sentence: 'The bank? ____ straight for two blocks.',
      options: ['Turn', 'Go', 'On'],
      correct: 'Go',
      context: '"Go straight" es la fórmula para "sigue recto".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Sigue recto',
      correct: ['Go straight', 'go straight', 'Go straight.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — gira a la izquierda en la esquina',
      words: ['corner', 'the', 'at', 'left', 'Turn'],
      correct: ['Turn', 'left', 'at', 'the', 'corner'],
      translation: 'Gira a la izquierda en la esquina',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Está a la derecha',
      correct: ["It's on the right", 'Its on the right', "it's on the right"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Times Square buscando un restaurante. Le preguntas a una persona local.',
    lines: [
      { speaker: 'npc', target: "Go straight for two blocks, then turn left. It's on the right.", native: 'Sigue recto dos cuadras, luego gira a la izquierda. Está a la derecha.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two blocks straight, left, then on the right. Got it. Thanks!", native: 'Dos cuadras recto, izquierda, luego a la derecha. Entendido. ¡Gracias!', correct: true,  feedback: '¡Perfecto! Repetiste las direcciones para confirmar — técnica anti-perderse.' },
          { target: 'Right? Right?',                                                    native: '¿Derecha? ¿Derecha?',                                                       correct: false, feedback: 'No te dijo "right" para girar — dijo "left" y luego que está EN la derecha. Repite la secuencia entera.' },
          { target: 'OK.',                                                                native: 'OK.',                                                                       correct: false, feedback: 'OK pero no confirmaste — si te equivocas en la cuadra, no sabes dónde fallaste.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Excelente! Repetir direcciones en EE.UU. es totalmente aceptado y te salva de muchas vueltas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Gira a la izquierda (en inglés)', correct: ['Turn left', 'turn left', 'Turn left.'] },
      { prompt: 'Sigue recto (en inglés)',          correct: ['Go straight', 'go straight', 'Go straight.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Da direcciones en inglés desde tu casa al supermercado más cercano. Usa "Go straight", "Turn left/right", "It\'s on the right/left". Escríbelo o dilo en voz alta.',
    rwenSignoff: 'Mañana: distancia y tiempo — qué tan lejos está.',
  },

  phase8: {
    scenario: "A US tourist asks you for directions to the nearest subway station / bus stop in LA. Walk them through it: straight, turns, side of the street.",
    rwenRole: "Brian, 28, US tourist with a backpack. Friendly, repeats back what you say.",
    successCriteria: "User gives clear directions using 'Go straight', 'Turn left/right', and 'It's on the [side]' for at least three steps. Confirms when the tourist repeats them back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
