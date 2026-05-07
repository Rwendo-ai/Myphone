import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Telling family stories — Histórias da família',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Histórias de família precisam de tempo passado — 'há muito tempo', 'minha avó costumava...', 'ele sempre dizia...'. Em inglês: 'A long time ago...', 'My grandmother used to...', 'He always says...'.",
    culturalNote: "No Brasil a gente diz 'minha avó costumava fazer pão' — verbo 'costumava' carrega o passado de hábito. Em inglês a estrutura é 'used to + verbo': 'My grandmother used to bake bread'. E 'used to' não muda com pessoa — não é 'he used to bakes', é 'he used to bake'.",
  },

  chunks: [
    {
      id: 'long_time_ago',
      target: 'A long time ago',
      native: 'Há muito tempo',
      literal: 'long-long',
      emoji: '🕰️',
      phonetic: 'uh-LAWNG-tahym-uh-GOH',
      audioRef: null,
    },
    {
      id: 'used_to',
      target: 'My grandmother used to...',
      native: 'Minha avó costumava...',
      literal: 'past habitual marker',
      emoji: '👵🏾',
      phonetic: 'mahy GRAND-muh-thuh YOOST-too',
      audioRef: null,
    },
    {
      id: 'always_says',
      target: 'He always says...',
      native: 'Ele sempre diz...',
      literal: 'he-stays saying',
      emoji: '💬',
      phonetic: 'hee AWL-wayz sez',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past habits — used to / always says',
    explanation: "'Used to + verbo' = costumava (mas não faz mais). 'Always says' = sempre diz (presente). 'Used to say' = sempre dizia (mas não diz mais). Atenção: 'used to' não muda com pessoa.",
    examples: [
      { target: 'A long time ago, my grandmother lived in the village.', native: 'Há muito tempo, minha avó morava no interior.' },
      { target: 'My grandfather used to tell us stories.',                native: 'Meu avô costumava contar histórias pra gente.' },
      { target: 'My uncle always says: \'Patience is power.\'',           native: 'Meu tio sempre diz: "Paciência é poder."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões',
      pairs: [
        { left: 'A long time ago',         right: 'Há muito tempo' },
        { left: 'My grandmother used to',  right: 'Minha avó costumava' },
        { left: 'He always says',          right: 'Ele sempre diz' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu avô costumava contar histórias na fogueira à noite.',
      correct: ['My grandfather used to tell us stories by the fire at night.', 'My grandfather used to tell us stories by the fire in the evening.', 'My grandfather used to tell us stories at night by the fire.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu pai sempre diz: "Trabalho não é resposta de bobo."',
      correct: ["My father always says: 'Work is not a fool's answer.'", 'My father always says: "Work is not a fool\'s answer."', "My father always says, 'Work is not a fool's answer.'"],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "A long time ago, we lived in Recife"',
      words: ['Recife.', 'A', 'lived', 'long', 'time', 'in', 'we', 'ago,'],
      correct: ['A', 'long', 'time', 'ago,', 'we', 'lived', 'in', 'Recife.'],
      translation: 'Há muito tempo, morávamos em Recife',
    },
    {
      type: 'fill_blank',
      instruction: "Complete — 'used to' ou 'always'",
      sentence: 'My grandmother _____ sing every Sunday at church — until she got too old.',
      options: ['used to', 'always', 'never'],
      correct: 'used to',
      context: "'Used to' marca hábito passado que parou.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Memória do avô que faleceu',
      question: 'Qual frase é mais natural?',
      options: [
        { text: "My grandfather used to take me fishing every Saturday.", correct: true },
        { text: "My grandfather always takes me fishing.",                  correct: false },
        { text: "My grandfather take me fishing past time.",                 correct: false },
      ],
      explanation: "'Used to' é o certo — hábito passado que parou. 'Always takes' é presente.",
    },
  ],

  rwenDialogue: {
    intro: "Você tá numa noite de contação de histórias em inglês em SP. É sua vez.",
    lines: [
      { speaker: 'npc', target: "Tell us a family story — anything that's stayed with you.", native: 'Conta uma história de família — algo que ficou com você.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A long time ago, my grandmother used to bake bread every Saturday. She always said: 'A full belly makes a quiet child.' I still hear her voice.", native: 'Há muito tempo, minha avó costumava fazer pão todo sábado. Ela sempre dizia: "Barriga cheia faz criança quieta." Ainda escuto a voz dela.', correct: true, feedback: "Mandou muito bem — abertura, hábito passado, fala marcante, e ainda ressoa hoje. História redonda." },
          { target: "Long ago grandmother bake bread always say full belly quiet child.",                                                                              native: '...',                                                                              correct: false, feedback: "Falta estrutura — adicione 'used to', 'always said'." },
          { target: "Vó fazia pão.",                                                                                                       native: 'Vó fazia pão.',                                                                                                                                    correct: false, feedback: "Em português — sua audiência é em inglês." },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — thank you for sharing.", native: 'Que lindo — obrigada por compartilhar.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'Used to' carrega o passado, 'always said' a voz que ressoa. História com alma em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My grandmother used to (em inglês)',  correct: ['My grandmother used to', 'my grandmother used to'] },
      { prompt: 'A long time ago (em inglês)',          correct: ['A long time ago', 'a long time ago', 'A long time ago,', 'a long time ago,'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa numa história de família. Escreve em inglês: 'A long time ago, my [pessoa] used to ___. He/She always said: \"___\".'",
    rwenSignoff: "Amanhã — capstone do Módulo 5.",
  },

  phase8: {
    scenario: "English-language storytelling night. Share a real family story with detail.",
    rwenRole: "Maria, the host. Asks gentle follow-ups: 'How old were you?', 'Do you still cook that recipe?'.",
    successCriteria: "User uses 'A long time ago' or 'When I was young'. Uses 'used to + verb'. Quotes a family member with 'always said' or 'used to say'. Tells a 3+ sentence mini-story.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
