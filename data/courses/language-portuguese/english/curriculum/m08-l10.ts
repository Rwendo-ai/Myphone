import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l10-verbs-cap",
  module: 8,
  lesson: 10,
  title: "Verbs in Action — Module 8 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 capstone. Eight verbs, one Brazilian day. Acordar, trabalhar, comer, ir, fazer, querer, saber, conhecer — past, present, future. Tell your story.",
    culturalNote: "A fluent Brazilian verb-day mixes tenses naturally: yesterday I went (fui), today I am (estou), tomorrow I'll go (vou). The blend is what fluency sounds like.",
  },

  chunks: [
    { id: "review_acordo", target: "Acordo / Acordei", native: "I wake / I woke", literal: "Pres / Past", emoji: "⏰", phonetic: "ah-KOR-doo / ah-kor-DAY", audioRef: null },
    { id: "review_vou", target: "Vou + verb", native: "Going to (near future)", literal: "Vou comer / vou viajar", emoji: "🔮", phonetic: "VOH", audioRef: null },
    { id: "review_faz", target: "Faz + duration", native: "For X time", literal: "Faz dois anos", emoji: "📆", phonetic: "fahs", audioRef: null },
  ],

  pattern: {
    name: "Three tenses, eight verbs",
    explanation: "Past: fui, fiz, comi, falei. Present: vou, faço, como, falo, sei, conheço. Near future: vou + infinitive. Mix freely — that is fluent Brazilian.",
    examples: [
      { target: "Ontem fui pra praia.", native: "Yesterday I went to the beach." },
      { target: "Hoje trabalho de casa.", native: "Today I work from home." },
      { target: "Amanhã vou jantar com a família.", native: "Tomorrow I'll have dinner with family." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Past", right: "Fui / Comi / Fiz" },
      { left: "Present", right: "Vou / Como / Faço" },
      { left: "Near future", right: "Vou + verb" },
    ]},
    { type: "multiple_choice", instruction: "Yesterday I ate feijoada — best Portuguese?", question: "Choose", options: [
      { text: "Ontem comi feijoada.", correct: true },
      { text: "Ontem como feijoada.", correct: false },
      { text: "Ontem vou comer feijoada.", correct: false },
    ], explanation: "Yesterday + past tense (comi)." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Tomorrow I'll go to Rio", correct: ["Amanhã vou ao Rio", "Amanhã vou pro Rio", "amanhã vou ao Rio", "Amanhã vou para o Rio"] },
    { type: "fill_blank", instruction: "Pick the right past form of fazer", sentence: "Ontem ____ feijoada.", options: ["fiz", "faço", "vou fazer"], correct: "fiz", context: "Past first-person of fazer = fiz." },
    { type: "build_sentence", instruction: "Build I've lived in Rio for two years", words: ["dois", "no", "Faz", "anos", "Rio.", "moro", "que"], correct: ["Faz", "dois", "anos", "que", "moro", "no", "Rio."], translation: "I've lived in Rio for two years." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I know Brazil but I don't know how to drive", correct: ["Conheço o Brasil mas não sei dirigir", "Eu conheço o Brasil mas não sei dirigir", "conheço o Brasil mas não sei dirigir"] },
  ],

  rwenDialogue: {
    intro: "Job interview in São Paulo. The interviewer wants your past, present, and future across three questions.",
    lines: [
      { speaker: "npc", target: "Conta um pouco da sua trajetória.", native: "Tell me about your journey." },
      { speaker: "user", userChoices: [
        { target: "Trabalhei em Londres por cinco anos. Vim pro Brasil em janeiro. Hoje trabalho com tecnologia.", native: "I worked in London for 5 years. I came to Brazil in January. Today I work in tech.", correct: true, feedback: "Past + past + present in one breath. Three tenses, three verbs." },
        { target: "Sou rotina", native: "(wrong)", correct: false, feedback: "Use past — trabalhei, vim — and present trabalho." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Narrate your past + present." },
      ]},
      { speaker: "npc", target: "E o futuro?", native: "And the future?" },
      { speaker: "user", userChoices: [
        { target: "Vou aprender português melhor e quero crescer aqui.", native: "I'll learn Portuguese better and want to grow here.", correct: true, feedback: "Vou + verb (near future) + quero (present desire). Brazilian fluency." },
        { target: "Sou aprender", native: "(wrong)", correct: false, feedback: "Use vou + verb for near future." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Talk about your future plans." },
      ]},
      { speaker: "npc", target: "Você conhece a empresa?", native: "Do you know our company?" },
      { speaker: "user", userChoices: [
        { target: "Conheço sim — sei que vocês trabalham com fintech.", native: "Yes I do — I know you work in fintech.", correct: true, feedback: "Conhecer for company (place-like) AND saber for facts. Both verbs in one sentence." },
        { target: "Sei a empresa", native: "(wrong verb)", correct: false, feedback: "Place/entity = conhecer." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with conheço + sei." },
      ]},
      { speaker: "rwen", rwenLine: "Past, present, future. Saber and conhecer. Fazer for duration. Eight verbs, one fluent answer. Module 8: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Tomorrow I'll travel (Portuguese)", correct: ["Amanhã vou viajar", "amanhã vou viajar"] },
      { prompt: "Yesterday I ate (Portuguese)", correct: ["Ontem comi", "ontem comi"] },
    ],
  },

  mission: {
    title: "Your Module 8 Mission",
    task: "Tell your day in three tenses: yesterday (past), today (present), tomorrow (near future). Three sentences, three tenses.",
    rwenSignoff: "Os verbos brasileiros agora se conjugam na sua boca. Module 9 — directions and travel. Tchau!",
  },

  phase8: {
    scenario: "Brazilian job interview asking about past experience, current work, future goals, and what you know about the company.",
    rwenRole: "HR — paulistana, ~40, professional.",
    successCriteria: "User mixes pretérito (trabalhei, vim, fiz), present (trabalho, faço), and vou + verb for future. Uses saber for facts about role and conhecer for the company.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
