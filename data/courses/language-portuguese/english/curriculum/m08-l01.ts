import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l01-acordar",
  module: 8,
  lesson: 1,
  title: "Acordar — To wake up",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 8: daily verbs. The shape of a Brazilian day. Today: acordar (wake up). Eu acordo às sete. The first verb of every day.",
    culturalNote: "Brazilians often shorten estou to tô in casual speech: tô acordada, tô cansado. The full form remains for written and formal contexts. You will hear tô everywhere — pick it up.",
  },

  chunks: [
    { id: "acordar", target: "Acordar", native: "To wake up", literal: "Wake up (-ar)", emoji: "⏰", phonetic: "ah-kor-DAR", audioRef: null },
    { id: "eu_acordo", target: "Eu acordo", native: "I wake up", literal: "I wake-up", emoji: "👁️", phonetic: "EH-oo ah-KOR-doo", audioRef: null },
    { id: "que_horas_acorda", target: "Que horas você acorda?", native: "What time do you wake up?", literal: "What hours you wake?", emoji: "🕐", phonetic: "kee OH-rahs voh-SAY ah-KOR-dah", audioRef: null },
  ],

  pattern: {
    name: "Daily routine verbs use simple present",
    explanation: "Eu acordo, você acorda, ele acorda, nós acordamos. For habits, just present tense. Add às + time: às sete (at seven), às oito e meia.",
    examples: [
      { target: "Eu acordo às sete.", native: "I wake up at 7." },
      { target: "Ela acorda cedo.", native: "She wakes up early." },
      { target: "Acordamos juntos.", native: "We wake up together." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Acordar", right: "To wake up" },
      { left: "Eu acordo", right: "I wake up" },
      { left: "Cedo", right: "Early" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I wake up at 7", correct: ["Eu acordo às sete", "Acordo às sete", "acordo às sete"] },
    { type: "fill_blank", instruction: "At seven (time)", sentence: "Acordo ____ sete.", options: ["às", "no", "em"], correct: "às", context: "At time = às." },
    { type: "multiple_choice", instruction: "Friend asks Que horas você acorda? Best reply?", question: "Choose", options: [
      { text: "Acordo às oito.", correct: true },
      { text: "Sou às oito.", correct: false },
      { text: "Tenho às oito.", correct: false },
    ], explanation: "Daily action = simple present + time." },
    { type: "build_sentence", instruction: "Build I wake up early on Monday", words: ["na", "Acordo", "segunda.", "cedo"], correct: ["Acordo", "cedo", "na", "segunda."], translation: "I wake up early on Monday." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What time do you wake up?", correct: ["Que horas você acorda?", "que horas você acorda?", "Que horas voce acorda?"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks about your morning.",
    lines: [
      { speaker: "npc", target: "Que horas você acorda?", native: "What time do you wake up?" },
      { speaker: "user", userChoices: [
        { target: "Acordo às sete. E você?", native: "I wake up at 7. And you?", correct: true, feedback: "Simple present + time + bounce. Brazilian routine flow." },
        { target: "Sou sete", native: "(wrong)", correct: false, feedback: "Use acordo às sete." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with acordo às + time." },
      ]},
      { speaker: "npc", target: "Eu acordo às seis e meia.", native: "I wake up at 6:30." },
      { speaker: "rwen", rwenLine: "Acordar — the first daily verb. Eu acordo às X. Built.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I wake up at 7 (Portuguese)", correct: ["Acordo às sete", "Eu acordo às sete", "acordo às sete"] },
      { prompt: "What time do you wake up? (Portuguese)", correct: ["Que horas você acorda?", "que horas você acorda?", "Que horas voce acorda?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three times: Acordo às [your time]. Lock in the daily-routine pattern.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend's morning — they ask about your routine. Talk about wake-up time, breakfast time, leaving time.",
    rwenRole: "Friend, ~30, casual.",
    successCriteria: "User uses present-tense verbs with às + time, varies acordo / como / saio, and answers Brazilian-style.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
