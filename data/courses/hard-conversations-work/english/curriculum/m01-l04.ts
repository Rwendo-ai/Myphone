import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-real-request-not-demand',
  module: 1,
  lesson: 4,
  title: 'A Real Request, Not a Demand',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who asks for what they want — concretely, in plain language, with the other person free to say no. This is the part that turns a venting session into an actual conversation that can change something.",
    culturalNote: "The fastest way to tell whether you made a request or a demand is to imagine the other person saying 'no'. If 'no' would feel like a problem to you, you didn't make a request — you made a demand wearing a polite costume. Real requests are survivable when refused. That's what makes the other person able to say yes for real.",
  },

  chunks: [
    {
      id: 'request',
      target: 'Request',
      native: 'A specific, doable, present-tense ask the other person can act on',
      literal: 'NVC step 4 — Rosenberg; Crucial Conversations (Patterson) — "make it concrete"; behavioural specificity in negotiation literature',
      emoji: '🤝',
      phonetic: '"Could you let me know by Wednesday whether you can take that section?" — specific, doable, has an end-state.',
      audioRef: null,
    },
    {
      id: 'demand',
      target: 'Demand',
      native: 'An ask that comes with a punishment or a sulk if refused',
      literal: 'NVC contrast — Rosenberg; "the test of a request is the response to no"',
      emoji: '⛓️',
      phonetic: '"Can you respect me?" — vague, abstract, and any "no" is treated as a confirmation of the original grievance.',
      audioRef: null,
    },
    {
      id: 'doable',
      target: 'Doable',
      native: 'Phrased as a present-action the other person can take, not a state of being',
      literal: 'NVC — Rosenberg; behavioural psychology — "be a better listener" is not actionable; "let me finish a sentence before you reply" is',
      emoji: '🛠️',
      phonetic: '"Stop being defensive" is not doable. "Take a breath before you respond" is.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The four-part move, complete',
    explanation: "You now have all four parts of the NVC sentence. Observation: what a camera could record. Feeling: a real word about your interior. Need: the universal value pointing through the feeling. Request: a doable, present-tense ask the other person can say yes or no to. The complete sentence is rarely four crisp clauses — it's a slightly longer, slightly awkward paragraph. That's correct.",
    examples: [
      { target: '"In the team meeting on Tuesday, I shared the proposal and you didn\'t name me when you presented it to the director."', native: 'Observation — camera could record this.' },
      { target: '"I felt deflated and a bit small, because recognition matters to me."', native: 'Feeling + need.' },
      { target: '"Could you, in the next meeting, name who contributed which parts? I\'d like to know if that works for you."', native: 'Request — specific, doable, refusable.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sort each ask',
      pairs: [
        { left: '"Could you reply by end of day Friday?"', right: 'Request' },
        { left: '"Can you finally take this seriously?"', right: 'Demand' },
        { left: '"Please be more communicative."', right: 'Demand (vague)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a clean, doable request?',
      question: 'Pick the one that passes the doable test',
      options: [
        { text: '"Can you stop being so passive-aggressive in our meetings?"', correct: false },
        { text: '"In the next standup, could you say directly what you disagreed with rather than mentioning it later?"', correct: true },
        { text: '"I just need you to respect me more."', correct: false },
      ],
      explanation: 'The middle one names a specific moment, a specific behaviour, and an alternative. The other two ask for a state of being or a personality change — neither of which is a thing the other person can actually do on Wednesday morning.',
    },
    {
      type: 'fill_blank',
      instruction: 'Apply the doable test',
      sentence: 'A real request asks for a specific _____, not a state of being.',
      options: ['action', 'attitude', 'feeling'],
      correct: 'action',
      context: '"Be more supportive" asks for a state of being. "Send me a message before you commit me to a deadline" asks for a specific action — and the other person can actually do it tomorrow morning.',
    },
    {
      type: 'translate',
      instruction: 'The test that distinguishes a request from a demand',
      prompt: 'A request becomes a demand if the asker cannot accept the answer ___',
      correct: ['no', '"no"', 'no.', 'no being said', 'is no'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the four-part NVC ordering',
      words: ['observation', 'feeling', 'need', 'request', 'then', 'then', 'then'],
      correct: ['observation', 'then', 'feeling', 'then', 'need', 'then', 'request'],
      translation: 'O–F–N–R. The full sentence rarely sounds elegant — it sounds careful, slightly awkward, and unmistakably honest. That is the right tone.',
    },
    {
      type: 'translate',
      instruction: 'Convert this demand into a request',
      prompt: '"Stop interrupting me." → "When I\'m mid-sentence in our meetings, could you ___ before responding?"',
      correct: ['wait', 'let me finish', 'pause', 'wait until I\'m done', 'wait until I finish', 'hold on'],
    },
  ],

  rwenDialogue: {
    intro: "Let's draft your request — the fourth and last part.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Take your sentence so far — observation, feeling, need. Now: what do you actually want them to do? Not in spirit. In a specific action. By a specific time. A thing they could do on Wednesday morning.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I want them to listen better. To be more attentive when I speak.", native: '', correct: true, feedback: "That's a state of being, not an action. Try this: in what specific moment, doing what specific thing? 'When I'm presenting in the team review, could you wait until I finish before adding context?' — that's doable on Wednesday morning." },
          { target: "I want them to credit me when they reuse my work in front of the director.", native: '', correct: true, feedback: "Excellent. That's a specific action in a specific setting. Now phrase it as a question, not a statement: 'Could you, when presenting our work to the director, name who contributed which parts?' — and check whether you can hear 'no' without it being a betrayal." },
          { target: "Honestly, I want them to apologise.", native: '', correct: true, feedback: "An apology is a perfectly valid request — but it has to be doable and refusable. 'I'd like to hear that you understand how that landed for me, in your own words' is a request. 'You owe me an apology' is a demand. The first one might land. The second almost certainly won't." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now the test. Imagine they say no. Imagine they say 'I don't think that's fair' or 'I don't agree with how you've described it.' What do you do?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd be furious. That would prove they don't take this seriously.", native: '', correct: false, feedback: "Then it's not yet a request. The fury reveals it as a demand. Worth sitting with that — what would it mean for you if they actually said no, and you couldn't make them change their mind?" },
          { target: "I'd be disappointed but I could keep talking. I might propose something else.", native: '', correct: true, feedback: "That's the marker of a real request. Disappointment is allowed. Disappointment that you can survive without retaliating is what makes the original ask legitimate." },
          { target: "I'd probably leave the conversation and figure out what to do next on my own.", native: '', correct: true, feedback: "Also a real request. 'No' that ends the conversation cleanly is a 'no' you can hear. The thing you can't tolerate is what reveals the demand underneath." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You now have all four parts. The sentence will feel slightly long and slightly stiff. That is what an honest sentence sounds like. Most workplace messages are too short and too clever. Yours will be the right length.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'What is the test that distinguishes a request from a demand?',
        correct: ['can the other person say no', 'whether they can say no', 'survives no', 'survives a no', 'they can say no', 'imagining no', 'the response to no'],
      },
      {
        prompt: 'In one word — a real request asks for an ___ not a state of being.',
        correct: ['action', 'an action'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Add the fourth line to your draft: 'Could you, [in this specific situation], [do this specific thing]?' Then run the no-test on it: imagine the other person refusing. If you can hear that 'no' without it feeling like a betrayal, you have a request. If not, soften the ask or change what you're asking for. Save the final draft.",
    rwenSignoff: "Four lines. That's your message. Don't send it yet — the next lessons sharpen it for specific contexts.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen runs the user's full four-part draft, checking the request specifically: is it doable, present-tense, refusable? The user leaves with one final draft they could send.",
    rwenRole: "Rwen — practical, slightly editorial. Helps the user spot vague verbs ('be better', 'try harder', 'communicate more'). Pushes for a specific action in a specific time-window. Then runs the no-test: 'imagine they say no — what would you do?'. If the user can't tolerate the no, helps them sit with that rather than rephrasing the request prematurely.",
    successCriteria: "User produces a request that (1) names a specific action, (2) names a specific context or time-window, and (3) survives the no-test (the user can articulate what they would do if refused, without retaliation language). Bonus if the user catches a hidden demand inside their own request.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
