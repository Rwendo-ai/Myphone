import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: 'Hungry & Thirsty — भूख और प्यास',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 7 — खाना। शुरू करें भूख-प्यास से। हिंदी में 'मुझे भूख लगी है', 'मुझे प्यास लगी है' — मुझे को subject बनाते हैं। English में 'I am hungry', 'I am thirsty' — 'I' subject।",
    culturalNote: "हिंदी में हम 'मुझे भूख लगी' कहते हैं — भूख क्रिया है, मैं विषय हूँ जिस पर असर है। English ने इसे simple बना दिया: 'I am hungry' — आप hungry हैं, बस। पर office meeting में 'I'm hungry' खुलकर बोलना अजीब लगता है — manager आधी बात रोक देगा। बेहतर: 'I could eat — anyone else hungry?' (मैं खा सकता हूँ — कोई और भूखा है?) — यह softer है, group में decision शामिल करता है। Indian office में हम 'lunch break karna chahiye' suggest करते — same बात English में।",
  },

  chunks: [
    {
      id: 'im_hungry',
      target: "I'm hungry",
      native: 'मुझे भूख लगी है',
      literal: 'Mujhe bhookh lagi hai',
      emoji: '🍴',
      phonetic: 'aym-HUN-gree',
      audioRef: null,
    },
    {
      id: 'im_thirsty',
      target: "I'm thirsty",
      native: 'मुझे प्यास लगी है',
      literal: 'Mujhe pyaas lagi hai',
      emoji: '💧',
      phonetic: 'aym-THUR-stee',
      audioRef: null,
    },
    {
      id: 'i_want_water',
      target: 'I want water',
      native: 'मुझे पानी चाहिए',
      literal: 'Mujhe paani chahiye',
      emoji: '🥤',
      phonetic: 'ay-WONT-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stative "I am" with feelings',
    explanation: "अंग्रेज़ी में भूख-प्यास 'I am' से जोड़ी हैं — आप 'are' hungry, you 'don't have' hunger। हिंदी का 'मुझे भूख लगी है' word-by-word translate नहीं होता। Pattern: 'I am hungry' = ठीक, 'I have hunger' = अजीब/ग़लत।",
    examples: [
      { target: "I'm hungry",  native: 'मुझे भूख लगी है' },
      { target: "I'm thirsty", native: 'मुझे प्यास लगी है' },
      { target: "I'm tired",   native: 'मैं थक गया हूँ' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: "I'm hungry",   right: 'मुझे भूख लगी' },
        { left: "I'm thirsty",  right: 'मुझे प्यास लगी' },
        { left: 'I want water', right: 'मुझे पानी चाहिए' },
      ],
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में लिखें — lunch break पर दोस्त को",
      prompt: 'मुझे भूख लगी है',
      correct: ["I'm hungry", "I am hungry", "i'm hungry", "I'm hungry."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — पानी polite तरीक़े से',
      prompt: 'मुझे पानी चाहिए, please।',
      correct: [
        'I want water, please.',
        'I want water please.',
        "I'd like water, please.",
        'I would like water, please.',
        'i want water, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — पूरे दिन पानी नहीं पिया',
      sentence: "I'm ____. Could I have some water?",
      options: ['hungry', 'thirsty', 'tired'],
      correct: 'thirsty',
      context: "प्यास = thirsty, भूख = hungry, थकान = tired।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्द क्रम में रखें — भूख की बात',
      words: ['hungry', 'I', 'am'],
      correct: ['I', 'am', 'hungry'],
      translation: 'मुझे भूख लगी है',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "Office meeting में जा रहे, बहुत भूखे नहीं दिखाना चाहते। क्या कहेंगे?",
      options: [
        { text: "I could eat — anyone else hungry?", correct: true },
        { text: "I'm so hungry, give me food!",       correct: false },
        { text: "Hungry.",                            correct: false },
      ],
      explanation: "Office में soft approach: 'I could eat' — group को include करता है। 'Give me food' rude।",
    },
  ],

  rwenDialogue: {
    intro: 'BPO ऑफ़िस में lunch break पर हैं। US-based manager Skype पर पूछ रहा है।',
    lines: [
      { speaker: 'npc', target: "Hey, fancy grabbing some lunch?", native: 'अरे, lunch साथ करें?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes please, I'm hungry.",  native: 'हाँ please, मुझे भूख लगी है।', correct: true,  feedback: 'बढ़िया — clear जवाब, polite।' },
          { target: "Hungry yes.",                 native: 'भूख हाँ।',                   correct: false, feedback: "'I am' छूट गया — \"I'm hungry\" बोलें।" },
          { target: "I have hunger.",              native: 'मेरे पास भूख है।',         correct: false, feedback: "हिंदी का literal — English में 'I'm hungry' है।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'I'm' — 'I have' नहीं। यह English की अलग चाल है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: "I'm hungry (अंग्रेज़ी में)",  correct: ["I'm hungry", "I am hungry", "i'm hungry", "I'm hungry."] },
      { prompt: 'I want water (अंग्रेज़ी में)', correct: ['I want water', 'I want water.', "I'd like water", 'i want water'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज जब भूख या प्यास लगे, English में बोलें — चाहे ख़ुद से ही। 'I'm hungry' या 'I'm thirsty'। 'I am' पर ध्यान दें।",
    rwenSignoff: "कल — common foods।",
  },

  phase8: {
    scenario: "It's 1pm at your Bangalore IT office. The lunch meeting has run over and your English-speaking manager hasn't noticed people are flagging. Politely raise that you'd like to break for food.",
    rwenRole: "Sarah, 42, your English-speaking team lead. Friendly but focused. She'll respond well if you raise it lightly, awkwardly if you bark a complaint.",
    successCriteria: "User uses 'I'm hungry' or a softened form ('I could eat', 'shall we break for lunch?'), keeps it polite, doesn't translate 'I have hunger' literally.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
