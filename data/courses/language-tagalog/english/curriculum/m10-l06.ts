import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'Sa doktor — At the Doctor',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're inside the clinic now. The doktora is asking where, how long, what helps. Today we put it all together — a real Tagalog doctor visit.",
    culturalNote: "Filipino doctors usually mix Tagalog and English (Taglish) — but starting in Tagalog earns warm points and slower, kinder explanations. Saying 'masakit dito' while pointing is universally clear, even at a rural barangay clinic.",
  },

  chunks: [
    {
      id: 'masakit_dito',
      target: 'Masakit dito',
      native: 'It hurts here',
      literal: 'Painful here',
      emoji: '👉',
      phonetic: 'ma-sa-KIT di-TO',
      audioRef: null,
    },
    {
      id: 'tatlong_araw_na',
      target: 'Tatlong araw na',
      native: "For 3 days now",
      literal: 'Three days already',
      emoji: '📅',
      phonetic: 'tat-LONG A-raw na',
      audioRef: null,
    },
    {
      id: 'inumin_mo_gamot',
      target: 'Inumin mo ang gamot',
      native: 'Take this medicine',
      literal: 'Drink-it you the medicine',
      emoji: '💊',
      phonetic: 'i-NU-min mo ang ga-MOT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Medical setting flow',
    explanation: "A Tagalog doctor visit has a rhythm: **where** (masakit dito) → **how long** ([number]ng araw na) → **what to do** (inumin mo / kainin mo). The little **na** at the end of *tatlong araw na* means 'already' — it's the difference between '3 days' and '3 days now'.",
    examples: [
      { target: 'Masakit dito', native: 'It hurts here' },
      { target: 'Dalawang araw na', native: 'For 2 days now' },
      { target: 'Inumin mo ang gamot tatlong beses', native: 'Take the medicine three times' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Masakit dito', right: 'It hurts here' },
        { left: 'Tatlong araw na', right: 'For 3 days now' },
        { left: 'Inumin mo ang gamot', right: 'Take this medicine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "The doctor asks how long. You've had the headache since Monday — three days.",
      sentence: 'Tatlong _____ na, doktora.',
      options: ['araw', 'ulo', 'gamot'],
      correct: 'araw',
      context: 'Araw = day. Tatlong araw na = 3 days now.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'It hurts here',
      correct: ['Masakit dito', 'masakit dito'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: the doctor tells you to take the medicine',
      words: ['gamot', 'mo', 'Inumin', 'ang'],
      correct: ['Inumin', 'mo', 'ang', 'gamot'],
      translation: 'Take this medicine',
    },
    {
      type: 'multiple_choice',
      instruction: 'The doctor asks: "Kailan nag-umpisa?" (When did it start?). You\'ve had it 3 days.',
      question: 'What do you reply?',
      options: [
        { text: 'Tatlong araw na', correct: true },
        { text: 'Masakit dito', correct: false },
        { text: 'Kailangan ko ng doktor', correct: false },
      ],
      explanation: 'Tatlong araw na = 3 days now — exactly what they asked.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Take this medicine',
      correct: ['Inumin mo ang gamot', 'inumin mo ang gamot'],
    },
  ],

  rwenDialogue: {
    intro: "You're in the consultation room. Dra. Reyes looks up from her notes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan po masakit, at kailan nag-umpisa?',
        native: 'Where does it hurt, and when did it start?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Masakit dito sa ulo. Tatlong araw na, doktora.', native: 'It hurts here in the head. Three days now, doctor.', correct: true, feedback: "Both questions answered, both pieces flowing in. Real consult Tagalog." },
          { target: 'Masaya ako.', native: "I'm happy.", correct: false, feedback: "Wrong room — save that for outside the clinic." },
          { target: 'Inumin mo ang gamot.', native: "Take this medicine.", correct: false, feedback: "That's the doctor's line, not yours!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige. Inumin mo ang gamot na ito tatlong beses sa isang araw.',
        native: 'Okay. Take this medicine three times a day.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just navigated a doctor's visit in Tagalog. That's a milestone.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'It hurts here (in Tagalog)', correct: ['Masakit dito', 'masakit dito'] },
      { prompt: 'For 3 days now (in Tagalog)', correct: ['Tatlong araw na', 'tatlong araw na'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Roleplay alone or with a friend — pretend you walked into a clinic. Walk through the three lines: masakit dito → tatlong araw na → and then react to 'inumin mo ang gamot'.",
    rwenSignoff: "Ingat ka — take care. Salamat sa pagsubok — thanks for trying. Bukas ulit.",
  },

  phase8: {
    scenario: "You're in Dra. Reyes's consultation room in a Manila clinic. She'll ask where it hurts, how long, and any other symptoms. Walk her through your (imagined) condition entirely in Tagalog. She listens, then prescribes.",
    rwenRole: "Dra. Reyes — general practitioner, late 40s, calm and methodical, switches into clear slow Tagalog when she sees a learner.",
    successCriteria: "User uses 'masakit dito' or 'masakit ang [body part] ko' to locate pain, gives a duration with '___ng araw na', and acknowledges/repeats back the doctor's 'inumin mo ang gamot' instruction. Three-beat consult.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
