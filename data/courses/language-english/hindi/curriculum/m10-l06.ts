import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'At the Doctor — Doctor के पास',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Follow-up appointment। Doctor पूछेगा: 'How long?', 'How bad?', 'What helps?'। Duration + intensity + treatment।",
    culturalNote: "हिंदी में 'तीन दिन हो गए' = 3 days हो रही। English में 'for three days' (3 days से) — 'for' लगता है। 'It's been three days' formula भी चलता। Pain scale 1-10 — UK NHS, US doctors सब use करते। 'It's quite bad in the morning' (सुबह ज़्यादा बुरा) — natural English।",
  },

  chunks: [
    {
      id: 'hurts_here',
      target: 'It hurts here',
      native: 'यहाँ दर्द है',
      literal: 'Yahaan dard hai',
      emoji: '👉',
      phonetic: 'it-HERTS-HEER',
      audioRef: null,
    },
    {
      id: 'for_three_days',
      target: 'For three days',
      native: 'तीन दिन से',
      literal: 'Teen din se',
      emoji: '📅',
      phonetic: 'fer-THREE-DAYZ',
      audioRef: null,
    },
    {
      id: 'take_medicine',
      target: 'Take this medicine',
      native: 'यह दवा लीजिए',
      literal: 'Yeh dawa leejiye',
      emoji: '💊',
      phonetic: 'TAYK-this-MED-uh-sen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Duration + intensity at the doctor',
    explanation: "Doctor पर short, exact। 'For + duration' (for three days, for two weeks)। 'It's been + duration' भी चलता। Pain scale: 'about a 6 on a scale of 10'। Medicine instructions: 'Take this twice a day, after meals'।",
    examples: [
      { target: 'It hurts here — for three days now.',         native: 'यहाँ दर्द — तीन दिन से।' },
      { target: "It's quite bad in the morning.",                 native: 'सुबह ज़्यादा बुरा।' },
      { target: 'Take this medicine twice a day, after meals.',   native: 'यह दवा दिन में दो बार, खाने के बाद।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'It hurts here',          right: 'यहाँ दर्द' },
        { left: 'For three days',          right: 'तीन दिन से' },
        { left: 'Take this medicine',      right: 'यह दवा लीजिए' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में — "How long?" का जवाब',
      prompt: 'तीन दिन हो गए।',
      correct: ["It's been three days.", 'It has been three days.', 'For three days.', "it's been three days.", 'For three days now.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'यहाँ दर्द — सुबह ज़्यादा।',
      correct: ['It hurts here — quite bad in the morning.', 'It hurts here — very bad in the morning.', 'It hurts here, especially in the morning.', 'it hurts here — quite bad in the morning.'],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'Take this medicine twice a day'",
      words: ['day.', 'medicine', 'a', 'this', 'twice', 'Take'],
      correct: ['Take', 'this', 'medicine', 'twice', 'a', 'day.'],
      translation: 'यह दवा दिन में दो बार',
    },
    {
      type: 'fill_blank',
      instruction: '"How long has this been going on?"',
      sentence: "It's been _____ three days.",
      options: ['for', 'since', 'about'],
      correct: 'for',
      context: "'For + duration' (3 दिन की अवधि)। 'Since + start point' (Monday से)। दोनों चलते — context अलग।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही जवाब',
      question: "Doctor: 'How bad on 1-10?'",
      options: [
        { text: "About a 6 — it's quite bad in the morning, better at night.", correct: true },
        { text: "Bad.",                                                            correct: false },
        { text: "Yes.",                                                              correct: false },
      ],
      explanation: "Number + detail। Bare 'bad' से picture clear नहीं।",
    },
  ],

  rwenDialogue: {
    intro: "London में follow-up GP appointment। पहले headache के लिए आए थे (m10-l04)। आठ दिन हो गए।",
    lines: [
      { speaker: 'npc', target: "Welcome back. How's the headache — better, worse, the same?", native: 'फिर स्वागत। सिरदर्द — कम, ज़्यादा, या वैसा ही?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A bit better, but it still hurts here — for eight more days now. About a 5 on a scale of 10. The medicine helps in the morning.", native: 'थोड़ा कम, पर यहाँ दर्द — आठ दिन और हो गए। 5 out of 10। दवा सुबह काम करती।', correct: true, feedback: "बढ़िया — duration, location, intensity, treatment — सब।" },
          { target: "Same.", native: 'वैसा ही।', correct: false, feedback: "Detail दें — 'About the same — for eight more days, around a 5'।" },
          { target: "It hurts.", native: 'दर्द है।', correct: false, feedback: "Picture नहीं — कहाँ, कब से, कितना — सब बोलें।" },
        ],
      },
      { speaker: 'npc', target: "Okay — let's adjust. Take this new medicine twice a day, after meals. Come back if it gets worse.", native: 'ठीक — बदलते हैं। यह नई दवा दिन में दो बार, खाने के बाद। बढ़े तो आ जाइए।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Twice a day, after meals — got it. Thank you, doctor.", native: 'दिन में दो बार, खाने के बाद — समझ गया। धन्यवाद।', correct: true, feedback: "बढ़िया — instructions repeat (समझे हो), थैंक्यू।" },
          { target: "Okay.", native: 'ठीक।', correct: false, feedback: "Repeat करें ताकि doctor को पता आप समझे: 'Twice a day, after meals — got it'।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Doctor English — short, exact, helpful।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'For three days (अंग्रेज़ी में)',     correct: ['For three days', 'for three days', 'For three days.', 'for three days.'] },
      { prompt: 'Take this medicine (अंग्रेज़ी में)', correct: ['Take this medicine', 'take this medicine', 'Take this medicine.', 'take this medicine.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Past की कोई बीमारी सोचें। Phone notes में दो English वाक्य: (1) 'It hurts here — for ___ days now.' (2) 'About a ___ on a scale of 10.'",
    rwenSignoff: "कल — पुरानी कहानी।",
  },

  phase8: {
    scenario: "Follow-up GP visit in London. You first came in 8 days ago with a headache (m10-l04 scenario). Today the doctor wants an update: better/worse/same, on a 1-10 scale, what helps, what doesn't. Then they'll prescribe something new.",
    rwenRole: "Dr. Patel, 50, same NHS GP from m10-l04. Friendly, remembers you. Will ask about pain level, frequency, what makes it better.",
    successCriteria: "User uses 'For + duration' OR 'It's been + duration'. Gives a 1-10 pain rating. Uses 'It hurts here' or names a body part. Repeats the new prescription back ('twice a day, after meals'). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
