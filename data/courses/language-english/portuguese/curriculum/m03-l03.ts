import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — O que você faz?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Em inglês, 'What do you do?' não pergunta o que você está fazendo agora — pergunta sua profissão. Resposta: 'I'm a teacher' (sou professor) ou 'I work in IT' (trabalho em TI).",
    culturalNote: "Em português a gente diz 'sou professora' — sem artigo. Em inglês precisa do 'a': 'I'm a teacher'. Esse 'a' é o equivalente fraco de 'um/uma' — mas em inglês não dá pra cortar. 'I'm teacher' soa errado, igualzinho ao 'sou professora' soaria estranho se virasse 'eu professora'.",
  },

  chunks: [
    {
      id: 'what_do_you_do',
      target: 'What do you do?',
      native: 'O que você faz?',
      literal: 'What do you do?',
      emoji: '💼',
      phonetic: 'wut-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'im_a_teacher',
      target: "I'm a teacher",
      native: 'Eu sou professor(a)',
      literal: 'I-am a teacher',
      emoji: '👩‍🏫',
      phonetic: 'aym-uh-TEE-cher',
      audioRef: null,
    },
    {
      id: 'i_work_in_it',
      target: 'I work in IT',
      native: 'Trabalho com TI',
      literal: 'I work in IT',
      emoji: '💻',
      phonetic: 'ay-WURK-in-AY-TEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Occupations — "I\'m a ..." / "I work in ..."',
    explanation: "Duas formas: (1) 'I'm a [profissão]' pra título — teacher, doctor, nurse, engineer. NÃO ESQUEÇA o 'a'! (2) 'I work in [setor]' pra área — IT, banking, education, health. Cuidado também: profissões em inglês não têm gênero — 'teacher' serve pra homem e mulher.",
    examples: [
      { target: "I'm a teacher",        native: 'Sou professor(a)' },
      { target: "I'm a nurse",          native: 'Sou enfermeiro(a)' },
      { target: 'I work in banking',     native: 'Trabalho com banco' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine profissões com sentido',
      pairs: [
        { left: 'Teacher',     right: 'Professor(a)' },
        { left: 'Nurse',       right: 'Enfermeiro(a)' },
        { left: 'Doctor',      right: 'Médico(a)' },
        { left: 'Engineer',    right: 'Engenheiro(a)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Sou professora',
      correct: ["I'm a teacher", "I am a teacher", "i'm a teacher", "i am a teacher"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Trabalho com TI',
      correct: ['I work in IT', 'i work in IT', 'I work in I.T.'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete com 'a' ou nada",
      sentence: "I'm ____ doctor.",
      options: ['a', 'the', '—'],
      correct: 'a',
      context: 'Apresentando sua profissão pela primeira vez.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ['What', 'do', 'you', 'do'],
      correct: ['What', 'do', 'you', 'do'],
      translation: 'O que você faz?',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta de profissão',
      words: ['I', 'work', 'in', 'banking'],
      correct: ['I', 'work', 'in', 'banking'],
      translation: 'Trabalho com banco',
    },
  ],

  rwenDialogue: {
    intro: "Você acabou de conhecer um colega novo no escritório em SP. Ele é australiano, fala inglês.",
    lines: [
      { speaker: 'npc', target: "Welcome to the team! What do you do?", native: 'Bem-vindo à equipe! O que você faz?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a teacher, but I work in IT now.", native: 'Sou professor, mas agora trabalho com TI.', correct: true,  feedback: "Mandou bem — frase completa com história curta." },
          { target: "Teacher.",                                native: 'Professor.',                                correct: false, feedback: "Curto demais — adicione 'I'm a' pra frase ficar inteira." },
          { target: "I am teacher.",                           native: 'Sou professor.',                            correct: false, feedback: "Esqueceu o 'a'! Em inglês: 'I'm a teacher'." },
        ],
      },
      { speaker: 'npc', target: "Oh interesting — what subject did you teach?", native: 'Que interessante — qual matéria você ensinava?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você usou o 'a' e a frase saiu redonda. Esse 'a' é detalhe pequeno mas faz toda diferença.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: "O que você faz? (em inglês)",          correct: ['What do you do?', 'what do you do?', 'What do you do'] },
      { prompt: "Sou enfermeiro (em inglês)",              correct: ["I'm a nurse", "I am a nurse", "i'm a nurse", "i am a nurse"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje fala em inglês a sua profissão — em voz alta, em frente ao espelho mesmo: 'I'm a ___' ou 'I work in ___'.",
    rwenSignoff: "Boa. Até amanhã.",
  },

  phase8: {
    scenario: "You've just been introduced to a new English-speaking colleague at the São Paulo office coffee machine. They turn to you and ask 'So, what do you do?'.",
    rwenRole: "James, 40, a project manager visiting from the New York office for a week. Curious, asks one or two follow-up questions about your work.",
    successCriteria: "User answers with 'I'm a [job]' or 'I work in [field]' (with the article 'a' if needed), then handles one follow-up about their day-to-day work.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
