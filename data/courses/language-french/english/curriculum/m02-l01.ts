import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-excusez-moi',
  module: 2,
  lesson: 1,
  title: 'Excusez-moi — Excuse me',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're squeezing past someone on a tight Métro stairwell at Châtelet. Or you need a stranger's attention to ask the time. Or you bumped a shoulder in a Marais boutique. All three moments need the same magic word — 'Excusez-moi'. It's the lubricant of French life.",
    culturalNote: "In English, we say 'excuse me' to push past or get attention — and we say 'sorry' for almost everything else (bumping, interrupting, asking a question). French splits this much more cleanly: 'Excusez-moi' before you intrude, 'Pardon' for tiny accidents (a brushed elbow, stepping in someone's way), and 'Désolé(e)' for genuine apology. Mixing them up isn't catastrophic, but using 'Désolé' to push past someone sounds oddly heavy — like apologising for existing.",
  },

  chunks: [
    {
      id: 'excusez_moi',
      target: 'Excusez-moi',
      native: 'Excuse me (polite, to get attention or pass by)',
      literal: 'Excuse-me (you-plural/formal)',
      emoji: '🙋',
      phonetic: 'eks-kew-zay-MWAH',
      audioRef: null,
    },
    {
      id: 'pardon',
      target: 'Pardon',
      native: 'Sorry / Pardon (small accidents, light interruption)',
      literal: 'Pardon',
      emoji: '🤝',
      phonetic: 'par-DOHN',
      audioRef: null,
    },
    {
      id: 'desole',
      target: 'Désolé(e)',
      native: "I'm sorry (genuine apology)",
      literal: 'Desolated',
      emoji: '😔',
      phonetic: 'day-zo-LAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite intrusion — three weights',
    explanation: 'Match the word to the weight. Excusez-moi opens a door (asking, passing). Pardon is the quick brush. Désolé is reserved for when you actually feel bad. Add an -e in writing for Désolée if the speaker is a woman — sound is identical.',
    examples: [
      { target: 'Excusez-moi, vous avez l’heure?', native: 'Excuse me, do you have the time?' },
      { target: 'Pardon!', native: 'Sorry! (after bumping someone in the Métro)' },
      { target: 'Je suis désolé, je suis en retard', native: "I'm sorry, I'm late" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its best use',
      pairs: [
        { left: 'Excusez-moi', right: 'To get a stranger’s attention' },
        { left: 'Pardon', right: 'Quick "sorry" after a small bump' },
        { left: 'Désolé(e)', right: 'Genuine apology for a real mistake' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You want to ask a Parisian which Métro line goes to Bastille. How do you start?",
      sentence: '_____, c’est quelle ligne pour Bastille?',
      options: ['Excusez-moi', 'Désolé', 'Pardon'],
      correct: 'Excusez-moi',
      context: 'Approaching a stranger to ask something — the polite door-opener is Excusez-moi.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — you’re apologising properly for being 20 minutes late',
      prompt: "I'm sorry",
      correct: ['Désolé', 'Désolée', 'Je suis désolé', 'Je suis désolée', 'desolé', 'desolée'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask a stranger if they speak English',
      words: ['anglais?', 'Excusez-moi,', 'vous', 'parlez'],
      correct: ['Excusez-moi,', 'vous', 'parlez', 'anglais?'],
      translation: 'Excuse me, do you speak English?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most natural French',
      question: "You step on someone's foot in a crowded Lyon tram. You say:",
      options: [
        { text: 'Pardon!', correct: true },
        { text: 'Excusez-moi!', correct: false },
        { text: 'Je suis très désolé de mon comportement', correct: false },
      ],
      explanation: "A quick brush or step needs a quick 'Pardon!' — light and fast. Excusez-moi is for getting attention, and full Désolé is heavier than the moment needs.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — you need to interrupt a waiter who is walking past',
      prompt: 'Excuse me',
      correct: ['Excusez-moi', 'excusez-moi', 'Excusez moi', 'excusez moi'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Gare de Lyon. You need to find platform 7 but the signs aren't clear. A staff member walks past with a clipboard. Catch their attention — politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, monsieur?', native: 'Excuse me, sir?', correct: true, feedback: "Perfect — you opened the door. He'll stop and listen." },
          { target: 'Pardon, monsieur?', native: 'Sorry, sir?', correct: false, feedback: "Pardon works for tiny bumps, but to flag someone down it's 'Excusez-moi'." },
          { target: 'Désolé, monsieur', native: "I'm sorry, sir", correct: false, feedback: "Way too heavy — you haven't done anything wrong yet, you just want his attention." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Oui? Je vous écoute.',
        native: "Yes? I'm listening.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Le quai sept, c’est par où?', native: 'Platform 7, which way?', correct: true, feedback: "Exactly — short, polite, and you've already opened with the magic word." },
          { target: 'Sept!', native: 'Seven!', correct: false, feedback: "Even after Excusez-moi you still need a real question — that's just a number shouted at him." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how 'Excusez-moi' did all the heavy lifting? It told him: I'm polite, I respect your time, please help. Now you have a guide.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Excuse me (to flag down a stranger)',
        correct: ['Excusez-moi', 'excusez-moi', 'Excusez moi', 'excusez moi'],
      },
      {
        prompt: "I'm sorry (a real apology)",
        correct: ['Désolé', 'Désolée', 'desolé', 'desolée', 'Je suis désolé', 'Je suis désolée'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Excusez-moi' once today — even silently rehearsed before you'd ask a stranger something. Get the shape of it on your tongue: eks-kew-zay-mwah.",
    rwenSignoff: "I'll ask tomorrow. Bonne route — good road.",
  },

  phase8: {
    scenario: "It's a busy Saturday afternoon at the Marché Bastille in Paris. You've wandered too far down the rows of cheese stalls and lost the entrance. You spot a vendor restocking olives — you need to get her attention, ask the way out, and not get stepped on by the shopper squeezing behind you in the process.",
    rwenRole: "Madame Florence — an olive vendor in her 40s, busy but friendly, slightly impatient if she's addressed without a proper opener. She also reacts naturally if you bump someone behind you.",
    successCriteria: "User opens with 'Excusez-moi' to flag the vendor (NOT 'Pardon' or 'Désolé' for that), uses 'Pardon' if/when they brush past or step around the other shopper, and reserves 'Désolé(e)' only if they genuinely apologise (e.g. for taking her time). All three weights used in their correct register.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
