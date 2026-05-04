import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-the-conversation-youve-been-avoiding',
  module: 1,
  lesson: 7,
  title: "The Conversation You've Been Avoiding (Driving, Money, Wishes)",
  estimatedMinutes: 9,
  xpReward: 40,

  hook: {
    rwenLine: "Today's the day you become someone who can open a conversation that has been closed for years. We are not going to have the conversation today — we are going to plan a single sentence that opens it. That is the whole assignment. The decisions are theirs. The opening is yours.",
    culturalNote: "Atul Gawande's *Being Mortal* makes a quiet but world-changing observation: most family doctors avoid the hard conversations because the conversations are uncomfortable, and most adult children avoid them for the same reason. The result is decisions made in crisis, in hospital corridors, by people who are too tired to weigh them properly. Having even one calm conversation, before the crisis, changes everything that follows.",
  },

  chunks: [
    {
      id: 'the_three_conversations',
      target: 'The three conversations',
      native: 'Driving (when to stop), money (how things stand and what they want), and end-of-life wishes (what they want, what they don\'t)',
      literal: 'Geriatric medicine; *Being Mortal* (Gawande); *When the Time Comes* (Span); the three most-avoided and most-load-bearing conversations',
      emoji: '🗝️',
      phonetic: "Three different conversations, same opening move. Pick the one that's smallest first.",
      audioRef: null,
    },
    {
      id: 'opening_sentence',
      target: 'The opening sentence',
      native: 'A single, prepared, low-pressure sentence whose only job is to open the door — not to resolve anything',
      literal: 'NVC (Rosenberg) — observation + question without demand; also motivational interviewing techniques used in palliative care',
      emoji: '🚪',
      phonetic: "Not 'we need to talk.' Not 'let's solve this.' One sentence whose only job is the opening.",
      audioRef: null,
    },
    {
      id: 'their_decision',
      target: 'Their decision, your job to bring up',
      native: 'You are not deciding for them. You are making sure the question is in the room, in time, with calm.',
      literal: 'Gawande — autonomy in geriatric medicine; the principle that competent adults make their own choices and the family\'s job is to surface the questions, not pre-decide the answers',
      emoji: '⚖️',
      phonetic: "Open. Don't close. The decision was always going to be theirs.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The opener — three parts, one sentence',
    explanation: "The hardest part of the hard conversation is starting it. A useful opener has three small parts. (1) An observation, calmly stated. (2) A question, openly framed. (3) A signal that you are not trying to decide for them. That's it. The conversation may go for an hour or three minutes. Either is fine — the door is open and you can come back. Important reminder: medical, legal, and financial decisions belong to your parent and their professional team. This lesson is about how to open the door, not about which decision is right.",
    examples: [
      { target: "Driving:", native: "'Dad, I noticed the bumper on Friday. I don't want to tell you what to do — but I'd love to hear how driving feels for you these days.'" },
      { target: "Money:", native: "'Mum, I don't want to manage your money. I just want to know that if anything happened, we wouldn't be guessing. Could we sit down sometime and you walk me through where things are?'" },
      { target: "End-of-life wishes:", native: "'I read something this week that asked — when the time comes, what would matter most to you? Not deciding anything. I just realised I don't know your answer.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'The three conversations', right: 'Driving, money, end-of-life wishes' },
        { left: 'The opening sentence', right: 'A single sentence whose only job is to open the door' },
        { left: "Their decision, your job to bring up", right: "You surface the question; they make the choice with their professional team" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these openings is most likely to open the conversation rather than close it?',
      question: 'Pick the one most aligned with this lesson',
      options: [
        { text: '"Dad, we need to talk about you giving up the car. The whole family agrees it\'s time."', correct: false },
        { text: '"Dad, I\'d love to hear how driving feels for you these days. I\'m not trying to decide anything for you — I just realised I haven\'t asked."', correct: true },
        { text: '"Dad, you can\'t keep doing this. You\'re going to hurt someone."', correct: false },
      ],
      explanation: "The first uses 'we need to talk' (closed posture) and 'the whole family agrees' (an alliance against him); both will trigger defensiveness. The third names a real fear but lands as accusation. The second is curious, unhurried, and explicitly hands the decision back. This is the opener. The conversation can go anywhere from there.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'You are not making the decision. You are making sure the _____ is in the room.',
      options: ['question', 'answer', 'family'],
      correct: 'question',
      context: "Gawande's central claim about geriatric care: the failures are not usually wrong decisions — they are decisions made too late, in crisis, by people who never had the calm conversation when they could have. Surfacing the question early, calmly, repeatedly, is most of the work.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the only job of the opening sentence?',
      prompt: 'Not to solve. Not to decide. Just to ___',
      correct: ['open the door', 'open', 'start the conversation', 'open the conversation', 'open it'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the underlying principle",
      words: ['theirs', 'is', 'mine', 'the', 'is', 'opening', 'decision', 'the'],
      correct: ['the', 'decision', 'is', 'theirs', 'the', 'opening', 'is', 'mine'],
      translation: "Eight words to remember when you put your hand on the door. The decision was never yours.",
    },
    {
      type: 'translate',
      instruction: 'Draft your own opening sentence for one of the three conversations. (Pick the smallest one.)',
      prompt: 'My opening sentence is:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three real openings, in three different families.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Lakshmi has been worrying about her father's driving for eight months. On a Sunday walk she said: 'Pa, I noticed the kerb on Friday. I don't want to tell you what to do — but I'd love to hear how driving's been feeling for you.' He was quiet for a minute. Then he said: 'I've been worried too, actually.' That was the whole conversation that day. The door was open.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Wei's mother has never spoken about money in her life. Wei said, 'Ma, I don't want to manage your money. I just want to know that if anything happened we wouldn't be guessing.' Her mother said no. Wei said, 'Okay,' and dropped it. Six weeks later her mother brought it up herself. Some doors take more than one push. The first push still mattered.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Tinashe's family is at war over their father's care. The siblings cannot be in the same room. Tinashe asked his father, alone, on a quiet evening: 'Baba, when the time comes, what would matter most to you?' His father told him three things. Tinashe wrote them down. The decisions were not made that night. But the family now has the father's voice, in his words, when the harder day comes.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have been avoiding one of these conversations for a long time.", native: '', correct: true, feedback: "Almost everyone has. The avoidance is not your failure — these are conversations our culture does not teach us how to start. The opening sentence is the smallest possible step. Try one this week. The door does not have to swing all the way open." },
          { target: "I have started but it didn't go well, and now I'm scared to try again.", native: '', correct: true, feedback: "Common. A first attempt that lands badly is not a verdict on the conversation — it is information about the timing, the words, or what they were carrying that day. The same opening sentence, in a quieter moment, often lands differently. The door can be tried more than once." },
          { target: "We have already had these conversations and I am not sure what this lesson is for me.", native: '', correct: true, feedback: "Then this lesson is your reminder to come back to them as things change. The conversations are not one-time events — what your parent wanted three years ago may not be what they want now. The opening sentence works for re-opening too." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "One sentence. Pick the smallest of the three. The decisions were never yours. The opening, just this once, is.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In three words: name the three conversations this lesson is about.',
        correct: ['driving, money, wishes', 'driving money wishes', 'driving money end-of-life', 'driving, money, end-of-life', 'driving money and wishes', 'driving, money, end of life'],
      },
      {
        prompt: 'What is the only job of the opening sentence?',
        correct: ['to open the door', 'open the door', 'to open the conversation', 'open it', 'to open it', 'opening', 'to start the conversation', 'open the conversation'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Write down (on paper, in your phone, anywhere) one opening sentence for one of the three conversations. Pick the smallest one. Don't say it today — just have it ready, in your own words, so when the right moment comes you don't have to invent it. (Reminder: medical, legal, and financial decisions are theirs and their professional team's. This is just the door-opening.)",
    rwenSignoff: "One sentence. On paper. Ready for the moment that comes. That's the whole assignment.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen helps the user draft a single opening sentence for ONE of the three conversations — driving, money, or end-of-life wishes. This is a practical, drafting conversation: Rwen offers the three-part structure (observation + open question + 'I'm not deciding anything') and the user fills in their own words.",
    rwenRole: "Rwen — practical, warm, specific. Asks the user to pick which of the three conversations is the smallest one for them right now. Offers the three-part structure. Helps them rewrite the sentence in their own voice. Checks for: (a) is the sentence curious rather than confrontational? (b) does it explicitly hand the decision back? (c) is it short enough to actually say? Does NOT advise on what the parent should decide. Does NOT push the user to have the conversation today. Reminds the user that medical, legal, and financial decisions are for the parent and their professional team.",
    successCriteria: "User produces one specific opening sentence in their own voice for one of the three conversations, AND identifies a calm moment in the next two weeks when they could plausibly say it. Bonus if they articulate why this particular conversation is the smallest one for them. The lesson succeeds even if the user decides not to have the conversation yet — having the sentence drafted is the whole assignment.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
