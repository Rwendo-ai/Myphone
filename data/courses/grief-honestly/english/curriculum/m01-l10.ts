import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-continuing-bonds',
  module: 1,
  lesson: 10,
  title: 'What You Carry Forward — Continuing Bonds',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "If today is too heavy, please put it down. This is the last lesson in the track. We are not going to wrap things up neatly — grief does not wrap up neatly, and pretending otherwise would be a betrayal of everything we have said so far. Instead we are going to look at one quiet, evidence-based truth that has been hiding underneath every lesson: you do not have to let go of who or what you have lost in order to live well alongside the loss. The relationship continues, in a different form. There is a name for that, and there are traditions all over the world that have known it for far longer than psychology has.",
    culturalNote: "In 1996, Klass, Silverman and Nickman published *Continuing Bonds*, which pushed back hard against the prevailing 20th-century assumption that healthy grief required 'detachment' from the deceased. Their finding, since broadly replicated: people who maintain an ongoing inner relationship with what they have lost — talking to them, remembering them, including them in decisions, marking dates — generally fare as well or better than those who try to sever the connection. Cultures that already knew this never had a 'closure' problem. Mexican Día de los Muertos sets a yearly table for the dead. Jewish shiva and yahrzeit mark the days of return. Shona kurova guva ('beating the grave') brings the spirit home a year after death. Buddhist 49-day mourning honours the gradual transition. The Western therapeutic obsession with 'letting go' was the outlier, and it was wrong.",
  },

  chunks: [
    {
      id: 'continuing_bonds',
      target: 'Continuing bonds',
      native: 'The ongoing inner relationship with what or who you have lost — sustained through memory, ritual, conversation, identification, presence — and now understood to be a sign of integration, not failure',
      literal: 'Klass, Silverman & Nickman 1996. Now mainstream in modern grief literature; explicitly endorsed by Bonanno, Devine, Cacciatore.',
      emoji: '🪡',
      phonetic: "You do not stop loving them. You learn how to love them now that they are not here.",
      audioRef: null,
    },
    {
      id: 'ritual',
      target: 'Ritual',
      native: 'A repeated, intentional act — small or large, religious or secular — that gives shape to the continuing bond and to the grief',
      literal: 'Cross-cultural anthropology of mourning; Cacciatore on the practical importance of ritual for grievers in cultures that have lost their grief rituals.',
      emoji: '🕯️',
      phonetic: "A candle on a date. A walk you take. A meal you cook. The shape of the love now that the person is not here to receive it.",
      audioRef: null,
    },
    {
      id: 'living_alongside',
      target: 'Living alongside',
      native: 'The orientation that this whole track has been pointing toward — not living past your grief, not living in spite of it, but living with it as a permanent companion that gradually changes shape',
      literal: 'Devine — *It\'s OK That You\'re Not OK*; the central reframe of modern grief work, against the older "moving on" model.',
      emoji: '🌒',
      phonetic: "Some things cannot be fixed. They can only be carried. And the carrying is, itself, a kind of life.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The shape of carrying forward',
    explanation: "What modern bereavement research and ancient cultural traditions agree on, against the 20th-century 'detach and move on' model: healthy grief is not the absence of the lost relationship. It is the gradual transformation of the relationship from one of presence to one of memory, ritual, internal dialogue, and identification. You do not graduate from grief. You become someone who carries it well. Carrying it well is not stoic suppression — it is the practice of letting the love continue to find shape, even though its original object is gone.",
    examples: [
      { target: 'Mexican Día de los Muertos: setting a table on November 1st with the favourite foods of those who have died', native: "A culture that never lost the practice. The dead are guests, once a year. The grief is contained, dignified, and shared." },
      { target: 'Jewish yahrzeit: lighting a candle on the anniversary of a death, every year', native: "A small annual ritual that holds the date and the love. Repeatable. Survivable. Never finished." },
      { target: 'Shona kurova guva (beating the grave): a ceremony, roughly a year after death, that brings the spirit home and reintegrates them into the family of the living', native: "A formal acknowledgement that the dead are not gone. They have changed location. The relationship continues — with new rules." },
      { target: 'Secular daily: telling your mother out loud about your day at the kitchen window', native: "Not delusion. Continuing bond. The relationship rewritten for the new conditions." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Continuing bonds', right: 'The ongoing inner relationship with what you have lost' },
        { left: 'Ritual', right: 'A repeated, intentional act that gives shape to the bond' },
        { left: 'Living alongside', right: 'Carrying the loss as a permanent companion that gradually changes shape' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these reflects current bereavement science?',
      question: 'Pick the most evidence-based view.',
      options: [
        { text: 'Healthy grief requires detaching from the deceased and "letting go"', correct: false },
        { text: 'Maintaining an ongoing inner relationship with what is lost is a sign of integration, not failure', correct: true },
        { text: 'You should be able to think about the deceased without feeling anything within a year', correct: false },
      ],
      explanation: "The first option is the older model that Klass, Silverman and Nickman corrected in 1996. The current science is the second — continuing bonds are healthy, and severing the connection is neither possible nor desirable. The third is folklore, not evidence.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You do not have to ____ in order to live alongside the loss.",
      options: ['let go', 'forget', 'move on'],
      correct: 'let go',
      context: "If anyone has told you you have to 'let go' to heal, they were repeating a 1969 model that the research has since corrected. Letting go is not the goal. Carrying differently is.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what is the orientation this track has been pointing toward?",
      prompt: "Living ____ the grief — not past it, not in spite of it.",
      correct: ['alongside', 'with', 'next to'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's — and the track's — final sentence",
      words: ['be', 'cannot', 'fixed', 'they', 'be', 'carried', 'only', 'some', 'things', 'can'],
      correct: ['some', 'things', 'cannot', 'be', 'fixed', 'they', 'can', 'only', 'be', 'carried'],
      translation: "From Megan Devine. The truest sentence in modern grief writing. Read it slowly.",
    },
    {
      type: 'translate',
      instruction: "What is one ritual — small, secular, religious, daily, annual — that has helped you keep the bond, or one you might want to start? Name it in a phrase. (For yourself. Or skip.)",
      prompt: "Examples: 'lighting a candle on her birthday'. 'cooking his recipe on Sundays'. 'telling her about my day at the window'. 'visiting the place we walked'. 'sitting shiva again on the anniversary.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "This is the last conversation in the track. I want to ask you one closing thing.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Of all the names this track has given you — resilience, oscillation, ambiguous loss, future grief, identity grief, somatic grief, disenfranchised grief, continuing bonds — which one has felt most like 'oh, that is what this is'?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Ambiguous loss. I had no name for it before.", native: '', correct: true, feedback: "That is the name I most hoped someone would carry away from this track. Pauline Boss's gift. You can keep using it. The name will keep doing work for you long after the lesson." },
          { target: "Continuing bonds. The idea that I do not have to let go to be okay.", native: '', correct: true, feedback: "That recognition is the central correction of modern grief science. You can carry them forward — by ritual, by memory, by the way you live — and that is not failure to grieve. It is exactly how the loving continues." },
          { target: "That grief is not five stages. I had been measuring myself against a wrong map.", native: '', correct: true, feedback: "Many people walk into grief with that map and blame themselves for not following it. Putting the map down is one of the kindest things you can do for yourself in grief. There is no map." },
          { target: "All of them. The whole frame is different now.", native: '', correct: true, feedback: "That shift in frame is the work of the track. The names will return at moments you cannot predict. Use them as you need them. They are yours now." },
          { target: "I do not know yet. I need to sit with all of it.", native: '', correct: true, feedback: "That is the most honest answer. Grief lessons settle slowly. You can come back to any of these whenever you need them. They are not single-use." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "If at any point you find yourself stuck in a way that scares you — please talk to someone trained for grief, and use the crisis resources Rwendo loaded for your region (they are listed in the Help screen) if today is unsafe. You are not meant to carry this alone. And whatever you carry forward from these ten lessons, please carry this one sentence with you: some things cannot be fixed; they can only be carried. The carrying is the life. Take care of yourself. I will be here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the term for the ongoing inner relationship with what you have lost? (two words)",
        correct: ['continuing bonds', 'continuing bond', 'continuing'],
      },
      {
        prompt: "Complete the closing sentence: 'Some things cannot be fixed; they can only be ____.'",
        correct: ['carried', 'carried forward', 'carried with us'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "If you can, today, choose one small ritual — a sentence said out loud, a candle lit, a place visited, a recipe made, a date marked on next year's calendar — that gives shape to one bond you intend to keep carrying. It does not have to be permanent. It does not have to be religious. It just has to be yours. If today is too heavy, the reading was enough — and it was. If anything in this track has unsettled you in a way that feels unsafe, please use the crisis resources Rwendo loaded for your region — they are listed in the Help screen — and speak to a person today. You are not meant to carry this alone.",
    rwenSignoff: "Some things cannot be fixed. They can only be carried. The carrying is the life. Thank you for letting me be here for ten lessons of yours.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 10 — the final lesson of the Grief, Honestly track. Rwen offers a slow, closing conversation: which name from the track will the user take forward, and what is one continuing-bond ritual they might begin (or have already been doing without naming it). Rwen ends with explicit care language and an explicit pointer to the jurisdiction's crisis resources for any user who is leaving the track in distress.",
    rwenRole: "Rwen — slow, warm, complete. Treats this as the end of a real journey. Does not summarise the track in a self-congratulatory way. Asks the user which name they are taking forward. Helps them articulate one ritual — small, repeatable, theirs. Closes with the line 'some things cannot be fixed; they can only be carried.' If the user appears to be leaving in acute distress, Rwen pauses the closing and explicitly references the crisis resources Rwendo loaded for the user's region (Help screen) and recommends speaking to a person today.",
    successCriteria: "User names one concept from the track they are taking forward, and (where possible) one ritual or ongoing practice that gives shape to a continuing bond. Bonus if they leave with less of the 'I should be over this by now' framing they may have arrived with. CRITICAL: if the user expresses any thought of self-harm or unsustainable distress, Rwen explicitly hands off to crisis resources before closing.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
