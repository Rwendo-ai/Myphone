import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Friends as family — Amigos como família',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Amigos próximos viram família. Em inglês: 'best friend', 'close friends', 'like family'. Aquele 'mais que amigo, é meu irmão' — em inglês: 'He's like a brother to me'.",
    culturalNote: "No Brasil 'meu irmão de outra mãe' é frase comum entre amigos colados. Em inglês 'like a brother to me' tem o mesmo peso afetivo. E 'they're like family' resume tudo. O calor brasileiro tem lugar nessa estrutura — cabe perfeitamente.",
  },

  chunks: [
    {
      id: 'best_friend',
      target: 'Best friend',
      native: 'Melhor amigo / amiga',
      literal: 'friend of-the-heart',
      emoji: '🤝',
      phonetic: 'BEST-frend',
      audioRef: null,
    },
    {
      id: 'close_friends',
      target: 'Close friends',
      native: 'Amigos próximos',
      literal: 'friends of-near',
      emoji: '👯',
      phonetic: 'KLOHS-frends',
      audioRef: null,
    },
    {
      id: 'like_family',
      target: 'Like family',
      native: 'Como família',
      literal: 'like family',
      emoji: '💞',
      phonetic: 'LAYK FAM-uh-lee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Idiomatic family — "like family"',
    explanation: "'Like' em inglês marca comparação: 'A is like B' = A é como B. Pra dizer que amigo é família: 'She's like family to me' ou 'He's like a brother'. Sem 'a' antes de 'family' (genérico).",
    examples: [
      { target: 'My best friend',              native: 'Meu melhor amigo' },
      { target: "She's like a sister to me.", native: "Ela é como uma irmã pra mim." },
      { target: "They're like family.",         native: 'Eles são como família.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Best friend',     right: 'Melhor amigo' },
        { left: 'Close friends',   right: 'Amigos próximos' },
        { left: 'Like family',     right: 'Como família' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'O Tiago é meu melhor amigo do colégio.',
      correct: ['Tiago is my best friend from school.', 'Tiago is my best friend from school', 'tiago is my best friend from school.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Ela é como uma irmã pra mim.',
      correct: ["She's like a sister to me.", 'She is like a sister to me.', "She's like a sister to me"],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "We have been friends for ten years"',
      words: ['for', 'have', 'We', 'years.', 'been', 'ten', 'friends'],
      correct: ['We', 'have', 'been', 'friends', 'for', 'ten', 'years.'],
      translation: 'Somos amigas há dez anos',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — idioma inglês',
      sentence: "Maria isn't related to me, but she's _____ family.",
      options: ['as', 'like', 'same'],
      correct: 'like',
      context: "'Like' = como. 'Like family' é o jeito padrão.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Reencontro com amigo de infância',
      question: 'Faz cinco anos sem se ver. Como expressa saudade?',
      options: [
        { text: "I've missed you — you're like family to me.", correct: true },
        { text: "I miss. You family same.",                      correct: false },
        { text: "Saudade. Family.",                          correct: false },
      ],
      explanation: "'I've missed you' (present perfect) + 'like family' carrega o afeto.",
    },
  ],

  rwenDialogue: {
    intro: "Reencontro com amiga de colégio depois de muitos anos.",
    lines: [
      { speaker: 'npc', target: "Oh my word — it's been forever! How are you?", native: 'Nossa — quanto tempo! Como você está?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm well — and I've missed you so much. You know you're like a sister to me.", native: 'Estou bem — e tive muita saudade. Você sabe que é como uma irmã pra mim.', correct: true, feedback: "Mandou bem — present perfect + idioma de afeto. Reencontro emocional em inglês." },
          { target: "Good. Long time.",                                                                native: 'Bem. Muito tempo.',                                                            correct: false, feedback: "Curto — adicione 'I've missed you'." },
          { target: "Saudade demais.",                                                              native: 'Saudade demais.',                                                                            correct: false, feedback: "Em português — traduza." },
        ],
      },
      { speaker: 'npc', target: "Same here — you're family to me, you know that.", native: 'Igualmente — você é família pra mim, sabe disso.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'Like family' carrega o calor brasileiro em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My best friend (em inglês)',  correct: ['My best friend', 'my best friend'] },
      { prompt: "She's like family (em inglês)", correct: ["She's like family", 'She is like family', "She's like family.", 'She is like family.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa no melhor amigo. Escreve em inglês: 'My best friend is [nome]. We've been friends for [número] years. He/She is like a brother/sister to me.'",
    rwenSignoff: "Amanhã — verbos da família (visit, call, miss).",
  },

  phase8: {
    scenario: "You bump into a school friend you haven't seen in years. Catch up in English — express they're still like family.",
    rwenRole: "Rumbi, your old school friend. Asks 'Are you married?', 'Where are you living?'.",
    successCriteria: "User uses 'best friend' or 'like family' once. Asks at least one return question. Uses present perfect ('I've missed you' or 'It's been [time]').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
