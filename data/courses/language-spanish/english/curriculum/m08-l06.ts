import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-dormir-despertar',
  module: 8,
  lesson: 6,
  title: 'Dormir & Despertarse — Sleep and Wake Up',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Dormir is an -ir verb with an o→ue stem-change (duermo, duermes). Despertarse is something else entirely — a reflexive verb. 'Me despierto' means 'I wake myself up'. Spanish does this constantly: levantarse, ducharse, vestirse — all the things you do TO yourself in the morning come with these reflexive 'me / te / se' pronouns.",
    culturalNote: "In Spain, the late siesta culture is real but romanticised — most office workers don't nap. In Mexico City the workday starts later (10am is common) but ends later too. So 'me despierto a las ocho' (I wake at 8) is normal in Madrid, where 'me despierto a las nueve' is normal in CDMX. Sleep schedules are cultural.",
  },

  chunks: [
    {
      id: 'duermo',
      target: 'Duermo',
      native: 'I sleep',
      literal: '(yo) duermo — dormir, o→ue stem-change',
      emoji: '😴',
      phonetic: 'DWEHR-moh',
      audioRef: null,
    },
    {
      id: 'me_despierto',
      target: 'Me despierto',
      native: 'I wake up',
      literal: 'I wake-myself — reflexive + e→ie stem-change',
      emoji: '⏰',
      phonetic: 'meh des-PYEHR-toh',
      audioRef: null,
    },
    {
      id: 'me_levanto',
      target: 'Me levanto',
      native: 'I get up (out of bed)',
      literal: 'I lift-myself — reflexive',
      emoji: '🛏️',
      phonetic: 'meh leh-BAHN-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reflexive verbs — the "me / te / se" you do to yourself',
    explanation: "Some Spanish verbs come paired with a reflexive pronoun because the action is on yourself. Despertarse → me despierto / te despiertas / se despierta / nos despertamos / os despertáis / se despiertan. Same with levantarse, ducharse (shower), vestirse (get dressed), llamarse (be called — 'me llamo Ana'). The pronoun 'me' / 'te' / 'se' goes BEFORE the verb in normal sentences.",
    examples: [
      { target: 'Me despierto a las siete', native: 'I wake up at seven' },
      { target: 'Te levantas tarde', native: 'You get up late' },
      { target: 'Duermo ocho horas', native: 'I sleep eight hours' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Duermo', right: 'I sleep' },
        { left: 'Me despierto', right: 'I wake up' },
        { left: 'Me levanto', right: 'I get up' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add the reflexive pronoun',
      sentence: '_____ levanto a las ocho.',
      options: ['Me', 'Te', 'Se'],
      correct: 'Me',
      context: 'I get up at eight.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I sleep eight hours',
      correct: ['Duermo ocho horas', 'duermo ocho horas'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does Spanish need "me" before "despierto"?',
      question: 'Reflexive logic:',
      options: [
        { text: 'Because the action (waking) is something you do to yourself.', correct: true },
        { text: 'Because all -ir verbs need a pronoun.', correct: false },
        { text: "Because it's a question.", correct: false },
      ],
      explanation: "Despertarse is reflexive — you wake YOURSELF up. The 'me' marks that the subject and the object are the same person. Same logic for levantarse, ducharse, vestirse.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I wake up at seven and I sleep at eleven'",
      words: ['Me', 'despierto', 'a', 'las', 'siete', 'y', 'duermo', 'a', 'las', 'once.'],
      correct: ['Me', 'despierto', 'a', 'las', 'siete', 'y', 'duermo', 'a', 'las', 'once.'],
      translation: 'I wake up at seven and I sleep at eleven',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'You wake up (informal)',
      correct: ['Te despiertas', 'te despiertas'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 9:30am at a Madrid Airbnb kitchen. Your host Ana asks how you slept and what your morning looks like.",
    lines: [
      {
        speaker: 'npc',
        target: '¿A qué hora te despiertas normalmente?',
        native: 'What time do you usually wake up?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me despierto a las siete y duermo unas ocho horas.', native: 'I wake up at seven and sleep about eight hours.', correct: true, feedback: "Reflexive 'me' in front, both verbs in present habitual — a clean morning routine sentence." },
          { target: 'Despierto siete duermo ocho.', native: 'Wake seven sleep eight.', correct: false, feedback: "You need 'me' before despierto (it's reflexive) and 'a las' before time. 'Me despierto a las siete y duermo ocho horas.'" },
          { target: 'Yo me me despierto.', native: 'I I-myself I-myself wake.', correct: false, feedback: "Doubling 'me' — only one reflexive pronoun is needed. 'Me despierto a las siete.'" },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Qué disciplinada! Yo me levanto a las nueve los domingos.',
        native: 'How disciplined! I get up at nine on Sundays.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Me despierto. Me levanto. Me ducho. Me visto. The reflexive 'me' is the pronoun of your morning routine.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I wake up', correct: ['Me despierto', 'me despierto'] },
      { prompt: 'I sleep', correct: ['Duermo', 'duermo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow morning, narrate the first three minutes in Spanish. 'Me despierto. Me levanto. Me ducho.' Three reflexive verbs, three real actions. Don't translate — feel the pattern.",
    rwenSignoff: "Me despierto. Me levanto. The day begins with reflexives. ¡Buen camino!",
  },

  phase8: {
    scenario: "Sunday 9:45am at the kitchen counter of your Airbnb in Lavapiés, Madrid. Your host Ana hands you a coffee and asks how you slept (preterite — last night) and what your typical morning routine looks like back home.",
    rwenRole: "Ana — Madrid Airbnb host, late 40s, warm but uses tú immediately. Asks lots of questions about routine and life. Will gently catch missing reflexive pronouns.",
    successCriteria: "User answers about last night with 'dormí bien / mal' (preterite) and describes morning routine with at least two reflexive verbs in present habitual ('me despierto a las...', 'me levanto a las...'). Reflexive pronouns are present and in the right position. Distinguishes preterite (last night) from present habit (every day).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
