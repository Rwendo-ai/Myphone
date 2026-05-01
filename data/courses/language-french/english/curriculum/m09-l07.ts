import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: "À l'hôtel — At the hotel",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You drag your suitcase into a small Lyon hotel at 11pm. The receptionist looks up. You need a room, the Wi-Fi password, and to know if breakfast is included before you collapse. Today, the four chunks that handle every hotel check-in in France.",
    culturalNote: "French hotels are smaller and more personal than US chains — most are family-run, even in Paris. 'Une chambre double' (double room) usually means one big bed; 'une chambre twin' has two singles — say it explicitly. 'Petit-déjeuner inclus' is the magic phrase: included breakfast in France often means a real spread (croissants, fresh bread, jam, cheese, sometimes eggs). Always ask. Always.",
  },

  chunks: [
    {
      id: 'une_chambre_double',
      target: 'Une chambre double',
      native: 'A double room',
      literal: 'A(f) room double',
      emoji: '🛏️',
      phonetic: 'oon SHAM-bruh DOO-bluh',
      audioRef: null,
    },
    {
      id: 'petit_dejeuner_inclus',
      target: 'Le petit-déjeuner est inclus?',
      native: 'Is breakfast included?',
      literal: 'The little-lunch is included?',
      emoji: '🥐',
      phonetic: 'luh puh-tee day-zhuh-NAY ay tahn-KLOO',
      audioRef: null,
    },
    {
      id: 'la_cle_de_chambre',
      target: 'La clé de la chambre',
      native: 'The room key',
      literal: 'The(f) key of the(f) room',
      emoji: '🔑',
      phonetic: 'lah KLAY duh lah SHAM-bruh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel chunks — chambre + adjective, "inclus", clé/badge',
    explanation: "Build a room request like this: 'Une chambre + [type]'. Types: chambre double (one big bed), chambre twin (two beds), chambre simple (single). 'Inclus' (included) is the question that decides your morning: 'Le petit-déjeuner est inclus?', 'Le Wi-Fi est inclus?'. Older hotels give a 'clé' (key); modern ones give a 'badge' or 'carte'. Both work — receptionists understand both.",
    examples: [
      { target: 'Une chambre double pour deux nuits.', native: 'A double room for two nights.' },
      { target: 'Le Wi-Fi est inclus?', native: 'Is Wi-Fi included?' },
      { target: 'Voici la clé de la chambre 304.', native: 'Here is the key for room 304.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Une chambre double', right: 'A double room' },
        { left: 'Le petit-déjeuner est inclus?', right: 'Is breakfast included?' },
        { left: 'La clé de la chambre', right: 'The room key' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You want to know if breakfast comes with the room.',
      sentence: 'Le petit-déjeuner est _____?',
      options: ['inclus', 'incluse', 'inclure'],
      correct: 'inclus',
      context: "'Inclus' is the past participle agreeing with masculine 'petit-déjeuner'. 'Incluse' would agree with a feminine noun (e.g. 'la taxe est incluse').",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'A double room',
      correct: ['Une chambre double', 'une chambre double'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask: "I would like a double room for two nights, please."',
      words: ['voudrais', 'pour', 'deux', 'plaît.', 'Je', 'double', 'nuits,', 'une', 's\'il', 'chambre', 'vous'],
      correct: ['Je', 'voudrais', 'une', 'chambre', 'double', 'pour', 'deux', 'nuits,', 's\'il', 'vous', 'plaît.'],
      translation: 'I would like a double room for two nights, please.',
    },
    {
      type: 'multiple_choice',
      instruction: 'You see "Wi-Fi gratuit" on a hotel sign. What does that mean for your wallet?',
      question: 'Pick the meaning',
      options: [
        { text: 'Free Wi-Fi — no charge.', correct: true },
        { text: 'Wi-Fi for an extra fee.', correct: false },
        { text: 'Wi-Fi only in the lobby.', correct: false },
      ],
      explanation: "'Gratuit' (m) / 'gratuite' (f) = free of charge. Most French hotels have free Wi-Fi now, but some 4-5 star places still charge — always check.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'The room key',
      correct: ['La clé de la chambre', 'la clé de la chambre', 'La cle de la chambre', 'la cle de la chambre'],
    },
  ],

  rwenDialogue: {
    intro: "11pm in a small Lyon hotel. You walk up to the reception desk with your suitcase.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonsoir, j\'ai une réservation au nom de Cooney. Une chambre double.', native: 'Good evening, I have a reservation under Cooney. A double room.', correct: true, feedback: "Excellent — bonsoir for evening, reservation name, room type. The receptionist already loves you." },
          { target: 'Bonjour, une chambre.', native: 'Hello, a room.', correct: false, feedback: "Two issues: it's evening (bonsoir, not bonjour), and you're vague about the type. Be specific — chambre double / twin / simple." },
          { target: 'Salut, key please.', native: '(English + casual)', correct: false, feedback: "Salut is too casual for a hotel desk, and 'key please' isn't French. Try 'Bonsoir' + your reservation." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien, monsieur. Voici la clé de la chambre 207. Le petit-déjeuner est servi de 7h à 10h.',
        native: 'Very good, sir. Here\'s the key for room 207. Breakfast is served from 7 to 10.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Le petit-déjeuner est inclus?', native: 'Is breakfast included?', correct: true, feedback: "Sharp — she didn't say if it was included or extra. Always ask. Could save you 15€." },
          { target: 'D\'accord, merci.', native: 'OK, thanks.', correct: false, feedback: "You missed the chance to find out if breakfast costs extra. Ask 'le petit-déjeuner est inclus?'." },
          { target: 'Combien?', native: 'How much?', correct: false, feedback: "Vague — combien for what? 'Le petit-déjeuner est inclus?' is the precise question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Oui monsieur, il est inclus dans le tarif.',
        native: 'Yes sir, it\'s included in the rate.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just earned yourself a free croissant tomorrow morning. That's what asking 'inclus?' costs you — nothing. And saves you — sometimes a lot.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'A double room (in French)',
        correct: ['Une chambre double', 'une chambre double'],
      },
      {
        prompt: 'Is breakfast included? (in French)',
        correct: ['Le petit-déjeuner est inclus?', 'Le petit-déjeuner est inclus', 'le petit-déjeuner est inclus?', 'le petit-déjeuner est inclus', 'Le petit-dejeuner est inclus?', 'le petit-dejeuner est inclus?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pretend you're checking into a hotel in Lyon. Out loud: 'Bonsoir, j'ai une réservation. Une chambre double, deux nuits. Le petit-déjeuner est inclus?'. Three sentences. The exact script you'll use the next time you book a French hotel.",
    rwenSignoff: "Tomorrow — what to say when things go wrong. À demain.",
  },

  phase8: {
    scenario: "It's 11pm, you've just arrived at Hôtel des Voyageurs in Lyon after the TGV. You walk up to reception with your reservation under your name. Check in entirely in French: greet (bonsoir, not bonjour), give your name and room type, ask if breakfast is included, ask about Wi-Fi, get your key/badge and the floor.",
    rwenRole: "Monsieur Lefèvre — hotel receptionist, 60s, courtly, has worked the night shift for 25 years. Will ask: 'Votre nom?', 'Combien de nuits?', and answer questions warmly. Won't volunteer information — user must ask 'inclus?' to get the answer.",
    successCriteria: "User opens with 'Bonsoir' (not bonjour). Specifies room type ('chambre double' / 'twin' / 'simple'). Asks 'Le petit-déjeuner est inclus?' — explicitly. Receives 'la clé' or 'le badge' info and confirms. Bonus: also asks 'le Wi-Fi est inclus?' or about the floor ('quel étage?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
