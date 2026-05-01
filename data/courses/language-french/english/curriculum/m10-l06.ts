import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'Chez le médecin — At the doctor',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A doctor visit in France has a rhythm. They ask 'depuis quand?' — since when. They want a duration, not a date. 'Depuis trois jours.' Then they say 'Prenez ce médicament' — take this medicine. Three phrases get you through the appointment.",
    culturalNote: "French doctors are usually punctual, brief, and direct — appointments are often 15 minutes. They prescribe quickly. Pharmacies fill it across the street. Bring your carte vitale or insurance card; cash or card. The whole thing is more efficient and less paperwork-heavy than American medicine.",
  },

  chunks: [
    {
      id: 'ca_fait_mal_ici',
      target: 'Ça fait mal ici',
      native: 'It hurts here',
      literal: 'That makes pain here',
      emoji: '👉',
      phonetic: 'sah feh mahl ee-SEE',
      audioRef: null,
    },
    {
      id: 'depuis_trois_jours',
      target: 'Depuis trois jours',
      native: 'For three days',
      literal: 'Since three days',
      emoji: '📅',
      phonetic: 'duh-PWEE trwah ZHOOR',
      audioRef: null,
    },
    {
      id: 'prenez_ce_medicament',
      target: 'Prenez ce médicament',
      native: 'Take this medicine',
      literal: 'Take(formal) this medication',
      emoji: '💊',
      phonetic: 'pruh-NAY suh may-dee-kah-MAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Depuis + duration, and the imperative",
    explanation: "'Depuis' = since/for. French uses it where English uses both 'for' and 'since'. 'Depuis trois jours' = 'for three days' (still ongoing). The other piece is the imperative — 'Prenez' is the formal/plural command form of 'prendre' (to take). Same shape as 'Calmez-vous' from Lesson 2.",
    examples: [
      { target: "J'ai mal depuis lundi", native: "I've been in pain since Monday" },
      { target: 'Depuis une semaine', native: 'For a week' },
      { target: 'Prenez deux comprimés', native: 'Take two tablets (formal command)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ça fait mal ici', right: 'It hurts here' },
        { left: 'Depuis trois jours', right: 'For three days' },
        { left: 'Prenez ce médicament', right: 'Take this medicine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "The doctor asks how long. Pick the right opener for your duration answer.",
      sentence: "_____ deux semaines.",
      options: ['Depuis', 'Pour', 'À'],
      correct: 'Depuis',
      context: "'Depuis' is the French word for 'for' when something is still going on. Two weeks ago it started, and you're still sick now.",
    },
    {
      type: 'translate',
      instruction: "Type in French — pointing to your knee in front of the doctor",
      prompt: "It hurts here",
      correct: ['Ça fait mal ici', 'ça fait mal ici', 'Ca fait mal ici'],
    },
    {
      type: 'build_sentence',
      instruction: 'The doctor asks "Depuis quand?" Tell her: for three days. Put the words in order.',
      words: ['trois', 'Depuis', 'jours'],
      correct: ['Depuis', 'trois', 'jours'],
      translation: 'For three days',
    },
    {
      type: 'multiple_choice',
      instruction: "The doctor hands you a prescription. What's the most likely thing she just said?",
      question: 'Pick the right doctor instruction',
      options: [
        { text: 'Prenez ce médicament.', correct: true },
        { text: "Calme-toi.", correct: false },
        { text: "Je suis en colère.", correct: false },
      ],
      explanation: "'Prenez ce médicament' (take this medicine) is the doctor's standard line. The others have nothing to do with prescribing.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — duration answer to "depuis quand?"',
      prompt: "For three days",
      correct: ['Depuis trois jours', 'depuis trois jours'],
    },
  ],

  rwenDialogue: {
    intro: "You're sitting in Dr. Bernard's office in Marseille. She's looked at your chart, now she looks at you.",
    lines: [
      {
        speaker: 'npc',
        target: "Bonjour. Alors, qu'est-ce qui ne va pas?",
        native: "Hello. So, what's wrong?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai mal au ventre. Ça fait mal ici. Depuis trois jours.", native: 'My stomach hurts. It hurts here. For three days.', correct: true, feedback: 'Pain location, exact spot, duration — three sentences, full picture. Doctor will love you.' },
          { target: "Je suis ventre.", native: "I am stomach. (nonsense)", correct: false, feedback: "Body parts pair with 'avoir mal à', not 'être'. 'J'ai mal au ventre' is the structure." },
          { target: "Pour trois jours.", native: "For three days. (wrong word)", correct: false, feedback: "'Pour' is for future durations ('I'll be in Paris pour 3 days'). Past/ongoing = 'depuis'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Bien. Prenez ce médicament deux fois par jour, et revenez si ça ne passe pas.",
        native: "Good. Take this medicine twice a day, and come back if it doesn't pass.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Whole appointment, in French, in three sentences. You just navigated French healthcare.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "It hurts here (in French — at the doctor)",
        correct: ['Ça fait mal ici', 'ça fait mal ici', 'Ca fait mal ici'],
      },
      {
        prompt: "For three days (duration answer in French)",
        correct: ['Depuis trois jours', 'depuis trois jours'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine the next time you might need a doctor abroad. Run the script in your head: 'Bonjour docteur. J'ai mal à... Ça fait mal ici. Depuis... jours.' Have it ready.",
    rwenSignoff: "Sois en bonne santé. Be well. À demain.",
  },

  phase8: {
    scenario: "You're at a doctor's office in Nice. Day three of stomach pain. The doctor — kind but efficient — has called you in and is asking about symptoms. You have ten minutes to explain in French, answer 'depuis quand?', point to where it hurts, and accept her prescription.",
    rwenRole: "Docteur Lambert — GP, ~50, brisk and kind; she uses 'vous' throughout, will ask 'depuis quand?', 'où exactement?', and end with 'Prenez ce médicament...'. Asks one follow-up if the duration is vague.",
    successCriteria: "User opens with 'Bonjour docteur', uses 'J'ai mal à' + body part with correct article, says 'Ça fait mal ici', answers 'Depuis quand?' with 'Depuis [number] jours/semaines' (NOT 'pour'), and accepts the prescription with 'merci'. Stays in vous register.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
