import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-como-estas',
  module: 1,
  lesson: 5,
  title: '¿Cómo Estás? — Greeting a Friend',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You can open with 'Hola' and 'Buenos días'. But what comes after the greeting? The wellness check. With friends, family, and anyone close: '¿Cómo estás?'. Today we get warm.",
    culturalNote: "'¿Cómo estás?' uses the informal 'tú' form — it's for friends, peers, kids, and anyone you're already close to. Use it with the wrong person (an elder, a stranger, your boss) and you can sound presumptuous. We'll learn the formal version next lesson.",
  },

  chunks: [
    {
      id: 'como_estas',
      target: '¿Cómo estás?',
      native: 'How are you? (informal — to a friend)',
      literal: 'How are-you (tú)?',
      emoji: '🙋',
      phonetic: 'KOH-moh ehs-TAHS',
      audioRef: null,
    },
    {
      id: 'estoy_bien',
      target: 'Estoy bien, ¿y tú?',
      native: "I'm well, and you?",
      literal: 'I-am well, and you (tú)?',
      emoji: '👍',
      phonetic: 'ehs-TOY bee-EHN, ee TOO',
      audioRef: null,
    },
    {
      id: 'mas_o_menos',
      target: 'Más o menos',
      native: 'So-so / Kind of',
      literal: 'More or less',
      emoji: '😐',
      phonetic: 'mahs oh MEH-nohs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tú — the informal "you"',
    explanation: "Spanish has TWO words for 'you'. 'Tú' is informal — for friends, family, peers, kids. It triggers verb endings ending in -s ('estás', 'tienes', 'eres'). Get this wrong and you sound either rudely casual or oddly distant — Spanish takes the relationship cue seriously.",
    examples: [
      { target: '¿Cómo estás?', native: 'How are you? (tú — friend)' },
      { target: '¿Y tú?', native: 'And you? (tú — friend)' },
      { target: '¿Tú vienes?', native: 'Are you coming? (tú — friend)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: '¿Cómo estás?', right: 'How are you? (informal)' },
        { left: 'Estoy bien, ¿y tú?', right: "I'm well, and you?" },
        { left: 'Más o menos', right: 'So-so / Kind of' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your best friend asks "¿Cómo estás?". What\'s the natural reply?',
      question: 'Choose the warm, peer-to-peer reply',
      options: [
        { text: 'Estoy bien, ¿y tú?', correct: true },
        { text: '¿Y usted?', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "Mirror the informal form — 'tú' for tú. '¿Y usted?' would be formal (next lesson). 'Adiós' is goodbye.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the friendly response",
      sentence: 'Estoy bien, ¿y _____?',
      options: ['tú', 'usted', 'tu'],
      correct: 'tú',
      context: "You're talking to your best friend — match the informal register.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How are you? (to a close friend)',
      correct: ['¿Cómo estás?', 'Cómo estás?', '¿Cómo estás', 'cómo estás?', 'Como estas?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the natural response',
      words: ['¿y', 'Estoy', 'bien,', 'tú?'],
      correct: ['Estoy', 'bien,', '¿y', 'tú?'],
      translation: "I'm well, and you?",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'So-so / Kind of',
      correct: ['Más o menos', 'más o menos', 'Mas o menos', 'mas o menos'],
    },
  ],

  rwenDialogue: {
    intro: "I'm Rwen — your friend. We bump into each other on the street in Bogotá. Greet me the way you'd greet a peer.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Hola, ¿cómo estás?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Estoy bien, ¿y tú?', native: "I'm well, and you?", correct: true, feedback: "Perfect — informal, warm, and you asked back. That's how friends do it." },
          { target: 'Estoy bien, ¿y usted?', native: "I'm well, and you (formal)?", correct: false, feedback: "Almost — but with a friend, mirror the informal 'tú', not 'usted'. Use '¿y tú?'." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "I just greeted you — I haven't left yet! Reply with '¿y tú?'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Más o menos, la verdad. Pero contento de verte.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read me as a friend, not a stranger. That's the relationship — and Spanish rewards you for noticing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (to a close friend)', correct: ['¿Cómo estás?', 'Cómo estás?', '¿Cómo estás', 'cómo estás?', 'Como estas?'] },
      { prompt: "I'm well, and you? (informal)", correct: ['Estoy bien, ¿y tú?', 'Estoy bien y tú?', 'estoy bien, ¿y tú?', 'estoy bien y tu?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one friend '¿Cómo estás?' today — text, call, or in person. And really listen to the answer.",
    rwenSignoff: "Hasta luego — see you later.",
  },

  phase8: {
    scenario: "It's a Saturday afternoon and you bump into your friend Andrés in a plaza in Medellín, Colombia. He's grabbing an arepa from a street cart and lights up when he sees you. You haven't seen each other in two weeks. The whole moment is casual, warm, peer-to-peer.",
    rwenRole: "Andrés — your close friend, ~30, paisa from Medellín, easy-going and chatty; he expects friend-level warmth and would tease you if you got formal on him.",
    successCriteria: "User uses '¿Cómo estás?' (NOT formal '¿Cómo está usted?' — he's a friend, not an elder), replies '¿y tú?' (NOT '¿y usted?'), and stays in the tú register throughout. Bonus if they use 'Más o menos' honestly when asked rather than defaulting to 'bien'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
