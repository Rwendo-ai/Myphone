import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — अलविदा',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अलविदा कहने के कई तरीक़े हैं अंग्रेज़ी में। 'Goodbye' formal है। 'See you tomorrow' — कल फिर मिलने पर। 'Take care' — परवाह दिखाने के लिए।",
    culturalNote: "हिंदी में 'फिर मिलते हैं' एक सच्चा वादा है — आप सच में मिलने की उम्मीद रखते हैं। अंग्रेज़ी का 'See you later' इतना गहरा नहीं — कई बार लोग बस politeness में बोलते हैं। 'Take care' एक soft, caring touch देता है — दोस्तों, परिवार, और close colleagues के साथ अच्छा।",
  },

  chunks: [
    {
      id: 'goodbye',
      target: 'Goodbye',
      native: 'अलविदा (Alvida)',
      literal: undefined,
      emoji: '👋',
      phonetic: 'good-BAI',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow',
      native: 'कल मिलते हैं (Kal milte hain)',
      literal: 'We will see-you tomorrow',
      emoji: '📅',
      phonetic: 'SEE-yoo-tuh-MOR-oh',
      audioRef: null,
    },
    {
      id: 'take_care',
      target: 'Take care',
      native: 'अपना ख्याल रखना (Apna khyaal rakhna)',
      literal: 'Take care of yourself',
      emoji: '💚',
      phonetic: 'tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative goodbye',
    explanation: "'Take care' एक imperative है — आप किसी को बता रहे हैं 'अपना ख्याल रखना'। यह perfect closing है — formal नहीं, ठंडा भी नहीं। 'See you tomorrow' तब बोलें जब सच में कल मिलेंगे (office colleagues, classmates)। 'Goodbye' सबसे formal — अनजान या business contacts के साथ।",
    examples: [
      { target: 'Goodbye',          native: 'अलविदा' },
      { target: 'See you tomorrow', native: 'कल मिलते हैं' },
      { target: 'Take care',        native: 'अपना ख्याल रखना' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अलविदा कहने के तरीक़े मिलाएँ',
      pairs: [
        { left: 'Goodbye',           right: 'अलविदा' },
        { left: 'See you tomorrow',  right: 'कल मिलते हैं' },
        { left: 'Take care',         right: 'अपना ख्याल रखना' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'कल मिलते हैं',
      correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'अपना ख्याल रखना',
      correct: ['Take care', 'take care', 'Take care.', 'take care.'],
    },
    {
      type: 'fill_blank',
      instruction: 'पूरा करें',
      sentence: '____ you tomorrow!',
      options: ['See', 'Meet', 'Know'],
      correct: 'See',
      context: 'Office से निकलते वक़्त — कल फिर मिलेंगे।',
    },
    {
      type: 'build_sentence',
      instruction: 'क्रम में लगाएँ',
      words: ['Goodbye', 'and', 'take', 'care'],
      correct: ['Goodbye', 'and', 'take', 'care'],
      translation: 'अलविदा, अपना ख्याल रखना',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "5pm बज गया, आप office से निकल रहे हैं। Colleagues को क्या कहेंगे?",
      options: [
        { text: 'Goodbye! See you tomorrow.', correct: true },
        { text: 'Hi! How are you?',           correct: false },
        { text: 'Good morning.',              correct: false },
      ],
      explanation: "जाते वक़्त 'Goodbye' और 'See you tomorrow' सही है — greeting नहीं, farewell चाहिए।",
    },
  ],

  rwenDialogue: {
    intro: 'शाम 6 बजे। Bengaluru office से निकल रहे हैं — desk-mate बगल में bag pack कर रही है।',
    lines: [
      { speaker: 'npc', target: "Hey, you're heading out? Goodbye!", native: 'अरे, जा रहे हो? अलविदा!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Goodbye! See you tomorrow. Take care.', native: 'अलविदा! कल मिलते हैं। अपना ख्याल रखना।', correct: true,  feedback: "बहुत बढ़िया — तीनों farewell phrases एक साथ, बिल्कुल natural।" },
          { target: 'Good morning!',                          native: 'सुप्रभात!',                                  correct: false, feedback: "जा रहे हैं — greeting नहीं, farewell चाहिए।" },
          { target: "What's your name?",                      native: 'आपका नाम क्या है?',                           correct: false, feedback: "रोज़ साथ काम करते हैं — नाम पूछना अजीब लगेगा।" },
        ],
      },
      { speaker: 'npc', target: 'Take care! See you tomorrow.', native: 'अपना ख्याल रखना! कल मिलते हैं।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! 'Take care' से आपने warmth दी — सिर्फ़ 'Bye' से ज़्यादा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Goodbye (अंग्रेज़ी में)',           correct: ['Goodbye', 'goodbye', 'Goodbye.', 'goodbye.'] },
      { prompt: 'See you tomorrow (अंग्रेज़ी में)', correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज शाम घर से निकलते वक़्त किसी से English में अलविदा कहें — 'Goodbye' या 'Take care'। बच्चों, watchman, या colleague को।",
    rwenSignoff: "अपना ख्याल रखना। कल मिलते हैं।",
  },

  phase8: {
    scenario: "बेंगलुरु के Whitefield IT park में शाम 6:15 बजे। आप desk से उठ रहे हैं — laptop bag में है, बगल वाला colleague अभी काम कर रहा है पर आपको देखकर मुस्कुराता है। 30-second exchange — proper farewell।",
    rwenRole: "Anita — आपकी desk-mate, ~28, Chennai से, English में बहुत comfortable, casual-professional tone। रोज़ साथ काम करती है, अच्छी दोस्त बन रही है।",
    successCriteria: "User uses 'Goodbye' या 'See you tomorrow', adds 'Take care' या similar warm closing, और casual-professional register रखता है (NOT stiff-formal 'It was a pleasure', NOT meeting-a-stranger's level)। 'Good morning' / 'How are you' avoid करता है क्योंकि यह greeting है, farewell नहीं।",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
