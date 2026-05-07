import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Emergency phrases — Frases de emergência',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esperamos que você nunca precise — mas tem que saber. Em emergência, as palavras precisam sair rápidas e claras.",
    culturalNote: "No Brasil a gente grita 'Socorro!'. Em inglês 'Help!' — uma sílaba, alta, direta. Em emergência o jeitinho brasileiro de suavizar não cabe — fala 'Help!', 'Call the police', 'I need a doctor'. Educação volta depois que tudo se resolver.",
  },
  crisisHandoff: true,

  chunks: [
    {
      id: 'help',
      target: 'Help!',
      native: 'Socorro!',
      literal: 'Help-me-please!',
      emoji: '🚨',
      phonetic: 'HELP',
      audioRef: null,
    },
    {
      id: 'call_the_police',
      target: 'Call the police',
      native: 'Chame a polícia',
      literal: 'Call the police',
      emoji: '🚓',
      phonetic: 'KAWL-thuh-poh-LEES',
      audioRef: null,
    },
    {
      id: 'i_need_a_doctor',
      target: 'I need a doctor',
      native: 'Preciso de um médico',
      literal: 'I need a doctor',
      emoji: '🚑',
      phonetic: 'AY-need-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative urgency',
    explanation: "Frases de emergência são curtas e diretas. 'Help!' é uma palavra só — sem 'please'. 'Call the police' começa direto com o verbo. Se tiver tempo, adicione 'now' ou 'quickly': 'Call an ambulance, quickly!'.",
    examples: [
      { target: 'Help! Help me!',     native: 'Socorro! Me ajudem!' },
      { target: 'Call an ambulance.', native: 'Chame uma ambulância.' },
      { target: 'I need a doctor — now.', native: 'Preciso de um médico — agora.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões',
      pairs: [
        { left: 'Help!',             right: 'Socorro!' },
        { left: 'Call the police',   right: 'Chame a polícia' },
        { left: 'I need a doctor',   right: 'Preciso de um médico' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — algo te assustou',
      prompt: 'Socorro!',
      correct: ['Help!', 'Help me!', 'help!', 'Help', 'Help me'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — você quer chamar a polícia',
      sentence: '____ the police!',
      options: ['Call', 'Tell', 'Bring'],
      correct: 'Call',
      context: "'Call' em inglês é o verbo pra ligar/chamar — inclusive emergência.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte — você precisa de médico já',
      words: ['need', 'I', 'doctor', 'a'],
      correct: ['I', 'need', 'a', 'doctor'],
      translation: 'Preciso de um médico',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — chamando ambulância',
      prompt: 'Chame uma ambulância!',
      correct: ['Call an ambulance!', 'Call an ambulance', 'call an ambulance!', 'Call the ambulance!'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Preciso de um médico — agora',
      correct: ['I need a doctor — now', 'I need a doctor now', 'I need a doctor, now', 'I need a doctor now.', 'I need a doctor right now'],
    },
  ],

  rwenDialogue: {
    intro: "Sua amiga teve uma reação alérgica num restaurante em Londres durante uma viagem. Você liga pro 999.",
    lines: [
      { speaker: 'npc', target: "999 emergency, what's your emergency?", native: '999 emergência, qual é a emergência?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Help! I need a doctor. My friend is hurt.", native: 'Socorro! Preciso de um médico. Minha amiga está mal.', correct: true,  feedback: 'Mandou bem — direto, claro, com as palavras essenciais.' },
          { target: "Hello, how are you?",                          native: 'Olá, como você está?',                                  correct: false, feedback: 'É emergência — pula a etiqueta e fala o que tá acontecendo.' },
          { target: "Excuse me, please...",                          native: 'Com licença, por favor...',                              correct: false, feedback: "Sem rodeios — fala 'Help!' direto." },
        ],
      },
      { speaker: 'npc', target: "OK, where are you?", native: 'OK, onde você está?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Em emergência, palavras curtas, conteúdo essencial: 'Help', 'doctor', 'hurt'. Educação volta depois.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Help! (em inglês)',           correct: ['Help!', 'Help me!', 'Help', 'help!'] },
      { prompt: 'I need a doctor (em inglês)', correct: ['I need a doctor', 'I need a doctor.', 'I need a doctor!', 'i need a doctor'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Agora — sem olhar — fala em voz alta as três frases: 'Help!', 'Call the police', 'I need a doctor'. Acostuma a boca; espera-se que você nunca precise.",
    rwenSignoff: "Boa viagem — atenção sempre.",
  },

  phase8: {
    scenario: "You're abroad in London on a work trip when your travel companion suddenly has a serious allergic reaction in a restaurant. You need to call emergency services (999) and explain the situation in clear English fast.",
    rwenRole: "999 emergency dispatcher, professional and calm. Will guide you with questions: what's the emergency, where are you, is the person breathing. Speaks clear British English but quickly.",
    successCriteria: "User opens with 'Help!' or states the emergency immediately. Uses 'I need a doctor' / 'Call an ambulance' / 'My friend is sick'. Stays focused, gives location when asked, doesn't waste words on greetings or apologies.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
