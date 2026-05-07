import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — Não entendi",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Sempre que não entender, fala. Em inglês: 'I don't understand'. É a frase que te salva quando o gringo fala rápido demais.",
    culturalNote: "Em português a gente nega com 'não' simples ('Não entendo'). Em inglês precisa usar 'don't' (= do + not): 'I don't understand'. Não tenha vergonha de dizer — quem fala inglês prefere saber que você não entendeu, assim ajustam o ritmo.",
  },

  chunks: [
    {
      id: 'i_dont_understand',
      target: "I don't understand",
      native: 'Não entendo',
      literal: 'I do-not understand',
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND',
      audioRef: null,
    },
    {
      id: 'repeat_please',
      target: 'Repeat, please',
      native: 'Repete, por favor',
      literal: 'Repeat, please',
      emoji: '🔁',
      phonetic: 'ree-PEET-PLEEZ',
      audioRef: null,
    },
    {
      id: 'what_did_you_say',
      target: 'What did you say?',
      native: 'O que você disse?',
      literal: 'What did you say?',
      emoji: '❓',
      phonetic: 'WHUT-did-yoo-SAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Negation with 'don't'",
    explanation: "Pra negar verbos comuns em inglês, use 'don't' (= do + not) antes do verbo: 'I don't understand', 'I don't know', 'I don't speak French'. Aquele 'don't' nega tudo que vem depois.",
    examples: [
      { target: "I don't understand.", native: 'Não entendo.' },
      { target: "I don't know.",        native: 'Não sei.' },
      { target: "I don't speak fast.",  native: 'Não falo rápido.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: "I don't understand", right: 'Não entendo' },
        { left: 'Repeat, please',     right: 'Repete, por favor' },
        { left: 'What did you say?',   right: 'O que você disse?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Não entendo',
      correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — você não entendeu',
      sentence: "I ____ understand.",
      options: ["don't", "am not", "do"],
      correct: "don't",
      context: "Negação em inglês com verbo comum usa 'don't' antes do verbo.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase — pedindo pra repetir',
      words: ['Can', 'repeat', 'you', 'that'],
      correct: ['Can', 'you', 'repeat', 'that'],
      translation: 'Você pode repetir isso?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'O que você disse?',
      correct: ['What did you say?', 'what did you say?', 'What did you say', 'what did you say'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — peça pra repetir devagar',
      prompt: 'Repete devagar, por favor',
      correct: ['Repeat slowly, please', 'Repeat slowly, please.', 'Please repeat slowly', 'Please, repeat slowly', 'repeat slowly, please'],
    },
  ],

  rwenDialogue: {
    intro: "Imigração de Heathrow em Londres. O oficial fala rápido demais e você não pegou nada. Calma — peça pra repetir.",
    lines: [
      { speaker: 'npc', target: "How long are you staying and what's your hotel address?", native: "Quanto tempo vai ficar e qual é o endereço do seu hotel?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please.", native: "Desculpa, não entendi. Devagar, por favor.", correct: true,  feedback: 'Mandou bem — pediu desculpa, explicou, e pediu pra ele falar mais devagar.' },
          { target: "Yes.",                                         native: 'Sim.',                                       correct: false, feedback: "Resposta automática perigosa — você não entendeu, fala isso." },
          { target: "OK, goodbye.",                                  native: 'OK, tchau.',                                 correct: false, feedback: "Não dá pra sair — diga que não entendeu." },
        ],
      },
      { speaker: 'npc', target: "Sure. How — long — are — you — staying?", native: 'Claro. Quanto — tempo — você — vai — ficar?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Essas frases são suas boias quando o inglês fica difícil. Use sem medo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: "I don't understand (em inglês)", correct: ["I don't understand", "I don't understand.", "I do not understand", "i don't understand"] },
      { prompt: 'Repeat, please (em inglês)',     correct: ['Repeat, please', 'Repeat please', 'repeat, please', 'Please repeat', 'Please, repeat'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica em voz alta hoje, duas vezes: 'I don't understand'. Acostuma a boca com o som — assim sai natural quando precisar.",
    rwenSignoff: "Ninguém precisa saber tudo de primeira. Até amanhã.",
  },

  phase8: {
    scenario: "You're at the immigration desk at London Heathrow. The officer is professional but speaks fast British English. You're tired from the flight and missed half of the question. Politely tell them you don't understand and ask for clarification.",
    rwenRole: "Officer Davies, 45, immigration officer. Polite but no-nonsense, speaks fast clipped English. Will repeat slowly if asked.",
    successCriteria: "User uses 'I don't understand' or 'Sorry, I didn't catch that', asks 'Can you repeat?' or 'Slowly, please', stays calm. Doesn't pretend to understand and say 'Yes' to questions they didn't follow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
