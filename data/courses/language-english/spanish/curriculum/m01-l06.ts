import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — ¿Cómo te llamas?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Para conocer a alguien empiezas con el nombre. En inglés preguntas 'What's your name?' y respondes con 'My name is...'. Luego agregas 'Nice to meet you'.",
    culturalNote: "En español decimos '¿Cómo te llamas?' — literalmente 'cómo te llamas a ti mismo'. En inglés es directo: '¿Cuál es tu nombre?'. Y otra cosa cómoda: el inglés no tiene tú/usted, así que la misma frase sirve para tu jefe y para un compañero. Un dolor de cabeza menos.",
  },

  chunks: [
    {
      id: 'whats_your_name',
      target: "What's your name?",
      native: '¿Cómo te llamas?',
      literal: '¿Cuál es tu nombre?',
      emoji: '❓',
      phonetic: 'uats-iór-NÉIM',
      audioRef: null,
    },
    {
      id: 'my_name_is',
      target: 'My name is ...',
      native: 'Me llamo... / Mi nombre es...',
      literal: 'Mi nombre es...',
      emoji: '🪪',
      phonetic: 'mái-NÉIM-is',
      audioRef: null,
    },
    {
      id: 'nice_to_meet_you',
      target: 'Nice to meet you',
      native: 'Mucho gusto',
      literal: 'Bueno conocerte',
      emoji: '🤝',
      phonetic: 'náis-tu-MIT-iú',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessives my/your',
    explanation: "'My' = mi/mío. 'Your' = tu/tuyo. La pregunta usa 'your', la respuesta usa 'my'. Y nota — en inglés no hay género: 'my' sirve para 'mi nombre' (masculino) y 'mi casa' (femenino) igual. Ahí sí ganaste con el inglés.",
    examples: [
      { target: "What's your name?",  native: '¿Cómo te llamas?' },
      { target: 'My name is María',  native: 'Me llamo María' },
      { target: 'Nice to meet you',   native: 'Mucho gusto' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "What's your name?", right: '¿Cómo te llamas?' },
        { left: 'My name is ...',    right: 'Me llamo...' },
        { left: 'Nice to meet you',  right: 'Mucho gusto' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cómo te llamas?',
      correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (con tu nombre María)',
      prompt: 'Me llamo María',
      correct: ['My name is María', 'my name is María', 'My name is Maria', 'my name is Maria'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la presentación',
      sentence: '____ name is Carla.',
      options: ['My', 'Your', 'His'],
      correct: 'My',
      context: 'Te estás presentando a alguien que no conoces.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta cortés',
      words: ['Nice', 'to', 'meet', 'you'],
      correct: ['Nice', 'to', 'meet', 'you'],
      translation: 'Mucho gusto',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la pregunta del nombre',
      words: ["What's", 'your', 'name'],
      correct: ["What's", 'your', 'name'],
      translation: '¿Cómo te llamas?',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un evento de networking en Miami. Una persona nueva se acerca — habla inglés.',
    lines: [
      { speaker: 'npc', target: "Hi! What's your name?", native: '¡Hola! ¿Cómo te llamas?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My name is Diego. Nice to meet you.", native: 'Me llamo Diego. Mucho gusto.', correct: true,  feedback: 'Perfecto — diste tu nombre y agregaste la fórmula de cortesía.' },
          { target: 'Diego.',                                native: 'Diego.',                       correct: false, feedback: 'Muy corto para el primer encuentro — agrega "My name is" para sonar completo.' },
          { target: "What's your name?",                     native: '¿Cómo te llamas?',             correct: false, feedback: 'Te preguntaron a ti — primero responde, después devuelve la pregunta.' },
        ],
      },
      { speaker: 'npc', target: "Nice to meet you, Diego. I'm Sarah.", native: 'Mucho gusto, Diego. Soy Sarah.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Te presentaste como un anglo — frase completa, fórmula cortés. Esto te abre puertas en cualquier networking.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "What's your name? (en inglés)", correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"] },
      { prompt: 'Nice to meet you (en inglés)',   correct: ['Nice to meet you', 'nice to meet you', 'Nice to meet you.', 'nice to meet you.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Preséntate a alguien hoy en inglés — aunque sea leyéndolo en voz alta: 'My name is ...'.",
    rwenSignoff: 'Mucho gusto. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a small networking event for Latin American professionals in Miami — a mix of bilingual locals and English-only visitors from up north. Someone you've never met walks up to introduce themselves in English.",
    rwenRole: "Michael, 32, a Texan consultant who does business with LATAM companies. Confident, friendly, asks follow-up questions in clear American English.",
    successCriteria: "User exchanges names cleanly: gives 'My name is ...', uses 'Nice to meet you' at least once, and asks the other person's name back if they haven't already.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
