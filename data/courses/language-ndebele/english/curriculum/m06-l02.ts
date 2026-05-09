import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02',
  module: 6,
  lesson: 2,
  title: 'Izandla Lenyawo — Hands and Feet',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Limbs in isiNdebele come in matched singular/plural pairs. 'Isandla' (hand) → 'izandla' (hands). 'Unyawo' (foot) → 'inyawo' (feet). Once you spot the i-/izi- shift, the rest of the body opens up.",
    culturalNote: "Greeting an elder with the LEFT hand alone is a small disrespect in many Ndebele households. The two-hand offer — right hand extended, left lightly under the right elbow — is the classic respectful posture. Same applies when receiving anything: money, food, a gift.",
  },

  chunks: [
    {
      id: 'isandla',
      target: 'isandla / izandla',
      native: 'hand / hands',
      literal: 'isi- (class 7) → izi- (class 8)',
      emoji: '✋',
      phonetic: 'ee-SAHN-dlah / ee-ZAHN-dlah',
      audioRef: null,
    },
    {
      id: 'unyawo',
      target: 'unyawo / inyawo',
      native: 'foot / feet',
      literal: 'u- (class 11) → izi- (class 10)',
      emoji: '🦶',
      phonetic: 'oo-NYAH-woh / ee-NYAH-woh',
      audioRef: null,
    },
    {
      id: 'ingalo',
      target: 'ingalo / izingalo',
      native: 'arm / arms',
      literal: 'in- (class 9) → izin- (class 10)',
      emoji: '💪',
      phonetic: 'in-GAH-loh / ee-zin-GAH-loh',
      audioRef: null,
    },
    {
      id: 'umlenze',
      target: 'umlenze / imilenze',
      native: 'leg / legs',
      literal: 'um- (class 3) → imi- (class 4)',
      emoji: '🦵',
      phonetic: 'oom-LEN-zeh / ee-mee-LEN-zeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Singular/plural prefixes for limbs',
    explanation: "Each limb-word changes prefix when going plural — but the stem stays the same. Memorise them as PAIRS: isandla/izandla, unyawo/inyawo, ingalo/izingalo, umlenze/imilenze. Knowing both halves means you can talk about one or many of anything on the body.",
    examples: [
      { target: 'Isandla sami sibuhlungu.', native: 'My hand hurts.' },
      { target: 'Inyawo zami zikhathele.', native: 'My feet are tired.' },
      { target: 'Imilenze yakhe mide.', native: 'His/her legs are long.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match limb to meaning',
      pairs: [
        { left: 'isandla', right: 'hand' },
        { left: 'unyawo', right: 'foot' },
        { left: 'ingalo', right: 'arm' },
        { left: 'umlenze', right: 'leg' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct plural',
      question: 'What is the plural of "isandla" (hand)?',
      options: [
        { text: 'izandla', correct: true },
        { text: 'amasandla', correct: false },
        { text: 'imisandla', correct: false },
      ],
      explanation: "isi- → izi- shift moves you from class 7 to class 8. 'Izandla' is what you'd say when waving with both hands.",
    },
    {
      type: 'translate',
      instruction: 'Type the isiNdebele word',
      prompt: 'leg',
      correct: ['umlenze', 'Umlenze'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My feet are tired"',
      sentence: '____ zami zikhathele.',
      options: ['Inyawo', 'Unyawo', 'Izandla'],
      correct: 'Inyawo',
      context: '"feet" (plural) = inyawo. Singular "unyawo" would mean only one foot.',
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's house in Hillside. After a long walk, you flop onto the couch — and his auntie asks how you are.",
    lines: [
      {
        speaker: 'npc',
        target: 'Unjani? Ukhathele?',
        native: 'How are you? Are you tired?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Inyawo zami zikhathele.', native: 'My feet are tired.', correct: true, feedback: "Perfect — plural prefix on inyawo, possessive 'zami' agreeing. Auntie smiles." },
          { target: 'Unyawo wami ukhathele.', native: 'My foot is tired (one foot).', correct: false, feedback: "Grammatically OK — but you walked on TWO feet. Plural: 'inyawo zami zikhathele'." },
          { target: 'Ngikhathele kakhulu.', native: "I'm very tired (general).", correct: false, feedback: "Fine answer, but the lesson asks for the body-part version: 'inyawo zami zikhathele'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hayi suka — phumula. Ngizokulethela amanzi.',
        native: 'Eh, sit down — rest. I will bring you water.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Limbs locked. You said 'my feet' correctly with the plural prefix and matching possessive. That's the engine.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'hand', correct: ['isandla', 'Isandla'] },
      { prompt: 'foot', correct: ['unyawo', 'Unyawo'] },
      { prompt: 'arm', correct: ['ingalo', 'Ingalo'] },
      { prompt: 'leg', correct: ['umlenze', 'Umlenze'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Touch each limb as you name it — singular first, then plural. 'Isandla, izandla. Unyawo, inyawo. Ingalo, izingalo. Umlenze, imilenze.' Twice through.",
    rwenSignoff: "Pairs build the body. Sala kuhle.",
  },

  phase8: {
    scenario: "You've come back from a long hike up the Matobo Hills with a Ndebele friend's family. Everyone is comparing how their bodies feel — sore feet, aching legs, tired arms — at the braai afterwards.",
    rwenRole: "Your friend's father, mid-50s, hiked harder than anyone and is teasingly comparing fitness levels around the fire.",
    successCriteria: "User describes at least two body parts feeling tired or sore using correct plural forms (e.g., 'inyawo zami zikhathele', 'imilenze yami ibuhlungu') and matches the possessive prefix to the noun class.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
