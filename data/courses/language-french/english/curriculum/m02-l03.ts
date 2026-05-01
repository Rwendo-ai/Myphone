import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-parlez-vous-anglais',
  module: 2,
  lesson: 3,
  title: 'Parlez-vous anglais? — Do you speak English?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're stuck. Your French is rusty, the situation is complicated, and you genuinely need English help. There's a right way to ask — and the trick is to ask in *French* first. The asker who tries gets help. The asker who barks 'English?' often doesn't.",
    culturalNote: "Most younger French people in cities speak some English — but the reflex test is whether you bothered to try French first. A polite 'Bonjour, parlez-vous anglais?' opens almost every door. Walking up and saying 'English?' is technically understandable but lands as entitled. Even a clumsy 'parlez-vous' wins enormous goodwill.",
  },

  chunks: [
    {
      id: 'parlez_vous_anglais',
      target: 'Parlez-vous anglais?',
      native: 'Do you speak English?',
      literal: 'Speak-you English?',
      emoji: '🇬🇧',
      phonetic: 'par-lay voo ahn-GLEH',
      audioRef: null,
    },
    {
      id: 'un_peu',
      target: 'Un peu',
      native: 'A little',
      literal: 'A little',
      emoji: '🤏',
      phonetic: 'uhn PUH',
      audioRef: null,
    },
    {
      id: 'pas_bien',
      target: 'Pas bien',
      native: 'Not well',
      literal: 'Not well',
      emoji: '😬',
      phonetic: 'pah BYAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question by inversion',
    explanation: "To ask formally in French, flip the verb and pronoun, with a hyphen between. 'Vous parlez' (you speak) becomes 'Parlez-vous?' (do you speak?). It's the politest question form — perfect for strangers.",
    examples: [
      { target: 'Parlez-vous français?', native: 'Do you speak French?' },
      { target: 'Avez-vous l’heure?', native: 'Do you have the time?' },
      { target: 'Pouvez-vous m’aider?', native: 'Can you help me?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to what it means',
      pairs: [
        { left: 'Parlez-vous anglais?', right: 'Do you speak English?' },
        { left: 'Un peu', right: 'A little' },
        { left: 'Pas bien', right: 'Not well' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the politest opener',
      question: "You're a tourist in Bordeaux and you genuinely need English help. Which gets the warmest response?",
      options: [
        { text: 'Bonjour, parlez-vous anglais?', correct: true },
        { text: 'English?', correct: false },
        { text: 'Anglais!', correct: false },
      ],
      explanation: "The 'Bonjour' + full French question is the magic combo. It signals: I tried, I respect you, now please help.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the polite question',
      sentence: '_____-vous anglais?',
      options: ['Parlez', 'Parle', 'Parler'],
      correct: 'Parlez',
      context: "Inversion form uses the conjugated 'vous' form: parlez.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Do you speak English?',
      correct: ['Parlez-vous anglais?', 'parlez-vous anglais?', 'Parlez-vous anglais', 'parlez-vous anglais'],
    },
    {
      type: 'build_sentence',
      instruction: "Reply to 'Parlez-vous français?' — you speak just a little",
      words: ['peu', 'Un'],
      correct: ['Un', 'peu'],
      translation: 'A little',
    },
    {
      type: 'translate',
      instruction: "Type in French — someone asks if you speak Spanish; you really don't.",
      prompt: 'Not well',
      correct: ['Pas bien', 'pas bien'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Office de Tourisme in Strasbourg with a complicated question about regional trains. The agent hasn't smiled yet. Open the conversation.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour, parlez-vous anglais?', native: 'Hello, do you speak English?', correct: true, feedback: 'Perfect — Bonjour first, then the polite inversion. She already likes you.' },
          { target: 'English?', native: 'English?', correct: false, feedback: "Lands cold and demanding. The polite frame matters more than perfect pronunciation." },
          { target: 'Anglais!', native: 'English!', correct: false, feedback: "One-word command — you're missing both the greeting and the question shape." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bonjour. Un peu, oui.',
        native: 'Hello. A little, yes.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci. Je peux essayer en français aussi.', native: 'Thank you. I can try in French too.', correct: true, feedback: "Beautiful move — you offered to share the work. She'll meet you halfway." },
          { target: 'OK English go', native: '(broken English)', correct: false, feedback: "She offered 'a little' — meet her with grace, not a wall of English." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you feel her thaw? 'Un peu' is an offer. You both speak partial languages now. That's a real conversation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Do you speak English? (in French, polite inversion)',
        correct: ['Parlez-vous anglais?', 'parlez-vous anglais?', 'Parlez-vous anglais', 'parlez-vous anglais'],
      },
      {
        prompt: 'A little (in French)',
        correct: ['Un peu', 'un peu'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine one situation where you'd need this — calling a hotel? Asking a stranger? Practise the full sequence out loud: 'Bonjour, parlez-vous anglais?' Even alone in your kitchen.",
    rwenSignoff: "Try first, then ask. À bientôt.",
  },

  phase8: {
    scenario: "You're checking into a small B&B in the village of Riquewihr, Alsace. The owner is in his 60s and runs the place with his wife. You have a complicated question — you need to change rooms because of the stairs, and your French isn't strong enough for the whole conversation. You need to ask if he speaks English without being rude.",
    rwenRole: "Monsieur Henri — B&B owner, ~65, warm but old-school, judges you immediately on whether you greet and ask in French first. Speaks 'un peu' of English when asked nicely.",
    successCriteria: "User opens with 'Bonjour' THEN asks 'Parlez-vous anglais?' (in French, polite inversion form). User does NOT lead with English. When Henri replies 'Un peu', user gracefully accepts and continues — not by switching entirely to English but by attempting French where they can.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
