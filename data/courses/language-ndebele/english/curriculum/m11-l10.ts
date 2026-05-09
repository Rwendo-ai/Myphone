import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l10',
  module: 11,
  lesson: 10,
  title: 'A Real Conversation — Graduation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Eleven modules. From 'Salibonani' on day one to holding a silence with someone in grief. Today is no new vocabulary — today you put it all down on the same table and have a real conversation. You are ready. Sala kuhle, mngane.",
    culturalNote: "In Ndebele culture, mastery is shown by humility, not by performance. The graduate does not announce that they have learned isiNdebele — they simply walk into a room, greet correctly, listen well, ask deeper questions, disagree softly, and leave. The Ndebele eye sees this and says quietly: 'Lo mzukulu uyazi' — this one knows. That is the highest compliment you will not be told to your face. You will feel it in the warmth of being treated as one of them.",
  },

  chunks: [
    {
      id: 'sengikhulile',
      target: 'sengikhulile',
      native: "I have grown / I have come a long way",
      literal: 'I-have-grown',
      emoji: '🌱',
      phonetic: 'sehn-gee-khoo-LEE-leh',
      audioRef: null,
    },
    {
      id: 'ngiyabonga_konke',
      target: 'Ngiyabonga konke.',
      native: 'Thank you for everything.',
      literal: 'I-thank everything',
      emoji: '🙏',
      phonetic: 'ngee-yah-BOHN-gah KOHN-keh',
      audioRef: null,
    },
    {
      id: 'sala_kuhle',
      target: 'Sala kuhle.',
      native: 'Stay well. (a graduation farewell — to one staying)',
      emoji: '👋',
      phonetic: 'SAH-lah KOO-hleh',
      audioRef: null,
    },
    {
      id: 'hamba_kuhle',
      target: 'Hamba kuhle.',
      native: 'Go well. (to one leaving)',
      emoji: '🚶',
      phonetic: 'HAHM-bah KOO-hleh',
      audioRef: null,
    },
    {
      id: 'angisaqali',
      target: 'angisaqali',
      native: "I am no longer just starting",
      literal: 'I-am-no-longer-beginning',
      emoji: '🎓',
      phonetic: 'ahn-gee-sah-CHAH-lee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Putting it all together — eleven modules in one breath',
    explanation: "A real Ndebele conversation pulls from every module you have done: M1-2 greetings (Salibonani, register), M3 wellbeing, M4 hunger/thirst, M5 family, M6 directions, M7 numbers/money, M8 time, M9 emotions, M10 work/study — and now M11 connectors, conditionals, opinions, soft disagreement, idioms, register, silence. You will not use everything in every chat. The skill is choosing the right pieces for this moment, this person, this room.",
    examples: [
      { target: 'Salibonani Baba. Linjani? Ngicela ukubuza.', native: 'Hello Father. How are you? I request to ask. (M2 + M8 register)' },
      { target: 'Ngicabanga ukuthi kuhle, kodwa angiqiniseki.', native: 'I think it is good, but I am not sure. (M11 opinion + soft disagreement)' },
      { target: 'Mmm. Ngiyezwa, mngane. Inkomo zibuya kade.', native: 'Mmm. I hear you, friend. Good things take time. (silence + idiom)' },
      { target: 'Ngiyabonga konke. Sala kuhle.', native: 'Thank you for everything. Stay well. (the graduation close)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the module it came from',
      pairs: [
        { left: 'Salibonani Baba', right: 'M2 — formal greeting' },
        { left: 'Ngicabanga ukuthi', right: 'M11 — opinion' },
        { left: 'Inkomo zibuya kade', right: 'M11 — idiom' },
        { left: 'Sala kuhle', right: 'farewell to one staying' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the graduation farewell — "Thank you for everything. Stay well, friend."',
      words: ['Sala', 'mngane', 'kuhle', 'konke.', 'Ngiyabonga'],
      correct: ['Ngiyabonga', 'konke.', 'Sala', 'kuhle', 'mngane'],
      translation: 'Thank you for everything. Stay well, friend.',
    },
    {
      type: 'translate',
      instruction: 'Translate the graduate\'s line',
      prompt: 'I am no longer just starting.',
      correct: ['Angisaqali', 'angisaqali', 'Angisaqali.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A real moment',
      question: "An elder you have spoken with often says: 'Mzukulu, sengiyakubona uhamba kahle. Lo mzukulu uyazi.' (Grandchild, I see you are walking well now. This one knows.) What do you reply?",
      options: [
        { text: "Hatshi, angikazi. Ngiyafunda kuphela. Ngiyabonga konke. (No, I do not yet know. I am only learning. Thank you for everything.)", correct: true },
        { text: "Yebo, ngiyazi manje. (Yes, I know now.)", correct: false },
        { text: "Kunjalo, ngifundile kakhulu. (It is so, I have learned a lot.)", correct: false },
      ],
      explanation: "Ndebele mastery is shown by humility. The first option deflects the praise ('No, I do not yet know'), names the truth ('I am only learning'), and gives thanks. The other two accept the praise — which would unwind the very thing the elder just acknowledged.",
    },
  ],

  rwenDialogue: {
    intro: "Final scene. You are at MaNdlovu's home in Bulawayo — the same home you visited in M4. Six months have passed. Mkhulu Sibanda is on the veranda. Sipho is in the kitchen. Children are playing outside. You are saying goodbye for now. Every module you have learned is in this room.",
    lines: [
      { speaker: 'rwen', rwenLine: 'You walk in. Mkhulu Sibanda first — he is the eldest. Three formal dials. You know the shape.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani Mkhulu. Linjani namhlanje?', native: 'Hello Grandfather. How are you today?', correct: true, feedback: 'Plural greeting + honorific + plural how-are-you. Module 2 and Module 8 in one line.' },
          { target: 'Sawubona Mkhulu.', native: 'Hi Grandfather.', correct: false, feedback: 'Mismatched dials again. He deserves the full formal opening.' },
        ],
      },
      { speaker: 'npc', target: 'Salibonani mzukulu. Ngiyaphila — kodwa amalanga ayanda.', native: 'Hello grandchild. I am well — but the days are stretching.' },
      { speaker: 'rwen', rwenLine: '"Amalanga ayanda" — the days stretch. Old age. He has opened a window. Module 11 — soft, listening, idiom-shaped.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyezwa, Mkhulu. Inkomo zibuya kade — sizahlala nawe.', native: 'I hear you, Grandfather. The cattle return slowly — we will sit with you.', correct: true, feedback: 'You honoured what he said with the patience-idiom and the promise of presence. He will close his eyes for a second. That is the response.' },
          { target: 'Konke kuzakulunga.', native: 'Everything will be fine.', correct: false, feedback: 'Eleven modules and you reached for a generic line. Ndebele wants the idiom-shape. Try again.' },
        ],
      },
      { speaker: 'npc', target: 'Mmm. Igama lakho lihle, mzukulu.', native: 'Mmm. Your name is good here, grandchild.' },
      { speaker: 'rwen', rwenLine: '"Igama lakho lihle." Module 11 idiom — your name is good here. The highest compliment a Ndebele elder gives. Now: humility.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hatshi Mkhulu, angikazi. Ngiyafunda kuphela. Ngiyabonga konke.', native: 'No Grandfather, I do not yet know. I am only learning. Thank you for everything.', correct: true, feedback: 'Deflected the praise, named the truth, gave thanks. That is the graduation move. Three modules in one sentence.' },
          { target: 'Yebo Mkhulu, sengikhulile.', native: 'Yes Grandfather, I have grown.', correct: false, feedback: 'You accepted the praise and even one-upped it. The Ndebele instinct is to deflect. Humility is the register.' },
        ],
      },
      { speaker: 'npc', target: 'Ubuntu bakho buphelele. Sala kuhle, mzukulu. Ubuye masinyane.', native: 'Your humanity is whole. Stay well, grandchild. Come back soon.' },
      { speaker: 'rwen', rwenLine: 'He just gave you the deepest blessing in the language — ubuntu bakho buphelele, your humanity is whole. He sees you. Now you go to Sipho. Casual register — Module 11 dial down.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona mngane! Inhliziyo yami iyajabula ukukubona.', native: 'Hi friend! My heart rejoices to see you.', correct: true, feedback: 'Casual greeting + idiom for the reunion. Same conversation, different dial. You read the room.' },
          { target: 'Salibonani Baba.', native: 'Hello Father.', correct: false, feedback: 'Sipho is your peer — formal-to-elder register on him would be near-mockery. Switch dials when you switch people.' },
        ],
      },
      { speaker: 'npc', target: "Mngane! Ulambile? MaNdlovu wenze isitshebo.", native: 'Friend! Are you hungry? MaNdlovu has made stew.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, ngilambile kakhulu. Ngiyabonga.', native: 'Yes, I am very hungry. Thank you.', correct: true, feedback: 'Module 4 — honest about hunger. Module 8 — gratitude. The host has been waiting for this cue.' },
          { target: 'Hatshi, ngiphilile.', native: 'No, I am fine.', correct: false, feedback: 'You lied to be polite. Ndebele hospitality wants the truth — your "yes" is the kind answer.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Final move. You are leaving. Three farewells — Mkhulu, MaNdlovu, Sipho. One line for each, register matched.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sala kuhle Mkhulu. Sala kuhle MaNdlovu. Hamba kuhle mngane — sizobonana.', native: 'Stay well Grandfather. Stay well MaNdlovu. Go well friend — we will see each other.', correct: true, feedback: '"Sala kuhle" for the ones staying, "Hamba kuhle" for Sipho who walks out with you. Three farewells, three relationships, all correct. You graduated this conversation.' },
          { target: 'Bye.', native: 'Bye (English).', correct: false, feedback: 'Eleven modules. You will not close on English. Reach for the Ndebele farewells — they are now yours.' },
        ],
      },
      { speaker: 'rwen', rwenLine: "You have just had a real conversation in isiNdebele — register-matched, idiom-shaped, silence-held, humble. You are not finished — no one is. But you are no longer just starting. Angisaqali. Sala kuhle, mngane. The road continues.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Final recall. Eleven modules in your hands now.',
    prompts: [
      { prompt: 'How do you say "Stay well" (to one staying)?', correct: ['Sala kuhle', 'sala kuhle', 'Sala kuhle.'] },
      { prompt: 'How do you say "Go well" (to one leaving)?', correct: ['Hamba kuhle', 'hamba kuhle', 'Hamba kuhle.'] },
      { prompt: 'How do you say "Thank you for everything"?', correct: ['Ngiyabonga konke', 'ngiyabonga konke', 'Ngiyabonga konke.'] },
      { prompt: 'How do you say "I am no longer just starting"?', correct: ['angisaqali', 'Angisaqali', 'Angisaqali.'] },
      { prompt: 'How do you say "I have grown / I have come a long way"?', correct: ['sengikhulile', 'Sengikhulile', 'Sengikhulile.'] },
    ],
  },

  mission: {
    title: 'Have a real conversation',
    task: "This week, find one Ndebele speaker and have a real conversation in isiNdebele. Not a phrase test, not a performance. Greet them right. Ask how they are. Listen. Ask one deeper question. Hold one silence. If you disagree, soften it. End with 'Sala kuhle' or 'Hamba kuhle' — matched correctly. They will see what you have done. They will not say so directly. They will simply treat you as one of them. That is the prize.",
    rwenSignoff: "Eleven modules ago you were a stranger to this language. Today the language is no longer a stranger to you. Sala kuhle, mngane. Inkomo zibuya kade — keep going. Hamba kuhle.",
  },

  phase8: {
    scenario: "GRADUATION CONVERSATION. You are spending a Saturday afternoon with a Ndebele family in Bulawayo — Mkhulu Sibanda (the elder, 76), MaNdlovu (mother, 50s), Sipho (your peer, late 20s), and Sibu (a child, 8). Across one continuous conversation you will: greet each one with the right register; ask a deeper question of the elder; hold one silence; offer one opinion with the soft frame; disagree once gently; use one idiom that fits; deflect one piece of praise with humility; eat hospitality without lying about hunger; and farewell each person with the correct 'Sala kuhle' / 'Hamba kuhle' choice. This is your real test — and your celebration.",
    rwenRole: "Four voices in one conversation — Mkhulu Sibanda (formal, idiom-shaped, will offer praise to test humility), MaNdlovu (warm host, will offer food and read your honesty), Sipho (peer, casual, will float a wrong opinion to see if you disagree softly), Sibu (child, simple, will test if you over-formalise with a child). Rwen will narrate transitions but not interrupt the flow.",
    successCriteria: "User: (1) matched register correctly to all four people, (2) asked at least one deeper question of the elder, (3) held at least one silence appropriately, (4) framed at least one opinion with ngicabanga ukuthi / mhlawumbe / kimi, (5) softly disagreed at least once with the disagreement-sandwich, (6) used at least one idiom in the right moment, (7) deflected the elder's praise humbly, (8) accepted hospitality honestly, (9) closed with the correct sala kuhle / hamba kuhle distribution. No register mismatches; no premature reassurance during silence; no acceptance of praise.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
