import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Articles in real talk — Conversation capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Wapfuura Module 4. Iye zvino unoziva 'a/an/the', plurals (-s, irregular), 'this/that/these/those', 'some/any', 'much/many'. Chinangwa chenhasi: kuzvi-shandisa zvose pa hurukuro yose.",
    culturalNote: "ChiNgezi chinozvigadzira kuburikidza nearticles. Kana wakwanisa kuita zvakanaka pa-mufambo wehurukuro pasina kufunga, watopfuura zvikurutu chinangwa che A2 — wave kunzwa muvene wezvirevo izvi. ChiShona hachina, asi waona musiyano. Kuziva musiyano — ndokuziva kufunga muma languages mawiri.",
  },

  chunks: [
    {
      id: 'morning_flow',
      target: 'I woke up. I had a cup of coffee and an apple.',
      native: 'Ndakamuka. Ndaita kapu yekofi neapuro.',
      literal: 'a cup, an apple',
      emoji: '☕',
      phonetic: 'aw-ee-WOHK-up...',
      audioRef: null,
    },
    {
      id: 'work_flow',
      target: 'I went to work. The meeting took three hours. I have many emails.',
      native: 'Ndaenda kubasa. Musangano watora maawa matatu. Ndine mae-mail mazhinji.',
      literal: 'no article (work), the (specific meeting), many (countable)',
      emoji: '💼',
      phonetic: 'aw-ee went tu wurk...',
      audioRef: null,
    },
    {
      id: 'evening_flow',
      target: 'I came home. These children are mine. I love my family.',
      native: 'Ndauya kumba. Vana ava ndevangu. Ndinoda mhuri yangu.',
      literal: 'no article (home), these (close+plural), no article (family)',
      emoji: '🏠',
      phonetic: 'aw-ee kaym-hohm...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flowing speech — capstone",
    explanation: "Mukati mehurukuro yenyatso, articles dzese dzinoshanda pamwe chete — 'a/an' kana chinhu chitsva, 'the' kana chinhu chinozivikanwa, 'no article' pa general/abstract, plurals (regular ne irregular), 'this/that' pakunongedzera, 'some/any' pakubvunza/kupa, 'much/many' pakuyera. Kuvateedzera pakushaya kufunga ndizvo chinangwa.",
    examples: [
      { target: 'I have two children. The children love music.',  native: 'Ndine vana vaviri. Vana vacho vanoda mumhanzi.' },
      { target: 'Some days are hard. This day is good.',          native: 'Mamwe mazuva akaomera. Zuva iri rakanaka.' },
      { target: 'How much time do you have? I have many tasks.',  native: 'Une nguva yakadini? Ndine mabasa mazhinji.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Sarudza articles dzakakwana — yose mu paragraph',
      sentence: 'I woke up at 6. I had _____ coffee and _____ apple. _____ apple was sweet.',
      options: ['a / an / The', 'an / a / The', 'the / a / An'],
      correct: 'a / an / The',
      context: 'A coffee (consonant), an apple (vowel), The apple (now specific).',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (cherechedza articles + plurals)',
      prompt: 'Ndine vana vaviri. Vana vangu vanoda mumhanzi.',
      correct: ['I have two children. My children love music.', 'I have two children. My children love music'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Une nguva yakadini? Ndine basa rakawanda.',
      correct: ['How much time do you have? I have a lot of work.', 'How much time do you have? I have much work.', 'How much time do you have? I have many tasks.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "These books on the table are mine"',
      words: ['mine.', 'are', 'on', 'These', 'the', 'books', 'table'],
      correct: ['These', 'books', 'on', 'the', 'table', 'are', 'mine.'],
      translation: 'Mabhuku aya pamusoro petafura ndeangu',
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza much/many',
      sentence: 'I don\'t have _____ time, but I have _____ ideas.',
      options: ['much / many', 'many / much', 'much / much'],
      correct: 'much / many',
      context: 'Time = uncountable (much). Ideas = countable plural (many).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chinozosvika kuratidza A2-level kushanda kweArticles',
      question: 'Choose the most natural full sentence:',
      options: [
        { text: "I have a brother. The brother lives in Harare. He has many friends.", correct: true },
        { text: "I have brother. Brother lives Harare. He has much friends.", correct: false },
        { text: "I have the brother. A brother lives in Harare. He has many friend.", correct: false },
      ],
      explanation: 'A → the (already mentioned), Harare needs no article (proper noun specifically named), many friends (countable plural). All articles working together.',
    },
  ],

  rwenDialogue: {
    intro: "Capstone! Wakumbirwa kutsanangura zuva rako rose muChiNgezi — kubva kumangwanani kusvika manheru. Cherechedza articles dzese dzauchashandisa.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your typical day, from morning to evening.",
        native: 'Ndiudze zvauri kuita pazuva — kubva mangwanani kusvika manheru.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6. I have a cup of tea and some bread. I go to work — the office is far. I have many meetings. In the evening I come home. The children are happy to see me. I love my family.", native: '...', correct: true, feedback: "Wakwanisa zvikuru — articles dzese dzauchadzishandisa dzakaita basa! 'a cup', 'some bread', 'the office', 'many meetings', 'the children', 'my family' (no article). Iyi inhanho yepamusoro." },
          { target: "I wake up. I have tea and bread. I go to work. I have meetings. I come home. Children are happy. I love family.", native: '...', correct: false, feedback: "Chirevo chinonzwika asi 'incomplete' — pasina articles. Wedzera 'a cup of tea', 'some bread', 'the children', 'my family' kuti zvinzwike chimuChiNgezi chinatural." },
          { target: "I wake up at 6. I have the cup of tea and the bread. I go to the work. I have the many meetings.", native: '...', correct: false, feedback: "'The' yawanda zvikuru — ese hadzina basa. 'A cup' (kekutanga), 'some bread' (uncountable, positive), 'work' (no article), 'many meetings' (no article)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa Module 4. Articles dzinongoshanda kana wakatobata mufambo wadzo — uye iwe wabata. Watotanga kufunga muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Capstone recall.',
    prompts: [
      { prompt: 'I have an apple. ___ apple is red. (fill the blank)', correct: ['The', 'the'] },
      { prompt: 'How ___ children do you have? (much/many)', correct: ['many', 'Many'] },
    ],
  },

  mission: {
    title: 'Basa rePedzisira reModule 4',
    task: "Tsanangura zuva rako muChiNgezi — paragraph imwe yakaringana 5-7 mutsetse. Edza kushandisa: 'a/an' kekutanga, 'the' kechipiri, plural ne -s, irregular plural (children/people), 'this/these', uye 'some/any' kana 'much/many'. Send vakuwo kana shamwari.",
    rwenSignoff: "Wapedza grammar skeleton yeChiNgezi. Iye zvino unoziva chimiro — Module 5 inopa nyama.",
  },

  phase8: {
    scenario: "Capstone hurukuro: tsanangura zuva rako rose kushamwari yako yeChiNgezi — kubva mangwanani kusvika manheru. Articles, plurals, demonstratives, quantifiers — zvose zviri pamwe chete.",
    rwenRole: "Shamwari yauri kutsanangurira kuti zuva rako rakanaka here, anokumbira kuti utaure nezvi vanhu vauri kusangana navo, basa rauri kuita, uye zvinhu zvauri kufunga.",
    successCriteria: "Mudzidzi anoshandisa zvinhu zvinopfuura zvitanhatu kubva mu Module 4 zvakanyatsoshanda: a/an, the, no article (pa abstract/general), plural (regular kana irregular), this/that/these/those, some/any kana much/many — zvose mumufambo umwe wehurukuro.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
