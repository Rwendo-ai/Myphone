import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-estar',
  module: 4,
  lesson: 7,
  title: 'Estar — Location & How You Feel',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "The other 'to be'. 'Estar' is for WHERE you are right now, and HOW you are right now. Your mood. Your location. The temperature. Anything that could change tomorrow. 'Estoy en Madrid. Estoy cansado. La sopa está caliente.' (I'm in Madrid. I'm tired. The soup is hot.) Temporary stuff.",
    culturalNote: "If you remember nothing else: ser = identity, estar = state and location. 'Estoy en el café' (I'm at the café — could be anywhere tomorrow). 'Estoy bien' (I'm fine — feeling, not identity). 'Estar' comes from Latin 'stare' (to stand) — think of it as where something currently STANDS, both physically and emotionally.",
  },

  chunks: [
    {
      id: 'estoy',
      target: 'estoy',
      native: 'I am (estar — state/location)',
      literal: 'estoy — first-person singular of estar',
      emoji: '📍',
      phonetic: 'ehs-TOY',
      audioRef: null,
    },
    {
      id: 'estas',
      target: 'estás',
      native: 'you are (informal — estar)',
      literal: 'estás — second-person singular of estar',
      emoji: '🫵',
      phonetic: 'ehs-TAHS',
      audioRef: null,
    },
    {
      id: 'esta',
      target: 'está',
      native: 'he/she/it is (estar)',
      literal: 'está — third-person singular of estar',
      emoji: '👤',
      phonetic: 'ehs-TAH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estar — for location and temporary states',
    explanation: "Use 'estar' for WHERE something is and HOW something is right now. Conjugation: yo estoy / tú estás / él, ella está / nosotros estamos / vosotros estáis / ellos están. Common after estar: a location ('estoy en casa'), a feeling ('estoy contento'), a state that could change ('la comida está fría').",
    examples: [
      { target: 'Estoy en Madrid.', native: "I am in Madrid. (location → estar)" },
      { target: 'Estoy cansada.', native: "I am tired. (feeling, temporary → estar)" },
      { target: 'La sopa está caliente.', native: "The soup is hot. (current state → estar)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the subject to the form of estar',
      pairs: [
        { left: 'yo', right: 'estoy' },
        { left: 'tú', right: 'estás' },
        { left: 'ella', right: 'está' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why do we use "estar" for "Estoy en el café"?',
      question: 'Estoy en el café — why estar?',
      options: [
        { text: 'Location is temporary state → estar', correct: true },
        { text: 'Because cafés are masculine', correct: false },
        { text: 'Because it expresses identity', correct: false },
      ],
      explanation: "WHERE you are right now is location — temporary, will change. That's estar. (Where you're FROM is origin/identity — that's ser.)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am tired (female)',
      correct: ['Estoy cansada', 'estoy cansada'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right form of estar',
      sentence: 'Tú _____ en casa.',
      options: ['estás', 'estoy', 'está'],
      correct: 'estás',
      context: 'You are at home — second person.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "the coffee is cold"',
      words: ['está', 'el', 'frío', 'café'],
      correct: ['el', 'café', 'está', 'frío'],
      translation: 'the coffee is cold',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am in Spain',
      correct: ['Estoy en España', 'estoy en España', 'Estoy en Espana', 'estoy en Espana'],
    },
  ],

  rwenDialogue: {
    intro: "You meet Lucía at a café on Calle de Alcalá. She wants to know how you're doing today and where you're sitting waiting for her — pure 'estar' territory.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Cómo estás? ¿Dónde estás?',
        native: "How are you? Where are you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Estoy bien. Estoy en el café de la esquina.', native: "I'm fine. I'm at the café on the corner.", correct: true, feedback: "Perfecto — feeling and location, two perfect uses of estar." },
          { target: 'Soy bien. Soy en el café.', native: 'Wrong — used ser for state and location', correct: false, feedback: "Feelings and locations use estar, not ser. 'Estoy bien. Estoy en el café.'" },
          { target: 'Estoy de México.', native: 'Wrong — origin uses ser', correct: false, feedback: "Where you're FROM uses ser ('Soy de...'); where you ARE right now uses estar ('Estoy en...')." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. Estar is for right-now: how you feel, where you sit. The verb of the moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am tired (female)', correct: ['Estoy cansada', 'estoy cansada'] },
      { prompt: 'I am at home', correct: ['Estoy en casa', 'estoy en casa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now, say silently: 'Estoy en [where you are] y estoy [how you feel].' Use the right form of estar for both. Notice that both answers will be different tomorrow.",
    rwenSignoff: "Estar is the now-verb. Where, how, today. Tomorrow we contrast it with ser. Hasta mañana.",
  },

  phase8: {
    scenario: "You're at a corner café in Chueca, sitting at an outside table waiting for Lucía. She's running late and texts to ask how you are and where you're sitting. When she arrives she also asks how the coffee is. Three quick exchanges — all estar territory.",
    rwenRole: "Lucía — friendly, curious, asks 'cómo estás' and 'dónde estás' and listens carefully for whether you say 'estoy' (NOT 'soy') for both, and 'el café está frío/caliente' (NOT 'es frío/caliente') for the temporary temperature of the drink.",
    successCriteria: "User produces 'estoy bien' (or similar feeling), 'estoy en el café' (location), and 'el café está caliente' or 'está frío' (temporary state of an object) — three uses of estar without slipping into ser. No 'soy bien' or 'soy en el café' errors.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
