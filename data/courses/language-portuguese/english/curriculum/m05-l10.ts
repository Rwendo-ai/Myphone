import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l10-sunday-cap",
  module: 5,
  lesson: 10,
  title: "Sunday Churrasco — Module 5 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 capstone. Today: a full Brazilian Sunday churrasco. You arrive, meet the family, navigate carne and conversation, leave warmly. Family Portuguese in one afternoon.",
    culturalNote: "The Brazilian Sunday is sacred. From noon to evening: arrival, churrasco, beer, music, the kids running, the elders sitting, the conversation flowing. Refusing food, leaving early, or being too quiet — all noticed.",
  },

  chunks: [
    { id: "review_familia", target: "Família", native: "Family (extended, warm)", literal: "Family", emoji: "👨‍👩‍👧‍👦", phonetic: "fah-MEE-lee-ah", audioRef: null },
    { id: "review_churrasco", target: "Churrasco", native: "Sunday barbecue ritual", literal: "Brazilian BBQ", emoji: "🥩", phonetic: "shoo-HAS-koo", audioRef: null },
    { id: "review_padrinhos", target: "Padrinhos", native: "Godparents (chosen family)", literal: "Padrinhos", emoji: "💛", phonetic: "pah-DREE-nyoos", audioRef: null },
  ],

  pattern: {
    name: "Sunday churrasco vocabulary kit",
    explanation: "Greetings (Oi, tudo bem? Muito prazer), family words (mãe, pai, tios, primos, padrinhos), churrasco language (carne, cerveja, mais, obrigado/a), comparisons (mais velho), celebrations (parabéns).",
    examples: [
      { target: "Esta é minha mãe.", native: "This is my mother. (intro)" },
      { target: "Quero mais carne, por favor.", native: "I want more meat, please." },
      { target: "Tchau, foi um prazer!", native: "Bye, it was a pleasure!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match each beat to its phrase", pairs: [
      { left: "Meeting family", right: "Muito prazer" },
      { left: "At the grill", right: "Mais carne, por favor" },
      { left: "Leaving warmly", right: "Foi ótimo, tchau!" },
    ]},
    { type: "multiple_choice", instruction: "Brazilian friend's father offers more meat. You ARE full. Best polite reply?", question: "Choose", options: [
      { text: "Estou cheio/a, mas tava ótimo, obrigado/a!", correct: true },
      { text: "Não", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Soften the no with a compliment to the chef." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "This is my older brother", correct: ["Este é meu irmão mais velho", "Esse é meu irmão mais velho", "este é meu irmão mais velho"] },
    { type: "fill_blank", instruction: "Brazilian guest greeting", sentence: "Muito ____, eu sou o/a Alex.", options: ["prazer", "obrigado", "tchau"], correct: "prazer", context: "First meeting = muito prazer." },
    { type: "build_sentence", instruction: "Build I have two brothers and a sister", words: ["e", "Tenho", "irmã.", "uma", "dois", "irmãos"], correct: ["Tenho", "dois", "irmãos", "e", "uma", "irmã."], translation: "I have two brothers and a sister." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My godmother lives in Salvador", correct: ["Minha madrinha mora em Salvador", "Minha madrinha mora no Salvador", "minha madrinha mora em Salvador"] },
  ],

  rwenDialogue: {
    intro: "Sunday, 1pm, your friend's family churrasco. Lead the whole afternoon — arrival to farewell.",
    lines: [
      { speaker: "npc", target: "Bem-vindo! Pode entrar.", native: "Welcome! Come in." },
      { speaker: "user", userChoices: [
        { target: "Oi! Muito obrigado/a por me receber. Que casa bonita!", native: "Hi! Thanks for having me. What a nice house!", correct: true, feedback: "Greeting + thanks + compliment. Brazilian-guest perfect score." },
        { target: "Oi", native: "Hi (terse)", correct: false, feedback: "Add gratitude and a compliment — Muito obrigado/a, que casa bonita!" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "You just arrived — say oi and compliment the home." },
      ]},
      { speaker: "npc", target: "Esta é minha mãe e meu pai.", native: "This is my mother and my father." },
      { speaker: "user", userChoices: [
        { target: "Muito prazer! Obrigado/a pelo convite.", native: "Very nice to meet you! Thanks for the invitation.", correct: true, feedback: "Prazer + thanks for invitation — Brazilian respect for elders." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Greet them with muito prazer." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Greet warmly, you just arrived." },
      ]},
      { speaker: "npc", target: "Tá com fome? Tem picanha pronta!", native: "Hungry? Picanha is ready!" },
      { speaker: "user", userChoices: [
        { target: "Estou com fome, sim! E uma cerveja, se tiver.", native: "I'm hungry, yes! And a beer, if you have.", correct: true, feedback: "Accept carne, ask cerveja with se tiver — humble Brazilian guest." },
        { target: "Não obrigado", native: "(refusing too soon)", correct: false, feedback: "Refusing meat early at churrasco is suspicious. Accept warmly." },
        { target: "Sim", native: "Yes (terse)", correct: false, feedback: "Add warmth and ask for the cerveja too." },
      ]},
      { speaker: "npc", target: "Bom, tá tarde, tenho que ir.", native: "Right, it's late, I have to go." },
      { speaker: "user", userChoices: [
        { target: "Foi ótimo! Obrigado/a por tudo. Tchau, até a próxima!", native: "It was great! Thanks for everything. Bye, see you next time!", correct: true, feedback: "Compliment, thanks, future-meeting promise. Pure Brazilian goodbye." },
        { target: "Tchau", native: "Bye (terse)", correct: false, feedback: "Add the warmth — Foi ótimo, obrigado/a, até a próxima." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Brazilian goodbyes are warm and slow." },
      ]},
      { speaker: "rwen", rwenLine: "Sunday churrasco: complete. You arrived, met family, ate carne, drank cerveja, said the right things. Module 5: complete. Brazilian Sunday is now in your bones.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "This is my mother (Portuguese)", correct: ["Esta é minha mãe", "Essa é minha mãe", "Está é minha mae"] },
      { prompt: "Thanks for everything (Portuguese)", correct: ["Obrigado por tudo", "Obrigada por tudo", "obrigado por tudo"] },
    ],
  },

  mission: {
    title: "Your Module 5 Mission",
    task: "Run a full Brazilian Sunday — arrive, meet five relatives, eat, drink, leave. Out loud, in Portuguese, today.",
    rwenSignoff: "A família brasileira agora é tua. Module 6 — numbers, time, money. Tchau, até a próxima!",
  },

  phase8: {
    scenario: "Sunday afternoon at your Brazilian partner's parents' home. First time meeting the extended family. Run the whole arc — arrival, introductions, churrasco, conversation, farewell.",
    rwenRole: "Extended Brazilian family — parents, padrinhos, two cousins. Watching you carefully.",
    successCriteria: "User arrives with greeting + compliment, uses Muito prazer and family vocab (mãe, pai, tio, primo, madrinha), accepts carne first time, asks at least one comparative question, and leaves with Foi ótimo + até a próxima.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
