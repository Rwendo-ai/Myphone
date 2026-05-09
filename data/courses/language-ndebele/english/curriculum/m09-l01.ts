import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01',
  module: 9,
  lesson: 1,
  title: 'Ubuntu — humanity through others',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Module 9. The deepest one. We have learned to greet, to ask, to apologise, to negotiate. Now we learn what those words sit on top of. We start with the word that holds everything: ubuntu.",
    culturalNote: "Ubuntu is not a brand, not a Linux distribution, not a corporate slogan. It is a southern African moral philosophy, shared across Nguni languages (isiNdebele, isiZulu, isiXhosa, siSwati). The full proverb is 'Umuntu ngumuntu ngabantu' — a person is a person through other people. Your humanity is not a private possession; it is given to you by being seen, raised, fed, mourned, and corrected by others. To be a 'real person' (umuntu) is to recognise that — and act like it.",
  },

  chunks: [
    {
      id: 'umuntu',
      target: 'umuntu',
      native: 'a person, a human being',
      literal: 'um- (singular human prefix) + -ntu (root: being)',
      emoji: '🧍',
      phonetic: 'oo-MOON-too',
      audioRef: null,
    },
    {
      id: 'abantu',
      target: 'abantu',
      native: 'people (plural of umuntu)',
      literal: 'aba- (plural human prefix) + -ntu',
      emoji: '👥',
      phonetic: 'ah-BAHN-too',
      audioRef: null,
    },
    {
      id: 'ubuntu',
      target: 'ubuntu',
      native: 'humanity, the quality of being human-with-others',
      literal: 'ubu- (abstract noun prefix) + -ntu (being)',
      emoji: '🤝',
      phonetic: 'oo-BOON-too',
      audioRef: null,
    },
    {
      id: 'umuntu_ngumuntu',
      target: 'Umuntu ngumuntu ngabantu',
      native: 'A person is a person through other people',
      literal: 'umuntu (person) + ngu-muntu (is-person) + nga-bantu (through-people)',
      emoji: '🌍',
      phonetic: 'oo-MOON-too n-goo-MOON-too n-gah-BAHN-too',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -ntu root and noun classes',
    explanation: "One root, three meanings, three prefixes. The root '-ntu' carries the idea of 'being / human'. Add 'um-' (class 1, one person) and you get umuntu. Switch to 'aba-' (class 2, plural people) and you get abantu. Use the abstract prefix 'ubu-' (class 14, qualities and concepts) and you get ubuntu — the *quality* of being human. This is how Nguni languages build big ideas from small roots: change the prefix, change the meaning.",
    examples: [
      { target: 'umuntu', native: 'one person (concrete)' },
      { target: 'abantu', native: 'people (plural concrete)' },
      { target: 'ubuntu', native: 'humanity (abstract quality)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each form to its meaning',
      pairs: [
        { left: 'umuntu', right: 'a person (one)' },
        { left: 'abantu', right: 'people (many)' },
        { left: 'ubuntu', right: 'the quality of being human' },
        { left: 'Umuntu ngumuntu ngabantu', right: 'A person is a person through others' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most accurate translation',
      question: "What does 'ubuntu' actually mean in Ndebele thought?",
      options: [
        { text: 'Humanity — the quality of being a real person, defined by how you treat others.', correct: true },
        { text: 'A friendly attitude, like being nice.', correct: false },
        { text: 'A South African operating system.', correct: false },
        { text: 'A type of greeting.', correct: false },
      ],
      explanation: "Ubuntu is moral, not emotional. It is the framework that says you cannot be a complete person in isolation — your personhood is built from how you carry yourself toward others. 'Being nice' is a thin English shadow of it.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the proverb: A person is a person through other people',
      words: ['ngabantu', 'Umuntu', 'ngumuntu'],
      correct: ['Umuntu', 'ngumuntu', 'ngabantu'],
      translation: 'A person is a person through other people.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural reading',
      question: 'Someone walks past a stranger struggling to lift a heavy bag without offering help. In Ndebele framing, what would an elder likely say about that person?',
      options: [
        { text: "'Akala buntu' — they have no ubuntu. Their personhood is incomplete.", correct: true },
        { text: "Nothing. It's their business.", correct: false },
        { text: "'Bahle' — they are beautiful.", correct: false },
      ],
      explanation: "To 'have ubuntu' or 'lack ubuntu' is a moral verdict in everyday Ndebele speech. It is not about manners — it is about whether you recognise your own humanity is bound to other people's.",
    },
  ],

  rwenDialogue: {
    intro: "An elder in Bulawayo, gogo Ndlovu, sits with you under a marula tree. She wants to know what 'ubuntu' means to you before she tells you what it means to her.",
    lines: [
      { speaker: 'rwen', rwenLine: "She is testing you, gently. There's no wrong answer — but there is a deeper one." },
      { speaker: 'npc', target: 'Ubuntu kuyini kuwe?', native: "What is ubuntu to you?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "Umuntu ngumuntu ngabantu.", native: 'A person is a person through other people.', correct: true, feedback: "She nods slowly. 'Yebo. That is the start of it. Now live it.'" },
          { target: 'Ukuba mnandi.', native: 'Being nice.', correct: false, feedback: "She smiles, a little sad. 'Niceness is decoration. Ubuntu is the wall the house is built on.'" },
          { target: 'Ngiyazi.', native: 'I know it.', correct: false, feedback: "'Ubuntu is not something you know,' she says. 'It is something you do, again and again, until people see it in you.'" },
        ],
      },
      { speaker: 'npc', target: 'Sala lobuntu, mntanami.', native: 'Stay with ubuntu, my child.' },
      { speaker: 'rwen', rwenLine: "She just called you mntanami — my child. That is ubuntu happening in real time." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'A person (one human being)', correct: ['umuntu', 'Umuntu'] },
      { prompt: 'People (plural)', correct: ['abantu', 'Abantu'] },
      { prompt: 'Humanity / the quality of being human-with-others', correct: ['ubuntu', 'Ubuntu'] },
      { prompt: 'A person is a person through other people (the proverb)', correct: ['Umuntu ngumuntu ngabantu', 'umuntu ngumuntu ngabantu'] },
    ],
  },

  mission: {
    title: 'Practise ubuntu once today',
    task: "One small act today that you would not normally do — let someone in line ahead of you, ask the security guard's name, sit a moment longer with the older relative who keeps you on the phone. Don't post about it. Don't tell anyone. Just notice that you became slightly more umuntu.",
    rwenSignoff: "Ubuntu is daily. It is not a feeling — it is what you do when no one is keeping score. Sala lobuntu.",
  },

  phase8: {
    scenario: "You sit with gogo Ndlovu, a 78-year-old woman from kwaBulawayo, on her veranda at sunset. She has heard you are learning isiNdebele and wants to ask you what you think ubuntu means. She is patient and warm but will gently push back if you give a thin answer.",
    rwenRole: "Gogo Ndlovu — late 70s, wise, generous, raised six children and many grandchildren, worked as a nurse for 40 years. She does not lecture. She asks small questions and lets you find the answer.",
    successCriteria: "User attempts the proverb 'Umuntu ngumuntu ngabantu' (or its meaning) in their own words, distinguishes ubuntu from 'being nice', and gives a concrete example of ubuntu in action (helping, sharing, mourning together, raising someone else's child).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
