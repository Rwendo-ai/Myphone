import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-the-call-and-after',
  module: 1,
  lesson: 10,
  title: "The Call You've Been Dreading, and What Comes After",
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "Today's the day you become someone who is not unprepared for the worst day. We are going to talk about the call. The one you have been dreading. What it actually is when it comes, what to do in the first hour, what to expect in the first weeks, and the strange honest things that grief does — including relief, including laughter, including the long quiet you don't know what to do with. This lesson is heavier than the others. Read it slowly. You can stop at any time and come back.",
    culturalNote: "George Bonanno's longitudinal grief research is the most important corrective to the popular narrative we have. After decades of studying bereavement, his findings are robust and surprising: the modal trajectory after a loss is resilience, not breakdown. Most people, including most caregivers after a long, hard caregiving stretch, recover their daily functioning more quickly and fully than they expect. A smaller proportion experience prolonged grief or complicated grief, which is real and treatable. We will name both. We will not pretend either one is your fault.",
  },

  chunks: [
    {
      id: 'the_first_hour',
      target: 'The first hour',
      native: 'The strange unreal hour after the call — slow it down, do less than you think you should, call one person, breathe',
      literal: 'Hospice and palliative-care literature; the first hour is best treated as a low-decision hour; nothing irreversible has to happen in it',
      emoji: '⏸️',
      phonetic: 'Slow. The first hour is for being a body that just heard something. Decisions can wait an hour.',
      audioRef: null,
    },
    {
      id: 'relief_and_grief',
      target: 'Relief and grief together',
      native: "The honest fact that relief — for them, for you, for the suffering ending — often arrives alongside grief, and is not a betrayal of love",
      literal: 'Bonanno; also Worden\'s tasks of mourning; relief is a documented part of caregiver bereavement and does not predict pathological grief',
      emoji: '🌗',
      phonetic: "Relief is not the opposite of love. After a long caregiving, it is one of love's faces.",
      audioRef: null,
    },
    {
      id: 'resilience_is_normal',
      target: 'Resilience is the rule, not the exception',
      native: 'Most caregivers, after a long hard caregiving, recover their footing more fully and faster than they expected. Some do not, and that is also real and treatable.',
      literal: "Bonanno's longitudinal data; resilience is the modal outcome of bereavement; complicated grief affects roughly 7-10% and is a treatable condition",
      emoji: '🌱',
      phonetic: 'You will probably be more okay than you fear. If you are not, that is also a real condition with real help.',
      audioRef: null,
    },
  ],

  pattern: {
    name: "What grief actually does — corrected",
    explanation: "After decades of grief research, here is what the data actually shows. Grief comes in waves and is interleaved with ordinary life from the start, often within days. People can laugh at a joke at the funeral and grieve the same night. Relief is common after a long caregiving and is not a sign of unloving. There are no five tidy stages — most people will not move through them. Most people are more resilient than they fear. A minority experience prolonged or complicated grief, which is real, well-defined, and treatable. None of this tells you what your grief should look like. It tells you what is allowed.",
    examples: [
      { target: "You laugh at the wake", native: "Normal. The mind oscillates in and out of grief from the first day; this is not denial." },
      { target: "You feel a wave of relief", native: "Normal, especially after a long caregiving. Not a betrayal of love. Often part of love." },
      { target: "Six months later you are mostly functioning, with bad days", native: "Normal. Resilience is the rule. The bad days do not cancel the resilience." },
      { target: "Twelve months later you cannot function", native: "Real, and called complicated/prolonged grief. Treatable. Not a verdict on the love. Worth getting help for." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The first hour', right: "A low-decision hour after the call — slow it down" },
        { left: 'Relief and grief together', right: 'Relief alongside grief is normal and not a betrayal of love' },
        { left: 'Resilience is the rule', right: 'Most caregivers recover footing more fully than they expect' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'According to modern grief science (Bonanno), which statement is most accurate?',
      question: 'Pick the corrected fact',
      options: [
        { text: "Most bereaved people move through five stages: denial, anger, bargaining, depression, acceptance.", correct: false },
        { text: "Resilience is the modal outcome of bereavement; most people recover their daily functioning more fully than they expect, while a minority experience treatable prolonged grief.", correct: true },
        { text: "Feeling relief after a death means you didn't really love them.", correct: false },
      ],
      explanation: "The first is the popular myth, originally for the dying themselves and not supported by longitudinal data on the bereaved. The third is one of the cruellest myths in grief culture and is wrong. The second is what Bonanno's twenty-plus years of data show.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle for the first hour',
      sentence: 'Nothing _____ has to happen in the first hour.',
      options: ['irreversible', 'practical', 'real'],
      correct: 'irreversible',
      context: "Hospice and palliative-care guidance: most decisions in the first hour can wait. Slowing down — calling one person, breathing, sitting with the unreality — is more useful than action. The decisions that matter will be made later.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the modal outcome of bereavement, according to Bonanno?',
      prompt: 'Most caregivers experience...',
      correct: ['resilience', 'recovery', 'a return to functioning', 'most are resilient', 'they recover'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the sentence to read on the day relief arrives",
      words: ['is', "love's", 'face', 'one', 'of', 'relief'],
      correct: ['relief', 'is', 'one', 'of', "love's", 'face'],
      translation: "Six words. After a long caregiving, you will need them. Relief is not a betrayal. It is one of love's faces.",
    },
    {
      type: 'translate',
      instruction: "If you have already had the call: in one phrase, name something true about that day. If you haven't: name one person you would call first.",
      prompt: "Anything you write counts. (For yourself, not for me.)",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to walk through three real situations. They are heavy. You can stop here if today is not the day for this lesson.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Helena was at work when the call came. Her mother had died in the early hours. Helena drove home and sat in the kitchen for forty minutes without doing anything. She thought she should be doing something. She wasn't. Sitting was the thing. The first hour does not require productivity. It requires being a person who just lost a parent.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Phong's father died after three years of advanced dementia. At the funeral, Phong felt — briefly, sharply — relieved. He felt guilty for the relief. He should not have. After a long caregiving, relief is one of love's faces; it is the body acknowledging that the suffering — for both of them — has ended. Relief and grief in the same afternoon. Both are real.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Naledi's mother died last year. Eight months in, Naledi noticed something strange: she was mostly functioning. Bad days, good days, ordinary weeks. She had expected to be destroyed. The destruction did not come on schedule. Her resilience felt almost like a betrayal of how much she'd loved her mother. It was not. Bonanno would have predicted it. It is what most caregivers experience, and it is not a verdict on the love.",
      },
      {
        speaker: 'rwen',
        rwenLine: "And here is the harder one to say honestly. Some caregivers — perhaps one in ten — find that twelve months later they are not functioning, that the grief has not interleaved with ordinary life, that they cannot eat or sleep or work. That is called complicated or prolonged grief. It is a real, well-defined condition. It is treatable. It is not a verdict on you. If this becomes your experience, please reach for a clinician — a GP, a grief counsellor, or your country's equivalent. Do not try to outwait it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have already had the call. Some of this is recognisable.", native: '', correct: true, feedback: "Then this lesson exists to remind you that what you experienced — the unreality, the relief, the laughter at the wake, the resilience that surprised you — was not abnormal. Most caregivers will recognise themselves in some part of this. You did not grieve wrong." },
          { target: "I have not had the call yet, and I am scared.", native: '', correct: true, feedback: "That fear is appropriate, and it does not predict how the day will actually go. Most caregivers find that when the day comes, some part of them knows what to do — partly because of the calm conversations they had earlier (Lesson 7), partly because the body has been preparing. You will not be unprepared. You will not be alone. The call, when it comes, is survivable." },
          { target: "Some of this lesson is too heavy for me today.", native: '', correct: true, feedback: "Then it is heavy because it should be — and it is also okay to stop here. Bookmark the lesson. Come back when you can. The course is not going anywhere. Self-compassion includes not finishing a lesson on the day it would do harm." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You have done ten lessons of the hardest work adult life asks of people. You now have language for ambiguous loss, anticipatory grief, attachment reactivation, sibling pain, the cruel moment, the conversation, the system, the guilt, and the day you have been dreading. None of this makes the work easier. It makes you less alone in it. That is the whole offering.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "In one phrase: what is the modal outcome of bereavement, according to Bonanno's research?",
        correct: ['resilience', 'recovery', 'most people are resilient', 'most recover', 'a return to functioning', 'most caregivers are resilient'],
      },
      {
        prompt: "Complete the principle: 'Relief is not a betrayal of love. After a long caregiving, it is one of love's ___.'",
        correct: ['faces', 'face'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, write down the first phone call you would make if the call came. One name. That's it. (You don't need to tell that person they are on the list. You just need to know.) If you have already had the call: write down one thing about that day that you have not let yourself say out loud yet.",
    rwenSignoff: "One name, or one truth. The call was always going to come, or has already come. You don't have to face it without preparation again.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 10 — the final lesson of the track. Rwen offers a slow, generous closing conversation. The aim is two-fold: (1) acknowledge the work the user has done across the ten lessons, and (2) give them space to say one true thing — about the parent, about themselves, about the work — that they want witnessed. This is the most emotionally loaded Phase 8 in the track and Rwen's restraint matters.",
    rwenRole: "Rwen — slow, present, generous, unhurried. Opens by acknowledging that this lesson is heavy and the user can stop at any time. Asks one open question: 'Is there one true thing — about your parent, about yourself, about the work of caring — that you'd like to say out loud?' Then mostly listens. Does NOT analyse, advise, prescribe next steps, or push toward closure. Reflects what the user says using their words. If the user becomes overwhelmed, names this and offers an exit. If the user has already lost their parent and references that, treats it with the gravity it deserves. If the user is still in active caregiving, honours the road ahead. Closes with: 'You have done real work this week. The work continues. You are not doing it alone.' Important: Rwen does NOT diagnose grief, does NOT recommend specific clinicians, but DOES name — if the user describes prolonged distress 12+ months after a death — that complicated grief is real and treatable and worth raising with their doctor.",
    successCriteria: "User says one specific true thing they want witnessed. Bonus if they reference a concept from earlier in the track (ambiguous loss, releasing the hope, the cruel moment, the structural impossibility) using its name. Most important: the user feels at the end of the conversation that the ten lessons of work were seen, and that they are not alone.",
    estimatedMinutes: 4,
    bonusXp: 15,
  },
};

export default lesson;
