import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Les amis — Friends Like Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Some friends ARE family. Your best friend since you were six — French has a way of saying that. Today, two crucial details: 'meilleur' / 'meilleure' agrees with the friend's gender, and 'comme ma famille' (like my family) is the phrase that lifts a friendship to that level.",
    culturalNote: "In French, EVERY adjective agrees with what it describes. 'Meilleur ami' (m) — masculine friend. 'Meilleure amie' (f) — feminine friend. The extra -e on the feminine is silent, but spelling it wrong looks careless. Same with 'cher / chère' (dear).",
  },

  chunks: [
    {
      id: 'mon_meilleur_ami',
      target: 'Mon meilleur ami',
      native: 'My best (male) friend',
      literal: 'My(m) best(m) friend(m)',
      emoji: '👬',
      phonetic: 'mohn may-yur ah-MEE',
      audioRef: null,
    },
    {
      id: 'ma_meilleure_amie',
      target: 'Ma meilleure amie',
      native: 'My best (female) friend',
      literal: 'My(f) best(f) friend(f)',
      emoji: '👭',
      phonetic: 'mah may-yur ah-MEE',
      audioRef: null,
    },
    {
      id: 'comme_ma_famille',
      target: 'Comme ma famille',
      native: 'Like my family',
      literal: 'Like my(f) family',
      emoji: '❤️',
      phonetic: 'kohm mah fah-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gender agreement — meilleur(e), ami(e)',
    explanation: "When a friend is male: 'mon meilleur ami' (no -e). When female: 'ma meilleure amie' (extra -e on both meilleure AND amie). The whole phrase shifts together. 'Comme' (like) is a small word doing big work — comparing.",
    examples: [
      { target: 'Mon meilleur ami Marc', native: 'My best friend Marc (male)' },
      { target: 'Ma meilleure amie Léa', native: 'My best friend Léa (female)' },
      { target: 'Comme ma sœur', native: 'Like my sister (a friend close as a sister)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Mon meilleur ami', right: 'My best (male) friend' },
        { left: 'Ma meilleure amie', right: 'My best (female) friend' },
        { left: 'Comme ma famille', right: 'Like my family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your best friend is named Camille — a woman.",
      sentence: 'Camille est ma _____ amie.',
      options: ['meilleur', 'meilleure', 'meilleurs'],
      correct: 'meilleure',
      context: 'Amie is feminine, so the adjective takes -e: meilleure. The whole phrase agrees.',
    },
    {
      type: 'translate',
      instruction: 'Type in French (your best male friend)',
      prompt: 'My best (male) friend',
      correct: ['Mon meilleur ami', 'mon meilleur ami'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Sophie is like my sister"',
      words: ['ma', 'comme', 'Sophie', 'sœur.', 'est'],
      correct: ['Sophie', 'est', 'comme', 'ma', 'sœur.'],
      translation: 'Sophie is like my sister.',
    },
    {
      type: 'multiple_choice',
      instruction: "You're describing your closest friend, a woman named Léa.",
      question: 'Which is correct?',
      options: [
        { text: "Léa est ma meilleure amie. Elle est comme ma sœur.", correct: true },
        { text: "Léa est mon meilleur ami. Elle est comme ma sœur.", correct: false },
        { text: "Léa est ma meilleur ami. Elle est comme ma sœur.", correct: false },
      ],
      explanation: "Léa is female — feminine all the way: 'ma meilleure amie'. The middle option uses the masculine form; the third forgets the -e.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (your best female friend)',
      prompt: 'My best (female) friend',
      correct: ['Ma meilleure amie', 'ma meilleure amie'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a French friend's birthday party. A new face — Antoine — asks who you came with.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu es venu(e) avec qui?',
        native: 'Who did you come with?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Avec ma meilleure amie, Léa. Elle est comme ma sœur.', native: 'With my best friend, Léa. She\'s like my sister.', correct: true, feedback: "Beautiful — full agreement on 'meilleure amie' and the warm 'comme ma sœur'." },
          { target: 'Avec mon meilleur amie, Léa.', native: 'With my best friend, Léa.', correct: false, feedback: "Mixed up — Léa is female, so 'ma meilleure amie' (all feminine)." },
          { target: 'Avec mon meilleur ami, Léa.', native: 'With my best friend, Léa.', correct: false, feedback: "Léa is female — masculine 'meilleur ami' doesn't fit her name." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, comme ta sœur — c\'est mignon, ça.',
        native: "Ah, like your sister — that's sweet.",
      },
      {
        speaker: 'rwen',
        rwenLine: "He echoed your phrase. 'Comme ta sœur' (like your sister). When French speakers re-use your wording, you've landed.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My best (female) friend (in French)',
        correct: ['Ma meilleure amie', 'ma meilleure amie'],
      },
      {
        prompt: 'Like my family (in French)',
        correct: ['Comme ma famille', 'comme ma famille'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick your closest friend in real life. Say out loud: 'Mon meilleur ami est ___' OR 'Ma meilleure amie est ___'. Add: 'Il est / Elle est comme mon frère / ma sœur.'",
    rwenSignoff: "Friends as family — the warmest thing a language can say. À demain.",
  },

  phase8: {
    scenario: "You're at a friend's apartment in Paris for a small dinner. Someone you've just met — Antoine — sits next to you and gets curious about your life. He asks who your closest friend is, why, what they're like. You need to describe them, agree gender correctly, and use 'comme' to compare them to family.",
    rwenRole: "Antoine Mercier — ~30, easy-going, a friend of your host. Asks open questions ('et alors?', 'pourquoi?'), gently nods when you get agreement right. Uses lots of 'ah ouais' and 'je vois'. Pauses if you mismatch gender.",
    successCriteria: "User uses either 'mon meilleur ami' OR 'ma meilleure amie' (matching the named friend's gender — full agreement throughout), AND uses 'comme ma famille' / 'comme mon frère' / 'comme ma sœur' once. Bonus: maintains the agreement for at least one follow-up sentence.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
