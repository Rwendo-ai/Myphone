import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-tu-vous',
  module: 1,
  lesson: 8,
  title: 'Tu vs Vous — When to switch',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "There comes a moment in every French friendship when one of you says: 'On peut se tutoyer?' — Can we use 'tu'? It's a tiny social ritual, like upgrading the relationship a level. Today, you learn how to make the switch.",
    culturalNote: "Switching from vous to tu has no English equivalent. It's not 'first names' — French has been on first names already. It's a deliberate, mutual decision to drop a level of formal distance. You usually wait for the older or more senior person to suggest it. After it's offered, switching back feels weirdly cold.",
  },

  chunks: [
    {
      id: 'tu_peux_me_tutoyer',
      target: 'Tu peux me tutoyer',
      native: 'You can use "tu" with me',
      literal: 'You can me tu-address',
      emoji: '🤝',
      phonetic: 'too puh muh too-twah-YAY',
      audioRef: null,
    },
    {
      id: 'on_se_dit_tu',
      target: 'On se dit tu?',
      native: 'Shall we use "tu"?',
      literal: 'One says-oneself "tu"?',
      emoji: '↔️',
      phonetic: 'ohn suh dee TOO',
      audioRef: null,
    },
    {
      id: 'daccord',
      target: "D'accord",
      native: 'OK / Agreed',
      literal: 'Of-agreement',
      emoji: '✅',
      phonetic: 'dah-KOHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formality negotiation',
    explanation: "French has a verb for 'addressing as tu' (tutoyer) and one for vous (vouvoyer). The switch is always proposed by the older, more senior, or more local person. The accepted reply is a smile and 'd'accord'. From that moment on — tu, not vous, every time.",
    examples: [
      { target: 'On peut se tutoyer?', native: 'Can we use "tu" with each other?' },
      { target: 'Tu peux me tutoyer', native: 'You can use "tu" with me (offering it down)' },
      { target: "D'accord, avec plaisir", native: 'OK, gladly' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Tu peux me tutoyer', right: 'You can use "tu" with me' },
        { left: 'On se dit tu?', right: 'Shall we use "tu"?' },
        { left: "D'accord", right: 'OK / Agreed' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your French acquaintance offers to drop the formality. Complete your reply.',
      sentence: '_____, avec plaisir!',
      options: ["D'accord", "S'il vous plaît", "De rien"],
      correct: "D'accord",
      context: '"D\'accord" = OK / Agreed. The standard accept.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — propose dropping formality',
      prompt: 'Shall we use "tu"?',
      correct: ['On se dit tu?', 'on se dit tu?', 'On se dit tu', 'on se dit tu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Offer to be addressed as "tu" — put the words in order',
      words: ['tutoyer', 'me', 'Tu', 'peux'],
      correct: ['Tu', 'peux', 'me', 'tutoyer'],
      translation: 'You can use "tu" with me',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'OK',
      correct: ["D'accord", "d'accord", "D accord"],
    },
    {
      type: 'translate',
      instruction: 'Type in French — agree warmly',
      prompt: "OK, gladly",
      correct: ["D'accord, avec plaisir", "d'accord, avec plaisir", "D'accord avec plaisir"],
    },
  ],

  rwenDialogue: {
    intro: "You've spent the evening at a dinner party with new French friends. You're three glasses of wine in. The host, Julien — about your age — leans over.",
    lines: [
      {
        speaker: 'npc',
        target: "Dis, on se dit tu? Le 'vous' me fatigue!",
        native: "Hey, shall we use 'tu'? The 'vous' is wearing me out!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "D'accord, avec plaisir!", native: 'OK, gladly!', correct: true, feedback: 'Perfect — warm, accepting, the upgrade is sealed.' },
          { target: 'Merci', native: 'Thanks', correct: false, feedback: 'Polite but it doesn\'t answer his question — say "d\'accord" to actually accept.' },
          { target: 'Comment allez-vous?', native: 'How are you? (formal)', correct: false, feedback: 'You just declined the upgrade and stayed in vous — read the room!' },
        ],
      },
      {
        speaker: 'npc',
        target: "Super! Alors, tu veux encore du vin?",
        native: 'Great! So, do you want more wine?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen — he switched the very next sentence. 'Tu veux'. The line is crossed, you're family-friend tier now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Shall we use "tu"? (proposing the switch)',
        correct: ['On se dit tu?', 'on se dit tu?', 'On se dit tu', 'on se dit tu'],
      },
      {
        prompt: 'OK / Agreed (in French)',
        correct: ["D'accord", "d'accord", "D accord"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice — in any conversation today (English fine!) — one moment of 'we just got closer'. In French, that's the moment of switching to tu. Just feel it.",
    rwenSignoff: "Demain — the goodbyes. À demain!",
  },

  phase8: {
    scenario: "Late evening at a bistro in the 11th. You've spent two hours over dinner with a new French acquaintance — Julien, a friend of your friend. Plates are cleared, you're on the second carafe of wine, the conversation has been all 'vous' until now. He suddenly leans in with a slightly tipsy grin.",
    rwenRole: "Julien — late 30s, your age-ish, friendly, an architect from the south who finds 'vous' between people drinking wine together a bit silly; he initiates the switch and expects an easy yes.",
    successCriteria: "User accepts the switch with 'D'accord' (NOT a polite deflection back to vous), and CRUCIALLY uses 'tu' / 'tes' / 'toi' for the rest of the conversation rather than slipping back into 'vous' — the consistency is the whole test.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
