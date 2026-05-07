import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l04-marido-esposa",
  module: 5,
  lesson: 4,
  title: "Marido, Esposa, Namorado — Partners",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians introduce partners constantly. Meu marido (husband), minha esposa (wife), meu namorado / minha namorada (boyfriend/girlfriend). Often: meu companheiro (life partner).",
    culturalNote: "Brazilian relationships are usually public early — Brazilians introduce a namorado/a to family within months. Companheiro/a is increasingly common for serious unmarried couples and is gender-neutral-friendly.",
  },

  chunks: [
    { id: "marido_esposa", target: "Marido / Esposa", native: "Husband / Wife", literal: "Husband / Wife", emoji: "💍", phonetic: "mah-REE-doo / es-POH-sah", audioRef: null },
    { id: "namorado", target: "Namorado / Namorada", native: "Boyfriend / Girlfriend", literal: "Bf / Gf", emoji: "💕", phonetic: "nah-mo-RAH-doo", audioRef: null },
    { id: "filhos", target: "Filho / Filha", native: "Son / Daughter", literal: "Son / Daughter", emoji: "👶", phonetic: "FEE-lyoo / FEE-lyah", audioRef: null },
  ],

  pattern: {
    name: "Partner and child vocabulary",
    explanation: "All come in -o/-a pairs: marido/esposa (married), namorado/namorada (dating), filho/filha (child). Mixed group plural: filhos (could be all boys or boys+girls).",
    examples: [
      { target: "Meu marido é médico.", native: "My husband is a doctor." },
      { target: "Tenho dois filhos.", native: "I have two children." },
      { target: "Minha namorada é brasileira.", native: "My girlfriend is Brazilian." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Marido", right: "Husband" },
      { left: "Namorada", right: "Girlfriend" },
      { left: "Filho", right: "Son" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "My wife", correct: ["Minha esposa", "minha esposa"] },
    { type: "fill_blank", instruction: "Filha (daughter) is feminine", sentence: "____ filha tem 5 anos.", options: ["Minha", "Meu", "Meus"], correct: "Minha", context: "Filha (f.) — minha filha." },
    { type: "multiple_choice", instruction: "How to say I have two children?", question: "Choose", options: [
      { text: "Tenho dois filhos.", correct: true },
      { text: "Sou dois filhos.", correct: false },
      { text: "Estou dois filhos.", correct: false },
    ], explanation: "Possession of children = ter (tenho)." },
    { type: "build_sentence", instruction: "Build My boyfriend is Brazilian", words: ["é", "Meu", "brasileiro.", "namorado"], correct: ["Meu", "namorado", "é", "brasileiro."], translation: "My boyfriend is Brazilian." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have a daughter", correct: ["Tenho uma filha", "tenho uma filha", "Eu tenho uma filha"] },
  ],

  rwenDialogue: {
    intro: "At a churrasco, you meet your friend's mother for the first time.",
    lines: [
      { speaker: "npc", target: "E você, é casado?", native: "And you, are you married?" },
      { speaker: "user", userChoices: [
        { target: "Sim, sou casado/a. Tenho dois filhos.", native: "Yes, I am married. I have two children.", correct: true, feedback: "Sou casado/a (gendered) AND tenho filhos. Family map: filled." },
        { target: "Estou casado", native: "(wrong verb)", correct: false, feedback: "Marriage = identity = ser. Sou casado/a." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer about your relationship." },
      ]},
      { speaker: "npc", target: "Que bom! Quantos anos eles têm?", native: "How nice! How old are they?" },
      { speaker: "rwen", rwenLine: "Marido, esposa, filho, filha — the inner ring. You drew yours in Portuguese.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My husband (Portuguese)", correct: ["Meu marido", "meu marido"] },
      { prompt: "My daughter (Portuguese)", correct: ["Minha filha", "minha filha"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have a partner and/or kids, name them in Portuguese: meu marido, minha esposa, meu filho, minha filha. If not, imagine your future ones.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend's family asks about your partner and kids. Describe them with right possessives, ages, professions.",
    rwenRole: "Family matriarch, ~58, paulistana.",
    successCriteria: "User uses meu/minha + family member, sou casado/a (ser for marriage status), tenho + child count + ages, and bounces back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
