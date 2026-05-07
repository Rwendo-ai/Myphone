import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-hablo',
  module: 3,
  lesson: 6,
  title: 'Hablo — Languages I Speak',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two verbs you'll use forever: 'hablar' (to speak) and 'entender' (to understand). They are NOT the same. 'Hablo español' means I produce Spanish out of my mouth. 'Entiendo español' means I understand it when others speak. Real beginners often understand way more than they can produce — and there's a Spanish phrase for exactly that gap.",
    culturalNote: "In Latin America and Spain, languages are NOT capitalised — 'español', 'inglés', 'francés' all lowercase. English speakers want to capitalise them out of habit. Resist. Same goes for nationalities and days of the week. Capitals are for proper names only — 'México', 'María' — not for adjectives.",
  },

  chunks: [
    {
      id: 'hablo',
      target: 'Hablo...',
      native: 'I speak...',
      literal: 'I-speak...',
      emoji: '🗣️',
      phonetic: 'AH-blo',
      audioRef: null,
    },
    {
      id: 'entiendo',
      target: 'Entiendo un poco',
      native: 'I understand a little',
      literal: 'I-understand a little',
      emoji: '👂',
      phonetic: 'en-TYEN-doh oon POH-koh',
      audioRef: null,
    },
    {
      id: 'que_idiomas',
      target: '¿Qué idiomas hablas?',
      native: 'What languages do you speak?',
      literal: 'What languages you-speak?',
      emoji: '🌐',
      phonetic: 'keh ee-DYO-mas AH-blas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hablar (speak) vs Entender (understand)',
    explanation: "These two verbs cover totally different skills. Beginners almost always 'entiendo más de lo que hablo' (understand more than I speak). 'Hablo inglés y un poco de español' is a complete honest answer for most learners on day one. Both verbs end in -o for the 'I' form, easy to remember.",
    examples: [
      { target: 'Hablo inglés', native: 'I speak English' },
      { target: 'Entiendo un poco de español', native: 'I understand a little Spanish' },
      { target: 'Hablo inglés y entiendo español', native: 'I speak English and understand Spanish' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Hablo...', right: 'I speak...' },
        { left: 'Entiendo un poco', right: 'I understand a little' },
        { left: '¿Qué idiomas hablas?', right: 'What languages do you speak?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb — for understanding only, not speaking',
      sentence: '_____ un poco de español.',
      options: ['Entiendo', 'Hablo', 'Tengo'],
      correct: 'Entiendo',
      context: 'You can follow Spanish but you don\'t produce it well yet — that\'s entender, not hablar.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (lowercase the language!)',
      prompt: 'I speak English',
      correct: ['Hablo inglés', 'hablo inglés', 'Hablo ingles', 'hablo ingles'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence is correctly capitalised in Spanish?",
      question: 'Pick the right one',
      options: [
        { text: 'Hablo español y un poco de francés.', correct: true },
        { text: 'Hablo Español y un poco de Francés.', correct: false },
        { text: 'hablo Español y un poco de francés.', correct: false },
      ],
      explanation: "Languages are lowercase in Spanish — 'español', 'francés'. Only the first word of the sentence and proper nouns get capitalised.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I speak English and a little Spanish"',
      words: ['un', 'español', 'inglés', 'y', 'Hablo', 'poco', 'de'],
      correct: ['Hablo', 'inglés', 'y', 'un', 'poco', 'de', 'español'],
      translation: 'I speak English and a little Spanish',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I understand a little (no specific language)',
      correct: ['Entiendo un poco', 'entiendo un poco'],
    },
  ],

  rwenDialogue: {
    intro: "The Mexican wedding from Lesson 1 — later that night. A cousin of the groom corners you near the buffet to ask if you actually speak Spanish or just nodded all evening.",
    lines: [
      {
        speaker: 'npc',
        target: 'Oye, ¿qué idiomas hablas? ¿Hablas español de verdad?',
        native: 'Hey, what languages do you speak? Do you really speak Spanish?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hablo inglés y entiendo un poco de español. Estoy aprendiendo.', native: 'I speak English and I understand a little Spanish. I\'m learning.', correct: true, feedback: "Honest split — what you produce vs what you understand. He nods and slows his Spanish for you. That's exactly what should happen." },
          { target: 'Hablo Español.', native: 'I speak Spanish (capitalised).', correct: false, feedback: "Two issues: lowercase 'español' in Spanish, and overstating — if you really only speak a little, say 'entiendo un poco' to set expectations." },
          { target: 'Sí, hablo español perfectamente.', native: 'Yes, I speak Spanish perfectly.', correct: false, feedback: "Don't oversell — most learners overstate and then crash. 'Hablo un poco' or 'entiendo más de lo que hablo' (understand more than I speak) is more useful and more accurate." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Está bien, te voy a hablar despacito. Yo hablo inglés y español, los dos.',
        native: 'No worries, I\'ll speak slowly. I speak English and Spanish, both.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice — when he listed his languages he said 'inglés y español', both lowercase. Ear training: from now on, languages live in lowercase.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I speak English (lowercase the language)', correct: ['Hablo inglés', 'hablo inglés', 'Hablo ingles', 'hablo ingles'] },
      { prompt: 'I understand a little', correct: ['Entiendo un poco', 'entiendo un poco'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "List the languages you actually speak — 'Hablo [language]' for the ones you produce, 'Entiendo [language]' for ones you only follow. Be honest about which is which.",
    rwenSignoff: "Speaking and understanding are two different superpowers. Yours, in Spanish. ¡Sigue así!",
  },

  phase8: {
    scenario: "Late at the Guadalajara wedding from Lesson 1. The groom's cousin starts a longer conversation and wants to know what languages you actually speak vs just understand.",
    rwenRole: "Carlos — groom's cousin, ~30, bilingual English-Spanish, code-switches naturally; will test how much Spanish you can really hold up before slowing down.",
    successCriteria: "User distinguishes 'Hablo [language]' (production) from 'Entiendo un poco de [language]' (comprehension), keeps language names lowercase ('español' not 'Español'), and uses 'un poco' to honestly downscale fluency claims. Doesn't oversell.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
