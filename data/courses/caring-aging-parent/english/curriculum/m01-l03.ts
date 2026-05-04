import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-anticipatory-grief',
  module: 1,
  lesson: 3,
  title: 'Anticipatory Grief Is Real Grief',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you stop telling yourself it's too soon to grieve. The grief that arrives while they are still alive is real grief. Not rehearsal. Not imagination. Not getting ahead of yourself. We are going to put a name on it and stop arguing with it.",
    culturalNote: "George Bonanno's longitudinal grief research over the last twenty years has corrected a lot of the popular wisdom about grief — including the famous Kübler-Ross five stages, which most bereaved people do not move through. One of the corrections that matters most for caregivers: grief that begins before death is not 'pre-grief' or 'preparation.' It is grief.",
  },

  chunks: [
    {
      id: 'anticipatory_grief',
      target: 'Anticipatory grief',
      native: 'The real grief that arrives while the person is still alive — the slow goodbye that begins before the goodbye',
      literal: 'Therese Rando, Bonanno; well-documented in caregivers of patients with terminal illness, dementia, and frailty',
      emoji: '🕯️',
      phonetic: 'Not rehearsal. The grief itself, arriving early.',
      audioRef: null,
    },
    {
      id: 'kubler_ross_corrected',
      target: 'Stages corrected',
      native: 'Most grieving people do not move through five tidy stages. Most are more resilient than the model predicts.',
      literal: 'Bonanno — modern grief science; the Kübler-Ross five stages were originally for the dying, not the bereaved, and the data does not support a stage trajectory',
      emoji: '📉',
      phonetic: 'If your grief is not following the stages, it is not because you are doing it wrong. The stages were wrong.',
      audioRef: null,
    },
    {
      id: 'grief_in_waves',
      target: 'Grief in waves',
      native: 'Grief comes in waves, often without warning, and is interleaved with ordinary life rather than separate from it',
      literal: 'Bonanno — the resilience-and-oscillation model; describes grief as moving in and out of awareness rather than progressing linearly',
      emoji: '🌊',
      phonetic: "Some hours are normal. Some hours are flattening. Both are how grief actually behaves.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Grief that begins before the ending',
    explanation: "When someone is dying slowly, or fading slowly, the people who love them often begin grieving long before the death. They grieve the person's old self, the future they will not have, the version of the relationship that is no longer possible. This grief is not a problem. It is the appropriate emotional response to the situation. The cultural script that says 'don't grieve them yet, they're still here' makes the experience worse, not better.",
    examples: [
      { target: "She's not gone yet — I shouldn't be crying", native: "I am crying because someone I love is leaving. The grief is not premature; it is precise." },
      { target: "I feel guilty for thinking about life after", native: "Imagining the future is not betrayal. It is part of the work the mind does when something is ending." },
      { target: "I've already cried my tears — what if I have nothing left for the funeral?", native: "Grief is not a fixed quantity that gets used up. It will come when it comes." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Anticipatory grief', right: 'Real grief that arrives before the death' },
        { left: 'Stages corrected', right: 'Most people do not move through five tidy grief stages' },
        { left: 'Grief in waves', right: 'Grief comes and goes rather than progressing linearly' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which statement is most accurate, according to modern grief research?',
      question: 'Pick the one Bonanno would endorse',
      options: [
        { text: 'Everyone moves through five stages: denial, anger, bargaining, depression, acceptance.', correct: false },
        { text: 'Most grieving people are more resilient than the popular model predicts and do not follow a stage sequence.', correct: true },
        { text: 'If you are grieving before the person dies, you are getting ahead of yourself.', correct: false },
      ],
      explanation: "The first is the popular shorthand, originally for the dying themselves, and not supported by longitudinal data on the bereaved. The second is what Bonanno's research actually shows: resilience is the modal outcome and grief moves in waves, not stages. The third is the cultural myth this lesson exists to push back on.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the corrected understanding',
      sentence: 'Grief moves in _____, not stages.',
      options: ['waves', 'circles', 'lines'],
      correct: 'waves',
      context: "Bonanno's data shows oscillation between grieving and ordinary life, sometimes hour by hour. This is not avoidance. It is how the bereaved mind actually works.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the technical name for grief that begins before the death?',
      prompt: 'The grief that arrives before the goodbye is called...',
      correct: ['anticipatory grief', 'anticipatory'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence that ends the cultural argument',
      words: ['grief', 'is', 'real', 'anticipatory', 'grief'],
      correct: ['anticipatory', 'grief', 'is', 'real', 'grief'],
      translation: "Five words. Read them. Then read them again the next time someone tells you it is too soon.",
    },
    {
      type: 'translate',
      instruction: 'Name one specific thing you have been grieving while your parent is still alive',
      prompt: 'A version of them, a future, a part of the relationship. Anything counts. (For yourself, not for me.)',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three small portraits of anticipatory grief. They are not dramatic. They are real.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Anita is making her father's birthday dinner. She knows it is probably his last birthday — his cancer is advanced. She cooks his favourite meal and cries while she peels potatoes. Her sister tells her not to be morbid. Anita is not being morbid. She is grieving while she has the chance.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Patrick visits his mother in residential care. She is healthy, mostly herself, and probably has years. But on the bus on the way home he cried for an hour, and could not have told you what about. He is grieving the slow drift of who she was before. Not premature. Precise.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Mai Tendai laughs at a joke her husband makes. He is dying. They laugh together, ordinary as anything. Then he sleeps and she sits in the dark and lets the wave come. Grief and laughter in the same afternoon. Both are real. Bonanno would call this exactly what grieving people do.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have been grieving and not allowing myself to call it that.", native: '', correct: true, feedback: "Many people in your shoes do that. The cultural script tells us grief is for after. The science says grief is for whenever the loss is real to you. It has been real for you for a while now." },
          { target: "I haven't been grieving — I've been coping.", native: '', correct: true, feedback: "Coping is a real thing and not the opposite of grief. Sometimes coping IS the grief, expressed in motion rather than tears. Both can be true. The waves may arrive later. They are still on the way." },
          { target: "I have been grieving and I'm worried I'll have nothing left for the actual death.", native: '', correct: true, feedback: "A common fear, and reassuringly wrong. Grief is not a finite reservoir that gets emptied. The grief that comes after the death is its own wave, not a continuation of this one. You will not have used it up." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Anticipatory grief is real grief. It is not a flaw in your timing. It is how love behaves when it knows what is coming.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: grief that begins before the death is called...',
        correct: ['anticipatory grief', 'anticipatory', 'pre-emptive grief', 'living grief'],
      },
      {
        prompt: 'According to modern grief research, grief moves in ___, not stages.',
        correct: ['waves'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, when a wave of grief arrives — at a song, a smell, a memory, a glimpse of them looking older — let it be there for thirty seconds. Don't fix it, don't push it away, don't apologise to yourself for having it. Then go back to whatever you were doing.",
    rwenSignoff: "Thirty seconds. The wave was going to come anyway. Today you let it.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen invites a brief conversation about one specific anticipatory loss the user is carrying. The aim is to give the user permission to grieve openly, in real time, with someone present.",
    rwenRole: "Rwen — gentle, present, unhurried. Does NOT minimise ('they're still here, hold onto that'), does NOT push the user toward acceptance, does NOT compare their grief to anyone else's. Asks one specific question — what version of this person is the user grieving? — and reflects back what they say. If the user becomes overwhelmed, Rwen names this and offers an exit. Closes with: 'The grief is allowed. So is the rest of your day.'",
    successCriteria: "User names a specific anticipatory loss in concrete terms (a version of the parent, a particular ability lost, a future that is no longer possible). Bonus if they distinguish anticipatory grief from anxiety about the future. The user does NOT need to feel resolved — they need to feel that the grief was witnessed.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
