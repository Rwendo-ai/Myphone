import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi, pamberi pemashoko mazhinji unofanira kuisa 'a' kana 'an'. ChiShona hachina izvi — asi ChiNgezi chinozvida.",
    culturalNote: "ChiShona haina mashoko anodaidzwa kuti 'articles' (a/an/the). Tinongoti 'bhuku' — kwete 'a bhuku'. Asi muChiNgezi, kana uchitaura nezvechinhu chimwe chete chausina kunyatsotsanangura, unofanira kuisa 'a' kana 'an' pamberi pacho. Wadii uchifunga kuti 'a/an' inonzwika seprefix yeChiNgezi — yakangofanana neava ma- prefix muChiShona.",
  },

  chunks: [
    {
      id: 'a_book',
      target: 'A book',
      native: 'Bhuku',
      literal: '(one/some) book',
      emoji: '📕',
      phonetic: 'uh-BUK',
      audioRef: null,
    },
    {
      id: 'an_apple',
      target: 'An apple',
      native: 'Apuro',
      literal: '(one/some) apple — "an" before vowel sound',
      emoji: '🍎',
      phonetic: 'an-AP-ul',
      audioRef: null,
    },
    {
      id: 'a_house',
      target: 'A house',
      native: 'Imba',
      literal: '(one/some) house',
      emoji: '🏠',
      phonetic: 'uh-HOWS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Indefinite articles: 'a' and 'an'",
    explanation: "Shandisa 'a' pamberi peshoko rinotanga nemubvumira (consonant). Shandisa 'an' pamberi peshoko rinotanga nemuruzhinji (vowel sound: a, e, i, o, u). Munhu wese anenge achitsvaga ruzha rwekutanga — kwete chinyorwa.",
    examples: [
      { target: 'A book',     native: 'Bhuku (rimwe chete)' },
      { target: 'An apple',   native: 'Apuro (rimwe chete)' },
      { target: 'An hour',    native: 'Awa (rimwe) — "h" haisi kunzwika, saka "an"' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Sarudza 'a' kana 'an'",
      sentence: 'I want _____ apple.',
      options: ['a', 'an', 'the'],
      correct: 'an',
      context: 'Apple inotanga ne-A (vowel) — saka "an".',
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'a' kana 'an'",
      sentence: 'She has _____ book.',
      options: ['a', 'an', 'no article'],
      correct: 'a',
      context: 'Book inotanga ne-B (consonant) — saka "a".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Apuro (chimwe chete)',
      correct: ['An apple', 'an apple'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "I have a friend"',
      words: ['friend.', 'have', 'I', 'a'],
      correct: ['I', 'have', 'a', 'friend.'],
      translation: 'Ndine shamwari',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndeipi inonyatsoshanda?',
      question: 'I saw _____ elephant at the zoo.',
      options: [
        { text: 'an elephant', correct: true },
        { text: 'a elephant', correct: false },
        { text: 'elephant', correct: false },
      ],
      explanation: "'Elephant' inotanga ne-E (vowel) — saka 'an'. Uye muChiNgezi tinoda 'a/an' pamberi pemashoko emhando iyi.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Imba (imwe chete)',
      correct: ['A house', 'a house'],
    },
  ],

  rwenDialogue: {
    intro: "Uri kuhotera yeKuMutare. Wapinda muresturent yekuita breakfast. Watering kunyora oda yako muChiNgezi.",
    lines: [
      {
        speaker: 'npc',
        target: "Good morning! What can I get you?",
        native: 'Mangwanani! Mungade chii?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a coffee and an apple, please.", native: 'Ndingade kofi neapuro, ndapota.', correct: true, feedback: "Zvakanaka chaizvo — 'a coffee' (consonant), 'an apple' (vowel). Wakwanisa." },
          { target: "I'd like a coffee and a apple, please.", native: 'Ndingade kofi neapuro, ndapota.', correct: false, feedback: "Tarisa zvakare — 'apple' inotanga ne-A. Saka 'an apple', kwete 'a apple'." },
          { target: "I'd like coffee and apple, please.", native: 'Ndingade kofi neapuro, ndapota.', correct: false, feedback: "MuChiNgezi unoda 'a' kana 'an' pamberi pemashoko aya — chero zvazvinoita kunge zvisina basa." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'A' nemukati 'an' — chinhu chimwe chete chinongoshanda zvisiyana zvichienderana neruzha rwekutanga.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'A book (in English)', correct: ['A book', 'a book'] },
      { prompt: 'An apple (in English)', correct: ['An apple', 'an apple'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tarisa zvinhu 5 zvauri kuona iye zvino. Tora chimwe nechimwe — chiti muChiNgezi: 'a chair', 'a phone', 'an orange'... Cherechedza kuti 'a' kana 'an' inozoshanda.",
    rwenSignoff: "Kutanga kwakaoma — asi watanga. Mangwana tinoenderera mberi.",
  },

  phase8: {
    scenario: "Kuoda breakfast pahotera muHarare. Uri kushandisa 'a' uye 'an' nemashoko ekudya.",
    rwenRole: "Waiter wepa-restaurant, ane tsika, anotaura ChiNgezi chete uye anokurudzira kuti utaure zvakajeka.",
    successCriteria: "Mudzidzi anoshandisa 'a' uye 'an' zvakanaka pamberi pemashoko anoenderana — semuenzaniso 'a coffee', 'an apple', 'a sandwich', 'an orange'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
