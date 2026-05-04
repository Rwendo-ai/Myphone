import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-cruel-scared-not-themselves',
  module: 1,
  lesson: 6,
  title: "When They're Cruel, Scared, or Not Themselves",
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who can be wounded by a parent and not destroyed by the wound. We are going to talk about the thing nobody warns you about: the moment your parent says something cruel, or stops being recognisable, or screams at you because they are afraid. We are not going to pretend it doesn't hurt. We are going to look at how to stand inside it.",
    culturalNote: "Pauline Boss writes that one of the cruellest features of dementia is that the person can become someone the family doesn't recognise — sharper, scared, sometimes mean. The popular advice 'it's the disease, not them' is half true and incomplete; it dismisses the wound. Kristin Neff's self-compassion research and ACT (Hayes) give us a more honest move: the wound is real, and the person is also doing the best they can with what their brain is giving them. Both. Not either.",
  },

  chunks: [
    {
      id: 'the_cruel_moment',
      target: 'The cruel moment',
      native: "The specific moment when your parent says or does something that wounds you — sometimes from the disease, sometimes from fear, sometimes from a personality you have always known",
      literal: 'Practitioner-named; the moments caregivers carry afterwards in silence and replay at 3am',
      emoji: '🪨',
      phonetic: "It is a real wound, even when it is 'not really them.' The hurt counts.",
      audioRef: null,
    },
    {
      id: 'fear_under_anger',
      target: 'Fear under the anger',
      native: 'The very common reality that what looks like cruelty is often terror — they are losing control of their body, their mind, their independence — and anger is what comes out',
      literal: 'Geriatric psychiatry; also Boss; fear-based aggression is one of the most common behavioural symptoms in dementia and late-life decline',
      emoji: '🌊',
      phonetic: "The anger is real. The thing under it is usually fear. Both can be true.",
      audioRef: null,
    },
    {
      id: 'self_compassion_response',
      target: 'Self-compassion in real time',
      native: "The move that lets you stay present without absorbing the wound: name the hurt, recognise this is hard, treat yourself the way you'd treat a friend",
      literal: "Kristin Neff — three components: mindfulness (the wound is here), common humanity (caregivers everywhere experience this), self-kindness (a hand on your own shoulder)",
      emoji: '🤲',
      phonetic: "Not 'don't take it personally.' That is gaslighting yourself. Take it precisely, and then put it down.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How to be wounded without being destroyed',
    explanation: "Most caregivers handle a cruel moment in one of two unhelpful ways. They either swallow the hurt and tell themselves 'it's the disease, get over it' (which leaves the hurt to fester somewhere); or they fight back and then carry guilt for hours afterwards. The third move — Neff's self-compassion model — does both halves at once: it names the wound honestly to yourself, recognises that this is genuinely hard for human beings, and treats you with the same kindness you'd offer a friend in your situation. It does not require the cruel moment to make sense. It just requires you to stop being the person it is happening to.",
    examples: [
      { target: 'Your father with dementia accuses you of stealing from him', native: 'Wound: real. Truth: he is afraid and his brain is producing the story to make sense of his confusion. Move: name the hurt, do not argue, place a hand on your own arm.' },
      { target: 'Your mother, scared of the doctor, screams at you in the waiting room', native: 'Wound: real. Truth: she is terrified. Move: do not match her dysregulation; soften your own voice; the cruelty is not what she means, but the hurt still gets named to yourself afterwards.' },
      { target: 'A parent you never got along with is now dependent and saying the same kinds of cutting things they always did', native: 'Wound: real and old. Truth: this is not new behaviour to absorb under "the disease." Move: it is allowed to hurt; you are allowed to limit exposure where you can.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The cruel moment', right: 'The specific moment when your parent says or does something wounding' },
        { left: 'Fear under the anger', right: 'Anger that is really terror, often about losing control' },
        { left: 'Self-compassion in real time', right: 'Naming the hurt, recognising it is hard, treating yourself kindly' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your mother with mid-stage dementia accuses you of poisoning her food. According to this lesson, which response is most accurate?',
      question: 'Pick the one that holds both truths at once',
      options: [
        { text: '"It is the disease, not her — I should not be hurt by it."', correct: false },
        { text: '"It hurts. It is also coming from a brain that is afraid and confused. Both are true. I do not have to argue."', correct: true },
        { text: '"She has always been ungrateful and now she is showing her true self."', correct: false },
      ],
      explanation: "The first is the popular advice and it leaves the hurt unattended; over time that costs the caregiver dearly. The third collapses everything into an old story and does not honour what the disease is doing. The second holds both: the wound is real AND the source is not personal cruelty. From there, you can choose not to argue (because winning a paranoia argument with dementia is impossible) without pretending the moment didn't sting.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Under the anger is usually _____.',
      options: ['fear', 'malice', 'memory'],
      correct: 'fear',
      context: "Geriatric psychiatry consistently finds that aggression in dementia and late-life decline is most often fear-driven. Naming the fear under the anger does not make the moment painless — but it gives you a more accurate target for compassion (theirs and yours).",
    },
    {
      type: 'translate',
      instruction: 'In one word — the framework Kristin Neff developed for situations exactly like this is called...',
      prompt: 'Self-___',
      correct: ['compassion', 'kindness', 'self-compassion'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the sentence that holds both truths",
      words: ['hurt', 'and', 'is', 'mean', 'they', "didn't", 'it', 'it'],
      correct: ['it', 'hurt', 'and', 'they', "didn't", 'mean', 'it'],
      translation: "The 'and' is doing all the work in this sentence. Not 'but', not 'because' — and. Both halves stay true.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what would you say to a friend in your situation? (Whatever you say, you can also say to yourself.)',
      prompt: "If a friend told you their parent had said the cruel thing your parent said, you would say...",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three hard portraits. Read them slowly.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mei is bathing her mother. Her mother, who has mid-stage Alzheimer's, calls her a thief and tells her to get out of the house. Mei keeps her voice soft. She finishes the bath. In her bathroom that night she cries for ten minutes. She is allowed to. The disease did not make the wound stop being a wound.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Robert's father is not demented. He is just frightened — of the cancer, of the loss of independence, of dying. He has been short, sarcastic, cutting. Robert, who has waited his whole life for an easier version of this man, is not getting it. The fear is making his father more himself, not less. Robert is allowed to be hurt and also to keep showing up. Both can be true.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Sello's mother was difficult before she was old. She is more difficult now. The lesson does not say to absorb that. Sello can love her, care for her, and limit how much of the cruelty he is in the room for. Some caregivers can move closer; some have to move further away. Both can be care.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have been swallowing the hurt and telling myself I shouldn't feel it.", native: '', correct: true, feedback: "Most caregivers do this. The 'it's the disease, get over it' script costs you something every time you run it. You are allowed to feel the wound AND not retaliate. Both. Not either." },
          { target: "I have been arguing with the cruel moments and feeling guilty afterwards.", native: '', correct: true, feedback: "Also common, and human. When something hurts, the body wants to defend. The skill — and it is a skill that takes practice — is to feel the urge to defend, recognise the brain (theirs or yours) doing what it is doing, and choose softness without pretending you weren't hit." },
          { target: "My parent has always been like this. The aging has just made it harder to escape.", native: '', correct: true, feedback: "This is the situation the lesson honours specifically. You did not get the easier parent. You are now caring for a difficult one. You are allowed to limit exposure where you can. You are allowed to ask for help. You are allowed to grieve the parent you didn't get even while caring for the one you have." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever just happened in your last cruel moment — it was real, and you are not the one who deserved it. Place a hand on your own arm. Say, 'this is hard.' Then keep going.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'According to this lesson, what is most often under the anger of an aging parent?',
        correct: ['fear'],
      },
      {
        prompt: "Whose framework — three components: mindfulness, common humanity, self-kindness — gives us the response to the cruel moment?",
        correct: ['neff', 'kristin neff', 'self-compassion'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "If a cruel moment happens today (or has happened recently — replay it), do this: place a hand on your own arm or chest, and silently say three things. 'This hurt.' 'Caregivers everywhere have moments like this.' 'I'm with you.' That is Neff's three components, in real time, in 30 seconds.",
    rwenSignoff: "Three sentences. One hand. Thirty seconds. The wound gets witnessed instead of buried.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen invites a careful conversation about a cruel moment the user has been carrying. This is one of the highest-care lessons in the track and the exit ramp is offered explicitly.",
    rwenRole: "Rwen — slow, careful, present. Opens by asking permission: 'is this a moment you want to talk about right now? You don't have to.' If yes, asks the user to describe what happened, then to identify (without prompting) whether the moment came from the disease, from fear, or from an old pattern. Does NOT push the user toward forgiveness, does NOT minimise ('they didn't mean it'), does NOT amplify the wound. Walks the user through Neff's three components out loud: 'this hurt' / 'caregivers everywhere have moments like this' / 'I'm with you.' Always closes with: 'You can put this down now. Or carry it. Both are allowed.'",
    successCriteria: "User describes one specific cruel moment in concrete terms, and applies one of Neff's three self-compassion components to themselves out loud. Bonus if they can articulate which 'kind' of cruel moment it was (disease, fear, or old pattern). Most important: the user feels less alone with the moment than when they started.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
