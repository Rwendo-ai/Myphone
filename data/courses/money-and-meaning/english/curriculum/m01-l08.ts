import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-loneliness-of-more-and-less',
  module: 1,
  lesson: 8,
  title: 'The Loneliness of More — and the Loneliness of Less',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "There is a loneliness that comes with having more than the people around you, and a loneliness that comes with having less. Both are real. Both are talked about badly. The first is dismissed because we assume more should mean better. The second is dismissed because shame keeps people from saying it out loud. Today we look at both, with equal seriousness, because most adults will live in one of them at some point — and the loneliness, more than the money, is what damages the relationships.",
    culturalNote: "Brené Brown's work on belonging makes the same claim from both directions: belonging is not contingent on resources, but it is contingent on honesty about resources. George Kinder, in his life-planning work, has spent decades noticing that the relational costs of asymmetric earning are one of the most under-acknowledged sources of suffering in adult life — for both the person who has more and the person who has less.",
  },

  chunks: [
    {
      id: 'loneliness_of_more',
      target: 'The loneliness of more',
      native: 'The isolation that can come from earning, having, or inheriting more than the people you love',
      literal: 'Sociology and clinical literature on intra-family economic asymmetry; commonly observed but seldom spoken about openly',
      emoji: '🪟',
      phonetic: "Symptoms: hiding what you have, paying-for-everyone fatigue, suspicion you are loved for the money, guilt around your own life.",
      audioRef: null,
    },
    {
      id: 'loneliness_of_less',
      target: 'The loneliness of less',
      native: 'The isolation that can come from earning, having, or inheriting less than the people you love',
      literal: 'Sociology of inequality; clinical literature on shame-driven social withdrawal',
      emoji: '🪞',
      phonetic: "Symptoms: declining invitations, performing okayness, withdrawing from group plans, shame about restaurants and trips.",
      audioRef: null,
    },
    {
      id: 'honesty_about_resources',
      target: 'Honest unevenness',
      native: 'The willingness, in close relationships, to acknowledge the asymmetry rather than performing past it',
      literal: 'Brené Brown — wholeheartedness applied to economic difference; honesty as the precondition of belonging',
      emoji: '🤝',
      phonetic: "It does not erase the asymmetry. It refuses to add a layer of pretending on top of it.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Both directions cost a relationship',
    explanation: "The person with more often hides. The person with less often hides. Both hidings are forms of the same move — protecting the relationship from a truth one or both people are afraid will damage it. The truth, almost always, is less damaging than the hiding. Hiding produces silences, performances, and slow accumulating distance. Naming produces awkwardness for ten minutes and then a more honest relationship.",
    examples: [
      { target: 'The loneliness of more', native: 'A sibling who earns much more than the rest of the family stops talking about their life because every detail feels boastful — and slowly disappears from the family' },
      { target: 'The loneliness of less', native: 'A friend who can no longer afford the same trips quietly declines invitations, citing busyness — and slowly disappears from the friend group' },
      { target: 'Honest unevenness', native: '"I noticed I keep saying I\'m busy when actually this is more than I can spend right now. I would still want to see you. Could we do something different?"' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The loneliness of more', right: 'Isolation from having more than the people you love' },
        { left: 'The loneliness of less', right: 'Isolation from having less than the people you love' },
        { left: 'Honest unevenness', right: 'Acknowledging the asymmetry rather than performing past it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'According to this lesson, what most damages the close relationship in the presence of asymmetric resources?',
      question: 'Pick the answer that matches the framing',
      options: [
        { text: 'The asymmetry itself', correct: false },
        { text: 'The hiding — by either side — that keeps the asymmetry unspeakable', correct: true },
        { text: 'The fact that the people involved have different values', correct: false },
      ],
      explanation: "Asymmetry is a fact. Hiding is the move that calcifies the asymmetry into distance. Most close relationships can hold honest asymmetry; very few can survive the slow accumulation of unspoken truth.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "Both the loneliness of more and the loneliness of less are forms of _____.",
      options: ['hiding', 'humility', 'restraint'],
      correct: 'hiding',
      context: "From either side, the move is to protect the relationship from a truth — and the protection is what does the actual damage.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — have you ever experienced the loneliness of more, the loneliness of less, or both? (Just for yourself.)',
      prompt: 'I have known the loneliness of _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle of this lesson',
      words: ['than', 'less', 'is', 'damaging', 'the', 'truth', 'hiding'],
      correct: ['the', 'truth', 'is', 'less', 'damaging', 'than', 'hiding'],
      translation: "Almost always. The hiding is what slowly empties the room.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one specific relationship in which honest unevenness might be possible to practise',
      prompt: 'I could practise honest unevenness with _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's look at one specific person and the asymmetry between you.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one close person — friend, sibling, parent, partner — where there is an economic asymmetry between you. Either direction. You have more, or they do. Hold them.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now ask: in this relationship, is there hiding happening? On your side. On theirs. On both.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have more, and I hide my life from them — choices, purchases, ease.", native: '', correct: true, feedback: "The loneliness of more often shows up as a kind of throttling — you make yourself smaller in the relationship to keep the relationship safe. It works for a while. It does not work forever. Naming it is the first move." },
          { target: "I have less, and I make excuses to avoid the things I can't afford with them.", native: '', correct: true, feedback: "The loneliness of less is one of the most invisible forms of social withdrawal, because the cover stories are always plausible. Honest unevenness is one of the harder skills in adult life — and one of the most relationship-saving." },
          { target: "Both. The asymmetry has been hidden in different ways at different times.", native: '', correct: true, feedback: "Many adult relationships have moved through both directions. The skill is the same in either: a willingness to name what is true, briefly, even if naming is awkward." },
          { target: "We talk about it openly. There's no hiding here.", native: '', correct: true, feedback: "That is rare and valuable. Most relationships do not do this well. If yours does, you are doing one of the harder things adults can do together." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you saw — there is one short, honest sentence available to you, when the moment comes. You don't have to use it today. You just have to know it exists.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the move that, more than the asymmetry itself, damages a close relationship in the presence of money difference?',
        correct: ['hiding', 'the hiding', 'pretending', 'performing past it', 'hiding the truth', 'hiding the asymmetry'],
      },
      {
        prompt: 'Complete the principle: "The truth is less damaging than _____."',
        correct: ['hiding', 'the hiding'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, identify one relationship where there is economic asymmetry between you. Write down — for yourself — one sentence: 'With ___, what I have been hiding is ___.' Don't say it out loud. Just see it.",
    rwenSignoff: "One sentence. One pair of names. The doing comes later, if at all.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 8. Rwen invites a short conversation about one specific relationship marked by economic asymmetry — in either direction — and helps the user articulate one piece of hiding that has been happening. The aim is awareness, not action.",
    rwenRole: "Rwen — equally serious about both directions of asymmetry, refusing to treat 'the loneliness of more' as a luxury problem. Does NOT tell the user to have a specific conversation. Does NOT tell the user to give money or to refuse it. Helps the user articulate, in their own voice, one short, honest sentence they could say if the moment came.",
    successCriteria: "User names one specific relationship and one specific piece of hiding — in either direction. User produces one short, honest sentence that could, in principle, be said. Bonus if the user notices that the loneliness, more than the money, is what they have been suffering with.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
