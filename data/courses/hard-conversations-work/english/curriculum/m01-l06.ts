import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-feedback-that-doesnt-crush',
  module: 1,
  lesson: 6,
  title: "Giving Feedback That Doesn't Crush",
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who can give a colleague honest feedback without making them small and without softening it into uselessness. The two failure modes — feedback that's too sharp and feedback that's too vague — are equally common. The middle path is a learnable skill, not a personality trait.",
    culturalNote: "Most people give feedback either too late, too vague, or only in groups. The reason isn't that they don't care — it's that giving feedback well requires holding two things at once: care for the other person AND honesty about the work. Kim Scott's 'Radical Candor' frame is a popular shorthand for this; it's a useful heuristic, but the actual skill is older and quieter than the brand suggests.",
  },

  chunks: [
    {
      id: 'sbi',
      target: 'SBI',
      native: 'Situation, Behaviour, Impact — a structure for delivering feedback without character claims',
      literal: 'Center for Creative Leadership; the more conservative cousin of Radical Candor, with a longer field track record',
      emoji: '📐',
      phonetic: '"In yesterday\'s standup (situation), when you cut me off mid-sentence (behaviour), I lost my thread and we missed a point on the project (impact)." That sentence is doing real work.',
      audioRef: null,
    },
    {
      id: 'care_and_challenge',
      target: 'Care and challenge',
      native: 'The two ingredients that have to both be present for feedback to land',
      literal: 'Kim Scott, *Radical Candor* — caveat: a popular framework, not an evidence-based one in the academic sense; useful as a frame, not a verified taxonomy',
      emoji: '⚖️',
      phonetic: 'Care without challenge becomes ruinous empathy (you protect the person from the truth). Challenge without care becomes obnoxious aggression (you hand them the truth like a brick). Both fail.',
      audioRef: null,
    },
    {
      id: 'private_first',
      target: 'Private first',
      native: 'Negative or developmental feedback delivered one-to-one before any group setting',
      literal: 'Cross-cultural conflict literature; psychological safety research (Edmondson) — public correction reliably damages trust regardless of intent',
      emoji: '🚪',
      phonetic: 'Praise can sometimes be public. Critique almost never should be.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'SBI inside the four-part move',
    explanation: "When you're giving someone feedback, the four-part NVC structure still holds — but the observation slot is where SBI lives. You name the situation (when), the behaviour (what they did, camera-recordable), and the impact (what happened as a result). Then the feeling, the need, and the request stack on top. The whole package is honest, specific, and free of character claims. It is also slightly longer than people expect. That's correct.",
    examples: [
      { target: 'S — "In the client review on Tuesday morning..."', native: 'Names the moment, datable, specific.' },
      { target: 'B — "...when you took the budget question and answered it yourself..."', native: 'Camera-recordable behaviour, no "always" or "you tend to".' },
      { target: 'I — "...the client looked confused, and I had to follow up with corrections after."', native: 'Specific, observable consequence — not "you undermined me".' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sort each piece of feedback',
      pairs: [
        { left: '"You\'re being unprofessional"', right: 'Character claim — too vague' },
        { left: '"In the email to the client this morning, the typo in their company name went out"', right: 'Clean SBI observation' },
        { left: '"You\'re really good in meetings"', right: 'Vague — useless even when positive' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is feedback that lands?',
      question: 'Pick the one with situation, behaviour, AND impact',
      options: [
        { text: '"You need to be more professional in meetings."', correct: false },
        { text: '"In yesterday\'s client call, you used the client\'s wrong job title twice. They corrected you the second time and then changed the subject."', correct: true },
        { text: '"Honestly, I just don\'t think you\'re ready for this kind of work."', correct: false },
      ],
      explanation: 'The middle option names the moment (yesterday\'s client call), the specific behaviour (wrong job title twice), and the impact (the client corrected and then changed the subject). The other two are character claims — they tell the person who they are instead of what happened.',
    },
    {
      type: 'fill_blank',
      instruction: 'Apply the principle',
      sentence: 'Negative or developmental feedback should almost always be delivered _____ first.',
      options: ['privately', 'publicly', 'in writing'],
      correct: 'privately',
      context: 'Public correction does measurable damage to trust even when the content is accurate. The person stops hearing the feedback and starts protecting themselves from being shamed. Private first is not a kindness — it is a competence.',
    },
    {
      type: 'translate',
      instruction: 'Name one of the two failure modes of feedback (Scott\'s frame)',
      prompt: 'Care without challenge becomes ___ empathy.',
      correct: ['ruinous', 'ruinous empathy'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the SBI ordering',
      words: ['situation', 'behaviour', 'impact', 'then', 'then'],
      correct: ['situation', 'then', 'behaviour', 'then', 'impact'],
      translation: 'When → what → what happened. Three short clauses, then your feeling and your request.',
    },
    {
      type: 'translate',
      instruction: 'In one sentence — the question that distinguishes good feedback from bad',
      prompt: 'Did I name the specific behaviour, or did I name the ___?',
      correct: ['person', 'character', "person's character", 'whole person', 'the person'],
    },
  ],

  rwenDialogue: {
    intro: "Let's draft feedback for someone you actually need to give it to.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one person at work whose behaviour or work has been bothering you, where you have either avoided saying anything or said something too soft to land. Hold them in your head. We'll draft it together.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Start with the situation. When? Be specific. Date, meeting name, message thread — anything anchorable.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I keep wanting to say 'always' or 'consistently'. I can't pin it to one moment.", native: '', correct: true, feedback: "Then start with the most recent specific instance you can remember. 'In Tuesday's standup' is a thousand times stronger than 'you always'. If it's a pattern, you can mention the pattern AFTER the specific instance — but never instead of it." },
          { target: "I have a clear moment. Last Thursday's client call.", native: '', correct: true, feedback: "Excellent. That's your S. Now the B: what specifically happened? Not 'they were rude' — what would a camera have caught?" },
          { target: "Honestly, when I think about it, I'm not sure they actually did anything that wrong. It's more a feeling I have about them.", native: '', correct: true, feedback: "That's worth sitting with. Sometimes what looks like 'I need to give them feedback' is actually 'I have a story about them I haven't examined'. It's worth running this through Lesson 4's defusion move first — the feedback might dissolve, or it might come back sharper and clearer." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now the impact. What actually happened as a result of what they did? Not what you assume they intended. What landed for you, or for the work, or for the client.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I noticed I felt small and stopped contributing for the rest of the meeting. Other people seemed to follow my lead.", native: '', correct: true, feedback: "That's an honest impact. Specific to you, observable to anyone in the room. 'I felt small' is also a clean feeling — not a pseudo-feeling, no 'you made me feel small'. Excellent." },
          { target: "It made the team look unprofessional in front of the client.", native: '', correct: true, feedback: "Solid impact — but check whether it's something you actually observed or something you assumed. If the client said something or did something that suggested it, name that. If not, it's an inference dressed as an impact." },
          { target: "Nothing visible happened, but I know it would have if it had gone on longer.", native: '', correct: true, feedback: "Then it's not yet impact, it's prediction. Worth being honest about that — 'I'm worried that if this continues, X' is a different sentence than 'X happened'. Both can land, but they need to be labelled differently." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "And the last move — make it private. If this is something you're tempted to bring up in a group meeting, hold the impulse. Find them one-on-one. Even if your workplace is direct, even if your manager would do it publicly. The data on this is unambiguous: privacy protects the message.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'What does SBI stand for?',
        correct: ['situation behaviour impact', 'situation, behaviour, impact', 'situation behavior impact', 'situation, behavior, impact'],
      },
      {
        prompt: 'In one phrase — where should developmental feedback almost always be delivered?',
        correct: ['privately', 'in private', 'one to one', 'one-to-one', 'one on one', 'one-on-one', 'private', 'in private first'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Pick one piece of feedback you've been holding back from giving — to a peer, a report, even a manager. Draft it as SBI: one sentence each for situation, behaviour, impact. Then add your feeling and your request. Don't deliver it yet — sit with it overnight. Tomorrow, decide whether it still feels accurate.",
    rwenSignoff: "Three sentences, then two. Five lines total. Sleep on them.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen helps the user pressure-test their SBI feedback draft. The user shares each component (situation, behaviour, impact) and Rwen flags any character claims, evaluative words, or assumed intent that has slipped in. They also surface the person's likely defensive response and rehearse the user's next move.",
    rwenRole: "Rwen — direct, surgical, but warm. Listens for character claims ('they always', 'they're the kind of person who'), assumed intent ('they did it on purpose to undermine me'), and impact-prediction dressed as impact. Helps the user catch each one and rephrase. Does NOT take a side on whether the feedback is justified — only on whether it's clean.",
    successCriteria: "User produces an SBI draft where the S is datable, the B is camera-recordable with no 'always'/'never', and the I is something that actually happened (not predicted). Bonus if the user catches their own assumption about the other person's intent and rephrases it as an observation.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
