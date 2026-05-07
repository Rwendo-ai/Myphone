import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — धन्यवाद',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! आज सीखते हैं English में धन्यवाद देना। 'Thank you' = 'धन्यवाद' — पर इसका जवाब 'You're welcome' का हिन्दी में सीधा match नहीं है।",
    culturalNote: "हिन्दी में अक्सर हम मुस्कुरा देते हैं या 'अच्छा' कह देते हैं — 'धन्यवाद' formal लगता है, घर में कोई नहीं बोलता। English में 'Thank you' हर छोटी बात पर बोला जाता है — coffee देने पर, दरवाज़ा खोलने पर, even नमक pass करने पर। और जवाब देना ज़रूरी है — 'You're welcome' या 'No problem'। चुप रहना rude लगता है।",
  },

  chunks: [
    {
      id: 'thank_you',
      target: 'Thank you',
      native: 'धन्यवाद',
      literal: 'I-thank you',
      emoji: '🙏',
      phonetic: 'THANK-yoo',
      audioRef: null,
    },
    {
      id: 'youre_welcome',
      target: "You're welcome",
      native: 'कोई बात नहीं',
      literal: 'You-are welcome',
      emoji: '🤗',
      phonetic: 'yor-WEL-kuhm',
      audioRef: null,
    },
    {
      id: 'thanks_a_lot',
      target: 'Thanks a lot',
      native: 'बहुत-बहुत धन्यवाद',
      literal: 'Thanks a lot',
      emoji: '🌟',
      phonetic: 'THANKS-uh-LOT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Acknowledgement chain',
    explanation: "English में thanks का एक pair होता है: एक बोलता है 'Thank you', दूसरा जवाब देता है 'You're welcome'। जवाब न दिया तो लगता है आपने सुना ही नहीं। बड़ी मदद के लिए 'Thanks a lot' या 'Thank you so much' use कीजिए।",
    examples: [
      { target: 'Thank you.',                 native: 'धन्यवाद।' },
      { target: "You're welcome.",            native: 'कोई बात नहीं।' },
      { target: 'Thanks a lot for your help.', native: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'Thank you',      right: 'धन्यवाद' },
        { left: "You're welcome", right: 'कोई बात नहीं' },
        { left: 'Thanks a lot',   right: 'बहुत-बहुत धन्यवाद' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'बहुत-बहुत धन्यवाद',
      correct: ['Thanks a lot', 'thanks a lot', 'Thanks a lot.', 'thanks a lot.', 'Thank you so much'],
    },
    {
      type: 'fill_blank',
      instruction: "खाली जगह भरिए — किसी ने आपको 'Thank you' कहा। आप जवाब दीजिए।",
      sentence: '____ welcome.',
      options: ["You're", 'I am', 'We are'],
      correct: "You're",
      context: "'Thank you' का सबसे common जवाब 'You're welcome' है।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप बड़ी मदद के लिए धन्यवाद दे रहे हैं',
      words: ['Thank', 'you', 'so', 'much'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'बहुत-बहुत धन्यवाद',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'कोई बात नहीं',
      correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आप अपने colleague को मदद के लिए धन्यवाद दे रहे हैं',
      prompt: 'मदद के लिए धन्यवाद',
      correct: ['Thank you for your help', 'Thank you for your help.', 'Thanks for your help', 'Thanks for your help.', 'thank you for your help'],
    },
  ],

  rwenDialogue: {
    intro: "BPO office में आपकी colleague Sarah ने 10 मिनट लगाकर आपकी English email की typos ठीक कर दीं — client को भेजने से पहले। ठीक से धन्यवाद दीजिए।",
    lines: [
      { speaker: 'npc', target: "There you go — that should fix it.", native: 'लीजिए — अब यह ठीक हो गया।' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thank you so much for your help.', native: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद।', correct: true,  feedback: 'बढ़िया — पूरा धन्यवाद, और बताया भी किसके लिए।' },
          { target: 'OK.',                                native: 'ठीक है।',                                correct: false, feedback: "बहुत कम है — उन्होंने मदद की, 'thank you' तो कहना ही चाहिए।" },
          { target: 'Sorry.',                             native: 'माफ़ कीजिए।',                            correct: false, feedback: "आपने कुछ ग़लत नहीं किया — 'thank you' use कीजिए, 'sorry' नहीं।" },
        ],
      },
      { speaker: 'npc', target: "You're welcome — anytime.", native: 'कोई बात नहीं — कभी भी।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! आपने पूरा chain complete किया — 'thank you' से 'you're welcome' तक। यही English की रोज़ की polite चाल है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'Thank you (in English)',     correct: ['Thank you', 'thank you', 'Thank you.', 'thank you.', 'Thanks', 'thanks'] },
      { prompt: "You're welcome (in English)", correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी को English में 'Thank you' कहिए — छोटी सी बात ही सही (waiter को, security guard को)। ध्यान दीजिए कि उन्होंने 'You're welcome' कहा या 'No problem'।",
    rwenSignoff: "मेरा भी आपको धन्यवाद — आज सीखने के लिए। कल मिलते हैं।",
  },

  phase8: {
    scenario: "A colleague at your BPO has just spent 10 minutes helping you fix a typo-filled English document before you email it to a US client. Thank them properly.",
    rwenRole: "Sarah, 32, your colleague who's helpful but busy. Direct, kind, slightly British — she'll downplay the help.",
    successCriteria: "User uses 'thank you' (preferably 'thank you so much' or 'thanks a lot' since the help was substantial), names what they're thanking for ('for your help' / 'for fixing this'), and responds gracefully to her 'You're welcome' / 'No problem'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
