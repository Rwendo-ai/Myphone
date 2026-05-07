import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-dekhna',
  module: 8,
  lesson: 5,
  title: 'Dekhna — To See, To Look',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "देखना (dekhna) is one Hindi verb that does the work of three English ones: see, look, watch. 'Main film dekhta hoon' — I watch a movie. 'Dekho!' — Look! 'Maine dekha' — I saw. One stem (dekh-), one infinitive (dekhna), three English meanings. The context tells you which.",
    culturalNote: "'Dekho' (देखो — look!) is everywhere in Indian street life — vendors saying 'dekho dekho!' over their stalls in Chandni Chowk, friends pointing out something on the road, parents directing children's attention. It's also used as a mild discourse marker — 'dekho, baat yeh hai...' (look, the thing is...) — to soften a serious point. Like 'see' in English, but more bodily.",
  },

  chunks: [
    {
      id: 'dekhna',
      target: 'देखना — Dekhna',
      native: 'To see / to look / to watch',
      literal: 'dekh- (see/look-stem) + -na',
      emoji: '👁️',
      phonetic: 'DEKH-na',
      audioRef: null,
    },
    {
      id: 'dekho',
      target: 'देखो! — Dekho!',
      native: 'Look! (informal command, to "tum")',
      literal: 'dekh- + -o (informal command ending)',
      emoji: '👀',
      phonetic: 'DEK-ho',
      audioRef: null,
    },
    {
      id: 'maine_dekha',
      target: 'मैंने देखा / मैंने देखी — Maine dekha / Maine dekhi',
      native: 'I saw it (object-masculine / object-feminine)',
      literal: 'I-erg saw-masc / saw-fem',
      emoji: '✅',
      phonetic: 'MAIN-ne DE-kha / MAIN-ne DE-khee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense — gender on the OBJECT, not the subject',
    explanation: "Hindi has a quirky past tense: with transitive verbs like dekhna, the gender ending agrees with the OBJECT, not the subject. 'Maine film dekhi' (film is feminine → dekhi). 'Maine ladka dekha' (ladka is masculine → dekha). And the subject takes -ne (maine = main + ne). This is called the ergative — strange but consistent.",
    examples: [
      { target: 'मैं फ़िल्म देखता हूँ — Main film dekhta hoon', native: 'I watch a film (man speaking, present)' },
      { target: 'मैंने फ़िल्म देखी — Maine film dekhi', native: 'I saw the film (film=feminine, so dekhi)' },
      { target: 'देखो, बारिश हो रही है! — Dekho, baarish ho rahi hai!', native: "Look, it's raining!" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its meaning',
      pairs: [
        { left: 'Dekhna', right: 'To see / look / watch' },
        { left: 'Dekho!', right: 'Look! (informal)' },
        { left: 'Maine dekha', right: 'I saw (it — masculine object)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Past tense: "I saw the film". Film (फ़िल्म) is feminine.',
      sentence: 'Maine film _____.',
      options: ['dekhi', 'dekha', 'dekhe'],
      correct: 'dekhi',
      context: 'Past tense of dekhna agrees with the object (film=fem).',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Look! (informal command)',
      correct: ['Dekho', 'dekho', 'Dekho!', 'dekho!'],
    },
    {
      type: 'multiple_choice',
      instruction: "In Hindi past tense with dekhna, the verb agrees with:",
      question: 'Past tense gender:',
      options: [
        { text: 'The OBJECT (what was seen) — not the subject', correct: true },
        { text: 'The subject (the person seeing)', correct: false },
        { text: 'Neither — past tense has no gender', correct: false },
      ],
      explanation: "Hindi ergative past: 'Maine [object] dekha/dekhi' — gender on the object. Maine ladka dekha (saw a boy). Maine ladki dekhi (saw a girl).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I watch a movie every Sunday' (man speaking)",
      words: ['Main', 'har', 'Itwaar', 'film', 'dekhta', 'hoon.'],
      correct: ['Main', 'har', 'Itwaar', 'film', 'dekhta', 'hoon.'],
      translation: 'I watch a movie every Sunday',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Look, it's raining!",
      correct: ['Dekho, baarish ho rahi hai!', 'dekho, baarish ho rahi hai!', 'Dekho baarish ho rahi hai', 'dekho baarish ho rahi hai'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday evening 7:30pm. Priya's cousin Aarav is scrolling on his phone on the sofa. He nudges you and shows you the screen.",
    lines: [
      {
        speaker: 'npc',
        target: 'अरे देखो! क्या तुमने ये नई फ़िल्म देखी?',
        native: 'Hey look! Have you seen this new film?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Haan, maine kal raat dekhi! Bahut acchi thi. Kya tum ne dekhi?', native: 'Yes, I saw it last night! It was very good. Did you see it?', correct: true, feedback: "Used 'maine + dekhi' (object-feminine agreement), past auxiliary 'thi', then asked back. Cousin-level peer Hindi, perfectly done." },
          { target: 'Haan main dekha', native: 'Yes I saw (wrong: missing -ne and wrong gender)', correct: false, feedback: "Past transitive needs 'maine' (not 'main') and the verb agrees with the object. Film is feminine → 'maine dekhi'." },
          { target: 'Maine film dekha', native: 'I saw film (wrong gender on verb)', correct: false, feedback: "Film is feminine. The verb takes -i: 'maine film dekhi'. The object decides the gender." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Dekhna in past tense — maine [feminine object] dekhi, maine [masculine object] dekha. The object rules. Strange, but you've got it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Look! (informal)', correct: ['Dekho', 'dekho', 'Dekho!', 'dekho!'] },
      { prompt: 'I saw the film (film is feminine)', correct: ['Maine film dekhi', 'maine film dekhi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, when you notice something interesting, point at it and say 'Dekho!' to a friend (or a mirror). Then describe what you see: 'Main [thing] dekhta/dekhti hoon.' Sight, named in Hindi.",
    rwenSignoff: "Dekho — and the world opens. Phir milenge.",
  },

  phase8: {
    scenario: "Sunday afternoon at the joint family flat. Priya's cousin Aarav (early 20s, peer register, knows you've been bingeing Hindi films as practice) wants the full debrief: which film you watched yesterday (past tense — gender on the object), which one you're watching this week (present continuous), and which one you're going to see in the cinema next weekend (future). He'll grill you on the ergative.",
    rwenRole: "Aarav — peer cousin, casual 'tum' register fine for him. Gentle but eagle-eyed on the maine + object-gender pattern. Will recast you if you mix up dekha/dekhi.",
    successCriteria: "User uses ergative past correctly: 'Maine [feminine object] dekhi' or 'Maine [masculine object] dekha'. Uses 'Main [object] dekh raha/rahi hoon' for current viewing. Future with 'dekhungaa/dekhungi' for the cinema plan. The maine-vs-main distinction shows up cleanly across all three answers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
