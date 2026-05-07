import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-beber',
  module: 8,
  lesson: 4,
  title: 'Beber — To Drink',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beber is regular -er — same endings as comer. Bebo, bebes, bebe, bebemos, bebéis, beben. But Spaniards often prefer 'tomar' for drinks ('¿qué tomas?') — and 'tomar' literally means to take. Both are correct; tomar feels more conversational, beber slightly more formal or biological (drinking water, drinking too much).",
    culturalNote: "Order coffee in Madrid and you'll hear '¿Qué vas a tomar?' more often than '¿Qué vas a beber?' In Mexico City the same — '¿Qué tomas?' Beber survives in textbooks and in talking about hydration, alcohol, or babies' bottles. For 'I'll have a coffee', natives say 'tomo un café'. We'll learn tomar properly in lesson 8 — for now, beber is your foundation.",
  },

  chunks: [
    {
      id: 'bebo',
      target: 'Bebo',
      native: 'I drink',
      literal: '(yo) bebo — regular -er',
      emoji: '🥤',
      phonetic: 'BEH-boh',
      audioRef: null,
    },
    {
      id: 'bebe',
      target: 'Bebe',
      native: 'He/she drinks / You drink (formal)',
      literal: '3rd person sing. — also formal usted',
      emoji: '👨',
      phonetic: 'BEH-beh',
      audioRef: null,
    },
    {
      id: 'bebi',
      target: 'Bebí',
      native: 'I drank',
      literal: 'preterite — single completed event',
      emoji: '✅',
      phonetic: 'beh-BEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Beber follows the comer pattern exactly',
    explanation: "If you learned comer, you already know beber. Same -er endings: -o, -es, -e, -emos, -éis, -en in present; -í, -iste, -ió, -imos, -isteis, -ieron in preterite. This is the leverage of regular verbs — one pattern unlocks the whole family. Aprender, vender, leer all behave the same way.",
    examples: [
      { target: 'Bebo agua todos los días', native: 'I drink water every day' },
      { target: '¿Qué bebes?', native: 'What are you drinking?' },
      { target: 'Bebí mucha agua ayer', native: 'I drank a lot of water yesterday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its tense',
      pairs: [
        { left: 'Bebo', right: 'I drink (now/habit)' },
        { left: 'Bebí', right: 'I drank (preterite)' },
        { left: 'Bebemos', right: 'We drink' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the present habitual',
      sentence: '_____ agua todos los días.',
      options: ['Bebo', 'Bebí', 'Beberé'],
      correct: 'Bebo',
      context: 'I drink water every day.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I drank water yesterday',
      correct: ['Bebí agua ayer', 'bebí agua ayer', 'bebi agua ayer'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You want to apply the comer pattern to a new -er verb. Which preterite ending matches "I"?',
      question: 'Regular -er preterite, 1st person singular:',
      options: [
        { text: '-í (with accent)', correct: true },
        { text: '-é (with accent)', correct: false },
        { text: '-ó (with accent)', correct: false },
      ],
      explanation: "Regular -er verbs take -í in preterite 1st person: comí, bebí, aprendí. -é is for -ar verbs (hablé). -ó is 3rd person singular (bebió).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'We drink coffee in the morning'",
      words: ['Bebemos', 'café', 'por', 'la', 'mañana.'],
      correct: ['Bebemos', 'café', 'por', 'la', 'mañana.'],
      translation: 'We drink coffee in the morning',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I drink (present)',
      correct: ['Bebo', 'bebo'],
    },
  ],

  rwenDialogue: {
    intro: "Wednesday 11am at a Madrid café in Malasaña. The waiter has just put your colleague's coffee down and turns to you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Y para usted, ¿qué bebe?',
        native: 'And for you, what are you drinking?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bebo agua, por favor. Y un café también.', native: "I'll have water please. And a coffee too.", correct: true, feedback: "'Bebo' covers it cleanly + por favor + a follow-on. The waiter nods." },
          { target: 'Bebí agua.', native: 'I drank water.', correct: false, feedback: "Past tense — you'd be telling him what you had earlier. Right now: 'Bebo agua, por favor.'" },
          { target: 'Voy a bebí.', native: "I'm going to (incorrect form).", correct: false, feedback: "After 'voy a' you need infinitive: 'Voy a beber agua.' Or simpler: 'Bebo agua, por favor.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Perfecto, ahora mismo.',
        native: 'Perfect, right away.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Bebo, bebí — same root, same pattern as comer. Apply this to aprender, vender, leer. -er verbs are a family that share everything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I drink', correct: ['Bebo', 'bebo'] },
      { prompt: 'I drank (preterite)', correct: ['Bebí', 'bebí', 'bebi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every drink today: name the tense out loud. 'Bebo agua' (drinking now). 'Bebí café esta mañana' (already had it). Train the accent on 'bebí' — that little stroke is the whole past tense.",
    rwenSignoff: "Bebo, bebes, bebemos. One pattern, every -er verb. ¡Buen camino!",
  },

  phase8: {
    scenario: "Wednesday 11:15am at a café terrace in Malasaña, Madrid. The waiter has just brought your colleague's coffee and you need to order. Your colleague Pablo from the Madrid office wants to know what you usually drink in the mornings back home and what you had at breakfast today.",
    rwenRole: "Pablo — Madrid coworker, early 30s, peer register (tú). Quick-witted, will gently correct your verb tenses if you mix up bebo / bebí.",
    successCriteria: "User orders cleanly with 'bebo agua' or 'un café, por favor'. Distinguishes 'bebí' (this morning's breakfast — preterite) from 'bebo' (general habit) when answering Pablo. The accent on 'bebí' lands. No tense crossover.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
