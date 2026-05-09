import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07',
  module: 2,
  lesson: 7,
  title: 'Umama, ubaba, indodana, indodakazi — Family core',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Family words punch above their weight in Ndebele. 'Umama' (mother), 'Ubaba' (father), 'Indodana' (son), 'Indodakazi' (daughter). And here's the cultural twist — these aren't just for your blood family. 'Mama' and 'Tata' are how you address ANY older woman or man you don't personally know. It's respect by adoption.",
    culturalNote: "If you're a 30-year-old foreigner and a woman in her 60s helps you at the post office, the respectful way to thank her is 'Ngiyabonga, mama'. A man the same age is 'tata' (older man — Shona-influenced but widely used in Zimbabwe). It's not pretending she's your mother — it's recognising her age and dignity. Try it and watch faces soften.",
  },

  chunks: [
    {
      id: 'umama',
      target: 'umama',
      native: 'mother / older woman (respectful)',
      literal: 'mother — also used to address older women generally',
      emoji: '👩',
      phonetic: 'oo-MAH-mah',
      audioRef: null,
    },
    {
      id: 'ubaba',
      target: 'ubaba',
      native: 'father / older man (respectful)',
      literal: 'father — also used for older men generally',
      emoji: '👨',
      phonetic: 'oo-BAH-bah',
      audioRef: null,
    },
    {
      id: 'indodana',
      target: 'indodana',
      native: 'son',
      literal: 'man-child / son',
      emoji: '👦',
      phonetic: 'een-doh-DAH-nah',
      audioRef: null,
    },
    {
      id: 'indodakazi',
      target: 'indodakazi',
      native: 'daughter',
      literal: 'female-man-child / daughter',
      emoji: '👧',
      phonetic: 'een-doh-dah-KAH-zee',
      audioRef: null,
    },
    {
      id: 'umfowethu_udadewethu',
      target: 'umfowethu / udadewethu',
      native: 'my brother / my sister',
      literal: 'brother-of-ours / sister-of-ours',
      emoji: '👫',
      phonetic: 'oom-foh-WEH-too / oo-dah-deh-WEH-too',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family terms as respect-by-age',
    explanation: "Ndebele family words have two layers. Layer one — literal: 'umama' is your mother. Layer two — generalised: 'mama' (often dropped 'u-' in address) is what you call ANY woman a generation older. Same for 'tata'/'ubaba' (older man). Calling an older stranger 'mama' or 'tata' is the equivalent of 'ma'am' or 'sir' but warmer. Skipping the age-respect address sounds curt.",
    examples: [
      { target: 'Umama wami', native: 'My mother' },
      { target: 'Ngiyabonga, mama.', native: 'Thank you (older woman you don\'t know).' },
      { target: 'Indodana yami', native: 'My son' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'umama', right: 'mother / older woman' },
        { left: 'ubaba', right: 'father / older man' },
        { left: 'indodana', right: 'son' },
        { left: 'indodakazi', right: 'daughter' },
        { left: 'umfowethu', right: 'my brother' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A woman in her 60s at the post office helps you find the right form. How do you thank her?',
      question: 'Pick the warmest fit',
      options: [
        { text: 'Ngiyabonga, mama.', correct: true },
        { text: 'Ngiyabonga, mngane.', correct: false },
        { text: 'Hatshi.', correct: false },
      ],
      explanation: "'Mama' addresses her age and dignity — 'mngane' (friend) is for peers and would feel oddly familiar. 'Hatshi' is just 'no'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My son is fine"',
      words: ['yami', 'Indodana', 'iyaphila'],
      correct: ['Indodana', 'yami', 'iyaphila'],
      translation: 'My son is fine.',
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'Thank you, sir / older man',
      correct: ['Ngiyabonga, baba', 'Ngiyabonga baba', 'ngiyabonga baba', 'ngiyabonga, baba', 'Ngiyabonga, tata', 'ngiyabonga, tata'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small post office. The woman behind the counter is in her 60s. She just spent five minutes helping you understand a parcel form in English. You're closing the interaction.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga kakhulu, mama.', native: 'Thank you very much, mama.', correct: true, feedback: "She nearly laughs with delight. The 'mama' is the small detail that makes the thanks feel personal." },
          { target: 'Ngiyabonga.', native: 'Thank you.', correct: false, feedback: "Polite, but generic. Adding 'mama' would have warmed it considerably given her age and the time she spent." },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: "She wasn't asking a yes/no question. 'Yes' here is awkward." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Akula nkinga, ndodana yami.',
        native: 'No problem, my son.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '(smile, leave warmly)', native: '(no further reply needed)', correct: true, feedback: "She just called you 'ndodana yami' — my son. That's full adoption-by-respect. Smile and go." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "She didn't ask anything. 'Hatshi' here would confuse her." },
          { target: 'Igama lami nguBowen.', native: 'My name is Bowen.', correct: false, feedback: "Already past introductions. The interaction is closing — let it close." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "She called you 'ndodana yami' — my son. That's the cultural mirror: respect-by-age goes both directions. You called her mama, she called you son.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother / older woman', correct: ['umama', 'mama'] },
      { prompt: 'Father / older man', correct: ['ubaba', 'baba', 'tata'] },
      { prompt: 'Daughter', correct: ['indodakazi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, address one older stranger as 'mama' or 'tata' / 'baba'. Could be the cashier, a kombi driver, anyone over fifty. Watch what happens. Most people will pause for a half-second and warm visibly.",
    rwenSignoff: "Family words are respect words here. Use them on strangers and watch the room change. Sala kuhle.",
  },

  phase8: {
    scenario: "You're at a busy supermarket checkout in Bulawayo. The cashier is a woman in her late 50s; behind her, a security guard in his 60s. You forgot to weigh your tomatoes. The cashier helps you fix it; the guard holds your basket while you run back. Thank them both at the end.",
    rwenRole: "Mama Khumalo (cashier, 58, kind, mildly amused by foreigners who try Ndebele) and Baba Moyo (guard, 65, quiet, will nod approvingly if addressed correctly).",
    successCriteria: "User addresses the cashier as 'mama' (e.g. 'Ngiyabonga kakhulu, mama') and the guard as 'baba' or 'tata' — NOT generic thanks. Bonus if the user uses 'mama' early in the interaction, not just at the close.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
