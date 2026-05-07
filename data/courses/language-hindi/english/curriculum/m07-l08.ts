import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-daahina-haath',
  module: 7,
  lesson: 8,
  title: 'Daahina Haath — Eating with the Right Hand',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In traditional Indian eating, the right hand does everything — tear roti, scoop dal, mix rice. The left hand stays in your lap. There\'s a deeper rule too: 'jhutha' — once your lips touch food, it can\'t be shared. Your half-bitten roti doesn\'t go back on the communal plate. Ever.",
    culturalNote: "'Daahina haath' (दाहिना हाथ) = right hand. The left has a traditional toilet/cleaning role, so it\'s kept away from food. 'Jhutha' (झूठा) means 'food touched by lips' — once you\'ve eaten from it, it\'s yours alone. This is why Indian families serve onto individual plates, not picked up off shared bowls with shared spoons.",
  },

  chunks: [
    {
      id: 'daahina_haath',
      target: 'दाहिना हाथ',
      native: 'Right hand',
      literal: 'Daahina haath — right hand',
      emoji: '🤚',
      phonetic: 'DAA-hi-na HAATH',
      audioRef: null,
    },
    {
      id: 'jhutha',
      target: 'झूठा',
      native: 'Jhutha (food touched by mouth — unshareable)',
      literal: 'Jhutha — false/contaminated by lips',
      emoji: '🚫🍽️',
      phonetic: 'JHOO-tha',
      audioRef: null,
    },
    {
      id: 'haath_dho_lo',
      target: 'हाथ धो लो',
      native: 'Wash your hands',
      literal: 'Haath dho lo — hand wash take',
      emoji: '🧼',
      phonetic: 'HAATH dho lo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Se — "with" / "from" (the instrument particle)',
    explanation: "'Se' (से) marks the instrument or origin of an action — 'with' or 'from'. 'Daahine haath se khaana' (eat with the right hand). 'Chamche se khaate hain' (we eat with a spoon). 'Delhi se aaya' (came from Delhi). Place 'se' AFTER the noun (postposition, not preposition).",
    examples: [
      { target: 'Daahine haath se khaate hain', native: 'We eat with the right hand' },
      { target: 'Chamche se khaate hain', native: 'We eat with a spoon' },
      { target: 'Hum Delhi se aaye hain', native: 'We have come from Delhi' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Daahina haath', right: 'Right hand' },
        { left: 'Jhutha', right: 'Food touched by mouth (unshareable)' },
        { left: 'Haath dho lo', right: 'Wash your hands' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "We eat with the right hand"',
      sentence: 'Daahine haath _____ khaate hain.',
      options: ['se', 'mein', 'ko'],
      correct: 'se',
      context: '"With" — the instrument particle.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Right hand',
      correct: ['Daahina haath', 'daahina haath'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You\'ve taken a bite of your roti. Your friend says "ek bite milega?" (can I have a bite?). What\'s the cultural rule?',
      question: 'Sharing food you\'ve already bitten:',
      options: [
        { text: 'Tear off a fresh piece you haven\'t touched and pass that — never the bitten one', correct: true },
        { text: 'Pass them what\'s left of your bite', correct: false },
        { text: 'Refuse — sharing food is rude', correct: false },
      ],
      explanation: "Once your lips touch it, it\'s 'jhutha' — and traditional Indian eating treats jhutha as off-limits to anyone else. Tear a fresh piece from the roti before you bite, hand that over. The same rule is why Indians don\'t share water bottles by lip — they pour into their mouth from above.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Wash your hands first"',
      words: ['Pehle', 'lo', 'haath', 'dho'],
      correct: ['Pehle', 'haath', 'dho', 'lo'],
      translation: 'Wash your hands first',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Jhutha (food touched by mouth)',
      correct: ['Jhutha', 'jhutha'],
    },
  ],

  rwenDialogue: {
    intro: "You\'re sitting cross-legged on the floor at a traditional family meal in a Varanasi home. The grandmother has just laid out the thalis. She watches what you do next.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, पहले हाथ धो लो।',
        native: 'Dear, wash your hands first.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ji daadi, abhi dhota hoon. Daahine haath se hi khaaunga.', native: 'Yes grandma, washing now. I\'ll eat with my right hand only.', correct: true, feedback: 'You acknowledged the instruction AND signalled you know the right-hand rule. Daadi smiles — she didn\'t even have to remind you.' },
          { target: 'Theek hai', native: 'Okay', correct: false, feedback: 'Acknowledge the wash and the hand: "Ji daadi, daahine haath se khaaunga."' },
          { target: 'Mujhe spoon do', native: 'Give me a spoon', correct: false, feedback: 'In a traditional home, asking for a spoon for sadza/roti reads as not knowing the rules. Try: "Daahine haath se khaaunga."' },
        ],
      },
      {
        speaker: 'npc',
        target: 'अच्छा बेटा। और रोटी जूठी मत करना — पहले तोड़ो, फिर खाओ।',
        native: 'Good child. And don\'t make the roti jhutha — break it first, then eat.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Right hand. Tear before bite. Two rules — but they signal you respect what eating means here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Right hand', correct: ['Daahina haath', 'daahina haath'] },
      { prompt: 'Wash your hands', correct: ['Haath dho lo', 'haath dho lo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Eat one meal today using only your right hand — even if it\'s a sandwich. Keep the left in your lap. Notice how it changes the rhythm of eating, the focus. That awareness is what 'daahine haath se khaate hain' is really about.",
    rwenSignoff: "Right hand for food. Always. Phir milenge.",
  },

  phase8: {
    scenario: "It\'s a winter evening in Varanasi and you\'re seated cross-legged on a low chowki at a Brahmin family\'s kitchen for dinner. Brass thalis are laid on the floor; a steel jug of water sits beside each plate. The grandmother is across from you, and you\'re the first foreigner to eat here.",
    rwenRole: "Daadi — the grandmother, late 70s, deeply traditional; she will not say anything if you fumble, but will note silently — and respect you visibly if you handle the right-hand and jhutha rules well.",
    successCriteria: "User washes hands before sitting (acknowledges 'haath dho lo'), eats only with the daahina haath (mentions or demonstrates this), tears roti before biting rather than biting whole and double-dipping, and avoids any 'jhutha' violation — using the 'se' construction correctly when describing eating with the right hand.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
