import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06',
  module: 9,
  lesson: 6,
  title: 'iziNyanga — traditional healers',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Outsiders sometimes hear 'witch doctor' and assume something dark. That word is wrong. The right Ndebele word is iNyanga — a trained traditional healer who works with herbs, divination, and ancestral guidance, side-by-side with modern medicine in many Ndebele lives. Today we get the language and the respect right.",
    culturalNote: "Ndebele healing has multiple specialists. iNyanga (plural: iziNyanga) typically refers to a herbalist — someone who treats with plant medicine and ritual. iSangoma is more often a diviner, communicating with the ancestors (amadlozi) through bones, dreams, and trance. Both undergo years of training, often a formal apprenticeship called ukuthwasa. In Zimbabwe these healers are organised into recognised associations (ZINATHA — the Zimbabwe National Traditional Healers Association). Many Ndebele people consult both medical doctors and iziNyanga for different things, and do not see this as a contradiction. Treating these traditions as 'superstition' is colonial-era framing and lands badly.",
  },

  chunks: [
    {
      id: 'inyanga',
      target: 'iNyanga',
      native: 'a traditional healer (often a herbalist)',
      literal: 'class 9 noun — also literally means "moon / month"',
      emoji: '🌿',
      phonetic: 'een-YAH-ngah',
      audioRef: null,
    },
    {
      id: 'izinyanga',
      target: 'iziNyanga',
      native: 'traditional healers (plural)',
      literal: 'izi- (class 10 plural) + nyanga',
      emoji: '🌿',
      phonetic: 'ee-zee-NYAH-ngah',
      audioRef: null,
    },
    {
      id: 'isangoma',
      target: 'iSangoma',
      native: 'a diviner-healer (works with ancestors)',
      literal: 'class 9 noun — works with bones, dreams, trance',
      emoji: '🦴',
      phonetic: 'ee-sahn-GOH-mah',
      audioRef: null,
    },
    {
      id: 'imithi',
      target: 'imithi',
      native: 'medicine, traditional plant medicine',
      literal: 'plural of umuthi (tree / medicine — class 3/4)',
      emoji: '🌱',
      phonetic: 'ee-MEE-tee',
      audioRef: null,
    },
    {
      id: 'ukwelapha',
      target: 'ukwelapha',
      native: 'to heal / to treat (someone)',
      literal: 'uku- (infinitive) + -welapha (heal)',
      emoji: '🤲',
      phonetic: 'oo-kweh-LAH-pah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two specialists, two different roles',
    explanation: "Ndebele healing is plural. iNyanga is most commonly a herbalist — diagnoses by symptom and prescribes plant medicine (imithi). iSangoma is most commonly a diviner — diagnoses by communicating with ancestors, often using uphahla (the ancestral altar) and bones. The two roles overlap, and one person can be trained in both. Both undergo ukuthwasa — the long initiation. Lazy English shorthand calls all of them 'sangomas' or worse 'witch doctors' — both are wrong. Ask which one you mean.",
    examples: [
      { target: 'iNyanga ilapha ngemithi.', native: 'The healer treats with plant medicine.' },
      { target: 'iSangoma ibonisa ngamathambo.', native: 'The diviner reveals through the bones.' },
      { target: 'Ngiya kunyanga.', native: "I'm going to a traditional healer." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to the role',
      pairs: [
        { left: 'iNyanga', right: 'traditional herbalist-healer' },
        { left: 'iSangoma', right: 'diviner / works with ancestors' },
        { left: 'imithi', right: 'plant medicine' },
        { left: 'ukwelapha', right: 'to heal / to treat' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural respect',
      question: "An older Ndebele relative tells you they consulted an iNyanga last week. The respectful response is:",
      options: [
        { text: "'Ngiyathemba uzakuba ngcono' — I hope you'll get better. Engage with their care like real care.", correct: true },
        { text: "'You should go to a real doctor instead.' — challenge the choice.", correct: false },
        { text: "'Witch doctors aren't real medicine.' — dismiss it.", correct: false },
      ],
      explanation: "Many Ndebele people use both Western medicine and traditional healing — they are not in opposition in everyday Ndebele life. Treating one as 'real' and the other as 'fake' is disrespectful to people you love and inaccurate to the actual evidence of plant pharmacology.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Word choice',
      question: "Which Ndebele word should you NEVER use to refer to a traditional healer?",
      options: [
        { text: '"Witch doctor" — colonial slur, always wrong, always offensive.', correct: true },
        { text: 'iNyanga', correct: false },
        { text: 'iSangoma', correct: false },
      ],
      explanation: "'Witch doctor' was a colonial term used to delegitimise African healing traditions. It conflates witches (abathakathi — people who do harm) with healers (iziNyanga — people who do healing) and is the opposite of what the practitioners actually are. Use the Ndebele words.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'plant medicine / traditional medicine',
      correct: ['imithi', 'Imithi'],
    },
  ],

  rwenDialogue: {
    intro: "Your friend's grandmother — Gogo MaSibanda — tells you she's been seeing an iNyanga for her arthritis, alongside her hospital prescription. Don't fumble this one.",
    lines: [
      { speaker: 'npc', target: 'iNyanga inginikile imithi yamathambo.', native: 'The healer has given me medicine for the bones.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyathemba uzakuba ngcono, gogo.', native: "I hope you get better, grandmother.", correct: true, feedback: "She nods. 'Ngiyabonga, mntanami.' Real care, no judgement — that's what she needed to hear." },
          { target: 'Lokho akusebenzi.', native: "That doesn't work.", correct: false, feedback: "Gogo's eyes narrow. You've just told a 78-year-old woman who has lived through more than you that her tradition is fake. There's no recovering from that quickly." },
          { target: 'Kungani ungayi esibhedlela?', native: "Why don't you just go to the hospital?", correct: false, feedback: "She tells you, calmly: 'I am also going to the hospital. I take both. They do different things.' You assumed it was either-or. It almost never is." },
        ],
      },
      { speaker: 'npc', target: 'Ngiyabonga, mntanami.', native: 'Thank you, my child.' },
      { speaker: 'rwen', rwenLine: "You don't have to believe in everything an elder believes in. You just have to respect that they have lived a longer life than you and know what works for their body. Ndebele healing is not your enemy." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'A traditional healer / herbalist (singular)', correct: ['iNyanga', 'inyanga', 'Inyanga'] },
      { prompt: 'A diviner-healer who works with ancestors', correct: ['iSangoma', 'isangoma', 'Isangoma'] },
      { prompt: 'Traditional plant medicine', correct: ['imithi', 'Imithi'] },
      { prompt: 'To heal / to treat someone', correct: ['ukwelapha', 'Ukwelapha'] },
    ],
  },

  mission: {
    title: 'Replace one word in your vocabulary',
    task: "If you have ever used the phrase 'witch doctor' — even casually — replace it permanently with iNyanga or iSangoma (depending on context) or just 'traditional healer' in English. If you hear someone else say 'witch doctor' in your hearing this week, gently offer them a better word. Language carries respect; this one matters.",
    rwenSignoff: "Healing is older than hospitals. Both are real. Sala kuhle, mntanami.",
  },

  phase8: {
    scenario: "You're sitting with Mama MaNcube, your colleague's mother, in her kitchen in Pumula East. She is making tea and tells you she has been training as an iSangoma for the last three years — undergoing ukuthwasa. She wants to share what that has been like, and is watching to see whether you can listen without scoffing.",
    rwenRole: "Mama MaNcube — 50s, social worker by day, training as iSangoma in evenings and weekends, deeply pragmatic, no woo. Will share thoughtfully if you're respectful. Will close the conversation politely if she senses contempt.",
    successCriteria: "User uses iNyanga or iSangoma correctly (not interchangeably), uses 'imithi' or 'ukwelapha' once, and asks at least one genuine question. Avoids 'witch doctor' entirely. Bonus if they ask about ukuthwasa (the apprenticeship) specifically.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
