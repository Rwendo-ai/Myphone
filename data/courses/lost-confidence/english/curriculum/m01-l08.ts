import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-imposter-feeling',
  module: 1,
  lesson: 8,
  title: "The Imposter Feeling That Doesn't Leave",
  estimatedMinutes: 9,
  xpReward: 40,

  hook: {
    rwenLine: "Today's the day you become someone who can act in service of what they care about while the imposter feeling sits in the room with them. Most courses promise the feeling goes away. It usually doesn't. The skill is not eliminating it. The skill is acting anyway, and not letting the feeling vote on what you do next.",
    culturalNote: "Pauline Clance and Suzanne Imes coined 'the imposter phenomenon' in 1978, working with high-achieving women. Two things have become clearer since. First, it is widespread — not just in women, not just in early-career people, not just in fraudulent feelings; it shows up across decades, including at the top of fields. Second, it does not predict actual incompetence — often the opposite, since competent people can see the gap between what they know and what there is to know, and the gap is what the feeling lives on. Maya Angelou reportedly described the feeling persisting after eleven books. The corrective is not to argue with the feeling. It is to act on values regardless — which ACT calls valued action under unwanted private experience, and the Stoics called doing your work whether or not it pleases you.",
  },

  chunks: [
    {
      id: 'imposter_phenomenon',
      target: 'The imposter phenomenon',
      native: "The persistent feeling that your competence is fraudulent — that you have fooled people, and one day they will see",
      literal: "Clance & Imes (1978); decades of follow-up research show it is widespread, durable across careers, and does not correlate with actual incompetence",
      emoji: '🪪',
      phonetic: "Often louder in competent people, because they can see what they don't know.",
      audioRef: null,
    },
    {
      id: 'feeling_does_not_vote',
      target: "The feeling does not vote",
      native: "Recognising that the imposter feeling is information about your nervous system, not data about your competence",
      literal: "ACT — feelings are private experiences, not verdicts; valued action proceeds regardless of how the feeling votes",
      emoji: '🗳️',
      phonetic: "It can sit at the table. It does not get a ballot.",
      audioRef: null,
    },
    {
      id: 'values_aligned_action',
      target: 'Values-aligned action',
      native: "Doing the next thing your values point at, with the imposter feeling present, neither suppressed nor argued with",
      literal: "ACT (Hayes); also Stoic *prohairesis* — chosen action regardless of fortune; James Clear on identity-based action",
      emoji: '🧭',
      phonetic: "The feeling is allowed to come along. It is not allowed to drive.",
      audioRef: null,
    },
  ],

  pattern: {
    name: "Acting alongside, not after",
    explanation: "The trap is to wait until the feeling clears before doing the thing — applying for the role, finishing the book, making the call. The feeling rarely clears. People who keep producing across long careers describe acting alongside the feeling, not after it. The technique is small. (1) Name the feeling specifically — 'the imposter feeling is here.' (2) Locate it briefly in the body — chest, throat, stomach. (3) Ask one question: 'what would I do next if the feeling were not voting?' (4) Do that thing.",
    examples: [
      { target: "A 60-year-old novelist about to publish her tenth book: 'they're going to realise I never knew what I was doing.'", native: "Acting alongside: 'The feeling is here. It is in my throat. If it weren't voting, I'd send the final draft today. I'm sending the draft.'" },
      { target: "A re-trained 52-year-old starting his first day as a teacher after a thirty-year corporate career.", native: "Acting alongside: 'The feeling is here. It is in my chest. If it weren't voting, I would walk into the staff room and introduce myself. I'm walking in.'" },
      { target: "A previously-successful musician returning to perform after a decade of public failure.", native: "Acting alongside: 'The feeling is here. It is everywhere. If it weren't voting, I would do the soundcheck. I'm doing the soundcheck.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The imposter phenomenon', right: 'The persistent feeling that your competence is fraudulent' },
        { left: 'The feeling does not vote', right: 'The feeling is information about your state, not data about your competence' },
        { left: 'Values-aligned action', right: 'Doing the next thing your values point at, with the feeling present' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'According to research since Clance & Imes, which of these is most accurate about the imposter feeling?',
      question: 'Pick the most evidence-grounded statement',
      options: [
        { text: 'It mainly affects women in early career and goes away with experience.', correct: false },
        { text: 'It is widespread across genders, careers, and decades, and does not reliably predict actual incompetence.', correct: true },
        { text: 'If you feel like an imposter, you probably are one and should reassess.', correct: false },
      ],
      explanation: "The first is the original 1978 framing, which decades of follow-up research has broadened. The third is a misread that produces real damage. The middle option reflects the current literature: the feeling is durable, near-universal in some form, and is often more pronounced in genuinely competent people who can see the limits of their knowledge.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the technique',
      sentence: "The imposter feeling is allowed to come along. It is not allowed to _____.",
      options: ['drive', 'speak', 'leave'],
      correct: 'drive',
      context: "ACT's metaphor: the feelings are passengers on a bus. They are loud. They are critical. They get to ride. They do not get the steering wheel. The driver is the part of you that knows what direction your values point.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the question to ask once you have located the feeling in the body?',
      prompt: '"What would I do next if the feeling were not ___?"',
      correct: ['voting', 'in charge', 'driving', 'at the wheel'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle',
      words: ['after', 'not', 'alongside', 'acting'],
      correct: ['acting', 'alongside', 'not', 'after'],
      translation: "Four words. People who do hard work over long careers tend to be doing this on most days.",
    },
    {
      type: 'translate',
      instruction: "Name one specific thing you would do this week if the imposter feeling were not voting.",
      prompt: 'A specific action — applying for, sending, asking, finishing, beginning. Type one:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's run the four-step technique on something live for you right now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one thing you have been postponing because the imposter feeling has been loud about it. An application. A draft. A call. A re-entry into something you used to do. Hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Step one. Name the feeling specifically. Out loud or silently: 'The imposter feeling is here.' That is all.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Step two. Where is it in your body? Chest, throat, stomach, behind the eyes? Don't change anything. Just notice.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Step three. The question. 'If this feeling were not voting on what I do next — what would I do?' Hold the answer.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have an answer. It's specific. I know what I would do.", native: '', correct: true, feedback: "Step four is doing it. The feeling does not have to leave for you to act. You will probably feel like a fraud the whole way. The action gets done anyway." },
          { target: "I have an answer but it's terrifying.", native: '', correct: true, feedback: "Of course it is. The feeling is loud because the action matters to you. If it didn't matter, it wouldn't fire. Take one tiny step toward it today — not the whole thing. The feeling will be there for the small step too, and that is fine." },
          { target: "I can't tell what I would do — the feeling is too loud.", native: '', correct: true, feedback: "When the feeling is genuinely overwhelming, the next move is grounding, not action. Five-four-three-two-one through the senses. Long exhales. Then come back to this. Some days the technique waits its turn." },
          { target: "I notice that the feeling is also right — I am underqualified for this.", native: '', correct: true, feedback: "Honest, and worth taking seriously. The technique does not say the feeling is always wrong. Sometimes you genuinely lack a skill — and the response is to learn it, with help. That is different from imposter-phenomenon. Real underqualification is workable. The lie of imposter-phenomenon is that even the qualified version of you is fraudulent. Distinguish, and respond to whichever is actually present." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "If the feeling never quite leaves — and it usually doesn't — you have not failed at the work. You are doing the work. Maya Angelou had it after eleven books. You can have it and still publish the twelfth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Who coined 'the imposter phenomenon', and roughly when?",
        correct: ['clance and imes 1978', 'clance & imes 1978', 'clance imes 1978', 'clance and imes', 'clance & imes', 'pauline clance and suzanne imes', 'pauline clance & suzanne imes', 'pauline clance suzanne imes 1978', '1978 clance and imes', '1978'],
      },
      {
        prompt: "The principle in four words: ___ alongside, not ___ .",
        correct: ['acting after', 'act after', 'acting, after'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when the imposter feeling shows up, run the four steps in your head. (1) Name it. (2) Locate it in the body. (3) Ask: 'what would I do next if it were not voting?' (4) Do one small piece of that thing — even if the feeling stays.",
    rwenSignoff: "Four steps. Two minutes. The feeling is allowed to come along. It is not allowed to drive. End of course — for now. Come back to lesson one whenever you need it.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 8 — the final lesson of the track. Rwen offers a slightly longer 4-minute closing conversation in which the user runs the four-step technique on one specific live situation, and reflects on what they will keep doing this week regardless of how the feeling votes. The aim is for the user to leave the track with one named, concrete, values-aligned action they will execute.",
    rwenRole: "Rwen — warm, settled, slightly elevated since this is the closing of a course. Does NOT promise the feeling will leave. Does NOT congratulate the user for being 'done with' lost confidence — that framing would be dishonest. Names that the work continues, that the feeling will return, and that the user now has a small set of moves for it.",
    successCriteria: "User (1) names one specific situation in which the imposter feeling is currently loud, (2) runs the four steps to a specific concrete next action, (3) commits to doing that action this week even if the feeling stays, and (4) names one moment from the eight lessons that they want to keep returning to. Bonus if they articulate, in their own words, the difference between 'feeling confident' and 'acting in alignment with their values whether or not they feel confident.'",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
