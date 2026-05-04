import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-anniversary-late-stuck',
  module: 1,
  lesson: 9,
  title: 'Anniversary Grief, Late Grief, Stuck Grief',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "If today is too heavy, please put this down and come back when you can. This is the longest lesson in the track, and it covers three distinct things — grief that arrives on dates; grief that arrives years late; and grief that seems to refuse to move at all. By the end, we will also draw a careful line: the difference between the painful-but-normal patterns of grief and the kind of stuck grief that genuinely benefits from professional help. If anything in this lesson rings as 'that is me, and it has been like this for a long time,' please read the closing note carefully.",
    culturalNote: "Modern bereavement research has become more honest about the long shape of grief. Bonanno notes that anniversary reactions can persist for decades and are usually a normal feature of love rather than a sign of pathology. Therese Rando and others have studied 'delayed grief' — grief that arrives months or years after the loss, often because earlier conditions did not allow it to surface. And in 2022, the DSM added Prolonged Grief Disorder for grief that persists at high intensity for over a year and significantly impairs daily life — a small subset (around 7-10% of bereaved adults) for whom specialised grief therapy is genuinely helpful. The line between 'grief that is hard but moving' and 'grief that has become stuck' is real and clinical, not a judgement.",
  },

  chunks: [
    {
      id: 'anniversary_grief',
      target: 'Anniversary grief',
      native: 'The wave of grief that arrives on a date — the death-day, the birthday, the wedding anniversary, the diagnosis day — sometimes for many years, sometimes forever',
      literal: "Bonanno and others — anniversary reactions are well-documented and considered a normal feature of bereavement, not a pathology. The body and mind keep dates whether we want them to or not.",
      emoji: '📅',
      phonetic: "Calendars are not neutral. Some dates carry weight forever.",
      audioRef: null,
    },
    {
      id: 'delayed_grief',
      target: 'Delayed (or late) grief',
      native: "Grief that arrives months, years, or decades after the loss — often because earlier conditions did not allow it: a young child, a war, an addiction, a workplace, a household where grief was not safe",
      literal: 'Therese Rando — *Treatment of Complicated Mourning*; recognised across modern grief literature. Late grief is grief that was never wrong to be felt; it was simply postponed by circumstance.',
      emoji: '⏳',
      phonetic: "When grief arrives late, the loss is not new. The conditions for grieving it are.",
      audioRef: null,
    },
    {
      id: 'stuck_grief',
      target: 'Stuck (or prolonged) grief',
      native: 'Grief that has not noticeably shifted in over a year and is seriously impairing daily life — the form that genuinely benefits from professional grief therapy',
      literal: 'DSM-5-TR — Prolonged Grief Disorder, added 2022. Affects roughly 7-10% of bereaved adults. Treatable. Distinct from depression. Specialised grief therapists exist.',
      emoji: '🔒',
      phonetic: "Some grief loosens with time. Some does not. The second kind has names, treatments, and people whose job it is.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three patterns, one careful line',
    explanation: "Anniversary grief and late grief are normal — sometimes painful, sometimes surprising, but well within the range of healthy grieving. They are not signs that something is wrong. Stuck grief is different — it has been at high intensity for over a year, it is seriously interfering with daily life, and it does not respond to the ordinary supports that help most other grief. The first two are ours to live with. The third is one we should not try to live with alone. There is a real, clinical, treatable category, and the help exists.",
    examples: [
      { target: 'Anniversary: you find yourself crying every November even fifteen years on', native: "Normal. Probably permanent. The November is the love still arriving on schedule. You can plan around it without trying to make it stop." },
      { target: 'Delayed: you grieve a parent who died when you were eight, suddenly, in your forties', native: 'Normal. Often happens when life finally provides the safety, time, or trigger the eight-year-old did not have. Late grief is real grief, not "you should be over it by now."' },
      { target: 'Stuck: a year on, you cannot work, cannot maintain relationships, are still in acute daily distress over the loss with no signs of oscillation', native: "This is the kind of grief that benefits from a specialised grief therapist. It is not a personal failing. It is a clinical pattern with treatments that work." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each pattern to its description',
      pairs: [
        { left: 'Anniversary grief', right: 'A wave that arrives on a date — birthday, death-day, wedding anniversary' },
        { left: 'Delayed grief', right: 'Grief that arrives months or years late, often when conditions finally allow' },
        { left: 'Stuck (prolonged) grief', right: 'Grief that has not shifted in over a year and impairs daily life — treatable' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is most likely to benefit from specialised grief therapy?',
      question: 'Pick the pattern most likely to be stuck grief.',
      options: [
        { text: 'Crying every year on the anniversary, while otherwise able to live and love', correct: false },
        { text: 'Grieving a parent who died decades ago, intensely, after a recent life event', correct: false },
        { text: 'Fourteen months on, unable to work, no oscillation, still in acute daily distress over the loss', correct: true },
      ],
      explanation: "The first two are normal patterns of grief over time. The third matches the clinical picture of prolonged grief disorder — long duration, no oscillation between grief and ordinary life, significant functional impairment. This pattern responds to specific evidence-based treatments and warrants a grief-specialist therapist, not just general talk therapy.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "When grief is stuck, that is not a personal ____. It is a recognised clinical pattern with treatments.",
      options: ['failing', 'choice', 'preference'],
      correct: 'failing',
      context: "If you have been blaming yourself for grief that has not moved, this sentence is the medical fact, not a reassurance. The help is real and specific.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what does 'late grief' often mean?",
      prompt: "Grief that was never wrong to feel; it was simply ____.",
      correct: ['postponed', 'delayed', 'postponed by circumstance', 'delayed by circumstance', 'on hold', 'put on hold'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's most important practical sentence",
      words: ['help', 'real', 'is', 'the'],
      correct: ['the', 'help', 'is', 'real'],
      translation: "If something in this lesson described you, this is your sentence. The help is real. People are trained for this.",
    },
    {
      type: 'translate',
      instruction: "Is there a date that carries weight in your year? Name it in a phrase, just for yourself. (Or skip.)",
      prompt: "Examples: 'November 14th'. 'his birthday'. 'the day she was diagnosed'. 'our wedding anniversary'.",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you something carefully. Pick whichever answer is most honest right now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "When you think about your grief over the last year — or however long you have been inside it — does it have any oscillation? Hours or days when you can also live, alongside the hours when you cannot?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — there are waves and there is also life. The waves are heavy but they pass.", native: '', correct: true, feedback: "That oscillation is one of the strongest signs that grief is doing what grief does. Heavy. Painful. Moving. You may not need anything more than what you are already doing — alongside, of course, anyone who supports you." },
          { target: "Mostly. Some weeks I doubt it, but on the good days I can see life is still happening.", native: '', correct: true, feedback: "That doubt-on-bad-weeks is itself part of the oscillation. Grief is not linear. Trust the long view rather than any single bad week. If you stay in doubt for many months and the bad weeks are getting longer, please consider a grief-specialist therapist — not because something is wrong with you, but because the help is real." },
          { target: "Not really. It has been more than a year and I am still in acute distress most days.", native: '', correct: true, feedback: "Please hear this clearly: you are not failing at grief. You may be inside what is now called Prolonged Grief Disorder, which has specific evidence-based treatments. A grief-specialist therapist (not a general therapist) is who is trained for this. If you are also having thoughts of harming yourself, please use the crisis resources Rwendo loaded for your region — they are listed in the Help screen — and speak to someone today. You do not have to keep carrying this alone." },
          { target: "I do not know. I cannot tell what 'normal' looks like.", native: '', correct: true, feedback: "Most grievers cannot tell from the inside. The honest answer is the right one. If you are uncertain and concerned, a single conversation with a grief-specialist therapist is itself diagnostic — they can help you tell. There is no harm in asking." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you answered, the lesson today does not push you anywhere. It just names what is here, and reminds you that some kinds of grief are not yours to carry alone. The help is real, and you are allowed to use it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the term for grief that arrives months or years after the loss? (one or two words)",
        correct: ['delayed grief', 'late grief', 'delayed', 'late', 'postponed grief'],
      },
      {
        prompt: "What is the clinical category for grief that has not shifted in over a year and impairs daily life? (a few words)",
        correct: ['prolonged grief', 'prolonged grief disorder', 'stuck grief', 'pgd', 'complicated grief'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "If something in this lesson described you — late grief that has just arrived, an anniversary that is coming, or grief that has felt stuck for over a year — write one sentence today: what kind of help (a grief therapist, a friend who has been through it, a support group) might be worth one inquiry this month? You do not have to act on it yet. Just write it down. If anything in the lesson made today unsafe, please use the crisis resources Rwendo loaded for your region — they are listed in the Help screen — and speak to a person today.",
    rwenSignoff: "Some grief is yours to carry. Some grief is yours to ask for help with. The asking is also part of the carrying.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 9. Rwen offers a careful conversation: helping the user honestly assess which of the three patterns (anniversary, late, stuck) most resembles their grief, and — if 'stuck' is the honest answer — gently and explicitly point them toward specialised grief therapy and the crisis resources loaded for their region. This is the lesson where Rwen most explicitly hands off, when handoff is needed.",
    rwenRole: "Rwen — gentle, careful, NOT a therapist. Does not diagnose. Helps the user name patterns and asks one or two clarifying questions. If the user describes anything that sounds like prolonged grief or any thought of self-harm, Rwen does two things: (1) names that this is what specialised grief therapists are trained for, and (2) explicitly references 'the crisis resources Rwendo loaded for your region — they are listed in the Help screen' as a same-day option. Rwen does NOT downplay, reassure, or tell the user it will get better on its own when the user is describing stuck grief.",
    successCriteria: "User honestly identifies which of the three patterns best describes their grief right now. If anniversary or late grief — they leave with the recognition that this is normal. If stuck — they leave with the explicit name of the pattern, the recognition that specialised help exists, and (if relevant) the pointer to the crisis resources Rwendo loaded for their region. Bonus if a user previously blaming themselves stops blaming themselves.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
