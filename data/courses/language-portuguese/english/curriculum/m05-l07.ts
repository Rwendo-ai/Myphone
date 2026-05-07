import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l07-amigos",
  module: 5,
  lesson: 7,
  title: "Amigos — Friends",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Brazil, close friends become family. Meu amigo / minha amiga. Often: meu melhor amigo (my best friend), minha turma (my crew).",
    culturalNote: "Brazilians invite friends to family things automatically — a friend at a churrasco is just family. Saying é como meu irmão (he is like my brother) is high praise.",
  },

  chunks: [
    { id: "amigo_amiga", target: "Amigo / Amiga", native: "Friend (m./f.)", literal: "Friend", emoji: "👥", phonetic: "ah-MEE-goo / ah-MEE-gah", audioRef: null },
    { id: "melhor_amigo", target: "Melhor amigo/a", native: "Best friend", literal: "Best friend", emoji: "💛", phonetic: "meh-LYOR ah-MEE-goo", audioRef: null },
    { id: "galera", target: "Galera / Turma", native: "Crew / group of friends", literal: "Crew", emoji: "👯", phonetic: "gah-LEH-rah / TOOR-mah", audioRef: null },
  ],

  pattern: {
    name: "Friend gradations",
    explanation: "Amigo/a (friend), conhecido/a (acquaintance), melhor amigo/a (best friend), galera (crew, casual), turma (group, slightly more formal). Brazilians escalate fast — colega becomes amigo within weeks.",
    examples: [
      { target: "Meu melhor amigo é Pedro.", native: "My best friend is Pedro." },
      { target: "Vou sair com a galera.", native: "I'm going out with the crew." },
      { target: "Sou amigo dele há 10 anos.", native: "I've been his friend for 10 years." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Amigo", right: "Friend (m.)" },
      { left: "Melhor amiga", right: "Best friend (f.)" },
      { left: "Galera", right: "Crew" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "My best friend (woman speaking)", correct: ["Minha melhor amiga", "minha melhor amiga"] },
    { type: "fill_blank", instruction: "Pick the right gendered form", sentence: "Esta é minha ____ Maria.", options: ["amiga", "amigo", "amigos"], correct: "amiga", context: "Maria is feminine — amiga." },
    { type: "multiple_choice", instruction: "Casual: I'm going out with my crew", question: "Choose", options: [
      { text: "Vou sair com a galera.", correct: true },
      { text: "Sou a galera.", correct: false },
      { text: "Estou galera.", correct: false },
    ], explanation: "Going out = sair. With crew = com a galera." },
    { type: "build_sentence", instruction: "Build My friends are Brazilian", words: ["são", "Meus", "brasileiros.", "amigos"], correct: ["Meus", "amigos", "são", "brasileiros."], translation: "My friends are Brazilian." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have many friends in Brazil", correct: ["Tenho muitos amigos no Brasil", "tenho muitos amigos no Brasil"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend invites you out with their crew.",
    lines: [
      { speaker: "npc", target: "Quer vir com a gente sexta? Vai a galera toda.", native: "Want to come with us Friday? The whole crew is coming." },
      { speaker: "user", userChoices: [
        { target: "Quero sim! Adoro sua galera.", native: "Yes I do! I love your crew.", correct: true, feedback: "Quero sim + warm follow-up. Brazilian acceptance." },
        { target: "Sim", native: "Yes (terse)", correct: false, feedback: "Add warmth — Quero sim! Adoro sua galera." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Accept warmly." },
      ]},
      { speaker: "npc", target: "Show! Te mando o endereço.", native: "Cool! I'll send the address." },
      { speaker: "rwen", rwenLine: "Galera, turma, amigos — the language of Brazilian belonging. You are in the crew now.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My best friend (Portuguese, gendered to YOU)", correct: ["Meu melhor amigo", "meu melhor amigo", "Minha melhor amiga", "minha melhor amiga"] },
      { prompt: "The crew (Portuguese)", correct: ["A galera", "a galera"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, name three friends in Portuguese: meu amigo X, minha amiga Y, meu melhor amigo Z. Add gender for each.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend introduces you to their galera at a Friday bar. Meet three new people, get their names, exchange basics.",
    rwenRole: "Galera — three Brazilian friends (mixed genders), ~30s, friendly, expect warmth.",
    successCriteria: "User uses Muito prazer with each, asks names and basic info, and references the group as a galera at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
