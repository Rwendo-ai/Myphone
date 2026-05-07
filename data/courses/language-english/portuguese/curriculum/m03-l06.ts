import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Languages I speak — Idiomas que eu falo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Muito brasileiro fala português, espanhol pelo menos meia bocada, e algum inglês. Hoje aprendemos a listar os idiomas: 'I speak Portuguese', 'A little English', 'And some others'.",
    culturalNote: "Em inglês, nomes de idiomas vão sempre com inicial maiúscula — Portuguese, English, Spanish, French. Em português a gente escreve 'inglês', 'português' com minúscula — em inglês não. E mais: 'a little English' não diminui você — mostra humildade. Quem diz 'I speak fluent English' precisa entregar o que prometeu.",
  },

  chunks: [
    {
      id: 'i_speak_shona',
      target: 'I speak Portuguese',
      native: 'Eu falo português',
      literal: 'I speak Portuguese',
      emoji: '🗣️',
      phonetic: 'ay-SPEEK-POR-chuh-geez',
      audioRef: null,
    },
    {
      id: 'a_little_english',
      target: 'A little English',
      native: 'Um pouco de inglês',
      literal: 'A little English',
      emoji: '🤏',
      phonetic: 'uh-LIT-ul-ING-glish',
      audioRef: null,
    },
    {
      id: 'and_some_others',
      target: 'And some others',
      native: 'E alguns outros',
      literal: 'And some others',
      emoji: '➕',
      phonetic: 'and-sum-UH-thurz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Listing skills — "I speak ..."',
    explanation: "Pra listar idiomas: comece com 'I speak [idioma]'. Pra adicionar um que sabe pouco: 'and a little [idioma]'. Pra fechar: 'and some others' se tiver mais. Idiomas em inglês são SEMPRE com letra maiúscula.",
    examples: [
      { target: 'I speak Portuguese and English',          native: 'Falo português e inglês' },
      { target: 'I speak Portuguese and a little English',  native: 'Falo português e um pouco de inglês' },
      { target: 'I speak Portuguese, English, and some Spanish', native: 'Falo português, inglês e um pouco de espanhol' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os idiomas',
      pairs: [
        { left: 'English',     right: 'Inglês' },
        { left: 'Portuguese',  right: 'Português' },
        { left: 'Spanish',     right: 'Espanhol' },
        { left: 'French',      right: 'Francês' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Falo português e um pouco de inglês',
      correct: ['I speak Portuguese and a little English', 'i speak Portuguese and a little English', 'I speak Portuguese and a little english'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'E alguns outros',
      correct: ['And some others', 'and some others', 'And some others.', 'and some others.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a lista',
      sentence: "I speak Portuguese and ____ English.",
      options: ['a little', 'a small', 'a few'],
      correct: 'a little',
      context: 'Você fala um pouco de inglês.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a lista de idiomas',
      words: ['I', 'speak', 'Portuguese', 'and', 'English'],
      correct: ['I', 'speak', 'Portuguese', 'and', 'English'],
      translation: 'Falo português e inglês',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta curta',
      words: ['A', 'little', 'English'],
      correct: ['A', 'little', 'English'],
      translation: 'Um pouco de inglês',
    },
  ],

  rwenDialogue: {
    intro: "Conferência multilíngue em São Paulo. Um pesquisador internacional pergunta sobre seus idiomas.",
    lines: [
      { speaker: 'npc', target: "What languages do you speak?", native: 'Quais idiomas você fala?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak Portuguese, English, and a little Spanish.", native: 'Falo português, inglês e um pouco de espanhol.', correct: true,  feedback: "Mandou bem — lista clara, com 'a little' pro idioma fraco." },
          { target: "Portuguese, English, Spanish.",                       native: 'Português, inglês, espanhol.',                    correct: false, feedback: "Faltou o 'I speak' — adiciona pra ficar frase completa." },
          { target: "I speak portuguese and english.",                     native: 'Falo português e inglês.',                          correct: false, feedback: "Idiomas em inglês são com letra maiúscula — Portuguese, English." },
        ],
      },
      { speaker: 'npc', target: "Wonderful! That's so useful here.", native: 'Maravilha! Isso é muito útil aqui.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Idiomas com letra maiúscula — Portuguese, English, Spanish. Detalhe brasileiro que se perde fácil.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Eu falo português (em inglês)',          correct: ['I speak Portuguese', 'i speak Portuguese', 'I speak portuguese'] },
      { prompt: 'Um pouco de inglês (em inglês)',            correct: ['A little English', 'a little English', 'A little english'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escreva sua lista de idiomas em inglês: 'I speak ___, ___, and a little ___'. Lembre: maiúscula em todos os idiomas.",
    rwenSignoff: "Mandou bem. Até amanhã.",
  },

  phase8: {
    scenario: "You're mingling at a multilingual professional conference in São Paulo. Someone notices your name badge and asks, in English, 'What languages do you speak?'.",
    rwenRole: "Adaeze, 38, a Nigerian researcher attending the conference. Genuinely curious about Brazilian languages and asks one follow-up.",
    successCriteria: "User lists at least two languages with correct capitalisation in speech, uses 'I speak ...' (not just bare list), and uses 'a little' or 'some' to qualify a weaker language honestly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
