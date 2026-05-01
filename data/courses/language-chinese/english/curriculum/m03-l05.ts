import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Àihào — Hobbies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Xǐhuān' (喜欢) is the verb 'to like'. And here's its superpower: it can swallow a whole verb after it. 'Xǐhuān kàn shū' — like to read (lit: like-look-book). Or a noun: 'Xǐhuān chá' — like tea. One verb, two doors. Once you own 'xǐhuān', you can describe ANY taste, any hobby, in one short sentence.",
    culturalNote: "Hobbies are a soft, friendly small-talk topic in China — safer ground than politics or salary. Reading ('kàn shū'), badminton ('dǎ yǔmáoqiú'), film ('kàn diànyǐng') and cooking are common conversation starters. The pattern 'Wǒ xǐhuān ___' is so productive that you can drop almost any activity in there and be understood immediately.",
  },

  chunks: [
    {
      id: 'wo_xihuan_kan_shu',
      target: 'Wǒ xǐhuān kàn shū',
      native: 'I like reading',
      literal: '(我喜欢看书) lit: I-like-look-book',
      emoji: '📚',
      phonetic: 'WAW SHEE-hwahn kahn shoo',
      audioRef: null,
    },
    {
      id: 'wo_xihuan_yundong',
      target: 'Wǒ xǐhuān yùndòng',
      native: 'I like sport',
      literal: '(我喜欢运动) lit: I-like-movement',
      emoji: '🏃',
      phonetic: 'WAW SHEE-hwahn YOON-dong',
      audioRef: null,
    },
    {
      id: 'ni_xihuan_shenme',
      target: 'Nǐ xǐhuān shénme?',
      native: 'What do you like?',
      literal: '(你喜欢什么?) lit: you-like-what',
      emoji: '🤔',
      phonetic: 'nee SHEE-hwahn shun-muh',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Xǐhuān" + verb OR + noun',
    explanation: "'Xǐhuān' is unusually flexible. (1) 'Xǐhuān' + VERB — 'xǐhuān kàn shū' (like to read), 'xǐhuān chī huǒguō' (like to eat hotpot). (2) 'Xǐhuān' + NOUN — 'xǐhuān chá' (like tea), 'xǐhuān māo' (like cats). English needs 'to' for the verb form ('like to read'). Mandarin doesn't — verbs just attach raw.",
    examples: [
      { target: 'Wǒ xǐhuān kàn diànyǐng (我喜欢看电影)', native: 'I like watching films — verb after xǐhuān' },
      { target: 'Wǒ xǐhuān māo (我喜欢猫)', native: 'I like cats — noun after xǐhuān' },
      { target: 'Wǒ xǐhuān tīng yīnyuè (我喜欢听音乐)', native: 'I like listening to music — verb again' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ xǐhuān kàn shū', right: 'I like reading' },
        { left: 'Wǒ xǐhuān yùndòng', right: 'I like sport' },
        { left: 'Nǐ xǐhuān shénme?', right: 'What do you like?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I like reading',
      correct: ['Wǒ xǐhuān kàn shū', 'Wo xihuan kan shu', 'wo xihuan kan shu', 'wǒ xǐhuān kàn shū', '我喜欢看书'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I like watching films"',
      words: ['diànyǐng', 'xǐhuān', 'Wǒ', 'kàn'],
      correct: ['Wǒ', 'xǐhuān', 'kàn', 'diànyǐng'],
      translation: 'I like watching films',
    },
    {
      type: 'fill_blank',
      instruction: "Complete — you're saying you like sport",
      sentence: 'Wǒ _____ yùndòng',
      options: ['xǐhuān', 'shì', 'zài'],
      correct: 'xǐhuān',
      context: '"Xǐhuān" + noun is the same shape as "Xǐhuān" + verb. Yùndòng (sport) sits straight after.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'What do you like?',
      correct: ['Nǐ xǐhuān shénme?', 'Ni xihuan shenme?', 'ni xihuan shenme', 'Nǐ xǐhuān shénme', 'nǐ xǐhuān shénme', '你喜欢什么?', '你喜欢什么'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right Mandarin sentence',
      question: 'How do you say "I like to listen to music"?',
      options: [
        { text: 'Wǒ xǐhuān tīng yīnyuè', correct: true },
        { text: 'Wǒ xǐhuān to tīng yīnyuè', correct: false },
        { text: 'Wǒ tīng xǐhuān yīnyuè', correct: false },
      ],
      explanation: '"Xǐhuān" + verb attaches directly. No "to" — that\'s an English crutch. And the order is fixed: like-listen-music, never listen-like-music.',
    },
  ],

  rwenDialogue: {
    intro: "Back at the language exchange café in Chengdu. Half-eaten plate of mooncakes between you. Conversation has loosened — they want to know what you actually do for fun. The 'xǐhuān' question lands.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ xǐhuān shénme?',
        native: 'What do you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ xǐhuān kàn shū hé yùndòng', native: 'I like reading and sport', correct: true, feedback: 'A verb-phrase ("kàn shū") and a noun ("yùndòng") joined with "hé" (and). Beautiful — both shapes of xǐhuān in one sentence.' },
          { target: 'Wǒ shì kàn shū', native: 'I am reading-book', correct: false, feedback: 'You used "shì" — but you need "xǐhuān" here. "Shì" is for "I am [a noun]"; "xǐhuān" is for "I like [thing/activity]".' },
          { target: 'Wǒ xǐhuān to kàn shū', native: 'I like to read book', correct: false, feedback: 'There\'s no "to" in Mandarin. The verb attaches straight to "xǐhuān": "xǐhuān kàn shū".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ yě xǐhuān kàn shū! Nǐ xǐhuān shénme shū?',
        native: 'I like reading too! What kind of books?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice 'shénme shū' — 'what books'. The same trick: question word stays where the answer goes. The pattern keeps repeating. That's how Mandarin rewards you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I like reading',
        correct: ['Wǒ xǐhuān kàn shū', 'Wo xihuan kan shu', 'wo xihuan kan shu', 'wǒ xǐhuān kàn shū', '我喜欢看书'],
      },
      {
        prompt: 'What do you like?',
        correct: ['Nǐ xǐhuān shénme?', 'Ni xihuan shenme?', 'ni xihuan shenme', 'Nǐ xǐhuān shénme', 'nǐ xǐhuān shénme', '你喜欢什么?', '你喜欢什么'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build one 'Wǒ xǐhuān ___' sentence about your real life. Anything — coffee, hiking, films, your dog. Say it out loud. The pattern is so productive that practising one sentence unlocks dozens.",
    rwenSignoff: "Tastes shared. Tomorrow: languages you speak. Zàijiàn.",
  },

  phase8: {
    scenario: "Still at the language exchange café in Chengdu — second hour, second pot of tea. The introductions are done; now you're in the easy middle of the conversation. Your partner wants to know what you actually do when you're not working. Films? Books? Climbing? They lean in: 'Nǐ xǐhuān shénme?' This is your space to riff.",
    rwenRole: "Liú Yáng (刘洋), your language partner, fully warmed up now. She'll bounce her own hobbies back and gently nudge you toward more specific descriptions ('what kind of books? Which sports?'). Patient, curious, generous with corrections.",
    successCriteria: "User produces at least TWO 'Wǒ xǐhuān ___' sentences — one with a verb after xǐhuān (e.g. 'xǐhuān kàn shū', 'xǐhuān tīng yīnyuè') and one with a noun after xǐhuān (e.g. 'xǐhuān chá', 'xǐhuān yùndòng'). Bonus: they ask 'Nǐ xǐhuān shénme?' back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
