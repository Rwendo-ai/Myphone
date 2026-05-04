import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-not-a-five-stage-map',
  module: 1,
  lesson: 1,
  title: 'Grief Is Not a Five-Stage Map',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Before we start: if today is too heavy, this is enough — close the lesson and come back when you can. Grief does not have a deadline. We will be here. If you stay, the first thing I want to give you is a correction. Most of what you have been told about grief is wrong, and the wrongness has probably made your grief harder.",
    culturalNote: "In 1969, Elisabeth Kübler-Ross interviewed dying patients and proposed five stages — denial, anger, bargaining, depression, acceptance. Those stages were about people who knew they were dying. They were never about people grieving someone who had died. For the next fifty years, the model was misapplied to bereaved people. Modern bereavement science (George Bonanno and many others) finds that most grievers do not move through those stages at all. Grief is not a staircase.",
  },

  chunks: [
    {
      id: 'stage_myth',
      target: 'The stage myth',
      native: "The widely-held belief that grief moves through five stages — denial, anger, bargaining, depression, acceptance — and ends in 'acceptance'",
      literal: "Kübler-Ross 1969, drawn from interviews with terminally ill patients. Misapplied to grievers ever since. Bonanno's research finds little evidence for it as a model of bereavement.",
      emoji: '🪜',
      phonetic: "Comforting because it offers a map. Cruel because there is no map.",
      audioRef: null,
    },
    {
      id: 'oscillation',
      target: 'Oscillation',
      native: 'The way real grief actually moves — back and forth between waves of pain and ordinary moments of life, sometimes within the same hour',
      literal: 'Stroebe & Schut — the Dual Process Model of bereavement; supported by Bonanno on resilience trajectories',
      emoji: '🌊',
      phonetic: "You laugh at lunch. You cry in the car. Both are grief working.",
      audioRef: null,
    },
    {
      id: 'permission',
      target: 'Permission to be where you are',
      native: 'Whatever you are feeling — numb, furious, fine, broken, all of these in one afternoon — is a real and recognised pattern of grief',
      literal: "Megan Devine — *It's OK That You're Not OK*. Bonanno's data: there is enormous variance in normal grieving and most of it is healthy.",
      emoji: '🌒',
      phonetic: "There is no 'should' in your grief. There is only what is here.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The myth and the truth',
    explanation: "The stage model promises that grief is a journey with a destination called 'acceptance.' The evidence does not support this. Real grief oscillates — between pain and ordinary life, between numbness and feeling, between today and the day this happened. People who grieve well do not march through stages. They live, fall apart, function, fall apart again, and slowly carry the loss in a different way. There is no end-state. There is only a reshaping.",
    examples: [
      { target: 'Stage-model expectation: "I should be in anger by now"', native: 'Reality: you might feel numb for two months, then furious for an afternoon, then steady, then crushed at a song' },
      { target: 'Stage-model expectation: "Acceptance means it stops hurting"', native: 'Reality: the hurt does not necessarily reduce — your capacity to carry it changes, and the texture of the carrying changes' },
      { target: 'Stage-model expectation: "I am not progressing through the stages, so something is wrong with me"', native: 'Reality: there are no stages to progress through. You are grieving correctly because there is no incorrect way' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to what it actually is',
      pairs: [
        { left: 'The five stages of grief', right: 'A model of dying patients (1969), often misapplied to grievers' },
        { left: 'Oscillation', right: 'Moving between grief and ordinary life, sometimes hour to hour' },
        { left: 'Permission to be where you are', right: 'Recognising that the variance in normal grief is enormous' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which of these reflects what modern bereavement research (Bonanno) actually shows?",
      question: "Pick the statement most supported by the evidence.",
      options: [
        { text: 'Most grievers move through five stages in roughly the same order', correct: false },
        { text: 'Most grievers oscillate, and the variance between people is large', correct: true },
        { text: 'Healthy grievers reach an end-state called acceptance within twelve months', correct: false },
      ],
      explanation: "Bonanno's longitudinal research finds little evidence for stages and a wide range of healthy trajectories. The shape of grief is more like weather than like a staircase.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the correction',
      sentence: "Kübler-Ross's five stages were originally about ____ patients, not people grieving someone who had died.",
      options: ['dying', 'anxious', 'depressed'],
      correct: 'dying',
      context: "This is the single most-misapplied finding in popular psychology. The original interviews were with terminally ill people. The model was extrapolated to bereavement decades later, against the evidence.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what do real grievers do, instead of moving through stages?",
      prompt: "They ____ — between waves of grief and ordinary life.",
      correct: ['oscillate', 'move back and forth', 'go back and forth', 'oscillate back and forth'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central permission of this lesson",
      words: ['no', 'is', 'wrong', 'to', 'way', 'there', 'grieve'],
      correct: ['there', 'is', 'no', 'wrong', 'way', 'to', 'grieve'],
      translation: "Read it slowly. If you have been told otherwise, that telling was incorrect, however kindly meant.",
    },
    {
      type: 'translate',
      instruction: "Name one thing you have been told about grief that has not matched your experience.",
      prompt: "Type a word or phrase. For yourself. Anything counts. (You can also leave it blank.)",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you one thing — slowly, with no pressure. You can pick whichever answer is honest right now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "When you think about your own grief — whatever shape it takes today, whatever the loss — does it feel more like a staircase you should be climbing, or more like weather you live inside?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "More like a staircase. I keep thinking I should be further along.", native: '', correct: true, feedback: "That feeling — that you should be further along — is probably the stage myth doing its work in your head. There is nowhere to be further along to. You are where the grief has put you, and that is the right place to be." },
          { target: "More like weather. It comes and goes and I do not control it.", native: '', correct: true, feedback: "That description matches what the research actually shows. Weather is a better metaphor than stages. You can prepare for it, you can shelter from it, but you do not march through it." },
          { target: "Both, depending on the day.", native: '', correct: true, feedback: "That is the most honest answer most people give. The stage-thinking sneaks back in when you are tired. The weather is what is actually happening." },
          { target: "I am not sure I am grieving. Maybe I shouldn't be doing this lesson.", native: '', correct: true, feedback: "If you found this track, something brought you here. Grief includes losses that do not look like the picture — divorce, estrangement, dementia, the future you imagined. You belong here. And if today is the wrong day, you can close the lesson and come back." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you answered, the lesson today is the same: the staircase was never real. The weather is. Wherever you are right now is where you are. That is enough for today.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Whose interviews were the original five stages drawn from? (one word)',
        correct: ['dying', 'dying patients', 'terminally ill', 'the dying', 'patients who were dying'],
      },
      {
        prompt: 'Complete the principle: "There is no ____ way to grieve."',
        correct: ['wrong', 'incorrect'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "Today, when a wave comes — and one might not, and that is also fine — try once to not ask yourself which 'stage' you are in. Just say: this is what is here right now. That is the whole practice. If today is too heavy for any practice at all, the reading was enough.",
    rwenSignoff: "Whatever you do or don't do today, you are not behind. There is no behind.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1 of Grief, Honestly. Rwen invites them — gently, with explicit permission to skip — into a short conversation about one piece of grief-folklore they have been handed (by family, by culture, by a well-meaning friend) that has not matched their experience. The aim is naming the mismatch, not analysing it.",
    rwenRole: "Rwen — quiet, slow, and unhurried. Speaks LESS than the user. Does not interpret, fix, or psychoanalyse. Does not ask 'why'. Mirrors what the user says back to them in fewer words. If the user says they want to stop, Rwen stops without coaxing. Opens by reminding the user they can put this down at any time.",
    successCriteria: "User names one specific phrase or expectation they have been given about grief (e.g. 'time heals,' 'you should be over it by now,' 'they're in a better place,' 'be strong'), and notices the mismatch with their actual experience. Bonus if they can name how the phrase landed when they heard it.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
