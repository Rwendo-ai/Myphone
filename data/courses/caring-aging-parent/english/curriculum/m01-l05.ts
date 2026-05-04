import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-the-sibling',
  module: 1,
  lesson: 5,
  title: "The Sibling Who Isn't Pulling Weight",
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you stop expecting the sibling who isn't showing up to suddenly show up. We are going to look at this clearly. Not because it doesn't matter — it matters enormously — but because the version of you that keeps hoping is wearing you out faster than the caregiving itself.",
    culturalNote: "Family-systems research (Bowen and the school he founded) makes a sharp claim: when a family is under stress, members do not divide the load evenly. They divide it according to the roles each person holds in the family system, often roles set in childhood. The sibling who is not pulling weight is rarely doing so out of pure selfishness. They are running an old script. Knowing that does not make it fair. It makes it predictable.",
  },

  chunks: [
    {
      id: 'unequal_caregiving',
      target: 'Unequal caregiving',
      native: 'The reality that one sibling typically does the majority of the caregiving — and the others, by accident or design, do not',
      literal: 'Caregiving research (AARP, OECD); a robust pattern across cultures, though the gendered shape varies',
      emoji: '⚖️',
      phonetic: "Not unique to your family. Documented across millions of households.",
      audioRef: null,
    },
    {
      id: 'family_role',
      target: 'Family role',
      native: "The position you hold in your family system — caretaker, peacemaker, scapegoat, golden child, hero — usually set early and reactivated under stress",
      literal: 'Bowen family systems theory; Murray Bowen; also Virginia Satir; the roles are not personality, they are positions',
      emoji: '🎭',
      phonetic: "You are running a role. So are they. Roles can be named, sometimes renegotiated.",
      audioRef: null,
    },
    {
      id: 'release_the_hope',
      target: 'Release the hope',
      native: 'The hardest move: stopping the daily emotional bet that the absent sibling will, this time, show up',
      literal: 'ACT (Hayes) — values-aligned action in the presence of unfixable circumstance; the cost is the hoping, not the absence itself',
      emoji: '🪶',
      phonetic: "Hope is a real thing. Hoping every day for what hasn't come is a different thing.",
      audioRef: null,
    },
  ],

  pattern: {
    name: "The two costs you are paying — and only one is the sibling's fault",
    explanation: "Caregivers in unequal families pay two costs at once. The first is the practical cost: the labour you are doing that they are not. The second is the emotional cost: the running ledger in your head, the hope-resentment-hope-resentment loop that fires every time you do something they should also be doing. The first cost is real and not your fault. The second cost is real and is partly inside you. ACT is brutal about this: you cannot control whether the sibling shows up; you can choose how often you re-spend energy hoping they will.",
    examples: [
      { target: 'Practical cost: every weekend at the parent\'s house', native: 'Emotional cost: every weekend, also wishing your brother would come' },
      { target: 'Practical cost: every medication call', native: 'Emotional cost: each one accompanied by a story about what your sister "should" be doing' },
      { target: "Practical cost: this is your life now", native: "Emotional cost: the running internal lawsuit you are losing in your head" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Unequal caregiving', right: 'One sibling typically does the majority of the work' },
        { left: 'Family role', right: 'A position you hold in the family system, usually set early' },
        { left: 'Release the hope', right: 'Stopping the daily bet that the absent sibling will show up this time' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your sister has not visited your father in eight months and says she "will, soon." Which response best honours the lesson?',
      question: 'Pick the one that protects your energy without becoming bitter',
      options: [
        { text: 'Send her a long message every Sunday explaining why she should visit, and feel hurt when she doesn\'t reply.', correct: false },
        { text: 'Stop expecting visits. Make decisions based on what you can actually rely on, while keeping the door open if she ever does come.', correct: true },
        { text: 'Cut her off entirely so you stop being disappointed.', correct: false },
      ],
      explanation: "The first is the hoping-and-resenting loop, on a weekly schedule. The third is over-correction; sometimes warranted but often not, and it costs you a relative as well as a co-carer. The second is what releasing the hope actually looks like: you do not pretend they will come, and you also do not slam the door if they ever do. You stop spending energy on the bet.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'You cannot control whether the sibling shows up. You can choose how often you re-spend energy _____ they will.',
      options: ['hoping', 'demanding', 'pretending'],
      correct: 'hoping',
      context: "ACT (Hayes) calls this the difference between control (which you don't have over them) and agency (which you do have over your own attention). The labour stays. The internal lawsuit can stop.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name the second, internal cost most caregivers pay alongside the labour',
      prompt: 'The cost of __ that the sibling will show up',
      correct: ['hoping', 'hoping every day', 'hoping again', 'expecting'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the harder of the two principles",
      words: ['hope', 'is', 'release', 'the', 'the', 'work'],
      correct: ['the', 'work', 'is', 'release', 'the', 'hope'],
      translation: "Counter-intuitive but real. The hope is itself a labour. Releasing it is the work that no one teaches you to do.",
    },
    {
      type: 'translate',
      instruction: 'Name one specific thing the absent sibling has NOT done that you have stopped expecting',
      prompt: 'For yourself, not for me. Anything counts.',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three real situations. Hard ones. Read all three before you respond.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Linda has two brothers. Both live in the same city as their mother. Both have not visited in over a year. Linda lives three states away and flies in monthly. She has stopped asking. She makes decisions about her mother's care alone. She is not bitter every day — only some days. She has released the daily hope. The brothers are still her brothers.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Aroon's older brother is the eldest son in a Filipino family. By tradition he is supposed to lead the care. He doesn't. Aroon does. Aroon's mother's friends ask after the brother and praise him. Aroon does the cooking, the bathing, the medication. He has stopped telling people. He has stopped expecting the cultural script to assign credit accurately.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Tariro's only sister blocked her on WhatsApp two years ago after a fight about their father. The father is now dying. The sister has not been told because no one knows how to reach her, and Tariro is making end-of-life decisions alone. There is no clean version of this. There is only what's actually happening.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I recognise myself in this. I have been hoping for years and it has cost me.", native: '', correct: true, feedback: "Many caregivers say the same thing. The hoping is invisible labour, and like most invisible labour it accumulates. You are allowed to put it down. The relationship can stay; the daily bet doesn't have to." },
          { target: "I have a sibling who is doing some but not enough. It's complicated.", native: '', correct: true, feedback: "That is the more common case and it is harder than the absent-sibling case in some ways. The hope is more rational, the resentment is more diffuse. The same principle still applies: you can decide what you actually rely on, and stop re-spending hope on what you don't." },
          { target: "My situation is the third one or worse. There is no relationship to renegotiate.", native: '', correct: true, feedback: "Hard. Genuinely. When estrangement is overlaid on caregiving you carry both losses at once. This is one of those situations the lesson exists to honour rather than fix. You are not failing at family. You are doing what you can with what's actually here." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The labour is not divided fairly. That is not your failure. The work today is not to make it fair. It is to stop spending the second cost on top of the first.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the second cost most caregivers pay, alongside the labour, when a sibling is absent?',
        correct: ['hoping', 'the hope', 'the hoping', 'the daily hope', 'the cost of hoping', 'emotional cost', 'the running internal lawsuit', 'expecting them to show up'],
      },
      {
        prompt: "What is the one-line move ACT recommends here? Release the ___.",
        correct: ['hope'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, when the thought of your absent sibling rises — when you do something they should also be doing — silently say: 'I am stopping the bet today.' The labour stays. The hoping, just for today, doesn't.",
    rwenSignoff: "One sentence. Just for today. Tomorrow you can hope again if you want.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen invites a careful conversation about the user's specific sibling situation. This is a lesson where the user may have a lot to say. Rwen mostly listens.",
    rwenRole: "Rwen — listening, mostly. Asks one open question — 'who is the sibling who isn't pulling weight, and what specifically have they not done?' — and then mostly reflects what the user says. Does NOT diagnose the sibling, does NOT take sides, does NOT recommend confronting them. Validates the unfairness without amplifying the resentment. Closes by asking: 'what is one specific hope you could put down for this week?' and accepts whatever the user says, including 'none.'",
    successCriteria: "User names a specific sibling, a specific gap (what they haven't done), and a specific hope they could release for the next seven days. Bonus if they distinguish the practical labour from the emotional cost. The conversation succeeds even if they cannot release the hope yet — naming it is a precondition for putting it down later.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
