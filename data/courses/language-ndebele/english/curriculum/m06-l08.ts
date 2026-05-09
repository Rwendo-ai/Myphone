import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08',
  module: 6,
  lesson: 8,
  title: 'Siza! — Emergencies',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Some words you hope never to use, but absolutely must know. 'Siza!' (help!), 'i-emergency' (emergency), 'i-ambulance' (ambulance). In a real emergency, isiNdebele speakers will switch to whatever language gets help fastest — but the right word at the right second can turn heads.",
    culturalNote: "Zimbabwe's emergency phone landscape is uneven. Police: 995. Ambulance: 994. Fire: 993. Reality check: response times in cities can be slow, in rural areas slower. In a serious emergency, Zimbabweans often phone a family member or neighbour with a car BEFORE the ambulance — not because the ambulance is unwelcome, but because faster help comes from your network. Knowing both numbers AND being able to shout for help in isiNdebele matters.",
  },

  chunks: [
    {
      id: 'siza',
      target: 'Siza!',
      native: 'Help!',
      literal: 'imperative of "ukusiza" (to help) — short and shouted',
      emoji: '🆘',
      phonetic: 'SEE-zah',
      audioRef: null,
    },
    {
      id: 'ngicela_usizo',
      target: 'Ngicela usizo!',
      native: 'I need help / I am asking for help.',
      literal: 'Ngi-cela (I ask) + u-sizo (help, the noun)',
      emoji: '🙏',
      phonetic: 'ngee-CEH-lah oo-SEE-zoh',
      audioRef: null,
    },
    {
      id: 'i_ambulance',
      target: 'i-ambulense',
      native: 'ambulance',
      literal: 'i- (class 5) + ambulense (loanword)',
      emoji: '🚑',
      phonetic: 'ee-am-boo-LEN-seh',
      audioRef: null,
    },
    {
      id: 'amaphoyisa',
      target: 'amaphoyisa',
      native: 'police',
      literal: 'ama- (class 6 plural) + phoyisa',
      emoji: '👮',
      phonetic: 'ah-mah-poh-YEE-sah',
      audioRef: null,
    },
    {
      id: 'kuyaphuthuma',
      target: 'Kuyaphuthuma!',
      native: 'It is urgent!',
      literal: 'Ku- (it) + ya- + phuthuma (be urgent)',
      emoji: '⚠️',
      phonetic: 'koo-yah-poo-TOO-mah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency phrasing — short and direct',
    explanation: "In emergencies, isiNdebele drops politeness scaffolding. 'Siza!' alone is enough. 'Ngicela usizo!' is slightly fuller. To stack urgency: 'Siza! Kuyaphuthuma!' (Help! It's urgent!). To call for a service: 'Ngifuna i-ambulense' (I need an ambulance). Greeting first is normally non-negotiable in Ndebele culture — emergencies are the one carved-out exception.",
    examples: [
      { target: 'Siza! Kuyaphuthuma!', native: "Help! It's urgent!" },
      { target: 'Ngifuna i-ambulense.', native: 'I need an ambulance.' },
      { target: 'Bizela amaphoyisa!', native: 'Call the police!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emergency word to its meaning',
      pairs: [
        { left: 'Siza!', right: 'Help!' },
        { left: 'i-ambulense', right: 'ambulance' },
        { left: 'amaphoyisa', right: 'police' },
        { left: 'Kuyaphuthuma!', right: "It's urgent!" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Help! It is urgent!',
      correct: ['Siza! Kuyaphuthuma!', 'Siza, kuyaphuthuma', 'siza! kuyaphuthuma!'],
    },
    {
      type: 'multiple_choice',
      instruction: 'In a real emergency, what should you do FIRST?',
      question: "Someone collapses in front of you on the street in Bulawayo. What is your first move?",
      options: [
        { text: 'Shout "Siza!" to draw nearby people, AND call 994 for ambulance.', correct: true },
        { text: 'Phone your friend in another city.', correct: false },
        { text: 'Wait silently and see if they recover.', correct: false },
      ],
      explanation: "Shout first to draw immediate help — neighbours and passers-by will respond faster than the ambulance. Then dial 994. In Zimbabwe, your immediate community is often the first responder in practice.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I need an ambulance"',
      sentence: 'Ngifuna ____.',
      options: ['i-ambulense', 'ikhemisi', 'idokotela'],
      correct: 'i-ambulense',
      context: 'Ambulance is the ride to hospital. Idokotela = doctor. Ikhemisi = pharmacy.',
    },
  ],

  rwenDialogue: {
    intro: "You're walking through town when someone collapses on the pavement ahead of you. A small crowd is gathering but no one has acted yet.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Drop the greetings. Real emergency. Get help loudly.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Siza! Kuyaphuthuma! Bizela i-ambulense!', native: 'Help! Urgent! Call the ambulance!', correct: true, feedback: "All three signals: SIZA gets attention, KUYAPHUTHUMA stacks urgency, BIZELA assigns the call. Two people are already pulling out phones." },
          { target: 'Salibonani, ngiyacela usizo.', native: 'Hello, I am politely asking for help.', correct: false, feedback: "Too soft for the moment. In an emergency drop the greeting and shout 'Siza!'." },
          { target: '(stand quietly)', native: '(do nothing)', correct: false, feedback: "Even saying 'Siza!' once activates everyone around you. Silence costs seconds." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sengilibizele i-ambulense — bayeza.',
        native: 'I have called the ambulance — they are coming.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga. Asimsize aphefumule.', native: 'Thank you. Let us help him breathe.', correct: true, feedback: "You drew help, you're working with the bystander, ambulance is on the way. That's the full chain." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Emergency Ndebele is short, loud, and clear. Memorise these few — they may matter someday.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Help!', correct: ['Siza!', 'Siza', 'siza!'] },
      { prompt: "It's urgent!", correct: ['Kuyaphuthuma!', 'Kuyaphuthuma', 'kuyaphuthuma!'] },
      { prompt: 'ambulance', correct: ['i-ambulense', 'iambulense', 'i ambulense'] },
      { prompt: 'police', correct: ['amaphoyisa', 'Amaphoyisa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Save Zimbabwe's emergency numbers in your phone TODAY: Police 995, Ambulance 994, Fire 993. Then practise saying 'Siza! Ngifuna i-ambulense! Kuyaphuthuma!' three times out loud, so the words come easily under pressure.",
    rwenSignoff: "Knowing emergency words is its own kind of safety. Sala kuhle.",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "You're alone with your friend's elderly grandfather at his rural home outside Bulawayo when he suddenly clutches his chest and stops responding clearly. The nearest neighbour is 200m away. You need to act in isiNdebele.",
    rwenRole: "A neighbour you've run to fetch — middle-aged farmer, a few words of English but mostly speaks isiNdebele. He has a phone and a pickup truck.",
    successCriteria: "User shouts/says 'Siza!' or 'Ngicela usizo!' to get attention, communicates urgency with 'kuyaphuthuma', requests an ambulance with 'ngifuna i-ambulense' or asks the neighbour to drive, and clearly says where the grandfather is.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
