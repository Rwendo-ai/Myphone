import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'En voyage — Emergencies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're in Marseille. You took the wrong tram. Your phone is dead, your bag is gone, and the train you were supposed to be on left fifteen minutes ago. This is the lesson you HOPE you'll never use — and the one you'll be most grateful for if you do. Three sentences that turn a panicked moment into a solvable one.",
    culturalNote: "French has a quiet feature English doesn't: gender agreement on adjectives. 'Je suis perdu' (I'm lost) is what a man says. 'Je suis perdue' (silent extra 'e') is what a woman says. The pronunciation is identical, but if you write it on a note or text someone, the spelling shifts. Same with fatigué/fatiguée, content/contente. Memorise both forms — your future self may need either.",
  },

  chunks: [
    {
      id: 'je_suis_perdu',
      target: 'Je suis perdu(e)',
      native: "I'm lost",
      literal: 'I am lost(m/f)',
      emoji: '🆘',
      phonetic: 'zhuh swee pair-DOO',
      audioRef: null,
    },
    {
      id: 'jai_rate_mon_train',
      target: "J'ai raté mon train",
      native: 'I missed my train',
      literal: 'I-have missed my train',
      emoji: '🚂',
      phonetic: 'zhay rah-TAY mohn TRAHN',
      audioRef: null,
    },
    {
      id: 'jai_perdu_mon_sac',
      target: "J'ai perdu mon sac",
      native: 'I lost my bag',
      literal: 'I-have lost my bag',
      emoji: '🎒',
      phonetic: 'zhay pair-DOO mohn SAHK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense for crises — j\'ai + past participle',
    explanation: "When something has just gone wrong, French uses the passé composé: 'j'ai' + past participle. 'J'ai raté' = I missed. 'J'ai perdu' = I lost. 'J'ai oublié' = I forgot. 'J'ai manqué' = I missed (more formal). The structure is identical to English 'I have ___ed' — but in French it's used where English would say simple past ('I missed', not 'I have missed'). Plus: gender agreement on 'perdu(e)' if you're describing yourself ('je suis perdu/perdue').",
    examples: [
      { target: "J'ai raté mon avion.", native: 'I missed my plane.' },
      { target: "J'ai perdu mon passeport.", native: 'I lost my passport.' },
      { target: "Je suis perdue, j'ai oublié l'adresse.", native: "I'm lost (f), I forgot the address." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je suis perdu(e)', right: "I'm lost" },
        { left: "J'ai raté mon train", right: 'I missed my train' },
        { left: "J'ai perdu mon sac", right: 'I lost my bag' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re a woman saying "I\'m lost". Which form?',
      sentence: 'Je suis _____.',
      options: ['perdue', 'perdu', 'perdre'],
      correct: 'perdue',
      context: "Adjectives agree with the speaker's gender. Female → perdue (silent extra 'e'). Male → perdu. 'Perdre' is the infinitive ('to lose').",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I missed my train',
      correct: ["J'ai raté mon train", "j'ai raté mon train", "Jai raté mon train", "jai rate mon train", "J'ai rate mon train", "j'ai rate mon train"],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I lost my bag at the station."',
      words: ['mon', 'à', 'sac', 'gare.', 'la', 'J\'ai', 'perdu'],
      correct: ['J\'ai', 'perdu', 'mon', 'sac', 'à', 'la', 'gare.'],
      translation: 'I lost my bag at the station.',
    },
    {
      type: 'multiple_choice',
      instruction: 'You\'re panicking — your wallet is gone. Which sentence do you blurt to the police?',
      question: 'Pick the right one',
      options: [
        { text: "J'ai perdu mon portefeuille.", correct: true },
        { text: 'Je perds mon portefeuille.', correct: false },
        { text: "J'ai mon portefeuille.", correct: false },
      ],
      explanation: "It's already happened — past tense. 'J'ai perdu' = I lost. 'Je perds' would mean 'I lose / I'm losing' (present, ongoing). 'J'ai mon portefeuille' = I HAVE my wallet (the opposite!).",
    },
    {
      type: 'translate',
      instruction: 'Type in French — a man saying it',
      prompt: "I'm lost (male speaker)",
      correct: ['Je suis perdu', 'je suis perdu'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Gare Saint-Charles in Marseille. Your TGV to Paris just left. You walk up to an SNCF agent.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, j\'ai raté mon train pour Paris.', native: 'Excuse me, I missed my train to Paris.', correct: true, feedback: "Calm, clear, past tense. The agent has heard it 1000 times — they know exactly what to do next." },
          { target: 'Excusez-moi, je rate mon train.', native: '(present tense — wrong)', correct: false, feedback: "It's already happened — passé composé. 'J'ai raté', not 'je rate'. The 'ai' makes it clear it's done." },
          { target: 'Train Paris kaput!', native: '(broken)', correct: false, feedback: "Stay in real French — even one word at a time. 'J'ai raté mon train.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Pas de panique. Le prochain train pour Paris part à 16h45. Vous voulez échanger votre billet?',
        native: "No panic. The next train to Paris leaves at 4:45pm. You want to swap your ticket?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui s\'il vous plaît. Et... j\'ai aussi perdu mon sac.', native: 'Yes please. And... I also lost my bag.', correct: true, feedback: "Honest, layered, two crises in one breath. 'J'ai perdu mon sac' — past tense again, used cleanly." },
          { target: 'Oui. Mon sac perdu.', native: '(broken)', correct: false, feedback: "Almost there — 'j'ai perdu mon sac' is the full sentence. 'Mon sac perdu' alone sounds like a label, not a report." },
          { target: 'Non, je suis perdu.', native: "(wrong meaning)", correct: false, feedback: "'Je suis perdu' = I'm lost (the person). You wanted to say you LOST your bag — 'j'ai perdu mon sac'. Different verbs." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two crises, two sentences, both in past tense. You just survived the worst travel day in basic French. That's the chunk that's worth more than any other in this module.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I missed my train (in French)",
        correct: ["J'ai raté mon train", "j'ai raté mon train", "Jai rate mon train", "j'ai rate mon train"],
      },
      {
        prompt: "I lost my bag (in French)",
        correct: ["J'ai perdu mon sac", "j'ai perdu mon sac"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, run through these three sentences right now: 'Je suis perdu(e). J'ai raté mon train. J'ai perdu mon sac.' Three crises, three lifelines. Say them now while everything is calm — so they're already in your mouth when one day they're not.",
    rwenSignoff: "Tomorrow — how to ASK for help politely. À demain — courage.",
  },

  phase8: {
    scenario: "Worst-case Marseille. You arrive at Gare Saint-Charles to find your TGV to Paris left 20 minutes ago. You realise your daypack with your passport in it is gone. You have to (1) explain to the SNCF agent that you missed your train, (2) report you lost your bag, and (3) keep your composure in French while she helps you. Use 'j'ai raté', 'j'ai perdu', and possibly 'je suis perdu(e)' if you're disoriented.",
    rwenRole: "Madame Bernard — SNCF agent at Marseille Saint-Charles, 50s, kind, has seen every version of this. Walks the user through: rebooking the train, where to go for the lost bag (the 'objets trouvés' office), and stays calm and warm. Won't switch to English.",
    successCriteria: "User uses 'j'ai raté' for the missed train AND 'j'ai perdu' for the lost bag — both in correct passé composé. Stays in French throughout. Bonus: uses 'je suis perdu' or 'perdue' (with correct gender agreement) once OR asks a follow-up question politely.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
