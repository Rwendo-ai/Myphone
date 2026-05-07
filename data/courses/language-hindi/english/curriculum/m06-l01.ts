import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-ek-paanch',
  module: 6,
  lesson: 1,
  title: 'Ek se Paanch — Numbers 1 to 5',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brace yourself. Hindi numbers are not like English, Spanish, or French — there is no clean pattern. Every single number 1 to 100 is its own word. Twenty-three is not 'twenty-three'; it's 'teiis' — a unique sound. Today we start with the first five — the easiest five you will ever learn in this language.",
    culturalNote: "Indian markets, autos, trains, mithai shops, chai stalls — they all run on numbers shouted across crowds. Even five numbers will pull you into the rhythm of daily India. And once you can count to five in Hindi, you can already order chai (एक चाय — ek chai) like you belong.",
  },

  chunks: [
    {
      id: 'ek_do_teen',
      target: 'एक / दो / तीन',
      native: 'One / Two / Three',
      literal: 'Ek (1), Do (2), Teen (3)',
      emoji: '1️⃣2️⃣3️⃣',
      phonetic: 'EYK / DOH / TEEN',
      audioRef: null,
    },
    {
      id: 'chaar_paanch',
      target: 'चार / पाँच',
      native: 'Four / Five',
      literal: 'Chaar (4), Paanch (5 — nasal)',
      emoji: '4️⃣5️⃣',
      phonetic: 'CHAAR / PAANCH',
      audioRef: null,
    },
    {
      id: 'kitne',
      target: 'कितने?',
      native: 'How many?',
      literal: 'Kitne — how-many (used with countable nouns)',
      emoji: '❓',
      phonetic: 'KIT-nay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ek, Do, Teen, Chaar, Paanch — five unique words',
    explanation: "Unlike Spanish 'uno-dos-tres' which scaffolds into 'veintiuno-veintidos', Hindi gives each number its own non-derivable name. Lock these five in by sound: ek (eyk), do (doh), teen (teen — like the English word!), chaar (chaar), paanch (PAANCH — nasal n). 'Kitne?' asks 'how many?'.",
    examples: [
      { target: 'Ek chai, please.', native: 'One chai, please.' },
      { target: 'Do samose.', native: 'Two samosas.' },
      { target: 'Kitne log hain?', native: 'How many people are there?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi number to its meaning',
      pairs: [
        { left: 'Ek', right: 'One' },
        { left: 'Teen', right: 'Three' },
        { left: 'Paanch', right: 'Five' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the count',
      sentence: 'Ek, do, teen, chaar, _____.',
      options: ['paanch', 'chhe', 'das'],
      correct: 'paanch',
      context: 'Counting from one to five.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Three',
      correct: ['Teen', 'teen'],
    },
    {
      type: 'multiple_choice',
      instruction: "You walk up to a chai stall. How do you order one chai?",
      question: 'One chai, please:',
      options: [
        { text: 'Ek chai, please', correct: true },
        { text: 'Do chai, please', correct: false },
        { text: 'Paanch chai, please', correct: false },
      ],
      explanation: "'Ek' = one. 'Ek chai' is how you'll order chai for the rest of your life in India.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I want two samosas'",
      words: ['Mujhe', 'do', 'samose', 'chahiye.'],
      correct: ['Mujhe', 'do', 'samose', 'chahiye.'],
      translation: 'I want two samosas',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How many?',
      correct: ['Kitne?', 'kitne?', 'Kitne', 'kitne'],
    },
  ],

  rwenDialogue: {
    intro: "It's 7am at a Mumbai chai stall. The chaiwala looks up. Order for yourself and a friend.",
    lines: [
      {
        speaker: 'npc',
        target: 'क्या चाहिए?',
        native: 'What do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Do chai, please.', native: 'Two chais, please.', correct: true, feedback: "Perfect — number + noun + please. Chaiwala already pouring." },
          { target: 'Chai', native: 'Chai (no quantity)', correct: false, feedback: "Add the number — 'Do chai, please' — two chais, please." },
          { target: 'Paanch', native: 'Five (just a number)', correct: false, feedback: "Wrap it in a sentence — 'Paanch chai, please' — five chais, please." },
        ],
      },
      {
        speaker: 'npc',
        target: 'दस रुपये।',
        native: 'Ten rupees.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Do chai. You ordered in Hindi at 7am like you've done it a thousand times. Welcome to morning India.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Five', correct: ['Paanch', 'paanch'] },
      { prompt: 'How many?', correct: ['Kitne?', 'kitne?', 'Kitne', 'kitne'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count five things around you out loud in Hindi: ek, do, teen, chaar, paanch. Tap each one. Feel the rhythm — it's nothing like English.",
    rwenSignoff: "Five down. Ninety-five to go. Phir milte hain — see you next time.",
  },

  phase8: {
    scenario: "Early morning at a chai stall just outside Churchgate Station in Mumbai. You're meeting a friend for the first time and you both need chai before the meeting starts in 10 minutes — order for two of you, then negotiate a quick add-on of biscuits using only Hindi numbers 1–5 and 'Kitne?'.",
    rwenRole: "Chaiwala at a Churchgate corner stall, late 40s, in a hurry because the office crowd is forming behind you; he'll happily switch to English if you stumble, so you have to stay in Hindi to keep the rapport going.",
    successCriteria: "User uses ek/do/teen/chaar/paanch correctly with countable nouns (e.g. 'do chai', 'paanch biscuit'), asks 'Kitne?' to clarify quantity-per-rupee, and lands on a final order in a full sentence rather than a bare number — and stays out of English digits even when the chaiwala says the rupee total.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
