import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l05-passado-narrativa",
  module: 10,
  lesson: 5,
  title: "Ontem fui — Telling stories in past tense",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Storytelling needs past tense. Ontem fui na praia. Comi muito. Bebi cerveja. Voltei tarde. Past chains build a Brazilian story.",
    culturalNote: "Brazilians narrate in past tense with vivid detail. Aí (then), depois (after), de repente (suddenly) — connector words that move stories along like a samba.",
  },

  chunks: [
    { id: "ai", target: "Aí", native: "Then / and so", literal: "There", emoji: "➡️", phonetic: "ah-EE", audioRef: null },
    { id: "depois", target: "Depois", native: "After / afterwards", literal: "After", emoji: "⏭️", phonetic: "deh-POYS", audioRef: null },
    { id: "de_repente", target: "De repente", native: "Suddenly", literal: "Suddenly", emoji: "⚡", phonetic: "jee heh-PEN-chee", audioRef: null },
  ],

  pattern: {
    name: "Story connectors",
    explanation: "Aí, depois, de repente, então (so) — connectors that chain past-tense events. Brazilians narrate fast, jumping between connectors. Aí carries half the language.",
    examples: [
      { target: "Fui na praia. Aí choveu.", native: "I went to the beach. Then it rained." },
      { target: "Depois fomos comer.", native: "After we went to eat." },
      { target: "De repente o trem parou.", native: "Suddenly the train stopped." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Aí", right: "Then / and so" },
      { left: "Depois", right: "Afterwards" },
      { left: "De repente", right: "Suddenly" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Then we went to eat", correct: ["Aí fomos comer", "aí fomos comer", "Depois fomos comer"] },
    { type: "fill_blank", instruction: "Connecting story", sentence: "Fui na praia. ____ choveu.", options: ["Aí", "Sim", "Não"], correct: "Aí", context: "Then = aí." },
    { type: "multiple_choice", instruction: "Brazilian storytelling connector for suddenly?", question: "Choose", options: [
      { text: "De repente", correct: true },
      { text: "Talvez", correct: false },
      { text: "Sempre", correct: false },
    ], explanation: "De repente = suddenly." },
    { type: "build_sentence", instruction: "Build Then I went home", words: ["pra", "Aí", "casa.", "fui"], correct: ["Aí", "fui", "pra", "casa."], translation: "Then I went home." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Suddenly the rain stopped", correct: ["De repente a chuva parou", "de repente a chuva parou"] },
  ],

  rwenDialogue: {
    intro: "Friend asks about your weekend trip to the beach.",
    lines: [
      { speaker: "npc", target: "Como foi a praia?", native: "How was the beach?" },
      { speaker: "user", userChoices: [
        { target: "Foi ótimo. Cheguei cedo, comi açaí, aí choveu, depois saiu o sol de novo!", native: "Was great. Arrived early, ate açaí, then it rained, after the sun came out again!", correct: true, feedback: "Past chain with aí and depois — Brazilian narration." },
        { target: "Sou praia", native: "(wrong)", correct: false, feedback: "Past tense — Foi ótimo, cheguei, comi..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell the story in past." },
      ]},
      { speaker: "npc", target: "Que dia maluco!", native: "What a crazy day!" },
      { speaker: "rwen", rwenLine: "Aí, depois, de repente — connectors that move a Brazilian story.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Then / and so (Portuguese)", correct: ["Aí", "aí"] },
      { prompt: "Suddenly (Portuguese)", correct: ["De repente", "de repente"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yesterday's story out loud in three past sentences chained with aí + depois. Build the narrating reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend at coffee asks about your weekend in 60 seconds. Tell a story with chained past-tense events.",
    rwenRole: "Curious friend, ~30, listens for narrative flow.",
    successCriteria: "User uses pretérito perfeito (fui, comi, fiz), chains with aí / depois / então, includes a de repente turn.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
