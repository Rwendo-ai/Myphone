import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-real-apology-to-a-child',
  module: 1,
  lesson: 6,
  title: 'A Real Apology to a Child',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Most apologies parents offer are not real apologies. They are speeches that sound like apologies but actually ask the child to carry the parent's discomfort. Today is a four-part shape that keeps the apology a gift, not a transfer.",
    culturalNote: "Marshall Rosenberg's Nonviolent Communication gave us a clean four-part structure for hard messages: observation, feeling, need, request. The same shape works for apology, with one twist: the parent owns all four parts. The child is not asked to provide anything in return.",
  },

  chunks: [
    {
      id: 'observation',
      target: 'Observation',
      native: "What happened, said factually, no exaggeration, no minimising. 'I shouted at you when you spilled the milk' — not 'I overreacted a bit' and not 'I lost the plot completely.'",
      literal: "NVC (Rosenberg) — observation without evaluation",
      emoji: '👁️',
      phonetic: "Just the camera footage. No commentary track.",
      audioRef: null,
    },
    {
      id: 'feeling_and_need',
      target: 'Feeling and need (yours)',
      native: "What was happening inside you. 'I was tired and scared we'd be late, and I took it out on you.' Names the real driver without making it the child's job to fix.",
      literal: 'NVC — feeling and need; emotion-focused therapy — primary emotion',
      emoji: '🌊',
      phonetic: 'Honest about you. Not blaming you.',
      audioRef: null,
    },
    {
      id: 'no_transfer',
      target: 'No transfer',
      native: "The apology ends with what you will try, not with what the child should do. No 'but'. No 'you also'. No 'are we okay?' that pulls reassurance from them.",
      literal: 'Brené Brown — apology vs. shame-shifting',
      emoji: '🙅',
      phonetic: "Carry your own bag. Don't hand them yours.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The four-part apology',
    explanation: "The shape: (1) Observation — what you actually did. (2) Feeling/need — what was driving it inside you. (3) Owning — that it wasn't fair, that it wasn't their fault. (4) Try — what you will try to do differently next time. Then stop. Don't add 'and you have to understand my side too.' Don't end with 'so are we okay?' Don't lecture about why this means they should also be more careful. The apology is a sentence, not a paragraph. Children — and adult children — feel the difference instantly between an apology that costs the parent something and a speech that asks them to absorb the parent's guilt.",
    examples: [
      { target: "Toddler — yelled over spilled milk", native: "'I shouted at you about the milk. I was rushing and I was angry. The milk was an accident — it wasn't your fault. I'll try to slow down next time.' Then a hug if offered." },
      { target: "Teen — humiliated them in front of cousins", native: "'When I called you lazy in front of your cousins yesterday, that was wrong. I was embarrassed and I took it out on you. It wasn't fair. I'll keep that kind of thing between us in future.'" },
      { target: "Adult child — dismissed their hard week as drama", native: "A short call. 'When you told me about your week and I said you were being dramatic, that was dismissive. You were telling me something real. I'm sorry. I'd like to actually hear you when you're ready to tell me again.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each part of the apology to its description',
      pairs: [
        { left: 'Observation', right: 'What you actually did, said factually' },
        { left: 'Feeling and need', right: 'What was happening inside you that drove it' },
        { left: 'No transfer', right: 'No "but", no "you also", no asking them to comfort you' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which of these is the cleanest apology for shouting?",
      question: 'Pick the strongest version',
      options: [
        { text: "'I'm sorry I shouted, but you really pushed me with that attitude.'", correct: false },
        { text: "'I shouted, and that wasn't fair. I was tired and I took it out on you.'", correct: true },
        { text: "'I'm sorry. Are we okay? Please tell me we're okay.'", correct: false },
      ],
      explanation: "The 'but' version protects the parent's ego at the child's expense. The 'are we okay?' version asks the child to provide reassurance — flipping the apology into a request. The middle version names what happened, owns it, and stops.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'An apology is a _____, not a paragraph.',
      options: ['sentence', 'speech', 'process'],
      correct: 'sentence',
      context: "Length is often where parental shame leaks in — every extra clause is the parent trying to feel less bad. Children read the long apology as a request for absolution. Short and clear is kinder.",
    },
    {
      type: 'translate',
      instruction: "What two words should not appear in a real apology?",
      prompt: 'Avoid the word "but" and avoid asking ___',
      correct: ['are we okay', '"are we okay"', 'are we okay?', 'are we ok', '"are we ok"', 'are we ok?'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the principle that anchors this lesson",
      words: ['carry', 'own', 'your', 'bag'],
      correct: ['carry', 'your', 'own', 'bag'],
      translation: "The apology is the parent's load. Putting it on the child — by demanding forgiveness, by demanding understanding, by collapsing into guilt — is not an apology.",
    },
    {
      type: 'translate',
      instruction: 'The fourth part of the apology is "what you will ___"',
      prompt: 'What you will ___',
      correct: ['try', 'try to do', 'do differently', 'try differently', 'try next time', 'try to change', 'do', 'change'],
    },
  ],

  rwenDialogue: {
    intro: "Pick one apology you owe — recent or old. We'll draft it together. You don't have to send it now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "First, in one sentence, what's the observation? What did you actually do — not interpreting it, just naming it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I yelled at them in front of other people.", native: '', correct: true, feedback: "Good observation. Now the feeling: 'When I yelled at you in front of [the people], I was [embarrassed / overwhelmed / angry]. That wasn't fair. I'll try to handle big feelings privately next time.' Three sentences. Don't add a fourth." },
          { target: "I broke a promise I made to them.", native: '', correct: true, feedback: "Promise-breaking lands harder than parents realise — especially with children old enough to remember. 'I said I would [the thing] and I didn't. That wasn't fair. I'll be more careful about what I promise from now on, and when I say I'll do something I'll mean it.' Don't explain why you broke it. The reason isn't the apology." },
          { target: "I compared them unfavourably to a sibling or cousin.", native: '', correct: true, feedback: "Comparison wounds children deeply — even adult children. 'When I compared you to [your sibling/cousin], that was unfair. You're not them and you don't have to be. I'm sorry.' Stop there. Resist the urge to add 'I just meant...' — comparisons don't have justifications that help." },
          { target: "I dismissed something real they were trying to tell me.", native: '', correct: true, feedback: "This is a quieter rupture and one of the most important to repair. 'When you told me [the thing] and I [dismissed it], you were telling me something real. I missed it. I'd like to hear it properly when you want to tell me again.' Then actually listen if they take you up on it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whether you say it tonight or this week or never out loud, you've now drafted a real one. The first audience for an apology is sometimes just the parent, hearing themselves say it cleanly.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Name the four parts of a real apology (observation, feeling/need, owning, ___)',
        correct: ['try', 'what you will try', 'what you will do', 'a try', 'try next time', 'change', 'do differently'],
      },
      {
        prompt: 'An apology is a ___, not a paragraph',
        correct: ['sentence', 'short sentence', 'few sentences', 'a sentence'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Pick one apology you owe a child of any age. Draft the four parts on paper or in your head: what you did, what was happening in you, owning it without 'but', what you will try. Deliver it today if you can. If you can't deliver it today, knowing the shape is enough — it will be there when the moment comes.",
    rwenSignoff: "Four parts. No 'but'. No 'are we okay?'. The apology stays a gift.",
  },

  phase8: {
    scenario: "User has just finished Lesson 6. Rwen helps them draft a specific four-part apology for a real rupture, paying attention to common failure modes — adding 'but', asking the child to comfort them, lecturing, over-explaining.",
    rwenRole: "Rwen — kind, structural, like a friend helping you write a difficult message. Will gently flag if the user's draft slips into self-defence ('but you also...') or shame-collapse ('I'm such a bad parent'). Both undermine the apology.",
    successCriteria: "User produces a clean four-part apology in three to four sentences, with no 'but' and no request for reassurance. Bonus if they note the apology is short on purpose, and that the brevity is what makes it land.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
