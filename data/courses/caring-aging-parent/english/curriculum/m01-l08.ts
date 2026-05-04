import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-healthcare-advocacy',
  module: 1,
  lesson: 8,
  title: "Healthcare Advocacy When Systems Fail",
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who knows how to be useful inside a broken system without losing yourself in it. Whatever your country's healthcare looks like — whether it is overstretched public hospitals, expensive private care, or a three-hour drive to the nearest clinic — your job inside it is the same: ask the right questions, take notes, and refuse to be invisible. We are going to make this concrete.",
    culturalNote: "Atul Gawande, in *Being Mortal*, observes that medicine excels at treating disease and is structurally bad at treating personhood. The best advocates inside the system are not the angriest — they are the ones who keep showing up, asking specific questions, and making sure the patient stays a person in the chart. This is not medical advice. It is preparation for being in the room.",
  },

  chunks: [
    {
      id: 'four_questions',
      target: 'The four questions',
      native: "What is the goal of this treatment? What are the alternatives? What happens if we do nothing? And: what would you do if it were your parent?",
      literal: 'Adapted from Gawande / Susan Hardman / patient-advocacy practice; the four questions that re-personalise a clinical conversation',
      emoji: '🔑',
      phonetic: "Four questions, in any order, that change the conversation from clinical to human.",
      audioRef: null,
    },
    {
      id: 'the_one_pager',
      target: 'The one-pager',
      native: 'A single page you bring to every appointment: medications, conditions, allergies, what your parent values, who to call. Not a substitute for the chart — a backup, when the chart fails.',
      literal: 'Patient-advocacy practice; reduces medication errors, transition errors, communication failures during shift change and transfer',
      emoji: '📄',
      phonetic: "One page. With you. Always. The system loses things; you don't have to.",
      audioRef: null,
    },
    {
      id: 'not_your_job',
      target: 'What is and isn\'t your job',
      native: 'Your job: surface the questions, advocate, document. Not your job: practice medicine, override their wishes, fix the system.',
      literal: 'ACT (Hayes) — values-aligned action within unfixable circumstance; also patient-advocate codes of practice',
      emoji: '🛟',
      phonetic: "Carry what is yours. Put down what isn't. The system is not yours to fix.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How to be useful in the room',
    explanation: "Healthcare systems vary enormously — what looks like ordinary care in one country is a luxury in another, and what looks like neglect in one is the norm in a third. Inside whatever system you have, three moves consistently help: bring the one-pager, ask the four questions, and stay clear about what is and isn't your job. The first two make you useful. The third keeps you sane. Important: this lesson does not tell you what treatment to choose. Treatment decisions belong to your parent (when capable) and the clinical team. Your job is to make sure the question is asked, the answer is understood, and the human in the bed stays visible.",
    examples: [
      { target: 'A doctor recommends a procedure', native: 'You ask: what is the goal? What are the alternatives? What happens if we do nothing? Would you choose it for your own parent?' },
      { target: 'You hand over the one-pager at admission', native: 'Medications, allergies, conditions, what your parent values about their daily life, who to call. The chart now has a head start.' },
      { target: 'A nurse asks if you can decide whether to insert a feeding tube', native: 'Your job is to find your parent\'s wishes (advance directive, prior conversation) — or, if those don\'t exist, to involve the clinical team and any other family with standing. Not to invent the answer.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The four questions', right: 'Goal, alternatives, do-nothing, what-would-you-do' },
        { left: 'The one-pager', right: 'A single page you bring to every appointment' },
        { left: "What is and isn't your job", right: "Surface, advocate, document — not practise medicine or fix the system" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'In a clinical meeting, which question most reliably re-personalises the conversation?',
      question: 'Pick the one that asks the doctor to think about your parent as a person',
      options: [
        { text: '"What does the research say about this procedure?"', correct: false },
        { text: '"What would you do if it were your parent?"', correct: true },
        { text: '"How long does this procedure take?"', correct: false },
      ],
      explanation: "The first and third are reasonable questions but they keep the conversation in clinical territory. The second is the one Gawande highlights: it forces the doctor (or geriatrician, or social worker) out of the algorithm and into human judgement. Most clinicians, when asked sincerely, give a more honest answer than they would otherwise.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Your job is to make sure the question is asked. The _____ is theirs.',
      options: ['decision', 'paperwork', 'system'],
      correct: 'decision',
      context: "When the user is competent, the decision is theirs. When the user has lost capacity, the decision is whatever they previously expressed (advance directive) plus the clinical team's judgement, with you carrying their voice. In neither case is the decision yours alone.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what does the one-pager contain?',
      prompt: 'Medications, conditions, allergies, what your parent ___, and who to call.',
      correct: ['values', 'wants', 'prefers', 'cares about', 'values most', 'values about their day'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the principle that protects you from absorbing the system's failures",
      words: ['fix', 'is', 'the', 'system', 'not', 'mine', 'to'],
      correct: ['the', 'system', 'is', 'not', 'mine', 'to', 'fix'],
      translation: "Memorise this for the days when the failure is the system's, not yours. There will be such days.",
    },
    {
      type: 'translate',
      instruction: 'Pick one of the four questions and write it in your own words',
      prompt: 'Question, in your voice:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three different systems, same skill.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Yumi sits with her father in a Tokyo geriatric clinic. The doctor recommends a procedure. Yumi asks the four questions, in order, in a soft voice. The doctor — not used to it — answers all four. By the end Yumi's father has decided, with full information, to decline. The system is not changed. One conversation, in it, was.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Mark's mother is admitted to a public hospital in Manchester at 2am. The handover is rushed. Mark hands the night nurse his one-pager. By morning, three different staff have read it. His mother's allergy to one of the standard antibiotics is in the chart before the rounds, not after.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Rumbi's father has a stroke in rural Zimbabwe. The nearest hospital is three hours away, the clinic at home is overwhelmed, and Rumbi is the one keeping notes on a single sheet of paper. She asks every visiting nurse: what is the goal of this medication? What happens if we run out? She is doing real advocacy in a system that has almost nothing. The one-pager works there too.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I want to start using the four questions and the one-pager.", native: '', correct: true, feedback: "Both are within reach this week. Write the one-pager in 20 minutes — current medications, conditions, allergies, three things your parent cares about in their day, two phone numbers. Then put it in your bag. Bring it everywhere." },
          { target: "I have been trying to fix the system itself, and it is exhausting me.", native: '', correct: true, feedback: "Many caregivers do this. Sometimes systemic advocacy is appropriate (and important), but most days the cost of trying to fix the system from inside one parent's room is more than you can afford. The system is not yours to fix today. The room is." },
          { target: "I have a parent who cannot speak for themselves anymore. The decisions feel unbearable.", native: '', correct: true, feedback: "This is one of the hardest places to be. Your job is not to invent their wishes — it is to use whatever advance directive exists, whatever they said before, and the clinical team's judgement, and to carry their voice as best you can. If there is no documentation, ask your local healthcare or social-work team about what authority you have where you live. You are not deciding alone." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You don't have to fix the system. You have to be useful in the room. The questions, the one-pager, and the line that says what isn't yours — that is most of the job.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Name two of the four questions from this lesson.",
        correct: ['goal and alternatives', 'goal, alternatives', 'goal and do-nothing', 'alternatives and do-nothing', 'what is the goal and what are the alternatives', 'what is the goal, what are the alternatives', 'what would you do', 'what would you do if it were your parent', 'what happens if we do nothing', 'goal, do-nothing', 'goal alternatives', 'alternatives, do nothing', 'goal of treatment, alternatives', 'goal, alternatives, do nothing, what would you do', 'alternatives, what would you do', 'goal and what would you do', 'do nothing and alternatives'],
      },
      {
        prompt: 'In one phrase: what is the one-pager?',
        correct: ['a single page with medications and key info', 'a single page about your parent', 'one page you bring to every appointment', 'a one-page summary of meds, conditions, allergies, and values', 'a backup chart', 'a page with meds, allergies, and what they value', 'a one-page summary'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Spend 20 minutes today drafting the one-pager. Write down: current medications and doses, allergies, key conditions, three things your parent cares about in their daily life (specific — coffee with two sugars, walking the dog at 5pm, watching the news at 7), and two phone numbers (yours and one other). Print it. Put it in your bag. (Not medical advice — just useful paperwork.)",
    rwenSignoff: "Twenty minutes. One page. The chart now has a backup that lives with you.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 8. Rwen helps the user draft the one-pager for their parent — or rehearse the four questions for an upcoming appointment.",
    rwenRole: "Rwen — practical, organised, calm. Asks the user which is more useful right now: drafting the one-pager, or rehearsing the four questions for a specific upcoming appointment. If the one-pager: walks them through the categories. If the four questions: helps them adapt the wording to their parent's situation and the kind of clinician they will see. Does NOT give medical advice. Does NOT recommend treatments. Repeatedly returns to the line: 'medical decisions are theirs and their professional team's; your job is to make the question askable.'",
    successCriteria: "User produces either a draft of the one-pager (with at least medications, allergies, and three values) OR a written-out version of the four questions adapted for a specific upcoming appointment. Bonus if they identify one thing about their parent's daily preferences that the medical chart will not capture without them.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
