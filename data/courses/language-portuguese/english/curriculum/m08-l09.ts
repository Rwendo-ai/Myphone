import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l09-rotina",
  module: 8,
  lesson: 9,
  title: "Minha rotina — Telling your day",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today, narrate a Brazilian day. Acordo, tomo café, trabalho, almoço, vou pra academia, janto, durmo. The whole verb chain.",
    culturalNote: "Brazilian academia (gym) culture is huge — many go after work or before. Sleeping (durmo, dormir) is sacred — Brazilians take naps when they can.",
  },

  chunks: [
    { id: "durmo", target: "Eu durmo", native: "I sleep", literal: "I sleep", emoji: "😴", phonetic: "EH-oo DOOR-moo", audioRef: null },
    { id: "academia", target: "Vou para a academia", native: "I go to the gym", literal: "I go to gym", emoji: "💪", phonetic: "VOH PAH-rah ah-kah-DEH-mee-ah", audioRef: null },
    { id: "saio", target: "Eu saio de casa", native: "I leave home", literal: "I exit home", emoji: "🚪", phonetic: "EH-oo SAH-yoo", audioRef: null },
  ],

  pattern: {
    name: "Day-narration verb chain",
    explanation: "Acordo às 7. Tomo café às 7:30. Saio de casa às 8. Trabalho até 6. Janto às 8. Durmo às 11. Each verb conjugated for eu, paired with às + time.",
    examples: [
      { target: "Acordo às sete.", native: "I wake up at 7." },
      { target: "Trabalho de casa.", native: "I work from home." },
      { target: "Durmo cedo.", native: "I sleep early." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu durmo", right: "I sleep" },
      { left: "Vou pra academia", right: "Going to the gym" },
      { left: "Saio de casa", right: "I leave home" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I sleep at 11", correct: ["Durmo às onze", "Eu durmo às onze", "durmo às onze"] },
    { type: "fill_blank", instruction: "Going to the gym", sentence: "Vou pra ____.", options: ["academia", "casa", "praia"], correct: "academia", context: "Gym = academia." },
    { type: "multiple_choice", instruction: "Best Brazilian way to say I leave home at 8?", question: "Choose", options: [
      { text: "Saio de casa às oito.", correct: true },
      { text: "Sou casa oito.", correct: false },
      { text: "Estou casa oito.", correct: false },
    ], explanation: "Leave + place = sair de + place." },
    { type: "build_sentence", instruction: "Build I work from 9 to 6", words: ["nove", "Trabalho", "seis.", "às", "das"], correct: ["Trabalho", "das", "nove", "às", "seis."], translation: "I work from 9 to 6." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I go to the gym after work", correct: ["Vou pra academia depois do trabalho", "Vou para a academia depois do trabalho", "vou pra academia depois do trabalho"] },
  ],

  rwenDialogue: {
    intro: "New Brazilian friend asks about your routine.",
    lines: [
      { speaker: "npc", target: "Como é o seu dia?", native: "How is your day?" },
      { speaker: "user", userChoices: [
        { target: "Acordo às sete, trabalho de casa, e durmo às onze.", native: "I wake at 7, work from home, sleep at 11.", correct: true, feedback: "Three verbs, three times. Routine narration: built." },
        { target: "Sou rotina", native: "(wrong)", correct: false, feedback: "Use present-tense verbs + às." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell about your day with verbs + times." },
      ]},
      { speaker: "npc", target: "Vida tranquila!", native: "Peaceful life!" },
      { speaker: "rwen", rwenLine: "A whole Brazilian day in three sentences. Verb conjugation + à + time. Built.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I sleep early (Portuguese)", correct: ["Durmo cedo", "Eu durmo cedo", "durmo cedo"] },
      { prompt: "I leave home at 8 (Portuguese)", correct: ["Saio de casa às oito", "Eu saio de casa às oito", "saio de casa às oito"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build your full Brazilian routine — six verbs, six times. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Job interview in São Paulo. Tell the interviewer about your typical workday — six verb-time pairs.",
    rwenRole: "Interviewer — paulistana, ~40, professional.",
    successCriteria: "User chains 6+ verbs with às + time, varies daily verbs (acordo, trabalho, almoço, saio, vou, durmo), uses present tense throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
