import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-ambiguous-loss',
  module: 1,
  lesson: 2,
  title: "Ambiguous Loss — When They're There But Not There",
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who has a name for the strangest grief there is — the grief for a person who is still alive. If you have ever sat across the table from your mother while she looks at you like a polite stranger, this lesson is for you.",
    culturalNote: "Pauline Boss, the family therapist who developed this idea, spent decades working with families of soldiers missing in action and families of people with dementia. She found these two groups had something in common — they were grieving someone who was, in some essential way, both there and not there. She gave the experience a name: ambiguous loss. For many caregivers, having the name is the first relief in months.",
  },

  chunks: [
    {
      id: 'ambiguous_loss',
      target: 'Ambiguous loss',
      native: 'Grief for someone who is psychologically gone but physically present, or physically gone but psychologically present',
      literal: 'Pauline Boss — the central concept of her work; especially common in dementia, severe stroke, late-stage Parkinson, traumatic brain injury',
      emoji: '🌫️',
      phonetic: 'Not closure. Not denial. A loss without a clear edge.',
      audioRef: null,
    },
    {
      id: 'frozen_grief',
      target: 'Frozen grief',
      native: "Grief that gets stuck because the loss has no clear ending — the person is still here, so the grief is told it shouldn't yet exist",
      literal: 'Boss — describes how ambiguous loss interrupts the normal grief process; not pathology, just a feature of the situation',
      emoji: '🧊',
      phonetic: "You are not failing to grieve. The shape of the loss is interrupting the grieving.",
      audioRef: null,
    },
    {
      id: 'both_and',
      target: 'Both / and',
      native: 'Holding two opposite truths at once — they are still my mother, and they are not the mother I knew',
      literal: 'Boss — the cognitive move that resolves ambiguous loss is not picking one side; it is holding both',
      emoji: '🪢',
      phonetic: 'The grief and the love are not in competition. They are in the same room.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The shape of the grief that has no edge',
    explanation: "Most grief has a moment — the call, the funeral, the date on the headstone. Ambiguous loss does not. The person you knew is leaving in pieces, on no schedule, with no announcement. Some days they come back. Some days they are clearly gone. Boss's central insight is that this is not a failure to grieve — it is a different kind of grief, one that requires a different cognitive move: 'both / and' instead of 'either / or.'",
    examples: [
      { target: "She is still my mother", native: "and she has not known my name in seven months" },
      { target: "He is here", native: "and the man who taught me to drive is not coming back" },
      { target: "Today was a good day", native: "and tomorrow is going to be the same disease that it has been" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Ambiguous loss', right: 'Grief for someone psychologically gone but physically present (or vice versa)' },
        { left: 'Frozen grief', right: 'Grief that gets stuck because the loss has no clear ending' },
        { left: 'Both / and', right: 'Holding two opposite truths about the same person at once' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the clearest example of ambiguous loss?',
      question: 'Pick the one Pauline Boss would name as ambiguous',
      options: [
        { text: 'A friend dies suddenly. You attend the funeral. You begin grieving.', correct: false },
        { text: 'Your mother has dementia. She no longer recognises you. She is still alive and lives in your home.', correct: true },
        { text: 'You move to a new city and miss your old neighbourhood.', correct: false },
      ],
      explanation: "The first is grief, but not ambiguous — there is a clear endpoint. The third is ordinary loss. The second is the textbook example: psychologically gone, physically present. Both kinds of presence and absence are happening at once, and the grief has no obvious moment to start or end.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the cognitive move that Boss recommends for ambiguous loss',
      sentence: 'Not either / or. _____ / and.',
      options: ['Both', 'Either', 'Neither'],
      correct: 'Both',
      context: "The healing move in ambiguous loss is not picking one truth — 'they are gone' or 'they are here' — but holding both. They are still your parent. They are not the parent you knew. Both are real.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name the kind of grief you might have been carrying without a word for it',
      prompt: 'The grief for someone still alive is called...',
      correct: ['ambiguous loss', 'ambiguous', 'anticipatory grief', 'living grief'],
    },
    {
      type: 'build_sentence',
      instruction: "Build Boss's central principle",
      words: ['without', 'a', 'is', 'loss', 'this', 'clear', 'ending'],
      correct: ['this', 'is', 'a', 'loss', 'without', 'a', 'clear', 'ending'],
      translation: "When the loss has no edge, neither does the grief. That is not your failure. That is the shape of the situation.",
    },
    {
      type: 'translate',
      instruction: 'Apply both/and to your own situation. Complete the sentence.',
      prompt: '"They are still my parent, AND ___" (Type whatever is true for you. Anything counts.)',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to walk through three real situations. They are not extreme — they are common. See which one resonates.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Marta sits with her mother every Sunday. Her mother has Alzheimer's. Some Sundays she calls Marta by her sister's name. Some Sundays she does not speak. Marta has not cried since the diagnosis two years ago — she says, 'how can I cry, she is right there.' She is grieving. She has not been allowed to.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Daniel's father had a stroke eighteen months ago. Daniel's father is still funny. He is still recognisably himself. He just cannot do anything alone anymore — not eat, not stand, not bathe. Daniel is grieving the version of his father who used to fix the car. That version did not get a funeral.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Chiedza's grandmother lives in the family compound. The grandmother who raised her, who told the stories, who held the family — she is fading. She is here. She is not here. Both are true. There is no word for this in English that fits cleanly. There is a name — ambiguous loss — and now Chiedza has it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have been carrying this without a word for it.", native: '', correct: true, feedback: "Many people who land here say the same thing. Having a name does not solve the grief — but it stops you from feeling that the grief itself is wrong, or premature, or yours alone. That is not a small relief." },
          { target: "I am not sure if what I am feeling is grief.", native: '', correct: true, feedback: "Honest. It often does not feel like the textbook grief — there is no funeral to anchor it, and you are still doing daily caregiving so the feeling does not get a quiet moment to surface. That doesn't mean it isn't grief. It just means it has been frozen in plain sight." },
          { target: "My parent is not yet at this stage. I'm reading ahead.", native: '', correct: true, feedback: "That is fine. Many caregivers read this lesson and bookmark it for later. The frame does not require an emergency to be useful. It is also a good frame for noticing the smaller losses along the way — the things they used to do that they don't anymore." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever your version is — you are not failing to grieve. The grief has been there. Now it has a name.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "In one phrase: what is Pauline Boss's name for the grief of someone who is psychologically gone but physically present?",
        correct: ['ambiguous loss'],
      },
      {
        prompt: 'What is the cognitive move that resolves ambiguous loss? Not either/or, but ___ / and.',
        correct: ['both'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, complete this sentence in your head: 'They are still my parent, AND ___.' Whatever finishes that sentence honestly is yours to keep. You don't need to do anything with it. You just need to let it be true.",
    rwenSignoff: "One sentence. The grief was already there. Today it gets a name.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen offers a slow, gentle conversation about the user's own version of ambiguous loss — the specific ways their parent is here and not here. This is one of the most emotionally loaded lessons in the track and Rwen's tone matters more than the content.",
    rwenRole: "Rwen — soft, slow, unhurried. Speaks LESS than the user. Does NOT analyse, interpret, refute, reassure prematurely, or compare to other situations. Asks the user to name one specific thing their parent used to do that they don't anymore, and one specific thing that is still present. Holds both. If the user begins to cry or becomes overwhelmed, Rwen names that this is hard, says they can stop here, and offers a one-line closure. Always ends with: 'You don't have to do anything with this today. You just had to name it.'",
    successCriteria: "User names one specific loss (something the parent used to do, say, or be) and one specific thing that remains. Bonus if they articulate a 'both/and' sentence in their own words. CRITICAL: success is not the user feeling better — it is the user feeling more accurately, even if that is sadder. The exit ramp must be available the whole time.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
