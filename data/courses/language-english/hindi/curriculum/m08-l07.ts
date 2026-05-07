import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Evening routine — Coming home',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "शाम को 'I come home' (कहीं और से आए हैं घर) — 'go home' तब जब आप कहीं और हैं। 'Cook dinner' और 'watch TV' — आराम के verbs।",
    culturalNote: "हिंदी में 'मैं घर जाता हूँ' और 'मैं घर आता हूँ' — दोनों चलते। English में: 'I come home' (अब घर पर हूँ — pa-perspective from home)। 'I'm going home' (अभी रास्ते में, घर नहीं पहुँचा)। पुरानी ग़लती: 'I go home in evening' — सही है पर 'I come home in the evening' ज़्यादा natural जब आप अभी घर पर हो। 'See TV' ग़लत — 'WATCH TV' (देर तक focus)। 'See' एक झलक के लिए।",
  },

  chunks: [
    {
      id: 'i_come_home',
      target: 'I come home at 6.',
      native: 'मैं 6 बजे घर आता हूँ।',
      literal: 'Main 6 baje ghar aata hoon',
      emoji: '🏡',
      phonetic: 'ay-KUM-HOHM-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_cook_dinner',
      target: 'I cook dinner.',
      native: 'मैं रात का खाना बनाता हूँ।',
      literal: 'Main raat ka khaana banaata hoon',
      emoji: '🍲',
      phonetic: 'ay-KUUK-DIN-er',
      audioRef: null,
    },
    {
      id: 'i_watch_tv',
      target: 'I watch TV.',
      native: 'मैं TV देखता हूँ।',
      literal: 'Main TV dekhta hoon',
      emoji: '📺',
      phonetic: 'ay-WOCH-TEE-VEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Evening verbs — Come / cook / watch',
    explanation: "COME HOME (घर आना — 'to' नहीं, 'home' adverb है)। COOK (पकाना — चूल्हा, oven)। WATCH (देर तक देखना — TV, film, news)। 'See TV' ग़लत — झलक के लिए use होता।",
    examples: [
      { target: 'I come home at 6.',     native: 'मैं 6 बजे घर आता हूँ।' },
      { target: 'I cook dinner.',        native: 'मैं रात का खाना बनाता हूँ।' },
      { target: 'I watch TV.',           native: 'मैं TV देखता हूँ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I come home',  right: 'मैं घर आता हूँ' },
        { left: 'I cook dinner', right: 'खाना बनाता हूँ' },
        { left: 'I watch TV',   right: 'TV देखता हूँ' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "सही verb चुनें",
      sentence: 'I _____ dinner for my family every evening.',
      options: ['cook', 'do', 'make'],
      correct: 'cook',
      context: "'Cook' पकाने के लिए (gas/oven)। 'Make dinner' भी चलता पर 'cook' ज़्यादा natural।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं 6 बजे घर आता हूँ।',
      correct: ['I come home at 6.', 'I come home at 6', 'I get home at 6.', 'I get home at 6', 'i come home at 6.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं TV देखता हूँ।',
      correct: ['I watch TV.', 'I watch TV', 'i watch tv.'],
    },
    {
      type: 'build_sentence',
      instruction: 'घर आकर खाना बनाते',
      words: ['cook', 'come', 'home', 'I', 'I', 'and', 'dinner.'],
      correct: ['I', 'come', 'home', 'and', 'I', 'cook', 'dinner.'],
      translation: 'मैं घर आता हूँ और खाना बनाता हूँ',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'In the evening, I _____ a film with my partner.',
      options: [
        { text: 'watch', correct: true },
        { text: 'see', correct: false },
        { text: 'look', correct: false },
      ],
      explanation: "Films, TV, sport के लिए 'watch'। 'See' = झलक। 'Look' = देखना (एक बार)।",
    },
  ],

  rwenDialogue: {
    intro: "Video call पर London के दोस्त से। वो evening routine पूछ रही।",
    lines: [
      { speaker: 'npc', target: "What do you usually do in the evenings?", native: 'शाम को आप क्या करते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come home around 6, cook dinner, and watch TV until 10.", native: '6 के आसपास घर आता हूँ, खाना बनाता हूँ, और 10 तक TV देखता हूँ।', correct: true, feedback: "बढ़िया — तीन verbs perfect, 'come home' सही use।" },
          { target: "I go home, do dinner, see TV.", native: 'घर जाता, खाना करता, TV देखता।', correct: false, feedback: "तीन ग़लतियाँ: (1) 'come home' (आप घर पर अब हैं), (2) 'cook/make dinner' (do नहीं), (3) 'watch TV' (see नहीं)।" },
        ],
      },
      { speaker: 'npc', target: "Sounds peaceful! Do you cook every night?", native: 'अच्छा! रोज़ खाना बनाते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Most nights, yes. Sometimes I order food.", native: 'ज़्यादातर रात, हाँ। कभी order करता हूँ।', correct: true, feedback: "अच्छा — 'most nights' natural English।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Come home', 'cook dinner', 'watch TV' — शाम English में।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I come home at 6 (अंग्रेज़ी में)', correct: ['I come home at 6', 'I come home at 6.', 'I get home at 6.', 'i come home at 6.'] },
      { prompt: 'I cook dinner (अंग्रेज़ी में)', correct: ['I cook dinner', 'I cook dinner.', 'I make dinner.', 'i cook dinner.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज शाम घर आने पर ज़ोर से बोलें: 'I come home', 'I cook dinner' (अगर पकाया), 'I watch TV' (अगर देखा)। शब्द आदत बन जाएँगे।",
    rwenSignoff: "कल — past tense ('Yesterday I went...')।",
  },

  phase8: {
    scenario: "Video call with a Cape Town friend who moved to London 3 years ago. Comparing evening routines.",
    rwenRole: "Tendai, 33, lives in London. Asks about your evening routine.",
    successCriteria: "Student describes evening routine — 'come home' (not 'go home'), 'cook dinner' or 'make dinner', 'watch TV' (not 'see TV'). Conversation flows naturally.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
