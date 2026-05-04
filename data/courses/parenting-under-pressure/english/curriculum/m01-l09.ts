import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-silent-treatment-and-the-phone',
  module: 1,
  lesson: 9,
  title: 'The Silent Treatment From a Teen, the Phone in Their Hand',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Your teen won't talk to you. Their phone is welded to their hand. The harder you push, the further they retreat. Today is about how proximity — not pressure — is what brings them back.",
    culturalNote: "Adolescent withdrawal is developmental, not personal. The teen brain is rewiring its attachment system from parents toward peers; this is the work of the decade. The phone is one of the exit doors that didn't exist a generation ago, and it makes the withdrawal more efficient. None of that is the parent's failure. The response is also developmental — you stop pursuing, you stay near, you make returning easy.",
  },

  chunks: [
    {
      id: 'avoidant_protest',
      target: 'Avoidant protest',
      native: "Withdrawal as a form of communication — the silent treatment, the closed door, eyes on the phone. It is still attachment behaviour. They are showing you something is wrong by removing themselves.",
      literal: 'Bowlby — protest behaviour; avoidant attachment; Levine & Heller',
      emoji: '🚪',
      phonetic: "Silence is a sentence. Sometimes the only one they can manage.",
      audioRef: null,
    },
    {
      id: 'the_phone_as_exit',
      target: 'The phone as exit door',
      native: "Phones make withdrawal frictionless. They give a teen a place to be that is not the room with you. Not because you are bad, but because being a teenager next to a parent is hard and the phone offers reliable relief.",
      literal: 'Sherry Turkle — Reclaiming Conversation; Jean Twenge — iGen research',
      emoji: '📱',
      phonetic: 'The phone is not the enemy. It is the path of least resistance.',
      audioRef: null,
    },
    {
      id: 'proximity_not_pressure',
      target: 'Proximity, not pressure',
      native: "Sit near. Don't demand a conversation. Cook in the same kitchen. Drive without questioning. Be the safe nearby presence, not the inquisitor. Most teen openness arrives sideways, while doing something else.",
      literal: "Sue Johnson — Hold Me Tight; Daniel Siegel — Brainstorm; co-regulation in adolescence",
      emoji: '🧭',
      phonetic: "Stand close. Do not chase.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How to invite without pursuing',
    explanation: "There is a counterintuitive principle here: the harder you ask a teen to open up, the more closed they get. Direct eye-contact questioning ('How was your day? What's going on with you? Why are you so distant?') feels to a teenage nervous system like an interrogation, even when it is love. The shift: shoulder-to-shoulder, not face-to-face. Drive somewhere. Cook together. Walk. Watch something. Make the phone less necessary by being a low-pressure presence. When they do speak, do not pounce on it — receive it small. One sentence. Then something else. Their next opening becomes more likely, not less.",
    examples: [
      { target: "Teen has been silent for three days", native: "Wrong move: 'We need to talk. Sit down.' Right move: 'I'm making something. Come keep me company if you want.' If they don't, fine. If they do, talk about anything except the silence." },
      { target: "Phone in their hand at every meal", native: "Wrong move: power-struggle over the phone. Right move: a small, predictable rule ('phones in the bowl during meals') applied without drama. The drama is more damaging than the phone." },
      { target: "Silence after a hard event you know about", native: "Wrong move: ask for a debrief. Right move: 'I know today was hard. I'm here when you want, and you don't have to talk about it. Want to watch the same thing?' Side by side. No demand." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Avoidant protest', right: 'Withdrawal as a form of communication — silence as a sentence' },
        { left: 'The phone as exit', right: 'A frictionless way out of being next to a parent' },
        { left: 'Proximity, not pressure', right: 'Stand close, do not chase' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your teen has been quiet for days. The wisest first move is...',
      question: 'Pick the move this lesson recommends',
      options: [
        { text: "Sit them down for a serious face-to-face conversation about what's wrong", correct: false },
        { text: "Invite them shoulder-to-shoulder into a low-pressure shared activity", correct: true },
        { text: "Take their phone away so they have to engage with you", correct: false },
      ],
      explanation: "Direct interrogation feels like a threat to a teen nervous system. Removing the phone escalates the power struggle. Shoulder-to-shoulder activity — driving, cooking, walking — is the format in which most teens will actually start to talk, often about something unrelated first.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Stand close. Do not _____.',
      options: ['chase', 'speak', 'watch'],
      correct: 'chase',
      context: "Pursuit triggers the avoidant system. Proximity without pursuit is the missing skill — you are available, you are not demanding. Most teens, given that, will eventually drift back into range.",
    },
    {
      type: 'translate',
      instruction: 'Most teen openness arrives ___',
      prompt: "Sideways, while doing something ___",
      correct: ['else', 'different', 'other', 'unrelated', 'side by side', 'sideways', 'in motion', 'with hands busy'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's reframe",
      words: ['the', 'sentence', 'is', 'silence', 'a'],
      correct: ['silence', 'is', 'a', 'sentence'],
      translation: "We dropped 'the' because 'silence is a sentence' is the cleaner read. Their not-speaking is information. Your job is to be near it without trying to translate it back at them.",
    },
    {
      type: 'translate',
      instruction: 'When a teen does open up — even one sentence — what do you NOT do?',
      prompt: "Do not ___",
      correct: ['pounce', 'pounce on it', 'dig in', 'dig further', 'overreact', 'pressure for more', 'push for more', 'interrogate', 'ask too much', 'demand more', 'follow up too hard', 'make a big deal'],
    },
  ],

  rwenDialogue: {
    intro: "Talk to me about your teen, or the teen in your life. Even if you're a grandparent or stepparent — the principles still hold.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "What does the silence look like in your house?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "They go straight to their room after school. Closed door, headphones, phone. No dinner with us.", native: '', correct: true, feedback: "Classic adolescent withdrawal. Try this for one week: don't ask them to come out. Once a day, knock once and offer something small ('I'm getting tea, want one?'). No follow-up if they say no. The point is the predictable invitation that costs them nothing to refuse. Most teens, after a week of this, start to open the door themselves." },
          { target: "We talk, but it's all surface — they never tell me anything real.", native: '', correct: true, feedback: "Surface is fine. Surface is where the trust is built that lets the deep stuff arrive later, usually unprompted, usually in the car or at midnight. Don't push for depth. Stay reliably present at surface, and the deeper conversations will arrive on their schedule, not yours." },
          { target: "They are angry with me about something specific and won't say what.", native: '', correct: true, feedback: "You can name that without demanding a response. Once: 'I can tell something is wrong between us. I'm not going to push you to talk about it tonight. When you're ready, I'm ready.' Then mean it. Don't bring it up again for 48 hours. Most teens will come to you within a week if the offer is real." },
          { target: "They're on the phone constantly and I don't know how to compete.", native: '', correct: true, feedback: "Don't compete. The phone wins every direct fight. Instead, make a few phone-free pockets a steady part of life — meals, car rides, the last hour before sleep — held without drama. Inside those pockets, do something they actually like. The phone is a path of least resistance; you are creating slightly more attractive alternatives, not banning the path." },
          { target: "I'm a grandparent and the teen lives with me. The dynamic feels different.", native: '', correct: true, feedback: "Same principles, different starting point. Grandparents often have less power but more grace — you are not the parent they are individuating from. Use that. Be the steady, low-stakes adult. Teens often confide in grandparents what they will not tell parents, precisely because the relationship has less performance in it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The withdrawal isn't a verdict on you. It's their work — separating, individuating — that they will eventually come back from. Your job is to be findable when they do.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Stand close. Do not ___',
        correct: ['chase', 'pursue', 'pressure', 'demand', 'push', 'chase them'],
      },
      {
        prompt: 'Most teen openness arrives sideways, while doing ___',
        correct: ['something else', 'something', 'an activity', 'something unrelated', 'other things', 'else', 'something side by side', 'a shared activity'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "In the next 24 hours, offer one shoulder-to-shoulder invitation to a teen or quiet child in your life — a drive, a cook, a walk, watching the same thing in the same room. No conversation demand. They can say no. The invitation itself is the mission.",
    rwenSignoff: "One offer. No agenda. The presence is the point.",
  },

  phase8: {
    scenario: "User has just finished Lesson 9. Rwen helps them design one specific shoulder-to-shoulder invitation for the teen (or withdrawn child / grandchild) in their life — what activity, when, what they will and won't say.",
    rwenRole: "Rwen — practical, low-pressure, never moralising about phones or screens. Helps the user pick something the teen would plausibly accept and rehearses what to do if the teen says no.",
    successCriteria: "User identifies one specific activity, one specific time in the next 24 hours, and one short low-pressure invitation script. Bonus if they articulate that the goal is the offer, not the teen's acceptance.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
