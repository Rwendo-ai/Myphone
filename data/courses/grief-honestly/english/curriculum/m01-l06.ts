import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-identity-grief',
  module: 1,
  lesson: 6,
  title: 'Identity Grief — the Version of You That No Longer Exists',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "If today is too heavy, please put it down and come back when you can. Today is about a kind of grief that is rarely named: the grief for the person you used to be. The version of you before the diagnosis, before the breakdown, before the divorce, before becoming a parent, before the loss of the job you had built your sense of self around. That earlier you is gone. You are still here, but not as them. This is grief, and it deserves the same gentleness as any other loss.",
    culturalNote: "Continuing-bonds research (Klass, Silverman, Nickman) is usually applied to grieving people we have lost. It applies just as well to grieving versions of ourselves. ACT recognises identity grief explicitly: when life events render an old self obsolete, the work is not to 'go back' (you can't) or 'become a totally new person' (also you can't), but to integrate — carrying what was true of the old self into the new shape of life. Self-compassion (Neff) is the load-bearing tool for the part where you blame the new self for not being the old one.",
  },

  chunks: [
    {
      id: 'identity_grief',
      target: 'Identity grief',
      native: 'The grief for a version of yourself that an event or change has rendered obsolete — a self that is now in the past tense',
      literal: 'Recognised across modern grief literature, particularly in chronic illness, postpartum, divorce, retirement, and faith-loss research.',
      emoji: '🪞',
      phonetic: "Not 'who I want to be' grief. 'Who I was' grief.",
      audioRef: null,
    },
    {
      id: 'continuing_bond_with_self',
      target: 'Continuing bond with the old self',
      native: 'The healthy alternative to "leaving the old you behind" — keeping the values, memories, and parts of the old self that still belong, while accepting the rest is past',
      literal: 'Klass / Silverman / Nickman applied to self-grief. The bereavement-research finding that maintaining a relationship with what is lost predicts better outcomes than severing it.',
      emoji: '🧵',
      phonetic: "You do not have to forget who you were to be who you are now.",
      audioRef: null,
    },
    {
      id: 'self_blame',
      target: 'Self-blame in identity grief',
      native: 'The trap of holding the new self responsible for not being the old one — usually carrying shame as well as grief',
      literal: 'Kristin Neff — *Self-Compassion*. Self-criticism predicts worse outcomes, not better. Self-compassion is the prerequisite to integration.',
      emoji: '⚖️',
      phonetic: "You did not fail to remain your old self. The world changed your shape. That is not blame-able.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why identity grief is real grief',
    explanation: "When the body grieves a person, it grieves the relationship — the roles, the future, the daily presence. When the body grieves an old self, it grieves the same things: the relationship you had with yourself, the roles you played, the future you assumed, the daily way of being. The same neural and emotional systems engage. Treating identity grief as 'just' an adjustment, or as a sign of weakness, is a category error. It is grief.",
    examples: [
      { target: 'Chronic-illness diagnosis at 35', native: "You grieve the body that did not need to be managed, the career that assumed unlimited energy, the version of you that did not have to plan around symptoms." },
      { target: 'Becoming a parent', native: "You grieve the spontaneity, the version of you who could read for three hours uninterrupted, the friendship you had with your partner before there were three of you. This grief can coexist with loving your child completely." },
      { target: 'Leaving a religion you grew up in', native: "You grieve not only the community but the version of yourself who believed, who fit, who prayed without irony. That self was real. The grief for it is real, even when leaving was right." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Identity grief', right: 'Grief for a version of yourself that an event has rendered obsolete' },
        { left: 'Continuing bond with the old self', right: 'Keeping what still belongs from the old self, while accepting the rest is past' },
        { left: 'Self-blame', right: 'Holding the new self responsible for not being the old one' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these reflects healthy integration after an identity loss?',
      question: 'Pick the most sustainable approach.',
      options: [
        { text: 'Forget who you used to be entirely, and "start fresh" as a totally new person', correct: false },
        { text: 'Keep what still belongs from the old self, and accept that the rest is past', correct: true },
        { text: 'Try to return to who you were before, by sheer force of will', correct: false },
      ],
      explanation: "The continuing-bonds finding applies here. People who fare best after an identity-altering event tend to keep a relationship with the old self — the values, the memories, the parts that still fit — while accepting that some of who they were is now in the past. The first option is impossible (you cannot delete a self). The third is the recipe for chronic suffering.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You did not fail to remain your old self. The world changed your ____.",
      options: ['shape', 'mind', 'value'],
      correct: 'shape',
      context: "If you have been blaming yourself for not being who you were before — the diagnosis, the loss, the change — this sentence is for you. The change is structural, not a personal failing.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the healthy relationship with an old self?',
      prompt: "A continuing ____ — keeping what still belongs, letting the rest be past.",
      correct: ['bond', 'relationship', 'connection'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central permission of this lesson",
      words: ['too', 'a', 'self', 'is', 'grief', 'real', 'grief', 'for'],
      correct: ['grief', 'for', 'a', 'self', 'is', 'real', 'grief', 'too'],
      translation: "If you have been minimising this kind of grief, this is your invitation to stop.",
    },
    {
      type: 'translate',
      instruction: "Is there a version of you that is no longer here? Name them in a phrase, just for yourself. (Or skip.)",
      prompt: "Examples: 'me before the diagnosis'. 'me before becoming a mother'. 'me before the divorce'. 'me before I left the church'. 'me before the breakdown.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you about that earlier version of yourself, gently.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "If there is a version of you that is no longer here, what is one thing you would want to keep from them — a value, a habit, a way of seeing the world — even as the rest is past?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Their courage. The way they used to take risks.", native: '', correct: true, feedback: "That courage did not die with the change. It is still in your DNA. It may need to take a different shape now — courage in slower, smaller forms — but it is the same thread. You can carry it forward without pretending you are unchanged." },
          { target: "Their belief that things would work out.", native: '', correct: true, feedback: "That belief may be different now, more chastened, less automatic. That is okay. A more honest hope can still be a real hope. The version that believed easily was a real version, and you can carry the spirit of it without the easiness." },
          { target: "I am angry at the old me for being naive about what was coming.", native: '', correct: true, feedback: "The old you did not know. They were doing the best with what they had. Anger at them is a way the new self tries to make sense of the change — but the old self did not betray you. Life happened. Some of the anger may be for life, not for them. They deserve some gentleness too." },
          { target: "I do not want to think about the old me. They feel too far away.", native: '', correct: true, feedback: "That distance is itself a piece of the grief. The old self can feel like a stranger. You do not have to revisit them today. Just knowing they were real, and that some part of them is still threaded through you, is enough for now." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you brought, the lesson is the same. The old you was real. The new you is real. There is a thread between them — you choose what stays on it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the term for grief over a version of yourself that is no longer here? (two words)",
        correct: ['identity grief', 'identity', 'self grief', 'grief for a self'],
      },
      {
        prompt: "Complete: 'You did not fail to remain your old self. The world changed your ____.'",
        correct: ['shape'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "Today, if you can, write one sentence: 'From the version of me before ___, I want to keep ___.' Just one. The keeping is the practice. If today is too heavy, the reading was enough.",
    rwenSignoff: "You are not less because you are different. You are different. That is the truth of being alive.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen offers a slow conversation about one specific version of the user that no longer exists — and what they would like to keep from them. The aim is integration, not erasure.",
    rwenRole: "Rwen — slow, gentle, careful. Treats the old self with respect — not as a failure to be discarded, not as a perfection that has been ruined. Asks the user to name one specific quality of the old self they want to carry forward, and one quality they are willing to let be past. Does NOT push the user toward 'a new chapter' framing if they are not ready. If grief is heavy, names that.",
    successCriteria: "User names one specific quality, value, or way-of-being from their previous self that they want to carry forward, and one part they are willing to let be past. Bonus if they soften toward the old self (less self-blame for not being them anymore).",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
