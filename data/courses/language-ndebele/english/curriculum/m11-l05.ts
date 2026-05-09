import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l05',
  module: 11,
  lesson: 5,
  title: 'Disagreeing Politely',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Bare 'no' in any language is a wall. In isiNdebele the wall has a soft side: 'Hatshi, mhlawumbe...' — No, perhaps... — and suddenly you have disagreed without ending the conversation.",
    culturalNote: "Ndebele disagreement is rarely a frontal 'no'. It is a 'hatshi' followed by a softener — mhlawumbe (perhaps), kodwa (but), or a redirected question. Disagreeing bare with an elder is a near-taboo; even peers prefer the cushioned form. The cushion is not dishonesty — it is the standard packaging for an honest difference.",
  },

  chunks: [
    {
      id: 'hatshi_mhlawumbe',
      target: 'Hatshi, mhlawumbe...',
      native: 'No, perhaps...',
      emoji: '🛑',
      phonetic: 'HAH-tchee mh-lah-OOM-beh',
      audioRef: null,
    },
    {
      id: 'angiqiniseki',
      target: 'Angiqiniseki.',
      native: 'I am not sure.',
      literal: 'I-am-not-certain',
      emoji: '🤔',
      phonetic: 'ahn-gee-chee-nee-SEH-kee',
      audioRef: null,
    },
    {
      id: 'ngiyezwa',
      target: 'Ngiyezwa, kodwa...',
      native: 'I hear you, but...',
      literal: 'I-hear-you but',
      emoji: '👂',
      phonetic: 'ngee-YEH-zwah KOH-dwah',
      audioRef: null,
    },
    {
      id: 'akusinjalo',
      target: 'Akusinjalo.',
      native: "It's not quite like that.",
      emoji: '↔️',
      phonetic: 'ah-koo-seen-JAH-loh',
      audioRef: null,
    },
    {
      id: 'cha_bo',
      target: 'Cha bo.',
      native: "Not really. (gentle no)",
      emoji: '🚫',
      phonetic: 'CHAH boh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The disagreement sandwich',
    explanation: "Acknowledge first ('Ngiyezwa' / 'mhlawumbe'), pivot with a connector ('kodwa' / 'kanti'), then state your view with a softener ('ngicabanga ukuthi'). Three layers: hear them, turn, offer. Skipping the first layer reads as dismissive; skipping the third reads as combative.",
    examples: [
      { target: 'Ngiyezwa, kodwa ngicabanga ukuthi akusinjalo.', native: 'I hear you, but I think it is not quite like that.' },
      { target: 'Hatshi, mhlawumbe enye indlela ingcono.', native: 'No, perhaps another way is better.' },
      { target: 'Angiqiniseki — uqinisile?', native: "I'm not sure — are you certain?" },
      { target: 'Cha bo. Mhlawumbe asicabange futhi.', native: "Not really. Perhaps let us think again." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the soft disagreement to its tone',
      pairs: [
        { left: 'Hatshi, mhlawumbe...', right: 'No, perhaps... (cushioned no)' },
        { left: 'Angiqiniseki', right: 'I am not sure (open doubt)' },
        { left: 'Ngiyezwa, kodwa...', right: 'I hear you, but... (acknowledge first)' },
        { left: 'Akusinjalo', right: "It's not quite like that (gentle correction)" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the acknowledgement word',
      sentence: '____, kodwa angiqiniseki.',
      options: ['Ngiyezwa', 'Hatshi', 'Kunjalo'],
      correct: 'Ngiyezwa',
      context: '"I hear you, but I am not sure." Lead with hearing them.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "No, perhaps another way is better"',
      words: ['indlela', 'mhlawumbe', 'ingcono', 'enye', 'Hatshi'],
      correct: ['Hatshi', 'mhlawumbe', 'enye', 'indlela', 'ingcono'],
      translation: 'No, perhaps another way is better.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most graceful disagreement',
      question: 'An elder says the rain will come tomorrow. You watched the forecast — it will not. How do you respond?',
      options: [
        { text: 'Hatshi, akuzulina. (No, it will not rain.)', correct: false },
        { text: "Ngiyezwa, kodwa angiqiniseki — kuthiwa akulinanga kusasa. (I hear you, but I'm not sure — they say it will not rain tomorrow.)", correct: true },
        { text: 'Cha. (No.)', correct: false },
      ],
      explanation: "The middle option does the full sandwich: acknowledge ('Ngiyezwa'), pivot ('kodwa'), state with doubt ('angiqiniseki'), then add information ('kuthiwa' — they say). The elder is not contradicted, only updated.",
    },
  ],

  rwenDialogue: {
    intro: "Baba Khumalo, your friend's father, has just claimed the kombi to Bulawayo CBD costs $2. You took it last week — it was $1.50. He is wrong, but he is also Baba Khumalo.",
    lines: [
      { speaker: 'npc', target: 'Ikhombi yeCBD ingu-$2.', native: 'The kombi to CBD is $2.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hatshi, ingu-$1.50.', native: 'No, it is $1.50.', correct: false, feedback: 'Factually right, culturally bare. Bare correction of an elder is uncomfortable. Cushion it.' },
          { target: 'Ngiyezwa, Baba, kodwa angiqiniseki — ngiyihambile ngeviki edluleyo, yayingu-$1.50.', native: 'I hear you, Father, but I am not sure — I took it last week, it was $1.50.', correct: true, feedback: 'Full sandwich. You honoured him ("Baba"), acknowledged ("Ngiyezwa"), softened ("angiqiniseki"), then offered your evidence. He keeps face; you keep accuracy.' },
          { target: 'Kunjalo, Baba.', native: 'It is so, Father.', correct: false, feedback: 'You agreed when you knew it was wrong. Now next week he will tell another guest the same wrong price. Disagreement, cushioned, was the kinder path.' },
        ],
      },
      { speaker: 'npc', target: 'Mhlawumbe sekutshintshile?', native: 'Perhaps it has changed?' },
      { speaker: 'rwen', rwenLine: 'Notice — he himself just used "mhlawumbe". The cushion gave him a graceful exit. That is the whole point.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mhlawumbe — sizakubuza ikhombi kusasa.', native: 'Perhaps — we will ask the kombi tomorrow.', correct: true, feedback: 'You met his "mhlawumbe" with your own. Both of you saved face. Disagreement complete, relationship intact.' },
          { target: 'Hatshi, akutshintshanga.', native: 'No, it has not changed.', correct: false, feedback: 'You took the cushion he offered and kicked it. Stay soft when he goes soft.' },
        ],
      },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "No, perhaps..." (soft disagreement)?', correct: ['Hatshi, mhlawumbe', 'Hatshi mhlawumbe', 'hatshi, mhlawumbe', 'Hatshi, mhlawumbe...'] },
      { prompt: 'How do you say "I am not sure"?', correct: ['Angiqiniseki', 'angiqiniseki', 'Angiqiniseki.'] },
      { prompt: 'How do you say "I hear you, but..."?', correct: ['Ngiyezwa, kodwa', 'Ngiyezwa kodwa', 'ngiyezwa, kodwa', 'Ngiyezwa, kodwa...'] },
      { prompt: 'How do you say "It is not quite like that"?', correct: ['Akusinjalo', 'akusinjalo', 'Akusinjalo.'] },
    ],
  },

  mission: {
    title: 'Disagree softly once today',
    task: "Today, the next time you would normally say a flat 'no', try the sandwich in your own language: acknowledge, pivot, state. Notice the difference in how it lands. Then say it once in isiNdebele under your breath: 'Ngiyezwa, kodwa...'",
    rwenSignoff: "A cushioned disagreement keeps the door open. A bare 'no' shuts it.",
  },

  phase8: {
    scenario: "You are at a community meeting in Bulawayo. An older neighbour states something you know to be wrong — a fact about a kombi route, a date, or a prayer time. You disagree without offending him.",
    rwenRole: "Mkhulu Ndlovu — early 70s, respected, slightly stubborn, will warm up if disagreement is properly cushioned and will close down if it is bare.",
    successCriteria: "User used at least one full disagreement sandwich (acknowledge + pivot + soft state), addressed him with a respectful term (Mkhulu / Baba), and ended with the elder still feeling honoured.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
