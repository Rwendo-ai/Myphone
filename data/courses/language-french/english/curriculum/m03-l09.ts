import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Parlez-moi de vous — Asking them',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Until now we've been answering. Today the camera flips: open questions you can ask any French speaker to start a real conversation. Three of them, and they'll carry you for years.",
    culturalNote: "French open questions feel slightly more literary than English. 'Parlez-moi de vous' (literally 'speak to me of yourself') is a normal small-talk opener — it doesn't sound stiff in French the way 'Tell me about yourself' can in English. 'Quelle est votre histoire?' is a warmer, more curious version. 'Vous êtes d'où exactement?' uses inversion and feels engaged — the 'exactement' signals you actually want detail, not just a country.",
  },

  chunks: [
    {
      id: 'parlez_moi_de_vous',
      target: 'Parlez-moi de vous',
      native: 'Tell me about yourself',
      literal: 'Speak-to-me of you',
      emoji: '🎙️',
      phonetic: 'par-LAY mwah duh VOO',
      audioRef: null,
    },
    {
      id: 'quelle_est_votre_histoire',
      target: 'Quelle est votre histoire?',
      native: "What's your story?",
      literal: 'Which is your story?',
      emoji: '📖',
      phonetic: 'kel eh votr ee-STWAHR',
      audioRef: null,
    },
    {
      id: 'vous_etes_dou_exactement',
      target: "Vous êtes d'où exactement?",
      native: 'Where exactly are you from?',
      literal: 'You are from-where exactly?',
      emoji: '🌍',
      phonetic: 'voo zet DOO eg-zak-tuh-MAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open questions — three structures',
    explanation: "Three question shapes. (1) Imperative + 'de' + person: 'Parlez-moi DE vous' (speak-to-me OF yourself). (2) 'Quel(le) est...' + noun: agrees with the noun's gender (histoire is feminine → 'Quelle'). (3) Inversion: 'Vous êtes d'où?' is colloquial-friendly — adding 'exactement' signals genuine curiosity, not interrogation.",
    examples: [
      { target: 'Parlez-moi de votre travail', native: 'Tell me about your work' },
      { target: 'Quel est votre métier?', native: "What's your profession? (métier is masculine → quel)" },
      { target: "D'où venez-vous exactement?", native: 'Where exactly do you come from?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question to its meaning',
      pairs: [
        { left: 'Parlez-moi de vous', right: 'Tell me about yourself' },
        { left: 'Quelle est votre histoire?', right: "What's your story?" },
        { left: "Vous êtes d'où exactement?", right: 'Where exactly are you from?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the open question — 'histoire' is feminine.",
      sentence: '_____ est votre histoire?',
      options: ['Quelle', 'Quel', 'Que'],
      correct: 'Quelle',
      context: "'Quel' agrees with the noun. 'Histoire' is feminine → 'Quelle'. 'Métier' (profession) is masculine → 'Quel'. Always check the noun's gender first.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — invite a stranger to tell you about themselves',
      prompt: 'Tell me about yourself',
      correct: ['Parlez-moi de vous', 'parlez-moi de vous'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a French speaker where exactly they are from.',
      words: ['exactement?', 'êtes', "d'où", 'Vous'],
      correct: ['Vous', 'êtes', "d'où", 'exactement?'],
      translation: 'Where exactly are you from?',
    },
    {
      type: 'multiple_choice',
      instruction: "You want to ask 'What's your job?' (formal). Métier is masculine.",
      question: 'Pick the correct form',
      options: [
        { text: 'Quel est votre métier?', correct: true },
        { text: 'Quelle est votre métier?', correct: false },
        { text: 'Que est votre métier?', correct: false },
      ],
      explanation: "'Quel/Quelle' agrees with the noun's gender. Métier (m) → Quel. Histoire (f) → Quelle. 'Que' isn't used before être this way.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — ask warmly what their story is',
      prompt: "What's your story?",
      correct: ['Quelle est votre histoire?', 'Quelle est votre histoire', 'quelle est votre histoire?'],
    },
  ],

  rwenDialogue: {
    intro: "You're the one starting the conversation now. A new colleague, Marc, has just sat next to you at the team coffee. He's quiet — your turn to open the door.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Parlez-moi de vous, Marc.', native: 'Tell me about yourself, Marc.', correct: true, feedback: 'Direct, warm, complete. Marc has a wide-open invitation now.' },
          { target: 'Que vous?', native: 'What you? (broken)', correct: false, feedback: 'Word salad. The actual phrase is "Parlez-moi de vous" — speak-to-me of you.' },
          { target: 'Vous êtes qui?', native: 'Who are you? (blunt)', correct: false, feedback: 'Grammatical but feels like a security guard\'s line. "Parlez-moi de vous" is warmer for a first chat.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Eh bien, je suis ingénieur, j\'habite à Lyon depuis dix ans. Et vous?',
        native: "Well, I'm an engineer, I've lived in Lyon for ten years. And you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Et vous êtes d\'où exactement?', native: 'And where exactly are you from?', correct: true, feedback: 'You followed up with curiosity — exactly what makes someone keep talking.' },
          { target: "Vous d'où?", native: 'You from-where? (too clipped)', correct: false, feedback: 'Too short for a real conversation. "Vous êtes d\'où exactement?" lands better.' },
          { target: 'Quelle âge?', native: 'What age? (no verb)', correct: false, feedback: "Wrong question for the moment — and you'd need 'Quel âge avez-vous?' anyway." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "And just like that you're running the conversation, not waiting in it. Curiosity in French is generous — people open up to it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Tell me about yourself (formal, in French)',
        correct: ['Parlez-moi de vous', 'parlez-moi de vous'],
      },
      {
        prompt: 'Where exactly are you from? (in French)',
        correct: ["Vous êtes d'où exactement?", "Vous êtes d'où exactement", "vous êtes d'où exactement?"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one French speaker an open question today — even a chatbot or your reflection counts. 'Parlez-moi de vous.' Stay quiet after. Watch what happens.",
    rwenSignoff: "Une bonne question vaut mille phrases. À demain.",
  },

  phase8: {
    scenario: "Coffee with a new French colleague, Marc, on his first day at your office. He's reserved. Your job in the next 3 minutes is to make him talk — using open questions only.",
    rwenRole: "Marc — your new colleague, ~40, polite but introverted, vous-by-default; he gives short answers until invited to expand. He warms up when asked OPEN questions ('Parlez-moi de...', 'Quelle est votre histoire?') and stays guarded with closed ones.",
    successCriteria: "User asks at least TWO of the three open questions ('Parlez-moi de vous', 'Quelle est votre histoire?', 'Vous êtes d'où exactement?'). User correctly agrees 'Quel/Quelle' with the following noun. User does NOT use only closed yes/no questions. Bonus if user follows up with a third question that builds on Marc's previous answer.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
