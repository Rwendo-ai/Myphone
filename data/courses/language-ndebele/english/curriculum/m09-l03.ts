import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03',
  module: 9,
  lesson: 3,
  title: 'izithakazelo — clan praise names',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Every Ndebele person carries two surnames. The one on their ID — Khumalo, Ndlovu, Sibanda — and the one whispered to them at funerals, weddings, and when they greet an in-law. Those are izithakazelo. Their clan-praise names. To know someone's isithakazelo is to know who their grandfathers were.",
    culturalNote: "Izithakazelo (singular: isithakazelo) are clan-praise lineages. Every surname has one — a string of ancestral names and poetic epithets that you recite when you greet someone formally, when you thank them, when they help you, or when you announce yourself at an in-law's home. Saying 'Ngiyabonga, Khumalo!' (Thank you, Khumalo) is fine for everyday. But at a wedding or to honour someone deeply, you call them by the long form. The Khumalo izithakazelo include 'Mntungwa', 'Mbulazi'. uMzilikazi himself was a Khumalo — that is the royal clan of uMthwakazi.",
  },

  chunks: [
    {
      id: 'isithakazelo',
      target: 'isithakazelo',
      native: 'a clan praise-name (singular)',
      literal: 'isi- (class noun) + thakazelo (praise / clan recital)',
      emoji: '📜',
      phonetic: 'ee-see-tah-kah-ZEH-loh',
      audioRef: null,
    },
    {
      id: 'izithakazelo',
      target: 'izithakazelo',
      native: 'clan praise-names (plural)',
      literal: 'izi- (plural class) + thakazelo',
      emoji: '🪶',
      phonetic: 'ee-zee-tah-kah-ZEH-loh',
      audioRef: null,
    },
    {
      id: 'khumalo',
      target: 'Khumalo, Mntungwa, Mbulazi',
      native: 'Khumalo clan — royal Ndebele lineage (uMzilikazi was Khumalo)',
      literal: "praise opening: 'Khumalo of the Mntungwa clan, Mbulazi'",
      emoji: '👑',
      phonetic: 'koo-MAH-loh, m-TOON-gwah, m-boo-LAH-zee',
      audioRef: null,
    },
    {
      id: 'ndiweni',
      target: 'Ndiweni, Mafu, Donga',
      native: 'Ndiweni clan praise',
      literal: "praise opening: 'Ndiweni, of the clouds (Mafu), of the riverbed (Donga)'",
      emoji: '☁️',
      phonetic: 'ndee-WEH-nee, MAH-foo, DON-gah',
      audioRef: null,
    },
    {
      id: 'ncube',
      target: 'Ncube, Mahlathini, Zwide',
      native: 'Ncube clan praise',
      literal: "praise opening: 'Ncube, of the deep bush (Mahlathini), of Zwide'",
      emoji: '🌳',
      phonetic: 'n-COO-beh, mah-tlah-TEE-nee, ZWEE-deh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Praise as greeting, praise as thanks',
    explanation: "An isithakazelo is used three ways: (1) as a respectful address — 'Sawubona, Khumalo' replaces using a person's first name; (2) as enhanced thanks — 'Ngiyabonga, Ndiweni!' lands warmer than just 'thank you'; (3) as self-introduction at formal events — you recite your own clan opening so the family knows who they are receiving. Using someone's clan name correctly is one of the fastest ways to be seen as a Ndebele speaker rather than a Ndebele student.",
    examples: [
      { target: 'Sawubona, Khumalo.', native: 'Hello, Khumalo (using clan name as respect).' },
      { target: 'Ngiyabonga kakhulu, Ndiweni!', native: 'Thank you very much, Ndiweni!' },
      { target: 'NgingowakwaNcube.', native: 'I am of the Ncube house / clan.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match clan to one of its izithakazelo opening names',
      pairs: [
        { left: 'Khumalo', right: 'Mntungwa / Mbulazi (royal Ndebele clan)' },
        { left: 'Ndiweni', right: 'Mafu / Donga' },
        { left: 'Ncube', right: 'Mahlathini / Zwide' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'History check',
      question: 'Why is the Khumalo clan especially significant in uMthwakazi?',
      options: [
        { text: 'uMzilikazi kaMatshobana, the founding king of the Ndebele nation, was a Khumalo. It is the royal clan.', correct: true },
        { text: 'Khumalo is the most common Ndebele surname.', correct: false },
        { text: 'Khumalos historically lived only in cities.', correct: false },
      ],
      explanation: "uMzilikazi was Khumalo, son of Matshobana. His son uLobengula — the last Ndebele king — was also Khumalo. To greet a Khumalo with their full clan praise is to acknowledge royal lineage.",
    },
    {
      type: 'multiple_choice',
      instruction: 'When to use it',
      question: 'A neighbour, Mr Sibanda, helps you fix a flat tyre. The most warmly Ndebele way to thank him is:',
      options: [
        { text: 'Ngiyabonga kakhulu, Sibanda!', correct: true },
        { text: 'Thank you, sir.', correct: false },
        { text: 'OK, bye.', correct: false },
      ],
      explanation: "Calling him 'Sibanda' (his clan name) instead of 'Mr Sibanda' or just 'sir' is warmer and more rooted. It says: I see you as part of your lineage, not just as a stranger who helped.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'Thank you very much, Khumalo!',
      correct: ['Ngiyabonga kakhulu, Khumalo!', 'Ngiyabonga kakhulu Khumalo', 'Ngiyabonga kakhulu, Khumalo'],
    },
  ],

  rwenDialogue: {
    intro: "You are at a small lobola gathering. The senior aunt of the host family asks you to introduce yourself by clan, the formal way.",
    lines: [
      { speaker: 'rwen', rwenLine: "You don't have a Ndebele clan name. That's fine. The respectful move is to name where you are from and why you are honoured to be here." },
      { speaker: 'npc', target: 'Uthini, mngane?', native: 'Speak — who are you, friend?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngivela e[country]. Ngiyabonga ukungimukela, Khumalo.', native: "I'm from [country]. Thank you for receiving me, Khumalo.", correct: true, feedback: "She nods and replies 'Sikwamukela, mngane' — we welcome you, friend. Using 'Khumalo' as her clan address was the correct move." },
          { target: 'Hello.', native: 'Hello (English).', correct: false, feedback: "She'll be polite — but at a lobola gathering you have just announced you didn't bring your culture-radar. Try the long form next time." },
          { target: 'NgingowakwaKhumalo.', native: 'I am of the Khumalo house.', correct: false, feedback: "Don't claim a clan that isn't yours. People will be amused but uncomfortable. Stay with where you actually come from." },
        ],
      },
      { speaker: 'npc', target: 'Sikwamukela, mngane.', native: 'We welcome you, friend.' },
      { speaker: 'rwen', rwenLine: "izithakazelo are gifts you give to other people, not costumes you put on. You named her clan correctly. That's the move." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'A clan praise-name (singular)', correct: ['isithakazelo', 'Isithakazelo'] },
      { prompt: 'Clan praise-names (plural)', correct: ['izithakazelo', 'Izithakazelo'] },
      { prompt: 'Which clan was the royal Ndebele line (uMzilikazi, uLobengula)?', correct: ['Khumalo', 'khumalo', 'kwaKhumalo'] },
      { prompt: 'Thank you very much, Khumalo!', correct: ['Ngiyabonga kakhulu, Khumalo!', 'Ngiyabonga kakhulu Khumalo', 'Ngiyabonga kakhulu, Khumalo'] },
    ],
  },

  mission: {
    title: "Learn one izithakazelo by heart",
    task: "Pick a Ndebele person you know — colleague, friend, neighbour. Find their izithakazelo (Google their surname + 'izithakazelo' — there are many resources). Memorise the first three names. The next time you see them, greet them with their full clan opening. Watch what happens.",
    rwenSignoff: "A clan name is a doorway. When you knock with the right one, the whole house opens. Sala kuhle, mfowethu.",
  },

  phase8: {
    scenario: "You meet your colleague's father — Baba Khumalo — for the first time at a small home gathering. He is in his 60s, retired teacher, very Ndebele-rooted. You want to greet him with his clan praise correctly and show you've been learning the deeper layer of the language.",
    rwenRole: "Baba Khumalo — retired schoolteacher, kind, traditionally raised, will warm up enormously if you address him by clan name correctly and will gently teach if you don't. Knows uMzilikazi was his ancestor and is quietly proud of it.",
    successCriteria: "User addresses him at least once as 'Khumalo' (or 'Baba Khumalo') in greeting or thanks, and recognises in conversation that the Khumalo clan is the royal Ndebele lineage. Bonus if they ask about his izithakazelo respectfully.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
