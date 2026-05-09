import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09',
  module: 3,
  lesson: 9,
  title: 'How old are you?',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Asking someone's age in isiNdebele is a real question — not the awkward English version. Elders are proud of their years. Children are proud of theirs. The question is 'Uneminyaka emingaki?' — literally 'how many years do you have?'.",
    culturalNote: "In Matabeleland, asking an elder's age is a sign of respect, not intrusion. The answer often opens into a longer story — where they grew up, when they came to Bulawayo, the year of a remembered drought. Ask the question, then have the patience to listen to the story it might unlock.",
  },

  chunks: [
    {
      id: 'uneminyaka_emingaki',
      target: 'Uneminyaka emingaki?',
      native: 'How old are you?',
      literal: 'You-have years how-many?',
      emoji: '🎂',
      phonetic: 'oo-neh-meen-YAH-kah eh-meen-GAH-kee',
      audioRef: null,
    },
    {
      id: 'ngileminyaka',
      target: 'Ngileminyaka...',
      native: 'I am ... years old',
      literal: 'I-have years...',
      emoji: '👤',
      phonetic: 'ngee-leh-meen-YAH-kah',
      audioRef: null,
    },
    {
      id: 'ngile_30',
      target: 'Ngileminyaka engamatshumi amathathu',
      native: 'I am 30 years old',
      literal: 'I-have years three-tens',
      emoji: '3️⃣0️⃣',
      phonetic: 'ngee-leh-meen-YAH-kah en-gah-mah-CHOO-mee ah-mah-TAH-too',
      audioRef: null,
    },
    {
      id: 'ngile_25',
      target: 'Ngileminyaka engamatshumi amabili lokuhlanu',
      native: 'I am 25 years old',
      literal: 'I-have years two-tens and-five',
      emoji: '2️⃣5️⃣',
      phonetic: 'ngee-leh-meen-YAH-kah en-gah-mah-CHOO-mee ah-mah-BEE-lee loh-koo-SHLAH-noo',
      audioRef: null,
    },
    {
      id: 'kanjani_uphilile',
      target: 'Kanjani, uphilile?',
      native: 'How are things, are you well?',
      literal: 'How, you-are-well?',
      emoji: '🙂',
      phonetic: 'kahn-JAH-nee oo-pee-LEE-leh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'iminyaka — years, and how to count them',
    explanation: "'Iminyaka' means 'years' (singular: umnyaka). To say someone has years, you use 'u-ne-' (you-with) for 'you', or 'ngi-le-' (I-with) for 'I'. Then comes the number — and here noun-class concord kicks in again. Years (iminyaka) belong to a class that takes 'e-' on its modifiers, so 'two' shifts: kubili → emibili, kuthathu → emithathu, kune → emine, kuhlanu → emihlanu. For tens, you say 'engamatshumi amabili' (of two tens = 20). Don't memorise every form yet — for now, recognise the pattern and use the counting form ('ngileminyaka 30') in casual speech, which everyone understands.",
    examples: [
      { target: 'Uneminyaka emingaki?', native: 'How old are you?' },
      { target: 'Ngileminyaka engamatshumi amabili', native: 'I am 20' },
      { target: 'Ngileminyaka engamatshumi amane lokuhlanu', native: 'I am 45' },
      { target: 'Uneminyaka emine', native: 'You are 4 (to a child)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Uneminyaka emingaki?', right: 'How old are you?' },
        { left: 'Ngileminyaka...', right: 'I am ... years old' },
        { left: 'iminyaka', right: 'years' },
        { left: 'umnyaka', right: 'a year (singular)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'How old are you?',
      correct: ['Uneminyaka emingaki?', 'Uneminyaka emingaki', 'uneminyaka emingaki?', 'uneminyaka emingaki'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I am 30 years old" (using the agreement form)',
      sentence: 'Ngileminyaka _____ amatshumi amathathu',
      options: ['enga', 'kunye', 'lwesi'],
      correct: 'enga',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why does 'two' look different in 'iminyaka emibili' (two years) versus 'amatshumi amabili' (two tens)?",
      options: [
        { text: "Concord — 'iminyaka' (years) and 'amatshumi' (tens) belong to different noun classes, so the prefix on 'two' shifts to match each one.", correct: true },
        { text: "It's a typo — both should be 'emibili'.", correct: false },
        { text: "'Bili' is irregular and changes randomly.", correct: false },
      ],
      explanation: "Class agreement is everywhere in isiNdebele. The number two is the same root '-bili' — the prefix in front of it (em-, ama-, ku-) is what tells you which noun class it is matching.",
    },
  ],

  rwenDialogue: {
    intro: "You're sitting with an elder, Gogo MaSibanda, on her stoep in Mzilikazi suburb. She is 78 and curious about you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uneminyaka emingaki, mntwana?',
        native: 'How old are you, child?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngileminyaka engamatshumi amathathu', native: 'I am 30', correct: true, feedback: "Clean answer with correct concord. She nods — 'still young'." },
          { target: 'Itshumi', native: 'Ten', correct: false, feedback: "Probably not — and Gogo will laugh, not be offended. The structure she wants is 'Ngileminyaka...' followed by your age." },
          { target: 'Lamhla', native: 'Today', correct: false, feedback: "She asked your age, not the day. Try 'Ngileminyaka...' plus a number." },
        ],
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wena, uneminyaka emingaki, gogo?', native: 'And you, how old are you, granny?', correct: true, feedback: "Returning the question is the polite move with elders — and 'gogo' is the warm form for grandmother." },
          { target: 'Ngiyahamba', native: 'I am leaving', correct: false, feedback: "Great verb but the wrong moment — keep the conversation going by asking back." },
          { target: 'Ngabe lithini iwashi?', native: 'What time is it?', correct: false, feedback: "Steers her away from the topic she opened. Better to return her question — ask her age." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ngileminyaka engamatshumi ayisikhombisa lesishiyangalombili — amatshumi ayisikhombisa lesishiyangalombili. Ngiyaphila, ngiyabonga.',
        native: "I am seventy-eight. I'm well, thank you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You asked, you listened, you asked back. That's the rhythm of every good conversation with an elder here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you?', correct: ['Uneminyaka emingaki?', 'Uneminyaka emingaki', 'uneminyaka emingaki?'] },
      { prompt: 'I am ... years old (start of the answer)', correct: ['Ngileminyaka', 'ngileminyaka', 'Ngileminyaka...'] },
      { prompt: 'years (plural noun)', correct: ['iminyaka', 'Iminyaka'] },
    ],
  },

  mission: {
    title: 'Ask three people their age',
    task: "Today, ask one elder, one peer, and one child their age in isiNdebele — out loud, even if just rehearsing in front of a mirror. Then say your own. The repetition is what cements the long answer.",
    rwenSignoff: "Years are stories. Ask the question and the stories arrive.",
  },

  phase8: {
    scenario: "Rwen plays Gogo MaSibanda, an elder in Mzilikazi suburb of Bulawayo. She asks how old you are, then a follow-up question about where you're from and why you're learning isiNdebele. You answer with your age in the proper form, then return the question to her.",
    rwenRole: "Gogo MaSibanda, ~78, retired teacher — patient, will gently correct your concord if you mix it up but enjoys hearing learners try",
    successCriteria: "User answered 'Uneminyaka emingaki?' with a coherent 'Ngileminyaka...' answer including a number, and returned the question to Gogo with 'Wena, uneminyaka emingaki?' or similar respectful form.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
