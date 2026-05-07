import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Articles in real talk — Conversation capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Você fechou o esqueleto do inglês — articles, plurais, demonstrativos, some/any, much/many. Hoje juntamos tudo numa conversa fluida.",
    culturalNote: "Quem fala inglês de verdade não pensa nisso. O brasileiro que chega ao A2 sólido começou a sentir 'when in doubt, add the article'. O que parecia mil regras vira intuição. Esse passo é grande — você tá sentindo o idioma.",
  },

  chunks: [
    {
      id: 'morning_flow',
      target: 'I woke up. I had a cup of coffee and an apple.',
      native: 'Acordei. Tomei um café e comi uma maçã.',
      literal: 'a cup, an apple',
      emoji: '☕',
      phonetic: 'aw-ee-WOHK-up...',
      audioRef: null,
    },
    {
      id: 'work_flow',
      target: 'I went to work. The meeting took three hours. I have many emails.',
      native: 'Fui pro trabalho. A reunião durou três horas. Tenho muitos e-mails.',
      literal: 'no article (work), the (specific meeting), many (countable)',
      emoji: '💼',
      phonetic: 'aw-ee went tu wurk...',
      audioRef: null,
    },
    {
      id: 'evening_flow',
      target: 'I came home. These children are mine. I love my family.',
      native: 'Voltei pra casa. Estas crianças são minhas. Amo minha família.',
      literal: 'no article (home), these (close+plural), no article (family)',
      emoji: '🏠',
      phonetic: 'aw-ee kaym-hohm...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flowing speech",
    explanation: "Numa conversa real, articles trabalham juntos — 'a/an' pra novo, 'the' pra conhecido, sem artigo pra genérico/abstrato, plurais (regulares e irregulares), 'this/that' pra apontar, 'some/any' pra oferecer/perguntar, 'much/many' pra quantidade. Sem pensar é o objetivo.",
    examples: [
      { target: 'I have two children. The children love music.',  native: 'Tenho duas crianças. As crianças adoram música.' },
      { target: 'Some days are hard. This day is good.',          native: 'Alguns dias são difíceis. Este dia é bom.' },
      { target: 'How much time do you have? I have many tasks.',  native: 'Quanto tempo você tem? Tenho muitas tarefas.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Escolha articles em todo o parágrafo',
      sentence: 'I woke up at 6. I had _____ coffee and _____ apple. _____ apple was sweet.',
      options: ['a / an / The', 'an / a / The', 'the / a / An'],
      correct: 'a / an / The',
      context: 'A coffee (consoante), an apple (vogal), The apple (já específico).',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês (atenção articles + plurais)',
      prompt: 'Tenho dois filhos. Meus filhos adoram música.',
      correct: ['I have two children. My children love music.', 'I have two children. My children love music'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quanto tempo você tem? Tenho muito trabalho.',
      correct: ['How much time do you have? I have a lot of work.', 'How much time do you have? I have much work.', 'How much time do you have? I have many tasks.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "These books on the table are mine"',
      words: ['mine.', 'are', 'on', 'These', 'the', 'books', 'table'],
      correct: ['These', 'books', 'on', 'the', 'table', 'are', 'mine.'],
      translation: 'Estes livros sobre a mesa são meus',
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha much/many',
      sentence: "I don't have _____ time, but I have _____ ideas.",
      options: ['much / many', 'many / much', 'much / much'],
      correct: 'much / many',
      context: 'Time = incontável (much). Ideas = contável plural (many).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Frase mais natural',
      question: 'Choose the most natural full sentence:',
      options: [
        { text: 'I have a brother. The brother lives in São Paulo. He has many friends.', correct: true },
        { text: 'I have brother. Brother lives São Paulo. He has much friends.', correct: false },
        { text: 'I have the brother. A brother lives in São Paulo. He has many friend.', correct: false },
      ],
      explanation: 'A → the (já mencionado), São Paulo sem artigo (próprio), many friends (contável plural).',
    },
  ],

  rwenDialogue: {
    intro: "Capstone! Você descreve seu dia inteiro em inglês pra um amigo americano — da manhã à noite. Note todos os articles que entram.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your typical day, from morning to evening.",
        native: 'Conta como é um dia típico seu, da manhã à noite.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6. I have a cup of tea and some bread. I go to work — the office is far. I have many meetings. In the evening I come home. The children are happy to see me. I love my family.", native: '...', correct: true, feedback: "Mandou muito bem — 'a cup', 'some bread', 'the office', 'many meetings', 'the children', 'my family' (sem artigo). Nível alto." },
          { target: "I wake up. I have tea and bread. I go to work. I have meetings. I come home. Children are happy. I love family.", native: '...', correct: false, feedback: "Faltou articles — fica truncado. Adicione 'a cup of tea', 'some bread', 'the children', 'my family'." },
          { target: "I wake up at 6. I have the cup of tea and the bread. I go to the work. I have the many meetings.", native: '...', correct: false, feedback: "'The' demais — 'a cup' (primeira), 'some bread' (incontável positivo), 'work' (sem artigo), 'many meetings' (sem artigo)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 4. Articles entram quando você sente o idioma — e você tá sentindo. Próximo: família.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I have an apple. ___ apple is red. (preencha)', correct: ['The', 'the'] },
      { prompt: 'How ___ children do you have? (much/many)', correct: ['many', 'Many'] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 4',
    task: "Descreva seu dia em inglês — parágrafo de 5-7 frases. Use: 'a/an' na primeira menção, 'the' na segunda, plural com -s, irregular (children/people), 'this/these', e 'some/any' ou 'much/many'.",
    rwenSignoff: "Você fechou a estrutura do inglês. Agora vamos pôr carne — Módulo 5: família.",
  },

  phase8: {
    scenario: "Capstone: describe your full day to an English-speaking friend, using articles, plurals, demonstratives, and quantifiers naturally.",
    rwenRole: "Friend listening to your daily routine.",
    successCriteria: "User uses six or more different Module 4 features correctly in one flowing narrative: a/an, the, no article (abstract), plural (regular or irregular), this/that/these/those, some/any or much/many.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
