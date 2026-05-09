import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l04',
  module: 11,
  lesson: 4,
  title: 'Expressing Opinions',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "You can ask opinions now. Today you give one. 'Ngicabanga ukuthi...' — I think that... A small phrase that lets you step into a conversation without taking it over.",
    culturalNote: "In Ndebele culture, opinions are offered with a soft frame — not a flag. 'Ngicabanga ukuthi' (I think that) and 'Mhlawumbe' (perhaps) are the standard openers. Stating an opinion bare — 'It is wrong' — without the frame can read as arrogant, even if you are right. The frame is not weakness; it is room for the other person to disagree.",
  },

  chunks: [
    {
      id: 'ngicabanga_ukuthi',
      target: 'Ngicabanga ukuthi...',
      native: 'I think that...',
      literal: 'I-think that',
      emoji: '💭',
      phonetic: 'ngee-chah-BAHN-gah oo-KOO-thee',
      audioRef: null,
    },
    {
      id: 'ngibona',
      target: 'Ngibona...',
      native: 'I see / in my view...',
      literal: 'I-see',
      emoji: '👁️',
      phonetic: 'ngee-BOH-nah',
      audioRef: null,
    },
    {
      id: 'mhlawumbe',
      target: 'mhlawumbe',
      native: 'perhaps / maybe',
      emoji: '🤷',
      phonetic: 'mh-lah-OOM-beh',
      audioRef: null,
    },
    {
      id: 'kimi',
      target: 'kimi',
      native: 'to me / for me',
      emoji: '🙋',
      phonetic: 'KEE-mee',
      audioRef: null,
    },
    {
      id: 'kunjalo',
      target: 'kunjalo',
      native: 'it is so / that is right',
      emoji: '✅',
      phonetic: 'koon-JAH-loh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Frame your opinion, do not flag it',
    explanation: "Open with a soft frame — 'Ngicabanga ukuthi' (I think that), 'Ngibona' (I see), or 'Kimi' (to me). Add 'mhlawumbe' (perhaps) inside if you want even more room. End with 'kunjalo' (it is so) only when you are confirming a shared truth, never when you are pushing your own view. The frame is the manners.",
    examples: [
      { target: 'Ngicabanga ukuthi sekufanele sihambe.', native: 'I think that we should go now.' },
      { target: 'Kimi, lokhu kuhle.', native: 'To me, this is good.' },
      { target: 'Mhlawumbe uqinisile.', native: 'Perhaps you are right.' },
      { target: 'Ngibona ukuthi kuyasebenza.', native: 'I see that it works.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the opener to its job',
      pairs: [
        { left: 'Ngicabanga ukuthi', right: 'I think that...' },
        { left: 'Ngibona', right: 'I see / in my view' },
        { left: 'mhlawumbe', right: 'perhaps / maybe' },
        { left: 'kimi', right: 'to me / for me' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the softener',
      sentence: '____ uqinisile, kodwa angiqiniseki.',
      options: ['mhlawumbe', 'kunjalo', 'ngitshele'],
      correct: 'mhlawumbe',
      context: '"Perhaps you are right, but I am not sure." Choose the maybe-word.',
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'I think that we should go now.',
      correct: ['Ngicabanga ukuthi sekufanele sihambe', 'ngicabanga ukuthi sekufanele sihambe'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most culturally graceful version',
      question: 'You disagree with an elder about which road to take. How do you offer your view?',
      options: [
        { text: 'Lawe uphambile. (You are wrong.)', correct: false },
        { text: 'Mhlawumbe ngicabanga ukuthi enye indlela ingcono. (Perhaps I think that the other road is better.)', correct: true },
        { text: 'Yithi sihambe ngale. (Let us go this way.) — bare command', correct: false },
      ],
      explanation: "The double softener 'mhlawumbe' + 'ngicabanga ukuthi' is the Ndebele way to nudge an elder without challenging their authority. The first option is rude; the third skips the framing entirely.",
    },
  ],

  rwenDialogue: {
    intro: "You and your friend Sipho are deciding where to eat in Bulawayo. He is leaning towards Kombi Cafe; you think MaSibanda's is better today.",
    lines: [
      { speaker: 'npc', target: 'Asihambe eKombi Cafe.', native: "Let's go to Kombi Cafe." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hatshi, eKombi inembi.', native: 'No, Kombi is bad.', correct: false, feedback: 'Bare disagreement. No frame, no room. He may shrug — but he will also feel pushed.' },
          { target: 'Mhlawumbe, kodwa ngicabanga ukuthi eMaSibanda incono namhlanje.', native: "Perhaps, but I think that MaSibanda's is better today.", correct: true, feedback: 'Beautiful. You acknowledged his idea (mhlawumbe), framed your own (ngicabanga ukuthi), and pointed at today specifically — not forever.' },
          { target: 'Ngifuna eMaSibanda.', native: "I want MaSibanda's.", correct: false, feedback: 'Honest, but it is your appetite versus his. The frame would let it be a shared decision instead.' },
        ],
      },
      { speaker: 'npc', target: 'Kungani namhlanje?', native: 'Why today?' },
      { speaker: 'rwen', rwenLine: 'He is curious, not closed. Give him your reason — still framed.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Kimi, eMaSibanda lihlanzekile, kanti eKombi liyaminyana ngeSaturday.", native: "To me, MaSibanda's is clean, whereas Kombi is crowded on Saturdays.", correct: true, feedback: 'Frame ("kimi"), connector ("kanti"), real reason. He will likely say "kunjalo" — that is so.' },
          { target: 'Lazi.', native: 'You know.', correct: false, feedback: 'Vague. You had a real reason — give it. The frame "kimi" makes it safe.' },
        ],
      },
      { speaker: 'npc', target: "Kunjalo. Asihambe eMaSibanda.", native: "That's true. Let's go to MaSibanda's." },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "I think that..."?', correct: ['Ngicabanga ukuthi', 'ngicabanga ukuthi', 'Ngicabanga ukuthi...'] },
      { prompt: 'How do you say "perhaps / maybe"?', correct: ['mhlawumbe', 'Mhlawumbe'] },
      { prompt: 'How do you say "to me / for me"?', correct: ['kimi', 'Kimi'] },
      { prompt: 'How do you say "it is so / that is right"?', correct: ['kunjalo', 'Kunjalo'] },
    ],
  },

  mission: {
    title: 'Frame one opinion today',
    task: "Today, the next time you are about to share a strong opinion — in any language — try opening with the equivalent of 'I think that...' instead of stating it bare. Notice how the conversation stays open. Then practise saying 'Ngicabanga ukuthi...' under your breath.",
    rwenSignoff: "The frame is not the smaller version of your opinion. It is the doorway through which it can be heard.",
  },

  phase8: {
    scenario: "You are with two Ndebele friends debating a real choice — where to eat, whether to take a taxi or walk, who plays the next song. You disagree gently, using the soft openers, and find a shared landing.",
    rwenRole: "Sipho — late 20s, opinionated but warm, will respect a well-framed counter-view and push back if you go bare.",
    successCriteria: "User used at least two of {ngicabanga ukuthi, ngibona, mhlawumbe, kimi} when offering a view, did NOT issue a bare command or a bare 'no', and accepted at least one push-back gracefully.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
