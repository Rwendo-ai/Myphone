import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry',
  module: 10,
  lesson: 2,
  title: 'En colère — Angry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Anger is a real feeling and French has clean, dignified ways to name it. Here's the thing — French communication can sound more direct than American politeness, and that's not rudeness. Saying 'Je suis en colère' isn't dramatic. It's honest.",
    culturalNote: "Americans often soften anger ('I'm a little frustrated, you know, kind of...'). French speakers tend to name it more squarely — 'Je suis en colère.' That directness is read as adult honesty, not aggression. The flip side: 'Calme-toi' (calm down) said the wrong way feels just as confrontational in French as in English. Tone carries it.",
  },

  chunks: [
    {
      id: 'je_suis_en_colere',
      target: 'Je suis en colère',
      native: "I'm angry",
      literal: 'I am in anger',
      emoji: '😠',
      phonetic: 'zhuh swee zahn koh-LEHR',
      audioRef: null,
    },
    {
      id: 'je_suis_frustre',
      target: 'Je suis frustré(e)',
      native: "I'm frustrated",
      literal: 'I am frustrated',
      emoji: '😤',
      phonetic: 'zhuh swee froo-STRAY',
      audioRef: null,
    },
    {
      id: 'calme_toi',
      target: 'Calme-toi / Calmez-vous',
      native: 'Calm down (informal / formal)',
      literal: 'Calm-yourself / Calm-yourselves',
      emoji: '🧘',
      phonetic: 'KAHLM twa / kahl-MAY voo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Strong emotions — naming, not exploding',
    explanation: "'Être en colère' uses être + the noun 'colère' (anger). 'Frustré(e)' is an adjective, agrees like content/contente. 'Calme-toi' uses 'tu' (a friend); 'Calmez-vous' uses 'vous' (formal or plural) — same as the greeting register you already know.",
    examples: [
      { target: 'Je suis en colère contre lui', native: "I'm angry at him" },
      { target: 'Elle est frustrée', native: "She's frustrated" },
      { target: 'Calmez-vous, monsieur', native: 'Calm down, sir (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Je suis en colère', right: "I'm angry" },
        { left: 'Je suis frustré(e)', right: "I'm frustrated" },
        { left: 'Calme-toi', right: 'Calm down (informal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your friend is upset. Tell them gently to calm down — pick the right form.",
      sentence: '_____, ça va aller.',
      options: ['Calme-toi', 'Calmez-vous', 'Calme-vous'],
      correct: 'Calme-toi',
      context: "A friend = 'tu' register, so 'Calme-toi'. 'Calmez-vous' would be too formal between close friends.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — name the feeling honestly',
      prompt: "I'm angry",
      correct: ['Je suis en colère', 'je suis en colère'],
    },
    {
      type: 'build_sentence',
      instruction: 'A stranger in a queue is shouting. Tell them firmly but politely to calm down. Put the words in order.',
      words: ['monsieur', 'Calmez-', 'vous,'],
      correct: ['Calmez-', 'vous,', 'monsieur'],
      translation: 'Calm down, sir (formal)',
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague keeps interrupting in a meeting. After the third time, what's a clean French way to name the feeling?",
      question: 'Pick the calmest, clearest line',
      options: [
        { text: 'Je suis frustré(e).', correct: true },
        { text: 'Calme-toi!', correct: false },
        { text: 'Je suis content.', correct: false },
      ],
      explanation: "Naming your own feeling ('frustré') is direct without attacking. 'Calme-toi' would aim it at them, 'content' is the opposite emotion.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — same word, the speaker you are',
      prompt: "I'm frustrated",
      correct: ['Je suis frustré', 'Je suis frustrée', 'je suis frustré', 'je suis frustrée'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a café terrace in Paris. The waiter has forgotten your order twice. Your friend Marc, sitting across from you, sees your jaw tighten.",
    lines: [
      {
        speaker: 'npc',
        target: "Tu es énervé(e)? Dis-le.",
        native: 'You\'re annoyed? Just say it.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui, je suis frustré(e). Mais ça va.', native: "Yes, I'm frustrated. But it's okay.", correct: true, feedback: 'Honest, contained, French. You named the feeling without making a scene.' },
          { target: 'Non, je suis content!', native: "No, I'm happy!", correct: false, feedback: "He read your face correctly — denying it would feel false. The French move is to admit it." },
          { target: 'Calme-toi!', native: 'Calm down!', correct: false, feedback: "You'd be telling Marc to calm down — but Marc is fine. Aim the words at the right person." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Voilà. Maintenant on peut en parler.',
        native: 'There. Now we can talk about it.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Naming frustration in French isn\'t complaining — it\'s clearing the air. You just did the adult thing.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm angry (in French)",
        correct: ['Je suis en colère', 'je suis en colère'],
      },
      {
        prompt: "Calm down (to a friend, informal)",
        correct: ['Calme-toi', 'calme-toi', 'Calme toi'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you feel mildly frustrated — traffic, a slow website, anything — name it in French to yourself: 'Je suis frustré(e).' Notice that naming it doesn't make it bigger. Often it makes it smaller.",
    rwenSignoff: "Pas de colère ici. À demain.",
  },

  phase8: {
    scenario: "You're picking up a package at a Parisian post office. The clerk says it was sent back yesterday — but you tracked it as 'available' this morning. The line behind you is six people deep and growing impatient. You need to handle this in French without exploding.",
    rwenRole: "Madame Bertrand — postal clerk, ~50, professional but tired; she'll appreciate directness over passive-aggressive Anglo softening, and shut down anyone who shouts. She uses 'vous' throughout.",
    successCriteria: "User names their own feeling clearly with 'Je suis frustré(e)' (NOT shouting, NOT 'Calmez-vous' aimed at her), stays in vous register, and pairs the feeling with a concrete request ('je peux parler à...' / 'pouvez-vous vérifier...'). The win is direct + dignified, not American-passive or American-explosive.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
