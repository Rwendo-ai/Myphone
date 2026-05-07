import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — आप क्या करते हैं?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अंग्रेज़ी में 'What do you do?' का मतलब 'आप क्या करते हैं?' — यानी आपका पेशा क्या है। जवाब दो तरह से देते हैं: 'I'm a software engineer' (पद का नाम) या 'I work in IT' (sector का नाम)।",
    culturalNote: "हिंदी में 'मैं engineer हूँ' सीधा है। पर अंग्रेज़ी में एक छोटा-सा शब्द 'a' भूलना नहीं — 'I'm a teacher', 'I'm an engineer'। यह 'a/an' (article) छोटा है पर बिना उसके वाक्य अधूरा सुनाई देता है। IT, BPO, finance — sectors के साथ 'a' नहीं लगता: 'I work in IT', बस।",
  },

  chunks: [
    {
      id: 'what_do_you_do',
      target: 'What do you do?',
      native: 'आप क्या करते हैं?',
      literal: 'What do you do?',
      emoji: '💼',
      phonetic: 'व्हट-डू-यू-डू',
      audioRef: null,
    },
    {
      id: 'im_a_software_engineer',
      target: "I'm a software engineer",
      native: 'मैं software engineer हूँ',
      literal: 'I-am a software engineer',
      emoji: '💻',
      phonetic: 'आयम-अ-सॉफ्ट-वेयर-एन-जि-नीयर',
      audioRef: null,
    },
    {
      id: 'i_work_in_it',
      target: 'I work in IT',
      native: 'मैं IT में काम करता हूँ',
      literal: 'I work in IT',
      emoji: '🖥️',
      phonetic: 'आय-वर्क-इन-आय-टी',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Occupations — "I\'m a ..." / "I work in ..."',
    explanation: "जवाब दो तरह से: (1) 'I'm a [पेशा]' — software engineer, teacher, doctor, nurse, accountant। 'a' (या 'an' स्वर से शुरू होने वाले शब्दों के लिए) मत भूलना। (2) 'I work in [sector]' — IT, BPO, finance, banking, healthcare। यहाँ 'a' नहीं लगता।",
    examples: [
      { target: "I'm a teacher",         native: 'मैं teacher हूँ' },
      { target: "I'm an accountant",     native: 'मैं accountant हूँ' },
      { target: 'I work in BPO',          native: 'मैं BPO में काम करता हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'पेशे को हिंदी अर्थ से मिलाओ',
      pairs: [
        { left: 'Teacher',     right: 'अध्यापक' },
        { left: 'Nurse',       right: 'नर्स' },
        { left: 'Doctor',      right: 'डॉक्टर' },
        { left: 'Engineer',    right: 'इंजीनियर' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं अध्यापक हूँ',
      correct: ["I'm a teacher", "I am a teacher", "i'm a teacher", "i am a teacher"],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'मैं IT में काम करता हूँ',
      correct: ['I work in IT', 'i work in IT', 'I work in I.T.'],
    },
    {
      type: 'fill_blank',
      instruction: "'a', 'an' या कुछ नहीं — सही चुनो",
      sentence: "I'm ____ engineer.",
      options: ['an', 'a', '—'],
      correct: 'an',
      context: "'engineer' स्वर से शुरू होता है — इसलिए 'an'।",
    },
    {
      type: 'build_sentence',
      instruction: 'सवाल बनाओ',
      words: ['What', 'do', 'you', 'do'],
      correct: ['What', 'do', 'you', 'do'],
      translation: 'आप क्या करते हैं?',
    },
    {
      type: 'build_sentence',
      instruction: 'काम का जवाब बनाओ',
      words: ['I', 'work', 'in', 'BPO'],
      correct: ['I', 'work', 'in', 'BPO'],
      translation: 'मैं BPO में काम करता हूँ',
    },
  ],

  rwenDialogue: {
    intro: "तुम Gurgaon में एक नई office में पहुँचे हो। coffee machine पर एक नए सहकर्मी से मुलाक़ात हो रही है।",
    lines: [
      { speaker: 'npc', target: "Welcome to the team! What do you do?", native: 'टीम में स्वागत है! आप क्या करते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a software engineer. I work in the analytics team.", native: 'मैं software engineer हूँ। analytics team में हूँ।', correct: true,  feedback: "बढ़िया — पद और team दोनों एक साथ बता दिए।" },
          { target: "Software engineer.",                                       native: 'Software engineer।',                                    correct: false, feedback: "बहुत छोटा — 'I'm a' लगाओ ताकि पूरा वाक्य बने।" },
          { target: "I am software engineer.",                                  native: 'मैं software engineer हूँ।',                            correct: false, feedback: "'a' छूट गया! अंग्रेज़ी में 'I'm a software engineer' कहना ज़रूरी है।" },
        ],
      },
      { speaker: 'npc', target: "Oh nice — which tech stack are you on?", native: 'अच्छा — किस tech stack पर काम करते हो?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'a' लगाना याद रखा। यह छोटा-सा शब्द अंग्रेज़ी में बहुत बड़ा फ़र्क़ डालता है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: "आप क्या करते हैं? (in English)",         correct: ['What do you do?', 'what do you do?', 'What do you do'] },
      { prompt: "मैं नर्स हूँ (in English)",               correct: ["I'm a nurse", "I am a nurse", "i'm a nurse", "i am a nurse"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज अपना पेशा अंग्रेज़ी में बोलो — आईने के सामने भी ठीक है: 'I'm a ___' या 'I work in ___'। 'a' लगाना मत भूलना।",
    rwenSignoff: "बहुत अच्छे। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You've just been introduced to a new English-speaking colleague at the office coffee machine in your Gurgaon BPO. They turn to you and ask 'So, what do you do?'.",
    rwenRole: "James, 40, a project manager visiting from the London office for a week. Curious, asks one or two follow-up questions about your work.",
    successCriteria: "User answers with 'I'm a [job]' or 'I work in [field]' (with the article 'a' if needed), then handles one follow-up about their day-to-day work.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
