import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-esposo-esposa',
  module: 5,
  lesson: 8,
  title: 'Esposo, Esposa, Pareja — Partner Vocabulary',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish gives you several ways to name a partner — esposo/esposa for spouses, novio/novia for boyfriend/girlfriend, and pareja for any partner regardless of gender. Today we cover all three because Latin American introductions move through them constantly.",
    culturalNote: "'Pareja' literally means 'pair' and is now the go-to neutral word across Latin America for any romantic partner — married or not, any gender, any configuration. It's increasingly preferred over 'novio/novia' in adult conversations and is gender-neutral.",
  },

  chunks: [
    {
      id: 'esposo',
      target: 'el esposo / la esposa',
      native: 'husband / wife',
      literal: 'the spouse (masc / fem)',
      emoji: '💍',
      phonetic: 'el es-POH-soh / lah es-POH-sah',
      audioRef: null,
    },
    {
      id: 'novio',
      target: 'el novio / la novia',
      native: 'boyfriend / girlfriend',
      literal: 'the boyfriend / girlfriend (also: groom / bride at a wedding)',
      emoji: '💑',
      phonetic: 'el NOH-vyoh / lah NOH-vyah',
      audioRef: null,
    },
    {
      id: 'pareja',
      target: 'mi pareja',
      native: 'my partner',
      literal: 'my pair (gender-neutral)',
      emoji: '🤝',
      phonetic: 'mee pah-REH-hah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Pareja" is feminine even for male partners',
    explanation: "Spanish noun gender ≠ the gender of the person. 'La pareja' is grammatically feminine no matter who the partner is. 'Mi pareja es alto' (my partner [a man] is tall) — 'pareja' stays feminine, but the adjective 'alto' agrees with the actual person. Same for 'persona' (always feminine).",
    examples: [
      { target: 'mi pareja es alta', native: 'my [female] partner is tall' },
      { target: 'mi pareja es alto', native: 'my [male] partner is tall (pareja still feminine, alto matches person)' },
      { target: 'la persona', native: 'the person (always feminine, regardless)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each partner term to its meaning',
      pairs: [
        { left: 'el esposo', right: 'husband' },
        { left: 'la novia', right: 'girlfriend / bride' },
        { left: 'mi pareja', right: 'my partner (any gender)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my wife is from Argentina'",
      sentence: 'Mi _____ es de Argentina.',
      options: ['esposa', 'esposo', 'novio'],
      correct: 'esposa',
      context: 'Pick the feminine form for "wife".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my partner',
      correct: ['mi pareja', 'Mi pareja'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why is 'mi pareja' grammatically feminine even when the partner is a man?",
      question: "'Pareja' is feminine because:",
      options: [
        { text: 'Spanish noun gender is fixed by the word itself, not by the person', correct: true },
        { text: 'It only describes female partners', correct: false },
        { text: 'It changes to "el parejo" for men', correct: false },
      ],
      explanation: "Words like 'pareja' and 'persona' have inherent grammatical gender that doesn't shift with the person being described. The adjective then agrees with the actual person ('mi pareja es alto' — masc. adj. for a male partner).",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My partner and I live together"',
      words: ['Mi', 'pareja', 'y', 'yo', 'vivimos', 'juntos.'],
      correct: ['Mi', 'pareja', 'y', 'yo', 'vivimos', 'juntos.'],
      translation: 'My partner and I live together',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my husband',
      correct: ['mi esposo', 'Mi esposo'],
    },
  ],

  rwenDialogue: {
    intro: "Back at the Sunday almuerzo. Tía Carmen, predictably, gets to the question.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Y tú, mijo? ¿Tienes pareja?',
        native: 'And you, dear? Do you have a partner?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, tengo pareja. Vivimos juntos en [ciudad].', native: 'Yes, I have a partner. We live together in [city].', correct: true, feedback: "'Pareja' was the safe and warm answer — gender-neutral, modern, lands well at any Latin American table." },
          { target: 'Sí, tengo un esposa', native: 'Yes, I have a husband-wife (gender mismatch)', correct: false, feedback: "Match the article to the noun's gender — 'una esposa' (feminine) or 'un esposo' (masculine). Or use 'pareja' to sidestep entirely." },
          { target: 'No', native: 'No', correct: false, feedback: "Even 'no' opens a door — 'No, todavía no tengo pareja.' (No, I don't have a partner yet.)" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tía siempre pregunta. Pero le respondiste con elegancia.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'wife', correct: ['esposa', 'la esposa'] },
      { prompt: 'my partner (any gender)', correct: ['mi pareja'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick the term that fits your situation — pareja, esposo/esposa, novio/novia, or 'no tengo pareja'. Say a one-sentence introduction out loud: 'Tengo pareja' or 'Estoy soltero/soltera'. Either is welcome.",
    rwenSignoff: "El amor tiene muchos nombres. Hasta luego.",
  },

  phase8: {
    scenario: "Asado at tío Roberto's in Buenos Aires. Halfway through the bife de chorizo, tía Lucía asks about your love life — '¿estás en pareja?' (Argentine phrasing for 'are you partnered?'). She's not being nosy; she's mapping you into the family in Spanish, and she wants a clean answer: alone, dating, married, or partnered.",
    rwenRole: "Tía Lucía — at the Argentine asado, ~50, warm but direct in the porteña way; she'll keep poking until you give her a real Spanish sentence about your relationship status.",
    successCriteria: "User picks the right gender-matched term ('esposo' / 'esposa' / 'novio' / 'novia') OR uses gender-neutral 'pareja' correctly with feminine concord, and produces at least one extra detail (city, how long, nothing-yet) rather than one-word reply.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
