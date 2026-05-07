import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — सुप्रभात',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "सुप्रभात! अंग्रेज़ी में सुबह की greeting है 'Good morning'। यह 12 बजे तक चलती है — फिर 'Good afternoon' शुरू।",
    culturalNote: "हिंदी में 'क्या आप ठीक से सोए?' एक genuine सवाल है — असली जवाब चाहिए। अंग्रेज़ी में 'Did you sleep well?' इतना नहीं पूछा जाता; यह बहुत निजी मानी जाती है। ज़्यादातर लोग सिर्फ़ 'Good morning' पर रुक जाते हैं।",
  },

  chunks: [
    {
      id: 'good_morning',
      target: 'Good morning',
      native: 'सुप्रभात (Suprabhaat)',
      literal: undefined,
      emoji: '🌅',
      phonetic: 'good-MOR-ning',
      audioRef: null,
    },
    {
      id: 'did_you_sleep_well',
      target: 'Did you sleep well?',
      native: 'क्या आप अच्छे से सोए? (Kya aap acche se soye?)',
      literal: 'Did you sleep well?',
      emoji: '😴',
      phonetic: 'did-yoo-SLEEP-well',
      audioRef: null,
    },
    {
      id: 'i_slept_well',
      target: 'I slept well',
      native: 'मैं अच्छे से सोया (Main acche se soya)',
      literal: 'I slept well',
      emoji: '✨',
      phonetic: 'aye-SLEPT-well',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greeting',
    explanation: "अंग्रेज़ी में greeting समय के साथ बदलती है। 'Good morning' — सुबह से 12 बजे तक। 'Did you sleep well?' का इस्तेमाल आम तौर पर परिवार में या होस्ट के साथ होता है — colleague से नहीं पूछा जाता। काम पर सिर्फ़ 'Good morning' काफ़ी है।",
    examples: [
      { target: 'Good morning',           native: 'सुप्रभात' },
      { target: 'Did you sleep well?',    native: 'क्या आप अच्छे से सोए?' },
      { target: 'I slept well, thanks',   native: 'मैं अच्छे से सोया, धन्यवाद' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मिलाएँ',
      pairs: [
        { left: 'Good morning',         right: 'सुप्रभात' },
        { left: 'Did you sleep well?',  right: 'क्या आप अच्छे से सोए?' },
        { left: 'I slept well',         right: 'मैं अच्छे से सोया' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'सुप्रभात',
      correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं अच्छे से सोया',
      correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'],
    },
    {
      type: 'fill_blank',
      instruction: 'सुबह की greeting पूरी करें',
      sentence: 'Good ____, how did you sleep?',
      options: ['morning', 'evening', 'night'],
      correct: 'morning',
      context: 'समय 8am — आप होस्ट परिवार के साथ नाश्ते पर हैं।',
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाएँ',
      words: ['Did', 'you', 'sleep', 'well'],
      correct: ['Did', 'you', 'sleep', 'well'],
      translation: 'क्या आप अच्छे से सोए?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'क्या आप अच्छे से सोए?',
      correct: ['Did you sleep well?', 'did you sleep well?', 'Did you sleep well', 'did you sleep well'],
    },
  ],

  rwenDialogue: {
    intro: 'मुंबई में IT कंपनी का ऑफिस — सुबह 9 बजे। आप pantry में coffee बना रहे हैं, सीनियर colleague आती हैं।',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: 'सुप्रभात! आप अच्छे से सोए?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good morning. I slept well, thanks.", native: 'सुप्रभात। मैं अच्छे से सोया, धन्यवाद।', correct: true,  feedback: "बढ़िया — आपने greeting वापस दी और सवाल का जवाब भी।" },
          { target: 'Hi.',                                  native: 'हाय।',                                       correct: false, feedback: "थोड़ा छोटा है — office में 'Good morning' ज़्यादा proper है।" },
          { target: 'Bye!',                                 native: 'बाय!',                                        correct: false, feedback: "यह तो अलविदा है — आप अभी आए हैं, जा नहीं रहे।" },
        ],
      },
      { speaker: 'npc', target: "Glad to hear it.", native: 'अच्छा लगा सुनकर।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! Office में morning greeting professional और गर्मजोशी से भरी होनी चाहिए।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Good morning (अंग्रेज़ी में)', correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'] },
      { prompt: 'I slept well (अंग्रेज़ी में)', correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल सुबह किसी से 'Good morning' बोलें — परिवार में, society में, watchman से। English में।",
    rwenSignoff: "Take care — कल मिलते हैं।",
  },

  phase8: {
    scenario: "आप दुबई के एक hotel में नई job के लिए पहुँचे हैं — front desk shift का first day। 7am, और आपका Filipino supervisor pantry में coffee बना रहा है। वह English में greet करेगा और रात की नींद के बारे में पूछेगा (Gulf hospitality में यह common है)।",
    rwenRole: "Maria — front desk supervisor, ~40, Manila से, 8 साल से Dubai में। Warm, professional, Hindi नहीं समझती — पूरी बातचीत English में।",
    successCriteria: "User opens with 'Good morning' (NOT 'Hi' which is too casual for first work day, NOT 'Namaste' which she won't recognise), responds 'I slept well, thanks' अगर पूछा जाए, और formal-friendly tone रखता है — neither stiff nor over-casual.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
