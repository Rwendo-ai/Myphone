import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-loneliness-of-grief',
  module: 1,
  lesson: 3,
  title: "The Loneliness of Grief Other People Don't Understand",
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "If today is too heavy, you can put this down. Today's lesson is for the grief that does not get a card. The grief other people minimise, forget about, or do not believe in. The grief that, when you mention it, gets met with 'oh, but at least…' or 'it's been a while now, hasn't it?' or silence. If any of that is familiar, you are not imagining the loneliness. There is a name for what you are inside.",
    culturalNote: "The sociologist Kenneth Doka coined the term *disenfranchised grief* in 1989 — grief that society does not openly recognise, mourn, or support. Examples: the death of a pet, an ex-partner, a public figure; miscarriage and stillbirth; the loss of an estranged parent; an addiction-related death; a friend rather than a relative; the loss of someone whose relationship to you was unconventional. Disenfranchised grief is not lesser grief. It is grief without a witness, and the absence of witnesses makes it harder, not easier.",
  },

  chunks: [
    {
      id: 'disenfranchised_grief',
      target: 'Disenfranchised grief',
      native: 'Grief that does not fit the official categories — and so does not get the rituals, time off, or sympathy that more recognised losses do',
      literal: 'Doka, 1989. Examples: pet loss, miscarriage, ex-partner death, public figure, estranged relative, friend rather than family, an addiction-related death.',
      emoji: '🕯️',
      phonetic: "Real grief. Smaller witnessing. Larger loneliness.",
      audioRef: null,
    },
    {
      id: 'minimisation',
      target: 'Minimisation',
      native: "What other people do — usually well-meaning — when they make your grief smaller than it is: 'at least it was…', 'it was just a…', 'you'll find another…'",
      literal: "A predictable failure of grief support, named explicitly by Devine and Cacciatore. Often comes from the helper's own discomfort, not malice.",
      emoji: '🤐',
      phonetic: "'At least…' is rarely a kindness. It is usually the helper trying to feel better, fast.",
      audioRef: null,
    },
    {
      id: 'witness',
      target: 'A witness',
      native: 'One person — sometimes one — who can sit with the grief without trying to fix or shrink it. The single most healing relational move in bereavement research.',
      literal: 'Cacciatore — *Bearing the Unbearable*; Worden\'s tasks of mourning; the social-support literature on grief outcomes',
      emoji: '👁️',
      phonetic: "You do not need everyone to understand. You need one person who will not flinch.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why this loneliness is real',
    explanation: "Grief that is recognised socially gets rituals — funerals, leave from work, sympathy cards, casseroles, anniversaries that other people remember. Grief that is not recognised gets none of that. The loss is the same; the architecture around it is missing. This is what makes disenfranchised grief specifically lonely. The remedy is not to convince everyone. It is to find — or build — even one witness who can sit with what is real for you.",
    examples: [
      { target: 'Recognised: parent dies, you get bereavement leave, people send cards', native: 'Disenfranchised: dog dies and people say "you can get another one"' },
      { target: 'Recognised: spouse dies, neighbours bring food', native: 'Disenfranchised: ex-spouse dies, the relationship ended badly, and you are not sure you are allowed to grieve at all' },
      { target: 'Recognised: a friend lost in a road accident', native: 'Disenfranchised: a friend lost to overdose, and people speak about it in lower voices and shorter sentences' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Disenfranchised grief', right: 'Grief that society does not openly recognise or support' },
        { left: 'Minimisation', right: '"At least…" responses that make a grief smaller than it is' },
        { left: 'A witness', right: 'One person who can sit with the grief without fixing or shrinking it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is most likely to be a disenfranchised grief?',
      question: 'Pick the loss most likely to receive less social support.',
      options: [
        { text: 'A grandmother who died at 92 after a long illness', correct: false },
        { text: 'An ex-partner you had not spoken to in five years who died of an overdose', correct: true },
        { text: 'A spouse of forty years who died in their sleep', correct: false },
      ],
      explanation: "All three are real grief. The middle one is the one most people will not know how to acknowledge — because the relationship was over, the death was stigmatised, and there is no recognised role for the griever. This is exactly the kind of grief Doka named.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You do not need everyone to understand your grief. You need one ____.",
      options: ['witness', 'expert', 'fix'],
      correct: 'witness',
      context: "The bereavement-support literature converges on this finding: a single person who can be present with your grief, without minimising it, predicts better outcomes more than the size of your network.",
    },
    {
      type: 'translate',
      instruction: 'In one word — what does "at least it was…" do to your grief?',
      prompt: "It ____ it.",
      correct: ['minimises', 'shrinks', 'minimizes', 'reduces', 'diminishes', 'erases'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central counter to disenfranchisement",
      words: ['real', 'grief', 'is', 'your'],
      correct: ['your', 'grief', 'is', 'real'],
      translation: "Read it once. Then again, slower. If anyone has implied otherwise, that implication was wrong.",
    },
    {
      type: 'translate',
      instruction: "If you have a grief that other people do not understand, name it in one phrase. (For yourself. Or skip.)",
      prompt: "Examples: 'my dog'. 'my ex-husband'. 'the baby I miscarried'. 'my estranged sister'. 'the friend who overdosed'. 'my old self before the diagnosis.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to be a witness for one specific thing today, if you'll let me.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one loss that, when you mention it, you sense people don't quite know what to do with. It does not have to be the biggest one. Just one that has felt unwitnessed.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have one. I do not want to type it. Can I just hold it?", native: '', correct: true, feedback: "Yes. Just hold it. I will be quiet with you for a moment. The loss is real. You knowing that, right now, is itself a form of witnessing." },
          { target: "I have one. It is a relationship that ended badly, and they died, and I don't know what I'm allowed to feel.", native: '', correct: true, feedback: "You are allowed to feel all of it. Anger and grief and relief and confusion can all live in the same chest. The badness of the ending does not cancel the loss of the ending. Both are true." },
          { target: "I have one. It is a pet, and I have been told I am being 'too much' about it.", native: '', correct: true, feedback: "You are not being too much. The bond was real, the loss is real, the grief is real. Anyone who has told you otherwise is uncomfortable with their own grief, or has not yet had to grieve a creature they loved. Your grief is appropriate to the size of the love." },
          { target: "I have one and it is too much to bring up right now.", native: '', correct: true, feedback: "Then we leave it. The lesson does not need it. You knowing that you have it, and that it is real, is enough for today." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you brought — or didn't — your grief is real. Not because I said so. Because you carried it here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the term for grief that society does not openly recognise? (two words)",
        correct: ['disenfranchised grief', 'disenfranchised', 'unrecognised grief'],
      },
      {
        prompt: "Complete: 'You do not need everyone to understand. You need one ____.'",
        correct: ['witness'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "Today, if it is safe to do so, name your grief once — out loud or in writing — to one person you trust, or in a private note to yourself if no one safe is available. You do not owe anyone the whole story. One sentence is enough. If today is not the day, the reading was enough.",
    rwenSignoff: "Naming it does not fix it. It also does not erase it. Both of those are good news.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen offers to be a witness for one disenfranchised grief — a loss the user has not been allowed to mourn fully. The conversation is short, slow, and contains no fixing.",
    rwenRole: "Rwen — quieter than the user. Does not validate with words like 'I understand' (Rwen is an AI; that would be hollow). Instead, mirrors specific details back. Does not say 'at least.' Does not pivot to a brighter side. If the user names a stigmatised loss (overdose, suicide, complicated relationship), Rwen treats it with exactly the same gravity as any other loss. If the user wants to stop, Rwen stops without coaxing.",
    successCriteria: "User names one specific grief that has felt unwitnessed and feels even slightly less alone with it after the conversation. Bonus if they name the specific minimising thing they have heard about it (e.g. 'people keep saying it was just a dog').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
