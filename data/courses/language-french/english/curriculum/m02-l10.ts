import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Ten lessons ago you didn't know how to say excuse me. Today, you can flag a stranger, admit you didn't catch something, ask the way, ask the price, order politely, and shout in an emergency. That's a survival kit. Today we braid it together — no new words, just one real-world flow that uses everything you've learned.",
    culturalNote: "The French word for 'getting by' is 'se débrouiller' — figuring it out, making do. It's a deeply respected verb here. A French person watching you stumble through their language with politeness, willingness, and the right phrases isn't judging you — they're rooting for you to débrouiller-yourself. Today you become that traveller.",
  },

  chunks: [
    {
      id: 'review_excusez_moi_combo',
      target: 'Excusez-moi, je ne comprends pas',
      native: "Excuse me, I don't understand",
      literal: 'Excuse-me, I not understand not',
      emoji: '🤝',
      phonetic: 'eks-kew-zay-MWAH zhuh nuh kohn-PRAHN pah',
      audioRef: null,
    },
    {
      id: 'review_voudrais_savoir',
      target: 'Je voudrais savoir où est…',
      native: "I'd like to know where … is",
      literal: 'I would-want to-know where is…',
      emoji: '🗺️',
      phonetic: 'zhuh voo-DREH sah-VWAHR oo eh',
      audioRef: null,
    },
    {
      id: 'review_ca_coute_combien',
      target: 'D’accord, je prends ça — ça coûte combien?',
      native: "Okay, I'll have that — how much does it cost?",
      literal: 'Of-accord, I take that — that costs how-much?',
      emoji: '💶',
      phonetic: 'dah-KOR zhuh prahn SAH sah koot kohn-BYAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stitching survival phrases together',
    explanation: "Real conversations rarely use phrases in isolation — they chain them. Open with politeness ('Excusez-moi'), state the problem or request ('je ne comprends pas' / 'je voudrais'), pivot when needed ('plus lentement, s'il vous plaît'), close with thanks ('merci beaucoup'). The pattern is almost always: opener → request → pivot → thanks.",
    examples: [
      { target: 'Excusez-moi, parlez-vous anglais? Un peu? D’accord — je voudrais savoir où est la gare.', native: "Excuse me, do you speak English? A little? Okay — I'd like to know where the station is." },
      { target: 'Pardon, je ne comprends pas. Plus lentement, s’il vous plaît.', native: "Sorry, I don't understand. More slowly please." },
      { target: 'Combien? Trop cher. Je prends ça à la place, s’il vous plaît.', native: "How much? Too expensive. I'll take that instead, please." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each survival opener to its job',
      pairs: [
        { left: 'Excusez-moi', right: 'Get a stranger’s attention' },
        { left: 'Je ne comprends pas', right: 'Stop the speaker, regroup' },
        { left: 'Je voudrais', right: 'Polite "I would like"' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You've stopped a stranger and you're about to ask the way. Best opener?",
      sentence: '_____, où est la gare, s’il vous plaît?',
      options: ['Excusez-moi', 'Au feu', 'Trop cher'],
      correct: 'Excusez-moi',
      context: "Excusez-moi is the universal opener for asking strangers anything.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build a complete polite question — flag the stranger, ask if they speak English',
      words: ['anglais?', 'parlez-vous', 'Excusez-moi,'],
      correct: ['Excusez-moi,', 'parlez-vous', 'anglais?'],
      translation: 'Excuse me, do you speak English?',
    },
    {
      type: 'translate',
      instruction: "Type in French — pivot when someone speaks too fast",
      prompt: "I don't understand. More slowly, please.",
      correct: ["Je ne comprends pas. Plus lentement, s'il vous plaît", "je ne comprends pas. plus lentement, s'il vous plaît", "Je ne comprends pas, plus lentement s'il vous plaît", "Je ne comprends pas plus lentement sil vous plait"],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the most natural French close",
      question: "You've gotten directions from a kind stranger and want to thank her warmly.",
      options: [
        { text: 'Merci beaucoup, bonne journée!', correct: true },
        { text: 'Au revoir trop cher', correct: false },
        { text: 'Au feu!', correct: false },
      ],
      explanation: "'Merci beaucoup, bonne journée' is the warm, native close. The other two are mismatched.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — polite ordering combo at a café',
      prompt: "I'd like a coffee, please",
      correct: ['Je voudrais un café, s’il vous plaît', 'je voudrais un café, s’il vous plaît', 'Je voudrais un café s’il vous plaît', 'je voudrais un café s’il vous plaît', 'Je voudrais un cafe sil vous plait'],
    },
  ],

  rwenDialogue: {
    intro: "You're in Avignon. You stepped off the TGV with two heavy bags, you don't know which exit leads to the taxi rank, and your phone is dead. A young woman in a Sciences Po hoodie is waiting on the platform. Run the whole flow.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, parlez-vous anglais?', native: 'Excuse me, do you speak English?', correct: true, feedback: 'Bonjour-quality opener — she turns toward you, friendly.' },
          { target: 'Hi do you English?', native: '(English-only)', correct: false, feedback: "Try French first — even a clumsy attempt earns goodwill." },
          { target: 'Au secours!', native: 'Help!', correct: false, feedback: "It's a directions question, not an emergency." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Un peu, oui. Je peux essayer.',
        native: 'A little, yes. I can try.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci. Je voudrais savoir où est la sortie pour les taxis.', native: "Thank you. I'd like to know where the exit for taxis is.", correct: true, feedback: 'Beautiful chain — thanks, polite frame, clear question. Module 2 in one sentence.' },
          { target: 'Taxi!', native: 'Taxi!', correct: false, feedback: 'Drops every politeness layer she just offered. Lift the register back up.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'C’est par là-bas — vous voyez le panneau orange? À droite après.',
        native: "It's that way — see the orange sign? Right after.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pardon, plus lentement, s’il vous plaît?', native: 'Sorry, more slowly please?', correct: true, feedback: "Perfect pivot — you needed the speed dropped, you asked for it." },
          { target: 'Oui!', native: 'Yes!', correct: false, feedback: "You didn't catch the orange sign part. Don't fake it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at what you just did. You opened, asked, didn't fake-understand, pivoted, will thank her. Module 2 mastered. You can travel France now without panic.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Excuse me, I don't understand (in French)",
        correct: ["Excusez-moi, je ne comprends pas", "excusez-moi, je ne comprends pas", "Excusez-moi je ne comprends pas", "excusez-moi je ne comprends pas"],
      },
      {
        prompt: "I'd like to know where the station is (in French)",
        correct: ["Je voudrais savoir où est la gare", "je voudrais savoir où est la gare", "Je voudrais savoir ou est la gare", "je voudrais savoir ou est la gare"],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 2 capstone",
    task: "Pick one real situation you might face in France: ordering at a café, asking for directions, asking a price. Walk through it out loud, in French, from opener to thanks. If your kitchen sink is your audience, that's fine. Your tongue earns the muscle.",
    rwenSignoff: "You finished Module 2. You can now débrouiller yourself in France. À très bientôt — see you very soon.",
  },

  phase8: {
    scenario: "You've just landed at Lyon-Saint Exupéry airport. Your hotel reservation in Vieux-Lyon got mixed up — the receptionist on the phone said something fast in French about 'changement de chambre' and you didn't catch the rest. You've taken the Rhônexpress into the city and you're now standing in the hotel lobby with your suitcase. Sort this out: greet, admit confusion, ask for English help if needed, get a clear explanation, decide on the new room, ask the price difference, and either accept or refuse politely.",
    rwenRole: "Madame Sylvie — front-desk receptionist at a small Vieux-Lyon hotel, ~40, professional and willing to slow down or speak un peu d'anglais if asked nicely. She has a clear answer (the original room is being repainted; a slightly nicer one is offered for +15€) but expects the guest to navigate the conversation in French politeness.",
    successCriteria: "User chains AT LEAST FIVE Module 2 phrases naturally: an opener (Excusez-moi/Bonjour), confession of confusion (Je ne comprends pas / Pouvez-vous répéter / Plus lentement), an English-bridge if needed (Parlez-vous anglais?), a polite request (Je voudrais), a price question (Ça coûte combien? / Combien?), and a clean accept (Oui, merci / D'accord, je prends ça) or refuse (Non, merci / Trop cher). No fake-yes-then-confusion. End on a warm thank-you.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
