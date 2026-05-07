import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any — countables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Some' = positive statements aur offers ke liye. 'Any' = questions aur negatives ke liye. Yeh chhota sa rule hai jo Hindi-speakers ko aksar confuse karta hai.",
    culturalNote: "Hindi mein hum 'kuch', 'koi', ya bina kisi quantifier ke kaam chala lete hain. Lekin English mein yeh distinction strict hai: 'I have some water' (positive — some), 'Do you have any water?' (question — any), 'I don't have any water' (negative — any). BPO calls par yeh galti hoti hai: 'Do you want some help?' (offer — yeh sahi hai!) aur 'Do you have some questions?' (question — galat, 'any' lagega).",
  },

  chunks: [
    {
      id: 'some_water',
      target: 'Some water',
      native: 'Thoda paani',
      literal: 'positive statement / offer',
      emoji: '💧',
      phonetic: 'sum-WAW-ter',
      audioRef: null,
    },
    {
      id: 'any_questions',
      target: 'Any questions?',
      native: 'Koi sawal? (koi bhi)',
      literal: 'used in question',
      emoji: '❓',
      phonetic: 'EN-ee KWES-chuns',
      audioRef: null,
    },
    {
      id: 'some_friends',
      target: 'Some friends',
      native: 'Kuch dost',
      literal: 'positive plural',
      emoji: '👥',
      phonetic: 'sum-FRENDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Some vs Any",
    explanation: "(1) Some — positive vakya: 'I have some bread'. (2) Some — offer ya request: 'Would you like some tea?' (chai loge?). (3) Any — questions: 'Do you have any sugar?'. (4) Any — negatives: 'I don't have any money'.",
    examples: [
      { target: 'I have some bread.',         native: 'Mere paas thodi roti hai.' },
      { target: 'Do you have any sugar?',     native: 'Kya aapke paas chini hai?' },
      { target: "I don't have any money.",    native: 'Mere paas paise nahi hain.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "'some' ya 'any' chuniye",
      sentence: 'Would you like _____ tea?',
      options: ['some', 'any', 'a'],
      correct: 'some',
      context: 'Yeh offer hai — "some" lagega.',
    },
    {
      type: 'fill_blank',
      instruction: "'some' ya 'any' chuniye",
      sentence: "I don't have _____ money.",
      options: ['any', 'some', 'no'],
      correct: 'any',
      context: 'Negative — "any" lagega.',
    },
    {
      type: 'fill_blank',
      instruction: "'some' ya 'any' chuniye",
      sentence: 'Do you have _____ questions?',
      options: ['any', 'some', 'a'],
      correct: 'any',
      context: 'Question hai — "any" lagega.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Thoda paani, please',
      correct: ['Some water, please', 'Some water please', 'some water, please', 'some water please'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi kaunsa hai?',
      question: 'There are _____ students in the classroom.',
      options: [
        { text: 'some', correct: true },
        { text: 'any', correct: false },
        { text: 'a', correct: false },
      ],
      explanation: 'Yeh positive vakya hai — "some" lagega. Negative ya question nahi hai.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "Do you have any sugar?"',
      words: ['sugar?', 'have', 'any', 'Do', 'you'],
      correct: ['Do', 'you', 'have', 'any', 'sugar?'],
      translation: 'Kya aapke paas chini hai?',
    },
  ],

  rwenDialogue: {
    intro: "Aap ek BPO call par hain — US client ke saath. Wo aapse kuch information maang raha hai aur aap clarification questions puchhna chahte hain.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi, I need to update my account details.",
        native: 'Mujhe apne account ki details update karni hain.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure, I can help. Do you have any reference number? I'll need some details too.", native: 'Zaroor, main madad karta hoon. Kya aapke paas koi reference number hai? Mujhe kuch details bhi chahiye honge.', correct: true, feedback: "Bahut accha — 'any reference' (question), 'some details' (positive statement)." },
          { target: "Sure. Do you have some reference number? I'll need any details too.", native: '...', correct: false, feedback: "Question mein 'any' lagega — 'any reference number'. Statement mein 'some details', 'any details' nahi." },
          { target: "Sure. Do you have reference? I'll need details.", native: '...', correct: false, feedback: "Bilkul article aur quantifier chhod diye. Natural English mein 'any reference' aur 'some details' lagao." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. Some — positive/offer. Any — question/negative. Yeh rule fix hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'Some water (English mein)', correct: ['Some water', 'some water'] },
      { prompt: 'Any questions? (English mein)', correct: ['Any questions?', 'any questions?', 'Any questions', 'any questions'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Kisi colleague se poochho 'Do you have any...?' aur kisi ko offer karo 'Would you like some...?'. Do baar karna hai aaj.",
    rwenSignoff: "Some — jo cheez hai. Any — jo confirm nahi hai. Ek hi hafte mein habit ban jayegi.",
  },

  phase8: {
    scenario: "BPO call: customer ke saath account/order ki details discuss kar rahe ho — questions ('any') aur statements ('some') dono use karne hain.",
    rwenRole: "Customer who needs help with their account, asks and answers naturally — gives the user openings to use both 'some' and 'any'.",
    successCriteria: "User correctly uses 'some' in at least two positive/offer contexts ('I have some...', 'Would you like some...') and 'any' in at least two question/negative contexts ('Do you have any...?', 'I don't have any...').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
