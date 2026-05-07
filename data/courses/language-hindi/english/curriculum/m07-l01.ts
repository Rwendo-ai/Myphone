import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-chai',
  module: 7,
  lesson: 1,
  title: 'Chai — More Than a Drink',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In India, 'chai' isn't tea. It's a doorway. Refuse it and you've refused the conversation. Accept it and you're already family for the next twenty minutes. The kettle whistles, the cardamom hits the milk — and India begins.",
    culturalNote: "'Chai' (चाय) is masala chai — black tea simmered in milk with ginger (अदरक), cardamom, sometimes cloves. Asking for 'chai tea' is a tautology — chai means tea. Across India, refusing offered chai feels like refusing the host's hospitality itself.",
  },

  chunks: [
    {
      id: 'chai',
      target: 'चाय',
      native: 'Chai (milk tea, the everyday drink)',
      literal: 'Chai — black tea simmered in milk',
      emoji: '☕',
      phonetic: 'CHAI (rhymes with "fly")',
      audioRef: null,
    },
    {
      id: 'adrak_chai',
      target: 'अदरक चाय',
      native: 'Ginger chai',
      literal: 'Adrak chai — ginger + chai',
      emoji: '🫚',
      phonetic: 'UD-ruck CHAI',
      audioRef: null,
    },
    {
      id: 'ek_chai_milegi',
      target: 'एक चाय मिलेगी?',
      native: 'Could I get one chai?',
      literal: 'Ek chai milegi — one chai will-be-available',
      emoji: '🙏',
      phonetic: 'EK CHAI mi-LAY-gi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Milegi? — the polite "could I get?"',
    explanation: "'Milegi' (मिलेगी) literally means 'will be available' — the polite, low-pressure way to ask for things in Hindi. It softens a request: 'ek chai milegi?' is gentler than 'ek chai do' (give me one chai). Use it for tea, water, the menu, the bill — any small ask.",
    examples: [
      { target: 'Ek chai milegi?', native: 'Could I get one chai?' },
      { target: 'Paani milega?', native: 'Could I get water?' },
      { target: 'Adrak chai milegi?', native: 'Could I get a ginger chai?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chai phrase to its meaning',
      pairs: [
        { left: 'Chai', right: 'Milk tea' },
        { left: 'Adrak chai', right: 'Ginger chai' },
        { left: 'Ek chai milegi?', right: 'Could I get one chai?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely ask for a chai',
      sentence: 'Ek chai _____?',
      options: ['milegi', 'hai', 'kya'],
      correct: 'milegi',
      context: 'You want to ask for one chai politely at a stall.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Could I get a ginger chai?',
      correct: ['Adrak chai milegi?', 'Adrak chai milegi', 'adrak chai milegi?', 'adrak chai milegi'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A neighbour invites you in for chai. You\'ve had three already today. What\'s the cultural move?',
      question: 'Choose the right response',
      options: [
        { text: 'Accept anyway — refusing the chai refuses the visit', correct: true },
        { text: 'Politely refuse and say you\'ve had too much', correct: false },
        { text: 'Ask for water instead', correct: false },
      ],
      explanation: "Chai is the conversation, not the caffeine. Even a small cup accepted shows you came for the company. Half a cup is fine — but accept.",
    },
    {
      type: 'build_sentence',
      instruction: 'Order ginger chai politely',
      words: ['milegi?', 'Ek', 'chai', 'adrak'],
      correct: ['Ek', 'adrak', 'chai', 'milegi?'],
      translation: 'Could I get one ginger chai?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Chai (milk tea)',
      correct: ['Chai', 'chai'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a roadside chai stall in Old Delhi at 8am. The chaiwala looks up as you approach. Order properly.",
    lines: [
      {
        speaker: 'npc',
        target: 'हाँ जी, क्या चाहिए?',
        native: 'Yes sir/madam, what do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ek adrak chai milegi?', native: 'Could I get one ginger chai?', correct: true, feedback: 'Perfect — polite "milegi", and adrak chai is the morning classic. He nods and pours.' },
          { target: 'Chai tea please', native: 'Chai tea please', correct: false, feedback: '"Chai" already means tea. Just say "Ek chai milegi?" — and adrak makes it better.' },
          { target: 'Mujhe chai do', native: 'Give me chai', correct: false, feedback: 'Too direct. "Milegi?" softens it — "Ek chai milegi?" is the polite ask.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'पच्चीस रुपये।',
        native: 'Twenty-five rupees.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Cardamom in the air, kullad in your hand. You ordered like a local. India is letting you in.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Could I get one chai? (the polite ask)',
        correct: ['Ek chai milegi?', 'Ek chai milegi', 'ek chai milegi?', 'ek chai milegi'],
      },
      {
        prompt: 'Ginger chai',
        correct: ['Adrak chai', 'adrak chai'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Make or order a chai today. Before the first sip, say 'Ek adrak chai milegi?' aloud. Notice how the cardamom-and-ginger version is the one most Indians actually drink — not the syrupy cafe stuff.",
    rwenSignoff: "Chai pe charcha — conversation over chai. The most Indian sentence ever. Phir milenge.",
  },

  phase8: {
    scenario: "It's a humid 7am at a Connaught Place chai stall and you've stopped before a meeting. The chaiwala has three kullads warming and a steel pan of milk frothing on the burner. He glances up — your turn.",
    rwenRole: "The chaiwala — late 30s, brisk, has poured a thousand chais already this morning; he respects polite Hindi from a foreigner and will pour the strongest cup if you ask for adrak.",
    successCriteria: "User opens the order with the polite 'milegi?' construction (NOT 'do' which is too direct), specifies adrak chai or just chai clearly, accepts the kullad without asking for milk on the side, and pays without haggling — chai prices aren't negotiated.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
