import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-what-your-parents-taught-you',
  module: 1,
  lesson: 2,
  title: 'What Your Parents Taught You Without Saying It',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Most of what you believe about money, you were never directly told. You absorbed it. You watched your parents fight about it, or watched them not fight about it. You watched them refuse a thing you wanted and then buy a thing for themselves. You watched a grandparent count out the same amount of cash, year after year. By the time anyone explicitly taught you about money, you already had a religion.",
    culturalNote: "Family-systems researchers and clinicians who work with financial therapy clients (e.g. the work emerging from Brad Klontz and others) report a consistent pattern: the loudest money lessons in childhood were almost never spoken. They were modelled. George Kinder's first stage of money maturity calls this the *innocence* phase — the period in which we inherit our family's money story without knowing we are inheriting anything at all.",
  },

  chunks: [
    {
      id: 'inherited_belief',
      target: 'Inherited belief',
      native: 'A money belief you absorbed from your family without ever choosing it',
      literal: 'Family systems / financial therapy — the silent rules learned by observation, often unconscious until named',
      emoji: '🧬',
      phonetic: 'Examples: "Money is dirty." "We don\'t talk about it." "Asking is shameful." "More is safer."',
      audioRef: null,
    },
    {
      id: 'money_silence',
      target: 'The family silence',
      native: 'The topics about money your family never discussed openly — and what those silences taught',
      literal: 'Bowen family-systems theory — what is not said is often louder than what is said',
      emoji: '🤫',
      phonetic: 'A silence is also an instruction. The instruction is: this is not for talking about.',
      audioRef: null,
    },
    {
      id: 'naming_the_inheritance',
      target: 'Naming the inheritance',
      native: 'The slow act of identifying the unspoken rules so you can choose, as an adult, which ones to keep',
      literal: 'Narrative therapy — externalising the story; ACT defusion applied to family-of-origin scripts',
      emoji: '🪞',
      phonetic: 'You cannot decide whether to keep something you have not named.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'You inherited a money story',
    explanation: "Every family has a money story. Some stories are explicit. Most are not. The story is the sum of what your parents did with money, what they did not do, what they refused to talk about, what they fought about, what they were proud of, what they were ashamed of, and what they hid. You learned that story by being in the room. The work of the rest of your life is deciding which parts of it are yours.",
    examples: [
      { target: 'Parents who never spoke about money', native: 'You may have learned: this is private, shameful, or dangerous to discuss' },
      { target: 'A parent who shamed a sibling for spending', native: 'You may have learned: spending is risky; or, alternatively, that money is a way one person controls another' },
      { target: 'Parents who hid a debt', native: 'You may have learned: money problems are unspeakable; or that the appearance of having must be defended at all costs' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Inherited belief', right: 'A money belief you absorbed without choosing' },
        { left: 'The family silence', right: 'What was not said about money — and what the silence taught' },
        { left: 'Naming the inheritance', right: 'Identifying the unspoken rules so you can choose what to keep' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is most likely to be an inherited belief about money?',
      question: 'Pick the example that fits the lesson best',
      options: [
        { text: 'A specific budgeting method you read in a book last year', correct: false },
        { text: 'A subtle conviction that asking for help with money is shameful — one you have never examined', correct: true },
        { text: 'A new feeling you noticed for the first time today', correct: false },
      ],
      explanation: "Inherited beliefs are usually old, unchosen, and operate below the level of conscious thought. The middle option fits all three.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You cannot decide whether to keep something you have not _____.",
      options: ['named', 'paid', 'saved'],
      correct: 'named',
      context: "Naming an inherited belief is not the same as rejecting it. It is the precondition for being able to choose at all.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what was the loudest unspoken rule about money in your home growing up? (Anything you write is for you, not for me.)',
      prompt: 'In my home growing up, money was treated as _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: "Build the orienting claim of this lesson",
      words: ['silence', 'is', 'a', 'also', 'instruction', 'an'],
      correct: ['a', 'silence', 'is', 'also', 'an', 'instruction'],
      translation: "What was not said in your family is often louder than what was.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is one inherited belief you might not have chosen for yourself if you were starting fresh?',
      prompt: 'I might not have chosen the belief that money is _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's surface one inherited belief. Just one. We are not trying to fix it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of the home you grew up in. When money came up — at the dinner table, in arguments, in moments of bills arriving, in moments of buying or refusing to buy — what was the dominant emotional tone? Stress, secrecy, pride, shame, generosity, fear, control? Don't pick the right answer. Pick the truest one.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Stress and quiet panic. Money felt like something we were always one wrong move away from running out of.", native: '', correct: true, feedback: "That tone often becomes a permanent low-frequency hum in adult life — a feeling of impending lack even when the numbers say otherwise. Naming it is the first move." },
          { target: "Secrecy. Money was simply not discussed.", native: '', correct: true, feedback: "Silence as an inheritance is one of the most common patterns. It often shows up later as difficulty asking partners or friends about money — even when asking is the right move." },
          { target: "Pride. We had little but acted as if we had more.", native: '', correct: true, feedback: "The performance of having is its own inheritance. It can show up as shame about asking for help, or about admitting financial difficulty even to people who would not judge you." },
          { target: "Generosity. There was always a cousin or neighbour at the table.", native: '', correct: true, feedback: "A generous household is a real gift, and one whose shadow is sometimes the difficulty of saying no — even when no is the right answer." },
          { target: "I genuinely don't know. The whole topic was invisible to me.", native: '', correct: true, feedback: "That itself is an inheritance — money as something so unspoken you barely noticed it was happening. That noticing, right now, is the start of seeing it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hold that for a second. Whatever you named — stress, secrecy, pride, generosity, absence — there is a part of you that is still living inside that tone. The work is not to reject it. The work is to know it is there.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is an "inherited belief" about money?',
        correct: ['a money belief you absorbed from your family', 'a belief about money you absorbed without choosing', 'a money belief learned from family without choosing it', 'a belief inherited from family you did not choose', 'a belief about money absorbed without choosing it'],
      },
      {
        prompt: 'Complete the principle: "A silence is also an _____."',
        correct: ['instruction', 'instruction.'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, write down — on paper, or on your phone — one sentence in this exact form: 'In my home, money was treated as ____.' Fill in the blank with the truest word you can find. Don't show it to anyone. Don't try to act on it. Just have it.",
    rwenSignoff: "One sentence. One word in the blank. That's enough for today.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen invites a short, careful conversation in which the user names one inherited belief about money from their family of origin. Rwen does not analyse, diagnose, or pathologise the family. The aim is awareness — letting the user articulate one thing they had not said out loud before.",
    rwenRole: "Rwen — gentle, curious, careful around family. Does NOT criticise the user's parents or family. Does NOT psychoanalyse. Reflects back what the user names and asks one open question, e.g. 'Where do you notice that belief showing up in your life now?' If the user gets emotional, names that this is tender material and reminds them they can stop at any time.",
    successCriteria: "User names one specific inherited belief in concrete language ('we never talked about money', 'my father said only fools spent money', 'my mother gave more than she had'). User makes one connection to how that belief operates in their adult life now. Rwen does not pathologise, advise, or rush. Bonus if the user notices a tenderness around the inheritance — the belief is not just a problem; it came from somewhere with its own pain.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
