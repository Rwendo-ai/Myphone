import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l05-dias-semana",
  module: 6,
  lesson: 5,
  title: "Dias da semana — Days of the week",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian week starts Sunday — domingo. Then segunda-feira (literally second-day) through sexta-feira. Sábado (Saturday). Domingo (Sunday).",
    culturalNote: "Brazilians often shorten the day names: segunda (Mon), terça (Tue), quarta (Wed), quinta (Thu), sexta (Fri). The -feira drops in casual speech.",
  },

  chunks: [
    { id: "segunda", target: "Segunda-feira", native: "Monday", literal: "Second-day", emoji: "📅", phonetic: "seh-GOON-dah FAY-rah", audioRef: null },
    { id: "sexta", target: "Sexta-feira", native: "Friday", literal: "Sixth-day", emoji: "🎉", phonetic: "SES-tah FAY-rah", audioRef: null },
    { id: "sabado_domingo", target: "Sábado / Domingo", native: "Saturday / Sunday", literal: "Saturday / Sunday", emoji: "🏖️", phonetic: "SAH-bah-doo / doh-MEEN-goo", audioRef: null },
  ],

  pattern: {
    name: "Numbered weekdays",
    explanation: "Mon-Fri are numbered: 2nd, 3rd, 4th, 5th, 6th + feira. Sábado and Domingo are special — named, not numbered. Used: Vou na segunda (I'm going on Monday).",
    examples: [
      { target: "Segunda, terça, quarta", native: "Mon, Tue, Wed" },
      { target: "Vou no sábado.", native: "I'm going on Saturday." },
      { target: "Domingo é dia de churrasco.", native: "Sunday is churrasco day." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Segunda-feira", right: "Monday" },
      { left: "Sexta", right: "Friday" },
      { left: "Domingo", right: "Sunday" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Saturday", correct: ["Sábado", "sábado", "Sabado", "sabado"] },
    { type: "fill_blank", instruction: "Going on Monday", sentence: "Vou ____ segunda.", options: ["na", "em", "para"], correct: "na", context: "On Monday = na segunda." },
    { type: "multiple_choice", instruction: "Brazilian Sunday tradition?", question: "Choose", options: [
      { text: "Churrasco em família", correct: true },
      { text: "Trabalhar até tarde", correct: false },
      { text: "Reunião de banco", correct: false },
    ], explanation: "Domingo = churrasco em família — sacred." },
    { type: "build_sentence", instruction: "Build I work Monday to Friday", words: ["sexta.", "Trabalho", "à", "de", "segunda"], correct: ["Trabalho", "de", "segunda", "à", "sexta."], translation: "I work Monday through Friday." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Friday", correct: ["Sexta-feira", "sexta-feira", "Sexta", "sexta"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend wants to make plans.",
    lines: [
      { speaker: "npc", target: "Quando você tá livre?", native: "When are you free?" },
      { speaker: "user", userChoices: [
        { target: "Tô livre na sexta e no sábado.", native: "I'm free on Friday and Saturday.", correct: true, feedback: "Na sexta + no sábado — contractions and right gender." },
        { target: "Em sexta", native: "(uncontracted)", correct: false, feedback: "Em + a = na. Na sexta." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with day + na/no." },
      ]},
      { speaker: "npc", target: "Show, marca aí!", native: "Cool, set it up!" },
      { speaker: "rwen", rwenLine: "Brazilian week, ordered. Segunda to domingo, with the article-contraction in your replies.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Friday (Portuguese)", correct: ["Sexta-feira", "sexta-feira", "Sexta", "sexta"] },
      { prompt: "Sunday (Portuguese)", correct: ["Domingo", "domingo"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Recite the seven days in Portuguese starting from segunda. Then say what you do on three of them.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Setting up multiple meetings with a Brazilian colleague across the week. Use day names with right contractions.",
    rwenRole: "Brazilian colleague, ~35, paulistana, scheduling.",
    successCriteria: "User uses na segunda, na terça, no sábado, no domingo (correct contractions), and abbreviates -feira casually.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
