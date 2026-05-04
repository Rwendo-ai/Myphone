import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-rupture-and-repair',
  module: 1,
  lesson: 5,
  title: 'You Will Lose It. What Happens Next Is the Lesson',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "If today is too raw — if you're already carrying something with your child — feel free to come back to this one tomorrow. Otherwise, this is a lesson about the moment that decides more than the blow-up itself: what you do after.",
    culturalNote: "Daniel Siegel & Tina Bryson made the clinical case clearly: secure attachment is not built by parents who never rupture. It is built by parents who repair. Gottman's relationship research said the same thing about marriages. Children whose parents rupture-and-repair grow up trusting that hard moments are workable. Children whose parents rupture-and-pretend grow up bracing.",
  },

  chunks: [
    {
      id: 'rupture',
      target: 'Rupture',
      native: "Any moment of real disconnection — you shouted, you said something cruel, you walked out, you went cold, you broke a promise. The big ones and the small ones both count.",
      literal: 'Siegel & Bryson — No-Drama Discipline; Gottman — repair attempts',
      emoji: '⚡',
      phonetic: "Rupture is normal. Pretending it didn't happen is not.",
      audioRef: null,
    },
    {
      id: 'repair',
      target: 'Repair',
      native: "The deliberate return — coming back, naming what happened, owning your part, no 'but', no making the child comfort you. Even days late, repair still works.",
      literal: 'Siegel & Bryson; Gottman; relational therapy traditions',
      emoji: '🌉',
      phonetic: 'Not an apology in the social sense. A bridge back.',
      audioRef: null,
    },
    {
      id: 'still_works_late',
      target: 'It still works late',
      native: "Repair done a day, a week, a year, a decade later still works. The brain re-files the old memory with the new ending. There is no expiry date on coming back.",
      literal: 'Memory reconsolidation research; Bruce Ecker — Coherence Therapy',
      emoji: '⏳',
      phonetic: "If you missed it yesterday, you can still do it today.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Repair, simply',
    explanation: "A repair has three moves. One: come back to the child, after you have actually regulated yourself (not before). Two: name what happened, briefly, in your own voice — 'I lost my temper. I shouldn't have shouted. That was about me, not you.' Three: stop. Do not make them say it's okay. Do not turn it into a lecture. Do not collapse into your own guilt and ask them to comfort you. The child takes a beat, and then — usually — softens. If they don't, the repair still landed; it just hasn't been visible yet.",
    examples: [
      { target: "Toddler — you snapped over a spilled drink", native: "Repair: kneel down, eye level. 'I shouted. That was a big voice over a small thing. I'm sorry. The drink was an accident.' Then a hug if they want one." },
      { target: "Teen — you made a sarcastic comment about their friends", native: "Repair: 'Earlier when I was sarcastic about your friends — that wasn't fair. I was tired. Your friends are your business.' No defending the comment. No 'but you also...'." },
      { target: "Adult child — a hard call last week ended badly", native: "Repair: a short message. 'I've been thinking about our call. I was defensive. I'm sorry. I'd like to try again when you're ready.' That's the whole message. You don't need a long preamble." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'Rupture', right: 'A moment of real disconnection between parent and child' },
        { left: 'Repair', right: 'The deliberate return — naming, owning, not making them comfort you' },
        { left: 'Still works late', right: 'Repair done days or years later still re-files the memory' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is NOT part of a real repair?',
      question: 'Pick the move to leave out',
      options: [
        { text: "'I lost my temper. That was about me, not you.'", correct: false },
        { text: "'I'm sorry. I'd like to try again.'", correct: false },
        { text: "'I'm sorry, BUT you really pushed me — you have to understand my side.'", correct: true },
      ],
      explanation: "The 'but' is the move that turns repair into self-defence. The child hears the second half and the apology disappears. If their behaviour also needs a conversation, that's a separate conversation — not bolted onto the repair.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Secure attachment is not built by parents who never rupture. It is built by parents who _____.',
      options: ['repair', 'control themselves', 'apologise constantly'],
      correct: 'repair',
      context: "Siegel & Bryson's clinical line. The repair is the load-bearing move. Children who see their parents rupture-and-repair grow up trusting that hard moments are workable.",
    },
    {
      type: 'translate',
      instruction: 'A repair includes coming back, naming what happened, and ___',
      prompt: 'Owning ___',
      correct: ['your part', 'it', 'your share', 'your fault', 'what you did', 'your role', 'your half', 'what was yours'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central reassurance",
      words: ['expiry', 'on', 'no', 'is', 'date', 'coming', 'back', 'there'],
      correct: ['there', 'is', 'no', 'expiry', 'date', 'on', 'coming', 'back'],
      translation: 'Yesterday counts. Last year counts. The repair you do today will still re-file the memory.',
    },
    {
      type: 'translate',
      instruction: 'In a repair, do not make the child do what?',
      prompt: 'Do not make them ___',
      correct: ['comfort you', 'forgive you', 'say it is okay', 'say its okay', 'reassure you', 'apologise', 'make you feel better', 'absolve you', 'tell you it is fine', 'fix it for you'],
    },
  ],

  rwenDialogue: {
    intro: "Bring to mind one rupture you haven't repaired yet. It can be small. It can be old. We're going to write the repair together — you don't have to send it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "First — what happened? In one sentence, not justifying it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I shouted at my child over something small. I knew at the time it was too much.", native: '', correct: true, feedback: "Repair draft: 'I shouted yesterday over [the thing]. That was a big reaction to a small thing. I'm sorry. It wasn't your fault.' That's the whole repair. You can say it tonight at bedtime — kneel down, eye level, three sentences, no extras." },
          { target: "I said something cruel I can't take back.", native: '', correct: true, feedback: "The cruel thing needs a direct repair: 'When I said [the thing], that was cruel. I shouldn't have said it. It isn't true and it was about me being [angry/tired/scared], not about you.' Don't repeat the cruel words back. Just name that they happened, that you regret them, that they weren't fair." },
          { target: "I gave in when I said I wouldn't. They got their way and I felt small.", native: '', correct: true, feedback: "Repair here is a different shape: 'Yesterday I said no, then I said yes. That wasn't fair to you — I gave you a moving target. From now on, when I say no, I'll mean it, even when it's hard.' This repair is about your own integrity, and children are surprisingly relieved to hear it." },
          { target: "I went cold and walked out. I didn't shout, but I left them alone with it.", native: '', correct: true, feedback: "Withdrawal-rupture is real even when no voices were raised. Repair: 'When I walked out earlier, I was overwhelmed and I left you with all the feeling. That wasn't fair. I'm here now.' The child likely knows you went away; what they need is to know you came back." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You don't have to do this perfectly. You don't have to do it tonight. You just have to know that the door is still open. It always is.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Secure attachment is built by parents who ___ (not by parents who never rupture)',
        correct: ['repair', 'come back', 'reconnect', 'return', 'mend', 'make repairs', 'do repair', 'do the repair'],
      },
      {
        prompt: 'In a repair, what one word should you avoid using?',
        correct: ['but', '"but"', 'but.', 'the word but', 'but,'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Pick one rupture you haven't repaired — small or large, recent or old. Today, do a three-sentence repair: what happened, that it was about you not them, that you're sorry. No 'but'. No making them comfort you. If you can do it in person, do. If only a message is possible, a message counts.",
    rwenSignoff: "Three sentences. No 'but'. The door opens.",
  },

  phase8: {
    scenario: "User has just finished Lesson 5, which touches a real rupture in their parenting. Rwen helps them draft a specific repair — language, timing, setting — for one moment they have not yet repaired. Rwen explicitly checks if the user is okay continuing, and offers a graceful exit if today is too raw.",
    rwenRole: "Rwen — gentle, careful, never pushing. Offers an exit ramp at the start ('we can do this another day'). Does not pry into the rupture's details beyond what the user volunteers. Helps them write a brief, real repair script.",
    successCriteria: "User identifies one specific unrepaired moment, drafts a three-sentence repair without 'but', and articulates a plan for when/how to deliver it. Bonus if they note that the repair is for them as much as for the child — that the carrying around of unrepaired ruptures is a weight they can put down.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
