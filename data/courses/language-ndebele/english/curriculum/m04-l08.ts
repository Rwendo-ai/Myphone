import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08',
  module: 4,
  lesson: 8,
  title: 'Allergies and Dietary Needs',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "There is one situation where you absolutely DO refuse food in a Ndebele home: an allergy. A peanut, a shellfish, anything that could land you in hospital. Your host wants to know — they would never want to harm you. Today: how to tell them.",
    culturalNote: "Refusing food in a Ndebele home is normally rude — but allergies and serious dietary restrictions are a recognised exception. Hosts respect 'angidli ___' (I don't eat ___) when there's a real reason. Vegetarianism is less common in Matabeleland than in cities, so be ready to explain a little — 'angidli inyama' (I don't eat meat) sometimes prompts a follow-up.",
  },

  chunks: [
    {
      id: 'angidli',
      target: 'Angidli',
      native: "I don't eat",
      literal: 'I-not-eat',
      emoji: '🚫',
      phonetic: 'ahn-GEE-dlee',
      audioRef: null,
    },
    {
      id: 'inyama',
      target: 'Angidli inyama',
      native: "I don't eat meat",
      emoji: '🥦',
      phonetic: 'ahn-GEE-dlee ee-NYAH-mah',
      audioRef: null,
    },
    {
      id: 'amazambane',
      target: 'amazambane',
      native: 'peanuts / groundnuts',
      emoji: '🥜',
      phonetic: 'ah-mah-zahm-BAH-neh',
      audioRef: null,
    },
    {
      id: 'ialeji',
      target: 'i-allergy',
      native: 'allergy (borrowed word, widely understood)',
      emoji: '⚠️',
      phonetic: 'ee-AH-leh-jee',
      audioRef: null,
    },
    {
      id: 'ngiyagula',
      target: 'Ngingagula',
      native: 'I might get sick / it could make me ill',
      emoji: '🤒',
      phonetic: 'ngee-ngah-GOO-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Angi- = "I don\'t" (negative present)',
    explanation: "To make a verb negative in the present tense, swap the 'Ngi-' (I) prefix for 'Angi-' (I don't). Ngidla = I eat → Angidli = I don't eat. Notice the verb ending also shifts from -a to -i. This is one of the most useful patterns in the language: angiphuzi = I don't drink, angifuni = I don't want, angihambi = I don't go.",
    examples: [
      { target: 'Ngidla inyama', native: 'I eat meat' },
      { target: 'Angidli inyama', native: "I don't eat meat" },
      { target: 'Angiphuzi utshwala', native: "I don't drink alcohol" },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: "I don't eat meat",
      correct: ['Angidli inyama', 'angidli inyama'],
    },
    {
      type: 'fill_blank',
      instruction: "Tell your host you don't drink alcohol",
      sentence: '____ utshwala.',
      options: ['Angiphuzi', 'Ngiphuza', 'Ngifuna'],
      correct: 'Angiphuzi',
      context: "Use the negative form of 'I drink' (ngiphuza → angiphuzi).",
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural question',
      question: 'You are at a Ndebele family meal and you are allergic to peanuts. Peanut sauce is on the table. What do you do?',
      options: [
        { text: "Politely tell your host: 'Angidli amazambane — i-allergy. Ngingagula.'", correct: true },
        { text: "Eat a small bit to be polite, then take an antihistamine.", correct: false },
        { text: "Stay silent and hope the dish doesn't come your way.", correct: false },
      ],
      explanation: "Allergies are a recognised exception to the 'don't refuse food' norm. Your host wants to know — silence puts you in danger and your host in distress later. Tell them clearly.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'I don't eat peanuts'",
      words: ['amazambane', 'Angidli'],
      correct: ['Angidli', 'amazambane'],
      translation: "I don't eat peanuts.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a homestead in Tsholotsho. The meal is being served and you can see peanut sauce on the table. You're allergic.",
    lines: [
      { speaker: 'npc',  target: 'Phakela ukudla. Konke kumnandi.', native: 'Help yourself to food. Everything is tasty.' },
      { speaker: 'rwen', rwenLine: "Speak now, before the bowl reaches you. Your host needs to know." },
      { speaker: 'user', userChoices: [
        { target: 'Uxolo, angidli amazambane — i-allergy. Ngingagula.', native: "Excuse me, I don't eat peanuts — allergy. I might get sick.", correct: true, feedback: 'Clear, complete, and gives the why. Your host will redirect the food.' },
        { target: 'Hatshi, ngiyabonga.', native: 'No, thank you.', correct: false, feedback: "Too vague — your host might assume you're being polite and offer it again. Name the allergy explicitly." },
      ] },
      { speaker: 'npc',  target: 'Hawu! Ngiyabonga ungitsheleile. Nakhu ukudla okungelawo.', native: 'Oh! Thank you for telling me. Here is food without it.' },
      { speaker: 'user', userChoices: [
        { target: 'Ngiyabonga kakhulu.', native: 'Thank you very much.', correct: true, feedback: "Acknowledging the care your host just took." },
      ] },
      { speaker: 'rwen', rwenLine: "Notice — she thanked YOU for telling her. Allergies are not a burden in this culture; they are information a host is glad to have." },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'I don't eat'?",                     correct: ['Angidli', 'angidli'] },
      { prompt: "How do you say 'I don't eat meat'?",                correct: ['Angidli inyama', 'angidli inyama'] },
      { prompt: "What does 'amazambane' mean?",                      correct: ['peanuts', 'groundnuts', 'peanuts / groundnuts', 'peanuts/groundnuts', 'peanut'] },
    ],
  },

  mission: {
    title: "Memorise your one critical line",
    task: "If you have an allergy or strict diet, draft your own one-line isiNdebele declaration today: 'Angidli ___ — i-allergy. Ngingagula.' Say it out loud five times. If you ever travel to Matabeleland this is the single most important sentence you will ever speak.",
    rwenSignoff: "Some sentences you may never need. This one, if you need it, you'll need fast.",
  },

  phase8: {
    scenario: "You are a guest at a Ndebele family meal. You have a serious peanut allergy. The host is laying out dishes that include peanut sauce. You need to communicate the allergy clearly and gracefully, then accept the food they redirect to you.",
    rwenRole: "MaNkomo — the host of the meal, in her fifties, attentive and protective of her guests once she knows the situation.",
    successCriteria: "User used 'angidli' followed by the food, named or referred to an allergy ('i-allergy' or 'ngingagula'), and thanked the host afterwards with 'ngiyabonga'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
