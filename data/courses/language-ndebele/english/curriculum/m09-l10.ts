import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10',
  module: 9,
  lesson: 10,
  title: 'Putting it together — a cultural conversation',
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "We've covered ubuntu, uMthwakazi, izithakazelo, lobola, ngoma, iziNyanga, iMbongi, the founding kings, and the layered relationship between uMlimu and amadlozi. This last lesson is not new vocabulary — it's the test of whether all nine concepts can sit in one conversation. Real Ndebele life never separates them. Today neither do you.",
    culturalNote: "Ndebele culture does not present itself one concept at a time the way a textbook does. At any actual gathering — a wedding, a memorial, a clan reunion — ubuntu, izithakazelo, ngoma, ancestors, lobola, history, and language are all in the room at once. A graduating cousin's celebration may include thanks to amadlozi, an iMbongi reciting Khumalo praises, an iSitshikitsha dance, a discussion of upcoming lobola for an aunt's daughter, and an elder reminding the children they are uMthwakazi. This lesson rehearses moving through that density. The only way to do it is to listen first, speak second, and trust that the people around you want you to get it right.",
  },

  chunks: [
    {
      id: 'sengiyazi',
      target: 'Sengiyazi',
      native: 'Now I understand / now I know',
      literal: 'se- (now) + ngi- (I) + ya- (present tense) + azi (know)',
      emoji: '💡',
      phonetic: 'sen-ghee-YAH-zee',
      audioRef: null,
    },
    {
      id: 'ngifunda',
      target: 'Ngifunda isiNdebele',
      native: 'I am learning isiNdebele',
      literal: 'ngi- (I) + funda (learn) + isiNdebele (the language)',
      emoji: '📚',
      phonetic: 'n-ghee-FOON-dah ee-seen-deh-BEH-leh',
      audioRef: null,
    },
    {
      id: 'ngiyaqonda',
      target: 'Ngiyaqonda',
      native: 'I understand',
      literal: 'ngi- (I) + ya- (present) + qonda (understand)',
      emoji: '✅',
      phonetic: 'n-ghee-yah-QON-dah',
      audioRef: null,
    },
    {
      id: 'sala_lobuntu',
      target: 'Sala lobuntu',
      native: 'Stay with ubuntu (a deep farewell)',
      literal: 'sala (stay) + lobuntu (with ubuntu) — used by elders, deeply respectful',
      emoji: '🌍',
      phonetic: 'SAH-lah loh-BOON-too',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Listening as Module 9 grammar',
    explanation: "There is no single grammatical pattern for this lesson. The pattern is behavioural: in a culturally dense conversation, you listen for the named concepts (ubuntu, lobola, amadlozi, izithakazelo) the way you'd listen for verbs in a sentence. When you hear one, you slow down. You ask. You don't bulldoze the moment with English. The Ndebele speakers around you are doing this constantly — switching registers between everyday talk and deep cultural reference — and they will appreciate any sign that you're tracking it.",
    examples: [
      { target: 'Sengiyazi.', native: 'Now I understand.' },
      { target: 'Ngiyaqonda, baba.', native: 'I understand, sir.' },
      { target: 'Ngifunda kancane kancane.', native: "I'm learning, slowly slowly." },
      { target: 'Sala lobuntu.', native: 'Stay with ubuntu (deep farewell).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Final review — match each Module 9 concept to its core meaning',
      pairs: [
        { left: 'ubuntu', right: 'humanity-through-others' },
        { left: 'uMthwakazi', right: 'the Ndebele nation / homeland' },
        { left: 'izithakazelo', right: 'clan praise names' },
        { left: 'lobola', right: 'bridewealth that joins two families' },
        { left: 'iMbongi', right: 'praise poet (royal accountability voice)' },
      ],
    },
    {
      type: 'match_pairs',
      instruction: 'And the second half',
      pairs: [
        { left: 'iNgoma', right: 'drum-song-dance as one event' },
        { left: 'iNyanga', right: 'traditional herbalist healer' },
        { left: 'uMzilikazi', right: 'founding king of uMthwakazi (1830s)' },
        { left: 'uLobengula', right: 'last Ndebele king (fell 1893–94)' },
        { left: 'amadlozi', right: 'the ancestors (family-dead)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural reading',
      question: 'You are at a Ndebele wedding. Within twenty minutes you have heard: an aunt scold someone for "akala buntu", an iMbongi recite Khumalo izibongo, the parents mention final lobola arrangements, and an elder thank the amadlozi during grace. What is happening?',
      options: [
        { text: "Module 9 is happening, all at once. This is just a normal Ndebele wedding. The concepts you've been learning are not separable in real life.", correct: true },
        { text: 'A particularly traditional wedding, unusual for the times.', correct: false },
        { text: 'A staged cultural performance for tourists.', correct: false },
      ],
      explanation: "Everyday Ndebele cultural life — at a wedding, a funeral, a graduation, a uMzilikazi Day commemoration — interleaves all of Module 9. That's why we taught it as one module. You won't encounter ubuntu and izithakazelo on different days. You'll encounter both in the same sentence.",
    },
    {
      type: 'multiple_choice',
      instruction: 'How to operate when you don\'t fully follow',
      question: "An elder is mid-anecdote and uses three concepts you only half-recognise. What is the right move?",
      options: [
        { text: "'Ngifunda. Ngingathathi izindaba ngithi ngiyazi.' — I'm learning, I won't pretend I know. Then ask one specific thing afterwards.", correct: true },
        { text: 'Pretend you understood and nod through it.', correct: false },
        { text: 'Interrupt them to clarify each word.', correct: false },
      ],
      explanation: "Honest learners get more cultural depth than fake fluent ones. Ndebele elders, in particular, will gladly slow down for someone who is genuinely listening — and will close down quickly for someone who is faking. Stay honest.",
    },
  ],

  rwenDialogue: {
    intro: "It is the end of a long Sunday family lunch in Cowdray Park. Gogo MaKhumalo, the matriarch, has been watching you all afternoon. She motions you to sit beside her on the bench under the avocado tree. This is the conversation you've been training for.",
    lines: [
      { speaker: 'rwen', rwenLine: "She is going to test all of Module 9 in one conversation. Don't panic. Just listen and stay honest." },
      { speaker: 'npc', target: 'Mntanami, ufundeni kithi?', native: 'My child, what have you learned from us?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngifundile ukuthi umuntu ngumuntu ngabantu, gogo.', native: 'I have learned that a person is a person through other people, grandmother.', correct: true, feedback: "Her face softens. She has been holding that proverb since she was your age. You named it back to her clean." },
          { target: 'Konke.', native: 'Everything.', correct: false, feedback: "She raises an eyebrow. 'Konke? Awusafundi-ke?' — Everything? So you're done learning? Be more honest." },
          { target: 'Ngifunda ngeNgoma kuphela.', native: 'I am only learning the dancing.', correct: false, feedback: "She smiles, but is sad. 'Hayi, mntanami. Iqiniso ledabuko alikho engomeni kuphela. Likhona ekuhloniphenikinini.' — The truth of culture isn't only in the dance. It's in the respect." },
        ],
      },
      { speaker: 'npc', target: 'Yebo. Lokho yibuntu. Phinda ungitshele — uMzilikazi wabuya ngaphi?', native: 'Yes. That is ubuntu. Tell me again — uMzilikazi came from where?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wabuya kwaZulu, wachapha uLimpopo.', native: 'He came from Zululand, and crossed the Limpopo.', correct: true, feedback: "She nods slowly. 'Wamukelekile kwaMthwakazi, mntanami.' — You are welcome in uMthwakazi, my child." },
          { target: 'Ngabe wakhula eBulawayo.', native: 'Maybe he grew up in Bulawayo.', correct: false, feedback: "Gentle correction: 'Hatshi. KoBulawayo wakwakhula kade — wabuya kwaZulu.' — No. He built koBulawayo later — he came from Zululand." },
          { target: 'Angazi.', native: "I don't know.", correct: false, feedback: "She pats your hand. 'Funda lokho ekhaya. Yibuntu ukukhumbula okwedlulileyo.' — Learn that at home. It's ubuntu to remember the past." },
        ],
      },
      { speaker: 'npc', target: 'Sala lobuntu, mntanami. Sala kuhle.', native: 'Stay with ubuntu, my child. Stay well.' },
      { speaker: 'rwen', rwenLine: "She just blessed you with the deepest farewell in the language. 'Sala lobuntu' is not 'goodbye' — it is 'stay being a person'. You earned that one.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'The whole module, one screen. Recall from memory.',
    prompts: [
      { prompt: 'A person is a person through other people (proverb)', correct: ['Umuntu ngumuntu ngabantu', 'umuntu ngumuntu ngabantu'] },
      { prompt: 'The Ndebele nation / homeland', correct: ['uMthwakazi', 'umthwakazi', 'Umthwakazi'] },
      { prompt: 'Clan praise names (plural)', correct: ['izithakazelo', 'Izithakazelo'] },
      { prompt: 'Bridewealth that joins two families', correct: ['lobola', 'Lobola', 'amalobolo'] },
      { prompt: 'Drum / song / dance as one event', correct: ['ingoma', 'iNgoma', 'Ingoma'] },
      { prompt: 'A traditional herbalist healer', correct: ['iNyanga', 'inyanga', 'Inyanga'] },
      { prompt: 'A praise poet', correct: ['iMbongi', 'imbongi', 'Imbongi'] },
      { prompt: 'The founding king of uMthwakazi', correct: ['uMzilikazi', 'umzilikazi', 'Umzilikazi'] },
      { prompt: 'Ancestors (the family-dead)', correct: ['amadlozi', 'Amadlozi'] },
      { prompt: 'Stay with ubuntu (deep farewell)', correct: ['Sala lobuntu', 'sala lobuntu', 'Sala lobuntu.'] },
    ],
  },

  mission: {
    title: 'A real conversation, before the next module',
    task: "Find one Ndebele person — colleague, friend, neighbour, online correspondent. Tell them you've finished a module on Ndebele cultural concepts. Ask them which one they'd want you to understand more deeply, and listen to the whole answer without interrupting. That conversation, more than any lesson, is how Module 9 enters your life.",
    rwenSignoff: "Module 9 is done. You now know the words that hold uMthwakazi together. Carry them carefully. Sala lobuntu, mntanami.",
  },

  phase8: {
    scenario: "You sit with Gogo MaKhumalo (78), the matriarch of a Ndebele family that has welcomed you. She wants to have one long, gentle conversation that pulls together everything you've learned in Module 9 — ubuntu, uMthwakazi, izithakazelo, lobola, ngoma, healers, imbongi, the kings, ancestors. She'll move slowly across the topics, watching for what you actually grasped vs. what you memorised.",
    rwenRole: "Gogo MaKhumalo — late 70s, Khumalo by marriage, deeply traditional and deeply Christian, raised eight children, has buried two husbands and a son. Wise, patient, generous. Will not flatter you. Will be visibly moved when you get something right.",
    successCriteria: "User uses at least six of the ten Module 9 concepts (ubuntu, uMthwakazi, izithakazelo, lobola, iNgoma, iNyanga/iSangoma, iMbongi, uMzilikazi/uLobengula, amadlozi, sala lobuntu) correctly across the conversation. Stays honest when they don't fully understand something. Closes the conversation with a culturally appropriate farewell (sala kuhle or sala lobuntu).",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
