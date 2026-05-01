import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Recevoir des invités — Hosting',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Doorbell rings. Camille and Hugo are on the other side, holding wine and a tarte. Tonight, the table is yours — you're hosting French friends in French. Today, the four phrases that turn your apartment into a place where they want to stay.",
    culturalNote: "When toasting in France, you say 'À la santé!' (to the health) or 'Tchin-tchin!' — and the rule is sacred: you must look the other person in the eye as your glasses clink. Looking down or away is said to bring seven years of bad sex. Half-myth, half-superstition — and entirely observed by everyone at the table.",
  },

  chunks: [
    {
      id: 'bienvenue',
      target: 'Bienvenue!',
      native: 'Welcome!',
      literal: 'Well-come',
      emoji: '🚪',
      phonetic: 'byan-vuh-NOO',
      audioRef: null,
    },
    {
      id: 'asseyez_vous',
      target: 'Asseyez-vous',
      native: 'Sit down (please)',
      literal: 'Seat-yourselves',
      emoji: '🪑',
      phonetic: 'ah-say-yay VOO',
      audioRef: null,
    },
    {
      id: 'servez_vous',
      target: 'Servez-vous',
      native: 'Help yourselves',
      literal: 'Serve-yourselves',
      emoji: '🍴',
      phonetic: 'sair-vay VOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Host imperatives — vous form',
    explanation: "When hosting, you address guests with the **vous form** (formal/plural). The imperative drops the subject and ends in -ez: **Asseyez-vous** (sit down), **Servez-vous** (help yourselves), **Entrez** (come in), **Goûtez** (taste). Add 's'il vous plaît' to soften any of them.",
    examples: [
      { target: 'Entrez, je vous en prie', native: 'Come in, please (gracious)' },
      { target: 'Goûtez ça!', native: 'Taste that!' },
      { target: 'Bon appétit!', native: 'Enjoy your meal!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each host phrase to its meaning',
      pairs: [
        { left: 'Bienvenue!', right: 'Welcome!' },
        { left: 'Asseyez-vous', right: 'Sit down' },
        { left: 'Servez-vous', right: 'Help yourselves' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Camille and Hugo just walked in. They're standing in your hallway. What's the first thing you say?",
      question: "Pick the host's opener",
      options: [
        { text: "Bienvenue! Entrez!", correct: true },
        { text: "Bonsoir, ça va?", correct: false },
        { text: "Asseyez-vous tout de suite", correct: false },
      ],
      explanation: "Open with warmth — 'Bienvenue!' and a 'come in' invitation. 'Ça va' is fine but not the host's signature opener; 'asseyez-vous tout de suite' (sit down right away) is brusque.",
    },
    {
      type: 'fill_blank',
      instruction: "The food is on the table. Invite them to start.",
      sentence: '_____, c\'est prêt!',
      options: ['Servez-vous', 'Bienvenue', 'Bonjour'],
      correct: 'Servez-vous',
      context: "Help yourselves — the food is ready.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Welcome!',
      correct: ['Bienvenue!', 'Bienvenue', 'bienvenue'],
    },
    {
      type: 'build_sentence',
      instruction: "Build — 'Sit down, please'",
      words: ["plaît", "vous", "Asseyez-vous,", "s'il"],
      correct: ["Asseyez-vous,", "s'il", "vous", "plaît"],
      translation: "Sit down, please",
    },
    {
      type: 'translate',
      instruction: 'Type in French — the toast',
      prompt: "To your health! (toasting)",
      correct: ['À la santé!', 'À la santé', 'à la santé!'],
    },
  ],

  rwenDialogue: {
    intro: "Camille and Hugo are at your door, wine in hand. You're hosting your first French dinner. Open the door.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Bienvenue! Entrez, asseyez-vous!", native: "Welcome! Come in, sit down!", correct: true, feedback: "Warm, clear, host-perfect. They feel at home before their coats are off." },
          { target: "Salut, ça va?", native: "Hi, how's it going?", correct: false, feedback: "Fine for the door but not enough — open with 'Bienvenue!' to set the host tone." },
          { target: "Bonsoir, qu'est-ce que vous voulez?", native: "Good evening, what do you want?", correct: false, feedback: "That's a shopkeeper line — sounds cold from a host. Try 'Bienvenue! Entrez!'" },
        ],
      },
      {
        speaker: 'npc',
        target: "Merci! On a apporté du vin et une tarte.",
        native: "Thanks! We brought wine and a tart.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Merci! Servez-vous, c'est prêt", native: "Thanks! Help yourselves, it's ready", correct: true, feedback: "Beautiful — gracious and inviting. Now raise the glass: 'À la santé!' — and look them in the eye." },
          { target: "Posez ça là", native: "Put that there", correct: false, feedback: "Functional but cold. 'Merci! Servez-vous' opens the meal warmly." },
          { target: "Pas de problème", native: "No problem", correct: false, feedback: "Sounds dismissive. Welcome the gift with 'Merci!' and invite them to the table." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "When you raise your glass, lock eyes — never look down. À la santé! That's how you host in France.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Welcome! (in French — host opener)',
        correct: ['Bienvenue!', 'Bienvenue', 'bienvenue'],
      },
      {
        prompt: 'Help yourselves (in French — at the table)',
        correct: ['Servez-vous'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine French friends ringing your doorbell tonight. Walk to your front door, open it (yes, really), and say out loud: 'Bienvenue! Entrez, asseyez-vous!' The neighbours can wonder — the muscle memory will thank you.",
    rwenSignoff: "Hosts hold the room in any language. À demain.",
  },

  phase8: {
    scenario: "It's Saturday, 7:30pm. You're hosting Camille and Hugo at your apartment for dinner. They arrive with wine and a tarte aux pommes. You need to welcome them at the door, invite them in, get them seated, offer drinks, invite them to serve themselves at the table, and lead the toast — looking them in the eye on the clink.",
    rwenRole: "Camille and Hugo — close French friends, ~32, warm and at-home; they're playing the part of polite guests but will react vividly to the host's energy. They expect 'Bienvenue', 'Asseyez-vous', 'Servez-vous', a proper 'À la santé!' with eye contact, and 'Bon appétit' before the first bite.",
    successCriteria: "User uses at least four host imperatives in vous-form across the scene — Bienvenue / Entrez / Asseyez-vous / Servez-vous / Goûtez — leads the toast with 'À la santé!' (and Rwen reminds them about eye contact), and says 'Bon appétit' before eating.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
