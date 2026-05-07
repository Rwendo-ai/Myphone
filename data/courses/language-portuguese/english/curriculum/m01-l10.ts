import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l10-conversation",
  module: 1,
  lesson: 10,
  title: "The First Encounter — Module 1 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 1 capstone. No new words today. Just you, me, and a full Brazilian first encounter — greeting, name, origin, gendered thanks, soft farewell. Let us see what you can do.",
    culturalNote: "A complete Brazilian first meeting flows: time-greeting → tudo bem → name → origin → small talk → tchau até. Each beat builds warmth. Skip a step and it feels cold.",
  },

  chunks: [
    { id: "review_oi_tudo_bem", target: "Oi, tudo bem?", native: "Hi, all good?", literal: "Hi, all well?", emoji: "👋", phonetic: "OY TOO-doo BAYNG", audioRef: null },
    { id: "review_meu_nome", target: "Meu nome é... E o seu?", native: "My name is... And yours?", literal: "My name is... And the yours?", emoji: "🏷️", phonetic: "MEH-oo NOH-mee EH", audioRef: null },
    { id: "review_tchau_ate", target: "Tchau, até amanhã!", native: "Bye, see you tomorrow!", literal: "Bye, until tomorrow", emoji: "🌟", phonetic: "CHOW ah-TEH ah-mah-NYAH", audioRef: null },
  ],

  pattern: {
    name: "The Five-Beat Brazilian Encounter",
    explanation: "A full first meeting in Brazil has five beats: 1) time-greeting (bom dia/boa tarde/boa noite or oi), 2) wellness (tudo bem?), 3) names (qual é o seu nome?), 4) origin (de onde você é?), 5) farewell (tchau, até...). Each one matters.",
    examples: [
      { target: "Bom dia / Oi, tudo bem?", native: "1. Greeting + wellness" },
      { target: "Meu nome é... E o seu?", native: "2. Name exchange" },
      { target: "De onde você é?", native: "3. Origin" },
      { target: "Muito prazer / Igualmente", native: "4. Acknowledgement" },
      { target: "Tchau, até amanhã / até mais", native: "5. Farewell" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match each beat to its phrase", pairs: [
      { left: "Greeting + wellness", right: "Oi, tudo bem?" },
      { left: "Name exchange", right: "Qual é o seu nome?" },
      { left: "Farewell", right: "Tchau, até logo" },
    ]},
    { type: "multiple_choice", instruction: "Stranger greets you Oi, tudo bem? — best complete reply?", question: "Pick the most natural full reply", options: [
      { text: "Tudo bem, e você? Meu nome é...", correct: true },
      { text: "Oi", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Replies AND continues — that is the Brazilian flow." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What is your name?", correct: ["Qual é o seu nome?", "qual é o seu nome?", "Qual e o seu nome?"] },
    { type: "fill_blank", instruction: "Brazilian farewell — they will see you tomorrow", sentence: "Tchau, ____ amanhã!", options: ["até", "boa", "com"], correct: "até", context: "Until tomorrow = até amanhã." },
    { type: "build_sentence", instruction: "Build the bounce-back wellness reply", words: ["você?", "Tudo", "bem,", "e"], correct: ["Tudo", "bem,", "e", "você?"], translation: "All good, and you?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where are you from?", correct: ["De onde você é?", "de onde você é?", "De onde voce e?"] },
  ],

  rwenDialogue: {
    intro: "Full conversation. You earned this. I will be a Brazilian woman at a Saturday churrasco — you lead the whole exchange.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Oi, tudo bem?", native: "Hi, all good?", correct: true, feedback: "Strong opening — universal and warm." },
        { target: "Adeus", native: "Farewell", correct: false, feedback: "That is final-goodbye, not opening — try Oi, tudo bem?" },
        { target: "Sim", native: "Yes", correct: false, feedback: "Open with a greeting — Oi, tudo bem?" },
      ]},
      { speaker: "npc", target: "Tudo bem! Qual é o seu nome?", native: "All good! What is your name?" },
      { speaker: "user", userChoices: [
        { target: "Meu nome é Alex. E o seu?", native: "My name is Alex. And yours?", correct: true, feedback: "Name given AND bounced. Brazilian rhythm holds." },
        { target: "Sou de Londres", native: "I am from London", correct: false, feedback: "She asked your name first — give it before origin." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Not yet — give your name and bounce." },
      ]},
      { speaker: "npc", target: "Sou a Carla. Muito prazer! De onde você é?", native: "I am Carla. Very nice to meet you! Where are you from?" },
      { speaker: "user", userChoices: [
        { target: "Sou de Londres. Igualmente, Carla!", native: "I am from London. Likewise, Carla!", correct: true, feedback: "Origin AND mirrored prazer. The whole script flows." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Answer her question — Sou de [city] and add Igualmente." },
        { target: "Adeus", native: "Farewell", correct: false, feedback: "Not yet — answer the where-from question." },
      ]},
      { speaker: "npc", target: "Que legal! Bom, tenho que ir. Tchau!", native: "How nice! Right, I have to go. Bye!" },
      { speaker: "user", userChoices: [
        { target: "Tchau, Carla! Até a próxima!", native: "Bye, Carla! Until next time!", correct: true, feedback: "Closed warmly with name + future-meeting promise." },
        { target: "Adeus", native: "Farewell (final)", correct: false, feedback: "Adeus is too final — tchau, até a próxima for see-you-soon." },
        { target: "Bom dia", native: "Good morning", correct: false, feedback: "She is leaving — say tchau, até logo." },
      ]},
      { speaker: "rwen", rwenLine: "A complete Brazilian conversation. Greeting to goodbye, with warmth and name-trading. Module 1: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Hi, all good? (Portuguese)", correct: ["Oi, tudo bem?", "oi, tudo bem?", "Oi tudo bem?"] },
      { prompt: "Bye, see you tomorrow (Portuguese)", correct: ["Tchau, até amanhã", "tchau, até amanhã", "Tchau ate amanha"] },
    ],
  },

  mission: {
    title: "Your Module 1 Mission",
    task: "Run the full five-beat encounter today — greeting, wellness, name, origin, farewell. Even with yourself in the mirror. Five beats. No skips.",
    rwenSignoff: "You opened the door to Brazilian Portuguese. Module 2 awaits — survival on the streets of Brazil. Tchau, até a próxima!",
  },

  phase8: {
    scenario: "Saturday afternoon at a Brazilian churrasco in São Paulo. A woman you have never met walks over with a beer and starts a conversation. Run all five beats.",
    rwenRole: "Carla — paulistana host's friend, ~35, warm and observant. Her judgement of you will travel through the whole party.",
    successCriteria: "User runs all five beats: (1) Oi or Bom dia / Boa tarde, (2) Tudo bem? as wellness, (3) Meu nome é + bounce E o seu?, (4) Sou de [city], (5) Tchau plus até logo / até a próxima. Bonus credit for using Muito prazer and gendered obrigado/a correctly.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
