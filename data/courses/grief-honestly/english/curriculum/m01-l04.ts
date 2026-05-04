import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-ambiguous-loss',
  module: 1,
  lesson: 4,
  title: 'When Someone Is Alive But Lost to You — Ambiguous Loss',
  estimatedMinutes: 9,
  xpReward: 30,

  hook: {
    rwenLine: "If today is too heavy, please put it down. This may be the most useful single name in this whole track. There is a particular kind of grief that has no funeral, no anniversary, no clear ending — because the person you have lost is still alive. They have addiction. They have dementia. They walked away. They are missing. They are physically here but psychologically gone. If you have been carrying this and have had no name for it, today the name arrives.",
    culturalNote: "Pauline Boss — psychologist, family therapist — has spent her career studying *ambiguous loss*: grief without closure, because the loss itself has no clear shape. She studied the families of soldiers missing in action, then expanded to dementia, addiction, estrangement, immigration, divorce. Her central insight is that ambiguous loss is uniquely difficult not because the people grieving are weak, but because the grief itself is unresolvable — there is no body to bury, no clear date, no permission to let go, no permission to keep loving.",
  },

  chunks: [
    {
      id: 'ambiguous_loss',
      target: 'Ambiguous loss',
      native: 'Grief without a clear ending — because the person is physically there but psychologically gone, OR psychologically there but physically gone',
      literal: 'Pauline Boss — *Ambiguous Loss*, *The Myth of Closure*. Two types: Type 1 (physically absent, psychologically present, e.g. missing person, estrangement); Type 2 (physically present, psychologically absent, e.g. dementia, addiction).',
      emoji: '🌫️',
      phonetic: "The grief without a funeral. The grief that updates itself every week.",
      audioRef: null,
    },
    {
      id: 'closure_myth',
      target: 'The myth of closure',
      native: 'The popular idea that grief should reach a clean end-state — which is especially cruel in ambiguous loss, because the loss itself never closes',
      literal: "Boss — *The Myth of Closure*. Bonanno also explicit: closure is a cultural script, not a clinical finding.",
      emoji: '🚪',
      phonetic: "If your loss has no door, you are not failing to walk through one.",
      audioRef: null,
    },
    {
      id: 'both_and',
      target: 'Both/and thinking',
      native: 'The capacity to hold contradictions — they are alive AND lost; I love them AND I am furious; I hope they will return AND I have to live as if they will not',
      literal: "Boss's central therapeutic move. She found that families coping best with ambiguous loss were the ones who held two contradictory truths simultaneously, rather than forcing one to win.",
      emoji: '🤲',
      phonetic: "Either/or breaks. Both/and bends.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why ambiguous loss is uniquely hard',
    explanation: "Most grief frameworks assume a clean event — they died, you grieve, time passes. Ambiguous loss has none of that. The loss keeps happening. Every visit to a parent with dementia is a small new loss. Every relapse, a new loss. Every birthday the estranged child does not call, a new loss. There is no point at which you can say 'okay, that is over now.' Boss's contribution is not a fix — there is no fix — but a permission: to stop trying to resolve what cannot be resolved, and to learn to live alongside the not-knowing.",
    examples: [
      { target: 'Type 2 (here but gone): a parent with advanced dementia who no longer recognises you', native: "You grieve the parent who is sitting in front of you, while still feeding them lunch. Both are real. Both happen at once." },
      { target: 'Type 1 (gone but here): a child who walked away years ago, still alive, contact severed', native: "You grieve someone whose obituary you have not written. The grief has no anniversary. It has every birthday." },
      { target: 'A partner lost to addiction', native: "You miss the person they were. You live with the person they are. You hope. You give up hope. You hope again. None of this is failure to grieve correctly. It is grieving correctly, in a category of grief that has no clean shape." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Ambiguous loss', right: 'Grief without a clear ending — physically present/psychologically gone, or vice versa' },
        { left: 'The myth of closure', right: 'The popular idea that grief should reach a clean end-state' },
        { left: 'Both/and thinking', right: 'Holding contradictions — alive AND lost, love AND fury — rather than forcing one to win' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is an example of ambiguous loss?',
      question: 'Pick the most ambiguous of these losses.',
      options: [
        { text: 'A grandmother who died of natural causes at 92, with the family present', correct: false },
        { text: 'A father with advanced dementia who no longer recognises any family member', correct: true },
        { text: 'A long-time colleague who retired last year and moved away', correct: false },
      ],
      explanation: "Dementia is one of Boss's most-studied forms of ambiguous loss — Type 2, physically present and psychologically gone. The grief is real and ongoing. The first option is bereavement (clean, recognised). The third is a transition, not a loss in this technical sense.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete Pauline Boss\'s central permission',
      sentence: "Some losses cannot be ____. They can only be carried.",
      options: ['resolved', 'felt', 'remembered'],
      correct: 'resolved',
      context: "The instinct to resolve is reasonable — every other problem in life rewards resolution. Ambiguous loss is the category that punishes the attempt. The work is to stop trying to close what does not close.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what kind of thinking does Boss recommend for ambiguous loss?',
      prompt: '____ thinking — holding contradictions instead of forcing one to win.',
      correct: ['both/and', 'both and', 'both-and', 'both / and'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central permission",
      words: ['no', 'closure', 'is', 'there'],
      correct: ['there', 'is', 'no', 'closure'],
      translation: "Three words. Read them gently. They are a relief, not a sentence.",
    },
    {
      type: 'translate',
      instruction: "Is there someone in your life who is alive but lost to you, in some way? Name them or the situation in a phrase. (For yourself. Or skip.)",
      prompt: "Examples: 'my mother since the dementia diagnosis'. 'my brother since he stopped speaking to me'. 'my partner since the addiction.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to be careful with this one. Pick whichever answer is most honest right now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "If you are carrying an ambiguous loss — someone alive but lost to you — what is the hardest part of it for you, right this week? You do not have to type a long answer.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Not knowing whether to hope or to grieve. Both feel wrong.", native: '', correct: true, feedback: "That is exactly the bind Boss names. Both/and: hope AND grieve. They are not in competition. People who do best in your situation tend to make room for both, on different days, sometimes in the same hour. You are not failing by feeling both." },
          { target: "Other people not understanding why I am sad about someone who is technically still here.", native: '', correct: true, feedback: "This is the disenfranchisement layered on top of the ambiguity. Most people only have a script for full bereavement. The grief of someone alive-but-gone has no script, so other people stay silent, or worse, suggest you 'just call them' or 'just visit.' Their silence is not a verdict on whether your grief is real. It is real." },
          { target: "Feeling guilty for grieving them while they are still alive.", native: '', correct: true, feedback: "This is one of the hardest parts. The guilt makes sense — they are still here. AND the loss is also already here. You are not betraying them by mourning what is already gone. You are honouring what was real." },
          { target: "I just want to read this lesson and not answer right now.", native: '', correct: true, feedback: "Then read and rest. Naming this in your head is enough work for today." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you brought, the lesson today is the same. You are inside a category of grief that does not get a card. There is a name for it. Pauline Boss named it. Now you know it too.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the name for grief without a clear ending — when someone is alive but lost to you? (two words)",
        correct: ['ambiguous loss', 'ambiguous', 'an ambiguous loss'],
      },
      {
        prompt: "What kind of thinking does Pauline Boss recommend for these losses? (two words, with a slash)",
        correct: ['both/and', 'both and', 'both-and', 'both / and', 'both and thinking', 'both/and thinking'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "If you have an ambiguous loss in your life, today try once to use the phrase: 'I love them AND I have lost them.' Both halves out loud, or in your head. Notice that the AND is the work. If today is too heavy, the reading was enough.",
    rwenSignoff: "There is no closure. That is not a failure. That is the truth of what you are inside.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen offers a careful, slow conversation about one ambiguous loss in the user's life — addiction, dementia, estrangement, missing, divorce, immigration. The aim is to apply both/and thinking to one specific contradiction the user is carrying.",
    rwenRole: "Rwen — slow, soft, present. Does NOT suggest the user 'just reach out,' 'just visit,' 'just try one more time.' Those are the unhelpful instincts. Treats the loss as a real loss, even though the person is alive. Helps the user articulate two contradictory things at once ('I love them AND I am furious' / 'I hope AND I have to live as if they won't return') without forcing a resolution. Reminds the user, if it surfaces, that there is no closure to wait for.",
    successCriteria: "User articulates one contradiction inside their ambiguous loss in both/and form, without forcing one half to win. Bonus if they recognise that the lack of closure is a feature of the situation, not a personal failure.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
