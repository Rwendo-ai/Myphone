import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04',
  module: 6,
  lesson: 4,
  title: 'Ngiyagula — I Am Sick',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Ngiyagula' = I am sick. The verb 'ukugula' (to be sick) is one of the most useful verbs in any health conversation. With one word you can flag illness — and unlock the help that follows.",
    culturalNote: "In Ndebele communities, telling someone 'ngiyagula' tends to bring an immediate practical response — tea, a chair, a phone call to relatives. There's little of the British 'don't make a fuss' energy. If you say you're sick, expect to be cared for. Receiving that care graciously is part of the culture.",
  },

  chunks: [
    {
      id: 'ngiyagula',
      target: 'Ngiyagula.',
      native: 'I am sick.',
      literal: 'Ngi- (I) + ya- (present continuous) + gula (be sick)',
      emoji: '🤒',
      phonetic: 'ngee-yah-GOO-lah',
      audioRef: null,
    },
    {
      id: 'ngiphethwe',
      target: 'Ngiphethwe ...',
      native: 'I am suffering from ...',
      literal: 'Ngi- (I) + phethwe (am held by) — followed by the illness',
      emoji: '😖',
      phonetic: 'ngee-PEH-tweh',
      audioRef: null,
    },
    {
      id: 'ngiyaphila',
      target: 'Ngiyaphila.',
      native: 'I am well / healthy.',
      literal: 'Ngi- (I) + ya- + phila (live, be well)',
      emoji: '😊',
      phonetic: 'ngee-yah-PEE-lah',
      audioRef: null,
    },
    {
      id: 'awuphilanga',
      target: 'Awuphilanga?',
      native: 'Are you not well?',
      literal: 'A- (negative) + u- (you) + phila + -nga (negative perfect)',
      emoji: '🤔',
      phonetic: 'ah-woo-PEE-lan-gah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"To be sick" vs "to be well"',
    explanation: "isiNdebele uses two paired verbs: 'ukugula' (to be sick) and 'ukuphila' (to be alive/well). Both take 'ngi-' for I, 'u-' for you, 'u-' for he/she. Add 'ya-' in the middle for present-tense states. Negate with 'a-' at the start: 'angiguli' (I'm not sick), 'angiphilanga' (I'm not well).",
    examples: [
      { target: 'Ngiyagula.', native: 'I am sick.' },
      { target: 'Uyagula.', native: 'You are sick / He is sick.' },
      { target: 'Angiguli, ngiyaphila.', native: "I'm not sick, I'm well." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ngiyagula.', right: 'I am sick.' },
        { left: 'Ngiyaphila.', right: 'I am well.' },
        { left: 'Awuphilanga?', right: 'Are you not well?' },
        { left: 'Ngiphethwe ...', right: 'I am suffering from ...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'I am sick.',
      correct: ['Ngiyagula', 'Ngiyagula.', 'ngiyagula'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right reply',
      question: 'Someone asks "Unjani?" and you feel unwell. Which is best?',
      options: [
        { text: 'Hayi, ngiyagula kancane.', correct: true },
        { text: 'Yebo, sawubona.', correct: false },
        { text: 'Ngithanda ukudla.', correct: false },
      ],
      explanation: "'Hayi, ngiyagula kancane' = 'No, I'm a bit unwell.' Adding 'kancane' (a little) softens it without lying. 'Yebo, sawubona' is just 'yes, hello'. The food sentence isn't relevant.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I am NOT sick"',
      sentence: '____.',
      options: ['Angiguli', 'Ngiyagula', 'Ngiphethwe'],
      correct: 'Angiguli',
      context: 'Negative of "ngiyagula" drops the -ya- and adds a- at the front: angiguli.',
    },
  ],

  rwenDialogue: {
    intro: "Your colleague at work in Bulawayo notices you look pale. She asks how you are.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sawubona, unjani namhlanje?',
        native: 'Hi, how are you today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hayi, ngiyagula kancane.', native: "No, I'm a bit unwell.", correct: true, feedback: "Honest, soft, idiomatic. She'll likely follow up — that's the cue for tomorrow's lesson on going to the doctor." },
          { target: 'Ngiyaphila kakhulu!', native: "I'm doing very well!", correct: false, feedback: "If you're feeling unwell, that's a lie — and culturally she'll see right through your face." },
          { target: 'I am sick.', native: '(English)', correct: false, feedback: "She's speaking isiNdebele — meet her there. Try 'ngiyagula'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yini? Uphethwe yini?',
        native: "What is it? What's wrong with you (literally: held by what)?",
      },
      {
        speaker: 'rwen',
        rwenLine: "She's asking what's wrong. Tomorrow we learn how to answer that — naming the symptom and asking for a doctor.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am sick.', correct: ['Ngiyagula', 'Ngiyagula.', 'ngiyagula'] },
      { prompt: 'I am well.', correct: ['Ngiyaphila', 'Ngiyaphila.', 'ngiyaphila'] },
      { prompt: 'Are you not well?', correct: ['Awuphilanga', 'Awuphilanga?', 'awuphilanga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise saying both: 'Ngiyagula' (I'm sick) and 'Ngiyaphila' (I'm well). Out loud, three times each. Notice the rhythm — they share the same skeleton, just different verbs.",
    rwenSignoff: "Naming illness is the first step to fixing it. Sala kuhle.",
  },

  phase8: {
    scenario: "You wake up with a slight fever in your room at a Bulawayo guesthouse. The owner — a kindly woman in her 60s — knocks to ask if you'll be coming for breakfast. You need to tell her you're not feeling well, in isiNdebele.",
    rwenRole: "The guesthouse owner, late 60s, motherly, will fuss over you and want to bring tea. She speaks slowly and clearly because she's used to learners.",
    successCriteria: "User says 'ngiyagula' (or 'ngiyagula kancane') in response to her greeting, accepts her offer of tea graciously with 'ngiyabonga' (thank you), and avoids saying 'ngiyaphila' when they actually feel unwell.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
