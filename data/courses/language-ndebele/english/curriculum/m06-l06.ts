import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06',
  module: 6,
  lesson: 6,
  title: 'Ngiphethwe Yikhanda — Pain and Symptoms',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "'Ngiphethwe yikhanda' literally means 'I am held by the head' — it's how isiNdebele says 'I have a headache'. The pain HOLDS you. Beautiful image, useful pattern: ngi-phethwe yi- + body part = I have a [body part]-ache.",
    culturalNote: "Naming a specific symptom in isiNdebele earns you faster help than a vague 'I feel bad'. Elders especially appreciate precision — they'll often respond with a specific remedy: a tea, a leaf, a known tablet. Vague suffering is harder to act on; specific pain has a specific answer.",
  },

  chunks: [
    {
      id: 'ngiphethwe_yikhanda',
      target: 'Ngiphethwe yikhanda.',
      native: 'I have a headache.',
      literal: 'Ngi-phethwe (I am held) + yi- (by) + khanda (head)',
      emoji: '🤕',
      phonetic: 'ngee-PEH-tweh yee-KHAN-dah',
      audioRef: null,
    },
    {
      id: 'ngiphethwe_yisisu',
      target: 'Ngiphethwe yisisu.',
      native: 'I have a stomach-ache.',
      literal: 'Ngi-phethwe yi- + sisu (stomach)',
      emoji: '🤢',
      phonetic: 'ngee-PEH-tweh yee-SEE-soo',
      audioRef: null,
    },
    {
      id: 'umkhuhlane',
      target: 'umkhuhlane',
      native: 'fever / flu',
      literal: 'um- (class 3) + khuhlane',
      emoji: '🌡️',
      phonetic: 'oom-KOO-hlah-neh',
      audioRef: null,
    },
    {
      id: 'ukukhwehlela',
      target: 'ukukhwehlela',
      native: 'to cough / coughing',
      literal: 'uku- (infinitive) + khwehlela',
      emoji: '🤧',
      phonetic: 'oo-koo-kweh-HLEH-lah',
      audioRef: null,
    },
    {
      id: 'sibuhlungu',
      target: '... sibuhlungu',
      native: '... is painful / hurts',
      literal: 'class 7 agreement + buhlungu (painful) — agreement changes for other classes',
      emoji: '😣',
      phonetic: 'see-BOO-hloon-goo',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Ngiphethwe yi-" + body part',
    explanation: "To say a body part is hurting you, isiNdebele uses 'Ngiphethwe yi-' (I am held by) + the body-part name. The 'yi-' fuses to the front of the noun: yikhanda, yisisu, yindlebe, yinhliziyo. Alternative: '[body part] sami sibuhlungu' (my [part] is painful) — works for the same idea with explicit possessive.",
    examples: [
      { target: 'Ngiphethwe yikhanda.', native: 'I have a headache.' },
      { target: 'Ngiphethwe yisisu.', native: 'I have a stomach-ache.' },
      { target: 'Ikhanda lami libuhlungu.', native: 'My head hurts.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match symptom to meaning',
      pairs: [
        { left: 'Ngiphethwe yikhanda.', right: 'I have a headache.' },
        { left: 'Ngiphethwe yisisu.', right: 'I have a stomach-ache.' },
        { left: 'Umkhuhlane.', right: 'Fever / flu.' },
        { left: 'Ukukhwehlela.', right: 'Coughing.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'I have a headache.',
      correct: ['Ngiphethwe yikhanda', 'Ngiphethwe yikhanda.', 'ngiphethwe yikhanda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I have a stomach-ache"',
      sentence: 'Ngiphethwe ____.',
      options: ['yisisu', 'yikhanda', 'yindlebe'],
      correct: 'yisisu',
      context: '"yi-" + isisu (stomach) → yisisu (the i- vowel drops).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most accurate report',
      question: "You have a fever AND a cough. Which sentence covers both?",
      options: [
        { text: 'Ngilomkhuhlane lokukhwehlela.', correct: true },
        { text: 'Ngiphethwe yikhanda.', correct: false },
        { text: 'Isandla sami sibuhlungu.', correct: false },
      ],
      explanation: "'Ngilo-' = 'I have', 'lo-' = 'and'. So 'Ngilomkhuhlane lokukhwehlela' = 'I have flu and coughing.' The other options name a headache or hand-pain — not what was asked.",
    },
  ],

  rwenDialogue: {
    intro: "You wake up at your host family's place with a thumping headache. The mama of the house meets you in the kitchen.",
    lines: [
      {
        speaker: 'npc',
        target: 'Vuka kahle. Awuphilanga?',
        native: 'Good morning. Are you not well?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiphethwe yikhanda.', native: 'I have a headache.', correct: true, feedback: "Specific. She'll know what to do — likely panado plus water plus 'sit down'." },
          { target: 'Ngiphethwe.', native: 'I am held. (incomplete)', correct: false, feedback: "Half a sentence — what holds you? Add the body part: 'yikhanda'." },
          { target: 'Ngiyaphila.', native: "I'm well.", correct: false, feedback: "She can see you're not. Try 'ngiphethwe yikhanda'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hayi shame. Ngizokulethela amanzi lephanado.',
        native: "Oh shame. Let me bring you water and panado.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga.', native: 'Thank you.', correct: true, feedback: "Receive care gracefully — that's the move. She's already on it." },
          { target: 'Hayi, kulungile.', native: "No, it's fine.", correct: false, feedback: "Refusing care can read as cold here. Just 'Ngiyabonga' — thank you." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Pain has a specific shape in isiNdebele. Name it specifically — get help specifically.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a headache.', correct: ['Ngiphethwe yikhanda', 'Ngiphethwe yikhanda.', 'ngiphethwe yikhanda'] },
      { prompt: 'I have a stomach-ache.', correct: ['Ngiphethwe yisisu', 'Ngiphethwe yisisu.', 'ngiphethwe yisisu'] },
      { prompt: 'fever / flu', correct: ['umkhuhlane', 'Umkhuhlane'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Take a body audit. Whatever genuinely aches today (back, eyes, even nothing) — say it as 'Ngiphethwe yi-___' or '[part] sami sibuhlungu'. Real symptoms, real sentences.",
    rwenSignoff: "The body speaks. Now you have its language. Sala kuhle.",
  },

  phase8: {
    scenario: "Your throat is sore and you have a low fever. You're at the local clinic in Bulawayo and the nurse asks what's wrong. You need to describe your symptoms specifically — not just 'I'm sick'.",
    rwenRole: "The clinic nurse, ~40, professional and busy but patient. She'll ask follow-up questions: how long? any cough? any pain elsewhere?",
    successCriteria: "User describes at least two symptoms in isiNdebele using 'Ngiphethwe yi-' patterns, body-part possessives with 'sibuhlungu', or named conditions like 'umkhuhlane' / 'ukukhwehlela'. Bonus if they answer the duration question with a number-of-days phrase.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
