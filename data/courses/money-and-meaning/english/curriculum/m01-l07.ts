import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-money-in-the-rooms-you-love-in',
  module: 1,
  lesson: 7,
  title: 'Money in the Rooms You Love In',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Money in close relationships is rarely about the money. A partner spends and you flinch — the flinch is sometimes about the spending and sometimes about a much older feeling of being out of control. A sibling asks for help and you say yes when you wanted to say no — the yes is sometimes about love and sometimes about a contract that was written before either of you could read. A parent who gave or didn't give shows up at every wedding, every holiday, every quiet night. The rooms you love in are also the rooms money lives in. Today we sit with that.",
    culturalNote: "John and Julie Gottman's longitudinal research on couples is unambiguous: the way couples talk about money is one of the strongest predictors of relational outcomes — not the amount, the talk. Esther Perel describes money in intimate relationships as a 'projection screen' for older feelings about safety, fairness, and worth. We borrow her language without flattening it. We are not solving any specific relationship today. We are looking at the shape of money in the relationships we already have.",
  },

  chunks: [
    {
      id: 'money_silence_in_love',
      target: 'Silent money',
      native: "Topics you and the people closest to you have implicitly agreed not to discuss — about earnings, debts, bills, support, lent amounts",
      literal: 'Gottman research — silence around money is one of the most reliable predictors of relational distress',
      emoji: '🤐',
      phonetic: 'What is unsaid in close relationships does not stay unsaid. It just speaks through other things.',
      audioRef: null,
    },
    {
      id: 'projection_screen',
      target: 'Money as projection',
      native: 'When a money disagreement is actually carrying a much older feeling about control, fairness, worth, or safety',
      literal: 'Esther Perel; psychodynamic literature — money fights are very often not about money',
      emoji: '🎭',
      phonetic: 'The argument is on the surface. The wound is older.',
      audioRef: null,
    },
    {
      id: 'money_contract',
      target: 'The unwritten contract',
      native: "An implicit money agreement in a family or relationship — who pays, who receives, who lends, who hides — that nobody ever explicitly negotiated",
      literal: 'Family-systems theory — invisible loyalties; Boszormenyi-Nagy on intergenerational ledgers',
      emoji: '📜',
      phonetic: 'You signed it before you could read. You can still examine it now.',
      audioRef: null,
    },
  ],

  pattern: {
    name: "If you can't talk about money with someone you love, money is talking for you",
    explanation: "The healthiest relationships, around money, are not the ones with the most money. They are the ones where money can be spoken about without either person disappearing — without one becoming the punisher and the other the punished, without one performing competence and the other performing helplessness, without silences that calcify into resentment. The aim of this lesson is not to fix any specific conversation. It is to notice that the conversation exists, somewhere, even if nobody has had it out loud yet.",
    examples: [
      { target: 'Silent money', native: 'You and your partner have not actually said how you feel about your different earnings — but it shows up in who chooses the restaurant, who feels watched, who makes the small jokes' },
      { target: 'Money as projection', native: 'A small spending disagreement triggers a much bigger argument because one of you is hearing "you don\'t care about our future" instead of "I would have bought a different thing"' },
      { target: 'Unwritten contract', native: 'The eldest sibling has, without anyone ever saying so, become the one who helps the parents — and resentment is building that nobody has language for yet' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Silent money', right: 'Money topics close people have implicitly agreed not to discuss' },
        { left: 'Money as projection', right: 'When a money fight is carrying a much older feeling' },
        { left: 'The unwritten contract', right: 'An implicit money agreement no one explicitly negotiated' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A small disagreement about a single purchase becomes a big argument. According to this lesson, what is most likely happening?',
      question: 'Pick the answer that fits the framing',
      options: [
        { text: 'One of you is simply being unreasonable about the purchase', correct: false },
        { text: 'The disagreement is acting as a projection screen for an older, larger feeling about control, fairness, or safety', correct: true },
        { text: 'You need a stricter budget', correct: false },
      ],
      explanation: "When a small thing produces a big reaction, the size of the reaction is information — about a feeling that is older than the disagreement. Naming that is the work.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "If you can't _____ about money with someone you love, money is talking for you.",
      options: ['talk', 'pay', 'compete'],
      correct: 'talk',
      context: "Silence around money in close relationships is itself a form of communication — a particularly costly one.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one money topic you have not discussed openly with someone close to you',
      prompt: 'A topic I have not raised yet: _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle',
      words: ['for', 'is', 'you', 'money', 'talking'],
      correct: ['money', 'is', 'talking', 'for', 'you'],
      translation: "When you don't speak, the silence speaks. The silence is rarely kind.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one unwritten contract about money in your family or relationship that no one ever actually negotiated',
      prompt: 'The unwritten rule is: _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "We are going to look — gently — at one money pattern in one of your close relationships.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Pick one person. A partner. A parent. A sibling. A close friend. Bring them to mind. Now ask: where does money sit between us? In our talking, our silences, our jokes, our flinches, our resentments?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "We talk easily and fairly. Money is not a big charge between us.", native: '', correct: true, feedback: "That is rare and worth noticing. Most adults do not have this with anyone. If you have it with one person, the relationship is doing real work." },
          { target: "We don't talk about it directly. There's a polite silence around it.", native: '', correct: true, feedback: "Polite silences calcify. They rarely stay polite forever. Naming, just to yourself, that there is a silence — and what it might be protecting on each side — is the first move." },
          { target: "There's a recurring argument about something small that is really about something bigger.", native: '', correct: true, feedback: "Classic projection territory. The aim is not to win the surface argument. It is to find language for the deeper feeling — usually about control, fairness, safety, or worth." },
          { target: "There's an unspoken rule — about who pays, who lends, who is in charge — that nobody negotiated.", native: '', correct: true, feedback: "Unwritten contracts are real contracts. They produce real resentment when they are unfair, and real safety when they are honoured. The work is bringing them, slowly, into language." },
          { target: "I owe them money, or they owe me, and we have not talked about it.", native: '', correct: true, feedback: "This is one of the most common sources of slow-corroding distance in close relationships. The unaddressed amount becomes louder than the original loan. Whatever the next move is, it is a real conversation, and it is workable." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You don't have to do anything about it today. You don't have to bring it up. You just have to know, with one specific person, what the shape is. From that knowing, the next conversation gets easier — or, sometimes, possible at all.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Complete the principle: \"If you can't talk about money with someone you love, money is _____ for you.\"",
        correct: ['talking', 'speaking'],
      },
      {
        prompt: "In one phrase: what is the 'unwritten contract'?",
        correct: ['an implicit money agreement that nobody negotiated', 'an implicit money rule no one explicitly negotiated', 'a money agreement no one ever discussed', 'an unspoken money agreement nobody negotiated', 'an implicit money agreement that was never spoken'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, identify one money topic with one person close to you that has gone unspoken. Don't bring it up yet. Just write down — for yourself — one sentence: 'With ___, the unspoken thing is ___.' That's the whole assignment.",
    rwenSignoff: "Naming it for yourself comes before naming it to them. One sentence. That's enough.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen invites a short conversation about one specific close relationship and the way money lives in it. The aim is to help the user articulate the shape of money in that relationship — silent, projected, contracted, contested — without telling the user what to do about it.",
    rwenRole: "Rwen — careful, relational, non-prescriptive. Does NOT tell the user to have a particular conversation, lend or not lend, or take a side. Helps the user describe the shape of money in the relationship and notice one feeling underneath it. If the user is in or near financial abuse, Rwen names that there are real resources for that and gently signposts that this lesson is not a replacement for actual support.",
    successCriteria: "User names one close relationship and articulates one specific money pattern in it — silent, projected, contracted, or contested. Rwen does not prescribe action. Bonus if the user discovers that the surface money issue is carrying an older feeling.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
