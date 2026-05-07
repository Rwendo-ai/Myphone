import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — हाँ और नहीं',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! दो छोटे शब्द — पर बहुत ज़रूरी: 'Yes' और 'No'. और जब पक्का नहीं — 'Maybe'.",
    culturalNote: "हिन्दी में 'हाँ' अक्सर polite filler बन जाता है — 'हाँ-हाँ' का मतलब हमेशा agree करना नहीं होता, कभी-कभी बस सुन रहे हैं। English में 'Yes' commitment है — 'Yes, I want it' / 'Yes, I'll do it'। बिना सोचे 'yes' मत कहिए, खासकर official forms या client calls में। पक्का न हो तो 'Maybe' या 'I'm not sure' कहिए — यह honesty मानी जाती है, कमज़ोरी नहीं।",
  },

  chunks: [
    {
      id: 'yes',
      target: 'Yes',
      native: 'हाँ',
      literal: undefined,
      emoji: '✅',
      phonetic: 'YES',
      audioRef: null,
    },
    {
      id: 'no',
      target: 'No',
      native: 'नहीं',
      literal: undefined,
      emoji: '❌',
      phonetic: 'NOH',
      audioRef: null,
    },
    {
      id: 'maybe',
      target: 'Maybe',
      native: 'शायद',
      literal: 'Maybe / Perhaps',
      emoji: '🤔',
      phonetic: 'MAY-bee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Affirmation / negation',
    explanation: "English के ज़्यादातर सवालों का जवाब 'Yes', 'No', या 'Maybe' से शुरू होता है। पक्का न हो तो ग़लत 'yes' से बेहतर है 'Maybe'। पूरा जवाब और भी अच्छा: 'Yes, I do' / 'No, I don't'.",
    examples: [
      { target: 'Yes, I do.',    native: 'हाँ, मैं करता हूँ।' },
      { target: "No, I don't.", native: 'नहीं, मैं नहीं करता।' },
      { target: "Maybe later.",   native: 'शायद बाद में।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Yes',    right: 'हाँ' },
        { left: 'No',     right: 'नहीं' },
        { left: 'Maybe',  right: 'शायद' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — पक्का नहीं हैं, पर मना भी नहीं कर सकते',
      prompt: 'शायद',
      correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'],
    },
    {
      type: 'fill_blank',
      instruction: "खाली जगह भरिए: 'Do you speak English?' / '____, I do.'",
      sentence: '____, I do.',
      options: ['Yes', 'No', 'Maybe'],
      correct: 'Yes',
      context: "लम्बा जवाब 'Yes' या 'No' से शुरू होकर 'I do' / 'I don't' से ख़त्म होता है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप politely मना कर रहे हैं',
      words: ['No', 'thank', 'you'],
      correct: ['No', 'thank', 'you'],
      translation: 'नहीं, धन्यवाद',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'हाँ, मैं करता हूँ',
      correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — politely मना कीजिए',
      prompt: 'नहीं, धन्यवाद',
      correct: ['No, thank you', 'No, thank you.', 'no, thank you', 'No thanks', 'No, thanks'],
    },
  ],

  rwenDialogue: {
    intro: "Passport office में clerk आपको English form भरने में मदद कर रहा है। वो yes/no सवाल पूछेगा।",
    lines: [
      { speaker: 'npc', target: "Are you over 18?", native: 'क्या आप 18 साल से ऊपर हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I am.',     native: 'हाँ, मैं हूँ।', correct: true,  feedback: 'बढ़िया — पूरा जवाब, सिर्फ़ "yes" नहीं।' },
          { target: 'Maybe.',          native: 'शायद।',              correct: false, feedback: "'Maybe' यहाँ नहीं चलेगा — आपको अपनी उम्र पता है।" },
          { target: "I don't know.",  native: 'मुझे नहीं पता।',          correct: false, feedback: 'अपनी उम्र तो पता होगी — सही जवाब दीजिए।' },
        ],
      },
      { speaker: 'npc', target: "Great. Do you have a passport?", native: 'बहुत अच्छा। क्या आपके पास passport है?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! 'Yes, I am' / 'No, I'm not' जैसे पूरे जवाब बताते हैं कि आप समझ रहे हैं — बस 'Yes/No' से ज़्यादा भरोसेमंद लगते हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Yes, I do (in English)', correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'] },
      { prompt: 'Maybe (in English)',     correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज ध्यान दीजिए — कब-कब आपको English में 'Yes' या 'No' सुनाई देता है (TV पर, phone पर, बातचीत में)। हो सके तो जवाब भी दीजिए।",
    rwenSignoff: "दो छोटे शब्द बहुत कुछ बंद-खोल देते हैं। मिलते हैं कल।",
  },

  phase8: {
    scenario: "A bilingual helper at the passport office is helping you fill out an English-language passport renewal form. They'll ask you a series of yes/no questions about your details. Answer accurately.",
    rwenRole: "Mr. Banda, 50, friendly civil servant. Methodical, asks each form question clearly in English. Will follow up if your answer is unclear.",
    successCriteria: "User answers with full forms ('Yes, I am' / 'No, I'm not' / 'Yes, I do') instead of bare 'yes/no'. Uses 'Maybe' or 'I'm not sure' when genuinely unsure rather than guessing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
