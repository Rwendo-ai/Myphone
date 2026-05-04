import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-when-body-wont-cooperate',
  module: 1,
  lesson: 8,
  title: "When the Body Won't Cooperate — Babies, Shifts, and Long Insomnia",
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "We end with the cases where the system isn't fully yours to fix. A baby who decides when you sleep. A roster that asks your biology to do something it wasn't built for. An insomnia that has lasted longer than this course. We're going to be honest about what behaviour can do, what it can't, and when it is genuinely time to involve a doctor — not as failure, but as the right next move.",
    culturalNote: "Behavioural sleep medicine is powerful, but it is not magic. Sleep apnea is not a behavioural problem and will not be cured by a wind-down. Severe long-term insomnia sometimes needs a CBT-I trained clinician, not an app. Mood disorders interact with sleep in both directions. The most useful thing this course can do in its final lesson is name when the right move is professional help — and arm you with the harm-reduction toolkit for the cases where you have to keep functioning while the system isn't ideal.",
  },

  chunks: [
    {
      id: 'parent_protocol',
      target: 'The parent / disrupted-sleep protocol',
      native: "When something/someone external decides when you wake: protect the longest unbroken block, anchor wake time imperfectly, accept total time will be lower for now, and do not scroll during night wakings",
      literal: "Behavioural sleep medicine — applied to involuntary fragmented sleep. The realistic goal is consolidation, not eight hours.",
      emoji: '👶',
      phonetic: "Aroha's case. You can't fix a baby. You can stop scrolling at 3am. You can protect the front of the night.",
      audioRef: null,
    },
    {
      id: 'shift_protocol',
      target: 'The shift-worker protocol',
      native: "Anchor sleep (a fixed 4-hour core regardless of shift), strategic light/dark on the way home (sunglasses outdoors, blackout curtains in bedroom), 20-minute prophylactic naps before night shifts, accept the long-term cost and harm-reduce",
      literal: "Foster, Czeisler. Shift work is a chronobiological harm; you mitigate, you don't eliminate. The 'anchor sleep' concept (4 hours at the same clock time across shifts) is one of the better-evidenced harm-reductions.",
      emoji: '🌃',
      phonetic: "Marcus's case. Your biology is fighting you; treat the fight as real and reduce its toll.",
      audioRef: null,
    },
    {
      id: 'when_to_see_a_doctor',
      target: 'When to see a doctor',
      native: "Loud snoring + daytime sleepiness + observed pauses in breathing (apnea); insomnia >3 months that hasn't responded to CBT-I self-application; restless legs; severe daytime impairment; new mood symptoms; pregnancy or peri-menopausal sleep changes worth ruling things out for",
      literal: "Behavioural skill is not diagnosis. The American Academy of Sleep Medicine criteria for chronic insomnia disorder (≥3 nights/week, ≥3 months, with daytime consequences) are when GP referral becomes appropriate.",
      emoji: '🩺',
      phonetic: "Behaviour first, but not behaviour only. Some doors only a clinician can open.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Match the protocol to the constraint',
    explanation: "The first seven lessons gave you a toolkit. The eighth tells you which tools fit which lives. Aroha (parent of a non-sleeper): cannot do classic sleep restriction, cannot anchor wake time precisely, cannot do an unbroken seven-hour block. Her best moves are wind-down before the earliest plausible bedtime, no scrolling during night wakings, protect the longest unbroken block, accept that total time will recover when the baby's does. Marcus (shift worker): cannot align with normal circadian advice. His moves are the anchor-sleep approach, strategic light/dark, blackout curtains, prophylactic naps, and an honest acceptance that night-shift work imposes a measurable health cost — knowing that lets him advocate for himself rather than blame himself. Priya (six months of insomnia): her course is full CBT-I — the entire previous seven lessons applied for 4–8 weeks. If sleep hasn't materially improved at 8 weeks of consistent application, she needs a CBT-I trained clinician (digital programmes like Sleepio, or a referral). She also screens for apnea, restless legs, depression. None of these are failure. All of them are the responsible next move.",
    examples: [
      { target: "Parent of a baby who wakes 3x a night, total sleep ~6 broken hours", native: "Move set: 20-min wind-down at the earliest plausible bedtime; no phone during night wakings (just feed/settle and back to bed); protect the longest unbroken block; one outdoor-light walk in the morning; lower your standard of personal performance for the next 6 months without shame." },
      { target: "Shift worker rotating days/nights every 4 days", native: "Move set: anchor sleep (a 4-hour block kept at the same clock time across all shifts); sunglasses outdoors after a night shift; blackout curtains and white noise; 20-min prophylactic nap before the first night shift; one weekly off-day used to start re-aligning with social/light cues." },
      { target: "Six months of insomnia, has tried sleep hygiene tips, exhausted", native: "Move set: full CBT-I — sleep window, stimulus control, the 15-minute rule, paradoxical intention, daily wake-time anchoring, morning light. Give it 4–8 weeks. If no movement, see a GP and ask specifically for CBT-I (digital programme or sleep psychologist referral). Screen for apnea if there's any snoring. Honest about meds: useful occasionally, not a substitute for behavioural treatment." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the user to the highest-leverage move',
      pairs: [
        { left: 'Parent of a baby', right: 'Protect the longest unbroken block; no phone during night wakings' },
        { left: 'Rotating shift worker', right: 'Anchor sleep + strategic light/dark + blackout curtains' },
        { left: 'Six months of insomnia', right: 'Full CBT-I for 8 weeks; if no movement, see a clinician' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which of these symptoms most strongly warrants a GP visit (not just behavioural work)?",
      question: 'Pick the one most likely to indicate a treatable medical condition',
      options: [
        { text: 'Loud snoring + daytime sleepiness + a partner observing pauses in breathing', correct: true },
        { text: 'Lying awake for 30 minutes some nights', correct: false },
        { text: 'Waking up once at 4am occasionally', correct: false },
      ],
      explanation: "That symptom triad is the textbook screen for obstructive sleep apnea — a medical condition that no amount of cognitive shuffle will fix and that has serious cardiovascular and metabolic consequences if untreated. Treatment (CPAP or alternative) is highly effective. If this is you, this lesson is asking you to book the GP appointment this week. The course will not pretend behaviour can fix apnea.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the long-insomnia rule",
      sentence: "If you've consistently applied CBT-I principles for ____ weeks with no material improvement, the right next move is to see a clinician.",
      options: ['8', '2', '52'],
      correct: '8',
      context: "Most people who respond to CBT-I see meaningful improvement within 4–8 weeks of consistent application. Eight weeks is a reasonable trial. If nothing has shifted by then, behavioural self-application probably isn't enough — and that's not failure, it's information. A CBT-I trained clinician (or a validated digital programme like Sleepio) is the next step.",
    },
    {
      type: 'translate',
      instruction: "What is the parent's highest-leverage move during a night waking?",
      prompt: "Settle the child and return to bed without opening the...",
      correct: ['phone', 'phone screen', 'phone or screen', 'screen', 'screens', 'phone or any screen', 'mobile', 'phone or laptop'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the closing principle",
      words: ['skill', 'is', 'sleep', 'a', 'and', 'practised', 'protected'],
      correct: ['sleep', 'is', 'a', 'skill', 'practised', 'and', 'protected'],
      translation: "Practised across days, protected across lives. You don't graduate from sleep work. You return to it.",
    },
    {
      type: 'translate',
      instruction: "Name one symptom that should send a user to a GP rather than a behavioural app.",
      prompt: "Loud snoring with daytime sleepiness and observed pauses in...",
      correct: ['breathing', 'breath', 'their breathing'],
    },
  ],

  rwenDialogue: {
    intro: "Final dialogue. I want you to leave this course with the right next step for *your* situation — not a generic one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Looking at the eight lessons together — what is the one specific next step that's right for the version of broken sleep you actually have?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to apply the wind-down + 15-minute rule + acceptance for 8 weeks and see what shifts.", native: '', correct: true, feedback: "Strong. That's the spine of CBT-I. Pick the same wake time every day, anchor your morning light, deploy the 3am protocol when needed, use the acceptance sentence when the loop tightens. Eight weeks is a real trial. Track sleep efficiency, not just hours. If it moves, keep going. If it doesn't, you've earned the right to ask for a clinician." },
          { target: "I'm going to protect the longest unbroken block and stop scrolling during night wakings.", native: '', correct: true, feedback: "The realistic version for the parent case. Don't let the perfect be the enemy of the doable. The 'no phone during wakings' move alone usually moves the needle within a week. Add 20 minutes of wind-down before the earliest plausible bedtime. Aim for survival and consolidation, not optimisation. The baby will eventually sleep. Your sleep will eventually return." },
          { target: "I need to book a GP appointment — I have apnea symptoms / chronic insomnia my behaviour isn't moving.", native: '', correct: true, feedback: "That is exactly the right call, and the course is proud of you for naming it. Behavioural skill plus medical assessment is more powerful than either alone. If apnea, request a sleep study; if chronic insomnia, ask specifically for CBT-I (digital programme like Sleepio, or a referral to a sleep psychologist). You are not failing the course. You are using it correctly." },
          { target: "I'm a shift worker and I'm going to apply the anchor-sleep / blackout / sunglasses moves.", native: '', correct: true, feedback: "Honest and realistic. Shift work imposes a real biological cost, and your job is harm-reduction, not idealised circadian alignment. The anchor-sleep approach (a 4-hour core kept at the same clock time across rotations) is one of the most evidence-based shift-work moves. Add the strategic-light protocol on the drive home. Honour the cost when you advocate for your own scheduling at work — this isn't softness, it's biology." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Eight lessons in. You are not the same person who started Lesson 1. You have a working model of your own sleep, a small set of evidence-based moves, and the discernment to know when to ask for help. That is what 'sleep as a skill' means. I'll be here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Final recall.',
    prompts: [
      {
        prompt: "If a user has loud snoring, daytime sleepiness, and observed pauses in breathing — what is the right next move?",
        correct: ['see a doctor', 'see a gp', 'go to the doctor', 'book a doctor', 'visit a doctor', 'book a gp', 'visit a gp', 'see a clinician', 'medical appointment', 'doctor', 'gp', 'sleep study', 'see a doctor about sleep apnea', 'medical assessment', 'see a doctor for a sleep study'],
      },
      {
        prompt: "What is the parent of a non-sleeping baby's single highest-leverage move during a 3am waking?",
        correct: ['no phone', 'no scrolling', 'do not use the phone', "don't open the phone", 'no screens', 'avoid screens', "don't scroll", 'no phone during the waking', 'keep the phone away', "don't pick up the phone", 'no phone during night wakings', 'avoid the phone'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Pick the one next step from the dialogue that fits your actual situation. Write it on paper. Put a date next to it — the day you start, or the day you book. If your move is 'see a GP', book the appointment this week. If your move is 'apply CBT-I for 8 weeks,' put 8 weeks from today on the calendar as your review date. The course ends here. The practice begins.",
    rwenSignoff: "Eight lessons. You're someone who treats sleep as a skill now. The course is over. The skill is yours.",
  },

  phase8: {
    scenario: "The user has just finished the final lesson. Rwen helps them write a personal sleep plan in three lines: (1) the version of broken sleep they have, (2) the 2–3 specific moves they will practise for the next 8 weeks, (3) the criteria that would send them to a doctor. The aim is to leave the user with a written, dated, personal plan — not a vague intention.",
    rwenRole: "Rwen — warm, summarising, slightly ceremonial about this being the last lesson. Helps the user write their plan in their own words, in three lines. Gently re-iterates that some users' next step is medical, not behavioural, and that knowing the difference is the skill the course was teaching.",
    successCriteria: "User produces a 3-line personal sleep plan: (1) one sentence naming their version of broken sleep, (2) 2–3 specific behavioural moves they will practise for the next 8 weeks (drawn from across the eight lessons), (3) a criterion that will trigger them to see a clinician. Bonus if they put a calendar date on the 8-week review.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
