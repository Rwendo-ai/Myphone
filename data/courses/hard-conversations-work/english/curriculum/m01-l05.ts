import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-raising-it-with-your-manager',
  module: 1,
  lesson: 5,
  title: 'Raising Something With Your Manager',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who can speak up to the person who has more power than you, without grovelling and without grandstanding. The four-part move you learned still applies. What changes is your nervous system, and the fact that the room isn't symmetrical.",
    culturalNote: "Power asymmetry isn't a flaw of the workplace — it's the structure. Pretending otherwise gets you burned. The skill in this lesson is to honour the asymmetry (your manager has positional authority over your work, your hours, sometimes your livelihood) AND speak from a position of self-respect anyway. That balance is harder than a peer conversation. It's also the one most professionals never properly learn.",
  },

  chunks: [
    {
      id: 'attachment_activation',
      target: 'Attachment activation',
      native: 'The somatic and emotional spike that happens in the body when speaking up to someone with more power',
      literal: 'Attachment theory — Bowlby, Ainsworth; extended to organisational hierarchy by Levine & Heller (the literature here is more clinical than empirical)',
      emoji: '⚡',
      phonetic: 'Heart racing, voice tightening, mind blanking, sudden urge to apologise — these are old-system responses to authority. Recognising them is most of the work.',
      audioRef: null,
    },
    {
      id: 'psychological_safety',
      target: 'Psychological safety',
      native: 'Whether the workplace tolerates honest feedback to authority without retaliation',
      literal: 'Edmondson, *The Fearless Organization* — one of the better-replicated findings in organisational psychology',
      emoji: '🛡️',
      phonetic: 'Some workplaces let you raise things. Some punish you for it. Knowing which one you\'re in is more important than the four-part move.',
      audioRef: null,
    },
    {
      id: 'status_aware_framing',
      target: 'Status-aware framing',
      native: 'Phrasing the message in a way that respects the asymmetry without self-erasure',
      literal: 'Crucial Conversations (Patterson) + sociolinguistic literature on "face-saving"; useful even where direct feedback up the hierarchy is the workplace norm',
      emoji: '🪞',
      phonetic: 'Not "you\'re wrong" — but not "I\'m so sorry to bother you" either. Something like: "I\'d like to flag something I noticed and check whether I\'m reading it correctly."',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The four-part move with one extra step',
    explanation: "The structure stays the same — observation, feeling, need, request. What changes is two things. First: a state-check beforehand is non-negotiable, because attachment activation will hijack your sentences if you don't. Second: the opening line acknowledges the asymmetry without grovelling. The aim is not to be small; the aim is to be calibrated.",
    examples: [
      { target: 'Opening: "Could I take a few minutes to flag something? I\'d like to check whether I\'m reading it right."', native: 'Status-aware. Not apologetic, not aggressive. Permits the manager to grant the floor.' },
      { target: 'Observation: "In the last three weeks, three of my deliverables have been reassigned to other people after I started them."', native: 'Camera-recordable. No "always", no character claims.' },
      { target: 'Need + request: "I\'d find it easier to deliver if I had visibility on those decisions before they happen. Could we talk through how reassignments get made?"', native: 'Names the underlying need (clarity, predictability) and asks for a doable thing (a conversation about the process).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sort each opening',
      pairs: [
        { left: '"I know you\'re busy and I\'m so sorry but..."', right: 'Self-erasing opener' },
        { left: '"Could I flag something and check I\'m reading it right?"', right: 'Status-aware opener' },
        { left: '"You need to hear this."', right: 'Antagonistic opener' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your manager interrupts with "I disagree with how you\'ve framed that." What\'s the strongest move?',
      question: 'Pick the response that holds the four-part structure under pressure',
      options: [
        { text: '"You\'re right, sorry, I shouldn\'t have brought it up."', correct: false },
        { text: '"That makes sense — I\'d still like to share what I noticed and what I\'m asking for, and then I\'m happy to hear how you see it."', correct: true },
        { text: '"Then I guess we have nothing to talk about."', correct: false },
      ],
      explanation: "The middle option holds your ground without escalating. It acknowledges the disagreement, signals you'll finish the structure (observation–feeling–need–request), and then explicitly invites their view. The other two collapse the conversation in opposite directions — one capitulates, one withdraws.",
    },
    {
      type: 'fill_blank',
      instruction: 'The non-negotiable step before speaking up to a manager',
      sentence: 'Before raising something with your manager, run a _____ check on your nervous system — heart, breath, jaw, throat.',
      options: ['state', 'spell', 'speed'],
      correct: 'state',
      context: "Lesson 1's pre-flight check is now load-bearing. Speaking up to authority will activate older systems in your body (we call this attachment activation). Naming the activation does not eliminate it. It does keep it from running the conversation.",
    },
    {
      type: 'translate',
      instruction: 'In one word — what is the workplace condition that determines whether speaking up is even safe?',
      prompt: 'Whether you can raise honest feedback up the hierarchy without retaliation: psychological ___',
      correct: ['safety', 'safe', 'safety.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle that grounds this lesson',
      words: ['the', 'is', 'aim', 'not', 'be', 'calibrated', 'small', 'be', 'to', 'to'],
      correct: ['the', 'aim', 'is', 'not', 'to', 'be', 'small', 'to', 'be', 'calibrated'],
      translation: "You can take the asymmetry seriously without erasing yourself. Calibration — not capitulation — is the move.",
    },
    {
      type: 'translate',
      instruction: 'Status-aware opener — the opening line that grants the manager a moment to engage',
      prompt: 'Could I take a few minutes to ___ something I\'ve noticed?',
      correct: ['flag', 'raise', 'mention', 'bring up', 'discuss', 'share'],
    },
  ],

  rwenDialogue: {
    intro: "Let's pressure-test your draft for the version where the listener has more power than you.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Imagine your manager is sitting across from you, slightly distracted, looking at their screen. You open with your status-aware line. They glance up and say 'sure, what is it'. Read your observation sentence in your head. Notice your body.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I felt my chest tighten and I lost my place. I want to soften the sentence.", native: '', correct: true, feedback: "That's the activation. Don't soften the sentence yet — softening at this point usually means deleting the actual content. Take one long exhale and read it again. The activation will pass once the sentence is out." },
          { target: "I read it cleanly. The sentence still feels accurate.", native: '', correct: true, feedback: "Good. That means your observation passed the camera test AND your nervous system can hold it. That's the bar. Keep the sentence." },
          { target: "I want to add a 'sorry' or 'I might be wrong but' at the front.", native: '', correct: true, feedback: "Notice the impulse, but don't act on it yet. 'Sorry' before an observation tells your manager that you don't believe your own data. If the data is right, no apology. If you're not sure, save 'I'd like to check whether I'm reading this right' — that is calibrated, not apologetic." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now imagine they push back hard. They say 'I don't agree with that read at all.' You have three real moves: hold and finish, agree and adjust, or pause and come back. None of them are wrong. But the worst move is the fourth — collapse and withdraw.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd hold and finish. The observation is accurate even if they don't like it.", native: '', correct: true, feedback: "That's a defensible move — but only if you can also genuinely hear their disagreement after. If 'hold and finish' becomes 'win the argument', it stops working." },
          { target: "I'd want to ask them more about how they see it before I push my own read.", native: '', correct: true, feedback: "Also valid — and often more effective with a manager. Their counter-data might shift your read. Listening here is not capitulation; it's the next step in the conversation you started." },
          { target: "I'd want to pause and come back. I don't think I can finish the sentence cleanly right now.", native: '', correct: true, feedback: "The most underused move in workplace conversations. 'Can we pick this up again on Thursday? I'd like to think about what you've said' is a complete and respectful answer — and it preserves the relationship for the actual resolution." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two truths to leave with. One: you can hold your ground while still being calibrated. Two: some workplaces will retaliate even for a perfectly delivered message. If you suspect that's yours, the four-part move is not the answer. The answer is to plan an exit.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'What is the term for the somatic and emotional spike that hits when speaking up to someone with more power?',
        correct: ['attachment activation', 'attachment-activation', 'activation'],
      },
      {
        prompt: 'What is the workplace condition (Edmondson\'s term) that determines whether honest feedback can be raised without retaliation?',
        correct: ['psychological safety', 'psychological-safety', 'safety'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "If your saved draft is for a manager: rewrite the opening line as a status-aware opener (no apology, no aggression). If it's for a peer or report, save the manager-version for later. Either way: this week, identify ONE conversation you'll have with a manager — not necessarily this one — where you'll practise the status-aware opener as a low-stakes warm-up. A simple flagged question counts.",
    rwenSignoff: "One opener. Low stakes. The hard one comes later — but only if your nervous system has done the easy one first.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen helps the user pressure-test the manager version of their four-part message. Specifically: rehearse the opening line, anticipate two pushback responses, and decide which of the three moves (hold-and-finish, agree-and-adjust, pause-and-come-back) the user will use for each.",
    rwenRole: "Rwen — coach-like, calm under simulated pressure. Plays the manager once or twice with a deliberately distracted or mildly defensive tone. Helps the user notice activation in real time. Does NOT escalate. Reminds the user, if appropriate, that retaliation cultures exist and that the four-part move is not always the answer — sometimes the answer is to plan an exit.",
    successCriteria: "User (1) rehearses a status-aware opener that contains no apology or aggression, (2) names at least one specific somatic activation signal they noticed during the rehearsal, and (3) commits to one of the three moves for likely pushback. Bonus if they explicitly name a fallback (e.g. 'if it goes badly, I will pause and come back next week').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
