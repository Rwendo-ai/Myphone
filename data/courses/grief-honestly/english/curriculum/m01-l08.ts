import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-grief-at-work',
  module: 1,
  lesson: 8,
  title: "Grief at Work — When You Can't Bring It",
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "If today is too heavy, please put it down. Today is the practical lesson — the one about Monday morning. About the meeting at 10am where you cannot say what is happening. About the colleague whose 'how was your weekend?' you cannot answer honestly. If you have been carrying grief into work, and pretending in eight-hour stretches that you are not, this lesson is for you. Not to fix it. To name what you are doing, and to give you a few small honesties that make it more sustainable.",
    culturalNote: "Most workplaces, in most cultures, have no real container for ongoing grief. Bereavement leave (where it exists) is usually three to five days, often unpaid, and assumes a single recognised loss. Disenfranchised grief (Lesson 3) and ambiguous loss (Lesson 4) get even less. ACT — and the broader values-based approach to grief — does not ask you to bring all of it to work. It asks you to keep enough of it acknowledged, even privately, that you do not betray yourself in the act of functioning. The goal is not 'compartmentalising'. The goal is honest functioning.",
  },

  chunks: [
    {
      id: 'professional_mask',
      target: 'The professional mask',
      native: "The competent, available, fine-thank-you-version of you that work expects — and that grief makes harder to maintain than it looks",
      literal: "Studied in the literature on emotional labour (Hochschild) and in disenfranchised-grief research (Doka). The cost of the mask is real and underestimated.",
      emoji: '🎭',
      phonetic: "It is not a lie. It is a uniform. Uniforms are heavier than they look.",
      audioRef: null,
    },
    {
      id: 'private_acknowledgement',
      target: 'Private acknowledgement',
      native: "A small, internal moment — between meetings, in the bathroom, in the car park — where you say to yourself, silently: 'I am grieving. I am still here. Today I am working anyway.'",
      literal: "ACT — defusion and self-as-context applied to grief at work. Brief private acknowledgements correlate with better long-term outcomes than full suppression.",
      emoji: '🤫',
      phonetic: "Three sentences in your head. Enough to keep faith with yourself.",
      audioRef: null,
    },
    {
      id: 'one_safe_person',
      target: 'One safe person at work',
      native: "If possible — and only if it is genuinely safe — one colleague or manager who knows enough about what you are carrying that you do not have to carry the mask with them",
      literal: "Workplace bereavement-support literature; mirrors the broader 'one witness is enough' finding from Lesson 3.",
      emoji: '🪟',
      phonetic: "You do not need HR to know. You do not need everyone to know. You may need one person who does.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sustainable functioning under grief',
    explanation: "There is a sustainable middle between two failure modes. On one side: dissolving — bringing the full weight of grief into every interaction, in a workplace that cannot hold it. On the other: total suppression — pretending nothing is happening, which is exhausting and slowly costs more than it saves. The sustainable middle is private acknowledgement (you do not let yourself forget what you are carrying), one safe witness if possible (someone who knows), and accepting that you will not work at full capacity for a while — and that this is honest, not a failing.",
    examples: [
      { target: 'Failure mode 1: trying to hide all of it, all the time', native: 'Cost: exhaustion, depersonalisation, burnout — and grief that has had nowhere to go showing up later as something else' },
      { target: 'Failure mode 2: bringing all of it to every meeting', native: 'Cost: a workplace that cannot hold it, and your own sense of safety eroding when others react badly' },
      { target: 'Sustainable middle: a small private acknowledgement, one trusted witness, lower output for a while', native: "Honest. Survivable. Closer to what most grieving professionals actually do, even when their workplace does not have the language for it." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'The professional mask', right: 'The competent, available version of you work expects' },
        { left: 'Private acknowledgement', right: 'A small internal moment of honesty — "I am grieving and still working today"' },
        { left: 'One safe person at work', right: 'A single trusted colleague who knows enough not to require the mask' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the most sustainable approach to grief at work?',
      question: 'Pick the middle path, not either extreme.',
      options: [
        { text: 'Suppress all of it during the workday and let nothing leak through', correct: false },
        { text: 'Acknowledge the grief privately, keep one safe witness, accept lower output', correct: true },
        { text: 'Tell everyone at work the full story so people understand', correct: false },
      ],
      explanation: "The first leaks out as exhaustion or breakdown. The third asks more of a workplace than most can give. The middle keeps you in faith with yourself without overloading colleagues who are not equipped to hold the full weight.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You do not need everyone at work to know. You may need ____ person who does.",
      options: ['one', 'every', 'no'],
      correct: 'one',
      context: "The 'one witness' finding from Lesson 3 applies here. The size of the network matters less than the quality of one person who can not-flinch.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what is the small private practice this lesson recommends?",
      prompt: "A private ____ — three sentences in your head, between meetings.",
      correct: ['acknowledgement', 'acknowledgment', 'acknowledging', 'acknowledgement of grief', 'acknowledgment of grief'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central permission",
      words: ['betrayal', 'is', 'functioning', 'not', 'a'],
      correct: ['functioning', 'is', 'not', 'a', 'betrayal'],
      translation: "We said this in Lesson 2. We are saying it again. It is the load-bearing sentence of grieving while still working.",
    },
    {
      type: 'translate',
      instruction: "Is there one person at work — or in a similar context (school, congregation, team) — who is safe to know? Name them in a word, just for yourself. (Or skip.)",
      prompt: "Examples: 'my manager'. 'the colleague in the next office'. 'the team lead I trust'. 'no one yet, and that is honest.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's design something small you can actually use this week.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Pick a moment in a typical workday — between meetings, on the way to the kitchen, in the car park. Somewhere you have ten quiet seconds.",
      },
      {
        speaker: 'rwen',
        rwenLine: "In that moment, this week, try once: silently say — 'I am grieving. I am still here. Today I am working anyway.' Three sentences. No one else will know.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have a moment in mind. I'll try it.", native: '', correct: true, feedback: "Good. Just once is enough. The point is not the perfect ritual. It is that you keep faith with yourself for ten seconds inside an eight-hour mask. Over weeks, this is the difference between functioning and dissolving." },
          { target: "I am not sure I have anywhere private enough.", native: '', correct: true, feedback: "Then it is silent. Mid-meeting, while a colleague is talking. Walking down a corridor. The bathroom. It does not need privacy of place. It needs ten seconds of attention." },
          { target: "I have not been letting myself acknowledge any of this at work. I am scared of what it will release.", native: '', correct: true, feedback: "That fear is honest. The acknowledgement is small on purpose. Three sentences, said once a day, do not breach the dam. They keep the dam from cracking under suppression. If you are worried about something larger, please talk to a grief therapist — and use the crisis resources Rwendo loaded for your region if today is unsafe." },
          { target: "I want to think about this one rather than try it now.", native: '', correct: true, feedback: "Then think. The lesson does not require an attempt today. Some practices need the reading to settle first." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three sentences, once a day, where no one can hear. That is the whole practice. It is small enough to be possible and large enough to matter.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What are the three sentences of the private acknowledgement practice? (in your own words is fine)",
        correct: ['i am grieving i am still here today i am working anyway', 'i am grieving, i am still here, today i am working anyway', 'i am grieving. i am still here. today i am working anyway', 'i am grieving / i am still here / today i am working anyway'],
      },
      {
        prompt: "How many trusted people at work do you actually need? (one word)",
        correct: ['one'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "If today involves work — paid, unpaid, study, caregiving, anything that asks you to perform — try once: somewhere private, three sentences in your head. 'I am grieving. I am still here. Today I am working anyway.' If today is not the day, the reading was enough.",
    rwenSignoff: "You are not pretending nothing is happening. You are working anyway. Those are very different.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 8. Rwen helps them rehearse one specific moment of grief-at-work that has been hard recently — a colleague's casual question, a meeting they had to attend, a deadline they could not meet. The aim is to design one small private acknowledgement they could have used, and one they can use this week.",
    rwenRole: "Rwen — practical, warm, brief. Does not advise the user to 'tell HR' or 'take leave' as a default; some users cannot. Helps the user work within the workplace they actually have. Treats the professional mask with respect — it is often necessary, not a moral failing. Reminds the user that one safe witness is enough and is not always available, and that private acknowledgement alone is also a complete practice.",
    successCriteria: "User identifies one specific moment in the coming week where they could use the three-sentence private acknowledgement, and (if relevant) names one person who might already be a safe witness or could become one. Bonus if they recognise the cost of the mask they have been carrying without acknowledgement.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
