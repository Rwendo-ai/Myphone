import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Module 9 complete',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine lessons. Où est, à gauche, à pied, prendre, aller-retour, embarquement, chambre double, j'ai raté, pourriez-vous. Today you weave them all into ONE trip. Paris to Lyon and back — métro, TGV, hotel, lost bag, polite rescue. The whole module on one rail.",
    culturalNote: "Travelling in French is its own dialect — clipped, polite, fast. Real travellers don't wait for full sentences; they speak in chunks. 'Aller-retour Lyon, seconde, c'est combien?' is one breath at the SNCF counter. 'Pourriez-vous l'écrire?' to a stranger on the street. 'Bonsoir, j'ai une réservation.' at the hotel desk. Today you stitch the fragments. By the end of this lesson, you can do a French weekend trip without flinching.",
  },

  chunks: [
    {
      id: 'je_voudrais_aller_a',
      target: 'Je voudrais aller à Lyon',
      native: "I'd like to go to Lyon",
      literal: 'I would-like to-go to Lyon',
      emoji: '🚄',
      phonetic: 'zhuh voo-DRAY ah-LAY ah lee-OHN',
      audioRef: null,
    },
    {
      id: 'merci_pour_votre_aide',
      target: 'Merci pour votre aide',
      native: 'Thank you for your help',
      literal: 'Thanks for your help',
      emoji: '🙏',
      phonetic: 'mair-SEE poor voh-truh AYD',
      audioRef: null,
    },
    {
      id: 'bon_voyage',
      target: 'Bon voyage!',
      native: 'Have a good trip!',
      literal: 'Good trip!',
      emoji: '✈️',
      phonetic: 'bohn voy-AHZH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full Module 9 toolkit',
    explanation: "Today combines everything: location questions (Où est/sont), directions (tournez à gauche/droite, tout droit), distance (à X minutes à pied/en métro), transport (prendre + le métro/train/avion), tickets (aller simple/aller-retour, première/seconde classe), airport (enregistrement, embarquement, bagage à main), hotel (chambre double, petit-déjeuner inclus), emergencies (j'ai raté, j'ai perdu, je suis perdu(e)), and politeness (pourriez-vous + infinitive). You're not learning new chunks today — you're learning to STITCH them under pressure.",
    examples: [
      { target: 'Je voudrais aller à Lyon. Un aller-retour, en seconde, s\'il vous plaît.', native: "I'd like to go to Lyon. A round trip, second class, please." },
      { target: 'Pourriez-vous m\'aider? J\'ai raté mon train.', native: 'Could you help me? I missed my train.' },
      { target: 'Bonsoir, j\'ai une réservation. Une chambre double, deux nuits.', native: 'Good evening, I have a reservation. A double room, two nights.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je voudrais aller à Lyon', right: "I'd like to go to Lyon" },
        { left: 'Merci pour votre aide', right: 'Thank you for your help' },
        { left: 'Bon voyage!', right: 'Have a good trip!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at the SNCF counter, opening line. Use the conditional, polite form.",
      sentence: 'Je _____ aller à Lyon.',
      options: ['voudrais', 'veux', 'vais'],
      correct: 'voudrais',
      context: "'Je voudrais' (I'd like) is the polite conditional. 'Je veux' (I want) is correct but blunt at the counter. 'Je vais' (I'm going) is the wrong verb here — it doesn't ask for anything.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Thank you for your help',
      correct: ['Merci pour votre aide', 'merci pour votre aide'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full crisis sentence: "Excuse me, could you help me? I missed my train."',
      words: ['mon', 'pourriez-vous', 'train.', 'Excusez-moi,', 'm\'aider?', 'J\'ai', 'raté'],
      correct: ['Excusez-moi,', 'pourriez-vous', 'm\'aider?', 'J\'ai', 'raté', 'mon', 'train.'],
      translation: "Excuse me, could you help me? I missed my train.",
    },
    {
      type: 'multiple_choice',
      instruction: "You're at hotel reception in Lyon at 11pm. You have a booking, double room, want to know about breakfast. Which is the most fluent open?",
      question: 'Pick the cleanest opening',
      options: [
        { text: 'Bonsoir, j\'ai une réservation au nom de Cooney. Une chambre double, deux nuits. Le petit-déjeuner est inclus?', correct: true },
        { text: 'Bonjour, room please. Breakfast?', correct: false },
        { text: 'Salut, chambre.', correct: false },
      ],
      explanation: "All Module 9 in one breath: bonsoir (evening), réservation, chambre double, deux nuits, petit-déjeuner inclus. That's a real Lyon hotel check-in.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "Have a good trip!",
      correct: ['Bon voyage!', 'Bon voyage', 'bon voyage!', 'bon voyage'],
    },
  ],

  rwenDialogue: {
    intro: "Friday, 4pm, Gare de Lyon. You're heading to Lyon for the weekend. The SNCF agent looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour, je vous écoute.',
        native: 'Hello, how can I help?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour, je voudrais aller à Lyon. Un aller-retour, en seconde, s\'il vous plaît.', native: "Hello, I'd like to go to Lyon. A round trip, second class, please.", correct: true, feedback: "All five chunks in one sentence — destination, ticket type, class, polite. The agent is already typing." },
          { target: 'Lyon aller-retour.', native: '(too short)', correct: false, feedback: "She'll get it, but the full polite form is what locals use. 'Je voudrais aller à Lyon, un aller-retour, en seconde.'" },
          { target: 'Je veux Lyon.', native: 'I want Lyon.', correct: false, feedback: "Use 'je voudrais' (would like) — softer, expected. 'Je veux' is too direct at a counter." },
        ],
      },
      {
        speaker: 'npc',
        target: "Très bien — départ 17h12, retour dimanche à 18h. Ça fait 89 euros. Vous avez un bagage en soute?",
        native: "Very good — depart 5:12pm, return Sunday at 6pm. That's 89 euros. Any checked bag?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Non, juste un bagage à main. Pourriez-vous écrire l\'horaire?', native: 'No, just a carry-on. Could you write down the schedule?', correct: true, feedback: "Two Module 9 chunks fired clean — bagage à main and pourriez-vous écrire. You handled the whole transaction in French." },
          { target: 'No checked bag please write time.', native: '(English)', correct: false, feedback: "Stay French — 'Non, juste un bagage à main. Pourriez-vous l'écrire?' All the words are in your toolkit." },
          { target: 'Oui un grand sac.', native: 'Yes a big bag.', correct: false, feedback: "If you have no checked bag, say so — 'pas de bagage en soute, juste un bagage à main'. Saves you 5€." },
        ],
      },
      {
        speaker: 'npc',
        target: "Voilà, c'est noté. Bon voyage!",
        native: "There you go, written down. Have a good trip!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci pour votre aide. Bonne journée!', native: 'Thank you for your help. Have a good day!', correct: true, feedback: "Closing the transaction with full warmth. That's how a French trip starts and ends — polite at every door." },
          { target: 'OK.', native: 'OK.', correct: false, feedback: "Too short. 'Merci pour votre aide' or even 'merci beaucoup' lands much warmer." },
          { target: 'Au revoir.', native: 'Goodbye.', correct: false, feedback: "Acceptable, but you skipped the thanks. 'Merci pour votre aide. Au revoir!' is the full closing." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Nine lessons stitched into one trip. You bought the ticket, you handled the bags, you closed warm. Module 9 is yours. Lyon awaits.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Module 9 toolkit — type from memory.',
    prompts: [
      {
        prompt: "I'd like to go to Lyon (in French)",
        correct: ['Je voudrais aller à Lyon', 'je voudrais aller à Lyon', 'Je voudrais aller a Lyon', 'je voudrais aller a Lyon'],
      },
      {
        prompt: 'Have a good trip! (in French)',
        correct: ['Bon voyage!', 'Bon voyage', 'bon voyage!', 'bon voyage'],
      },
    ],
  },

  mission: {
    title: "Your Module 9 Journey",
    task: "Plan a real or imagined French weekend in your head, out loud, in French. SNCF counter ('je voudrais aller à...'), the métro ('je prends le métro'), the hotel ('bonsoir, j'ai une réservation'), one polite rescue ('pourriez-vous m'aider?'). Five sentences. You can travel France in French now.",
    rwenSignoff: "Module 9 complete. You can travel. Bon voyage — vraiment.",
  },

  phase8: {
    scenario: "Your full Paris-Lyon weekend in one 4-minute conversation. You start at Gare de Lyon buying a TGV ticket, then check into a small Lyon hotel that evening, and on Sunday morning you realise you've lost your bag and missed your train back. Three scenes, one conversation. Use everything: 'je voudrais aller', 'aller-retour', 'chambre double', 'petit-déjeuner inclus', 'j'ai raté', 'j'ai perdu', 'pourriez-vous m'aider'. End by thanking Rwen with 'merci pour votre aide'.",
    rwenRole: "Three personas in one conversation: (1) SNCF agent at Gare de Lyon — buys the ticket; (2) hotel receptionist in Lyon at 11pm — checks user in, breakfast question; (3) SNCF agent in Lyon Sunday — handles the missed train and lost bag. Each switches naturally; user must adapt. All in French.",
    successCriteria: "User uses at least SIX Module 9 chunks correctly across the three scenes — including (a) one ticket purchase chunk (aller-retour / seconde / je voudrais), (b) one hotel chunk (chambre double / petit-déjeuner inclus), (c) one crisis chunk (j'ai raté / j'ai perdu), AND (d) 'pourriez-vous' once. Closes with 'merci pour votre aide' or 'bon voyage'. Bonus: stays in French throughout, no English fallback.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
