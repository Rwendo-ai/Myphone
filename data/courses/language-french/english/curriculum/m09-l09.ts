import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: "Demander de l'aide — Asking for help politely",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you said the bad news. Today you ASK someone to fix it with you. The trick: French has TWO ways to say 'can you' — 'pouvez-vous' (fine) and 'pourriez-vous' (much warmer). One letter, totally different vibe. Today you switch up.",
    culturalNote: "Politeness in French isn't optional, it's structural. 'Pourriez-vous m'aider?' (could you help me?) is the conditional — softer, more deferential, expected when you're asking a stranger for a favour. 'Pouvez-vous?' (can you?) is fine but blunter. Native speakers default to 'pourriez-vous' with shopkeepers, agents, and anyone in uniform. Switch to it and watch the warmth come back.",
  },

  chunks: [
    {
      id: 'pourriez_vous_maider',
      target: "Pourriez-vous m'aider?",
      native: 'Could you help me?',
      literal: 'Could-you me-to-help?',
      emoji: '🙏',
      phonetic: 'poor-ee-AY voo may-DAY',
      audioRef: null,
    },
    {
      id: 'je_ne_connais_pas_le_quartier',
      target: 'Je ne connais pas le quartier',
      native: "I don't know this area",
      literal: 'I not know-1sg not the neighbourhood',
      emoji: '🗺️',
      phonetic: 'zhuh nuh koh-NAY pah luh kar-tee-AY',
      audioRef: null,
    },
    {
      id: 'pourriez_vous_lecrire',
      target: "Pourriez-vous l'écrire?",
      native: 'Could you write it down?',
      literal: 'Could-you it-to-write?',
      emoji: '✍️',
      phonetic: 'poor-ee-AY voo lay-KREER',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Pourriez-vous + infinitive — the polite request',
    explanation: "'Pouvez-vous' (can you) → 'Pourriez-vous' (could you) is the conditional softener. Same structure: 'Pourriez-vous + infinitive'. Pourriez-vous m'aider (help me) / l'écrire (write it) / répéter (repeat) / parler plus lentement (speak slower). It's the conditional verb form, but you don't need the grammar — just memorise 'pourriez-vous' as the polite version of 'pouvez-vous' and slot any verb in.",
    examples: [
      { target: 'Pourriez-vous parler plus lentement?', native: 'Could you speak more slowly?' },
      { target: 'Pourriez-vous répéter, s\'il vous plaît?', native: 'Could you repeat, please?' },
      { target: 'Pourriez-vous me montrer sur la carte?', native: 'Could you show me on the map?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: "Pourriez-vous m'aider?", right: 'Could you help me?' },
        { left: 'Je ne connais pas le quartier', right: "I don't know this area" },
        { left: "Pourriez-vous l'écrire?", right: 'Could you write it down?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A stranger gave you directions, but too fast. Politely ask them to write it down.',
      sentence: '_____ l\'écrire, s\'il vous plaît?',
      options: ['Pourriez-vous', 'Pouvez-vous', 'Voulez-vous'],
      correct: 'Pourriez-vous',
      context: "Both Pouvez-vous and Pourriez-vous would be understood — but Pourriez-vous (the conditional) sounds softer and more polite, exactly right when you're asking a favour from a stranger.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Could you help me?',
      correct: ["Pourriez-vous m'aider?", "Pourriez-vous m'aider", "pourriez-vous m'aider?", "pourriez-vous m'aider"],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell a stranger: "I don\'t know this area, could you help me?"',
      words: ['quartier,', 'pourriez-vous', 'pas', 'le', 'connais', 'm\'aider?', 'Je', 'ne'],
      correct: ['Je', 'ne', 'connais', 'pas', 'le', 'quartier,', 'pourriez-vous', 'm\'aider?'],
      translation: "I don't know this area, could you help me?",
    },
    {
      type: 'multiple_choice',
      instruction: 'You\'re lost and you ask a stranger nicely. Which is the warmest, most polite version?',
      question: 'Pick the politest',
      options: [
        { text: "Pourriez-vous m'aider, s'il vous plaît?", correct: true },
        { text: "Vous m'aidez?", correct: false },
        { text: "Aidez-moi!", correct: false },
      ],
      explanation: "'Pourriez-vous m'aider, s'il vous plaît?' — conditional + please = maximum politeness. 'Vous m'aidez?' is direct/blunt. 'Aidez-moi!' is the imperative — only used in real emergencies, otherwise it sounds rude.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I don't know this area",
      correct: ['Je ne connais pas le quartier', 'je ne connais pas le quartier'],
    },
  ],

  rwenDialogue: {
    intro: "You're in the Marais and properly lost. A woman walking her dog is approaching. Stop her politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi madame, pourriez-vous m\'aider? Je ne connais pas le quartier.', native: "Excuse me ma'am, could you help me? I don't know this area.", correct: true, feedback: "Textbook — 'excusez-moi madame', conditional 'pourriez-vous', then the explanation. She'll stop and help, gladly." },
          { target: 'Vous savez où est le métro?', native: 'You know where the métro is?', correct: false, feedback: "Skipping 'excusez-moi' and the polite frame is abrupt. 'Pourriez-vous m'aider?' first — then the question." },
          { target: 'Aidez-moi! Je suis perdu!', native: 'Help me! I\'m lost!', correct: false, feedback: "Way too dramatic for being mildly lost — 'Aidez-moi!' is for emergencies. Use 'pourriez-vous m'aider?' for everyday lost." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bien sûr, où est-ce que vous allez?',
        native: 'Of course, where are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je cherche le métro Saint-Paul. Pourriez-vous l\'écrire?', native: 'I\'m looking for Saint-Paul métro. Could you write it down?', correct: true, feedback: "Clever — using 'pourriez-vous l'écrire' so you don't have to remember. That's a pro move." },
          { target: 'Métro Saint-Paul.', native: 'Métro Saint-Paul.', correct: false, feedback: "Fine, but you missed a chance to ask her to write it. Directions vanish from your head fast — get them on paper." },
          { target: 'Je sais pas.', native: 'I dunno.', correct: false, feedback: "She just asked where you're going — answer her, then ask politely for the directions." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Politeness in French is the door that opens every other door. 'Pourriez-vous' — keep it in your pocket.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Could you help me? (politely, in French)',
        correct: ["Pourriez-vous m'aider?", "Pourriez-vous m'aider", "pourriez-vous m'aider?", "pourriez-vous m'aider"],
      },
      {
        prompt: 'Could you write it down? (politely, in French)',
        correct: ["Pourriez-vous l'écrire?", "Pourriez-vous l'écrire", "pourriez-vous l'écrire?", "pourriez-vous l'écrire", "Pourriez-vous lecrire?"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, in any conversation in your head, swap 'pouvez-vous' for 'pourriez-vous' three times. Could you help me, could you repeat, could you write it down. Wire the conditional. It's the difference between functional French and warm French.",
    rwenSignoff: "Tomorrow — Module 9 in one full conversation. À demain.",
  },

  phase8: {
    scenario: "You're lost in the Marais, in Paris. Phone dead, paper map upside down, looking for the métro Saint-Paul. You stop a kind-looking older woman walking her dog. You must ask politely for help using 'pourriez-vous m'aider?', explain you don't know the neighbourhood ('je ne connais pas le quartier'), and ask her to write the directions down ('pourriez-vous l'écrire?'). Stay polite throughout — French politeness is what unlocks the warmth of her reply.",
    rwenRole: "Madame Lacroix — 70s, Parisian, walking her West Highland terrier, has lived in the Marais for 50 years. Will warmly help if approached politely with 'Excusez-moi' + 'pourriez-vous'; will be cooler if user is abrupt. Offers detailed directions and will write them down if asked.",
    successCriteria: "User uses 'pourriez-vous' (the conditional polite) at least twice — for help and for writing it down. Uses 'je ne connais pas le quartier' once. Opens with 'Excusez-moi madame'. Stays in French throughout. Bonus: closes with 'merci beaucoup, bonne journée'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
