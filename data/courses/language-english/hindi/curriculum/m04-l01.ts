import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hindi mein 'a' ya 'an' jaisa koi shabd nahi hai. Aap kehte ho 'main kitaab padhta hoon' — bina kisi article ke. Lekin English mein, ek cheez ki baat karte waqt 'a' ya 'an' lagana zaroori hai.",
    culturalNote: "Yeh ek bada asymmetry hai: Hindi mein gender hai (kitaab feminine, ladka masculine), lekin articles bilkul nahi. English mein gender nahi (mostly), lekin articles compulsory. BPO calls aur IT emails mein sabse common galti hoti hai — log 'I am sending mail' likhte hain instead of 'I am sending an email'. Yaad rakhiye: agla shabd vowel sound se shuru hota hai to 'an', warna 'a'.",
  },

  chunks: [
    {
      id: 'a_book',
      target: 'A book',
      native: 'Ek kitaab',
      literal: '(one/some) book — consonant sound',
      emoji: '📕',
      phonetic: 'uh-BUK',
      audioRef: null,
    },
    {
      id: 'an_email',
      target: 'An email',
      native: 'Ek email',
      literal: '(one/some) email — vowel sound, so "an"',
      emoji: '📧',
      phonetic: 'an-EE-mayl',
      audioRef: null,
    },
    {
      id: 'a_house',
      target: 'A house',
      native: 'Ek ghar',
      literal: '(one/some) house — consonant sound',
      emoji: '🏠',
      phonetic: 'uh-HOWS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Indefinite articles: 'a' and 'an'",
    explanation: "Consonant sound se shuru hone wale shabd ke aage 'a' lagao. Vowel sound (a, e, i, o, u) se shuru hone wale shabd ke aage 'an' lagao. Spelling nahi, sound dekhna hai — 'an hour' (h silent), 'a university' (yoo-ni — 'y' sound).",
    examples: [
      { target: 'A book',     native: 'Ek kitaab' },
      { target: 'An email',   native: 'Ek email' },
      { target: 'An hour',    native: 'Ek ghanta — "h" silent hai, isliye "an"' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "'a' ya 'an' chuniye",
      sentence: 'I want _____ apple.',
      options: ['a', 'an', 'the'],
      correct: 'an',
      context: 'Apple "A" (vowel) se shuru hota hai — isliye "an".',
    },
    {
      type: 'fill_blank',
      instruction: "'a' ya 'an' chuniye",
      sentence: 'She has _____ book.',
      options: ['a', 'an', 'no article'],
      correct: 'a',
      context: 'Book "B" (consonant) se shuru hota hai — isliye "a".',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Ek email (sirf ek)',
      correct: ['An email', 'an email'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vakya banaiye: "I have a friend"',
      words: ['friend.', 'have', 'I', 'a'],
      correct: ['I', 'have', 'a', 'friend.'],
      translation: 'Mera ek dost hai',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi kaunsa hai?',
      question: 'I saw _____ elephant at the zoo.',
      options: [
        { text: 'an elephant', correct: true },
        { text: 'a elephant', correct: false },
        { text: 'elephant', correct: false },
      ],
      explanation: "'Elephant' starts with E (vowel sound) — isliye 'an'. English mein article chhodna nahi chalega.",
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Ek ghar (sirf ek)',
      correct: ['A house', 'a house'],
    },
  ],

  rwenDialogue: {
    intro: "Aap Bangalore ke ek BPO mein kaam karte hain. Aapka US client phone par hai. Pehli galti jo Indian agents karte hain: article chhod dena. Dhyaan se sun.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi, I'd like to log a complaint about my recent order.",
        native: 'Namaste, mujhe apne haal ke order ke baare mein shikayat darj karni hai.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure, sir. Can you give me an order number, please?", native: 'Zaroor sir. Kya aap mujhe ek order number de sakte hain?', correct: true, feedback: "Bahut accha — 'an order' (vowel sound). Yahi natural English hai." },
          { target: "Sure, sir. Can you give me a order number, please?", native: 'Zaroor sir. Kya aap mujhe ek order number de sakte hain?', correct: false, feedback: "'Order' starts with O (vowel sound) — 'an order', 'a order' nahi." },
          { target: "Sure, sir. Can you give me order number, please?", native: 'Zaroor sir. Kya aap mujhe order number de sakte hain?', correct: false, feedback: "Article chhodna common Indian English galti hai. Client ko awkward lagega — 'an order number' lagao." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. 'A' aur 'an' — yeh chhota sa article aapki English ko BPO-quality se native-quality bana deta hai. Ek hi rule — pehle sound suno.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'A book (English mein)', correct: ['A book', 'a book'] },
      { prompt: 'An email (English mein)', correct: ['An email', 'an email'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Apne aas-paas ki 5 cheezein dekhiye. Har ek ko English mein boliye: 'a chair', 'a phone', 'an orange', 'an umbrella'. Dhyan dijiye 'a' ya 'an' kab aata hai.",
    rwenSignoff: "Shuruwat mushkil hoti hai — par aapne shuru kar diya. Kal aage badhenge.",
  },

  phase8: {
    scenario: "BPO call — aap ek US customer se baat kar rahe hain jo product order karna chahta hai. Aapko 'a' aur 'an' sahi tareeke se istemaal karna hai jab aap items aur details discuss karein.",
    rwenRole: "US-based customer, polite but particular about clear communication. Order place kar raha hai aur details maang raha hai.",
    successCriteria: "User uses 'a' and 'an' correctly before at least four nouns (e.g. 'a confirmation', 'an order', 'a tracking number', 'an email') without dropping articles in their replies.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
