import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Body Parts — शरीर के अंग',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Body parts: 'Head' (सिर), 'stomach' (पेट), 'arm' (बाजू)। 'My ___ hurts' = हिंदी 'मेरे ___ में दर्द' का परfect mirror।",
    culturalNote: "हिंदी में 'मेरे सिर में दर्द' / 'मेरे पेट में दर्द' — 'में दर्द' से आसान। English में 'My head hurts' / 'My stomach hurts' — साफ़, simple। Physiotherapist के पास जब आप दर्द दिखाते हो, इशारा से चलता पर शब्द से specific। 'My right arm hurts' (दाएँ बाजू में दर्द)। Indian Ayurveda और massage culture से शरीर का जो awareness है, वो English vocab से जोड़ें।",
  },

  chunks: [
    {
      id: 'head',
      target: 'Head',
      native: 'सिर',
      literal: 'Sir',
      emoji: '🗣️',
      phonetic: 'HED',
      audioRef: null,
    },
    {
      id: 'stomach',
      target: 'Stomach',
      native: 'पेट',
      literal: 'Pet',
      emoji: '🫃',
      phonetic: 'STUH-muk',
      audioRef: null,
    },
    {
      id: 'arm',
      target: 'Arm',
      native: 'बाजू',
      literal: 'Baazu',
      emoji: '💪',
      phonetic: 'AHRM',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body nouns + "My ___ hurts"',
    explanation: "'My + body part + hurts' = दर्द बताने का pattern। Singular पर 's' नहीं ('hurts')। 'Right' / 'Left' पहले: 'My right arm hurts'। 'It hurts here' (यहाँ दर्द है) + इशारा।",
    examples: [
      { target: 'My head hurts.',                                native: 'मेरे सिर में दर्द है।' },
      { target: 'My stomach hurts after I eat.',                  native: 'खाने के बाद पेट में दर्द होता।' },
      { target: 'My right arm hurts when I lift.',                native: 'सामान उठाने पर दाएँ बाजू में दर्द।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Body parts मिलाएँ',
      pairs: [
        { left: 'Head',     right: 'सिर' },
        { left: 'Stomach',  right: 'पेट' },
        { left: 'Arm',      right: 'बाजू' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरे सिर में दर्द है।',
      correct: ['My head hurts.', 'my head hurts.', 'My head hurts'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — physio के पास',
      prompt: 'सामान उठाने पर दाएँ बाजू में दर्द।',
      correct: ['My right arm hurts when I lift.', 'My right arm hurts when I lift things.', 'My right arm hurts when lifting.', 'my right arm hurts when i lift.'],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'My stomach hurts after I eat'",
      words: ['I', 'My', 'eat.', 'after', 'stomach', 'hurts'],
      correct: ['My', 'stomach', 'hurts', 'after', 'I', 'eat.'],
      translation: 'खाने के बाद पेट में दर्द',
    },
    {
      type: 'fill_blank',
      instruction: 'इशारे से दिखाते',
      sentence: "It hurts _____ — right at the top of my arm.",
      options: ['here', 'this', 'where'],
      correct: 'here',
      context: "'It hurts here' = यहाँ दर्द। इशारा + वाक्य।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "Manchester physio पर। दाएँ कंधे में दर्द।",
      options: [
        { text: "It hurts here — my right shoulder. It started two weeks ago when I lifted a heavy box.", correct: true },
        { text: "Pain.",                                                                                            correct: false },
        { text: "Mera kandha dukhta hai.",                                                                          correct: false },
      ],
      explanation: "Physio को चाहिए: location, body part, cause, duration। पूरा वाक्य ज़रूरी।",
    },
  ],

  rwenDialogue: {
    intro: "Manchester physio पर। पिछले हफ़्ते भारी box उठाने से दाएँ बाजू में दर्द।",
    lines: [
      { speaker: 'npc', target: "Hi, come in. So — where does it hurt? Show me.", native: 'नमस्ते। दर्द कहाँ है? दिखाइए।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It hurts here — right at the top of my arm. My right arm.", native: 'यहाँ दर्द है — बाजू के ऊपर। दाएँ बाजू।', correct: true, feedback: "बढ़िया — 'it hurts here' (इशारा), location, side।" },
          { target: "Pain here.", native: 'दर्द यहाँ।', correct: false, feedback: "थोड़ा detail जोड़ें: 'It hurts here — my right arm'।" },
          { target: "Yahaan.", native: 'यहाँ।', correct: false, feedback: "हिंदी — 'It hurts here' use करें।" },
        ],
      },
      { speaker: 'npc', target: "When did this start? And does it hurt all day, or only sometimes?", native: 'कब से? पूरा दिन दर्द या कभी?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It started two weeks ago when I lifted a heavy box. My arm hurts most when I reach up.", native: 'दो हफ़्ते पहले भारी box उठाने पर शुरू। ऊपर पहुँचने पर ज़्यादा।', correct: true, feedback: "बढ़िया — when, why, when worse — पूरी picture।" },
          { target: "Two weeks. Heavy box.", native: 'दो हफ़्ते। भारी box।', correct: false, feedback: "Sentence बनाएँ।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Body parts + 'It hurts here' = physio समझ जाता।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My head hurts (अंग्रेज़ी में)',     correct: ['My head hurts', 'my head hurts', 'My head hurts.', 'my head hurts.'] },
      { prompt: 'It hurts here (अंग्रेज़ी में)',     correct: ['It hurts here', 'it hurts here', 'It hurts here.', 'it hurts here.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आईने के सामने पाँच body parts पर इशारा करें — head, arm, stomach, leg, back — English में बोलें: 'This is my head. This is my arm.'",
    rwenSignoff: "कल — doctor follow-up।",
  },

  phase8: {
    scenario: "You're at a Manchester physiotherapist. Your right shoulder/arm has been hurting for two weeks since lifting a heavy box. The physio asks where, when it started, and what makes it worse. Point and name body parts, describe the trigger.",
    rwenRole: "Liam, 35, NHS physio. Hands-on, asks lots of 'where exactly' and 'when does it hurt most' questions. Will gently move your arm.",
    successCriteria: "User uses 'It hurts here' and at least two body part names ('arm', 'shoulder', 'back', 'neck'). Uses 'My ___ hurts when I ___' structure. Mentions when it started ('two weeks ago', 'last Saturday'). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
