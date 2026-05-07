import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l02-bom-dia",
  module: 1,
  lesson: 2,
  title: "Bom dia — Good Morning",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Brazil, the time of day shapes the greeting. Bom dia until noon, boa tarde after lunch, boa noite from sunset on. Get the time right and you sound local.",
    culturalNote: "Brazilians swap greetings constantly — at the elevator, the porteiro (doorman), the corner kiosk. Skipping bom dia in the morning is the rude move.",
  },

  chunks: [
    { id: "bom_dia", target: "Bom dia", native: "Good morning", literal: "Good day", emoji: "🌅", phonetic: "bohng JEE-ah", audioRef: null },
    { id: "boa_tarde", target: "Boa tarde", native: "Good afternoon", literal: "Good afternoon", emoji: "☀️", phonetic: "BOH-ah TAR-jee", audioRef: null },
    { id: "boa_noite", target: "Boa noite", native: "Good evening / Good night", literal: "Good night", emoji: "🌙", phonetic: "BOH-ah NOY-chee", audioRef: null },
  ],

  pattern: {
    name: "Bom (m.) vs Boa (f.) — gender agreement begins",
    explanation: "Portuguese nouns have gender. Dia is masculine (bom dia). Tarde and noite are feminine (boa tarde, boa noite). The adjective swaps to match. Every Portuguese noun has a gender.",
    examples: [
      { target: "Bom dia (m.)", native: "Good morning" },
      { target: "Boa tarde (f.)", native: "Good afternoon" },
      { target: "Boa noite (f.)", native: "Good evening" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the greeting to the time of day", pairs: [
      { left: "Bom dia", right: "Morning (until noon)" },
      { left: "Boa tarde", right: "Afternoon (noon to sunset)" },
      { left: "Boa noite", right: "Evening / Night" },
    ]},
    { type: "fill_blank", instruction: "It is 3pm in São Paulo — pick the right greeting", sentence: "____ tarde!", options: ["Boa", "Bom", "Bem"], correct: "Boa", context: "Tarde is feminine — boa, not bom." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Good morning", correct: ["Bom dia", "bom dia"] },
    { type: "multiple_choice", instruction: "It is 8pm. You enter a restaurant. The waiter greets you. You say:", question: "Pick the right greeting", options: [
      { text: "Boa noite", correct: true },
      { text: "Bom dia", correct: false },
      { text: "Boa tarde", correct: false },
    ], explanation: "After sunset, always boa noite — for both arriving AND leaving." },
    { type: "build_sentence", instruction: "Build a polite morning greeting", words: ["bem?", "Bom", "tudo", "dia,"], correct: ["Bom", "dia,", "tudo", "bem?"], translation: "Good morning, all good?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Good afternoon", correct: ["Boa tarde", "boa tarde"] },
  ],

  rwenDialogue: {
    intro: "You enter your apartment building in São Paulo at 7am. The porteiro (doorman) is at his desk.",
    lines: [
      { speaker: "npc", target: "Bom dia!", native: "Good morning!" },
      { speaker: "user", userChoices: [
        { target: "Bom dia! Tudo bem?", native: "Good morning! All good?", correct: true, feedback: "Bonito — gendered correctly and warm." },
        { target: "Boa tarde", native: "Good afternoon", correct: false, feedback: "It is 7am — bom dia until noon." },
        { target: "Boa dia", native: "(wrong gender)", correct: false, feedback: "Dia is masculine — bom dia, not boa dia." },
      ]},
      { speaker: "npc", target: "Tudo ótimo, e o senhor?", native: "All great, and you, sir?" },
      { speaker: "rwen", rwenLine: "You just nailed Brazilian gender on day two. Bom dia (m.). Boa tarde (f.). Same warmth.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Good morning (in Portuguese)", correct: ["Bom dia", "bom dia"] },
      { prompt: "Good evening / Good night (in Portuguese)", correct: ["Boa noite", "boa noite"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Track the time of day three times today and say the right greeting silently to yourself: bom dia, boa tarde, boa noite. Build the time-instinct.",
    rwenSignoff: "Até logo — see you soon.",
  },

  phase8: {
    scenario: "You arrive at a Brazilian friend's apartment building at 7:30am to pick them up. You pass the porteiro at the entrance, then ride up in the elevator with a neighbor. Two greetings, both at the right time of day.",
    rwenRole: "Seu Antônio — the porteiro, ~60, polite. Then Dona Cláudia in the elevator, ~50, who notices everything.",
    successCriteria: "User uses Bom dia (NOT boa tarde, NOT boa noite) for both encounters because it is morning, gets the masculine bom (not boa) right with dia, and adds Tudo bem? to soften the second exchange.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
