import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l07',
  module: 11,
  lesson: 7,
  title: 'Idioms Part 2 — Going Deeper',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday's idioms were warm. Today's are sharper — the kind that show up in arguments, eulogies, and proverbs handed down at firelight. Use one of these and people stop hearing a learner; they start hearing a relative.",
    culturalNote: "Many Ndebele idioms come from izaga — proverbs preserved for centuries. They are weighted: 'Inja ihamba ngenduku' (a dog walks by the stick) is a comment on power and consequence, not casual chat. Reach for these in serious conversations — disputes, condolences, advice — not in small talk. An idiom mis-fitted to a light moment is louder than no idiom at all.",
  },

  chunks: [
    {
      id: 'inja_induku',
      target: 'inja ihamba ngenduku',
      native: 'a dog walks by the stick (consequences shape behaviour)',
      literal: 'dog walks by-the-stick',
      emoji: '🐕',
      phonetic: 'IN-jah ee-HAHM-bah ngen-DOO-koo',
      audioRef: null,
    },
    {
      id: 'isikhuni_sibuya',
      target: 'isikhuni sibuya nomkhwezeli',
      native: "the firebrand returns to the one who lit it (your actions come back)",
      literal: 'firebrand returns with-the-one-who-lit',
      emoji: '🔥',
      phonetic: 'ee-see-KHOO-nee see-BOO-yah nohm-khweh-ZEH-lee',
      audioRef: null,
    },
    {
      id: 'igama_lakhe',
      target: 'igama lakhe lihle',
      native: 'his name is good (he has good standing)',
      literal: 'name his good',
      emoji: '🏅',
      phonetic: 'ee-GAH-mah LAH-kheh LEE-hleh',
      audioRef: null,
    },
    {
      id: 'amanzi_engela',
      target: 'amanzi angela ezweni elilodwa',
      native: 'water flows in many lands (truths repeat everywhere)',
      literal: 'water flows in-land one',
      emoji: '🌊',
      phonetic: 'ah-MAHN-zee ahn-GEH-lah eh-ZWEH-nee eh-lee-LOH-dwah',
      audioRef: null,
    },
    {
      id: 'ubuntu_bami',
      target: 'ubuntu bami buphelele',
      native: 'my humanity is whole (I am at peace with myself)',
      literal: 'humanity my complete',
      emoji: '🧘',
      phonetic: 'oo-BOON-too BAH-mee boo-pheh-LEH-leh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Heavy idioms for heavy moments',
    explanation: "These idioms carry weight. Use them when something matters: a dispute, a death, a piece of real advice, a moment of unexpected gratitude. The form is usually a short clause that pictures something concrete (a dog, a firebrand, water, a name) — and the listener fills in the meaning. Trust them to do that work.",
    examples: [
      { target: 'Inja ihamba ngenduku — uzofunda.', native: 'A dog walks by the stick — he will learn (consequences will teach him).' },
      { target: 'Isikhuni sibuya nomkhwezeli.', native: 'The firebrand returns to the one who lit it (what you start comes back).' },
      { target: 'Igama lakhe lihle eMzilikazi.', native: 'His name is good in Mzilikazi (he is well respected there).' },
      { target: 'Ubuntu bami buphelele namhlanje.', native: 'My humanity is whole today (I feel at peace).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the idiom to its meaning',
      pairs: [
        { left: 'Inja ihamba ngenduku', right: 'consequences shape behaviour' },
        { left: 'Isikhuni sibuya nomkhwezeli', right: 'your actions come back to you' },
        { left: 'Igama lakhe lihle', right: 'he has good standing' },
        { left: 'Ubuntu bami buphelele', right: 'I am at peace with myself' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the idiom for the moment',
      sentence: "Ngingathathwa wukuthula — ____.",
      options: ['ubuntu bami buphelele', 'inja ihamba ngenduku', 'kawukho umoya'],
      correct: 'ubuntu bami buphelele',
      context: '"I have been taken by peace — my humanity is whole." The peace-with-self idiom.',
    },
    {
      type: 'translate',
      instruction: 'Translate the feeling',
      prompt: 'His name is good (he is well respected).',
      correct: ['Igama lakhe lihle', 'igama lakhe lihle'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the idiom that fits',
      question: 'Your friend has been gossiping about a colleague. Now the gossip has reached the colleague and the friend is in trouble. You want to comment, kindly but truthfully.',
      options: [
        { text: 'Isikhuni sibuya nomkhwezeli. (The firebrand returns to the one who lit it.)', correct: true },
        { text: 'Inhliziyo yami iyajabula. (My heart rejoices.)', correct: false },
        { text: 'Inkomo zibuya kade. (The cattle return slowly.)', correct: false },
      ],
      explanation: "The firebrand idiom is exactly for actions returning to their source. The heart idiom is wrong-toned (joy); the cattle idiom is about patience, not consequence. The right idiom names the moment without scolding it.",
    },
  ],

  rwenDialogue: {
    intro: "You're sitting with your friend Mthokozisi at his uncle's vigil. He is quiet. After a long pause, he speaks.",
    lines: [
      { speaker: 'npc', target: 'Umalume wami wayengumuntu olungile.', native: 'My uncle was a good man.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Igama lakhe lihle, mngane. Sizamkhumbula.', native: 'His name is good, friend. We will remember him.', correct: true, feedback: 'The name-idiom at a vigil is exactly right. You honoured the dead in their own grammar.' },
          { target: 'Kulungile.', native: 'It is fine.', correct: false, feedback: 'Cold. A vigil deserves the weighted phrase. The idiom is the cushion the moment needs.' },
          { target: 'Inhliziyo yami iyajabula.', native: 'My heart rejoices.', correct: false, feedback: 'Wrong-toned for grief. The heart-rejoices idiom is for reunions and good news, not vigils.' },
        ],
      },
      { speaker: 'npc', target: 'Wabhubha kabuhlungu — wenza okubi kubantu abaningi.', native: 'He died painfully — he had wronged many people.' },
      { speaker: 'rwen', rwenLine: 'He has just complicated the picture. Truth and grief at once. The firebrand idiom names this without judgement.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyezwa. Isikhuni sibuya nomkhwezeli, kodwa simkhumbule.', native: 'I hear you. The firebrand returns to the one who lit it, but let us remember him.', correct: true, feedback: 'You named the truth (the firebrand) and held the grief (let us remember). Two-idiom Ndebele wisdom in one breath.' },
          { target: 'Wayemubi.', native: 'He was bad.', correct: false, feedback: "Brutally bare. At a vigil, even a hard truth wears the idiom. 'Isikhuni sibuya' is the way." },
        ],
      },
      { speaker: 'npc', target: 'Ubuntu bakho buphelele namhlanje, mngane.', native: 'Your humanity is whole today, friend.' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "a dog walks by the stick" (consequences shape behaviour)?', correct: ['inja ihamba ngenduku', 'Inja ihamba ngenduku'] },
      { prompt: 'How do you say "the firebrand returns to the one who lit it"?', correct: ['isikhuni sibuya nomkhwezeli', 'Isikhuni sibuya nomkhwezeli'] },
      { prompt: 'How do you say "his name is good / he has good standing"?', correct: ['igama lakhe lihle', 'Igama lakhe lihle'] },
      { prompt: 'How do you say "my humanity is whole / I am at peace"?', correct: ['ubuntu bami buphelele', 'Ubuntu bami buphelele'] },
    ],
  },

  mission: {
    title: 'Hold one heavy idiom in mind',
    task: "Pick one of today's four idioms and carry it through the day. When something heavy happens — small or large — see if the idiom names it. You will not always say it aloud, but the noticing is the point. Idioms train you to see the moment they were made for.",
    rwenSignoff: "Light idioms greet the day. Heavy idioms hold it.",
  },

  phase8: {
    scenario: "You attend a Ndebele family gathering where a difficult truth has just come out — an inheritance dispute, an old wound, a quiet betrayal. You speak briefly using at least two heavy idioms, neither over-stuffed nor flippant.",
    rwenRole: "Mthokozisi — your friend, currently navigating the family difficulty, will recognise and respect a well-fitted idiom.",
    successCriteria: "User used at least two of {inja ihamba ngenduku, isikhuni sibuya nomkhwezeli, igama lakhe lihle, ubuntu bami buphelele} appropriately, did NOT use a light idiom in a heavy moment, and stayed humble in tone.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
