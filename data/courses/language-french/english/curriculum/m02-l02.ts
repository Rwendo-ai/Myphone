import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-je-ne-comprends',
  module: 2,
  lesson: 2,
  title: "Je ne comprends pas — I don't understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A waiter in Aix-en-Provence rattles off the daily specials at warp speed. You catch 'poisson' and that's it. This is the moment most beginners freeze and nod. Today we learn three phrases that buy you back your conversation.",
    culturalNote: "English speakers often pretend to understand to avoid awkwardness — smiling and saying 'yes, yes'. In France, that backfires fast: the speaker assumes you've followed and keeps going faster. Saying 'Je ne comprends pas' is not weakness — it's the polite way to ask the other person to slow down. They almost always do, and warmly.",
  },

  chunks: [
    {
      id: 'je_ne_comprends_pas',
      target: 'Je ne comprends pas',
      native: "I don't understand",
      literal: 'I not understand not',
      emoji: '🤔',
      phonetic: 'zhuh nuh kohn-PRAHN pah',
      audioRef: null,
    },
    {
      id: 'plus_lentement',
      target: 'Plus lentement, s’il vous plaît',
      native: 'More slowly, please',
      literal: 'More slowly, if-it you-pleases',
      emoji: '🐢',
      phonetic: 'ploo lahnt-MAHN seel voo PLEH',
      audioRef: null,
    },
    {
      id: 'pouvez_vous_repeter',
      target: 'Pouvez-vous répéter?',
      native: 'Can you repeat?',
      literal: 'Can-you repeat?',
      emoji: '🔁',
      phonetic: 'poo-vay voo ray-pay-TAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Negation — ne … pas',
    explanation: "French wraps the verb in two pieces: ne before, pas after. 'Je comprends' = I understand. 'Je ne comprends pas' = I don't understand. In fast speech French often drops the ne — you'll hear 'je comprends pas' — but learn the full form first. It's safe everywhere.",
    examples: [
      { target: 'Je ne sais pas', native: "I don't know" },
      { target: 'Je ne parle pas français', native: "I don't speak French" },
      { target: 'Ce n’est pas grave', native: "It's not serious / no worries" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the survival phrase to what it does for you',
      pairs: [
        { left: 'Je ne comprends pas', right: 'Stops the speaker so you can regroup' },
        { left: 'Plus lentement', right: 'Asks for the same thing, slower' },
        { left: 'Pouvez-vous répéter?', right: 'Asks them to say it again' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A Parisian friend is talking too fast. Politely slow her down.',
      sentence: '_____ lentement, s’il vous plaît.',
      options: ['Plus', 'Pas', 'Très'],
      correct: 'Plus',
      context: "'Plus lentement' literally = 'more slowly'.",
    },
    {
      type: 'translate',
      instruction: "Type in French — the train guard rattles off something. You missed it entirely.",
      prompt: "I don't understand",
      correct: ['Je ne comprends pas', 'je ne comprends pas', 'je comprends pas'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask the speaker to repeat',
      words: ['répéter?', 'Pouvez-vous'],
      correct: ['Pouvez-vous', 'répéter?'],
      translation: 'Can you repeat?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the response that buys you the most clarity',
      question: "A vendor at Marché Forville in Cannes lists six cheeses in one breath. You caught two. What do you say?",
      options: [
        { text: 'Plus lentement, s’il vous plaît', correct: true },
        { text: 'Oui, oui!', correct: false },
        { text: 'Au revoir', correct: false },
      ],
      explanation: "Asking him to slow down is the perfect move — you'll catch the rest. Saying oui pretends you understood; saying goodbye ends the chat.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — ask politely for a repeat',
      prompt: 'Can you repeat?',
      correct: ['Pouvez-vous répéter?', 'pouvez-vous répéter?', 'Pouvez-vous répéter', 'pouvez-vous répéter'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a tabac in Lyon buying a Métro ticket. The clerk asks something fast — you catch nothing. Recover the conversation.",
    lines: [
      {
        speaker: 'npc',
        target: 'Vous-voulez-un-carnet-ou-un-ticket-à-l’unité?',
        native: '(spoken too fast to parse)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pardon, je ne comprends pas. Plus lentement, s’il vous plaît.', native: "Sorry, I don't understand. More slowly please.", correct: true, feedback: "Perfect double-tap — you named the problem and offered the fix." },
          { target: 'Oui!', native: 'Yes!', correct: false, feedback: "Now he'll charge you for whatever he thought you said. Better to admit you missed it." },
          { target: 'Au revoir', native: 'Goodbye', correct: false, feedback: "Don't escape — recover. You came here for a ticket." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah pardon. Un carnet… ou un ticket?',
        native: 'Oh, sorry. A booklet… or a single ticket?',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Hear how he slowed down without irritation? Asking for slow is normal here. You bought the conversation back.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I don't understand (in French)",
        correct: ['Je ne comprends pas', 'je ne comprends pas', 'je comprends pas'],
      },
      {
        prompt: 'More slowly, please (in French)',
        correct: ['Plus lentement, s’il vous plaît', 'plus lentement s’il vous plaît', 'Plus lentement s’il vous plaît', 'Plus lentement, sil vous plait', 'plus lentement sil vous plait'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pull up a French podcast or YouTube clip. When something flies past you, pause and say out loud: 'Plus lentement, s’il vous plaît.' Pretend you're talking to the host.",
    rwenSignoff: "Slow is fluent. Bonne écoute — happy listening.",
  },

  phase8: {
    scenario: "You're at a small épicerie in the Vieux-Nice neighbourhood at lunchtime. The owner is friendly but speaks at full Niçois speed about three different daily lunch options. You only caught the word 'salade'. You need to get her to slow down, repeat, and not give up on you.",
    rwenRole: "Madame Léa — épicerie owner, ~60, born in Nice, speaks fast and warmly. She has zero problem slowing down if asked, but if you fake-nod she'll keep accelerating.",
    successCriteria: "User uses 'Je ne comprends pas' when they lose the thread, asks 'Plus lentement, s’il vous plaît' to bring her speed down, and uses 'Pouvez-vous répéter?' at least once when she gives a specific option. User does NOT pretend to understand.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
