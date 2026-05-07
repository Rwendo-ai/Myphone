import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l10-self-portrait",
  module: 3,
  lesson: 10,
  title: "Your Brazilian Self-Portrait — Module 3 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 capstone. Today you paint yourself in Portuguese. Name, age, origin, profession, languages, likes, family. Ser, estar, ter, gostar — all the verbs of YOU.",
    culturalNote: "A complete Brazilian self-introduction has six layers: nome, idade, origem, profissão, línguas, gostos. Brazilians do this casually over coffee. By the end, you are not strangers.",
  },

  chunks: [
    { id: "review_sou_de", target: "Sou de... Moro em...", native: "I'm from... I live in...", literal: "I'm from / I live in", emoji: "🌍", phonetic: "soh jee", audioRef: null },
    { id: "review_tenho_anos", target: "Tenho ___ anos.", native: "I am ___ years old.", literal: "I have ___ years", emoji: "🎂", phonetic: "TEH-nyoo", audioRef: null },
    { id: "review_gosto_de", target: "Gosto de... Não gosto de...", native: "I like... I don't like...", literal: "I like (of) / not like", emoji: "❤️", phonetic: "GOHS-too jee", audioRef: null },
  ],

  pattern: {
    name: "The Six Layers of Brazilian Self",
    explanation: "Layer 1: Sou [name]. Layer 2: Sou de [origin] / Moro em [residence]. Layer 3: Tenho [age] anos. Layer 4: Sou [profession] / Trabalho com [field]. Layer 5: Falo [languages]. Layer 6: Gosto de [things].",
    examples: [
      { target: "Sou Alex. Sou de Londres.", native: "Name + origin" },
      { target: "Tenho 30 anos. Sou designer.", native: "Age + profession" },
      { target: "Falo inglês. Gosto de futebol.", native: "Language + likes" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match each layer to its line", pairs: [
      { left: "Origin", right: "Sou de Londres" },
      { left: "Age", right: "Tenho 30 anos" },
      { left: "Likes", right: "Gosto de futebol" },
    ]},
    { type: "multiple_choice", instruction: "Best Brazilian self-intro for a new friend?", question: "Choose the most natural", options: [
      { text: "Sou Alex, tenho 30 anos, sou inglês, trabalho com tecnologia. Gosto de futebol!", correct: true },
      { text: "Alex.", correct: false },
      { text: "Tchau.", correct: false },
    ], explanation: "Stack the layers: name, age, origin, profession, like." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am 30 years old", correct: ["Tenho 30 anos", "tenho 30 anos", "Eu tenho 30 anos"] },
    { type: "fill_blank", instruction: "Pick ser or estar", sentence: "Eu ____ inglês.", options: ["sou", "estou", "tenho"], correct: "sou", context: "Nationality = permanent = ser." },
    { type: "build_sentence", instruction: "Build I am from London but I live in Rio", words: ["mas", "no", "Sou", "Londres,", "moro", "Rio.", "de"], correct: ["Sou", "de", "Londres,", "mas", "moro", "no", "Rio."], translation: "I am from London but I live in Rio." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I like football (gostar de + de!)", correct: ["Gosto de futebol", "gosto de futebol", "Eu gosto de futebol"] },
  ],

  rwenDialogue: {
    intro: "A Brazilian friend's parent meets you for the first time. They want the full picture.",
    lines: [
      { speaker: "npc", target: "Conta um pouco de você!", native: "Tell me a bit about yourself!" },
      { speaker: "user", userChoices: [
        { target: "Sou Alex. Sou de Londres, mas moro no Rio. Tenho 30 anos.", native: "I'm Alex. I'm from London but I live in Rio. I'm 30.", correct: true, feedback: "Three layers in one breath. Name, origin/residence, age — perfect Brazilian opening." },
        { target: "Alex", native: "(too short)", correct: false, feedback: "Stack more layers — Sou Alex, sou de..., tenho..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell them about you — name, origin, age." },
      ]},
      { speaker: "npc", target: "E o que você faz?", native: "And what do you do?" },
      { speaker: "user", userChoices: [
        { target: "Sou designer. Trabalho com produto. E falo inglês e um pouco de português.", native: "I'm a designer. I work with product. And I speak English and a little Portuguese.", correct: true, feedback: "Profession + field + languages. The Brazilian profile is filling in." },
        { target: "Estou designer", native: "(wrong verb)", correct: false, feedback: "Profession = ser. Sou designer." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with profession — sou + role." },
      ]},
      { speaker: "npc", target: "Maravilha! E gosta de quê?", native: "Wonderful! And what do you like?" },
      { speaker: "user", userChoices: [
        { target: "Gosto de futebol e de churrasco! Aqui no Brasil, é o paraíso.", native: "I like football and churrasco! Here in Brazil, it is paradise.", correct: true, feedback: "Two gostar de phrases AND a Brazilian compliment. The whole self-portrait is painted." },
        { target: "Eu sou futebol", native: "(English-style mistake)", correct: false, feedback: "Likes use gostar de, not ser. Gosto de futebol." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Tell them what you like — Gosto de + thing." },
      ]},
      { speaker: "rwen", rwenLine: "Six layers. Ser, estar, ter, gostar. Your Brazilian self-portrait is hanging on the wall now. Module 3: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am 30 years old, I'm a designer (Portuguese)", correct: ["Tenho 30 anos, sou designer", "tenho 30 anos, sou designer"] },
      { prompt: "I'm from London but I live in Rio (Portuguese)", correct: ["Sou de Londres, mas moro no Rio", "sou de Londres mas moro no Rio"] },
    ],
  },

  mission: {
    title: "Your Module 3 Mission",
    task: "Build your full Brazilian self-portrait — six layers, four verbs (ser, estar, ter, gostar). Out loud, in Portuguese. Today.",
    rwenSignoff: "Você se apresenta como brasileiro agora. Module 4 — the bones of grammar. Tchau!",
  },

  phase8: {
    scenario: "First time meeting your Brazilian partner's parents over Sunday churrasco. They want the whole picture — six layers.",
    rwenRole: "Seu Carlos and Dona Lúcia — partner's parents, ~60, paulistanos, kind but observant.",
    successCriteria: "User produces all six layers using ser (identity), estar (state), ter (age), gostar de (likes). Gendered adjectives (inglês/inglesa, designer agnostic) match speaker. Bounces conversation back at least once.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
